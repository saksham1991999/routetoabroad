/**
 * Timeline-planner strings. Phase order is fixed (offsets live in the client
 * script): preliminary, shortlist, documents, portals, CSC wall, self-funded
 * deadline, offers, JW202, visa, arrival. `script` is serialized onto the page
 * (data-i18n); the HowTo steps feed JSON-LD at build time.
 */
import type { Locale } from '../../lib/i18n';

type Phase = { title: string; text: string };
type Step = { name: string; text: string };

export interface TimelineStrings {
  title: string;
  description: string;
  crumb: string;
  toolsCrumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  howTo: { name: string; description: string; steps: [Step, Step, Step, Step, Step] };
  intakeLabel: string;
  intakes: { m2027_03: string; m2027_09: string; m2028_03: string };
  build: string;
  reset: string;
  legend: { label: string; hard: string; recommended: string; tz: string; cscBefore: string; cscBold: string; cscAfter: string };
  script: {
    phases: [Phase, Phase, Phase, Phase, Phase, Phase, Phase, Phase, Phase, Phase];
    cscMarch: string;
    portalsMarch: string;
    selfFundedMarch: string;
    passed: string;
    next: string;
    deadline: string;
    /** {done} {total} */
    summaryUnderway: string;
    /** {done} {total} {title} {month} */
    summaryNext: string;
  };
}

const en: TimelineStrings = {
  title: 'Application Timeline Planner — Study in China Deadlines',
  description:
    'Pick your intake and get the month-by-month application plan for studying in China, worked backwards from the deadline: shortlists, scholarship windows, JW202 and visa milestones.',
  crumb: 'Timeline planner',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Free tool · 1 minute',
    title: 'Your intake, worked backwards.',
    lede: "The most common avoidable mistake is starting in April for September. Pick your intake — this planner maps every phase and shows what's already due.",
  },
  howTo: {
    name: 'How to plan a Chinese university application timeline',
    description: 'The five phases of a successful Chinese university application, worked backwards from your intake.',
    steps: [
      { name: 'Shortlist programmes', text: 'Pick 3–5 MOE-listed universities matched to your marks, budget and city preference — one reach, one target, one high-probability.' },
      { name: 'Prepare documents', text: 'Passport, transcripts, certificates, study plan, recommendations, physical exam — notarise what needs notarising. Give this two months.' },
      { name: 'File applications & scholarships', text: 'Submit university applications and CSC/provincial scholarship files inside their windows. Scholarship deadlines cluster February–April for September.' },
      { name: 'Offers → JW202 → visa', text: 'Accept the offer, track the Admission Notice and JW202, complete the physical exam and file the X1 visa at the embassy.' },
      { name: 'Arrive & register', text: 'Flight, airport pickup, dorm check-in, residence permit within 30 days, SIM and bank account.' },
    ],
  },
  intakeLabel: 'Target intake',
  intakes: { m2027_03: 'March 2027', m2027_09: 'September 2027', m2028_03: 'March 2028' },
  build: 'Build my timeline',
  reset: 'Reset',
  legend: {
    label: 'Reading the markers',
    hard: 'hard deadline (missing it costs the intake)',
    recommended: 'recommended month',
    tz: 'dates render in your local timezone.',
    cscBefore: 'CSC windows vary by university — treat',
    cscBold: 'early April',
    cscAfter: 'as the safe wall for scholarship files.',
  },
  script: {
    phases: [
      { title: 'Preliminary decisions', text: 'Confirm route (MBBS vs engineering vs business vs language), budget ceiling, and city shortlist. Sit NEET if Indian MBBS.' },
      { title: 'Shortlist & supervisor outreach', text: 'Lock 3–5 universities (one reach / one target / one safe). Research applicants: start emailing matched supervisors with a 1-page proposal.' },
      { title: 'Document preparation', text: 'Transcripts, certificates, notarisation, study plan, recommendation letters, physical exam booked. The slowest phase — give it two full months.' },
      { title: 'Applications open — file early', text: 'University portals open ~7 months out. File your first applications now; early files get earlier dorm decisions.' },
      { title: 'CSC scholarship deadline wall', text: 'CSC Type B windows cluster February–April for September. File scholarship applications before end of March regardless of stated deadline.' },
      { title: 'Self-funded application deadline', text: 'Final calls for September self-funded admission at most partner universities.' },
      { title: 'Offers & acceptance', text: 'Offers land. Accept, pay any deposit to the UNIVERSITY account only, confirm dorm preferences.' },
      { title: 'JW202 & physical exam', text: 'Chase the Admission Notice + JW202 the week they are due. Complete the physical examination on the official form.' },
      { title: 'X1 visa filing', text: 'Embassy/CVASC appointment with passport, forms, photos, Admission Notice, JW202 and physical exam record. 4–7 working days typical processing.' },
      { title: 'Intake month — arrival & registration', text: 'Fly in, airport pickup, dorm check-in, university registration, residence permit within 30 days, SIM + bank account.' },
    ],
    cscMarch:
      'CSC Type B windows for March intakes open in the preceding autumn (roughly June–September) and close months before departure. Verify each university’s current-year window — they are not uniform.',
    portalsMarch: 'University portals open ~7 months out. For March intakes this lands around the summer — file early; early files get earlier dorm decisions.',
    selfFundedMarch: 'Final calls for March self-funded admission at most partner universities — confirm exact dates with each office.',
    passed: 'passed',
    next: 'next',
    deadline: 'deadline',
    summaryUnderway: '<strong>{done} of {total}</strong> phases passed — this intake is already underway. Pick the next one.',
    summaryNext: '<strong>{done} of {total}</strong> phases passed · next: <strong>{title}</strong> · {month}',
  },
};

