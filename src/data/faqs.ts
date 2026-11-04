/** FAQ datasets — power the FAQ pages AND the matching FAQPage JSON-LD. */
import { type Locale } from '../lib/i18n';

export interface Faq {
  question: string;
  answer: string;
}

const EDUCATION_FAQS_EN: Faq[] = [
  {
    question: 'Is a Chinese MBBS degree recognized in India?',
    answer:
      'Yes, provided the university is listed in the WHO World Directory of Medical Schools and on China’s MOE list, and you clear India’s FMGE/NExT licensing exam after graduating. We only place students at MOE-listed Chinese medical universities. These checks are necessary but not sufficient on their own — NMC eligibility rules (including NEET-UG qualification and the regulations in force for your admission year) decide whether a specific seat leads to registration, so verify your exact university and admission year with the current NMC rules before paying anything.',
  },
  {
    question: 'Are scholarships fully funded?',
    answer:
      'Some are. The CSC (Chinese Government Scholarship) can cover full tuition, dormitory, medical insurance and a monthly stipend — but it is merit-based and competitive. Most offers are partial: tuition-only or tuition plus accommodation. We do not sell guaranteed full scholarships, and no honest consultancy can.',
  },
  {
    question: 'Do I need to speak Chinese to study in China?',
    answer:
      'Not to enroll. English-taught programmes (MBBS, engineering, business) require no Chinese at admission. For daily life and MBBS clinical rotations, you will need roughly HSK 4. HSK training is part of our support package.',
  },
  {
    question: 'How long does the student visa process take?',
    answer:
      'Typically 4–8 weeks from receiving your admission documents (JW202/Admission Notice) to visa in hand, depending on embassy workload. We prepare the file, book the appointment and rehearse any interview questions with you.',
  },
  {
    question: 'What does it cost to study in China?',
    answer:
      'Tuition at accredited universities typically runs US$3,000–8,000 per year depending on programme and city; dormitories US$500–1,500 per year. Use our cost calculator for a personalised estimate, and note CSC scholarships can reduce tuition to zero.',
  },
  {
    question: 'Can I work while studying in China?',
    answer:
      'Part-time work is possible with your university’s written permission, usually on campus. Off-campus internships need additional approval from your institution and immigration authorities. Most scholarship stipends are designed to cover living costs without work.',
  },
  {
    question: 'When should I apply for the September intake?',
    answer:
      'Start 6–9 months ahead. Scholarship deadlines cluster between February and April; self-funded applications run later but the best programmes and dorms fill first. See the timeline planner for a date-by-date plan.',
  },
  {
    question: 'Is health insurance mandatory?',
    answer:
      'Yes — every international student in China must hold health insurance for the duration of their stay. CSC scholars receive it inside the scholarship; self-funded students buy it at registration (typically ¥400–800/year).', // {{VERIFY}} confirm current premium bands per intake university
  },
];

const TOURISM_FAQS_EN: Faq[] = [
  {
    question: 'How do tourist visas for China work?',
    answer:
      'Most visitors need an L (tourist) visa: application form, photo, itinerary and hotel bookings, plus proof of onward travel. Our concierge desk prepares the file, writes the itinerary letter and books the appointment. Typical processing is 4–7 working days.', // {{VERIFY}} confirm current fee and 10-year visa availability per nationality
  },
  {
    question: 'When is the best time to visit China and Japan?',
    answer:
      'Spring (March–May) and autumn (September–November) give the best weather — blossom season and fall foliage respectively. Summer is peak domestic-travel season in China; winter is cold but cheapest and brings Harbin’s ice festival.',
  },
  {
    question: 'Can you arrange business meetings and factory visits?',
    answer:
      'Yes. Through our trade desk we arrange factory tours, supplier meetings, Canton Fair itineraries, and chamber-of-commerce introductions for business delegations — with bilingual interpreters.',
  },
  {
    question: 'How are dietary restrictions handled on tour?',
    answer:
      'Guides are briefed on allergies and preferences (vegetarian, halal, Jain, gluten-free) before arrival. We pre-vet restaurants, and you get preference cards in Chinese to show at any eatery.',
  },
  {
    question: 'Is travel insurance included?',
    answer:
      'Base packages include standard cover. We offer an upgraded policy with medical evacuation and high-value equipment protection as an add-on — we strongly recommend it for adventure and Silk Road itineraries.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Full refund up to 30 days before departure. Within 30 days we refund everything recoverable from hotels and suppliers — we show you the receipts. No hidden cancellation fees on our side.',
  },
  {
    question: 'Do you organise group and student tours?',
    answer:
      'Yes — families, corporate offsites, and school/college educational tours are a speciality. Groups of 8+ get dedicated planning support and discounted rates. We handled a 45-student Shanghai programme in 2024.',
  },
  {
    question: 'Can you handle multi-country itineraries?',
    answer:
      'Yes. We run China + Japan combinations regularly, including separate visa applications, cross-border flights and rail, and aligned guides in each country.',
  },
];

const TRADE_FAQS_EN: Faq[] = [
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'It depends on the product. Custom electronics typically starts at 500–1,000 units; many machinery categories sell single units; textiles often by the 100-dozen lot. Part of our sourcing job is negotiating MOQs down for growing businesses.',
  },
  {
    question: 'How do you ensure product quality?',
    answer:
      'AQL-standard inspections on the factory floor at roughly 20% and 80% of production, plus a pre-shipment check before the container is sealed. You get photo and video reports at each gate — before money moves further.',
  },
  {
    question: 'What are typical shipping times from China to India?',
    answer:
      'Sea freight from Guangzhou/Shanghai/Ningbo to Mundra or JNPT: typically 18–25 days port-to-port, plus customs on both ends. Air freight: 3–7 days door-to-door at roughly 5–8× the cost. We monitor port congestion and re-route when it pays.',
  },
  {
    question: 'Can you handle customs clearance and BIS certification?',
    answer:
      'Yes — HS classification, BIS/WPC/CDSCO registrations where your product category requires them, and full document sets pre-filed before the goods reach port so clearance never waits on paperwork.',
  },
  {
    question: 'What payment terms do you work with?',
    answer:
      'Standard is 30% deposit by TT, 70% against copy of Bill of Lading. Established relationships can move to LC at sight. For first-time supplier engagements we strongly advise escrow — never 100% advance.',
  },
  {
    question: 'Do you support OEM and private-label manufacturing?',
    answer:
      'Yes. We shortlist factories that already white-label in your category, manage artwork/packaging customisation, and fold the branding checks into the standard inspection gates.',
  },
  {
    question: 'How are supplier disputes handled?',
    answer:
      'We act as your on-ground representative with documented evidence — photos, AQL reports, bilingual spec sheets. Contracts we set up include quality specs and penalty clauses; unresolved cases go to arbitration with our file as support.',
  },
  {
    question: 'What is your fee structure?',
    answer:
      'Trade engagements run on a success fee tied to the value of goods actually shipped — if the deal dies, you owe us the audit/inspection costs only, quoted upfront. No success, no success fee.',
  },
];

const GENERAL_FAQS_EN: Faq[] = [
  {
    question: 'What does RouteToAbroad actually do?',
    answer:
      'Three connected services between India and East Asia: we place students in Chinese universities (admissions, scholarships, visas, arrival), design private and group travel through China and Japan, and run sourcing, QC and logistics for India–China trade clients.',
  },
  {
    question: 'Do you only work with Indian students?',
    answer:
      'Our desk is strongest for India-based students and families, but we place students from the GCC and Africa through partner agents, and we are building an India desk for international applicants. Wherever you are, the fit check is the same first step.',
  },
  {
    question: 'Where are your offices?',
    answer:
      'New Delhi (Saket District Centre) and Guangzhou (Victory Plaza, Tianhe District) — which means someone is awake and on the ground in both time zones, Monday to Saturday.',
  },
  {
    question: 'Can you guarantee admission, a scholarship, or a visa?',
    answer:
      'No — and be suspicious of anyone who says yes. Universities decide admissions, scholarship committees decide funding, embassies decide visas. What we guarantee is an honest assessment up front, a complete and correct file, and someone accountable at each step.',
  },
  {
    question: 'How do I start?',
    answer:
      'Take the four-question fit check for education, or send an enquiry through any page. An advisor replies within one working day — 9:00–18:00 IST, Monday to Saturday.',
  },
  {
    question: 'Do you sell my data or run ads on this site?',
    answer:
      'No. We collect only what your enquiry needs, this site sets no advertising cookies, and there are no third-party tracking scripts.',
  },
  {
    question: 'How long has RouteToAbroad been operating?',
    answer:
      'Over a decade in cross-border services between India and China.', // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'What languages does the team work in?',
    answer:
      'English, Hindi, Malayalam, and Mandarin through the Guangzhou office — plus local-language support via partners for Arabic-speaking families.',
  },
];

/* ------------------------------------------------------------------ */
/* zh — machine-assisted translation, pending native-speaker review.   */
/* Same question count and order as the en set per set.                */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_ZH: Faq[] = [
  {
    question: '中国的 MBBS 学位在印度受认可吗？',
    answer:
      '认可，前提是大学同时列入 WHO 世界医学院校名录和中国教育部名单，并且你毕业后通过印度的 FMGE/NExT 执业资格考试。我们只安排学生就读教育部名单上的中国医科大学。这些检查是必要条件，但仅凭它们并不充分——NMC 资格规则（包括 NEET-UG 成绩要求和你入学年份适用的现行规定）决定某个具体名额最终能否注册执业，所以在付款之前，请用现行 NMC 规则核对你的确切大学和入学年份。',
  },
  {
    question: '奖学金是全额资助吗？',
    answer:
      '有一部分是。CSC（中国政府奖学金）可以覆盖全额学费、宿舍、医疗保险和每月津贴——但它按成绩评定且竞争激烈。大多数录取是部分资助：仅学费，或学费加住宿。我们不出售“保证全奖”，任何诚实的咨询机构都不能。',
  },
  {
    question: '在中国留学需要会说中文吗？',
    answer:
      '入学不需要。英语授课项目（MBBS、工程、商科）在录取时不要求中文。但日常生活和 MBBS 临床轮转大约需要 HSK 4 水平。HSK 培训包含在我们的支持服务包里。',
  },
  {
    question: '学生签证办理需要多长时间？',
    answer:
      '通常从收到录取材料（JW202/录取通知书）到拿到签证约需 4–8 周，视使领馆工作量而定。我们负责准备材料、预约递交，并与你演练可能的面谈问题。',
  },
  {
    question: '在中国留学要花多少钱？',
    answer:
      '正规大学的学费通常为每年 3,000–8,000 美元，取决于专业和城市；宿舍每年 500–1,500 美元。用我们的费用计算器获取个性化估算；注意 CSC 奖学金可以把学费降到零。',
  },
  {
    question: '在中国留学期间可以打工吗？',
    answer:
      '经学校书面许可可以做兼职，通常限于校内。校外实习还需要所在院校和移民部门的额外批准。大多数奖学金津贴的设计目标就是在不打工的情况下覆盖生活开支。',
  },
  {
    question: '九月入学的申请应该什么时候开始？',
    answer:
      '提前 6–9 个月开始。奖学金截止日期集中在 2 月至 4 月之间；自费申请可以更晚，但最好的项目和宿舍先满。逐月计划请看时间线规划工具。',
  },
  {
    question: '医疗保险是强制的吗？',
    answer:
      '是——在中国，每一位国际学生都必须在整个学习期间持有医疗保险。CSC 奖学金生的保险包含在奖学金内；自费生在注册时购买（通常每年 ¥400–800）。',
  },
];

const TOURISM_FAQS_ZH: Faq[] = [
  {
    question: '中国的旅游签证怎么办？',
    answer:
      '大多数游客需要 L（旅游）签证：申请表、照片、行程单和酒店预订单，外加离程交通证明。我们的礼宾服务台负责准备材料、撰写行程信并预约递交。通常 4–7 个工作日出签。',
  },
  {
    question: '什么时候去中国和日本最好？',
    answer:
      '春季（3–5 月）和秋季（9–11 月）天气最好——分别是花期和红叶季。夏季是中国国内游高峰；冬季寒冷但最便宜，还有哈尔滨冰雪节。',
  },
  {
    question: '你们可以安排商务会议和工厂参观吗？',
    answer:
      '可以。通过我们的贸易部门，为商务考察团安排工厂参观、供应商会谈、广交会行程和商会引荐——全程配备双语翻译。',
  },
  {
    question: '旅途中的饮食禁忌怎么处理？',
    answer:
      '出发前导游会详细了解过敏和饮食偏好（素食、清真、耆那教、无麸质）。我们预先筛选餐厅，你还会拿到中文偏好卡，在任何餐馆出示即可。',
  },
  {
    question: '包含旅游保险吗？',
    answer:
      '基础套餐包含标准保障。我们提供升级保单，覆盖医疗转运和高价值器材，可加购——强烈建议冒险和丝绸之路行程购买。',
  },
  {
    question: '你们的取消政策是什么？',
    answer:
      '出发前 30 天可全额退款。30 天内，我们会退还从酒店和供应商处能追回的全部款项——票据都给你看。我们这边没有任何隐藏的取消费用。',
  },
  {
    question: '你们组织团体游和学生游吗？',
    answer:
      '组织——家庭游、企业团建和学校/高校研学游是我们的强项。8 人以上团体享有专属策划支持和团队优惠价。2024 年我们接待了 45 名学生的上海项目。',
  },
  {
    question: '可以安排多国联游行程吗？',
    answer:
      '可以。我们常年操作中国+日本组合行程，包括分别的签证申请、跨境航班与铁路，以及每个国家的对接导游。',
  },
];

