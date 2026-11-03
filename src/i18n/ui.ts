/**
 * UI-string dictionaries for chrome (header, footer, switcher, CTA band)
 * and shared labels. Pages in the default locale (English, at the
 * unprefixed root) keep their existing inline copy and ignore this file;
 * the localized pages under /zh /fr /ar /es read from here.
 *
 * Strings are keyed by the labels they replace in site.ts and the chrome
 * components, so the keys double as documentation of which English copy
 * each locale owns.
 */
import { DEFAULT_LOCALE, type Locale } from '../lib/i18n';
import { SITE } from '../lib/site';

export interface FooterLinkGroup {
  heading: string;
  /** Canonical (unprefixed English) path — Footer.astro localizes via translatePath. */
  links: { href: string; label: string }[];
}

export interface ContactFormStrings {
  legend: string;
  serviceAria: string;
  cards: {
    education: string;
    educationDesc: string;
    tourism: string;
    tourismDesc: string;
    trade: string;
    tradeDesc: string;
  };
  phName: string;
  phMessage: string;
  success: string;
  errors: { name: string; email: string; phone: string; message: string };
  submit: string;
  fineprint: string;
}

export interface EducationFormStrings {
  phName: string;
  phCgpa: string;
  phNotes: string;
  levels: [string, string, string];
  programmes: [string, string, string, string, string, string];
  intakes: [string, string, string];
  success: string;
  errors: { name: string; email: string; phone: string; level: string; programme: string; intake: string };
  submit: string;
  fineprint: string;
}

export interface TourismFormStrings {
  phName: string;
  phDates: string;
  phNotes: string;
  destinations: [string, string, string, string];
  tripTypes: [string, string, string];
  success: string;
  errors: { name: string; email: string; phone: string; destination: string; tripType: string };
  submit: string;
  fineprint: string;
}

export interface TradeFormStrings {
  phCompany: string;
  phName: string;
  phNotes: string;
  directions: [string, string, string];
  categories: [string, string, string, string, string];
  success: string;
  errors: { company: string; name: string; email: string; phone: string; direction: string; category: string };
  submit: string;
  fineprint: string;
}

export interface UiStrings {
  /** <html> tag values are owned by LOCALE_META in lib/i18n.ts. */
  nav: { label: string }[];
  navAria: string;
  mobileNavAria: string;
  themeAria: string;
  menuOpenAria: string;
  menuCloseAria: string;
  headerCta: string;
  headerWordmarkAria: string;
  mobileCtaStart: string;
  mobileCtaWhatsApp: string;
  skipLink: string;
  statsAria: string;
  footer: {
    eyebrow: string;
    desc: string;
    groups: FooterLinkGroup[];
    socialAria: string;
    socials: { linkedin: string; instagram: string; twitter: string; youtube: string };
    allRights: string;
    openNote: string;
    /** City tag on the India office line. */
    loc: string;
  };
  cta: {
    title: string;
    text: string;
    talkToAdvisor: string;
    whatsapp: string;
    call: string;
    hours: string;
    reply: string;
    replyValue: string;
    /** Accessible name of the <section class="cta-band">. */
    aria: string;
    /** Rail label rendered after the hardcoded "04 /" numeral. */
    startHere: string;
    /**
     * Page-specific CTA band copy — the translated equivalents of the
     * hardcoded `title`/`text` overrides the English pages pass into
     * <CtaBand locale="xx" …>. Consumed by locale pages that keep a
     * meaningful per-page hook; see `CtaPerPageKey` for the key→page map.
     */
    perPage: Record<CtaPerPageKey, { title: string; text: string }>;
  };
  carousel: {
    sectionAria: string;
    eyebrow: string;
    heading: string;
    lede: string;
    carouselAria: string;
    prev: string;
    next: string;
    /** "Go to testimonial {n}" — {n} is replaced with the dot number. */
    goTo: string;
    pause: string;
    play: string;
  };
  chat: {
    openAria: string;
    fabLabel: string;
    assistantName: string;
    assistantTag: string;
    resetAria: string;
    closeAria: string;
    tryAsking: string;
    placeholder: string;
    sendAria: string;
    greeting: string;
    suggestions: { label: string; prompt: string }[];
    retry: string;
    noReply: string;
    unavailable: string;
    typing: string;
  };
  language: {
    aria: string;
  };
  /**
   * Field labels & placeholders for the four shared form components
   * (ContactForm, EducationForm, TourismForm, TradeForm). Each component
   * reads `ui.formFields.X` for the current locale.
   */
  formFields: {
    fullName: string;
    email: string;
    phone: string;
    phoneHint: string;
    message: string;
    selectPlaceholder: string;
    optionalHint: string;
    companyName: string;
    contactPerson: string;
    workEmail: string;
    educationLevel: string;
    programmeInterest: string;
    targetIntake: string;
    latestMarks: string;
    anythingElse: string;
    destination: string;
    tripType: string;
    travelDates: string;
    tradeDirection: string;
    productCategory: string;
    sourcingVolumes: string;
  };
  /** Per-form copy: submit buttons, option labels, placeholders, errors, fineprint. */
  forms: {
    contact: ContactFormStrings;
    education: EducationFormStrings;
    tourism: TourismFormStrings;
    trade: TradeFormStrings;
  };
  form: {
    /** Generic success fallback (the per-form copy lives in `forms.*`). */
    success: string;
    fail: string;
    network: string;
  };
  hud: {
    tagline: string;
    scroll: string;
    /** Words cycled by the homepage loader animation. */
    loaderWords: string[];
  };
}

/**
 * English strings are intentionally NOT in this map: the default locale
 * pages render their original inline copy. This map is consumed only by
 * the zh / fr / ar / es page trees and by the shared chrome components
 * when `locale !== 'en'`.
 *
 * cta.perPage holds the page-specific CTA band copy that the English pages
 * pass as hardcoded overrides into <CtaBand locale="xx" …> — each entry is
 * the English source copy that particular page uses; the four locale values
 * are its translations. See the per-page matrix in ui.cta.perPage.
 */
