# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Astro dev server → http://localhost:4321
npm run build      # Production build → dist/ (280 static pages)
npm run preview    # Serve dist/ locally
node scripts/validate-site.mjs   # QA: titles, canonicals, JSON-LD, sitemap coverage (exit 1 on error)
npm run images:generate   # Regenerate site imagery via Agnes AI (scripts/images.config.json)
npm run images:process    # Optimize raw PNGs → src/assets/images + public/og
npm run globe:build       # Rebuild src/data/globe.generated.json (node scripts/build-globe-data.mjs)
```

No test runner is configured; `scripts/validate-site.mjs` is the build gate.

## Architecture

RouteToAbroad v3 is a fully static **Astro 7** site (zero UI-framework islands) for a consultancy
with three pillars: **Education, Tourism, Trade** (India ↔ East Asia). All interactivity is
vanilla TypeScript in `<script>` blocks; there are no webfonts (Helvetica system stack).

### Routing & pages
- File-based routing in `src/pages/` → 280 static pages (56 en + 4×56 localized; i18n via
  astro.config.mjs, en unprefixed root): core pages, 5 interactive tools (`/tools/*`),
  10 guides, 6 blog posts, 5 university + 4 city + 2 country programmatic pages,
  3 comparison pages, FAQ hub, glossary, legal pages.
- Site URL and sitemap config live in `astro.config.mjs`.

### Content
- Content collections (schemas in `src/content.config.ts`): `blog`, `guides`, `universities`,
  `cities`, `countries` under `src/content/`.
- Structured data (non-collection): `src/data/` — `faqs.ts` (single source for FAQ pages AND
  FAQPage JSON-LD), `glossary.ts`, `testimonials.ts`, `authors.ts`, `comparisons.ts`.
- Company facts (NAP, phones, socials, claims) live in `src/lib/site.ts` — edit there, never
  inline. JSON-LD builders live in `src/lib/schema.ts`.

### Design system
- Tokens in `src/styles/tokens.css`, primitives in `src/styles/global.css` (no Tailwind).
- "Editorial instrument" language: paper `#f7f7f7` / ink `#111` / signal periwinkle `#5e78ee`
  used as a pen (eyebrows, numerals), hairline rules over cards, weight-500 headings with tight
  tracking. Dark mode via `[data-theme]` (inner pages invert; homepage hero is a fixed-light
  composition with tone-switching chrome).
- Homepage loader/globe/journey animations live in `src/pages/index.astro` +
  `src/layouts/BaseLayout.astro` and are all `prefers-reduced-motion`-gated.

### Forms & chatbot
- Forms POST via `fetch` to Formspree (endpoint constant `FORMSPREE_ENDPOINT` in
  `src/lib/site.ts` + inline engine in BaseLayout).
- AI counselor: `netlify/functions/chat.mts` streams from `claude-opus-4-6-20250610` via
  `ANTHROPIC_API_KEY`/`ANTHROPIC_API_URL`.

### Internationalization
- 5 locales (en default, zh, fr, ar RTL, es) via Astro i18n routing; chrome strings in
  `src/i18n/ui.ts`; body copy untranslated (English fallback) — known gap, see PR #2.

### Images
- All imagery is generated from versioned prompts in `scripts/images.config.json`
  (see README for the regeneration workflow). Founder portraits are real files — never
  AI-generate faces for real people.

## Key conventions
- `{{VERIFY}}` markers in content = facts needing owner confirmation; do not remove silently.
- SEO layer (`Seo.astro`, `JsonLd.astro`, `SiteSchemas.astro`) is contract-stable: every page
  passes unique title/description/crumbs/jsonLd.
- After content/page changes run `npm run build && node scripts/validate-site.mjs`.