const TRADE_FAQS_ZH: Faq[] = [
  {
    question: '最小起订量（MOQ）是多少？',
    answer:
      '取决于产品。定制电子产品通常 500–1,000 件起；许多机械品类可单台出售；纺织品常按 100 打为单位。帮成长中的企业把 MOQ 谈下来，正是我们采购工作的一部分。',
  },
  {
    question: '你们如何保证产品质量？',
    answer:
      '在生产进度约 20% 和 80% 时点在工厂现场执行 AQL 标准检验，集装箱封柜前再做一次出货前检查。每个关口你都会收到照片和视频报告——之后资金才继续往下走。',
  },
  {
    question: '从中国到印度的运输时间通常多久？',
    answer:
      '海运从广州/上海/宁波到蒙德拉或 JNPT：通常 18–25 天港到港，外加两端清关。空运：3–7 天门到门，成本约为海运的 5–8 倍。我们监控港口拥堵，划算时就改道。',
  },
  {
    question: '你们能处理清关和 BIS 认证吗？',
    answer:
      '能——HS 归类、产品类别所需的 BIS/WPC/CDSCO 注册，以及在货物到港前预交全套单证，清关永远不会卡在文件上。',
  },
  {
    question: '你们采用什么付款条款？',
    answer:
      '标准是 30% 电汇（TT）定金，70% 凭提单副本支付。成熟合作关系可改为即期信用证（LC at sight）。首次合作的供应商我们强烈建议第三方托管（escrow）——绝不接受 100% 预付。',
  },
  {
    question: '你们支持 OEM 和贴牌生产吗？',
    answer:
      '支持。我们只筛选已在你的品类做贴牌的工厂，管理美工/包装定制，并把品牌核查并入标准检验关口。',
  },
  {
    question: '供应商纠纷怎么处理？',
    answer:
      '我们作为你的当地代表，用留存的证据说话——照片、AQL 报告、双语规格单。我们搭建的合同包含质量规格和罚则条款；未解决的案件进入仲裁，我们的完整案卷作为支持。',
  },
  {
    question: '你们的收费结构是什么？',
    answer:
      '贸易合作按实际发货金额收取成功佣金——如果交易告吹，你只需支付事先报价的验厂/验货成本。没有成交，就没有成功佣金。',
  },
];

const GENERAL_FAQS_ZH: Faq[] = [
  {
    question: 'RouteToAbroad 到底是做什么的？',
    answer:
      '三项相互衔接的服务，覆盖印度与东亚之间：为学生申请中国高校（录取、奖学金、签证、落地），设计中国和日本的私人及团体旅行，并为印度—中国贸易客户提供采购、质检和物流。',
  },
  {
    question: '你们只服务印度学生吗？',
    answer:
      '我们的强项是印度本地学生和家庭，但也通过合作代理接收来自海湾国家和非洲的学生，并且正在为国际申请者组建印度服务台。无论你在哪里，适配检查都是同样的第一步。',
  },
  {
    question: '你们的办公室在哪里？',
    answer:
      '新德里（Saket District Centre）和广州（Victory Plaza, Tianhe District）——这意味着周一到周六，两个时区总有人醒着在现场。',
  },
  {
    question: '你们能保证录取、奖学金或签证吗？',
    answer:
      '不能——谁说能，你就要小心。大学决定录取，奖学金委员会决定资助，使领馆决定签证。我们能保证的是：事前坦诚评估、完整无误的材料，以及每一步都有人负责到底。',
  },
  {
    question: '如何开始？',
    answer:
      '花四个问题做教育适配检查，或在任意页面提交咨询。顾问在一个工作日内回复——周一至周六 9:00–18:00 IST。',
  },
  {
    question: '你们会出售我的数据或在网站上投放广告吗？',
    answer:
      '不会。我们只收集咨询所需要的信息，本站不设置广告 Cookie，也没有第三方追踪脚本。',
  },
  {
    question: 'RouteToAbroad 运营多久了？',
    answer:
      '在印度与中国之间的跨境服务领域深耕十余年。',
      // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: '团队使用哪些语言工作？',
    answer:
      '英语、印地语、马拉雅拉姆语，以及广州办公室的普通话——另外通过合作伙伴为阿拉伯语家庭提供本地语言支持。',
  },
];

/* ------------------------------------------------------------------ */
/* fr — machine-assisted translation, pending native-speaker review.   */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_FR: Faq[] = [
  {
    question: 'Un diplôme de MBBS chinois est-il reconnu en Inde ?',
    answer:
      'Oui, à condition que l’université figure au répertoire mondial des écoles de médecine de l’OMS et sur la liste du MOE chinois, et que vous réussissiez l’examen de licence FMGE/NExT indien après votre diplôme. Nous ne plaçons des étudiants que dans les facultés de médecine chinoises listées par le MOE. Ces vérifications sont nécessaires mais pas suffisantes à elles seules — les règles d’éligibilité du NMC (dont la qualification NEET-UG et la réglementation en vigueur pour votre année d’admission) déterminent si une place donnée aboutit à l’inscription ; vérifiez donc votre université exacte et votre année d’admission au regard des règles NMC actuelles avant tout paiement.',
  },
  {
    question: 'Les bourses sont-elles entièrement financées ?',
    answer:
      'Certaines, oui. La bourse CSC (Chinese Government Scholarship) peut couvrir l’intégralité des frais de scolarité, le dortoir, l’assurance maladie et une allocation mensuelle — mais elle est méritocratique et compétitive. La plupart des offres sont partielles : frais de scolarité seuls, ou frais plus hébergement. Nous ne vendons pas de bourses complètes garanties, et aucun cabinet honnête ne le peut.',
  },
  {
    question: 'Faut-il parler chinois pour étudier en Chine ?',
    answer:
      'Pas pour s’inscrire. Les programmes enseignés en anglais (MBBS, ingénierie, commerce) n’exigent pas le chinois à l’admission. Pour la vie quotidienne et les rotations cliniques du MBBS, il faut environ le HSK 4. La préparation HSK fait partie de notre pack d’accompagnement.',
  },
  {
    question: 'Combien de temps prend la demande de visa étudiant ?',
    answer:
      'En général 4 à 8 semaines entre la réception de vos documents d’admission (JW202/Admission Notice) et le visa en main, selon la charge de l’ambassade. Nous préparons le dossier, prenons le rendez-vous et répétons avec vous les questions d’entretien éventuelles.',
  },
  {
    question: 'Combien coûte une étude en Chine ?',
    answer:
      'Les frais de scolarité dans les universités accréditées se situent généralement entre 3 000 et 8 000 US$ par an selon le programme et la ville ; les dortoirs entre 500 et 1 500 US$ par an. Utilisez notre calculateur de coûts pour une estimation personnalisée, et notez que les bourses CSC peuvent ramener les frais de scolarité à zéro.',
  },
  {
    question: 'Peut-on travailler pendant ses études en Chine ?',
    answer:
      'Un emploi à temps partiel est possible avec l’autorisation écrite de votre université, généralement sur le campus. Les stages hors campus nécessitent une approbation supplémentaire de votre établissement et des autorités d’immigration. La plupart des allocations de bourse sont calculées pour couvrir les coûts de la vie sans travailler.',
  },
  {
    question: 'Quand candidater pour la rentrée de septembre ?',
    answer:
      'Commencez 6 à 9 mois à l’avance. Les échéances des bourses se concentrent entre février et avril ; les candidatures autofinancées vont plus tard, mais les meilleurs programmes et dortoirs se remplissent en premier. Voir le planificateur pour un plan date par date.',
  },
  {
    question: 'L’assurance santé est-elle obligatoire ?',
    answer:
      'Oui — chaque étudiant international en Chine doit détenir une assurance santé pendant toute la durée du séjour. Les boursiers CSC la reçoivent dans la bourse ; les étudiants autofinancés l’achètent à l’inscription (typiquement 400 à 800 ¥/an).',
  },
];

const TOURISM_FAQS_FR: Faq[] = [
  {
    question: 'Comment fonctionne le visa touristique pour la Chine ?',
    answer:
      'La plupart des visiteurs ont besoin d’un visa L (touristique) : formulaire, photo, itinéraire et réservations d’hôtel, plus preuve de continuation. Notre conciergerie prépare le dossier, rédige la lettre d’itinéraire et prend le rendez-vous. Le traitement prend typiquement 4 à 7 jours ouvrés.',
  },
  {
    question: 'Quelle est la meilleure période pour visiter la Chine et le Japon ?',
    answer:
      'Le printemps (mars–mai) et l’automne (septembre–novembre) offrent la meilleure météo — floraisons puis feuillages d’automne. L’été est la haute saison du tourisme intérieur chinois ; l’hiver est froid mais le moins cher et accueille le festival de glace de Harbin.',
  },
  {
    question: 'Pouvez-vous organiser des réunions d’affaires et des visites d’usines ?',
    answer:
      'Oui. Via notre cellule commerce, nous organisons pour les délégations d’affaires des visites d’usines, des rencontres fournisseurs, des itinéraires Canton Fair et des introductions auprès des chambres de commerce — avec interprètes bilingues.',
  },
  {
    question: 'Comment les restrictions alimentaires sont-elles gérées en voyage ?',
    answer:
      'Les guides sont briefés sur les allergies et préférences (végétarien, halal, jaïn, sans gluten) avant l’arrivée. Nous présélectionnons les restaurants, et vous recevez des cartes de préférences en chinois à montrer dans n’importe quel établissement.',
  },
  {
    question: 'L’assurance voyage est-elle incluse ?',
    answer:
      'Les forfaits de base incluent une couverture standard. Nous proposons en option une police améliorée avec évacuation médicale et protection du matériel de grande valeur — fortement recommandée pour les itinéraires aventure et Route de la soie.',
  },
  {
    question: 'Quelle est votre politique d’annulation ?',
    answer:
      'Remboursement intégral jusqu’à 30 jours avant le départ. Dans les 30 jours, nous remboursons tout ce qui est récupérable auprès des hôtels et fournisseurs — justificatifs à l’appui. Aucun frais d’annulation caché de notre côté.',
  },
  {
    question: 'Organisez-vous des voyages en groupe et pour étudiants ?',
    answer:
      'Oui — familles, séminaires d’entreprise et voyages éducatifs scolaires/universitaires sont notre spécialité. Les groupes de 8+ bénéficient d’un accompagnement dédié et de tarifs dégressifs. Nous avons géré un programme de 45 étudiants à Shanghai en 2024.',
  },
  {
    question: 'Gérez-vous les itinéraires multi-pays ?',
    answer:
      'Oui. Nous opérons régulièrement des combinaisons Chine + Japon, y compris demandes de visa séparées, vols et trains transfrontaliers, et guides alignés dans chaque pays.',
  },
];

const TRADE_FAQS_FR: Faq[] = [
  {
    question: 'Quelle est la quantité minimale de commande (MOQ) ?',
    answer:
      'Cela dépend du produit. L’électronique sur mesure démarre typiquement à 500–1 000 unités ; beaucoup de catégories de machines se vendent à l’unité ; le textile se négocie souvent par lot de 100 douzaines. Négocier les MOQ à la baisse pour les entreprises en croissance fait partie du travail de sourcing.',
  },
  {
    question: 'Comment assurez-vous la qualité des produits ?',
    answer:
      'Des inspections aux normes AQL sur le plan de production à environ 20 % et 80 % de la production, plus un contrôle pré-expédition avant le conteneur scellé. Vous recevez rapports photo et vidéo à chaque porte d’étape — avant que l’argent ne circule davantage.',
  },
  {
    question: 'Quels sont les délais d’expédition typiques de la Chine vers l’Inde ?',
    answer:
      'Fret maritime de Guangzhou/Shanghai/Ningbo vers Mundra ou JNPT : généralement 18–25 jours port à port, plus les douanes aux deux extrémités. Fret aérien : 3–7 jours porte à porte, à environ 5–8× le coût. Nous surveillons la congestion portuaire et réacheminons quand cela vaut le coup.',
  },
  {
    question: 'Gérez-vous le dédouanement et la certification BIS ?',
    answer:
      'Oui — classification HS, enregistrements BIS/WPC/CDSCO quand votre catégorie de produit l’exige, et séries documentaires complètes pré-déposées avant l’arrivée des marchandises au port, pour que le dédouanement n’attende jamais un papier.',
  },
  {
    question: 'Avec quelles conditions de paiement travaillez-vous ?',
    answer:
      'Standard : 30 % d’acompte par TT, 70 % contre copie du Bill of Lading. Les relations établies peuvent passer au LC à vue. Pour un premier engagement fournisseur, nous conseillons fortement l’escrow — jamais 100 % d’avance.',
  },
  {
    question: 'Supportez-vous la fabrication OEM et en marque de distributeur ?',
    answer:
      'Oui. Nous présélectionnons des usines qui font déjà du white-label dans votre catégorie, gérons la personnalisation des visuels/packagings et intégrons les contrôles de marque aux portes d’inspection standard.',
  },
  {
    question: 'Comment les litiges fournisseurs sont-ils gérés ?',
    answer:
      'Nous agissons comme votre représentant sur place avec des preuves documentées — photos, rapports AQL, fiches techniques bilingues. Les contrats que nous mettons en place incluent des spécifications qualité et des clauses de pénalité ; les cas non résolus vont en arbitrage avec notre dossier en appui.',
  },
  {
    question: 'Quelle est votre structure d’honoraires ?',
    answer:
      'Les missions commerce fonctionnent à la commission au succès indexée sur la valeur réellement expédiée — si l’affaire tombe à l’eau, vous ne nous devez que les coûts d’audit/inspection, cotés à l’avance. Pas de succès, pas de commission.',
  },
];