const zh: TimelineStrings = {
  title: '申请时间线规划器 — 中国留学截止日期',
  description: '选择您的入学时间，获得从截止日期倒推的逐月中国留学申请计划：院校选择、奖学金窗口、JW202 和签证节点。',
  crumb: '时间线规划',
  toolsCrumb: '工具',
  hero: {
    eyebrow: '免费工具 · 1 分钟',
    title: '从入学日期倒推您的计划。',
    lede: '最常见的可避免错误是 4 月才开始准备 9 月入学。选择您的入学时间——这个规划器会列出每个阶段，并显示哪些已经到期。',
  },
  howTo: {
    name: '如何规划中国大学申请时间线',
    description: '成功申请中国大学的五个阶段，从您的入学时间倒推。',
    steps: [
      { name: '确定院校和专业', text: '根据成绩、预算和城市偏好，选出 3–5 所教育部认可的大学——一所冲刺、一所匹配、一所高概率。' },
      { name: '准备文件', text: '护照、成绩单、证书、学习计划、推荐信、体检——需要公证的要公证。请预留两个月。' },
      { name: '提交申请和奖学金', text: '在窗口期内提交大学申请和 CSC/省级奖学金材料。9 月入学的奖学金截止日期集中在 2 月至 4 月。' },
      { name: '录取 → JW202 → 签证', text: '接受录取，跟进录取通知书和 JW202，完成体检，并在使领馆办理 X1 签证。' },
      { name: '抵达并注册', text: '航班、机场接机、宿舍入住、30 天内办理居留许可、手机卡和银行账户。' },
    ],
  },
  intakeLabel: '目标入学时间',
  intakes: { m2027_03: '2027 年 3 月', m2027_09: '2027 年 9 月', m2028_03: '2028 年 3 月' },
  build: '生成我的时间线',
  reset: '重置',
  legend: {
    label: '如何阅读标记',
    hard: '硬性截止日期（错过会失去本次入学机会）',
    recommended: '建议办理的月份',
    tz: '日期按您本地时区显示。',
    cscBefore: 'CSC 窗口因大学而异——请把',
    cscBold: '4 月初',
    cscAfter: '作为奖学金材料的安全底线。',
  },
  script: {
    phases: [
      { title: '初步决定', text: '确认路径（MBBS、工程、商科或语言）、预算上限和城市候选。印度 MBBS 申请者需参加 NEET。' },
      { title: '确定院校并联系导师', text: '锁定 3–5 所大学（一所冲刺 / 一所匹配 / 一所保底）。研究型申请者：开始用 1 页研究计划给匹配的导师发邮件。' },
      { title: '准备文件', text: '成绩单、证书、公证、学习计划、推荐信，并预约体检。这是最慢的阶段——请预留整整两个月。' },
      { title: '申请开放——尽早提交', text: '大学申请系统大约提前 7 个月开放。现在就提交第一批申请；提早提交会更早得到宿舍结果。' },
      { title: 'CSC 奖学金截止线', text: 'CSC B 类窗口集中在 9 月入学前的 2 月至 4 月。无论官方截止日期如何，请在 3 月底前提交奖学金申请。' },
      { title: '自费申请截止', text: '多数合作大学 9 月自费入学的最后受理期。' },
      { title: '录取与确认', text: '录取通知到达。接受录取，押金只付给大学账户，确认宿舍偏好。' },
      { title: 'JW202 与体检', text: '在到期那一周跟进录取通知书和 JW202。在官方表格上完成体检。' },
      { title: 'X1 签证办理', text: '携带护照、表格、照片、录取通知书、JW202 和体检记录前往使领馆/签证中心预约。通常 4–7 个工作日办结。' },
      { title: '入学月——抵达与注册', text: '飞抵、机场接机、宿舍入住、大学注册、30 天内办理居留许可、手机卡和银行账户。' },
    ],
    cscMarch: '3 月入学的 CSC B 类窗口在前一年的秋季（大约 6 月至 9 月）开放，并在出发前数月关闭。请核实每所大学当年的窗口——它们并不统一。',
    portalsMarch: '大学申请系统大约提前 7 个月开放。3 月入学的话大约在夏季——尽早提交；提早提交会更早得到宿舍结果。',
    selfFundedMarch: '多数合作大学 3 月自费入学的最后受理期——请与各校办公室确认具体日期。',
    passed: '已过',
    next: '下一步',
    deadline: '截止',
    summaryUnderway: '已过 <strong>{done} / {total}</strong> 个阶段——这个入学时间已经开始。请选择下一个。',
    summaryNext: '已过 <strong>{done} / {total}</strong> 个阶段 · 下一步：<strong>{title}</strong> · {month}',
  },
};

const fr: TimelineStrings = {
  title: 'Planificateur de calendrier de candidature — échéances pour étudier en Chine',
  description:
    'Choisissez votre rentrée et obtenez le plan de candidature mois par mois pour étudier en Chine, calculé à rebours depuis l’échéance : présélection, fenêtres de bourses, JW202 et jalons du visa.',
  crumb: 'Planificateur',
  toolsCrumb: 'Outils',
  hero: {
    eyebrow: 'Outil gratuit · 1 minute',
    title: 'Votre rentrée, calculée à rebours.',
    lede: 'L’erreur évitable la plus courante est de commencer en avril pour septembre. Choisissez votre rentrée — ce planificateur cartographie chaque phase et montre ce qui est déjà dû.',
  },
  howTo: {
    name: 'Comment planifier le calendrier d’une candidature dans une université chinoise',
    description: 'Les cinq phases d’une candidature réussie dans une université chinoise, calculées à rebours depuis votre rentrée.',
    steps: [
      { name: 'Présélectionner les programmes', text: 'Choisissez 3 à 5 universités reconnues par le MOE selon vos notes, votre budget et votre préférence de ville — une ambitieuse, une réaliste, une très probable.' },
      { name: 'Préparer les documents', text: 'Passeport, relevés de notes, certificats, plan d’études, recommandations, examen médical — faites légaliser ce qui doit l’être. Prévoyez deux mois.' },
      { name: 'Déposer candidatures et bourses', text: 'Déposez les candidatures universitaires et les dossiers de bourse CSC/provinciale dans leurs fenêtres. Les échéances de bourse se concentrent de février à avril pour septembre.' },
      { name: 'Offres → JW202 → visa', text: 'Acceptez l’offre, suivez l’avis d’admission et le JW202, passez l’examen médical et déposez le visa X1 à l’ambassade.' },
      { name: 'Arriver et s’inscrire', text: 'Vol, accueil à l’aéroport, installation en résidence, titre de séjour sous 30 jours, carte SIM et compte bancaire.' },
    ],
  },
  intakeLabel: 'Rentrée visée',
  intakes: { m2027_03: 'Mars 2027', m2027_09: 'Septembre 2027', m2028_03: 'Mars 2028' },
  build: 'Construire mon calendrier',
  reset: 'Réinitialiser',
  legend: {
    label: 'Lire les repères',
    hard: 'échéance ferme (la manquer coûte la rentrée)',
    recommended: 'mois recommandé',
    tz: 'les dates s’affichent dans votre fuseau horaire local.',
    cscBefore: 'Les fenêtres CSC varient selon l’université — considérez',
    cscBold: 'début avril',
    cscAfter: 'comme la limite de sécurité pour les dossiers de bourse.',
  },
  script: {
    phases: [
      { title: 'Décisions préliminaires', text: 'Confirmez la voie (MBBS, ingénierie, gestion ou langue), le plafond de budget et la présélection de villes. Passez le NEET pour le MBBS indien.' },
      { title: 'Présélection et contact avec les directeurs', text: 'Arrêtez 3 à 5 universités (une ambitieuse / une réaliste / une sûre). Candidats en recherche : commencez à écrire à des directeurs compatibles avec un projet d’une page.' },
      { title: 'Préparation des documents', text: 'Relevés, certificats, légalisation, plan d’études, lettres de recommandation, examen médical réservé. La phase la plus lente — comptez deux mois pleins.' },
      { title: 'Ouverture des candidatures — déposez tôt', text: 'Les portails universitaires ouvrent environ 7 mois avant. Déposez vos premières candidatures maintenant ; les dossiers précoces obtiennent plus tôt les décisions de logement.' },
      { title: 'Mur d’échéance des bourses CSC', text: 'Les fenêtres CSC Type B se concentrent de février à avril pour septembre. Déposez les dossiers de bourse avant fin mars quelle que soit l’échéance affichée.' },
      { title: 'Échéance de candidature autofinancée', text: 'Derniers appels pour l’admission autofinancée de septembre dans la plupart des universités partenaires.' },
      { title: 'Offres et acceptation', text: 'Les offres arrivent. Acceptez, versez tout acompte uniquement sur le compte de l’UNIVERSITÉ, confirmez vos préférences de logement.' },
      { title: 'JW202 et examen médical', text: 'Relancez l’avis d’admission + JW202 la semaine où ils sont dus. Passez l’examen médical sur le formulaire officiel.' },
      { title: 'Dépôt du visa X1', text: 'Rendez-vous à l’ambassade/CVASC avec passeport, formulaires, photos, avis d’admission, JW202 et dossier d’examen médical. Traitement habituel de 4 à 7 jours ouvrés.' },
      { title: 'Mois de rentrée — arrivée et inscription', text: 'Arrivée, accueil à l’aéroport, installation en résidence, inscription universitaire, titre de séjour sous 30 jours, SIM + compte bancaire.' },
    ],
    cscMarch:
      'Les fenêtres CSC Type B pour les rentrées de mars ouvrent l’automne précédent (environ juin–septembre) et ferment des mois avant le départ. Vérifiez la fenêtre de l’année en cours de chaque université — elles ne sont pas uniformes.',
    portalsMarch: 'Les portails universitaires ouvrent environ 7 mois avant. Pour les rentrées de mars, cela tombe vers l’été — déposez tôt ; les dossiers précoces obtiennent plus tôt les décisions de logement.',
    selfFundedMarch: 'Derniers appels pour l’admission autofinancée de mars dans la plupart des universités partenaires — confirmez les dates exactes avec chaque bureau.',
    passed: 'passé',
    next: 'prochain',
    deadline: 'échéance',
    summaryUnderway: '<strong>{done} sur {total}</strong> phases passées — cette rentrée est déjà en cours. Choisissez la suivante.',
    summaryNext: '<strong>{done} sur {total}</strong> phases passées · prochain : <strong>{title}</strong> · {month}',
  },
};

