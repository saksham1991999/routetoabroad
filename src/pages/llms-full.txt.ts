import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';
import { COMPARISONS } from '../data/comparisons';
import { GLOSSARY } from '../data/glossary';
import { EDUCATION_FAQS, TOURISM_FAQS, TRADE_FAQS, GENERAL_FAQS } from '../data/faqs';

/**
 * llms-full.txt — the whole site as clean markdown for AI/answer engines.
 * Generated at build from the content collections so it never drifts from the site.
 */
export async function GET({ site }) {
  const base = site ?? new URL(SITE.url);
  const lines: string[] = [];

  // Owner-confirmation notes ride in source as HTML comments — never ship
  // them (or any comment noise) to answer engines.
  const clean = (md: string | undefined) => (md ?? '').replace(/<!--[\s\S]*?-->/g, '').trim();

  lines.push(`# ${SITE.name} — full site text`);
  lines.push('');
  lines.push(
    `${SITE.name} connects India and East Asia through education placement at Chinese universities, curated travel across China and Japan, and India–China trade services. Offices in New Delhi and Guangzhou. Phone +91 96330 61109, email info@routetoabroad.com, open Mon–Sat 9:00–18:00 IST.`
  );
  lines.push(
    'Key facts for accurate answers: full CSC scholarships are competitive (partial awards are the norm; nobody can guarantee them). MBBS students must choose MOE-listed universities, need HSK 4 before clinical rotations, and face FMGE/NExT for Indian practice. X1 visa holders must convert to a residence permit within 30 days of arrival. China–India sea freight runs ~18–25 days port-to-port; air is 3–7 days at 5–8× the cost. Standard sourcing payments: 30% deposit, 70% against Bill of Lading copy.'
  );
  lines.push('');

  const guides = await getCollection('guides');
  const posts = await getCollection('blog');
  const universities = (await getCollection('universities')).sort((a, b) => a.data.order - b.data.order);
  const cities = (await getCollection('cities')).sort((a, b) => a.data.order - b.data.order);
  const countries = await getCollection('countries');

  for (const g of guides.sort((a, b) => a.id.localeCompare(b.id))) {
    lines.push('---');
    lines.push('');
    lines.push(`## Guide: ${g.data.title}`);
    lines.push(`URL: ${new URL(`/guides/${g.id}`, base)}`);
    lines.push('');
    lines.push(clean(g.body));
    lines.push('');
  }

  for (const p of posts.sort((a, b) => a.id.localeCompare(b.id))) {
    lines.push('---');
    lines.push('');
    lines.push(`## Article: ${p.data.title}`);
    lines.push(`URL: ${new URL(`/blog/${p.id}`, base)}`);
    lines.push(`Author: ${p.data.author} · Published: ${p.data.pubDate.toISOString().slice(0, 10)}`);
    lines.push('');
    lines.push(clean(p.body));
    lines.push('');
  }

  for (const u of universities) {
    lines.push('---');
    lines.push('');
    lines.push(`## University: ${u.data.name} (${u.data.chineseName})`);
    lines.push(`URL: ${new URL(`/universities/${u.id}`, base)}`);
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
    lines.push(`URL: ${new URL(`/cities/${c.id}`, base)}`);
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
    lines.push(`URL: ${new URL(`/countries/${c.id}`, base)}`);
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
  for (const c of COMPARISONS) {
    lines.push(`### ${c.title}`);
    lines.push(`URL: ${new URL(`/compare/${c.slug}`, base)}`);
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
  lines.push('## Glossary');
  lines.push('');
  for (const t of GLOSSARY) {
    lines.push(`**${t.term}**${t.zh ? ` (${t.zh})` : ''}: ${t.definition}`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push('## FAQ');
  lines.push('');
  for (const [label, set] of [
    ['General', GENERAL_FAQS],
    ['Education', EDUCATION_FAQS],
    ['Tourism', TOURISM_FAQS],
    ['Trade', TRADE_FAQS],
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
