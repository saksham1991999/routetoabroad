/**
 * Trade Landed Cost & FCL/CBM Estimator strings — shared by all 9 locales.
 * `script` is serialized onto the page (data-i18n) and read by the client script.
 */
import type { Locale } from '../../lib/i18n';

export interface TradeCostStrings {
  title: string;
  description: string;
  crumb: string;
  toolsCrumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  select: string;
  labels: {
    origin: string;
    destination: string;
    mode: string;
    category: string;
    fobValue: string;
    volume: string;
  };
  origins: {
    shenzhen: string;
    guangzhou: string;
    ningbo: string;
    shanghai: string;
  };
  destinations: {
    india: string;
    gcc: string;
    africa: string;
    europe: string;
    americas: string;
    sea: string;
  };
  modes: {
    fcl20: string;
    fcl40hq: string;
    lcl: string;
    air: string;
  };
  categories: {
    electronics: string;
    solar: string;
    ev: string;
    machinery: string;
    textiles: string;
    hardware: string;
  };
  calculate: string;
  reset: string;
  included: {
    label: string;
    before: string;
    bold: string;
    after: string;
  };
  script: {
    totalLabel: string;
    thItem: string;
    thRate: string;
    thAmount: string;
    fobRow: string;
    originRow: string;
    freightRow: string;
    insuranceRow: string;
    dutyRow: string;
    destRow: string;
    totalRow: string;
    transitLabel: string;
    daysSea: string;
    daysAir: string;
    modeShort: { fcl20: string; fcl40hq: string; lcl: string; air: string };
    originShort: { shenzhen: string; guangzhou: string; ningbo: string; shanghai: string };
    destShort: { india: string; gcc: string; africa: string; europe: string; americas: string; sea: string };
    note: string;
    ctaQuote: string;
    ctaCatalog: string;
    copyLink: string;
    linkCopied: string;
    copyFailed: string;
  };
}

const en: TradeCostStrings = {
  title: 'Trade Landed Cost & FCL/CBM Estimator — China Sourcing Freight & Duty',
  description:
    'Estimate total landed cost from Shenzhen, Guangzhou, Ningbo or Shanghai to India, GCC, Africa, Europe, Americas & SE Asia — 20ft FCL, 40ft HQ, LCL CBM & Air Freight.',
  crumb: 'Landed cost estimator',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Free trade tool · 1 minute',
    title: 'What is your real landed cost?',
    lede: 'Compare 20ft FCL, 40ft HQ, LCL per CBM and Air Freight from four Chinese ports — including origin THC, marine insurance, estimated destination duties and port clearance.',
  },
  select: 'Select…',
  labels: {
    origin: 'China origin port',
    destination: 'Destination region',
    mode: 'Shipping mode',
    category: 'Product category (duty band)',
    fobValue: 'FOB cargo value (USD)',
    volume: 'Volume (CBM) · Air: 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: 'Shenzhen (Yantian / Shekou)',
    guangzhou: 'Guangzhou (Nansha / Huangpu)',
    ningbo: 'Ningbo-Zhoushan (Beilun)',
    shanghai: 'Shanghai (Yangshan)',
  },
  destinations: {
    india: 'India (Nhava Sheva / Mundra / Chennai)',
    gcc: 'GCC / Middle East (Jebel Ali / Dammam)',
    africa: 'Africa (Mombasa / Lagos / Durban)',
    europe: 'Europe / UK (Rotterdam / Hamburg / Felixstowe)',
    americas: 'Americas (LA / NY / Santos)',
    sea: 'Southeast Asia (Singapore / Laem Chabang)',
  },
  modes: {
    fcl20: 'Sea 20ft FCL (~28 CBM)',
    fcl40hq: 'Sea 40ft HQ (~68 CBM)',
    lcl: 'Sea LCL (per CBM)',
    air: 'Air Freight (per kg / volumetric)',
  },
  categories: {
    electronics: 'Electronics & Mobile Accessories',
    solar: 'Solar PV & LiFePO4 Storage',
    ev: 'EV & Automotive Components',
    machinery: 'CNC Machinery & Industrial Lines',
    textiles: 'Textiles & Apparel',
    hardware: 'Construction Hardware & Packaging',
  },
  calculate: 'Estimate landed cost',
  reset: 'Reset',
  included: {
    label: 'How this estimate works',
    before: 'Freight ranges blend current spot container/CBM/air indices with origin export customs, 0.35%–0.5% marine insurance, destination port THC and indicative tariff bands.',
    bold: 'Not included:',
    after: 'special anti-dumping duties, BIS/WPC/SASO lab testing fees, or inland trucking beyond the destination port city.',
  },
  script: {
    totalLabel: 'estimated landed cost ({mode}, {origin} → {dest})',
    thItem: 'Cost component',
    thRate: 'Basis / range',
    thAmount: 'Estimated USD',
    fobRow: 'FOB cargo value',
    originRow: 'Origin THC & export customs',
    freightRow: 'International freight',
    insuranceRow: 'Marine / cargo insurance',
    dutyRow: 'Estimated import duties & VAT/GST',
    destRow: 'Destination clearance & drayage',
    totalRow: 'Total landed cost',
    transitLabel: 'Indicative transit',
    daysSea: '{d} days port-to-port',
    daysAir: '{d} days airport-to-airport',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'Air Freight' },
    originShort: { shenzhen: 'Shenzhen', guangzhou: 'Guangzhou', ningbo: 'Ningbo', shanghai: 'Shanghai' },
    destShort: { india: 'India', gcc: 'GCC', africa: 'Africa', europe: 'Europe/UK', americas: 'Americas', sea: 'SE Asia' },
    note: 'Spot freight rates move weekly with carrier capacity and peak-season surcharges. Request a formal proforma quote for locked-in 14-day validity.',
    ctaQuote: 'Get a locked-in quote',
    ctaCatalog: 'Browse sourcing catalog',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    copyFailed: 'Copy failed',
  },
};

