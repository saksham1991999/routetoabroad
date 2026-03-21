export const COMPANY = {
  name: 'RouteToAbroad',
  email: 'info@routetoabroad.com',
  phone: {
    india: '+91 96330 61109',
    china: '+86 400 123 4567',
  },
  address: {
    india: 'Level 4, Rectangle 1, Saket District Centre, New Delhi, 110017',
    china: 'Tower B, Victory Plaza, Tianhe District, Guangzhou, 510000',
  },
  officeHours: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
  whatsapp: '+919633061109',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/routetoabroad',
  instagram: 'https://instagram.com/routetoabroad',
  twitter: 'https://twitter.com/routetoabroad',
  youtube: 'https://youtube.com/@routetoabroad',
  whatsapp: 'https://wa.me/919633061109',
};

export const ROUTES = {
  home: '/',
  education: '/education',
  tourism: '/tourism',
  trade: '/trade',
  about: '/about',
  contact: '/contact',
  blog: '/blog',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export const NAV_LINKS = [
  { label: 'Education', path: '/education', translationKey: 'nav.education' },
  { label: 'Tourism', path: '/tourism', translationKey: 'nav.tourism' },
  { label: 'Trade', path: '/trade', translationKey: 'nav.trade' },
  { label: 'Insights', path: '/blog', translationKey: 'nav.blog' },
  { label: 'About', path: '/about', translationKey: 'nav.about' },
  { label: 'Contact', path: '/contact', translationKey: 'nav.contact' },
];