const GENERAL_FAQS_FR: Faq[] = [
  {
    question: 'Que fait réellement RouteToAbroad ?',
    answer:
      'Trois services connectés entre l’Inde et l’Asie de l’Est : nous plaçons des étudiants dans les universités chinoises (admissions, bourses, visas, arrivée), concevons des voyages privés et en groupe en Chine et au Japon, et menons sourcing, contrôle qualité et logistique pour des clients du commerce Inde–Chine.',
  },
  {
    question: 'Travaillez-vous uniquement avec des étudiants indiens ?',
    answer:
      'Notre cellule est la plus forte pour les étudiants et familles basés en Inde, mais nous plaçons aussi des étudiants du Golfe et d’Afrique via des agents partenaires, et nous construisons un desk Inde pour les candidats internationaux. Où que vous soyez, le test de compatibilité reste la même première étape.',
  },
  {
    question: 'Où se trouvent vos bureaux ?',
    answer:
      'New Delhi (Saket District Centre) et Canton (Victory Plaza, Tianhe District) — ce qui signifie que quelqu’un est éveillé et sur le terrain dans les deux fuseaux, du lundi au samedi.',
  },
  {
    question: 'Pouvez-vous garantir une admission, une bourse ou un visa ?',
    answer:
      'Non — et méfiez-vous de quiconque le promet. Les universités décident des admissions, les comités des bourses décident du financement, les ambassades décident des visas. Ce que nous garantissons : une évaluation honnête en amont, un dossier complet et correct, et quelqu’un de responsable à chaque étape.',
  },
  {
    question: 'Comment commencer ?',
    answer:
      'Faites le test de compatibilité en quatre questions pour les études, ou envoyez une demande depuis n’importe quelle page. Un conseiller répond sous un jour ouvré — 9h–18h IST, du lundi au samedi.',
  },
  {
    question: 'Vendez-vous mes données ou diffusez-vous des publicités sur ce site ?',
    answer:
      'Non. Nous ne collectons que ce que votre demande exige, ce site ne dépose aucun cookie publicitaire et il n’y a aucun script de suivi tiers.',
  },
  {
    question: 'Depuis combien de temps RouteToAbroad opère-t-il ?',
    answer:
      'Plus d’une décennie dans les services transfrontaliers entre l’Inde et la Chine.',
      // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'Dans quelles langues l’équipe travaille-t-elle ?',
    answer:
      'Anglais, hindi, malayalam et mandarin via le bureau de Canton — plus un soutien en langues locales via des partenaires pour les familles arabophones.',
  },
];

/* ------------------------------------------------------------------ */
/* ar — machine-assisted translation, pending native-speaker review.   */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_AR: Faq[] = [
  {
    question: 'هل درجة MBBS الصينية معترف بها في الهند؟',
    answer:
      'نعم، بشرط أن تكون الجامعة مدرجة في دليل WHO العالمي للكليات الطبية وعلى قائمة وزارة التعليم الصينية (MOE)، وأن تجتاز امتحان الترخيص الهندي FMGE/NExT بعد التخرج. نحن لا نوظف الطلاب إلا في الكليات الطبية الصينية المدرجة على قائمة MOE. هذه الفحوص ضرورية لكنها لا تكفي وحدها — قواعد أهلية NMC (بما فيها اجتياز NEET-UG واللوائح السارية لسنة قبولك) هي التي تحدد ما إذا كان المقعد المحدد يؤدي إلى التسجيل، لذا تحقق من جامعتك وسنة قبولك وفق قواعد NMC الحالية قبل دفع أي مبلغ.',
  },
  {
    question: 'هل المنح ممولة بالكامل؟',
    answer:
      'بعضها كذلك. منحة CSC (المنحة الحكومية الصينية) يمكن أن تغطي الرسوم الدراسية كاملة والمساكن والتأمين الصحي وراتبًا شهريًا — لكنها على أساس الجدارة وشديدة التنافسية. معظم العروض جزئية: رسوم دراسية فقط، أو رسوم مع سكن. لا نبيع منحًا كاملة مضمونة، ولا يمكن لأي شركة استشارات أمينة ذلك.',
  },
  {
    question: 'هل أحتاج إلى التحدث بالصينية للدراسة في الصين؟',
    answer:
      'ليست للقبول. البرامج المدرّسة بالإنجليزية (MBBS والهندسة والأعمال) لا تشترط الصينية عند القبول. لكن للحياة اليومية وتدريبات MBBS السريرية ستحتاج تقريبًا إلى HSK 4. تدريب HSK جزء من حزمة الدعم لدينا.',
  },
  {
    question: 'كم تستغرق إجراءات تأشيرة الطالب؟',
    answer:
      'عادةً من 4 إلى 8 أسابيع من استلام مستندات القبول (JW202/خطاب القبول) حتى التأشيرة بين يديك، حسب حجم عمل السفارة. نحن نعدّ الملف، نحجز الموعد، ونتدرب معك على أسئلة المقابلة المحتملة.',
  },
  {
    question: 'كم تكلّف الدراسة في الصين؟',
    answer:
      'الرسوم في الجامعات المعتمدة تتراوح عادةً بين 3,000 و8,000 دولار سنويًا حسب البرنامج والمدينة؛ والمساكن بين 500 و1,500 دولار سنويًا. استخدم حاسبة التكاليف لدينا لتقدير مخصص، وانتبه إلى أن منح CSC قد تُصفّر الرسوم الدراسية.',
  },
  {
    question: 'هل أستطيع العمل أثناء الدراسة في الصين؟',
    answer:
      'العمل بدوام جزئي ممكن بإذن خطي من جامعتك، وعادةً داخل الحرم. أما التدريب خارج الحرم فيتطلب موافقة إضافية من مؤسستك وسلطات الهجرة. معظم رواتب المنح مصممة لتغطية تكاليف المعيشة دون الحاجة للعمل.',
  },
  {
    question: 'متى يجب أن أتقدم لدفعة سبتمبر؟',
    answer:
      'ابدأ قبل 6–9 أشهر. مواعيد المنح النهائية تتكدس بين فبراير وأبريل؛ والطلبات الممولة ذاتيًا تجري لاحقًا لكن أفضل البرامج والمساكن تمتلئ أولًا. راجع مخطط الجدول الزمني للحصول على خطة تاريخًا بتاريخ.',
  },
  {
    question: 'هل التأمين الصحي إلزامي؟',
    answer:
      'نعم — كل طالب دولي في الصين يجب أن يحمل تأمينًا صحيًا طوال مدة إقامته. طلاب CSC يتلقونه ضمن المنحة؛ والطلاب الممولون ذاتيًا يشترونه عند التسجيل (عادةً 400–800 يوان سنويًا).',
  },
];

const TOURISM_FAQS_AR: Faq[] = [
  {
    question: 'كيف تعمل تأشيرة السياحة إلى الصين؟',
    answer:
      'معظم الزوار يحتاجون تأشيرة L (سياحية): نموذج طلب، صورة، برنامج رحلة وحجوزات فنادق، مع إثبات السفر اللاحق. مكتب الكونسيرج لدينا يعدّ الملف ويكتب خطاب البرنامج ويحجز الموعد. المعالجة المعتادة 4–7 أيام عمل.',
  },
  {
    question: 'ما هو أفضل وقت لزيارة الصين واليابان؟',
    answer:
      'الربيع (مارس–مايو) والخريف (سبتمبر–نوفمبر) يوفران أفضل طقس — موسم التزهير ثم أوراق الخريف. الصيف ذروة السفر الداخلي في الصين؛ الشتاء بارد لكنه الأرخص وفيه مهرجان الجليد في هاربين.',
  },
  {
    question: 'هل ترتبون اجتماعات أعمال وزيارات مصانع؟',
    answer:
      'نعم. عبر مكتب التجارة نرتب لوفود الأعمال جولات مصانع واجتماعات موردين وبرامج معرض كانتون ومقدمات مع غرف التجارة — مع مترجمين ثنائيي اللغة.',
  },
  {
    question: 'كيف تُعالج القيود الغذائية في الرحلة؟',
    answer:
      'يتم إحاطة المرشدين بالحساسيات والتفضيلات (نباتي، حلال، جايني، خالٍ من الغلوتين) قبل الوصول. نرشّح المطاعم مسبقًا، وتحصل على بطاقات تفضيلات بالصينية لتعرضها في أي مطعم.',
  },
  {
    question: 'هل تأمين السفر مشمول؟',
    answer:
      'الباقات الأساسية تتضمن تغطية قياسية. نقدم وثيقة مطوّرة مع إخلاء طبي وحماية للمعدات عالية القيمة كإضافة — ننصح بها بشدة لبرامج المغامرات وطريق الحرير.',
  },
  {
    question: 'ما هي سياسة الإلغاء لديكم؟',
    answer:
      'استرداد كامل حتى 30 يومًا قبل المغادرة. خلال 30 يومًا نرد كل ما يمكن استرداده من الفنادق والموردين — ونريك الإيصالات. لا رسوم إلغاء خفية من جهتنا.',
  },
  {
    question: 'هل تنظّمون رحلات جماعية وطلابية؟',
    answer:
      'نعم — الرحلات العائلية وخلوات الشركات والرحلات التعليمية للمدارس والكليات تخصص لدينا. المجموعات من 8 فأكثر تحصل على دعم تخطيط مخصص وأسعار مخفضة. أدرنا برنامجًا لـ45 طالبًا في شنغهاي عام 2024.',
  },
  {
    question: 'هل تديرون برامج متعددة الدول؟',
    answer:
      'نعم. نشغّل تركيبات الصين + اليابان بانتظام، بما يشمل طلبات تأشيرات منفصلة ورحلات جوية وسكك عابرة للحدود ومرشدين متناسقين في كل بلد.',
  },
];

const TRADE_FAQS_AR: Faq[] = [
  {
    question: 'ما هي الحد الأدنى لكمية الطلب (MOQ)؟',
    answer:
      'يعتمد على المنتج. الإلكترونيات المخصصة تبدأ عادةً من 500–1,000 وحدة؛ وكثير من فئات الآلات تُبَاع بالوحدة الواحدة؛ والمنسوجات غالبًا بدفعات من 100 دزينة. جزء من عملنا في التوريد هو التفاوض على خفض MOQ للأعمال النامية.',
  },
  {
    question: 'كيف تضمنون جودة المنتج؟',
    answer:
      'فحوص بمعيار AQL على أرض المصنع عند نحو 20% و80% من الإنتاج، إضافة إلى فحص قبل الشحن قبل إغلاق الحاوية. تحصل على تقارير مصورة ومصوطة عند كل بوابة — قبل أن تتحرك الأموال أكثر.',
  },
  {
    question: 'ما هي مدد الشحن المعتادة من الصين إلى الهند؟',
    answer:
      'الشحن البحري من قوانغتشو/شنغهاي/نينغبو إلى موندرا أو JNPT: عادةً 18–25 يومًا من ميناء إلى ميناء، إضافةً إلى الجمارك في الطرفين. الشحن الجوي: 3–7 أيام من باب إلى باب بتكلفة تقارب 5–8 أضعاف. نراقب ازدحام الموانئ ونعيد التوجيه عندما يكون ذلك مجديًا.',
  },
  {
    question: 'هل تتعاملون مع التخليص الجمركي وشهادة BIS؟',
    answer:
      'نعم — تصنيف HS، وتسجيلات BIS/WPC/CDSCO عندما تتطلبها فئة منتجك، ومجموعات مستندات كاملة تُقدَّم مسبقًا قبل وصول البضاعة إلى الميناء حتى لا ينتظر التخليص أي ورق.',
  },
  {
    question: 'ما هي شروط الدفع التي تعملون بها؟',
    answer:
      'المعتاد: عربون 30% عبر TT، و70% مقابل نسخة بوليصة الشحن. العلاقات الراسخة قد تنتقل إلى اعتماد مستندي LC عند الاطلاع. لأول تعامل مع مورد ننصح بشدة بحساب الوساطة (escrow) — أبدًا 100% دفعة مقدمة.',
  },
  {
    question: 'هل تدعمون التصنيع بعلامة OEM والملصق الخاص؟',
    answer:
      'نعم. نرشّح مصانع تعمل بالفعل بعلامة الغير في فئتك، وندير تخصيص التصاميم والتغليف، وندمج فحوص العلامة داخل بوابات الفحص القياسية.',
  },
  {
    question: 'كيف تُعالج نزاعات الموردين؟',
    answer:
      'نتصرف كممثلك على الأرض بأدلة موثقة — صور وتقارير AQL ومواصفات ثنائية اللغة. العقود التي نؤسسها تتضمن مواصفات جودة وشروط جزاء؛ والقضايا غير المحلولة تذهب إلى التحكيم بدعمنا ملفنا الكامل.',
  },
  {
    question: 'ما هي هيكلية أتعابكم؟',
    answer:
      'ملفات التجارة تعمل بعمولة نجاح مرتبطة بقيمة البضاعة المشحونة فعلًا — إذا ماتت الصفقة فلا يترتب عليك سوى تكاليف التدقيق/الفحص التي سُعّرت مسبقًا. لا نجاح، لا عمولة.',
  },
];

