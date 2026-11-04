/**
 * FAQ hub copy — every user-visible string on the shared FaqPage component,
 * keyed by locale. English is the source of truth; zh/fr/ar/es are
 * machine-assisted translations following the terminology in src/i18n/ui.ts
 * and still need native-speaker review. The Q&A sets themselves live in
 * src/data/faqs.ts (Record<Locale, Faq[]>).
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * FaqStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface FaqStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb + hero crumb label. */
  crumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  groups: {
    general: { heading: string };
    education: { eyebrow: string; heading: string; link: string };
    tourism: { eyebrow: string; heading: string; link: string };
    trade: { eyebrow: string; heading: string; link: string };
  };
}

export const FAQ: Record<Locale, FaqStrings> = {
  en: {
    meta: {
      title: 'FAQ — Study, Travel & Trade Across East Asia',
      description:
        'Every question we hear, answered straight: recognition, scholarships, visas, costs, tours, sourcing and payments — the RouteToAbroad FAQ hub.',
    },
    crumb: 'FAQ',
    hero: {
      eyebrow: 'FAQ hub',
      title: 'The answers, with the awkward ones kept in.',
      lede: 'Organised by service, written the way we answer on calls. If a question is missing, it goes on this page — ask us.',
    },
    groups: {
      general: { heading: 'General' },
      education: { eyebrow: 'Education', heading: 'Studying in China', link: 'Education FAQ page' },
      tourism: { eyebrow: 'Tourism', heading: 'Travel to China & Japan', link: 'Tourism FAQ page' },
      trade: { eyebrow: 'Trade', heading: 'India–China trade', link: 'Trade FAQ page' },
    },
  },

  zh: {
    meta: {
      title: '常见问题 — 跨越东亚的留学、旅行与贸易',
      description:
        '我们听到的每一个问题，都直率作答：认证、奖学金、签证、费用、旅行、采购与付款——RouteToAbroad 常见问题中心。',
    },
    crumb: '常见问题',
    hero: {
      eyebrow: '常见问题中心',
      title: '所有答案，连难回答的也保留在内。',
      lede: '按服务分类，像我们在电话里回答的那样写。如果少了哪个问题，它会出现在这个页面——尽管问我们。',
    },
    groups: {
      general: { heading: '综合' },
      education: { eyebrow: '教育', heading: '在中国留学', link: '教育 FAQ 页面' },
      tourism: { eyebrow: '旅游', heading: '中国与日本旅行', link: '旅游 FAQ 页面' },
      trade: { eyebrow: '贸易', heading: '印度—中国贸易', link: '贸易 FAQ 页面' },
    },
  },

  fr: {
    meta: {
      title: 'FAQ — Étudier, voyager et trader en Asie de l’Est',
      description:
        'Toutes les questions qu’on nous pose, auxquelles on répond sans détour : reconnaissance, bourses, visas, coûts, voyages, sourcing et paiements — le hub FAQ de RouteToAbroad.',
    },
    crumb: 'FAQ',
    hero: {
      eyebrow: 'Hub FAQ',
      title: 'Les réponses, y compris les plus inconfortables.',
      lede: 'Classées par service, rédigées comme nous répondons au téléphone. S’il manque une question, elle atterrit sur cette page — posez-la.',
    },
    groups: {
      general: { heading: 'Général' },
      education: { eyebrow: 'Études', heading: 'Étudier en Chine', link: 'Page FAQ Études' },
      tourism: { eyebrow: 'Tourisme', heading: 'Voyager en Chine et au Japon', link: 'Page FAQ Tourisme' },
      trade: { eyebrow: 'Commerce', heading: 'Commerce Inde–Chine', link: 'Page FAQ Commerce' },
    },
  },

  ar: {
    meta: {
      title: 'الأسئلة الشائعة — الدراسة والسفر والتجارة عبر شرق آسيا',
      description:
        'كل سؤال نسمعه، بإجابة مباشرة: الاعتراف، المنح، التأشيرات، التكاليف، الرحلات، التوريد والمدفوعات — مركز الأسئلة الشائعة في RouteToAbroad.',
    },
    crumb: 'الأسئلة الشائعة',
    hero: {
      eyebrow: 'مركز الأسئلة الشائعة',
      title: 'الإجابات، مع الإبقاء على الأسئلة المحرجة.',
      lede: 'منظمة حسب الخدمة، مكتوبة كما نجاوب على الهاتف. إن كان أحد الأسئلة مفقودًا فسيُضاف إلى هذه الصفحة — اسألنا.',
    },
    groups: {
      general: { heading: 'عام' },
      education: { eyebrow: 'التعليم', heading: 'الدراسة في الصين', link: 'صفحة أسئلة التعليم الشائعة' },
      tourism: { eyebrow: 'السياحة', heading: 'السفر إلى الصين واليابان', link: 'صفحة أسئلة السياحة الشائعة' },
      trade: { eyebrow: 'التجارة', heading: 'التجارة بين الهند والصين', link: 'صفحة أسئلة التجارة الشائعة' },
    },
  },

  es: {
    meta: {
      title: 'FAQ — Estudiar, viajar y comerciar en Asia Oriental',
      description:
        'Cada pregunta que oímos, respondida sin rodeos: reconocimiento, becas, visados, costes, viajes, sourcing y pagos — el centro de FAQ de RouteToAbroad.',
    },
    crumb: 'FAQ',
    hero: {
      eyebrow: 'Centro de FAQ',
      title: 'Las respuestas, con las incómodas incluidas.',
      lede: 'Organizadas por servicio, escritas como respondemos por teléfono. Si falta una pregunta, acaba en esta página — pregúntanos.',
    },
    groups: {
      general: { heading: 'General' },
      education: { eyebrow: 'Estudios', heading: 'Estudiar en China', link: 'Página de FAQ de Estudios' },
      tourism: { eyebrow: 'Turismo', heading: 'Viajar a China y Japón', link: 'Página de FAQ de Turismo' },
      trade: { eyebrow: 'Comercio', heading: 'Comercio India–China', link: 'Página de FAQ de Comercio' },
    },
  },

  de: {
    meta: {
      title: 'FAQ — Studieren, Reisen & Handeln in Ostasien',
      description:
        'Jede Frage, die wir hören, geradeheraus beantwortet: Anerkennung, Stipendien, Visa, Kosten, Reisen, Beschaffung und Zahlungen — das FAQ-Zentrum von RouteToAbroad.',
    },
    crumb: 'FAQ',
    hero: {
      eyebrow: 'FAQ-Zentrum',
      title: 'Die Antworten — auch die unbequemen bleiben drin.',
      lede: 'Nach Leistung sortiert, geschrieben wie wir am Telefon antworten. Fehlt eine Frage, landet sie auf dieser Seite — fragen Sie uns.',
    },
    groups: {
      general: { heading: 'Allgemein' },
      education: { eyebrow: 'Bildung', heading: 'In China studieren', link: 'Bildungs-FAQ-Seite' },
      tourism: { eyebrow: 'Tourismus', heading: 'Reisen nach China & Japan', link: 'Tourismus-FAQ-Seite' },
      trade: { eyebrow: 'Handel', heading: 'Indien–China-Handel', link: 'Handels-FAQ-Seite' },
    },
  },

  ja: {
    meta: {
      title: 'よくある質問 — 東アジアでの学び・旅・貿易',
      description:
        '寄せられるすべての質問に率直に回答：認可、奨学金、ビザ、費用、旅行、調達、支払い — RouteToAbroad の FAQ ハブ。',
    },
    crumb: 'よくある質問',
    hero: {
      eyebrow: 'FAQ ハブ',
      title: '答えはそのままに — 答えにくい質問も含めて。',
      lede: 'サービス別に整理し、電話での回答と同じ言葉で書いています。ない質問があれば、このページに追加されます — ぜひお尋ねください。',
    },
    groups: {
      general: { heading: '一般' },
      education: { eyebrow: '教育', heading: '中国で学ぶ', link: '教育 FAQ ページ' },
      tourism: { eyebrow: '観光', heading: '中国・日本を旅する', link: '観光 FAQ ページ' },
      trade: { eyebrow: '貿易', heading: 'インド–中国貿易', link: '貿易 FAQ ページ' },
    },
  },

  pt: {
    meta: {
      title: 'FAQ — Estudar, viajar e negociar pela Ásia Oriental',
      description:
        'Cada pergunta que ouvimos, respondida sem rodeios: reconhecimento, bolsas, vistos, custos, viagens, suprimentos e pagamentos — o hub de FAQ da RouteToAbroad.',
    },
    crumb: 'FAQ',
    hero: {
      eyebrow: 'Hub de FAQ',
      title: 'As respostas — inclusive as desconfortáveis.',
      lede: 'Organizadas por serviço, escritas como respondemos ao telefone. Se faltar uma pergunta, ela vai para esta página — pergunte-nos.',
    },
    groups: {
      general: { heading: 'Geral' },
      education: { eyebrow: 'Educação', heading: 'Estudar na China', link: 'Página de FAQ de Educação' },
      tourism: { eyebrow: 'Turismo', heading: 'Viajar para China e Japão', link: 'Página de FAQ de Turismo' },
      trade: { eyebrow: 'Comércio', heading: 'Comércio Índia–China', link: 'Página de FAQ de Comércio' },
    },
  },

  hi: {
    meta: {
      title: 'सामान्य प्रश्न — पूर्वी एशिया में पढ़ाई, यात्रा और व्यापार',
      description:
        'हर सवाल जो हम सुनते हैं, सीधा जवाब: मान्यता, छात्रवृत्तियाँ, वीज़ा, लागत, यात्राएँ, सोर्सिंग और भुगतान — RouteToAbroad FAQ केंद्र।',
    },
    crumb: 'सामान्य प्रश्न',
    hero: {
      eyebrow: 'FAQ केंद्र',
      title: 'जवाब — असहज करने वाले सवाल भी शामिल।',
      lede: 'सेवा के अनुसार व्यवस्थित, वैसे ही लिखे गए जैसे हम कॉल पर जवाब देते हैं। कोई सवाल छूट गया हो, तो वह इस पृष्ठ पर आएगा — हमसे पूछें।',
    },
    groups: {
      general: { heading: 'सामान्य' },
      education: { eyebrow: 'शिक्षा', heading: 'चीन में पढ़ाई', link: 'शिक्षा FAQ पृष्ठ' },
      tourism: { eyebrow: 'पर्यटन', heading: 'चीन और जापान यात्रा', link: 'पर्यटन FAQ पृष्ठ' },
      trade: { eyebrow: 'व्यापार', heading: 'भारत–चीन व्यापार', link: 'व्यापार FAQ पृष्ठ' },
    },
  },
};
