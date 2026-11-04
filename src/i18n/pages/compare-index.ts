/**
 * Compare index copy — every user-visible string on the shared
 * CompareIndexPage component, keyed by locale. English is the source of
 * truth; zh/fr/ar/es are machine-assisted translations that follow the
 * terminology already established in src/i18n/ui.ts and still need
 * native-speaker review. The comparison cards themselves (headline, answer,
 * entities) come from the locale's own set in src/data/comparisons.ts and are
 * NOT duplicated here.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * CompareIndexStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface CompareIndexStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  crumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  /** The "vs" marker between the two entity names and the card link label. */
  item: {
    vsLabel: string;
    readMore: string;
  };
}

export const COMPARE_INDEX: Record<Locale, CompareIndexStrings> = {
  en: {
    meta: {
      title: 'Comparisons — MBBS China vs India, Universities, Freight',
      description:
        'Side-by-side comparisons with clear verdicts: MBBS in China vs India, Tsinghua vs Peking University, sea vs air freight from China to India — tables, numbers and honest calls.',
    },
    crumb: 'Compare',
    hero: {
      eyebrow: 'Comparisons',
      title: 'Tables and verdicts, not hedging.',
      lede: 'The three comparisons we’re asked weekly, each with the full table, the trade-offs, and an actual answer.',
    },
    item: {
      vsLabel: 'vs',
      readMore: 'Full comparison',
    },
  },

  zh: {
    meta: {
      title: '对比 — 中国与印度 MBBS、大学、货运',
      description:
        '逐项对比并给出明确结论：中国与印度 MBBS、清华与北大、中印海运与空运——完整表格、真实数字与坦诚的判断。',
    },
    crumb: '对比',
    hero: {
      eyebrow: '对比分析',
      title: '给表格和结论，不含糊其辞。',
      lede: '我们每周被问到的三组对比，每组都有完整表格、取舍权衡和一个真正的答案。',
    },
    item: {
      vsLabel: 'VS',
      readMore: '查看完整对比',
    },
  },

  fr: {
    meta: {
      title: 'Comparaisons — MBBS Chine vs Inde, universités, fret',
      description:
        'Des comparaisons côte à côte avec des verdicts clairs : MBBS en Chine vs en Inde, Tsinghua vs Université de Pékin, fret maritime vs aérien de Chine vers l’Inde — tableaux, chiffres et avis francs.',
    },
    crumb: 'Comparer',
    hero: {
      eyebrow: 'Comparaisons',
      title: 'Des tableaux et des verdicts, pas de langue de bois.',
      lede: 'Les trois comparaisons qu’on nous demande chaque semaine, chacune avec le tableau complet, les arbitrages et une vraie réponse.',
    },
    item: {
      vsLabel: 'contre',
      readMore: 'Voir la comparaison complète',
    },
  },

  ar: {
    meta: {
      title: 'مقارنات — MBBS في الصين مقابل الهند، الجامعات، الشحن',
      description:
        'مقارنات جنباً إلى جنب مع أحكام واضحة: MBBS في الصين مقابل الهند، تسينغهوا مقابل جامعة بكين، الشحن البحري مقابل الجوي من الصين إلى الهند — جداول وأرقام وأحكام صادقة.',
    },
    crumb: 'قارن',
    hero: {
      eyebrow: 'المقارنات',
      title: 'جداول وأحكام، لا مراوغة.',
      lede: 'المقارنات الثلاث التي تُطرح علينا أسبوعياً، كل منها بجدولها الكامل ومقايضاتها وإجابة فعلية.',
    },
    item: {
      vsLabel: 'ضد',
      readMore: 'المقارنة الكاملة',
    },
  },

  es: {
    meta: {
      title: 'Comparaciones — MBBS China vs India, universidades, carga',
      description:
        'Comparaciones lado a lado con veredictos claros: MBBS en China vs India, Tsinghua vs Universidad de Pekín, carga marítima vs aérea de China a India — tablas, números y opiniones honestas.',
    },
    crumb: 'Comparar',
    hero: {
      eyebrow: 'Comparaciones',
      title: 'Tablas y veredictos, no evasivas.',
      lede: 'Las tres comparaciones que nos preguntan cada semana, cada una con la tabla completa, los intercambios y una respuesta real.',
    },
    item: {
      vsLabel: 'contra',
      readMore: 'Ver la comparación completa',
    },
  },
};
