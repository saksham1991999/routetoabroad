import { useLocation } from 'react-router-dom';

export interface SeoMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export const BASE_URL = 'https://routetoabroad.com';
export const DEFAULT_IMAGE = `${BASE_URL}/assets/images/hero_edu.jpg`;

export const LOCALES = ['en', 'zh', 'fr', 'ar'] as const;
export type Locale = typeof LOCALES[number];

export const LOCALE_NAMES: Record<string, string> = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
  ar: 'العربية',
};

const PAGE_META: Record<string, { title: string; description: string; keywords: string }> = {
  '/': {
    title: 'RouteToAbroad | Your Strategic Gateway to East Asia - Education, Tourism & Trade',
    description: 'Expert guidance for studying in China, traveling East Asia, and navigating India-China trade. 500+ students placed, 12+ years experience. Offices in New Delhi & Guangzhou.',
    keywords: 'study in china, mbbs in china, china education consultant, east asia travel, india china trade, chinese scholarship, csc scholarship',
  },
  '/education': {
    title: 'Study in China 2026 | MBBS, Engineering & Scholarship Guide | RouteToAbroad',
    description: 'Apply for MBBS, Engineering & scholarship programs at China\'s top universities. 100% visa success rate, CSC scholarships, HSK training. Partner with Peking, Tsinghua, Fudan & more.',
    keywords: 'study in china, mbbs in china, china scholarship, csc scholarship, mbbs abroad, engineering in china, chinese university admission',
  },
  '/tourism': {
    title: 'Custom East Asia Tours 2026 | China & Japan Travel Packages | RouteToAbroad',
    description: 'Bespoke cultural tours, business delegations & heritage journeys across China & Japan. Expert guides, visa concierge, 24/7 support. Experience Asia with local experts.',
    keywords: 'china tour, japan travel, beijing tour, shanghai tour, china business delegation, cultural immersion china, east asia travel agency',
  },
  '/trade': {
    title: 'India-China Trade Solutions 2026 | Sourcing, QC & Logistics | RouteToAbroad',
    description: 'End-to-end procurement, factory audits, quality control & logistics for India-China trade. 5000+ verified suppliers, 18-22 day sea freight. Your trusted trade partner.',
    keywords: 'india china trade, china sourcing, factory audit china, quality control china, india china import, supply chain china, china supplier verification',
  },
  '/about': {
    title: 'About RouteToAbroad | Our Story, Mission & Leadership Team',
    description: 'Founded in 2012, RouteToAbroad bridges borders through education, tourism & trade. Meet our leadership team with lived experience in India & China.',
    keywords: 'about routetoabroad, education consultancy india, cross border services, india china bridge',
  },
  '/contact': {
    title: 'Contact RouteToAbroad | Education, Tourism & Trade Inquiries',
    description: 'Get in touch for study abroad guidance, custom travel planning, or trade inquiries. Offices in New Delhi, India & Guangzhou, China. Response within 24 hours.',
    keywords: 'contact routetoabroad, study abroad consultant, china travel inquiry, trade enquiry',
  },
  '/blog': {
    title: 'Insights & Resources | Education, Tourism & Trade Blog | RouteToAbroad',
    description: 'Expert guides, student stories & industry insights on studying in China, East Asian travel & India-China trade. Stay informed with our regularly updated blog.',
    keywords: 'study in china blog, china education guide, east asia travel tips, india china trade insights',
  },
};

export function useSeoMeta(pagePath?: string): SeoMetaProps {
  const location = useLocation();
  const path = pagePath || location.pathname;
  
  const meta = PAGE_META[path] || PAGE_META['/'];
  const canonical = `${BASE_URL}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    ogImage: DEFAULT_IMAGE,
    ogType: 'website',
    canonical,
  };
}

export function getHreflangLinks(currentPath: string): Array<{ hreflang: string; href: string }> {
  return LOCALES.map((locale) => ({
    hreflang: locale,
    href: `${BASE_URL}/${locale === 'en' ? '' : locale + '/'}${currentPath.replace(/^\/(en|zh|fr|ar)\/?/, '')}`,
  }));
}
