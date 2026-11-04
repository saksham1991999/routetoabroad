/**
 * Country detail copy — the template chrome around the collection entry on
 * the shared CountryDetailPage component, keyed by locale. English is the
 * source of truth; zh/fr/ar/es are machine-assisted translations that follow
 * the terminology already established in src/i18n/ui.ts and still need
 * native-speaker review.
 *
 * Entry frontmatter (name, intro, stats, study/travel columns, FAQs, markdown
 * body) renders whatever the localized collection carries and is NOT
 * duplicated here. `{name}` placeholders in templates are replaced with the
 * entry's own name.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * CountryDetailStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface CountryDetailStrings {
  /** <title> template (must stay unique per locale — validator). */
  metaTitleTemplate: string;
  /** The two pillar eyebrows above the study/travel columns. */
  eyebrows: {
    study: string;
    travel: string;
  };
  links: {
    education: string;
    tourism: string;
  };
  faq: {
    eyebrow: string;
    title: string;
  };
}

export const COUNTRY_DETAIL: Record<Locale, CountryDetailStrings> = {
  en: {
    metaTitleTemplate: '{name} — Study & Travel Guide',
    eyebrows: {
      study: 'Study',
      travel: 'Travel',
    },
    links: {
      education: 'Education services',
      tourism: 'Tourism services',
    },
    faq: {
      eyebrow: 'Country FAQ',
      title: 'Straight answers',
    },
  },

  zh: {
    metaTitleTemplate: '{name} —— 留学与旅行指南',
    eyebrows: {
      study: '留学',
      travel: '旅行',
    },
    links: {
      education: '教育服务',
      tourism: '旅游服务',
    },
    faq: {
      eyebrow: '国家常见问题',
      title: '坦率的回答',
    },
  },

  fr: {
    metaTitleTemplate: '{name} — Guide études et voyage',
    eyebrows: {
      study: 'Études',
      travel: 'Voyage',
    },
    links: {
      education: 'Services études',
      tourism: 'Services tourisme',
    },
    faq: {
      eyebrow: 'FAQ pays',
      title: 'Des réponses directes',
    },
  },

  ar: {
    metaTitleTemplate: '{name} — دليل الدراسة والسفر',
    eyebrows: {
      study: 'الدراسة',
      travel: 'السفر',
    },
    links: {
      education: 'خدمات التعليم',
      tourism: 'خدمات السياحة',
    },
    faq: {
      eyebrow: 'أسئلة الدولة الشائعة',
      title: 'إجابات مباشرة',
    },
  },

  es: {
    metaTitleTemplate: '{name} — Guía de estudios y viaje',
    eyebrows: {
      study: 'Estudios',
      travel: 'Viaje',
    },
    links: {
      education: 'Servicios de educación',
      tourism: 'Servicios de turismo',
    },
    faq: {
      eyebrow: 'FAQ del país',
      title: 'Respuestas directas',
    },
  },
};
