/** Tools index page strings (hub listing the five tools). */
import type { Locale } from '../../lib/i18n';

type Tool = { name: string; desc: string; time: string };

export interface ToolsIndexStrings {
  title: string;
  description: string;
  crumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    facts: [{ label: string; value: string }, { label: string; value: string }, { label: string; value: string }, { label: string; value: string }];
    action: string;
  };
  tools: [Tool, Tool, Tool, Tool, Tool];
  open: string;
  note: { bold: string; before: string; link: string; after: string };
}

const en: ToolsIndexStrings = {
  title: 'Free Tools — Fit Check, Cost Calculator, Scholarship & Visa Planning',
  description:
    'Five free tools for studying in China: a four-question fit check, scholarship eligibility bands, a cost calculator, a document checklist generator and an application timeline planner.',
  crumb: 'Tools',
  hero: {
    eyebrow: 'Free tools',
    title: 'Answers before advice.',
    lede: 'Five quick tools that give you real numbers and honest reads before you ever speak to us. No email walls, no fake precision.',
    facts: [
      { label: 'Tools', value: '05 free' },
      { label: 'Time', value: '1–3 minutes' },
      { label: 'Email', value: 'Not required' },
      { label: 'Answers', value: 'Real ranges' },
    ],
    action: 'Start with the fit check',
  },
  tools: [
    { name: 'Fit check', desc: 'Four questions — citizenship, qualification, field, intake. We answer yes, maybe, or not this intake, with the reason. The same first pass an advisor makes on a call.', time: '2 min' },
    { name: 'Scholarship eligibility check', desc: 'Where your marks and level actually sit for CSC full awards, provincial partials, or self-funded routes. Honest bands, no flattery.', time: '2 min' },
    { name: 'Cost of studying calculator', desc: 'Tuition plus living costs by city, programme and lifestyle — yearly and total, in USD, with the maths shown.', time: '1 min' },
    { name: 'Document checklist generator', desc: 'Your personalised document list by level, programme and scholarship route. Tick items off, save progress, print it.', time: '3 min' },
    { name: 'Application timeline planner', desc: 'Pick your intake and get the month-by-month plan worked backwards — deadlines marked, buffers included.', time: '1 min' },
  ],
  open: 'Open',
  note: {
    bold: 'Why no email wall?',
    before: 'Because the tools are more useful honest than gated. If the answers make you want a human conversation —',
    link: 'that page',
    after: 'is one click away.',
  },
};

const zh: ToolsIndexStrings = {
  title: '免费工具 — 适配检查、费用计算器、奖学金与签证规划',
  description: '五个中国留学免费工具：四个问题的适配检查、奖学金资格档位、费用计算器、文件清单生成器和申请时间线规划器。',
  crumb: '工具',
  hero: {
    eyebrow: '免费工具',
    title: '先有答案，再有建议。',
    lede: '五个快速工具，在您联系我们之前就给出真实的数字和坦诚的判断。没有邮箱门槛，没有虚假的精确。',
    facts: [
      { label: '工具', value: '5 个免费' },
      { label: '耗时', value: '1–3 分钟' },
      { label: '邮箱', value: '无需提供' },
      { label: '答案', value: '真实区间' },
    ],
    action: '从适配检查开始',
  },
  tools: [
    { name: '适配检查', desc: '四个问题——国籍、学历、专业、入学时间。我们回答可以、也许，或本次入学不行，并说明原因。与顾问电话中的第一轮判断相同。', time: '2 分钟' },
    { name: '奖学金资格检查', desc: '您的成绩和学习阶段在 CSC 全额奖学金、省级部分奖学金或自费路径中的真实位置。诚实的档位，不奉承。', time: '2 分钟' },
    { name: '留学费用计算器', desc: '按城市、专业和生活方式计算学费加生活费——年度和总额，以美元计，并展示计算过程。', time: '1 分钟' },
    { name: '文件清单生成器', desc: '按学习阶段、专业和奖学金路径生成您的个性化文件清单。勾选事项、保存进度、打印。', time: '3 分钟' },
    { name: '申请时间线规划器', desc: '选择您的入学时间，获得倒推的逐月计划——标出截止日期，预留缓冲。', time: '1 分钟' },
  ],
  open: '打开',
  note: {
    bold: '为什么没有邮箱门槛？',
    before: '因为工具坦诚比设门槛更有用。如果这些答案让您想与真人聊聊——',
    link: '联系页面',
    after: '只需一次点击。',
  },
};

