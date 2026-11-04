/**
 * Founder profiles — single source shared by every locale's about page.
 * The founders array used to be duplicated inside all five about.astro
 * files; that duplication is how a co-founder once got deleted from four
 * locales by a single bad edit (see commit 0208e1a). Edit here only.
 * Images are imported here so every page shares one asset pipeline entry.
 * Localized pages read FOUNDERS[locale]; role/bio resolve from AUTHORS.
 */
import type { ImageMetadata } from 'astro';
import { LOCALES, type Locale } from '../lib/i18n';
import { AUTHORS } from './authors';

const minhajImg = (await import('../assets/founders/ceo_minhaj.jpg')).default;
const vijeeshImg = (await import('../assets/founders/director_vijeesh.jpg')).default;

/** TODO(i18n): zh/fr/ar/es still alias the English strings — translations pending. */
const pts = (...en: string[]): Record<Locale, string[]> => ({ en, zh: en, fr: en, ar: en, es: en });

const POINTS = {
  minhaj: pts('Sets direction and the partnerships we keep', 'Runs the trade desk', 'Fifteen years across the corridor'),
  vijeesh: pts('Owns academic matching and student files', 'Runs university relationships', 'Hundreds of placements, first call to campus gate'),
} as const;

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: ImageMetadata;
  initials: string;
  linkedin?: string;
  verified: boolean;
  points: string[];
}

/** Per-locale founder cards, resolved from AUTHORS + POINTS. */
export const FOUNDERS = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    [
      { ...AUTHORS.minhaj, role: AUTHORS.minhaj.role[locale], bio: AUTHORS.minhaj.bio[locale], image: minhajImg, points: POINTS.minhaj[locale] },
      { ...AUTHORS.vijeesh, role: AUTHORS.vijeesh.role[locale], bio: AUTHORS.vijeesh.bio[locale], image: vijeeshImg, points: POINTS.vijeesh[locale] },
    ] satisfies Founder[],
  ])
) as Record<Locale, Founder[]>;
