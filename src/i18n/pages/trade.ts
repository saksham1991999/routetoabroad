/**
 * Trade pillar page copy — every user-visible string on the shared
 * TradePage component, keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations that follow the terminology
 * already established in src/i18n/ui.ts and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * TradeStrings interface, so a key added to `en` breaks the build until
 * all four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface TradeStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb label for this pillar (BaseLayout + PageHero crumbs). */
  crumb: string;
  /** JSON-LD Service copy (surfaces in search results). */
  schema: {
    serviceName: string;
    serviceDescription: string;
    serviceType: string;
  };
  hero: {
    eyebrow: string;
    /** Instrument marker (kept identical across locales). */
    index: string;
    title: string;
    lede: string;
    facts: { label: string; value: string }[];
    primaryCta: string;
    secondaryCta: string;
    /** Anchor-jump labels, in section order (disciplines → faq). */
    jumps: [string, string, string, string, string];
  };
  /** Full-width image band under the hero. */
  heroBand: { alt: string; caption: string };
  disciplines: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    items: { name: string; text: string; stat: string }[];
  };
  process: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    steps: { name: string; text: string }[];
  };
  industries: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    items: string[];
  };
  /** Instrument strip under the industry chips (num values are facts). */
  payStrip: { num: string; text: string }[];
  enquire: {
    eyebrow: string;
    title: string;
    lede: string;
    why: { lead: string; text: string }[];
  };
  faq: { eyebrow: string; index: string; title: string; more: string };
}

