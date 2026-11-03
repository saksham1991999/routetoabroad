/**
 * Cost-calculator strings. `script` is serialized onto the page (data-i18n)
 * and read by the calculator's client script; the rest renders at build time.
 * HTML in a few strings (<strong>) is deliberate and trusted — all values here
 * are source constants, never user input.
 */
import type { Locale } from '../../lib/i18n';

export interface CostStrings {
  title: string;
  description: string;
  crumb: string;
  toolsCrumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  select: string;
  labels: { city: string; programme: string; lifestyle: string; years: string };
  cities: { beijing: string; shanghai: string; guangzhou: string; hangzhou: string; tier2: string };
  programmes: { bachelor_eng: string; bachelor_bus: string; mbbs: string; master: string; phd: string; language: string };
  lifestyles: { frugal: string; moderate: string; comfortable: string };
  lengths: { y1: string; y3: string; y4: string; y5: string };
  calculate: string;
  reset: string;
  included: { label: string };
  script: {
    /** "{years}" is replaced with yearsOne / yearsMany. */
    totalLabel: string;
    yearsOne: string;
    yearsMany: string;
    thItem: string;
    thPerYear: string;
    /** "{years}" replaced with the formatted length. */
    thOver: string;
    tuition: string;
    living: string;
    total: string;
    sep: string;
    programmeShort: { bachelor_eng: string; bachelor_bus: string; mbbs: string; master: string; phd: string; language: string };
    cityShort: { beijing: string; shanghai: string; guangzhou: string; hangzhou: string; tier2: string };
    lifestyleShort: { frugal: string; moderate: string; comfortable: string };
    oneTime: string;
    mbbsNote: string;
    ctaScholarship: string;
    ctaFees: string;
    copyLink: string;
    linkCopied: string;
    copyFailed: string;
  };
}

const en: CostStrings = {
  title: 'Cost of Studying in China Calculator — Tuition & Living Estimates',
  description:
    'Estimate the real cost of studying in China: tuition by programme, living costs by city and lifestyle, yearly and total in USD. Transparent ranges, no email required.',
  crumb: 'Cost calculator',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Free tool · 1 minute',
    title: 'What will it actually cost?',
    lede: 'Fees are quoted per university because a single number across a country would be a guess. This calculator gives honest ranges — and shows the maths.',
  },
  select: 'Select…',
  labels: { city: 'City', programme: 'Programme', lifestyle: 'Lifestyle', years: 'Programme length' },
  cities: { beijing: 'Beijing', shanghai: 'Shanghai', guangzhou: 'Guangzhou', hangzhou: 'Hangzhou', tier2: 'Second-tier city' },
  programmes: {
    bachelor_eng: "Bachelor's — Engineering / CS",
    bachelor_bus: "Bachelor's — Business / Economics",
    mbbs: 'MBBS (MOE-listed)',
    master: "Master's",
    phd: 'PhD (unfunded)',
    language: 'Chinese language (HSK year)',
  },
  lifestyles: {
    frugal: 'Frugal (canteens, dorm, bike)',
    moderate: 'Moderate (eating out sometimes)',
    comfortable: 'Comfortable (own room, travel)',
  },
  lengths: { y1: '1 year', y3: '3 years', y4: '4 years', y5: '5–5.5 years (MBBS)' },
  calculate: 'Calculate',
  reset: 'Reset',
  included: { label: "What's included" },
  script: {
    totalLabel: 'estimated total, {years}, self-funded',
    yearsOne: '{n} year',
    yearsMany: '{n} years',
    thItem: 'Item',
    thPerYear: 'Per year',
    thOver: 'Over {years}',
    tuition: 'Tuition',
    living: 'Living &amp; accommodation',
    total: 'Total',
    sep: ', ',
    programmeShort: {
      bachelor_eng: 'bachelor / eng',
      bachelor_bus: 'bachelor / bus',
      mbbs: 'mbbs',
      master: 'master',
      phd: 'phd',
      language: 'language',
    },
    cityShort: { beijing: 'beijing', shanghai: 'shanghai', guangzhou: 'guangzhou', hangzhou: 'hangzhou', tier2: 'tier2' },
    lifestyleShort: { frugal: 'frugal', moderate: 'moderate', comfortable: 'comfortable' },
    oneTime:
      'Plus one-time costs: flights, visa, insurance and setup (~US$500–1,000 in year one). Figures are estimates from current partner-fee tables — your actual offer letter is the real number.',
    mbbsNote:
      '<strong>MBBS runs 5.5–6 years including internship</strong> — scale the totals above to the full programme length, not just the years you selected.',
    ctaScholarship: 'See if scholarships cut this',
    ctaFees: 'Get exact university fees',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    copyFailed: 'Copy failed',
  },
};

