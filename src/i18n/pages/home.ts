/**
 * Homepage copy — every user-visible string on the shared HomePage component,
 * keyed by locale. English is the source of truth; zh/fr/ar/es are
 * machine-assisted translations that follow the terminology already
 * established in src/i18n/ui.ts and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * HomeStrings interface, so a key added to `en` breaks the build until all
 * four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface IlluminatedLine {
  text: string;
  gloss: string;
}

export interface HomeStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Act labels in the pinned journey strip (numerals are rendered separately). */
  journey: {
    aria: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    /** Visually-hidden completion of the title (screen readers only). */
    titleHidden: string;
    sub: string;
    globeAria: string;
    originLabel: string;
    originPlaceholder: string;
    originHint: string;
    campusKicker: string;
    campusEcho: string;
    campusImgAlt: string;
    campusLede: string;
    campusCtaPrimary: string;
    campusCtaSecondary: string;
    campusNote: string;
    stops: [string, string, string];
  };
  illum: {
    eyebrow: string;
    lines: IlluminatedLine[];
  };
  pillars: {
    eyebrow: string;
    index: string;
    /** Title text — the component wraps it in the id-carrying span itself. */
    title: string;
    lede: string;
    explore: string;
    /** Pillar names (Education / Tourism / Trade). */
    names: [string, string, string];
    items: {
      lead: string;
      text: string;
      stat: string;
      alt: string;
    }[];
  };
  stats: { labels: [string, string, string, string] };
  tools: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    action: string;
    items: { label: string; desc: string }[];
  };
  insights: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    action: string;
    /** "{n} min read" — {n} is replaced with the post's readTime. */
    readTime: string;
  };
  faq: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    /** Split around the two inline links (hrefs stay in the component). */
    notePre: string;
    noteLink1: string;
    noteMid: string;
    noteLink2: string;
    notePost: string;
  };
}

