/**
 * Glossary page copy — keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations following the terminology in
 * src/i18n/ui.ts and still need native-speaker review. The terms themselves
 * live in src/data/glossary.ts (Record<Locale, GlossaryTerm[]>); term names
 * keep their canonical English/Chinese form across locales so anchors and
 * JSON-LD stay stable.
 */
import type { Locale } from '../../lib/i18n';

export interface GlossaryStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb + hero crumb label. */
  crumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  /** aria-label of the category chip nav. */
  tocAria: string;
  /** Category display labels, keyed by the GlossaryTerm category enum. */
  categories: Record<'education' | 'visas' | 'exams' | 'travel' | 'trade', string>;
  /** Footer note split around the /contact inline link. */
  notePre: string;
  noteLink: string;
  notePost: string;
}

export const GLOSSARY_PAGE: Record<Locale, GlossaryStrings> = {
  en: {
    meta: {
      title: 'Glossary — CSC, JW202, HSK, AQL & East Asia Terms Explained',
      description:
        'Plain-English definitions for the terms of studying, travelling and trading across East Asia: CSC scholarship, JW202, X1 visa, HSK, AQL, Bill of Lading, Canton Fair and more.',
    },
    crumb: 'Glossary',
    hero: {
      eyebrow: 'Glossary',
      title: 'Every acronym, in plain English.',
      lede: 'The vocabulary of the corridor — defined the way we explain them on calls. Anchors below; link straight to any term.',
    },
    tocAria: 'Glossary categories',
    categories: {
      education: 'Education',
      visas: 'Visas',
      exams: 'Exams & Language',
      travel: 'Travel',
      trade: 'Trade',
    },
    notePre: 'Something missing? ',
    noteLink: 'Tell us',
    notePost: ' and we’ll add it — the glossary grows with every intake.',
  },

  zh: {
    meta: {
      title: '术语表 — CSC、JW202、HSK、AQL 与东亚术语详解',
      description: '用平实语言解释跨越东亚的留学、旅行与贸易术语：CSC 奖学金、JW202、X1 签证、HSK、AQL、提单、广交会等。',
    },
    crumb: '术语表',
    hero: {
      eyebrow: '术语表',
      title: '每个缩写，都有平实的解释。',
      lede: '走廊上的词汇——按我们电话里解释的方式定义。下方有锚点；可直接链接到任意术语。',
    },
    tocAria: '术语表分类',
    categories: {
      education: '教育',
      visas: '签证',
      exams: '考试与语言',
      travel: '旅行',
      trade: '贸易',
    },
    notePre: '还缺什么？',
    noteLink: '告诉我们',
    notePost: '，我们会补上——术语表随每一批学生一起增长。',
  },

  fr: {
    meta: {
      title: 'Glossaire — CSC, JW202, HSK, AQL et les termes de l’Asie de l’Est expliqués',
      description:
        'Définitions en clair des termes des études, voyages et commerce en Asie de l’Est : bourse CSC, JW202, visa X1, HSK, AQL, Bill of Lading, Canton Fair et plus.',
    },
    crumb: 'Glossaire',
    hero: {
      eyebrow: 'Glossaire',
      title: 'Chaque acronyme, expliqué simplement.',
      lede: 'Le vocabulaire du corridor — défini comme nous l’expliquons au téléphone. Ancres ci-dessous ; lien direct vers chaque terme.',
    },
    tocAria: 'Catégories du glossaire',
    categories: {
      education: 'Études',
      visas: 'Visas',
      exams: 'Examens & langues',
      travel: 'Voyage',
      trade: 'Commerce',
    },
    notePre: 'Quelque chose manque ? ',
    noteLink: 'Dites-le-nous',
    notePost: ' et nous l’ajouterons — le glossaire grandit à chaque rentrée.',
  },

  ar: {
    meta: {
      title: 'المصطلحات — شرح CSC وJW202 وHSK وAQL ومصطلحات شرق آسيا',
      description:
        'تعريفات مبسطة لمصطلحات الدراسة والسفر والتجارة عبر شرق آسيا: منحة CSC، نموذج JW202، تأشيرة X1، HSK، AQL، بوليصة الشحن، معرض كانتون وغيرها.',
    },
    crumb: 'المصطلحات',
    hero: {
      eyebrow: 'المصطلحات',
      title: 'كل اختصار، بلغة مبسطة.',
      lede: 'مفردات الممر — معرّفة كما نشرحها على الهاتف. روابط أدناه؛ اربط مباشرة إلى أي مصطلح.',
    },
    tocAria: 'فئات المصطلحات',
    categories: {
      education: 'التعليم',
      visas: 'التأشيرات',
      exams: 'الاختبارات واللغة',
      travel: 'السفر',
      trade: 'التجارة',
    },
    notePre: 'شيء مفقود؟ ',
    noteLink: 'أخبرنا',
    notePost: ' وسنضيفه — قاموس المصطلحات ينمو مع كل دفعة.',
  },

  es: {
    meta: {
      title: 'Glosario — CSC, JW202, HSK, AQL y términos de Asia Oriental explicados',
      description:
        'Definiciones en lenguaje claro de los términos de estudiar, viajar y comerciar en Asia Oriental: beca CSC, JW202, visado X1, HSK, AQL, Bill of Lading, Feria de Cantón y más.',
    },
    crumb: 'Glosario',
    hero: {
      eyebrow: 'Glosario',
      title: 'Cada sigla, en lenguaje claro.',
      lede: 'El vocabulario del corredor — definido como lo explicamos por teléfono. Anclas abajo; enlaza directo a cualquier término.',
    },
    tocAria: 'Categorías del glosario',
    categories: {
      education: 'Estudios',
      visas: 'Visados',
      exams: 'Exámenes e idiomas',
      travel: 'Viajes',
      trade: 'Comercio',
    },
    notePre: '¿Falta algo? ',
    noteLink: 'Cuéntanos',
    notePost: ' y lo añadimos — el glosario crece con cada ingreso.',
  },
};
