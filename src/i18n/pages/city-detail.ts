/**
 * City detail copy — the template chrome around the collection entry on the
 * shared CityDetailPage component, keyed by locale. English is the source of
 * truth; zh/fr/ar/es are machine-assisted translations that follow the
 * terminology already established in src/i18n/ui.ts and still need
 * native-speaker review.
 *
 * Entry frontmatter (name, Chinese name, country, intro, cost figures,
 * highlights, universities list, FAQs, markdown body) renders whatever the
 * localized collection carries and is NOT duplicated here. `{name}`
 * placeholders in templates are replaced with the entry's own name.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * CityDetailStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface CityDetailStrings {
  /** <title> template (must stay unique per locale — validator). */
  metaTitleTemplate: string;
  crumb: string;
  /** Labels under the hero cost figures (figures stay in the entry). */
  costs: {
    studentPerMonth: string;
    travellerPerDay: string;
    bestTime: string;
  };
  highlights: {
    eyebrow: string;
    title: string;
  };
  faq: {
    eyebrow: string;
    title: string;
  };
  side: {
    uniTitle: string;
    uniLink: string;
    ctaTitle: string;
    ctaText: string;
    planTrip: string;
    applyStudy: string;
  };
}

export const CITY_DETAIL: Record<Locale, CityDetailStrings> = {
  en: {
    metaTitleTemplate: '{name} City Guide — Costs, Universities & Travel',
    crumb: 'Cities',
    costs: {
      studentPerMonth: 'student / month',
      travellerPerDay: 'traveller / day',
      bestTime: 'best time to visit',
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'What the city is for',
    },
    faq: {
      eyebrow: 'City FAQ',
      title: 'Common questions',
    },
    side: {
      uniTitle: 'Universities here',
      uniLink: 'All university profiles',
      ctaTitle: 'See it with us',
      ctaText: 'Private tours, group programmes and student placements run through this city every season.',
      planTrip: 'Plan a trip',
      applyStudy: 'Apply to study',
    },
  },

  zh: {
    metaTitleTemplate: '{name}城市指南 —— 费用、大学与旅行',
    crumb: '城市',
    costs: {
      studentPerMonth: '学生 / 月',
      travellerPerDay: '旅行者 / 天',
      bestTime: '最佳旅行时间',
    },
    highlights: {
      eyebrow: '城市亮点',
      title: '这座城市能给你什么',
    },
    faq: {
      eyebrow: '城市常见问题',
      title: '常见问题',
    },
    side: {
      uniTitle: '这里的大学',
      uniLink: '查看全部大学档案',
      ctaTitle: '和我们一起去',
      ctaText: '私人定制游、团体项目与学生入学安置每个季度都会经过这座城市。',
      planTrip: '规划行程',
      applyStudy: '申请留学',
    },
  },

  fr: {
    metaTitleTemplate: 'Guide de {name} — Coûts, universités et voyage',
    crumb: 'Villes',
    costs: {
      studentPerMonth: 'étudiant / mois',
      travellerPerDay: 'voyageur / jour',
      bestTime: 'meilleure période',
    },
    highlights: {
      eyebrow: 'Points forts',
      title: 'Ce que la ville a à offrir',
    },
    faq: {
      eyebrow: 'FAQ ville',
      title: 'Questions fréquentes',
    },
    side: {
      uniTitle: 'Universités sur place',
      uniLink: 'Tous les profils d’université',
      ctaTitle: 'Voyagez avec nous',
      ctaText: 'Tours privés, programmes en groupe et placements étudiants passent par cette ville chaque saison.',
      planTrip: 'Planifier un voyage',
      applyStudy: 'Candidater pour les études',
    },
  },

  ar: {
    metaTitleTemplate: 'دليل مدينة {name} — التكاليف والجامعات والسفر',
    crumb: 'المدن',
    costs: {
      studentPerMonth: 'طالب / شهر',
      travellerPerDay: 'مسافر / يوم',
      bestTime: 'أفضل وقت للزيارة',
    },
    highlights: {
      eyebrow: 'أبرز المعالم',
      title: 'ما الذي تقدمه هذه المدينة',
    },
    faq: {
      eyebrow: 'أسئلة المدينة الشائعة',
      title: 'الأسئلة الشائعة',
    },
    side: {
      uniTitle: 'الجامعات هنا',
      uniLink: 'كل ملفات الجامعات',
      ctaTitle: 'شاهدها معنا',
      ctaText: 'الجولات الخاصة والبرامج الجماعية ووضع الطلاب تمر بهذه المدينة في كل موسم.',
      planTrip: 'خطط لرحلة',
      applyStudy: 'تقدّم للدراسة',
    },
  },

  es: {
    metaTitleTemplate: 'Guía de {name} — Costes, universidades y viaje',
    crumb: 'Ciudades',
    costs: {
      studentPerMonth: 'estudiante / mes',
      travellerPerDay: 'viajero / día',
      bestTime: 'mejor época para visitar',
    },
    highlights: {
      eyebrow: 'Destacados',
      title: 'Lo que ofrece esta ciudad',
    },
    faq: {
      eyebrow: 'FAQ de la ciudad',
      title: 'Preguntas frecuentes',
    },
    side: {
      uniTitle: 'Universidades aquí',
      uniLink: 'Todos los perfiles de universidades',
      ctaTitle: 'Visítala con nosotros',
      ctaText: 'Tours privados, programas grupales y admisiones de estudiantes pasan por esta ciudad cada temporada.',
      planTrip: 'Planificar un viaje',
      applyStudy: 'Solicitar estudios',
    },
  },

  de: {
    metaTitleTemplate: 'Stadtführer {name} — Kosten, Universitäten & Reisen',
    crumb: 'Städte',
    costs: {
      studentPerMonth: 'Studierende / Monat',
      travellerPerDay: 'Reisende / Tag',
      bestTime: 'beste Reisezeit',
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'Wofür die Stadt gut ist',
    },
    faq: {
      eyebrow: 'Stadt-FAQ',
      title: 'Häufige Fragen',
    },
    side: {
      uniTitle: 'Universitäten hier',
      uniLink: 'Alle Universitätsprofile',
      ctaTitle: 'Erleben Sie sie mit uns',
      ctaText: 'Private Touren, Gruppenprogramme und Studienvermittlung laufen jede Saison durch diese Stadt.',
      planTrip: 'Reise planen',
      applyStudy: 'Für ein Studium bewerben',
    },
  },

  ja: {
    metaTitleTemplate: '{name} 都市ガイド — 費用・大学・旅',
    crumb: '都市',
    costs: {
      studentPerMonth: '学生 / 月',
      travellerPerDay: '旅行者 / 日',
      bestTime: 'ベストシーズン',
    },
    highlights: {
      eyebrow: '見どころ',
      title: 'この都市が持つ魅力',
    },
    faq: {
      eyebrow: '都市の FAQ',
      title: 'よくある質問',
    },
    side: {
      uniTitle: 'この街の大学',
      uniLink: '大学プロフィール一覧',
      ctaTitle: '私たちと一緒に巡る',
      ctaText: '個人ツアー、グループプログラム、学生の進学手配が毎シーズンこの都市を訪れます。',
      planTrip: '旅を計画する',
      applyStudy: '留学に申し込む',
    },
  },

  pt: {
    metaTitleTemplate: 'Guia de {name} — Custos, universidades e viagem',
    crumb: 'Cidades',
    costs: {
      studentPerMonth: 'estudante / mês',
      travellerPerDay: 'viajante / dia',
      bestTime: 'melhor época',
    },
    highlights: {
      eyebrow: 'Destaques',
      title: 'Para que serve a cidade',
    },
    faq: {
      eyebrow: 'FAQ da cidade',
      title: 'Perguntas frequentes',
    },
    side: {
      uniTitle: 'Universidades aqui',
      uniLink: 'Todos os perfis de universidade',
      ctaTitle: 'Conheça com a gente',
      ctaText: 'Tours privados, programas em grupo e matrículas de estudantes passam por esta cidade a cada temporada.',
      planTrip: 'Planejar uma viagem',
      applyStudy: 'Candidatar-se para estudar',
    },
  },

  hi: {
    metaTitleTemplate: '{name} शहर गाइड — लागत, विश्वविद्यालय और यात्रा',
    crumb: 'शहर',
    costs: {
      studentPerMonth: 'विद्यार्थी / माह',
      travellerPerDay: 'यात्री / दिन',
      bestTime: 'घूमने का सर्वोत्तम समय',
    },
    highlights: {
      eyebrow: 'मुख्य आकर्षण',
      title: 'यह शहर किसके लिए है',
    },
    faq: {
      eyebrow: 'शहर FAQ',
      title: 'सामान्य प्रश्न',
    },
    side: {
      uniTitle: 'यहाँ के विश्वविद्यालय',
      uniLink: 'सभी विश्वविद्यालय प्रोफ़ाइल',
      ctaTitle: 'हमारे साथ देखिए',
      ctaText: 'निजी टूर, समूह प्रोग्राम और विद्यार्थी प्रवेश हर सत्र में इस शहर से गुज़रते हैं।',
      planTrip: 'यात्रा की योजना बनाएँ',
      applyStudy: 'पढ़ाई के लिए आवेदन करें',
    },
  },
};