// The "What's included" paragraph carries inline markup around a bold phrase,
// so it is stored as three parts and assembled in the component.
export interface CostIncludedParts {
  before: string;
  bold: string;
  after: string;
}
const includedEn: CostIncludedParts = {
  before:
    'Tuition ranges come from our current partner-fee tables; living ranges blend dorm rent, food, transport and personal spend at each lifestyle level.',
  bold: 'Not included:',
  after:
    'flights, visa fees, insurance (~US$300–600/yr) and one-time setup (~US$200–400). CSC scholars: tuition and dorm drop to zero and a stipend arrives monthly.',
};

const zh: CostStrings = {
  title: '中国留学费用计算器 — 学费与生活费估算',
  description: '估算在中国留学的真实费用：按专业的学费、按城市和生活方式的生活费，年度与总额均以美元计。区间透明，无需邮箱。',
  crumb: '费用计算器',
  toolsCrumb: '工具',
  hero: {
    eyebrow: '免费工具 · 1 分钟',
    title: '到底要花多少钱？',
    lede: '费用按大学分别报价，因为全国统一的数字只会是猜测。这个计算器给出诚实的区间——并展示计算过程。',
  },
  select: '请选择…',
  labels: { city: '城市', programme: '专业', lifestyle: '生活方式', years: '学制' },
  cities: { beijing: '北京', shanghai: '上海', guangzhou: '广州', hangzhou: '杭州', tier2: '二线城市' },
  programmes: {
    bachelor_eng: '本科 — 工程 / 计算机',
    bachelor_bus: '本科 — 商科 / 经济',
    mbbs: 'MBBS 临床医学（教育部认可）',
    master: '硕士',
    phd: '博士（无资助）',
    language: '中文语言课程（HSK 学年）',
  },
  lifestyles: {
    frugal: '节俭（食堂、宿舍、自行车）',
    moderate: '适中（偶尔外出就餐）',
    comfortable: '舒适（单间、旅行）',
  },
  lengths: { y1: '1 年', y3: '3 年', y4: '4 年', y5: '5–5.5 年（MBBS）' },
  calculate: '计算',
  reset: '重置',
  included: { label: '包含哪些费用' },
  script: {
    totalLabel: '预计总费用，{years}，自费',
    yearsOne: '{n} 年',
    yearsMany: '{n} 年',
    thItem: '项目',
    thPerYear: '每年',
    thOver: '{years}合计',
    tuition: '学费',
    living: '生活与住宿',
    total: '合计',
    sep: '，',
    programmeShort: {
      bachelor_eng: '本科 / 工程',
      bachelor_bus: '本科 / 商科',
      mbbs: 'MBBS',
      master: '硕士',
      phd: '博士',
      language: '语言',
    },
    cityShort: { beijing: '北京', shanghai: '上海', guangzhou: '广州', hangzhou: '杭州', tier2: '二线城市' },
    lifestyleShort: { frugal: '节俭', moderate: '适中', comfortable: '舒适' },
    oneTime: '另有一次性费用：机票、签证、保险和安顿（第一年约 500–1,000 美元）。数字为根据当前合作院校收费表得出的估算——以您的录取通知书为准。',
    mbbsNote: '<strong>MBBS 含实习共需 5.5–6 年</strong>——请按完整学制换算上面的总额，而不仅是您选择的年数。',
    ctaScholarship: '看看奖学金能省多少',
    ctaFees: '获取准确的大学费用',
    copyLink: '复制链接',
    linkCopied: '链接已复制',
    copyFailed: '复制失败',
  },
};
const includedZh: CostIncludedParts = {
  before: '学费区间来自我们当前的合作院校收费表；生活费区间综合了各生活水平下的宿舍租金、饮食、交通和个人开销。',
  bold: '不包含：',
  after: '机票、签证费、保险（约 300–600 美元/年）和一次性安顿（约 200–400 美元）。CSC 奖学金获得者：学费和宿舍费为零，每月发放生活津贴。',
};

