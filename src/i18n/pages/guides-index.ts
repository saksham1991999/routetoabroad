/**
 * Guides index copy — every user-visible string on the shared
 * GuidesIndexPage component, keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations that follow the terminology
 * already established in src/i18n/ui.ts (zh 指南, fr Guides, ar الأدلة,
 * es Guías) and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * GuidesIndexStrings interface.
 */
import type { Locale } from '../../lib/i18n';

/** Guide pillar keys — frontmatter enum, never translated. */
export type Pillar = 'education' | 'tourism' | 'trade';

export interface GuidesIndexStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Section name for /guides — breadcrumbs, nav terminology. */
  crumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  /** Per-pillar section headings, e.g. "Education guides". */
  sections: Record<Pillar, string>;
  /** Pillar names used as card tags. */
  categories: Record<Pillar, string>;
  /** "{n} min" — card meta prefix. */
  minShort: string;
  /** "· updated" — appended to card meta when updatedDate exists. */
  updatedSuffix: string;
}

export const GUIDES_INDEX: Record<Locale, GuidesIndexStrings> = {
  en: {
    meta: {
      title: 'Guides — Studying, Visas, Travel & Sourcing Explained',
      description:
        'In-depth guides for the East Asia corridor: MBBS in China, CSC scholarships, student visas, HSK preparation, China and Japan travel, and China sourcing — answer-first and regularly updated.',
    },
    crumb: 'Guides',
    hero: {
      eyebrow: 'Guides',
      title: 'The reference shelf.',
      lede: 'Long-form explainers written to be answers, not brochures — each one opens with the short answer, then earns it.',
    },
    sections: { education: 'Education guides', tourism: 'Travel guides', trade: 'Trade guides' },
    categories: { education: 'Education', tourism: 'Tourism', trade: 'Trade' },
    minShort: '{n} min',
    updatedSuffix: '· updated',
  },

  zh: {
    meta: {
      title: '指南 — 留学、签证、旅行与采购详解',
      description:
        '针对东亚走廊的深度指南：中国 MBBS、CSC 奖学金、学生签证、HSK 备考、中国与日本旅行、中国采购——答案先行，持续更新。',
    },
    crumb: '指南',
    hero: {
      eyebrow: '指南',
      title: '常备参考书架。',
      lede: '为“成为答案”而写的长文解读，不是宣传册——每篇都以简短答案开头，再一步步论证到位。',
    },
    sections: { education: '教育指南', tourism: '旅行指南', trade: '贸易指南' },
    categories: { education: '教育', tourism: '旅游', trade: '贸易' },
    minShort: '{n} 分钟',
    updatedSuffix: '· 已更新',
  },

  fr: {
    meta: {
      title: 'Guides — Études, visas, voyages et sourcing expliqués',
      description:
        'Guides approfondis pour le corridor Asie de l’Est : MBBS en Chine, bourses CSC, visas étudiants, préparation HSK, voyages en Chine et au Japon, sourcing en Chine — la réponse d’abord, mis à jour régulièrement.',
    },
    crumb: 'Guides',
    hero: {
      eyebrow: 'Guides',
      title: 'L’étagère de référence.',
      lede: 'Des explications longues écrites pour être des réponses, pas des brochures — chaque guide commence par la réponse courte, puis la démontre.',
    },
    sections: { education: 'Guides d’études', tourism: 'Guides voyages', trade: 'Guides commerce' },
    categories: { education: 'Études', tourism: 'Tourisme', trade: 'Commerce' },
    minShort: '{n} min',
    updatedSuffix: '· mise à jour',
  },

  ar: {
    meta: {
      title: 'الأدلة — الدراسة والتأشيرات والسفر والتوريد بوضوح',
      description:
        'أدلة معمّقة لممر شرق آسيا: MBBS في الصين، منح CSC، تأشيرات الطلاب، التحضير لاختبار HSK، السفر إلى الصين واليابان، والتوريد من الصين — الإجابة أولاً وتحديث مستمر.',
    },
    crumb: 'الأدلة',
    hero: {
      eyebrow: 'الأدلة',
      title: 'الرف المرجعي.',
      lede: 'شروحات مطوّلة كُتبت لتكون إجابات لا كراسات دعائية — كل دليل يبدأ بالإجابة المختصرة ثم يثبتها.',
    },
    sections: { education: 'أدلة التعليم', tourism: 'أدلة السفر', trade: 'أدلة التجارة' },
    categories: { education: 'التعليم', tourism: 'السياحة', trade: 'التجارة' },
    minShort: '{n} دقيقة',
    updatedSuffix: '· حُدّث',
  },

  es: {
    meta: {
      title: 'Guías — Estudios, visados, viajes y sourcing explicados',
      description:
        'Guías en profundidad para el corredor de Asia Oriental: MBBS en China, becas CSC, visados de estudiante, preparación HSK, viajes a China y Japón, y sourcing en China — primero la respuesta y actualizadas con regularidad.',
    },
    crumb: 'Guías',
    hero: {
      eyebrow: 'Guías',
      title: 'La estantería de referencia.',
      lede: 'Explicaciones extensas escritas para ser respuestas, no folletos — cada una abre con la respuesta corta y luego la justifica.',
    },
    sections: { education: 'Guías de educación', tourism: 'Guías de viajes', trade: 'Guías de comercio' },
    categories: { education: 'Educación', tourism: 'Turismo', trade: 'Comercio' },
    minShort: '{n} min',
    updatedSuffix: '· actualizada',
  },

  de: {
    meta: {
      title: 'Guides — Studieren, Visa, Reisen & Beschaffung erklärt',
      description:
        'Ausführliche Guides für den Ostasien-Korridor: MBBS in China, CSC-Stipendien, Studentenvisa, HSK-Vorbereitung, Reisen durch China und Japan, Beschaffung in China — Antwort zuerst, regelmäßig aktualisiert.',
    },
    crumb: 'Guides',
    hero: {
      eyebrow: 'Guides',
      title: 'Das Referenzregal.',
      lede: 'Lange Erklärtexte, geschrieben, um Antworten zu sein, nicht Broschüren — jeder beginnt mit der kurzen Antwort und liefert sie dann ein.',
    },
    sections: { education: 'Bildungs-Guides', tourism: 'Reise-Guides', trade: 'Handels-Guides' },
    categories: { education: 'Bildung', tourism: 'Tourismus', trade: 'Handel' },
    minShort: '{n} Min.',
    updatedSuffix: '· aktualisiert',
  },

  ja: {
    meta: {
      title: 'ガイド — 留学・ビザ・旅行・調達を解説',
      description:
        '東アジア回廊のための詳解ガイド：中国での MBBS、CSC 奨学金、学生ビザ、HSK 対策、中国・日本旅行、中国調達 — 答えから始め、随時更新。',
    },
    crumb: 'ガイド',
    hero: {
      eyebrow: 'ガイド',
      title: '常備したい参考文献棚。',
      lede: 'パンフレットではなく「答え」であることを目指した長文解説 — どれも短い答えから始めて、それを裏付けていきます。',
    },
    sections: { education: '教育ガイド', tourism: '旅行ガイド', trade: '貿易ガイド' },
    categories: { education: '教育', tourism: '観光', trade: '貿易' },
    minShort: '{n} 分',
    updatedSuffix: '· 更新済み',
  },

  pt: {
    meta: {
      title: 'Guias — Estudos, vistos, viagens e suprimentos explicados',
      description:
        'Guias aprofundados para o corredor da Ásia Oriental: MBBS na China, bolsas CSC, vistos de estudante, preparação HSK, viagens pela China e Japão, suprimentos na China — resposta primeiro, atualizados com regularidade.',
    },
    crumb: 'Guias',
    hero: {
      eyebrow: 'Guias',
      title: 'A estante de referência.',
      lede: 'Explicações longas escritas para serem respostas, não folhetos — cada uma abre com a resposta curta e depois a sustenta.',
    },
    sections: { education: 'Guias de educação', tourism: 'Guias de viagem', trade: 'Guias de comércio' },
    categories: { education: 'Educação', tourism: 'Turismo', trade: 'Comércio' },
    minShort: '{n} min',
    updatedSuffix: '· atualizado',
  },

  hi: {
    meta: {
      title: 'गाइड — पढ़ाई, वीज़ा, यात्रा और सोर्सिंग समझाए गए',
      description:
        'पूर्वी एशिया गलियारे के लिए गहन गाइड: चीन में MBBS, CSC छात्रवृत्तियाँ, छात्र वीज़ा, HSK तैयारी, चीन और जापान यात्रा, चीन सोर्सिंग — जवाब पहले, नियमित अपडेट।',
    },
    crumb: 'गाइड',
    hero: {
      eyebrow: 'गाइड',
      title: 'संदर्भ-अलमारी।',
      lede: 'लंबे विवरण, ब्रोशर नहीं — जवाब बनने के लिए लिखे गए; हर एक छोटे जवाब से शुरू होकर उसे सिद्ध करता है।',
    },
    sections: { education: 'शिक्षा गाइड', tourism: 'यात्रा गाइड', trade: 'व्यापार गाइड' },
    categories: { education: 'शिक्षा', tourism: 'पर्यटन', trade: 'व्यापार' },
    minShort: '{n} मिनट',
    updatedSuffix: '· अपडेट',
  },
};
