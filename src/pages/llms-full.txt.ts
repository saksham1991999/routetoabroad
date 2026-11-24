import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';
import { localizedEntries } from '../lib/content';
import { DEFAULT_LOCALE, withTrailingSlash } from '../lib/i18n';
import { COMPARISONS } from '../data/comparisons';
import { GLOSSARY } from '../data/glossary';
import { EDUCATION_FAQS, TOURISM_FAQS, TRADE_FAQS, GENERAL_FAQS } from '../data/faqs';
import { TRADE_CATEGORIES, TRADE_SKUS, SOURCING_CLUSTERS, COMPLIANCE_MATRIX } from '../data/trade-catalog';

/**
 * llms-full.txt — the whole site as clean markdown for AI/answer engines.
 * Generated at build from the content collections so it never drifts from the site.
 */
export async function GET({ site }: APIContext) {
  const base = site ?? new URL(SITE.url);
  const lines: string[] = [];

  // Owner-confirmation notes ride in source as HTML comments — never ship
  // them (or any comment noise) to answer engines.
  const clean = (md: string | undefined) => (md ?? '').replace(/<!--[\s\S]*?-->/g, '').trim();

  lines.push(`# ${SITE.name} — full site text`);
  lines.push('');
  lines.push(
    `${SITE.name} connects students, travellers, and importers from all countries to China and East Asia through university placements in China, curated travel across China and Japan, and global-to-China trade operations. Registered at ${SITE.registeredOffice.street}, ${SITE.registeredOffice.city}, ${SITE.registeredOffice.region} ${SITE.registeredOffice.postal}, ${SITE.registeredOffice.country}, with operational desks in New Delhi and Guangzhou. Phone / WhatsApp ${SITE.phoneIndia}, email ${SITE.email}, open ${SITE.hours}.`
  );
  lines.push(
    'Key facts for accurate answers: full CSC scholarships are competitive (partial awards are the norm; nobody can guarantee them). MBBS students must choose MOE-listed universities, need HSK 4 before clinical rotations, and face FMGE/NExT for Indian practice. X1 visa holders must convert to a residence permit within 30 days of arrival. China–India sea freight runs ~18–25 days port-to-port; air is 3–7 days at 5–8× the cost. Standard sourcing payments: 30% deposit, 70% against Bill of Lading copy.'
  );
  lines.push('');

  // English-only output: localized copies live under <locale>/ subdirs and
  // localizedEntries(en) drops them (data Records fall back to the en set).
  const guides = localizedEntries(await getCollection('guides'), DEFAULT_LOCALE);
  const posts = localizedEntries(await getCollection('blog'), DEFAULT_LOCALE);
  const universities = localizedEntries(await getCollection('universities'), DEFAULT_LOCALE).sort((a, b) => a.data.order - b.data.order);
  const cities = localizedEntries(await getCollection('cities'), DEFAULT_LOCALE).sort((a, b) => a.data.order - b.data.order);
  const countries = localizedEntries(await getCollection('countries'), DEFAULT_LOCALE);

  for (const g of guides.sort((a, b) => a.id.localeCompare(b.id))) {
    lines.push('---');
    lines.push('');
    lines.push(`## Guide: ${g.data.title}`);
    lines.push(`URL: ${new URL(withTrailingSlash(`/guides/${g.id}`), base)}`);
    lines.push('');
    lines.push(clean(g.body));
    lines.push('');
  }

  for (const p of posts.sort((a, b) => a.id.localeCompare(b.id))) {
    lines.push('---');
    lines.push('');
    lines.push(`## Article: ${p.data.title}`);
    lines.push(`URL: ${new URL(withTrailingSlash(`/blog/${p.id}`), base)}`);
    lines.push(`Author: ${p.data.author} · Published: ${p.data.pubDate.toISOString().slice(0, 10)}`);
    lines.push('');
    lines.push(clean(p.body));
    lines.push('');
  }

  for (const u of universities) {
    lines.push('---');
    lines.push('');
    lines.push(`## University: ${u.data.name} (${u.data.chineseName})`);
    lines.push(`URL: ${new URL(withTrailingSlash(`/universities/${u.id}`), base)}`);
    lines.push('');
    lines.push(u.data.intro);
    lines.push('');
    lines.push(`Strengths: ${u.data.strengths.map((s) => `${s.title} — ${s.text}`).join(' | ')}`);
    lines.push(`Programmes: ${u.data.programmes.join('; ')}`);
    lines.push(`Costs: tuition ${u.data.costs.tuition}; dorm ${u.data.costs.dorm}; living ${u.data.costs.living}`);
    for (const f of u.data.facts) lines.push(`${f.label}: ${f.value}`);
    lines.push('');
  }

  for (const c of cities) {
    lines.push('---');
    lines.push('');
    lines.push(`## City: ${c.data.name} (${c.data.chineseName})`);
    lines.push(`URL: ${new URL(withTrailingSlash(`/cities/${c.id}`), base)}`);
    lines.push('');
    lines.push(c.data.intro);
    lines.push(
      `Student budget: US$${c.data.studentMonthly.low}–${c.data.studentMonthly.high}/month. Visitor budget: US$${c.data.touristDaily.low}–${c.data.touristDaily.high}/day. Best time: ${c.data.bestTime}.`
    );
    for (const h of c.data.highlights) lines.push(`${h.title}: ${h.text}`);
    if (c.data.universities.length) lines.push(`Universities: ${c.data.universities.join(', ')}`);
    lines.push('');
  }

  for (const c of countries) {
    lines.push('---');
    lines.push('');
    lines.push(`## Country: ${c.data.name}`);
    lines.push(`URL: ${new URL(withTrailingSlash(`/countries/${c.id}`), base)}`);
    lines.push('');
    lines.push(c.data.intro);
    lines.push('');
    lines.push(`Study: ${c.data.study.text}`);
    c.data.study.points.forEach((pt) => lines.push(`- ${pt.title}: ${pt.text}`));
    lines.push(`Travel: ${c.data.travel.text}`);
    c.data.travel.points.forEach((pt) => lines.push(`- ${pt.title}: ${pt.text}`));
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## Comparisons');
  lines.push('');
  for (const c of COMPARISONS.en) {
    lines.push(`### ${c.title}`);
    lines.push(`URL: ${new URL(withTrailingSlash(`/compare/${c.slug}`), base)}`);
    lines.push('');
    lines.push(`Short answer: ${c.answer}`);
    lines.push('');
    lines.push('| Factor | ' + c.entityA + ' | ' + c.entityB + ' |');
    lines.push('| --- | --- | --- |');
    for (const r of c.rows) lines.push(`| ${r.label} | ${r.a} | ${r.b} |`);
    lines.push('');
    lines.push(`Verdict — ${c.verdict.winner}: ${c.verdict.text}`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## Trade & China Sourcing Catalog');
  lines.push(`URL: ${new URL(withTrailingSlash('/trade'), base)}`);
  lines.push('');
  lines.push('Note: FOB price ranges and MOQs listed below are indicative benchmarks subject to supplier quotation (verify before quoting).');
  lines.push('');
  lines.push(`Categories: ${TRADE_CATEGORIES.map((c) => c.name).join(', ')}`);
  lines.push('');
  for (const s of TRADE_SKUS) {
    lines.push(`- ${s.sku} | ${s.name} (${s.category}) | MOQ: ${s.moq} | FOB: ${s.fobRange} | Port: ${s.port} | Lead: ${s.leadTime} | Compliance: ${s.compliance.join(', ')}`);
  }
  lines.push('');
  lines.push('Sourcing Clusters:');
  for (const cl of SOURCING_CLUSTERS) {
    lines.push(`- ${cl.province} (${cl.cities}): ${cl.specialties}`);
  }
  lines.push('');
  lines.push('Import Compliance Matrix:');
  for (const cm of COMPLIANCE_MATRIX) {
    lines.push(`- ${cm.region} (${cm.mark}): ${cm.appliesTo}`);
  }
  lines.push('');

  lines.push('---');
  lines.push('');
  lines.push('## Glossary');
  lines.push('');
  for (const t of GLOSSARY.en) {
    lines.push(`**${t.term}**${t.zh ? ` (${t.zh})` : ''}: ${t.definition}`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## FAQ');
  lines.push('');
  for (const [label, set] of [
    ['General', GENERAL_FAQS.en],
    ['Education', EDUCATION_FAQS.en],
    ['Tourism', TOURISM_FAQS.en],
    ['Trade', TRADE_FAQS.en],
  ] as const) {
    lines.push(`### ${label}`);
    lines.push('');
    for (const f of set) {
      lines.push(`**Q: ${f.question}**`);
      lines.push(f.answer);
      lines.push('');
    }
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