const ar: TimelineStrings = {
  title: 'مخطط الجدول الزمني للتقديم — مواعيد الدراسة في الصين',
  description:
    'اختر موعد التحاقك واحصل على خطة التقديم شهراً بشهر للدراسة في الصين، محسوبة عكسياً من الموعد النهائي: الترشيح ونوافذ المنح وJW202 ومراحل التأشيرة.',
  crumb: 'مخطط الجدول الزمني',
  toolsCrumb: 'الأدوات',
  hero: {
    eyebrow: 'أداة مجانية · دقيقة واحدة',
    title: 'موعد التحاقك، محسوباً عكسياً.',
    lede: 'أكثر الأخطاء شيوعاً التي يمكن تجنبها هو البدء في أبريل لموعد سبتمبر. اختر موعد التحاقك — يرسم هذا المخطط كل مرحلة ويُظهر ما استحق بالفعل.',
  },
  howTo: {
    name: 'كيف تخطط للجدول الزمني للتقديم إلى جامعة صينية',
    description: 'المراحل الخمس للتقديم الناجح إلى جامعة صينية، محسوبة عكسياً من موعد التحاقك.',
    steps: [
      { name: 'ترشيح البرامج', text: 'اختر 3–5 جامعات معتمدة من وزارة التعليم تناسب درجاتك وميزانيتك وتفضيل المدينة — واحدة طموحة وواحدة مناسبة وواحدة عالية الاحتمال.' },
      { name: 'تجهيز المستندات', text: 'جواز السفر وكشوف الدرجات والشهادات وخطة الدراسة وخطابات التوصية والفحص الطبي — وثّق ما يحتاج إلى توثيق. خصص لذلك شهرين.' },
      { name: 'تقديم الطلبات والمنح', text: 'قدّم طلبات الجامعات وملفات منح CSC/الإقليمية ضمن نوافذها. تتركز مواعيد المنح بين فبراير وأبريل لموعد سبتمبر.' },
      { name: 'العروض ← JW202 ← التأشيرة', text: 'اقبل العرض وتابع إشعار القبول وJW202 وأكمل الفحص الطبي وقدّم طلب تأشيرة X1 لدى السفارة.' },
      { name: 'الوصول والتسجيل', text: 'الرحلة والاستقبال من المطار وتسليم السكن وتصريح الإقامة خلال 30 يوماً وشريحة الهاتف والحساب المصرفي.' },
    ],
  },
  intakeLabel: 'موعد الالتحاق المستهدف',
  intakes: { m2027_03: 'مارس 2027', m2027_09: 'سبتمبر 2027', m2028_03: 'مارس 2028' },
  build: 'أنشئ جدولي الزمني',
  reset: 'إعادة تعيين',
  legend: {
    label: 'قراءة العلامات',
    hard: 'موعد نهائي صارم (تفويته يكلّفك موعد الالتحاق)',
    recommended: 'الشهر الموصى به',
    tz: 'تُعرض التواريخ بحسب منطقتك الزمنية.',
    cscBefore: 'تختلف نوافذ CSC من جامعة لأخرى — اعتبر',
    cscBold: 'بداية أبريل',
    cscAfter: 'الحد الآمن لملفات المنح.',
  },
  script: {
    phases: [
      { title: 'القرارات الأولية', text: 'أكّد المسار (MBBS أو الهندسة أو الأعمال أو اللغة) وسقف الميزانية وقائمة المدن المرشحة. اجتز NEET إن كنت متقدماً هندياً لـ MBBS.' },
      { title: 'الترشيح والتواصل مع المشرفين', text: 'ثبّت 3–5 جامعات (واحدة طموحة / واحدة مناسبة / واحدة آمنة). متقدمو البحث: ابدأ بمراسلة مشرفين مناسبين بمقترح من صفحة واحدة.' },
      { title: 'تجهيز المستندات', text: 'كشوف الدرجات والشهادات والتوثيق وخطة الدراسة وخطابات التوصية وحجز الفحص الطبي. أبطأ مرحلة — خصص لها شهرين كاملين.' },
      { title: 'فتح باب التقديم — قدّم مبكراً', text: 'تفتح بوابات الجامعات قبل نحو 7 أشهر. قدّم أول طلباتك الآن؛ فالملفات المبكرة تحصل على قرارات السكن أبكر.' },
      { title: 'جدار موعد منحة CSC', text: 'تتركز نوافذ CSC النوع B بين فبراير وأبريل لموعد سبتمبر. قدّم ملفات المنح قبل نهاية مارس بغض النظر عن الموعد المعلن.' },
      { title: 'الموعد النهائي للتقديم بالتمويل الذاتي', text: 'النداءات الأخيرة للقبول بالتمويل الذاتي لسبتمبر في معظم الجامعات الشريكة.' },
      { title: 'العروض والقبول', text: 'تصل العروض. اقبل وادفع أي عربون إلى حساب الجامعة وحده، وأكّد تفضيلات السكن.' },
      { title: 'JW202 والفحص الطبي', text: 'تابع إشعار القبول وJW202 في الأسبوع الذي يستحقان فيه. أكمل الفحص الطبي على النموذج الرسمي.' },
      { title: 'تقديم تأشيرة X1', text: 'موعد في السفارة/مركز التأشيرات مع جواز السفر والنماذج والصور وإشعار القبول وJW202 وسجل الفحص الطبي. المعالجة المعتادة 4–7 أيام عمل.' },
      { title: 'شهر الالتحاق — الوصول والتسجيل', text: 'الوصول والاستقبال من المطار وتسليم السكن وتسجيل الجامعة وتصريح الإقامة خلال 30 يوماً وشريحة الهاتف والحساب المصرفي.' },
    ],
    cscMarch:
      'تفتح نوافذ CSC النوع B لموعد مارس في الخريف السابق (نحو يونيو–سبتمبر) وتُغلق قبل السفر بأشهر. تحقق من نافذة كل جامعة للعام الحالي — فهي غير موحدة.',
    portalsMarch: 'تفتح بوابات الجامعات قبل نحو 7 أشهر. بالنسبة لموعد مارس يقع ذلك في الصيف تقريباً — قدّم مبكراً؛ فالملفات المبكرة تحصل على قرارات السكن أبكر.',
    selfFundedMarch: 'النداءات الأخيرة للقبول بالتمويل الذاتي لمارس في معظم الجامعات الشريكة — أكّد المواعيد الدقيقة مع كل مكتب.',
    passed: 'مضى',
    next: 'التالي',
    deadline: 'موعد نهائي',
    summaryUnderway: 'مضت <strong>{done} من {total}</strong> مراحل — هذا الموعد قد بدأ فعلاً. اختر الموعد التالي.',
    summaryNext: 'مضت <strong>{done} من {total}</strong> مراحل · التالي: <strong>{title}</strong> · {month}',
  },
};

