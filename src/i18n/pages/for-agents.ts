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
        'تستشر الطلاب بالفعل في دول الخليج أو أفريقيا أو الهند؟ RouteToAbroad هي الخلية الصينية خلفك: صفحات بعلامة مشتركة، وحالة ملفات شفافة، وتواصل صادق حول المنح.',
    },
    crumb: 'للمندوبين',
    hero: {
      eyebrow: 'للمندوبين',
      title: 'احتفظ بطلابك. نحن ندير الصين.',
      lede: 'إذا كنت تستشر بالفعل في دول الخليج أو أفريقيا أو الهند أو منطقة أخرى، فإن RouteToAbroad هي الخلية الصينية خلف مكتبك — بعلامة مشتركة وشفافية وصدق حول ما يمكننا وما لا يمكننا فعله.',
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
};