export const UI: Record<Exclude<Locale, typeof DEFAULT_LOCALE>, UiStrings> = {
  zh: {
    nav: [
      { label: '教育' },
      { label: '旅游' },
      { label: '贸易' },
      { label: '工具' },
      { label: '指南' },
      { label: '洞察' },
      { label: '关于我们' },
    ],
    navAria: '主导航',
    mobileNavAria: '移动端导航',
    themeAria: '切换深浅模式',
    menuOpenAria: '打开菜单',
    menuCloseAria: '关闭菜单',
    headerCta: '适配检查',
    headerWordmarkAria: 'RouteToAbroad — 返回首页',
    mobileCtaStart: '开始适配检查',
    mobileCtaWhatsApp: 'WhatsApp 咨询顾问',
    skipLink: '跳到正文',
    statsAria: '服务成绩',
    footer: {
      eyebrow: '两个办公室 · 一个负责到底的团队',
      desc: '连接印度与东亚的战略枢纽——教育、旅游与贸易，由常驻两侧的团队负责执行。',
      groups: [
        {
          heading: '服务',
          links: [
            { href: '/education', label: '在中国留学' },
            { href: '/tourism', label: '旅游与出行' },
            { href: '/trade', label: '贸易与采购' },
            { href: '/for-agents', label: '面向代理' },
          ],
        },
        {
          heading: '免费工具',
          links: [
            { href: '/tools/fit-check', label: '适配检查' },
            { href: '/tools/scholarship-eligibility', label: '奖学金资格' },
            { href: '/tools/cost-calculator', label: '费用计算器' },
            { href: '/tools/document-checklist', label: '文件清单' },
            { href: '/tools/timeline-planner', label: '时间线规划' },
          ],
        },
        {
          heading: '资源',
          links: [
            { href: '/guides', label: '指南' },
            { href: '/blog', label: '洞察' },
            { href: '/faq', label: '常见问题' },
            { href: '/glossary', label: '术语表' },
            { href: '/universities', label: '大学' },
            { href: '/cities', label: '城市' },
          ],
        },
        {
          heading: '公司',
          links: [
            { href: '/about', label: '关于我们' },
            { href: '/contact', label: '联系我们' },
            { href: '/privacy', label: '隐私' },
            { href: '/terms', label: '条款' },
          ],
        },
      ],
      socialAria: '社交账号',
      socials: { linkedin: '领英', instagram: 'Instagram', twitter: 'X', youtube: 'YouTube' },
      allRights: '版权所有。',
      openNote: '工作时间',
      loc: '新德里',
    },
    cta: {
      title: '准备好迈出这一步？',
      text: '今天就免费预约咨询。没有承诺——只是给你一个清晰的下一步。',
      talkToAdvisor: '与顾问交谈',
      whatsapp: 'WhatsApp 联系我们',
      call: '电话',
      hours: '时间',
      reply: '回复',
      replyValue: '一个工作日内',
      aria: '联系版块',
      startHere: '从这里开始',
      perPage: {
        about: {
          title: '来聊聊吧。',
          text: '一次对话，零承诺——给你一个关于计划的坦诚评估。',
        },
        blog: {
          title: '阅读只是第一步。',
          text: '当你要针对自己情况的准确答案，适配检查只要四个问题，顾问一天内回复。',
        },
        cities: {
          title: '亲自看一座城市，胜过读十篇攻略',
          text: '我们的团队行程覆盖本页每一座城市——每 9 月，学生项目也按这张地图注册入学。',
        },
        compare: {
          title: '还在犹豫？',
          text: '把细节发过来——成绩、预算、产品、时间表。我们给出你这种情况的判断，不是平均情况。',
        },
        forAgents: {
          title: '你的学生值得一个真正的中国对接团队。',
          text: '你也值得。一条消息就可以开始。',
        },
        guides: {
          title: '指南回答的是通用问题。',
          text: '你的问题是具体的。适配检查和顾问团队负责回答这些。',
        },
        glossary: {
          title: '术语不难，选择才难。',
          text: '当你准备把词汇变成申请材料，适配检查只有四个问题，顾问一回复就到。',
        },
        faqHub: {
          title: '问题没在列表里？',
          text: '直接问——WhatsApp、邮件或联系表单。一个真人一天工作日内回复。',
        },
        pillarFaq: {
          title: '还有疑问？',
          text: '直接问团队——我们一个工作日内回复，周一至周六 9:00–18:00 IST。',
        },
        universities: {
          title: '不确定哪所大学适合你？',
          text: '发一条咨询。我们按你的成绩、预算和偏好城市做筛选——很坦诚，包括当答案是一所未那么贵的学校时。',
        },
      },
    },
    carousel: {
      sectionAria: '客户故事',
      eyebrow: '客户故事',
      heading: '听听那些迈出这一步的人怎么说',
      lede: '与我们同行的学生、旅行者和贸易商——用他们自己的话。',
      carouselAria: '用户评价轮播',
      prev: '上一条评价',
      next: '下一条评价',
      goTo: '跳到第 {n} 条评价',
      pause: '暂停轮播',
      play: '播放轮播',
    },
    chat: {
      openAria: '打开 AI 顾问聊天',
      fabLabel: '问我们',
      assistantName: 'RouteToAbroad 助手',
      assistantTag: '由 Claude 驱动 · 秒级回复',
      resetAria: '开始新对话',
      closeAria: '关闭聊天',
      tryAsking: '可以这样问',
      placeholder: '咨询课程、签证、行程…',
      sendAria: '发送',
      greeting:
        '你好！我可以解答在中国留学、东亚旅行或中国工厂采购的问题。你目前在关注什么？',
      suggestions: [
        { label: '中国 MBBS', prompt: '印度学生可以在中国读 MBBS 吗？' },
        { label: '中国游费用', prompt: '两周的中国旅行通常要花多少钱？' },
        { label: '验证供应商', prompt: '在付定金之前，你们如何验证中国供应商？' },
      ],
      retry: '再试一次',
      noReply: '（没有回复——请再试一次，或 WhatsApp 联系我们）',
      unavailable: '抱歉——助手当前不可用。',
      typing: '助手正在输入…',
    },
    language: { aria: '语言' },
    formFields: {
      fullName: '姓名',
      email: '邮箱',
      phone: '电话 / WhatsApp',
      phoneHint: '可选',
      message: '留言',
      selectPlaceholder: '请选择…',
      optionalHint: '可选',
      companyName: '公司名称',
      contactPerson: '联系人',
      workEmail: '工作邮箱',
      educationLevel: '当前阶段',
      programmeInterest: '意向专业',
      targetIntake: '目标入学时间',
      latestMarks: '最近成绩 / GPA',
      anythingElse: '还有其他需要我们了解的吗？',
      destination: '目的地',
      tripType: '行程类型',
      travelDates: '出行日期',
      tradeDirection: '贸易方向',
      productCategory: '产品类别',
      sourcingVolumes: '你在采购什么，数量多少？',
    },
    forms: {
      contact: {
        success: '已收到消息！顾问将在一个工作日内回复（周一至周六 9:00–18:00 IST）。',
        legend: '我想咨询的方向',
        serviceAria: '服务类型',
        cards: {
          education: '留学',
          educationDesc: '在中国留学',
          tourism: '旅游',
          tourismDesc: '旅游与出行',
          trade: '贸易',
          tradeDesc: '贸易与采购',
        },
        phName: '您的姓名',
        phMessage: '想做什么？说得越具体越好。',
        errors: {
          name: '请输入您的姓名。',
          email: '请输入有效的邮箱地址。',
          phone: '请输入有效的电话号码。',
          message: '请写一段简短的留言。',
        },
        submit: '发送留言',
        fineprint: '千里之行，始于一次对话。',
      },
      education: {
        success: '已收到申请！教育顾问将在一个工作日内致电您。',
        phName: '与护照一致',
        phCgpa: '例如 82% 或 3.6/4',
        phNotes: '奖学金目标、预算、偏好城市……',
        levels: ['在读中学（12 年级及以下）', '本科（已完成或在读）', '硕士及以上'],
        programmes: ['临床医学（MBBS）', '工程与技术', '商业与管理', '中文（HSK）', '其他本科', '硕士／博士（研究型）'],
        intakes: ['2026 年 9 月', '2027 年 3 月', '以后／未定'],
        errors: {
          name: '请输入您的姓名。',
          email: '请输入有效的邮箱地址。',
          phone: '请输入有效的电话号码。',
          level: '请选择当前阶段。',
          programme: '请选择意向专业。',
          intake: '请选择入学时间。',
        },
        submit: '申请免费评估',
        fineprint: '无需承诺。我们会给出明确的是、可能或否——以及下一步怎么做。',
      },
      tourism: {
        success: '已收到咨询！旅游团队将在一个工作日内回复。',
        phName: '您的姓名',
        phDates: '例如 10 月中旬、9 天',
        phNotes: '同行人数、饮食禁忌、必看景点……',
        destinations: ['中国', '日本', '中国 + 日本', '其他目的地／定制'],
        tripTypes: ['文化／私人定制', '团队／研学', '商务考察'],
        errors: {
          name: '请输入您的姓名。',
          email: '请输入有效的邮箱地址。',
          phone: '请输入有效的电话号码。',
          destination: '请选择目的地。',
          tripType: '请选择行程类型。',
        },
        submit: '规划我的行程',
        fineprint: '在您付款之前，我们先免费起草逐日行程。',
      },
      trade: {
        success: '已收到！贸易团队将在一个工作日内回复后续步骤。',
        phCompany: '您的公司',
        phName: '姓名',
        phNotes: '例如 LED 驱动电源、每月约 5,000 件、目标 FOB 价……',
        directions: ['从中国进口到印度', '从印度出口到中国', '双向／探索中'],
        categories: ['电子产品与元器件', '工业机械', '纺织与服装', '消费品', '其他'],
        errors: {
          company: '请输入公司名称。',
          name: '请输入您的姓名。',
          email: '请输入有效的邮箱地址。',
          phone: '请输入有效的电话号码。',
          direction: '请选择贸易方向。',
          category: '请选择产品类别。',
        },
        submit: '与贸易团队洽谈',
        fineprint: '成功付费模式：货物出运后才收费。验货费用先行报价。',
      },
    },
    form: {
      success: '已收到消息！顾问将在一个工作日内回复。',
      fail: `表单提交失败，请重试，或 WhatsApp ${SITE.phoneIndia}。`,
      network: '网络错误——请检查连接后重试。',
    },
    hud: { tagline: '教育 · 旅游 · 贸易 — 一条走廊', scroll: '向下滚动', loaderWords: ['选择', '申请', '入学'] },
  },
  fr: {
    nav: [
      { label: 'Études' },
      { label: 'Tourisme' },
      { label: 'Commerce' },
      { label: 'Outils' },
      { label: 'Guides' },
      { label: 'Analyses' },
      { label: 'À propos' },
    ],
    navAria: 'Navigation principale',
    mobileNavAria: 'Navigation mobile',
    themeAria: 'Basculer le mode sombre',
    menuOpenAria: 'Ouvrir le menu',
    menuCloseAria: 'Fermer le menu',
    headerCta: 'Test de compatibilité',
    headerWordmarkAria: 'RouteToAbroad — accueil',
    mobileCtaStart: 'Commencer le test',
    mobileCtaWhatsApp: 'WhatsApp un conseiller',
    skipLink: 'Aller au contenu',
    statsAria: 'Bilan',
    footer: {
      eyebrow: 'Deux bureaux · une équipe responsable',
      desc: 'Votre passerelle stratégique entre l’Inde et l’Asie de l’Est — études, tourisme et commerce, gérés par des équipes qui vivent des deux côtés.',
      groups: [
        {
          heading: 'Services',
          links: [
            { href: '/education', label: 'Étudier en Chine' },
            { href: '/tourism', label: 'Tours & voyages' },
            { href: '/trade', label: 'Commerce & sourcing' },
            { href: '/for-agents', label: 'Pour les agents' },
          ],
        },
        {
          heading: 'Outils gratuits',
          links: [
            { href: '/tools/fit-check', label: 'Test de compatibilité' },
            { href: '/tools/scholarship-eligibility', label: 'Bourses d’études' },
            { href: '/tools/cost-calculator', label: 'Calculateur de coûts' },
            { href: '/tools/document-checklist', label: 'Liste de documents' },
            { href: '/tools/timeline-planner', label: 'Planificateur' },
          ],
        },
        {
          heading: 'Ressources',
          links: [
            { href: '/guides', label: 'Guides' },
            { href: '/blog', label: 'Analyses' },
            { href: '/faq', label: 'FAQ' },
            { href: '/glossary', label: 'Glossaire' },
            { href: '/universities', label: 'Universités' },
            { href: '/cities', label: 'Villes' },
          ],
        },
        {
          heading: 'Société',
          links: [
            { href: '/about', label: 'À propos' },
            { href: '/contact', label: 'Contact' },
            { href: '/privacy', label: 'Confidentialité' },
            { href: '/terms', label: 'Conditions' },
          ],
        },
      ],
      socialAria: 'Profils sociaux',
      socials: { linkedin: 'LinkedIn', instagram: 'Instagram', twitter: 'X', youtube: 'YouTube' },
      allRights: 'Tous droits réservés.',
      openNote: 'Ouvert',
      loc: 'Nouvelle-Delhi',
    },
    cta: {
      title: 'Prêt à passer à l’action ?',
      text: 'Commencez par une consultation gratuite aujourd’hui. Sans engagement — juste une réponse claire sur votre prochaine étape.',
      talkToAdvisor: 'Parler à un conseiller',
      whatsapp: 'Nous écrire sur WhatsApp',
      call: 'Téléphone',
      hours: 'Horaires',
      reply: 'Réponse',
      replyValue: 'Sous un jour ouvré',
      aria: 'Encart contact',
      startHere: 'Commencer ici',
      perPage: {
        about: {
          title: 'Parlons-en.',
          text: 'Un entretien, sans engagement — et un retour honnête sur ce que vous prévoyez.',
        },
        blog: {
          title: 'Lire est la première étape.',
          text: 'Quand vous voulez une réponse pour votre cas précis, le test de compatibilité tient en quatre questions et les conseillers répondent sous un jour.',
        },
        cities: {
          title: 'Les voir en personne vaut mieux que les lire',
          text: 'Nos tours passent par chaque ville de cette page — et nos inscriptions étudiantes y aboutissent chaque septembre.',
        },
        compare: {
          title: 'Toujours indécis ?',
          text: 'Envoyez-nous le détail — notes, budget, produit, échéance. Nous donnons le verdict pour votre cas, pas pour le cas moyen.',
        },
        forAgents: {
          title: 'Vos étudiants méritent une vraie cellule Chine.',
          text: 'Vous aussi. Un message suffit pour commencer.',
        },
        guides: {
          title: 'Les guides répondent aux questions générales.',
          text: 'Les vôtres sont précises. Le test de compatibilité et l’équipe de conseillers y répondent.',
        },
        glossary: {
          title: 'Les termes sont simples. Les décisions sont plus difficiles.',
          text: 'Quand vous êtes prêt à transformer le vocabulaire en candidature, le test de compatibilité tient en quatre questions et les conseillers sont à une réponse.',
        },
        faqHub: {
          title: 'Question absente de la liste ?',
          text: 'Posez-la directement — WhatsApp, e-mail ou le formulaire. Un humain répond sous un jour ouvré.',
        },
        pillarFaq: {
          title: 'Une question reste ?',
          text: 'Posez-la à la cellule directement — nous répondons sous un jour ouvré, lundi à samedi, 9:00–18:00 IST.',
        },
        universities: {
          title: 'Pas sûr de laquelle est la bonne université ?',
          text: 'Envoyez une demande. Nous laissons une liste resserrée selon vos notes, budget et villes préférées — honnêtement, même quand la réponse est une université moins chère que prévu.',
        },
      },
    },
    carousel: {
      sectionAria: 'Histoires de clients',
      eyebrow: 'Histoires de clients',
      heading: 'Écoutez ceux qui ont franchi le pas',
      lede: 'Étudiants, voyageurs et commerçants partis avec nous — dans leurs propres mots.',
      carouselAria: 'Carrousel de témoignages',
      prev: 'Témoignage précédent',
      next: 'Témoignage suivant',
      goTo: 'Aller au témoignage {n}',
      pause: 'Mettre en pause le défilement',
      play: 'Reprendre le défilement',
    },
    chat: {
      openAria: 'Ouvrir la discussion avec l’assistant IA',
      fabLabel: 'Nous poser une question',
      assistantName: 'Assistant RouteToAbroad',
      assistantTag: 'Propulsé par Claude · répond en secondes',
      resetAria: 'Recommencer la conversation',
      closeAria: 'Fermer la discussion',
      tryAsking: 'Essayez de demander',
      placeholder: 'Posez une question sur les programmes, visas, voyages…',
      sendAria: 'Envoyer',
      greeting:
        'Bonjour ! Je peux répondre aux questions sur les études en Chine, les voyages en Asie de l’Est ou le sourcing auprès de fabricants chinois. Que faites-vous en ce moment ?',
      suggestions: [
        { label: 'MBBS en Chine', prompt: 'Puis-je faire du MBBS en Chine en tant qu’étudiant indien ?' },
        { label: 'Coût d’un tour de Chine', prompt: 'Combien coûte généralement un tour de Chine de deux semaines ?' },
        { label: 'Vérifier un fournisseur', prompt: 'Comment vérifiez-vous un fournisseur chinois avant de verser un acompte ?' },
      ],
      retry: 'Réessayer',
      noReply: '(Aucune réponse — réessayez ou écrivez-nous sur WhatsApp)',
      unavailable: 'Désolé — l’assistant n’est pas disponible pour le moment.',
      typing: 'L’assistant écrit…',
    },
    language: { aria: 'Langue' },
    formFields: {
      fullName: 'Nom complet',
      email: 'E-mail',
      phone: 'Téléphone / WhatsApp',
      phoneHint: 'facultatif',
      message: 'Votre message',
      selectPlaceholder: 'Sélectionner…',
      optionalHint: 'facultatif',
      companyName: 'Nom de l’entreprise',
      contactPerson: 'Personne de contact',
      workEmail: 'E-mail professionnel',
      educationLevel: 'Niveau actuel',
      programmeInterest: 'Programme visé',
      targetIntake: 'Intake visé',
      latestMarks: 'Dernières notes / GPA',
      anythingElse: 'Autre chose à savoir ? ',
      destination: 'Destination',
      tripType: 'Type de voyage',
      travelDates: 'Dates de voyage',
      tradeDirection: 'Sens du commerce',
      productCategory: 'Catégorie de produits',
      sourcingVolumes: 'Que sourcez-vous, à quelles quantités ? ',
    },
    forms: {
      contact: {
        success: 'Message bien reçu ! Un conseiller vous répondra sous un jour ouvré — du lundi au samedi, 9h–18h IST.',
        legend: 'Ma demande concerne',
        serviceAria: 'Service',
        cards: {
          education: 'Études',
          educationDesc: 'Étudier en Chine',
          tourism: 'Tourisme',
          tourismDesc: 'Tours & voyages',
          trade: 'Commerce',
          tradeDesc: 'Commerce & sourcing',
        },
        phName: 'Votre nom',
        phMessage: 'Votre projet ? Soyez aussi précis que possible.',
        errors: {
          name: 'Veuillez saisir votre nom.',
          email: 'Veuillez saisir une adresse e-mail valide.',
          phone: 'Veuillez saisir un numéro de téléphone valide.',
          message: 'Veuillez écrire un court message.',
        },
        submit: 'Envoyer le message',
        fineprint: 'Un voyage de mille lieues commence par une seule conversation.',
      },
      education: {
        success: 'Candidature bien reçue ! Un conseiller études vous appellera sous un jour ouvré.',
        phName: 'Comme sur votre passeport',
        phCgpa: 'p. ex. 82 % ou 3,6/4',
        phNotes: 'Objectifs de bourse, budget, villes préférées…',
        levels: ['En cours de scolarité (terminale ou avant)', 'Licence (terminée ou en cours)', 'Master ou plus'],
        programmes: ['MBBS / Médecine', 'Ingénierie & technologie', 'Business & management', 'Langue chinoise (HSK)', 'Licence (autre)', 'Master / doctorat (recherche)'],
        intakes: ['Septembre 2026', 'Mars 2027', 'Plus tard / pas sûr'],
        errors: {
          name: 'Veuillez saisir votre nom.',
          email: 'Veuillez saisir une adresse e-mail valide.',
          phone: 'Veuillez saisir un numéro de téléphone valide.',
          level: 'Veuillez choisir votre niveau actuel.',
          programme: 'Veuillez choisir un programme.',
          intake: 'Veuillez choisir un intake.',
        },
        submit: 'Demander une évaluation gratuite',
        fineprint: 'Sans engagement. Nous répondons par un oui, un peut-être ou un non — et par quoi faire ensuite.',
      },
      tourism: {
        success: 'Demande bien reçue ! Notre cellule voyages vous répondra sous un jour ouvré.',
        phName: 'Votre nom',
        phDates: 'p. ex. mi-octobre, 9 jours',
        phNotes: 'Voyageurs, régimes alimentaires, incontournables…',
        destinations: ['Chine', 'Japon', 'Chine + Japon', 'Ailleurs / sur mesure'],
        tripTypes: ['Culturel / privé', 'Groupe / éducatif', 'Délégation d’affaires'],
        errors: {
          name: 'Veuillez saisir votre nom.',
          email: 'Veuillez saisir une adresse e-mail valide.',
          phone: 'Veuillez saisir un numéro de téléphone valide.',
          destination: 'Veuillez choisir une destination.',
          tripType: 'Veuillez choisir un type de voyage.',
        },
        submit: 'Planifier mon voyage',
        fineprint: 'Nous rédigeons gratuitement un itinéraire jour par jour avant tout paiement.',
      },
      trade: {
        success: 'Bien reçu ! Notre cellule commerce vous répondra sous un jour ouvré avec les prochaines étapes.',
        phCompany: 'Votre entreprise',
        phName: 'Nom',
        phNotes: 'p. ex. drivers LED, ~5 000 unités/mois, FOB cible…',
        directions: ['Import de Chine vers l’Inde', 'Export de l’Inde vers la Chine', 'Les deux / en exploration'],
        categories: ['Électronique & composants', 'Machines industrielles', 'Textiles & habillement', 'Biens de consommation', 'Autre'],
        errors: {
          company: 'Veuillez saisir le nom de votre entreprise.',
          name: 'Veuillez saisir votre nom.',
          email: 'Veuillez saisir une adresse e-mail valide.',
          phone: 'Veuillez saisir un numéro de téléphone valide.',
          direction: 'Veuillez choisir un sens de commerce.',
          category: 'Veuillez choisir une catégorie.',
        },
        submit: 'Parler à la cellule commerce',
        fineprint: 'Modèle au succès : vous payez à l’expédition. Coûts d’audit annoncés dès le départ.',
      },
    },
    form: {
      success: 'Message bien reçu ! Un conseiller vous répondra sous un jour ouvré.',
      fail: `Impossible d’envoyer le formulaire. Réessayez, ou écrivez-nous sur WhatsApp ${SITE.phoneIndia}.`,
      network: 'Erreur réseau — vérifiez votre connexion et réessayez.',
    },
    hud: { tagline: 'Études · Tourisme · Commerce — Un corridor', scroll: 'Défiler', loaderWords: ['Choisir', 'Candidater', 'S’inscrire'] },
  },
  ar: {
    nav: [
      { label: 'التعليم' },
      { label: 'السياحة' },
      { label: 'التجارة' },
      { label: 'الأدوات' },
      { label: 'الأدلة' },
      { label: 'رؤى' },
      { label: 'من نحن' },
    ],
    navAria: 'التنقل الرئيسي',
    mobileNavAria: 'التنقل الجوال',
    themeAria: 'تبديل الوضع الداكن',
    menuOpenAria: 'فتح القائمة',
    menuCloseAria: 'إغلاق القائمة',
    headerCta: 'فحص الملاءمة',
    headerWordmarkAria: 'RouteToAbroad — الرئيسية',
    mobileCtaStart: 'ابدأ فحص الملاءمة',
    mobileCtaWhatsApp: 'تواصل عبر واتساب',
    skipLink: 'انتقل إلى المحتوى',
    statsAria: 'سجل الإنجازات',
    footer: {
      eyebrow: 'مكتبان · فريق واحد مسؤول',
      desc: 'بوابتك الاستراتيجية بين الهند وآسيا الشرقية — تعليم وسياحة وتجارة، بإدارة فريق يعيش على الجانبين معاً.',
      groups: [
        {
          heading: 'الخدمات',
          links: [
            { href: '/education', label: 'الدراسة في الصين' },
            { href: '/tourism', label: 'جولات وسفر' },
            { href: '/trade', label: 'تجارة وتوريد' },
            { href: '/for-agents', label: 'للمندوبين' },
          ],
        },
        {
          heading: 'أدوات مجانية',
          links: [
            { href: '/tools/fit-check', label: 'فحص الملاءمة' },
            { href: '/tools/scholarship-eligibility', label: 'المنح الدراسية' },
            { href: '/tools/cost-calculator', label: 'حاسبة التكاليف' },
            { href: '/tools/document-checklist', label: 'قائمة المستندات' },
            { href: '/tools/timeline-planner', label: 'مخطط الجدول الزمني' },
          ],
        },
        {
          heading: 'الموارد',
          links: [
            { href: '/guides', label: 'الأدلة' },
            { href: '/blog', label: 'رؤى' },
            { href: '/faq', label: 'الأسئلة الشائعة' },
            { href: '/glossary', label: 'المصطلحات' },
            { href: '/universities', label: 'الجامعات' },
            { href: '/cities', label: 'المدن' },
          ],
        },
        {
          heading: 'الشركة',
          links: [
            { href: '/about', label: 'من نحن' },
            { href: '/contact', label: 'تواصل معنا' },
            { href: '/privacy', label: 'الخصوصية' },
            { href: '/terms', label: 'الشروط' },
          ],
        },
      ],
      socialAria: 'الملفات الاجتماعية',
      socials: { linkedin: 'لينكدإن', instagram: 'إنستغرام', twitter: 'إكس', youtube: 'يوتيوب' },
      allRights: 'جميع الحقوق محفوظة.',
      openNote: 'ساعات العمل',
      loc: 'نيودلهي',
    },
    cta: {
      title: 'جاهز لتجعل من رحلتك واقعاً؟',
      text: 'ابدأ باستشارة مجانية اليوم. بلا التزام — مجرد إجابة واضحة على خطوتك القادمة.',
      talkToAdvisor: 'تحدث مع مستشار',
      whatsapp: 'راسلنا على واتساب',
      call: 'اتصال',
      hours: 'الساعات',
      reply: 'الرد',
      replyValue: 'خلال يوم عمل واحد',
      aria: 'قسم التواصل',
      startHere: 'ابدأ من هنا',
      perPage: {
        about: {
          title: 'دعنا نتحدث.',
          text: 'محادثة واحدة بلا التزام — وقراءة صادقة لما تخطط له.',
        },
        blog: {
          title: 'القراءة هي الخطوة الأولى.',
          text: 'حين تريد الإجابة عن حالتك بالذات، فحص الملاءمة أربعة أسئلة فقط والمستشارون يردّون خلال يوم.',
        },
        cities: {
          title: 'رؤية المدن بعينك خير من قراءتها',
          text: 'جولاتنا تشمل كل مدينة على هذه الصفحة — وتُسجَّل وضعية طلابنا فيها كل سبتمبر.',
        },
        compare: {
          title: 'ما زلت مترددًا؟',
          text: 'أرسل لنا التفاصيل — الدرجات، الميزانية، المنتج، الجدول الزمني. نسلمك الحكم على حالتك أنت، لا على الحالة المتوسطة.',
        },
        forAgents: {
          title: 'طلابك يستحقون خلية صين حقيقية.',
          text: 'وأنت أيضًا تستحق. رسالة واحدة تكفي للبدء.',
        },
        guides: {
          title: 'الأدلة تجيب عن الأسئلة العامة.',
          text: 'أسئلتك خاصة. فحص الملاءمة وورشة المستشارين يجيبان عنها.',
        },
        glossary: {
          title: 'المصطلحات سهلة. القرارات أصعب.',
          text: 'حين تكون جاهزًا لتحويل المفردات إلى طلب تقديم، فحص الملاءمة أربعة أسئلة والمستشارون على بعد ردّ واحد.',
        },
        faqHub: {
          title: 'سؤالك غير موجود في القائمة؟',
          text: 'اسأل مباشرة — واتساب أو البريد أو نموذج التواصل. يردّ شخص حقيقي خلال يوم عمل واحد.',
        },
        pillarFaq: {
          title: 'ما زال لديك أسئلة؟',
          text: 'اطرحها على الورشة مباشرة — نرد خلال يوم عمل واحد، من الاثنين إلى السبت 9:00–18:00 بالتوقيت الهندي.',
        },
        universities: {
          title: 'غير متأكد أي جامعة تناسبك؟',
          text: 'أرسل استفسارًا واحدًا. نختار لك قائمة ضيقة حسب درجاتك وميزانيتك ومدنك المفضلة — بصراحة، حتى لو كان الجواب جامعة أرخص مما توقعت.',
        },
      },
    },
    carousel: {
      sectionAria: 'قصص العملاء',
      eyebrow: 'قصص العملاء',
      heading: 'اسمع من قدروا الخطوة',
      lede: 'طلاب ومسافرون وتجار سافروا معنا — بكلماتهم الخاصة.',
      carouselAria: 'لوحة تدوير الشهادات',
      prev: 'الشهادة السابقة',
      next: 'الشهادة التالية',
      goTo: 'انتقل إلى الشهادة {n}',
      pause: 'إيقاف التدوير مؤقتًا',
      play: 'استئناف التدوير',
    },
    chat: {
      openAria: 'افتح دردشة المستشار الذكي',
      fabLabel: 'اسألنا',
      assistantName: 'مساعد RouteToAbroad',
      assistantTag: 'مدعوم بواسطة Claude · ردود خلال ثوانٍ',
      resetAria: 'ابدأ محادثة جديدة',
      closeAria: 'إغلاق الدردشة',
      tryAsking: 'جرّب أن تسأل',
      placeholder: 'اسأل عن البرامج أو التأشيرات أو الرحلات…',
      sendAria: 'إرسال',
      greeting:
        'مرحباً! يمكنني الإجابة عن الأسئلة المتعلقة بالدراسة في الصين أو السفر إلى شرق آسيا أو التوريد من المصانع الصينية. ما الذي تعمل عليه؟',
      suggestions: [
        { label: 'MBBS في الصين', prompt: 'هل يمكنني دراسة الطب (MBBS) في الصين كطالب هندي؟' },
        { label: 'تكلفة جولة في الصين', prompt: 'كم تكلف عادةً جولة في الصين مدتها أسبوعان؟' },
        { label: 'تحقق من المورد', prompt: 'كيف تتحقق من المورد الصيني قبل دفع العربون؟' },
      ],
      retry: 'حاول مرة أخرى',
      noReply: '(لا توجد ردود — أعد المحاولة أو راسلنا على واتساب)',
      unavailable: 'نأسف — المساعد غير متاح حاليًا.',
      typing: 'المساعد يكتب الآن…',
    },
    language: { aria: 'اللغة' },
    formFields: {
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف / واتساب',
      phoneHint: 'اختياري',
      message: 'رسالتك',
      selectPlaceholder: 'اختر…',
      optionalHint: 'اختياري',
      companyName: 'اسم الشركة',
      contactPerson: 'الشخص المسؤول',
      workEmail: 'بريد العمل',
      educationLevel: 'مستواك الحالي',
      programmeInterest: 'البرنامج المطلوب',
      targetIntake: 'التوقيت المستهدف',
      latestMarks: 'آخر الدرجات / GPA',
      anythingElse: 'هل هناك شيء آخر يجب أن نعرفه؟ ',
      destination: 'الوجهة',
      tripType: 'نوع الرحلة',
      travelDates: 'تواريخ السفر',
      tradeDirection: 'اتجاه التجارة',
      productCategory: 'فئة المنتج',
      sourcingVolumes: 'ماذا تستورد وبكم من الكمية؟ ',
    },
    forms: {
      contact: {
        success: 'تم استلام رسالتك! سيرد مستشار خلال يوم عمل واحد — من الاثنين إلى السبت، 9:00–18:00 بتوقيت الهند.',
        legend: 'أستفسر عن',
        serviceAria: 'الخدمة',
        cards: {
          education: 'التعليم',
          educationDesc: 'الدراسة في الصين',
          tourism: 'السياحة',
          tourismDesc: 'جولات وسفر',
          trade: 'التجارة',
          tradeDesc: 'تجارة وتوريد',
        },
        phName: 'اسمك',
        phMessage: 'ما الذي تخطط له؟ كن محددًا قدر الإمكان.',
        errors: {
          name: 'يرجى إدخال اسمك.',
          email: 'يرجى إدخال بريد إلكتروني صالح.',
          phone: 'يرجى إدخال رقم هاتف صالح.',
          message: 'يرجى كتابة رسالة قصيرة.',
        },
        submit: 'إرسال الرسالة',
        fineprint: 'رحلة الألف ميل تبدأ بمحادثة واحدة.',
      },
      education: {
        success: 'تم استلام طلبك! سيتصل بك مستشار تعليمي خلال يوم عمل واحد.',
        phName: 'كما في جواز سفرك',
        phCgpa: 'مثل 82% أو 3.6/4',
        phNotes: 'أهداف المنح، الميزانية، المدن المفضلة…',
        levels: ['لا أزال في المدرسة (حتى الصف الثاني عشر)', 'بكالوريوس (مكتمل أو جارٍ)', 'ماجستير أو أعلى'],
        programmes: ['الطب البشري (MBBS)', 'الهندسة والتقنية', 'إدارة الأعمال', 'اللغة الصينية (HSK)', 'بكالوريوس (أخرى)', 'ماجستير / دكتوراه (بحث)'],
        intakes: ['سبتمبر 2026', 'مارس 2027', 'لاحقًا / غير متأكد'],
        errors: {
          name: 'يرجى إدخال اسمك.',
          email: 'يرجى إدخال بريد إلكتروني صالح.',
          phone: 'يرجى إدخال رقم هاتف صالح.',
          level: 'يرجى اختيار مستواك الحالي.',
          programme: 'يرجى اختيار البرنامج.',
          intake: 'يرجى اختيار وقت الالتحاق.',
        },
        submit: 'اطلب تقييمًا مجانيًا',
        fineprint: 'بلا التزام. نرد بنعم أو ربما أو لا — وما يجب فعله بعد ذلك.',
      },
      tourism: {
        success: 'تم استلام استفسارك! سيرد فريق السفر خلال يوم عمل واحد.',
        phName: 'اسمك',
        phDates: 'مثل منتصف أكتوبر، 9 أيام',
        phNotes: 'المسافرون، القيود الغذائية، المعالم التي لا تريد تفويتها…',
        destinations: ['الصين', 'اليابان', 'الصين + اليابان', 'وجهة أخرى / حسب الطلب'],
        tripTypes: ['ثقافي / خاص', 'مجموعة / تعليمي', 'وفد أعمال'],
        errors: {
          name: 'يرجى إدخال اسمك.',
          email: 'يرجى إدخال بريد إلكتروني صالح.',
          phone: 'يرجى إدخال رقم هاتف صالح.',
          destination: 'يرجى اختيار الوجهة.',
          tripType: 'يرجى اختيار نوع الرحلة.',
        },
        submit: 'خطط لرحلتي',
        fineprint: 'نعدّ مسارًا يوميًا مجانيًا قبل أن تدفع أي شيء.',
      },
      trade: {
        success: 'تم الاستلام! سيرد فريق التجارة خلال يوم عمل واحد بالخطوات التالية.',
        phCompany: 'شركتك',
        phName: 'الاسم',
        phNotes: 'مثل مشغلات LED، ~5000 وحدة/شهر، سعر FOB مستهدف…',
        directions: ['استيراد من الصين إلى الهند', 'تصدير من الهند إلى الصين', 'كلاهما / قيد الاستكشاف'],
        categories: ['إلكترونيات ومكونات', 'آلات صناعية', 'منسوجات وملابس', 'سلع استهلاكية', 'أخرى'],
        errors: {
          company: 'يرجى إدخال اسم شركتك.',
          name: 'يرجى إدخال اسمك.',
          email: 'يرجى إدخال بريد إلكتروني صالح.',
          phone: 'يرجى إدخال رقم هاتف صالح.',
          direction: 'يرجى اختيار اتجاه التجارة.',
          category: 'يرجى اختيار فئة المنتج.',
        },
        submit: 'تحدث مع فريق التجارة',
        fineprint: 'نموذج العمولة عند النجاح: تدفع عند شحن البضائع. تُسعَّر تكاليف التدقيق مقدمًا.',
      },
    },
    form: {
      success: 'تم استلام رسالتك! سيقوم مستشار بالرد خلال يوم عمل واحد.',
      // \u2066/\u2069 (LRI/PDI) isolate the phone number so the bidi
      // algorithm can't reorder its digit groups inside the RTL sentence.
      fail: `حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى، أو راسلنا على واتساب \u2066${SITE.phoneIndia}\u2069.`,
      network: 'خطأ في الشبكة — تحقق من اتصالك وحاول مرة أخرى.',
    },
    hud: { tagline: 'تعليم · سياحة · تجارة — ممر واحد', scroll: 'مرر', loaderWords: ['اختر', 'قدّم', 'التحق'] },
  },
  es: {
    nav: [
      { label: 'Estudios' },
      { label: 'Turismo' },
      { label: 'Comercio' },
      { label: 'Herramientas' },
      { label: 'Guías' },
      { label: 'Análisis' },
      { label: 'Nosotros' },
    ],
    navAria: 'Navegación principal',
    mobileNavAria: 'Navegación móvil',
    themeAria: 'Alternar modo oscuro',
    menuOpenAria: 'Abrir menú',
    menuCloseAria: 'Cerrar menú',
    headerCta: 'Prueba de compatibilidad',
    headerWordmarkAria: 'RouteToAbroad — inicio',
    mobileCtaStart: 'Comenzar la prueba',
    mobileCtaWhatsApp: 'WhatsApp a un asesor',
    skipLink: 'Ir al contenido',
    statsAria: 'Historial',
    footer: {
      eyebrow: 'Dos oficinas · un equipo responsable',
      desc: 'Su puerta estratégica entre la India y el Este de Asia — estudios, turismo y comercio, gestionados por personas que viven en ambos lados.',
      groups: [
        {
          heading: 'Servicios',
          links: [
            { href: '/education', label: 'Estudiar en China' },
            { href: '/tourism', label: 'Tours y viajes' },
            { href: '/trade', label: 'Comercio y sourcing' },
            { href: '/for-agents', label: 'Para agentes' },
          ],
        },
        {
          heading: 'Herramientas gratis',
          links: [
            { href: '/tools/fit-check', label: 'Prueba de compatibilidad' },
            { href: '/tools/scholarship-eligibility', label: 'Becas' },
            { href: '/tools/cost-calculator', label: 'Calculadora de costos' },
            { href: '/tools/document-checklist', label: 'Lista de documentos' },
            { href: '/tools/timeline-planner', label: 'Planificador' },
          ],
        },
        {
          heading: 'Recursos',
          links: [
            { href: '/guides', label: 'Guías' },
            { href: '/blog', label: 'Análisis' },
            { href: '/faq', label: 'FAQ' },
            { href: '/glossary', label: 'Glosario' },
            { href: '/universities', label: 'Universidades' },
            { href: '/cities', label: 'Ciudades' },
          ],
        },
        {
          heading: 'Compañía',
          links: [
            { href: '/about', label: 'Nosotros' },
            { href: '/contact', label: 'Contacto' },
            { href: '/privacy', label: 'Privacidad' },
            { href: '/terms', label: 'Términos' },
          ],
        },
      ],
      socialAria: 'Perfiles sociales',
      socials: { linkedin: 'LinkedIn', instagram: 'Instagram', twitter: 'X', youtube: 'YouTube' },
      allRights: 'Todos los derechos reservados.',
      openNote: 'Horario',
      loc: 'Nueva Delhi',
    },
    cta: {
      title: '¿Listo para dar el siguiente paso?',
      text: 'Comience con una consulta gratuita hoy. Sin compromiso — solo una respuesta clara sobre su próximo paso.',
      talkToAdvisor: 'Hablar con un asesor',
      whatsapp: 'Escríbanos por WhatsApp',
      call: 'Llámenos',
      hours: 'Horario',
      reply: 'Respuesta',
      replyValue: 'Dentro de un día hábil',
      aria: 'Sección de contacto',
      startHere: 'Empieza aquí',
      perPage: {
        about: {
          title: 'Hablemos.',
          text: 'Una conversación, sin compromiso — y un veredicto honesto sobre lo que estás planeando.',
        },
        blog: {
          title: 'Leer es el primer paso.',
          text: 'Cuando quieras la respuesta para tu caso específico, el check de compatibilidad toma cuatro preguntas y los asesores responden en un día.',
        },
        cities: {
          title: 'Verlas en persona supera leerlas',
          text: 'Nuestros tours cubren cada ciudad de esta página — y nuestros estudiantes se matriculan en ellas cada septiembre.',
        },
        compare: {
          title: '¿Aún decidiendo?',
          text: 'Envíanos los detalles — calificaciones, presupuesto, producto, cronograma. Te damos el veredicto para tu caso, no para el caso promedio.',
        },
        forAgents: {
          title: 'Tus estudiantes merecen una mesa real de China.',
          text: 'Tú también. Un mensaje empieza.',
        },
        guides: {
          title: 'Las guías responden preguntas generales.',
          text: 'Las tuyas son específicas. El check de compatibilidad y la mesa de asesores responden esas.',
        },
        glossary: {
          title: 'Los términos son fáciles. Las decisiones son más difíciles.',
          text: 'Cuando estés listo para convertir el vocabulario en una aplicación, el check de compatibilidad son cuatro preguntas y los asesores están a una respuesta.',
        },
        faqHub: {
          title: '¿Tu pregunta no está en la lista?',
          text: 'Pregúntala directamente — WhatsApp, correo o el formulario. Un humano responde en un día hábil.',
        },
        pillarFaq: {
          title: '¿Todavía con preguntas?',
          text: 'Pregúntale a la mesa directamente — respondemos en un día hábil, lunes a sábado, 9:00–18:00 IST.',
        },
        universities: {
          title: '¿No sabes qué universidad te sirve?',
          text: 'Envía una consulta. Filtremos según tus calificaciones, presupuesto y ciudades preferidas — honestamente, incluso cuando la respuesta es una universidad más barata de la esperada.',
        },
      },
    },
    carousel: {
      sectionAria: 'Historias de clientes',
      eyebrow: 'Historias de clientes',
      heading: 'Escuche a quienes dieron el salto',
      lede: 'Estudiantes, viajeros y comerciantes que cruzaron con nosotros — en sus propias palabras.',
      carouselAria: 'Carrusel de testimonios',
      prev: 'Testimonio anterior',
      next: 'Testimonio siguiente',
      goTo: 'Ir al testimonio {n}',
      pause: 'Pausar la rotación',
      play: 'Reanudar la rotación',
    },
    chat: {
      openAria: 'Abrir chat con el asesor IA',
      fabLabel: 'Pregúntenos',
      assistantName: 'Asistente RouteToAbroad',
      assistantTag: 'Impulsado por Claude · responde en segundos',
      resetAria: 'Iniciar una conversación nueva',
      closeAria: 'Cerrar chat',
      tryAsking: 'Pruebe a preguntar',
      placeholder: 'Pregunte sobre programas, visas, viajes…',
      sendAria: 'Enviar',
      greeting:
        '¡Hola! Puedo responder preguntas sobre estudiar en China, viajar al Este de Asia o comprar a fábricas chinas. ¿En qué está trabajando?',
      suggestions: [
        { label: 'MBBS en China', prompt: '¿Puedo estudiar MBBS en China como estudiante indio?' },
        { label: 'Costo de un tour', prompt: '¿Cuánto cuesta normalmente un tour de dos semanas a China?' },
        { label: 'Verificar un proveedor', prompt: '¿Cómo verifican a un proveedor chino antes de pagar un anticipo?' },
      ],
      retry: 'Reintentar',
      noReply: '(Sin respuesta — inténtelo de nuevo o escríbanos por WhatsApp)',
      unavailable: 'Lo sentimos: el asistente no está disponible ahora mismo.',
      typing: 'El asistente está escribiendo…',
    },
    language: { aria: 'Idioma' },
    formFields: {
      fullName: 'Nombre completo',
      email: 'Correo',
      phone: 'Teléfono / WhatsApp',
      phoneHint: 'opcional',
      message: 'Su mensaje',
      selectPlaceholder: 'Seleccione…',
      optionalHint: 'opcional',
      companyName: 'Nombre de la empresa',
      contactPerson: 'Persona de contacto',
      workEmail: 'Correo de trabajo',
      educationLevel: 'Nivel actual',
      programmeInterest: 'Programa de interés',
      targetIntake: 'Intake objetivo',
      latestMarks: 'Últimas calificaciones / CGPA',
      anythingElse: '¿Algo más que debamos saber? ',
      destination: 'Destino',
      tripType: 'Tipo de viaje',
      travelDates: 'Fechas de viaje',
      tradeDirection: 'Dirección comercial',
      productCategory: 'Categoría de producto',
      sourcingVolumes: '¿Qué está buscando, a qué volúmenes? ',
    },
    forms: {
      contact: {
        success: '¡Mensaje recibido! Un asesor responderá dentro de un día hábil — de lunes a sábado, 9:00–18:00 IST.',
        legend: 'Mi consulta es sobre',
        serviceAria: 'Servicio',
        cards: {
          education: 'Estudios',
          educationDesc: 'Estudiar en China',
          tourism: 'Turismo',
          tourismDesc: 'Tours y viajes',
          trade: 'Comercio',
          tradeDesc: 'Comercio y sourcing',
        },
        phName: 'Su nombre',
        phMessage: '¿Qué está planeando? Sea lo más específico posible.',
        errors: {
          name: 'Ingrese su nombre.',
          email: 'Ingrese un correo válido.',
          phone: 'Ingrese un teléfono válido.',
          message: 'Escriba un mensaje breve.',
        },
        submit: 'Enviar mensaje',
        fineprint: 'Un viaje de mil millas empieza con una sola conversación.',
      },
      education: {
        success: '¡Solicitud recibida! Un asesor educativo le llamará dentro de un día hábil.',
        phName: 'Como en su pasaporte',
        phCgpa: 'p. ej. 82 % o 3.6/4',
        phNotes: 'Objetivos de beca, presupuesto, ciudades que prefiere…',
        levels: ['En la escuela (12.º o menos)', 'Licenciatura (completa o en curso)', 'Maestría o superior'],
        programmes: ['MBBS / Medicina', 'Ingeniería y tecnología', 'Negocios y gestión', 'Chino (HSK)', 'Licenciatura (otra)', 'Máster / doctorado (investigación)'],
        intakes: ['Septiembre 2026', 'Marzo 2027', 'Más adelante / no estoy seguro'],
        errors: {
          name: 'Ingrese su nombre.',
          email: 'Ingrese un correo válido.',
          phone: 'Ingrese un teléfono válido.',
          level: 'Seleccione su nivel actual.',
          programme: 'Seleccione un programa.',
          intake: 'Seleccione un intake.',
        },
        submit: 'Solicitar una evaluación gratuita',
        fineprint: 'Sin compromiso. Respondemos con un sí, un quizás o un no — y qué hacer a continuación.',
      },
      tourism: {
        success: '¡Consulta recibida! Nuestro equipo de viajes responderá dentro de un día hábil.',
        phName: 'Su nombre',
        phDates: 'p. ej. mediados de octubre, 9 días',
        phNotes: 'Viajeros, necesidades alimentarias, imprescindibles…',
        destinations: ['China', 'Japón', 'China + Japón', 'Otro destino / a medida'],
        tripTypes: ['Cultural / privado', 'Grupo / educativo', 'Delegación de negocios'],
        errors: {
          name: 'Ingrese su nombre.',
          email: 'Ingrese un correo válido.',
          phone: 'Ingrese un teléfono válido.',
          destination: 'Seleccione un destino.',
          tripType: 'Seleccione un tipo de viaje.',
        },
        submit: 'Planificar mi viaje',
        fineprint: 'Redactamos un itinerario día a día gratuito antes de que pague nada.',
      },
      trade: {
        success: '¡Recibido! Nuestro equipo de comercio responderá dentro de un día hábil con los siguientes pasos.',
        phCompany: 'Su empresa',
        phName: 'Nombre',
        phNotes: 'p. ej. controladores LED, ~5 000 unidades/mes, FOB objetivo…',
        directions: ['Importar de China a India', 'Exportar de India a China', 'Ambos / explorando'],
        categories: ['Electrónica y componentes', 'Maquinaria industrial', 'Textiles y confección', 'Bienes de consumo', 'Otro'],
        errors: {
          company: 'Ingrese el nombre de su empresa.',
          name: 'Ingrese su nombre.',
          email: 'Ingrese un correo válido.',
          phone: 'Ingrese un teléfono válido.',
          direction: 'Seleccione una dirección comercial.',
          category: 'Seleccione una categoría.',
        },
        submit: 'Hablar con el equipo de comercio',
        fineprint: 'Modelo de éxito: usted paga cuando la mercancía se embarca. Costos de auditoría cotizados por adelantado.',
      },
    },
    form: {
      success: '¡Mensaje recibido! Un asesor le responderá dentro de un día hábil.',
      fail: `No se pudo enviar el formulario. Intente de nuevo o escríbanos por WhatsApp ${SITE.phoneIndia}.`,
      network: 'Error de red — verifique su conexión e intente de nuevo.',
    },
    hud: { tagline: 'Estudios · Turismo · Comercio — Un corredor', scroll: 'Desplazar', loaderWords: ['Elige', 'Solicita', 'Inscríbete'] },
  },
};

