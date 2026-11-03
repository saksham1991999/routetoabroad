/**
 * JSON-LD schema builders (SEO / AEO / GEO).
 * Each returns a plain object; pages pass them to <JsonLd {...} />.
 */
import { SITE } from './site';
import { DEFAULT_LOCALE, translatePath, type Locale } from './i18n';

type Crumb = { name: string; url: string };

/**
 * Absolutize a URL against SITE.url. Pages pass paths (absolute like
 * '/education' or localized like '/zh/education'); Google requires absolute
 * URLs in BreadcrumbList/Service/Course item+url fields, so the builders
 * normalize centrally instead of trusting every caller.
 */
function absUrl(u: string): string {
  return /^https?:\/\//i.test(u) ? u : new URL(u, SITE.url).href;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png`,
    email: SITE.email,
    foundingDate: String(SITE.founded),
    description:
      'Consultancy connecting India and East Asia through education placements, cultural tourism, and cross-border trade services.',
    address: SITE.offices.map((o) => ({
      '@type': 'PostalAddress',
      streetAddress: o.street,
      addressLocality: o.city,
      addressRegion: o.region,
      postalCode: o.postal,
      addressCountry: o.country,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phoneIndiaHref.replace('tel:', ''),
        contactType: 'customer service',
        areaServed: ['IN', 'CN', 'SA', 'AE', 'NG', 'KE'],
        availableLanguage: ['English', 'Chinese', 'Hindi', 'Malayalam'],
      },
    ],
    sameAs: Object.values(SITE.socials),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function localBusinessSchema(officeIndex: number) {
  const o = SITE.offices[officeIndex];
  // Publish only verified numbers: the India office uses the national line,
  // the China office omits telephone until its own number is confirmed
  // (SITE.phoneChina is {{VERIFY}}-marked).
  const telephone =
    o.country === 'IN' ? SITE.phoneIndiaHref.replace('tel:', '') : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#office-${o.id}`,
    name: `${SITE.name} — ${o.city}`,
    parentOrganization: { '@id': `${SITE.url}/#organization` },
    url: SITE.url,
    email: SITE.email,
    ...(telephone ? { telephone } : {}),
    image: `${SITE.url}/og/default.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.street,
      addressLocality: o.city,
      addressRegion: o.region,
      postalCode: o.postal,
      addressCountry: o.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: o.lat, longitude: o.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

/**
 * BreadcrumbList with a locale-aware Home crumb. `locale` defaults to the
 * unprefixed English tree; localized callers (Seo.astro passes the page
 * locale through) get a Home that points at their own localized homepage —
 * the intermediate crumbs are already localized by the callers.
 */
export function breadcrumbSchema(crumbs: Crumb[], locale: Locale = DEFAULT_LOCALE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { name: 'Home', url: translatePath('/', locale) },
      ...crumbs,
    ].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absUrl(c.url),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function courseSchema(opts: {
  name: string;
  description: string;
  url: string;
  /** The actual teaching institution — name and page URL. */
  providerName?: string;
  providerUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.url),
    provider: {
      '@type': 'CollegeOrUniversity',
      '@id': opts.providerUrl ? absUrl(opts.providerUrl) : `${SITE.url}/#organization`,
      name: opts.providerName ?? SITE.name,
      sameAs: opts.providerUrl ? absUrl(opts.providerUrl) : SITE.url,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.url),
    serviceType: opts.serviceType,
    areaServed: opts.areaServed ?? ['IN', 'CN'],
    provider: { '@id': `${SITE.url}/#organization` },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: { '@type': 'ImageObject', url: opts.image, width: 1200, height: 630 },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Person',
      name: opts.authorName,
      ...(opts.authorUrl ? { url: opts.authorUrl } : {}),
    },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(opts.url) },
    ...(opts.section ? { articleSection: opts.section } : {}),
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  url?: string;
  sameAs?: string[];
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.jobTitle,
    worksFor: { '@id': `${SITE.url}/#organization` },
    ...(opts.url ? { url: opts.url } : {}),
    ...(opts.sameAs ? { sameAs: opts.sameAs } : {}),
    ...(opts.description ? { description: opts.description } : {}),
  };
}

export function reviewSchema(reviews: {
  author: string;
  reviewBody: string;
  rating?: number;
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png`,
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.reviewBody,
      ...(r.rating
        ? { reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 } }
        : {}),
    })),
  };
}

export function definedTermSchemas(terms: { term: string; definition: string }[]) {
  return terms.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: t.term,
    description: t.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'RouteToAbroad Glossary — East Asia education, travel and trade terms',
      url: `${SITE.url}/glossary`,
    },
  }));
}
