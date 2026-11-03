// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://routetoabroad.com',
  output: 'static',
  trailingSlash: 'never',
  // i18n routing: English stays at the unprefixed root (prefixDefaultLocale:
  // false); every other locale lives under /<locale>/. Missing translations
  // rewrite to the English version (fallbackType: 'rewrite') instead of 404,
  // so un-translated long-tail pages still serve useful content at the
  // localized URL. See src/lib/i18n.ts for the Locale type.
  i18n: {
    locales: ['en', 'zh', 'fr', 'ar', 'es'],
    defaultLocale: 'en',
    fallback: { zh: 'en', fr: 'en', ar: 'en', es: 'en' },
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'rewrite',
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
      filter: (page) => !page.includes('/privacy') && !page.includes('/terms'),
    }),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  // AVIF/WebP output comes from per-component `formats` props on <Picture>
  // and the default sharp image service — no global `image` config needed.
});
