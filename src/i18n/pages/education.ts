/**
 * Education pillar page copy — every user-visible string on the shared
 * EducationPage component, keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations that follow the terminology
 * already established in src/i18n/ui.ts and still need native-speaker review.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * EducationStrings interface, so a key added to `en` breaks the build until
 * all four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface EducationStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb label for this pillar (BaseLayout + PageHero crumbs). */
  crumb: string;
  /** JSON-LD Service + HowTo copy (surfaces in search results). */
  schema: {
    serviceName: string;
    serviceDescription: string;
    serviceType: string;
    howToName: string;
    howToDescription: string;
  };
  hero: {
    eyebrow: string;
    /** Instrument marker (kept identical across locales). */
    index: string;
    title: string;
    lede: string;
    facts: { label: string; value: string }[];
    primaryCta: string;
    secondaryCta: string;
    /** Anchor-jump labels, in section order (programmes → faq). */
    jumps: [string, string, string, string, string, string];
  };
  /** "Short answer" intro, split at the <strong> boundary. */
  qa: { label: string; strong: string; rest: string };
  photo: { alt: string; caption: string };
  programmes: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    items: { name: string; text: string }[];
  };
  process: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    /** step.time carries day/week counts — numbers stay identical per locale. */
    steps: { name: string; time: string; text: string }[];
  };
  scholarship: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    /** num values are money/count facts — kept identical across locales. */
    stats: { num: string; label: string }[];
  };
  unis: {
    eyebrow: string;
    index: string;
    title: string;
    lede: string;
    /** Composes `${city} · ${est} ${founded}` on the university cards. */
    est: string;
    profile: string;
  };
  apply: {
    eyebrow: string;
    /** Title text — the component wraps it in the id-carrying span itself. */
    title: string;
    lede: string;
    next: { lead: string; text: string }[];
  };
  faq: { eyebrow: string; index: string; title: string; more: string };
}

