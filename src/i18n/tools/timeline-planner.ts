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

export const TIMELINE_STRINGS: Record<Locale, TimelineStrings> = { en, zh, fr, ar, es };
