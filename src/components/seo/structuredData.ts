import { COMPANY, SOCIAL_LINKS } from '../../constants';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.name,
  url: 'https://routetoabroad.com',
  logo: 'https://routetoabroad.com/favicon.svg',
  description: 'Your strategic gateway to East Asia. Bridging borders through education, tourism, and trade excellence since 2012.',
  foundingDate: '2012',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Level 4, Rectangle 1, Saket District Centre',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110017',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Tower B, Victory Plaza, Tianhe District',
      addressLocality: 'Guangzhou',
      addressRegion: 'Guangdong',
      postalCode: '510000',
      addressCountry: 'CN',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone.india,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
      areaServed: 'IN',
    },
    {
      '@type': 'ContactPoint',
      telephone: COMPANY.phone.china,
      contactType: 'customer service',
      availableLanguage: ['English', 'Mandarin'],
      areaServed: 'CN',
    },
  ],
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.twitter,
    SOCIAL_LINKS.youtube,
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: COMPANY.name,
  url: 'https://routetoabroad.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://routetoabroad.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const localBusinessIndiaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://routetoabroad.com/#india-office',
  name: `${COMPANY.name} - India Office`,
  image: 'https://routetoabroad.com/assets/images/ceo_minhaj.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 4, Rectangle 1, Saket District Centre',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110017',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.6139',
    longitude: '77.2090',
  },
  telephone: COMPANY.phone.india,
  email: COMPANY.email,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
  ],
};

export const localBusinessChinaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://routetoabroad.com/#china-office',
  name: `${COMPANY.name} - China Office`,
  image: 'https://routetoabroad.com/assets/images/director_vijeesh.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tower B, Victory Plaza, Tianhe District',
    addressLocality: 'Guangzhou',
    addressRegion: 'Guangdong',
    postalCode: '510000',
    addressCountry: 'CN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '23.1291',
    longitude: '113.2644',
  },
  telephone: COMPANY.phone.china,
  email: COMPANY.email,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'China',
  },
  sameAs: [
    SOCIAL_LINKS.linkedin,
  ],
};

export const personCeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Minhaj Al Shukoor',
  jobTitle: 'Chief Executive Officer',
  worksFor: {
    '@type': 'Organization',
    name: COMPANY.name,
    url: 'https://routetoabroad.com',
  },
  image: 'https://routetoabroad.com/assets/images/ceo_minhaj.webp',
  sameAs: [
    'https://linkedin.com/in/minhajalshukoor',
  ],
};

export const personDirectorSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vijeesh Vijayan',
  jobTitle: 'Director',
  worksFor: {
    '@type': 'Organization',
    name: COMPANY.name,
    url: 'https://routetoabroad.com',
  },
  image: 'https://routetoabroad.com/assets/images/director_vijeesh.webp',
  sameAs: [
    'https://linkedin.com/in/vijeeshvijayan',
  ],
};

export function articleSchema({
  title,
  description,
  url,
  image,
  author,
  authorRole,
  publishedTime,
  modifiedTime,
  category,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  authorRole: string;
  publishedTime: string;
  modifiedTime?: string;
  category: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || 'https://routetoabroad.com/assets/images/social_share.jpg',
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Person',
      name: author,
      jobTitle: authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://routetoabroad.com/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    keywords: tags.join(', '),
    inLanguage: 'en',
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function courseSchema({
  name,
  description,
  provider,
  url,
}: {
  name: string;
  description: string;
  provider: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    url,
  };
}

export function serviceSchema({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: 'https://routetoabroad.com',
    },
    areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${name} Services`,
    },
  };
}

export function aggregateRatingSchema(rating: number, count: number, bestRating = 5, worstRating = 1) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating,
    reviewCount: count,
    bestRating,
    worstRating,
  };
}

export function reviewSchema(reviews: Array<{
  author: string;
  authorRole?: string;
  reviewBody: string;
  datePublished?: string;
  rating?: number;
}>) {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
      jobTitle: review.authorRole,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished || new Date().toISOString().split('T')[0],
    reviewRating: review.rating ? {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    } : undefined,
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: 'https://routetoabroad.com',
    },
  }));
}

export function homePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://routetoabroad.com/#webpage',
    url: 'https://routetoabroad.com/',
    name: 'RouteToAbroad - Your Strategic Gateway to East Asia',
    description: 'Expert guidance for studying in China, traveling East Asia, and navigating India-China trade.',
    isPartOf: {
      '@id': 'https://routetoabroad.com/#website',
    },
    about: {
      '@type': 'Organization',
      '@id': 'https://routetoabroad.com/#organization',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'SiteNavigationElement',
          position: 1,
          name: 'Education',
          url: 'https://routetoabroad.com/education',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 2,
          name: 'Tourism',
          url: 'https://routetoabroad.com/tourism',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 3,
          name: 'Trade',
          url: 'https://routetoabroad.com/trade',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 4,
          name: 'About',
          url: 'https://routetoabroad.com/about',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 5,
          name: 'Contact',
          url: 'https://routetoabroad.com/contact',
        },
      ],
    },
  };
}

export function useSchema(schema: Record<string, unknown>) {
  const schemaString = JSON.stringify(schema);
  
  if (typeof window === 'undefined') return;
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = schemaString;
  script.id = 'dynamic-schema';
  
  const existing = document.getElementById('dynamic-schema');
  if (existing) {
    existing.replaceWith(script);
  } else {
    document.head.appendChild(script);
  }
  
  return () => {
    const el = document.getElementById('dynamic-schema');
    if (el) el.remove();
  };
}
