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

  de: {
    crumb: 'Vergleichen',
    eyebrow: {
      comparison: 'Vergleich',
      updated: 'aktualisiert',
    },
    qaLabel: 'Kurze Antwort',
    table: {
      factorHeader: 'Faktor',
      aria: 'Vergleichstabelle',
    },
    verdict: {
      eyebrow: 'Das Urteil',
      aria: 'Urteil',
    },
    faqs: {
      heading: 'Vergleich-FAQs',
      aria: 'FAQs',
    },
    related: {
      label: 'Nächste Schritte',
      education: {
        fitCheck: 'Eignungscheck durchführen',
        roadmap: 'Roadmap lesen',
      },
      trade: {
        sourcingGuide: 'Beschaffungsleitfaden lesen',
        tradeDesk: 'Mit dem Trade-Desk sprechen',
      },
    },
  },

  ja: {
    crumb: '比較',
    eyebrow: {
      comparison: '比較',
      updated: '更新',
    },
    qaLabel: '簡単に言うと',
    table: {
      factorHeader: '項目',
      aria: '比較表',
    },
    verdict: {
      eyebrow: '結論',
      aria: '結論',
    },
    faqs: {
      heading: '比較に関する FAQ',
      aria: 'FAQ',
    },
    related: {
      label: '次のステップ',
      education: {
        fitCheck: 'マッチング診断をする',
        roadmap: 'ロードマップを読む',
      },
      trade: {
        sourcingGuide: '調達ガイドを読む',
        tradeDesk: '貿易デスクに相談する',
      },
    },
  },

  pt: {
    crumb: 'Comparar',
    eyebrow: {
      comparison: 'Comparação',
      updated: 'atualizado em',
    },
    qaLabel: 'Resposta curta',
    table: {
      factorHeader: 'Fator',
      aria: 'Tabela comparativa',
    },
    verdict: {
      eyebrow: 'O veredito',
      aria: 'Veredito',
    },
    faqs: {
      heading: 'FAQs da comparação',
      aria: 'FAQs',
    },
    related: {
      label: 'Próximos passos',
      education: {
        fitCheck: 'Fazer a avaliação de perfil',
        roadmap: 'Ler o roteiro',
      },
      trade: {
        sourcingGuide: 'Ler o guia de suprimentos',
        tradeDesk: 'Falar com a mesa de comércio',
      },
    },
  },

  hi: {
    crumb: 'तुलना',
    eyebrow: {
      comparison: 'तुलना',
      updated: 'अपडेट',
    },
    qaLabel: 'संक्षिप्त उत्तर',
    table: {
      factorHeader: 'पहलू',
      aria: 'तुलना तालिका',
    },
    verdict: {
      eyebrow: 'अंतिम निर्णय',
      aria: 'निर्णय',
    },
    faqs: {
      heading: 'तुलना से जुड़े सामान्य प्रश्न',
      aria: 'सामान्य प्रश्न',
    },
    related: {
      label: 'अगले क़दम',
      education: {
        fitCheck: 'फ़िट जाँच करें',
        roadmap: 'रोडमैप पढ़ें',
      },
      trade: {
        sourcingGuide: 'सोर्सिंग गाइड पढ़ें',
        tradeDesk: 'व्यापार डेस्क से बात करें',
      },
    },
  },
};
