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
      foundedNote: '(in the corridor over a decade)',
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
      studentsLabel: 'طلاب مُوظفون',
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
};