const fr: CostStrings = {
  title: 'Calculateur du coût des études en Chine — frais de scolarité et de vie',
  description:
    'Estimez le coût réel des études en Chine : frais de scolarité par programme, coût de la vie par ville et par mode de vie, annuel et total en USD. Fourchettes transparentes, sans e-mail.',
  crumb: 'Calculateur de coûts',
  toolsCrumb: 'Outils',
  hero: {
    eyebrow: 'Outil gratuit · 1 minute',
    title: 'Combien cela coûtera-t-il vraiment ?',
    lede: 'Les frais sont indiqués par université, car un chiffre unique pour tout un pays ne serait qu’une supposition. Ce calculateur donne des fourchettes honnêtes — et montre le calcul.',
  },
  select: 'Sélectionner…',
  labels: { city: 'Ville', programme: 'Programme', lifestyle: 'Mode de vie', years: 'Durée du programme' },
  cities: { beijing: 'Pékin', shanghai: 'Shanghai', guangzhou: 'Canton', hangzhou: 'Hangzhou', tier2: 'Ville de second rang' },
  programmes: {
    bachelor_eng: 'Licence — Ingénierie / Informatique',
    bachelor_bus: 'Licence — Gestion / Économie',
    mbbs: 'MBBS (reconnu par le MOE)',
    master: 'Master',
    phd: 'Doctorat (non financé)',
    language: 'Langue chinoise (année HSK)',
  },
  lifestyles: {
    frugal: 'Économe (cantines, résidence, vélo)',
    moderate: 'Modéré (restaurant de temps en temps)',
    comfortable: 'Confortable (chambre seule, voyages)',
  },
  lengths: { y1: '1 an', y3: '3 ans', y4: '4 ans', y5: '5–5,5 ans (MBBS)' },
  calculate: 'Calculer',
  reset: 'Réinitialiser',
  included: { label: 'Ce qui est inclus' },
  script: {
    totalLabel: 'total estimé, {years}, autofinancé',
    yearsOne: '{n} an',
    yearsMany: '{n} ans',
    thItem: 'Poste',
    thPerYear: 'Par an',
    thOver: 'Sur {years}',
    tuition: 'Frais de scolarité',
    living: 'Vie quotidienne &amp; logement',
    total: 'Total',
    sep: ', ',
    programmeShort: {
      bachelor_eng: 'licence / ingénierie',
      bachelor_bus: 'licence / gestion',
      mbbs: 'MBBS',
      master: 'master',
      phd: 'doctorat',
      language: 'langue',
    },
    cityShort: { beijing: 'Pékin', shanghai: 'Shanghai', guangzhou: 'Canton', hangzhou: 'Hangzhou', tier2: 'ville de second rang' },
    lifestyleShort: { frugal: 'économe', moderate: 'modéré', comfortable: 'confortable' },
    oneTime:
      'À ajouter : coûts ponctuels — billets d’avion, visa, assurance et installation (~500–1 000 USD la première année). Ces chiffres sont des estimations issues des grilles tarifaires actuelles de nos partenaires — votre lettre d’admission fait foi.',
    mbbsNote:
      '<strong>Le MBBS dure 5,5 à 6 ans, stage compris</strong> — ajustez les totaux ci-dessus à la durée complète du programme, pas seulement aux années sélectionnées.',
    ctaScholarship: 'Voir si une bourse réduit ce montant',
    ctaFees: 'Obtenir les frais exacts de l’université',
    copyLink: 'Copier le lien',
    linkCopied: 'Lien copié',
    copyFailed: 'Échec de la copie',
  },
};
const includedFr: CostIncludedParts = {
  before:
    'Les fourchettes de frais de scolarité proviennent de nos grilles tarifaires partenaires actuelles ; les fourchettes de vie combinent loyer en résidence, repas, transports et dépenses personnelles pour chaque mode de vie.',
  bold: 'Non inclus :',
  after:
    'billets d’avion, frais de visa, assurance (~300–600 USD/an) et installation ponctuelle (~200–400 USD). Boursiers CSC : frais de scolarité et résidence gratuits, avec une allocation mensuelle.',
};

