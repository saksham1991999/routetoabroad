/**
 * Localized content-collection access.
 *
 * Localized copies of collection entries live in per-locale subdirectories
 * (`src/content/blog/zh/<slug>.md`) with the SAME slug as the English file.
 * The glob loader keeps the subdirectory in the entry id (`zh/<slug>`), so
 * these helpers are the single place that knows how to map (slug, locale) →
 * entry:
 *
 *  - `localizedEntries`  → all entries for a locale, falling back to the
 *    English entry for anything not yet translated (keeps every localized
 *    route alive even if a translation lags).
 *  - `localizedEntry`    → one entry by slug for a locale, same fallback.
 *  - `entrySlug`         → the URL slug of an entry, whatever its locale.
 */
import { DEFAULT_LOCALE, type Locale } from './i18n';

interface LocalizedEntry {
  id: string;
  data: { locale?: Locale };
}

export interface EntryWithSlug {
  id: string;
}

/** The URL slug of an entry — localized ids are `<locale>/<slug>`, en ids are `<slug>`. */
export function entrySlug(entry: EntryWithSlug): string {
  return entry.id.includes('/') ? entry.id.split('/').slice(1).join('/') : entry.id;
}

function isBaseEntry(entry: LocalizedEntry): boolean {
  return !entry.id.includes('/');
}

function localePrefix(locale: Locale): string {
  return `${locale}/`;
}

/**
 * All entries for `locale`: localized copies where they exist, English
 * entries where they don't (missing translations must never 404 a route).
 */
export function localizedEntries<T extends LocalizedEntry>(entries: T[], locale: Locale): T[] {
  if (locale === DEFAULT_LOCALE) return entries.filter(isBaseEntry);
  const localized = entries.filter((e) => e.id.startsWith(localePrefix(locale)));
  const translatedSlugs = new Set(localized.map(entrySlug));
  const fallbacks = entries.filter((e) => isBaseEntry(e) && !translatedSlugs.has(entrySlug(e)));
  return [...localized, ...fallbacks];
}

/** One entry by slug for `locale`, falling back to the English entry. */
export function localizedEntry<T extends LocalizedEntry>(
  entries: T[],
  slug: string,
  locale: Locale
): T | undefined {
  if (locale !== DEFAULT_LOCALE) {
    const hit = entries.find((e) => e.id === `${locale}/${slug}`);
    if (hit) return hit;
  }
  return entries.find((e) => isBaseEntry(e) && entrySlug(e) === slug);
}