const es: TimelineStrings = {
  title: 'Planificador de cronograma de solicitud — plazos para estudiar en China',
  description:
    'Elija su ingreso y obtenga el plan de solicitud mes a mes para estudiar en China, calculado hacia atrás desde el plazo: preselección, ventanas de becas, JW202 e hitos de visa.',
  crumb: 'Planificador',
  toolsCrumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramienta gratis · 1 minuto',
    title: 'Su ingreso, calculado hacia atrás.',
    lede: 'El error evitable más común es empezar en abril para septiembre. Elija su ingreso — este planificador traza cada fase y muestra lo que ya vence.',
  },
  howTo: {
    name: 'Cómo planificar el cronograma de solicitud a una universidad china',
    description: 'Las cinco fases de una solicitud exitosa a una universidad china, calculadas hacia atrás desde su ingreso.',
    steps: [
      { name: 'Preseleccionar programas', text: 'Elija 3–5 universidades reconocidas por el MOE según sus calificaciones, presupuesto y preferencia de ciudad — una ambiciosa, una realista y una de alta probabilidad.' },
      { name: 'Preparar documentos', text: 'Pasaporte, expedientes, certificados, plan de estudios, recomendaciones, examen físico — notarice lo que deba notarizarse. Dedique dos meses.' },
      { name: 'Presentar solicitudes y becas', text: 'Envíe las solicitudes universitarias y los expedientes de beca CSC/provincial dentro de sus ventanas. Los plazos de becas se concentran de febrero a abril para septiembre.' },
      { name: 'Ofertas → JW202 → visa', text: 'Acepte la oferta, siga el Aviso de Admisión y el JW202, complete el examen físico y tramite la visa X1 en la embajada.' },
      { name: 'Llegar y matricularse', text: 'Vuelo, recogida en el aeropuerto, ingreso a la residencia, permiso de residencia en 30 días, SIM y cuenta bancaria.' },
    ],
  },
  intakeLabel: 'Ingreso objetivo',
  intakes: { m2027_03: 'Marzo 2027', m2027_09: 'Septiembre 2027', m2028_03: 'Marzo 2028' },
  build: 'Construir mi cronograma',
  reset: 'Restablecer',
  legend: {
    label: 'Cómo leer los marcadores',
    hard: 'plazo estricto (perderlo cuesta el ingreso)',
    recommended: 'mes recomendado',
    tz: 'las fechas se muestran en su zona horaria local.',
    cscBefore: 'Las ventanas CSC varían según la universidad — trate',
    cscBold: 'principios de abril',
    cscAfter: 'como el límite seguro para los expedientes de beca.',
  },
  script: {
    phases: [
      { title: 'Decisiones preliminares', text: 'Confirme la ruta (MBBS, ingeniería, negocios o idioma), el tope de presupuesto y la preselección de ciudades. Presente el NEET si es MBBS indio.' },
      { title: 'Preselección y contacto con supervisores', text: 'Fije 3–5 universidades (una ambiciosa / una realista / una segura). Candidatos de investigación: empiecen a escribir a supervisores afines con una propuesta de 1 página.' },
      { title: 'Preparación de documentos', text: 'Expedientes, certificados, notarización, plan de estudios, cartas de recomendación, examen físico reservado. La fase más lenta — dedíquele dos meses completos.' },
      { title: 'Se abren las solicitudes — presente temprano', text: 'Los portales universitarios abren unos 7 meses antes. Presente sus primeras solicitudes ahora; los expedientes tempranos obtienen antes las decisiones de residencia.' },
      { title: 'Muro del plazo de becas CSC', text: 'Las ventanas CSC Tipo B se concentran de febrero a abril para septiembre. Presente las solicitudes de beca antes de fin de marzo sin importar el plazo indicado.' },
      { title: 'Plazo de solicitud autofinanciada', text: 'Últimas convocatorias para la admisión autofinanciada de septiembre en la mayoría de las universidades socias.' },
      { title: 'Ofertas y aceptación', text: 'Llegan las ofertas. Acepte, pague cualquier depósito solo a la cuenta de la UNIVERSIDAD y confirme sus preferencias de residencia.' },
      { title: 'JW202 y examen físico', text: 'Reclame el Aviso de Admisión + JW202 la semana en que vencen. Complete el examen físico en el formulario oficial.' },
      { title: 'Trámite de la visa X1', text: 'Cita en la embajada/CVASC con pasaporte, formularios, fotos, Aviso de Admisión, JW202 y registro del examen físico. Procesamiento típico de 4 a 7 días hábiles.' },
      { title: 'Mes de ingreso — llegada y matrícula', text: 'Llegada, recogida en el aeropuerto, ingreso a la residencia, matrícula universitaria, permiso de residencia en 30 días, SIM + cuenta bancaria.' },
    ],
    cscMarch:
      'Las ventanas CSC Tipo B para ingresos de marzo abren en el otoño anterior (aproximadamente junio–septiembre) y cierran meses antes de la partida. Verifique la ventana vigente de cada universidad — no son uniformes.',
    portalsMarch: 'Los portales universitarios abren unos 7 meses antes. Para ingresos de marzo cae hacia el verano — presente temprano; los expedientes tempranos obtienen antes las decisiones de residencia.',
    selfFundedMarch: 'Últimas convocatorias para la admisión autofinanciada de marzo en la mayoría de las universidades socias — confirme las fechas exactas con cada oficina.',
    passed: 'pasada',
    next: 'siguiente',
    deadline: 'plazo',
    summaryUnderway: '<strong>{done} de {total}</strong> fases pasadas — este ingreso ya está en marcha. Elija el siguiente.',
    summaryNext: '<strong>{done} de {total}</strong> fases pasadas · siguiente: <strong>{title}</strong> · {month}',
  },
};

