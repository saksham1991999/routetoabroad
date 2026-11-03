/**
 * i18n helpers — single source of truth for locales, native labels,
 * directory attributes, and URL translation across the site.
 *
 * Astro's i18n routing (see astro.config.mjs) drives the URL structure:
 * English pages live at the unprefixed root, every other locale under
 * /<locale>/. This module adds what Astro doesn't: native labels,
 * direction (Arabic is RTL), and a path-translation helper that mirrors
 * astro:i18n's getRelativeLocaleUrl without needing it in every file.
 */

export const LOCALES = ['en', 'zh', 'fr', 'ar', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleMeta {
  /** BCP-47 tag for <html lang> and hreflang/og:locale. */
  code: string;
  /** Human label used in the switcher (English-facing). */
  label: string;
  /** Native-script label used in the switcher. */
  nativeLabel: string;
  /** CSS direction — Arabic is the only RTL locale. */
  dir: 'ltr' | 'rtl';
  /** Whether URLs under this locale carry a prefix. English does not. */
  prefixed: boolean;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr', prefixed: false },
  zh: { code: 'zh', label: 'Chinese', nativeLabel: '中文', dir: 'ltr', prefixed: true },
  fr: { code: 'fr', label: 'French', nativeLabel: 'Français', dir: 'ltr', prefixed: true },
  ar: { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl', prefixed: true },
  es: { code: 'es', label: 'Spanish', nativeLabel: 'Español', dir: 'ltr', prefixed: true },
};

/**
 * Detect the locale from a pathname like /, /zh, /fr/education, /ar/tools/fit-check.
 * Falls back to the default locale when the path carries no recognized prefix.
 */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  if (seg && LOCALES.includes(seg as Locale) && seg !== DEFAULT_LOCALE) {
    return seg as Locale;
  }
  return DEFAULT_LOCALE;
}

/**
 * Translate a site path (e.g. '/education') into the path for `locale`.
 * The default locale strips any prefix; other locales add one.
 * Accepts absolute (starts with /) or relative paths.
 */
export function translatePath(path: string, locale: Locale): string {
  const stripped = path.replace(/^\/+(zh|fr|ar|es)(?=\/|$)/, '');
  const p = stripped.startsWith('/') ? stripped : `/${stripped}`;
  if (locale === DEFAULT_LOCALE) {
    return p === '/' ? '/' : p.replace(/\/$/, '');
  }
  return p === '/' ? `/${locale}` : `/${locale}${p}`;
}

