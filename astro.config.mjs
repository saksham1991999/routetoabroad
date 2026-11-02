// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://routetoabroad.com',
  output: 'static',
  trailingSlash: 'never',
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