const GENERAL_FAQS_AR: Faq[] = [
  {
    question: 'ماذا تفعل RouteToAbroad فعلًا؟',
    answer:
      'ثلاث خدمات مترابطة بين الهند وشرق آسيا: نوظف الطلاب في الجامعات الصينية (قبول ومنح وتأشيرات ووصول)، ونصمم سفرًا خاصًا وجماعيًا عبر الصين واليابان، وندير التوريد ومراقبة الجودة واللوجستيات لعملاء التجارة بين الهند والصين.',
  },
  {
    question: 'هل تعملون مع الطلاب الهنود فقط؟',
    answer:
      'مكتبنا الأقوى للطلاب والعائلات المقيمين في الهند، لكننا نوظف أيضًا طلابًا من دول الخليج وأفريقيا عبر وكلاء شركاء، ونبني مكتبًا هنديًا للمتقدمين الدوليين. أينما كنت، فحص الملاءمة هو نفسه الخطوة الأولى.',
  },
  {
    question: 'أين مكاتبكم؟',
    answer:
      'نيودلهي (Saket District Centre) وقوانغتشو (Victory Plaza, Tianhe District) — أي أن أحدًا مستيقظ وموجود على الأرض في المنطقتين الزمنيتين، من الاثنين إلى السبت.',
  },
  {
    question: 'هل يمكنكم ضمان قبول أو منحة أو تأشيرة؟',
    answer:
      'لا — واشتبه بأي من يقول نعم. الجامعات تقرر القبول، ولجان المنح تقرر التمويل، والسفارات تقرر التأشيرات. ما نضمنه هو تقييم صادق مسبقًا، وملف كامل وصحيح، ومسؤول عن كل خطوة.',
  },
  {
    question: 'كيف أبدأ؟',
    answer:
      'أجرِ فحص الملاءمة من أربعة أسئلة للتعليم، أو أرسل استفسارًا من أي صفحة. يرد مستشار خلال يوم عمل واحد — 9:00–18:00 بالتوقيت الهندي، الاثنين إلى السبت.',
  },
  {
    question: 'هل تبيعون بياناتي أو تديرون إعلانات على هذا الموقع؟',
    answer:
      'لا. نجمع فقط ما يحتاجه استفسارك، والموقع لا يضع كوكيز إعلانية، ولا توجد سكربتات تتبع خارجية.',
  },
  {
    question: 'منذ متى تعمل RouteToAbroad؟',
    answer:
      'أكثر من عقد في الخدمات العابرة للحدود بين الهند والصين.',
      // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'بأي اللغات يعمل الفريق؟',
    answer:
      'الإنجليزية والهندية والماليالامية والماندرين عبر مكتب قوانغتشو — إضافةً إلى دعم باللغات المحلية عبر شركاء للعائلات الناطقة بالعربية.',
  },
];

/* ------------------------------------------------------------------ */
/* es — machine-assisted translation, pending native-speaker review.   */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_ES: Faq[] = [
  {
    question: '¿Está reconocido en India un título de MBBS chino?',
    answer:
      'Sí, siempre que la universidad figure en el Directorio Mundial de Facultades de Medicina de la OMS y en la lista del MOE de China, y que apruebes el examen de licencia FMGE/NExT tras graduarte. Solo colocamos estudiantes en facultades de medicina chinas de la lista del MOE. Estas comprobaciones son necesarias pero no suficientes por sí solas — las reglas de elegibilidad del NMC (incluida la calificación NEET-UG y la normativa vigente para tu año de admisión) deciden si una plaza concreta lleva al registro, así que verifica tu universidad y año de admisión exactos contra las reglas actuales del NMC antes de pagar nada.',
  },
  {
    question: '¿Las becas son de financiación completa?',
    answer:
      'Algunas sí. La beca CSC (Chinese Government Scholarship) puede cubrir la matrícula completa, residencia, seguro médico y una asignación mensual — pero es por mérito y competitiva. La mayoría de las ofertas son parciales: solo matrícula, o matrícula más alojamiento. No vendemos becas completas garantizadas, y ninguna consultoría honesta puede.',
  },
  {
    question: '¿Necesito hablar chino para estudiar en China?',
    answer:
      'No para matricularte. Los programas impartidos en inglés (MBBS, ingeniería, negocios) no exigen chino en la admisión. Para la vida diaria y las rotaciones clínicas del MBBS necesitarás alrededor de HSK 4. La preparación de HSK forma parte de nuestro paquete de apoyo.',
  },
  {
    question: '¿Cuánto tarda el trámite del visado de estudiante?',
    answer:
      'Normalmente entre 4 y 8 semanas desde recibir tus documentos de admisión (JW202/Admission Notice) hasta tener el visado, según la carga de la embajada. Preparamos el expediente, reservamos la cita y ensayamos contigo las posibles preguntas de entrevista.',
  },
  {
    question: '¿Cuánto cuesta estudiar en China?',
    answer:
      'La matrícula en universidades acreditadas suele ir de 3.000 a 8.000 US$ al año según el programa y la ciudad; las residencias de 500 a 1.500 US$ al año. Usa nuestra calculadora de costes para una estimación personalizada, y ten en cuenta que las becas CSC pueden reducir la matrícula a cero.',
  },
  {
    question: '¿Puedo trabajar mientras estudio en China?',
    answer:
      'El trabajo a tiempo parcial es posible con permiso por escrito de tu universidad, normalmente en el campus. Las prácticas fuera del campus requieren aprobación adicional de tu institución y de las autoridades de inmigración. La mayoría de las asignaciones de becas están calculadas para cubrir los gastos de vida sin trabajar.',
  },
  {
    question: '¿Cuándo debo solicitar el ingreso de septiembre?',
    answer:
      'Empieza con 6–9 meses de antelación. Los plazos de becas se concentran entre febrero y abril; las solicitudes autofinanciadas van más tarde, pero los mejores programas y residencias se llenan primero. Consulta el planificador para un plan fecha a fecha.',
  },
  {
    question: '¿El seguro médico es obligatorio?',
    answer:
      'Sí — todo estudiante internacional en China debe tener seguro médico durante toda su estancia. Los becarios CSC lo reciben dentro de la beca; los estudiantes autofinanciados lo compran en la matriculación (normalmente 400–800 ¥/año).',
  },
];

const TOURISM_FAQS_ES: Faq[] = [
  {
    question: '¿Cómo funciona el visado de turista para China?',
    answer:
      'La mayoría de los visitantes necesita un visado L (turista): formulario, foto, itinerario y reservas de hotel, más prueba de continuación del viaje. Nuestra conserjería prepara el expediente, redacta la carta de itinerario y reserva la cita. El procesamiento típico es de 4–7 días hábiles.',
  },
  {
    question: '¿Cuál es la mejor época para visitar China y Japón?',
    answer:
      'La primavera (marzo–mayo) y el otoño (septiembre–noviembre) dan el mejor clima — floración y follaje otoñal respectivamente. El verano es la temporada alta del turismo interno en China; el invierno es frío pero el más barato y trae el festival de hielo de Harbin.',
  },
  {
    question: '¿Pueden organizar reuniones de negocios y visitas a fábricas?',
    answer:
      'Sí. A través de nuestra mesa de comercio organizamos para delegaciones de negocios visitas a fábricas, reuniones con proveedores, itinerarios de la Canton Fair y presentaciones en cámaras de comercio — con intérpretes bilingües.',
  },
  {
    question: '¿Cómo se gestionan las restricciones alimentarias en el viaje?',
    answer:
      'Los guías reciben información sobre alergias y preferencias (vegetariano, halal, jainista, sin gluten) antes de la llegada. Preseleccionamos restaurantes y recibes tarjetas de preferencias en chino para mostrar en cualquier establecimiento.',
  },
  {
    question: '¿Está incluido el seguro de viaje?',
    answer:
      'Los paquetes base incluyen cobertura estándar. Ofrecemos como extra una póliza mejorada con evacuación médica y protección de equipo de alto valor — la recomendamos encarecidamente para itinerarios de aventura y Ruta de la Seda.',
  },
  {
    question: '¿Cuál es su política de cancelación?',
    answer:
      'Reembolso total hasta 30 días antes de la salida. Dentro de los 30 días devolvemos todo lo recuperable de hoteles y proveedores — te mostramos los recibos. Sin cargos ocultos de cancelación por nuestra parte.',
  },
  {
    question: '¿Organizáis tours en grupo y para estudiantes?',
    answer:
      'Sí — familias, salidas corporativas y viajes educativos de colegios y universidades son nuestra especialidad. Los grupos de 8+ reciben apoyo de planificación dedicado y tarifas reducidas. Gestionamos un programa de 45 estudiantes en Shanghái en 2024.',
  },
  {
    question: '¿Gestionáis itinerarios de varios países?',
    answer:
      'Sí. Operamos combinaciones China + Japón con regularidad, incluidas solicitudes de visado separadas, vuelos y trenes transfronterizos, y guías coordinados en cada país.',
  },
];

const TRADE_FAQS_ES: Faq[] = [
  {
    question: '¿Cuál es la cantidad mínima de pedido (MOQ)?',
    answer:
      'Depende del producto. La electrónica a medida suele empezar en 500–1.000 unidades; muchas categorías de maquinaria se venden por unidad; los textiles a menudo por lotes de 100 docenas. Parte de nuestro trabajo de sourcing es negociar los MOQ a la baja para negocios en crecimiento.',
  },
  {
    question: '¿Cómo garantizan la calidad del producto?',
    answer:
      'Inspecciones con estándar AQL en la planta aproximadamente al 20% y al 80% de la producción, más una verificación previa al embarque antes de sellar el contenedor. Recibes informes con fotos y vídeo en cada puerta — antes de que el dinero siga moviéndose.',
  },
  {
    question: '¿Cuáles son los tiempos de envío típicos de China a India?',
    answer:
      'Marítimo desde Guangzhou/Shanghai/Ningbo a Mundra o JNPT: normalmente 18–25 días puerto a puerto, más aduanas en ambos extremos. Aéreo: 3–7 días puerta a puerta a un costo de unas 5–8 veces más. Vigilamos la congestión portuaria y redirigimos cuando compensa.',
  },
  {
    question: '¿Pueden gestionar el despacho aduanero y la certificación BIS?',
    answer:
      'Sí — clasificación HS, registros BIS/WPC/CDSCO cuando tu categoría de producto los requiere, y juegos completos de documentos pre-presentados antes de que la mercancía llegue al puerto, para que el despacho nunca espere papeleo.',
  },
  {
    question: '¿Con qué condiciones de pago trabajan?',
    answer:
      'Lo estándar: 30% de anticipo por TT y 70% contra copia del Bill of Lading. Las relaciones consolidadas pueden pasar a LC a la vista. Para un primer proveedor recomendamos encarecidamente escrow — nunca 100% por adelantado.',
  },
  {
    question: '¿Apoyan la fabricación OEM y de marca blanca?',
    answer:
      'Sí. Preseleccionamos fábricas que ya fabrican marca blanca en tu categoría, gestionamos la personalización de arte/empaque e integramos las comprobaciones de marca en las puertas de inspección estándar.',
  },
  {
    question: '¿Cómo se gestionan las disputas con proveedores?',
    answer:
      'Actuamos como tu representante en tierra con evidencia documentada — fotos, informes AQL, fichas técnicas bilingües. Los contratos que montamos incluyen especificaciones de calidad y cláusulas de penalización; los casos no resueltos van a arbitraje con nuestro expediente como respaldo.',
  },
  {
    question: '¿Cuál es su estructura de honorarios?',
    answer:
      'Los encargos comerciales funcionan con una comisión de éxito ligada al valor de la mercancía realmente embarcada — si el trato muere, solo nos debes los costos de auditoría/inspección, cotizados por adelantado. Sin éxito, sin comisión.',
  },
];

const GENERAL_FAQS_ES: Faq[] = [
  {
    question: '¿Qué hace realmente RouteToAbroad?',
    answer:
      'Tres servicios conectados entre India y Asia Oriental: colocamos estudiantes en universidades chinas (admisiones, becas, visados, llegada), diseñamos viajes privados y en grupo por China y Japón, y gestionamos sourcing, control de calidad y logística para clientes de comercio India–China.',
  },
  {
    question: '¿Solo trabajan con estudiantes indios?',
    answer:
      'Nuestra mesa es más fuerte para estudiantes y familias basados en India, pero también colocamos estudiantes del Golfo y África mediante agentes asociados, y estamos construyendo una mesa de India para solicitantes internacionales. Estés donde estés, el fit check es el mismo primer paso.',
  },
  {
    question: '¿Dónde están sus oficinas?',
    answer:
      'Nueva Delhi (Saket District Centre) y Cantón (Victory Plaza, Tianhe District) — lo que significa que siempre hay alguien despierto y sobre el terreno en ambas zonas horarias, de lunes a sábado.',
  },
  {
    question: '¿Pueden garantizar la admisión, una beca o un visado?',
    answer:
      'No — y desconfía de quien diga que sí. Las universidades deciden las admisiones, los comités de becas deciden la financiación, las embajadas deciden los visados. Lo que garantizamos es una evaluación honesta por adelantado, un expediente completo y correcto, y alguien responsable en cada paso.',
  },
  {
    question: '¿Cómo empiezo?',
    answer:
      'Haz el fit check de cuatro preguntas para estudios, o envía una consulta desde cualquier página. Un asesor responde dentro de un día hábil — 9:00–18:00 IST, de lunes a sábado.',
  },
  {
    question: '¿Venden mis datos o muestran anuncios en este sitio?',
    answer:
      'No. Recopilamos solo lo que tu consulta necesita, este sitio no instala cookies publicitarias y no hay scripts de rastreo de terceros.',
  },
  {
    question: '¿Cuánto tiempo lleva RouteToAbroad operando?',
    answer:
      'Más de una década en servicios transfronterizos entre India y China.',
      // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: '¿En qué idiomas trabaja el equipo?',
    answer:
      'Inglés, hindi, malayalam y mandarín a través de la oficina de Cantón — más soporte en idiomas locales mediante socios para familias arabófonas.',
  },
];