const zh: TradeCostStrings = {
  title: '外贸到岸成本与整箱/拼箱/空运估算器 — 中国采购运费与关税',
  description: '估算从深圳、广州、宁波或上海到印度、海湾国家、非洲、欧美及东南亚的到岸总成本 — 支持 20 尺整箱、40 尺高柜、LCL 拼箱与空运。',
  crumb: '到岸成本估算器',
  toolsCrumb: '工具',
  hero: {
    eyebrow: '免费贸易工具 · 1 分钟',
    title: '您的真实到岸成本是多少？',
    lede: '对比中国四大港口发往全球的 20GP、40HQ、LCL 拼箱与空运费用——含起运港杂费、海运保险、目的港预估关税与清关费。',
  },
  select: '请选择…',
  labels: {
    origin: '中国起运港',
    destination: '目的区域',
    mode: '运输方式',
    category: '产品类别（税率区间）',
    fobValue: 'FOB 货值（美元）',
    volume: '货物体积（CBM）· 空运按 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: '深圳（盐田 / 蛇口）',
    guangzhou: '广州（南沙 / 黄埔）',
    ningbo: '宁波舟山（北仑）',
    shanghai: '上海（洋山）',
  },
  destinations: {
    india: '印度（那瓦舍瓦 / 蒙德拉 / 钦奈）',
    gcc: '海湾 / 中东（杰贝阿里 / 达曼）',
    africa: '非洲（蒙巴萨 / 拉各斯 / 德班）',
    europe: '欧洲 / 英国（鹿特丹 / 汉堡 / 费利克斯托）',
    americas: '美洲（洛杉矶 / 纽约 / 桑托斯）',
    sea: '东南亚（新加坡 / 林查班）',
  },
  modes: {
    fcl20: '海运 20 尺整箱（约 28 CBM）',
    fcl40hq: '海运 40 尺高柜（约 68 CBM）',
    lcl: '海运 LCL 拼箱（按立方米）',
    air: '国际空运（按公斤/体积重）',
  },
  categories: {
    electronics: '消费电子与手机配件',
    solar: '光伏组件与磷酸铁锂储能',
    ev: '新能源车与汽车零部件',
    machinery: 'CNC 机械与工业产线',
    textiles: '纺织面料与服装',
    hardware: '建材五金与定制包装',
  },
  calculate: '估算到岸成本',
  reset: '重置',
  included: {
    label: '估算说明',
    before: '运费区间综合了当前即期海运/拼箱/空运运价指数，以及起运港报关港杂、0.35%–0.5% 货运保险、目的港换单清关与参考税率。',
    bold: '不包含：',
    after: '特殊反倾销税、BIS/WPC/SASO 等认证检测费，或目的港城市以外的内陆拖车费。',
  },
  script: {
    totalLabel: '预估到岸总成本（{mode}，{origin} → {dest}）',
    thItem: '成本项目',
    thRate: '计费基准 / 区间',
    thAmount: '预估金额（USD）',
    fobRow: 'FOB 货物价值',
    originRow: '起运港港杂与出口报关',
    freightRow: '国际干线运费',
    insuranceRow: '海运/货运保险',
    dutyRow: '预估进口关税与增值税',
    destRow: '目的港清关与提货',
    totalRow: '预估到岸总成本',
    transitLabel: '参考时效',
    daysSea: '港到港 {d} 天',
    daysAir: '机场到机场 {d} 天',
    modeShort: { fcl20: '20GP', fcl40hq: '40HQ', lcl: 'LCL 拼箱', air: '空运' },
    originShort: { shenzhen: '深圳', guangzhou: '广州', ningbo: '宁波', shanghai: '上海' },
    destShort: { india: '印度', gcc: '中东', africa: '非洲', europe: '欧美/英', americas: '美洲', sea: '东南亚' },
    note: '即期运价随船司舱位与旺季附加费每周波动。如需锁定 14 天有效报价，请提交正式询盘。',
    ctaQuote: '获取锁定报价',
    ctaCatalog: '浏览采购目录',
    copyLink: '复制链接',
    linkCopied: '链接已复制',
    copyFailed: '复制失败',
  },
};