const fr: ToolsIndexStrings = {
  title: 'Outils gratuits — test de compatibilité, calculateur de coûts, bourses et visa',
  description:
    'Cinq outils gratuits pour étudier en Chine : un test de compatibilité en quatre questions, des fourchettes d’éligibilité aux bourses, un calculateur de coûts, un générateur de liste de documents et un planificateur de calendrier de candidature.',
  crumb: 'Outils',
  hero: {
    eyebrow: 'Outils gratuits',
    title: 'Des réponses avant les conseils.',
    lede: 'Cinq outils rapides qui vous donnent de vrais chiffres et des avis honnêtes avant même de nous parler. Pas de mur d’e-mail, pas de fausse précision.',
    facts: [
      { label: 'Outils', value: '05 gratuits' },
      { label: 'Durée', value: '1–3 minutes' },
      { label: 'E-mail', value: 'Non requis' },
      { label: 'Réponses', value: 'Vraies fourchettes' },
    ],
    action: 'Commencer par le test de compatibilité',
  },
  tools: [
    { name: 'Test de compatibilité', desc: 'Quatre questions — nationalité, diplôme, filière, rentrée. Nous répondons oui, peut-être, ou pas cette rentrée, avec la raison. Le même premier tri qu’un conseiller fait au téléphone.', time: '2 min' },
    { name: 'Éligibilité aux bourses', desc: 'Où se situent vos notes et votre niveau pour les bourses CSC complètes, les bourses provinciales partielles ou l’autofinancement. Des fourchettes honnêtes, sans flatterie.', time: '2 min' },
    { name: 'Calculateur du coût des études', desc: 'Frais de scolarité plus coût de la vie par ville, programme et mode de vie — annuel et total, en USD, avec le calcul affiché.', time: '1 min' },
    { name: 'Générateur de liste de documents', desc: 'Votre liste de documents personnalisée selon le niveau, le programme et la voie de bourse. Cochez, enregistrez la progression, imprimez.', time: '3 min' },
    { name: 'Planificateur de calendrier de candidature', desc: 'Choisissez votre rentrée et obtenez le plan mois par mois calculé à rebours — échéances marquées, marges incluses.', time: '1 min' },
  ],
  open: 'Ouvrir',
  note: {
    bold: 'Pourquoi pas de mur d’e-mail ?',
    before: 'Parce que les outils sont plus utiles honnêtes que verrouillés. Si les réponses vous donnent envie d’une vraie conversation —',
    link: 'cette page',
    after: 'est à un clic.',
  },
};

