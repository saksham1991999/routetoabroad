/**
 * Browser-side locale helpers for the inline tool scripts. The scripts are
 * bundled once and shared by every locale's page, so they read the locale from
 * the document (<html lang>, set by BaseLayout) and their translated strings
 * from the tool root's data-i18n attribute, both written at build time.
 */
import { INTL_TAG, type Locale } from './i18n';

const PREFIXED = ['zh', 'fr', 'ar', 'es'];

/** The page locale as set on <html lang> ('en' when unprefixed/unknown). */
export function pageLocale(): string {
  const l = document.documentElement.lang.split('-')[0];
  return PREFIXED.includes(l) ? l : 'en';
}

/** Intl locale tag for the current page (number/date formatting). */
export function intlTag(): string {
  return INTL_TAG[pageLocale() as Locale] ?? INTL_TAG.en;
}

/** Localize an internal English path for the current page's locale. */
export function localizeHref(path: string): string {
  const l = pageLocale();
  if (l === 'en') return path;
  return path === '/' ? `/${l}` : `/${l}${path}`;
}

/** Parse the tool's JSON strings from its root element's data-i18n attribute. */
export function readI18n<T>(root: HTMLElement | null): T {
  return JSON.parse(root?.dataset.i18n ?? '{}') as T;
}