const fr: TradeCostStrings = {
  title: 'Estimateur de coût rendu & FCL/CBM — Fret et douanes depuis la Chine',
  description:
    'Estimez le coût rendu total depuis Shenzhen, Guangzhou, Ningbo ou Shanghai vers l’Inde, le CCG, l’Afrique, l’Europe, les Amériques et l’Asie du Sud-Est.',
  crumb: 'Estimateur de coût rendu',
  toolsCrumb: 'Outils',
  hero: {
    eyebrow: 'Outil commerce gratuit · 1 minute',
    title: 'Quel est votre vrai coût rendu ?',
    lede: 'Comparez FCL 20 pieds, 40 pieds HQ, LCL au CBM et fret aérien depuis quatre ports chinois — incluant THC origine, assurance, droits estimés et dédouanement.',
  },
  select: 'Sélectionner…',
  labels: {
    origin: 'Port d’origine en Chine',
    destination: 'Région de destination',
    mode: 'Mode d’expédition',
    category: 'Catégorie de produit (tranche douanière)',
    fobValue: 'Valeur FOB de la cargaison (USD)',
    volume: 'Volume (CBM) · Aérien : 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: 'Shenzhen (Yantian / Shekou)',
    guangzhou: 'Guangzhou (Nansha / Huangpu)',
    ningbo: 'Ningbo-Zhoushan (Beilun)',
    shanghai: 'Shanghai (Yangshan)',
  },
  destinations: {
    india: 'Inde (Nhava Sheva / Mundra / Chennai)',
    gcc: 'CCG / Moyen-Orient (Jebel Ali / Dammam)',
    africa: 'Afrique (Mombasa / Lagos / Durban)',
    europe: 'Europe / Royaume-Uni (Rotterdam / Hambourg)',
    americas: 'Amériques (LA / NY / Santos)',
    sea: 'Asie du Sud-Est (Singapour / Laem Chabang)',
  },
  modes: {
    fcl20: 'Maritime 20 pieds FCL (~28 CBM)',
    fcl40hq: 'Maritime 40 pieds HQ (~68 CBM)',
    lcl: 'Maritime LCL (par CBM)',
    air: 'Fret aérien (au kg / volumétrique)',
  },
  categories: {
    electronics: 'Électronique & accessoires mobiles',
    solar: 'Solaire PV & stockage LiFePO4',
    ev: 'Véhicules électriques & pièces auto',
    machinery: 'Machines CNC & lignes industrielles',
    textiles: 'Textiles & habillement',
    hardware: 'Quincaillerie & emballage',
  },
  calculate: 'Estimer le coût rendu',
  reset: 'Réinitialiser',
  included: {
    label: 'Fonctionnement de l’estimation',
    before: 'Les fourchettes combinent les indices spot de fret, les frais portuaires d’export, l’assurance 0,35%–0,5%, les frais à destination et les tranches tarifaires indicatives.',
    bold: 'Non inclus :',
    after: 'droits antidumping spécifiques, tests BIS/WPC/SASO ou transport terrestre au-delà du port d’arrivée.',
  },
  script: {
    totalLabel: 'coût rendu estimé ({mode}, {origin} → {dest})',
    thItem: 'Poste de coût',
    thRate: 'Base / fourchette',
    thAmount: 'USD estimés',
    fobRow: 'Valeur FOB cargaison',
    originRow: 'THC origine & douane export',
    freightRow: 'Fret international',
    insuranceRow: 'Assurance maritime / fret',
    dutyRow: 'Droits d’importation & TVA estimés',
    destRow: 'Dédouanement & livraison portuaire',
    totalRow: 'Coût rendu total',
    transitLabel: 'Délai indicatif',
    daysSea: '{d} jours port à port',
    daysAir: '{d} jours aéroport à aéroport',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'Aérien' },
    originShort: { shenzhen: 'Shenzhen', guangzhou: 'Guangzhou', ningbo: 'Ningbo', shanghai: 'Shanghai' },
    destShort: { india: 'Inde', gcc: 'CCG', africa: 'Afrique', europe: 'Europe/RU', americas: 'Amériques', sea: 'Asie SE' },
    note: 'Les tarifs spot évoluent chaque semaine. Demandez un devis proforma pour bloquer un tarif pendant 14 jours.',
    ctaQuote: 'Obtenir un devis ferme',
    ctaCatalog: 'Voir le catalogue',
    copyLink: 'Copier le lien',
    linkCopied: 'Lien copié',
    copyFailed: 'Échec de la copie',
  },
};