const ar: ToolsIndexStrings = {
  title: 'أدوات مجانية — فحص الملاءمة وحاسبة التكاليف والمنح وتخطيط التأشيرة',
  description:
    'خمس أدوات مجانية للدراسة في الصين: فحص ملاءمة من أربعة أسئلة، ونطاقات أهلية المنح، وحاسبة تكاليف، ومولّد قائمة مستندات، ومخطط جدول زمني للتقديم.',
  crumb: 'الأدوات',
  hero: {
    eyebrow: 'أدوات مجانية',
    title: 'إجابات قبل النصيحة.',
    lede: 'خمس أدوات سريعة تعطيك أرقاماً حقيقية وقراءات صادقة قبل أن تتحدث إلينا. بلا حواجز بريد إلكتروني، وبلا دقة زائفة.',
    facts: [
      { label: 'الأدوات', value: '05 مجانية' },
      { label: 'الوقت', value: '1–3 دقائق' },
      { label: 'البريد', value: 'غير مطلوب' },
      { label: 'الإجابات', value: 'نطاقات حقيقية' },
    ],
    action: 'ابدأ بفحص الملاءمة',
  },
  tools: [
    { name: 'فحص الملاءمة', desc: 'أربعة أسئلة — الجنسية والمؤهل والتخصص وموعد الالتحاق. نجيب بنعم أو ربما أو ليس في هذا الموعد، مع السبب. وهو نفس الفرز الأول الذي يجريه المستشار في المكالمة.', time: 'دقيقتان' },
    { name: 'فحص أهلية المنح', desc: 'أين تقع درجاتك ومستواك من منح CSC الكاملة والمنح الإقليمية الجزئية أو مسارات التمويل الذاتي. نطاقات صادقة دون مجاملة.', time: 'دقيقتان' },
    { name: 'حاسبة تكلفة الدراسة', desc: 'الرسوم الدراسية مع تكاليف المعيشة بحسب المدينة والبرنامج ونمط الحياة — سنوياً وإجمالاً بالدولار، مع إظهار الحساب.', time: 'دقيقة' },
    { name: 'مولّد قائمة المستندات', desc: 'قائمة مستنداتك المخصصة بحسب المستوى والبرنامج ومسار المنحة. ضع علامة على البنود واحفظ التقدم واطبعها.', time: '3 دقائق' },
    { name: 'مخطط الجدول الزمني للتقديم', desc: 'اختر موعد التحاقك واحصل على خطة شهرية محسوبة عكسياً — المواعيد النهائية معلّمة والمهل الاحتياطية مضمّنة.', time: 'دقيقة' },
  ],
  open: 'افتح',
  note: {
    bold: 'لماذا لا حاجز بريد إلكتروني؟',
    before: 'لأن الأدوات أنفع حين تكون صادقة لا مقيّدة. وإن جعلتك الإجابات ترغب في محادثة مع شخص حقيقي —',
    link: 'صفحة التواصل',
    after: 'على بعد نقرة واحدة.',
  },
};

const es: ToolsIndexStrings = {
  title: 'Herramientas gratis — prueba de compatibilidad, calculadora de costos, becas y visa',
  description:
    'Cinco herramientas gratis para estudiar en China: una prueba de compatibilidad de cuatro preguntas, rangos de elegibilidad para becas, una calculadora de costos, un generador de lista de documentos y un planificador de cronograma de solicitud.',
  crumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramientas gratis',
    title: 'Respuestas antes que consejos.',
    lede: 'Cinco herramientas rápidas que le dan cifras reales y lecturas honestas antes de hablar con nosotros. Sin muros de correo electrónico, sin falsa precisión.',
    facts: [
      { label: 'Herramientas', value: '05 gratis' },
      { label: 'Tiempo', value: '1–3 minutos' },
      { label: 'Correo', value: 'No requerido' },
      { label: 'Respuestas', value: 'Rangos reales' },
    ],
    action: 'Empezar con la prueba de compatibilidad',
  },
  tools: [
    { name: 'Prueba de compatibilidad', desc: 'Cuatro preguntas — nacionalidad, titulación, campo, ingreso. Respondemos sí, quizás o no en este ingreso, con el motivo. El mismo primer filtro que hace un asesor por teléfono.', time: '2 min' },
    { name: 'Elegibilidad para becas', desc: 'Dónde se sitúan sus calificaciones y nivel para becas CSC completas, parciales provinciales o rutas autofinanciadas. Rangos honestos, sin halagos.', time: '2 min' },
    { name: 'Calculadora del costo de estudiar', desc: 'Matrícula más costo de vida por ciudad, programa y estilo de vida — anual y total, en USD, con las cuentas a la vista.', time: '1 min' },
    { name: 'Generador de lista de documentos', desc: 'Su lista de documentos personalizada por nivel, programa y ruta de beca. Marque elementos, guarde el progreso e imprima.', time: '3 min' },
    { name: 'Planificador de cronograma de solicitud', desc: 'Elija su ingreso y obtenga el plan mes a mes calculado hacia atrás — plazos marcados, márgenes incluidos.', time: '1 min' },
  ],
  open: 'Abrir',
  note: {
    bold: '¿Por qué no hay muro de correo?',
    before: 'Porque las herramientas son más útiles honestas que bloqueadas. Si las respuestas le hacen querer una conversación humana —',
    link: 'esa página',
    after: 'está a un clic.',
  },
};