/* ------------------------------------------------------------------ */
/* de — machine-assisted translation, pending native-speaker review.   */
/* Sie-form throughout. Same question count and order as the en set.   */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_DE: Faq[] = [
  {
    question: 'Wird ein chinesischer MBBS-Abschluss in Indien anerkannt?',
    answer:
      'Ja, sofern die Hochschule im WHO World Directory of Medical Schools und auf der MOE-Liste Chinas geführt wird und Sie nach dem Abschluss die indische Lizenzprüfung FMGE/NExT bestehen. Wir vermitteln Studierende ausschließlich an MOE-gelistete chinesische Medizinuniversitäten. Diese Prüfungen sind notwendig, aber für sich allein nicht ausreichend — die Eignungsregeln des NMC (einschließlich der NEET-UG-Qualifikation und der für Ihr Zulassungsjahr geltenden Vorschriften) entscheiden, ob ein konkreter Studienplatz zur Registrierung führt; prüfen Sie daher Ihre exakte Hochschule und Ihr Zulassungsjahr anhand der aktuellen NMC-Bestimmungen, bevor Sie irgendetwas bezahlen.',
  },
  {
    question: 'Sind Stipendien voll finanziert?',
    answer:
      'Manche sind es. Das CSC (Chinese Government Scholarship) kann die vollen Studiengebühren, das Wohnheim, die Krankenversicherung und eine monatliche Zuwendung abdecken — es ist jedoch leistungsbasiert und umkämpft. Die meisten Angebote sind teilweise: nur Studiengebühren oder Gebühren plus Unterkunft. Wir verkaufen keine garantierten Vollstipendien, und keine ehrliche Beratungsagentur kann das.',
  },
  {
    question: 'Muss ich Chinesisch sprechen, um in China zu studieren?',
    answer:
      'Für die Einschreibung nicht. Englischsprachige Studiengänge (MBBS, Ingenieurwesen, Wirtschaft) verlangen bei der Zulassung kein Chinesisch. Für den Alltag und die klinischen MBBS-Rotationen benötigen Sie etwa HSK 4. Das HSK-Training ist Teil unseres Betreuungspakets.',
  },
  {
    question: 'Wie lange dauert der Prozess für das Studentenvisum?',
    answer:
      'In der Regel 4–8 Wochen vom Erhalt Ihrer Zulassungsunterlagen (JW202/Admission Notice) bis zum Visum in der Hand, je nach Auslastung der Botschaft. Wir bereiten die Unterlagen vor, buchen den Termin und üben mit Ihnen mögliche Interviewfragen.',
  },
  {
    question: 'Was kostet das Studium in China?',
    answer:
      'Die Studiengebühren an akkreditierten Universitäten liegen typischerweise bei 3.000–8.000 US$ pro Jahr, je nach Studiengang und Stadt; Wohnheime bei 500–1.500 US$ pro Jahr. Nutzen Sie unseren Kostenrechner für eine individuelle Schätzung, und beachten Sie, dass CSC-Stipendien die Studiengebühren auf null senken können.',
  },
  {
    question: 'Kann ich während des Studiums in China arbeiten?',
    answer:
      'Teilzeitarbeit ist mit schriftlicher Genehmigung Ihrer Universität möglich, meist auf dem Campus. Praktika außerhalb des Campus brauchen eine zusätzliche Genehmigung Ihrer Hochschule und der Einwanderungsbehörden. Die meisten Stipendienzuwendungen sind darauf ausgelegt, die Lebenshaltungskosten ohne Arbeit zu decken.',
  },
  {
    question: 'Wann sollte ich mich für das September-Intake bewerben?',
    answer:
      'Beginnen Sie 6–9 Monate im Voraus. Stipendienfristen ballen sich zwischen Februar und April; selbstfinanzierte Bewerbungen laufen später, aber die besten Studiengänge und Wohnheime füllen sich zuerst. Im Zeitlinienplaner finden Sie einen Plan Termin für Termin.',
  },
  {
    question: 'Ist eine Krankenversicherung verpflichtend?',
    answer:
      'Ja — jeder internationale Studierende in China muss für die gesamte Aufenthaltsdauer eine Krankenversicherung haben. CSC-Stipendiaten erhalten sie innerhalb des Stipendiums; selbstfinanzierte Studierende kaufen sie bei der Registrierung (typischerweise ¥400–800/Jahr).',
  },
];

const TOURISM_FAQS_DE: Faq[] = [
  {
    question: 'Wie funktioniert das Touristenvisum für China?',
    answer:
      'Die meisten Besucher benötigen ein L-Visum (Touristenvisum): Antragsformular, Foto, Reiseroute und Hotelbuchungen sowie ein Nachweis der Weiterreise. Unser Concierge-Desk bereitet die Unterlagen vor, verfasst den Reiseroutenbrief und bucht den Termin. Die Bearbeitung dauert typischerweise 4–7 Arbeitstage.',
  },
  {
    question: 'Wann ist die beste Reisezeit für China und Japan?',
    answer:
      'Frühling (März–Mai) und Herbst (September–November) bieten das beste Wetter — Blütezeit bzw. Herbstlaub. Der Sommer ist die Hochsaison des Inlandsreisens in China; der Winter ist kalt, aber am günstigsten und bringt das Eisfestival von Harbin.',
  },
  {
    question: 'Können Sie Geschäftstreffen und Werksbesuche organisieren?',
    answer:
      'Ja. Über unseren Trade-Desk organisieren wir für Geschäftsdelegationen Werksführungen, Lieferantentreffen, Canton-Fair-Programme und Einführungen bei Handelskammern — mit zweisprachigen Dolmetschern.',
  },
  {
    question: 'Wie werden Ernährungseinschränkungen auf der Reise gehandhabt?',
    answer:
      'Die Guides werden vor der Ankunft über Allergien und Präferenzen (vegetarisch, halal, jainistisch, glutenfrei) informiert. Wir prüfen Restaurants vorab, und Sie erhalten Präferenzkarten auf Chinesisch, die Sie in jedem Restaurant vorzeigen können.',
  },
  {
    question: 'Ist eine Reiseversicherung enthalten?',
    answer:
      'Basispakete enthalten einen Standardschutz. Als Zusatz bieten wir eine aufgewertete Police mit medizinischer Evakuierung und Schutz für hochwertige Ausrüstung — dringend empfohlen für Abenteuer- und Seidenstraßenrouten.',
  },
  {
    question: 'Wie ist Ihre Stornierungsrichtlinie?',
    answer:
      'Vollständige Rückerstattung bis 30 Tage vor Abreise. Innerhalb von 30 Tagen erstatten wir alles, was von Hotels und Lieferanten zurückgewinnbar ist — wir zeigen Ihnen die Belege. Keine versteckten Stornogebühren auf unserer Seite.',
  },
  {
    question: 'Organisieren Sie Gruppen- und Studienreisen?',
    answer:
      'Ja — Familien, Firmen-Offsites und Bildungsreisen für Schulen/Hochschulen sind unsere Spezialität. Gruppen ab 8 Personen erhalten eigene Planungsunterstützung und vergünstigte Tarife. 2024 haben wir ein Shanghai-Programm für 45 Studierende betreut.',
  },
  {
    question: 'Können Sie Mehrfachländer-Reiserouten abwickeln?',
    answer:
      'Ja. Wir betreiben regelmäßig China-+-Japan-Kombinationen, einschließlich getrennter Visumanträge, grenzüberschreitender Flüge und Bahnverbindungen sowie abgestimmter Guides in jedem Land.',
  },
];

const TRADE_FAQS_DE: Faq[] = [
  {
    question: 'Was ist die Mindestbestellmenge (MOQ)?',
    answer:
      'Das hängt vom Produkt ab. Kundenspezifische Elektronik beginnt typischerweise bei 500–1.000 Einheiten; viele Maschinenkategorien werden einzeln verkauft; Textilien oft in 100-Dutzend-Losen. Teil unserer Sourcing-Arbeit ist es, MOQs für wachsende Unternehmen nach unten zu verhandeln.',
  },
  {
    question: 'Wie stellen Sie die Produktqualität sicher?',
    answer:
      'AQL-Standard-Inspektionen direkt in der Fabrik bei etwa 20 % und 80 % der Produktion, plus eine Vorversandkontrolle, bevor der Container versiegelt wird. Sie erhalten an jedem Gate Foto- und Videoberichte — bevor weiteres Geld fließt.',
  },
  {
    question: 'Wie lang sind die typischen Versandzeiten von China nach Indien?',
    answer:
      'Seefracht von Guangzhou/Shanghai/Ningbo nach Mundra oder JNPT: typischerweise 18–25 Tage Hafen zu Hafen, plus Zoll auf beiden Seiten. Luftfracht: 3–7 Tage Tür zu Tür bei etwa dem 5–8-fachen der Kosten. Wir überwachen die Hafenüberlastung und routen um, wenn es sich lohnt.',
  },
  {
    question: 'Können Sie Zollabwicklung und BIS-Zertifizierung übernehmen?',
    answer:
      'Ja — HS-Klassifizierung, BIS-/WPC-/CDSCO-Registrierungen, wo Ihre Produktkategorie sie verlangt, und vollständige Dokumentensätze, die vorgelegt werden, bevor die Ware den Hafen erreicht, damit die Abfertigung nie auf Papierkram wartet.',
  },
  {
    question: 'Mit welchen Zahlungsbedingungen arbeiten Sie?',
    answer:
      'Standard sind 30 % Anzahlung per TT, 70 % gegen Kopie des Bill of Lading. Etablierte Beziehungen können auf LC bei Sicht umstellen. Für erste Lieferantenengagements empfehlen wir dringend Escrow — niemals 100 % Vorauszahlung.',
  },
  {
    question: 'Unterstützen Sie OEM- und Private-Label-Fertigung?',
    answer:
      'Ja. Wir wählen Fabriken vor, die in Ihrer Kategorie bereits White-Label produzieren, verwalten die Anpassung von Artwork/Verpackung und integrieren die Markenprüfungen in die Standard-Inspektionsgates.',
  },
  {
    question: 'Wie werden Lieferantenstreitigkeiten gehandhabt?',
    answer:
      'Wir agieren als Ihr Vertreter vor Ort mit dokumentierten Nachweisen — Fotos, AQL-Berichte, zweisprachige Spezifikationsblätter. Von uns eingerichtete Verträge enthalten Qualitätsspezifikationen und Vertragsstrafenklauseln; ungelöste Fälle gehen mit unserer Akte als Unterstützung in die Schiedsgerichtsbarkeit.',
  },
  {
    question: 'Wie ist Ihre Gebührenstruktur?',
    answer:
      'Trade-Engagements laufen über eine Erfolgsgebühr, die am Wert der tatsächlich versandten Ware hängt — scheitert das Geschäft, schulden Sie uns nur die vorab kalkulierten Audit-/Inspektionskosten. Kein Erfolg, keine Erfolgsgebühr.',
  },
];

const GENERAL_FAQS_DE: Faq[] = [
  {
    question: 'Was macht RouteToAbroad eigentlich?',
    answer:
      'Drei verbundene Dienstleistungen zwischen Indien und Ostasien: Wir vermitteln Studierende an chinesische Universitäten (Zulassung, Stipendien, Visa, Ankunft), planen private und Gruppenreisen durch China und Japan und übernehmen Sourcing, Qualitätskontrolle und Logistik für Indien–China-Handelskunden.',
  },
  {
    question: 'Arbeiten Sie nur mit indischen Studierenden?',
    answer:
      'Unser Desk ist am stärksten für in Indien ansässige Studierende und Familien, aber wir vermitteln über Partneragenturen auch Studierende aus den GCC-Ländern und Afrika und bauen einen India-Desk für internationale Bewerber auf. Wo auch immer Sie sind — der Fit-Check ist derselbe erste Schritt.',
  },
  {
    question: 'Wo befinden sich Ihre Büros?',
    answer:
      'New Delhi (Saket District Centre) und Guangzhou (Victory Plaza, Tianhe District) — das bedeutet, dass jemand in beiden Zeitzonen wach und vor Ort ist, Montag bis Samstag.',
  },
  {
    question: 'Können Sie eine Zulassung, ein Stipendium oder ein Visum garantieren?',
    answer:
      'Nein — und seien Sie misstrauisch gegenüber jedem, der Ja sagt. Universitäten entscheiden über Zulassungen, Stipendienkommissionen über Förderungen, Botschaften über Visa. Was wir garantieren, ist eine ehrliche Einschätzung im Vorfeld, eine vollständige und korrekte Akte und jemanden, der für jeden Schritt verantwortlich ist.',
  },
  {
    question: 'Wie fange ich an?',
    answer:
      'Machen Sie den Fit-Check mit vier Fragen für das Studium oder senden Sie über eine beliebige Seite eine Anfrage. Ein Berater antwortet innerhalb eines Werktags — 9:00–18:00 IST, Montag bis Samstag.',
  },
  {
    question: 'Verkaufen Sie meine Daten oder schalten Sie Werbung auf dieser Website?',
    answer:
      'Nein. Wir erheben nur, was Ihre Anfrage benötigt, diese Website setzt keine Werbe-Cookies, und es gibt keine Tracking-Skripte von Drittanbietern.',
  },
  {
    question: 'Wie lange ist RouteToAbroad schon tätig?',
    answer:
      'Über ein Jahrzehnt in grenzüberschreitenden Dienstleistungen zwischen Indien und China.',
    // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'In welchen Sprachen arbeitet das Team?',
    answer:
      'Englisch, Hindi, Malayalam und Mandarin über das Guangzhouer Büro — dazu Sprachunterstützung vor Ort über Partner für arabischsprachige Familien.',
  },
];

