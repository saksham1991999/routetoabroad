/**
 * Compare detail copy — the template chrome around the comparison entry on
 * the shared CompareDetailPage component, keyed by locale. English is the
 * source of truth; zh/fr/ar/es are machine-assisted translations that follow
 * the terminology already established in src/i18n/ui.ts and still need
 * native-speaker review.
 *
 * The comparison data itself (title, headline, answer, entities, rows,
 * verdict, body, FAQs) comes from the locale's own set in
 * src/data/comparisons.ts and is NOT duplicated here.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * CompareDetailStrings interface.
 */
import type { Locale } from '../../lib/i18n';

export interface CompareDetailStrings {
  crumb: string;
  eyebrow: {
    /** Section label before the updated date, e.g. "Comparison · updated …". */
    comparison: string;
    updated: string;
  };
  qaLabel: string;
  table: {
    factorHeader: string;
    /** Accessible name of the comparison table section. */
    aria: string;
  };
  verdict: {
    eyebrow: string;
    /** Accessible name of the verdict section. */
    aria: string;
  };
  faqs: {
    heading: string;
    /** Accessible name of the FAQ section. */
    aria: string;
  };
  related: {
    label: string;
    education: {
      fitCheck: string;
      roadmap: string;
    };
    trade: {
      sourcingGuide: string;
      tradeDesk: string;
    };
  };
}

export const COMPARE_DETAIL: Record<Locale, CompareDetailStrings> = {
  en: {
    crumb: 'Compare',
    eyebrow: {
      comparison: 'Comparison',
      updated: 'updated',
    },
    qaLabel: 'Short answer',
    table: {
      factorHeader: 'Factor',
      aria: 'Comparison table',
    },
    verdict: {
      eyebrow: 'The verdict',
      aria: 'Verdict',
    },
    faqs: {
      heading: 'Comparison FAQs',
      aria: 'FAQs',
    },
    related: {
      label: 'Next steps',
      education: {
        fitCheck: 'Run the fit check',
        roadmap: 'Read the roadmap',
      },
      trade: {
        sourcingGuide: 'Read the sourcing guide',
        tradeDesk: 'Talk to the trade desk',
      },
    },
  },

  zh: {
    crumb: '对比',
    eyebrow: {
      comparison: '对比分析',
      updated: '更新于',
    },
    qaLabel: '简短回答',
    table: {
      factorHeader: '对比维度',
      aria: '对比表格',
    },
    verdict: {
      eyebrow: '最终结论',
      aria: '结论',
    },
    faqs: {
      heading: '对比相关常见问题',
      aria: '常见问题',
    },
    related: {
      label: '下一步',
      education: {
        fitCheck: '开始适配检查',
        roadmap: '阅读路线图',
      },
      trade: {
        sourcingGuide: '阅读采购指南',
        tradeDesk: '与贸易团队洽谈',
      },
    },
  },

  fr: {
    crumb: 'Comparer',
    eyebrow: {
      comparison: 'Comparaison',
      updated: 'mis à jour le',
    },
    qaLabel: 'Réponse courte',
    table: {
      factorHeader: 'Critère',
      aria: 'Tableau comparatif',
    },
    verdict: {
      eyebrow: 'Le verdict',
      aria: 'Verdict',
    },
    faqs: {
      heading: 'FAQ de la comparaison',
      aria: 'FAQ',
    },
    related: {
      label: 'Prochaines étapes',
      education: {
        fitCheck: 'Faire le test de compatibilité',
        roadmap: 'Lire la feuille de route',
      },
      trade: {
        sourcingGuide: 'Lire le guide de sourcing',
        tradeDesk: 'Parler à la cellule commerce',
      },
    },
  },

  ar: {
    crumb: 'قارن',
    eyebrow: {
      comparison: 'مقارنة',
      updated: 'حُدِّث في',
    },
    qaLabel: 'الإجابة المختصرة',
    table: {
      factorHeader: 'العامل',
      aria: 'جدول المقارنة',
    },
    verdict: {
      eyebrow: 'الحكم النهائي',
      aria: 'الحكم النهائي',
    },
    faqs: {
      heading: 'أسئلة شائعة عن المقارنة',
      aria: 'الأسئلة الشائعة',
    },
    related: {
      label: 'الخطوات التالية',
      education: {
        fitCheck: 'أجرِ فحص الملاءمة',
        roadmap: 'اقرأ خارطة الطريق',
      },
      trade: {
        sourcingGuide: 'اقرأ دليل التوريد',
        tradeDesk: 'تحدث مع فريق التجارة',
      },
    },
  },

  es: {
    crumb: 'Comparar',
    eyebrow: {
      comparison: 'Comparación',
      updated: 'actualizado el',
    },
    qaLabel: 'Respuesta corta',
    table: {
      factorHeader: 'Factor',
      aria: 'Tabla comparativa',
    },
    verdict: {
      eyebrow: 'El veredicto',
      aria: 'Veredicto',
    },
    faqs: {
      heading: 'FAQ de la comparación',
      aria: 'Preguntas frecuentes',
    },
    related: {
      label: 'Próximos pasos',
      education: {
        fitCheck: 'Haz el check de compatibilidad',
        roadmap: 'Lee la hoja de ruta',
      },
      trade: {
        sourcingGuide: 'Lee la guía de sourcing',
        tradeDesk: 'Hablar con el equipo de comercio',
      },
    },
  },
};