const de: ToolsIndexStrings = {
  title: 'Kostenlose Tools — Eignungscheck, Kostenrechner, Stipendien & Visum-Planung',
  description:
    'Fünf kostenlose Tools für ein Studium in China: ein Eignungscheck mit vier Fragen, Stipendien-Stufen, ein Kostenrechner, ein Dokumenten-Checklisten-Generator und ein Bewerbungszeitplaner.',
  crumb: 'Tools',
  hero: {
    eyebrow: 'Kostenlose Tools',
    title: 'Erst die Antwort, dann der Rat.',
    lede: 'Fünf schnelle Tools, die Ihnen echte Zahlen und ehrliche Einschätzungen liefern, bevor Sie überhaupt mit uns sprechen. Keine E-Mail-Hürden, keine Scheingenauigkeit.',
    facts: [
      { label: 'Tools', value: '05 kostenlos' },
      { label: 'Zeit', value: '1–3 Minuten' },
      { label: 'E-Mail', value: 'Nicht erforderlich' },
      { label: 'Antworten', value: 'Echte Spannen' },
    ],
    action: 'Mit dem Eignungscheck starten',
  },
  tools: [
    { name: 'Eignungscheck', desc: 'Vier Fragen — Staatsangehörigkeit, Qualifikation, Fachrichtung, Studienbeginn. Wir antworten ja, vielleicht oder nicht in dieser Aufnahme — mit Begründung. Derselbe erste Eindruck wie ein Berater am Telefon.', time: '2 Min.' },
    { name: 'Stipendien-Check', desc: 'Wo Ihre Noten und Ihr Niveau tatsächlich stehen für volle CSC-Stipendien, Provinz-Teilstipendien oder den selbstfinanzierten Weg. Ehrliche Stufen, keine Schmeichelei.', time: '2 Min.' },
    { name: 'Kostenrechner für das Studium', desc: 'Studiengebühren plus Lebenshaltungskosten nach Stadt, Programm und Lebensstil — jährlich und gesamt, in USD, mit nachvollziehbarer Rechnung.', time: '1 Min.' },
    { name: 'Dokumenten-Checklisten-Generator', desc: 'Ihre persönliche Dokumentenliste nach Level, Programm und Stipendienweg. Punkte abhaken, Fortschritt speichern, ausdrucken.', time: '3 Min.' },
    { name: 'Bewerbungszeitplaner', desc: 'Wählen Sie Ihren Studienbeginn und erhalten Sie den Monat-für-Monat-Plan rückwärts gerechnet — Fristen markiert, Puffer eingerechnet.', time: '1 Min.' },
  ],
  open: 'Öffnen',
  note: {
    bold: 'Warum keine E-Mail-Hürde?',
    before: 'Weil die Tools ehrlicher nützlicher sind als hinter einer Schranke. Wenn die Antworten Sie zu einem Gespräch mit einem Menschen verleiten —',
    link: 'diese Seite',
    after: 'ist nur einen Klick entfernt.',
  },
};