export const TRADE: Record<Locale, TradeStrings> = {
  en: {
    meta: {
      title: 'India–China Trade Services — Sourcing, QC & Logistics',
      description:
        'Product sourcing, factory audits, AQL quality control, customs clearance and sea/air freight between China and India — run from Guangzhou on a success-fee model tied to shipped value.',
    },
    crumb: 'Trade',
    schema: {
      serviceName: 'India–China trade services',
      serviceDescription:
        'Sourcing, quality control, customs compliance and freight management for India–China trade, on a success-fee model.',
      serviceType: 'Trade services',
    },
    hero: {
      eyebrow: 'Trade',
      index: 'TRD / 03',
      title: 'Your supply chain doesn\'t need more complexity.',
      lede: 'It needs one accountable team on the factory floor. Sourcing, quality gates, customs and freight between China and India — run from our Guangzhou office, on a success fee tied to shipped value.',
      facts: [
        { label: 'Base', value: 'Guangzhou · Delhi' },
        { label: 'Network', value: '200+ vetted' },
        { label: 'Quality', value: 'AQL inspections' },
        { label: 'Model', value: 'Success fee' },
      ],
      primaryCta: 'Get a landed cost',
      secondaryCta: 'See disciplines',
      jumps: ['Disciplines', 'Process', 'Industries', 'Enquire', 'FAQ'],
    },
    heroBand: {
      alt: 'Container cranes working at the Guangzhou port at dawn',
      caption: 'Port of Guangzhou · our trade desk is 40 minutes away',
    },
    disciplines: {
      eyebrow: 'Supply chain orchestration',
      index: '01 / 04',
      title: 'Five core disciplines',
      lede: 'Each one exists because we got tired of watching importers pay for its absence.',
      items: [
        {
          name: 'Product sourcing',
          text: '5,000+ audited supplier contacts across the Pearl River Delta. We shortlist, verify and negotiate — with a 24-hour response promise during working weeks.',
          stat: '200+ factories audited',
        },
        {
          name: 'Quality control',
          text: 'AQL-standard inspections at ~20% and ~80% of production, plus pre-shipment checks and container loading supervision. Photo-video reports at every gate.',
          stat: 'AQL 20% / 80% gates',
        },
        {
          name: 'Customs & compliance',
          text: 'HS classification, BIS/WPC registrations, COO documents and complete customs files prepared before goods reach port — clearance never waits on paperwork.',
          stat: 'BIS · WPC · HS codes',
        },
        {
          name: 'Smart logistics',
          text: 'Sea 18–25 days port-to-port, air 3–7 days door-to-door, LCL for trials, FCL at scale. Port congestion monitoring with re-routing when it pays.',
          stat: '100% insured shipments',
        },
        {
          name: 'Global trade consulting',
          text: 'Market entry, payment structuring (TT/LC/escrow), supplier contracts with penalty clauses, and dispute representation on the ground.',
          stat: 'On-ground representation',
        },
      ],
    },
    process: {
      eyebrow: 'How we work',
      index: '02 / 04',
      title: 'From product idea to Indian warehouse',
      lede: 'Money moves in steps — and each step ends with evidence, not assurances.',
      steps: [
        {
          name: 'Enquiry & landed-cost picture',
          text: 'Tell us the product and target price. We come back with a realistic landed cost to Indian warehouse — duty, freight and inspection included.',
        },
        {
          name: 'Factory audit',
          text: 'One-day on-ground audit of the candidate factories: licenses, capacity, QC maturity, photo-video evidence. No audit, no commitment.',
        },
        {
          name: 'Sampling & golden sample',
          text: 'Specs locked in English + Chinese, golden samples sealed in triplicate. Every later dispute resolves against this.',
        },
        {
          name: 'Production with QC gates',
          text: '30% deposit releases production; AQL inspections at 20%/80% decide whether the remaining money moves.',
        },
        {
          name: 'Ship, clear, deliver',
          text: '70% against B/L copy. Customs pre-filed. Goods land at Mundra/JNPT or your door — insured end to end.',
        },
      ],
    },
    industries: {
      eyebrow: 'Categories',
      index: '03 / 04',
      title: 'Industries we run',
      lede: 'Deep benches in these categories — and honest referrals where we don\'t.',
      items: [
        'Electronics & components', 'Industrial machinery', 'Textiles & apparel', 'Auto parts',
        'Consumer goods', 'Chemicals', 'Home décor', 'Medical equipment', 'Packaging materials',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'deposit + balance against B/L — the structure we insist on' },
      { num: '24 hr', text: 'supplier response target during working weeks' },
      { num: '18–25 d', text: 'sea transit to Indian west-coast ports' },
      { num: '3–7 d', text: 'air freight door-to-door, 5–8× sea cost' },
    ],
    enquire: {
      eyebrow: 'Start here',
      title: 'Bring us a product, get a landed cost',
      lede: 'Tell us what you\'re sourcing and your target price. We reply with a realistic landed-cost picture to an Indian warehouse — audit costs quoted upfront, success fee only when goods ship.',
      why: [
        { lead: 'No success, no success fee.', text: 'If the deal dies, you owe only the quoted audit/inspection costs.' },
        { lead: 'Evidence at every gate.', text: 'Reports, photos, videos — before money moves.' },
        { lead: 'One team, both countries.', text: 'Delhi relationships, Guangzhou floor presence.' },
      ],
    },
    faq: { eyebrow: 'Trade FAQ', index: '04 / 04', title: 'Trade Intel, answered straight', more: 'All trade FAQs' },
  },

  zh: {
    meta: {
      title: '印度—中国贸易服务 — 采购、质检与物流',
      description:
        '中印之间的产品采购、验厂、AQL 质检、清关与海运/空运——由广州团队运营，按与发货金额挂钩的成功佣金模式收费。',
    },
    crumb: '贸易',
    schema: {
      serviceName: '印度—中国贸易服务',
      serviceDescription: '面向中印贸易的采购、质量控制、清关合规与货运管理，按成功佣金模式运作。',
      serviceType: '贸易服务',
    },
    hero: {
      eyebrow: '贸易',
      index: 'TRD / 03',
      title: '你的供应链不需要更多复杂。',
      lede: '它需要一支驻守工厂车间的可问责团队。中印之间的采购、质量关卡、清关与货运——由我们的广州办公室运营，按与发货金额挂钩的成功佣金收费。',
      facts: [
        { label: '据点', value: '广州 · 德里' },
        { label: '网络', value: '200+ 家严选' },
        { label: '质量', value: 'AQL 验货' },
        { label: '模式', value: '成功佣金' },
      ],
      primaryCta: '获取到岸成本',
      secondaryCta: '查看业务板块',
      jumps: ['业务板块', '流程', '行业', '咨询', 'FAQ'],
    },
    heroBand: {
      alt: '黎明时分的广州港口，集装箱吊机正在作业',
      caption: '广州港 · 我们的贸易团队距此 40 分钟车程',
    },
    disciplines: {
      eyebrow: '供应链统筹',
      index: '01 / 04',
      title: '五大核心业务',
      lede: '每一项的诞生，都是因为我们看腻了进口商为它的缺位买单。',
      items: [
        {
          name: '产品采购',
          text: '珠三角 5,000+ 家经审核的供应商资源。我们筛选、核实并谈判——工作周内承诺 24 小时响应。',
          stat: '已审核 200+ 家工厂',
        },
        {
          name: '质量控制',
          text: '按 AQL 标准在生产约 20% 和约 80% 时验货，另有出货前检查与装柜监督。每个关卡都附照片视频报告。',
          stat: 'AQL 20% / 80% 关卡',
        },
        {
          name: '清关与合规',
          text: 'HS 归类、BIS/WPC 注册、COO 单证与完整海关档案在货物到港前备齐——清关永远不等文件。',
          stat: 'BIS · WPC · HS 编码',
        },
        {
          name: '智慧物流',
          text: '海运 18–25 天港到港，空运 3–7 天门到门，试单走 LCL 拼箱，量产走 FCL 整柜。监测港口拥堵，划算时就改道。',
          stat: '100% 投保出运',
        },
        {
          name: '全球贸易咨询',
          text: '市场进入、付款结构设计（TT/LC/escrow）、带罚则条款的供应商合同，以及本地纠纷代理。',
          stat: '本地驻场代表',
        },
      ],
    },
    process: {
      eyebrow: '我们怎么做事',
      index: '02 / 04',
      title: '从一个产品想法到印度的仓库',
      lede: '钱是分步走的——而且每一步都以证据收尾，不是口头保证。',
      steps: [
        {
          name: '询盘与到岸成本测算',
          text: '告诉我们产品和目标价。我们会回你一个到印度仓库的真实到岸成本——关税、运费和验货费都算在内。',
        },
        {
          name: '验厂',
          text: '用一天时间对候选工厂做现场审核：执照、产能、质检成熟度、照片视频证据。不验厂，不承诺。',
        },
        {
          name: '打样与封样',
          text: '规格用英文+中文锁定，golden sample 一式三份封存。之后一切争议都以它为准。',
        },
        {
          name: '生产与质检关卡',
          text: '30% 定金排产；20%/80% 的 AQL 验货决定剩余货款是否继续走。',
        },
        {
          name: '出运、清关、交付',
          text: '凭 B/L 副本付 70% 尾款。海关提前预申报。货物落到 Mundra/JNPT 或你的门口——全程投保。',
        },
      ],
    },
    industries: {
      eyebrow: '品类',
      index: '03 / 04',
      title: '我们在做的行业',
      lede: '这些品类我们有深厚储备——没储备的，我们坦诚转介绍。',
      items: [
        '电子与元器件', '工业机械', '纺织与服装', '汽车配件',
        '消费品', '化工品', '家居装饰', '医疗设备', '包装材料',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: '定金 + 凭 B/L 付尾款——我们坚持的付款结构' },
      { num: '24 小时', text: '工作周内的供应商响应目标' },
      { num: '18–25 天', text: '海运至印度西海岸港口的航程' },
      { num: '3–7 天', text: '空运门到门，约为海运价的 5–8 倍' },
    ],
    enquire: {
      eyebrow: '从这里开始',
      title: '给我们一个产品，换一个到岸成本',
      lede: '告诉我们你在采什么、目标价多少。我们会回你一份到印度仓库的真实到岸成本测算——验货费用先行报价，货出运才收成功佣金。',
      why: [
        { lead: '没有成功，就没有成功佣金。', text: '交易黄了，你只需承担已报价的验厂/验货费用。' },
        { lead: '每个关卡都有证据。', text: '报告、照片、视频——都发生在钱动之前。' },
        { lead: '一个团队，两国落点。', text: '德里的人脉资源，广州的车间驻场。' },
      ],
    },
    faq: { eyebrow: '贸易常见问题', index: '04 / 04', title: 'Trade Intel，直答不绕弯', more: '查看全部贸易 FAQ' },
  },

  fr: {
    meta: {
      title: 'Services commerciaux Inde–Chine — Sourcing, contrôle qualité & logistique',
      description:
        'Sourcing produits, audits d’usine, contrôle qualité AQL, dédouanement et fret maritime/aérien entre la Chine et l’Inde — pilotés depuis Canton avec une commission au succès indexée sur la valeur expédiée.',
    },
    crumb: 'Commerce',
    schema: {
      serviceName: 'Services commerciaux Inde–Chine',
      serviceDescription:
        'Sourcing, contrôle qualité, conformité douanière et gestion du fret pour le commerce Inde–Chine, avec un modèle à la commission au succès.',
      serviceType: 'Services de commerce',
    },
    hero: {
      eyebrow: 'Commerce',
      index: 'TRD / 03',
      title: 'Votre chaîne d’approvisionnement n’a pas besoin de plus de complexité.',
      lede: 'Elle a besoin d’une équipe responsable, présente au pied de la machine. Sourcing, contrôles qualité, douanes et fret entre la Chine et l’Inde — pilotés depuis notre bureau de Canton, avec une commission au succès indexée sur la valeur expédiée.',
      facts: [
        { label: 'Base', value: 'Canton · Delhi' },
        { label: 'Réseau', value: '200+ vérifiés' },
        { label: 'Qualité', value: 'Inspections AQL' },
        { label: 'Modèle', value: 'Commission au succès' },
      ],
      primaryCta: 'Obtenir un coût rendu',
      secondaryCta: 'Voir les disciplines',
      jumps: ['Disciplines', 'Processus', 'Secteurs', 'Nous écrire', 'FAQ'],
    },
    heroBand: {
      alt: 'Portiques conteneurs travaillant au port de Canton à l’aube',
      caption: 'Port de Canton · notre cellule trade est à 40 minutes',
    },
    disciplines: {
      eyebrow: 'Orchestration de la chaîne d’approvisionnement',
      index: '01 / 04',
      title: 'Cinq disciplines clés',
      lede: 'Chacune existe parce que nous en avions assez de voir des importateurs payer son absence.',
      items: [
        {
          name: 'Sourcing produits',
          text: 'Plus de 5 000 contacts fournisseurs audités dans le delta de la rivière des Perles. Nous présélectionnons, vérifions et négocions — avec une promesse de réponse sous 24 heures en semaines ouvrées.',
          stat: '200+ usines auditées',
        },
        {
          name: 'Contrôle qualité',
          text: 'Inspections aux normes AQL à ~20 % et ~80 % de la production, plus contrôles pré-expédition et supervision du chargement des conteneurs. Rapports photo-vidéo à chaque porte.',
          stat: 'Portes AQL 20 % / 80 %',
        },
        {
          name: 'Douanes & conformité',
          text: 'Classification SH, enregistrements BIS/WPC, documents COO et dossiers douaniers complets préparés avant l’arrivée au port — le dédouanement n’attend jamais la paperasse.',
          stat: 'BIS · WPC · codes SH',
        },
        {
          name: 'Logistique intelligente',
          text: 'Mer 18–25 jours port à port, air 3–7 jours porte à porte, LCL pour les essais, FCL à l’échelle. Suivi de la congestion portuaire avec réacheminement quand cela vaut le coup.',
          stat: '100 % des envois assurés',
        },
        {
          name: 'Conseil en commerce international',
          text: 'Entrée sur le marché, structuration des paiements (TT/LC/escrow), contrats fournisseurs avec clauses de pénalité, et représentation dans les litiges sur place.',
          stat: 'Représentation sur place',
        },
      ],
    },
    process: {
      eyebrow: 'Notre méthode',
      index: '02 / 04',
      title: 'De l’idée de produit à l’entrepôt indien',
      lede: 'L’argent avance par étapes — et chaque étape se termine par des preuves, pas des assurances.',
      steps: [
        {
          name: 'Demande & coût rendu',
          text: 'Dites-nous le produit et le prix cible. Nous revenons avec un coût rendu réaliste jusqu’à l’entrepôt indien — droits, fret et inspection inclus.',
        },
        {
          name: 'Audit d’usine',
          text: 'Audit d’une journée sur place des usines candidates : licences, capacité, maturité qualité, preuves photo-vidéo. Pas d’audit, pas d’engagement.',
        },
        {
          name: 'Échantillons & golden sample',
          text: 'Spécifications verrouillées en anglais + chinois, golden samples scellés en triple exemplaire. Tout litige ultérieur se règle sur cette base.',
        },
        {
          name: 'Production avec portes qualité',
          text: '30 % d’acompte lance la production ; les inspections AQL à 20 %/80 % décident si le reste de l’argent avance.',
        },
        {
          name: 'Expédier, dédouaner, livrer',
          text: '70 % contre copie du B/L. Douane pré-déposée. La marchandise arrive à Mundra/JNPT ou à votre porte — assurée de bout en bout.',
        },
      ],
    },
    industries: {
      eyebrow: 'Catégories',
      index: '03 / 04',
      title: 'Les secteurs que nous couvrons',
      lede: 'Des viviers profonds dans ces catégories — et des orientations honnêtes là où nous n’en avons pas.',
      items: [
        'Électronique & composants', 'Machines industrielles', 'Textiles & habillement', 'Pièces automobiles',
        'Biens de consommation', 'Chimie', 'Décoration d’intérieur', 'Équipement médical', 'Matériaux d’emballage',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'acompte + solde contre le B/L — la structure que nous imposons' },
      { num: '24 h', text: 'délai de réponse fournisseur cible en semaines ouvrées' },
      { num: '18–25 j', text: 'transit maritime vers les ports de la côte ouest indienne' },
      { num: '3–7 j', text: 'fret aérien porte à porte, 5–8× le coût maritime' },
    ],
    enquire: {
      eyebrow: 'Commencer ici',
      title: 'Apportez-nous un produit, repartez avec un coût rendu',
      lede: 'Dites-nous ce que vous sourcez et votre prix cible. Nous répondons avec une image réaliste du coût rendu jusqu’à un entrepôt indien — coûts d’audit annoncés d’entrée, commission au succès seulement à l’expédition.',
      why: [
        { lead: 'Pas de succès, pas de commission.', text: 'Si l’affaire tombe à l’eau, vous ne devez que les coûts d’audit/inspection annoncés.' },
        { lead: 'Des preuves à chaque porte.', text: 'Rapports, photos, vidéos — avant que l’argent ne bouge.' },
        { lead: 'Une équipe, deux pays.', text: 'Relations à Delhi, présence à l’usine à Canton.' },
      ],
    },
    faq: { eyebrow: 'FAQ Commerce', index: '04 / 04', title: 'Trade Intel, réponses directes', more: 'Toutes les FAQ commerce' },
  },

  ar: {
    meta: {
      title: 'خدمات التجارة الهند–الصين — توريد وضبط جودة ولوجستيات',
      description:
        'توريد منتجات وتدقيق مصانع وضبط جودة AQL وتخليص جمركي وشحن بحري/جوي بين الصين والهند — يُدار من قوانغتشو بنموذج عمولة نجاح مرتبط بقيمة المشحون.',
    },
    crumb: 'التجارة',
    schema: {
      serviceName: 'خدمات التجارة الهند–الصين',
      serviceDescription: 'توريد وضبط جودة وتوافق جمركي وإدارة شحن لتجارة الهند–الصين، بنموذج عمولة نجاح.',
      serviceType: 'خدمات تجارية',
    },
    hero: {
      eyebrow: 'التجارة',
      index: 'TRD / 03',
      title: 'سلسلة إمدادك لا تحتاج تعقيدًا أكبر.',
      lede: 'إنها تحتاج فريقًا واحدًا مسؤولًا على أرض المصنع. توريد وبوابات جودة وجمارك وشحن بين الصين والهند — يُدار من مكتبنا في قوانغتشو، بعمولة نجاح مرتبطة بقيمة المشحون.',
      facts: [
        { label: 'القاعدة', value: 'قوانغتشو · دلهي' },
        { label: 'الشبكة', value: '200+ مدقق' },
        { label: 'الجودة', value: 'فحوص AQL' },
        { label: 'النموذج', value: 'عمولة نجاح' },
      ],
      primaryCta: 'احصل على التكلفة الشاملة',
      secondaryCta: 'شاهد التخصصات',
      jumps: ['التخصصات', 'الخطوات', 'القطاعات', 'استفسر', 'الأسئلة الشائعة'],
    },
    heroBand: {
      alt: 'رافعات حاويات تعمل في ميناء قوانغتشو عند الفجر',
      caption: 'ميناء قوانغتشو · مكتب التجارة يبعد 40 دقيقة',
    },
    disciplines: {
      eyebrow: 'تنسيق سلسلة الإمداد',
      index: '01 / 04',
      title: 'خمسة تخصصات أساسية',
      lede: 'كل واحد منها وُجد لأننا تعبنا من رؤية المستوردين يدفعون ثمن غيابه.',
      items: [
        {
          name: 'توريد المنتجات',
          text: 'أكثر من 5,000 جهة اتصال مورد مدققة في دلتا نهر اللؤلؤ. نختصر القائمة ونتحقق ونتفاوض — بوعد رد خلال 24 ساعة في أسابيع العمل.',
          stat: 'أكثر من 200 مصنع مدقق',
        },
        {
          name: 'ضبط الجودة',
          text: 'فحوص بمعيار AQL عند ~20% و~80% من الإنتاج، مع فحوص قبل الشحن وإشراف على تحميل الحاويات. تقارير بالصور والفيديو عند كل بوابة.',
          stat: 'بوابات AQL 20% / 80%',
        },
        {
          name: 'الجمارك والامتثال',
          text: 'تصنيف HS وتسجيلات BIS/WPC ومستندات COO وملفات جمركية كاملة تُجهَّز قبل وصول البضاعة للميناء — التخليص لا ينتظر الأوراق أبدًا.',
          stat: 'BIS · WPC · رموز HS',
        },
        {
          name: 'لوجستيات ذكية',
          text: 'بحرًا 18–25 يومًا من ميناء إلى ميناء، وجوًا 3–7 أيام من باب إلى باب، وLCL للتجارب وFCL للأحجام الكبيرة. مراقبة ازدحام الموانئ مع إعادة توجيه حين يكون ذلك مجديًا.',
          stat: '100% من الشحنات مؤمَّنة',
        },
        {
          name: 'استشارات تجارة عالمية',
          text: 'دخول الأسواق وهيكلة المدفوعات (TT/LC/escrow) وعقود موردين ببنود جزاء وتمثيل في النزاعات على الأرض.',
          stat: 'تمثيل على الأرض',
        },
      ],
    },
    process: {
      eyebrow: 'طريقتنا في العمل',
      index: '02 / 04',
      title: 'من فكرة منتج إلى مستودع هندي',
      lede: 'المال يتحرك على خطوات — وكل خطوة تنتهي بدليل، لا بوعود.',
      steps: [
        {
          name: 'الاستفسار وصورة التكلفة الشاملة',
          text: 'أخبرنا بالمنتج والسعر المستهدف. نعود إليك بتكلفة شاملة واقعية حتى مستودع هندي — الرسوم والشحن والفحص مشمولة.',
        },
        {
          name: 'تدقيق المصنع',
          text: 'تدقيق ميداني ليوم واحد للمصانع المرشحة: التراخيص والطاقة ونضج الجودة وأدلة مصورة. لا تدقيق، لا التزام.',
        },
        {
          name: 'العينات والعينة الذهبية',
          text: 'المواصفات تُثبَّت بالإنجليزية + الصينية، والعينة الذهبية تُختم بثلاث نسخ. كل نزاع لاحق يُحسم على أساسها.',
        },
        {
          name: 'الإنتاج ببوابات جودة',
          text: 'دفعة 30% تُطلق الإنتاج؛ فحوص AQL عند 20%/80% تقرر إن كان المبلغ المتبقي يتحرك.',
        },
        {
          name: 'الشحن والتخليص والتسليم',
          text: '70% مقابل نسخة بوليصة الشحن. الجمارك مُقدَّمة مسبقًا. البضاعة تصل إلى Mundra/JNPT أو بابك — مؤمَّنة من البداية للنهاية.',
        },
      ],
    },
    industries: {
      eyebrow: 'الفئات',
      index: '03 / 04',
      title: 'القطاعات التي نشتغل فيها',
      lede: 'خبرة عميقة في هذه الفئات — وإحالات صادقة حيث لا خبرة.',
      items: [
        'الإلكترونيات والمكونات', 'الآلات الصناعية', 'المنسوجات والملابس', 'قطع الغيار',
        'السلع الاستهلاكية', 'المواد الكيميائية', 'ديكور المنازل', 'الأجهزة الطبية', 'مواد التغليف',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'دفعة مقدمة + رصيد مقابل نسخة البوليصة — الهيكل الذي نُلِحّ عليه' },
      { num: '24 ساعة', text: 'هدف استجابة المورد خلال أسابيع العمل' },
      { num: '18–25 يومًا', text: 'الشحن البحري إلى موانئ الساحل الغربي الهندي' },
      { num: '3–7 أيام', text: 'شحن جوي من باب إلى باب، بتكلفة 5–8 أضعاف البحري' },
    ],
    enquire: {
      eyebrow: 'ابدأ من هنا',
      title: 'أحِل إلينا منتجًا، واحصل على التكلفة الشاملة',
      lede: 'أخبرنا بما تستورده وسعرك المستهدف. نرد بصورة واقعية للتكلفة الشاملة حتى مستودع هندي — تكاليف التدقيق تُسعَّر مقدمًا، وعمولة النجاح فقط عند شحن البضاعة.',
      why: [
        { lead: 'لا نجاح، لا عمولة.', text: 'إذا فشلت الصفقة، لا تدين إلا بتكاليف التدقيق/الفحص المُسعَّرة.' },
        { lead: 'دليل عند كل بوابة.', text: 'تقارير وصور وفيديو — قبل أن يتحرك المال.' },
        { lead: 'فريق واحد، بلدان.', text: 'علاقات في دلهي وحضور على أرض المصانع في قوانغتشو.' },
      ],
    },
    faq: { eyebrow: 'أسئلة التجارة الشائعة', index: '04 / 04', title: 'Trade Intel، إجابات مباشرة', more: 'كل أسئلة التجارة الشائعة' },
  },

  es: {
    meta: {
      title: 'Servicios comerciales India–China — Sourcing, control de calidad y logística',
      description:
        'Abastecimiento de productos, auditorías de fábrica, control de calidad AQL, despacho de aduanas y flete marítimo/aéreo entre China e India — gestionados desde Cantón con un modelo de comisión de éxito ligado al valor enviado.',
    },
    crumb: 'Comercio',
    schema: {
      serviceName: 'Servicios comerciales India–China',
      serviceDescription:
        'Sourcing, control de calidad, cumplimiento aduanero y gestión de flete para el comercio India–China, con un modelo de comisión de éxito.',
      serviceType: 'Servicios de comercio',
    },
    hero: {
      eyebrow: 'Comercio',
      index: 'TRD / 03',
      title: 'Tu cadena de suministro no necesita más complejidad.',
      lede: 'Necesita un equipo responsable en la planta. Sourcing, controles de calidad, aduanas y flete entre China e India — gestionados desde nuestra oficina de Cantón, con una comisión de éxito ligada al valor enviado.',
      facts: [
        { label: 'Base', value: 'Cantón · Delhi' },
        { label: 'Red', value: '200+ verificados' },
        { label: 'Calidad', value: 'Inspecciones AQL' },
        { label: 'Modelo', value: 'Comisión de éxito' },
      ],
      primaryCta: 'Obtén un coste puesto',
      secondaryCta: 'Ver disciplinas',
      jumps: ['Disciplinas', 'Proceso', 'Industrias', 'Consultar', 'FAQ'],
    },
    heroBand: {
      alt: 'Grúas portacontenedores trabajando en el puerto de Cantón al amanecer',
      caption: 'Puerto de Cantón · nuestra mesa de comercio está a 40 minutos',
    },
    disciplines: {
      eyebrow: 'Orquestación de la cadena de suministro',
      index: '01 / 04',
      title: 'Cinco disciplinas centrales',
      lede: 'Cada una existe porque nos cansamos de ver a importadores pagar por su ausencia.',
      items: [
        {
          name: 'Abastecimiento de productos',
          text: 'Más de 5.000 contactos de proveedores auditados en el delta del río de las Perlas. Preseleccionamos, verificamos y negociamos — con promesa de respuesta en 24 horas en semanas laborables.',
          stat: '200+ fábricas auditadas',
        },
        {
          name: 'Control de calidad',
          text: 'Inspecciones con estándar AQL al ~20% y ~80% de la producción, más controles previos al embarque y supervisión de la carga de contenedores. Informes foto-video en cada control.',
          stat: 'Controles AQL 20% / 80%',
        },
        {
          name: 'Aduanas y cumplimiento',
          text: 'Clasificación HS, registros BIS/WPC, documentos COO y expedientes aduaneros completos preparados antes de que la mercancía llegue al puerto — el despacho nunca espera al papeleo.',
          stat: 'BIS · WPC · códigos HS',
        },
        {
          name: 'Logística inteligente',
          text: 'Marítimo 18–25 días puerto a puerto, aéreo 3–7 días puerta a puerta, LCL para pruebas, FCL a escala. Monitoreo de congestión portuaria con redirección cuando conviene.',
          stat: '100% de envíos asegurados',
        },
        {
          name: 'Consultoría de comercio global',
          text: 'Entrada a mercados, estructuración de pagos (TT/LC/escrow), contratos con proveedores con cláusulas de penalización y representación en disputas en tierra.',
          stat: 'Representación en tierra',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      index: '02 / 04',
      title: 'De la idea de producto al almacén en India',
      lede: 'El dinero se mueve por pasos — y cada paso termina con evidencia, no con promesas.',
      steps: [
        {
          name: 'Consulta y panorama de coste puesto',
          text: 'Dinos el producto y el precio objetivo. Volvemos con un coste puesto realista hasta un almacén en India — aranceles, flete e inspección incluidos.',
        },
        {
          name: 'Auditoría de fábrica',
          text: 'Auditoría de un día en tierra de las fábricas candidatas: licencias, capacidad, madurez de calidad, evidencia foto-video. Sin auditoría, sin compromiso.',
        },
        {
          name: 'Muestras y muestra dorada',
          text: 'Especificaciones fijadas en inglés + chino, muestras doradas selladas por triplicado. Toda disputa posterior se resuelve contra esto.',
        },
        {
          name: 'Producción con controles de calidad',
          text: 'El anticipo del 30% libera la producción; las inspecciones AQL al 20%/80% deciden si el dinero restante se mueve.',
        },
        {
          name: 'Embarcar, despachar, entregar',
          text: '70% contra copia del B/L. Aduana pre-presentada. La mercancía llega a Mundra/JNPT o a tu puerta — asegurada de principio a fin.',
        },
      ],
    },
    industries: {
      eyebrow: 'Categorías',
      index: '03 / 04',
      title: 'Industrias en las que operamos',
      lede: 'Experiencia sólida y proveedores verificados en estas categorías — y derivaciones honestas donde no tenemos esa cobertura.',
      items: [
        'Electrónica y componentes', 'Maquinaria industrial', 'Textiles y confección', 'Autopartes',
        'Bienes de consumo', 'Química', 'Decoración del hogar', 'Equipamiento médico', 'Materiales de empaque',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'anticipo + saldo contra el B/L — la estructura que exigimos' },
      { num: '24 h', text: 'objetivo de respuesta del proveedor en semanas laborables' },
      { num: '18–25 d', text: 'tránsito marítimo a los puertos de la costa oeste de India' },
      { num: '3–7 d', text: 'flete aéreo puerta a puerta, 5–8× el coste marítimo' },
    ],
    enquire: {
      eyebrow: 'Empieza aquí',
      title: 'Tráenos un producto y recibe un coste puesto',
      lede: 'Dinos qué estás comprando y tu precio objetivo. Respondemos con un panorama realista del coste puesto hasta un almacén en India — costos de auditoría cotizados por adelantado, comisión de éxito solo cuando la mercancía se embarca.',
      why: [
        { lead: 'Sin éxito, sin comisión.', text: 'Si el negocio muere, solo debes los costos de auditoría/inspección cotizados.' },
        { lead: 'Evidencia en cada control.', text: 'Informes, fotos, videos — antes de que se mueva el dinero.' },
        { lead: 'Un equipo, dos países.', text: 'Relaciones en Delhi, presencia en planta en Cantón.' },
      ],
    },
    faq: { eyebrow: 'FAQ de Comercio', index: '04 / 04', title: 'Trade Intel, respuestas directas', more: 'Todas las FAQ de comercio' },
  },

  de: {
    meta: {
      title: 'Indien–China-Handelsservices — Beschaffung, QS & Logistik',
      description:
        'Produktbeschaffung, Fabrikaudits, AQL-Qualitätskontrolle, Zollabfertigung und See-/Luftfracht zwischen China und Indien — gesteuert von Guangzhou aus, mit Erfolgsprovision an den versandten Warenwert.',
    },
    crumb: 'Handel',
    schema: {
      serviceName: 'Indien–China-Handelsservices',
      serviceDescription:
        'Beschaffung, Qualitätskontrolle, Zollkonformität und Frachtmanagement für den Indien–China-Handel, mit Erfolgsprovisionsmodell.',
      serviceType: 'Handelsdienstleistungen',
    },
    hero: {
      eyebrow: 'Handel',
      index: 'TRD / 03',
      title: 'Ihre Lieferkette braucht keine weitere Komplexität.',
      lede: 'Sie braucht ein verantwortliches Team auf der Werkshalle. Beschaffung, Qualitätsschleusen, Zoll und Fracht zwischen China und Indien — gesteuert von unserem Büro in Guangzhou, mit Erfolgsprovision an den versandten Warenwert.',
      facts: [
        { label: 'Standort', value: 'Guangzhou · Delhi' },
        { label: 'Netzwerk', value: '200+ geprüft' },
        { label: 'Qualität', value: 'AQL-Inspektionen' },
        { label: 'Modell', value: 'Erfolgsprovision' },
      ],
      primaryCta: 'Landekosten berechnen lassen',
      secondaryCta: 'Disziplinen ansehen',
      jumps: ['Disziplinen', 'Ablauf', 'Branchen', 'Anfragen', 'FAQ'],
    },
    heroBand: {
      alt: 'Containerkrane im Hafen von Guangzhou bei Sonnenaufgang',
      caption: 'Hafen von Guangzhou · unser Trade-Desk ist 40 Minuten entfernt',
    },
    disciplines: {
      eyebrow: 'Lieferketten-Orchestrierung',
      index: '01 / 04',
      title: 'Fünf Kern-Disziplinen',
      lede: 'Jede existiert, weil wir es leid waren, Importeure für ihr Fehlen zahlen zu sehen.',
      items: [
        {
          name: 'Produktbeschaffung',
          text: 'Über 5.000 auditierte Lieferantenkontakte im Perlflussdelta. Wir erstellen Shortlists, verifizieren und verhandeln — mit 24-Stunden-Antwortversprechen in Arbeitswochen.',
          stat: '200+ Fabriken auditiert',
        },
        {
          name: 'Qualitätskontrolle',
          text: 'AQL-Standard-Inspektionen bei ca. 20 % und ca. 80 % der Produktion, dazu Vorabversand-Checks und Überwachung der Containerbeladung. Foto-Video-Berichte an jeder Schleuse.',
          stat: 'AQL 20 % / 80 %-Schleusen',
        },
        {
          name: 'Zoll & Konformität',
          text: 'HS-Klassifizierung, BIS/WPC-Registrierungen, COO-Dokumente und vollständige Zollakten, vorbereitet, bevor die Ware den Hafen erreicht — die Abfertigung wartet nie auf Papierkram.',
          stat: 'BIS · WPC · HS-Codes',
        },
        {
          name: 'Intelligente Logistik',
          text: 'See 18–25 Tage Hafen zu Hafen, Luft 3–7 Tage Tür zu Tür, LCL für Testmengen, FCL in Serie. Hafenstau-Monitoring mit Umleitung, wenn es sich lohnt.',
          stat: '100 % versicherte Sendungen',
        },
        {
          name: 'Globale Handelsberatung',
          text: 'Markteintritt, Zahlungsstrukturierung (TT/LC/escrow), Lieferantenverträge mit Strafklauseln und Streitvertretung vor Ort.',
          stat: 'Präsenz vor Ort',
        },
      ],
    },
    process: {
      eyebrow: 'Wie wir arbeiten',
      index: '02 / 04',
      title: 'Von der Produktidee bis zum indischen Lagerhaus',
      lede: 'Geld bewegt sich in Schritten — und jeder Schritt endet mit Nachweisen, nicht mit Zusicherungen.',
      steps: [
        {
          name: 'Anfrage & Landekosten-Bild',
          text: 'Sagen Sie uns Produkt und Zielpreis. Wir kommen mit realistischen Landekosten bis zum indischen Lagerhaus zurück — Zoll, Fracht und Inspektion inklusive.',
        },
        {
          name: 'Fabrikaudit',
          text: 'Eintägiges Audit der Kandidatenfabriken vor Ort: Lizenzen, Kapazität, QS-Reife, Foto-Video-Nachweise. Kein Audit, keine Verpflichtung.',
        },
        {
          name: 'Bemusterung & Goldenes Muster',
          text: 'Spezifikationen in Englisch + Chinesisch fixiert, goldene Muster dreifach versiegelt. Jeder spätere Streit wird dagegen entschieden.',
        },
        {
          name: 'Produktion mit QS-Schleusen',
          text: '30 % Anzahlung gibt die Produktion frei; AQL-Inspektionen bei 20 %/80 % entscheiden, ob das restliche Geld wandert.',
        },
        {
          name: 'Verschiffen, abfertigen, liefern',
          text: '70 % gegen B/L-Kopie. Zoll vorab eingereicht. Ware landet in Mundra/JNPT oder an Ihrer Tür — von Anfang bis Ende versichert.',
        },
      ],
    },
    industries: {
      eyebrow: 'Kategorien',
      index: '03 / 04',
      title: 'Branchen, die wir betreiben',
      lede: 'Tiefe Auswahl in diesen Kategorien — und ehrliche Weiterempfehlung, wo nicht.',
      items: [
        'Elektronik & Komponenten', 'Industriemaschinen', 'Textilien & Bekleidung', 'Autoteile',
        'Konsumgüter', 'Chemikalien', 'Wohnaccessoires', 'Medizingeräte', 'Verpackungsmaterial',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'Anzahlung + Restbetrag gegen B/L — die Struktur, auf der wir bestehen' },
      { num: '24 Std', text: 'Antwortziel der Lieferanten in Arbeitswochen' },
      { num: '18–25 T', text: 'Seetransit zu den Häfen der indischen Westküste' },
      { num: '3–7 T', text: 'Luftfracht Tür zu Tür, das 5–8-Fache des Seewegs' },
    ],
    enquire: {
      eyebrow: 'Hier starten',
      title: 'Bringen Sie uns ein Produkt — Sie erhalten Landekosten',
      lede: 'Sagen Sie uns, was Sie beschaffen, und Ihren Zielpreis. Wir antworten mit einem realistischen Landekosten-Bild bis zu einem indischen Lagerhaus — Auditkosten vorab zitiert, Erfolgsprovision erst beim Versand.',
      why: [
        { lead: 'Kein Erfolg, keine Erfolgsprovision.', text: 'Wenn das Geschäft platzt, schulden Sie nur die zitierten Audit-/Inspektionskosten.' },
        { lead: 'Nachweise an jeder Schleuse.', text: 'Berichte, Fotos, Videos — bevor Geld wandert.' },
        { lead: 'Ein Team, zwei Länder.', text: 'Delhi-Beziehungen, Präsenz in der Werkshalle in Guangzhou.' },
      ],
    },
    faq: { eyebrow: 'Handels-FAQ', index: '04 / 04', title: 'Trade Intel, geradeheraus beantwortet', more: 'Alle Handels-FAQs' },
  },

  ja: {
    meta: {
      title: 'インド–中国貿易サービス — 調達・品質管理・ロジスティクス',
      description:
        '中国とインド間の製品調達、工場監査、AQL 品質検査、通関、海上/航空輸送 — 広州から、出荷額に連動する成功報酬モデルで運営。',
    },
    crumb: '貿易',
    schema: {
      serviceName: 'インド–中国貿易サービス',
      serviceDescription: 'インド–中国貿易向けの調達、品質管理、通関コンプライアンス、貨物管理。成功報酬モデルで提供します。',
      serviceType: '貿易サービス',
    },
    hero: {
      eyebrow: '貿易',
      index: 'TRD / 03',
      title: 'あなたのサプライチェーンに必要なのは、さらなる複雑さではありません。',
      lede: '必要なのは、工場の現場に立つ説明責任のあるひとつのチーム。中国とインド間の調達、品質ゲート、通関、輸送 — 広州の事務所から、出荷額に連動する成功報酬で運営します。',
      facts: [
        { label: '拠点', value: '広州 · デリー' },
        { label: 'ネットワーク', value: '200 社以上確認済み' },
        { label: '品質', value: 'AQL 検品' },
        { label: '方式', value: '成功報酬' },
      ],
      primaryCta: '総到着コストを試算する',
      secondaryCta: 'サービス領域を見る',
      jumps: ['サービス領域', '流れ', '業種', 'お問い合わせ', 'FAQ'],
    },
    heroBand: {
      alt: '夜明けの広州港で作業するコンテナクレーン',
      caption: '広州港 · 私たちの貿易デスクまで 40 分',
    },
    disciplines: {
      eyebrow: 'サプライチェーンの統括',
      index: '01 / 04',
      title: '五つの基盤サービス',
      lede: 'どれも、その不在のために輸入者が代金を払い続けるのを見飽きて生まれたものです。',
      items: [
        {
          name: '製品調達',
          text: '珠江デルタで監査済みのサプライヤー 5,000 社以上。候補の絞り込み、確認、交渉 — 営業週は 24 時間以内の返信をお約束します。',
          stat: '監査済み工場 200 社以上',
        },
        {
          name: '品質管理',
          text: '生産量の約 20% と約 80% で AQL 基準の検品、加えて出荷前検査とコンテナ積載の立会い。各ゲートで写真・動画レポート。',
          stat: 'AQL 20% / 80% ゲート',
        },
        {
          name: '通関・コンプライアンス',
          text: 'HS 分類、BIS/WPC 登録、COO 書類、完全な通関ファイルを貨物の到着前に整備 — 通関が書類待ちになることはありません。',
          stat: 'BIS · WPC · HS コード',
        },
        {
          name: 'スマート物流',
          text: '海上 18〜25 日（港間）、航空 3〜7 日（戸口から戸口へ）、試験発注は LCL、量産は FCL。港の混雑を監視し、得なら経路を変更します。',
          stat: '出荷の 100% 保険加入',
        },
        {
          name: 'グローバル貿易コンサルティング',
          text: '市場参入、支払いスキーム（TT/LC/escrow）、違約条項付きのサプライヤー契約、現地での紛争対応。',
          stat: '現地対応体制',
        },
      ],
    },
    process: {
      eyebrow: '進め方',
      index: '02 / 04',
      title: '製品のアイデアからインドの倉庫まで',
      lede: 'お金は段階的に動きます — そして各段階は、口約束ではなく証拠で終わります。',
      steps: [
        {
          name: 'お問い合わせと総到着コストの把握',
          text: '製品と目標価格をお知らせください。インドの倉庫までの現実的な総到着コスト — 関税、運賃、検品費込み — をお返しします。',
        },
        {
          name: '工場監査',
          text: '候補工場を 1 日かけて現地監査：許認可、生産能力、品質管理の成熟度、写真・動画の証拠。監査なしに約束はしません。',
        },
        {
          name: 'サンプリングとゴールデンサンプル',
          text: '仕様を英語+中国語で確定し、ゴールデンサンプルを 3 部封印。以降の争いはすべてこれに照らして決着させます。',
        },
        {
          name: '品質ゲート付き生産',
          text: '30% の手付金で生産開始。20%/80% の AQL 検品が、残りの支払いを進めるかどうかを決めます。',
        },
        {
          name: '出荷・通関・引き渡し',
          text: 'B/L コピー受け取りで 70%。通関は事前申告。貨物は Mundra/JNPT またはご指定の戸口へ — 全程保険付き。',
        },
      ],
    },
    industries: {
      eyebrow: 'カテゴリー',
      index: '03 / 04',
      title: '手がけている業種',
      lede: 'この分野には厚い選択肢があります — 手がけていない分野は、率直にご紹介します。',
      items: [
        'エレクトロニクス・部品', '産業機械', '繊維・アパレル', '自動車部品',
        '消費財', '化学品', 'インテリア雑貨', '医療機器', '包装資材',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: '手付金 + B/L コピー受け取りで残額 — 私たちが徹底する構造' },
      { num: '24 時間', text: '営業週でのサプライヤー返信目標' },
      { num: '18–25 日', text: 'インド西海岸の港までの海上輸送' },
      { num: '3–7 日', text: '航空輸送は戸口から戸口へ、海運の 5–8 倍のコスト' },
    ],
    enquire: {
      eyebrow: 'ここから始める',
      title: '製品をお持ちください。総到着コストをお返しします。',
      lede: '調達したい製品と目標価格をお知らせください。インドの倉庫までの現実的な総到着コストをお返しします — 監査費用は事前に見積もり、成功報酬は出荷時のみ。',
      why: [
        { lead: '成功しなければ、成功報酬もありません。', text: '取引が消えた場合、お支払いは見積もった監査・検品費のみ。' },
        { lead: '各ゲートに証拠。', text: 'レポート、写真、動画 — お金が動く前に。' },
        { lead: 'ひとつのチーム、両国に足場。', text: 'デリーの人脈、広州の現場力。' },
      ],
    },
    faq: { eyebrow: '貿易 FAQ', index: '04 / 04', title: 'Trade Intel への率直な回答', more: '貿易に関する FAQ すべて' },
  },

  pt: {
    meta: {
      title: 'Serviços de comércio Índia–China — suprimentos, QC e logística',
      description:
        'Suprimentos de produtos, auditorias de fábrica, controle de qualidade AQL, desembaraço aduaneiro e frete marítimo/aéreo entre China e Índia — operados de Guangzhou com modelo de comissão de sucesso vinculado ao valor enviado.',
    },
    crumb: 'Comércio',
    schema: {
      serviceName: 'Serviços de comércio Índia–China',
      serviceDescription:
        'Suprimentos, controle de qualidade, conformidade aduaneira e gestão de frete para o comércio Índia–China, com modelo de comissão de sucesso.',
      serviceType: 'Serviços de comércio',
    },
    hero: {
      eyebrow: 'Comércio',
      index: 'TRD / 03',
      title: 'Sua cadeia de suprimentos não precisa de mais complexidade.',
      lede: 'Ela precisa de uma equipe responsável no chão de fábrica. Suprimentos, portões de qualidade, alfândega e frete entre China e Índia — operados do nosso escritório em Guangzhou, com comissão de sucesso vinculada ao valor enviado.',
      facts: [
        { label: 'Base', value: 'Guangzhou · Délhi' },
        { label: 'Rede', value: '200+ verificados' },
        { label: 'Qualidade', value: 'Inspeções AQL' },
        { label: 'Modelo', value: 'Comissão de sucesso' },
      ],
      primaryCta: 'Obter o custo de desembarque',
      secondaryCta: 'Ver disciplinas',
      jumps: ['Disciplinas', 'Processo', 'Setores', 'Consultar', 'FAQ'],
    },
    heroBand: {
      alt: 'Guindastes de contêineres trabalhando no porto de Guangzhou ao amanhecer',
      caption: 'Porto de Guangzhou · nossa mesa de comércio fica a 40 minutos',
    },
    disciplines: {
      eyebrow: 'Orquestração da cadeia de suprimentos',
      index: '01 / 04',
      title: 'Cinco disciplinas centrais',
      lede: 'Cada uma existe porque nos cansamos de ver importadores pagarem pela sua ausência.',
      items: [
        {
          name: 'Suprimento de produtos',
          text: 'Mais de 5.000 contatos de fornecedores auditados no delta do Rio das Pérolas. Fazemos a pré-seleção, verificamos e negociamos — com promessa de resposta em 24 horas em semanas úteis.',
          stat: '200+ fábricas auditadas',
        },
        {
          name: 'Controle de qualidade',
          text: 'Inspeções padrão AQL a ~20% e ~80% da produção, mais checagens pré-embarque e supervisão do carregamento de contêineres. Relatórios com foto e vídeo em cada portão.',
          stat: 'Portões AQL 20% / 80%',
        },
        {
          name: 'Alfândega e conformidade',
          text: 'Classificação HS, registros BIS/WPC, documentos COO e dossiês aduaneiros completos preparados antes de a mercadoria chegar ao porto — o desembaraço nunca espera papelada.',
          stat: 'BIS · WPC · códigos HS',
        },
        {
          name: 'Logística inteligente',
          text: 'Marítimo 18–25 dias porto a porto, aéreo 3–7 dias porta a porta, LCL para testes, FCL em escala. Monitoramento de congestionamento portuário com redirecionamento quando compensa.',
          stat: '100% dos envios segurados',
        },
        {
          name: 'Consultoria de comércio global',
          text: 'Entrada em mercados, estruturação de pagamentos (TT/LC/escrow), contratos com fornecedores com cláusulas de penalidade e representação em disputas no local.',
          stat: 'Representação no local',
        },
      ],
    },
    process: {
      eyebrow: 'Como trabalhamos',
      index: '02 / 04',
      title: 'Da ideia de produto ao armazém indiano',
      lede: 'O dinheiro avança em etapas — e cada etapa termina com evidências, não com promessas.',
      steps: [
        {
          name: 'Consulta e panorama de custo de desembarque',
          text: 'Diga-nos o produto e o preço-alvo. Voltamos com um custo de desembarque realista até um armazém na Índia — impostos, frete e inspeção incluídos.',
        },
        {
          name: 'Auditoria de fábrica',
          text: 'Auditoria de um dia no local das fábricas candidatas: licenças, capacidade, maturidade de qualidade, evidências em foto e vídeo. Sem auditoria, sem compromisso.',
        },
        {
          name: 'Amostragem e amostra dourada',
          text: 'Especificações travadas em inglês + chinês, amostras douradas lacradas em triplicata. Toda disputa posterior se resolve com base nisso.',
        },
        {
          name: 'Produção com portões de qualidade',
          text: '30% de adiantamento libera a produção; as inspeções AQL a 20%/80% decidem se o restante do dinheiro avança.',
        },
        {
          name: 'Embarcar, desembaraçar, entregar',
          text: '70% contra cópia do B/L. Alfândega protocolada antes. A mercadoria chega a Mundra/JNPT ou à sua porta — segurada de ponta a ponta.',
        },
      ],
    },
    industries: {
      eyebrow: 'Categorias',
      index: '03 / 04',
      title: 'Setores em que operamos',
      lede: 'Opções profundas nessas categorias — e indicações honestas onde não temos.',
      items: [
        'Eletrônicos e componentes', 'Máquinas industriais', 'Têxteis e vestuário', 'Autopeças',
        'Bens de consumo', 'Química', 'Decoração', 'Equipamentos médicos', 'Materiais de embalagem',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'adiantamento + saldo contra o B/L — a estrutura que exigimos' },
      { num: '24 h', text: 'meta de resposta dos fornecedores em semanas úteis' },
      { num: '18–25 d', text: 'trânsito marítimo até os portos da costa oeste indiana' },
      { num: '3–7 d', text: 'frete aéreo porta a porta, 5–8× o custo marítimo' },
    ],
    enquire: {
      eyebrow: 'Comece aqui',
      title: 'Traga um produto, receba um custo de desembarque',
      lede: 'Diga-nos o que você está comprando e seu preço-alvo. Respondemos com um panorama realista do custo de desembarque até um armazém na Índia — custos de auditoria cotados antecipadamente, comissão de sucesso só quando a mercadoria embarca.',
      why: [
        { lead: 'Sem sucesso, sem comissão de sucesso.', text: 'Se o negócio morrer, você deve apenas os custos cotados de auditoria/inspeção.' },
        { lead: 'Evidência em cada portão.', text: 'Relatórios, fotos, vídeos — antes de o dinheiro se mover.' },
        { lead: 'Uma equipe, dois países.', text: 'Relações em Délhi, presença no chão de fábrica em Guangzhou.' },
      ],
    },
    faq: { eyebrow: 'FAQ de Comércio', index: '04 / 04', title: 'Trade Intel, respostas diretas', more: 'Todas as FAQs de comércio' },
  },

  hi: {
    meta: {
      title: 'भारत–चीन व्यापार सेवाएँ — सोर्सिंग, गुणवत्ता नियंत्रण और लॉजिस्टिक्स',
      description:
        'चीन और भारत के बीच उत्पाद सोर्सिंग, फ़ैक्टरी ऑडिट, AQL गुणवत्ता नियंत्रण, कस्टम्स क्लियरेंस और समुद्री/वायु माल ढुलाई — ग्वांगज़ू से, भेजे गए माल के मूल्य से जुड़ी सफलता फ़ीस मॉडल पर।',
    },
    crumb: 'व्यापार',
    schema: {
      serviceName: 'भारत–चीन व्यापार सेवाएँ',
      serviceDescription: 'भारत–चीन व्यापार के लिए सोर्सिंग, गुणवत्ता नियंत्रण, कस्टम्स अनुपालन और माल प्रबंधन, सफलता फ़ीस मॉडल पर।',
      serviceType: 'व्यापार सेवाएँ',
    },
    hero: {
      eyebrow: 'व्यापार',
      index: 'TRD / 03',
      title: 'आपकी सप्लाई चेन को और जटिलता नहीं चाहिए।',
      lede: 'उसे फ़ैक्टरी फ़्लोर पर एक जवाबदेह टीम चाहिए। चीन और भारत के बीच सोर्सिंग, गुणवत्ता गेट, कस्टम्स और माल ढुलाई — हमारे ग्वांगज़ू कार्यालय से, भेजे गए माल के मूल्य से जुड़ी सफलता फ़ीस पर।',
      facts: [
        { label: 'आधार', value: 'ग्वांगज़ू · दिल्ली' },
        { label: 'नेटवर्क', value: '200+ जाँचे हुए' },
        { label: 'गुणवत्ता', value: 'AQL निरीक्षण' },
        { label: 'मॉडल', value: 'सफलता फ़ीस' },
      ],
      primaryCta: 'लैंडेड लागत पाएँ',
      secondaryCta: 'सेवा क्षेत्र देखें',
      jumps: ['सेवा क्षेत्र', 'प्रक्रिया', 'उद्योग', 'पूछताछ', 'FAQ'],
    },
    heroBand: {
      alt: 'भोर में ग्वांगज़ू बंदरगाह पर काम करते कंटेनर क्रेन',
      caption: 'ग्वांगज़ू बंदरगाह · हमारा व्यापार डेस्क 40 मिनट दूर',
    },
    disciplines: {
      eyebrow: 'सप्लाई चेन प्रबंधन',
      index: '01 / 04',
      title: 'पाँच मूल सेवा क्षेत्र',
      lede: 'हर एक इसलिए है कि हम आयातकों को इसकी कमी के लिए भुगतान करते देखते-देखते थक गए थे।',
      items: [
        {
          name: 'उत्पाद सोर्सिंग',
          text: 'पर्ल रिवर डेल्टा में 5,000+ ऑडिट किए गए आपूर्तिकर्ता संपर्क। हम शॉर्टलिस्ट करते हैं, सत्यापित करते हैं और सौदेबाज़ी करते हैं — कार्य सप्ताहों में 24 घंटे की प्रतिक्रिया का वादा।',
          stat: '200+ फ़ैक्टरियाँ ऑडिट',
        },
        {
          name: 'गुणवत्ता नियंत्रण',
          text: 'उत्पादन के ~20% और ~80% पर AQL-मानक निरीक्षण, साथ में शिपमेंट-पूर्व जाँचें और कंटेनर लोडिंग पर्यवेक्षण। हर गेट पर फ़ोटो-वीडियो रिपोर्ट।',
          stat: 'AQL 20% / 80% गेट',
        },
        {
          name: 'कस्टम्स और अनुपालन',
          text: 'HS वर्गीकरण, BIS/WPC पंजीकरण, COO दस्तावेज़ और पूरी कस्टम्स फ़ाइलें माल के बंदरगाह पहुँचने से पहले तैयार — क्लियरेंस कभी काग़ज़ी काम पर नहीं रुकता।',
          stat: 'BIS · WPC · HS कोड',
        },
        {
          name: 'स्मार्ट लॉजिस्टिक्स',
          text: 'समुद्री 18–25 दिन बंदरगाह से बंदरगाह, वायु 3–7 दिन दरवाज़े से दरवाज़े, परीक्षण के लिए LCL, पैमाने पर FCL। बंदरगाह भीड़ पर नज़र, फ़ायदे होने पर रास्ता बदलना।',
          stat: '100% बीमित शिपमेंट',
        },
        {
          name: 'वैश्विक व्यापार परामर्श',
          text: 'बाज़ार प्रवेश, भुगतान संरचना (TT/LC/escrow), जुर्माना खंडों वाले आपूर्तिकर्ता अनुबंध, और मौक़े पर विवाद प्रतिनिधित्व।',
          stat: 'मौक़े पर प्रतिनिधित्व',
        },
      ],
    },
    process: {
      eyebrow: 'हम कैसे काम करते हैं',
      index: '02 / 04',
      title: 'उत्पाद विचार से भारतीय गोदाम तक',
      lede: 'पैसा चरणों में चलता है — और हर चरण भरोसे पर नहीं, साक्ष्य पर ख़त्म होता है।',
      steps: [
        {
          name: 'पूछताछ और लैंडेड लागत की तस्वीर',
          text: 'उत्पाद और लक्ष्य मूल्य बताइए। हम भारतीय गोदाम तक यथार्थवादी लैंडेड लागत लौटाते हैं — शुल्क, माल भाड़ा और निरीक्षण सहित।',
        },
        {
          name: 'फ़ैक्टरी ऑडिट',
          text: 'उम्मीदवार फ़ैक्टरियों का एक दिन का मैदानी ऑडिट: लाइसेंस, क्षमता, गुणवत्ता परिपक्वता, फ़ोटो-वीडियो साक्ष्य। ऑडिट नहीं, प्रतिबद्धता नहीं।',
        },
        {
          name: 'सैंपलिंग और गोल्डन सैंपल',
          text: 'स्पेसिफ़िकेशन अंग्रेज़ी + चीनी में तय, गोल्डन सैंपल तीन प्रतियों में सील। बाद का हर विवाद इसी पर तय होता है।',
        },
        {
          name: 'गुणवत्ता गेट सहित उत्पादन',
          text: '30% अग्रिम उत्पादन शुरू करता है; 20%/80% पर AQL निरीक्षण तय करते हैं कि बाक़ी पैसा चलेगा या नहीं।',
        },
        {
          name: 'भेजें, क्लियर करें, पहुँचाएँ',
          text: 'B/L कॉपी पर 70%। कस्टम्स पहले दाख़िल। माल Mundra/JNPT या आपके दरवाज़े पर — शुरू से अंत तक बीमित।',
        },
      ],
    },
    industries: {
      eyebrow: 'श्रेणियाँ',
      index: '03 / 04',
      title: 'जिन उद्योगों में हम काम करते हैं',
      lede: 'इन श्रेणियों में गहरी तैयारी — और जहाँ नहीं, वहाँ ईमानदार रेफ़रल।',
      items: [
        'इलेक्ट्रॉनिक्स और कंपोनेंट', 'औद्योगिक मशीनरी', 'कपड़ा और परिधान', 'ऑटो पार्ट्स',
        'उपभोक्ता वस्तुएँ', 'रसायन', 'घर की सजावट', 'चिकित्सा उपकरण', 'पैकेजिंग सामग्री',
      ],
    },
    payStrip: [
      { num: '30 / 70', text: 'अग्रिम + B/L कॉपी पर शेष राशि — वह संरचना जिस पर हम ज़ोर देते हैं' },
      { num: '24 घंटे', text: 'कार्य सप्ताहों में आपूर्तिकर्ता प्रतिक्रिया लक्ष्य' },
      { num: '18–25 दिन', text: 'भारत के पश्चिमी तट के बंदरगाहों तक समुद्री संचरण' },
      { num: '3–7 दिन', text: 'वायु माल भाड़ा दरवाज़े से दरवाज़े, समुद्री लागत का 5–8 गुना' },
    ],
    enquire: {
      eyebrow: 'यहाँ से शुरू करें',
      title: 'हमें एक उत्पाद दें, लैंडेड लागत पाएँ',
      lede: 'बताइए आप क्या सोर्स कर रहे हैं और लक्ष्य मूल्य क्या है। हम भारतीय गोदाम तक यथार्थवादी लैंडेड लागत लौटाते हैं — ऑडिट लागत पहले से बताई जाती है, सफलता फ़ीस सिर्फ़ माल भेजने पर।',
      why: [
        { lead: 'सफलता नहीं, तो सफलता फ़ीस नहीं।', text: 'सौदा टूटने पर आप केवल बताई गई ऑडिट/निरीक्षण लागत देते हैं।' },
        { lead: 'हर गेट पर साक्ष्य।', text: 'रिपोर्ट, फ़ोटो, वीडियो — पैसा चलने से पहले।' },
        { lead: 'एक टीम, दोनों देश।', text: 'दिल्ली के संबंध, ग्वांगज़ू की फ़्लोर उपस्थिति।' },
      ],
    },
    faq: { eyebrow: 'व्यापार FAQ', index: '04 / 04', title: 'Trade Intel, सीधे जवाब', more: 'सभी व्यापार FAQ' },
  },
};
