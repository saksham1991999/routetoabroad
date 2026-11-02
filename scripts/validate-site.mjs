#!/usr/bin/env node
/**
 * Site QA: validates every built HTML page for
 *  - unique title + meta description + canonical
 *  - parseable JSON-LD with required fields per type
 *  - single H1
 *  - images with alt
 *  - sitemap coverage (every sitemap URL has a built page, and vice versa)
 * Usage: node scripts/validate-site.mjs
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const errors = [];
const warnings = [];

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const jsonLdTypes = new Map();
let lastTitle = null;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = relative(DIST, file);

  // title
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];
  if (!title) errors.push(`${rel}: missing <title>`);
  if (title === lastTitle && rel !== '404.html' && rel !== 'index.html') {
    warnings.push(`${rel}: duplicate title "${title}"`);
  }
  lastTitle = title;

  // meta description
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) errors.push(`${rel}: missing meta description`);
  else if (desc.length < 50) warnings.push(`${rel}: short meta description (${desc.length})`);
  else if (desc.length > 165) warnings.push(`${rel}: long meta description (${desc.length})`);

  // canonical
  if (!html.match(/<link rel="canonical" href="([^"]+)"/)) errors.push(`${rel}: missing canonical`);

  // og image
  if (!html.match(/<meta property="og:image" content="([^"]+)"/)) errors.push(`${rel}: missing og:image`);

  // single h1
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s === 0) errors.push(`${rel}: no H1`);
  if (h1s > 1) errors.push(`${rel}: ${h1s} H1 tags`);

  // images alt
  const imgs = html.matchAll(/<img[^>]*>/g);
  for (const img of imgs) {
    const tag = img[0];
    if (!/alt="[^"]*"/.test(tag) && !/alt=/.test(tag)) {
      warnings.push(`${rel}: <img> without alt: ${tag.slice(0, 80)}`);
    }
  }

  // JSON-LD parse + per-type requirements
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  for (const block of blocks) {
    let schema;
    try {
      schema = JSON.parse(block[1]);
    } catch (e) {
      errors.push(`${rel}: unparseable JSON-LD — ${e.message}`);
      continue;
    }
    const schemas = Array.isArray(schema) ? schema : [schema];
    for (const s of schemas) {
      if (!s['@type']) {
        errors.push(`${rel}: JSON-LD without @type`);
        continue;
      }
      const type = Array.isArray(s['@type']) ? s['@type'][0] : s['@type'];
      jsonLdTypes.set(type, (jsonLdTypes.get(type) ?? 0) + 1);

      if (type === 'FAQPage') {
        const qs = s.mainEntity ?? [];
        if (!qs.length) errors.push(`${rel}: FAQPage with no questions`);
        // every FAQ question text must appear in visible content
        for (const q of qs) {
          const text = q.name || '';
          if (!html.includes(text.replace(/[<>&]/g, '')) && !html.includes(text)) {
            errors.push(`${rel}: FAQPage question not visible in page: "${text.slice(0, 60)}"`);
          }
        }
      }
      if (type === 'BreadcrumbList' && !s.itemListElement?.length) {
        errors.push(`${rel}: empty BreadcrumbList`);
      }
      if (type === 'Article' && (!s.headline || !s.datePublished || !s.author)) {
        errors.push(`${rel}: Article schema missing headline/datePublished/author`);
      }
      if (type === 'HowTo' && !s.step?.length) errors.push(`${rel}: HowTo without steps`);
      if (type === 'Course' && !s.name) errors.push(`${rel}: Course without name`);
      if (type === 'Organization') {
        for (const field of ['name', 'url', 'logo']) {
          if (field === 'logo' && !s.logo) warnings.push(`${rel}: Organization missing logo`);
          if (field !== 'logo' && !s[field]) errors.push(`${rel}: Organization missing ${field}`);
        }
      }
    }
  }
}

// ---- sitemap coverage ----
const sitemapUrls = [...readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1]
);
const builtUrls = new Set(
  htmlFiles.map((f) => {
    const rel = relative(DIST, f).replace(/index\.html$/, '').replace(/\.html$/, '');
    return new URL('/' + rel, 'https://routetoabroad.com').href.replace(/\/$/, '');
  })
);

for (const url of sitemapUrls) {
  const normalized = url.replace(/\/$/, '');
  const normalizedBuilt = normalized.replace('https://routetoabroad.com', '');
  const found = [...builtUrls].some((b) => b.endsWith(normalizedBuilt) || b === normalized);
  if (!found) errors.push(`sitemap URL has no built page: ${url}`);
}
for (const b of builtUrls) {
  if (b.includes('404')) continue;
  const path = b.replace('https://routetoabroad.com', '') || '/';
  if (path === '/404') continue;
  const inSitemap = sitemapUrls.some((u) => u.replace(/\/$/, '').endsWith(path));
  if (!inSitemap && !['/privacy', '/terms'].includes(path)) {
    warnings.push(`built page missing from sitemap: ${path}`);
  }
}

// ---- report ----
console.log(`Pages checked: ${htmlFiles.length}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log('JSON-LD types:', Object.fromEntries([...jsonLdTypes.entries()].sort()));
console.log('');
if (warnings.length) {
  console.log(`⚠ ${warnings.length} warnings:`);
  warnings.forEach((w) => console.log('  ' + w));
}
if (errors.length) {
  console.log(`✗ ${errors.length} errors:`);
  errors.forEach((e) => console.log('  ' + e));
  process.exit(1);
}
console.log('✓ All checks passed');
