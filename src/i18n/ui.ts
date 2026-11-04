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

/**
 * Numeric opening-hours range extracted from `SITE.hours` (e.g. "9:00–18:00").
 * Facts stay sourced from SITE; per-locale `footer.hoursValue` strings only
 * localize the day-range/zone wording around this constant.
 */
const HOURS_RANGE = /\d{1,2}:\d{2}\s*[–—-]\s*\d{1,2}:\d{2}/.exec(SITE.hours)?.[0] ?? SITE.hours;

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
    /**
     * Localized opening-hours value for the footer note. The numeric range is
     * derived from `SITE.hours` (single source for the facts); each locale only
     * translates the day-range/zone wording around it.
     */
    hoursValue: string;
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
  /** Card arrow-link label on blog/guide cards (ArticleCard). */
  articleCard: {
    more: string;
  };
  /** First breadcrumb crumb (the localized word for "Home"). */
  breadcrumbsHome: string;
  /** Screen-reader label of the <nav class="breadcrumbs">. */
  breadcrumbsAria: string;
  /** Editorial byline for guide/blog content written by the desk. */
  guideDeskByline: string;
  /** Strings for the shared PageHero aside (coords rail, jump nav). */
  hero: {
    /** Label above the two-office coordinates stamp. */
    corridorLabel: string;
    /** Closing note under the coordinates stamp. */
    coordsNote: string;
    /** aria-label of the hero aside. */
    asideAria: string;
    /** aria-label of the in-page jump nav. */
    jumpsAria: string;
  };
  /** Localized labels for the three content desks (blog categories, testimonial pills). */
  categories: { education: string; tourism: string; trade: string };
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
      hoursValue: `周一至周六 ${HOURS_RANGE}（IST）`,
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
    articleCard: { more: '阅读' },
    breadcrumbsHome: '首页',
    breadcrumbsAria: '面包屑导航',
    guideDeskByline: 'RouteToAbroad 编辑部',
    hero: {
      corridorLabel: '双城走廊',
      coordsNote: '两个办公室 · 一个负责到底的团队',
      asideAria: '概览',
      jumpsAria: '本页导航',
    },
    categories: { education: '教育', tourism: '旅游', trade: '贸易' },
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
      hoursValue: `Lun–Sam, ${HOURS_RANGE} (IST)`,
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
    articleCard: { more: 'Lire' },
    breadcrumbsHome: 'Accueil',
    breadcrumbsAria: 'Fil d’Ariane',
    guideDeskByline: 'Rédaction RouteToAbroad',
    hero: {
      corridorLabel: 'Le corridor',
      coordsNote: 'Deux bureaux · une équipe responsable',
      asideAria: 'En bref',
      jumpsAria: 'Sur cette page',
    },
    categories: { education: 'Études', tourism: 'Tourisme', trade: 'Commerce' },
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
      hoursValue: `الاثنين–السبت، ${HOURS_RANGE} بتوقيت الهند`,
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
    articleCard: { more: 'اقرأ' },
    breadcrumbsHome: 'الرئيسية',
    breadcrumbsAria: 'مسار التنقل',
    guideDeskByline: 'فريق تحرير RouteToAbroad',
    hero: {
      corridorLabel: 'الممر',
      coordsNote: 'مكتبان · فريق واحد يتحمل المسؤولية',
      asideAria: 'نظرة سريعة',
      jumpsAria: 'في هذه الصفحة',
    },
    categories: { education: 'التعليم', tourism: 'السياحة', trade: 'التجارة' },
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
      hoursValue: `Lun–Sáb, ${HOURS_RANGE} (IST)`,
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
    articleCard: { more: 'Leer' },
    breadcrumbsHome: 'Inicio',
    breadcrumbsAria: 'Ruta de navegación',
    guideDeskByline: 'Redacción RouteToAbroad',
    hero: {
      corridorLabel: 'El corredor',
      coordsNote: 'Dos oficinas · un equipo responsable',
      asideAria: 'De un vistazo',
      jumpsAria: 'En esta página',
    },
    categories: { education: 'Educación', tourism: 'Turismo', trade: 'Comercio' },
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
  de: {
    nav: [
      { label: 'Studium' },
      { label: 'Tourismus' },
      { label: 'Handel' },
      { label: 'Tools' },
      { label: 'Ratgeber' },
      { label: 'Einblicke' },
      { label: 'Über uns' },
    ],
    navAria: 'Hauptnavigation',
    mobileNavAria: 'Mobile Navigation',
    themeAria: 'Dunkelmodus umschalten',
    menuOpenAria: 'Menü öffnen',
    menuCloseAria: 'Menü schließen',
    headerCta: 'Fit-Check',
    headerWordmarkAria: 'RouteToAbroad — Startseite',
    mobileCtaStart: 'Fit-Check starten',
    mobileCtaWhatsApp: 'Berater per WhatsApp schreiben',
    skipLink: 'Zum Inhalt springen',
    statsAria: 'Erfolgsbilanz',
    footer: {
      eyebrow: 'Zwei Büros · ein verantwortliches Team',
      desc: 'Ihr strategisches Tor zwischen Indien und Ostasien — Bildung, Tourismus und Handel von Menschen, die auf beiden Seiten leben.',
      groups: [
        {
          heading: 'Leistungen',
          links: [
            { href: '/education', label: 'In China studieren' },
            { href: '/tourism', label: 'Touren & Reisen' },
            { href: '/trade', label: 'Handel & Sourcing' },
            { href: '/for-agents', label: 'Für Agenten' },
          ],
        },
        {
          heading: 'Kostenlose Tools',
          links: [
            { href: '/tools/fit-check', label: 'Fit-Check' },
            { href: '/tools/scholarship-eligibility', label: 'Stipendien-Check' },
            { href: '/tools/cost-calculator', label: 'Kostenrechner' },
            { href: '/tools/document-checklist', label: 'Dokumenten-Checkliste' },
            { href: '/tools/timeline-planner', label: 'Zeitplaner' },
          ],
        },
        {
          heading: 'Ressourcen',
          links: [
            { href: '/guides', label: 'Ratgeber' },
            { href: '/blog', label: 'Einblicke' },
            { href: '/faq', label: 'FAQ' },
            { href: '/glossary', label: 'Glossar' },
            { href: '/universities', label: 'Universitäten' },
            { href: '/cities', label: 'Städte' },
          ],
        },
        {
          heading: 'Unternehmen',
          links: [
            { href: '/about', label: 'Über uns' },
            { href: '/contact', label: 'Kontakt' },
            { href: '/privacy', label: 'Datenschutz' },
            { href: '/terms', label: 'AGB' },
          ],
        },
      ],
      socialAria: 'Social-Media-Profile',
      socials: { linkedin: 'LinkedIn', instagram: 'Instagram', twitter: 'X / Twitter', youtube: 'YouTube' },
      allRights: 'Alle Rechte vorbehalten.',
      openNote: 'Öffnungszeiten',
      hoursValue: `Mo–Sa, ${HOURS_RANGE} IST`,
      loc: 'Neu-Delhi',
    },
    cta: {
      title: 'Bereit für den nächsten Schritt?',
      text: 'Beginnen Sie heute mit einer kostenlosen Beratung. Ohne Verpflichtung — einfach eine klare Antwort, wie Ihr nächster Schritt aussieht.',
      talkToAdvisor: 'Mit einem Berater sprechen',
      whatsapp: 'Per WhatsApp schreiben',
      call: 'Anrufen',
      hours: 'Öffnungszeiten',
      reply: 'Antwort',
      replyValue: 'Innerhalb eines Werktags',
      aria: 'Kontaktbereich',
      startHere: 'Hier starten',
      perPage: {
        about: {
          title: 'Lassen Sie uns sprechen.',
          text: 'Ein Gespräch, keine Verpflichtung — und eine ehrliche Einschätzung dessen, was Sie planen.',
        },
        blog: {
          title: 'Lesen ist der erste Schritt.',
          text: 'Wenn Sie die Antwort für Ihren konkreten Fall wollen, besteht der Fit-Check aus vier Fragen, und die Berater antworten innerhalb eines Tages.',
        },
        cities: {
          title: 'Sie persönlich zu sehen schlägt jedes Lesen',
          text: 'Unsere Touren führen durch jede Stadt auf dieser Seite — und unsere Studierenden schreiben sich dort jedes September ein.',
        },
        compare: {
          title: 'Noch unentschlossen?',
          text: 'Schicken Sie uns die Details — Noten, Budget, Produkt, Zeitplan. Wir geben das Urteil für Ihren Fall ab, nicht für den Durchschnittsfall.',
        },
        forAgents: {
          title: 'Ihre Studierenden verdienen einen echten China-Desk.',
          text: 'Sie auch. Eine Nachricht genügt.',
        },
        guides: {
          title: 'Ratgeber beantworten allgemeine Fragen.',
          text: 'Ihre sind konkret. Der Fit-Check und das Beraterteam beantworten diese.',
        },
        glossary: {
          title: 'Begriffe sind leicht. Entscheidungen sind schwerer.',
          text: 'Wenn Sie bereit sind, Vokabular in eine Bewerbung zu übersetzen, besteht der Fit-Check aus vier Fragen, und die Berater sind nur eine Antwort entfernt.',
        },
        faqHub: {
          title: 'Frage nicht auf der Liste?',
          text: 'Stellen Sie sie direkt — per WhatsApp, E-Mail oder über das Kontaktformular. Ein Mensch antwortet innerhalb eines Werktags.',
        },
        pillarFaq: {
          title: 'Noch Fragen?',
          text: 'Fragen Sie direkt beim Desk — wir antworten innerhalb eines Werktags, 9:00–18:00 IST, Montag bis Samstag.',
        },
        universities: {
          title: 'Nicht sicher, welche Universität passt?',
          text: 'Senden Sie eine Anfrage. Wir erstellen eine engere Auswahl nach Ihren Noten, Ihrem Budget und Ihren Wunschstädten — ehrlich, auch wenn die Antwort eine günstigere Universität ist als erwartet.',
        },
      },
    },
    carousel: {
      sectionAria: 'Kundengeschichten',
      eyebrow: 'Kundengeschichten',
      heading: 'Hören Sie von denen, die den Sprung gewagt haben',
      lede: 'Studierende, Reisende und Händler, die mit uns gegangen sind — in ihren eigenen Worten.',
      carouselAria: 'Karussell mit Erfahrungsberichten',
      prev: 'Vorheriger Erfahrungsbericht',
      next: 'Nächster Erfahrungsbericht',
      goTo: 'Zum Erfahrungsbericht {n} gehen',
      pause: 'Rotation der Erfahrungsberichte pausieren',
      play: 'Rotation der Erfahrungsberichte fortsetzen',
    },
    chat: {
      openAria: 'KI-Berater-Chat öffnen',
      fabLabel: 'Fragen Sie uns',
      assistantName: 'RouteToAbroad-Assistent',
      assistantTag: 'Mit Claude betrieben · antwortet in Sekunden',
      resetAria: 'Neues Gespräch starten',
      closeAria: 'Chat schließen',
      tryAsking: 'Fragen Sie zum Beispiel',
      placeholder: 'Fragen zu Studiengängen, Visa, Reisen…',
      sendAria: 'Senden',
      greeting:
        'Hallo! Ich beantworte Fragen zum Studium in China, zu Reisen nach Ostasien oder zum Sourcing bei chinesischen Herstellern. Woran arbeiten Sie gerade?',
      suggestions: [
        { label: 'MBBS in China', prompt: 'Kann ich als indischer Student in China MBBS studieren?' },
        { label: 'Kosten einer China-Reise', prompt: 'Was kostet eine zweiwöchige China-Reise normalerweise?' },
        { label: 'Lieferanten prüfen', prompt: 'Wie prüfen Sie einen chinesischen Lieferanten, bevor ich eine Anzahlung leiste?' },
      ],
      retry: 'Erneut versuchen',
      noReply: '(keine Antwort — versuchen Sie es erneut oder schreiben Sie uns per WhatsApp)',
      unavailable: 'Entschuldigung — der Assistent ist derzeit nicht verfügbar.',
      typing: 'Der Assistent schreibt…',
    },
    language: { aria: 'Sprache' },
    articleCard: { more: 'Lesen' },
    breadcrumbsHome: 'Startseite',
    breadcrumbsAria: 'Breadcrumb-Navigation',
    guideDeskByline: 'RouteToAbroad-Redaktion',
    hero: {
      corridorLabel: 'Der Korridor',
      coordsNote: 'Zwei Büros. Ein verantwortliches Team.',
      asideAria: 'Auf einen Blick',
      jumpsAria: 'Auf dieser Seite',
    },
    categories: { education: 'Studium', tourism: 'Tourismus', trade: 'Handel' },
    formFields: {
      fullName: 'Vollständiger Name',
      email: 'E-Mail',
      phone: 'Telefon / WhatsApp',
      phoneHint: 'optional',
      message: 'Ihre Nachricht',
      selectPlaceholder: 'Auswählen…',
      optionalHint: 'optional',
      companyName: 'Firmenname',
      contactPerson: 'Ansprechpartner',
      workEmail: 'Geschäftliche E-Mail',
      educationLevel: 'Aktuelle Ausbildungsstufe',
      programmeInterest: 'Wunschstudiengang',
      targetIntake: 'Geplanter Studienstart',
      latestMarks: 'Letzte Noten / CGPA',
      anythingElse: 'Gibt es sonst noch etwas, das wir wissen sollten? ',
      destination: 'Reiseziel',
      tripType: 'Art der Reise',
      travelDates: 'Reisedaten',
      tradeDirection: 'Handelsrichtung',
      productCategory: 'Produktkategorie',
      sourcingVolumes: 'Was beschaffen Sie und in welchen Mengen? ',
    },
    forms: {
      contact: {
        success: 'Nachricht erhalten! Ein Berater antwortet innerhalb eines Werktags — 9:00–18:00 IST, Montag bis Samstag.',
        legend: 'Mein Anliegen betrifft',
        serviceAria: 'Service',
        cards: {
          education: 'Studium',
          educationDesc: 'In China studieren',
          tourism: 'Tourismus',
          tourismDesc: 'Touren & Reisen',
          trade: 'Handel',
          tradeDesc: 'Handel & Sourcing',
        },
        phName: 'Ihr Name',
        phMessage: 'Was planen Sie? Seien Sie so konkret wie möglich.',
        errors: {
          name: 'Bitte geben Sie Ihren Namen ein.',
          email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          phone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
          message: 'Bitte schreiben Sie eine kurze Nachricht.',
        },
        submit: 'Nachricht senden',
        fineprint: 'Eine Reise von tausend Meilen beginnt mit einem einzigen Gespräch.',
      },
      education: {
        success: 'Bewerbung erhalten! Ein Bildungsberater ruft Sie innerhalb eines Werktags an.',
        phName: 'Wie in Ihrem Reisepass',
        phCgpa: 'z. B. 82 % oder 3,6/4',
        phNotes: 'Stipendienziele, Budget, bevorzugte Städte…',
        levels: ['Noch in der Schule (12. Klasse oder darunter)', 'Bachelor (abgeschlossen oder laufend)', 'Master oder höher'],
        programmes: ['MBBS / Medizin', 'Ingenieurwesen & Technologie', 'Business & Management', 'Chinesisch (HSK)', 'Bachelor (sonstige)', 'Master / Promotion (Forschung)'],
        intakes: ['September 2026', 'März 2027', 'Später / unsicher'],
        errors: {
          name: 'Bitte geben Sie Ihren Namen ein.',
          email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          phone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
          level: 'Bitte wählen Sie Ihre aktuelle Ausbildungsstufe.',
          programme: 'Bitte wählen Sie einen Studiengang.',
          intake: 'Bitte wählen Sie einen Studienstart.',
        },
        submit: 'Kostenlose Bewertung anfordern',
        fineprint: 'Ohne Verpflichtung. Wir antworten mit Ja, Vielleicht oder Nein — und wie es weitergeht.',
      },
      tourism: {
        success: 'Anfrage erhalten! Unser Reisedesk antwortet innerhalb eines Werktags.',
        phName: 'Ihr Name',
        phDates: 'z. B. Mitte Oktober, 9 Tage',
        phNotes: 'Reisende, Ernährungswünsche, Highlights…',
        destinations: ['China', 'Japan', 'China + Japan', 'Anderswo / maßgeschneidert'],
        tripTypes: ['Kulturell / privat', 'Gruppe / Bildungsreise', 'Geschäftsdelegation'],
        errors: {
          name: 'Bitte geben Sie Ihren Namen ein.',
          email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          phone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
          destination: 'Bitte wählen Sie ein Reiseziel.',
          tripType: 'Bitte wählen Sie eine Art der Reise.',
        },
        submit: 'Meine Reise planen',
        fineprint: 'Wir erstellen kostenlos einen detaillierten Tagesplan, bevor Sie etwas zahlen.',
      },
      trade: {
        success: 'Erhalten! Unser Handelsdesk antwortet innerhalb eines Werktags mit den nächsten Schritten.',
        phCompany: 'Ihr Unternehmen',
        phName: 'Name',
        phNotes: 'z. B. LED-Treiber, ~5.000 Stück/Monat, Ziel-FOB…',
        directions: ['Import von China nach Indien', 'Export von Indien nach China', 'Beides / in Erkundung'],
        categories: ['Elektronik & Komponenten', 'Industriemaschinen', 'Textilien & Bekleidung', 'Konsumgüter', 'Sonstige'],
        errors: {
          company: 'Bitte geben Sie Ihren Firmennamen ein.',
          name: 'Bitte geben Sie Ihren Namen ein.',
          email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
          phone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
          direction: 'Bitte wählen Sie eine Handelsrichtung.',
          category: 'Bitte wählen Sie eine Kategorie.',
        },
        submit: 'Mit dem Handelsdesk sprechen',
        fineprint: 'Erfolgshonorar-Modell: Sie zahlen bei Verschiffung der Ware. Prüfkosten werden vorab angeboten.',
      },
    },
    form: {
      success: 'Nachricht erhalten! Ein Berater antwortet innerhalb eines Werktags.',
      fail: `Beim Senden des Formulars ist ein Fehler aufgetreten. Versuchen Sie es erneut oder schreiben Sie uns per WhatsApp ${SITE.phoneIndia}.`,
      network: 'Netzwerkfehler — bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    },
    hud: { tagline: 'Studium · Tourismus · Handel — Ein Korridor', scroll: 'Scrollen', loaderWords: ['Wählen', 'Bewerben', 'Einschreiben'] },
  },
  ja: {
    nav: [
      { label: '教育' },
      { label: '観光' },
      { label: '貿易' },
      { label: 'ツール' },
      { label: 'ガイド' },
      { label: 'インサイト' },
      { label: '私たちについて' },
    ],
    navAria: 'メインナビゲーション',
    mobileNavAria: 'モバイルナビゲーション',
    themeAria: 'ダークモードを切り替え',
    menuOpenAria: 'メニューを開く',
    menuCloseAria: 'メニューを閉じる',
    headerCta: '適合チェック',
    headerWordmarkAria: 'RouteToAbroad — ホーム',
    mobileCtaStart: '適合チェックを始める',
    mobileCtaWhatsApp: 'WhatsAppでアドバイザーに相談',
    skipLink: '本文へスキップ',
    statsAria: '実績',
    footer: {
      eyebrow: '2つのオフィス · 1つの責任あるチーム',
      desc: 'インドと東アジアをつなぐ戦略的なゲートウェイ——教育・観光・貿易を、両側に住むチームが担当します。',
      groups: [
        {
          heading: 'サービス',
          links: [
            { href: '/education', label: '中国で学ぶ' },
            { href: '/tourism', label: 'ツアー・旅行' },
            { href: '/trade', label: '貿易・調達' },
            { href: '/for-agents', label: '代理店の方へ' },
          ],
        },
        {
          heading: '無料ツール',
          links: [
            { href: '/tools/fit-check', label: '適合チェック' },
            { href: '/tools/scholarship-eligibility', label: '奨学金チェック' },
            { href: '/tools/cost-calculator', label: '費用計算ツール' },
            { href: '/tools/document-checklist', label: '書類チェックリスト' },
            { href: '/tools/timeline-planner', label: 'スケジュールプランナー' },
          ],
        },
        {
          heading: 'リソース',
          links: [
            { href: '/guides', label: 'ガイド' },
            { href: '/blog', label: 'インサイト' },
            { href: '/faq', label: 'FAQ' },
            { href: '/glossary', label: '用語集' },
            { href: '/universities', label: '大学' },
            { href: '/cities', label: '都市' },
          ],
        },
        {
          heading: '会社情報',
          links: [
            { href: '/about', label: '私たちについて' },
            { href: '/contact', label: 'お問い合わせ' },
            { href: '/privacy', label: 'プライバシー' },
            { href: '/terms', label: '利用規約' },
          ],
        },
      ],
      socialAria: 'SNSアカウント',
      socials: { linkedin: 'LinkedIn', instagram: 'Instagram', twitter: 'X / Twitter', youtube: 'YouTube' },
      allRights: '全著作権所有。',
      openNote: '受付時間',
      hoursValue: `月～土 ${HOURS_RANGE}（IST）`,
      loc: 'ニューデリー',
    },
    cta: {
      title: '次の一歩を踏み出す準備はできましたか？',
      text: 'まずは無料相談から。義務はありません——次のステップがどうなるか、明確な答えをお伝えするだけです。',
      talkToAdvisor: 'アドバイザーに相談する',
      whatsapp: 'WhatsAppで相談する',
      call: '電話',
      hours: '受付時間',
      reply: '返信',
      replyValue: '1営業日以内',
      aria: 'お問い合わせセクション',
      startHere: 'ここから始める',
      perPage: {
        about: {
          title: 'まずはお話ししましょう。',
          text: '会話は一度、義務はゼロ——ご計画について率直な見解をお伝えします。',
        },
        blog: {
          title: '読むことは第一歩。',
          text: 'ご自身のケースに合った答えが必要なら、適合チェックは4つの質問だけ。アドバイザーが1日以内に回答します。',
        },
        cities: {
          title: '読むより、実際に見るほうが確実',
          text: '私たちのツアーはこのページのすべての都市を巡ります——そして毎年9月、学生たちはそこへ入学していきます。',
        },
        compare: {
          title: 'まだ決めかねていますか？',
          text: '詳細をお送りください——成績、予算、製品、スケジュール。平均的なケースではなく、あなたのケースに合わせた判断をお伝えします。',
        },
        forAgents: {
          title: 'あなたの学生には、本物の中国デスクが必要です。',
          text: 'あなたにも必要です。メッセージ1通で始められます。',
        },
        guides: {
          title: 'ガイドは一般的な質問に答えます。',
          text: 'あなたの質問は具体的です。それには適合チェックとアドバイザーデスクがお答えします。',
        },
        glossary: {
          title: '用語は簡単。決めるのは難しい。',
          text: '語彙を出願に変える準備ができたら、適合チェックは4つの質問。アドバイザーまで返信ひとつの距離です。',
        },
        faqHub: {
          title: 'リストにない質問ですか？',
          text: '直接ご質問ください——WhatsApp、メール、またはお問い合わせフォームから。担当者が1営業日以内に回答します。',
        },
        pillarFaq: {
          title: 'まだご質問がありますか？',
          text: 'デスクに直接ご質問ください——1営業日以内に回答します。月曜から土曜、9:00〜18:00 IST。',
        },
        universities: {
          title: 'どの大学が合うか迷っていますか？',
          text: 'お問い合わせを1件どうぞ。成績・予算・希望都市に合わせて絞り込みます——正直に、答えが想定より安い大学になる場合もそのままお伝えします。',
        },
      },
    },
    carousel: {
      sectionAria: 'お客様の声',
      eyebrow: 'お客様の声',
      heading: '挑戦した人の声を聞く',
      lede: '私たちと共に渡った学生、旅行者、貿易業者——ご本人の言葉で。',
      carouselAria: 'お客様の声カルーセル',
      prev: '前のお客様の声',
      next: '次のお客様の声',
      goTo: 'お客様の声 {n} 件目へ移動',
      pause: 'カルーセルを一時停止',
      play: 'カルーセルを再生',
    },
    chat: {
      openAria: 'AIカウンセラーチャットを開く',
      fabLabel: '質問する',
      assistantName: 'RouteToAbroadアシスタント',
      assistantTag: 'Claude搭載 · 数秒で回答',
      resetAria: '新しい会話を始める',
      closeAria: 'チャットを閉じる',
      tryAsking: '質問例',
      placeholder: 'プログラム、ビザ、旅行について質問…',
      sendAria: '送信',
      greeting:
        'こんにちは！中国留学、東アジア旅行、中国工場からの調達についてお答えします。現在、何にお取り組みですか？',
      suggestions: [
        { label: '中国でMBBS', prompt: 'インド人学生として中国でMBBSを学べますか？' },
        { label: '中国ツアーの費用', prompt: '2週間の中国ツアーは通常いくらくらいですか？' },
        { label: 'サプライヤーの確認', prompt: '前金を支払う前に、中国のサプライヤーをどのように確認しますか？' },
      ],
      retry: 'もう一度試す',
      noReply: '（返信がありません——もう一度試すか、WhatsAppでお問い合わせください）',
      unavailable: '申し訳ありません——現在アシスタントを利用できません。',
      typing: 'アシスタントが入力中…',
    },
    language: { aria: '言語' },
    articleCard: { more: '読む' },
    breadcrumbsHome: 'ホーム',
    breadcrumbsAria: 'パンくずリスト',
    guideDeskByline: 'RouteToAbroad編集部',
    hero: {
      corridorLabel: '回廊',
      coordsNote: '2つのオフィス。1つの責任あるチーム。',
      asideAria: '概要',
      jumpsAria: 'このページ内',
    },
    categories: { education: '教育', tourism: '観光', trade: '貿易' },
    formFields: {
      fullName: '氏名',
      email: 'メールアドレス',
      phone: '電話 / WhatsApp',
      phoneHint: '任意',
      message: 'メッセージ',
      selectPlaceholder: '選択してください…',
      optionalHint: '任意',
      companyName: '会社名',
      contactPerson: '担当者名',
      workEmail: '勤務先メールアドレス',
      educationLevel: '現在の学歴段階',
      programmeInterest: '希望プログラム',
      targetIntake: '希望入学時期',
      latestMarks: '最新の成績 / CGPA',
      anythingElse: 'その他、伝えておきたいことはありますか？ ',
      destination: '行き先',
      tripType: '旅行タイプ',
      travelDates: '旅行日程',
      tradeDirection: '貿易の方向',
      productCategory: '製品カテゴリー',
      sourcingVolumes: '何をどの数量で調達しますか？ ',
    },
    forms: {
      contact: {
        success: 'メッセージを受け付けました！アドバイザーが1営業日以内に返信します——月曜から土曜、9:00〜18:00 IST。',
        legend: 'ご相談内容',
        serviceAria: 'サービス',
        cards: {
          education: '教育',
          educationDesc: '中国で学ぶ',
          tourism: '観光',
          tourismDesc: 'ツアー・旅行',
          trade: '貿易',
          tradeDesc: '貿易・調達',
        },
        phName: 'お名前',
        phMessage: 'どのようなご計画ですか？できるだけ具体的にお書きください。',
        errors: {
          name: 'お名前を入力してください。',
          email: '有効なメールアドレスを入力してください。',
          phone: '有効な電話番号を入力してください。',
          message: '簡単なメッセージを入力してください。',
        },
        submit: 'メッセージを送信',
        fineprint: '千里の旅も一つの会話から始まります。',
      },
      education: {
        success: 'お申し込みを受け付けました！教育アドバイザーが1営業日以内にお電話します。',
        phName: 'パスポートどおりに',
        phCgpa: '例：82% または 3.6/4',
        phNotes: '奨学金の目標、予算、希望都市…',
        levels: ['在学中（高校以下）', '学士（修了または在学中）', '修士以上'],
        programmes: ['MBBS／医学', '工学・テクノロジー', 'ビジネス・経営', '中国語（HSK）', 'その他の学士', '修士／博士（研究）'],
        intakes: ['2026年9月', '2027年3月', '未定／後日'],
        errors: {
          name: 'お名前を入力してください。',
          email: '有効なメールアドレスを入力してください。',
          phone: '有効な電話番号を入力してください。',
          level: '現在の学歴段階を選択してください。',
          programme: 'プログラムを選択してください。',
          intake: '入学時期を選択してください。',
        },
        submit: '無料評価を申し込む',
        fineprint: '義務はありません。「はい」「検討」「いいえ」と、次に何をすべきかをお伝えします。',
      },
      tourism: {
        success: 'お問い合わせを受け付けました！旅行デスクが1営業日以内に返信します。',
        phName: 'お名前',
        phDates: '例：10月中旬、9日間',
        phNotes: '同行者、食事の制限、外せない見どころ…',
        destinations: ['中国', '日本', '中国＋日本', 'その他／オーダーメイド'],
        tripTypes: ['文化／プライベート', 'グループ／教育', '視察・ビジネスミッション'],
        errors: {
          name: 'お名前を入力してください。',
          email: '有効なメールアドレスを入力してください。',
          phone: '有効な電話番号を入力してください。',
          destination: '行き先を選択してください。',
          tripType: '旅行タイプを選択してください。',
        },
        submit: '旅行を計画する',
        fineprint: 'お支払いの前に、日ごとの旅程を無料で作成します。',
      },
      trade: {
        success: '受け付けました！貿易デスクが1営業日以内に次のステップをご連絡します。',
        phCompany: '会社名',
        phName: '氏名',
        phNotes: '例：LEDドライバー、月約5,000個、目標FOB…',
        directions: ['中国からインドへ輸入', 'インドから中国へ輸出', '両方／検討中'],
        categories: ['電子部品・電子機器', '産業機械', '繊維・アパレル', '消費財', 'その他'],
        errors: {
          company: '会社名を入力してください。',
          name: 'お名前を入力してください。',
          email: '有効なメールアドレスを入力してください。',
          phone: '有効な電話番号を入力してください。',
          direction: '貿易の方向を選択してください。',
          category: 'カテゴリーを選択してください。',
        },
        submit: '貿易デスクに相談する',
        fineprint: '成功報酬モデル：商品出荷時にお支払いいただきます。検査費用は事前にお見積もりします。',
      },
    },
    form: {
      success: 'メッセージを受け付けました！アドバイザーが1営業日以内に返信します。',
      fail: `フォームの送信に失敗しました。もう一度お試しいただくか、WhatsApp ${SITE.phoneIndia} までご連絡ください。`,
      network: 'ネットワークエラー——接続を確認してもう一度お試しください。',
    },
    hud: { tagline: '教育 · 観光 · 貿易——ひとつの回廊', scroll: 'スクロール', loaderWords: ['選ぶ', '出願', '入学'] },
  },
  pt: {
    nav: [
      { label: 'Educação' },
      { label: 'Turismo' },
      { label: 'Comércio' },
      { label: 'Ferramentas' },
      { label: 'Guias' },
      { label: 'Análises' },
      { label: 'Sobre nós' },
    ],
    navAria: 'Navegação principal',
    mobileNavAria: 'Navegação móvel',
    themeAria: 'Alternar modo escuro',
    menuOpenAria: 'Abrir menu',
    menuCloseAria: 'Fechar menu',
    headerCta: 'Teste de compatibilidade',
    headerWordmarkAria: 'RouteToAbroad — início',
    mobileCtaStart: 'Começar o teste',
    mobileCtaWhatsApp: 'Falar com um consultor no WhatsApp',
    skipLink: 'Ir para o conteúdo',
    statsAria: 'Histórico',
    footer: {
      eyebrow: 'Dois escritórios · uma equipe responsável',
      desc: 'Seu portal estratégico entre a Índia e o Leste da Ásia — educação, turismo e comércio conduzidos por pessoas que vivem dos dois lados.',
      groups: [
        {
          heading: 'Serviços',
          links: [
            { href: '/education', label: 'Estudar na China' },
            { href: '/tourism', label: 'Tours e viagens' },
            { href: '/trade', label: 'Comércio e sourcing' },
            { href: '/for-agents', label: 'Para agentes' },
          ],
        },
        {
          heading: 'Ferramentas gratuitas',
          links: [
            { href: '/tools/fit-check', label: 'Teste de compatibilidade' },
            { href: '/tools/scholarship-eligibility', label: 'Verificação de bolsas' },
            { href: '/tools/cost-calculator', label: 'Calculadora de custos' },
            { href: '/tools/document-checklist', label: 'Lista de documentos' },
            { href: '/tools/timeline-planner', label: 'Planejador de cronograma' },
          ],
        },
        {
          heading: 'Recursos',
          links: [
            { href: '/guides', label: 'Guias' },
            { href: '/blog', label: 'Análises' },
            { href: '/faq', label: 'FAQ' },
            { href: '/glossary', label: 'Glossário' },
            { href: '/universities', label: 'Universidades' },
            { href: '/cities', label: 'Cidades' },
          ],
        },
        {
          heading: 'Empresa',
          links: [
            { href: '/about', label: 'Sobre nós' },
            { href: '/contact', label: 'Contato' },
            { href: '/privacy', label: 'Privacidade' },
            { href: '/terms', label: 'Termos' },
          ],
        },
      ],
      socialAria: 'Perfis sociais',
      socials: { linkedin: 'LinkedIn', instagram: 'Instagram', twitter: 'X / Twitter', youtube: 'YouTube' },
      allRights: 'Todos os direitos reservados.',
      openNote: 'Horário',
      hoursValue: `Seg–Sáb, ${HOURS_RANGE} (IST)`,
      loc: 'Nova Délhi',
    },
    cta: {
      title: 'Pronto para dar o próximo passo?',
      text: 'Comece com uma consulta gratuita hoje. Sem compromisso — apenas uma resposta clara sobre como será o seu próximo passo.',
      talkToAdvisor: 'Falar com um consultor',
      whatsapp: 'Chamar no WhatsApp',
      call: 'Ligar',
      hours: 'Horário',
      reply: 'Resposta',
      replyValue: 'Em até um dia útil',
      aria: 'Seção de contato',
      startHere: 'Comece aqui',
      perPage: {
        about: {
          title: 'Vamos conversar.',
          text: 'Uma conversa, sem compromisso — e uma avaliação honesta do que você está planejando.',
        },
        blog: {
          title: 'Ler é o primeiro passo.',
          text: 'Quando você quiser a resposta para o seu caso específico, o teste de compatibilidade tem quatro perguntas e os consultores respondem em um dia.',
        },
        cities: {
          title: 'Ver pessoalmente vale mais do que ler',
          text: 'Nossos tours passam por cada cidade desta página — e nossos estudantes se matriculam nelas a cada setembro.',
        },
        compare: {
          title: 'Ainda decidindo?',
          text: 'Envie os detalhes — notas, orçamento, produto, cronograma. Damos o veredicto para o seu caso, não para o caso médio.',
        },
        forAgents: {
          title: 'Seus estudantes merecem uma mesa de China de verdade.',
          text: 'Você também. Uma mensagem já começa.',
        },
        guides: {
          title: 'Os guias respondem perguntas gerais.',
          text: 'As suas são específicas. O teste de compatibilidade e a mesa de consultores respondem a essas.',
        },
        glossary: {
          title: 'Os termos são fáceis. As decisões são mais difíceis.',
          text: 'Quando estiver pronto para transformar vocabulário em candidatura, o teste de compatibilidade são quatro perguntas e os consultores estão a uma resposta de distância.',
        },
        faqHub: {
          title: 'Sua pergunta não está na lista?',
          text: 'Pergunte diretamente — WhatsApp, e-mail ou o formulário. Uma pessoa responde em um dia útil.',
        },
        pillarFaq: {
          title: 'Ainda tem perguntas?',
          text: 'Pergunte à mesa diretamente — respondemos em um dia útil, de segunda a sábado, 9h–18h (IST).',
        },
        universities: {
          title: 'Não sabe qual universidade combina?',
          text: 'Envie uma consulta. Fazemos uma pré-seleção com base nas suas notas, no orçamento e nas cidades preferidas — com honestidade, inclusive quando a resposta é uma universidade mais barata do que o esperado.',
        },
      },
    },
    carousel: {
      sectionAria: 'Histórias de clientes',
      eyebrow: 'Histórias de clientes',
      heading: 'Ouça quem deu o salto',
      lede: 'Estudantes, viajantes e comerciantes que cruzaram com a gente — com as próprias palavras.',
      carouselAria: 'Carrossel de depoimentos',
      prev: 'Depoimento anterior',
      next: 'Próximo depoimento',
      goTo: 'Ir para o depoimento {n}',
      pause: 'Pausar a rotação de depoimentos',
      play: 'Retomar a rotação de depoimentos',
    },
    chat: {
      openAria: 'Abrir chat com o consultor de IA',
      fabLabel: 'Pergunte-nos',
      assistantName: 'Assistente RouteToAbroad',
      assistantTag: 'Impulsionado por Claude · responde em segundos',
      resetAria: 'Iniciar uma nova conversa',
      closeAria: 'Fechar o chat',
      tryAsking: 'Experimente perguntar',
      placeholder: 'Pergunte sobre programas, vistos, viagens…',
      sendAria: 'Enviar',
      greeting:
        'Olá! Posso responder perguntas sobre estudar na China, viajar para o Leste da Ásia ou comprar de fábricas chinesas. No que você está trabalhando?',
      suggestions: [
        { label: 'MBBS na China', prompt: 'Posso estudar MBBS na China como estudante indiano?' },
        { label: 'Custo de um tour pela China', prompt: 'Quanto custa normalmente um tour de duas semanas pela China?' },
        { label: 'Verificar um fornecedor', prompt: 'Como vocês verificam um fornecedor chinês antes de eu pagar um adiantamento?' },
      ],
      retry: 'Tentar de novo',
      noReply: '(sem resposta — tente de novo ou fale conosco pelo WhatsApp)',
      unavailable: 'Desculpe — o assistente não está disponível no momento.',
      typing: 'O assistente está digitando…',
    },
    language: { aria: 'Idioma' },
    articleCard: { more: 'Ler' },
    breadcrumbsHome: 'Início',
    breadcrumbsAria: 'Trilha de navegação',
    guideDeskByline: 'Redação RouteToAbroad',
    hero: {
      corridorLabel: 'O corredor',
      coordsNote: 'Dois escritórios. Uma equipe responsável.',
      asideAria: 'Em resumo',
      jumpsAria: 'Nesta página',
    },
    categories: { education: 'Educação', tourism: 'Turismo', trade: 'Comércio' },
    formFields: {
      fullName: 'Nome completo',
      email: 'E-mail',
      phone: 'Telefone / WhatsApp',
      phoneHint: 'opcional',
      message: 'Sua mensagem',
      selectPlaceholder: 'Selecione…',
      optionalHint: 'opcional',
      companyName: 'Nome da empresa',
      contactPerson: 'Pessoa de contato',
      workEmail: 'E-mail profissional',
      educationLevel: 'Nível atual',
      programmeInterest: 'Programa de interesse',
      targetIntake: 'Época de ingresso desejada',
      latestMarks: 'Últimas notas / CGPA',
      anythingElse: 'Mais alguma coisa que devamos saber? ',
      destination: 'Destino',
      tripType: 'Tipo de viagem',
      travelDates: 'Datas da viagem',
      tradeDirection: 'Direção do comércio',
      productCategory: 'Categoria de produto',
      sourcingVolumes: 'O que você está comprando e em quais volumes? ',
    },
    forms: {
      contact: {
        success: 'Mensagem recebida! Um consultor responderá em até um dia útil — de segunda a sábado, das 9h às 18h (IST).',
        legend: 'Minha consulta é sobre',
        serviceAria: 'Serviço',
        cards: {
          education: 'Educação',
          educationDesc: 'Estudar na China',
          tourism: 'Turismo',
          tourismDesc: 'Tours e viagens',
          trade: 'Comércio',
          tradeDesc: 'Comércio e sourcing',
        },
        phName: 'Seu nome',
        phMessage: 'O que você está planejando? Seja o mais específico possível.',
        errors: {
          name: 'Informe seu nome.',
          email: 'Informe um e-mail válido.',
          phone: 'Informe um telefone válido.',
          message: 'Escreva uma mensagem breve.',
        },
        submit: 'Enviar mensagem',
        fineprint: 'Uma jornada de mil milhas começa com uma única conversa.',
      },
      education: {
        success: 'Candidatura recebida! Um consultor de educação ligará para você em até um dia útil.',
        phName: 'Como no seu passaporte',
        phCgpa: 'ex.: 82% ou 3,6/4',
        phNotes: 'Objetivos de bolsa, orçamento, cidades que prefere…',
        levels: ['No ensino (12.º ano ou menos)', 'Graduação (completa ou em andamento)', 'Mestrado ou superior'],
        programmes: ['MBBS / Medicina', 'Engenharia e tecnologia', 'Negócios e gestão', 'Chinês (HSK)', 'Graduação (outra)', 'Mestrado / doutorado (pesquisa)'],
        intakes: ['Setembro de 2026', 'Março de 2027', 'Mais tarde / não sei'],
        errors: {
          name: 'Informe seu nome.',
          email: 'Informe um e-mail válido.',
          phone: 'Informe um telefone válido.',
          level: 'Selecione seu nível atual.',
          programme: 'Selecione um programa.',
          intake: 'Selecione uma época de ingresso.',
        },
        submit: 'Solicitar avaliação gratuita',
        fineprint: 'Sem compromisso. Respondemos com um sim, um talvez ou um não — e o que fazer em seguida.',
      },
      tourism: {
        success: 'Consulta recebida! Nossa mesa de viagens responderá em até um dia útil.',
        phName: 'Seu nome',
        phDates: 'ex.: meados de outubro, 9 dias',
        phNotes: 'Viajantes, restrições alimentares, imperdíveis…',
        destinations: ['China', 'Japão', 'China + Japão', 'Outro destino / sob medida'],
        tripTypes: ['Cultural / privado', 'Grupo / educativo', 'Delegação de negócios'],
        errors: {
          name: 'Informe seu nome.',
          email: 'Informe um e-mail válido.',
          phone: 'Informe um telefone válido.',
          destination: 'Selecione um destino.',
          tripType: 'Selecione um tipo de viagem.',
        },
        submit: 'Planejar minha viagem',
        fineprint: 'Elaboramos um roteiro dia a dia gratuito antes de você pagar qualquer coisa.',
      },
      trade: {
        success: 'Recebido! Nossa mesa de comércio responderá em até um dia útil com os próximos passos.',
        phCompany: 'Sua empresa',
        phName: 'Nome',
        phNotes: 'ex.: drivers LED, ~5.000 unidades/mês, FOB alvo…',
        directions: ['Importar da China para a Índia', 'Exportar da Índia para a China', 'Ambos / explorando'],
        categories: ['Eletrônicos e componentes', 'Máquinas industriais', 'Têxteis e vestuário', 'Bens de consumo', 'Outros'],
        errors: {
          company: 'Informe o nome da sua empresa.',
          name: 'Informe seu nome.',
          email: 'Informe um e-mail válido.',
          phone: 'Informe um telefone válido.',
          direction: 'Selecione uma direção de comércio.',
          category: 'Selecione uma categoria.',
        },
        submit: 'Falar com a mesa de comércio',
        fineprint: 'Modelo de taxa por sucesso: você paga quando a mercadoria é embarcada. Custos de auditoria cotados antecipadamente.',
      },
    },
    form: {
      success: 'Mensagem recebida! Um consultor responderá em até um dia útil.',
      fail: `Não foi possível enviar o formulário. Tente novamente ou fale conosco pelo WhatsApp ${SITE.phoneIndia}.`,
      network: 'Erro de rede — verifique sua conexão e tente novamente.',
    },
    hud: { tagline: 'Educação · Turismo · Comércio — Um corredor', scroll: 'Rolar', loaderWords: ['Escolher', 'Candidatar', 'Matricular'] },
  },
  hi: {
    nav: [
      { label: 'शिक्षा' },
      { label: 'पर्यटन' },
      { label: 'व्यापार' },
      { label: 'टूल्स' },
      { label: 'गाइड' },
      { label: 'इनसाइट्स' },
      { label: 'हमारे बारे में' },
    ],
    navAria: 'मुख्य नेविगेशन',
    mobileNavAria: 'मोबाइल नेविगेशन',
    themeAria: 'डार्क मोड बदलें',
    menuOpenAria: 'मेन्यू खोलें',
    menuCloseAria: 'मेन्यू बंद करें',
    headerCta: 'फ़िट चेक',
    headerWordmarkAria: 'RouteToAbroad — होम',
    mobileCtaStart: 'फ़िट चेक शुरू करें',
    mobileCtaWhatsApp: 'WhatsApp पर सलाहकार से बात करें',
    skipLink: 'सामग्री पर जाएँ',
    statsAria: 'ट्रैक रिकॉर्ड',
    footer: {
      eyebrow: 'दो दफ़्तर · एक ज़िम्मेदार टीम',
      desc: 'भारत और पूर्वी एशिया के बीच आपका रणनीतिक द्वार — शिक्षा, पर्यटन और व्यापार, दोनों पक्षों पर रहने वाले लोगों द्वारा संचालित।',
      groups: [
        {
          heading: 'सेवाएँ',
          links: [
            { href: '/education', label: 'चीन में पढ़ाई' },
            { href: '/tourism', label: 'टूर और यात्रा' },
            { href: '/trade', label: 'व्यापार और सोर्सिंग' },
            { href: '/for-agents', label: 'एजेंटों के लिए' },
          ],
        },
        {
          heading: 'मुफ़्त टूल्स',
          links: [
            { href: '/tools/fit-check', label: 'फ़िट चेक' },
            { href: '/tools/scholarship-eligibility', label: 'छात्रवृत्ति जाँच' },
            { href: '/tools/cost-calculator', label: 'लागत कैलकुलेटर' },
            { href: '/tools/document-checklist', label: 'दस्तावेज़ चेकलिस्ट' },
            { href: '/tools/timeline-planner', label: 'टाइमलाइन प्लानर' },
          ],
        },
        {
          heading: 'संसाधन',
          links: [
            { href: '/guides', label: 'गाइड' },
            { href: '/blog', label: 'इनसाइट्स' },
            { href: '/faq', label: 'FAQ' },
            { href: '/glossary', label: 'शब्दावली' },
            { href: '/universities', label: 'विश्वविद्यालय' },
            { href: '/cities', label: 'शहर' },
          ],
        },
        {
          heading: 'कंपनी',
          links: [
            { href: '/about', label: 'हमारे बारे में' },
            { href: '/contact', label: 'संपर्क करें' },
            { href: '/privacy', label: 'गोपनीयता' },
            { href: '/terms', label: 'शर्तें' },
          ],
        },
      ],
      socialAria: 'सोशल प्रोफ़ाइल',
      socials: { linkedin: 'लिंक्डइन', instagram: 'इंस्टाग्राम', twitter: 'एक्स / ट्विटर', youtube: 'यूट्यूब' },
      allRights: 'सर्वाधिकार सुरक्षित।',
      openNote: 'कार्य समय',
    hoursValue: `सोम–शनि, ${HOURS_RANGE} IST`,
      loc: 'नई दिल्ली',
    },
    cta: {
      title: 'अपना अगला कदम उठाने के लिए तैयार हैं?',
      text: 'आज ही एक मुफ़्त परामर्श से शुरुआत करें। कोई प्रतिबद्धता नहीं — बस आपका अगला कदम कैसा होगा, इसका स्पष्ट उत्तर।',
      talkToAdvisor: 'सलाहकार से बात करें',
      whatsapp: 'हमें WhatsApp करें',
      call: 'कॉल करें',
      hours: 'समय',
      reply: 'जवाब',
      replyValue: 'एक कार्य दिवस के भीतर',
      aria: 'संपर्क अनुभाग',
      startHere: 'यहाँ से शुरू करें',
      perPage: {
        about: {
          title: 'आइए बात करें।',
          text: 'एक बातचीत, कोई प्रतिबद्धता नहीं — और आपकी योजना पर एक ईमानदार राय।',
        },
        blog: {
          title: 'पढ़ना पहला कदम है।',
          text: 'जब आप अपने खास मामले का उत्तर चाहें, तो फ़िट चेक सिर्फ़ चार सवालों का है और सलाहकार एक दिन में जवाब देते हैं।',
        },
        cities: {
          title: 'पढ़ने से बेहतर है खुद देखना',
          text: 'हमारे टूर इस पृष्ठ के हर शहर को कवर करते हैं — और हमारे छात्र हर सितंबर वहीं नामांकन करते हैं।',
        },
        compare: {
          title: 'अभी भी सोच रहे हैं?',
          text: 'विवरण भेजें — अंक, बजट, उत्पाद, समय-सारणी। हम आपके मामले के हिसाब से फ़ैसला देते हैं, औसत मामले के हिसाब से नहीं।',
        },
        forAgents: {
          title: 'आपके छात्र एक असली चीन डेस्क के हक़दार हैं।',
          text: 'आप भी। एक संदेश से शुरुआत हो जाती है।',
        },
        guides: {
          title: 'गाइड सामान्य सवालों के जवाब देते हैं।',
          text: 'आपके सवाल खास हैं। उनके जवाब फ़िट चेक और सलाहकार डेस्क देते हैं।',
        },
        glossary: {
          title: 'शब्द आसान हैं। फ़ैसले मुश्किल।',
          text: 'जब आप शब्दावली को आवेदन में बदलने के लिए तैयार हों, तो फ़िट चेक चार सवालों का है और सलाहकार सिर्फ़ एक जवाब दूर हैं।',
        },
        faqHub: {
          title: 'आपका सवाल सूची में नहीं है?',
          text: 'सीधे पूछें — WhatsApp, ईमेल या संपर्क फ़ॉर्म। एक इंसान एक कार्य दिवस में जवाब देता है।',
        },
        pillarFaq: {
          title: 'अभी भी सवाल हैं?',
          text: 'डेस्क से सीधे पूछें — हम एक कार्य दिवस में जवाब देते हैं, सोमवार से शनिवार, 9:00–18:00 IST।',
        },
        universities: {
          title: 'पक्का नहीं कि कौन-सा विश्वविद्यालय फ़िट है?',
          text: 'एक पूछताछ भेजें। हम आपके अंक, बजट और पसंदीदा शहरों के आधार पर एक छोटी सूची बनाते हैं — ईमानदारी से, यहाँ तक कि जवाब अपेक्षा से सस्ता विश्वविद्यालय होने पर भी।',
        },
      },
    },
    carousel: {
      sectionAria: 'ग्राहकों की कहानियाँ',
      eyebrow: 'ग्राहकों की कहानियाँ',
      heading: 'उन लोगों से सुनें जिन्होंने कदम बढ़ाया',
      lede: 'हमारे साथ आए छात्र, यात्री और व्यापारी — उनके अपने शब्दों में।',
      carouselAria: 'प्रशंसापत्र कैरोसेल',
      prev: 'पिछला प्रशंसापत्र',
      next: 'अगला प्रशंसापत्र',
      goTo: 'प्रशंसापत्र {n} पर जाएँ',
      pause: 'प्रशंसापत्र रोटेशन रोकें',
      play: 'प्रशंसापत्र रोटेशन चलाएँ',
    },
    chat: {
      openAria: 'AI काउंसलर चैट खोलें',
      fabLabel: 'हमसे पूछें',
      assistantName: 'RouteToAbroad सहायक',
      assistantTag: 'Claude द्वारा संचालित · सेकंडों में जवाब',
      resetAria: 'नई बातचीत शुरू करें',
      closeAria: 'चैट बंद करें',
      tryAsking: 'पूछकर देखें',
      placeholder: 'प्रोग्राम, वीज़ा, यात्रा के बारे में पूछें…',
      sendAria: 'भेजें',
      greeting:
        'नमस्ते! मैं चीन में पढ़ाई, पूर्वी एशिया की यात्रा, या चीनी फ़ैक्ट्रियों से सोर्सिंग के बारे में सवालों के जवाब दे सकता हूँ। आप किस पर काम कर रहे हैं?',
      suggestions: [
        { label: 'चीन में MBBS', prompt: 'क्या मैं भारतीय छात्र के रूप में चीन में MBBS कर सकता हूँ?' },
        { label: 'चीन टूर की लागत', prompt: 'दो हफ़्ते का चीन टूर आम तौर पर कितना खर्च होता है?' },
        { label: 'सप्लायर की जाँच', prompt: 'अग्रिम भुगतान करने से पहले आप चीनी सप्लायर की जाँच कैसे करते हैं?' },
      ],
      retry: 'फिर से कोशिश करें',
      noReply: '(कोई जवाब नहीं — फिर से कोशिश करें या हमें WhatsApp करें)',
      unavailable: 'क्षमा करें — सहायक अभी उपलब्ध नहीं है।',
      typing: 'सहायक टाइप कर रहा है…',
    },
    language: { aria: 'भाषा' },
    articleCard: { more: 'पढ़ें' },
    breadcrumbsHome: 'होम',
    breadcrumbsAria: 'ब्रेडक्रंब नेविगेशन',
    guideDeskByline: 'RouteToAbroad डेस्क',
    hero: {
      corridorLabel: 'गलियारा',
      coordsNote: 'दो दफ़्तर। एक ज़िम्मेदार टीम।',
      asideAria: 'एक नज़र में',
      jumpsAria: 'इस पृष्ठ पर',
    },
    categories: { education: 'शिक्षा', tourism: 'पर्यटन', trade: 'व्यापार' },
    formFields: {
      fullName: 'पूरा नाम',
      email: 'ईमेल',
      phone: 'फ़ोन / WhatsApp',
      phoneHint: 'वैकल्पिक',
      message: 'आपका संदेश',
      selectPlaceholder: 'चुनें…',
      optionalHint: 'वैकल्पिक',
      companyName: 'कंपनी का नाम',
      contactPerson: 'संपर्क व्यक्ति',
      workEmail: 'कार्य ईमेल',
      educationLevel: 'वर्तमान स्तर',
      programmeInterest: 'रुचि का प्रोग्राम',
      targetIntake: 'लक्षित प्रवेश समय',
      latestMarks: 'नवीनतम अंक / CGPA',
      anythingElse: 'कुछ और जो हमें जानना चाहिए? ',
      destination: 'गंतव्य',
      tripType: 'यात्रा का प्रकार',
      travelDates: 'यात्रा की तारीखें',
      tradeDirection: 'व्यापार की दिशा',
      productCategory: 'उत्पाद श्रेणी',
      sourcingVolumes: 'आप क्या सोर्स कर रहे हैं, किस मात्रा में? ',
    },
    forms: {
      contact: {
        success: 'संदेश मिल गया! एक सलाहकार एक कार्य दिवस में जवाब देगा — सोमवार से शनिवार, 9:00–18:00 IST।',
        legend: 'मैं जानना चाहता हूँ',
        serviceAria: 'सेवा',
        cards: {
          education: 'शिक्षा',
          educationDesc: 'चीन में पढ़ाई',
          tourism: 'पर्यटन',
          tourismDesc: 'टूर और यात्रा',
          trade: 'व्यापार',
          tradeDesc: 'व्यापार और सोर्सिंग',
        },
        phName: 'आपका नाम',
        phMessage: 'आप क्या योजना बना रहे हैं? जितना चाहें उतना विस्तार से बताएं।',
        errors: {
          name: 'कृपया अपना नाम दर्ज करें।',
          email: 'कृपया एक मान्य ईमेल दर्ज करें।',
          phone: 'कृपया एक मान्य फ़ोन नंबर दर्ज करें।',
          message: 'कृपया एक छोटा संदेश लिखें।',
        },
        submit: 'संदेश भेजें',
        fineprint: 'हज़ार मील का सफ़र एक बातचीत से शुरू होता है।',
      },
      education: {
        success: 'आवेदन मिल गया! एक शिक्षा सलाहकार एक कार्य दिवस में आपको कॉल करेगा।',
        phName: 'जैसा आपके पासपोर्ट में है',
        phCgpa: 'जैसे 82% या 3.6/4',
        phNotes: 'छात्रवृत्ति के लक्ष्य, बजट, पसंदीदा शहर…',
        levels: ['स्कूल में (12वीं या उससे नीचे)', 'बैचलर (पूरा हुआ या चल रहा)', 'मास्टर या उससे ऊपर'],
        programmes: ['MBBS / मेडिसिन', 'इंजीनियरिंग और टेक्नोलॉजी', 'बिज़नेस और मैनेजमेंट', 'चीनी भाषा (HSK)', 'बैचलर (अन्य)', 'मास्टर / PhD (शोध)'],
        intakes: ['सितंबर 2026', 'मार्च 2027', 'बाद में / पक्का नहीं'],
        errors: {
          name: 'कृपया अपना नाम दर्ज करें।',
          email: 'कृपया एक मान्य ईमेल दर्ज करें।',
          phone: 'कृपया एक मान्य फ़ोन नंबर दर्ज करें।',
          level: 'कृपया अपना वर्तमान स्तर चुनें।',
          programme: 'कृपया एक प्रोग्राम चुनें।',
          intake: 'कृपया एक प्रवेश समय चुनें।',
        },
        submit: 'मुफ़्त मूल्यांकन के लिए आवेदन करें',
        fineprint: 'कोई प्रतिबद्धता नहीं। हम हाँ, शायद या नहीं में जवाब देते हैं — और आगे क्या करना है।',
      },
      tourism: {
        success: 'पूछताछ मिल गई! हमारी ट्रैवल डेस्क टीम एक कार्य दिवस में जवाब देगी।',
        phName: 'आपका नाम',
        phDates: 'जैसे अक्टूबर का मध्य, 9 दिन',
        phNotes: 'यात्री, आहार संबंधी ज़रूरतें, ज़रूर देखने लायक जगहें…',
        destinations: ['चीन', 'जापान', 'चीन + जापान', 'कहीं और / कस्टम'],
        tripTypes: ['सांस्कृतिक / निजी', 'समूह / शैक्षिक', 'व्यापार प्रतिनिधिमंडल'],
        errors: {
          name: 'कृपया अपना नाम दर्ज करें।',
          email: 'कृपया एक मान्य ईमेल दर्ज करें।',
          phone: 'कृपया एक मान्य फ़ोन नंबर दर्ज करें।',
          destination: 'कृपया एक गंतव्य चुनें।',
          tripType: 'कृपया यात्रा का प्रकार चुनें।',
        },
        submit: 'मेरी यात्रा की योजना बनाएँ',
        fineprint: 'आपके कुछ भुगतान से पहले हम एक मुफ़्त दिन-वार यात्रा कार्यक्रम बनाते हैं।',
      },
      trade: {
        success: 'मिल गया! हमारी ट्रेड डेस्क टीम अगले कदमों के साथ एक कार्य दिवस में जवाब देगी।',
        phCompany: 'आपकी कंपनी',
        phName: 'नाम',
        phNotes: 'जैसे LED ड्राइवर, ~5,000 यूनिट/माह, लक्ष्य FOB…',
        directions: ['चीन से भारत को आयात', 'भारत से चीन को निर्यात', 'दोनों / अन्वेषण में'],
        categories: ['इलेक्ट्रॉनिक्स और कंपोनेंट्स', 'औद्योगिक मशीनरी', 'टेक्सटाइल और परिधान', 'उपभोक्ता वस्तुएँ', 'अन्य'],
        errors: {
          company: 'कृपया अपनी कंपनी का नाम दर्ज करें।',
          name: 'कृपया अपना नाम दर्ज करें।',
          email: 'कृपया एक मान्य ईमेल दर्ज करें।',
          phone: 'कृपया एक मान्य फ़ोन नंबर दर्ज करें।',
          direction: 'कृपया व्यापार की दिशा चुनें।',
          category: 'कृपया एक श्रेणी चुनें।',
        },
        submit: 'ट्रेड डेस्क से बात करें',
        fineprint: 'सफलता शुल्क मॉडल: आप तब भुगतान करते हैं जब माल शिप होता है। ऑडिट लागत पहले से बताई जाती है।',
      },
    },
    form: {
      success: 'संदेश मिल गया! एक सलाहकार एक कार्य दिवस में जवाब देगा।',
      fail: `फ़ॉर्म भेजने में समस्या हुई। कृपया फिर से कोशिश करें, या हमें WhatsApp ${SITE.phoneIndia} पर मैसेज करें।`,
      network: 'नेटवर्क त्रुटि — कृपया अपना कनेक्शन जाँचें और फिर से कोशिश करें।',
    },
    hud: { tagline: 'शिक्षा · पर्यटन · व्यापार — एक गलियारा', scroll: 'स्क्रॉल करें', loaderWords: ['चुनें', 'आवेदन', 'नामांकन'] },
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
    hoursValue: SITE.hours,
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
  articleCard: { more: 'Read' },
  breadcrumbsHome: 'Home',
  breadcrumbsAria: 'Breadcrumb',
  guideDeskByline: 'RouteToAbroad Desk',
  hero: {
    corridorLabel: 'The corridor',
    coordsNote: 'Two offices. One accountable team.',
    asideAria: 'At a glance',
    jumpsAria: 'On this page',
  },
  categories: { education: 'Education', tourism: 'Tourism', trade: 'Trade' },
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