/**
 * Page-keyed CTA band copy. The English pages that pass a page-specific
 * <CtaBand> title/text keep that copy; the localized trees render the
 * translated equivalent under the same key. Keys mirror the English slugs:
 *
 * | key            | page(s)                                        |
 * | -------------- | --------------------------------------------- |
 * | about          | /about                                         |
 * | blog           | /blog                                          |
 * | cities         | /cities                                        |
 * | compare        | /compare                                       |
 * | forAgents      | /for-agents                                    |
 * | guides         | /guides                                        |
 * | glossary       | /glossary                                      |
 * | faqHub         | /faq                                           |
 * | pillarFaq      | /education/faq · /tourism/faq · /trade/faq (one shared copy) |
 * | universities   | /universities                                  |
 */
export type CtaPerPageKey =
  | 'about'
  | 'blog'
  | 'cities'
  | 'compare'
  | 'forAgents'
  | 'guides'
  | 'glossary'
  | 'faqHub'
  | 'pillarFaq'
  | 'universities';


/** Convenience: English strings for the chrome (used when locale is 'en'). */
export const UI_EN: UiStrings = {
  nav: [
    { label: 'Education' },
    { label: 'Tourism' },
    { label: 'Trade' },
    { label: 'Tools' },
    { label: 'Guides' },
    { label: 'Insights' },
    { label: 'About' },
  ],
  navAria: 'Primary',
  mobileNavAria: 'Mobile',
  themeAria: 'Toggle dark mode',
  menuOpenAria: 'Open menu',
  menuCloseAria: 'Close menu',
  headerCta: 'Fit check',
  headerWordmarkAria: 'RouteToAbroad — home',
  mobileCtaStart: 'Start the fit check',
  mobileCtaWhatsApp: 'WhatsApp an advisor',
  skipLink: 'Skip to content',
  statsAria: 'Track record',
  footer: {
    eyebrow: 'Two offices · one accountable team',
    desc: 'Your strategic gateway between India and East Asia — education, tourism, and trade handled by people who live on both sides.',
    groups: [
      {
        heading: 'Services',
        links: [
          { href: '/education', label: 'Study in China' },
          { href: '/tourism', label: 'Tours & Travel' },
          { href: '/trade', label: 'Trade & Sourcing' },
          { href: '/for-agents', label: 'For Agents' },
        ],
      },
      {
        heading: 'Free tools',
        links: [
          { href: '/tools/fit-check', label: 'Fit check' },
          { href: '/tools/scholarship-eligibility', label: 'Scholarship check' },
          { href: '/tools/cost-calculator', label: 'Cost calculator' },
          { href: '/tools/document-checklist', label: 'Document checklist' },
          { href: '/tools/timeline-planner', label: 'Timeline planner' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { href: '/guides', label: 'Guides' },
          { href: '/blog', label: 'Insights' },
          { href: '/faq', label: 'FAQ' },
          { href: '/glossary', label: 'Glossary' },
          { href: '/universities', label: 'Universities' },
          { href: '/cities', label: 'Cities' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { href: '/about', label: 'About us' },
          { href: '/contact', label: 'Contact' },
          { href: '/privacy', label: 'Privacy' },
          { href: '/terms', label: 'Terms' },
        ],
      },
    ],
    socialAria: 'Social profiles',
    socials: { linkedin: 'LinkedIn', instagram: 'Instagram', twitter: 'X / Twitter', youtube: 'YouTube' },
    allRights: 'All rights reserved.',
    openNote: 'Open',
    loc: 'New Delhi',
  },
  cta: {
    title: 'Ready to make your move?',
    text: 'Start with a free consultation today. No commitment — just a clear answer on what your next step looks like.',
    talkToAdvisor: 'Talk to an advisor',
    whatsapp: 'WhatsApp us',
    call: 'Call',
    hours: 'Hours',
    reply: 'Reply',
    replyValue: 'Within one working day',
    aria: 'Contact call to action',
    startHere: 'Start here',
    perPage: {
      about: {
        title: "Let's talk.",
        text: "One conversation, no commitment — and an honest read on whatever you're planning.",
      },
      blog: {
        title: 'Reading is step one.',
        text: 'When you want the answer for your specific case, the fit check takes four questions and the advisors reply within a day.',
      },
      cities: {
        title: 'Seeing them in person beats reading about them',
        text: 'Our tours hit every city on this page — and our student placements register into them every September.',
      },
      compare: {
        title: 'Still deciding?',
        text: "Send us the specifics — marks, budget, product, timeline. We'll give you the verdict for your case, not the average case.",
      },
      forAgents: {
        title: 'Your students deserve a real China desk.',
        text: 'So do you. One message starts it.',
      },
      guides: {
        title: 'Guides answer general questions.',
        text: 'Yours are specific. The fit check and the advisor desk answer those.',
      },
      glossary: {
        title: 'Terms are easy. Decisions are harder.',
        text: "When you're ready to turn vocabulary into an application, the fit check is four questions and the advisors are one reply away.",
      },
      faqHub: {
        title: 'Question not on the list?',
        text: 'Ask it directly — WhatsApp, email, or the contact form. A human replies within one working day.',
      },
      pillarFaq: {
        title: 'Still have questions?',
        text: 'Ask the desk directly — we reply within one working day, 9:00–18:00 IST Monday to Saturday.',
      },
      universities: {
        title: 'Not sure which university fits?',
        text: "Send one enquiry. We'll shortlist against your marks, budget and city preferences — honestly, including when the answer is a cheaper university than you expected.",
      },
    },
  },
  carousel: {
    sectionAria: 'Client stories',
    eyebrow: 'Client stories',
    heading: 'Hear from those who made the leap',
    lede: 'Students, travellers and traders who crossed with us — in their own words.',
    carouselAria: 'Testimonials carousel',
    prev: 'Previous testimonial',
    next: 'Next testimonial',
    goTo: 'Go to testimonial {n}',
    pause: 'Pause testimonial rotation',
    play: 'Play testimonial rotation',
  },
  chat: {
    openAria: 'Open AI counselor chat',
    fabLabel: 'Ask us',
    assistantName: 'RouteToAbroad Assistant',
    assistantTag: 'Powered by Claude · replies in seconds',
    resetAria: 'Start a new conversation',
    closeAria: 'Close chat',
    tryAsking: 'Try asking',
    placeholder: 'Ask about programmes, visas, trips…',
    sendAria: 'Send',
    greeting:
      'Hi! I can answer questions about studying in China, trips to East Asia, or sourcing from Chinese factories. What are you working on?',
    suggestions: [
      { label: 'MBBS in China', prompt: 'Can I study MBBS in China as an Indian student?' },
      { label: 'China tour costs', prompt: 'What does a two-week China tour usually cost?' },
      { label: 'Verify a supplier', prompt: 'How do you verify a Chinese supplier before I pay a deposit?' },
    ],
    retry: 'Try again',
    noReply: '(no reply — try again or WhatsApp us)',
    unavailable: 'Sorry — the assistant is unavailable right now.',
    typing: 'Assistant is typing',
  },
  language: { aria: 'Language' },
  formFields: {
    fullName: 'Full name',
    email: 'Email',
    phone: 'Phone / WhatsApp',
    phoneHint: 'optional',
    message: 'Your message',
    selectPlaceholder: 'Select…',
    optionalHint: 'optional',
    companyName: 'Company name',
    contactPerson: 'Contact person',
    workEmail: 'Work email',
    educationLevel: 'Current level',
    programmeInterest: 'Programme interest',
    targetIntake: 'Target intake',
    latestMarks: 'Latest marks / CGPA',
    anythingElse: 'Anything else we should know?',
    destination: 'Destination',
    tripType: 'Trip type',
    travelDates: 'Travel dates',
    tradeDirection: 'Trade direction',
    productCategory: 'Product category',
    sourcingVolumes: 'What are you sourcing, at what volumes?',
  },
  forms: {
    contact: {
      success: 'Message received! An advisor will reply within one working day — 9:00–18:00 IST, Mon–Sat.',
      legend: "I'm enquiring about",
      serviceAria: 'Service',
      cards: {
        education: 'Education',
        educationDesc: 'Study in China',
        tourism: 'Tourism',
        tourismDesc: 'Tours & travel',
        trade: 'Trade',
        tradeDesc: 'Sourcing & logistics',
      },
      phName: 'Your name',
      phMessage: 'What are you planning? Be as specific as you like.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        phone: 'Please enter a valid phone number.',
        message: 'Please write a short message.',
      },
      submit: 'Send message',
      fineprint: 'A journey of a thousand miles begins with a single conversation.',
    },
    education: {
      success: 'Application received! An education advisor will call you within one working day.',
      phName: 'As on your passport',
      phCgpa: 'e.g. 82% or 3.6/4',
      phNotes: 'Scholarship goals, budget, cities you prefer…',
      levels: ['In school (12th or below)', "Bachelor's (completed or ongoing)", "Master's or above"],
      programmes: ['MBBS / Medicine', 'Engineering & Technology', 'Business & Management', 'Chinese Language (HSK)', "Bachelor's (other)", 'Masters / PhD (research)'],
      intakes: ['September 2026', 'March 2027', 'Later / not sure'],
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        phone: 'Please enter a valid phone number.',
        level: 'Please choose your current level.',
        programme: 'Please choose a programme.',
        intake: 'Please choose an intake.',
      },
      submit: 'Apply for a free assessment',
      fineprint: 'No commitment. We reply with a yes, a maybe, or a no — and what to do next.',
    },
    tourism: {
      success: 'Enquiry received! Our travel desk will reply within one working day.',
      phName: 'Your name',
      phDates: 'e.g. mid-October, 9 days',
      phNotes: 'Travellers, dietary needs, must-sees…',
      destinations: ['China', 'Japan', 'China + Japan', 'Somewhere else / custom'],
      tripTypes: ['Cultural / private', 'Group / educational', 'Business delegation'],
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        phone: 'Please enter a valid phone number.',
        destination: 'Please choose a destination.',
        tripType: 'Please choose a trip type.',
      },
      submit: 'Plan my journey',
      fineprint: 'We draft a free day-wise itinerary before you pay anything.',
    },
    trade: {
      success: 'Received! Our trade desk will reply within one working day with next steps.',
      phCompany: 'Your company',
      phName: 'Name',
      phNotes: 'e.g. LED drivers, ~5,000 units/month, target FOB…',
      directions: ['Import from China to India', 'Export from India to China', 'Both / exploring'],
      categories: ['Electronics & components', 'Industrial machinery', 'Textiles & apparel', 'Consumer goods', 'Other'],
      errors: {
        company: 'Please enter your company name.',
        name: 'Please enter your name.',
        email: 'Please enter a valid email.',
        phone: 'Please enter a valid phone number.',
        direction: 'Please choose a trade direction.',
        category: 'Please choose a category.',
      },
      submit: 'Talk to the trade desk',
      fineprint: 'Success fee model: you pay when goods ship. Audit costs quoted upfront.',
    },
  },
  form: {
    success: 'Message received! An advisor will reply within one working day.',
    fail: `Something went wrong sending the form. Please try again, or WhatsApp ${SITE.phoneIndia}.`,
    network: 'Network error — please check your connection and try again.',
  },
  hud: { tagline: 'Education · Tourism · Trade — One corridor', scroll: 'Scroll', loaderWords: ['Choose', 'Apply', 'Enroll'] },
};

/**
 * Get the active UI strings for a locale. English returns the reference copy.
 * Unknown codes fall back to the English strings so a bad locale never
 * renders `undefined`.
 */
export function uiFor(locale: Locale): UiStrings {
  if (locale === DEFAULT_LOCALE) return UI_EN;
  // UI is keyed by Exclude<Locale, 'en'>; every non-default locale has an
  // entry, so an out-of-range code falls back to the English copy.
  return (UI as Record<string, UiStrings>)[locale] ?? UI_EN;
}