const ar: TradeCostStrings = {
  title: 'حاسبة التكلفة الواصلة والشحن FCL/CBM — الشحن والجمارك من الصين',
  description:
    'قدّر التكلفة الواصلة الإجمالية من شنتشن أو قوانغتشو أو نينغبو أو شنغهاي إلى الهند والخليج وأفريقيا وأوروبا والأمريكتين وجنوب شرق آسيا.',
  crumb: 'حاسبة التكلفة الواصلة',
  toolsCrumb: 'الأدوات',
  hero: {
    eyebrow: 'أداة تجارية مجانية · دقيقة واحدة',
    title: 'ما هي تكلفتك الواصلة الحقيقية؟',
    lede: 'قارن حاوية 20 قدماً وحاوية 40 قدماً HQ والشحن الجزئي LCL والشحن الجوي من أربعة موانئ صينية — شاملاً رسوم المنشأ والتأمين والجمارك المقدّرة والتخليص.',
  },
  select: 'اختر…',
  labels: {
    origin: 'ميناء المنشأ في الصين',
    destination: 'منطقة الوجهة',
    mode: 'وضع الشحن',
    category: 'فئة المنتج (نطاق الرسوم)',
    fobValue: 'قيمة البضاعة FOB (دولار)',
    volume: 'الحجم (CBM) · الجوي: 1 CBM ≈ 167 كغ',
  },
  origins: {
    shenzhen: 'شنتشن (يانتيان / شيكو)',
    guangzhou: 'قوانغتشو (نانشا / هوانغبو)',
    ningbo: 'نينغبو تشوشان (بيلون)',
    shanghai: 'شنغهاي (يانغشان)',
  },
  destinations: {
    india: 'الهند (نافا شيفا / موندرا / تشيناي)',
    gcc: 'دول الخليج / الشرق الأوسط (جبل علي / الدمام)',
    africa: 'أفريقيا (مومباسا / لاغوس / ديربان)',
    europe: 'أوروبا / المملكة المتحدة (روتردام / هامبورغ)',
    americas: 'الأمريكتان (لوس أنجلوس / نيويورك / سانتوس)',
    sea: 'جنوب شرق آسيا (سنغافورة / لايم تشابانغ)',
  },
  modes: {
    fcl20: 'بحري حاوية 20 قدم FCL (~28 CBM)',
    fcl40hq: 'بحري حاوية 40 قدم HQ (~68 CBM)',
    lcl: 'بحري جزئي LCL (لكل CBM)',
    air: 'شحن جوي (بالكيلوغرام / الحجمي)',
  },
  categories: {
    electronics: 'الإلكترونيات وإكسسوارات الجوال',
    solar: 'الطاقة الشمسية وبطاريات LiFePO4',
    ev: 'المركبات الكهربائية وقطع الغيار',
    machinery: 'ماكينات CNC وخطوط الإنتاج',
    textiles: 'المنسوجات والملابس',
    hardware: 'مواد البناء والتغليف',
  },
  calculate: 'احسب التكلفة الواصلة',
  reset: 'إعادة تعيين',
  included: {
    label: 'كيف يعمل هذا التقدير',
    before: 'تجمع النطاقات بين مؤشرات الشحن الفورية ورسوم التصدير والتأمين البحري (0.35%–0.5%) وتخليص الوجهة ونطاقات التعريفة التقديرية.',
    bold: 'غير مشمول:',
    after: 'رسوم الإغراق الخاصة، أو رسوم مختبرات BIS/WPC/SASO، أو النقل البري خارج مدينة الميناء.',
  },
  script: {
    totalLabel: 'التكلفة الواصلة المقدرة ({mode}، {origin} → {dest})',
    thItem: 'بند التكلفة',
    thRate: 'الأساس / النطاق',
    thAmount: 'المبلغ المقدر (USD)',
    fobRow: 'قيمة البضاعة FOB',
    originRow: 'مناولة المنشأ والجمارك الصينية',
    freightRow: 'الشحن الدولي',
    insuranceRow: 'التأمين البحري / البضائع',
    dutyRow: 'الرسوم الجمركية والضرائب المقدرة',
    destRow: 'تخليص ميناء الوجهة والنقل',
    totalRow: 'إجمالي التكلفة الواصلة',
    transitLabel: 'مدة العبور التقريبية',
    daysSea: '{d} يوماً من ميناء إلى ميناء',
    daysAir: '{d} يوماً من مطار إلى مطار',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'جوي' },
    originShort: { shenzhen: 'شنتشن', guangzhou: 'قوانغتشو', ningbo: 'نينغبو', shanghai: 'شنغهاي' },
    destShort: { india: 'الهند', gcc: 'الخليج', africa: 'أفريقيا', europe: 'أوروبا', americas: 'الأمريكتان', sea: 'جنوب شرق آسيا' },
    note: 'تتغير أسعار الشحن الفورية أسبوعياً. اطلب عرض سعر رسمي لتثبيت السعر لمدة 14 يوماً.',
    ctaQuote: 'اطلب عرض سعر ثابت',
    ctaCatalog: 'تصفح كتالوج التوريد',
    copyLink: 'نسخ الرابط',
    linkCopied: 'تم نسخ الرابط',
    copyFailed: 'فشل النسخ',
  },
};

