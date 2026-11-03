/**
 * Document-checklist strings. Items are keyed by a stable id (the client
 * script stores tick progress by id, so switching language never resets it);
 * `script` is serialized onto the page (data-i18n).
 */
import type { Locale } from '../../lib/i18n';

export const CHECKLIST_ITEM_IDS = [
  'passport',
  'photos',
  'transcripts',
  'certificates',
  'studyPlan',
  'physical',
  'police',
  'english',
  'funds',
  'forms',
  'neet',
  'recLetters',
  'cv',
  'cscForm',
  'cscPhysical',
  'preAdmission',
  'uniForm',
  'apostille',
  'translations',
  'fees',
] as const;
export type ChecklistItemId = (typeof CHECKLIST_ITEM_IDS)[number];

export interface ChecklistStrings {
  title: string;
  description: string;
  crumb: string;
  toolsCrumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  select: string;
  labels: { level: string; programme: string; scholarship: string; country: string };
  levels: { school: string; bachelor: string; master: string };
  programmes: { mbbs: string; degree: string; language: string };
  scholarships: { csc: string; uni: string; self: string };
  countries: { india: string; other: string };
  error: string;
  generate: string;
  reset: string;
  print: string;
  note: { before: string; bold: string; after: string };
  script: { items: Record<ChecklistItemId, string> };
}

const en: ChecklistStrings = {
  title: 'Document Checklist Generator — Study in China Applications',
  description:
    'Generate your personalised document checklist for studying in China by level, programme and scholarship route. Tick items off, save progress in your browser, and print.',
  crumb: 'Document checklist',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Free tool · 3 minutes',
    title: 'Every document. Nothing missing.',
    lede: 'Choose your level, programme and scholarship route — get the exact list, tick progress (saved in your browser), and print it for the folder.',
  },
  select: 'Select…',
  labels: { level: 'Applying for', programme: 'Programme type', scholarship: 'Scholarship route', country: 'Passport country' },
  levels: { school: "Bachelor's (from school)", bachelor: "Master's (from bachelor's)", master: "PhD (from master's)" },
  programmes: { mbbs: 'MBBS / Medicine', degree: 'Engineering / Business / other degree', language: 'Chinese language (HSK)' },
  scholarships: { csc: 'CSC scholarship (Type B)', uni: 'University scholarship / partial', self: 'Self-funded' },
  countries: { india: 'India', other: 'Other' },
  error: 'Choose all four options to generate your checklist.',
  generate: 'Generate checklist',
  reset: 'Change answers',
  print: 'Print checklist',
  note: {
    before: 'Progress saves automatically in this browser. Documents in',
    bold: 'bold',
    after: 'need notarisation or authority stamps — start those first.',
  },
  script: {
    items: {
      passport: 'Passport valid 12+ months beyond programme end',
      photos: 'Passport-size photos (white background, per embassy spec)',
      transcripts: 'Latest academic transcripts',
      certificates: 'Graduation/degree certificates',
      studyPlan: 'Study plan (bachelor) or research proposal (master/PhD), 800+ words',
      physical: 'Physical examination form on the official template',
      police: 'Police clearance certificate',
      english: 'English proficiency proof (MOI certificate / IELTS / TOEFL)',
      funds: 'Bank statement or sponsor letter (proof of funds)',
      forms: 'Completed application form(s) for each university',
      neet: 'NEET qualification proof (Indian MBBS applicants)',
      recLetters: 'Two recommendation letters (academic)',
      cv: 'Curriculum vitae / resume',
      cscForm: 'CSC online application form (generated from portal)',
      cscPhysical: 'Physical exam on the CSC-specific form',
      preAdmission: 'Pre-admission letter / supervisor contact (research degrees)',
      uniForm: 'University scholarship application form (per university)',
      apostille: 'Apostille / attestation as required for your documents',
      translations: 'Notarised translations of documents not in English/Chinese',
      fees: 'Application fee payment receipts',
    },
  },
};

