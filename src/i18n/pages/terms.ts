/**
 * Terms of service copy — keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations following the terminology in
 * src/i18n/ui.ts and still need native-speaker review. Facts (email, phone,
 * office address) are never inlined here — the component interpolates them
 * from src/lib/site.ts so they can't drift.
 */
import type { Locale } from '../../lib/i18n';

export interface TermsStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; lede: string };
  updated: string;
  sections: {
    services: { h: string; p: string };
    /** Bullet list; each item renders a <strong> lead followed by text. */
    noGuarantee: { h: string; items: { strong: string; text: string }[] };
    /** Split around the inline <strong> warning. */
    obligations: { h: string; pre: string; strong: string; post: string };
    fees: { h: string; p: string };
    cancellations: { h: string; p: string };
    tools: { h: string; p: string };
    liability: { h: string; p: string };
    law: { h: string; p: string };
    /** Body is the SITE-fact line, composed in the component. */
    contact: { h: string };
  };
}

export const TERMS: Record<Locale, TermsStrings> = {
  en: {
    meta: {
      title: 'Terms of Service',
      description:
        'The honest disclaimers behind RouteToAbroad’s services: what we guarantee (process, effort, honesty) and what we cannot (admissions, scholarships, visas, recognition).',
    },
    hero: {
      eyebrow: 'Legal',
      title: 'Terms of service',
      lede: 'The honest disclaimers that should be on every consultancy’s site, on ours they actually are.',
    },
    updated: 'Last updated: November 2025',
    sections: {
      services: {
        h: '1. Services',
        p: 'RouteToAbroad provides education placement (admissions, scholarship applications, visa preparation and arrival support), travel design (private, group and business travel across China and Japan), and trade services (sourcing, quality control, compliance and logistics) between India and East Asia.',
      },
      noGuarantee: {
        h: '2. What we do not guarantee',
        items: [
          {
            strong: 'Admission.',
            text: ' Universities decide admissions. We prepare files that give you the best honest chance; we cannot purchase outcomes.',
          },
          {
            strong: 'Scholarships.',
            text: ' Scholarship committees decide funding. We do not sell guaranteed full scholarships, and no legitimate consultancy can.',
          },
          {
            strong: 'Visas.',
            text: ' Embassies decide visas. We ensure your file is complete and correct; refusal for misrepresentation or policy change is outside anyone’s control.',
          },
          {
            strong: 'Recognition.',
            text: ' Licensing bodies (NMC/FMGE-NExT, PMDC, ECFMG and others) set their own rules, which change. Verify your country’s current requirements before committing.',
          },
        ],
      },
      obligations: {
        h: '3. Your obligations',
        pre: 'You agree to provide true, complete documents. ',
        strong: 'A false or altered document ends the application immediately',
        post: ' — and our engagement — without refund of work already performed, because it also endangers every honest file around it.',
      },
      fees: {
        h: '4. Fees and payments',
        p: 'Education engagements: quoted per service before work begins. Trade engagements: success fee tied to shipped value, with audit/inspection costs quoted and payable upfront. Tourism: deposit and balance per your booking confirmation. University tuition and third-party fees (embassies, exam bodies, insurers) are always paid to the institution concerned — never to personal accounts.',
      },
      cancellations: {
        h: '5. Cancellations',
        p: 'Tourism bookings: full refund up to 30 days before departure; within 30 days, all recoverable supplier amounts are refunded with receipts. Education and trade engagements: cancellable at any point; fees for completed work stages remain due.',
      },
      tools: {
        h: '6. Tool outputs',
        p: 'Calculators, fit checks and checklists on this site are estimation and routing aids built on our placement records. They are not offers, verdicts, or professional advice. Your offer letter and official fee schedules are the real numbers.',
      },
      liability: {
        h: '7. Liability',
        p: 'Our liability for any claim is limited to the fees you paid us for the service giving rise to the claim. We are not liable for indirect losses (lost profits, missed intakes caused by third-party delays, and similar).',
      },
      law: {
        h: '8. Governing law',
        p: 'These terms are governed by the laws of India, with jurisdiction in New Delhi.',
      },
      contact: {
        h: '9. Contact',
      },
    },
  },

  zh: {
    meta: {
      title: '服务条款',
      description: 'RouteToAbroad 服务背后坦诚的免责声明：我们能保证什么（流程、投入、诚实），不能保证什么（录取、奖学金、签证、认证）。',
    },
    hero: {
      eyebrow: '法律',
      title: '服务条款',
      lede: '每家咨询机构网站上都该有的坦诚免责声明——在我们这里，它们真的在。',
    },
    updated: '最后更新：2025 年 11 月',
    sections: {
      services: {
        h: '1. 服务内容',
        p: 'RouteToAbroad 在印度与东亚之间提供留学申请服务（录取、奖学金申请、签证准备与落地支持）、旅行设计（中国和日本的私人、团体及商务出行）和贸易服务（采购、质量控制、合规与物流）。',
      },
      noGuarantee: {
        h: '2. 我们不保证什么',
        items: [
          { strong: '录取。', text: ' 录取由大学决定。我们准备能给你最大真实机会的材料；我们无法购买结果。' },
          { strong: '奖学金。', text: ' 资助由奖学金委员会决定。我们不出售“保证全奖”，任何正规咨询机构都不能。' },
          { strong: '签证。', text: ' 签证由使领馆决定。我们确保你的材料完整无误；因虚假陈述或政策变化导致的拒签，任何人都无法控制。' },
          { strong: '执业认证。', text: ' 认证机构（NMC/FMGE-NExT、PMDC、ECFMG 等）自行制定规则，且规则会变化。在作出决定前，请核对你所在国家的现行要求。' },
        ],
      },
      obligations: {
        h: '3. 你的义务',
        pre: '你同意提供真实、完整的文件。',
        strong: '伪造或篡改的文件会立即终止申请',
        post: '，也会终止我们的合作，且已完成工作不予退款——因为它同样会危及周围的每一份诚实档案。',
      },
      fees: {
        h: '4. 费用与付款',
        p: '留学服务：开工前按服务逐项报价。贸易服务：按实际发货金额收取成功佣金，验厂/验货费用事先报价并需预付。旅游：定金与尾款按你的预订确认函执行。大学学费和第三方费用（使领馆、考试机构、保险公司）始终付给相关机构——绝不付入个人账户。',
      },
      cancellations: {
        h: '5. 取消政策',
        p: '旅游预订：出发前 30 天可全额退款；30 天内，凭票据退还供应商处可追回的全部款项。留学与贸易服务：可在任一时点取消；已完成工作阶段的费用仍需支付。',
      },
      tools: {
        h: '6. 工具输出',
        p: '本站的计算器、适配检查和清单是基于我们录取记录的估算与引导工具。它们不构成要约、结论或专业建议。你的录取信和官方收费表才是真实数字。',
      },
      liability: {
        h: '7. 责任限制',
        p: '我们对任何索赔的责任以你为引发该索赔的服务所支付的费用为限。我们不对间接损失负责（利润损失、第三方延误导致的错过入学，及类似情形）。',
      },
      law: {
        h: '8. 适用法律',
        p: '本条款受印度法律管辖，司法管辖地为新德里。',
      },
      contact: {
        h: '9. 联系我们',
      },
    },
  },

  fr: {
    meta: {
      title: 'Conditions de service',
      description:
        'Les avertissements honnêtes derrière les services de RouteToAbroad : ce que nous garantissons (processus, effort, honnêteté) et ce que nous ne pouvons pas (admissions, bourses, visas, reconnaissance).',
    },
    hero: {
      eyebrow: 'Légal',
      title: 'Conditions de service',
      lede: 'Les avertissements honnêtes qui devraient figurer sur le site de chaque cabinet de conseil — sur le nôtre, ils y sont vraiment.',
    },
    updated: 'Dernière mise à jour : novembre 2025',
    sections: {
      services: {
        h: '1. Services',
        p: 'RouteToAbroad propose, entre l’Inde et l’Asie de l’Est : le placement d’étudiants (admissions, candidatures aux bourses, préparation des visas et accompagnement à l’arrivée), la conception de voyages (privés, en groupe et d’affaires en Chine et au Japon) et des services de commerce (sourcing, contrôle qualité, conformité et logistique).',
      },
      noGuarantee: {
        h: '2. Ce que nous ne garantissons pas',
        items: [
          { strong: 'Admission.', text: ' Les universités décident des admissions. Nous préparons des dossiers qui vous donnent la meilleure chance honnête ; nous ne pouvons pas acheter des résultats.' },
          { strong: 'Bourses.', text: ' Les comités de bourses décident du financement. Nous ne vendons pas de bourses complètes garanties, et aucun cabinet sérieux ne le peut.' },
          { strong: 'Visas.', text: ' Les ambassades décident des visas. Nous veillons à ce que votre dossier soit complet et correct ; un refus pour fausse déclaration ou changement de policy échappe à tout le monde.' },
          { strong: 'Reconnaissance.', text: ' Les organismes d’agrément (NMC/FMGE-NExT, PMDC, ECFMG et autres) fixent leurs propres règles, qui évoluent. Vérifiez les exigences actuelles de votre pays avant de vous engager.' },
        ],
      },
      obligations: {
        h: '3. Vos obligations',
        pre: 'Vous acceptez de fournir des documents vrais et complets. ',
        strong: 'Un document faux ou altéré met fin à la candidature immédiatement',
        post: ' — et à notre collaboration — sans remboursement du travail déjà effectué, car il met aussi en danger chaque dossier honnête autour de lui.',
      },
      fees: {
        h: '4. Honoraires et paiements',
        p: 'Missions études : devis par service avant le début du travail. Missions commerce : commission au succès indexée sur la valeur expédiée, avec coûts d’audit/inspection cotés et payables d’avance. Tourisme : acompte et solde selon votre confirmation de réservation. Les frais de scolarité et les frais tiers (ambassades, organismes d’examens, assureurs) se paient toujours à l’institution concernée — jamais sur des comptes personnels.',
      },
      cancellations: {
        h: '5. Annulations',
        p: 'Réservations touristiques : remboursement intégral jusqu’à 30 jours avant le départ ; dans les 30 jours, tous les montants récupérables auprès des fournisseurs sont remboursés sur justificatifs. Missions études et commerce : annulables à tout moment ; les honoraires des étapes de travail déjà réalisées restent dus.',
      },
      tools: {
        h: '6. Résultats des outils',
        p: 'Les calculateurs, tests de compatibilité et listes de ce site sont des aides à l’estimation et à l’orientation construites sur nos statistiques de placement. Ce ne sont ni des offres, ni des verdicts, ni des conseils professionnels. Votre lettre d’admission et les barèmes officiels constituent les vrais chiffres.',
      },
      liability: {
        h: '7. Responsabilité',
        p: 'Notre responsabilité pour toute réclamation est limitée aux honoraires que vous nous avez versés pour le service à l’origine de la réclamation. Nous ne répondons pas des pertes indirectes (profits perdus, rentrées manquées causées par des retards de tiers, et similaires).',
      },
      law: {
        h: '8. Droit applicable',
        p: 'Les présentes conditions sont régies par le droit indien, avec compétence pour les tribunaux de New Delhi.',
      },
      contact: {
        h: '9. Contact',
      },
    },
  },

  ar: {
    meta: {
      title: 'شروط الخدمة',
      description: 'الإخلاءات الصادقة خلف خدمات RouteToAbroad: ما نضمنه (العملية والجهد والصدق) وما لا نستطيع ضمانه (القبول والمنح والتأشيرات والاعتراف).',
    },
    hero: {
      eyebrow: 'قانوني',
      title: 'شروط الخدمة',
      lede: 'الإخلاءات الصادقة التي ينبغي أن تظهر على موقع كل شركة استشارات — في موقعنا هي موجودة فعلًا.',
    },
    updated: 'آخر تحديث: نوفمبر 2025',
    sections: {
      services: {
        h: '1. الخدمات',
        p: 'تقدم RouteToAbroad بين الهند وشرق آسيا: خدمات القبول الجامعي (القبول وطلبات المنح والتأشيرات والدعم عند الوصول)، وتصميم الرحلات (سفر خاص وجماعي وأعمال عبر الصين واليابان)، وخدمات التجارة (التوريد ومراقبة الجودة والامتثال واللوجستيات).',
      },
      noGuarantee: {
        h: '2. ما لا نضمنه',
        items: [
          { strong: 'القبول.', text: ' الجامعات تقرر القبول. نعدّ ملفات تمنحك أفضل فرصة صادقة؛ لا يمكننا شراء النتائج.' },
          { strong: 'المنح.', text: ' لجان المنح تقرر التمويل. لا نبيع منحًا كاملة مضمونة، ولا يمكن لأي شركة استشارات نظامية ذلك.' },
          { strong: 'التأشيرات.', text: ' السفارات تقرر التأشيرات. نضمن أن ملفك كامل وصحيح؛ أما الرفض بسبب تحريف أو تغيير في السياس فخارج سيطرة الجميع.' },
          { strong: 'الاعتراف.', text: ' الجهات الترخيصية (NMC/FMGE-NExT وPMDC وECFMG وغيرها) تضع قواعدها الخاصة، وهي تتغير. تحقق من متطلبات بلدك الحالية قبل الالتزام.' },
        ],
      },
      obligations: {
        h: '3. التزاماتك',
        pre: 'توافق على تقديم مستندات صادقة وكاملة. ',
        strong: 'المستند المزوّر أو المعدَّل يُنهي الطلب فورًا',
        post: ' — وينهي تعاوننا — دون استرداد ما أُنجز من عمل، لأنه يعرّض أيضًا كل ملف صادق حوله للخطر.',
      },
      fees: {
        h: '4. الأتعاب والمدفوعات',
        p: 'ملفات التعليم: تُسعَّر لكل خدمة قبل بدء العمل. ملفات التجارة: عمولة نجاح مرتبطة بقيمة المشحون، مع تكاليف تدقيق/فحص تُسعَّر وتُدفع مقدمًا. السياحة: عربون ورصيد وفق تأكيد الحجز. الرسوم الدراسية ورسوم الأطراف الثالثة (السفارات وجهات الامتحانات والتأمين) تُدفع دائمًا للجهة المعنية — أبدًا لا إلى حسابات شخصية.',
      },
      cancellations: {
        h: '5. الإلغاء',
        p: 'حجوزات السياحة: استرداد كامل حتى 30 يومًا قبل المغادرة؛ خلال 30 يومًا، تُسترد جميع المبالغ القابلة للاسترداد من الموردين مع الإيصالات. ملفات التعليم والتجارة: قابلة للإلغاء في أي وقت؛ تبقى أتعاب مراحل العمل المنجزة مستحقة.',
      },
      tools: {
        h: '6. مخرجات الأدوات',
        p: 'الحاسبات وفحوصات الملاءمة والقوائم على هذا الموقع أدوات تقدير وتوجيه مبنية على سجلات قبولاتنا. ليست عروضًا ولا أحكامًا ولا نصيحة مهنية. خطاب القبول والجداول الرسمية للرسوم هما الأرقام الحقيقية.',
      },
      liability: {
        h: '7. المسؤولية',
        p: 'مسؤوليتنا عن أي مطالبة محدودة بالأتعاب التي دفعتها لنا مقابل الخدمة التي نشأت عنها المطالبة. لسنا مسؤولين عن الخسائر غير المباشرة (الأرباح الفائتة، الدفعات الفائتة بسبب تأخيرات أطراف ثالثة وما شابه).',
      },
      law: {
        h: '8. القانون الحاكم',
        p: 'تخضع هذه الشروط لقوانين الهند، مع الاختصاص القضائي في نيودلهي.',
      },
      contact: {
        h: '9. تواصل',
      },
    },
  },

  es: {
    meta: {
      title: 'Términos de servicio',
      description:
        'Las advertencias honestas detrás de los servicios de RouteToAbroad: lo que garantizamos (proceso, esfuerzo, honestidad) y lo que no podemos (admisiones, becas, visados, reconocimiento).',
    },
    hero: {
      eyebrow: 'Legal',
      title: 'Términos de servicio',
      lede: 'Las advertencias honestas que deberían estar en la web de cada consultoría; en la nuestra, de verdad lo están.',
    },
    updated: 'Última actualización: noviembre de 2025',
    sections: {
      services: {
        h: '1. Servicios',
        p: 'RouteToAbroad ofrece, entre India y Asia Oriental: colocación educativa (admisiones, solicitudes de becas, preparación de visados y apoyo a la llegada), diseño de viajes (privados, en grupo y de negocios por China y Japón) y servicios de comercio (sourcing, control de calidad, cumplimiento y logística).',
      },
      noGuarantee: {
        h: '2. Lo que no garantizamos',
        items: [
          { strong: 'Admisión.', text: ' Las universidades deciden las admisiones. Preparamos expedientes que le dan la mejor oportunidad honesta; no podemos comprar resultados.' },
          { strong: 'Becas.', text: ' Los comités de becas deciden la financiación. No vendemos becas completas garantizadas, y ninguna consultoría legítima puede hacerlo.' },
          { strong: 'Visados.', text: ' Las embajadas deciden los visados. Nos aseguramos de que su expediente esté completo y correcto; un rechazo por tergiversación o cambio de normativa escapa al control de cualquiera.' },
          { strong: 'Reconocimiento.', text: ' Los organismos de licencias (NMC/FMGE-NExT, PMDC, ECFMG y otros) fijan sus propias reglas, que cambian. Verifique los requisitos actuales de su país antes de comprometerse.' },
        ],
      },
      obligations: {
        h: '3. Sus obligaciones',
        pre: 'Usted acepta aportar documentos veraces y completos. ',
        strong: 'Un documento falso o alterado pone fin a la solicitud de inmediato',
        post: ' — y a nuestra colaboración — sin reembolso del trabajo ya realizado, porque también pone en riesgo cada expediente honesto a su alrededor.',
      },
      fees: {
        h: '4. Honorarios y pagos',
        p: 'Encargos educativos: presupuestados por servicio antes de comenzar. Encargos comerciales: comisión de éxito ligada al valor enviado, con costos de auditoría/inspección presupuestados y pagaderos por adelantado. Turismo: depósito y saldo según su confirmación de reserva. La matrícula universitaria y las tarifas de terceros (embajadas, organismos de exámenes, aseguradoras) se pagan siempre a la institución correspondiente — nunca a cuentas personales.',
      },
      cancellations: {
        h: '5. Cancelaciones',
        p: 'Reservas de turismo: reembolso total hasta 30 días antes de la salida; dentro de los 30 días, se reembolsan con recibos todos los importes recuperables de proveedores. Encargos educativos y comerciales: cancelables en cualquier momento; los honorarios de las etapas de trabajo completadas siguen debiéndose.',
      },
      tools: {
        h: '6. Resultados de las herramientas',
        p: 'Las calculadoras, pruebas de compatibilidad y listas de este sitio son ayudas de estimación y orientación basadas en nuestros registros de admisiones. No son ofertas, veredictos ni asesoramiento profesional. Su carta de admisión y las tarifas oficiales son los números reales.',
      },
      liability: {
        h: '7. Responsabilidad',
        p: 'Nuestra responsabilidad ante cualquier reclamación se limita a los honorarios que usted nos pagó por el servicio que origina la reclamación. No respondemos de pérdidas indirectas (beneficios perdidos, ingresos incumplidos por retrasos de terceros, y similares).',
      },
      law: {
        h: '8. Ley aplicable',
        p: 'Estos términos se rigen por las leyes de India, con jurisdicción en Nueva Delhi.',
      },
      contact: {
        h: '9. Contacto',
      },
    },
  },
};
