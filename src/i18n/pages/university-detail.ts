/**
 * University detail copy — the template chrome around the collection entry on
 * the shared UniversityDetailPage component, keyed by locale. English is the
 * source of truth; zh/fr/ar/es are machine-assisted translations that follow
 * the terminology already established in src/i18n/ui.ts and still need
 * native-speaker review.
 *
 * Entry frontmatter (name, intro, strengths, programmes, costs, facts, FAQs,
 * markdown body) renders whatever the localized collection carries and is NOT
 * duplicated here. `{name}` placeholders in templates are replaced with the
 * entry's own name.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * UniversityDetailStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface UniversityDetailStrings {
  /** <title> template (must stay unique per locale — validator). */
  metaTitleTemplate: string;
  crumb: string;
  /** Course JSON-LD name template. */
  schemaStudyAtTemplate: string;
  headings: {
    why: string;
    programmes: string;
    /** FAQ section heading — `{name}` replaced with the university name. */
    faqTemplate: string;
  };
  costs: {
    title: string;
    tuition: string;
    dormitory: string;
    living: string;
    estimateCta: string;
  };
  facts: { title: string };
  cta: {
    title: string;
    text: string;
    button: string;
  };
}

export const UNIVERSITY_DETAIL: Record<Locale, UniversityDetailStrings> = {
  en: {
    metaTitleTemplate: '{name} — Programs, Costs & Admission for International Students',
    crumb: 'Universities',
    schemaStudyAtTemplate: 'Study at {name}',
    headings: {
      why: 'Why students pick it',
      programmes: 'Programmes international students take',
      faqTemplate: 'Asked about {name}',
    },
    costs: {
      title: 'Costs at a glance',
      tuition: 'Tuition',
      dormitory: 'Dormitory',
      living: 'Living',
      estimateCta: 'Run full cost estimate',
    },
    facts: { title: 'Quick facts' },
    cta: {
      title: 'Want this university?',
      text: 'Get an honest read on your chances — free, within one working day.',
      button: 'Start your file',
    },
  },

  zh: {
    metaTitleTemplate: '{name} — 专业、费用与国际学生录取指南',
    crumb: '大学',
    schemaStudyAtTemplate: '在{name}就读',
    headings: {
      why: '为什么学生选择它',
      programmes: '国际学生就读的专业',
      faqTemplate: '关于{name}的常见问题',
    },
    costs: {
      title: '费用一览',
      tuition: '学费',
      dormitory: '宿舍',
      living: '生活费',
      estimateCta: '测算完整费用',
    },
    facts: { title: '快速信息' },
    cta: {
      title: '想读这所大学？',
      text: '免费获得对你录取机会的坦诚评估——一个工作日内回复。',
      button: '开启你的申请',
    },
  },

  fr: {
    metaTitleTemplate: '{name} — Programmes, coûts et admission pour étudiants internationaux',
    crumb: 'Universités',
    schemaStudyAtTemplate: 'Étudier à {name}',
    headings: {
      why: 'Pourquoi les étudiants la choisissent',
      programmes: 'Programmes suivis par les étudiants internationaux',
      faqTemplate: 'Questions sur {name}',
    },
    costs: {
      title: 'Coûts en un coup d’œil',
      tuition: 'Frais de scolarité',
      dormitory: 'Résidence',
      living: 'Vie quotidienne',
      estimateCta: 'Estimer le coût complet',
    },
    facts: { title: 'En bref' },
    cta: {
      title: 'Cette université vous intéresse ?',
      text: 'Obtenez une lecture honnête de vos chances — gratuitement, sous un jour ouvré.',
      button: 'Ouvrir votre dossier',
    },
  },

  ar: {
    metaTitleTemplate: '{name} — البرامج والتكاليف والقبول للطلاب الدوليين',
    crumb: 'الجامعات',
    schemaStudyAtTemplate: 'الدراسة في {name}',
    headings: {
      why: 'لماذا يختار الطلاب هذه الجامعة',
      programmes: 'البرامج التي يدرسها الطلاب الدوليون',
      faqTemplate: 'أسئلة عن {name}',
    },
    costs: {
      title: 'نظرة سريعة على التكاليف',
      tuition: 'الرسوم الدراسية',
      dormitory: 'السكن الجامعي',
      living: 'المعيشة',
      estimateCta: 'احسب التكلفة الكاملة',
    },
    facts: { title: 'حقائق سريعة' },
    cta: {
      title: 'تريد الالتحاق بهذه الجامعة؟',
      text: 'احصل على قراءة صادقة لفرصك — مجانًا، خلال يوم عمل واحد.',
      button: 'ابدأ ملفك',
    },
  },

  es: {
    metaTitleTemplate: '{name} — Programas, costes y admisión para estudiantes internacionales',
    crumb: 'Universidades',
    schemaStudyAtTemplate: 'Estudiar en {name}',
    headings: {
      why: 'Por qué la eligen los estudiantes',
      programmes: 'Programas que cursan los estudiantes internacionales',
      faqTemplate: 'Preguntas sobre {name}',
    },
    costs: {
      title: 'Costes de un vistazo',
      tuition: 'Matrícula',
      dormitory: 'Residencia',
      living: 'Vida',
      estimateCta: 'Calcular el coste completo',
    },
    facts: { title: 'Datos clave' },
    cta: {
      title: '¿Quieres esta universidad?',
      text: 'Obtén una lectura honesta de tus posibilidades — gratis, en un día hábil.',
      button: 'Inicia tu expediente',
    },
  },
};