const ar: CostStrings = {
  title: 'حاسبة تكلفة الدراسة في الصين — تقدير الرسوم والمعيشة',
  description:
    'قدّر التكلفة الحقيقية للدراسة في الصين: الرسوم الدراسية حسب البرنامج وتكاليف المعيشة حسب المدينة ونمط الحياة، سنوياً وإجمالاً بالدولار الأمريكي. نطاقات شفافة دون الحاجة إلى بريد إلكتروني.',
  crumb: 'حاسبة التكاليف',
  toolsCrumb: 'الأدوات',
  hero: {
    eyebrow: 'أداة مجانية · دقيقة واحدة',
    title: 'كم ستكلّف فعلاً؟',
    lede: 'تُحدَّد الرسوم لكل جامعة على حدة لأن رقماً واحداً لبلد بأكمله سيكون مجرد تخمين. تعطيك هذه الحاسبة نطاقات صادقة — وتُظهر طريقة الحساب.',
  },
  select: 'اختر…',
  labels: { city: 'المدينة', programme: 'البرنامج', lifestyle: 'نمط الحياة', years: 'مدة البرنامج' },
  cities: { beijing: 'بكين', shanghai: 'شنغهاي', guangzhou: 'قوانغتشو', hangzhou: 'هانغتشو', tier2: 'مدينة من الدرجة الثانية' },
  programmes: {
    bachelor_eng: 'بكالوريوس — الهندسة / علوم الحاسوب',
    bachelor_bus: 'بكالوريوس — إدارة الأعمال / الاقتصاد',
    mbbs: 'MBBS (معتمد من وزارة التعليم)',
    master: 'ماجستير',
    phd: 'دكتوراه (بدون تمويل)',
    language: 'اللغة الصينية (سنة HSK)',
  },
  lifestyles: {
    frugal: 'مقتصد (مطاعم الجامعة، سكن، دراجة)',
    moderate: 'معتدل (الأكل خارجاً أحياناً)',
    comfortable: 'مريح (غرفة خاصة، سفر)',
  },
  lengths: { y1: 'سنة واحدة', y3: '3 سنوات', y4: '4 سنوات', y5: '5–5.5 سنوات (MBBS)' },
  calculate: 'احسب',
  reset: 'إعادة تعيين',
  included: { label: 'ما الذي يشمله' },
  script: {
    totalLabel: 'الإجمالي المقدَّر، {years}، تمويل ذاتي',
    yearsOne: 'سنة واحدة',
    yearsMany: '{n} سنوات',
    thItem: 'البند',
    thPerYear: 'سنوياً',
    thOver: 'على مدى {years}',
    tuition: 'الرسوم الدراسية',
    living: 'المعيشة والسكن',
    total: 'الإجمالي',
    sep: '، ',
    programmeShort: {
      bachelor_eng: 'بكالوريوس / هندسة',
      bachelor_bus: 'بكالوريوس / أعمال',
      mbbs: 'MBBS',
      master: 'ماجستير',
      phd: 'دكتوراه',
      language: 'لغة',
    },
    cityShort: { beijing: 'بكين', shanghai: 'شنغهاي', guangzhou: 'قوانغتشو', hangzhou: 'هانغتشو', tier2: 'مدينة من الدرجة الثانية' },
    lifestyleShort: { frugal: 'مقتصد', moderate: 'معتدل', comfortable: 'مريح' },
    oneTime:
      'يُضاف إلى ذلك تكاليف لمرة واحدة: الطيران والتأشيرة والتأمين والتجهيز (نحو 500–1,000 دولار في السنة الأولى). الأرقام تقديرات من جداول رسوم الجامعات الشريكة الحالية — خطاب القبول الفعلي هو الرقم الحقيقي.',
    mbbsNote:
      '<strong>تستغرق MBBS من 5.5 إلى 6 سنوات بما في ذلك الامتياز</strong> — عدّل الإجماليات أعلاه لتناسب مدة البرنامج الكاملة وليس فقط السنوات التي اخترتها.',
    ctaScholarship: 'تحقق مما إذا كانت المنح تخفّض هذا المبلغ',
    ctaFees: 'احصل على الرسوم الدقيقة للجامعة',
    copyLink: 'نسخ الرابط',
    linkCopied: 'تم نسخ الرابط',
    copyFailed: 'تعذّر النسخ',
  },
};
const includedAr: CostIncludedParts = {
  before:
    'نطاقات الرسوم الدراسية مأخوذة من جداول رسوم الجامعات الشريكة الحالية؛ ونطاقات المعيشة تجمع إيجار السكن والطعام والمواصلات والإنفاق الشخصي لكل مستوى معيشة.',
  bold: 'لا يشمل:',
  after:
    'الطيران ورسوم التأشيرة والتأمين (نحو 300–600 دولار سنوياً) والتجهيز لمرة واحدة (نحو 200–400 دولار). حاملو منحة CSC: الرسوم والسكن مجانيان ويصل راتب شهري.',
};

