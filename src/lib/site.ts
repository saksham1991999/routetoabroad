/**
 * Single source of truth for site identity, NAP (name/address/phone)
 * and navigation. Every page, JSON-LD block and the footer read from here
 * so entity details stay consistent for search engines and AI crawlers.
 */

export const SITE = {
  name: 'RouteToAbroad',
  legalName: 'RouteToAbroad Consulting',
  title: 'RouteToAbroad — Study in China, Travel East Asia, Trade Across Borders',
  description:
    'Education, tourism and trade across East Asia. RouteToAbroad places students in Chinese universities, designs journeys through China and Japan, and runs India–China trade operations from New Delhi and Guangzhou.',
  url: 'https://routetoabroad.com',
  email: 'info@routetoabroad.com',
  phoneIndia: '+91 96330 61109',
  phoneIndiaHref: 'tel:+919633061109',
  phoneChina: '+86 400 123 4567', // {{VERIFY}} confirm the China toll-free number before launch
  whatsapp: 'https://wa.me/919633061109',
  hours: 'Mon–Sat, 9:00–18:00 IST',
  founded: 2012, // {{VERIFY}} site copy says 2018, schema said 2012 — confirm
  offices: [
    {
      id: 'delhi',
      code: 'DEL',
      country: 'IN',
      city: 'New Delhi',
      street: 'Level 4, Rectangle 1, Saket District Centre',
      postal: '110017',
      region: 'Delhi',
      lat: 28.6139,
      lng: 77.209,
    },
    {
      id: 'guangzhou',
      code: 'CAN',
      country: 'CN',
      city: 'Guangzhou',
      street: 'Tower B, Victory Plaza, Tianhe District',
      postal: '510000',
      region: 'Guangdong',
      lat: 23.1291,
      lng: 113.2644,
    },
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/company/routetoabroad',
    instagram: 'https://www.instagram.com/routetoabroad',
    twitter: 'https://twitter.com/routetoabroad',
    youtube: 'https://www.youtube.com/@routetoabroad',
  },
} as const;

export const NAV_LINKS = [
  { href: '/education', label: 'Education' },
  { href: '/tourism', label: 'Tourism' },
  { href: '/trade', label: 'Trade' },
  { href: '/tools', label: 'Tools' },
  { href: '/guides', label: 'Guides' },
  { href: '/blog', label: 'Insights' },
  { href: '/about', label: 'About' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { href: '/education', label: 'Study in China' },
    { href: '/tourism', label: 'Tours & Travel' },
    { href: '/trade', label: 'Trade & Sourcing' },
    { href: '/for-agents', label: 'For Agents' },
  ],
  tools: [
    { href: '/tools/fit-check', label: 'Fit check' },
    { href: '/tools/scholarship-eligibility', label: 'Scholarship check' },
    { href: '/tools/cost-calculator', label: 'Cost calculator' },
    { href: '/tools/document-checklist', label: 'Document checklist' },
    { href: '/tools/timeline-planner', label: 'Timeline planner' },
  ],
  resources: [
    { href: '/guides', label: 'Guides' },
    { href: '/blog', label: 'Insights' },
    { href: '/faq', label: 'FAQ' },
    { href: '/glossary', label: 'Glossary' },
    { href: '/universities', label: 'Universities' },
    { href: '/cities', label: 'Cities' },
  ],
  company: [
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms' },
  ],
} as const;

export const PILLARS = {
  education: { color: 'var(--edu)', label: 'Education' },
  tourism: { color: 'var(--tourism)', label: 'Tourism' },
  trade: { color: 'var(--trade)', label: 'Trade' },
} as const;

export type PillarKey = keyof typeof PILLARS;

/** Client-carried claims carried over from v1. All flagged for owner confirmation. */
export const CLAIMS = {
  googleRating: '4.9', // {{VERIFY}}
  visaSuccessRate: '98%', // {{VERIFY}}
  studentsPlaced: '500+',
  yearsExperience: '12+',
  countriesServed: 3,
  partnerUniversities: '150+', // {{VERIFY}}
  scholarshipValue: '$2M+', // {{VERIFY}}
} as const;

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgpgllz';

export const CURRENT_YEAR = new Date().getFullYear();