const es: TradeCostStrings = {
  title: 'Calculadora de costo puesto en destino y FCL/CBM — Flete y aduanas desde China',
  description:
    'Estime el costo puesto en destino desde Shenzhen, Guangzhou, Ningbo o Shanghai hacia India, CCG, África, Europa, Américas y Sudeste Asiático.',
  crumb: 'Costo puesto en destino',
  toolsCrumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramienta comercial gratis · 1 minuto',
    title: '¿Cuál es su costo real puesto en destino?',
    lede: 'Compare FCL de 20 pies, 40 pies HQ, LCL por CBM y flete aéreo desde cuatro puertos chinos, incluyendo THC en origen, seguro, aranceles estimados y despacho.',
  },
  select: 'Seleccionar…',
  labels: {
    origin: 'Puerto de origen en China',
    destination: 'Región de destino',
    mode: 'Modo de envío',
    category: 'Categoría de producto (banda arancelaria)',
    fobValue: 'Valor FOB de la carga (USD)',
    volume: 'Volumen (CBM) · Aéreo: 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: 'Shenzhen (Yantian / Shekou)',
    guangzhou: 'Guangzhou (Nansha / Huangpu)',
    ningbo: 'Ningbo-Zhoushan (Beilun)',
    shanghai: 'Shanghai (Yangshan)',
  },
  destinations: {
    india: 'India (Nhava Sheva / Mundra / Chennai)',
    gcc: 'CCG / Oriente Medio (Jebel Ali / Dammam)',
    africa: 'África (Mombasa / Lagos / Durban)',
    europe: 'Europa / Reino Unido (Rotterdam / Hamburgo)',
    americas: 'Américas (LA / NY / Santos)',
    sea: 'Sudeste Asiático (Singapur / Laem Chabang)',
  },
  modes: {
    fcl20: 'Marítimo 20ft FCL (~28 CBM)',
    fcl40hq: 'Marítimo 40ft HQ (~68 CBM)',
    lcl: 'Marítimo LCL (por CBM)',
    air: 'Flete aéreo (por kg / volumétrico)',
  },
  categories: {
    electronics: 'Electrónica y accesorios móviles',
    solar: 'Solar FV y baterías LiFePO4',
    ev: 'Vehículos eléctricos y autopartes',
    machinery: 'Maquinaria CNC y líneas industriales',
    textiles: 'Textiles y confección',
    hardware: 'Ferretería de construcción y empaque',
  },
  calculate: 'Estimar costo puesto',
  reset: 'Restablecer',
  included: {
    label: 'Cómo funciona esta estimación',
    before: 'Los rangos combinan índices spot de flete, gastos de exportación en origen, seguro marítimo (0.35%–0.5%), despacho en destino y bandas arancelarias.',
    bold: 'No incluido:',
    after: 'derechos antidumping especiales, pruebas BIS/WPC/SASO ni transporte terrestre fuera de la ciudad portuaria.',
  },
  script: {
    totalLabel: 'costo puesto estimado ({mode}, {origin} → {dest})',
    thItem: 'Concepto',
    thRate: 'Base / rango',
    thAmount: 'USD estimados',
    fobRow: 'Valor FOB de carga',
    originRow: 'THC origen y aduana export',
    freightRow: 'Flete internacional',
    insuranceRow: 'Seguro marítimo / carga',
    dutyRow: 'Aranceles e IVA/GST estimados',
    destRow: 'Despacho y acarreo en destino',
    totalRow: 'Costo puesto total',
    transitLabel: 'Tránsito indicativo',
    daysSea: '{d} días puerto a puerto',
    daysAir: '{d} días aeropuerto a aeropuerto',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'Aéreo' },
    originShort: { shenzhen: 'Shenzhen', guangzhou: 'Guangzhou', ningbo: 'Ningbo', shanghai: 'Shanghai' },
    destShort: { india: 'India', gcc: 'CCG', africa: 'África', europe: 'Europa/RU', americas: 'Américas', sea: 'Sudeste Asia' },
    note: 'Las tarifas spot varían cada semana. Solicite una cotización proforma para fijar tarifa por 14 días.',
    ctaQuote: 'Solicitar cotización fija',
    ctaCatalog: 'Ver catálogo de compras',
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace copiado',
    copyFailed: 'Error al copiar',
  },
};

const de: TradeCostStrings = {
  title: 'Landed-Cost- & FCL/CBM-Rechner — Seefracht, Luftfracht & Zoll aus China',
  description:
    'Schätzen Sie die gesamten Landed Costs ab Shenzhen, Guangzhou, Ningbo oder Shanghai nach Indien, GCC, Afrika, Europa, Amerika & Südostasien.',
  crumb: 'Landed-Cost-Rechner',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Kostenloses Handelstool · 1 Minute',
    title: 'Wie hoch sind Ihre echten Landed Costs?',
    lede: 'Vergleichen Sie 20ft FCL, 40ft HQ, LCL pro CBM und Luftfracht ab vier chinesischen Häfen — inklusive Ursprungs-THC, Versicherung, geschätzter Zölle und Verzollung.',
  },
  select: 'Auswählen…',
  labels: {
    origin: 'Chinesischer Abgangshafen',
    destination: 'Zielregion',
    mode: 'Versandart',
    category: 'Produktkategorie (Zollband)',
    fobValue: 'FOB-Warenwert (USD)',
    volume: 'Volumen (CBM) · Luft: 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: 'Shenzhen (Yantian / Shekou)',
    guangzhou: 'Guangzhou (Nansha / Huangpu)',
    ningbo: 'Ningbo-Zhoushan (Beilun)',
    shanghai: 'Shanghai (Yangshan)',
  },
  destinations: {
    india: 'Indien (Nhava Sheva / Mundra / Chennai)',
    gcc: 'GCC / Naher Osten (Jebel Ali / Dammam)',
    africa: 'Afrika (Mombasa / Lagos / Durban)',
    europe: 'Europa / UK (Rotterdam / Hamburg)',
    americas: 'Amerika (LA / NY / Santos)',
    sea: 'Südostasien (Singapur / Laem Chabang)',
  },
  modes: {
    fcl20: 'See 20ft FCL (~28 CBM)',
    fcl40hq: 'See 40ft HQ (~68 CBM)',
    lcl: 'See LCL (pro CBM)',
    air: 'Luftfracht (pro kg / Volumengewicht)',
  },
  categories: {
    electronics: 'Elektronik & Mobilzubehör',
    solar: 'Solar-PV & LiFePO4-Speicher',
    ev: 'EV- & Automobilkomponenten',
    machinery: 'CNC-Maschinen & Industrieanlagen',
    textiles: 'Textilien & Bekleidung',
    hardware: 'Baubeschläge & Verpackung',
  },
  calculate: 'Landed Costs berechnen',
  reset: 'Zurücksetzen',
  included: {
    label: 'Berechnungsgrundlage',
    before: 'Die Spannen kombinieren aktuelle Spot-Frachtindizes mit Exportzollabfertigung, 0,35%–0,5% Transportversicherung, Zielhafen-THC und indikativen Zollsätzen.',
    bold: 'Nicht enthalten:',
    after: 'spezielle Antidumpingzölle, BIS/WPC/SASO-Prüfgebühren oder Nachlauf über die Zielhafenstadt hinaus.',
  },
  script: {
    totalLabel: 'geschätzte Landed Costs ({mode}, {origin} → {dest})',
    thItem: 'Kostenposition',
    thRate: 'Basis / Spanne',
    thAmount: 'Geschätzte USD',
    fobRow: 'FOB-Warenwert',
    originRow: 'Ursprungs-THC & Exportzoll',
    freightRow: 'Internationale Fracht',
    insuranceRow: 'Transportversicherung',
    dutyRow: 'Geschätzte Einfuhrzölle & MwSt.',
    destRow: 'Zielhafen-Abfertigung & Vorlauf',
    totalRow: 'Gesamte Landed Costs',
    transitLabel: 'Ungefähre Laufzeit',
    daysSea: '{d} Tage Hafen-zu-Hafen',
    daysAir: '{d} Tage Flughafen-zu-Flughafen',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'Luftfracht' },
    originShort: { shenzhen: 'Shenzhen', guangzhou: 'Guangzhou', ningbo: 'Ningbo', shanghai: 'Shanghai' },
    destShort: { india: 'Indien', gcc: 'GCC', africa: 'Afrika', europe: 'Europa/UK', americas: 'Amerika', sea: 'SO-Asien' },
    note: 'Spotraten ändern sich wöchentlich. Fordern Sie ein verbindliches Proforma-Angebot mit 14 Tagen Preisbindung an.',
    ctaQuote: 'Verbindliches Angebot anfordern',
    ctaCatalog: 'Sourcing-Katalog ansehen',
    copyLink: 'Link kopieren',
    linkCopied: 'Link kopiert',
    copyFailed: 'Kopieren fehlgeschlagen',
  },
};

