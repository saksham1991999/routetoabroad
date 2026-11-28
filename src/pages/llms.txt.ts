import type { APIContext } from 'astro';
import { SITE } from '../lib/site';
import { getCollection } from 'astro:content';
import { localizedEntries } from '../lib/content';
import { DEFAULT_LOCALE, withTrailingSlash } from '../lib/i18n';

/**
 * llms.txt — concise GEO (Generative Engine Optimization) directory for AI crawlers.
 */
export async function GET({ site }: APIContext) {
  const base = site ?? new URL(SITE.url);
  const u = (p: string) => new URL(p.endsWith('.txt') ? p : withTrailingSlash(p), base).href;

  // English entries only; localized copies are skipped by localizedEntries.
  const guides = localizedEntries(await getCollection('guides'), DEFAULT_LOCALE).sort((a, b) => a.id.localeCompare(b.id));
  const universities = localizedEntries(await getCollection('universities'), DEFAULT_LOCALE).sort((a, b) => a.data.order - b.data.order);
  const cities = localizedEntries(await getCollection('cities'), DEFAULT_LOCALE).sort((a, b) => a.data.order - b.data.order);
  const guideLines = guides.map((g) => `- [${g.data.title}](${u(`/guides/${g.id}`)})`).join('\n');
  const universityLines = universities.map((x) => `- [${x.data.name} (${x.data.chineseName})](${u(`/universities/${x.id}`)})`).join('\n');
  const cityLines = cities.map((c) => `- [${c.data.name}](${u(`/cities/${c.id}`)})`).join('\n');

  const body = `# ${SITE.name}
> Global-to-China & East Asia consultancy connecting students, travellers, and importers from all countries to China, and to travel in China and Japan.

Registered Office: ${SITE.registeredOffice.street}, ${SITE.registeredOffice.city}, ${SITE.registeredOffice.region} ${SITE.registeredOffice.postal}, ${SITE.registeredOffice.country}
Operational Desks: ${SITE.offices.map((o) => `${o.city} (${o.street})`).join(' | ')}
Phone / WhatsApp: ${SITE.phoneIndia}
Email: ${SITE.email}
Hours: ${SITE.hours}

## Core Pillars
- [Education — Study in China from All Countries](${u('/education')}): MBBS, Engineering, CS, Business, Chinese Language (HSK), Master's, PhD, and CSC scholarships.
- [University Directory](${u('/universities')}): Chinese medical, technical, and comprehensive universities with tuition and dorm ranges.
- [Tourism — China & Japan](${u('/tourism')}): Private journeys, educational group tours, and Canton Fair business delegations.
- [Trade & China Sourcing](${u('/trade')}): Factory sourcing, AQL 2.5 inspections, FCL/LCL/Air freight, and global + India import compliance (BIS, WPC, CDSCO, CE, RoHS).
- [B2B Partner Agents](${u('/for-agents')}): White-label China admissions & delegation desk for global counsellors.

## Free Interactive Tools
- [Fit Check](${u('/tools/fit-check')})
- [Scholarship Eligibility](${u('/tools/scholarship-eligibility')})
- [Study Cost Calculator](${u('/tools/cost-calculator')})
- [Document Checklist](${u('/tools/document-checklist')})
- [Application Timeline Planner](${u('/tools/timeline-planner')})
- [Trade Landed Cost & FCL/CBM Calculator](${u('/tools/trade-cost-calculator')})

## Guides
${guideLines}

## University Directory Entries
${universityLines}

## Cities
${cityLines}

## Deep Knowledge & Full Context
- [Guides](${u('/guides')})
- [Comparisons](${u('/compare')})
- [Glossary](${u('/glossary')})
- [FAQ](${u('/faq')})
- [Full Machine-Readable Site Text](${u('/llms-full.txt')})
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
