# Astro 5.18 → 7.4.5 migration: required updates + verification

## Context

The user bumped `astro` to ^7.4.5 (also `@astrojs/sitemap` ^3.7.4, `@astrojs/rss` ^4.0.19 — the correct pairings for Astro 7) in `package.json`/lockfile on branch `astro-v3-root` (uncommitted; PR #1 still open). **Nothing has been built or run since the install** — dist/ is still an Astro 5 artifact. Local node is 22.22.3 (astro 7.4.5 wants ≥22.23.4 — npm installs with an EBADENGINE warning; Netlify's `NODE_VERSION = "22"` resolves latest 22.x so deploys are fine).

Research (official v6/v7 upgrade guides) against our code found exactly **one deprecation edit, one invalid config block, one v7-behavior risk, and a pre-existing prop misuse**. No structural migrations needed: we already use Content Layer loaders (legacy collections were removed in v6 — we're clear), `render(entry)`, `astro/zod`-safe schemas, and no remark/rehype plugins (v7's Sätteri markdown swap is a no-op for us).

## Changes

1. **`src/content.config.ts`** — v6 deprecation: split the import:
   `import { defineCollection } from 'astro:content'` + `import { z } from 'astro/zod'`. Schemas are otherwise Zod-4-safe (plain defaults, `z.coerce.date()` still documented).

2. **`astro.config.mjs`** — delete the `image: { formats: ['avif','webp'] }` block (invalid/no-op in v5, 6, and 7 — formats come from per-component props). Add `compressHTML: true` with a comment: v7 defaults it to `'jsx'` (React-style whitespace stripping between adjacent inline elements), which risks visual regressions across the 56 visually-verified pages; `true` preserves Astro 5 rendering. Keep everything else (static output, trailingSlash, inlineStylesheets, sitemap options all valid in v7).

3. **`<Image formats={...}>` misuse** (pre-existing, harmless in v5, worth fixing now): `formats` (plural) is `<Picture>`-only — on `<Image>` it rendered as a junk attribute, so those images never actually emitted AVIF. Grep all `<Image` usages with `formats=` (expected ~8 files: index.astro, about.astro, blog/[slug].astro, universities/[slug].astro, cities/index.astro, tourism/index.astro, education/index.astro + any others) and drop the prop (Image defaults to webp srcset via `widths`; `<Picture>` usages in SmartImage/ArticleCard are correct and stay).

4. **`src/pages/rss.xml.ts`** — v7 docs: with `trailingSlash: 'never'`, pass `trailingSlash: false` to `rss()` and change item links from `/blog/${post.id}/` to `/blog/${post.id}`.

5. **`npm i -D @astrojs/check`** (0.9.12) so `npm run check` actually works.

6. **First v7 build + iterate** — run `npm run build`; fix any Rust-compiler template errors it surfaces (unclosed tags / invalid nesting the old compiler auto-corrected). Node 22.22.3 < engines floor is a warning, not a blocker; if the build fails on engines, flag to the user to `brew upgrade node` (Netlify is unaffected).

## Verification

- `npm run build` → 56 pages, 0 errors; `node scripts/validate-site.mjs` → all green
- Whitespace audit on dist HTML: wordmark renders "RouteToAbroad" intact, `.post-meta` separators, hero-trust row (grep dist/index.html)
- `npm run preview` + curl 5 key routes → 200; confirm `/rss.xml` and `/sitemap-index.xml` valid
- Lighthouse spot-check home + education → confirm 100s hold (perf should improve slightly: Rust compiler, Vite 8)
- Commit to `astro-v3-root` (updates open PR #1): "upgrade astro 5.18 → 7.4.5 + required migrations" with the change list above
