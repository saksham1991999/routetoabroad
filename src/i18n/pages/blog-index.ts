/**
 * Blog index copy — every user-visible string on the shared BlogIndexPage
 * component, keyed by locale. English is the source of truth; zh/fr/ar/es are
 * machine-assisted translations that follow the terminology already
 * established in src/i18n/ui.ts (zh 洞察, fr Analyses, ar رؤى, es Análisis)
 * and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * BlogIndexStrings interface, so a key added to `en` breaks the build until
 * all four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

/** Blog desk (post category) keys — frontmatter enum, never translated. */
export type Desk = 'education' | 'tourism' | 'trade';

export interface BlogIndexStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Section name for /blog — breadcrumbs, nav terminology. */
  crumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    /** Instrument-rail facts; articlesCount carries "{n}" for the live count. */
    facts: {
      notesLabel: string;
      articlesCount: string;
      desksLabel: string;
      desksValue: string;
      cadenceLabel: string;
      cadenceValue: string;
      listiclesLabel: string;
      listiclesValue: string;
    };
  };
  /** Hero action button. */
  action: string;
  filters: {
    /** aria-label of the pill group. */
    aria: string;
    all: string;
    categories: Record<Desk, string>;
  };
  search: { label: string; placeholder: string };
  /** "{total} notes" — rendered after the live "<span>#</span> / " counter. */
  countTotal: string;
  /** "{n} min" — card meta suffix after the localized date. */
  minShort: string;
  /** Empty state when a filter/search combination matches nothing. */
  noResults: string;
}