/* ------------------------------------------------------------------ */
/* ja — machine-assisted translation, pending native-speaker review.   */
/* です/ます register throughout. Same question count and order as en.  */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_JA: Faq[] = [
  {
    question: '中国のMBBS学位はインドで認められていますか？',
    answer:
      'はい。ただし、大学がWHO世界医学校名簿と中国教育部（MOE）リストの両方に掲載されており、卒業後にインドのライセンス試験FMGE/NExTに合格することが条件です。私たちはMOE掲載の中国の医科大学にのみ学生を送り出しています。これらの確認は必要条件ですが、それだけで十分ではありません——NMCの適格規則（NEET-UGの資格や入学年度に適用される規則を含む）が、特定の枠が登録につながるかどうかを決めます。したがって、支払いの前に、現行のNMC規則に基づいてご自身の大学と入学年度を必ず確認してください。',
  },
  {
    question: '奨学金は全額支給ですか？',
    answer:
      '全額のものもあります。CSC（中国政府奨学金）は学費全額、寮、医療保険、毎月の手当をカバーできますが、成績基準で競争が激しいです。ほとんどのオファーは部分支給です：学費のみ、または学費＋宿舎。当社は「全額奨学金保証」を販売しません。誠実なコンサルティング会社であればどこも販売できません。',
  },
  {
    question: '中国で勉強するのに中国語は必要ですか？',
    answer:
      '入学には必要ありません。英語授業のプログラム（MBBS、工学、ビジネス）は入学時に中国語を要求しません。ただし日常生活やMBBSの臨床実習にはHSK 4程度が必要です。HSK対策は当社のサポートパッケージに含まれています。',
  },
  {
    question: '学生ビザの手続きにはどれくらいかかりますか？',
    answer:
      '通常、入学書類（JW202/Admission Notice）を受け取ってからビザが手元に届くまで4～8週間ほどで、大使館の業務量によります。当社が書類を準備し、予約を取り、面接で聞かれうる質問の練習まで行います。',
  },
  {
    question: '中国での勉強にはいくらかかりますか？',
    answer:
      '認可された大学の学費は通常、プログラムと都市により年間3,000～8,000米ドル、寮は年間500～1,500米ドルです。費用計算ツールで個別の見積もりを取得でき、CSC奨学金を利用すれば学費がゼロになる場合もあります。',
  },
  {
    question: '中国での勉強中にアルバイトはできますか？',
    answer:
      '大学の書面による許可があれば、通常はキャンパス内でアルバイトが可能です。キャンパス外のインターンシップには、所属大学と出入国管理当局の追加承認が必要です。ほとんどの奨学金の手当は、アルバイトなしで生活費を賄えるよう設計されています。',
  },
  {
    question: '9月入学の出願はいつ始めるべきですか？',
    answer:
      '6～9か月前に始めてください。奨学金の締め切りは2月から4月に集中します。自己資金の出願はそれ以降も可能ですが、良いプログラムや寮から埋まっていきます。日々の計画はタイムラインプランナーをご覧ください。',
  },
  {
    question: '健康保険は必須ですか？',
    answer:
      'はい——中国ではすべての留学生が在学期間中、健康保険に加入しなければなりません。CSC奨学生は奨学金に含まれています。自己資金の学生は登録時に購入します（通常、年間400～800元）。',
  },
];

const TOURISM_FAQS_JA: Faq[] = [
  {
    question: '中国の観光ビザはどのように機能しますか？',
    answer:
      'ほとんどの訪問者にはL（観光）ビザが必要です：申請書、写真、旅程表、ホテル予約、それに帰路の証明。当社のコンシェルジュデスクが書類を準備し、旅程説明書を作成し、予約を取ります。処理には通常4～7営業日かかります。',
  },
  {
    question: '中国と日本を訪れるのに最適な時期は？',
    answer:
      '春（3～5月）と秋（9～11月）が最も良い気候です——それぞれ花の季節と紅葉の季節です。夏は中国の国内旅行のピークシーズン。冬は寒いですが最も安く、ハルビンの氷祭りがあります。',
  },
  {
    question: '商談や工場見学を手配できますか？',
    answer:
      'はい。貿易デスクを通じて、ビジネス視察団のために工場見学、サプライヤーとの商談、広州貿易会（Canton Fair）の日程、商工会議所の紹介を手配します——バイリンガル通訳付き。',
  },
  {
    question: 'ツアー中の食事制限にはどのように対応しますか？',
    answer:
      '到着前にガイドがアレルギーや食の好み（ベジタリアン、ハラール、ジャイナ教、グルテンフリー）について説明を受けます。レストランを事前に審査し、どの店でも提示できる中国語の好みカードをお渡しします。',
  },
  {
    question: '旅行保険は含まれていますか？',
    answer:
      '基本パッケージには標準補償が含まれます。医学的搬送や高価な機材の保護を含む上位プランをオプションでご用意しています——アドベンチャーやシルクロードの旅程には強くお勧めします。',
  },
  {
    question: 'キャンセルポリシーはどうなっていますか？',
    answer:
      '出発30日前までは全額返金です。30日以内の場合は、ホテルやサプライヤーから回収できる分をすべて返金します——領収書をお見せします。当社側に隠れたキャンセル料はありません。',
  },
  {
    question: '団体ツアーや学生ツアーも企画していますか？',
    answer:
      'はい——家族旅行、企業の社内研修、学校・大学の教育旅行が得意分野です。8名以上のグループには専任の企画サポートと団体割引を提供します。2024年には上海で45名の学生プログラムを担当しました。',
  },
  {
    question: '複数国をめぐる旅程にも対応できますか？',
    answer:
      'はい。中国＋日本の組み合わせを定期的に手がけています。別々のビザ申請、国境を越えるフライトや鉄道、各国での現地ガイドの手配も含まれます。',
  },
];

const TRADE_FAQS_JA: Faq[] = [
  {
    question: '最小発注数量（MOQ）はどのくらいですか？',
    answer:
      '製品によります。カスタム電子機器は通常500～1,000個から。多くの機械カテゴリーは単体で販売され、繊維はしばしば100ダース単位です。成長中の企業のためにMOQを引き下げ交渉することも、ソーシング業務の一部です。',
  },
  {
    question: '製品の品質はどのように保証しますか？',
    answer:
      '生産の約20％と80％の時点で工場現場にてAQL基準の検品を行い、コンテナの封印前にも出荷前検査を実施します。各ゲートで写真と動画の報告書をお渡しします——資金がさらに動く前に。',
  },
  {
    question: '中国からインドへの輸送期間は通常どのくらいですか？',
    answer:
      '広州/上海/寧波からムンドラまたはJNPTまでの海上輸送：通常、港から港まで18～25日、両端の通関は別です。航空便は戸口から戸口まで3～7日で、費用は約5～8倍です。港の混雑を監視し、得であれば経路を変更します。',
  },
  {
    question: '通関やBIS認証にも対応できますか？',
    answer:
      'はい——HS分類、製品カテゴリーに必要なBIS/WPC/CDSCO登録、そして貨物が港に到着する前に書類一式を事前提出するため、通関が書類待ちになることはありません。',
  },
  {
    question: 'どのような支払い条件に対応していますか？',
    answer:
      '標準はTT送金で30％の手付金、船荷証券（B/L）のコピーと引き換えに70％です。取引実績があれば一覧払い信用状（LC at sight）への移行も可能です。初取引のサプライヤーにはエスクローを強く推奨します——100％前払いは絶対に避けてください。',
  },
  {
    question: 'OEMやプライベートブランド製造にも対応していますか？',
    answer:
      'はい。すでにお客様のカテゴリーでホワイトラベル製造を行っている工場をリストアップし、アートワーク・パッケージのカスタマイズを管理し、ブランド確認を標準の検査ゲートに組み込みます。',
  },
  {
    question: 'サプライヤーとの紛争にはどのように対応しますか？',
    answer:
      '写真、AQL報告書、バイリンガル仕様書など、文書化された証拠とともに、現地の代理人として行動します。当社が整える契約には品質仕様と違約条項が含まれ、解決しない案件は当社の記録を裏付けとして仲裁に付されます。',
  },
  {
    question: '料金体系はどうなっていますか？',
    answer:
      '貿易案件は、実際に出荷された貨物の価値に連動する成功報酬で運営されます——取引が不成立の場合、事前に見積もられた監査・検品費用のみをお支払いいただきます。成功しなければ成功報酬はありません。',
  },
];

const GENERAL_FAQS_JA: Faq[] = [
  {
    question: 'RouteToAbroadは具体的に何をしているのですか？',
    answer:
      'インドと東アジアをつなぐ3つの連携サービスです：中国の大学への留学（入学、奨学金、ビザ、到着後の支援）、中国・日本をめぐる個人・団体旅行の企画、そしてインド－中国貿易のお客様向けのソーシング、品質管理、ロジスティクスです。',
  },
  {
    question: 'インド人学生だけを対象にしていますか？',
    answer:
      'インド在住の学生とご家族が最も得意な分野ですが、パートナー代理店を通じてGCC諸国やアフリカからの学生も受け入れており、国際的な出願者のためのインドデスクを整備中です。どの場所にお住まいでも、まずは適合チェックから始まります。',
  },
  {
    question: 'オフィスはどこにありますか？',
    answer:
      'ニューデリー（Saket District Centre）と広州（天河区・Victory Plaza）です。つまり月曜から土曜まで、両方のタイムゾーンで誰かが起きて現場にいるということです。',
  },
  {
    question: '入学、奨学金、ビザを保証してもらえますか？',
    answer:
      'いいえ——そう言う人を疑うべきです。入学は大学が、奨学金は委員会が、ビザは大使館が決定します。当社が保証するのは、事前の誠実な評価、完全かつ正確な書類、そして各段階で責任を持つ担当者がいることです。',
  },
  {
    question: 'どう始めればよいですか？',
    answer:
      '教育向けの4問の適合チェックを受けるか、どのページからでもお問い合わせを送ってください。アドバイザーが1営業日以内に返信します——月曜から土曜、9:00～18:00（IST）。',
  },
  {
    question: '私のデータを販売したり、サイトに広告を掲載したりしますか？',
    answer:
      'いいえ。お問い合わせに必要な情報のみを収集し、当サイトは広告用Cookieを設定せず、第三者のトラッキングスクリプトもありません。',
  },
  {
    question: 'RouteToAbroadはどれくらいの期間運営されていますか？',
    answer:
      'インドと中国の間の越境サービスに10年以上携わっています。',
    // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'チームはどの言語で対応していますか？',
    answer:
      '英語、ヒンディー語、マラヤーラム語、そして広州オフィスによる中国語——さらにパートナーを通じて、アラビア語圏のご家族に現地言語のサポートを提供しています。',
  },
];

/* ------------------------------------------------------------------ */
/* pt — machine-assisted translation, pending native-speaker review.   */
/* Neutral Portuguese with a Brazilian lean. Same count/order as en.   */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_PT: Faq[] = [
  {
    question: 'Um diploma de MBBS chinês é reconhecido na Índia?',
    answer:
      'Sim, desde que a universidade conste do WHO World Directory of Medical Schools e da lista do MOE da China, e que você passe no exame de licenciamento indiano FMGE/NExT depois de se formar. Colocamos alunos apenas em faculdades de medicina chinesas listadas pelo MOE. Essas verificações são necessárias, mas não suficientes por si só — as regras de elegibilidade do NMC (incluindo a qualificação NEET-UG e a regulamentação vigente para o seu ano de admissão) decidem se uma vaga específica leva ao registro, por isso confirme sua universidade e seu ano de admissão contra as regras atuais do NMC antes de pagar qualquer valor.',
  },
  {
    question: 'As bolsas são totalmente financiadas?',
    answer:
      'Algumas são. A CSC (Chinese Government Scholarship) pode cobrir a mensalidade integral, o alojamento, o seguro de saúde e uma bolsa mensal — mas é baseada em mérito e concorrida. A maioria das ofertas é parcial: só mensalidade, ou mensalidade mais alojamento. Não vendemos bolsas integrais garantidas, e nenhuma consultoria honesta pode.',
  },
  {
    question: 'Preciso falar chinês para estudar na China?',
    answer:
      'Para a matrícula, não. Os programas ministrados em inglês (MBBS, engenharia, negócios) não exigem chinês na admissão. Para o dia a dia e os estágios clínicos do MBBS, você vai precisar de cerca de HSK 4. O treinamento de HSK faz parte do nosso pacote de suporte.',
  },
  {
    question: 'Quanto tempo leva o processo do visto de estudante?',
    answer:
      'Normalmente de 4 a 8 semanas entre receber seus documentos de admissão (JW202/Admission Notice) e ter o visto em mãos, dependendo da carga da embaixada. Preparamos o dossiê, agendamos o atendimento e ensaiamos com você as possíveis perguntas da entrevista.',
  },
  {
    question: 'Quanto custa estudar na China?',
    answer:
      'A mensalidade em universidades credenciadas costuma ficar entre US$ 3.000 e 8.000 por ano, dependendo do programa e da cidade; os alojamentos, entre US$ 500 e 1.500 por ano. Use nossa calculadora de custos para uma estimativa personalizada, e saiba que bolsas CSC podem zerar a mensalidade.',
  },
  {
    question: 'Posso trabalhar enquanto estudo na China?',
    answer:
      'O trabalho em meio período é possível com autorização por escrito da universidade, geralmente no campus. Estágios fora do campus exigem aprovação adicional da instituição e das autoridades de imigração. A maioria dos estipêndios de bolsa é calculada para cobrir os custos de vida sem trabalho.',
  },
  {
    question: 'Quando devo me candidatar para o ingresso de setembro?',
    answer:
      'Comece com 6 a 9 meses de antecedência. Os prazos das bolsas se concentram entre fevereiro e abril; as candidaturas autofinanciadas vão mais tarde, mas os melhores programas e alojamentos esgotam primeiro. Veja o planejador de cronograma para um plano data por data.',
  },
  {
    question: 'O seguro de saúde é obrigatório?',
    answer:
      'Sim — todo estudante internacional na China deve ter seguro de saúde durante toda a estadia. Bolsistas da CSC o recebem dentro da bolsa; estudantes autofinanciados o compram no registro (normalmente ¥400–800/ano).',
  },
];

