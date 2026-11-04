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

const POINTS = {
  minhaj: {
    en: ['Sets direction and the partnerships we keep', 'Runs the trade desk', 'Fifteen years across the corridor'],
    zh: ['把握方向并维系合作网络', '主持贸易业务', '深耕走廊十五年'],
    fr: ['Fixe le cap et entretient nos partenariats', 'Dirige le pôle commerce', 'Quinze ans sur le corridor'],
    ar: ['يحدد التوجه ويحافظ على شراكاتنا', 'يدير مكتب التجارة', 'خمسة عشر عامًا على الممر'],
    es: ['Marca el rumbo y cultiva nuestras alianzas', 'Dirige el área de comercio', 'Quince años en el corredor'],
    de: ['Legt die Richtung fest und pflegt unsere Partnerschaften', 'Leitet den Handels-Desk', 'Fünfzehn Jahre entlang des Korridors'],
    ja: ['方針を定め、パートナーシップを維持', '貿易デスクを統括', 'この回廊で15年の経験'],
    pt: ['Define a direção e mantém as parcerias que cultivamos', 'Lidera a mesa de comércio', 'Quinze anos no corredor'],
    hi: ['दिशा तय करते हैं और हमारी साझेदारियाँ संभालते हैं', 'ट्रेड डेस्क संभालते हैं', 'पंद्रह वर्ष इस गलियारे में'],
  },
  vijeesh: {
    en: ['Owns academic matching and student files', 'Runs university relationships', 'Hundreds of placements, first call to campus gate'],
    zh: ['负责学业匹配与学生档案', '维护大学合作关系', '数百名学生成功入学，从首次咨询到校园注册'],
    fr: ['Pilote le placement académique et les dossiers étudiants', 'Gère les relations universitaires', 'Des centaines de placements, du premier appel au portail du campus'],
    ar: ['مسؤول عن المطابقة الأكاديمية وملفات الطلاب', 'يدير علاقات الجامعات', 'مئات القبولات، من أول اتصال إلى بوابة الحرم'],
    es: ['Responsable del emparejamiento académico y los expedientes', 'Gestiona las relaciones universitarias', 'Cientos de colocaciones, de la primera llamada a la puerta del campus'],
    de: ['Verantwortet die akademische Zuordnung und die Studierendenakten', 'Pflegt die Beziehungen zu den Universitäten', 'Hunderte Platzierungen, vom ersten Anruf bis zum Campus-Tor'],
    ja: ['学術マッチングと学生ファイルを担当', '大学との連携を統括', '数百人の進学実績——最初の電話からキャンパスの門まで'],
    pt: ['Responsável pelo pareamento acadêmico e pelos dossiês dos estudantes', 'Cuida das relações com as universidades', 'Centenas de colocações, da primeira chamada ao portão do campus'],
    hi: ['शैक्षिक मैचिंग और छात्र फ़ाइलों का उत्तरदायी', 'विश्वविद्यालय संबंधों का प्रबंधन', 'सैकड़ों प्लेसमेंट, पहली कॉल से कैंपस गेट तक'],
  },
} satisfies Record<string, Record<Locale, string[]>>;

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