const ja: TradeCostStrings = {
  title: '貿易着地コスト・FCL/CBM 見積ツール — 中国発の海上・航空運賃と関税',
  description:
    '深セン・広州・寧波・上海からインド、中東GCC、アフリカ、欧州、米州、東南アジアへの総着地コストを20ft FCL・40ft HQ・LCL CBM・航空便で試算します。',
  crumb: '着地コスト見積ツール',
  toolsCrumb: 'ツール',
  hero: {
    eyebrow: '無料貿易ツール · 1分',
    title: '実際の着地コストはいくらか？',
    lede: '中国主要4港からの20ft FCL、40ft HQ、LCL（CBM単位）、航空貨物を比較。輸出地THC、海上保険、輸入関税目安、通関費用まで含めて算出します。',
  },
  select: '選択してください…',
  labels: {
    origin: '中国積出港',
    destination: '仕向地エリア',
    mode: '輸送モード',
    category: '製品カテゴリー（関税帯）',
    fobValue: 'FOB 貨物価額（USD）',
    volume: '容積（CBM）· 航空：1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: '深セン（塩田 / 蛇口）',
    guangzhou: '広州（南沙 / 黄埔）',
    ningbo: '寧波舟山（北侖）',
    shanghai: '上海（洋山）',
  },
  destinations: {
    india: 'インド（ナバシェバ / ムンドラ / チェンナイ）',
    gcc: 'GCC・中東（ジュベル・アリ / ダンマーム）',
    africa: 'アフリカ（モンバサ / ラゴス / ダーバン）',
    europe: '欧州・英国（ロッテルダム / ハンブルク）',
    americas: '米州（ロサンゼルス / NY / サントス）',
    sea: '東南アジア（シンガポール / レムチャバン）',
  },
  modes: {
    fcl20: '海上 20ft FCL（約28 CBM）',
    fcl40hq: '海上 40ft HQ（約68 CBM）',
    lcl: '海上 LCL 混載（CBM単位）',
    air: '航空貨物（kg / 容積重量）',
  },
  categories: {
    electronics: '電子機器・モバイルアクセサリー',
    solar: '太陽光パネル・LiFePO4蓄電池',
    ev: 'EV・自動車部品',
    machinery: 'CNC機械・産業設備',
    textiles: '繊維・アパレル',
    hardware: '建築金物・OEM梱包材',
  },
  calculate: '着地コストを試算',
  reset: 'リセット',
  included: {
    label: '試算の前提',
    before: '現在のスポット運賃指数に、輸出地通関・THC、貨物保険（0.35%〜0.5%）、輸入地通関、参考関税率を組み合わせています。',
    bold: '含まれない費用：',
    after: 'アンチダンピング税、BIS/WPC/SASO認証試験費、揚地港都市以遠の国内陸上輸送費。',
  },
  script: {
    totalLabel: '推定着地コスト（{mode}、{origin} → {dest}）',
    thItem: '費用項目',
    thRate: '算定基準 / 目安',
    thAmount: '推定額（USD）',
    fobRow: 'FOB 貨物価額',
    originRow: '輸出地THC・輸出通関',
    freightRow: '国際輸送運賃',
    insuranceRow: '海上・貨物保険',
    dutyRow: '推定輸入関税・付加価値税',
    destRow: '輸入地通関・ドレージ',
    totalRow: '推定総着地コスト',
    transitLabel: '輸送日数目安',
    daysSea: '港〜港 {d} 日',
    daysAir: '空港〜空港 {d} 日',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: '航空便' },
    originShort: { shenzhen: '深セン', guangzhou: '広州', ningbo: '寧波', shanghai: '上海' },
    destShort: { india: 'インド', gcc: '中東GCC', africa: 'アフリカ', europe: '欧州/英', americas: '米州', sea: '東南アジア' },
    note: 'スポット運賃は毎週変動します。14日間有効の確定見積書をご希望の場合はお問い合わせください。',
    ctaQuote: '確定見積を依頼',
    ctaCatalog: '調達カタログを見る',
    copyLink: 'リンクをコピー',
    linkCopied: 'コピーしました',
    copyFailed: 'コピー失敗',
  },
};

