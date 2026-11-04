// RouteToAbroad AI counselor — ported from v1 unchanged (system prompt + streaming proxy).
// Deployed as a Netlify Function v2; requires ANTHROPIC_API_KEY and ANTHROPIC_API_URL env vars.

const SYSTEM_PROMPT = `You are the RouteToAbroad AI Assistant — a friendly, knowledgeable guide for a company that helps people study, travel, and trade across East Asia.

## What RouteToAbroad does

- **Education**: Study in China — university placement, CSC & other scholarships, MBBS, Engineering, Language programs, visa processing, on-ground support.
- **Tourism**: Curated travel in China, Japan, South Korea — cultural tours, business delegations, visa concierge, premium stays, 24/7 local support.
- **Trade**: India-China cross-border trade — product sourcing, quality control, customs clearance, sea/air freight logistics, strategic advisory.

Contact: info@routetoabroad.com | India: +91 96330 61109 | Offices in New Delhi & Guangzhou.

## How to respond

- **Match the user's vibe.** If they're casual, be casual. If they're formal, be professional. If they're excited, match the energy.
- **Be concise.** Answer directly — don't pad responses with filler. Short questions get short answers.
- **Use bullet points and structure** only when it genuinely helps (lists of options, step-by-step processes). For simple questions, just answer naturally.
- **Don't over-sell.** Be genuinely helpful, not salesy. If the answer is "you should talk to the team for that," say so plainly.
- **Answer in the language of the user's first message.** If the user writes in Chinese, reply in Chinese. If in Arabic, reply in Arabic. Default to the interface language if the user's message is in English.
- **Never promise guaranteed admission, scholarships, or visas** — universities, committees and embassies decide. Be honest about what the process can and cannot do.
- **When relevant**, nudge toward booking a free consultation or contacting the team — but only when it flows naturally, never forced.
`;

const MODEL = 'claude-opus-4-6-20250610';

type ChatMessage = { role: string; content: string };

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const apiUrl = process.env.ANTHROPIC_API_URL;

  if (!apiKey || !apiUrl) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { messages?: ChatMessage[]; locale?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
    return new Response(JSON.stringify({ error: 'Missing messages array' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // i18n: pass the interface locale to the model as a system hint so a first
  // message in the UI language gets a first reply in the same language even
  // if the user's first turn is in English. `body.locale` is client-sent, so
  // it is allow-listed against the known languages (never interpolated raw
  // into the system prompt) and English gets no hint (it's the default).
  // Object.hasOwn keeps inherited keys (e.g. "toString") from passing.
  const LOCALE_NAMES: Record<string, string> = {
    zh: 'Chinese (Simplified)',
    fr: 'French',
    ar: 'Arabic',
    es: 'Spanish',
    de: 'German',
    ja: 'Japanese',
    pt: 'Portuguese',
    hi: 'Hindi',
  };
  const requestedLocale = typeof body.locale === 'string' ? body.locale : '';
  const localeName = Object.hasOwn(LOCALE_NAMES, requestedLocale)
    ? LOCALE_NAMES[requestedLocale]
    : undefined;
  const localeHint = localeName
    ? `The user's interface language is: ${localeName}. If the user writes in English, reply in ${localeName}.\n\n`
    : '';

  // Keep context bounded while preserving a user-first, alternating turn
  // order — a raw slice can start on an assistant turn, which the
  // Messages API rejects. Malformed entries are dropped (a null entry would
  // otherwise throw on .role) and leading non-user turns are removed.
  // Per-message and total character caps bound the billed input size: this
  // is a paid endpoint reachable by anyone, so a client must not be able to
  // POST megabytes of context per request.
  const MAX_MESSAGE_CHARS = 4_000;
  const MAX_TOTAL_CHARS = 24_000;
  const messages = body.messages
    .filter(
      (m: unknown): m is { role: string; content: string } =>
        !!m &&
        typeof m === 'object' &&
        ((m as { role?: unknown }).role === 'user' || (m as { role?: unknown }).role === 'assistant') &&
        typeof (m as { content?: unknown }).content === 'string'
    )
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));
  while (messages.length > 0 && messages[0].role !== 'user') {
    messages.shift();
  }
  while (
    messages.length > 1 &&
    messages.reduce((sum, m) => sum + m.content.length, 0) > MAX_TOTAL_CHARS
  ) {
    messages.shift();
  }
  while (messages.length > 0 && messages[0].role !== 'user') {
    messages.shift();
  }
  if (messages.length === 0) {
    return new Response(JSON.stringify({ error: 'No usable messages' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const baseUrl = apiUrl.replace(/\/+$/, '');

  let upstream: Response;
  try {
    upstream = await fetch(`${baseUrl}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system: SYSTEM_PROMPT + localeHint,
        messages,
        stream: true,
      }),
      // A hung upstream must not hold the function until the platform limit.
      signal: AbortSignal.timeout(30_000),
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Upstream unreachable' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!upstream.ok || !upstream.body) {
    // Log server-side, return a generic error: provider error bodies would
    // disclose account/quota state and fingerprint the provider to visitors.
    console.error(`chat: upstream ${upstream.status}`);
    return new Response(JSON.stringify({ error: 'Upstream error' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(upstream.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
};

export const config = { path: '/api/chat' };
