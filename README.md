# RouteToAbroad v3 — Astro

The third-generation RouteToAbroad site: a fully static [Astro 5](https://astro.build) rebuild of
routetoabroad.com that beats both the original React SPA (v1) and the v2 redesign on design,
interactivity, and search visibility (SEO + AEO + GEO).

**56 static pages · 2.6 KB JS on content pages · Lighthouse 95–100 across all categories ·
zero-JS interactivity via vanilla islands**

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build → dist/
npm run preview   # serve dist/ locally
```

## Project structure

```
├── astro.config.mjs          # site URL, sitemap, image formats
├── netlify.toml              # build settings, redirects, headers, function config
├── netlify/functions/chat.mts  # AI counselor streaming proxy (Claude)
├── public/
│   ├── robots.txt            # allows search + AI crawlers explicitly
│   ├── llms.txt              # curated map for LLMs
│   ├── og/                   # generated OG images (1200×630)
│   └── textures/noise.svg    # grain overlay
├── scripts/
│   ├── images.config.json    # every image: prompt, ratio, alt (versioned, regenerable)
│   ├── generate_images.py    # Agnes AI batch generator
│   ├── process-images.mjs    # sharp: resize → JPEG + OG exports
│   └── validate-site.mjs     # QA: titles, canonicals, JSON-LD, sitemap coverage
└── src/
    ├── content.config.ts     # 5 collections (blog, guides, universities, cities, countries)
    ├── content/              # 27 markdown content files
    ├── data/                 # faqs, glossary, testimonials, authors, comparisons
    ├── lib/                  # site.ts (NAP constants), schema.ts (JSON-LD builders)
    ├── styles/               # tokens.css (design tokens) + global.css (primitives)
    ├── components/           # Header, Footer, Seo, JsonLd, forms/, tools UI…
    ├── layouts/BaseLayout.astro
    └── pages/                # 30 route files → 56 pages
```

## Design system

The visual language is derived from the owner's v2 experiment (routetoabroad-v2.netlify.app) and
elevated — "editorial instrument": two-ink world, one accent, hairline rules over cards.

- **Tokens** in `src/styles/tokens.css`: paper `#f7f7f7`, panel black `#0a0a0a`, ink `#111/#333`,
  signal periwinkle `#5e78ee` (accent-as-pen: eyebrows, numerals, markers; `--accent-text #4a63d8`
  for AA-safe small text; `--accent-surface` for signal surfaces carrying white text), pillar
  colors demoted to coding tags. Full dark-mode palette (inner pages invert; the homepage hero is
  a fixed light composition with tone-switching chrome).
- **Type**: Helvetica Neue system stack — zero webfonts. Headings weight 500, tracking
  −0.025…−0.035em, leading 0.9–1.05; display sizes up to `clamp(2.75rem, 8vw, 6.75rem)`;
  instrument text 11–13px; zero-padded tabular numerals ("01") in signal.
- **Homepage experience** (no GSAP — vanilla TS + CSS): "Choose / Apply / Enroll" masked loader →
  split covers → pinned 300vh journey (dotted canvas globe with Delhi/Guangzhou markers + drag
  inertia, "where do you live?" underline input whose submit auto-flies the page, paper plane on
  a dashed Bézier to an ink-line campus panorama with `mix-blend-multiply`), word-by-word
  illuminated statement, numbered ruled rows for pillars/tools/insights, fixed mix-blend HUD
  with live scroll %, vertical signal CTA tab. All `prefers-reduced-motion`-gated.

## Image generation workflow (Agnes AI)

All site imagery is AI-generated with versioned prompts — nothing is hard-coded.

1. Edit prompts/alt text in `scripts/images.config.json` (each entry: name, ratio, priority, alt, prompt).
2. Generate raws (requires `AGNES_AI_API_KEY` in env or `~/.zshrc`):

   ```bash
   npm run images:generate          # skips existing files; ~4 parallel; 2K default
   IMAGE_SIZE=1K npm run images:generate   # cheap drafts
   ```

3. Optimize into the site:

   ```bash
   npm run images:process           # → src/assets/images/*.jpg + public/og/*.jpg
   ```

4. Regenerating one image: delete `scripts/raw/<name>.png`, re-run both commands.

Art direction (in `styleSuffix`): warm photojournalistic, natural directional light, slightly
desaturated, subtle film grain, no text/watermarks. Founder portraits are real files in
`src/assets/founders/` (do not generate fake faces for real people).

Astro serves everything as AVIF/WebP via `<Picture>` with responsive `srcset` and explicit
dimensions (zero CLS).

## Forms

All forms POST via `fetch` to Formspree endpoint `xjgpgllz` (see `FORMSPREE_ENDPOINT` in
`src/lib/site.ts`). Validation is inline (required/email/phone) with `aria-invalid` +
error states; success swaps the form for a confirmation. To switch endpoints, change one constant.

## AI counselor (chatbot)

`netlify/functions/chat.mts` streams from Claude via `ANTHROPIC_API_URL` + `ANTHROPIC_API_KEY`.
The widget (`ChatWidget.astro`) is on every page but only opens on click; it lazy-starts the
conversation. Set both env vars in Netlify, or the widget shows a graceful WhatsApp fallback.

## Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `AGNES_AI_API_KEY` | local (`~/.zshrc`) | image generation only |
| `ANTHROPIC_API_KEY` | Netlify env | chatbot |
| `ANTHROPIC_API_URL` | Netlify env | chatbot API base |

No keys are hard-coded; the static site builds with none of them.

## SEO / AEO / GEO

- Unique title + meta description + canonical + OG/Twitter card per page (`Seo.astro`);
  descriptions auto-trimmed to ~158 chars.
- `sitemap-index.xml` from `@astrojs/sitemap` (privacy/terms excluded); `robots.txt` explicitly
  allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended, etc.
- JSON-LD on every page: Organization + WebSite + 2×LocalBusiness (site-wide), plus per-page
  BreadcrumbList, FAQPage, HowTo, Course, Service, Article, Person, Review, DefinedTerm —
  all validated by `node scripts/validate-site.mjs`.
- AEO: answer-first "Short answer" blocks on guides/comparisons, FAQ sections with schema,
  step lists, `/glossary` definition blocks.
- GEO: `llms.txt` + `llms-full.txt` (build-time render of all collections as clean markdown).
- E-E-A-T: real founder bylines with LinkedIn `sameAs`, last-updated dates, visible
  breadcrumbs, consistent NAP everywhere.

## Deployment (Netlify)

`netlify.toml` at the repo root supplies everything: build command (`npm run build`), publish
dir (`dist`), Node 22, caching headers, legacy-URL 301 redirects, and the chatbot function.
**No base directory needed** — this is the root project.

1. In Netlify: build command `npm run build`, publish directory `dist`, functions `netlify/functions`.
2. Add the two `ANTHROPIC_*` env vars for the chatbot.
3. Canonical domain is `https://routetoabroad.com` (`astro.config.mjs` + `src/lib/site.ts`).

## QA

```bash
npm run build && node scripts/validate-site.mjs
```

Validates all 56 pages (titles, descriptions, canonicals, H1 uniqueness, alt text) and every
JSON-LD block (parse + per-type required fields + FAQ questions visible in page), and checks
sitemap ↔ built-page coverage both ways. Exit 1 on any error.

Lighthouse (LH 13, simulated mobile): home 100/97/100/100 · education 100/100/100/100 ·
fit-check 100/100/100/100 · blog post 100/100/100/100 · university page 100/100/100/100.
CLS 0.000 on all tested pages.

## Content conventions

- Add a guide: new `src/content/guides/<slug>.md` (schema in `content.config.ts`; include 2–3
  `faqs` for FAQPage schema). Route appears automatically.
- Company facts (NAP, phones, socials, claims) live in `src/lib/site.ts` — edit there, never
  inline. Items marked `{{VERIFY}}` in content need owner confirmation before launch.
- FAQ data lives in `src/data/faqs.ts` and powers both page accordions and FAQPage schema —
  single source, never drifts.
