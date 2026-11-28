/**
 * JSON-LD schema builders (SEO / AEO / GEO).
 * Each returns a plain object; pages pass them to <JsonLd {...} />.
 */
import { SITE } from './site';
import { DEFAULT_LOCALE, translatePath, type Locale } from './i18n';
import { AUTHORS } from '../data/authors';

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

/**
 * @id of a founder's Person node. AboutPage.astro emits Person nodes with the
 * same string, so the Organization founder and the About page person are one entity.
 */
export function founderId(name: string): string {
  const slug = name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${SITE.url}/about#founder-${slug}`;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/icon-512.png?v=2`,
    email: SITE.email,
    description: SITE.description,
    address: [SITE.registeredOffice, ...SITE.offices].map((o) => ({
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
        areaServed: ['US', 'IN', 'CN', 'SA', 'AE', 'NG', 'KE', 'PK', 'GB', 'DE', 'FR', 'ES', 'BR', 'JP'],
        availableLanguage: ['English', 'Chinese', 'Hindi', 'Arabic', 'French', 'Spanish', 'German', 'Japanese', 'Portuguese'],
      },
    ],
    sameAs: Object.values(SITE.socials),
    founder: [AUTHORS.minhaj].map((a) => ({
      '@type': 'Person',
      '@id': founderId(a.name),
      name: a.name,
    })),
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
  /** The teaching institution. */
  providerName: string;
  /** The institution's own website. Omit when the owner has not supplied one. */
  providerUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: absUrl(opts.url),
    // Never RouteToAbroad as provider: with no website, the provider is the
    // institution by name only.
    provider: opts.providerUrl
      ? {
          '@type': 'CollegeOrUniversity',
          '@id': absUrl(opts.providerUrl),
          name: opts.providerName,
          sameAs: absUrl(opts.providerUrl),
        }
      : { '@type': 'Organization', name: opts.providerName },
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
  /** Person for named authors (blog); Organization for the editorial desk (guides). */
  authorType?: 'Person' | 'Organization';
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
      '@type': opts.authorType ?? 'Person',
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
    logo: `${SITE.url}/icon-512.png?v=2`,
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

/** AEO SpeakableSpecification for answer-first pages, guides, and comparisons. */
export function speakableSchema(opts: { url: string; cssSelector?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': absUrl(opts.url),
    url: absUrl(opts.url),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: opts.cssSelector ?? ['h1', '.lede', '.answer-first', 'main p:first-of-type'],
    },
  };
}

/** GEO/SEO OfferCatalog for China-to-World sourcing categories & SKUs. */
export function tradeOfferCatalogSchema(
  items: { name: string; sku: string; category: string; description: string }[],
  url = '/trade'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'RouteToAbroad Global China Sourcing Catalog',
    url: absUrl(url),
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      // Thing, not Product: RouteToAbroad sources these items and does not sell them.
      item: {
        '@type': 'Thing',
        name: item.name,
        description: item.description,
        category: item.category,
        identifier: { '@type': 'PropertyValue', propertyID: 'SKU', value: item.sku },
      },
    })),
  };
}