const zh: ChecklistStrings = {
  title: '文件清单生成器 — 中国留学申请',
  description: '按学习阶段、专业和奖学金路径生成您个性化的中国留学文件清单。勾选事项，进度保存在浏览器中，并可打印。',
  crumb: '文件清单',
  toolsCrumb: '工具',
  hero: {
    eyebrow: '免费工具 · 3 分钟',
    title: '所有文件。一份不漏。',
    lede: '选择您的学习阶段、专业和奖学金路径——获得准确的清单，勾选进度（保存在您的浏览器中），并打印出来放进文件夹。',
  },
  select: '请选择…',
  labels: { level: '申请类型', programme: '专业类型', scholarship: '奖学金路径', country: '护照国家' },
  levels: { school: '本科（高中毕业申请）', bachelor: '硕士（本科毕业申请）', master: '博士（硕士毕业申请）' },
  programmes: { mbbs: 'MBBS / 临床医学', degree: '工程 / 商科 / 其他学位', language: '中文语言（HSK）' },
  scholarships: { csc: 'CSC 奖学金（B 类）', uni: '大学奖学金 / 部分奖学金', self: '自费' },
  countries: { india: '印度', other: '其他' },
  error: '请选择全部四个选项以生成您的清单。',
  generate: '生成清单',
  reset: '更改答案',
  print: '打印清单',
  note: {
    before: '进度会自动保存在此浏览器中。',
    bold: '加粗',
    after: '的文件需要公证或机关盖章——请优先办理。',
  },
  script: {
    items: {
      passport: '护照有效期须超过学习结束后 12 个月以上',
      photos: '证件照（白底，按使领馆要求）',
      transcripts: '最新成绩单',
      certificates: '毕业证/学位证书',
      studyPlan: '学习计划（本科）或研究计划书（硕士/博士），800 字以上',
      physical: '官方模板的体格检查表',
      police: '无犯罪记录证明',
      english: '英语能力证明（授课语言证明 / IELTS / TOEFL）',
      funds: '银行对账单或资助人证明信（资金证明）',
      forms: '每所大学的申请表',
      neet: 'NEET 资格证明（印度 MBBS 申请者）',
      recLetters: '两封推荐信（学术）',
      cv: '个人简历',
      cscForm: 'CSC 在线申请表（由系统生成）',
      cscPhysical: 'CSC 专用格式的体格检查表',
      preAdmission: '预录取函 / 导师联系（研究型学位）',
      uniForm: '大学奖学金申请表（每所大学各一份）',
      apostille: '按要求办理的文件海牙认证 / 认证',
      translations: '非英文/中文文件的公证翻译',
      fees: '申请费缴费凭证',
    },
  },
};

const fr: ChecklistStrings = {
  title: 'Générateur de liste de documents — candidatures pour étudier en Chine',
  description:
    'Générez votre liste de documents personnalisée pour étudier en Chine selon le niveau, le programme et la voie de bourse. Cochez les éléments, enregistrez votre progression dans le navigateur et imprimez.',
  crumb: 'Liste de documents',
  toolsCrumb: 'Outils',
  hero: {
    eyebrow: 'Outil gratuit · 3 minutes',
    title: 'Chaque document. Rien d’oublié.',
    lede: 'Choisissez votre niveau, votre programme et votre voie de bourse — obtenez la liste exacte, cochez votre progression (enregistrée dans votre navigateur) et imprimez-la pour le dossier.',
  },
  select: 'Sélectionner…',
  labels: { level: 'Candidature pour', programme: 'Type de programme', scholarship: 'Voie de bourse', country: 'Pays du passeport' },
  levels: { school: 'Licence (depuis le lycée)', bachelor: 'Master (depuis la licence)', master: 'Doctorat (depuis le master)' },
  programmes: { mbbs: 'MBBS / Médecine', degree: 'Ingénierie / Gestion / autre diplôme', language: 'Langue chinoise (HSK)' },
  scholarships: { csc: 'Bourse CSC (Type B)', uni: 'Bourse universitaire / partielle', self: 'Autofinancé' },
  countries: { india: 'Inde', other: 'Autre' },
  error: 'Choisissez les quatre options pour générer votre liste.',
  generate: 'Générer la liste',
  reset: 'Modifier les réponses',
  print: 'Imprimer la liste',
  note: {
    before: 'La progression est enregistrée automatiquement dans ce navigateur. Les documents en',
    bold: 'gras',
    after: 'nécessitent une légalisation ou des tampons officiels — commencez par ceux-là.',
  },
  script: {
    items: {
      passport: 'Passeport valide au moins 12 mois après la fin du programme',
      photos: 'Photos d’identité (fond blanc, selon les normes de l’ambassade)',
      transcripts: 'Derniers relevés de notes',
      certificates: 'Certificats de fin d’études / diplômes',
      studyPlan: 'Plan d’études (licence) ou projet de recherche (master/doctorat), 800 mots minimum',
      physical: 'Formulaire d’examen médical sur le modèle officiel',
      police: 'Casier judiciaire (certificat de non-condamnation)',
      english: 'Preuve de niveau d’anglais (attestation de langue d’enseignement / IELTS / TOEFL)',
      funds: 'Relevé bancaire ou lettre de garant (justificatif de ressources)',
      forms: 'Formulaire(s) de candidature remplis pour chaque université',
      neet: 'Preuve de réussite au NEET (candidats indiens au MBBS)',
      recLetters: 'Deux lettres de recommandation (académiques)',
      cv: 'Curriculum vitae',
      cscForm: 'Formulaire de candidature CSC en ligne (généré depuis le portail)',
      cscPhysical: 'Examen médical sur le formulaire spécifique CSC',
      preAdmission: 'Lettre de pré-admission / contact avec le directeur (diplômes de recherche)',
      uniForm: 'Formulaire de candidature à la bourse universitaire (par université)',
      apostille: 'Apostille / légalisation selon vos documents',
      translations: 'Traductions assermentées des documents qui ne sont ni en anglais ni en chinois',
      fees: 'Reçus de paiement des frais de candidature',
    },
  },
};