const pt: TradeCostStrings = {
  title: 'Estimador de Custo Landed & FCL/CBM — Frete e Impostos da China',
  description:
    'Estime o custo landed total de Shenzhen, Guangzhou, Ningbo ou Shanghai para Índia, GCC, África, Europa, Américas e Sudeste Asiático.',
  crumb: 'Estimador de custo landed',
  toolsCrumb: 'Ferramentas',
  hero: {
    eyebrow: 'Ferramenta comercial gratuita · 1 minuto',
    title: 'Qual é o seu custo landed real?',
    lede: 'Compare FCL 20 pés, 40 pés HQ, LCL por CBM e frete aéreo a partir de quatro portos chineses — incluindo THC na origem, seguro, impostos estimados e desembaraço.',
  },
  select: 'Selecionar…',
  labels: {
    origin: 'Porto de origem na China',
    destination: 'Região de destino',
    mode: 'Modalidade de envio',
    category: 'Categoria do produto (faixa tributária)',
    fobValue: 'Valor FOB da carga (USD)',
    volume: 'Volume (CBM) · Aéreo: 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: 'Shenzhen (Yantian / Shekou)',
    guangzhou: 'Guangzhou (Nansha / Huangpu)',
    ningbo: 'Ningbo-Zhoushan (Beilun)',
    shanghai: 'Shanghai (Yangshan)',
  },
  destinations: {
    india: 'Índia (Nhava Sheva / Mundra / Chennai)',
    gcc: 'GCC / Oriente Médio (Jebel Ali / Dammam)',
    africa: 'África (Mombasa / Lagos / Durban)',
    europe: 'Europa / Reino Unido (Roterdã / Hamburgo)',
    americas: 'Américas (LA / NY / Santos)',
    sea: 'Sudeste Asiático (Singapura / Laem Chabang)',
  },
  modes: {
    fcl20: 'Marítimo 20ft FCL (~28 CBM)',
    fcl40hq: 'Marítimo 40ft HQ (~68 CBM)',
    lcl: 'Marítimo LCL (por CBM)',
    air: 'Frete aéreo (por kg / volumétrico)',
  },
  categories: {
    electronics: 'Eletrônicos e acessórios móveis',
    solar: 'Solar FV e armazenamento LiFePO4',
    ev: 'Veículos elétricos e autopeças',
    machinery: 'Máquinas CNC e linhas industriais',
    textiles: 'Têxteis e vestuário',
    hardware: 'Ferragens de construção e embalagem',
  },
  calculate: 'Estimar custo landed',
  reset: 'Redefinir',
  included: {
    label: 'Como funciona esta estimativa',
    before: 'As faixas combinam índices spot de frete, despesas de exportação na origem, seguro marítimo (0,35%–0,5%), desembaraço no destino e alíquotas indicativas.',
    bold: 'Não incluído:',
    after: 'direitos antidumping específicos, testes BIS/WPC/SASO ou transporte rodoviário além da cidade portuária.',
  },
  script: {
    totalLabel: 'custo landed estimado ({mode}, {origin} → {dest})',
    thItem: 'Componente de custo',
    thRate: 'Base / faixa',
    thAmount: 'USD estimados',
    fobRow: 'Valor FOB da carga',
    originRow: 'THC origem e aduana export',
    freightRow: 'Frete internacional',
    insuranceRow: 'Seguro marítimo / carga',
    dutyRow: 'Impostos de importação estimados',
    destRow: 'Desembaraço e entrega portuária',
    totalRow: 'Custo landed total',
    transitLabel: 'Trânsito indicativo',
    daysSea: '{d} dias porto a porto',
    daysAir: '{d} dias aeroporto a aeroporto',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'Aéreo' },
    originShort: { shenzhen: 'Shenzhen', guangzhou: 'Guangzhou', ningbo: 'Ningbo', shanghai: 'Shanghai' },
    destShort: { india: 'Índia', gcc: 'GCC', africa: 'África', europe: 'Europa/RU', americas: 'Américas', sea: 'Sudeste Ásia' },
    note: 'As tarifas spot variam semanalmente. Solicite uma cotação proforma para travar a tarifa por 14 dias.',
    ctaQuote: 'Solicitar cotação fixa',
    ctaCatalog: 'Explorar catálogo',
    copyLink: 'Copiar link',
    linkCopied: 'Link copiado',
    copyFailed: 'Falha ao copiar',
  },
};

