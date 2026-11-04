/**
 * Guide detail copy — the template strings around the entry on the shared
 * GuideDetailPage component, keyed by locale. Entry frontmatter (title,
 * description, tags, faqs, body) renders whatever the route shell resolved —
 * en source or a localized copy — and is NOT part of this dictionary.
 * English is the source of truth; zh/fr/ar/es are machine-assisted
 * translations that follow the terminology already established in
 * src/i18n/ui.ts and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * GuideDetailStrings interface.
 */
import type { Locale } from '../../lib/i18n';
import type { Pillar } from './guides-index';

export interface GuideDetailStrings {
  /** Section name for /guides — breadcrumbs. */
  crumb: string;
  /** "{pillar} guide" eyebrow above the title, e.g. "Education guide". */
  pillarGuide: Record<Pillar, string>;
  /** "Updated {date}" — {date} is the formatted updatedDate/pubDate. */
  updated: string;
  /** "{n} min read" — {n} is the guide's readTime. */
  readTime: string;
  /** In-page FAQ section heading. */
  faqHeading: string;
  cta: { eyebrow: string; text: string; primary: string; secondary: string };
}

export const GUIDE_DETAIL: Record<Locale, GuideDetailStrings> = {
  en: {
    crumb: 'Guides',
    pillarGuide: { education: 'Education guide', tourism: 'Travel guide', trade: 'Trade guide' },
    updated: 'Updated {date}',
    readTime: '{n} min read',
    faqHeading: 'Quick answers',
    cta: {
      eyebrow: 'Next step',
      text: 'Want this guide applied to your case? The fit check takes four questions — or talk to the desk directly.',
      primary: 'Run the fit check',
      secondary: 'Contact us',
    },
  },

  zh: {
    crumb: '指南',
    pillarGuide: { education: '教育指南', tourism: '旅行指南', trade: '贸易指南' },
    updated: '更新于 {date}',
    readTime: '阅读约 {n} 分钟',
    faqHeading: '快速回答',
    cta: {
      eyebrow: '下一步',
      text: '想让这篇指南应用到你的情况？适配检查只要四个问题——或直接与案头团队聊聊。',
      primary: '运行适配检查',
      secondary: '联系我们',
    },
  },

  fr: {
    crumb: 'Guides',
    pillarGuide: { education: 'Guide d’études', tourism: 'Guide voyage', trade: 'Guide commerce' },
    updated: 'Mis à jour {date}',
    readTime: '{n} min de lecture',
    faqHeading: 'Réponses rapides',
    cta: {
      eyebrow: 'Étape suivante',
      text: 'Vous voulez ce guide appliqué à votre cas ? Le test de compatibilité tient en quatre questions — ou parlez directement au bureau.',
      primary: 'Faire le test de compatibilité',
      secondary: 'Nous contacter',
    },
  },

  ar: {
    crumb: 'الأدلة',
    pillarGuide: { education: 'دليل تعليمي', tourism: 'دليل سفر', trade: 'دليل تجارة' },
    updated: 'حُدّث {date}',
    readTime: '{n} دقيقة قراءة',
    faqHeading: 'إجابات سريعة',
    cta: {
      eyebrow: 'الخطوة التالية',
      text: 'تريد تطبيق هذا الدليل على حالتك؟ فحص الملاءمة أربعة أسئلة — أو تحدث مع المكتب مباشرة.',
      primary: 'اجرِ فحص الملاءمة',
      secondary: 'تواصل معنا',
    },
  },

  es: {
    crumb: 'Guías',
    pillarGuide: { education: 'Guía de educación', tourism: 'Guía de viajes', trade: 'Guía de comercio' },
    updated: 'Actualizada {date}',
    readTime: '{n} min de lectura',
    faqHeading: 'Respuestas rápidas',
    cta: {
      eyebrow: 'Siguiente paso',
      text: '¿Quiere esta guía aplicada a su caso? La prueba de compatibilidad son cuatro preguntas — o hable directamente con el escritorio.',
      primary: 'Hacer la prueba de compatibilidad',
      secondary: 'Contáctenos',
    },
  },
};