export const EDUCATION: Record<Locale, EducationStrings> = {
  en: {
    meta: {
      title: 'Study in China — MBBS, Engineering & Scholarships',
      description:
        'University placement in China end to end: MOE-listed universities, CSC scholarships, MBBS and engineering programmes, visa processing and arrival support. 500+ students placed.',
    },
    crumb: 'Education',
    schema: {
      serviceName: 'Study in China — university placement',
      serviceDescription:
        'Admissions, scholarship and visa services for international students entering Chinese universities, from consultation to campus registration.',
      serviceType: 'Education consultancy',
      howToName: 'How to study in China with RouteToAbroad',
      howToDescription: 'The five-step placement process from first consultation to campus enrolment.',
    },
    hero: {
      eyebrow: 'Education',
      index: 'EDU / 01',
      title: 'Study in China. Change everything.',
      lede: 'English-taught degrees at MOE-listed universities, scholarships that actually reduce fees, and a team that stays with you from application to campus gate.',
      facts: [
        { label: 'Tuition from', value: 'US$2,500 / yr' },
        { label: 'Intakes', value: 'Sep · Feb' },
        { label: 'Language', value: 'English-taught' },
        { label: 'Placed', value: '500+ students' },
      ],
      primaryCta: 'Check your fit',
      secondaryCta: 'See programmes',
      jumps: ['Programmes', 'Process', 'Scholarships', 'Universities', 'Apply', 'FAQ'],
    },
    qa: {
      label: 'Short answer',
      strong: 'Yes — Chinese universities are a legitimate, affordable route for international students',
      rest: ', provided you choose MOE-listed institutions and plan language and licensing exams from the start. Tuition typically runs US$2,500–8,000/year, and scholarships can cut it to zero.',
    },
    photo: {
      alt: 'International students collaborating in a modern Chinese university laboratory',
      caption: 'Student cohorts we placed across Beijing, Shanghai and Hangzhou.',
    },
    programmes: {
      eyebrow: 'Programmes',
      index: '01 / 05',
      title: 'What you can study',
      lede: 'Five routes with teaching language and intake stated up front. Fees are quoted per university — a single number across a country would be a guess.',
      items: [
        {
          name: 'MBBS / Medicine',
          text: 'MOE-listed English-medium medical degrees with WHO-recognised universities, integrated HSK training and FMGE/NExT planning from day one.',
        },
        {
          name: 'Engineering & Technology',
          text: 'AI, robotics, civil, mechanical and electrical engineering at universities wired into China\'s manufacturing economy.',
        },
        {
          name: 'Business & Management',
          text: 'English-taught BBA, MBA and finance programmes in Shanghai and Beijing with internship access to employers.',
        },
        {
          name: 'Chinese Language (HSK)',
          text: 'HSK 1–6 pathway programmes, from zero to degree-readiness, with exam registration handled for you.',
        },
        {
          name: 'Bachelor\'s Degrees',
          text: 'Undergraduate programmes across economics, international business, design and computer science.',
        },
        {
          name: 'Masters & PhD (Research)',
          text: 'CSC-funded research placements — we match you to supervisors, shape proposals and manage the full file.',
        },
      ],
    },
    process: {
      eyebrow: 'The process',
      index: '02 / 05',
      title: 'Five stops from first message to campus',
      lede: 'Step one takes about fifteen minutes. We file, follow up and chase until there is an offer — or a clear no with a reason.',
      steps: [
        {
          name: 'Initial consultation',
          time: 'Day 1–2',
          text: 'A free call: your marks, budget, goals. We tell you honestly where you stand — including when the answer is "not this route".',
        },
        {
          name: 'University matching',
          time: 'Day 3–5',
          text: 'A shortlist of MOE-listed universities matched to your profile and scholarship strategy, with real fee tables per programme.',
        },
        {
          name: 'Application filing',
          time: 'Week 1–2',
          text: 'We prepare and submit applications and scholarship files — study plan, translations, notarisation, portal forms.',
        },
        {
          name: 'Offer, JW202 & visa',
          time: 'Week 3–12',
          text: 'Offer letter and JW202 tracked from the university side; physical exam, embassy appointment and interview prep with our team.',
        },
        {
          name: 'Arrival & enrolment',
          time: 'September',
          text: 'Airport pickup, dorm registration, residence permit, SIM and bank account — the boring things that stall a first week, handled.',
        },
      ],
    },
    scholarship: {
      eyebrow: 'Free tool',
      title: 'Are you eligible for a Chinese scholarship?',
      text: 'Three honest questions about your marks and level. We\'ll tell you where your profile sits — full CSC range, partial awards, or self-funded with better odds. No fake "You qualify!" results.',
      cta: 'Check eligibility',
      stats: [
        { num: '$2M+', label: 'scholarships won by our students' },
        { num: '150+', label: 'partner universities' },
      ],
    },
    unis: {
      eyebrow: 'University partners',
      index: '03 / 05',
      title: 'Where our students go',
      lede: 'Profiles, real costs and admission realities for the five universities we place into most.',
      est: 'est.',
      profile: 'University profile',
    },
    apply: {
      eyebrow: 'Start here',
      title: 'Apply for a free assessment',
      lede: 'Tell us where you are. We come back within one working day with an honest read — and a plan if there is one.',
      next: [
        { lead: 'Verification within 24 hours.', text: 'An advisor — not a bot — reviews your profile.' },
        { lead: 'Callback in your language.', text: 'English, Hindi, Malayalam; Mandarin on the China side.' },
        { lead: 'A written roadmap.', text: 'Universities, fees, scholarship chances, timeline — in writing.' },
      ],
    },
    faq: { eyebrow: 'Education FAQ', index: '05 / 05', title: 'Asked every season', more: 'All education FAQs' },
  },

  zh: {
    meta: {
      title: '在中国留学 — MBBS、工科与奖学金',
      description:
        '一站式中国大学申请服务：教育部认可高校、CSC 奖学金、MBBS 与工科课程、签证办理与落地支持。已送 500+ 名学生入学。',
    },
    crumb: '教育',
    schema: {
      serviceName: '在中国留学 — 大学申请服务',
      serviceDescription: '为进入中国高校的国际学生提供录取、奖学金与签证服务，从首次咨询到校园注册。',
      serviceType: '教育咨询',
      howToName: '如何通过 RouteToAbroad 去中国留学',
      howToDescription: '从首次咨询到校园注册的五步申请流程。',
    },
    hero: {
      eyebrow: '教育',
      index: 'EDU / 01',
      title: '在中国留学。改变一切。',
      lede: '教育部认可高校的英文授课学位、实实在在降低费用的奖学金，以及一支从申请陪你到校门口的团队。',
      facts: [
        { label: '学费低至', value: 'US$2,500 / 年' },
        { label: '入学时间', value: '9月 · 2月' },
        { label: '授课语言', value: '英文授课' },
        { label: '已送学生', value: '500+ 名' },
      ],
      primaryCta: '检查你的适配',
      secondaryCta: '查看课程',
      jumps: ['课程', '流程', '奖学金', '大学', '申请', 'FAQ'],
    },
    qa: {
      label: '简短回答',
      strong: '是的——只要选对教育部认可的高校，并从一开始就规划好语言与执业考试，中国大学对国际学生就是一条正规且划算的路线',
      rest: '。学费通常为每年 US$2,500–8,000，奖学金甚至可以降到零。',
    },
    photo: {
      alt: '国际学生在一间现代的中国大学实验室里协作',
      caption: '由我们送入北京、上海与杭州各高校的学生们。',
    },
    programmes: {
      eyebrow: '课程方向',
      index: '01 / 05',
      title: '你可以学什么',
      lede: '五种路线，授课语言和入学时间一目了然。学费按学校逐所报价——用一个数字概括一个国家，只能是猜测。',
      items: [
        {
          name: '临床医学（MBBS）',
          text: '教育部认可的英文授课医学学位，合作大学获 WHO 认可，内置 HSK 培训，并从第一天起规划 FMGE/NExT 考试。',
        },
        {
          name: '工程与技术',
          text: '人工智能、机器人、土木、机械与电气工程，就读院校深度融入中国的制造业经济。',
        },
        {
          name: '商业与管理',
          text: '在上海和北京的英文授课 BBA、MBA 与金融课程，并可接触雇主实习机会。',
        },
        {
          name: '中文（HSK）',
          text: 'HSK 1–6 进阶课程，从零基础到具备学位学习资格，考试报名由我们代办。',
        },
        {
          name: '本科课程',
          text: '涵盖经济学、国际商务、设计与计算机科学的本科项目。',
        },
        {
          name: '硕士／博士（研究型）',
          text: 'CSC 资助的科研深造——我们为你匹配导师、打磨研究计划并管理整套申请材料。',
        },
      ],
    },
    process: {
      eyebrow: '申请流程',
      index: '02 / 05',
      title: '从第一次联系到入学的五个站点',
      lede: '第一步只要十五分钟左右。我们负责递交、跟进和催促，直到拿到录取——或者得到一个带着原因的明确拒绝。',
      steps: [
        {
          name: '首次咨询',
          time: '第 1–2 天',
          text: '一次免费通话：聊你的成绩、预算和目标。我们坦诚告诉你你所处的位置——包括答案是“不走这条路”的时候。',
        },
        {
          name: '匹配大学',
          time: '第 3–5 天',
          text: '根据你的背景和奖学金策略，列出一份教育部认可大学的候选名单，并附每个专业的真实费用表。',
        },
        {
          name: '递交申请',
          time: '第 1–2 周',
          text: '我们准备并递交申请与奖学金材料——学习计划、翻译件、公证与网申表单。',
        },
        {
          name: '录取、JW202 与签证',
          time: '第 3–12 周',
          text: '从学校端跟进录取通知书与 JW202；体检、使馆预约和面试辅导由我们的团队陪同完成。',
        },
        {
          name: '落地与注册',
          time: '9 月',
          text: '接机、宿舍注册、居留许可、电话卡和银行开户——那些容易拖垮第一周的琐碎事务，全部办好。',
        },
      ],
    },
    scholarship: {
      eyebrow: '免费工具',
      title: '你有资格拿中国奖学金吗？',
      text: '关于成绩和水平的三道诚实问题。我们会告诉你你的条件处在哪一段——CSC 全额区间、部分奖项，还是自费但胜算更高。绝不给出虚假的“你符合资格！”结果。',
      cta: '检查资格',
      stats: [
        { num: '$2M+', label: '我们的学生累计获得的奖学金' },
        { num: '150+', label: '合作大学' },
      ],
    },
    unis: {
      eyebrow: '合作大学',
      index: '03 / 05',
      title: '我们的学生去哪里',
      lede: '我们送生最多的五所大学：院校画像、真实费用与录取实情。',
      est: '建校于',
      profile: '查看大学档案',
    },
    apply: {
      eyebrow: '从这里开始',
      title: '申请免费评估',
      lede: '告诉我们你现在的情况。我们会在一个工作日内给出坦诚的判断——有戏的话，还会附上一份计划。',
      next: [
        { lead: '24 小时内完成核验。', text: '审阅你资料的是顾问——不是机器人。' },
        { lead: '用你的语言回电。', text: '英语、印地语、马拉雅拉姆语；中国这边是普通话。' },
        { lead: '一份书面的路线图。', text: '大学、费用、奖学金机会、时间线——白纸黑字。' },
      ],
    },
    faq: { eyebrow: '留学常见问题', index: '05 / 05', title: '每个申请季都被问到', more: '查看全部留学 FAQ' },
  },

  fr: {
    meta: {
      title: 'Étudier en Chine — MBBS, ingénierie et bourses',
      description:
        'Placement universitaire en Chine de bout en bout : universités reconnues par le ministère de l’Éducation, bourses CSC, programmes MBBS et ingénierie, traitement des visas et accompagnement à l’arrivée. 500+ étudiants placés.',
    },
    crumb: 'Études',
    schema: {
      serviceName: 'Étudier en Chine — placement universitaire',
      serviceDescription:
        'Services d’admission, de bourses et de visa pour les étudiants internationaux entrant dans les universités chinoises, de la première consultation à l’inscription sur le campus.',
      serviceType: 'Conseil en éducation',
      howToName: 'Comment étudier en Chine avec RouteToAbroad',
      howToDescription: 'Le processus de placement en cinq étapes, de la première consultation à l’inscription sur le campus.',
    },
    hero: {
      eyebrow: 'Études',
      index: 'EDU / 01',
      title: 'Étudier en Chine. Tout changer.',
      lede: 'Des diplômes enseignés en anglais dans des universités reconnues par le ministère, des bourses qui réduisent vraiment les frais, et une équipe qui vous accompagne de la candidature au portail du campus.',
      facts: [
        { label: 'Frais dès', value: 'US$2,500 / an' },
        { label: 'Intakes', value: 'Sep · Fév' },
        { label: 'Langue', value: 'Enseignement en anglais' },
        { label: 'Placés', value: '500+ étudiants' },
      ],
      primaryCta: 'Tester votre profil',
      secondaryCta: 'Voir les programmes',
      jumps: ['Programmes', 'Processus', 'Bourses', 'Universités', 'Candidater', 'FAQ'],
    },
    qa: {
      label: 'Réponse courte',
      strong: 'Oui — les universités chinoises sont une voie légitime et abordable pour les étudiants internationaux',
      rest: ', à condition de choisir des établissements listés par le ministère et de planifier langue et examens d’exercice dès le départ. Les frais tournent autour de US$2,500–8,000/an, et les bourses peuvent les ramener à zéro.',
    },
    photo: {
      alt: 'Étudiants internationaux collaborant dans un laboratoire universitaire chinois moderne',
      caption: 'Les promotions d’étudiants que nous avons placées à Pékin, Shanghai et Hangzhou.',
    },
    programmes: {
      eyebrow: 'Programmes',
      index: '01 / 05',
      title: 'Ce que vous pouvez étudier',
      lede: 'Cinq voies avec langue d’enseignement et intake annoncés d’entrée. Les frais sont annoncés université par université — un chiffre unique pour tout un pays serait une devinette.',
      items: [
        {
          name: 'MBBS / Médecine',
          text: 'Diplômes de médecine en anglais dans des universités listées par le ministère et reconnues par l’OMS, avec formation HSK intégrée et préparation FMGE/NExT dès le premier jour.',
        },
        {
          name: 'Ingénierie & technologie',
          text: 'IA, robotique, génie civil, mécanique et électrique dans des universités connectées à l’économie manufacturière chinoise.',
        },
        {
          name: 'Business & management',
          text: 'Programmes BBA, MBA et finance enseignés en anglais à Shanghai et Pékin, avec un accès aux stages chez les employeurs.',
        },
        {
          name: 'Langue chinoise (HSK)',
          text: 'Parcours HSK 1–6, de zéro jusqu’au niveau requis pour un diplôme, inscription aux examens gérée pour vous.',
        },
        {
          name: 'Licences',
          text: 'Programmes de licence en économie, commerce international, design et informatique.',
        },
        {
          name: 'Master / doctorat (recherche)',
          text: 'Placements de recherche financés par le CSC — nous vous mettons en relation avec des directeurs de thèse, façonnons vos propositions et gérons le dossier complet.',
        },
      ],
    },
    process: {
      eyebrow: 'Le processus',
      index: '02 / 05',
      title: 'Cinq étapes du premier message au campus',
      lede: 'La première étape prend un quart d’heure. Nous déposons, relançons et coursons jusqu’à l’admission — ou jusqu’à un non clair et motivé.',
      steps: [
        {
          name: 'Première consultation',
          time: 'Jour 1–2',
          text: 'Un appel gratuit : vos notes, votre budget, vos objectifs. Nous vous disons honnêtement où vous en êtes — y compris quand la réponse est « pas cette voie ».',
        },
        {
          name: 'Sélection des universités',
          time: 'Jour 3–5',
          text: 'Une shortlist d’universités reconnues par le ministère, adaptée à votre profil et à votre stratégie de bourses, avec de vrais barèmes de frais par programme.',
        },
        {
          name: 'Dépôt des candidatures',
          time: 'Semaine 1–2',
          text: 'Nous préparons et déposons candidatures et dossiers de bourse — plan d’études, traductions, légalisations, formulaires des portails.',
        },
        {
          name: 'Admission, JW202 & visa',
          time: 'Semaine 3–12',
          text: 'Lettre d’admission et JW202 suivies côté université ; visite médicale, rendez-vous à l’ambassade et préparation à l’entretien avec notre équipe.',
        },
        {
          name: 'Arrivée & inscription',
          time: 'Septembre',
          text: 'Accueil à l’aéroport, inscription en cité, permis de résidence, SIM et compte bancaire — les détails ennuyeux qui plombent une première semaine, gérés.',
        },
      ],
    },
    scholarship: {
      eyebrow: 'Outil gratuit',
      title: 'Avez-vous droit à une bourse chinoise ?',
      text: 'Trois questions honnêtes sur vos notes et votre niveau. Nous vous disons où se situe votre profil — plage CSC complète, bourses partielles, ou financement personnel avec de meilleures probabilités. Aucun faux « Vous êtes éligible ! ».',
      cta: 'Vérifier l’éligibilité',
      stats: [
        { num: '$2M+', label: 'de bourses remportées par nos étudiants' },
        { num: '150+', label: 'universités partenaires' },
      ],
    },
    unis: {
      eyebrow: 'Universités partenaires',
      index: '03 / 05',
      title: 'Où vont nos étudiants',
      lede: 'Profils, coûts réels et réalités d’admission pour les cinq universités où nous plaçons le plus.',
      est: 'fondée en',
      profile: 'Profil de l’université',
    },
    apply: {
      eyebrow: 'Commencer ici',
      title: 'Demander une évaluation gratuite',
      lede: 'Dites-nous où vous en êtes. Nous revenons sous un jour ouvré avec une lecture honnête — et un plan s’il y en a un.',
      next: [
        { lead: 'Vérification sous 24 heures.', text: 'Votre profil est relu par un conseiller — pas un robot.' },
        { lead: 'Rappel dans votre langue.', text: 'Anglais, hindi, malayalam ; mandarin côté Chine.' },
        { lead: 'Une feuille de route écrite.', text: 'Universités, frais, chances de bourse, calendrier — par écrit.' },
      ],
    },
    faq: { eyebrow: 'FAQ Études', index: '05 / 05', title: 'Posées à chaque rentrée', more: 'Toutes les FAQ études' },
  },

  ar: {
    meta: {
      title: 'الدراسة في الصين — MBBS والهندسة والمنح',
      description:
        'قبول جامعي في الصين من البداية للنهاية: جامعات معتمدة من وزارة التعليم، منح CSC، برامج MBBS والهندسة، معالجة التأشيرات ودعم الوصول. أكثر من 500 طالب التحقوا بجامعاتهم.',
    },
    crumb: 'التعليم',
    schema: {
      serviceName: 'الدراسة في الصين — قبول جامعي',
      serviceDescription: 'خدمات قبول ومنح وتأشيرات للطلاب الدوليين القادمين إلى الجامعات الصينية، من الاستشارة الأولى حتى التسجيل في الحرم.',
      serviceType: 'استشارات تعليمية',
      howToName: 'كيف تدرس في الصين مع RouteToAbroad',
      howToDescription: 'عملية قبول من خمس خطوات من الاستشارة الأولى حتى التسجيل في الحرم الجامعي.',
    },
    hero: {
      eyebrow: 'التعليم',
      index: 'EDU / 01',
      title: 'ادرس في الصين. غيّر كل شيء.',
      lede: 'شهادات تُدرَّس بالإنجليزية في جامعات معتمدة من وزارة التعليم، ومنح تخفض الرسوم فعلًا، وفريق يبقى معك من التقديم حتى بوابة الحرم.',
      facts: [
        { label: 'الرسوم تبدأ من', value: 'US$2,500 / سنة' },
        { label: 'موعد الالتحاق', value: 'سبتمبر · فبراير' },
        { label: 'اللغة', value: 'تدريس بالإنجليزية' },
        { label: 'الالتحاقات', value: '500+ طالب' },
      ],
      primaryCta: 'تحقق من ملاءمتك',
      secondaryCta: 'استعرض البرامج',
      jumps: ['البرامج', 'الخطوات', 'المنح', 'الجامعات', 'التقديم', 'الأسئلة الشائعة'],
    },
    qa: {
      label: 'الإجابة المختصرة',
      strong: 'نعم — الجامعات الصينية مسار مشروع وميسور للطلاب الدوليين',
      rest: '، بشرط اختيار مؤسسات معتمدة من وزارة التعليم والتخطيط للغة وامتحانات المزاولة من البداية. الرسوم عادةً بين US$2,500–8,000 سنويًا، والمنح قد تُصفّرها.',
    },
    photo: {
      alt: 'طلاب دوليون يتعاونون في مختبر جامعي صيني حديث',
      caption: 'دفعات الطلاب الذين ساعدناهم على الالتحاق في بكين وشنغهاي وهانغتشو.',
    },
    programmes: {
      eyebrow: 'البرامج',
      index: '01 / 05',
      title: 'ماذا يمكنك أن تدرس',
      lede: 'خمسة مسارات بلغة التدريس وموعد الالتحاق معلنين منذ البداية. الرسوم تُسعَّر لكل جامعة — رقم واحد لكل بلد ما هو إلا تخمين.',
      items: [
        {
          name: 'الطب البشري (MBBS)',
          text: 'شهادات طب بالإنجليزية من جامعات معتمدة من الوزارة ومعترف بها من WHO، مع تدريب HSK مدمج وتخطيط FMGE/NExT من اليوم الأول.',
        },
        {
          name: 'الهندسة والتقنية',
          text: 'الذكاء الاصطناعي والروبوتات والهندسة المدنية والميكانيكية والكهربائية في جامعات مرتبطة باقتصاد التصنيع الصيني.',
        },
        {
          name: 'إدارة الأعمال',
          text: 'برامج BBA وMBA ومالية بالإنجليزية في شنغهاي وبكين مع فرص تدرب لدى جهات التوظيف.',
        },
        {
          name: 'اللغة الصينية (HSK)',
          text: 'مسارات HSK 1–6 من الصفر حتى الجاهزية للدراسة الجامعية، مع حجز الاختبارات نيابة عنك.',
        },
        {
          name: 'شهادات البكالوريوس',
          text: 'برامج جامعية في الاقتصاد والأعمال الدولية والتصميم وعلوم الحاسب.',
        },
        {
          name: 'ماجستير / دكتوراه (بحث)',
          text: 'مقاعد بحثية ممولة من CSC — نربطك بالمشرفين، نصيغ المقترحات وندير الملف كاملًا.',
        },
      ],
    },
    process: {
      eyebrow: 'الخطوات',
      index: '02 / 05',
      title: 'خمس محطات من أول رسالة إلى الحرم',
      lede: 'الخطوة الأولى تستغرق نحو خمس عشرة دقيقة. نقدّم ونتابع ونضغط حتى يصل عرض قبول — أو لا واضح مع سببه.',
      steps: [
        {
          name: 'الاستشارة الأولى',
          time: 'اليوم 1–2',
          text: 'مكالمة مجانية: درجاتك وميزانيتك وأهدافك. نخبرك بصدق أين تقف — بما في ذلك حين تكون الإجابة «ليس هذا المسار».',
        },
        {
          name: 'اختيار الجامعات',
          time: 'اليوم 3–5',
          text: 'قائمة قصيرة من الجامعات المعتمدة من الوزارة تناسب ملفك واستراتيجية المنح، مع جداول رسوم حقيقية لكل برنامج.',
        },
        {
          name: 'تقديم الطلبات',
          time: 'الأسبوع 1–2',
          text: 'نعدّ الطلبات وملفات المنح ونقدمها — خطة الدراسة والترجمات والتصديقات ونماذج البوابات.',
        },
        {
          name: 'القبول وJW202 والتأشيرة',
          time: 'الأسبوع 3–12',
          text: 'نتابع خطاب القبول وJW202 من جهة الجامعة؛ الفحص الطبي وموعد السفارة والتحضير للمقابلة مع فريقنا.',
        },
        {
          name: 'الوصول والتسجيل',
          time: 'سبتمبر',
          text: 'استقبال من المطار وتسجيل السكن وتصريح الإقامة وشريحة الهاتف وحساب بنكي — الأمور المملة التي تعطّل الأسبوع الأول، نتكفل بها.',
        },
      ],
    },
    scholarship: {
      eyebrow: 'أداة مجانية',
      title: 'هل أنت مؤهل لمنحة صينية؟',
      text: 'ثلاثة أسئلة صادقة عن درجاتك ومستواك. نخبرك أين يقف ملفك — نطاق CSC الكامل، أو منح جزئية، أو تمويل ذاتي بفرص أفضل. لا نتائج زائفة من نوع «أنت مؤهل!».',
      cta: 'تحقق من الأهلية',
      stats: [
        { num: '$2M+', label: 'من المنح فاز بها طلابنا' },
        { num: '150+', label: 'جامعة شريكة' },
      ],
    },
    unis: {
      eyebrow: 'الجامعات الشريكة',
      index: '03 / 05',
      title: 'إلى أين يذهب طلابنا',
      lede: 'ملفات وتكاليف حقيقية وواقع القبول للجامعات الخمس التي يلتحق بها طلابنا أكثر.',
      est: 'تأسست عام',
      profile: 'ملف الجامعة',
    },
    apply: {
      eyebrow: 'ابدأ من هنا',
      title: 'اطلب تقييمًا مجانيًا',
      lede: 'أخبرنا أين أنت. نعود خلال يوم عمل واحد بقراءة صادقة — وبخطة إن وُجدت.',
      next: [
        { lead: 'تحقق خلال 24 ساعة.', text: 'مستشار — لا روبوت — يراجع ملفك.' },
        { lead: 'اتصال بلغتك.', text: 'الإنجليزية والهندية والمالايالمية؛ الماندرين في الجانب الصيني.' },
        { lead: 'خطة مكتوبة.', text: 'جامعات ورسوم وفرص منح وجدول زمني — كتابةً.' },
      ],
    },
    faq: { eyebrow: 'أسئلة التعليم الشائعة', index: '05 / 05', title: 'تُسأل كل موسم', more: 'كل أسئلة التعليم الشائعة' },
  },

  es: {
    meta: {
      title: 'Estudiar en China — MBBS, ingeniería y becas',
      description:
        'Admisiones universitarias en China de principio a fin: universidades reconocidas por el Ministerio de Educación, becas CSC, programas de MBBS e ingeniería, gestión de visados y apoyo a la llegada. Más de 500 estudiantes colocados.',
    },
    crumb: 'Estudios',
    schema: {
      serviceName: 'Estudiar en China — admisiones universitarias',
      serviceDescription:
        'Servicios de admisión, becas y visados para estudiantes internacionales que entran en universidades chinas, desde la consulta hasta la matrícula en el campus.',
      serviceType: 'Consultoría educativa',
      howToName: 'Cómo estudiar en China con RouteToAbroad',
      howToDescription: 'El proceso de colocación en cinco pasos, desde la primera consulta hasta la matrícula en el campus.',
    },
    hero: {
      eyebrow: 'Estudios',
      index: 'EDU / 01',
      title: 'Estudia en China. Cambia todo.',
      lede: 'Títulos impartidos en inglés en universidades reconocidas por el Ministerio de Educación, becas que de verdad reducen las tasas y un equipo que te acompaña de la solicitud a la puerta del campus.',
      facts: [
        { label: 'Matrícula desde', value: 'US$2,500 / año' },
        { label: 'Intakes', value: 'Sep · Feb' },
        { label: 'Idioma', value: 'Enseñanza en inglés' },
        { label: 'Colocados', value: '500+ estudiantes' },
      ],
      primaryCta: 'Comprueba si encajas',
      secondaryCta: 'Ver programas',
      jumps: ['Programas', 'Proceso', 'Becas', 'Universidades', 'Solicitar', 'FAQ'],
    },
    qa: {
      label: 'Respuesta corta',
      strong: 'Sí — las universidades chinas son una vía legítima y asequible para estudiantes internacionales',
      rest: ', siempre que elijas instituciones listadas por el Ministerio y planifiques el idioma y los exámenes de colegiatura desde el inicio. La matrícula suele ir de US$2,500–8,000 al año, y las becas pueden dejarla en cero.',
    },
    photo: {
      alt: 'Estudiantes internacionales colaborando en un moderno laboratorio universitario chino',
      caption: 'Las promociones de estudiantes que hemos colocado en Pekín, Shanghái y Hangzhou.',
    },
    programmes: {
      eyebrow: 'Programas',
      index: '01 / 05',
      title: 'Qué puedes estudiar',
      lede: 'Cinco vías con idioma de enseñanza e intake declarados de entrada. Las tasas se cotizan por universidad — una sola cifra para todo un país sería una apuesta.',
      items: [
        {
          name: 'MBBS / Medicina',
          text: 'Títulos de medicina en inglés de universidades listadas por el Ministerio y reconocidas por la OMS, con formación HSK integrada y planificación FMGE/NExT desde el primer día.',
        },
        {
          name: 'Ingeniería y tecnología',
          text: 'IA, robótica, civil, mecánica y eléctrica en universidades conectadas a la economía manufacturera de China.',
        },
        {
          name: 'Negocios y gestión',
          text: 'Programas de BBA, MBA y finanzas en inglés en Shanghái y Pekín, con acceso a prácticas en empresas.',
        },
        {
          name: 'Chino (HSK)',
          text: 'Itinerarios HSK 1–6, desde cero hasta el nivel para cursar un grado, con la inscripción a los exámenes gestionada por nosotros.',
        },
        {
          name: 'Grados',
          text: 'Programas de grado en economía, negocios internacionales, diseño e informática.',
        },
        {
          name: 'Máster / doctorado (investigación)',
          text: 'Plazas de investigación financiadas por CSC — te emparejamos con supervisores, damos forma a las propuestas y gestionamos el expediente completo.',
        },
      ],
    },
    process: {
      eyebrow: 'El proceso',
      index: '02 / 05',
      title: 'Cinco paradas del primer mensaje al campus',
      lede: 'El primer paso lleva unos quince minutos. Presentamos, seguimos e insistimos hasta que hay una admisión — o un no claro con su motivo.',
      steps: [
        {
          name: 'Consulta inicial',
          time: 'Día 1–2',
          text: 'Una llamada gratuita: tus notas, presupuesto y objetivos. Te decimos con honestidad dónde estás — incluso cuando la respuesta es «no esta vía».',
        },
        {
          name: 'Selección de universidades',
          time: 'Día 3–5',
          text: 'Una lista corta de universidades reconocidas por el Ministerio ajustada a tu perfil y estrategia de becas, con tablas de tasas reales por programa.',
        },
        {
          name: 'Envío de solicitudes',
          time: 'Semana 1–2',
          text: 'Preparamos y enviamos solicitudes y expedientes de beca — plan de estudios, traducciones, apostillas y formularios de los portales.',
        },
        {
          name: 'Admisión, JW202 y visado',
          time: 'Semana 3–12',
          text: 'Carta de admisión y JW202 seguidas desde la universidad; examen médico, cita en la embajada y preparación de la entrevista con nuestro equipo.',
        },
        {
          name: 'Llegada y matrícula',
          time: 'Septiembre',
          text: 'Recogida en el aeropuerto, registro en la residencia, permiso de residencia, SIM y cuenta bancaria — los trámites aburridos que estropean la primera semana, resueltos.',
        },
      ],
    },
    scholarship: {
      eyebrow: 'Herramienta gratuita',
      title: '¿Eres elegible para una beca china?',
      text: 'Tres preguntas honestas sobre tus notas y tu nivel. Te decimos dónde está tu perfil — rango CSC completo, ayudas parciales, o autofinanciado con mejores probabilidades. Sin falsos «¡Eres elegible!».',
      cta: 'Comprobar elegibilidad',
      stats: [
        { num: '$2M+', label: 'en becas ganadas por nuestros estudiantes' },
        { num: '150+', label: 'universidades asociadas' },
      ],
    },
    unis: {
      eyebrow: 'Universidades asociadas',
      index: '03 / 05',
      title: 'Adónde van nuestros estudiantes',
      lede: 'Perfiles, costes reales y realidad de admisión de las cinco universidades donde más colocamos.',
      est: 'fundada en',
      profile: 'Perfil de la universidad',
    },
    apply: {
      eyebrow: 'Empieza aquí',
      title: 'Solicita una evaluación gratuita',
      lede: 'Cuéntanos dónde estás. Volvemos dentro de un día hábil con una lectura honesta — y un plan si lo hay.',
      next: [
        { lead: 'Verificación en 24 horas.', text: 'Un asesor — no un bot — revisa tu perfil.' },
        { lead: 'Llamada en tu idioma.', text: 'Inglés, hindi, malayalam; mandarín en el lado chino.' },
        { lead: 'Una hoja de ruta por escrito.', text: 'Universidades, tasas, opciones de beca, cronograma — por escrito.' },
      ],
    },
    faq: { eyebrow: 'FAQ de Estudios', index: '05 / 05', title: 'Preguntadas cada temporada', more: 'Todas las FAQ de estudios' },
  },
};