const TOURISM_FAQS_PT: Faq[] = [
  {
    question: 'Como funciona o visto de turista para a China?',
    answer:
      'A maioria dos visitantes precisa de um visto L (turista): formulário, foto, roteiro e reservas de hotel, além de comprovação de continuação da viagem. Nossa concierge prepara o dossiê, redige a carta de roteiro e agenda o atendimento. O processamento típico leva de 4 a 7 dias úteis.',
  },
  {
    question: 'Qual é a melhor época para visitar a China e o Japão?',
    answer:
      'A primavera (março–maio) e o outono (setembro–novembro) trazem o melhor clima — florada e folhagem de outono, respectivamente. O verão é a alta estação do turismo interno na China; o inverno é frio, mas é o mais barato e traz o festival de gelo de Harbin.',
  },
  {
    question: 'Vocês podem organizar reuniões de negócios e visitas a fábricas?',
    answer:
      'Sim. Por meio da nossa mesa de comércio, organizamos para delegações empresariais visitas a fábricas, reuniões com fornecedores, roteiros da Canton Fair e apresentações a câmaras de comércio — com intérpretes bilíngues.',
  },
  {
    question: 'Como as restrições alimentares são tratadas na viagem?',
    answer:
      'Os guias são orientados sobre alergias e preferências (vegetariano, halal, jainista, sem glúten) antes da chegada. Pré-selecionamos restaurantes, e você recebe cartões de preferência em chinês para mostrar em qualquer estabelecimento.',
  },
  {
    question: 'O seguro-viagem está incluído?',
    answer:
      'Os pacotes base incluem cobertura padrão. Oferecemos como adicional uma apólice aprimorada com evacuação médica e proteção para equipamentos de alto valor — recomendamos fortemente para roteiros de aventura e da Rota da Seda.',
  },
  {
    question: 'Qual é a política de cancelamento?',
    answer:
      'Reembolso total até 30 dias antes da partida. Dentro dos 30 dias, devolvemos tudo o que for recuperável de hotéis e fornecedores — mostramos os recibos. Sem taxas de cancelamento ocultas por nossa parte.',
  },
  {
    question: 'Vocês organizam viagens em grupo e para estudantes?',
    answer:
      'Sim — famílias, eventos corporativos e viagens educativas de escolas e faculdades são especialidade da casa. Grupos de 8+ recebem apoio dedicado de planejamento e tarifas reduzidas. Conduzimos um programa de 45 estudantes em Xangai em 2024.',
  },
  {
    question: 'Vocês cuidam de roteiros com vários países?',
    answer:
      'Sim. Operamos combinações China + Japão com regularidade, incluindo pedidos de visto separados, voos e trens transfronteiriços e guias coordenados em cada país.',
  },
];

const TRADE_FAQS_PT: Faq[] = [
  {
    question: 'Qual é a quantidade mínima de pedido (MOQ)?',
    answer:
      'Depende do produto. Eletrônica sob medida costuma começar em 500–1.000 unidades; muitas categorias de máquinas são vendidas por unidade; têxteis frequentemente em lotes de 100 dúzias. Parte do nosso trabalho de sourcing é negociar MOQs para baixo em favor de negócios em crescimento.',
  },
  {
    question: 'Como vocês garantem a qualidade do produto?',
    answer:
      'Inspeções padrão AQL no chão de fábrica em cerca de 20% e 80% da produção, além de uma checagem pré-embarque antes de o contêiner ser lacrado. Você recebe relatórios com fotos e vídeos em cada etapa — antes que mais dinheiro se mova.',
  },
  {
    question: 'Quais são os prazos típicos de envio da China para a Índia?',
    answer:
      'Frete marítimo de Guangzhou/Shanghai/Ningbo para Mundra ou JNPT: normalmente 18–25 dias porta a porta, além da alfândega nas duas pontas. Frete aéreo: 3–7 dias porta a porta a um custo cerca de 5–8× maior. Monitoramos a congestionação portuária e redirecionamos quando compensa.',
  },
  {
    question: 'Vocês cuidam do desembaraço aduaneiro e da certificação BIS?',
    answer:
      'Sim — classificação HS, registros BIS/WPC/CDSCO quando sua categoria de produto os exige, e conjuntos completos de documentos protocolados antes de a mercadoria chegar ao porto, para que o desembaraço nunca espere papelada.',
  },
  {
    question: 'Com quais condições de pagamento vocês trabalham?',
    answer:
      'O padrão é 30% de entrada por TT e 70% contra cópia do Bill of Lading. Relacionamentos consolidados podem migrar para LC à vista. Para primeiros fornecedores, recomendamos fortemente escrow — nunca 100% adiantado.',
  },
  {
    question: 'Vocês apoiam fabricação OEM e marca própria?',
    answer:
      'Sim. Pré-selecionamos fábricas que já produzem white-label na sua categoria, gerenciamos a personalização de arte/embalagem e incorporamos as checagens de marca nos pontos de inspeção padrão.',
  },
  {
    question: 'Como as disputas com fornecedores são tratadas?',
    answer:
      'Atuamos como seu representante local com evidências documentadas — fotos, relatórios AQL, especificações bilíngues. Os contratos que estruturamos incluem especificações de qualidade e cláusulas de penalidade; casos não resolvidos vão à arbitragem com nosso dossiê como apoio.',
  },
  {
    question: 'Qual é a sua estrutura de honorários?',
    answer:
      'Engajamentos de comércio funcionam com uma taxa de sucesso vinculada ao valor da mercadoria efetivamente embarcada — se o negócio morrer, você deve apenas os custos de auditoria/inspeção, orçados antecipadamente. Sem sucesso, sem taxa de sucesso.',
  },
];

const GENERAL_FAQS_PT: Faq[] = [
  {
    question: 'O que a RouteToAbroad realmente faz?',
    answer:
      'Três serviços conectados entre a Índia e o Leste Asiático: colocamos estudantes em universidades chinesas (admissões, bolsas, vistos, chegada), desenhamos viagens privadas e em grupo pela China e pelo Japão e cuidamos de sourcing, controle de qualidade e logística para clientes de comércio Índia–China.',
  },
  {
    question: 'Vocês trabalham só com estudantes indianos?',
    answer:
      'Nossa mesa é mais forte para estudantes e famílias baseados na Índia, mas também colocamos estudantes do Golfo e da África por meio de agentes parceiros, e estamos montando um India desk para candidatos internacionais. Onde quer que você esteja, o fit check é o mesmo primeiro passo.',
  },
  {
    question: 'Onde ficam os seus escritórios?',
    answer:
      'Nova Délhi (Saket District Centre) e Guangzhou (Victory Plaza, distrito de Tianhe) — o que significa que alguém está acordado e em campo nos dois fusos, de segunda a sábado.',
  },
  {
    question: 'Vocês podem garantir admissão, bolsa ou visto?',
    answer:
      'Não — e desconfie de quem disser que sim. Universidades decidem admissões, comitês de bolsa decidem financiamento, embaixadas decidem vistos. O que garantimos é uma avaliação honesta de antemão, um dossiê completo e correto, e alguém responsável a cada passo.',
  },
  {
    question: 'Como começo?',
    answer:
      'Faça o fit check de quatro perguntas para educação, ou envie uma consulta por qualquer página. Um consultor responde em até um dia útil — 9h–18h IST, de segunda a sábado.',
  },
  {
    question: 'Vocês vendem meus dados ou exibem anúncios neste site?',
    answer:
      'Não. Coletamos apenas o que a sua consulta precisa, este site não instala cookies de publicidade e não há scripts de rastreamento de terceiros.',
  },
  {
    question: 'Há quanto tempo a RouteToAbroad está em operação?',
    answer:
      'Mais de uma década em serviços transfronteiriços entre a Índia e a China.',
    // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'Em quais idiomas a equipe trabalha?',
    answer:
      'Inglês, hindi, malaiala e mandarim por meio do escritório de Guangzhou — além de suporte em idiomas locais via parceiros para famílias arabófonas.',
  },
];

/* ------------------------------------------------------------------ */
/* hi — machine-assisted translation, pending native-speaker review.   */
/* Standard professional register. Same question count/order as en.    */
/* ------------------------------------------------------------------ */

const EDUCATION_FAQS_HI: Faq[] = [
  {
    question: 'क्या चीनी MBBS डिग्री भारत में मान्यता प्राप्त है?',
    answer:
      'हाँ, बशर्ते विश्वविद्यालय WHO World Directory of Medical Schools और चीन की MOE सूची दोनों में शामिल हो, और आप स्नातक के बाद भारत की FMGE/NExT लाइसेंसिंग परीक्षा उत्तीर्ण करें। हम छात्रों को केवल MOE सूची में शामिल चीनी मेडिकल विश्वविद्यालयों में ही प्रवेश दिलाते हैं। ये जाँचें आवश्यक हैं, पर अपने आप में पर्याप्त नहीं — NMC की पात्रता नियम (NEET-UG योग्यता और आपके प्रवेश वर्ष के लागू नियमों सहित) तय करते हैं कि कोई सीट पंजीकरण तक जाती है या नहीं; इसलिए कुछ भी भुगतान करने से पहले वर्तमान NMC नियमों के अनुसार अपने विश्वविद्यालय और प्रवेश वर्ष की पुष्टि करें।',
  },
  {
    question: 'क्या छात्रवृत्तियाँ पूर्ण वित्तपोषित होती हैं?',
    answer:
      'कुछ होती हैं। CSC (चीनी सरकारी छात्रवृत्ति) पूरी ट्यूशन, छात्रावास, स्वास्थ्य बीमा और मासिक वृत्ति कवर कर सकती है — लेकिन यह मेरिट-आधारित और प्रतिस्पर्धी है। ज़्यादातर प्रस्ताव आंशिक होते हैं: केवल ट्यूशन, या ट्यूशन और रहने की व्यवस्था। हम गारंटीशुदा पूर्ण छात्रवृत्तियाँ नहीं बेचते, और कोई भी ईमानदार कंसल्टेंसी नहीं बेच सकती।',
  },
  {
    question: 'चीन में पढ़ने के लिए क्या मुझे चीनी भाषा बोलनी चाहिए?',
    answer:
      'प्रवेश के लिए नहीं। अंग्रेज़ी माध्यम के कार्यक्रमों (MBBS, इंजीनियरिंग, बिज़नेस) में प्रवेश पर चीनी आवश्यक नहीं है। दैनिक जीवन और MBBS की क्लिनिकल रोटेशन के लिए लगभग HSK 4 चाहिए। HSK प्रशिक्षण हमारे सपोर्ट पैकेज का हिस्सा है।',
  },
  {
    question: 'छात्र वीज़ा प्रक्रिया में कितना समय लगता है?',
    answer:
      'आमतौर पर प्रवेश दस्तावेज़ (JW202/Admission Notice) मिलने से वीज़ा हाथ में आने तक 4–8 सप्ताह, दूतावास के कार्यभार पर निर्भर। हम फ़ाइल तैयार करते हैं, अपॉइंटमेंट बुक करते हैं और संभावित इंटरव्यू प्रश्नों का अभ्यास आपके साथ करते हैं।',
  },
  {
    question: 'चीन में पढ़ाई की लागत कितनी होती है?',
    answer:
      'मान्यता प्राप्त विश्वविद्यालयों में ट्यूशन आमतौर पर कार्यक्रम और शहर के अनुसार US$3,000–8,000 प्रति वर्ष; छात्रावास US$500–1,500 प्रति वर्ष। व्यक्तिगत अनुमान के लिए हमारे कॉस्ट कैलकुलेटर का उपयोग करें, और ध्यान रखें कि CSC छात्रवृत्ति ट्यूशन शून्य तक घटा सकती है।',
  },
  {
    question: 'क्या चीन में पढ़ते हुए काम कर सकते हैं?',
    answer:
      'विश्वविद्यालय की लिखित अनुमति से पार्ट-टाइम काम संभव है, आमतौर पर कैंपस में। कैंपस के बाहर इंटर्नशिप के लिए संस्था और आप्रवासन अधिकारियों की अतिरिक्त स्वीकृति चाहिए। ज़्यादातर छात्रवृत्ति वृत्तियाँ बिना काम के जीवन-यापन की लागत कवर करने योग्य बनाई जाती हैं।',
  },
  {
    question: 'सितंबर इंटेक के लिए आवेदन कब करना चाहिए?',
    answer:
      '6–9 महीने पहले शुरू करें। छात्रवृत्ति की समय-सीमाएँ फरवरी और अप्रैल के बीच समाप्त होती हैं; स्वयं-वित्तपोषित आवेदन बाद तक चलते हैं, पर बेहतरीन कार्यक्रम और छात्रावास पहले भर जाते हैं। तारीख़-दर-तारीख़ योजना के लिए टाइमलाइन प्लानर देखें।',
  },
  {
    question: 'क्या स्वास्थ्य बीमा अनिवार्य है?',
    answer:
      'हाँ — चीन में प्रत्येक अंतरराष्ट्रीय छात्र को पूरे प्रवासकाल के लिए स्वास्थ्य बीमा रखना अनिवार्य है। CSC छात्रों को यह छात्रवृत्ति में मिलता है; स्वयं-वित्तपोषित छात्र रजिस्ट्रेशन पर खरीदते हैं (आमतौर पर ¥400–800/वर्ष)।',
  },
];

