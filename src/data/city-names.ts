/**
 * Localized display names for the cities that host RouteToAbroad offices,
 * keyed by the stable `id` field of SITE.offices (src/lib/site.ts). The
 * English `city` values in SITE stay canonical for schema/NAP data; this map
 * is only for visible chrome copy (PageHero coords rail, homepage stamp).
 *
 * Locales not listed here (and any unknown id) fall back to the English
 * city name via cityName(), so adding a locale never breaks a build.
 */
import { type Locale } from '../lib/i18n';
import { SITE } from '../lib/site';

export type OfficeCityId = (typeof SITE.offices)[number]['id'];

export const CITY_NAMES: Partial<Record<Locale, Record<OfficeCityId, string>>> = {
  en: { delhi: 'New Delhi', guangzhou: 'Guangzhou' },
  zh: { delhi: '新德里', guangzhou: '广州' },
  fr: { delhi: 'Nouvelle Delhi', guangzhou: 'Guangzhou' },
  ar: { delhi: 'نيودلهي', guangzhou: 'قوانغتشو' },
  es: { delhi: 'Nueva Delhi', guangzhou: 'Cantón' },
  de: { delhi: 'Neu-Delhi', guangzhou: 'Guangzhou' },
  ja: { delhi: 'ニューデリー', guangzhou: '広州' },
  pt: { delhi: 'Nova Délhi', guangzhou: 'Cantão' },
  hi: { delhi: 'नई दिल्ली', guangzhou: 'ग्वांगज़ू' },
};

/** Localized office-city name, falling back to the English name in SITE. */
export function cityName(id: OfficeCityId, locale: Locale): string {
  return (
    CITY_NAMES[locale]?.[id] ??
    SITE.offices.find((o) => o.id === id)?.city ??
    id
  );
}