export const BLOG_INDEX: Record<Locale, BlogIndexStrings> = {
  en: {
    meta: {
      title: 'Insights — Field Notes on Studying, Travelling & Trading in Asia',
      description:
        'The RouteToAbroad desk blog: MBBS decisions, CSC scholarship guides, Beijing and Kyoto travel, India–China trade practice — written by the people doing the work.',
    },
    crumb: 'Insights',
    hero: {
      eyebrow: 'Insights',
      title: 'Notes from both sides of the bridge.',
      lede: "No listicles about '10 reasons to study abroad'. Field notes from admissions desks, tour routes and factory floors.",
      facts: {
        notesLabel: 'Field notes',
        articlesCount: '{n} articles',
        desksLabel: 'Desks',
        desksValue: 'Edu · Travel · Trade',
        cadenceLabel: 'Cadence',
        cadenceValue: 'Monthly',
        listiclesLabel: 'Listicles',
        listiclesValue: 'None',
      },
    },
    action: 'Read the latest',
    filters: {
      aria: 'Filter articles by category',
      all: 'All',
      categories: { education: 'Education', tourism: 'Tourism', trade: 'Trade' },
    },
    search: { label: 'Search the notes', placeholder: 'Search the notes…' },
    countTotal: '{total} notes',
    minShort: '{n} min',
    noResults: 'Nothing in this category yet — the desks are writing.',
  },

  zh: {
    meta: {
      title: '洞察 — 留学、旅行与贸易的一线笔记',
      description:
        'RouteToAbroad 案头博客：MBBS 决策、CSC 奖学金指南、北京与京都旅行、印中贸易实务——由一线团队亲笔撰写。',
    },
    crumb: '洞察',
    hero: {
      eyebrow: '洞察',
      title: '来自桥两端的笔记。',
      lede: '不写“出国留学的 10 个理由”这类清单文。只写来自招生台、旅行路线和工厂车间的一线笔记。',
      facts: {
        notesLabel: '一线笔记',
        articlesCount: '{n} 篇文章',
        desksLabel: '案头',
        desksValue: '教育 · 旅行 · 贸易',
        cadenceLabel: '更新频率',
        cadenceValue: '每月',
        listiclesLabel: '清单文',
        listiclesValue: '没有',
      },
    },
    action: '阅读最新文章',
    filters: {
      aria: '按类别筛选文章',
      all: '全部',
      categories: { education: '教育', tourism: '旅游', trade: '贸易' },
    },
    search: { label: '搜索笔记', placeholder: '搜索笔记…' },
    countTotal: '共 {total} 篇',
    minShort: '{n} 分钟',
    noResults: '这个类别下还没有内容——各案头正在写。',
  },

  fr: {
    meta: {
      title: 'Analyses — Notes de terrain sur les études, les voyages et le commerce en Asie',
      description:
        'Le blog du bureau RouteToAbroad : décisions MBBS, guides bourses CSC, voyages à Pékin et Kyoto, pratique du commerce Inde–Chine — écrit par ceux qui font le travail.',
    },
    crumb: 'Analyses',
    hero: {
      eyebrow: 'Analyses',
      title: 'Notes des deux côtés du pont.',
      lede:
        'Pas de listicles « 10 raisons d’étudier à l’étranger ». Des notes de terrain depuis les bureaux d’admission, les circuits touristiques et les ateliers.',
      facts: {
        notesLabel: 'Notes de terrain',
        articlesCount: '{n} articles',
        desksLabel: 'Bureaux',
        desksValue: 'Études · Voyages · Commerce',
        cadenceLabel: 'Rythme',
        cadenceValue: 'Mensuel',
        listiclesLabel: 'Listicles',
        listiclesValue: 'Aucun',
      },
    },
    action: 'Lire les dernières publications',
    filters: {
      aria: 'Filtrer les articles par catégorie',
      all: 'Tous',
      categories: { education: 'Études', tourism: 'Tourisme', trade: 'Commerce' },
    },
    search: { label: 'Rechercher dans les notes', placeholder: 'Rechercher dans les notes…' },
    countTotal: '{total} notes',
    minShort: '{n} min',
    noResults: 'Rien dans cette catégorie pour l’instant — les bureaux écrivent.',
  },

  ar: {
    meta: {
      title: 'رؤى — ملاحظات ميدانية عن الدراسة والسفر والتجارة في آسيا',
      description:
        'مدونة مكتب RouteToAbroad: قرارات MBBS، أدلة منح CSC، السفر إلى بكين وكيوتو، وممارسات التجارة بين الهند والصين — بقلم من يعملون في الميدان.',
    },
    crumb: 'رؤى',
    hero: {
      eyebrow: 'رؤى',
      title: 'ملاحظات من طرفي الجسر.',
      lede: 'لا مقالات بقوائم «10 أسباب للدراسة في الخارج». ملاحظات ميدانية من مكاتب القبول ومسارات الجولات وورش المصانع.',
      facts: {
        notesLabel: 'ملاحظات ميدانية',
        articlesCount: '{n} مقالات',
        desksLabel: 'المكاتب',
        desksValue: 'تعليم · سفر · تجارة',
        cadenceLabel: 'الوتيرة',
        cadenceValue: 'شهرياً',
        listiclesLabel: 'مقالات القوائم',
        listiclesValue: 'لا شيء',
      },
    },
    action: 'اقرأ أحدث المقالات',
    filters: {
      aria: 'تصفية المقالات حسب الفئة',
      all: 'الكل',
      categories: { education: 'التعليم', tourism: 'السياحة', trade: 'التجارة' },
    },
    search: { label: 'ابحث في الملاحظات', placeholder: 'ابحث في الملاحظات…' },
    countTotal: '{total} من الملاحظات',
    minShort: '{n} دقيقة',
    noResults: 'لا شيء في هذه الفئة بعد — المكاتب في وضع الكتابة.',
  },

  es: {
    meta: {
      title: 'Análisis — Notas de campo sobre estudiar, viajar y comerciar en Asia',
      description:
        'El blog del escritorio de RouteToAbroad: decisiones de MBBS, guías de becas CSC, viajes a Pekín y Kioto, práctica del comercio India–China — escrito por quien hace el trabajo.',
    },
    crumb: 'Análisis',
    hero: {
      eyebrow: 'Análisis',
      title: 'Notas desde ambos lados del puente.',
      lede: 'Sin listas tipo «10 razones para estudiar en el extranjero». Notas de campo desde mesas de admisiones, rutas turísticas y fábricas.',
      facts: {
        notesLabel: 'Notas de campo',
        articlesCount: '{n} artículos',
        desksLabel: 'Mesas',
        desksValue: 'Educación · Viajes · Comercio',
        cadenceLabel: 'Ritmo',
        cadenceValue: 'Mensual',
        listiclesLabel: 'Listas',
        listiclesValue: 'Ninguna',
      },
    },
    action: 'Leer lo último',
    filters: {
      aria: 'Filtrar artículos por categoría',
      all: 'Todos',
      categories: { education: 'Educación', tourism: 'Turismo', trade: 'Comercio' },
    },
    search: { label: 'Buscar en las notas', placeholder: 'Buscar en las notas…' },
    countTotal: '{total} notas',
    minShort: '{n} min',
    noResults: 'Aún no hay nada en esta categoría — las mesas están escribiendo.',
  },
};
