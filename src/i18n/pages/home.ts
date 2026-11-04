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

  de: {
    meta: {
      title: 'RouteToAbroad — In China studieren, Ostasien bereisen, grenzüberschreitend handeln',
      description:
        'Wir vermitteln Studierende an chinesische Universitäten, gestalten Reisen durch Ostasien und betreiben Indien–China-Handel. Büros in Neu-Delhi und Guangzhou. Beginnen Sie mit einem kostenlosen Eignungscheck.',
    },
    journey: {
      aria: 'Von überall zum Campus',
      eyebrow: 'Bildung · Tourismus · Handel',
      titleLine1: 'Von',
      titleLine2: 'überall',
      titleHidden: ' zum Campus.',
      sub: 'Studium, Reisen und Handel zwischen Indien und Ostasien — geführt von Menschen, die auf beiden Seiten des Korridors leben.',
      globeAria: 'Punktierte Weltkugel, die die Büros von RouteToAbroad in Delhi und Guangzhou hervorhebt',
      originLabel: 'Wo wohnen Sie?',
      originPlaceholder: 'Delhi · Kochi · Guwahati',
      originHint: 'Drücken Sie Enter, um die Route zu fliegen →',
      campusKicker: '03 / Ankunft',
      campusEcho: 'zum Campus.',
      campusImgAlt: 'Feine Tuschelinien-Zeichnung eines Universitätscampus mit Bäumen und Wegen',
      campusLede:
        'Zulassungen, Visa, Reisen und Fracht zwischen Indien und Ostasien — geführt von Menschen, die auf beiden Seiten leben.',
      campusCtaPrimary: 'Eignung prüfen',
      campusCtaSecondary: 'Studiengänge entdecken',
      campusNote: 'Ohne Verpflichtung · eine echte Person antwortet innerhalb eines Werktags.',
      stops: ['Start', 'Unterwegs', 'Campus'],
    },
    illum: {
      eyebrow: 'Das machen wir',
      lines: [
        {
          text: 'Wir vermitteln Sie in ein Studium.',
          gloss:
            'Universitätsvermittlung, CSC-Stipendien, MBBS- und Ingenieurstudiengänge, Visa und Ankunft — von Anfang bis Ende organisiert.',
        },
        {
          text: 'Wir gestalten die Reise.',
          gloss:
            'Private und Gruppenreisen durch China und Japan — kuratierte Routen, zweisprachige Reiseleiter, ein 24/7-Desk während der Reise.',
        },
        {
          text: 'Wir bewegen die Ware.',
          gloss:
            'Beschaffung, Fabrikaudits, Zoll und Fracht zwischen Indien und China — mit Erfolgsprovision, gekoppelt an den versandten Warenwert.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Was wir tun',
      index: '01 / 04',
      title: 'Drei Wege über einen Korridor.',
      lede: 'Drei Kompetenzen, ein Korridor — geführt von Menschen, die auf beiden Seiten leben. Wählen Sie die Tür — sie öffnen sich alle.',
      explore: 'Entdecken',
      names: ['Bildung', 'Tourismus', 'Handel'],
      items: [
        {
          lead: 'Subventionierte Bildung weltweit',
          text: 'Universitätsvermittlung, CSC- und Universitätsstipendien, MBBS- und Ingenieurstudiengänge, Visa und Ankunft — von der Bewerbung bis zur Immatrikulation, alles aus einer Hand.',
          stat: '500+ vermittelte Studierende',
          alt: 'Studierende arbeiten in einem hellen modernen chinesischen Universitätslabor zusammen',
        },
        {
          lead: 'Maßgeschneiderte Kulturreisen',
          text: 'Private und Gruppenreisen durch China und Japan — kuratierte Routen, zweisprachige Reiseleiter, Visa-Service und ein 24/7-Desk während der Reise.',
          stat: 'China · Japan · individuelle Gruppen',
          alt: 'Eine Reisende blickt in der goldenen Stunde auf die Chinesische Mauer',
        },
        {
          lead: 'Grenzüberschreitender Handel, erledigt',
          text: 'Beschaffung, Fabrikaudits, AQL-Qualitätsschleusen, Zoll und Fracht zwischen Indien und China — mit Erfolgsprovision, gekoppelt an den versandten Warenwert.',
          stat: '200+ geprüfte Lieferanten',
          alt: 'Containerkrane im Hafen von Guangzhou bei Sonnenaufgang',
        },
      ],
    },
    stats: {
      labels: ['Vermittelte Studierende', 'Jahre im Korridor', 'Visa-Erfolgsquote', 'Betreute Länder'],
    },
    tools: {
      eyebrow: 'Kostenlose Tools',
      index: '02 / 04',
      title: 'Starten Sie mit Fakten, nicht mit Broschüren.',
      lede: 'Fünf schnelle Tools, die Ihnen echte Zahlen liefern, bevor Sie mit uns sprechen. Keine E-Mail nötig.',
      action: 'Alle Tools',
      items: [
        { label: 'Eignungscheck', desc: 'Vier Fragen. Ein klares Ja, ein Vielleicht — oder nicht für dieses Semester.' },
        { label: 'Stipendien-Check', desc: 'Wo Ihr Profil für CSC- und Universitätsstipendien wirklich steht.' },
        { label: 'Kostenrechner', desc: 'Studiengebühren plus Lebenshaltungskosten nach Stadt, Studiengang und Lebensstil.' },
        { label: 'Dokumenten-Checkliste', desc: 'Ihre persönliche Liste, druckfertig, ohne Lücken.' },
        { label: 'Zeitplaner', desc: 'Ihr Studienbeginn, rückwärts gerechnet zu einem Plan Monat für Monat.' },
      ],
    },
    insights: {
      eyebrow: 'Neueste Einblicke',
      index: '03 / 04',
      title: 'Vom Schreibtisch.',
      lede: 'Feldnotizen über Studieren, Reisen und Handeln entlang des Korridors.',
      action: 'Alle Artikel',
      readTime: '{n} Min. Lesezeit',
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      index: '04 / 04',
      title: 'Die ehrlichen Antworten.',
      lede: 'Die meistgestellten, knapp beantwortet. Den Rest finden Sie in der FAQ.',
      notePre: 'Noch unsicher? ',
      noteLink1: 'Alle Fragen lesen',
      noteMid: ' oder ',
      noteLink2: 'einem Menschen schreiben',
      notePost: ' — ein echter Berater antwortet.',
    },
  },

  ja: {
    meta: {
      title: 'RouteToAbroad — 中国で学び、東アジアを旅し、国境を越えて取引する',
      description:
        '中国の大学への進学手配、東アジア旅行の企画、インド–中国間の貿易業務を提供しています。事務所はニューデリーと広州。まずは無料のマッチング診断から。',
    },
    journey: {
      aria: 'どこからでも、キャンパスへ',
      eyebrow: '教育 · 観光 · 貿易',
      titleLine1: 'どこからでも',
      titleLine2: 'まっすぐ',
      titleHidden: ' キャンパスへ。',
      sub: 'インドと東アジアを結ぶ留学・旅行・貿易 — 回廊の両側に暮らすチームが運営しています。',
      globeAria: 'RouteToAbroad のデリーと広州の事務所を示すドットの地球儀',
      originLabel: 'お住まいの街は？',
      originPlaceholder: 'デリー · コーチ · グワーハーティー',
      originHint: 'Enter キーでルートを飛行 →',
      campusKicker: '03 / 到着',
      campusEcho: 'キャンパスへ。',
      campusImgAlt: '木々と歩道のある大学キャンパスの繊細な墨線画',
      campusLede:
        'インドと東アジアを結ぶ入学手続き、ビザ、旅行、貨物輸送 — 両側に暮らすチームが担当します。',
      campusCtaPrimary: 'マッチングを診断する',
      campusCtaSecondary: 'プログラムを見る',
      campusNote: '拘束はありません · 1 営業日以内に担当者が返信します。',
      stops: ['出発地', '移動中', 'キャンパス'],
    },
    illum: {
      eyebrow: '私たちの仕事',
      lines: [
        {
          text: 'あなたに合うプログラムを見つけます。',
          gloss:
            '大学進学手配、CSC 奨学金、MBBS・工学系コース、ビザ、到着サポート — すべて一貫して担当します。',
        },
        {
          text: '旅を設計します。',
          gloss:
            '中国と日本の個人・グループ旅行 — 企画された旅程、バイリンガルガイド、旅行中の 24/7 サポートデスク。',
        },
        {
          text: '商品を動かします。',
          gloss:
            'インドと中国間の調達、工場監査、通関、輸送 — 出荷額に連動する成功報酬制。',
        },
      ],
    },
    pillars: {
      eyebrow: '私たちのサービス',
      index: '01 / 04',
      title: 'ひとつの回廊、三つの道。',
      lede: '三つの力を、ひとつの回廊で。回廊の両側に暮らすチームが運営します。どの扉を選んでも — すべて開きます。',
      explore: '詳しく見る',
      names: ['教育', '観光', '貿易'],
      items: [
        {
          lead: '支援を受けられる世界の教育',
          text: '大学進学手配、CSC および大学奨学金、MBBS・工学系コース、ビザ、到着サポート — 出願からキャンパス登録まで一貫対応。',
          stat: '500 名以上を進学させて実績',
          alt: '明るく近代的な中国の大学の実験室で協働する学生たち',
        },
        {
          lead: 'オーダーメイドの文化の旅',
          text: '中国と日本の個人・グループ旅行 — 厳選された旅程、バイリンガルガイド、ビザ代行、旅行中の 24/7 サポートデスク。',
          stat: '中国 · 日本 · カスタムグループ',
          alt: '黄金の時間に万里の長城を見渡す旅行者',
        },
        {
          lead: '越境貿易、まるごと代行',
          text: 'インドと中国間の調達、工場監査、AQL 品質検査、通関、輸送 — 出荷額に連動する成功報酬制。',
          stat: '200 社以上の確認済みサプライヤー',
          alt: '夜明けの広州港で作業するコンテナクレーン',
        },
      ],
    },
    stats: {
      labels: ['進学者数', '回廊での活動年数', 'ビザ成功率', '対応国'],
    },
    tools: {
      eyebrow: '無料ツール',
      index: '02 / 04',
      title: 'パンフレットではなく、事実から始める。',
      lede: 'お話しする前に実際の数字がわかる、5 つのクイックツール。メール不要。',
      action: 'すべてのツール',
      items: [
        { label: 'マッチング診断', desc: '質問は 4 つ。明確な「はい」「検討」、または「この入学期は難しい」の判定。' },
        { label: '奨学金診断', desc: 'CSC および大学奨学金において、あなたのプロフィールが実際にどの位置にあるか。' },
        { label: '費用計算ツール', desc: '都市・プログラム・ライフスタイル別の学費と生活費。' },
        { label: '書類チェックリスト', desc: 'あなた専用のリスト。印刷でき、漏れはありません。' },
        { label: 'タイムラインプランナー', desc: '入学日から逆算して、月ごとの計画を作成します。' },
      ],
    },
    insights: {
      eyebrow: '最新の記事',
      index: '03 / 04',
      title: 'デスクから。',
      lede: '回廊を越えて学び、旅し、取引する現場の記録。',
      action: 'すべての記事',
      readTime: '読了時間 約 {n} 分',
    },
    faq: {
      eyebrow: 'よくある質問',
      index: '04 / 04',
      title: '率直な回答。',
      lede: '特によくいただく質問に短くお答えします。残りは FAQ ページに。',
      notePre: 'まだ迷っていますか？ ',
      noteLink1: 'すべての質問を読む',
      noteMid: ' または ',
      noteLink2: '担当者に質問する',
      notePost: ' — 実際のアドバイザーが返信します。',
    },
  },

  pt: {
    meta: {
      title: 'RouteToAbroad — Estude na China, viaje pela Ásia Oriental, negocie além das fronteiras',
      description:
        'Conectamos estudantes a universidades chinesas, planejamos viagens pela Ásia Oriental e operamos comércio entre Índia e China. Escritórios em Nova Délhi e Guangzhou. Comece com uma avaliação de perfil gratuita.',
    },
    journey: {
      aria: 'De qualquer lugar ao campus',
      eyebrow: 'Educação · Turismo · Comércio',
      titleLine1: 'De',
      titleLine2: 'qualquer lugar',
      titleHidden: ' ao campus.',
      sub: 'Estudos, viagens e comércio entre Índia e Ásia Oriental — conduzidos por uma equipe que vive dos dois lados do corredor.',
      globeAria: 'Globo pontilhado destacando os escritórios da RouteToAbroad em Délhi e Guangzhou',
      originLabel: 'onde você mora?',
      originPlaceholder: 'Délhi · Kochi · Guwahati',
      originHint: 'Pressione Enter para traçar a rota →',
      campusKicker: '03 / Chegada',
      campusEcho: 'ao campus.',
      campusImgAlt: 'Desenho a traço fino de um campus universitário com árvores e caminhos',
      campusLede:
        'Admissões, vistos, viagens e cargas entre Índia e Ásia Oriental — conduzidos por uma equipe que vive dos dois lados.',
      campusCtaPrimary: 'Verifique seu perfil',
      campusCtaSecondary: 'Explorar programas',
      campusNote: 'Sem compromisso · uma pessoa real responde em um dia útil.',
      stops: ['Origem', 'Em trânsito', 'Campus'],
    },
    illum: {
      eyebrow: 'É isto que fazemos',
      lines: [
        {
          text: 'Conectamos você a um programa.',
          gloss:
            'Admissão universitária, bolsas CSC, carreiras de MBBS e engenharia, vistos e chegada — conduzidos de ponta a ponta.',
        },
        {
          text: 'Desenhamos a viagem.',
          gloss:
            'Viagens privadas e em grupo pela China e pelo Japão — roteiros selecionados, guias bilíngues e suporte 24/7 durante a viagem.',
        },
        {
          text: 'Movemos a mercadoria.',
          gloss:
            'Suprimentos, auditorias de fábrica, alfândega e frete entre Índia e China — com comissão de sucesso vinculada ao valor enviado.',
        },
      ],
    },
    pillars: {
      eyebrow: 'O que fazemos',
      index: '01 / 04',
      title: 'Três caminhos por um só corredor.',
      lede: 'Três capacidades, um corredor, conduzidas por uma equipe que vive dos dois lados. Escolha a porta — todas se abrem.',
      explore: 'Explorar',
      names: ['Educação', 'Turismo', 'Comércio'],
      items: [
        {
          lead: 'Educação global subsidiada',
          text: 'Admissão universitária, bolsas CSC e institucionais, carreiras de MBBS e engenharia, vistos e chegada — da candidatura à matrícula no campus.',
          stat: '500+ estudantes matriculados',
          alt: 'Estudantes colaborando em um laboratório universitário chinês moderno e iluminado',
        },
        {
          lead: 'Viagens culturais sob medida',
          text: 'Viagens privadas e em grupo pela China e pelo Japão — roteiros selecionados, guias bilíngues, assessoria de vistos e suporte 24/7 durante a viagem.',
          stat: 'China · Japão · grupos personalizados',
          alt: 'Uma viajante contemplando a Grande Muralha da China na hora dourada',
        },
        {
          lead: 'Comércio transfronteiriço, resolvido',
          text: 'Suprimentos, auditorias de fábrica, controles de qualidade AQL, alfândega e frete entre Índia e China — com comissão de sucesso vinculada ao valor enviado.',
          stat: '200+ fornecedores verificados',
          alt: 'Guindastes de contêineres trabalhando no porto de Guangzhou ao amanhecer',
        },
      ],
    },
    stats: {
      labels: ['Estudantes matriculados', 'Anos no corredor', 'Taxa de aprovação de vistos', 'Países atendidos'],
    },
    tools: {
      eyebrow: 'Ferramentas gratuitas',
      index: '02 / 04',
      title: 'Comece com fatos, não com folhetos.',
      lede: 'Cinco ferramentas rápidas que entregam números reais antes de você falar conosco. Sem e-mail.',
      action: 'Todas as ferramentas',
      items: [
        { label: 'Avaliação de perfil', desc: 'Quatro perguntas. Um sim direto, um talvez, ou não para este ciclo de ingresso.' },
        { label: 'Avaliação de bolsas', desc: 'Onde o seu perfil realmente se situa para bolsas CSC e institucionais.' },
        { label: 'Calculadora de custos', desc: 'Mensalidades e custo de vida por cidade, programa e estilo de vida.' },
        { label: 'Checklist de documentos', desc: 'Sua lista personalizada, pronta para imprimir, sem nada faltando.' },
        { label: 'Planejador de cronograma', desc: 'Sua data de ingresso, calculada de trás para frente em um plano mês a mês.' },
      ],
    },
    insights: {
      eyebrow: 'Últimas análises',
      index: '03 / 04',
      title: 'Da mesa de trabalho.',
      lede: 'Notas de campo sobre estudar, viajar e negociar pelo corredor.',
      action: 'Todos os artigos',
      readTime: 'leitura de {n} min',
    },
    faq: {
      eyebrow: 'Perguntas frequentes',
      index: '04 / 04',
      title: 'As respostas honestas.',
      lede: 'As que mais ouvimos, mantidas curtas. O resto fica na FAQ.',
      notePre: 'Ainda em dúvida? ',
      noteLink1: 'leia todas as perguntas',
      noteMid: ' ou ',
      noteLink2: 'fale com uma pessoa',
      notePost: ' — um orientador real responde.',
    },
  },

  hi: {
    meta: {
      title: 'RouteToAbroad — चीन में पढ़ें, पूर्वी एशिया घूमें, सीमाओं के पार व्यापार करें',
      description:
        'हम विद्यार्थियों को चीनी विश्वविद्यालयों में प्रवेश दिलाते हैं, पूर्वी एशिया की यात्राएँ डिज़ाइन करते हैं और भारत–चीन व्यापार संचालित करते हैं। नई दिल्ली और ग्वांगज़ू में कार्यालय। मुफ़्त फ़िट जाँच के साथ शुरुआत करें।',
    },
    journey: {
      aria: 'कहीं से भी, सीधे कैंपस तक',
      eyebrow: 'शिक्षा · पर्यटन · व्यापार',
      titleLine1: 'कहीं से भी',
      titleLine2: 'सीधे',
      titleHidden: ' कैंपस तक।',
      sub: 'भारत और पूर्वी एशिया के बीच पढ़ाई, यात्रा और व्यापार — ऐसी टीम द्वारा संचालित जो गलियारे के दोनों ओर रहती है।',
      globeAria: 'बिंदुओं वाला ग्लोब, जिसमें RouteToAbroad के दिल्ली और ग्वांगज़ू कार्यालय दिखाए गए हैं',
      originLabel: 'आप कहाँ रहते हैं?',
      originPlaceholder: 'दिल्ली · कोच्चि · गुवाहाटी',
      originHint: 'रूट उड़ाने के लिए Enter दबाएँ →',
      campusKicker: '03 / पहुँच',
      campusEcho: 'कैंपस तक।',
      campusImgAlt: 'पेड़ों और पगडंडियों वाले विश्वविद्यालय परिसर की बारीक स्याही-रेखा चित्रकारी',
      campusLede:
        'भारत और पूर्वी एशिया के बीच प्रवेश, वीज़ा, यात्राएँ और माल ढुलाई — दोनों ओर रहने वाली टीम द्वारा संचालित।',
      campusCtaPrimary: 'जाँचें कि आप फ़िट हैं या नहीं',
      campusCtaSecondary: 'प्रोग्राम देखें',
      campusNote: 'कोई वचनबद्धता नहीं · एक व्यावसायिक दिन में जवाब।',
      stops: ['प्रस्थान', 'रास्ते में', 'कैंपस'],
    },
    illum: {
      eyebrow: 'हम यही करते हैं',
      lines: [
        {
          text: 'आपके लिए सही प्रोग्राम चुनते हैं।',
          gloss:
            'विश्वविद्यालय प्रवेश, CSC छात्रवृत्तियाँ, MBBS और इंजीनियरिंग कोर्स, वीज़ा और आगमन — शुरू से अंत तक हमारी ज़िम्मेदारी।',
        },
        {
          text: 'यात्रा डिज़ाइन करते हैं।',
          gloss:
            'चीन और जापान में निजी और समूह यात्राएँ — चुनिंदा यात्रा-योजनाएँ, द्विभाषी गाइड, और यात्रा के दौरान 24/7 डेस्क।',
        },
        {
          text: 'माल पहुँचाते हैं।',
          gloss:
            'भारत और चीन के बीच सोर्सिंग, फ़ैक्टरी ऑडिट, कस्टम्स और शिपिंग — भेजे गए माल के मूल्य से जुड़ी सफलता फ़ीस पर।',
        },
      ],
    },
    pillars: {
      eyebrow: 'हम क्या करते हैं',
      index: '01 / 04',
      title: 'एक गलियारा, तीन रास्ते।',
      lede: 'तीन क्षमताएँ, एक गलियारा — ऐसी टीम द्वारा संचालित जो उसके दोनों ओर रहती है। दरवाज़ा चुनिए — सब खुलते हैं।',
      explore: 'देखें',
      names: ['शिक्षा', 'पर्यटन', 'व्यापार'],
      items: [
        {
          lead: 'सब्सिडी वाली वैश्विक शिक्षा',
          text: 'विश्वविद्यालय प्रवेश, CSC और विश्वविद्यालय छात्रवृत्तियाँ, MBBS और इंजीनियरिंग कोर्स, वीज़ा और आगमन — आवेदन से कैंपस पंजीकरण तक पूरी ज़िम्मेदारी।',
          stat: '500+ विद्यार्थी प्रवेश पाए',
          alt: 'चीनी विश्वविद्यालय की उज्ज्वल आधुनिक प्रयोगशाला में मिलकर काम करते विद्यार्थी',
        },
        {
          lead: 'विरासत की निजी यात्राएँ',
          text: 'चीन और जापान में निजी और समूह यात्राएँ — चुनिंदा योजनाएँ, द्विभाषी गाइड, वीज़ा सहायता और यात्रा के दौरान 24/7 डेस्क।',
          stat: 'चीन · जापान · कस्टम समूह',
          alt: 'सुनहरे समय में चीन की महान दीवार को देखता एक यात्री',
        },
        {
          lead: 'सीमा-पार व्यापार, पूरी देखरेख',
          text: 'भारत और चीन के बीच सोर्सिंग, फ़ैक्टरी ऑडिट, AQL गुणवत्ता जाँच, कस्टम्स और शिपिंग — भेजे गए माल के मूल्य से जुड़ी सफलता फ़ीस पर।',
          stat: '200+ जाँचे हुए आपूर्तिकर्ता',
          alt: 'भोर में ग्वांगज़ू बंदरगाह पर काम करते कंटेनर क्रेन',
        },
      ],
    },
    stats: {
      labels: ['प्रवेश पाए विद्यार्थी', 'गलियारे में वर्ष', 'वीज़ा सफलता दर', 'देश जिनकी सेवा'],
    },
    tools: {
      eyebrow: 'मुफ़्त टूल',
      index: '02 / 04',
      title: 'ब्रोशर नहीं, तथ्यों से शुरुआत करें।',
      lede: 'पाँच तेज़ टूल जो बातचीत से पहले ही असली आँकड़े दे देते हैं। ईमेल की ज़रूरत नहीं।',
      action: 'सभी टूल',
      items: [
        { label: 'फ़िट जाँच', desc: 'चार सवाल। सीधा हाँ, शायद, या इस सत्र के लिए नहीं।' },
        { label: 'छात्रवृत्ति जाँच', desc: 'CSC और विश्वविद्यालय छात्रवृत्तियों में आपकी प्रोफ़ाइल असल में कहाँ खड़ी है।' },
        { label: 'लागत कैलकुलेटर', desc: 'शहर, प्रोग्राम और जीवनशैली के अनुसार ट्यूशन और रहने की लागत।' },
        { label: 'दस्तावेज़ चेकलिस्ट', desc: 'आपकी व्यक्तिगत सूची, प्रिंट योग्य, कुछ भी बाकी नहीं।' },
        { label: 'समय-योजना टूल', desc: 'आपकी प्रवेश तिथि, पीछे की ओर गिनकर महीना-दर-महीना योजना।' },
      ],
    },
    insights: {
      eyebrow: 'ताज़ा लेख',
      index: '03 / 04',
      title: 'मेज़ से।',
      lede: 'गलियारे के पार पढ़ने, घूमने और व्यापार करने पर मैदानी टिप्पणियाँ।',
      action: 'सभी लेख',
      readTime: '{n} मिनट पठन',
    },
    faq: {
      eyebrow: 'सामान्य प्रश्न',
      index: '04 / 04',
      title: 'ईमानदार जवाब।',
      lede: 'सबसे ज़्यादा पूछे जाने वाले, संक्षेप में। बाकी सब FAQ पृष्ठ में।',
      notePre: 'अभी भी संदेह है? ',
      noteLink1: 'सभी प्रश्न पढ़ें',
      noteMid: ' या ',
      noteLink2: 'किसी व्यक्ति से पूछें',
      notePost: ' — असली सलाहकार जवाब देता है।',
    },
  },
};
