// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const SITE_URL = 'https://routetoabroad.com';
const CONTENT_DIR = fileURLToPath(new URL('./src/content/', import.meta.url));
const LOCALE_DIRS = ['zh', 'fr', 'ar', 'es', 'de', 'ja', 'pt', 'hi'];
// Collections with a pubDate in frontmatter and a public route at /<collection>/<slug>/.
const DATED_COLLECTIONS = ['blog', 'guides'];

/** updatedDate, else pubDate, from a markdown file's frontmatter. null when neither is set. */
function frontmatterDate(/** @type {string} */ file) {
  const fm = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) return null;
  for (const key of ['updatedDate', 'pubDate']) {
    const m = fm[1].match(new RegExp(`^${key}:\\s*['"]?([^'"\\r\\n]+?)['"]?\\s*$`, 'm'));
    if (m) {
      const d = new Date(m[1]);
      if (!Number.isNaN(d.getTime())) return d;
    }
  }
  return null;
}

/**
 * Sitemap lastmod per page URL (trailing slash included), taken from each
 * entry's own frontmatter. Pages with no dated source get no lastmod.
 */
function buildLastmodMap() {
  const map = new Map();
  for (const collection of DATED_COLLECTIONS) {
    const root = join(CONTENT_DIR, collection);
    const dirs = [
      { dir: root, prefix: '' },
      ...LOCALE_DIRS.map((l) => ({ dir: join(root, l), prefix: `${l}/` })),
    ];
    for (const { dir, prefix } of dirs) {
      let files = [];
      try {
        files = readdirSync(dir).filter((f) => f.endsWith('.md'));
      } catch {
        continue; // no localized directory for this collection
      }
      for (const f of files) {
        const d = frontmatterDate(join(dir, f));
        if (d) map.set(`${SITE_URL}/${prefix}${collection}/${f.replace(/\.md$/, '')}/`, d);
      }
    }
  }
  return map;
}

const lastmods = buildLastmodMap();

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // Every URL ends in a slash. Canonicals, hreflang, sitemap and the RSS
  // feed all get the slash from translatePath (src/lib/i18n.ts). netlify.toml
  // redirect targets end in a slash too.
  trailingSlash: 'always',
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
      // No global lastmod: each URL gets its own date in serialize() below.
      // Locale codes match the hreflang values Seo.astro emits on each page.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh',
          fr: 'fr',
          ar: 'ar',
          es: 'es',
          de: 'de',
          ja: 'ja',
          pt: 'pt',
          hi: 'hi',
        },
      },
      serialize(item) {
        const lastmod = lastmods.get(item.url);
        return lastmod ? { ...item, lastmod: lastmod.toISOString() } : item;
      },
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