const de: TimelineStrings = {
  title: 'Bewerbungszeitplaner — Fristen für das Studium in China',
  description:
    'Wählen Sie Ihren Studienbeginn und erhalten Sie den Monat-für-Monat-Bewerbungsplan für das Studium in China, rückwärts ab der Frist gerechnet: Shortlists, Stipendienfenster, JW202 und Visa-Meilensteine.',
  crumb: 'Zeitplaner',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Kostenloses Tool · 1 Minute',
    title: 'Ihr Studienbeginn, rückwärts geplant.',
    lede: 'Der häufigste vermeidbare Fehler: im April für September anzufangen. Wählen Sie Ihren Studienbeginn — dieser Planer kartiert jede Phase und zeigt, was bereits fällig ist.',
  },
  howTo: {
    name: 'So planen Sie den Bewerbungszeitplan einer chinesischen Universität',
    description: 'Die fünf Phasen einer erfolgreichen Bewerbung an einer chinesischen Universität, rückwärts ab Ihrem Studienbeginn gerechnet.',
    steps: [
      { name: 'Programme vorwählen', text: 'Wählen Sie 3–5 MOE-gelistete Universitäten passend zu Noten, Budget und Stadtwunsch — eine ehrgeizige, eine realistische, eine sehr wahrscheinliche.' },
      { name: 'Dokumente vorbereiten', text: 'Reisepass, Notenabschriften, Zeugnisse, Studienplan, Empfehlungen, medizinische Untersuchung — notariell beglaubigen, was beglaubigt werden muss. Zwei Monate einplanen.' },
      { name: 'Bewerbungen & Stipendien einreichen', text: 'Universitätsbewerbungen und CSC-/Provinzstipendienakten innerhalb ihrer Fenster einreichen. Stipendienfristen ballen sich Februar–April für September.' },
      { name: 'Zusage → JW202 → Visum', text: 'Zusage annehmen, Zulassungsschreiben und JW202 verfolgen, medizinische Untersuchung abschließen und das X1-Visum bei der Botschaft beantragen.' },
      { name: 'Ankommen & immatrikulieren', text: 'Flug, Abholung am Flughafen, Wohnheim-Check-in, Aufenthaltserlaubnis innerhalb von 30 Tagen, SIM und Bankkonto.' },
    ],
  },
  intakeLabel: 'Angestrebter Studienbeginn',
  intakes: { m2027_03: 'März 2027', m2027_09: 'September 2027', m2028_03: 'März 2028' },
  build: 'Meinen Zeitplan erstellen',
  reset: 'Zurücksetzen',
  legend: {
    label: 'Die Markierungen lesen',
    hard: 'harte Frist (wer sie verpasst, verliert den Studienbeginn)',
    recommended: 'empfohlener Monat',
    tz: 'Datumsangaben erscheinen in Ihrer lokalen Zeitzone.',
    cscBefore: 'CSC-Fenster variieren je Universität — betrachten Sie',
    cscBold: 'Anfang April',
    cscAfter: 'als sichere Wand für Stipendienakten.',
  },
  script: {
    phases: [
      { title: 'Vorentscheidungen', text: 'Weg klären (MBBS, Ingenieurwesen, BWL oder Sprache), Budget-Obergrenze und Städte-Shortlist. NEET ablegen, falls indischer MBBS.' },
      { title: 'Shortlist & Betreueransprache', text: '3–5 Universitäten festzurren (eine ehrgeizige / eine realistische / eine sichere). Forschungsbewerber: passende Betreuer mit 1-Seiten-Vorschlag anschreiben.' },
      { title: 'Dokumentenvorbereitung', text: 'Notenabschriften, Zeugnisse, Beglaubigungen, Studienplan, Empfehlungsschreiben, medizinische Untersuchung terminiert. Die langsamste Phase — zwei volle Monate einplanen.' },
      { title: 'Bewerbungsportale offen — früh einreichen', text: 'Universitätsportale öffnen ca. 7 Monate vorher. Jetzt die ersten Bewerbungen einreichen; frühe Akten erhalten früher Wohnheimentscheidungen.' },
      { title: 'CSC-Stipendienfristen-Wand', text: 'CSC-Typ-B-Fenster ballen sich Februar–April für September. Stipendienakten vor Ende März einreichen, unabhängig von der angegebenen Frist.' },
      { title: 'Frist für selbstfinanzierte Bewerbungen', text: 'Letzte Aufrufe für die selbstfinanzierte September-Zulassung an den meisten Partneruniversitäten.' },
      { title: 'Zusagen & Annahme', text: 'Zusagen treffen ein. Annehmen, jede Anzahlung nur auf das KONTO DER UNIVERSITÄT zahlen, Wohnheimpräferenzen bestätigen.' },
      { title: 'JW202 & medizinische Untersuchung', text: 'Zulassungsschreiben + JW202 in der Fälligkeitswoche nachjagen. Medizinische Untersuchung auf dem offiziellen Formular abschließen.' },
      { title: 'X1-Visum beantragen', text: 'Termin bei Botschaft/CVASC mit Reisepass, Formularen, Fotos, Zulassungsschreiben, JW202 und Untersuchungsbericht. Üblich sind 4–7 Arbeitstage.' },
      { title: 'Beginnmonat — Ankunft & Immatrikulation', text: 'Einfliegen, Abholung am Flughafen, Wohnheim-Check-in, Immatrikulation, Aufenthaltserlaubnis innerhalb von 30 Tagen, SIM + Bankkonto.' },
    ],
    cscMarch:
      'CSC-Typ-B-Fenster für Märzbeginn öffnen im vorausgehenden Herbst (etwa Juni–September) und schließen Monate vor der Abreise. Prüfen Sie das aktuelle Fenster jeder Universität — sie sind nicht einheitlich.',
    portalsMarch: 'Universitätsportale öffnen ca. 7 Monate vorher. Bei Märzbeginn fällt das in den Sommer — früh einreichen; frühe Akten erhalten früher Wohnheimentscheidungen.',
    selfFundedMarch: 'Letzte Aufrufe für die selbstfinanzierte März-Zulassung an den meisten Partneruniversitäten — exakte Daten mit jedem Büro bestätigen.',
    passed: 'vergangen',
    next: 'nächste',
    deadline: 'Frist',
    summaryUnderway: '<strong>{done} von {total}</strong> Phasen vergangen — dieser Studienbeginn läuft bereits. Wählen Sie den nächsten.',
    summaryNext: '<strong>{done} von {total}</strong> Phasen vergangen · nächste: <strong>{title}</strong> · {month}',
  },
};

