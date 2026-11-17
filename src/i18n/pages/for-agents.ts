/**
 * For Agents page copy — every user-visible string on the shared
 * ForAgentsPage component, keyed by locale. English is the source of truth;
 * zh/fr/ar/es are machine-assisted translations that follow the terminology
 * already established in src/i18n/ui.ts and still need native-speaker review.
 *
 * Facts (email address, WhatsApp link, phone number) are never inlined here —
 * the component reads them from src/lib/site.ts. Strings that carry a phone
 * number use a `{phone}` placeholder the component replaces with
 * SITE.phoneIndia.
 *
 * `npm run check` enforces key parity: every locale must implement the full
 * ForAgentsStrings interface, so a key added to `en` breaks the build until
 * all four translations carry it too.
 */
import type { Locale } from '../../lib/i18n';

export interface ForAgentsStrings {
  /** <title> and meta description (must stay unique per locale — validator). */
  meta: { title: string; description: string };
  /** Breadcrumb label for /for-agents. */
  crumb: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  /** "What you get" column — strong title + supporting paragraph per item. */
  get: {
    title: string;
    items: { title: string; text: string }[];
  };
  /** "What you send" simple list. */
  send: {
    title: string;
    items: string[];
  };
  /** "What you don't need to do" simple list. */
  avoid: {
    title: string;
    items: string[];
  };
  /** "What we will not do" list + the who-this-is-for note card. */
  never: {
    title: string;
    items: string[];
  };
  note: {
    eyebrow: string;
    text: string;
  };
  /** "Apply to partner" CTA card. Hrefs stay in the component. */
  cta: {
    title: string;
    text: string;
    email: string;
    /** Carries a {phone} placeholder replaced with SITE.phoneIndia. */
    whatsapp: string;
  };
  /** "Agent portal: coming soon" fineprint (preserved for i18n parity). */
  portal: string;
  tiers: {
    eyebrow: string;
    title: string;
    lede: string;
    items: {
      name: string;
      badge: string;
      summary: string;
      bullets: string[];
    }[];
  };
  onboarding: {
    eyebrow: string;
    title: string;
    lede: string;
    fields: {
      agencyName: string;
      contactName: string;
      email: string;
      phone: string;
      country: string;
      tier: string;
      tierOptions: string[];
      volume: string;
      volumeOptions: string[];
      notes: string;
      notesPlaceholder: string;
    };
    submit: string;
    success: string;
    fineprint: string;
  };
}