const TOURISM_FAQS_HI: Faq[] = [
  {
    question: 'चीन के लिए टूरिस्ट वीज़ा कैसे काम करता है?',
    answer:
      'अधिकांश आगंतुकों को L (टूरिस्ट) वीज़ा चाहिए: आवेदन पत्र, फ़ोटो, यात्रा कार्यक्रम और होटल बुकिंग, साथ में आगे की यात्रा का प्रमाण। हमारी कंसीयज़ डेस्क फ़ाइल तैयार करती है, कार्यक्रम पत्र लिखती है और अपॉइंटमेंट बुक करती है। सामान्य प्रक्रिया 4–7 कार्यदिवस।',
  },
  {
    question: 'चीन और जापान घूमने का सबसे अच्छा समय कब है?',
    answer:
      'वसंत (मार्च–मई) और शरद (सितंबर–नवंबर) में मौसम सबसे अच्छा — क्रमशः बहार के फूल और शरद ऋतु की पत्तियाँ। गर्मियों में चीन में घरेलू यात्रा की चरम सीज़न है; सर्दी ठंडी पर सबसे सस्ती है और हार्बिन का बर्फ़ महोत्सव देती है।',
  },
  {
    question: 'क्या आप बिज़नेस मीटिंग और फ़ैक्टरी विज़िट आयोजित कर सकते हैं?',
    answer:
      'हाँ। हमारे ट्रेड डेस्क के माध्यम से व्यावसायिक प्रतिनिधिमंडलों के लिए फ़ैक्टरी टूर, सप्लायर मीटिंग, कैंटन फ़ेयर यात्रा-कार्यक्रम और चैंबर ऑफ़ कॉमर्स परिचय आयोजित करते हैं — द्विभाषी दुभाषियों के साथ।',
  },
  {
    question: 'यात्रा में आहार संबंधी पाबंदियाँ कैसे संभाली जाती हैं?',
    answer:
      'आने से पहले गाइडों को एलर्जी और पसंद (शाकाहारी, हलाल, जैन, ग्लूटेन-मुक्त) की जानकारी दी जाती है। हम रेस्तराँ पहले से जाँचते हैं, और आपको चीनी भाषा के प्राथमिकता कार्ड मिलते हैं जो किसी भी खाने की जगह दिखाए जा सकते हैं।',
  },
  {
    question: 'क्या ट्रैवल इंश्योरेंस शामिल है?',
    answer:
      'बेस पैकेज में मानक कवरेज शामिल है। हम मेडिकल इवैक्यूएशन और महँगे उपकरण की सुरक्षा वाली उन्नत पॉलिसी अतिरिक्त रूप से देते हैं — एडवेंचर और सिल्क रोड यात्रा-कार्यक्रमों के लिए इसकी पुरज़ोर सिफ़ारिश है।',
  },
  {
    question: 'आपकी रद्दीकरण नीति क्या है?',
    answer:
      'प्रस्थान से 30 दिन पहले तक पूर्ण धनवापसी। 30 दिन के भीतर हम होटलों और सप्लायरों से वसूल योग्य सब कुछ लौटाते हैं — रसीदें आपको दिखाते हैं। हमारी ओर से कोई छिपा शुल्क नहीं।',
  },
  {
    question: 'क्या आप ग्रुप और स्टूडेंट टूर आयोजित करते हैं?',
    answer:
      'हाँ — परिवार, कॉर्पोरेट आउटसाइट, और स्कूल/कॉलेज की शैक्षिक यात्राएँ हमारी विशेषता हैं। 8+ के समूहों को समर्पित प्लानिंग सहायता और छूट दरें मिलती हैं। 2024 में हमने 45 छात्रों का शंघाई कार्यक्रम संभाला।',
  },
  {
    question: 'क्या आप मल्टी-कंट्री यात्रा-कार्यक्रम संभाल सकते हैं?',
    answer:
      'हाँ। हम चीन + जापान की कंबिनेशन नियमित रूप से संचालित करते हैं, जिसमें अलग-अलग वीज़ा आवेदन, सीमा-पार फ़्लाइट और रेल, और हर देश में तालमेल वाले गाइड शामिल हैं।',
  },
];

const TRADE_FAQS_HI: Faq[] = [
  {
    question: 'न्यूनतम ऑर्डर मात्रा (MOQ) क्या है?',
    answer:
      'उत्पाद पर निर्भर करता है। कस्टम इलेक्ट्रॉनिक्स आमतौर पर 500–1,000 यूनिट से शुरू; कई मशीन श्रेणियाँ एक यूनिट में बिकती हैं; टेक्सटाइल अक्सर 100 दर्जन के लॉट में। बढ़ते व्यापारों के लिए MOQ घटाने की बातचीत करना हमारे सोर्सिंग काम का हिस्सा है।',
  },
  {
    question: 'आप उत्पाद की गुणवत्ता कैसे सुनिश्चित करते हैं?',
    answer:
      'उत्पादन के लगभग 20% और 80% पर फ़ैक्टरी में AQL-मानक निरीक्षण, और कंटेनर सील होने से पहले प्री-शिपमेंट जाँच। हर गेट पर आपको फ़ोटो और वीडियो रिपोर्ट मिलती है — पैसा आगे बढ़ने से पहले।',
  },
  {
    question: 'चीन से भारत शिपिंग में सामान्य समय कितना लगता है?',
    answer:
      'गुआंगझू/शंघाई/निंगबो से मुंद्रा या JNPT तक समुद्री मालभाड़ा: आमतौर पर 18–25 दिन पोर्ट-टू-पोर्ट, दोनों सिरों पर कस्टम अलग। एयर फ़्रेट: 3–7 दिन डोर-टू-डोर, लागत लगभग 5–8×। हम पोर्ट जाम की निगरानी करते हैं और जब फ़ायदेमंद हो तो रास्ता बदलते हैं।',
  },
  {
    question: 'क्या आप कस्टम क्लियरेंस और BIS सर्टिफिकेशन संभाल सकते हैं?',
    answer:
      'हाँ — HS वर्गीकरण, जहाँ आपकी उत्पाद श्रेणी के लिए ज़रूरी हो वहाँ BIS/WPC/CDSCO पंजीकरण, और माल के पोर्ट पहुँचने से पहले पूरे दस्तावेज़ सेट प्री-फ़ाइल, ताकि क्लियरेंस कभी कागज़ी कार्य पर न रुके।',
  },
  {
    question: 'आप किन भुगतान शर्तों के साथ काम करते हैं?',
    answer:
      'मानक: TT द्वारा 30% अग्रिम, बिल ऑफ़ लेडिंग की कॉपी पर 70%। स्थापित संबंध LC at sight में बदल सकते हैं। पहली बार के सप्लायर के लिए हम एस्क्रो की पुरज़ोर सलाह देते हैं — कभी भी 100% अग्रिम नहीं।',
  },
  {
    question: 'क्या आप OEM और प्राइवेट-लेबल निर्माण का समर्थन करते हैं?',
    answer:
      'हाँ। हम वे फ़ैक्टरियाँ चुनते हैं जो आपकी श्रेणी में पहले से व्हाइट-लेबल करती हैं, आर्टवर्क/पैकेजिंग अनुकूलन संभालते हैं, और ब्रांड जाँचों को मानक निरीक्षण गेट में शामिल करते हैं।',
  },
  {
    question: 'सप्लायर विवाद कैसे सुलझाए जाते हैं?',
    answer:
      'हम दस्तावेज़ी सबूतों के साथ आपके स्थानीय प्रतिनिधि के रूप में काम करते हैं — फ़ोटो, AQL रिपोर्ट, द्विभाषी स्पेक शीट। हमारे बनाए अनुबंधों में गुणवत्ता विनिर्देश और दंड खंड होते हैं; अनसुलझे मामले हमारी फ़ाइल के समर्थन से अर्बिट्रेशन जाते हैं।',
  },
  {
    question: 'आपका शुल्क ढाँचा क्या है?',
    answer:
      'ट्रेड अनुबंध वास्तव में भेजी गई माल के मूल्य से जुड़ी सक्सेस फ़ीस पर चलते हैं — अगर सौदा टूट जाए, तो आप केवल पहले से कोट किए गए ऑडिट/निरीक्षण खर्च देते हैं। न सफलता, न सक्सेस फ़ीस।',
  },
];

const GENERAL_FAQS_HI: Faq[] = [
  {
    question: 'RouteToAbroad वास्तव में क्या करता है?',
    answer:
      'भारत और पूर्वी एशिया के बीच तीन जुड़ी सेवाएँ: हम छात्रों को चीनी विश्वविद्यालयों में प्रवेश दिलाते हैं (एडमिशन, छात्रवृत्ति, वीज़ा, आगमन), चीन और जापान की निजी और ग्रुप यात्राएँ डिज़ाइन करते हैं, और भारत–चीन ट्रेड ग्राहकों के लिए सोर्सिंग, QC और लॉजिस्टिक्स संभालते हैं।',
  },
  {
    question: 'क्या आप केवल भारतीय छात्रों के साथ काम करते हैं?',
    answer:
      'हमारा डेस्क भारत स्थित छात्रों और परिवारों के लिए सबसे मज़बूत है, पर हम पार्टनर एजेंटों के ज़रिए GCC और अफ़्रीका के छात्रों को भी प्रवेश दिलाते हैं, और अंतरराष्ट्रीय आवेदकों के लिए भारत डेस्क बना रहे हैं। आप कहीं भी हों, फ़िट चेक ही पहला कदम है।',
  },
  {
    question: 'आपके दफ़्तर कहाँ हैं?',
    answer:
      'नई दिल्ली (Saket District Centre) और गुआंगझू (Victory Plaza, तियानहे ज़िला) — यानी सोमवार से शनिवार तक दोनों टाइम ज़ोन में कोई न कोई जागता और मौके पर मौजूद रहता है।',
  },
  {
    question: 'क्या आप एडमिशन, छात्रवृत्ति या वीज़ा की गारंटी दे सकते हैं?',
    answer:
      'नहीं — और जो हाँ कहे उससे सावधान रहें। एडमिशन विश्वविद्यालय तय करते हैं, छात्रवृत्ति समितियाँ, वीज़ा दूतावास। हम जो गारंटी देते हैं वह है: पहले से ईमानदार मूल्यांकन, पूरी और सही फ़ाइल, और हर कदम पर ज़िम्मेदार व्यक्ति।',
  },
  {
    question: 'मैं शुरुआत कैसे करूँ?',
    answer:
      'एजुकेशन के लिए चार-प्रश्न फ़िट चेक करें, या किसी भी पेज से पूछताछ भेजें। एक सलाहकार एक कार्यदिवस में जवाब देता है — सोमवार से शनिवार, 9:00–18:00 IST।',
  },
  {
    question: 'क्या आप मेरा डेटा बेचते हैं या इस साइट पर विज्ञापन चलाते हैं?',
    answer:
      'नहीं। हम केवल वही जानकारी लेते हैं जो आपकी पूछताछ को चाहिए, यह साइट कोई विज्ञापन कुकी नहीं लगाती, और कोई थर्ड-पार्टी ट्रैकिंग स्क्रिप्ट नहीं है।',
  },
  {
    question: 'RouteToAbroad कितने समय से काम कर रहा है?',
    answer:
      'भारत और चीन के बीच पार-सीमा सेवाओं में एक दशक से अधिक।',
    // {{VERIFY}} confirm exact founding year (records conflict: 2012 vs 2018) before making the claim specific
  },
  {
    question: 'टीम किन भाषाओं में काम करती है?',
    answer:
      'अंग्रेज़ी, हिंदी, मलयालम, और गुआंगझू दफ़्तर के ज़रिए मंदारिन — साथ ही पार्टनरों के ज़रिए अरबी-भाषी परिवारों के लिए स्थानीय भाषा सहायता।',
  },
];

/**
 * A localized page reads SET[locale]; en stays the source of truth.
 * zh/fr/ar/es/de/ja/pt/hi are machine-assisted translations pending
 * native-speaker review — same question count and order as the en set
 * for every set.
 */
export const EDUCATION_FAQS: Record<Locale, Faq[]> = {
  en: EDUCATION_FAQS_EN,
  zh: EDUCATION_FAQS_ZH,
  fr: EDUCATION_FAQS_FR,
  ar: EDUCATION_FAQS_AR,
  es: EDUCATION_FAQS_ES,
  de: EDUCATION_FAQS_DE,
  ja: EDUCATION_FAQS_JA,
  pt: EDUCATION_FAQS_PT,
  hi: EDUCATION_FAQS_HI,
};

export const TOURISM_FAQS: Record<Locale, Faq[]> = {
  en: TOURISM_FAQS_EN,
  zh: TOURISM_FAQS_ZH,
  fr: TOURISM_FAQS_FR,
  ar: TOURISM_FAQS_AR,
  es: TOURISM_FAQS_ES,
  de: TOURISM_FAQS_DE,
  ja: TOURISM_FAQS_JA,
  pt: TOURISM_FAQS_PT,
  hi: TOURISM_FAQS_HI,
};

export const TRADE_FAQS: Record<Locale, Faq[]> = {
  en: TRADE_FAQS_EN,
  zh: TRADE_FAQS_ZH,
  fr: TRADE_FAQS_FR,
  ar: TRADE_FAQS_AR,
  es: TRADE_FAQS_ES,
  de: TRADE_FAQS_DE,
  ja: TRADE_FAQS_JA,
  pt: TRADE_FAQS_PT,
  hi: TRADE_FAQS_HI,
};

export const GENERAL_FAQS: Record<Locale, Faq[]> = {
  en: GENERAL_FAQS_EN,
  zh: GENERAL_FAQS_ZH,
  fr: GENERAL_FAQS_FR,
  ar: GENERAL_FAQS_AR,
  es: GENERAL_FAQS_ES,
  de: GENERAL_FAQS_DE,
  ja: GENERAL_FAQS_JA,
  pt: GENERAL_FAQS_PT,
  hi: GENERAL_FAQS_HI,
};