const ar: ChecklistStrings = {
  title: 'مولّد قائمة المستندات — طلبات الدراسة في الصين',
  description:
    'أنشئ قائمة مستنداتك المخصصة للدراسة في الصين بحسب المستوى والبرنامج ومسار المنحة. ضع علامة على البنود واحفظ تقدمك في المتصفح واطبع القائمة.',
  crumb: 'قائمة المستندات',
  toolsCrumb: 'الأدوات',
  hero: {
    eyebrow: 'أداة مجانية · 3 دقائق',
    title: 'كل مستند. بلا نقص.',
    lede: 'اختر مستواك وبرنامجك ومسار المنحة — واحصل على القائمة الدقيقة، وضع علامة على تقدمك (يُحفظ في متصفحك) واطبعها للملف.',
  },
  select: 'اختر…',
  labels: { level: 'التقديم على', programme: 'نوع البرنامج', scholarship: 'مسار المنحة', country: 'بلد جواز السفر' },
  levels: { school: 'بكالوريوس (من المدرسة)', bachelor: 'ماجستير (من البكالوريوس)', master: 'دكتوراه (من الماجستير)' },
  programmes: { mbbs: 'MBBS / الطب', degree: 'الهندسة / الأعمال / درجة أخرى', language: 'اللغة الصينية (HSK)' },
  scholarships: { csc: 'منحة CSC (النوع B)', uni: 'منحة جامعية / جزئية', self: 'تمويل ذاتي' },
  countries: { india: 'الهند', other: 'أخرى' },
  error: 'اختر الخيارات الأربعة لإنشاء قائمتك.',
  generate: 'أنشئ القائمة',
  reset: 'تغيير الإجابات',
  print: 'اطبع القائمة',
  note: {
    before: 'يُحفظ التقدم تلقائياً في هذا المتصفح. المستندات',
    bold: 'بالخط العريض',
    after: 'تحتاج إلى توثيق أو أختام رسمية — ابدأ بها أولاً.',
  },
  script: {
    items: {
      passport: 'جواز سفر صالح لمدة 12 شهراً على الأقل بعد نهاية البرنامج',
      photos: 'صور شخصية (خلفية بيضاء، حسب مواصفات السفارة)',
      transcripts: 'أحدث كشوف الدرجات',
      certificates: 'شهادات التخرج/الدرجات العلمية',
      studyPlan: 'خطة دراسية (بكالوريوس) أو مقترح بحثي (ماجستير/دكتوراه)، 800 كلمة فأكثر',
      physical: 'نموذج الفحص الطبي على القالب الرسمي',
      police: 'شهادة عدم محكومية',
      english: 'إثبات إتقان الإنجليزية (شهادة لغة التدريس / IELTS / TOEFL)',
      funds: 'كشف حساب مصرفي أو خطاب كفيل (إثبات القدرة المالية)',
      forms: 'نموذج (نماذج) الطلب المكتملة لكل جامعة',
      neet: 'إثبات اجتياز NEET (المتقدمون الهنود لـ MBBS)',
      recLetters: 'خطابا توصية (أكاديميان)',
      cv: 'السيرة الذاتية',
      cscForm: 'نموذج طلب CSC الإلكتروني (يُنشأ من البوابة)',
      cscPhysical: 'الفحص الطبي على نموذج CSC الخاص',
      preAdmission: 'خطاب القبول المبدئي / التواصل مع المشرف (الدرجات البحثية)',
      uniForm: 'نموذج طلب المنحة الجامعية (لكل جامعة)',
      apostille: 'التصديق / الأبوستيل كما تتطلب مستنداتك',
      translations: 'ترجمات موثقة للمستندات التي ليست بالإنجليزية/الصينية',
      fees: 'إيصالات دفع رسوم التقديم',
    },
  },
};

