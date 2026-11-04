/**
 * Pillar FAQ page copy (education / tourism / trade) — keyed by locale.
 * English is the source of truth; zh/fr/ar/es are machine-assisted
 * translations following the terminology in src/i18n/ui.ts and still need
 * native-speaker review. The Q&A sets themselves live in src/data/faqs.ts.
 */
import type { Locale } from '../../lib/i18n';

export type FaqPillar = 'education' | 'tourism' | 'trade';

export interface PillarFaqStrings {
  /** Shared breadcrumb label for the FAQ leg. */
  crumb: string;
  /** PageHero H1. */
  heroTitle: string;
  pillars: Record<
    FaqPillar,
    {
      /** <title> (must stay unique per locale — validator). */
      title: string;
      /** Meta description, also reused as the PageHero lede. */
      description: string;
      eyebrow: string;
    }
  >;
}

export const PILLAR_FAQ: Record<Locale, PillarFaqStrings> = {
  en: {
    crumb: 'FAQ',
    heroTitle: 'Frequently asked questions',
    pillars: {
      education: {
        title: 'Education FAQs — Studying in China',
        description:
          'Common questions about studying in China: MBBS recognition, CSC scholarships, HSK requirements, visa timelines, costs and student life.',
        eyebrow: 'Education',
      },
      tourism: {
        title: 'Tourism FAQs — China & Japan Travel',
        description:
          'Questions about travelling to China and Japan: visa types, best seasons, business delegations, dietary handling, insurance and cancellations.',
        eyebrow: 'Tourism',
      },
      trade: {
        title: 'Trade FAQs — Sourcing, QC & Logistics',
        description:
          'Insights into India–China trade: MOQs, AQL quality inspections, shipping times, customs and BIS, payment terms, disputes and fees.',
        eyebrow: 'Trade',
      },
    },
  },

  zh: {
    crumb: '常见问题',
    heroTitle: '常见问题',
    pillars: {
      education: {
        title: '教育常见问题 — 在中国留学',
        description: '关于在中国留学的常见问题：MBBS 认证、CSC 奖学金、HSK 要求、签证时间线、费用与学生生活。',
        eyebrow: '教育',
      },
      tourism: {
        title: '旅游常见问题 — 中国与日本旅行',
        description: '关于中国和日本旅行的常见问题：签证类型与办理、最佳旅行季节、商务考察与工厂参观、饮食禁忌安排、旅游保险与取消政策。',
        eyebrow: '旅游',
      },
      trade: {
        title: '贸易常见问题 — 采购、质检与物流',
        description: '关于印度—中国贸易的实战解答：MOQ 起订量、AQL 质检、运输时间、清关与 BIS、付款条款、争议处理与费用。',
        eyebrow: '贸易',
      },
    },
  },

  fr: {
    crumb: 'FAQ',
    heroTitle: 'Questions fréquentes',
    pillars: {
      education: {
        title: 'FAQ Études — Étudier en Chine',
        description:
          'Questions courantes sur les études en Chine : reconnaissance des MBBS, bourses CSC, exigences HSK, délais de visa, coûts et vie étudiante.',
        eyebrow: 'Études',
      },
      tourism: {
        title: 'FAQ Tourisme — Chine & Japon',
        description:
          'Questions sur les voyages en Chine et au Japon : types de visas, meilleures saisons, délégations d’affaires, régimes alimentaires, assurance et annulations.',
        eyebrow: 'Tourisme',
      },
      trade: {
        title: 'FAQ Commerce — Sourcing, contrôle qualité & logistique',
        description:
          'Repères sur le commerce Inde–Chine : MOQ, inspections qualité AQL, délais d’expédition, douanes et BIS, conditions de paiement, litiges et honoraires.',
        eyebrow: 'Commerce',
      },
    },
  },

  ar: {
    crumb: 'الأسئلة الشائعة',
    heroTitle: 'الأسئلة الشائعة',
    pillars: {
      education: {
        title: 'أسئلة التعليم الشائعة — الدراسة في الصين',
        description: 'أسئلة شائعة عن الدراسة في الصين: اعتراف MBBS، منح CSC، متطلبات HSK، مواعيد التأشيرات، التكاليف وحياة الطلاب.',
        eyebrow: 'التعليم',
      },
      tourism: {
        title: 'أسئلة السياحة الشائعة — السفر إلى الصين واليابان',
        description: 'أسئلة عن السفر إلى الصين واليابان: أنواع التأشيرات، أفضل المواسم، وفود الأعمال، التعامل مع القيود الغذائية، التأمين والإلغاء.',
        eyebrow: 'السياحة',
      },
      trade: {
        title: 'أسئلة التجارة الشائعة — التوريد والجودة واللوجستيات',
        description: 'نظرات عملية على التجارة بين الهند والصين: كميات الطلب الدنيا MOQ، فحوصات جودة AQL، مدد الشحن، الجمارك وBIS، شروط الدفع، النزاعات والرسوم.',
        eyebrow: 'التجارة',
      },
    },
  },

  es: {
    crumb: 'FAQ',
    heroTitle: 'Preguntas frecuentes',
    pillars: {
      education: {
        title: 'FAQ de Estudios — Estudiar en China',
        description:
          'Preguntas comunes sobre estudiar en China: reconocimiento del MBBS, becas CSC, requisitos de HSK, plazos de visado, costes y vida estudiantil.',
        eyebrow: 'Estudios',
      },
      tourism: {
        title: 'FAQ de Turismo — China y Japón',
        description:
          'Preguntas sobre viajar a China y Japón: tipos de visado, mejores temporadas, delegaciones de negocios, gestión de dietas, seguros y cancelaciones.',
        eyebrow: 'Turismo',
      },
      trade: {
        title: 'FAQ de Comercio — Sourcing, control de calidad y logística',
        description:
          'Claves del comercio India–China: MOQ, inspecciones de calidad AQL, tiempos de envío, aduanas y BIS, condiciones de pago, disputas y honorarios.',
        eyebrow: 'Comercio',
      },
    },
  },
};