const ja: TimelineStrings = {
  title: '出願スケジュールプランナー — 中国留学の締め切り',
  description: '入学時期を選ぶと、締め切りから逆算した中国留学の出願月別プランが得られます：大学選定、奨学金窓口、JW202とビザのマイルストーン。',
  crumb: 'スケジュールプランナー',
  toolsCrumb: 'ツール',
  hero: {
    eyebrow: '無料ツール · 1分',
    title: 'あなたの入学時期を逆算で計画。',
    lede: '最も多い避けられる失敗は、9月入学の準備を4月に始めること。入学時期を選ぶと、このプランナーが全フェーズを描き、すでに期限を迎えた項目を示します。',
  },
  howTo: {
    name: '中国大学出願スケジュールの立て方',
    description: '成功する中国大学出願の5つのフェーズ。あなたの入学時期から逆算します。',
    steps: [
      { name: 'プログラムを絞り込む', text: '成績・予算・都市の希望に合わせて、教育部認可の大学を3〜5校選びます — 挑戦1、本命1、可能性大1。' },
      { name: '書類を準備する', text: 'パスポート、成績証明書、卒業証明書、学習計画書、推薦状、健康診断 — 公証が要るものは公証を。2か月は見てください。' },
      { name: '出願と奨学金を提出する', text: '各窓口の期間内に大学への出願とCSC・省級奨学金の書類を提出。9月入学の奨学金締め切りは2月〜4月に集中します。' },
      { name: '合格 → JW202 → ビザ', text: '合格を受け入れ、合格通知書とJW202を追跡し、健康診断を済ませ、大使館でX1ビザを申請します。' },
      { name: '到着と登録', text: 'フライト、空港送迎、寮の入居、30日以内の居留許可、SIMカードと銀行口座。' },
    ],
  },
  intakeLabel: '目標の入学時期',
  intakes: { m2027_03: '2027年3月', m2027_09: '2027年9月', m2028_03: '2028年3月' },
  build: '自分のスケジュールを作成',
  reset: 'リセット',
  legend: {
    label: 'マーカーの見方',
    hard: '厳格な締め切り（逃すとこの入学時期を失います）',
    recommended: '推奨される月',
    tz: '日付は現地のタイムゾーンで表示されます。',
    cscBefore: 'CSCの窓口は大学ごとに異なります —',
    cscBold: '4月上旬',
    cscAfter: 'を奨学金書類の安全な締め切りと考えてください。',
  },
  script: {
    phases: [
      { title: '初期の決定', text: 'ルート（MBBS、工学、経営、言語）の確定、予算上限、都市候補の絞り込み。インド人MBBS出願者はNEETを受験。' },
      { title: '大学の絞り込みと指導教員への連絡', text: '3〜5校に絞る（挑戦 / 本命 / 安全）。研究系出願者：1ページの計画書を持って合う指導教員に連絡を開始。' },
      { title: '書類準備', text: '成績証明書、証明書、公証、学習計画書、推薦状、健康診断の予約。最も時間のかかるフェーズ — 丸2か月見てください。' },
      { title: '出願受付開始 — 早めに提出', text: '大学のポータルは約7か月前に開きます。今すぐ最初の出願を；早い書類ほど寮の決定も早く届きます。' },
      { title: 'CSC奨学金締め切りの壁', text: '9月入学のCSCタイプB窓口は2月〜4月に集中します。公式の締め切りにかかわらず、3月末までに奨学金を出願してください。' },
      { title: '自費出願の締め切り', text: '多くの提携大学で9月自費入学の最終受付。' },
      { title: '合格と受諾', text: '合格が届きます。受け入れ、諸費用の振込先は必ず大学の口座のみ、寮の希望を確認。' },
      { title: 'JW202と健康診断', text: '期限の週に合格通知書＋JW202を追跡。公式様式で健康診断を完了。' },
      { title: 'X1ビザの申請', text: '大使館/CVASCの予約に、パスポート、申請書、写真、合格通知書、JW202、健康診断記録を持参。処理は通常4〜7営業日。' },
      { title: '入学月 — 到着と登録', text: '到着、空港送迎、寮の入居、大学登録、30日以内の居留許可、SIM＋銀行口座。' },
    ],
    cscMarch: '3月入学のCSCタイプB窓口は前年秋（およそ6月〜9月）に開き、出発の数か月前に閉じます。各大学の当年の窓口を確認してください — 統一されていません。',
    portalsMarch: '大学のポータルは約7か月前に開きます。3月入学なら夏ごろ — 早めに提出；早い書類ほど寮の決定も早く届きます。',
    selfFundedMarch: '多くの提携大学で3月自費入学の最終受付 — 正確な日付は各窓口に確認してください。',
    passed: '経過',
    next: '次',
    deadline: '締め切り',
    summaryUnderway: '<strong>{done} / {total}</strong> フェーズが経過 — この入学時期はすでに始まっています。次を選んでください。',
    summaryNext: '<strong>{done} / {total}</strong> フェーズが経過 · 次：<strong>{title}</strong> · {month}',
  },
};

