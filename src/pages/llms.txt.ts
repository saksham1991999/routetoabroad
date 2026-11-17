import type { APIContext } from 'astro';
import { SITE } from '../lib/site';

/**
 * llms.txt — concise GEO (Generative Engine Optimization) directory for AI crawlers.
 */
export async function GET({ site }: APIContext) {
  const base = site ?? new URL(SITE.url);
  const u = (p: string) => new URL(p, base).href;

  const body = `# ${SITE.name}
> Global-to-China & East Asia consultancy connecting students, travellers, and importers from all countries to China and Japan.

Registered Office: ${SITE.registeredOffice.street}, ${SITE.registeredOffice.city}, ${SITE.registeredOffice.region} ${SITE.registeredOffice.postal}, ${SITE.registeredOffice.country}
Operational Desks: ${SITE.offices.map((o) => `${o.city} (${o.street})`).join(' | ')}
Phone / WhatsApp: ${SITE.phoneIndia}
Email: ${SITE.email}
Hours: ${SITE.hours}

## Core Pillars
- [Education — Study in China from All Countries](${u('/education')}): MBBS, Engineering, CS, Business, Chinese Language (HSK), Master's, PhD, and CSC scholarships.
- [University Directory](${u('/universities')}): MOE-listed, WHO/NMC/WDOMS-recognized Chinese medical, technical, and comprehensive universities with real tuition & dorm ranges.
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
