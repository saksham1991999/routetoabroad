/**
 * About page copy — every user-visible string on the shared AboutPage
 * component, keyed by locale. English is the source of truth; zh/fr/ar/es
 * are machine-assisted translations that follow the terminology already
 * established in src/i18n/ui.ts and still need native-speaker review.
 *
 * Facts (NAP details, founder names/roles/bios) are never inlined here:
 * the component reads them from src/lib/site.ts, CLAIMS and src/data/authors.ts.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * AboutStrings interface, so a key added to `en` breaks the build until all
 * four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface AboutStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb label for /about. */
  crumb: string;
  hero: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    /** At-a-glance facts in the hero rail. */
    facts: { label: string; value: string }[];
    /** Labels of the two hero actions (hrefs stay in the component). */
    actionTeam: string;
    actionTalk: string;
    /** Anchor-jump labels: story / values / team. */
    jumps: [string, string, string];
  };
  story: {
    lead: string;
    /** Contains the <em> markup — rendered with set:html. */
    built: string;
    quote: string;
    after: string;
  };
  nap: {
    /** Accessible name of the company-details aside. */
    aria: string;
    eyebrow: string;
    foundedLabel: string;
    /** Parenthetical appended after SITE.founded. */
    foundedNote: string;
    officesLabel: string;
    emailLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    studentsLabel: string;
    ratingLabel: string;
    note: string;
  };
  values: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    items: { title: string; text: string }[];
  };
  team: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    /** "Portrait of {name}" — {name} is replaced with the founder's name. */
    portraitAlt: string;
    /** Team note split around the insights-page link (href stays in the component). */
    notePre: string;
    noteLink: string;
    notePost: string;
  };
}

