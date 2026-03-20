import type { Context } from '@netlify/functions';

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
- **Answer in the same language the user writes in.**
- **When relevant**, nudge toward booking a free consultation or contacting the team — but only when it flows naturally, never forced.`;

const MODEL = 'claude-opus-4-6-20250610';

export default async (req: Request, _context: Context) => {
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

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!body.messages || !Array.isArray(body.messages)) {
    return new Response(JSON.stringify({ error: 'Missing messages array' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const baseUrl = apiUrl.replace(/\/+$/, '');

  const anthropicResponse = await fetch(`${baseUrl}/v1/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: body.messages,
      stream: true,
    }),
  });

  if (!anthropicResponse.ok || !anthropicResponse.body) {
    const errorText = await anthropicResponse.text().catch(() => '');
    return new Response(errorText || 'Upstream error', {
      status: anthropicResponse.status,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // Pipe the SSE stream through to the client
  return new Response(anthropicResponse.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
};
