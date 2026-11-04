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

/**
 * A localized page reads SET[locale]; en stays the source of truth.
 * zh/fr/ar/es are machine-assisted translations pending native-speaker
 * review — same question count and order as the en set for every set.
 */
export const EDUCATION_FAQS: Record<Locale, Faq[]> = {
  en: EDUCATION_FAQS_EN,
  zh: EDUCATION_FAQS_ZH,
  fr: EDUCATION_FAQS_FR,
  ar: EDUCATION_FAQS_AR,
  es: EDUCATION_FAQS_ES,
};

export const TOURISM_FAQS: Record<Locale, Faq[]> = {
  en: TOURISM_FAQS_EN,
  zh: TOURISM_FAQS_ZH,
  fr: TOURISM_FAQS_FR,
  ar: TOURISM_FAQS_AR,
  es: TOURISM_FAQS_ES,
};

export const TRADE_FAQS: Record<Locale, Faq[]> = {
  en: TRADE_FAQS_EN,
  zh: TRADE_FAQS_ZH,
  fr: TRADE_FAQS_FR,
  ar: TRADE_FAQS_AR,
  es: TRADE_FAQS_ES,
};

export const GENERAL_FAQS: Record<Locale, Faq[]> = {
  en: GENERAL_FAQS_EN,
  zh: GENERAL_FAQS_ZH,
  fr: GENERAL_FAQS_FR,
  ar: GENERAL_FAQS_AR,
  es: GENERAL_FAQS_ES,
};
