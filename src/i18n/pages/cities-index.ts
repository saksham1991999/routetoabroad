/**
 * Cities index copy — every user-visible string on the shared
 * CitiesIndexPage component, keyed by locale. English is the source of
 * truth; zh/fr/ar/es are machine-assisted translations that follow the
 * terminology already established in src/i18n/ui.ts and still need
 * native-speaker review. Entry frontmatter (names, Chinese names, intros,
 * cost figures) renders whatever the collection carries and is NOT
 * duplicated here — only the labels around the figures live in this file.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * CitiesIndexStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface CitiesIndexStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  crumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  /** Cost lines on each card — figures are composed in the component. */
  card: {
    studentsLabel: string;
    travellersLabel: string;
    perMonth: string;
    perDay: string;
  };
}

export const CITIES_INDEX: Record<Locale, CitiesIndexStrings> = {
  en: {
    meta: {
      title: 'City Guides — Studying & Travelling in China’s Great Cities',
      description:
        'Honest city guides for international students and travellers: Beijing, Shanghai, Guangzhou and Hangzhou — real monthly costs, universities, highlights and best times to visit.',
    },
    crumb: 'Cities',
    hero: {
      eyebrow: 'Cities',
      title: 'Four cities we know street by street.',
      lede: 'Costs from our own student cohorts, food we’ve eaten, campuses we’ve registered students on. Beijing, Shanghai, Guangzhou, Hangzhou.',
    },
    card: {
      studentsLabel: 'Students:',
      travellersLabel: 'Travellers:',
      perMonth: '/mo',
      perDay: '/day',
    },
  },

  zh: {
    meta: {
      title: '城市指南 — 在中国大城市留学与旅行',
      description:
        '面向国际学生和旅行者的坦诚城市指南：北京、上海、广州和杭州——真实的每月开销、大学、亮点与最佳旅行时间。',
    },
    crumb: '城市',
    hero: {
      eyebrow: '城市',
      title: '四座我们闭着眼也能走的城市。',
      lede: '开销来自我们自己的学生群体，餐厅是我们吃过的，校园是我们亲手送学生注册入学的。北京、上海、广州、杭州。',
    },
    card: {
      studentsLabel: '学生：',
      travellersLabel: '旅行者：',
      perMonth: '/月',
      perDay: '/天',
    },
  },

  fr: {
    meta: {
      title: 'Guides des villes — Étudier et voyager dans les grandes villes de Chine',
      description:
        'Guides de villes honnêtes pour étudiants internationaux et voyageurs : Pékin, Shanghai, Canton et Hangzhou — coûts mensuels réels, universités, points forts et meilleures périodes.',
    },
    crumb: 'Villes',
    hero: {
      eyebrow: 'Villes',
      title: 'Quatre villes que nous connaissons rue par rue.',
      lede: 'Des coûts issus de nos propres cohortes d’étudiants, des plats que nous avons goûtés, des campus où nous avons inscrits des étudiants. Pékin, Shanghai, Canton, Hangzhou.',
    },
    card: {
      studentsLabel: 'Étudiants :',
      travellersLabel: 'Voyageurs :',
      perMonth: '/mois',
      perDay: '/jour',
    },
  },

  ar: {
    meta: {
      title: 'أدلة المدن — الدراسة والسفر في مدن الصين الكبرى',
      description:
        'أدلة مدن صادقة للطلاب الدوليين والمسافرين: بكين وشنغهاي وقوانغتشو وهانغتشو — تكاليف شهرية حقيقية وجامعات وأبرز المعالم وأفضل أوقات الزيارة.',
    },
    crumb: 'المدن',
    hero: {
      eyebrow: 'المدن',
      title: 'أربع مدن نعرفها شارعاً بشارع.',
      lede: 'تكاليف من دفعات طلابنا أنفسهم، وطعام ذقناه، وحرم جامعي سجّلنا فيه طلاباً. بكين، شنغهاي، قوانغتشو، هانغتشو.',
    },
    card: {
      studentsLabel: 'الطلاب:',
      travellersLabel: 'المسافرون:',
      perMonth: '/شهر',
      perDay: '/يوم',
    },
  },

  es: {
    meta: {
      title: 'Guías de ciudades — Estudiar y viajar en las grandes ciudades de China',
      description:
        'Guías de ciudades honestas para estudiantes internacionales y viajeros: Pekín, Shanghái, Cantón y Hangzhou — costes mensuales reales, universidades, lo mejor y cuándo visitarlas.',
    },
    crumb: 'Ciudades',
    hero: {
      eyebrow: 'Ciudades',
      title: 'Cuatro ciudades que conocemos calle por calle.',
      lede: 'Costes de nuestras propias cohortes de estudiantes, comida que hemos probado, campus donde hemos matriculado estudiantes. Pekín, Shanghái, Cantón, Hangzhou.',
    },
    card: {
      studentsLabel: 'Estudiantes:',
      travellersLabel: 'Viajeros:',
      perMonth: '/mes',
      perDay: '/día',
    },
  },
};