const ja: ToolsIndexStrings = {
  title: '無料ツール — 適性チェック、費用計算、奨学金・ビザ計画',
  description: '中国留学のための5つの無料ツール：4つの質問の適性チェック、奨学金受給ランク、費用計算ツール、書類チェックリスト生成ツール、出願スケジュールプランナー。',
  crumb: 'ツール',
  hero: {
    eyebrow: '無料ツール',
    title: 'まず答え、その後にアドバイス。',
    lede: 'ご連絡いただく前に、実際の数字と正直な評価をお届けする5つのクイックツール。メールアドレスの登録も、見せかけの精度もありません。',
    facts: [
      { label: 'ツール', value: '5つ無料' },
      { label: '所要時間', value: '1〜3分' },
      { label: 'メール', value: '不要' },
      { label: '回答', value: '実際の幅' },
    ],
    action: '適性チェックから始める',
  },
  tools: [
    { name: '適性チェック', desc: '4つの質問 — 国籍、学歴、専攻、入学時期。回答は「可」「要検討」「今回は不可」のいずれかと、その理由。アドバイザーが電話で行う最初のふるい分けと同じものです。', time: '2分' },
    { name: '奨学金受給資格チェック', desc: 'あなたの成績と学習段階が、CSC全額奨学金、省級部分奨学金、自費ルートのどの水準に当てはまるか。正直なランク表示で、お世辞はありません。', time: '2分' },
    { name: '留学費用計算ツール', desc: '都市・プログラム・ライフスタイル別の学費と生活費 — 年間と総額を米ドルで、計算過程も表示します。', time: '1分' },
    { name: '書類チェックリスト生成ツール', desc: '学習段階・プログラム・奨学金ルートに応じたあなた専用の書類リスト。項目にチェックを付け、進捗を保存して印刷できます。', time: '3分' },
    { name: '出願スケジュールプランナー', desc: '入学時期を選ぶと、締め切りから逆算した月別プランを作成 — 締め切りを明示し、余裕も織り込み済み。', time: '1分' },
  ],
  open: '開く',
  note: {
    bold: 'なぜメールの壁がないのか？',
    before: '正直なほうが、登録を求めるより役に立つからです。この答えを見て、人と話したくなったら —',
    link: 'そのページ',
    after: 'ワンクリックでアクセスできます。',
  },
};

const pt: ToolsIndexStrings = {
  title: 'Ferramentas gratuitas — teste de compatibilidade, calculadora de custos, bolsas e planejamento de visto',
  description:
    'Cinco ferramentas gratuitas para estudar na China: um teste de compatibilidade de quatro perguntas, faixas de elegibilidade para bolsas, uma calculadora de custos, um gerador de lista de documentos e um planejador de cronograma de candidatura.',
  crumb: 'Ferramentas',
  hero: {
    eyebrow: 'Ferramentas gratuitas',
    title: 'Respostas antes dos conselhos.',
    lede: 'Cinco ferramentas rápidas que trazem números reais e leituras honestas antes de você falar conosco. Sem barreiras de e-mail, sem precisão falsa.',
    facts: [
      { label: 'Ferramentas', value: '05 gratuitas' },
      { label: 'Tempo', value: '1–3 minutos' },
      { label: 'E-mail', value: 'Não é necessário' },
      { label: 'Respostas', value: 'Faixas reais' },
    ],
    action: 'Começar pelo teste de compatibilidade',
  },
  tools: [
    { name: 'Teste de compatibilidade', desc: 'Quatro perguntas — cidadania, qualificação, área e ingresso. Respondemos sim, talvez ou não neste ingresso, com o motivo. A mesma primeira análise que um consultor faz por telefone.', time: '2 min' },
    { name: 'Verificação de elegibilidade para bolsas', desc: 'Onde suas notas e seu nível realmente se situam para bolsas CSC integrais, parciais provinciais ou rotas autofinanciadas. Faixas honestas, sem bajulação.', time: '2 min' },
    { name: 'Calculadora do custo de estudar', desc: 'Mensalidade mais custos de vida por cidade, programa e estilo de vida — anual e total, em USD, com as contas à vista.', time: '1 min' },
    { name: 'Gerador de lista de documentos', desc: 'Sua lista de documentos personalizada por nível, programa e rota de bolsa. Marque itens, salve o progresso e imprima.', time: '3 min' },
    { name: 'Planejador de cronograma de candidatura', desc: 'Escolha seu ingresso e receba o plano mês a mês calculado de trás para frente — prazos marcados, folgas incluídas.', time: '1 min' },
  ],
  open: 'Abrir',
  note: {
    bold: 'Por que não há barreira de e-mail?',
    before: 'Porque as ferramentas são mais úteis honestas do que bloqueadas. Se as respostas lhe derem vontade de conversar com alguém —',
    link: 'essa página',
    after: 'está a um clique.',
  },
};

