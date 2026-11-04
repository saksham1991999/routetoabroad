#!/usr/bin/env node
/**
 * Site QA: validates every built HTML page for
 *  - unique title + meta description + canonical per locale
 *  - self-canonicalization on every localized, indexable page
 *  - complete + reciprocal hreflang clusters (en/zh/fr/ar/es/de/ja/pt/hi + x-default),
 *    each target being a built page whose own canonical equals the target
 *  - parseable JSON-LD with required fields per type
 *  - single H1
 *  - images with alt
 *  - <html lang>/dir matching the URL locale (ar → dir="rtl")
 *  - sitemap coverage in both directions, source-page-aware
 *  - internal links + fragment anchors resolve against the built file set
 *  - no trailing slashes on internal href/canonical/sitemap URLs (trailingSlash: 'never')
 *  - OG/Twitter meta completeness; og:image absolute on host and its file present in dist/
 *  - locale lists agree across astro.config.mjs, src/lib/i18n.ts and this file
 *  - {{VERIFY}} markers survive in src/ (owner-confirmation contract)
 * Usage: node scripts/validate-site.mjs
 *   VALIDATE_SITE_ROOT=<dir>  validate <dir>/dist + <dir>/src instead of ./{dist,src}
 *                             (fault-injection seam; mirrors cwd layout)
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = process.env.VALIDATE_SITE_ROOT || process.cwd();
const DIST = join(ROOT, 'dist');
const SRC = join(ROOT, 'src');
const SITE = 'https://routetoabroad.com'; // keep in sync with astro.config.mjs `site`

const errors = [];
const warnings = [];

// i18n: the site supports 9 locales. English lives at the unprefixed root;
// zh / fr / ar / es / de / ja / pt / hi pages live under /<locale>/. This
// list must stay in sync with astro.config.mjs i18n.locales and
// src/lib/i18n.ts LOCALES (the consistency check below enforces it).
// Localized pages are intentional translations of the English page, so
// title/description duplication ACROSS LOCALES is expected — we only error
// on duplicates within the same locale.
const LOCALES = ['en', 'zh', 'fr', 'ar', 'es', 'de', 'ja', 'pt', 'hi'];
const localeOf = (rel) => {
  const seg = rel.split('/')[0];
  return LOCALES.includes(seg) ? seg : 'en';
};

// ---- locale-list consistency. Adding a locale means touching several
// lists; they must agree or every i18n check below silently drifts.
{
  const readList = (src, re) => {
    const m = src.match(re);
    if (!m) return null;
    return m[1]
      .split(',')
      .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean);
  };
  const lists = [];
  try {
    const configSrc = readFileSync(join(ROOT, 'astro.config.mjs'), 'utf8');
    lists.push(['astro.config.mjs i18n.locales', readList(configSrc, /locales:\s*\[([^\]]*)\]/)]);
  } catch {
    /* config not present at the seam — skip */
  }
  try {
    const i18nSrc = readFileSync(join(SRC, 'lib/i18n.ts'), 'utf8');
    lists.push(['src/lib/i18n.ts LOCALES', readList(i18nSrc, /LOCALES\s*=\s*\[([^\]]*)\]/)]);
  } catch {
    /* src not present at the seam — skip */
  }
  for (const [name, list] of lists) {
    if (!list) {
      errors.push(`locale list unparseable: ${name}`);
      continue;
    }
    const same =
      list.length === LOCALES.length && LOCALES.every((l) => list.includes(l));
    if (!same) {
      errors.push(`locale lists disagree — ${name} = [${list.join(', ')}] vs validator = [${LOCALES.join(', ')}]`);
    }
  }
}

