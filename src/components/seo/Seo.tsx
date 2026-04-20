import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL, DEFAULT_IMAGE, type SeoMetaProps } from './seo.config';
export interface BreadcrumbItem {
  name: string;
  url: string;
}

import { breadcrumbSchema } from './structuredData';

interface SeoProps extends SeoMetaProps {
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
  articleSchema?: Record<string, unknown>;
}

const PAGE_TITLES: Record<string, string> = {
  '/': 'RouteToAbroad | Your Strategic Gateway to East Asia - Education, Tourism & Trade',
  '/education': 'Study in China 2026 | MBBS, Engineering & Scholarship Guide | RouteToAbroad',
  '/tourism': 'Custom East Asia Tours 2026 | China & Japan Travel Packages | RouteToAbroad',
  '/trade': 'India-China Trade Solutions 2026 | Sourcing, QC & Logistics | RouteToAbroad',
  '/about': 'About RouteToAbroad | Our Story, Mission & Leadership Team',
  '/contact': 'Contact RouteToAbroad | Education, Tourism & Trade Inquiries',
  '/blog': 'Insights & Resources | Education, Tourism & Trade Blog | RouteToAbroad',
};

const PAGE_DESCRIPTIONS: Record<string, string> = {
  '/': 'Expert guidance for studying in China, traveling East Asia, and navigating India-China trade. 500+ students placed, 12+ years experience. Offices in New Delhi & Guangzhou.',
  '/education': 'Apply for MBBS, Engineering & scholarship programs at China\'s top universities. 100% visa success rate, CSC scholarships, HSK training.',
  '/tourism': 'Bespoke cultural tours, business delegations & heritage journeys across China & Japan. Expert guides, visa concierge, 24/7 support.',
  '/trade': 'End-to-end procurement, factory audits, quality control & logistics for India-China trade. 5000+ verified suppliers, 18-22 day sea freight.',
  '/about': 'Founded in 2012, RouteToAbroad bridges borders through education, tourism & trade. Meet our leadership team.',
  '/contact': 'Get in touch for study abroad guidance, custom travel planning, or trade inquiries. Offices in New Delhi & Guangzhou.',
  '/blog': 'Expert guides, student stories & industry insights on studying in China, East Asian travel & India-China trade.',
};

export default function Seo({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  noIndex = false,
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  breadcrumbs,
  articleSchema,
  children,
}: SeoProps) {
  const location = useLocation();

  const currentPath = location.pathname;
  const fullCanonical = canonical || `${BASE_URL}${currentPath}`;
  const ogImageUrl = ogImage || DEFAULT_IMAGE;
  const pageTitle = title || PAGE_TITLES[currentPath] || PAGE_TITLES['/'];
  const pageDescription = description || PAGE_DESCRIPTIONS[currentPath] || PAGE_DESCRIPTIONS['/'];

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const jsonSchemas: unknown[] = [];
  
  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonSchemas.push(breadcrumbSchema(breadcrumbs));
  }
  
  if (articleSchema) {
    jsonSchemas.push(articleSchema);
  }

  return (
    <>
      <title>{pageTitle}</title>
      
      <meta name="description" content={pageDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      <link rel="canonical" href={fullCanonical} />
      
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="RouteToAbroad" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="zh_CN" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="ar_SA" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:site" content="@routetoabroad" />
      
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.region" content="CN-44" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="geo.placename" content="New Delhi, India" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      {tags && tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
      
      {jsonSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(jsonSchemas)}
        </script>
      )}
      
      {children}
    </>
  );
}
