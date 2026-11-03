/**
 * Founder profiles — single source shared by every locale's about page.
 * The founders array used to be duplicated inside all five about.astro
 * files; that duplication is how a co-founder once got deleted from four
 * locales by a single bad edit (see commit 0208e1a). Edit here only.
 * Images are imported here so every page shares one asset pipeline entry.
 */
import { AUTHORS } from './authors';

const minhajImg = (await import('../assets/founders/ceo_minhaj.jpg')).default;
const vijeeshImg = (await import('../assets/founders/director_vijeesh.jpg')).default;

export const FOUNDERS = [
  {
    ...AUTHORS.minhaj,
    image: minhajImg,
    points: ['Sets direction and the partnerships we keep', 'Runs the trade desk', 'Fifteen years across the corridor'],
  },
  {
    ...AUTHORS.vijeesh,
    image: vijeeshImg,
    points: ['Owns academic matching and student files', 'Runs university relationships', 'Hundreds of placements, first call to campus gate'],
  },
];
