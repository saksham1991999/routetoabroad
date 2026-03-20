export { default as Seo } from './Seo';
export { 
  articleSchema, 
  breadcrumbSchema, 
  faqSchema, 
  serviceSchema, 
  aggregateRatingSchema, 
  reviewSchema, 
  homePageSchema,
  useSchema 
} from './structuredData';
export type { BreadcrumbItem } from './Seo';
export type { SeoMetaProps } from './seo.config';
export { BASE_URL, DEFAULT_IMAGE, LOCALES, LOCALE_NAMES, useSeoMeta, getHreflangLinks } from './seo.config';