export const HOME: Record<Locale, HomeStrings> = {
  en: {
    meta: {
      title: 'RouteToAbroad — Study in China, Travel East Asia, Trade Across Borders',
      description:
        'We place students in Chinese universities, design journeys through East Asia, and run India–China trade operations. Offices in New Delhi and Guangzhou. Start with a free fit check.',
    },
    journey: {
      aria: 'From anywhere to campus',
      eyebrow: 'Education · Tourism · Trade',
      titleLine1: 'From',
      titleLine2: 'anywhere',
      titleHidden: ' to campus.',
      sub: 'Study, travel and trade between India and East Asia — run by people who live on both sides of the corridor.',
      globeAria: 'Dotted globe highlighting RouteToAbroad’s offices in Delhi and Guangzhou',
      originLabel: 'where do you live?',
      originPlaceholder: 'Delhi · Kochi · Guwahati',
      originHint: 'Press Enter to fly the route →',
      campusKicker: '03 / Arrival',
      campusEcho: 'to campus.',
      campusImgAlt: 'Fine ink-line drawing of a university campus with trees and walkways',
      campusLede:
        'Admissions, visas, journeys and freight between India and East Asia — run by people who live on both sides.',
      campusCtaPrimary: 'Check if you fit',
      campusCtaSecondary: 'Explore programmes',
      campusNote: 'No commitment · a human replies within one working day.',
      stops: ['Origin', 'In transit', 'Campus'],
    },
    illum: {
      eyebrow: 'This is what we do',
      lines: [
        {
          text: 'Match you to a programme.',
          gloss:
            'University placement, CSC scholarships, MBBS and engineering tracks, visas and arrival — run end to end.',
        },
        {
          text: 'Design the journey.',
          gloss:
            'Private and group travel through China and Japan — curated itineraries, bilingual guides, a 24/7 desk while you travel.',
        },
        {
          text: 'Move the goods.',
          gloss:
            'Sourcing, factory audits, customs and freight between India and China — on a success fee tied to shipped value.',
        },
      ],
    },
    pillars: {
      eyebrow: 'What we do',
      index: '01 / 04',
      title: 'Three ways across one corridor.',
      lede: 'Three capabilities, one corridor, run by people who live on both sides of it. Pick the door — they all open.',
      explore: 'Explore',
      names: ['Education', 'Tourism', 'Trade'],
      items: [
        {
          lead: 'Subsidised global education',
          text: 'University placement, CSC and university scholarships, MBBS and engineering tracks, visas and arrival — run end to end from application to campus registration.',
          stat: '500+ students placed',
          alt: 'Students collaborating in a bright modern Chinese university laboratory',
        },
        {
          lead: 'Bespoke heritage journeys',
          text: 'Private and group travel through China and Japan — curated itineraries, bilingual guides, visa concierge, and a 24/7 desk while you travel.',
          stat: 'China · Japan · custom groups',
          alt: 'A traveller looking over the Great Wall of China at golden hour',
        },
        {
          lead: 'Cross-border trade, handled',
          text: 'Sourcing, factory audits, AQL quality gates, customs and freight between India and China — on a success fee tied to shipped value.',
          stat: '200+ vetted suppliers',
          alt: 'Container cranes working at the Guangzhou port at dawn',
        },
      ],
    },
    stats: {
      labels: ['Students placed', 'Years in the corridor', 'Visa success rate', 'Countries served'],
    },
    tools: {
      eyebrow: 'Free tools',
      index: '02 / 04',
      title: 'Start with facts, not brochures.',
      lede: 'Five quick tools that give you real numbers before you ever talk to us. No email required.',
      action: 'All tools',
      items: [
        { label: 'Fit check', desc: 'Four questions. A straight yes, maybe, or not this intake.' },
        { label: 'Scholarship check', desc: 'Where your profile actually sits for CSC and university awards.' },
        { label: 'Cost calculator', desc: 'Tuition plus living costs by city, programme and lifestyle.' },
        { label: 'Document checklist', desc: 'Your personalised list, printable, nothing missing.' },
        { label: 'Timeline planner', desc: 'Your intake date, worked backwards into a month-by-month plan.' },
      ],
    },
    insights: {
      eyebrow: 'Latest insights',
      index: '03 / 04',
      title: 'From the desk.',
      lede: 'Field notes on studying, travelling and trading across the corridor.',
      action: 'All articles',
      readTime: '{n} min read',
    },
    faq: {
      eyebrow: 'Common questions',
      index: '04 / 04',
      title: 'The honest answers.',
      lede: 'The ones we hear most, kept short. The rest live in the FAQ.',
      notePre: 'Still unsure? ',
      noteLink1: 'Read every question',
      noteMid: ' or ',
      noteLink2: 'ask a human',
      notePost: ' — a real advisor replies.',
    },
  },

  zh: {
    meta: {
      title: 'RouteToAbroad — 中国留学·东亚旅游·跨境贸易',
      description:
        '我们为学生申请中国高校、规划东亚行程，并运营印度—中国贸易业务。办事处位于新德里和广州。从免费适配检查开始。',
    },
    journey: {
      aria: '从任何地方到校园',
      eyebrow: '教育 · 旅游 · 贸易',
      titleLine1: '从',
      titleLine2: '任何地方',
      titleHidden: '到校园。',
      sub: '连接印度与东亚的留学、旅游与贸易服务——由常驻走廊两侧的团队负责执行。',
      globeAria: '点阵地球，标注 RouteToAbroad 位于德里和广州的办事处',
      originLabel: '你住在哪座城市？',
      originPlaceholder: '德里 · 科钦 · 古瓦哈提',
      originHint: '按回车键，启程飞往目的地 →',
      campusKicker: '03 / 抵达',
      campusEcho: '到校园。',
      campusImgAlt: '大学校园的精细墨线插画，有树木和步道',
      campusLede: '印度与东亚之间的录取、签证、行程与货运——由常驻两侧的团队负责执行。',
      campusCtaPrimary: '检查你是否适配',
      campusCtaSecondary: '了解课程项目',
      campusNote: '无需承诺 · 真人顾问在一个工作日内回复。',
      stops: ['起点', '途中', '校园'],
    },
    illum: {
      eyebrow: '这就是我们做的',
      lines: [
        {
          text: '为你匹配课程。',
          gloss: '大学申请、CSC 奖学金、MBBS 与工科方向、签证与落地——全流程负责到底。',
        },
        {
          text: '设计整段旅程。',
          gloss: '中国与日本的私人及团体旅行——精心策划的行程、双语导游，旅途中有 24/7 服务台。',
        },
        {
          text: '把货运出去。',
          gloss: '印度与中国之间的采购、验厂、清关与货运——按实际发货金额收取成功佣金。',
        },
      ],
    },
    pillars: {
      eyebrow: '我们的服务',
      index: '01 / 04',
      title: '一条走廊，三种走法。',
      lede: '三项能力，一条走廊，由常驻两侧的团队执行。选一扇门——每一扇都开。',
      explore: '了解',
      names: ['教育', '旅游', '贸易'],
      items: [
        {
          lead: '有补贴的全球教育',
          text: '大学申请、CSC 及校级奖学金、MBBS 与工科方向、签证与落地——从递交申请到校园注册全程负责。',
          stat: '500+ 名学生成功入学',
          alt: '学生们在明亮的中国大学实验室里协作',
        },
        {
          lead: '定制文化遗产之旅',
          text: '中国与日本的私人及团体旅行——精选行程、双语导游、签证代办，旅途中另有 24/7 服务台。',
          stat: '中国 · 日本 · 定制团体',
          alt: '黄昏时分，一位旅行者眺望中国长城',
        },
        {
          lead: '跨境贸易，全程代办',
          text: '印度与中国之间的采购、验厂、AQL 质检、清关与货运——按实际发货金额收取成功佣金。',
          stat: '200+ 家认证供应商',
          alt: '黎明时分的广州港口，集装箱吊机正在作业',
        },
      ],
    },
    stats: {
      labels: ['成功入学', '深耕走廊年数', '签证成功率', '服务国家'],
    },
    tools: {
      eyebrow: '免费工具',
      index: '02 / 04',
      title: '用事实开局，而不是宣传册。',
      lede: '五个快速工具，在和我们交谈之前先拿到真实数字。无需邮箱。',
      action: '全部工具',
      items: [
        { label: '适配检查', desc: '四个问题。给出直接的“是”“也许”或“本轮不适合”。' },
        { label: '奖学金评估', desc: '你的条件在 CSC 和校级奖学金中实际处于什么位置。' },
        { label: '费用计算器', desc: '按城市、专业和生活方式估算学费与生活成本。' },
        { label: '文件清单', desc: '你的个性化清单，可打印，一项不缺。' },
        { label: '时间线规划', desc: '从你的入学日期倒推，生成逐月计划。' },
      ],
    },
    insights: {
      eyebrow: '最新洞察',
      index: '03 / 04',
      title: '来自案头。',
      lede: '关于沿走廊留学、旅行与贸易的一线笔记。',
      action: '全部文章',
      readTime: '阅读约 {n} 分钟',
    },
    faq: {
      eyebrow: '常见问题',
      index: '04 / 04',
      title: '坦诚的回答。',
      lede: '最多人问的几个，短作答。其余都在 FAQ 页。',
      notePre: '还有疑问？',
      noteLink1: '阅读全部问题',
      noteMid: '，或',
      noteLink2: '咨询真人顾问',
      notePost: '——真实顾问会回复你。',
    },
  },

  fr: {
    meta: {
      title: 'RouteToAbroad — Étudier en Chine, voyager en Asie de l’Est, trader sans frontières',
      description:
        'Nous plaçons des étudiants dans les universités chinoises, concevons des voyages en Asie de l’Est et opérons du commerce Inde–Chine. Bureaux à New Delhi et Canton. Commencez par un test de compatibilité gratuit.',
    },
    journey: {
      aria: 'De n’importe où au campus',
      eyebrow: 'Études · Tourisme · Commerce',
      titleLine1: 'De',
      titleLine2: 'n’importe où',
      titleHidden: ' au campus.',
      sub: 'Études, voyages et commerce entre l’Inde et l’Asie de l’Est — menés par une équipe qui vit des deux côtés du corridor.',
      globeAria: 'Globe en pointillés soulignant les bureaux de RouteToAbroad à Delhi et Canton',
      originLabel: 'où habitez-vous ?',
      originPlaceholder: 'Delhi · Kochi · Guwahati',
      originHint: 'Appuyez sur Entrée pour tracer la route →',
      campusKicker: '03 / Arrivée',
      campusEcho: 'au campus.',
      campusImgAlt: 'Dessin au trait fin d’un campus universitaire avec arbres et allées',
      campusLede:
        'Admissions, visas, voyages et fret entre l’Inde et l’Asie de l’Est — menés par une équipe qui vit des deux côtés.',
      campusCtaPrimary: 'Tester votre profil',
      campusCtaSecondary: 'Explorer les programmes',
      campusNote: 'Sans engagement · un conseiller répond sous un jour ouvré.',
      stops: ['Départ', 'En route', 'Campus'],
    },
    illum: {
      eyebrow: 'Voici ce que nous faisons',
      lines: [
        {
          text: 'Vous orienter vers un programme.',
          gloss:
            'Placement universitaire, bourses CSC, parcours MBBS et ingénierie, visas et arrivée — pris en charge de bout en bout.',
        },
        {
          text: 'Concevoir le voyage.',
          gloss:
            'Voyages privés et en groupe en Chine et au Japon — itinéraires sur mesure, guides bilingues, assistance 24/7 pendant le voyage.',
        },
        {
          text: 'Faire circuler les marchandises.',
          gloss:
            'Sourcing, audits d’usine, douanes et fret entre l’Inde et la Chine — à la commission au succès indexée sur la valeur expédiée.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Nos services',
      index: '01 / 04',
      title: 'Trois voies, un seul corridor.',
      lede: 'Trois expertises, un corridor, portées par une équipe qui en vit des deux côtés. Choisissez la porte — elles s’ouvrent toutes.',
      explore: 'Explorer',
      names: ['Études', 'Tourisme', 'Commerce'],
      items: [
        {
          lead: 'Une éducation mondiale subventionnée',
          text: 'Placement universitaire, bourses CSC et universitaires, parcours MBBS et ingénierie, visas et arrivée — de la candidature à l’inscription sur le campus.',
          stat: '500+ étudiants placés',
          alt: 'Étudiants collaborant dans un laboratoire universitaire chinois moderne et lumineux',
        },
        {
          lead: 'Voyages patrimoniaux sur mesure',
          text: 'Voyages privés et en groupe en Chine et au Japon — itinéraires choisis, guides bilingues, conciergerie de visas et assistance 24/7 pendant le voyage.',
          stat: 'Chine · Japon · groupes sur mesure',
          alt: 'Une voyageuse contemplant la Grande Muraille de Chine à l’heure dorée',
        },
        {
          lead: 'Le commerce transfrontalier, géré',
          text: 'Sourcing, audits d’usine, contrôles qualité AQL, douanes et fret entre l’Inde et la Chine — à la commission au succès indexée sur la valeur expédiée.',
          stat: '200+ fournisseurs vérifiés',
          alt: 'Portiques conteneurs travaillant au port de Canton à l’aube',
        },
      ],
    },
    stats: {
      labels: ['Étudiants placés', 'Années sur le corridor', 'Taux de réussite des visas', 'Pays desservis'],
    },
    tools: {
      eyebrow: 'Outils gratuits',
      index: '02 / 04',
      title: 'Commencez par des faits, pas des brochures.',
      lede: 'Cinq outils rapides qui vous donnent de vrais chiffres avant même de nous parler. Sans e-mail.',
      action: 'Tous les outils',
      items: [
        { label: 'Test de compatibilité', desc: 'Quatre questions. Un oui franc, un peut-être, ou pas pour cette rentrée.' },
        { label: 'Test de bourse', desc: 'Où se situe réellement votre profil pour les bourses CSC et universitaires.' },
        { label: 'Calculateur de coûts', desc: 'Frais de scolarité et coût de la vie par ville, programme et mode de vie.' },
        { label: 'Liste de documents', desc: 'Votre liste personnalisée, imprimable, sans rien de manquant.' },
        { label: 'Planificateur', desc: 'Votre date de rentrée, retravaillée à rebours en un plan mois par mois.' },
      ],
    },
    insights: {
      eyebrow: 'Dernières analyses',
      index: '03 / 04',
      title: 'Depuis le bureau.',
      lede: 'Notes de terrain sur les études, les voyages et le commerce à travers le corridor.',
      action: 'Tous les articles',
      readTime: '{n} min de lecture',
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      index: '04 / 04',
      title: 'Les réponses honnêtes.',
      lede: 'Celles qu’on nous pose le plus, gardées courtes. Le reste vit dans la FAQ.',
      notePre: 'Toujours indécis ? ',
      noteLink1: 'lisez toutes les questions',
      noteMid: ' ou ',
      noteLink2: 'parlez à un conseiller',
      notePost: ' — un vrai conseiller vous répond.',
    },
  },

  ar: {
    meta: {
      title: 'RouteToAbroad — ادرس في الصين، وسّع إلى شرق آسيا، وتاجر عبر الحدود',
      description:
        'نساعد الطلاب على الالتحاق بالجامعات الصينية، ونصمم رحلات إلى شرق آسيا، وندير عمليات التجارة بين الهند والصين. مكاتب في نيودلهي وقوانغتشو. ابدأ بفحص التوافق المجاني.',
    },
    journey: {
      aria: 'من أي مكان إلى الحرم الجامعي',
      eyebrow: 'تعليم · سياحة · تجارة',
      titleLine1: 'من',
      titleLine2: 'أي مكان',
      titleHidden: ' إلى الحرم الجامعي.',
      sub: 'دراسة وسفر وتجارة بين الهند وشرق آسيا — يديرها فريق يعيش على الجانبين من الممر.',
      globeAria: 'كرة أرضية منقّطة تُبرز مكاتب RouteToAbroad في دلهي وقوانغتشو',
      originLabel: 'أين تسكن؟',
      originPlaceholder: 'دلهي · كوتشي · غواهاتي',
      originHint: 'اضغط Enter لتحديد المسار →',
      campusKicker: '03 / الوصول',
      campusEcho: 'إلى الحرم الجامعي.',
      campusImgAlt: 'رسم حبري دقيق لحرم جامعي بأشجار وممرات',
      campusLede: 'القبول والتأشيرات والرحلات والشحن بين الهند وشرق آسيا — يديرها فريق يعيش على الجانبين.',
      campusCtaPrimary: 'تحقق من توافقك',
      campusCtaSecondary: 'استكشف البرامج',
      campusNote: 'بلا التزام · يرد مستشار حقيقي خلال يوم عمل واحد.',
      stops: ['الانطلاق', 'في الطريق', 'الحرم الجامعي'],
    },
    illum: {
      eyebrow: 'هذا ما نقوم به',
      lines: [
        {
          text: 'نُوصلك بالبرنامج المناسب.',
          gloss: 'القبول الجامعي، منح CSC، مسارات MBBS والهندسة، التأشيرات والوصول — إدارة كاملة من البداية للنهاية.',
        },
        {
          text: 'نصمم الرحلة.',
          gloss: 'سفر خاص وجماعي عبر الصين واليابان — برامج مختارة بعناية، مرشدون ثنائيو اللغة، ومكتب دعم على مدار الساعة.',
        },
        {
          text: 'ننقل البضائع.',
          gloss: 'التوريد وتدقيق المصانع والجمارك والشحن بين الهند والصين — مقابل عمولة نجاح مرتبطة بقيمة المشحون.',
        },
      ],
    },
    pillars: {
      eyebrow: 'خدماتنا',
      index: '01 / 04',
      title: 'ثلاثة طرق عبر ممر واحد.',
      lede: 'ثلاث قدرات، ممر واحد، يديرها فريق يعيش على جانبيه. اختر الباب — كلها تُفتح.',
      explore: 'استكشف',
      names: ['تعليم', 'سياحة', 'تجارة'],
      items: [
        {
          lead: 'تعليم عالمي مدعوم',
          text: 'القبول الجامعي، منح CSC والجامعات، مسارات MBBS والهندسة، التأشيرات والوصول — من التقديم حتى التسجيل في الحرم.',
          stat: 'أكثر من 500 طالب التحقوا بجامعاتهم',
          alt: 'طلاب يتعاونون في مختبر جامعي صيني حديث ومضيء',
        },
        {
          lead: 'رحلات تراثية مصممة خصيصًا',
          text: 'سفر خاص وجماعي عبر الصين واليابان — برامج مختارة، مرشدون ثنائيو اللغة، خدمة تأشيرات، ومكتب دعم على مدار الساعة طوال رحلتك.',
          stat: 'الصين · اليابان · مجموعات مخصصة',
          alt: 'مسافر يطل على سور الصين العظيم في الساعة الذهبية',
        },
        {
          lead: 'تجارة عابرة للحدود، نتكفل بها',
          text: 'التوريد وتدقيق المصانع وبوابات جودة AQL والجمارك والشحن بين الهند والصين — مقابل عمولة نجاح مرتبطة بقيمة المشحون.',
          stat: 'أكثر من 200 مورد مدقق',
          alt: 'رافعات حاويات تعمل في ميناء قوانغتشو عند الفجر',
        },
      ],
    },
    stats: {
      labels: ['طلاب التحقوا بجامعات', 'سنوات في الممر', 'معدل نجاح التأشيرات', 'دول نخدمها'],
    },
    tools: {
      eyebrow: 'أدوات مجانية',
      index: '02 / 04',
      title: 'ابدأ بالحقائق، لا بالكراسات الدعائية.',
      lede: 'خمس أدوات سريعة تمنحك أرقامًا حقيقية قبل أن تتحدث إلينا أبدًا. بلا بريد إلكتروني.',
      action: 'كل الأدوات',
      items: [
        { label: 'فحص التوافق', desc: 'أربعة أسئلة. نعم صريح، أو ربما، أو ليست هذه الدفعة.' },
        { label: 'فحص المنح', desc: 'أين يقف ملفك فعلًا بين منح CSC والجامعات.' },
        { label: 'حاسبة التكاليف', desc: 'الرسوم الدراسية وتكاليف المعيشة حسب المدينة والبرنامج ونمط الحياة.' },
        { label: 'قائمة المستندات', desc: 'قائمتك الشخصية، قابلة للطباعة، بلا أي نقص.' },
        { label: 'مخطط الجدول الزمني', desc: 'تاريخ دفعتك، محسوب رجوعًا إلى خطة شهر بشهر.' },
      ],
    },
    insights: {
      eyebrow: 'أحدث المقالات',
      index: '03 / 04',
      title: 'من المكتب.',
      lede: 'ملاحظات ميدانية عن الدراسة والسفر والتجارة عبر الممر.',
      action: 'كل المقالات',
      readTime: '{n} دقيقة قراءة',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      index: '04 / 04',
      title: 'الإجابات الصادقة.',
      lede: 'الأكثر تكرارًا، باختصار. والباقي في صفحة الأسئلة.',
      notePre: 'ما زلت مترددًا؟ ',
      noteLink1: 'اقرأ كل الأسئلة',
      noteMid: ' أو ',
      noteLink2: 'اسأل مستشارًا',
      notePost: ' — مستشار حقيقي يرد عليك.',
    },
  },

  es: {
    meta: {
      title: 'RouteToAbroad — Estudia en China, viaja por Asia Oriental, comercia sin fronteras',
      description:
        'Colocamos estudiantes en universidades chinas, diseñamos viajes por Asia Oriental y operamos comercio India–China. Oficinas en Nueva Delhi y Cantón. Empieza con un fit check gratuito.',
    },
    journey: {
      aria: 'Desde cualquier lugar al campus',
      eyebrow: 'Educación · Turismo · Comercio',
      titleLine1: 'Desde',
      titleLine2: 'cualquier lugar',
      titleHidden: ' al campus.',
      sub: 'Estudio, viajes y comercio entre India y Asia Oriental — dirigidos por personas que viven a ambos lados del corredor.',
      globeAria: 'Globo punteado que destaca las oficinas de RouteToAbroad en Delhi y Cantón',
      originLabel: '¿dónde vives?',
      originPlaceholder: 'Delhi · Kochi · Guwahati',
      originHint: 'Pulsa Enter para volar la ruta →',
      campusKicker: '03 / Llegada',
      campusEcho: 'al campus.',
      campusImgAlt: 'Dibujo a tinta fina de un campus universitario con árboles y paseos',
      campusLede:
        'Admisiones, visados, viajes y carga entre India y Asia Oriental — dirigidos por personas que viven a ambos lados.',
      campusCtaPrimary: 'Comprueba si encajas',
      campusCtaSecondary: 'Explora programas',
      campusNote: 'Sin compromiso · una persona real responde en un día laborable.',
      stops: ['Origen', 'En tránsito', 'Campus'],
    },
    illum: {
      eyebrow: 'Esto es lo que hacemos',
      lines: [
        {
          text: 'Te emparejamos con un programa.',
          gloss:
            'Admisiones universitarias, becas CSC, carreras de MBBS e ingeniería, visados y llegada — gestionado de principio a fin.',
        },
        {
          text: 'Diseñamos el viaje.',
          gloss:
            'Viajes privados y en grupo por China y Japón — itinerarios curados, guías bilingües y asistencia 24/7 mientras viajas.',
        },
        {
          text: 'Movemos la mercancía.',
          gloss:
            'Abastecimiento, auditorías de fábrica, aduanas y carga entre India y China — con una comisión de éxito ligada al valor enviado.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Lo que hacemos',
      index: '01 / 04',
      title: 'Tres caminos por un solo corredor.',
      lede: 'Tres capacidades, un corredor, dirigidas por personas que viven a ambos lados. Elige la puerta — todas se abren.',
      explore: 'Explorar',
      names: ['Educación', 'Turismo', 'Comercio'],
      items: [
        {
          lead: 'Educación global subvencionada',
          text: 'Admisiones universitarias, becas CSC y universitarias, carreras de MBBS e ingeniería, visados y llegada — de la solicitud a la matrícula en el campus.',
          stat: '500+ estudiantes colocados',
          alt: 'Estudiantes colaborando en un moderno y luminoso laboratorio universitario chino',
        },
        {
          lead: 'Viajes patrimoniales a medida',
          text: 'Viajes privados y en grupo por China y Japón — itinerarios curados, guías bilingües, gestión de visados y asistencia 24/7 mientras viajas.',
          stat: 'China · Japón · grupos a medida',
          alt: 'Una viajera contemplando la Gran Muralla China a la hora dorada',
        },
        {
          lead: 'Comercio transfronterizo, resuelto',
          text: 'Abastecimiento, auditorías de fábrica, controles de calidad AQL, aduanas y carga entre India y China — con una comisión de éxito ligada al valor enviado.',
          stat: '200+ proveedores verificados',
          alt: 'Grúas portacontenedores trabajando en el puerto de Cantón al amanecer',
        },
      ],
    },
    stats: {
      labels: ['Estudiantes colocados', 'Años en el corredor', 'Tasa de éxito de visados', 'Países atendidos'],
    },
    tools: {
      eyebrow: 'Herramientas gratuitas',
      index: '02 / 04',
      title: 'Empieza con datos, no con folletos.',
      lede: 'Cinco herramientas rápidas que te dan números reales antes de hablar con nosotros. Sin correo electrónico.',
      action: 'Todas las herramientas',
      items: [
        { label: 'Fit check', desc: 'Cuatro preguntas. Un sí directo, un quizás, o no para este ingreso.' },
        { label: 'Chequeo de becas', desc: 'Dónde está realmente tu perfil para las becas CSC y universitarias.' },
        { label: 'Calculadora de costes', desc: 'Matrícula más coste de vida por ciudad, programa y estilo de vida.' },
        { label: 'Lista de documentos', desc: 'Tu lista personalizada, imprimible, sin nada que falte.' },
        { label: 'Planificador temporal', desc: 'Tu fecha de ingreso, calculada al revés en un plan mes a mes.' },
      ],
    },
    insights: {
      eyebrow: 'Últimas publicaciones',
      index: '03 / 04',
      title: 'Desde el escritorio.',
      lede: 'Notas de campo sobre estudiar, viajar y comerciar por el corredor.',
      action: 'Todos los artículos',
      readTime: '{n} min de lectura',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      index: '04 / 04',
      title: 'Las respuestas honestas.',
      lede: 'Las que más oímos, en corto. El resto vive en la FAQ.',
      notePre: '¿Sigues con dudas? ',
      noteLink1: 'lee todas las preguntas',
      noteMid: ' o ',
      noteLink2: 'pregunta a una persona',
      notePost: ' — un asesor real responde.',
    },
  },
};