export const ABOUT: Record<Locale, AboutStrings> = {
  en: {
    meta: {
      title: 'About Us — The People Behind RouteToAbroad',
      description:
        'RouteToAbroad runs from New Delhi and Guangzhou: founder-led education placement, tourism and India–China trade services. Meet the team and the standard we work to.',
    },
    crumb: 'About',
    hero: {
      eyebrow: 'About us',
      index: 'ABT / 07',
      title: "We don't just connect countries. We connect people.",
      lede: 'A founder-led consultancy working one corridor deeply — India and East Asia — with offices in both and something to lose in both.',
      facts: [
        { label: 'Offices', value: 'Delhi · Guangzhou' },
        { label: 'Practice', value: 'Edu · Travel · Trade' },
        { label: 'Team', value: 'Founder-led' },
        { label: 'Standard', value: 'No shortcuts' },
      ],
      actionTeam: 'Meet the team',
      actionTalk: 'Talk to us',
      jumps: ['Story', 'Values', 'Team'],
    },
    story: {
      lead: 'RouteToAbroad began with a simple observation: the India–East Asia corridor was full of brokers, and short on accountable operators. Students were sold universities no one had visited. Importers wired deposits to factories no one had audited. Travellers saw the wall but not the country.',
      built:
        'So we built the firm we wished existed — one team that works <em>both</em> sides of the corridor professionally, with offices in New Delhi and Guangzhou, and staff who answer their phones on Saturday. Education led the way; the travel and trade desks grew out of the same network, the same standard, and the same families asking for one more kind of help.',
      quote:
        '"A student today is a trade partner tomorrow. A tourist today is an investor tomorrow."',
      after:
        'The corridor rewards operators who treat compliance as a product feature and honesty as a differentiator. That has been the job from day one — and it is why our students arrive, our containers clear, and our travellers come back.',
    },
    nap: {
      aria: 'Company details',
      eyebrow: 'Entity details',
      foundedLabel: 'Founded',
      foundedNote: '',
      officesLabel: 'Offices',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      hoursLabel: 'Hours',
      studentsLabel: 'Students placed',
      ratingLabel: 'Google rating',
      note: 'Consistent NAP details — also published in our structured data.',
    },
    values: {
      eyebrow: 'Values',
      index: '01 / 02',
      title: "Three rules we don't break",
      lede: 'They cost us deals. They keep clients for decades.',
      items: [
        {
          title: 'Relationships over transactions',
          text: 'We have taken students whose parents we later built trade relationships with, and tourists who came back as investors. The desk optimises for the decade, not the invoice.',
        },
        {
          title: 'Both sides of the bridge',
          text: 'Delhi answers to Indian families; Guangzhou answers to Chinese universities and factories. Each office can tell the other an uncomfortable truth — that is the point of having two.',
        },
        {
          title: 'No shortcuts',
          text: 'No guaranteed-admission promises, no fake scholarship letters, no document "adjustments". A false document ends an application; a false promise ends a firm. We intend to be here in twenty years.',
        },
      ],
    },
    team: {
      eyebrow: 'Leadership',
      index: '02 / 02',
      title: 'The two names on the door',
      lede: "A small senior team on purpose. Every file has a name attached, and it's one of these.",
      portraitAlt: 'Portrait of {name}',
      notePre: "Student contributors write with us too — you'll find their bylines on the ",
      noteLink: 'insights page',
      notePost: '.',
    },
  },

  zh: {
    meta: {
      title: '关于我们 — RouteToAbroad 背后的团队',
      description:
        'RouteToAbroad 在新德里和广州运营：创始人主导的留学申请、旅游与印度—中国贸易服务。了解我们的团队，以及我们坚持的工作标准。',
    },
    crumb: '关于我们',
    hero: {
      eyebrow: '关于我们',
      index: 'ABT / 07',
      title: '我们连接的不只是国家，更是人。',
      lede: '一家创始人主导的咨询公司，深耕一条走廊——印度与东亚——两侧均设办公室，两侧都有投入。',
      facts: [
        { label: '办公室', value: '德里 · 广州' },
        { label: '业务', value: '教育 · 旅游 · 贸易' },
        { label: '团队', value: '创始人主导' },
        { label: '标准', value: '不抄近路' },
      ],
      actionTeam: '认识团队',
      actionTalk: '联系我们',
      jumps: ['故事', '价值观', '团队'],
    },
    story: {
      lead: 'RouteToAbroad 源于一个简单的观察：印度—东亚走廊上中介很多，真正负责任的运营者很少。学生被推销进没人实地考察过的大学；进口商把定金打给没人审计过的工厂；旅行者看到了长城，却没看到这个国家。',
      built:
        '于是我们建成了我们希望存在的那家公司——一个团队以专业身份同时运营走廊<em>两侧</em>，在新德里和广州设有办公室，员工周六也会接电话。教育业务先行；旅游与贸易板块生长自同一网络、同一标准，以及同一批家庭提出的又一种需求。',
      quote: '“今天的学生，就是明天的贸易伙伴。今天的游客，就是明天的投资者。”',
      after:
        '这条走廊奖励把合规当作产品特性、把诚实当作差异化的运营者。从第一天起这就是我们的工作——也是为什么我们的学生如期抵达、我们的集装箱顺利清关、我们的旅行者一再回来。',
    },
    nap: {
      aria: '公司信息',
      eyebrow: '主体信息',
      foundedLabel: '成立年份',
      foundedNote: '（深耕走廊十余年）',
      officesLabel: '办公室',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      hoursLabel: '工作时间',
      studentsLabel: '成功入学',
      ratingLabel: 'Google 评分',
      note: 'NAP 信息保持一致——同样发布在我们的结构化数据中。',
    },
    values: {
      eyebrow: '价值观',
      index: '01 / 02',
      title: '我们绝不打破的三条规则',
      lede: '它们让我们丢过生意，也让客户留了我们几十年。',
      items: [
        {
          title: '关系重于交易',
          text: '我们送过学生，后来又与学生家长做起了贸易生意；也接待过回来投资的游客。这张办公桌为十年做打算，而不是为一笔账单。',
        },
        {
          title: '桥梁的两侧',
          text: '德里对接印度的家庭；广州对接中国的大学与工厂。每个办公室都可以对另一个说出不舒服的真相——这正是设两个办公室的意义。',
        },
        {
          title: '不抄近路',
          text: '不做“保录取”的承诺，不出具虚假奖学金信，不做文件“调整”。一份假文件会终结一次申请；一个假承诺会终结一家公司。我们打算在这里做二十年。',
        },
      ],
    },
    team: {
      eyebrow: '管理层',
      index: '02 / 02',
      title: '门上写着的那两个名字',
      lede: '我们刻意保持小而资深。每一份文件都有具体的负责人，就在这两位之中。',
      portraitAlt: '{name} 的肖像',
      notePre: '学生投稿人也与我们一同写作——你可以在 ',
      noteLink: '洞察页',
      notePost: ' 看到他们的署名。',
    },
  },

  fr: {
    meta: {
      title: 'À propos — Les visages derrière RouteToAbroad',
      description:
        'RouteToAbroad opère depuis New Delhi et Canton : placement universitaire mené par les fondateurs, tourisme et services de commerce Inde–Chine. Rencontrez l’équipe et l’exigence de notre travail.',
    },
    crumb: 'À propos',
    hero: {
      eyebrow: 'À propos',
      index: 'ABT / 07',
      title: 'Nous ne connectons pas seulement des pays. Nous connectons des personnes.',
      lede: 'Un conseil mené par ses fondateurs, qui travaille un seul corridor en profondeur — l’Inde et l’Asie de l’Est — avec des bureaux des deux côtés et quelque chose à perdre des deux côtés.',
      facts: [
        { label: 'Bureaux', value: 'Delhi · Canton' },
        { label: 'Pratique', value: 'Études · Voyages · Commerce' },
        { label: 'Équipe', value: 'Menée par les fondateurs' },
        { label: 'Standard', value: 'Sans raccourci' },
      ],
      actionTeam: 'Rencontrer l’équipe',
      actionTalk: 'Parlez-nous',
      jumps: ['Histoire', 'Valeurs', 'Équipe'],
    },
    story: {
      lead: 'RouteToAbroad est née d’une observation simple : le corridor Inde–Asie de l’Est débordait d’intermédiaires et manquait d’opérateurs responsables. On a vendu à des étudiants des universités que personne n’avait visitées. Des importateurs ont viré des acomptes à des usines que personne n’avait auditées. Les voyageurs voyaient la Muraille, pas le pays.',
      built:
        'Alors nous avons bâti la société que nous aurions voulu exister — une seule équipe qui travaille <em>les deux</em> côtés du corridor professionnellement, avec des bureaux à New Delhi et Canton, et des collaborateurs qui décrochent le samedi. Les études ont ouvert la voie ; les pôles voyage et commerce ont grandi du même réseau, du même standard et des mêmes familles qui demandaient un type d’aide de plus.',
      quote:
        '« Un étudiant aujourd’hui, c’est un partenaire commercial demain. Un touriste aujourd’hui, c’est un investisseur demain. »',
      after:
        'Le corridor récompense les opérateurs qui traitent la conformité comme une fonctionnalité du produit et l’honnêteté comme un différenciateur. C’est le travail depuis le premier jour — et c’est pourquoi nos étudiants arrivent, nos conteneurs passent les douanes et nos voyageurs reviennent.',
    },
    nap: {
      aria: 'Coordonnées de la société',
      eyebrow: 'Détails de l’entité',
      foundedLabel: 'Fondation',
      foundedNote: '(présents sur le corridor depuis plus d’une décennie)',
      officesLabel: 'Bureaux',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      hoursLabel: 'Horaires',
      studentsLabel: 'Étudiants placés',
      ratingLabel: 'Note Google',
      note: 'Coordonnées NAP cohérentes — également publiées dans nos données structurées.',
    },
    values: {
      eyebrow: 'Valeurs',
      index: '01 / 02',
      title: 'Trois règles que nous ne brisons pas',
      lede: 'Elles nous coûtent des contrats. Elles gardent les clients des décennies.',
      items: [
        {
          title: 'Les relations avant les transactions',
          text: 'Nous avons accompagné des étudiants dont les parents sont devenus ensuite des partenaires commerciaux, et des touristes revenus en investisseurs. Le bureau optimise pour la décennie, pas pour la facture.',
        },
        {
          title: 'Les deux côtés du pont',
          text: 'Delhi répond aux familles indiennes ; Canton répond aux universités et usines chinoises. Chaque bureau peut dire à l’autre une vérité inconfortable — c’est tout l’intérêt d’en avoir deux.',
        },
        {
          title: 'Aucun raccourci',
          text: 'Pas de promesses d’admission garantie, pas de fausses lettres de bourse, pas d’« ajustement » de documents. Un faux document clôt une candidature ; une fausse promesse clôt une société. Nous comptons être là dans vingt ans.',
        },
      ],
    },
    team: {
      eyebrow: 'Direction',
      index: '02 / 02',
      title: 'Les deux noms sur la porte',
      lede: 'Une petite équipe senior, c’est voulu. Chaque dossier porte un nom — et c’est l’un de ceux-là.',
      portraitAlt: 'Portrait de {name}',
      notePre: 'Des étudiants contributeurs écrivent aussi avec nous — leurs signatures sont sur la ',
      noteLink: 'page analyses',
      notePost: '.',
    },
  },

  ar: {
    meta: {
      title: 'من نحن — الأشخاص الذين يقفون خلف RouteToAbroad',
      description:
        'تُدير RouteToAbroad أعمالها من نيودلهي وقوانغتشو: قبول جامعي بقيادة المؤسسين، وخدمات سياحة وتجارة بين الهند والصين. تعرّف على الفريق والمعيار الذي نعمل به.',
    },
    crumb: 'من نحن',
    hero: {
      eyebrow: 'من نحن',
      index: 'ABT / 07',
      title: 'نحن لا نربط الدول فقط، بل نربط الناس.',
      lede: 'شركة استشارات يقودها مؤسسوها، تعمل على ممر واحد بعمق — الهند وشرق آسيا — بمكتبين على الجانبين واهتمام حقيقي في كليهما.',
      facts: [
        { label: 'المكاتب', value: 'دلهي · قوانغتشو' },
        { label: 'المجال', value: 'تعليم · سفر · تجارة' },
        { label: 'الفريق', value: 'قيادة المؤسسين' },
        { label: 'المعيار', value: 'بلا اختصارات' },
      ],
      actionTeam: 'تعرّف على الفريق',
      actionTalk: 'تحدث إلينا',
      jumps: ['القصة', 'القيم', 'الفريق'],
    },
    story: {
      lead: 'بدأت RouteToAbroad بملاحظة بسيطة: ممر الهند وشرق آسيا كان مليئًا بالوسطاء وشحيحًا في المشغّلين المسؤولين. بِيع للطلاب جامعات لم يزرها أحد. حوّل المستوردون ودائع إلى مصانع لم يدققها أحد. ورأى المسافرون السور لا البلد.',
      built:
        'لذلك بنينا الشركة التي تمنينا وجودها — فريق واحد يعمل <em>الجانبين</em> من الممر باحترافية، بمكاتب في نيودلهي وقوانغتشو، وموظفين يردّون على هواتفهم يوم السبت. قاد التعليم الطريق؛ ونما مكتبا السفر والتجارة من الشبكة نفسها والمعيار نفسه والعائلات نفسها التي تطلب نوعًا إضافيًا من المساعدة.',
      quote: '«الطالب اليوم شريك تجارة غدًا. والسائح اليوم مستثمر غدًا.»',
      after:
        'الممر يكافئ المشغّلين الذين يتعاملون مع الالتزام النظامي كميزة في المنتج والصدق كميزة تنافسية. هذه كانت المهمة منذ اليوم الأول — ولهذا يصل طلابنا، وتُخلّى حاوياتنا، ويعود مسافرونا.',
    },
    nap: {
      aria: 'بيانات الشركة',
      eyebrow: 'بيانات المنشأة',
      foundedLabel: 'تأسست',
      foundedNote: '(حاضرون على الممر لأكثر من عقد)',
      officesLabel: 'المكاتب',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      hoursLabel: 'ساعات العمل',
      studentsLabel: 'طلاب التحقوا بجامعات',
      ratingLabel: 'تقييم Google',
      note: 'بيانات NAP متسقة — منشورة أيضًا في بياناتنا المنظمة.',
    },
    values: {
      eyebrow: 'القيم',
      index: '01 / 02',
      title: 'ثلاث قواعد لا نكسرها',
      lede: 'كلفتنا صفقات. وأبقت العملاء لعقود.',
      items: [
        {
          title: 'العلاقات قبل الصفقات',
          text: 'قبلنا طلابًا بنينا لاحقًا علاقات تجارية مع آبائهم، وسائحين عادوا مستثمرين. هذا المكتب يخطّط للعقد لا للفاتورة.',
        },
        {
          title: 'الجانبان من الجسر',
          text: 'دلهي تجيب أمام العائلات الهندية؛ وقوانغتشو تجيب أمام الجامعات والمصانع الصينية. لكل مكتب أن يقول للآخر حقيقة غير مريحة — وهذا هو الغرض من وجود اثنين.',
        },
        {
          title: 'بلا اختصارات',
          text: 'لا وعود بقبول مضمون، ولا خطابات منح مزيفة، ولا «تعديلات» على المستندات. المستند المزيف ينهي طلبًا؛ والوعد الكاذب ينهي شركة. نخطط أن نكون هنا بعد عشرين عامًا.',
        },
      ],
    },
    team: {
      eyebrow: 'القيادة',
      index: '02 / 02',
      title: 'الاسمان على الباب',
      lede: 'فريق صغير من الكفاءات العليا عن قصد. كل ملف يحمل اسمًا — وهو أحد هذين الاسمين.',
      portraitAlt: 'صورة {name}',
      notePre: 'طلاب مساهمون يكتبون معنا أيضًا — ستجد أسماءهم في ',
      noteLink: 'صفحة الرؤى',
      notePost: '.',
    },
  },

  es: {
    meta: {
      title: 'Nosotros — Las personas detrás de RouteToAbroad',
      description:
        'RouteToAbroad opera desde Nueva Delhi y Cantón: colocación educativa liderada por sus fundadores, turismo y servicios de comercio India–China. Conoce al equipo y el estándar con el que trabajamos.',
    },
    crumb: 'Nosotros',
    hero: {
      eyebrow: 'Nosotros',
      index: 'ABT / 07',
      title: 'No solo conectamos países. Conectamos personas.',
      lede: 'Una consultoría liderada por sus fundadores que trabaja a fondo un solo corredor — India y Asia Oriental — con oficinas en ambos lados y algo que perder en ambos.',
      facts: [
        { label: 'Oficinas', value: 'Delhi · Cantón' },
        { label: 'Práctica', value: 'Educación · Viajes · Comercio' },
        { label: 'Equipo', value: 'Liderado por fundadores' },
        { label: 'Estándar', value: 'Sin atajos' },
      ],
      actionTeam: 'Conoce al equipo',
      actionTalk: 'Habla con nosotros',
      jumps: ['Historia', 'Valores', 'Equipo'],
    },
    story: {
      lead: 'RouteToAbroad nació de una observación simple: el corredor India–Asia Oriental estaba lleno de intermediarios y escaso de operadores responsables. Les vendieron a estudiantes universidades que nadie había visitado. Importadores transfirieron anticipos a fábricas que nadie había auditado. Los viajeros veían la muralla, no el país.',
      built:
        'Así que construimos la empresa que habíamos querido que existiera — un solo equipo que trabaja <em>ambos</em> lados del corredor profesionalmente, con oficinas en Nueva Delhi y Cantón, y personal que contesta el teléfono los sábados. La educación abrió el camino; las mesas de viajes y comercio crecieron de la misma red, el mismo estándar y las mismas familias que pedían un tipo más de ayuda.',
      quote:
        '"El estudiante de hoy es el socio comercial del mañana. El turista de hoy es el inversor del mañana."',
      after:
        'El corredor premia a los operadores que tratan el cumplimiento como una característica del producto y la honestidad como un diferenciador. Ese ha sido el trabajo desde el primer día — y por eso nuestros estudiantes llegan, nuestros contenedores pasan y nuestros viajeros regresan.',
    },
    nap: {
      aria: 'Datos de la empresa',
      eyebrow: 'Datos de la entidad',
      foundedLabel: 'Fundación',
      foundedNote: '(en el corredor desde hace más de una década)',
      officesLabel: 'Oficinas',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      hoursLabel: 'Horario',
      studentsLabel: 'Estudiantes colocados',
      ratingLabel: 'Valoración de Google',
      note: 'Datos NAP consistentes — también publicados en nuestros datos estructurados.',
    },
    values: {
      eyebrow: 'Valores',
      index: '01 / 02',
      title: 'Tres reglas que no rompemos',
      lede: 'Nos cuestan negocios. Nos conservan clientes por décadas.',
      items: [
        {
          title: 'Relaciones por encima de transacciones',
          text: 'Hemos llevado estudiantes cuyos padres luego se convirtieron en socios comerciales, y turistas que volvieron como inversores. La mesa optimiza para la década, no para la factura.',
        },
        {
          title: 'Ambos lados del puente',
          text: 'Delhi responde ante las familias indias; Cantón responde ante universidades y fábricas chinas. Cada oficina puede decirle la verdad incómoda a la otra — para eso son dos.',
        },
        {
          title: 'Sin atajos',
          text: 'Sin promesas de admisión garantizada, sin cartas de beca falsas, sin «ajustes» de documentos. Un documento falso termina una solicitud; una promesa falsa termina una empresa. Pensamos estar aquí en veinte años.',
        },
      ],
    },
    team: {
      eyebrow: 'Dirección',
      index: '02 / 02',
      title: 'Los dos nombres en la puerta',
      lede: 'Un equipo senior pequeño a propósito. Cada expediente lleva un nombre adjunto, y es uno de estos.',
      portraitAlt: 'Retrato de {name}',
      notePre: 'Estudiantes colaboradores también escriben con nosotros — encontrarás sus firmas en la ',
      noteLink: 'página de análisis',
      notePost: '.',
    },
  },

  de: {
    meta: {
      title: 'Über uns — Die Menschen hinter RouteToAbroad',
      description:
        'RouteToAbroad arbeitet von Neu-Delhi und Guangzhou aus: gründergeführte Studienvermittlung, Tourismus und Indien–China-Handel. Lernen Sie das Team und den Standard kennen, nach dem wir arbeiten.',
    },
    crumb: 'Über uns',
    hero: {
      eyebrow: 'Über uns',
      index: 'ABT / 07',
      title: 'Wir verbinden nicht nur Länder. Wir verbinden Menschen.',
      lede: 'Eine gründergeführte Beratung, die einen einzigen Korridor tief bearbeitet — Indien und Ostasien — mit Büros auf beiden Seiten und etwas zu verlieren auf beiden Seiten.',
      facts: [
        { label: 'Büros', value: 'Delhi · Guangzhou' },
        { label: 'Tätigkeit', value: 'Bildung · Reisen · Handel' },
        { label: 'Team', value: 'Gründergeführt' },
        { label: 'Anspruch', value: 'Keine Abkürzungen' },
      ],
      actionTeam: 'Das Team kennenlernen',
      actionTalk: 'Sprechen Sie mit uns',
      jumps: ['Geschichte', 'Werte', 'Team'],
    },
    story: {
      lead: 'RouteToAbroad begann mit einer einfachen Beobachtung: Der Korridor zwischen Indien und Ostasien war voller Vermittler und arm an verantwortlichen Betreibern. Studierende wurden an Universitäten vermittelt, die niemand besucht hatte. Importeure überwiesen Anzahlungen an Fabriken, die niemand geprüft hatte. Reisende sahen die Mauer, nicht das Land.',
      built:
        'Also bauten wir das Unternehmen, das wir uns gewünscht hätten — ein Team, das <em>beide</em> Seiten des Korridors professionell betreut, mit Büros in Neu-Delhi und Guangzhou und Mitarbeitenden, die auch am Samstag ans Telefon gehen. Die Bildung hat den Weg gewiesen; die Reise- und Handelsdesks wuchsen aus demselben Netzwerk, demselben Anspruch und denselben Familien, die noch eine weitere Art von Hilfe suchten.',
      quote:
        '„Ein Studierender heute ist ein Handelspartner morgen. Ein Tourist heute ist ein Investor morgen."',
      after:
        'Der Korridor belohnt Betreiber, die Compliance als Produkteigenschaft und Ehrlichkeit als Differenzierungsmerkmal behandeln. Das ist die Aufgabe seit dem ersten Tag — und deshalb kommen unsere Studierenden an, unsere Container werden freigegeben und unsere Reisenden kommen wieder.',
    },
    nap: {
      aria: 'Unternehmensdaten',
      eyebrow: 'Unternehmensangaben',
      foundedLabel: 'Gegründet',
      foundedNote: '(seit über einem Jahrzehnt im Korridor)',
      officesLabel: 'Büros',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      hoursLabel: 'Öffnungszeiten',
      studentsLabel: 'Vermittelte Studierende',
      ratingLabel: 'Google-Bewertung',
      note: 'Konsistente NAP-Angaben — auch in unseren strukturierten Daten veröffentlicht.',
    },
    values: {
      eyebrow: 'Werte',
      index: '01 / 02',
      title: 'Drei Regeln, die wir nicht brechen',
      lede: 'Sie kosten uns Aufträge. Sie halten Kunden über Jahrzehnte.',
      items: [
        {
          title: 'Beziehungen vor Transaktionen',
          text: 'Wir haben Studierende betreut, mit deren Eltern wir später Handelsbeziehungen aufbauten, und Touristen, die als Investoren zurückkamen. Der Desk optimiert auf das Jahrzehnt, nicht auf die Rechnung.',
        },
        {
          title: 'Beide Seiten der Brücke',
          text: 'Delhi antwortet gegenüber den indischen Familien; Guangzhou gegenüber den chinesischen Universitäten und Fabriken. Jedes Büro darf dem anderen eine unbequeme Wahrheit sagen — genau dafür gibt es deren zwei.',
        },
        {
          title: 'Keine Abkürzungen',
          text: 'Keine Garantie-Zulassungsversprechen, keine gefälschten Stipendienbriefe, keine Dokumenten-„Anpassungen". Ein falsches Dokument beendet eine Bewerbung; ein falsches Versprechen beendet ein Unternehmen. Wir wollen in zwanzig Jahren noch hier sein.',
        },
      ],
    },
    team: {
      eyebrow: 'Führung',
      index: '02 / 02',
      title: 'Die zwei Namen auf dem Türschild',
      lede: 'Ein kleines Senior-Team — mit Absicht. Jede Akte trägt einen Namen, und es ist einer von diesen.',
      portraitAlt: 'Porträt von {name}',
      notePre: 'Auch studierende Mitwirkende schreiben mit uns — ihre Signaturen finden Sie auf der ',
      noteLink: 'Einblicke-Seite',
      notePost: '.',
    },
  },

  ja: {
    meta: {
      title: '私たちについて — RouteToAbroad を支える人々',
      description:
        'RouteToAbroad はニューデリーと広州を拠点に、創業者主導の進学サポート、観光、インド–中国貿易サービスを提供しています。チームと私たちの仕事の基準をご紹介します。',
    },
    crumb: '私たちについて',
    hero: {
      eyebrow: '私たちについて',
      index: 'ABT / 07',
      title: '私たちがつなぐのは国だけでなく、人です。',
      lede: '創業者主導のコンサルティング企業。ひとつの回廊 — インドと東アジア — に深く取り組み、両側に事務所を構え、両側に守るべきものを持っています。',
      facts: [
        { label: '事務所', value: 'デリー · 広州' },
        { label: '事業', value: '教育 · 旅行 · 貿易' },
        { label: 'チーム', value: '創業者主導' },
        { label: '基準', value: '近道をしない' },
      ],
      actionTeam: 'チームを見る',
      actionTalk: 'お問い合わせ',
      jumps: ['私たちの歩み', '価値観', 'チーム'],
    },
    story: {
      lead: 'RouteToAbroad は、ひとつのシンプルな気づきから始まりました。インド–東アジア回廊には仲介業者は多いのに、責任を持って運営する担い手が少なかったのです。誰も足を運んだことのない大学が学生に売られていました。誰も監査したことのない工場に輸入業者が手付金を送金していました。旅行者が見ていたのは壁であって、国ではありませんでした。',
      built:
        'そこで私たちは、こういう会社があればいいのに、と願っていた会社をつくりました — 回廊の<em>両側</em>をプロとして担当するひとつのチーム。ニューデリーと広州に事務所を構え、土曜日でも電話に出るスタッフ。教育が先導し、旅行と貿易のデスクは同じネットワーク、同じ基準、そしてもうひとつの助けを求める同じ家族たちから育ちました。',
      quote: '「今日の学生は、明日の貿易パートナー。今日の旅行者は、明日の投資家。」',
      after:
        'この回廊は、コンプライアンスを製品の機能として、誠実さを差別化要因として扱う運営者に報います。それが初日からの仕事であり — だからこそ、学生たちは無事に到着し、コンテナは通関し、旅行者はまた戻ってくるのです。',
    },
    nap: {
      aria: '会社情報',
      eyebrow: '事業者情報',
      foundedLabel: '設立',
      foundedNote: '（回廊での活動は 10 年以上）',
      officesLabel: '事務所',
      emailLabel: 'メール',
      phoneLabel: '電話',
      hoursLabel: '受付時間',
      studentsLabel: '進学者数',
      ratingLabel: 'Google の評価',
      note: 'NAP 情報は一貫して管理 — 構造化データにも同じ内容を公開しています。',
    },
    values: {
      eyebrow: '価値観',
      index: '01 / 02',
      title: '私たちが絶対に破らない三つのルール',
      lede: 'そのために商談を逃すこともあります。そのために顧客は何十年も残ってくれます。',
      items: [
        {
          title: '取引よりも関係',
          text: '後にその親御さんと貿易取引を始めた学生たちや、投資家として戻ってきた旅行者たちを担当してきました。このデスクは請求書ではなく、十年先を考えて動きます。',
        },
        {
          title: '橋の両側に立つ',
          text: 'デリーはインドのご家庭に、広州は中国の大学と工場に応えます。各事務所は相手先に言いにくい真実を伝えられる — だからこそ二つあるのです。',
        },
        {
          title: '近道をしない',
          text: '「合格保証」の約束も、偽の奨学金証明書も、書類の「調整」も行いません。偽の書類は出願を終わらせ、偽の約束は会社を終わらせます。私たちは二十年後もここにいるつもりです。',
        },
      ],
    },
    team: {
      eyebrow: '経営陣',
      index: '02 / 02',
      title: '扉に掲げられた二つの名前',
      lede: 'あえて小さなシニアチームで運営しています。すべての案件に担当者の名前がつき、それはこの二人のうちの一人です。',
      portraitAlt: '{name} のポートレート',
      notePre: '学生ライターも私たちと一緒に記事を書いています — 彼らの署名は ',
      noteLink: 'インサイトページ',
      notePost: ' にあります。',
    },
  },

  pt: {
    meta: {
      title: 'Sobre nós — As pessoas por trás da RouteToAbroad',
      description:
        'A RouteToAbroad opera de Nova Délhi e Guangzhou: colocação educacional liderada pelos fundadores, turismo e serviços de comércio entre Índia e China. Conheça a equipe e o padrão com que trabalhamos.',
    },
    crumb: 'Sobre nós',
    hero: {
      eyebrow: 'Sobre nós',
      index: 'ABT / 07',
      title: 'Não conectamos apenas países. Conectamos pessoas.',
      lede: 'Uma consultoria liderada pelos fundadores, que trabalha a fundo um único corredor — Índia e Ásia Oriental — com escritórios dos dois lados e algo a perder dos dois lados.',
      facts: [
        { label: 'Escritórios', value: 'Délhi · Guangzhou' },
        { label: 'Atuação', value: 'Educação · Viagens · Comércio' },
        { label: 'Equipe', value: 'Liderada pelos fundadores' },
        { label: 'Padrão', value: 'Sem atalhos' },
      ],
      actionTeam: 'Conheça a equipe',
      actionTalk: 'Fale conosco',
      jumps: ['História', 'Valores', 'Equipe'],
    },
    story: {
      lead: 'A RouteToAbroad nasceu de uma observação simples: o corredor Índia–Ásia Oriental estava cheio de intermediários e carente de operadores responsáveis. Venderam a estudantes universidades que ninguém havia visitado. Importadores transferiram adiantamentos para fábricas que ninguém havia auditado. Os viajantes viam a muralha, não o país.',
      built:
        'Então construímos a empresa que gostaríamos que existisse — uma única equipe que atende <em>ambos</em> os lados do corredor com profissionalismo, com escritórios em Nova Délhi e Guangzhou e uma equipe que atende o telefone até no sábado. A educação abriu caminho; as mesas de viagens e comércio cresceram da mesma rede, do mesmo padrão e das mesmas famílias que pediam mais um tipo de ajuda.',
      quote:
        '"O estudante de hoje é o parceiro comercial de amanhã. O turista de hoje é o investidor de amanhã."',
      after:
        'O corredor recompensa os operadores que tratam a conformidade como um atributo do produto e a honestidade como um diferencial. Esse tem sido o trabalho desde o primeiro dia — e é por isso que nossos estudantes chegam, nossos contêineres são liberados e nossos viajantes voltam.',
    },
    nap: {
      aria: 'Dados da empresa',
      eyebrow: 'Dados da empresa',
      foundedLabel: 'Fundação',
      foundedNote: '(presentes no corredor há mais de uma década)',
      officesLabel: 'Escritórios',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      hoursLabel: 'Horário',
      studentsLabel: 'Estudantes matriculados',
      ratingLabel: 'Avaliação do Google',
      note: 'Dados de NAP consistentes — também publicados em nossos dados estruturados.',
    },
    values: {
      eyebrow: 'Valores',
      index: '01 / 02',
      title: 'Três regras que não quebramos',
      lede: 'Elas nos custam negócios. Elas mantêm clientes por décadas.',
      items: [
        {
          title: 'Relações acima de transações',
          text: 'Já acompanhamos estudantes com cujos pais depois construímos relações comerciais, e turistas que voltaram como investidores. A mesa otimiza para a década, não para a fatura.',
        },
        {
          title: 'Os dois lados da ponte',
          text: 'Délhi responde às famílias indianas; Guangzhou responde às universidades e fábricas chinesas. Cada escritório pode dizer ao outro uma verdade desconfortável — é exatamente para isso que existem dois.',
        },
        {
          title: 'Sem atalhos',
          text: 'Sem promessas de admissão garantida, sem cartas de bolsa falsas, sem "ajustes" de documentos. Um documento falso encerra uma candidatura; uma promessa falsa encerra uma empresa. Pretendemos estar aqui por vinte anos.',
        },
      ],
    },
    team: {
      eyebrow: 'Liderança',
      index: '02 / 02',
      title: 'Os dois nomes na porta',
      lede: 'Uma equipe sênior pequena de propósito. Cada processo tem um nome anexado, e é um destes.',
      portraitAlt: 'Retrato de {name}',
      notePre: 'Estudantes colaboradores também escrevem conosco — você encontrará as assinaturas deles na ',
      noteLink: 'página de análises',
      notePost: '.',
    },
  },

  hi: {
    meta: {
      title: 'हमारे बारे में — RouteToAbroad के पीछे के लोग',
      description:
        'RouteToAbroad नई दिल्ली और ग्वांगज़ू से संचालित होती है: संस्थापक-नेतृत्व वाली शिक्षा प्लेसमेंट, पर्यटन और भारत–चीन व्यापार सेवाएँ। हमारी टीम और हमारे काम के मानक से मिलिए।',
    },
    crumb: 'हमारे बारे में',
    hero: {
      eyebrow: 'हमारे बारे में',
      index: 'ABT / 07',
      title: 'हम सिर्फ़ देश नहीं जोड़ते। हम लोगों को जोड़ते हैं।',
      lede: 'संस्थापक-नेतृत्व वाली सलाहकार कंपनी, जो एक ही गलियारे — भारत और पूर्वी एशिया — पर गहराई से काम करती है, दोनों ओर कार्यालय और दोनों ओर खोने के लिए कुछ है।',
      facts: [
        { label: 'कार्यालय', value: 'दिल्ली · ग्वांगज़ू' },
        { label: 'कार्यक्षेत्र', value: 'शिक्षा · यात्रा · व्यापार' },
        { label: 'टीम', value: 'संस्थापक-नेतृत्व' },
        { label: 'मानक', value: 'कोई शॉर्टकट नहीं' },
      ],
      actionTeam: 'टीम से मिलें',
      actionTalk: 'हमसे बात करें',
      jumps: ['कहानी', 'मूल्य', 'टीम'],
    },
    story: {
      lead: 'RouteToAbroad की शुरुआत एक सीधे अवलोकन से हुई: भारत–पूर्वी एशिया गलियारे में दलाल बहुत थे, लेकिन ज़िम्मेदार संचालक कम। विद्यार्थियों को ऐसे विश्वविद्यालय बेचे गए जहाँ कभी कोई गया ही नहीं। आयातकों ने ऐसी फ़ैक्टरियों में अग्रिम राशि भेजी जिनका ऑडिट किसी ने नहीं किया। यात्रियों ने दीवार देखी, देश नहीं।',
      built:
        'इसलिए हमने वह कंपनी खड़ी की जो हम चाहते थे कि होती — एक ही टीम जो गलियारे के <em>दोनों</em> ओर पेशेवर रूप से काम करती है, नई दिल्ली और ग्वांगज़ू में कार्यालय के साथ, और शनिवार को भी फ़ोन उठाने वाले स्टाफ़ के साथ। शिक्षा ने रास्ता दिखाया; यात्रा और व्यापार डेस्क उसी नेटवर्क, उसी मानक और उन्हीं परिवारों से बढ़े जो एक और तरह की मदद माँग रहे थे।',
      quote: '"आज का विद्यार्थी कल का व्यापारिक साझेदार है। आज का पर्यटक कल का निवेशक है।"',
      after:
        'यह गलियारा उन संचालकों को इनाम देता है जो अनुपालन को उत्पाद की विशेषता और ईमानदारी को अंतर मानते हैं। पहले दिन से यही काम रहा है — और इसीलिए हमारे विद्यार्थी पहुँचते हैं, हमारे कंटेनर कस्टम्स पार करते हैं और हमारे यात्री लौटते हैं।',
    },
    nap: {
      aria: 'कंपनी विवरण',
      eyebrow: 'संस्था विवरण',
      foundedLabel: 'स्थापना',
      foundedNote: '(दशक से अधिक समय से गलियारे में)',
      officesLabel: 'कार्यालय',
      emailLabel: 'ईमेल',
      phoneLabel: 'फ़ोन',
      hoursLabel: 'समय',
      studentsLabel: 'प्रवेश पाए विद्यार्थी',
      ratingLabel: 'Google रेटिंग',
      note: 'NAP विवरण सुसंगत — हमारे संरचित डेटा में भी प्रकाशित।',
    },
    values: {
      eyebrow: 'मूल्य',
      index: '01 / 02',
      title: 'तीन नियम जो हम नहीं तोड़ते',
      lede: 'इनसे हमें सौदे छूटते हैं। इनसे ग्राहक दशकों टिकते हैं।',
      items: [
        {
          title: 'संबंध, सौदों से ऊपर',
          text: 'हमने ऐसे विद्यार्थियों को प्रवेश दिलाया जिनके पिताओं से बाद में व्यापारिक संबंध बने, और ऐसे पर्यटकों को मिले जो निवेशक बनकर लौटे। यह डेस्क बिल के लिए नहीं, दशक के लिए सोचता है।',
        },
        {
          title: 'पुल के दोनों किनारे',
          text: 'दिल्ली भारतीय परिवारों के प्रति उत्तरदायी है; ग्वांगज़ू चीनी विश्वविद्यालयों और फ़ैक्टरियों के प्रति। हर कार्यालय दूसरे को असहज सच कह सकता है — इसीलिए दो हैं।',
        },
        {
          title: 'कोई शॉर्टकट नहीं',
          text: 'न "प्रवेश की गारंटी" के वादे, न फ़र्ज़ी छात्रवृत्ति पत्र, न दस्तावेज़ों के "सुधार"। फ़र्ज़ी दस्तावेज़ आवेदन ख़त्म करता है; फ़र्ज़ी वादा कंपनी ख़त्म करता है। हम बीस साल बाद भी यहीं रहना चाहते हैं।',
        },
      ],
    },
    team: {
      eyebrow: 'नेतृत्व',
      index: '02 / 02',
      title: 'दरवाज़े पर लिखे दो नाम',
      lede: 'जान-बूझकर छोटी वरिष्ठ टीम। हर फ़ाइल के साथ एक नाम जुड़ा है, और वह इन्हीं में से एक है।',
      portraitAlt: '{name} का पोर्ट्रेट',
      notePre: 'छात्र योगदानकर्ता भी हमारे साथ लिखते हैं — उनके नाम ',
      noteLink: 'इनसाइट्स पृष्ठ',
      notePost: ' पर मिलेंगे।',
    },
  },
};