const pt: TimelineStrings = {
  title: 'Planejador de cronograma de candidatura — prazos para estudar na China',
  description:
    'Escolha seu ingresso e receba o plano de candidatura mês a mês para estudar na China, calculado de trás para frente a partir do prazo: pré-seleção, janelas de bolsas, JW202 e marcos do visto.',
  crumb: 'Planejador',
  toolsCrumb: 'Ferramentas',
  hero: {
    eyebrow: 'Ferramenta gratuita · 1 minuto',
    title: 'Seu ingresso, calculado de trás para frente.',
    lede: 'O erro evitável mais comum é começar em abril para setembro. Escolha seu ingresso — este planejador traça cada fase e mostra o que já venceu.',
  },
  howTo: {
    name: 'Como planejar o cronograma de candidatura a uma universidade chinesa',
    description: 'As cinco fases de uma candidatura bem-sucedida a uma universidade chinesa, calculadas de trás para frente a partir do seu ingresso.',
    steps: [
      { name: 'Pré-selecionar programas', text: 'Escolha 3–5 universidades listadas pelo MOE conforme suas notas, orçamento e preferência de cidade — uma ambiciosa, uma realista, uma de alta probabilidade.' },
      { name: 'Preparar documentos', text: 'Passaporte, históricos, certificados, plano de estudos, recomendações, exame médico — notarize o que precisar. Reserve dois meses.' },
      { name: 'Enviar candidaturas e bolsas', text: 'Envie as candidaturas universitárias e os dossiês de bolsa CSC/provincial dentro das janelas. Os prazos de bolsa se concentram de fevereiro a abril para setembro.' },
      { name: 'Aceite → JW202 → visto', text: 'Aceite a oferta, acompanhe a carta de aceitação e o JW202, complete o exame médico e protocolize o visto X1 na embaixada.' },
      { name: 'Chegar e matricular-se', text: 'Voo, recepção no aeroporto, check-in no alojamento, autorização de residência em 30 dias, chip e conta bancária.' },
    ],
  },
  intakeLabel: 'Ingresso alvo',
  intakes: { m2027_03: 'Março de 2027', m2027_09: 'Setembro de 2027', m2028_03: 'Março de 2028' },
  build: 'Montar meu cronograma',
  reset: 'Redefinir',
  legend: {
    label: 'Como ler os marcadores',
    hard: 'prazo rígido (perdê-lo custa o ingresso)',
    recommended: 'mês recomendado',
    tz: 'as datas aparecem no seu fuso horário local.',
    cscBefore: 'As janelas CSC variam por universidade — trate',
    cscBold: 'o início de abril',
    cscAfter: 'como o muro seguro para dossiês de bolsa.',
  },
  script: {
    phases: [
      { title: 'Decisões preliminares', text: 'Confirme a rota (MBBS, engenharia, negócios ou idioma), o teto de orçamento e a pré-seleção de cidades. Faça o NEET se for MBBS indiano.' },
      { title: 'Pré-seleção e contato com orientadores', text: 'Fixe 3–5 universidades (uma ambiciosa / uma realista / uma segura). Candidatos de pesquisa: começem a escrever a orientadores compatíveis com uma proposta de 1 página.' },
      { title: 'Preparação de documentos', text: 'Históricos, certificados, notarização, plano de estudos, cartas de recomendação, exame médico agendado. A fase mais lenta — reserve dois meses cheios.' },
      { title: 'Candidaturas abertas — envie cedo', text: 'Os portais universitários abrem cerca de 7 meses antes. Envie suas primeiras candidaturas agora; dossiês adiantados recebem antes as decisões de alojamento.' },
      { title: 'Muro dos prazos das bolsas CSC', text: 'As janelas CSC Tipo B se concentram de fevereiro a abril para setembro. Envie os dossiês de bolsa antes do fim de março, independentemente do prazo anunciado.' },
      { title: 'Prazo de candidatura autofinanciada', text: 'Últimas chamadas para a admissão autofinanciada de setembro na maioria das universidades parceiras.' },
      { title: 'Ofertas e aceite', text: 'As ofertas chegam. Aceite, pague qualquer depósito apenas na conta da UNIVERSIDADE e confirme as preferências de alojamento.' },
      { title: 'JW202 e exame médico', text: 'Corra atrás da carta de aceitação + JW202 na semana em que vencem. Complete o exame médico no formulário oficial.' },
      { title: 'Protocolo do visto X1', text: 'Agendamento na embaixada/CVASC com passaporte, formulários, fotos, carta de aceitação, JW202 e registro do exame médico. Processamento típico de 4–7 dias úteis.' },
      { title: 'Mês de ingresso — chegada e matrícula', text: 'Chegada, recepção no aeroporto, check-in no alojamento, matrícula na universidade, autorização de residência em 30 dias, chip + conta bancária.' },
    ],
    cscMarch:
      'As janelas CSC Tipo B para ingressos em março abrem no outono anterior (aproximadamente junho–setembro) e fecham meses antes da partida. Verifique a janela vigente de cada universidade — não são uniformes.',
    portalsMarch: 'Os portais universitários abrem cerca de 7 meses antes. Para ingressos em março isso cai perto do verão — envie cedo; dossiês adiantados recebem antes as decisões de alojamento.',
    selfFundedMarch: 'Últimas chamadas para a admissão autofinanciada de março na maioria das universidades parceiras — confirme as datas exatas com cada secretaria.',
    passed: 'passada',
    next: 'próxima',
    deadline: 'prazo',
    summaryUnderway: '<strong>{done} de {total}</strong> fases passadas — este ingresso já está em curso. Escolha o próximo.',
    summaryNext: '<strong>{done} de {total}</strong> fases passadas · próxima: <strong>{title}</strong> · {month}',
  },
};