const hi: TradeCostStrings = {
  title: 'ट्रेड लैंडेड कॉस्ट और FCL/CBM अनुमानक — चीन सोर्सिंग भाड़ा और शुल्क',
  description:
    'शेन्ज़ेन, ग्वांगझू, निंगबो या शंघाई से भारत, GCC, अफ्रीका, यूरोप, अमेरिका और दक्षिण-पूर्व एशिया के लिए 20ft FCL, 40ft HQ, LCL CBM और एयर फ्रेट की कुल लैंडेड लागत का अनुमान लगाएं।',
  crumb: 'लैंडेड कॉस्ट अनुमानक',
  toolsCrumb: 'टूल्स',
  hero: {
    eyebrow: 'मुफ़्त व्यापार टूल · 1 मिनट',
    title: 'आपकी असली लैंडेड लागत क्या होगी?',
    lede: 'चार चीनी बंदरगाहों से 20ft FCL, 40ft HQ, LCL (प्रति CBM) और एयर फ्रेट की तुलना करें — ओरिजिन THC, समुद्री बीमा, अनुमानित आयात शुल्क और पोर्ट क्लीयरेंस सहित।',
  },
  select: 'चुनें…',
  labels: {
    origin: 'चीन का ओरिजिन पोर्ट',
    destination: 'गंतव्य क्षेत्र',
    mode: 'शिपिंग मोड',
    category: 'उत्पाद श्रेणी (शुल्क बैंड)',
    fobValue: 'FOB कार्गो मूल्य (USD)',
    volume: 'वॉल्यूम (CBM) · एयर: 1 CBM ≈ 167 kg',
  },
  origins: {
    shenzhen: 'शेन्ज़ेन (यंटियान / शेकोउ)',
    guangzhou: 'ग्वांगझू (नानशा / हुआंगपू)',
    ningbo: 'निंगबो-झौशान (बेलुन)',
    shanghai: 'शंघाई (यांगशान)',
  },
  destinations: {
    india: 'भारत (न्हावा शेवा / मुंद्रा / चेन्नई)',
    gcc: 'GCC / मध्य पूर्व (जेबेल अली / दम्माम)',
    africa: 'अफ्रीका (मोम्बासा / लागोस / डरबन)',
    europe: 'यूरोप / यूके (रॉटरडैम / हैम्बर्ग)',
    americas: 'अमेरिका (LA / NY / सैंटोस)',
    sea: 'दक्षिण-पूर्व एशिया (सिंगापुर / लेम चाबांग)',
  },
  modes: {
    fcl20: 'समुद्री 20ft FCL (~28 CBM)',
    fcl40hq: 'समुद्री 40ft HQ (~68 CBM)',
    lcl: 'समुद्री LCL (प्रति CBM)',
    air: 'एयर फ्रेट (प्रति kg / वॉल्यूमेट्रिक)',
  },
  categories: {
    electronics: 'इलेक्ट्रॉनिक्स और मोबाइल एक्सेसरीज़',
    solar: 'सोलर PV और LiFePO4 बैटरी',
    ev: 'EV और ऑटोमोबाइल पार्ट्स',
    machinery: 'CNC मशीनरी और औद्योगिक लाइनें',
    textiles: 'कपड़ा और परिधान',
    hardware: 'निर्माण हार्डवेयर और पैकेजिंग',
  },
  calculate: 'लैंडेड लागत निकालें',
  reset: 'रीसेट',
  included: {
    label: 'यह अनुमान कैसे काम करता है',
    before: 'यह रेंज वर्तमान स्पॉट फ्रेट इंडेक्स, ओरिजिन एक्सपोर्ट कस्टम्स, 0.35%–0.5% समुद्री बीमा, डेस्टिनेशन पोर्ट THC और सांकेतिक टैरिफ बैंड को जोड़ती है।',
    bold: 'शामिल नहीं:',
    after: 'विशेष एंटी-डंपिंग शुल्क, BIS/WPC/SASO लैब टेस्टिंग शुल्क, या पोर्ट शहर से आगे की अंतर्देशीय ढुलाई।',
  },
  script: {
    totalLabel: 'अनुमानित लैंडेड लागत ({mode}, {origin} → {dest})',
    thItem: 'लागत घटक',
    thRate: 'आधार / रेंज',
    thAmount: 'अनुमानित USD',
    fobRow: 'FOB कार्गो मूल्य',
    originRow: 'ओरिजिन THC और एक्सपोर्ट कस्टम्स',
    freightRow: 'अंतर्राष्ट्रीय माल भाड़ा',
    insuranceRow: 'समुद्री / कार्गो बीमा',
    dutyRow: 'अनुमानित आयात शुल्क और GST/VAT',
    destRow: 'गंतव्य क्लीयरेंस और ड्रेयेज',
    totalRow: 'कुल लैंडेड लागत',
    transitLabel: 'संकेतक ट्रांज़िट समय',
    daysSea: '{d} दिन पोर्ट-टू-पोर्ट',
    daysAir: '{d} दिन एयरपोर्ट-टू-एयरपोर्ट',
    modeShort: { fcl20: '20ft FCL', fcl40hq: '40ft HQ', lcl: 'LCL CBM', air: 'एयर फ्रेट' },
    originShort: { shenzhen: 'शेन्ज़ेन', guangzhou: 'ग्वांगझू', ningbo: 'निंगबो', shanghai: 'शंघाई' },
    destShort: { india: 'भारत', gcc: 'GCC', africa: 'अफ्रीका', europe: 'यूरोप/UK', americas: 'अमेरिका', sea: 'SE एशिया' },
    note: 'स्पॉट फ्रेट दरें हर सप्ताह बदलती हैं। 14-दिन की पक्की दर लॉक करने के लिए औपचारिक प्रोफॉर्मा कोट मांगें।',
    ctaQuote: 'पक्का कोट प्राप्त करें',
    ctaCatalog: 'सोर्सिंग कैटलॉग देखें',
    copyLink: 'लिंक कॉपी करें',
    linkCopied: 'लिंक कॉपी हो गया',
    copyFailed: 'कॉपी विफल',
  },
};

export const TRADE_COST_STRINGS: Record<Locale, TradeCostStrings> = {
  en,
  zh,
  fr,
  ar,
  es,
  de,
  ja,
  pt,
  hi,
};