const es: ChecklistStrings = {
  title: 'Generador de lista de documentos — solicitudes para estudiar en China',
  description:
    'Genere su lista de documentos personalizada para estudiar en China según nivel, programa y ruta de beca. Marque los elementos, guarde el progreso en su navegador e imprima.',
  crumb: 'Lista de documentos',
  toolsCrumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramienta gratis · 3 minutos',
    title: 'Todos los documentos. Sin que falte ninguno.',
    lede: 'Elija su nivel, programa y ruta de beca — obtenga la lista exacta, marque el progreso (se guarda en su navegador) e imprímala para la carpeta.',
  },
  select: 'Seleccione…',
  labels: { level: 'Solicita para', programme: 'Tipo de programa', scholarship: 'Ruta de beca', country: 'País del pasaporte' },
  levels: { school: 'Licenciatura (desde la escuela)', bachelor: 'Maestría (desde la licenciatura)', master: 'Doctorado (desde la maestría)' },
  programmes: { mbbs: 'MBBS / Medicina', degree: 'Ingeniería / Negocios / otro grado', language: 'Idioma chino (HSK)' },
  scholarships: { csc: 'Beca CSC (Tipo B)', uni: 'Beca universitaria / parcial', self: 'Autofinanciado' },
  countries: { india: 'India', other: 'Otro' },
  error: 'Elija las cuatro opciones para generar su lista.',
  generate: 'Generar lista',
  reset: 'Cambiar respuestas',
  print: 'Imprimir lista',
  note: {
    before: 'El progreso se guarda automáticamente en este navegador. Los documentos en',
    bold: 'negrita',
    after: 'requieren notarización o sellos oficiales — empiece por esos.',
  },
  script: {
    items: {
      passport: 'Pasaporte válido al menos 12 meses después de terminar el programa',
      photos: 'Fotos tamaño pasaporte (fondo blanco, según la especificación de la embajada)',
      transcripts: 'Últimos expedientes académicos',
      certificates: 'Certificados de graduación/título',
      studyPlan: 'Plan de estudios (licenciatura) o propuesta de investigación (maestría/doctorado), 800+ palabras',
      physical: 'Formulario de examen físico en la plantilla oficial',
      police: 'Certificado de antecedentes penales',
      english: 'Prueba de dominio del inglés (certificado de idioma de instrucción / IELTS / TOEFL)',
      funds: 'Extracto bancario o carta del patrocinador (prueba de fondos)',
      forms: 'Formulario(s) de solicitud completados para cada universidad',
      neet: 'Prueba de aprobación del NEET (solicitantes indios de MBBS)',
      recLetters: 'Dos cartas de recomendación (académicas)',
      cv: 'Currículum vitae',
      cscForm: 'Formulario de solicitud CSC en línea (generado desde el portal)',
      cscPhysical: 'Examen físico en el formulario específico de CSC',
      preAdmission: 'Carta de preadmisión / contacto con el supervisor (grados de investigación)',
      uniForm: 'Formulario de solicitud de beca universitaria (por universidad)',
      apostille: 'Apostilla / legalización según requieran sus documentos',
      translations: 'Traducciones notariales de documentos que no estén en inglés/chino',
      fees: 'Recibos de pago de las tasas de solicitud',
    },
  },
};

export const CHECKLIST_STRINGS: Record<Locale, ChecklistStrings> = { en, zh, fr, ar, es };