const es: CostStrings = {
  title: 'Calculadora del costo de estudiar en China — matrícula y vida',
  description:
    'Estime el costo real de estudiar en China: matrícula por programa, costo de vida por ciudad y estilo de vida, anual y total en USD. Rangos transparentes, sin correo electrónico.',
  crumb: 'Calculadora de costos',
  toolsCrumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramienta gratis · 1 minuto',
    title: '¿Cuánto costará realmente?',
    lede: 'Las tarifas se cotizan por universidad porque una sola cifra para todo un país sería una suposición. Esta calculadora da rangos honestos — y muestra las cuentas.',
  },
  select: 'Seleccione…',
  labels: { city: 'Ciudad', programme: 'Programa', lifestyle: 'Estilo de vida', years: 'Duración del programa' },
  cities: { beijing: 'Pekín', shanghai: 'Shanghái', guangzhou: 'Cantón', hangzhou: 'Hangzhou', tier2: 'Ciudad de segundo nivel' },
  programmes: {
    bachelor_eng: 'Licenciatura — Ingeniería / Informática',
    bachelor_bus: 'Licenciatura — Negocios / Economía',
    mbbs: 'MBBS (reconocido por el MOE)',
    master: 'Maestría',
    phd: 'Doctorado (sin financiación)',
    language: 'Idioma chino (año HSK)',
  },
  lifestyles: {
    frugal: 'Austero (comedores, residencia, bicicleta)',
    moderate: 'Moderado (comer fuera a veces)',
    comfortable: 'Cómodo (habitación propia, viajes)',
  },
  lengths: { y1: '1 año', y3: '3 años', y4: '4 años', y5: '5–5,5 años (MBBS)' },
  calculate: 'Calcular',
  reset: 'Restablecer',
  included: { label: 'Qué incluye' },
  script: {
    totalLabel: 'total estimado, {years}, autofinanciado',
    yearsOne: '{n} año',
    yearsMany: '{n} años',
    thItem: 'Concepto',
    thPerYear: 'Por año',
    thOver: 'En {years}',
    tuition: 'Matrícula',
    living: 'Vida y alojamiento',
    total: 'Total',
    sep: ', ',
    programmeShort: {
      bachelor_eng: 'licenciatura / ingeniería',
      bachelor_bus: 'licenciatura / negocios',
      mbbs: 'MBBS',
      master: 'maestría',
      phd: 'doctorado',
      language: 'idioma',
    },
    cityShort: { beijing: 'Pekín', shanghai: 'Shanghái', guangzhou: 'Cantón', hangzhou: 'Hangzhou', tier2: 'ciudad de segundo nivel' },
    lifestyleShort: { frugal: 'austero', moderate: 'moderado', comfortable: 'cómodo' },
    oneTime:
      'Más costos únicos: vuelos, visa, seguro e instalación (~500–1000 USD el primer año). Las cifras son estimaciones de las tablas de tarifas actuales de nuestros socios — su carta de oferta es el número real.',
    mbbsNote:
      '<strong>El MBBS dura de 5,5 a 6 años incluyendo el internado</strong> — escale los totales de arriba a la duración completa del programa, no solo a los años seleccionados.',
    ctaScholarship: 'Ver si las becas reducen esto',
    ctaFees: 'Obtener las tarifas exactas de la universidad',
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace copiado',
    copyFailed: 'No se pudo copiar',
  },
};
const includedEs: CostIncludedParts = {
  before:
    'Los rangos de matrícula provienen de nuestras tablas de tarifas actuales de socios; los rangos de vida combinan alquiler de residencia, comida, transporte y gasto personal en cada nivel de estilo de vida.',
  bold: 'No incluye:',
  after:
    'vuelos, tasas de visa, seguro (~300–600 USD/año) e instalación única (~200–400 USD). Becarios CSC: matrícula y residencia a cero y llega una asignación mensual.',
};

export const COST_STRINGS: Record<Locale, CostStrings> = { en, zh, fr, ar, es };
export const COST_INCLUDED: Record<Locale, CostIncludedParts> = {
  en: includedEn,
  zh: includedZh,
  fr: includedFr,
  ar: includedAr,
  es: includedEs,
};
