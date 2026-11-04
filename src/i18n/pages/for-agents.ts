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
  /** "Agent portal: coming soon" fineprint. */
  portal: string;
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
  },
};