const hi: ToolsIndexStrings = {
  title: 'मुफ़्त टूल्स — फिट चेक, लागत कैलकुलेटर, छात्रवृत्ति और वीज़ा योजना',
  description: 'चीन में पढ़ाई के लिए पाँच मुफ़्त टूल्स: चार सवालों का फिट चेक, छात्रवृत्ति पात्रता स्तर, लागत कैलकुलेटर, दस्तावेज़ चेकलिस्ट जेनरेटर और आवेदन टाइमलाइन प्लानर।',
  crumb: 'टूल्स',
  hero: {
    eyebrow: 'मुफ़्त टूल्स',
    title: 'पहले जवाब, फिर सलाह।',
    lede: 'पाँच त्वरित टूल्स जो हमसे बात करने से पहले ही असली आंकड़े और ईमानदार आकलन देते हैं। न ईमेल की दीवार, न कृत्रिम सटीकता।',
    facts: [
      { label: 'टूल्स', value: '05 मुफ़्त' },
      { label: 'समय', value: '1–3 मिनट' },
      { label: 'ईमेल', value: 'आवश्यक नहीं' },
      { label: 'जवाब', value: 'असली रेंज' },
    ],
    action: 'फिट चेक से शुरू करें',
  },
  tools: [
    { name: 'फिट चेक', desc: 'चार सवाल — नागरिकता, योग्यता, क्षेत्र, प्रवेश सत्र। हमारा जवाब: हाँ, शायद, या इस सत्र में नहीं — कारण के साथ। वही पहला आकलन जो सलाहकार फ़ोन पर करता है।', time: '2 मिनट' },
    { name: 'छात्रवृत्ति पात्रता जाँच', desc: 'CSC पूर्ण छात्रवृत्ति, प्रांतीय आंशिक छात्रवृत्ति या स्वयं वित्तपोषित रास्ते के लिए आपके अंक और स्तर असल में कहाँ खड़े हैं। ईमानदार स्तर, चापलूसी नहीं।', time: '2 मिनट' },
    { name: 'पढ़ाई की लागत कैलकुलेटर', desc: 'शहर, प्रोग्राम और जीवनशैली के अनुसार ट्यूशन फीस और रहन-सहन का खर्च — सालाना और कुल, USD में, हिसाब दिखाते हुए।', time: '1 मिनट' },
    { name: 'दस्तावेज़ चेकलिस्ट जेनरेटर', desc: 'स्तर, प्रोग्राम और छात्रवृत्ति रास्ते के अनुसार आपकी व्यक्तिगत दस्तावेज़ सूची। आइटम पर टिक करें, प्रगति सहेजें, प्रिंट करें।', time: '3 मिनट' },
    { name: 'आवेदन टाइमलाइन प्लानर', desc: 'अपना प्रवेश सत्र चुनें और पीछे की ओर गिना गया महीना-दर-महीना प्लान पाएँ — डेडलाइन चिह्नित, बफ़र शामिल।', time: '1 मिनट' },
  ],
  open: 'खोलें',
  note: {
    bold: 'ईमेल की दीवार क्यों नहीं?',
    before: 'क्योंकि ईमानदार टूल्स बंद टूल्स से ज़्यादा काम के हैं। अगर ये जवाब आपको किसी इंसान से बात करने के लिए प्रेरित करें —',
    link: 'वह पेज',
    after: 'एक क्लिक की दूरी पर है।',
  },
};

export const TOOLS_INDEX_STRINGS: Record<Locale, ToolsIndexStrings> = { en, zh, fr, ar, es, de, ja, pt, hi };