const hi: TimelineStrings = {
  title: 'आवेदन टाइमलाइन प्लानर — चीन में पढ़ाई की डेडलाइन',
  description: 'अपना प्रवेश सत्र चुनें और डेडलाइन से पीछे की ओर गिना गया चीन में पढ़ाई का महीना-दर-महीना आवेदन प्लान पाएँ: शॉर्टलिस्ट, छात्रवृत्ति खिड़कियाँ, JW202 और वीज़ा मील पत्थर।',
  crumb: 'टाइमलाइन प्लानर',
  toolsCrumb: 'टूल्स',
  hero: {
    eyebrow: 'मुफ़्त टूल · 1 मिनट',
    title: 'आपका प्रवेश सत्र, पीछे की ओर योजना।',
    lede: 'सबसे आम बचने योग्य ग़लती: सितंबर के लिए अप्रैल में शुरुआत करना। अपना प्रवेश सत्र चुनें — यह प्लानर हर चरण मानचित्रित करता है और दिखाता है कि क्या पहले से देय है।',
  },
  howTo: {
    name: 'चीनी विश्वविद्यालय आवेदन टाइमलाइन कैसे बनाएँ',
    description: 'सफल चीनी विश्वविद्यालय आवेदन के पाँच चरण, आपके प्रवेश सत्र से पीछे की ओर गिने गए।',
    steps: [
      { name: 'प्रोग्राम शॉर्टलिस्ट करें', text: 'अपने अंक, बजट और शहर की पसंद के अनुसार 3–5 MOE-सूचीबद्ध विश्वविद्यालय चुनें — एक महत्वाकांक्षी, एक लक्ष्य, एक उच्च-संभावना।' },
      { name: 'दस्तावेज़ तैयार करें', text: 'पासपोर्ट, अंकसूचियाँ, प्रमाण पत्र, अध्ययन योजना, अनुशंसाएँ, स्वास्थ्य परीक्षा — जिसे नोटरीकरण चाहिए उसे कराएँ। दो महीने दें।' },
      { name: 'आवेदन और छात्रवृत्तियाँ भेजें', text: 'अपनी खिड़कियों के भीतर विश्वविद्यालय आवेदन और CSC/प्रांतीय छात्रवृत्ति फ़ाइलें भेजें। सितंबर के लिए छात्रवृत्ति डेडलाइन फरवरी–अप्रैल में केंद्रित हैं।' },
      { name: 'प्रवेश पत्र → JW202 → वीज़ा', text: 'प्रवेश पत्र स्वीकार करें, प्रवेश पत्र और JW202 का पीछा करें, स्वास्थ्य परीक्षा पूरी करें और दूतावास में X1 वीज़ा दर्ज करें।' },
      { name: 'पहुँचें और रजिस्टर करें', text: 'उड़ान, हवाई अड्डा पिकअप, छात्रावास चेक-इन, 30 दिन के भीतर निवास परमिट, SIM और बैंक खाता।' },
    ],
  },
  intakeLabel: 'लक्ष्य प्रवेश सत्र',
  intakes: { m2027_03: 'मार्च 2027', m2027_09: 'सितंबर 2027', m2028_03: 'मार्च 2028' },
  build: 'मेरी टाइमलाइन बनाएँ',
  reset: 'रीसेट',
  legend: {
    label: 'मार्कर पढ़ना',
    hard: 'कठोर डेडलाइन (छूट जाए तो प्रवेश सत्र चला जाता है)',
    recommended: 'अनुशंसित महीना',
    tz: 'तारीख़ें आपके स्थानीय टाइमज़ोन में दिखती हैं।',
    cscBefore: 'CSC खिड़कियाँ विश्वविद्यालय के अनुसार बदलती हैं —',
    cscBold: 'अप्रैल की शुरुआत',
    cscAfter: 'को छात्रवृत्ति फ़ाइलों की सुरक्षित दीवार मानें।',
  },
  script: {
    phases: [
      { title: 'प्रारंभिक निर्णय', text: 'रास्ता पक्का करें (MBBS, इंजीनियरिंग, व्यवसाय या भाषा), बजट सीमा और शहर शॉर्टलिस्ट। भारतीय MBBS हो तो NEET दें।' },
      { title: 'शॉर्टलिस्ट और पर्यवेक्षक संपर्क', text: '3–5 विश्वविद्यालय पक्के करें (एक महत्वाकांक्षी / एक लक्ष्य / एक सुरक्षित)। शोध आवेदक: 1-पृष्ठ प्रस्ताव के साथ उपयुक्त पर्यवेक्षकों को ईमेल करना शुरू करें।' },
      { title: 'दस्तावेज़ तैयारी', text: 'अंकसूचियाँ, प्रमाण पत्र, नोटरीकरण, अध्ययन योजना, अनुशंसा पत्र, स्वास्थ्य परीक्षा बुक। सबसे धीमा चरण — पूरे दो महीने दें।' },
      { title: 'आवेदन खुले — जल्दी भेजें', text: 'विश्वविद्यालय पोर्टल लगभग 7 महीने पहले खुलते हैं। अभी अपने पहले आवेदन भेजें; पहले भेजी फ़ाइलें छात्रावास निर्णय पहले पाती हैं।' },
      { title: 'CSC छात्रवृत्ति डेडलाइन की दीवार', text: 'सितंबर के लिए CSC टाइप B खिड़कियाँ फरवरी–अप्रैल में केंद्रित हैं। घोषित डेडलाइन चाहे जो हो, मार्च के अंत तक छात्रवृत्ति फ़ाइलें भेजें।' },
      { title: 'स्वयं वित्तपोषित आवेदन की डेडलाइन', text: 'अधिकांश साझेदार विश्वविद्यालयों में सितंबर स्वयं वित्तपोषित प्रवेश के अंतिम आह्वान।' },
      { title: 'प्रवेश पत्र और स्वीकृति', text: 'प्रवेश पत्र आते हैं। स्वीकार करें, कोई भी अग्रिम राशि केवल विश्वविद्यालय के खाते में भेजें, छात्रावास प्राथमिकताएँ पक्की करें।' },
      { title: 'JW202 और स्वास्थ्य परीक्षा', text: 'देय सप्ताह में प्रवेश पत्र + JW202 का पीछा करें। आधिकारिक फ़ॉर्म पर स्वास्थ्य परीक्षा पूरी करें।' },
      { title: 'X1 वीज़ा दर्ज करना', text: 'पासपोर्ट, फ़ॉर्म, फ़ोटो, प्रवेश पत्र, JW202 और स्वास्थ्य परीक्षा रिकॉर्ड के साथ दूतावास/CVASC अपॉइंटमेंट। सामान्य प्रक्रिया 4–7 कार्य दिवस।' },
      { title: 'प्रवेश माह — आगमन और पंजीकरण', text: 'उड़ान, हवाई अड्डा पिकअप, छात्रावास चेक-इन, विश्वविद्यालय पंजीकरण, 30 दिन के भीतर निवास परमिट, SIM + बैंक खाता।' },
    ],
    cscMarch: 'मार्च सत्रों के लिए CSC टाइप B खिड़कियाँ पिछली पतझड़ (लगभग जून–सितंबर) में खुलती हैं और प्रस्थान से महीने पहले बंद हो जाती हैं। हर विश्वविद्यालय की वर्तमान वर्ष की खिड़की जाँचें — वे एक समान नहीं हैं।',
    portalsMarch: 'विश्वविद्यालय पोर्टल लगभग 7 महीने पहले खुलते हैं। मार्च सत्र के लिए यह गर्मी के आसपास आता है — जल्दी भेजें; पहले भेजी फ़ाइलें छात्रावास निर्णय पहले पाती हैं।',
    selfFundedMarch: 'अधिकांश साझेदार विश्वविद्यालयों में मार्च स्वयं वित्तपोषित प्रवेश के अंतिम आह्वान — सटीक तारीख़ें हर कार्यालय से पुष्ट करें।',
    passed: 'बीत चुके',
    next: 'अगले',
    deadline: 'डेडलाइन',
    summaryUnderway: '<strong>{total} में से {done}</strong> चरण बीत चुके — यह प्रवेश सत्र पहले से चल रहा है। अगला चुनें।',
    summaryNext: '<strong>{total} में से {done}</strong> चरण बीत चुके · अगला: <strong>{title}</strong> · {month}',
  },
};

export const TIMELINE_STRINGS: Record<Locale, TimelineStrings> = { en, zh, fr, ar, es, de, ja, pt, hi };