// ---- i18n source-page detection (used by the sitemap check). A built
// localized page is a "source page" when a hand-written .astro file exists
// under src/pages/<locale>/ — either a literal page (<loc>/blog/slug.astro)
// or a dynamic route (<loc>/blog/[slug].astro) whose params produce the
// built slug. astro.config uses fallbackType: '404', so a route WITHOUT a
// locale source is not built at all — meaning every built page must be a
// source page, and this detector failing open would silently re-admit
// orphan fallback pages to the sitemap.
//
// Route shapes are enumerated once (e.g. 'zh/blog/[slug]', 'blog/index' →
// 'blog', 'index' → ''), with the trailing /index stripped and the locale
// prefix separated so a built path compares segment-for-segment.
const sourceRouteShapes = new Set();
{
  const found = [];
  (function collect(dir) {
    let entries = [];
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = join(dir, e.name);
      if (e.isDirectory()) collect(p);
      else if (e.name.endsWith('.astro')) found.push(p);
    }
  })(join(SRC, 'pages'));
  for (const p of found) {
    const shape = relative(join(SRC, 'pages'), p)
      .split('\\')
      .join('/')
      .replace(/\.astro$/, '')
      .replace(/(^|\/)index$/, ''); // 'blog/index' → 'blog', 'index' → ''
    sourceRouteShapes.add(shape);
  }
}
function isSourcePageHtml(htmlRel) {
  // htmlRel is a built .html relative path, e.g. 'ar/tools/fit-check/index.html'
  const dir = htmlRel.endsWith('index.html')
    ? htmlRel.slice(0, -'index.html'.length).replace(/\/+$/, '')
    : htmlRel.replace(/\.html$/, '');
  const body = dir === '' ? [] : dir.split('/').filter(Boolean);
  const loc = LOCALES.includes(body[0]) ? body[0] : 'en';
  if (loc !== 'en') body.shift(); // compare the route body only
  for (const shape of sourceRouteShapes) {
    const segs = shape === '' ? [] : shape.split('/');
    const shapeLoc = LOCALES.includes(segs[0]) && segs[0] !== 'en' ? segs[0] : 'en';
    if (shapeLoc !== loc) continue;
    const routeBody = shapeLoc === 'en' ? segs : segs.slice(1);
    if (routeBody.length !== body.length) continue;
    let ok = true;
    for (let i = 0; i < routeBody.length; i++) {
      if (routeBody[i].startsWith('[')) continue; // dynamic param
      if (routeBody[i] !== body[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return true; // a concrete source route produces this page
  }
  return false;
}
// Self-test: the detector must recognize literal pages, dynamic-route pages,
// and the root. A silent regression here once made the reverse-sitemap check
// vacuous (it skipped every page), so the gate now verifies its own tools.
for (const [probe, expected] of [
  ['index.html', true],
  ['about/index.html', true],
  ['blog/x/index.html', true],
  ['zh/about/index.html', true],
  ['zh/tools/fit-check/index.html', true],
  ['zh/blog/any-slug/index.html', true],
  ['404.html', true],
  ['zh/route-with-no-source/index.html', false],
  ['fr/route-with-no-source/index.html', false],
  ['hi/blog/any-slug/index.html', true],
  ['de/route-with-no-source/index.html', false],
]) {
  if (isSourcePageHtml(probe) !== expected) {
    throw new Error(`validate-site: source-page detector self-test failed for "${probe}"`);
  }
}

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

// ---- inventory: one walk of dist/ feeds the link resolver + og:image existence ----
const allFiles = walk(DIST).map((f) => relative(DIST, f).split('\\').join('/'));
const fileSet = new Set(allFiles);
const htmlRels = allFiles.filter((f) => f.endsWith('.html'));

const jsonLdTypes = new Map();

// global uniqueness (any duplicate anywhere is an error)
const seenTitles = new Map(); // value -> [rel, ...]
const seenDescs = new Map();
const seenCans = new Map();

// link/anchor resolution state
const pages = []; // { rel, dir, refs: [{ attr, raw, path, hash, hashOnly }] }
const pageIds = new Map(); // rel -> Set<id|name>
const linkStats = { checked: 0, broken: 0 };
const fragStats = { checked: 0, dangling: 0 };
const slashOffenders = [];
const ogStats = { pages: 0, files: 0 };

// per-page SEO state collected during the single read pass below, consumed
// by the lang/dir, hreflang and self-canonical checks afterwards
const pageMeta = new Map(); // rel -> { lang, dirRtl, noindex, canonical, hreflang: Map<code, href> }

for (const rel of htmlRels) {
  const file = join(DIST, rel);
  const html = readFileSync(file, 'utf8');

  // title
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];
  if (!title) errors.push(`${rel}: missing <title>`);
  if (title) {
    if (!seenTitles.has(title)) seenTitles.set(title, []);
    seenTitles.get(title).push(rel);
  }

  // meta description
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) errors.push(`${rel}: missing meta description`);
  else {
    if (desc.length < 50) warnings.push(`${rel}: short meta description (${desc.length})`);
    else if (desc.length > 165) warnings.push(`${rel}: long meta description (${desc.length})`);
    if (!seenDescs.has(desc)) seenDescs.set(desc, []);
    seenDescs.get(desc).push(rel);
  }

  // canonical
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) errors.push(`${rel}: missing canonical`);
  else {
    // Only the site root legitimately carries a trailing slash
    // (trailingSlash: 'never'); locale roots are built and canonicalized
    // slash-less (e.g. https://…com/zh).
    if (canonical.endsWith('/') && canonical !== SITE + '/') {
      errors.push(`${rel}: canonical ends with "/": ${canonical} (trailingSlash: 'never')`);
    }
    if (!seenCans.has(canonical)) seenCans.set(canonical, []);
    seenCans.get(canonical).push(rel);
  }

  // hreflang links + robots state (consumed by the cluster check below)
  const hreflang = new Map();
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    hreflang.set(m[1], m[2]);
  }
  pageMeta.set(rel, {
    lang: html.match(/<html[^>]*\slang="([^"]+)"/)?.[1] ?? null,
    dirRtl: /<html[^>]*\sdir="rtl"/.test(html),
    noindex: /<meta name="robots" content="noindex/.test(html),
    canonical,
    hreflang,
  });

  // OG/Twitter meta completeness + og:image is absolute on host + file exists in dist
  for (const prop of ['og:title', 'og:description', 'og:image']) {
    if (!html.match(new RegExp(`<meta property="${prop}" content="`))) {
      errors.push(`${rel}: missing ${prop}`);
    }
  }
  if (!html.match(/<meta name="twitter:card" content="[^"]+"/)) errors.push(`${rel}: missing twitter:card`);
  const ogImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (ogImage) {
    ogStats.pages++;
    if (!ogImage.startsWith(SITE + '/')) {
      errors.push(`${rel}: og:image is not an absolute URL on ${SITE}: "${ogImage}"`);
    } else {
      const ogFile = ogImage.slice(SITE.length + 1).split('#')[0].split('?')[0];
      if (fileSet.has(ogFile)) ogStats.files++;
      else errors.push(`${rel}: og:image file missing from dist/: ${ogFile}`);
    }
  }

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

  // fragment targets: id on any element + legacy <a name>
  const ids = new Set();
  for (const m of html.matchAll(/\sid="([^"]*)"/g)) if (m[1]) ids.add(m[1]);
  for (const m of html.matchAll(/<a\s[^>]*\sname="([^"]*)"/g)) if (m[1]) ids.add(m[1]);
  pageIds.set(rel, ids);

  // collect internal href/src references (resolved after all pages are parsed)
  const dir = rel.includes('/') ? rel.slice(0, rel.lastIndexOf('/')) : '';
  const refs = [];
  for (const m of html.matchAll(/\s(href|src)=(?:"([^"]*)"|'([^']*)')/g)) {
    const attr = m[1];
    let raw = (m[2] ?? m[3] ?? '').trim();
    if (!raw || raw === '#') continue;
    if (/^(?:mailto:|tel:|javascript:|data:|sms:|ftp:|ws:)/i.test(raw)) continue;
    // protocol-relative: same-site is internal, anything else is external
    if (raw.startsWith('//')) {
      const host = SITE.replace(/^https?:\/\//i, '');
      const rest = raw.slice(2);
      if (rest === host || rest.startsWith(host + '/')) raw = SITE + rest.slice(host.length);
      else continue;
    }
    let path = null;
    let hash = null;
    let hashOnly = false;
    if (raw === SITE || raw.startsWith(SITE + '/') || raw.startsWith(SITE + '?') || raw.startsWith(SITE + '#'))
      path = raw.slice(SITE.length) || '/';
    else if (raw.startsWith('/')) path = raw;
    else if (/^https?:\/\//i.test(raw)) continue; // external
    else if (raw.startsWith('?')) {
      // query-only link: same page — but it can still carry a fragment
      const qHash = raw.indexOf('#');
      if (qHash === -1) continue;
      path = '';
      hash = raw.slice(qHash + 1) || null;
    } else path = raw; // page-relative

    // split off #fragment then ?query
    const hashIdx = path.indexOf('#');
    if (hashIdx !== -1) {
      hash = path.slice(hashIdx + 1) || null;
      path = path.slice(0, hashIdx);
    }
    const qIdx = path.indexOf('?');
    if (qIdx !== -1) path = path.slice(0, qIdx);
    if (hash && !path) hashOnly = true; // "#foo" → same page

    refs.push({ attr, raw, path, hash, hashOnly });

    // trailing-slash check on href URLs — only the site root "/" is a
    // legitimate slash URL under trailingSlash: 'never'.
    if (attr === 'href' && !hashOnly && path.endsWith('/') && path !== '/') {
      slashOffenders.push(`${rel}: URL ends with "/": ${raw}`);
    }
  }
  pages.push({ rel, dir, refs });

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
        // every FAQ question text must appear in visible content — strip
        // <script> (JSON-LD) first, otherwise the check confirms itself;
        // decode entities + drop tags so typographic output still matches
        const decode = (s) =>
          s
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#0?39;|&apos;|’/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>');
        const plain = decode(html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' '))
          .replace(/\s+/g, ' ')
          .toLowerCase();
        for (const q of qs) {
          const needle = decode(q.name || '').replace(/\s+/g, ' ').toLowerCase();
          if (!needle || !plain.includes(needle)) {
            errors.push(`${rel}: FAQPage question not visible in page: "${(q.name || '').slice(0, 60)}"`);
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

// ---- global uniqueness: any duplicate within the SAME locale is an error.
// Cross-locale duplicates are expected (a localized page is a translation of
// the English page and reuses its title/description for un-translated copy).
function flagDuplicates(map, label) {
  for (const [value, rels] of map) {
    if (rels.length <= 1) continue;
    // Group the offending rels by locale; only a same-locale pair is an error.
    const byLocale = {};
    for (const rel of rels) (byLocale[localeOf(rel)] ??= []).push(rel);
    for (const [loc, sameLocRels] of Object.entries(byLocale)) {
      if (sameLocRels.length > 1) {
        errors.push(
          `duplicate ${label} (${loc}) on ${sameLocRels.length} pages: "${value}" — ${sameLocRels.join(', ')}`
        );
      }
    }
  }
}
flagDuplicates(seenTitles, 'title');
flagDuplicates(seenDescs, 'meta description');
flagDuplicates(seenCans, 'canonical');

// ---- i18n: <html lang> / dir must match the page's URL locale. Pages under
// /ar/ additionally render dir="rtl". With fallbackType: '404' every built
// page has a localized source, so this must hold on every page; the root 404
// (English-only, noindex) is the one deliberate exception.
for (const rel of htmlRels) {
  if (rel === '404.html' || rel.includes('/404/')) continue;
  const meta = pageMeta.get(rel);
  const urlLocale = localeOf(rel);
  if (!meta.lang) {
    errors.push(`${rel}: <html> missing lang attribute`);
  } else {
    const langBase = meta.lang.split('-')[0];
    if (langBase !== urlLocale) {
      errors.push(`${rel}: <html lang="${meta.lang}"> does not match URL locale "${urlLocale}"`);
    }
  }
  if (rel.startsWith('ar/')) {
    if (!meta.dirRtl) {
      errors.push(`${rel}: Arabic page missing dir="rtl"`);
    }
  } else if (meta.dirRtl) {
    errors.push(`${rel}: non-Arabic page has dir="rtl"`);
  }
}

// ---- hreflang cluster check. Every indexable page must emit the full
// cluster (en/zh/fr/ar/es + x-default); every target must be a built page
// whose own canonical equals the target URL, and every non-self entry must
// be reciprocated by the target (it links back to this page's canonical).
// The homepage clusters once shipped with a trailing-slash mismatch between
// hreflang targets and canonicals — exactly the class of bug this catches.
{
  const canonicalToRel = new Map();
  for (const [rel, meta] of pageMeta) {
    if (meta.canonical) canonicalToRel.set(meta.canonical, rel);
  }
  const expectedCodes = new Set([...LOCALES, 'x-default']);
  for (const [rel, meta] of pageMeta) {
    if (meta.noindex) continue; // 404s and legal noindex candidates emit no cluster
    if (!meta.canonical) continue; // flagged by the canonical check
    const got = new Set(meta.hreflang.keys());
    const missing = [...expectedCodes].filter((c) => !got.has(c));
    const extra = [...got].filter((c) => !expectedCodes.has(c));
    if (missing.length || extra.length) {
      errors.push(
        `${rel}: hreflang cluster incomplete — missing [${missing.join(', ')}]${extra.length ? `, unexpected [${extra.join(', ')}]` : ''}`
      );
      continue;
    }
    const loc = localeOf(rel);
    for (const [code, href] of meta.hreflang) {
      if (code === loc) {
        // the self-entry must equal the page's own canonical
        if (href !== meta.canonical) {
          errors.push(`${rel}: hreflang "${code}" self-reference ${href} != canonical ${meta.canonical}`);
        }
        continue;
      }
      const targetRel = canonicalToRel.get(href);
      if (!targetRel) {
        errors.push(`${rel}: hreflang "${code}" target ${href} is no built page's canonical`);
        continue;
      }
      if (code === 'x-default' && localeOf(targetRel) !== 'en') {
        errors.push(`${rel}: hreflang x-default must point at the English tree, got ${href}`);
        continue;
      }
      const back = pageMeta.get(targetRel)?.hreflang.get(loc);
      if (back !== meta.canonical) {
        errors.push(
          `${rel}: hreflang "${code}" → ${href} is not reciprocal (target does not link back to ${meta.canonical})`
        );
      }
    }
  }
}

// ---- internal link + fragment anchor resolution (single pass, in-memory) ----
function resolveInternal(path, fromDir) {
  if (path === '' || path === '/') return 'index.html';
  let p = path;
  if (!p.startsWith('/')) {
    // page-relative: resolve against the current page's directory
    const parts = fromDir ? fromDir.split('/') : [];
    for (const seg of p.split('/')) {
      if (seg === '' || seg === '.') continue;
      if (seg === '..') parts.pop();
      else parts.push(seg);
    }
    p = '/' + parts.join('/');
  }
  p = p.replace(/\/+$/, ''); // trailingSlash: 'never' — a trailing slash never changes the target
  if (p === '' || p === '/') return 'index.html';
  const clean = p.replace(/^\//, '');
  if (clean === '404') return '404.html'; // links to /404 are ignored (never an error)
  if (fileSet.has(clean + '/index.html')) return clean + '/index.html';
  if (fileSet.has(clean + '.html')) return clean + '.html';
  if (fileSet.has(clean)) return clean; // static asset (css/js/jpg/svg/xml/...)
  return null;
}

for (const page of pages) {
  for (const ref of page.refs) {
    linkStats.checked++;
    const target = ref.hashOnly ? page.rel : resolveInternal(ref.path, page.dir);
    if (!ref.hashOnly && ref.path.replace(/\/+$/, '') === '/404') continue; // links TO /404 ignored
    if (!target) {
      linkStats.broken++;
      errors.push(`${page.rel}: broken internal link "${ref.raw}"`);
      continue;
    }
    if (ref.hash) {
      fragStats.checked++;
      if (target.endsWith('.html')) {
        const ids = pageIds.get(target);
        if (!ids?.has(ref.hash)) {
          fragStats.dangling++;
          errors.push(
            `${page.rel}: dangling fragment "#${ref.hash}" — no matching id/name in ${target === page.rel ? 'the same page' : target}`
          );
        }
      }
      // fragments into non-HTML assets (e.g. svg sprites) are not verified
    }
  }
}

// ---- trailing-slash href violations become errors ----
for (const offender of slashOffenders) errors.push(`${offender} (trailingSlash: 'never')`);

// ---- {{VERIFY}} survival: the marker contract is that owners confirm facts ----
const TEXT_EXT = /\.(?:astro|ts|tsx|js|jsx|mjs|cjs|md|mdx|json|css|scss|txt|yaml|yml|html)$/;
let verifyCount = 0;
try {
  for (const f of walk(SRC)) {
    if (!TEXT_EXT.test(f)) continue;
    if (readFileSync(f, 'utf8').includes('{{VERIFY}}')) verifyCount++;
  }
} catch {
  warnings.push(`could not walk src/ for {{VERIFY}} markers at: ${SRC}`);
}
if (verifyCount === 0) {
  errors.push(
    '{{VERIFY}} markers: 0 files found in src/ — owner-confirmation contract broken (content awaiting review was likely deleted silently)'
  );
}

// ---- sitemap coverage ----
const sitemapUrls = [...readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => m[1]
);
for (const url of sitemapUrls) {
  if (url.endsWith('/') && url !== SITE + '/') {
    errors.push(`sitemap URL ends with "/": ${url}`);
  }
}
const builtUrls = new Set(
  htmlRels.map((rel) => {
    const u = rel.replace(/index\.html$/, '').replace(/\.html$/, '');
    return new URL('/' + u, SITE).href.replace(/\/$/, '');
  })
);

// privacy / terms are indexable but deliberately kept out of the sitemap in
// every locale (a sitemap need not be exhaustive); the root 404 is noindex.
const EXCLUDED_FROM_SITEMAP = new Set(['privacy', 'terms']);

for (const url of sitemapUrls) {
  const normalized = url.replace(/\/$/, '');
  const normalizedBuilt = normalized.replace(SITE, '');
  const found = [...builtUrls].some((b) => b === normalized || b.endsWith(normalizedBuilt));
  if (!found) errors.push(`sitemap URL has no built page: ${url}`);
}
// Reverse direction: the sitemap must not contain error pages (noindex 404s)
// or the excluded legal pages. A 404 or excluded page in the sitemap is an
// error — search engines would crawl what we told them to skip.
for (const url of sitemapUrls) {
  const p = url.replace(SITE, '').replace(/\/$/, '') || '/';
  const tail = p.split('/').filter((s) => s && !LOCALES.includes(s));
  if (tail[tail.length - 1] === '404' || p === '/404') {
    errors.push(`sitemap includes a 404/error page: ${url}`);
  }
  if (EXCLUDED_FROM_SITEMAP.has(tail[tail.length - 1])) {
    errors.push(`sitemap includes excluded legal page: ${url}`);
  }
}
// Every built, indexable, sitemap-eligible page must actually be in the
// sitemap. isSourcePageHtml gates this: with fallbackType: '404' every built
// page has a hand-written source route, so a page failing that check signals
// a build/orphan problem rather than an intentional exclusion.
for (const b of builtUrls) {
  const path = b.replace(SITE, '') || '/';
  if (path === '/404' || path.includes('/404')) continue;
  const tail = path.split('/').filter((s) => s && !LOCALES.includes(s));
  if (EXCLUDED_FROM_SITEMAP.has(tail[tail.length - 1])) continue;
  const pathNoRoot = path.replace(/^\//, '');
  const htmlRel =
    pathNoRoot === ''
      ? 'index.html'
      : pathNoRoot.includes('/')
        ? pathNoRoot + '/index.html'
        : pathNoRoot + '.html';
  if (!isSourcePageHtml(htmlRel)) continue;
  const inSitemap = sitemapUrls.some((u) => {
    const up = u.replace(SITE, '').replace(/\/$/, '') || '/';
    return up === path;
  });
  if (!inSitemap) errors.push(`built page missing from sitemap: ${path}`);
}

// ---- self-canonical check (i18n). Every non-default-locale page must
// canonicalize to its own localized URL (not the English twin, not a hub
// page). The canonical is the source of truth for "which page is this"; a
// /zh/… page that canonicals to /… or to a parent hub is a regression.
for (const [rel, meta] of pageMeta) {
  const loc = localeOf(rel);
  if (loc === 'en') continue;
  if (meta.noindex) continue; // noindex pages have no canonical requirement
  if (!meta.canonical) continue; // missing canonical already flagged above
  // The page's own URL, derived from the built path.
  const ownUrl =
    new URL('/' + rel.replace(/index\.html$/, '').replace(/\.html$/, ''), SITE).href.replace(/\/$/, '');
  if (meta.canonical !== ownUrl) {
    errors.push(`${rel}: canonical "${meta.canonical}" != own URL "${ownUrl}" (must self-canonicalize)`);
  }
}

// ---- report ----
console.log(`Pages checked: ${htmlRels.length}`);
console.log(`Sitemap URLs: ${sitemapUrls.length}`);
console.log('JSON-LD types:', Object.fromEntries([...jsonLdTypes.entries()].sort()));
console.log(`Internal links: ${linkStats.checked} checked, ${linkStats.broken} broken`);
console.log(`Anchors: ${fragStats.checked} checked, ${fragStats.dangling} dangling`);
console.log(`Trailing slashes: ${slashOffenders.length} offending URLs`);
console.log(`OG meta: ${ogStats.pages}/${htmlRels.length} pages complete, ${ogStats.files} og:image files verified`);
console.log(`{{VERIFY}} files: ${verifyCount}`);
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
