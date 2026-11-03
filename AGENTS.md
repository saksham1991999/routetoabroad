# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Astro dev server → http://localhost:4321
npm run build      # Production build → dist/ (276 static pages)
npm run check      # astro check — must report 0 errors (deploy gate; also enforces i18n key parity)
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
- File-based routing in `src/pages/` → 276 static pages (56 en + 4×55 localized; i18n via
  astro.config.mjs, en unprefixed root, no fallback rewrite): core pages, 5 interactive tools (`/tools/*`),
  10 guides, 6 blog posts, 5 university + 4 city + 2 country programmatic pages,
  3 comparison pages, FAQ hub, glossary, legal pages.
- Every route's markup lives in ONE shared component, `src/components/pages/<Route>Page.astro`
  (takes a `locale` prop); `src/pages/**` files are ~6-line shells (`<AboutPage locale="zh" />`).
  Change a page by editing the component, never a shell. `[slug]` shells delegate `getStaticPaths`
  to `src/lib/static-paths.ts`.
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
- 5 locales (en default, zh, fr, ar RTL, es) via Astro i18n routing, no fallback (a missing
  localized route 404s and fails the validator). Chrome strings: `src/i18n/ui.ts`; tool strings:
  `src/i18n/tools/*.ts` (typed `Record<Locale, …>` — `npm run check` enforces key parity).
- Never hardcode `/zh/…` hrefs: use `translatePath(path, locale)` (`src/lib/i18n.ts`); in tool
  client scripts use `localizeHref`/`intlTag`/`readI18n` from `src/lib/i18n-client.ts`.
- RTL: Arabic-only CSS is `src/styles/rtl.css`, injected inline on `/ar/` pages only. Direction-
  sensitive rules inside scoped component styles use `html:global([dir='rtl']) …` (unscoped
  rtl.css rules lose to `data-astro-cid` specificity). Wrap phone numbers/hours in `<bdi>`.
- Body prose (page copy, articles, FAQ answers) is still English in every locale — known gap;
  zh/fr/ar/es strings are machine-assisted and need native-speaker review.

### Images
- All imagery is generated from versioned prompts in `scripts/images.config.json`
  (see README for the regeneration workflow). Founder portraits are real files — never
  AI-generate faces for real people.

## Key conventions
- `{{VERIFY}}` markers in content = facts needing owner confirmation; do not remove silently.
- SEO layer (`Seo.astro`, `JsonLd.astro`, `SiteSchemas.astro`) is contract-stable: every page
  passes unique title/description/crumbs/jsonLd.
- After content/page changes run `npm run check && npm run build && node scripts/validate-site.mjs`.
- Facts (phones, hours) in translated strings must interpolate `SITE` (`src/lib/site.ts`), never
  be typed inline.