export const FOR_AGENTS: Record<Locale, ForAgentsStrings> = {
  en: {
    meta: {
      title: 'For Agents — Your China Desk, White-Labelled',
      description:
        'Already counselling students in the GCC, Africa or India? RouteToAbroad is the China desk behind you: co-branded pages, transparent file status, honest scholarship communication.',
    },
    crumb: 'For Agents',
    hero: {
      eyebrow: 'For agents',
      title: 'Keep your students. We run China.',
      lede: 'If you already counsel in the GCC, Africa, India or another region, RouteToAbroad is the China desk behind your desk — co-branded, transparent, and honest about what we can and cannot do.',
    },
    get: {
      title: 'What you get',
      items: [
        {
          title: 'Co-branded materials',
          text: 'Pages and offer documents that carry your name and number — your client stays your client.',
        },
        {
          title: 'File status you can repeat',
          text: 'Application, JW202 and visa milestones visible to you without chasing us across time zones.',
        },
        {
          title: 'Scholarship honesty',
          text: 'We tell your student what is real before you have to. No invented awards for you to defend later.',
        },
        {
          title: 'On-ground arrival support',
          text: 'Airport, dorm, residence permit, SIM, bank — handled by our China team, reflected in your service.',
        },
      ],
    },
    send: {
      title: 'What you send',
      items: [
        'Student profile: qualification, marks, field, target intake',
        'Scanned passport and transcripts when ready',
        'Budget ceiling and scholarship expectations, stated plainly',
        'One signed co-operation note — no exclusivity traps',
      ],
    },
    avoid: {
      title: "What you don't need to do",
      items: [
        'Learn every provincial rule or JW202 timeline',
        'Promise universities you cannot name',
        'File a student we have not shortlisted',
        'Explain a scholarship result you did not create',
      ],
    },
    never: {
      title: 'What we will not do',
      items: [
        'Hide a language requirement to close a file',
        'Invent a scholarship result',
        'Run tourism or trade on the side of your offer letter',
        'Market to your students behind your back',
      ],
    },
    note: {
      eyebrow: 'Who this is for',
      text: 'Counsellors and study-abroad offices with students who want China — especially in the GCC and Africa, where our partner network is active and growing. An India desk is being built now.',
    },
    cta: {
      title: 'Apply to partner',
      text: 'Send your office name, region and rough annual student volume. We reply with a partnership note and a working session — usually within two working days.',
      email: 'Email the partnerships desk',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'Agent portal: coming soon',
    tiers: {
      eyebrow: 'Partnership tiers',
      title: 'Three B2B partnership tracks',
      lede: 'Choose the track that fits your agency volume and client base — or combine education and trade under one co-operation note.',
      items: [
        {
          name: 'Education Admissions Partner',
          badge: 'Tier 01 · Degree & MBBS',
          summary: 'For overseas education consultancies placing degree, MBBS, Engineering, and CSC scholarship candidates across China.',
          bullets: [
            'Shortlist verification & direct university submission',
            'Co-branded offer tracking & JW201/JW202 milestones',
            'Airport pickup, dorm check-in & residence permit support',
          ],
        },
        {
          name: 'Chinese Language & Diploma Track',
          badge: 'Tier 02 · HSK & Vocational',
          summary: 'For language centres, high schools, and pathway counsellors sending 1-semester, 1-year HSK, or diploma cohorts.',
          bullets: [
            'X2 (<180d) and X1 (>180d) language & diploma placements',
            'Structured HSK 1–6 progression into degree programmes',
            'Group arrival coordination for 5+ student intakes',
          ],
        },
        {
          name: 'Canton Fair & Trade Delegation Partner',
          badge: 'Tier 03 · Business & Trade',
          summary: 'For chambers of commerce, travel agencies, and B2B facilitators running buyer delegations to Guangzhou, Yiwu, and Shanghai.',
          bullets: [
            'M/F business visa invitation & delegation scheduling',
            'Bilingual sourcing interpreters & factory audit support',
            'Turnkey Canton Fair hotel, HSR & supplier coordination',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'B2B partner onboarding',
      title: 'Apply to become an active partner',
      lede: 'Submit your agency details below. Our B2B desk reviews every onboarding request within 24 business hours.',
      fields: {
        agencyName: 'Agency / Company Name',
        contactName: 'Primary Contact Person',
        email: 'Business Email',
        phone: 'WhatsApp / Phone Number',
        country: 'Operating Country / Region',
        tier: 'Partnership Track',
        tierOptions: [
          'Education Admissions Partner',
          'Chinese Language & Diploma Track',
          'Canton Fair & Trade Delegation Partner',
          'Multi-track (Education + Trade)',
        ],
        volume: 'Estimated Annual Volume',
        volumeOptions: ['1–10 clients / yr', '11–30 clients / yr', '31–75 clients / yr', '75+ clients / yr'],
        notes: 'Target Programmes or Delegation Needs',
        notesPlaceholder: 'Share your primary student markets, degree tracks, or upcoming trade delegation dates…',
      },
      submit: 'Submit Partner Application',
      success: 'Partner onboarding request received — our B2B desk will reply within 24 hours with next steps.',
      fineprint: 'Non-exclusive co-operation. Your client relationships remain strictly yours.',
    },
  },

  zh: {
    meta: {
      title: '面向代理 — 你的中国事务团队，白标服务',
      description:
        '已经在 GCC、非洲或印度做留学咨询？RouteToAbroad 就是你背后的中国事务团队：联合品牌页面、透明的文件进度、坦诚的奖学金沟通。',
    },
    crumb: '面向代理',
    hero: {
      eyebrow: '面向代理',
      title: '学生留给你，中国交给我们。',
      lede: '如果你已经在 GCC、非洲、印度或其他地区做留学咨询，RouteToAbroad 就是你办公桌背后的中国事务团队——联合品牌、过程透明，并坦诚说明我们能做与不能做的事。',
    },
    get: {
      title: '你能得到什么',
      items: [
        {
          title: '联合品牌材料',
          text: '印有你名称与联系方式的页面和报价文件——你的客户始终是你的客户。',
        },
        {
          title: '随时可查的文件进度',
          text: '申请、JW202 和签证节点对你可见，无需跨时区催问我们。',
        },
        {
          title: '奖学金坦诚沟通',
          text: '在你需要开口之前，我们先告诉你的学生什么是真实的。不会有让你日后辩解的虚构奖项。',
        },
        {
          title: '落地支持',
          text: '机场、宿舍、居留许可、电话卡、银行——由中国团队负责，并体现在你的服务中。',
        },
      ],
    },
    send: {
      title: '你需要提供什么',
      items: [
        '学生档案：学历、成绩、专业方向、目标入学时间',
        '就绪后的护照和成绩单扫描件',
        '明确的预算上限和奖学金预期',
        '一份签署的合作备忘——没有排他陷阱',
      ],
    },
    avoid: {
      title: '你不需要做什么',
      items: [
        '熟记每个省份的规定或 JW202 时间线',
        '承诺你还叫不出名字的大学',
        '提交我们尚未筛选过的学生',
        '解释一个不是你产出的奖学金结果',
      ],
    },
    never: {
      title: '我们不会做什么',
      items: [
        '为促成签约隐瞒语言要求',
        '编造奖学金结果',
        '在你的录取信之外夹带旅游或贸易业务',
        '绕过你向你的学生营销',
      ],
    },
    note: {
      eyebrow: '适合谁',
      text: '希望学生前往中国的顾问和留学办公室——尤其是 GCC 和非洲地区，我们的合作网络在那里活跃并持续增长。印度事务组正在建设中。',
    },
    cta: {
      title: '申请成为合作伙伴',
      text: '发送你的机构名称、地区和大致年送生量。我们回复一份合作说明并安排一次工作会谈——通常在两个工作日内。',
      email: '发邮件给合作事务组',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: '代理门户：即将上线',
    tiers: {
      eyebrow: '合作层级',
      title: '三大 B2B 合作轨道',
      lede: '根据贵机构的业务规模与客户群选择对应轨道——也可在同一份合作备忘下同时覆盖教育与商贸。',
      items: [
        {
          name: '学历招生合作伙伴',
          badge: 'Tier 01 · 学位与 MBBS',
          summary: '面向输送中国本科、硕博、MBBS、工程及 CSC 奖学金申请人的留学机构。',
          bullets: [
            '选校清单核验与院校直报',
            '联合品牌进度跟踪与 JW201/JW202 节点同步',
            '接机、宿舍入住与居留许可落地支持',
          ],
        },
        {
          name: '汉语进修与大专轨道',
          badge: 'Tier 02 · HSK 与职业教育',
          summary: '面向输送一学期、一年期汉语进修或大专项目生源的语言中心与升学顾问。',
          bullets: [
            'X2（≤180天）与 X1（>180天）语言及大专安置',
            'HSK 1–6 衔接本科或硕士的路径规划',
            '5 人以上团体接机与集中报到协调',
          ],
        },
        {
          name: '广交会与商贸代表团合作',
          badge: 'Tier 03 · 商务与贸易',
          summary: '面向组织赴广州、义乌、上海采购团的商会、旅行社与 B2B 服务机构。',
          bullets: [
            'M/F 商务签证邀请函与代表团行程安排',
            '双语采购翻译与工厂实地验厂支持',
            '广交会酒店、高铁与供应商对接一站式协调',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'B2B 合作伙伴入驻',
      title: '在线提交合作入驻申请',
      lede: '填写以下机构信息，我们的 B2B 团队将在 24 个工作小时内回复审核结果与对接方式。',
      fields: {
        agencyName: '机构 / 公司名称',
        contactName: '主要联系人',
        email: '商务邮箱',
        phone: 'WhatsApp / 联系电话',
        country: '所在国家 / 地区',
        tier: '合作轨道',
        tierOptions: [
          '学历招生合作伙伴',
          '汉语进修与大专轨道',
          '广交会与商贸代表团合作',
          '综合轨道（教育 + 商贸）',
        ],
        volume: '预计年输送规模',
        volumeOptions: ['1–10 人/年', '11–30 人/年', '31–75 人/年', '75+ 人/年'],
        notes: '目标项目或代表团需求',
        notesPlaceholder: '请简述您的生源市场、目标专业或近期商贸考察计划……',
      },
      submit: '提交合作入驻申请',
      success: '已收到您的合作入驻申请——我们的 B2B 团队将在 24 小时内与您联系。',
      fineprint: '非排他性合作。您的客户关系始终归您所有。',
    },
  },

  fr: {
    meta: {
      title: 'Pour les agents — Votre cellule Chine, en marque blanche',
      description:
        'Vous conseillez déjà des étudiants au GCC, en Afrique ou en Inde ? RouteToAbroad est la cellule Chine derrière vous : pages co-brandées, statut des dossiers transparent, communication honnête sur les bourses.',
    },
    crumb: 'Pour les agents',
    hero: {
      eyebrow: 'Pour les agents',
      title: 'Gardez vos étudiants. Nous gérons la Chine.',
      lede: 'Si vous conseillez déjà au GCC, en Afrique, en Inde ou dans une autre région, RouteToAbroad est la cellule Chine derrière votre bureau — co-brandée, transparente et honnête sur ce que nous pouvons et ne pouvons pas faire.',
    },
    get: {
      title: 'Ce que vous obtenez',
      items: [
        {
          title: 'Des supports co-brandés',
          text: 'Des pages et des documents d’offre à votre nom et à votre numéro — votre client reste votre client.',
        },
        {
          title: 'Un statut des dossiers que vous pouvez relayer',
          text: 'Étapes de candidature, JW202 et visa visibles sans nous courir après à travers les fuseaux horaires.',
        },
        {
          title: 'Une honnêteté sur les bourses',
          text: 'Nous disons à votre étudiant ce qui est réel avant que vous ayez à le faire. Aucune bourse inventée à défendre plus tard.',
        },
        {
          title: 'Un accueil sur place',
          text: 'Aéroport, dortoir, permis de séjour, SIM, banque — pris en charge par notre équipe en Chine et reflétés dans votre service.',
        },
      ],
    },
    send: {
      title: 'Ce que vous envoyez',
      items: [
        'Profil étudiant : diplôme, notes, filière, intake visé',
        'Passeport et relevés de notes scannés dès qu’ils sont prêts',
        'Plafond de budget et attentes de bourse, énoncés clairement',
        'Une note de coopération signée — aucun piège d’exclusivité',
      ],
    },
    avoid: {
      title: 'Ce que vous n’avez pas à faire',
      items: [
        'Apprendre chaque règle provinciale ou calendrier JW202',
        'Promettre des universités que vous ne pouvez pas nommer',
        'Monter le dossier d’un étudiant que nous n’avons pas présélectionné',
        'Expliquer un résultat de bourse que vous n’avez pas créé',
      ],
    },
    never: {
      title: 'Ce que nous ne ferons pas',
      items: [
        'Cacher une exigence linguistique pour conclure un dossier',
        'Inventer un résultat de bourse',
        'Faire du tourisme ou du commerce en marge de votre lettre d’admission',
        'Faire du marketing auprès de vos étudiants dans votre dos',
      ],
    },
    note: {
      eyebrow: 'Pour qui',
      text: 'Conseillers et bureaux d’études à l’étranger dont les étudiants veulent la Chine — en particulier au GCC et en Afrique, où notre réseau de partenaires est actif et en croissance. Une cellule Inde est en cours de construction.',
    },
    cta: {
      title: 'Candidater pour un partenariat',
      text: 'Envoyez le nom de votre bureau, votre région et votre volume annuel approximatif d’étudiants. Nous répondons avec une note de partenariat et une session de travail — généralement sous deux jours ouvrés.',
      email: 'Écrire au bureau des partenariats',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'Portail agents : bientôt disponible',
    tiers: {
      eyebrow: 'Niveaux de partenariat',
      title: 'Trois programmes B2B',
      lede: 'Choisissez la filière adaptée à votre volume et à votre clientèle — ou combinez éducation et commerce sous un même accord.',
      items: [
        {
          name: 'Partenaire Admissions Universitaires',
          badge: 'Tier 01 · Diplômes & MBBS',
          summary: 'Pour les cabinets plaçant des candidats en Licence, Master, PhD, MBBS, ingénierie et bourses CSC en Chine.',
          bullets: [
            'Vérification de présélection et dépôt direct universitaire',
            'Suivi co-marqué et jalons JW201/JW202 transparents',
            'Accueil aéroport, dortoir et titre de séjour sur place',
          ],
        },
        {
          name: 'Filière Langue Chinoise & Diplôme',
          badge: 'Tier 02 · HSK & Technique',
          summary: 'Pour les centres de langues et conseillers envoyant des cohortes HSK semestrielles, annuelles ou diplômantes.',
          bullets: [
            'Placements langue et diplôme sous visas X2 (<180j) et X1 (>180j)',
            'Progression structurée HSK 1–6 vers les cursus diplômants',
            'Coordination d’arrivée groupée dès 5 étudiants',
          ],
        },
        {
          name: 'Partenaire Foire de Canton & Délégations',
          badge: 'Tier 03 · Commerce & B2B',
          summary: 'Pour les chambres de commerce et organisateurs menant des délégations d’acheteurs à Guangzhou, Yiwu et Shanghai.',
          bullets: [
            'Invitations visa M/F et planification des délégations',
            'Interprètes bilingues et audits d’usines sur site',
            'Hôtels Foire de Canton, TGV et coordination fournisseurs',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'Intégration partenaire B2B',
      title: 'Demander votre accréditation partenaire',
      lede: 'Renseignez les coordonnées de votre agence ci-dessous. Notre équipe B2B répond sous 24 heures ouvrées.',
      fields: {
        agencyName: 'Nom de l’agence / société',
        contactName: 'Contact principal',
        email: 'E-mail professionnel',
        phone: 'WhatsApp / Téléphone',
        country: 'Pays / Région d’activité',
        tier: 'Programme de partenariat',
        tierOptions: [
          'Partenaire Admissions Universitaires',
          'Filière Langue Chinoise & Diplôme',
          'Partenaire Foire de Canton & Délégations',
          'Multi-filières (Éducation + Commerce)',
        ],
        volume: 'Volume annuel estimé',
        volumeOptions: ['1–10 clients / an', '11–30 clients / an', '31–75 clients / an', '75+ clients / an'],
        notes: 'Programmes ciblés ou besoins de délégation',
        notesPlaceholder: 'Précisez vos marchés, filières visées ou dates de délégation…',
      },
      submit: 'Envoyer la demande partenaire',
      success: 'Demande d’intégration B2B reçue — notre équipe vous répondra sous 24 heures.',
      fineprint: 'Coopération non exclusive. Vos relations clients restent strictement les vôtres.',
    },
  },

  ar: {
    meta: {
      title: 'للمندوبين — خليتك الصينية بعلامتك الخاصة',
      description:
        'تستشير الطلاب بالفعل في دول الخليج أو أفريقيا أو الهند؟ RouteToAbroad هي الخلية الصينية خلفك: صفحات بعلامة مشتركة، وحالة ملفات شفافة، وتواصل صادق حول المنح.',
    },
    crumb: 'للمندوبين',
    hero: {
      eyebrow: 'للمندوبين',
      title: 'احتفظ بطلابك. نحن ندير الصين.',
      lede: 'إذا كنت تستشير بالفعل في دول الخليج أو أفريقيا أو الهند أو منطقة أخرى، فإن RouteToAbroad هي الخلية الصينية خلف مكتبك — بعلامة مشتركة وشفافية وصدق حول ما يمكننا وما لا يمكننا فعله.',
    },
    get: {
      title: 'ما الذي تحصل عليه',
      items: [
        {
          title: 'مواد بعلامة مشتركة',
          text: 'صفحات ووثائق عروض تحمل اسمك ورقمك — عميلك يبقى عميلك.',
        },
        {
          title: 'حالة ملفات يمكنك إعادة ذكرها',
          text: 'محطات التقديم وJW202 والتأشيرة مرئية لك دون مطاردتنا عبر مناطق زمنية.',
        },
        {
          title: 'صدق في المنح',
          text: 'نخبر طالبك ما هو حقيقي قبل أن تضطر أنت. لا جوائز مختلقة لتدافع عنها لاحقًا.',
        },
        {
          title: 'دعم وصول على الأرض',
          text: 'المطار والسكن وتصريح الإقامة وشريحة الهاتف والبنك — يتكفل بها فريقنا في الصين، وتنعكس في خدمتك.',
        },
      ],
    },
    send: {
      title: 'ما الذي ترسله',
      items: [
        'ملف الطالب: المؤهل، الدرجات، التخصص، وقت الالتحاق المستهدف',
        'جواز السفر وكشوف الدرجات ممسوحة عندما تجهز',
        'سقف الميزانية وتوقعات المنح، معلنة بوضوح',
        'مذكرة تعاون واحدة موقعة — دون شروط حصرية',
      ],
    },
    avoid: {
      title: 'ما الذي لا تحتاج فعله',
      items: [
        'حفظ قواعد كل مقاطعة أو الجدول الزمني لـ JW202',
        'الوعد بجامعات لا تستطيع تسميتها',
        'إيداع ملف طالب لم نُقصِ قائمته بعد',
        'شرح نتيجة منح لم تصنعها',
      ],
    },
    never: {
      title: 'ما الذي لن نفعله',
      items: [
        'إخفاء متطلبات لغة لإغلاق ملف',
        'اختلاق نتيجة منحة',
        'تشغيل السياحة أو التجارة على هامش خطاب قبولك',
        'التسويق لطلابك من خلف ظهرك',
      ],
    },
    note: {
      eyebrow: 'لمن هذا',
      text: 'المستشارون ومكاتب الدراسة في الخارج الذين لديهم طلاب يريدون الصين — خصوصًا في دول الخليج وأفريقيا، حيث شبكة شركائنا نشطة ومتنامية. مكتب هندي قيد الإنشاء الآن.',
    },
    cta: {
      title: 'تقدّم للشراكة',
      text: 'أرسل اسم مكتبك ومنطقتك وحجم الطلاب السنوي التقريبي. نرد بمذكرة شراكة وجلسة عمل — عادةً خلال يومي عمل.',
      email: 'راسل مكتب الشراكات',
      whatsapp: 'واتساب {phone}',
    },
    portal: 'بوابة المندوبين: قريبًا',
    tiers: {
      eyebrow: 'فئات الشراكة',
      title: 'ثلاثة مسارات للشراكة B2B',
      lede: 'اختر المسار المناسب لحجم وكالتك وعملائك — أو اجمع بين التعليم والتجارة تحت مذكرة تعاون واحدة.',
      items: [
        {
          name: 'شريك القبول الجامعي',
          badge: 'Tier 01 · الدرجات و MBBS',
          summary: 'لمكاتب الاستشارات التعليمية التي ترسل طلاب الطب MBBS والهندسة والأعمال ومنح CSC إلى الصين.',
          bullets: [
            'تدقيق قائمة الجامعات والتقديم المباشر للجامعة',
            'تتبع مشترك للهوية ومراحل JW201/JW202 بوضوح',
            'استقبال المطار والسكن الجامعي وإصدار الإقامة',
          ],
        },
        {
          name: 'مسار اللغة الصينية والدبلوم',
          badge: 'Tier 02 · HSK والدبلوم',
          summary: 'لمراكز اللغات والمستشارين لإرسال مجموعات دراسة اللغة الصينية HSK أو الدبلوم المهني.',
          bullets: [
            'قبول برامج اللغة والدبلوم لتأشيرات X2 و X1',
            'تدرج منظم من HSK 1–6 نحو البرامج الجامعية',
            'تنسيق وصول المجموعات لـ 5 طلاب فأكثر',
          ],
        },
        {
          name: 'شريك معرض كانتون والوفود التجارية',
          badge: 'Tier 03 · الأعمال والتجارة',
          summary: 'لغرف التجارة ومنظمي الوفود التجارية المتجهة إلى غوانغتشو وييوو وشنغهاي.',
          bullets: [
            'خطابات دعوة تأشيرة M/F وجدولة الوفود',
            'مترجمو توريد ثنائيو اللغة وتدقيق المصانع',
            'تنسيق فنادق معرض كانتون والقطارات والموردين',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'انضمام شركاء B2B',
      title: 'تقدّم بطلب شراكة نشطة',
      lede: 'أرسل بيانات وكالتك أدناه، وسيراجع فريق B2B طلبك خلال 24 ساعة عمل.',
      fields: {
        agencyName: 'اسم الوكالة / الشركة',
        contactName: 'اسم مسؤول التواصل',
        email: 'البريد الإلكتروني الرسمي',
        phone: 'واتساب / رقم الهاتف',
        country: 'الدولة / منطقة العمل',
        tier: 'مسار الشراكة',
        tierOptions: [
          'شريك القبول الجامعي',
          'مسار اللغة الصينية والدبلوم',
          'شريك معرض كانتون والوفود التجارية',
          'مسار مزدوج (تعليم + تجارة)',
        ],
        volume: 'الحجم السنوي المتوقع',
        volumeOptions: ['1–10 عملاء/سنة', '11–30 عميلاً/سنة', '31–75 عميلاً/سنة', '75+ عميلاً/سنة'],
        notes: 'التخصصات المستهدفة أو احتياجات الوفد',
        notesPlaceholder: 'اذكر أسواقك الرئيسية أو التخصصات أو مواعيد الوفود التجارية…',
      },
      submit: 'إرسال طلب الشراكة',
      success: 'تم استلام طلب الشراكة — سيتواصل معك فريق B2B خلال 24 ساعة.',
      fineprint: 'تعاون غير حصري. تبقى علاقاتك مع عملائك ملكاً لك بالكامل.',
    },
  },

  es: {
    meta: {
      title: 'Para agentes — Su mesa de China, con marca blanca',
      description:
        '¿Ya asesora estudiantes en el GCC, África o India? RouteToAbroad es la mesa de China detrás de usted: páginas con marca compartida, estado de expedientes transparente y comunicación honesta sobre becas.',
    },
    crumb: 'Para agentes',
    hero: {
      eyebrow: 'Para agentes',
      title: 'Quédese con sus estudiantes. Nosotros manejamos China.',
      lede: 'Si ya asesora en el GCC, África, India u otra región, RouteToAbroad es la mesa de China detrás de su mesa — con marca compartida, transparente y honesta sobre lo que podemos y no podemos hacer.',
    },
    get: {
      title: 'Lo que obtiene',
      items: [
        {
          title: 'Materiales con marca compartida',
          text: 'Páginas y documentos de oferta con su nombre y su número — su cliente sigue siendo su cliente.',
        },
        {
          title: 'Estado de expedientes que puede repetir',
          text: 'Hitos de solicitud, JW202 y visa visibles para usted sin perseguirnos entre zonas horarias.',
        },
        {
          title: 'Honestidad con las becas',
          text: 'Le decimos a su estudiante qué es real antes de que tenga que hacerlo. Ningún premio inventado que defender después.',
        },
        {
          title: 'Apoyo de llegada en el terreno',
          text: 'Aeropuerto, residencia, permiso de estancia, SIM, banco — gestionado por nuestro equipo en China y reflejado en su servicio.',
        },
      ],
    },
    send: {
      title: 'Lo que envía',
      items: [
        'Perfil del estudiante: formación, calificaciones, área, intake objetivo',
        'Pasaporte y expedientes escaneados cuando estén listos',
        'Techo de presupuesto y expectativas de beca, declarados con claridad',
        'Una nota de cooperación firmada — sin trampas de exclusividad',
      ],
    },
    avoid: {
      title: 'Lo que no necesita hacer',
      items: [
        'Aprender cada regla provincial o cada calendario del JW202',
        'Prometer universidades que no puede nombrar',
        'Enviar el expediente de un estudiante que no hayamos preseleccionado',
        'Explicar un resultado de beca que no creó',
      ],
    },
    never: {
      title: 'Lo que no haremos',
      items: [
        'Ocultar un requisito de idioma para cerrar un expediente',
        'Inventar un resultado de beca',
        'Operar turismo o comercio al margen de su carta de admisión',
        'Hacer marketing a sus estudiantes a sus espaldas',
      ],
    },
    note: {
      eyebrow: 'Para quién es',
      text: 'Consejeros y oficinas de estudio en el exterior con estudiantes que quieren China — especialmente en el GCC y África, donde nuestra red de socios está activa y en crecimiento. Una mesa de India se está construyendo ahora.',
    },
    cta: {
      title: 'Solicite ser socio',
      text: 'Envíe el nombre de su oficina, su región y un volumen anual aproximado de estudiantes. Respondemos con una nota de colaboración y una sesión de trabajo — normalmente dentro de dos días hábiles.',
      email: 'Escriba a la mesa de alianzas',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'Portal de agentes: próximamente',
    tiers: {
      eyebrow: 'Niveles de alianza',
      title: 'Tres vías de colaboración B2B',
      lede: 'Elige la vía acorde a tu volumen y cartera — o combina educación y comercio bajo una sola nota de cooperación.',
      items: [
        {
          name: 'Socio de Admisiones Universitarias',
          badge: 'Tier 01 · Grados y MBBS',
          summary: 'Para agencias educativas que colocan estudiantes en MBBS, ingeniería, negocios y becas CSC en China.',
          bullets: [
            'Validación de preselección y envío directo a universidades',
            'Seguimiento de marca compartida e hitos JW201/JW202',
            'Recogida en aeropuerto, residencia y permiso de estancia',
          ],
        },
        {
          name: 'Vía de Idioma Chino y Diploma',
          badge: 'Tier 02 · HSK y Técnico',
          summary: 'Para centros de idiomas y orientadores que envían grupos de HSK semestral, anual o diploma técnico.',
          bullets: [
            'Colocaciones de idioma y diploma para visados X2 y X1',
            'Progresión estructurada HSK 1–6 hacia carreras universitarias',
            'Coordinación de llegada grupal desde 5 estudiantes',
          ],
        },
        {
          name: 'Socio Feria de Cantón y Delegaciones',
          badge: 'Tier 03 · Comercio y B2B',
          summary: 'Para cámaras de comercio y operadores que organizan delegaciones de compradores a Guangzhou, Yiwu y Shanghái.',
          bullets: [
            'Invitaciones de visado M/F y agenda de delegación',
            'Intérpretes bilingües y auditoría de fábricas in situ',
            'Hoteles de Feria de Cantón, trenes y coordinación con proveedores',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'Alta de socios B2B',
      title: 'Solicita tu acreditación como socio',
      lede: 'Envía los datos de tu agencia abajo. Nuestro equipo B2B responde en un máximo de 24 horas hábiles.',
      fields: {
        agencyName: 'Nombre de la agencia / empresa',
        contactName: 'Persona de contacto principal',
        email: 'Correo corporativo',
        phone: 'WhatsApp / Teléfono',
        country: 'País / Región de operación',
        tier: 'Vía de colaboración',
        tierOptions: [
          'Socio de Admisiones Universitarias',
          'Vía de Idioma Chino y Diploma',
          'Socio Feria de Cantón y Delegaciones',
          'Mixto (Educación + Comercio)',
        ],
        volume: 'Volumen anual estimado',
        volumeOptions: ['1–10 clientes / año', '11–30 clientes / año', '31–75 clientes / año', '75+ clientes / año'],
        notes: 'Programas objetivo o fechas de delegación',
        notesPlaceholder: 'Indica tus mercados principales, carreras o próximas fechas de viaje…',
      },
      submit: 'Enviar solicitud de socio',
      success: 'Solicitud B2B recibida — nuestro equipo responderá en 24 horas con los siguientes pasos.',
      fineprint: 'Cooperación no exclusiva. Tus clientes siguen siendo exclusivamente tuyos.',
    },
  },

  de: {
    meta: {
      title: 'Für Agenturen — Ihr China-Desk, weiß gelabelt',
      description:
        'Beraten Sie bereits Studierende in den GCC-Ländern, Afrika oder Indien? RouteToAbroad ist der China-Desk hinter Ihnen: Co-Branding-Seiten, transparente Aktenstände, ehrliche Stipendien-Kommunikation.',
    },
    crumb: 'Für Agenturen',
    hero: {
      eyebrow: 'Für Agenturen',
      title: 'Behalten Sie Ihre Studierenden. Wir übernehmen China.',
      lede: 'Wenn Sie bereits in den GCC-Ländern, Afrika, Indien oder einer anderen Region beraten, ist RouteToAbroad der China-Desk hinter Ihrem Schreibtisch — co-gebrandet, transparent und ehrlich darüber, was wir können und was nicht.',
    },
    get: {
      title: 'Was Sie erhalten',
      items: [
        {
          title: 'Co-gebrandete Materialien',
          text: 'Seiten und Angebotsdokumente mit Ihrem Namen und Ihrer Nummer — Ihr Kunde bleibt Ihr Kunde.',
        },
        {
          title: 'Aktenstände, die Sie weitergeben können',
          text: 'Bewerbungs-, JW202- und Visa-Meilensteine für Sie sichtbar — ohne uns über Zeitzonen hinweg jagen zu müssen.',
        },
        {
          title: 'Stipendien-Ehrlichkeit',
          text: 'Wir sagen Ihrem Studierenden, was real ist, bevor Sie es müssen. Keine erfundenen Auszeichnungen, die Sie später verteidigen müssen.',
        },
        {
          title: 'Ankunftssupport vor Ort',
          text: 'Flughafen, Wohnheim, Aufenthaltserlaubnis, SIM, Bank — von unserem China-Team erledigt und in Ihrem Service sichtbar.',
        },
      ],
    },
    send: {
      title: 'Was Sie senden',
      items: [
        'Studierendenprofil: Qualifikation, Noten, Fachrichtung, angestrebter Studienbeginn',
        'Gescannter Reisepass und Zeugnisse, sobald bereit',
        'Budgetobergrenze und Stipendienerwartungen, klar benannt',
        'Eine unterschriebene Kooperationsnotiz — keine Exklusivitätsfallen',
      ],
    },
    avoid: {
      title: 'Was Sie nicht tun müssen',
      items: [
        'Jede Provinzregel oder JW202-Zeitleiste lernen',
        'Universitäten versprechen, die Sie nicht benennen können',
        'Eine Akte einreichen, die wir nicht vorselektiert haben',
        'Ein Stipendienergebnis erklären, das Sie nicht erstellt haben',
      ],
    },
    never: {
      title: 'Was wir nicht tun',
      items: [
        'Eine Sprachanforderung verbergen, um eine Akte abzuschließen',
        'Ein Stipendienergebnis erfinden',
        'Tourismus oder Handel am Rand Ihres Angebotsbriefs betreiben',
        'Ihre Studierenden hinter Ihrem Rücken bewerben',
      ],
    },
    note: {
      eyebrow: 'Für wen das gedacht ist',
      text: 'Berater und Auslandsstudien-Büros mit Studierenden, die nach China wollen — besonders in den GCC-Ländern und Afrika, wo unser Partnernetzwerk aktiv und im Wachstum ist. Ein India-Desk entsteht gerade.',
    },
    cta: {
      title: 'Partnerschaft beantragen',
      text: 'Senden Sie den Namen Ihres Büros, Ihre Region und Ihr ungefähres Jahresvolumen an Studierenden. Wir antworten mit einer Partnerschaftsnotiz und einer Arbeitssitzung — in der Regel innerhalb von zwei Werktagen.',
      email: 'E-Mail an das Partnerschafts-Desk',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'Agenturportal: kommt bald',
    tiers: {
      eyebrow: 'Partnerstufen',
      title: 'Drei B2B-Partnerschaftsmodelle',
      lede: 'Wählen Sie das Modell passend zu Ihrem Volumen — oder kombinieren Sie Bildung und Handel unter einer Kooperationsvereinbarung.',
      items: [
        {
          name: 'Education Admissions Partner',
          badge: 'Tier 01 · Studium & MBBS',
          summary: 'Für Studienberatungen, die Bachelor-, Master-, PhD-, MBBS-, Ingenieur- und CSC-Stipendienbewerber nach China vermitteln.',
          bullets: [
            'Shortlist-Prüfung & direkte Hochschuleinreichung',
            'Co-Branded Statusverfolgung & JW201/JW202-Meilensteine',
            'Flughafenabholung, Wohnheim & Aufenthaltserlaubnis vor Ort',
          ],
        },
        {
          name: 'Chinese Language & Diploma Track',
          badge: 'Tier 02 · HSK & Diplom',
          summary: 'Für Sprachschulen und Berater, die Semester-, Jahres-HSK- oder Diplomkohorten entsenden.',
          bullets: [
            'Sprach- und Diplomplätze für X2- (<180T) und X1-Visa (>180T)',
            'Strukturierter HSK 1–6-Übergang ins Vollstudium',
            'Gruppenankunftskoordination ab 5 Studierenden',
          ],
        },
        {
          name: 'Canton Fair & Trade Delegation Partner',
          badge: 'Tier 03 · Handel & B2B',
          summary: 'Für Handelskammern und B2B-Organisatoren von Einkäuferdelegationen nach Guangzhou, Yiwu und Shanghai.',
          bullets: [
            'M/F-Geschäftsvisum-Einladungen & Delegationsplanung',
            'Zweisprachige Sourcing-Dolmetscher & Werksaudits',
            'Canton-Fair-Hotels, Hochgeschwindigkeitszug & Lieferantenbetreuung',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'B2B-Partner-Onboarding',
      title: 'Als aktiver Partner bewerben',
      lede: 'Senden Sie Ihre Agenturdaten unten ab. Unser B2B-Desk prüft jede Anfrage innerhalb von 24 Geschäftsstunden.',
      fields: {
        agencyName: 'Agentur / Firmenname',
        contactName: 'Hauptansprechpartner',
        email: 'Geschäftliche E-Mail',
        phone: 'WhatsApp / Telefonnummer',
        country: 'Land / Region',
        tier: 'Partnerschaftsmodell',
        tierOptions: [
          'Education Admissions Partner',
          'Chinese Language & Diploma Track',
          'Canton Fair & Trade Delegation Partner',
          'Kombiniert (Bildung + Handel)',
        ],
        volume: 'Geschätztes Jahresvolumen',
        volumeOptions: ['1–10 Kunden / Jahr', '11–30 Kunden / Jahr', '31–75 Kunden / Jahr', '75+ Kunden / Jahr'],
        notes: 'Zielprogramme oder Delegationsbedarf',
        notesPlaceholder: 'Nennen Sie Ihre Zielmärkte, Studiengänge oder geplante Messetermine…',
      },
      submit: 'Partnerantrag absenden',
      success: 'Partneranfrage eingegangen — unser B2B-Desk meldet sich innerhalb von 24 Stunden.',
      fineprint: 'Nicht-exklusive Kooperation. Ihre Kundenbeziehungen bleiben uneingeschränkt bei Ihnen.',
    },
  },

  ja: {
    meta: {
      title: 'エージェント向け — あなたの中国デスクをホワイトラベルで',
      description:
        'GCC 諸国、アフリカ、インドですでに学生カウンセリングをしていますか？RouteToAbroad はあなたの背後にある中国デスクです：共同ブランドページ、透明な案件状況、誠実な奨学金コミュニケーション。',
    },
    crumb: 'エージェント向け',
    hero: {
      eyebrow: 'エージェント向け',
      title: '学生はあなたに。中国は私たちが担当します。',
      lede: 'GCC 諸国、アフリカ、インド、その他の地域ですでにカウンセリングをされているなら、RouteToAbroad はあなたの机の背後にある中国デスクです — 共同ブランド、透明性、そして私たちにできること・できないことの誠実な説明。',
    },
    get: {
      title: '得られるもの',
      items: [
        {
          title: '共同ブランドの資料',
          text: 'あなたの名前と連絡先が入ったページとオファー書類 — お客様はあなたのままです。',
        },
        {
          title: '報告できる案件状況',
          text: '出願、JW202、ビザの進捗がいつでも確認でき、時差を越えて私たちを追いかける必要はありません。',
        },
        {
          title: '奨学金への誠実さ',
          text: 'あなたが説明する前に、私たちが学生に真実を伝えます。後で弁明することになる架空の受賞はありません。',
        },
        {
          title: '現地での到着サポート',
          text: '空港、寮、居留許可、SIM、銀行口座 — 中国チームが担当し、あなたのサービスとして提供できます。',
        },
      ],
    },
    send: {
      title: 'ご提供いただくもの',
      items: [
        '学生プロフィール：学歴、成績、専攻、希望入学時期',
        '準備ができたらパスポートと成績証明書のスキャン',
        '予算上限と奨学金への期待を明確に',
        '署名済みの協力覚書 1 通 — 排他条項の罠はありません',
      ],
    },
    avoid: {
      title: 'やらなくてよいこと',
      items: [
        '各省の規則や JW202 のスケジュールをすべて覚える',
        '名前を挙げられない大学への約束',
        '私たちが候補に上げていない学生の出願',
        '自分が作っていない奨学金の結果の説明',
      ],
    },
    never: {
      title: '私たちがしないこと',
      items: [
        '案件成立のために言語要件を隠す',
        '奨学金の結果を捏造する',
        'あなたのオファーレターの裏で旅行や貿易を営む',
        'あなたに内緒であなたの学生にマーケティングする',
      ],
    },
    note: {
      eyebrow: 'どんな方のためか',
      text: '中国を志望する学生を持つカウンセラーと海外留学オフィス — 特に GCC 諸国とアフリカ。私たちのパートナーネットワークが活発に拡大している地域です。インドデスクは現在準備中です。',
    },
    cta: {
      title: 'パートナーに応募',
      text: 'オフィス名、地域、おおよその年間学生数をお送りください。提携のご案内と作業セッションのご連絡 — 通常 2 営業日以内にお返しします。',
      email: '提携デスクにメールする',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'エージェントポータル：近日公開',
    tiers: {
      eyebrow: 'パートナー区分',
      title: '3つの B2B パートナーシップ枠',
      lede: '貴社の送客規模と顧客層に合わせてお選びいただけます。教育と貿易の両方を1つの覚書で組み合わせることも可能です。',
      items: [
        {
          name: '大学進学アドミッション・パートナー',
          badge: 'Tier 01 · 学位・MBBS',
          summary: '中国の学位課程、MBBS、工学、CSC奨学金志願者を支援する留学エージェント向け。',
          bullets: [
            '志望校リスト精査と大学への直接出願',
            '共同ブランドでの進捗管理と JW201/JW202 共有',
            '空港送迎・寮入居・居留許可取得の現地サポート',
          ],
        },
        {
          name: '中国語研修・ディプロマ枠',
          badge: 'Tier 02 · HSK・専門課程',
          summary: '1学期・1年間のHSK語学留学やディプロマ課程を送客する語学機関・進路指導者向け。',
          bullets: [
            'X2（180日以内）・X1（180日超）語学・ディプロマ手配',
            'HSK 1–6 から学位課程への段階的進学設計',
            '5名以上のグループ来華・到着コーディネート',
          ],
        },
        {
          name: '広州交易会・貿易視察団パートナー',
          badge: 'Tier 03 · 商務・貿易',
          summary: '広州・義烏・上海へのバイヤー視察団を運営する商工会議所・旅行会社・B2B事業者向け。',
          bullets: [
            'M/F 商務ビザ招聘状と視察スケジュール手配',
            'バイリンガル調達通訳と工場監査同行',
            '交易会ホテル・高速鉄道・サプライヤー調整の一括対応',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'B2B パートナー登録',
      title: 'パートナー申請フォーム',
      lede: '以下のフォームに貴社情報をご入力ください。B2B担当チームが24営業時間以内にご返信します。',
      fields: {
        agencyName: '会社名 / エージェント名',
        contactName: 'ご担当者名',
        email: 'ビジネス用メールアドレス',
        phone: 'WhatsApp / 電話番号',
        country: '主な対応国・地域',
        tier: '希望パートナー枠',
        tierOptions: [
          '大学進学アドミッション・パートナー',
          '中国語研修・ディプロマ枠',
          '広州交易会・貿易視察団パートナー',
          '複合枠（教育＋貿易）',
        ],
        volume: '年間見込み送客数',
        volumeOptions: ['年 1–10 名', '年 11–30 名', '年 31–75 名', '年 75 名以上'],
        notes: '対象プログラム・視察団のご要望',
        notesPlaceholder: '主な対象市場、希望専攻、予定されている視察時期などをご記入ください…',
      },
      submit: 'パートナー申請を送信',
      success: 'パートナー申請を受け付けました。24時間以内にB2B担当よりご連絡いたします。',
      fineprint: '非独占契約です。貴社のお客様との関係は厳格に貴社に帰属します。',
    },
  },

  pt: {
    meta: {
      title: 'Para agentes — Sua mesa da China, com marca branca',
      description:
        'Já orienta estudantes no GCC, na África ou na Índia? A RouteToAbroad é a mesa da China por trás de você: páginas co-brandadas, status de processos transparente e comunicação honesta sobre bolsas.',
    },
    crumb: 'Para agentes',
    hero: {
      eyebrow: 'Para agentes',
      title: 'Fique com seus estudantes. A China é conosco.',
      lede: 'Se você já orienta no GCC, na África, na Índia ou em outra região, a RouteToAbroad é a mesa da China por trás da sua mesa — co-brandada, transparente e honesta sobre o que podemos e não podemos fazer.',
    },
    get: {
      title: 'O que você recebe',
      items: [
        {
          title: 'Materiais co-brandados',
          text: 'Páginas e documentos de oferta com o seu nome e o seu número — seu cliente continua sendo seu.',
        },
        {
          title: 'Status de processos que você pode repetir',
          text: 'Marcos de candidatura, JW202 e visto visíveis para você, sem nos perseguir entre fusos horários.',
        },
        {
          title: 'Honestidade com bolsas',
          text: 'Dizemos ao seu estudante o que é real antes de você precisar. Nenhum prêmio inventado para defender depois.',
        },
        {
          title: 'Suporte de chegada no local',
          text: 'Aeroporto, residência, autorização de estadia, SIM, banco — resolvidos pela nossa equipe na China e refletidos no seu serviço.',
        },
      ],
    },
    send: {
      title: 'O que você envia',
      items: [
        'Perfil do estudante: formação, notas, área, ingresso pretendido',
        'Passaporte e históricos escaneados, quando prontos',
        'Teto de orçamento e expectativas de bolsa, declarados com clareza',
        'Uma nota de cooperação assinada — sem armadilhas de exclusividade',
      ],
    },
    avoid: {
      title: 'O que você não precisa fazer',
      items: [
        'Aprender cada regra provincial ou cada cronograma do JW202',
        'Prometer universidades que não consegue nomear',
        'Protocolar o processo de um estudante que não preselecionamos',
        'Explicar um resultado de bolsa que você não criou',
      ],
    },
    never: {
      title: 'O que não faremos',
      items: [
        'Esconder um requisito de idioma para fechar um processo',
        'Inventar um resultado de bolsa',
        'Operar turismo ou comércio à margem da sua carta de oferta',
        'Fazer marketing para os seus estudantes pelas suas costas',
      ],
    },
    note: {
      eyebrow: 'Para quem é',
      text: 'Orientadores e escritórios de intercâmbio com estudantes que querem a China — especialmente no GCC e na África, onde nossa rede de parceiros está ativa e crescendo. Uma mesa da Índia está sendo construída.',
    },
    cta: {
      title: 'Candidate-se à parceria',
      text: 'Envie o nome do seu escritório, região e volume anual aproximado de estudantes. Respondemos com uma nota de parceria e uma sessão de trabalho — geralmente em até dois dias úteis.',
      email: 'Escreva à mesa de parcerias',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'Portal do agente: em breve',
    tiers: {
      eyebrow: 'Níveis de parceria',
      title: 'Três frentes de parceria B2B',
      lede: 'Escolha a frente alinhada ao seu volume e carteira — ou combine educação e comércio em um único termo de cooperação.',
      items: [
        {
          name: 'Parceiro de Admissões Universitárias',
          badge: 'Tier 01 · Graduação & MBBS',
          summary: 'Para consultorias educacionais que enviam candidatos de MBBS, engenharia, negócios e bolsas CSC para a China.',
          bullets: [
            'Validação de shortlist e submissão direta às universidades',
            'Acompanhamento co-branded e marcos JW201/JW202',
            'Recepção no aeroporto, dormitório e visto de residência',
          ],
        },
        {
          name: 'Trilha de Mandarim & Diploma',
          badge: 'Tier 02 · HSK & Técnico',
          summary: 'Para escolas de idiomas e orientadores que enviam turmas de HSK semestral, anual ou diploma técnico.',
          bullets: [
            'Vagas de idioma e diploma para vistos X2 e X1',
            'Progressão estruturada HSK 1–6 para graduação',
            'Coordenação de chegada em grupo a partir de 5 alunos',
          ],
        },
        {
          name: 'Parceiro Feira de Cantão & Missões',
          badge: 'Tier 03 · Comércio & B2B',
          summary: 'Para câmaras de comércio e operadores que levam missões empresariais a Guangzhou, Yiwu e Xangai.',
          bullets: [
            'Cartas-convite de visto M/F e agenda da delegação',
            'Intérpretes bilíngues e suporte a auditoria fabril',
            'Hotéis da Feira de Cantão, trem-bala e agenda de fornecedores',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'Cadastro de parceiro B2B',
      title: 'Candidate-se como parceiro ativo',
      lede: 'Envie os dados da sua agência abaixo. Nossa mesa B2B analisa cada solicitação em até 24 horas úteis.',
      fields: {
        agencyName: 'Nome da agência / empresa',
        contactName: 'Contato principal',
        email: 'E-mail corporativo',
        phone: 'WhatsApp / Telefone',
        country: 'País / Região de atuação',
        tier: 'Frente de parceria',
        tierOptions: [
          'Parceiro de Admissões Universitárias',
          'Trilha de Mandarim & Diploma',
          'Parceiro Feira de Cantão & Missões',
          'Multifrente (Educação + Comércio)',
        ],
        volume: 'Volume anual estimado',
        volumeOptions: ['1–10 clientes / ano', '11–30 clientes / ano', '31–75 clientes / ano', '75+ clientes / ano'],
        notes: 'Programas-alvo ou datas de missão',
        notesPlaceholder: 'Informe seus mercados principais, cursos ou datas previstas de missão…',
      },
      submit: 'Enviar solicitação de parceria',
      success: 'Solicitação B2B recebida — nossa equipe responderá em até 24 horas com os próximos passos.',
      fineprint: 'Cooperação não exclusiva. O relacionamento com seu cliente permanece exclusivamente seu.',
    },
  },

  hi: {
    meta: {
      title: 'एजेंटों के लिए — आपका चाइना डेस्क, व्हाइट-लेबल',
      description:
        'GCC, अफ़्रीका या भारत में पहले से विद्यार्थियों को काउंसलिंग दे रहे हैं? RouteToAbroad आपके पीछे का चाइना डेस्क है: सह-ब्रांडेड पृष्ठ, पारदर्शी फ़ाइल स्थिति, ईमानदार छात्रवृत्ति संवाद।',
    },
    crumb: 'एजेंटों के लिए',
    hero: {
      eyebrow: 'एजेंटों के लिए',
      title: 'विद्यार्थी आपके पास रहें। चीन हम सँभालें।',
      lede: 'अगर आप GCC, अफ़्रीका, भारत या किसी अन्य क्षेत्र में पहले से काउंसलिंग करते हैं, तो RouteToAbroad आपकी मेज़ के पीछे का चाइना डेस्क है — सह-ब्रांडेड, पारदर्शी, और ईमानदारी से बताते हैं कि हम क्या कर सकते हैं और क्या नहीं।',
    },
    get: {
      title: 'आपको क्या मिलता है',
      items: [
        {
          title: 'सह-ब्रांडेड सामग्री',
          text: 'आपके नाम और नंबर वाले पृष्ठ और ऑफ़र दस्तावेज़ — आपका ग्राहक आपका ही रहेगा।',
        },
        {
          title: 'दोहराने योग्य फ़ाइल स्थिति',
          text: 'आवेदन, JW202 और वीज़ा के पड़ाव आपको दिखते हैं — समय-क्षेत्रों के पार हमें खोजते नहीं फिरना पड़ता।',
        },
        {
          title: 'छात्रवृत्ति में ईमानदारी',
          text: 'ज़रूरत पड़ने से पहले हम आपके विद्यार्थी को सच बता देते हैं। बाद में बचाव के लिए कोई गढ़ा हुआ परिणाम नहीं।',
        },
        {
          title: 'मौक़े पर आगमन सहायता',
          text: 'एयरपोर्ट, हॉस्टल, रेसिडेंस परमिट, SIM, बैंक — हमारी चीन टीम सँभालती है, और यह आपकी सेवा में दिखता है।',
        },
      ],
    },
    send: {
      title: 'आप क्या भेजें',
      items: [
        'विद्यार्थी प्रोफ़ाइल: योग्यता, अंक, विषय, लक्षित प्रवेश सत्र',
        'तैयार होने पर पासपोर्ट और मार्कशीट की स्कैन प्रतियाँ',
        'बजट सीमा और छात्रवृत्ति अपेक्षाएँ, साफ़ शब्दों में',
        'एक हस्ताक्षरित सहयोग पत्र — कोई विशेषाधिकार-जाल नहीं',
      ],
    },
    avoid: {
      title: 'आपको करने की ज़रूरत नहीं',
      items: [
        'हर प्रांतीय नियम या JW202 समय-रेखा सीखना',
        'उन विश्वविद्यालयों का वादा करना जिनके नाम आप नहीं बता सकते',
        'ऐसे विद्यार्थी की फ़ाइल भेजना जिसे हमने शॉर्टलिस्ट नहीं किया',
        'कोई ऐसी छात्रवृत्ति परिणाम समझाना जो आपने बनाया नहीं',
      ],
    },
    never: {
      title: 'हम क्या नहीं करेंगे',
      items: [
        'फ़ाइल बंद करने के लिए भाषा आवश्यकता छिपाना',
        'छात्रवृत्ति परिणाम गढ़ना',
        'आपके ऑफ़र लेटर के साथ-साथ पर्यटन या व्यापार चलाना',
        'आपकी पीठ पीछे आपके विद्यार्थियों को मार्केटिंग करना',
      ],
    },
    note: {
      eyebrow: 'यह किसके लिए है',
      text: 'ऐसे काउंसलर और स्टडी-अब्रॉड कार्यालय जिनके विद्यार्थी चीन जाना चाहते हैं — विशेष रूप से GCC और अफ़्रीका, जहाँ हमारा साझेदार नेटवर्क सक्रिय और बढ़ता हुआ है। इंडिया डेस्क अभी तैयार हो रहा है।',
    },
    cta: {
      title: 'साझेदारी के लिए आवेदन करें',
      text: 'अपने कार्यालय का नाम, क्षेत्र और अनुमानित वार्षिक विद्यार्थी संख्या भेजें। हम साझेदारी पत्र और एक कार्य सत्र के साथ उत्तर देते हैं — आमतौर पर दो व्यावसायिक दिनों में।',
      email: 'साझेदारी डेस्क को ईमेल करें',
      whatsapp: 'WhatsApp {phone}',
    },
    portal: 'एजेंट पोर्टल: जल्द आ रहा है',
    tiers: {
      eyebrow: 'साझेदारी स्तर',
      title: 'तीन B2B साझेदारी ट्रैक',
      lede: 'अपनी एजेंसी की क्षमता और ग्राहकों के अनुसार ट्रैक चुनें — या एक ही सहयोग समझौते में शिक्षा व व्यापार दोनों जोड़ें।',
      items: [
        {
          name: 'एजुकेशन एडमिशन पार्टनर',
          badge: 'Tier 01 · डिग्री व MBBS',
          summary: 'उन शिक्षा परामर्शदाताओं के लिए जो चीन में MBBS, इंजीनियरिंग, बिज़नेस और CSC छात्रवृत्ति के छात्र भेजते हैं।',
          bullets: [
            'शॉर्टलिस्ट सत्यापन और सीधे विश्वविद्यालय आवेदन',
            'को-ब्रांडेड फ़ाइल ट्रैकिंग और JW201/JW202 अपडेट',
            'एयरपोर्ट पिकअप, हॉस्टल और रेज़िडेंस परमिट सहायता',
          ],
        },
        {
          name: 'चीनी भाषा व डिप्लोमा ट्रैक',
          badge: 'Tier 02 · HSK व डिप्लोमा',
          summary: 'भाषा केंद्रों और काउंसलरों के लिए जो 1-सेमेस्टर, 1-वर्षीय HSK या डिप्लोमा समूह भेजते हैं।',
          bullets: [
            'X2 (<180 दिन) व X1 (>180 दिन) भाषा और डिप्लोमा प्रवेश',
            'HSK 1–6 से डिग्री कार्यक्रमों में सुव्यवस्थित प्रवेश',
            '5+ छात्रों के समूह आगमन का समन्वय',
          ],
        },
        {
          name: 'कैंटन फ़ेयर व ट्रेड डेलिगेशन पार्टनर',
          badge: 'Tier 03 · व्यापार व B2B',
          summary: 'चैंबर ऑफ़ कॉमर्स और B2B आयोजकों के लिए जो गुआंगझू, ईवू और शंघाई में ख़रीदार प्रतिनिधिमंडल ले जाते हैं।',
          bullets: [
            'M/F बिज़नेस वीज़ा आमंत्रण और प्रतिनिधिमंडल शेड्यूल',
            'द्विभाषी सोर्सिंग दुभाषिए और फ़ैक्टरी ऑडिट सहायता',
            'कैंटन फ़ेयर होटल, हाई-स्पीड रेल और सप्लायर समन्वय',
          ],
        },
      ],
    },
    onboarding: {
      eyebrow: 'B2B पार्टनर ऑनबोर्डिंग',
      title: 'सक्रिय पार्टनर बनने के लिए आवेदन करें',
      lede: 'नीचे अपनी एजेंसी का विवरण सबमिट करें। हमारी B2B डेस्क 24 कार्य-घंटों के भीतर हर अनुरोध की समीक्षा करती है।',
      fields: {
        agencyName: 'एजेंसी / कंपनी का नाम',
        contactName: 'मुख्य संपर्क व्यक्ति',
        email: 'बिज़नेस ईमेल',
        phone: 'WhatsApp / फ़ोन नंबर',
        country: 'कार्यक्षेत्र देश / क्षेत्र',
        tier: 'साझेदारी ट्रैक',
        tierOptions: [
          'एजुकेशन एडमिशन पार्टनर',
          'चीनी भाषा व डिप्लोमा ट्रैक',
          'कैंटन फ़ेयर व ट्रेड डेलिगेशन पार्टनर',
          'मल्टी-ट्रैक (शिक्षा + व्यापार)',
        ],
        volume: 'अनुमानित वार्षिक संख्या',
        volumeOptions: ['1–10 क्लाइंट / वर्ष', '11–30 क्लाइंट / वर्ष', '31–75 क्लाइंट / वर्ष', '75+ क्लाइंट / वर्ष'],
        notes: 'लक्षित कार्यक्रम या प्रतिनिधिमंडल आवश्यकताएँ',
        notesPlaceholder: 'अपने मुख्य छात्र बाज़ार, डिग्री ट्रैक या आगामी ट्रेड विज़िट की तारीख़ें साझा करें…',
      },
      submit: 'पार्टनर आवेदन सबमिट करें',
      success: 'पार्टनर ऑनबोर्डिंग अनुरोध प्राप्त हुआ — हमारी B2B डेस्क 24 घंटों में अगले चरणों के साथ उत्तर देगी।',
      fineprint: 'ग़ैर-विशिष्ट सहयोग। आपके ग्राहक संबंध पूरी तरह आपके ही रहते हैं।',
    },
  },
};
