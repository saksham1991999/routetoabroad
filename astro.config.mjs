// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://routetoabroad.com',
  output: 'static',
  trailingSlash: 'never',
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
  image: {
    // Generated art is processed to AVIF/WebP at build time by Astro's sharp service.
    formats: ['avif', 'webp'],
  },
});
