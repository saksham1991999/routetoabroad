// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://routetoabroad.com',
  output: 'static',
  trailingSlash: 'never',
  // i18n routing: English stays at the unprefixed root (prefixDefaultLocale:
  // false); every other locale lives under /<locale>/. No `fallback` map is
  // configured: a route without a localized source page 404s at its localized
  // URL instead of silently serving English content with mismatched
  // lang/canonical signals — coverage gaps fail loudly (the validator's
  // source-page check enforces this too). Every route is covered by a locale
  // twin today; see src/lib/i18n.ts.
  i18n: {
    locales: ['en', 'zh', 'fr', 'ar', 'es', 'de', 'ja', 'pt', 'hi'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Astro 7 defaults compressHTML to 'jsx' (React-style whitespace stripping
  // between adjacent inline elements). `true` keeps the Astro 5 rendering the
  // 56 pages were visually verified against.
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      // Exclude legal pages (indexable but deliberately kept out of the
      // sitemap) and any 404 route, in every locale. Match the final path
      // segment — substring matching would silently drop unrelated future
      // slugs that merely contain these words.
      filter: (page) => {
        const tail = new URL(page).pathname.replace(/\/+$/, '').split('/').pop() ?? '';
        return !['privacy', 'terms', '404'].includes(tail);
      },
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  // AVIF/WebP output comes from per-component `formats` props on <Picture>
  // and the default sharp image service — no global `image` config needed.
});
