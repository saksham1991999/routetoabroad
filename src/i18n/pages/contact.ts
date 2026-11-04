/**
 * Contact page copy — every user-visible string on the shared ContactPage
 * component, keyed by locale. English is the source of truth; zh/fr/ar/es
 * are machine-assisted translations that follow the terminology already
 * established in src/i18n/ui.ts and still need native-speaker review.
 *
 * Facts (addresses, phone, email, hours) are never inlined here — the
 * component reads them from src/lib/site.ts. Strings that carry a phone
 * number use a `{phone}` placeholder the component replaces with
 * SITE.phoneIndia, so the digits stay a single source of truth.
 *
 * Form copy (labels, placeholders, status strings) is owned by
 * ContactForm.astro via ui.formFields / ui.forms.contact — not here.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * ContactStrings interface, so a key added to `en` breaks the build until
 * all four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface ContactStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: {
    title: string;
    /** Carries a {phone} placeholder replaced with SITE.phoneIndia. */
    description: string;
  };
  /** Breadcrumb label for /contact. */
  crumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  /** Eyebrow labels of the two office cards (addresses come from SITE). */
  delhiDesk: string;
  chinaDesk: string;
  /** Country name in the Guangzhou address line. */
  chinaLabel: string;
  /** "Faster than forms" card. The WhatsApp/call hrefs stay in the component. */
  direct: {
    title: string;
    /** Carries a {phone} placeholder replaced with SITE.phoneIndia. */
    whatsapp: string;
    call: string;
  };
}

export const CONTACT: Record<Locale, ContactStrings> = {
  en: {
    meta: {
      title: 'Contact — Talk to the New Delhi or Guangzhou Desk',
      description:
        'Reach RouteToAbroad: education, tourism or trade enquiries answered within one working day. New Delhi office (Saket) and Guangzhou office (Tianhe), WhatsApp {phone}.',
    },
    crumb: 'Contact',
    hero: {
      eyebrow: 'Contact',
      title: "Let's build your future, together.",
      lede: 'Pick a desk, send a message, or just call. Someone accountable replies within one working day.',
    },
    delhiDesk: 'New Delhi · India desk',
    chinaDesk: 'Guangzhou · China desk',
    chinaLabel: 'China',
    direct: {
      title: 'Faster than forms',
      whatsapp: 'WhatsApp an advisor',
      call: 'Call {phone}',
    },
  },

  zh: {
    meta: {
      title: '联系我们 — 直拨新德里或广州办事处',
      description:
        '联系 RouteToAbroad：教育、旅游或贸易咨询均在一个工作日内回复。新德里办事处（Saket）与广州办事处（天河），WhatsApp {phone}。',
    },
    crumb: '联系我们',
    hero: {
      eyebrow: '联系我们',
      title: '让我们一起构建你的未来。',
      lede: '选择一个办事处，发一条消息，或者直接打电话。有负责人在一个工作日内回复。',
    },
    delhiDesk: '新德里 · 印度事务组',
    chinaDesk: '广州 · 中国事务组',
    chinaLabel: '中国',
    direct: {
      title: '比表单更快',
      whatsapp: 'WhatsApp 咨询顾问',
      call: '拨打 {phone}',
    },
  },

  fr: {
    meta: {
      title: 'Contact — Parlez au bureau de New Delhi ou de Canton',
      description:
        'Contactez RouteToAbroad : demandes d’études, de tourisme ou de commerce traitées sous un jour ouvré. Bureau de New Delhi (Saket) et bureau de Canton (Tianhe), WhatsApp {phone}.',
    },
    crumb: 'Contact',
    hero: {
      eyebrow: 'Contact',
      title: 'Construisons votre avenir, ensemble.',
      lede: 'Choisissez un bureau, envoyez un message ou appelez simplement. Quelqu’un de responsable répond sous un jour ouvré.',
    },
    delhiDesk: 'New Delhi · Bureau Inde',
    chinaDesk: 'Canton · Bureau Chine',
    chinaLabel: 'Chine',
    direct: {
      title: 'Plus rapide qu’un formulaire',
      whatsapp: 'WhatsApp un conseiller',
      call: 'Appeler {phone}',
    },
  },

  ar: {
    meta: {
      title: 'تواصل معنا — تحدث إلى مكتب نيودلهي أو قوانغتشو',
      description:
        'تواصل مع RouteToAbroad: استفسارات التعليم والسياحة والتجارة يُرد عليها خلال يوم عمل واحد. مكتب نيودلهي (ساكيت) ومكتب قوانغتشو (تيانهي)، واتساب {phone}.',
    },
    crumb: 'تواصل معنا',
    hero: {
      eyebrow: 'تواصل معنا',
      title: 'لنبنِ مستقبلك معًا.',
      lede: 'اختر مكتبًا، أو أرسل رسالة، أو اتصل مباشرة. يرد شخص مسؤول خلال يوم عمل واحد.',
    },
    delhiDesk: 'نيودلهي · المكتب الهندي',
    chinaDesk: 'قوانغتشو · المكتب الصيني',
    chinaLabel: 'الصين',
    direct: {
      title: 'أسرع من النماذج',
      whatsapp: 'تواصل عبر واتساب',
      call: 'اتصل بـ {phone}',
    },
  },

  es: {
    meta: {
      title: 'Contacto — Hable con la mesa de Nueva Delhi o Cantón',
      description:
        'Contacte con RouteToAbroad: consultas de educación, turismo o comercio respondidas dentro de un día hábil. Oficina de Nueva Delhi (Saket) y oficina de Cantón (Tianhe), WhatsApp {phone}.',
    },
    crumb: 'Contacto',
    hero: {
      eyebrow: 'Contacto',
      title: 'Construyamos su futuro, juntos.',
      lede: 'Elija una mesa, envíe un mensaje o simplemente llame. Alguien responsable responde dentro de un día hábil.',
    },
    delhiDesk: 'Nueva Delhi · Mesa India',
    chinaDesk: 'Cantón · Mesa China',
    chinaLabel: 'China',
    direct: {
      title: 'Más rápido que un formulario',
      whatsapp: 'WhatsApp a un asesor',
      call: 'Llame al {phone}',
    },
  },
};
