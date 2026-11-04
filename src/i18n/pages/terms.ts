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
          { strong: 'Visas.', text: ' Les ambassades décident des visas. Nous veillons à ce que votre dossier soit complet et correct ; un refus pour fausse déclaration ou changement de politique échappe à tout le monde.' },
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
          { strong: 'التأشيرات.', text: ' السفارات تقرر التأشيرات. نضمن أن ملفك كامل وصحيح؛ أما الرفض بسبب تحريف أو تغيير في السياسة فخارج سيطرة الجميع.' },
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

  de: {
    meta: {
      title: 'Nutzungsbedingungen',
      description:
        'Die ehrlichen Haftungsausschlüsse hinter den Services von RouteToAbroad: Was wir garantieren (Prozess, Einsatz, Ehrlichkeit) und was wir nicht können (Zulassungen, Stipendien, Visa, Anerkennung).',
    },
    hero: {
      eyebrow: 'Rechtliches',
      title: 'Nutzungsbedingungen',
      lede: 'Die ehrlichen Haftungsausschlüsse, die auf der Website jeder Beratung stehen sollten — auf unserer stehen sie wirklich.',
    },
    updated: 'Zuletzt aktualisiert: November 2025',
    sections: {
      services: {
        h: '1. Leistungen',
        p: 'RouteToAbroad bietet zwischen Indien und Ostasien: Studienvermittlung (Zulassungen, Stipendienbewerbungen, Visavorbereitung und Ankunftssupport), Reisedesign (private, Gruppen- und Geschäftsreisen durch China und Japan) und Handelsdienstleistungen (Beschaffung, Qualitätskontrolle, Konformität und Logistik).',
      },
      noGuarantee: {
        h: '2. Was wir nicht garantieren',
        items: [
          { strong: 'Zulassung.', text: ' Über Zulassungen entscheiden die Universitäten. Wir bereiten Akten vor, die Ihnen die beste ehrliche Chance geben; Ergebnisse können wir nicht erkaufen.' },
          { strong: 'Stipendien.', text: ' Über die Förderung entscheiden Stipendienkommissionen. Wir verkaufen keine garantierten Vollstipendien — und keine seriöse Beratung kann es.' },
          { strong: 'Visa.', text: ' Über Visa entscheiden die Botschaften. Wir stellen sicher, dass Ihre Akte vollständig und korrekt ist; eine Ablehnung wegen Falschangaben oder Politikwechsel liegt außerhalb jeder Kontrolle.' },
          { strong: 'Anerkennung.', text: ' Zulassungsstellen (NMC/FMGE-NExT, PMDC, ECFMG u. a.) setzen eigene Regeln fest, die sich ändern. Prüfen Sie die aktuellen Anforderungen Ihres Landes, bevor Sie sich festlegen.' },
        ],
      },
      obligations: {
        h: '3. Ihre Pflichten',
        pre: 'Sie erklären sich bereit, wahrheitsgemäße und vollständige Unterlagen einzureichen. ',
        strong: 'Ein gefälschtes oder verändertes Dokument beendet die Bewerbung sofort',
        post: ' — und unsere Zusammenarbeit — ohne Erstattung bereits erbrachter Leistungen, denn es gefährdet auch jede ehrliche Akte in seiner Umgebung.',
      },
      fees: {
        h: '4. Honorare und Zahlungen',
        p: 'Bildungsaufträge: Angebot pro Leistung vor Arbeitsbeginn. Handelsaufträge: Erfolgsprovision an den versandten Warenwert gekoppelt, mit vorab zitierten und zahlbaren Audit-/Inspektionskosten. Tourismus: Anzahlung und Restbetrag gemäß Ihrer Buchungsbestätigung. Studiengebühren und Drittanbieter-Gebühren (Botschaften, Prüfungsstellen, Versicherer) zahlen Sie stets an die jeweilige Institution — nie auf private Konten.',
      },
      cancellations: {
        h: '5. Stornierungen',
        p: 'Tourismusbuchungen: vollständige Erstattung bis 30 Tage vor Abreise; innerhalb der 30 Tage werden alle bei Lieferanten wiedereintreibbaren Beträge mit Belegen erstattet. Bildungs- und Handelsaufträge: jederzeit kündbar; Honorare für abgeschlossene Arbeitsphasen bleiben geschuldet.',
      },
      tools: {
        h: '6. Tool-Ergebnisse',
        p: 'Rechner, Eignungschecks und Checklisten auf dieser Website sind Schätz- und Orientierungshilfen auf Grundlage unserer Vermittlungsdaten. Sie sind keine Angebote, Urteile oder professionelle Beratung. Ihr Zulassungsbrief und die offiziellen Gebührenverzeichnisse sind die echten Zahlen.',
      },
      liability: {
        h: '7. Haftung',
        p: 'Unsere Haftung für jegliche Ansprüche ist auf die Honorare begrenzt, die Sie uns für die anspruchsauslösende Leistung gezahlt haben. Wir haften nicht für indirekte Verluste (entgangene Gewinne, durch Verzögerungen Dritter verpasste Studienbeginne und Ähnliches).',
      },
      law: {
        h: '8. Anwendbares Recht',
        p: 'Diese Bedingungen unterliegen indischem Recht; Gerichtsstand ist Neu-Delhi.',
      },
      contact: {
        h: '9. Kontakt',
      },
    },
  },

  ja: {
    meta: {
      title: '利用規約',
      description: 'RouteToAbroad のサービスの背後にある率直な免責事項：保証できること（プロセス、努力、誠実さ）と保証できないこと（入学、奨学金、ビザ、認可）。',
    },
    hero: {
      eyebrow: '法的事項',
      title: '利用規約',
      lede: 'どのコンサルティング会社のサイトにも載っているべき、率直な免責事項 — 当社のサイトには、実際に載っています。',
    },
    updated: '最終更新：2025 年 11 月',
    sections: {
      services: {
        h: '1. サービス',
        p: 'RouteToAbroad は、インドと東アジアの間で次のサービスを提供します：進学サポート（入学手配、奨学金出願、ビザ準備、到着後サポート）、旅行企画（中国・日本への個人・グループ・ビジネス旅行）、貿易サービス（調達、品質管理、コンプライアンス、ロジスティクス）。',
      },
      noGuarantee: {
        h: '2. 保証できないこと',
        items: [
          { strong: '入学。', text: ' 入学を決めるのは大学です。誠実な最善の可能性を引き出す書類づくりを行いますが、結果を買うことはできません。' },
          { strong: '奨学金。', text: ' 支給を決めるのは奨学金委員会です。当社は「全額保証の奨学金」を販売しません。まともなコンサルティング会社はどこもできません。' },
          { strong: 'ビザ。', text: ' ビザを決めるのは大使館です。書類が完全で正確であることは担保しますが、虚偽申告や政策変更による不許可は誰にも制御できません。' },
          { strong: '資格認定。', text: ' ライセンス機関（NMC/FMGE-NExT、PMDC、ECFMG など）はそれぞれの規則を定めており、変更されます。進路決定の前に、お住まいの国の最新要件をご確認ください。' },
        ],
      },
      obligations: {
        h: '3. お客様の義務',
        pre: '真実かつ完全な書類をご提供いただくことに同意いただきます。',
        strong: '偽造または改ざんされた書類は、出願を直ちに終わらせます',
        post: ' — そして当社との契約も — すでに完了した作業の返金はありません。偽の書類は、その周囲のすべての誠実な書類をも危険にさらすためです。',
      },
      fees: {
        h: '4. 費用と支払い',
        p: '進学サービス：作業開始前にサービスごとに見積もり。貿易サービス：出荷額に連動する成功報酬で、監査・検品費用は事前に見積もり、前払い。旅行：予約確認書に従い手付金と残金を。大学の学費と第三者の手数料（大使館、試験機関、保険会社）は必ず当該機関にお支払いいただき — 個人口座への送金は一切ありません。',
      },
      cancellations: {
        h: '5. キャンセル',
        p: '旅行予約：出発 30 日前までは全額返金。30 日以内の場合も、サプライヤーから回収可能な額を領収書とともに全額返金します。進学・貿易サービス：いつでもキャンセル可能。完了済み作業段階の費用はお支払いいただきます。',
      },
      tools: {
        h: '6. ツールの出力',
        p: '本サイトの計算ツール、マッチング診断、チェックリストは、当社の進学実績に基づく見積もり・案内のための補助具です。オファーでも判定でも専門助言でもありません。オファーレターと公式の学費表が、本当の数字です。',
      },
      liability: {
        h: '7. 責任',
        p: 'いかなる請求に対する当社の責任も、その請求の原因となったサービスについてお支払いいただいた費用の範囲内に限られます。間接損失（逸失利益、第三者の遅延による入学時期の逸失など）については責任を負いません。',
      },
      law: {
        h: '8. 準拠法',
        p: '本規約はインド法に準拠し、管轄はニューデリーとします。',
      },
      contact: {
        h: '9. お問い合わせ',
      },
    },
  },

  pt: {
    meta: {
      title: 'Termos de Serviço',
      description:
        'Os avisos honestos por trás dos serviços da RouteToAbroad: o que garantimos (processo, esforço, honestidade) e o que não podemos (admissões, bolsas, vistos, reconhecimento).',
    },
    hero: {
      eyebrow: 'Jurídico',
      title: 'Termos de Serviço',
      lede: 'Os avisos honestos que deveriam estar no site de cada consultoria — no nosso, de fato estão.',
    },
    updated: 'Última atualização: novembro de 2025',
    sections: {
      services: {
        h: '1. Serviços',
        p: 'A RouteToAbroad oferece, entre Índia e Ásia Oriental: colocação educacional (admissões, candidaturas a bolsas, preparação de vistos e apoio na chegada), desenho de viagens (viagens privadas, em grupo e a negócios pela China e pelo Japão) e serviços de comércio (suprimentos, controle de qualidade, conformidade e logística).',
      },
      noGuarantee: {
        h: '2. O que não garantimos',
        items: [
          { strong: 'Admissão.', text: ' As universidades decidem as admissões. Preparamos dossiês que dão a você a melhor chance honesta; não podemos comprar resultados.' },
          { strong: 'Bolsas.', text: ' Os comitês de bolsas decidem o financiamento. Não vendemos bolsas integrais garantidas — e nenhuma consultoria legítima pode.' },
          { strong: 'Vistos.', text: ' As embaixadas decidem os vistos. Garantimos que o seu dossiê esteja completo e correto; uma recusa por deturpação ou mudança de política está fora do controle de qualquer pessoa.' },
          { strong: 'Reconhecimento.', text: ' Os órgãos licenciadores (NMC/FMGE-NExT, PMDC, ECFMG e outros) definem as suas próprias regras, que mudam. Verifique os requisitos atuais do seu país antes de se comprometer.' },
        ],
      },
      obligations: {
        h: '3. As suas obrigações',
        pre: 'Você concorda em fornecer documentos verdadeiros e completos. ',
        strong: 'Um documento falso ou alterado encerra a candidatura imediatamente',
        post: ' — e o nosso contrato — sem reembolso do trabalho já realizado, porque ele também coloca em risco cada dossiê honesto ao redor.',
      },
      fees: {
        h: '4. Honorários e pagamentos',
        p: 'Contratos educacionais: orçados por serviço antes do início do trabalho. Contratos comerciais: comissão de sucesso vinculada ao valor enviado, com custos de auditoria/inspeção cotados e pagáveis antecipadamente. Turismo: adiantamento e saldo conforme a sua confirmação de reserva. Mensalidades universitárias e tarifas de terceiros (embaixadas, órgãos de exames, seguradoras) são sempre pagas à instituição correspondente — nunca a contas pessoais.',
      },
      cancellations: {
        h: '5. Cancelamentos',
        p: 'Reservas de turismo: reembolso total até 30 dias antes da partida; dentro dos 30 dias, todos os valores recuperáveis dos fornecedores são reembolsados com recibos. Contratos educacionais e comerciais: canceláveis a qualquer momento; os honorários das etapas de trabalho concluídas permanecem devidos.',
      },
      tools: {
        h: '6. Resultados das ferramentas',
        p: 'As calculadoras, avaliações de perfil e checklists deste site são auxílios de estimativa e orientação construídos sobre os nossos registros de admissão. Não são ofertas, vereditos nem aconselhamento profissional. A sua carta de oferta e as tabelas oficiais de tarifas são os números reais.',
      },
      liability: {
        h: '7. Responsabilidade',
        p: 'A nossa responsabilidade por qualquer reclamação é limitada aos honorários que você nos pagou pelo serviço que deu origem à reclamação. Não respondemos por perdas indiretas (lucros perdidos, ingressos perdidos por atrasos de terceiros e similares).',
      },
      law: {
        h: '8. Lei aplicável',
        p: 'Estes termos são regidos pelas leis da Índia, com jurisdição em Nova Délhi.',
      },
      contact: {
        h: '9. Contato',
      },
    },
  },

  hi: {
    meta: {
      title: 'सेवा की शर्तें',
      description:
        'RouteToAbroad की सेवाओं के पीछे के ईमानदार अस्वीकरण: हम क्या गारंटी करते हैं (प्रक्रिया, प्रयास, ईमानदारी) और क्या नहीं कर सकते (प्रवेश, छात्रवृत्तियाँ, वीज़ा, मान्यता)।',
    },
    hero: {
      eyebrow: 'कानूनी',
      title: 'सेवा की शर्तें',
      lede: 'वे ईमानदार अस्वीकरण जो हर कंसल्टेंसी की साइट पर होने चाहिए थे — हमारी साइट पर वे वाक़ई हैं।',
    },
    updated: 'अंतिम अपडेट: नवंबर 2025',
    sections: {
      services: {
        h: '1. सेवाएँ',
        p: 'RouteToAbroad भारत और पूर्वी एशिया के बीच प्रदान करता है: शिक्षा प्लेसमेंट (प्रवेश, छात्रवृत्ति आवेदन, वीज़ा तैयारी और आगमन सहायता), यात्रा डिज़ाइन (चीन और जापान में निजी, समूह और व्यावसायिक यात्राएँ), और व्यापार सेवाएँ (सोर्सिंग, गुणवत्ता नियंत्रण, अनुपालन और लॉजिस्टिक्स)।',
      },
      noGuarantee: {
        h: '2. हम क्या गारंटी नहीं देते',
        items: [
          { strong: 'प्रवेश।', text: ' प्रवेश का निर्णय विश्वविद्यालय करते हैं। हम ऐसी फ़ाइलें तैयार करते हैं जो आपको सबसे ईमानदार मौक़ा दें; परिणाम ख़रीद नहीं सकते।' },
          { strong: 'छात्रवृत्तियाँ।', text: ' वित्तपोषण का निर्णय छात्रवृत्ति समितियाँ करती हैं। हम "गारंटीकृत पूर्ण छात्रवृत्ति" नहीं बेचते — और कोई भी प्रामाणिक कंसल्टेंसी नहीं बेच सकती।' },
          { strong: 'वीज़ा।', text: ' वीज़ा का निर्णय दूतावास करते हैं। हम यह सुनिश्चित करते हैं कि आपकी फ़ाइल पूर्ण और सही हो; ग़लत बयान या नीति परिवर्तन से हुई अस्वीकृति किसी के वश में नहीं।' },
          { strong: 'मान्यता।', text: ' लाइसेंसी निकाय (NMC/FMGE-NExT, PMDC, ECFMG आदि) अपने नियम स्वयं बनाते हैं, जो बदलते रहते हैं। प्रतिबद्ध होने से पहले अपने देश की वर्तमान आवश्यकताएँ जाँचें।' },
        ],
      },
      obligations: {
        h: '3. आपके दायित्व',
        pre: 'आप सही और पूर्ण दस्तावेज़ देने के लिए सहमत होते हैं।',
        strong: 'फ़र्ज़ी या बदला हुआ दस्तावेज़ आवेदन को तुरंत समाप्त कर देता है',
        post: ' — और हमारा अनुबंध भी — पहले हुए काम का रिफ़ंड नहीं मिलता, क्योंकि वह उसके आसपास की हर ईमानदार फ़ाइल को भी ख़तरे में डालता है।',
      },
      fees: {
        h: '4. शुल्क और भुगतान',
        p: 'शिक्षा अनुबंध: काम शुरू होने से पहले प्रति सेवा बोली। व्यापार अनुबंध: भेजे गए माल के मूल्य से जुड़ी सफलता फ़ीस, ऑडिट/निरीक्षण लागत पहले बताई और अग्रिम देय। पर्यटन: आपकी बुकिंग पुष्टि के अनुसार अग्रिम और शेष। विश्वविद्यालय ट्यूशन और तीसरे पक्ष के शुल्क (दूतावास, परीक्षा निकाय, बीमाकर्ता) हमेशा संबंधित संस्था को — कभी भी व्यक्तिगत खातों को नहीं।',
      },
      cancellations: {
        h: '5. रद्दीकरण',
        p: 'पर्यटन बुकिंग: प्रस्थान से 30 दिन पहले तक पूरा रिफ़ंड; 30 दिनों के भीतर, आपूर्तिकर्ताओं से वसूल योग्य राशि रसीदों सहित लौटाई जाती है। शिक्षा और व्यापार अनुबंध: कभी भी रद्द किए जा सकते हैं; पूर्ण कार्य-चरणों का शुल्क देय रहेगा।',
      },
      tools: {
        h: '6. टूल आउटपुट',
        p: 'इस साइट के कैलकुलेटर, फ़िट जाँच और चेकलिस्ट हमारे प्रवेश रिकॉर्ड पर बनी अनुमान और मार्गदर्शन सहायक हैं। ये ऑफ़र, निर्णय या पेशेवर सलाह नहीं हैं। आपका ऑफ़र लेटर और आधिकारिक शुल्क-तालिकाएँ असली आँकड़े हैं।',
      },
      liability: {
        h: '7. दायित्व',
        p: 'किसी भी दावे के लिए हमारी देयता उस सेवा के शुल्क तक सीमित है जिससे वह दावा उठा। हम अप्रत्यक्ष हानियों के लिए उत्तरदायी नहीं हैं (छूटा मुनाफ़ा, तीसरे पक्ष की देरी से चूका प्रवेश सत्र आदि)।',
      },
      law: {
        h: '8. लागू क़ानून',
        p: 'ये शर्तें भारत के क़ानूनों के अधीन हैं, क्षेत्राधिकार नई दिल्ली में।',
      },
      contact: {
        h: '9. संपर्क',
      },
    },
  },
};
