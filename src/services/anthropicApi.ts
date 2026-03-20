import type { ChatMessage } from '../types/chat';

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

/**
 * In dev: calls the Vite proxy → external API (key sent from client, dev-only).
 * In prod: calls the Netlify Function (key stays server-side, never in bundle).
 */
function getEndpoint(): { url: string; headers: Record<string, string>; sendFullBody: boolean } | null {
  if (import.meta.env.DEV) {
    // Dev mode: use Vite proxy with client-side key
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    if (!apiKey) return null;
    return {
      url: '/api/anthropic/v1/messages',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      sendFullBody: true,
    };
  }

  // Production: use Netlify Function (no key needed client-side)
  return {
    url: '/.netlify/functions/chat',
    headers: { 'Content-Type': 'application/json' },
    sendFullBody: false,
  };
}

export function isConfigured(): boolean {
  if (import.meta.env.DEV) {
    return !!import.meta.env.VITE_ANTHROPIC_API_KEY;
  }
  // In production, assume the Netlify Function is configured
  return true;
}

export async function streamChatResponse(
  messages: ChatMessage[],
  onChunk: (text: string) => void,
  onComplete: () => void,
  onError: (error: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const endpoint = getEndpoint();
  if (!endpoint) {
    onError('Chatbot is not configured. Missing API key.');
    return;
  }

  const apiMessages = messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  // Dev sends the full Anthropic request body; prod sends just messages (function adds the rest)
  const body = endpoint.sendFullBody
    ? { model: MODEL, max_tokens: 1024, system: SYSTEM_PROMPT, messages: apiMessages, stream: true }
    : { messages: apiMessages };

  try {
    const response = await fetch(endpoint.url, {
      method: 'POST',
      headers: endpoint.headers,
      body: JSON.stringify(body),
      signal,
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '');
      if (response.status === 429) {
        onError('Too many requests. Please wait a moment before sending another message.');
      } else if (response.status === 401) {
        onError('Authentication failed. Please check the API key.');
      } else {
        onError(`Request failed (${response.status}). ${errorBody || 'Please try again.'}`);
      }
      return;
    }

    const reader = response.body?.getReader();
    if (!reader) {
      onError('Unable to read response stream.');
      return;
    }

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      // Keep the last potentially incomplete line in the buffer
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (data === '[DONE]') continue;

        try {
          const event = JSON.parse(data);
          if (
            event.type === 'content_block_delta' &&
            event.delta?.type === 'text_delta' &&
            event.delta.text
          ) {
            onChunk(event.delta.text);
          }
        } catch {
          // Skip malformed JSON lines
        }
      }
    }

    onComplete();
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') {
      return; // Request was cancelled, not an error
    }
    onError('Unable to connect. Please check your internet connection.');
  }
}
