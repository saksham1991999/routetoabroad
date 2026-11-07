/**
 * i18n helpers — single source of truth for locales, native labels,
 * directory attributes, and URL translation across the site.
 *
 * Astro's i18n routing (see astro.config.mjs) drives the URL structure:
 * English pages live at the unprefixed root, every other locale under
 * /<locale>/ (currently zh, fr, ar, es, de, ja, pt, hi). This module adds
 * what Astro doesn't: native labels, direction (Arabic is the only RTL
 * locale), and a path-translation helper that mirrors astro:i18n's
 * getRelativeLocaleUrl without needing it in every file.
 */

export const LOCALES = ['en', 'zh', 'fr', 'ar', 'es', 'de', 'ja', 'pt', 'hi'] as const;
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
  de: { code: 'de', label: 'German', nativeLabel: 'Deutsch', dir: 'ltr', prefixed: true },
  ja: { code: 'ja', label: 'Japanese', nativeLabel: '日本語', dir: 'ltr', prefixed: true },
  pt: { code: 'pt', label: 'Portuguese', nativeLabel: 'Português', dir: 'ltr', prefixed: true },
  hi: { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', dir: 'ltr', prefixed: true },
};

/**
 * Regex matching a locale URL prefix at the start of a path, derived from
 * LOCALES so a new locale needs one edit only (this list, plus astro.config).
 * Matches /zh, /fr/…, /de/… etc. but never a bare non-locale segment.
 */
/** Locales that carry a URL prefix: everything except the default. */
export const PREFIXED_LOCALES: readonly Locale[] = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

const PREFIX_RE = new RegExp(`^\\/+(?:${PREFIXED_LOCALES.join('|')})(?=\\/|$)`);

/** Drop a leading locale segment: '/zh/education' becomes '/education', '/zh' becomes ''. */
export function stripLocalePrefix(pathname: string): string {
  return pathname.replace(PREFIX_RE, '');
}

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
  const stripped = path.replace(PREFIX_RE, '');
  const p = stripped.startsWith('/') ? stripped : `/${stripped}`;
  if (locale === DEFAULT_LOCALE) {
    return p === '/' ? '/' : p.replace(/\/$/, '');
  }
  return p === '/' ? `/${locale}` : `/${locale}${p}`;
}


/**
 * BCP-47 tags for Intl number/date formatting. Arabic pins Latin digits
 * (-u-nu-latn) so prices and dates match the rest of the site's numerals.
 */
export const INTL_TAG: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  fr: 'fr-FR',
  ar: 'ar-u-nu-latn',
  es: 'es-ES',
  de: 'de-DE',
  ja: 'ja-JP',
  // Brazil is the dominant Portuguese-speaking market for the site; the URL
  // prefix stays 'pt'.
  pt: 'pt-BR',
  hi: 'hi-IN',
};

/** Date-formatting tags: English keeps the site's long-standing en-IN style. */
export const DATE_TAG: Record<Locale, string> = { ...INTL_TAG, en: 'en-IN' };

/**
 * Localize root-relative internal links inside rendered markdown HTML.
 * Content-collection bodies are shared by every locale and written with
 * unprefixed links (e.g. [guide](/guides/china-visa-types)); this rewrites
 * `<a href="/…">` for the page's locale. External, protocol-relative, hash,
 * mailto/tel and relative links pass through untouched.
 */
export function localizeHtmlLinks(html: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return html;
  return html.replace(/(<a\s[^>]*?\bhref=")(\/(?!\/)[^"]*)(")/g, (_m, pre, href, post) => {
    return pre + translatePath(href, locale) + post;
  });
}
