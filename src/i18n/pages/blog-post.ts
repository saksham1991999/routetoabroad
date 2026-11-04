/**
 * Blog post detail copy — the template strings around the entry on the shared
 * BlogPostPage component, keyed by locale. Entry frontmatter (title,
 * description, tags, body) renders whatever the route shell resolved — en
 * source or a localized copy — and is NOT part of this dictionary. English is
 * the source of truth; zh/fr/ar/es are machine-assisted translations that
 * follow the terminology already established in src/i18n/ui.ts and still need
 * native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * BlogPostStrings interface.
 */
import type { Locale } from '../../lib/i18n';
import type { Desk } from './blog-index';

export interface BlogPostStrings {
  /** Section name for /blog — breadcrumbs. */
  crumb: string;
  /** Post category label shown as the eyebrow above the title. */
  categories: Record<Desk, string>;
  /** "· updated {date}" — {date} is the formatted updatedDate. */
  updated: string;
  /** "· {n} min read" — {n} is the post's readTime. */
  readTime: string;
  /** "{n} min" — related-card meta suffix. */
  minShort: string;
  /** Related-reading section label. */
  related: string;
  cta: { eyebrow: string; text: string; primary: string; secondary: string };
}

export const BLOG_POST: Record<Locale, BlogPostStrings> = {
  en: {
    crumb: 'Insights',
    categories: { education: 'Education', tourism: 'Tourism', trade: 'Trade' },
    updated: '· updated {date}',
    readTime: '· {n} min read',
    minShort: '{n} min',
    related: 'Related reading',
    cta: {
      eyebrow: 'Working on this decision?',
      text: 'Get the answer for your specific case — the fit check takes four questions, advisors reply within a day.',
      primary: 'Start the fit check',
      secondary: 'Talk to us',
    },
  },

  zh: {
    crumb: '洞察',
    categories: { education: '教育', tourism: '旅游', trade: '贸易' },
    updated: '· 更新于 {date}',
    readTime: '· 阅读约 {n} 分钟',
    minShort: '{n} 分钟',
    related: '延伸阅读',
    cta: {
      eyebrow: '正在权衡这个决定？',
      text: '获取针对你具体情况的答案——适配检查只要四个问题，顾问一天内回复。',
      primary: '开始适配检查',
      secondary: '与我们聊聊',
    },
  },

  fr: {
    crumb: 'Analyses',
    categories: { education: 'Études', tourism: 'Tourisme', trade: 'Commerce' },
    updated: '· mis à jour {date}',
    readTime: '· {n} min de lecture',
    minShort: '{n} min',
    related: 'Lectures liées',
    cta: {
      eyebrow: 'Vous hésitez sur cette décision ?',
      text: 'Obtenez la réponse pour votre cas précis — le test de compatibilité tient en quatre questions et les conseillers répondent sous un jour.',
      primary: 'Faire le test de compatibilité',
      secondary: 'Nous parler',
    },
  },

  ar: {
    crumb: 'رؤى',
    categories: { education: 'التعليم', tourism: 'السياحة', trade: 'التجارة' },
    updated: '· حُدّث {date}',
    readTime: '· {n} دقيقة قراءة',
    minShort: '{n} دقيقة',
    related: 'قراءات ذات صلة',
    cta: {
      eyebrow: 'أتتخذ هذا القرار الآن؟',
      text: 'احصل على الإجابة لحالتك بالذات — فحص الملاءمة أربعة أسئلة فقط، والمستشارون يردّون خلال يوم.',
      primary: 'ابدأ فحص الملاءمة',
      secondary: 'تحدث معنا',
    },
  },

  es: {
    crumb: 'Análisis',
    categories: { education: 'Educación', tourism: 'Turismo', trade: 'Comercio' },
    updated: '· actualizado {date}',
    readTime: '· {n} min de lectura',
    minShort: '{n} min',
    related: 'Lecturas relacionadas',
    cta: {
      eyebrow: '¿Está considerando esta decisión?',
      text: 'Consiga la respuesta para su caso específico — la prueba de compatibilidad son cuatro preguntas y los asesores responden en un día.',
      primary: 'Hacer la prueba de compatibilidad',
      secondary: 'Hablar con nosotros',
    },
  },
};
