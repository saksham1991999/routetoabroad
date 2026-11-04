/**
 * Scholarship-eligibility strings. `script` is serialized onto the page
 * (data-i18n) for the client script; colour/threshold logic stays in code.
 */
import type { Locale } from '../../lib/i18n';

interface Band {
  label: string;
  title: string;
  body: string;
}

export interface ScholarshipStrings {
  title: string;
  description: string;
  crumb: string;
  toolsCrumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  select: string;
  labels: { level: string; marks: string; english: string };
  levels: { bachelor: string; master: string; phd: string };
  marks: { m90: string; m80: string; m70: string; m60: string };
  english: { yes: string; no: string };
  error: string;
  go: string;
  how: { label: string; text: string };
  script: {
    phdStrong: Band;
    phdMid: Band;
    phdLow: Band;
    masterStrong: Band;
    masterGood: Band;
    masterMid: Band;
    masterLow: Band;
    bachStrong: Band;
    bachGood: Band;
    bachMid: Band;
    bachLow: Band;
    englishBold: string;
    englishRest: string;
    ctaGuide: string;
    ctaReview: string;
  };
}

const en: ScholarshipStrings = {
  title: 'Scholarship Eligibility Check — CSC & University Awards',
  description:
    'Check where your marks and study level actually sit for Chinese government (CSC) and university scholarships: full-award range, partial awards, or self-funded with better odds. Honest bands, no email required.',
  crumb: 'Scholarship check',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Free tool · 2 minutes',
    title: 'Scholarship check. Honest bands, not flattery.',
    lede: "Scholarship committees don't publish cutoffs, and nobody can promise outcomes. What we can do is place your profile against the bands we've actually seen funded.",
  },
  select: 'Select…',
  labels: { level: "Study level you're applying for", marks: 'Latest academic result', english: 'English proficiency evidence?' },
  levels: { bachelor: "Bachelor's", master: "Master's", phd: 'PhD' },
  marks: { m90: '90%+ / GPA 3.7+', m80: '80–89% / GPA 3.3+', m70: '70–79% / GPA 2.8+', m60: 'Below 70% / GPA 2.8' },
  english: { yes: 'Yes (medium-of-instruction cert / IELTS / TOEFL)', no: 'Not yet' },
  error: 'Answer all three questions to see your band.',
  go: 'Show my band',
  how: {
    label: 'How these bands are built',
    text: 'From placement records: full CSC awards concentrate in the 80%+ / GPA 3.3+ population, with PhD research profiles judged on publications and supervisor fit rather than marks alone. Provincial and university partial awards reach lower bands. Nobody — including us — controls committee decisions; we control file quality and university choice.',
  },
  script: {
    phdStrong: {
      label: 'Band 1 — Strong CSC position',
      title: 'You are in CSC PhD territory.',
      body: 'For PhD applicants, committees weigh publications, research fit and supervisor acceptance above marks alone — and your marks clear the bar. The decisive moves are emailing matched supervisors with a sharp proposal and applying Type B to 2–3 CSC-designated universities. Our desk writes these files weekly.',
    },
    phdMid: {
      label: 'Band 2 — Research-dependent',
      title: 'Marks are workable; research evidence decides.',
      body: 'PhD CSC awards at this band hinge on what sits behind the transcript: papers, projects, a supervisor who wants you. With a strong proposal and the right university, funding is realistic; without, plan tuition-only or provincial awards.',
    },
    phdLow: {
      label: 'Band 3 — Build the profile first',
      title: 'Funding will be difficult this cycle.',
      body: 'Honest read: PhD CSC at this marks band is a long shot unless research output is exceptional. Options: target provincial/university awards, take a funded MPhil route first, or strengthen publications for next cycle.',
    },
    masterStrong: {
      label: 'Band 1 — Strong CSC position',
      title: 'You are in full-award range.',
      body: "Master's applicants at 90%+ with English evidence sit inside the band that wins CSC full awards at strong universities — especially Type B applications to second-tier-city campuses where competition is thinner. Apply to three: one reach, one target, one high-probability.",
    },
    masterGood: {
      label: 'Band 1–2 — CSC competitive',
      title: 'Full awards are in play; partials are likely.',
      body: 'This band wins CSC full awards regularly at provincial universities and partial awards (tuition-only) at top names. The study plan and recommendation letters move you up the pile — that is craftable work, and we do it with you.',
    },
    masterMid: {
      label: 'Band 2 — Partial awards territory',
      title: 'Think tuition waivers, not full rides.',
      body: 'Realistic outcome: university partial awards — tuition covered, dorm and stipend self-funded — plus provincial scholarships. Several partner universities stack partials aggressively for this band.',
    },
    masterLow: {
      label: 'Band 3 — Self-funded with smart picks',
      title: 'Plan self-funded; spend where it counts.',
      body: "Scholarships will be unlikely this cycle. The good news: second-tier city engineering and business master's run US$2,500–4,000/year — the maths can still beat domestic options. Cut costs with city choice, not quality.",
    },
    bachStrong: {
      label: 'Band 1 — Top of the bachelor pool',
      title: 'Strong position for full and partial awards.',
      body: "At 90%+ you compete for CSC bachelor slots (scarce but real), university presidential awards, and provincial scholarships. Bachelor CSC quota is much smaller than master's — pair every CSC application with 2 university-award applications.",
    },
    bachGood: {
      label: 'Band 2 — Partial award range',
      title: 'University partials are your lane.',
      body: 'This band reliably wins tuition waivers and provincial partials at good universities. Full CSC at bachelor level happens, but plan fees assuming partial coverage and treat any full award as upside.',
    },
    bachMid: {
      label: 'Band 3 — Some university awards',
      title: 'Selective partials; value universities shine.',
      body: 'Expect tuition discounts at value-focused universities rather than named scholarships. Second-tier cities keep total costs workable — this is where city choice changes the math more than scholarship chasing.',
    },
    bachLow: {
      label: 'Band 4 — Self-funded route',
      title: 'Self-funded is the honest plan.',
      body: 'Plan on full fees and lean on low-tuition universities and low-cost cities. The degree matters more than the discount; a placed student beats an unfunded application.',
    },
    englishBold: 'Next blocker: English evidence.',
    englishRest: 'Get the medium-of-instruction certificate or book an IELTS/TOEFL date — files without language proof miss scholarship screens.',
    ctaGuide: 'Read the CSC guide',
    ctaReview: 'Get a file review',
  },
};

const zh: ScholarshipStrings = {
  title: '奖学金资格检查 — CSC 与大学奖学金',
  description: '查看您的成绩和学习阶段在中国政府奖学金（CSC）和大学奖学金中的真实位置：全额区间、部分奖学金，或自费但机会更好。诚实的档位，无需邮箱。',
  crumb: '奖学金检查',
  toolsCrumb: '工具',
  hero: {
    eyebrow: '免费工具 · 2 分钟',
    title: '奖学金检查。诚实的档位，不奉承。',
    lede: '奖学金委员会不公布分数线，也没有人能保证结果。我们能做的是，把您的条件放到我们实际见过获得资助的档位中去对照。',
  },
  select: '请选择…',
  labels: { level: '您申请的学习阶段', marks: '最近的学业成绩', english: '是否有英语能力证明？' },
  levels: { bachelor: '本科', master: '硕士', phd: '博士' },
  marks: { m90: '90% 以上 / GPA 3.7+', m80: '80–89% / GPA 3.3+', m70: '70–79% / GPA 2.8+', m60: '70% 以下 / GPA 2.8' },
  english: { yes: '有（授课语言证明 / IELTS / TOEFL）', no: '暂时没有' },
  error: '请回答全部三个问题以查看您的档位。',
  go: '查看我的档位',
  how: {
    label: '这些档位是如何得出的',
    text: '来自录取记录：CSC 全额奖学金集中在 80% 以上 / GPA 3.3+ 的人群中，博士研究型申请者主要看论文发表和导师匹配，而非仅看成绩。省级和大学的部分奖学金覆盖更低的档位。没有人——包括我们——能左右委员会的决定；我们能掌控的是材料质量和大学选择。',
  },
  script: {
    phdStrong: {
      label: '第 1 档 — CSC 优势位置',
      title: '您处在 CSC 博士的有利区间。',
      body: '对博士申请者，委员会首先看论文发表、研究契合度和导师接收——而您的成绩已过线。关键动作是带着出色的研究计划给匹配的导师发邮件，并以 B 类申请 2–3 所 CSC 指定大学。我们团队每周都在撰写这类材料。',
    },
    phdMid: {
      label: '第 2 档 — 取决于研究',
      title: '成绩可行；研究证据决定结果。',
      body: '这个档位的 CSC 博士奖学金取决于成绩单背后的东西：论文、项目、愿意接收您的导师。有出色的研究计划和合适的大学，获得资助是现实的；否则请考虑仅免学费或省级奖学金。',
    },
    phdLow: {
      label: '第 3 档 — 先打造个人档案',
      title: '本轮获得资助会比较困难。',
      body: '坦率地说：这个成绩档位申请 CSC 博士机会不大，除非研究成果特别突出。选择：争取省级/大学奖学金，先走有资助的 MPhil 路线，或为下一轮加强论文发表。',
    },
    masterStrong: {
      label: '第 1 档 — CSC 优势位置',
      title: '您处于全额奖学金区间。',
      body: '成绩 90% 以上且有英语证明的硕士申请者，处于能在强校获得 CSC 全额奖学金的档位——尤其是向二线城市院校提交 B 类申请，那里竞争较小。申请三所：一所冲刺、一所匹配、一所高概率。',
    },
    masterGood: {
      label: '第 1–2 档 — CSC 有竞争力',
      title: '全额奖学金有机会；部分奖学金很可能。',
      body: '这个档位经常在省属大学获得 CSC 全额奖学金，在名校获得部分奖学金（仅免学费）。学习计划和推荐信能让您在申请中脱颖而出——这是可以打磨的工作，我们与您一起完成。',
    },
    masterMid: {
      label: '第 2 档 — 部分奖学金区间',
      title: '想想学费减免，而不是全额资助。',
      body: '现实的结果：大学部分奖学金——学费减免，宿舍和生活费自付——以及省级奖学金。多所合作大学会为这个档位积极叠加部分奖学金。',
    },
    masterLow: {
      label: '第 3 档 — 自费但精心选择',
      title: '按自费规划；把钱花在刀刃上。',
      body: '本轮获得奖学金的可能性不大。好消息是：二线城市的工程和商科硕士每年约 2,500–4,000 美元——算下来仍可能优于国内选择。通过选择城市来降低成本，而不是降低质量。',
    },
    bachStrong: {
      label: '第 1 档 — 本科申请者的顶端',
      title: '全额和部分奖学金都有优势。',
      body: '90% 以上，您可以竞争 CSC 本科名额（稀缺但真实存在）、大学校长奖学金和省级奖学金。CSC 本科名额远少于硕士——每份 CSC 申请都应搭配 2 份大学奖学金申请。',
    },
    bachGood: {
      label: '第 2 档 — 部分奖学金区间',
      title: '大学部分奖学金是您的赛道。',
      body: '这个档位通常能在不错的大学获得学费减免和省级部分奖学金。本科阶段也有 CSC 全额，但请按部分覆盖来规划费用，把任何全额奖学金视为意外之喜。',
    },
    bachMid: {
      label: '第 3 档 — 部分大学奖学金',
      title: '选择性的部分奖学金；高性价比大学更有优势。',
      body: '预计在注重性价比的大学获得学费折扣，而非有名目的奖学金。二线城市让总费用保持可控——在这里，选择城市比追逐奖学金更能改变算式。',
    },
    bachLow: {
      label: '第 4 档 — 自费路线',
      title: '自费是诚实的规划。',
      body: '按全额费用规划，并依靠低学费大学和低成本城市。学位比折扣更重要；一个被录取的学生胜过一份没有资助的申请。',
    },
    englishBold: '下一个障碍：英语证明。',
    englishRest: '请获取授课语言证明，或预约 IELTS/TOEFL 考试——没有语言证明的材料会在奖学金筛选中被淘汰。',
    ctaGuide: '阅读 CSC 指南',
    ctaReview: '获取材料评估',
  },
};

const fr: ScholarshipStrings = {
  title: 'Éligibilité aux bourses — CSC et bourses universitaires',
  description:
    'Voyez où se situent vos notes et votre niveau d’études pour les bourses du gouvernement chinois (CSC) et des universités : bourse complète, bourse partielle, ou autofinancement avec de meilleures chances. Des fourchettes honnêtes, sans e-mail.',
  crumb: 'Bourses d’études',
  toolsCrumb: 'Outils',
  hero: {
    eyebrow: 'Outil gratuit · 2 minutes',
    title: 'Test de bourse. Des fourchettes honnêtes, pas de flatterie.',
    lede: 'Les comités de bourses ne publient pas de seuils, et personne ne peut promettre de résultats. Ce que nous pouvons faire, c’est situer votre profil par rapport aux fourchettes que nous avons réellement vues financées.',
  },
  select: 'Sélectionner…',
  labels: { level: 'Niveau d’études visé', marks: 'Dernier résultat scolaire', english: 'Preuve de niveau d’anglais ?' },
  levels: { bachelor: 'Licence', master: 'Master', phd: 'Doctorat' },
  marks: { m90: '90 % et plus / GPA 3,7+', m80: '80–89 % / GPA 3,3+', m70: '70–79 % / GPA 2,8+', m60: 'Moins de 70 % / GPA 2,8' },
  english: { yes: 'Oui (attestation de langue d’enseignement / IELTS / TOEFL)', no: 'Pas encore' },
  error: 'Répondez aux trois questions pour voir votre fourchette.',
  go: 'Voir ma fourchette',
  how: {
    label: 'Comment ces fourchettes sont construites',
    text: 'À partir de nos dossiers placés : les bourses CSC complètes se concentrent dans la population à 80 %+ / GPA 3,3+, les profils de recherche en doctorat étant jugés sur les publications et l’adéquation avec le directeur plutôt que sur les seules notes. Les bourses partielles provinciales et universitaires atteignent des niveaux plus bas. Personne — nous compris — ne contrôle les décisions des comités ; nous contrôlons la qualité du dossier et le choix de l’université.',
  },
  script: {
    phdStrong: {
      label: 'Fourchette 1 — Position CSC solide',
      title: 'Vous êtes dans le territoire CSC doctorat.',
      body: 'Pour les candidats au doctorat, les comités pèsent les publications, l’adéquation de recherche et l’accord d’un directeur avant les notes seules — et vos notes passent la barre. Les actions décisives : écrire à des directeurs compatibles avec un projet précis et candidater en Type B dans 2–3 universités désignées CSC. Notre cellule rédige ces dossiers chaque semaine.',
    },
    phdMid: {
      label: 'Fourchette 2 — Dépend de la recherche',
      title: 'Les notes sont correctes ; les preuves de recherche décident.',
      body: 'À ce niveau, les bourses CSC doctorat tiennent à ce qui se trouve derrière le relevé : articles, projets, un directeur qui vous veut. Avec un projet solide et la bonne université, le financement est réaliste ; sinon, prévoyez frais de scolarité seuls ou bourses provinciales.',
    },
    phdLow: {
      label: 'Fourchette 3 — Construire d’abord le profil',
      title: 'Le financement sera difficile ce cycle.',
      body: 'Lecture honnête : une bourse CSC doctorat à ce niveau de notes est peu probable sans production de recherche exceptionnelle. Options : viser les bourses provinciales/universitaires, passer d’abord par un MPhil financé, ou renforcer les publications pour le prochain cycle.',
    },
    masterStrong: {
      label: 'Fourchette 1 — Position CSC solide',
      title: 'Vous êtes dans la zone de bourse complète.',
      body: 'Les candidats en master à 90 %+ avec preuve d’anglais se situent dans la fourchette qui décroche des bourses CSC complètes dans de bonnes universités — surtout en candidatures Type B vers des campus de villes de second rang où la concurrence est moindre. Candidatez à trois : une ambitieuse, une réaliste, une très probable.',
    },
    masterGood: {
      label: 'Fourchette 1–2 — CSC compétitif',
      title: 'Les bourses complètes sont possibles ; les partielles probables.',
      body: 'Ce niveau décroche régulièrement des bourses CSC complètes dans des universités provinciales et des bourses partielles (frais de scolarité seuls) dans les grands noms. Le projet d’études et les lettres de recommandation vous font monter dans la pile — c’est un travail qui se façonne, et nous le faisons avec vous.',
    },
    masterMid: {
      label: 'Fourchette 2 — Zone de bourses partielles',
      title: 'Pensez exonérations de frais, pas bourse complète.',
      body: 'Résultat réaliste : bourses partielles universitaires — frais de scolarité couverts, logement et allocation à votre charge — plus bourses provinciales. Plusieurs universités partenaires cumulent activement les bourses partielles pour ce niveau.',
    },
    masterLow: {
      label: 'Fourchette 3 — Autofinancé avec des choix malins',
      title: 'Prévoyez l’autofinancement ; dépensez là où cela compte.',
      body: 'Les bourses seront peu probables ce cycle. Bonne nouvelle : les masters d’ingénierie et de gestion en villes de second rang coûtent 2 500–4 000 USD/an — le calcul peut encore battre les options locales. Réduisez les coûts par le choix de la ville, pas de la qualité.',
    },
    bachStrong: {
      label: 'Fourchette 1 — Haut du panier en licence',
      title: 'Position solide pour les bourses complètes et partielles.',
      body: 'À 90 %+, vous concourez pour les places CSC en licence (rares mais réelles), les bourses présidentielles universitaires et les bourses provinciales. Le quota CSC en licence est bien plus faible qu’en master — associez chaque candidature CSC à 2 candidatures à des bourses universitaires.',
    },
    bachGood: {
      label: 'Fourchette 2 — Zone de bourses partielles',
      title: 'Les bourses partielles universitaires sont votre voie.',
      body: 'Ce niveau décroche de façon fiable des exonérations de frais et des bourses provinciales partielles dans de bonnes universités. Une CSC complète en licence existe, mais prévoyez les frais avec une couverture partielle et traitez toute bourse complète comme un bonus.',
    },
    bachMid: {
      label: 'Fourchette 3 — Quelques bourses universitaires',
      title: 'Bourses partielles sélectives ; les universités économiques brillent.',
      body: 'Attendez-vous à des réductions de frais dans les universités axées sur le rapport qualité-prix plutôt qu’à des bourses nommées. Les villes de second rang maintiennent des coûts totaux gérables — c’est là que le choix de la ville change plus le calcul que la chasse aux bourses.',
    },
    bachLow: {
      label: 'Fourchette 4 — Voie autofinancée',
      title: 'L’autofinancement est le plan honnête.',
      body: 'Prévoyez les frais pleins et appuyez-vous sur des universités à faibles frais et des villes bon marché. Le diplôme compte plus que la remise ; un étudiant placé vaut mieux qu’une candidature non financée.',
    },
    englishBold: 'Prochain obstacle : la preuve d’anglais.',
    englishRest: 'Obtenez l’attestation de langue d’enseignement ou réservez une date IELTS/TOEFL — les dossiers sans preuve de langue échouent aux filtres de bourse.',
    ctaGuide: 'Lire le guide CSC',
    ctaReview: 'Faire examiner mon dossier',
  },
};

const ar: ScholarshipStrings = {
  title: 'فحص أهلية المنح — منحة CSC ومنح الجامعات',
  description:
    'اعرف أين تقع درجاتك ومستواك الدراسي فعلاً من منح الحكومة الصينية (CSC) ومنح الجامعات: نطاق المنحة الكاملة أو المنح الجزئية أو التمويل الذاتي بفرص أفضل. نطاقات صادقة دون الحاجة إلى بريد إلكتروني.',
  crumb: 'فحص المنح',
  toolsCrumb: 'الأدوات',
  hero: {
    eyebrow: 'أداة مجانية · دقيقتان',
    title: 'فحص المنح. نطاقات صادقة لا مجاملات.',
    lede: 'لجان المنح لا تنشر حدوداً دنيا، ولا أحد يستطيع الوعد بالنتائج. ما نستطيعه هو وضع ملفك في النطاقات التي رأينا فعلاً أنها حصلت على تمويل.',
  },
  select: 'اختر…',
  labels: { level: 'المستوى الدراسي الذي تتقدم إليه', marks: 'أحدث نتيجة أكاديمية', english: 'هل لديك دليل على إتقان الإنجليزية؟' },
  levels: { bachelor: 'بكالوريوس', master: 'ماجستير', phd: 'دكتوراه' },
  marks: { m90: '90%+ / GPA 3.7+', m80: '80–89% / GPA 3.3+', m70: '70–79% / GPA 2.8+', m60: 'أقل من 70% / GPA 2.8' },
  english: { yes: 'نعم (شهادة لغة التدريس / IELTS / TOEFL)', no: 'ليس بعد' },
  error: 'أجب عن الأسئلة الثلاثة لترى نطاقك.',
  go: 'أرني نطاقي',
  how: {
    label: 'كيف تُبنى هذه النطاقات',
    text: 'من سجلات الإلحاق: تتركز منح CSC الكاملة بين من يحصلون على 80%+ / GPA 3.3+، ويُحكم على ملفات الدكتوراه البحثية بالمنشورات وملاءمة المشرف لا بالدرجات وحدها. أما المنح الجزئية الإقليمية والجامعية فتصل إلى نطاقات أدنى. لا أحد — بمن فيهم نحن — يتحكم في قرارات اللجان؛ نحن نتحكم في جودة الملف واختيار الجامعة.',
  },
  script: {
    phdStrong: {
      label: 'النطاق 1 — موقع قوي لمنحة CSC',
      title: 'أنت في نطاق منحة CSC للدكتوراه.',
      body: 'بالنسبة لمتقدمي الدكتوراه، تزن اللجان المنشورات وملاءمة البحث وقبول المشرف قبل الدرجات وحدها — ودرجاتك تتجاوز الحد. الخطوات الحاسمة هي مراسلة مشرفين مناسبين بمقترح قوي والتقديم بالنوع B إلى 2–3 جامعات معتمدة لـ CSC. فريقنا يكتب هذه الملفات أسبوعياً.',
    },
    phdMid: {
      label: 'النطاق 2 — يعتمد على البحث',
      title: 'الدرجات مقبولة؛ والدليل البحثي هو الحاسم.',
      body: 'تتوقف منح CSC للدكتوراه في هذا النطاق على ما يقف خلف كشف الدرجات: أوراق بحثية ومشاريع ومشرف يريدك. مع مقترح قوي والجامعة المناسبة يكون التمويل واقعياً؛ وبدونهما خطط لمنح تغطي الرسوم فقط أو منح إقليمية.',
    },
    phdLow: {
      label: 'النطاق 3 — ابنِ الملف أولاً',
      title: 'سيكون التمويل صعباً في هذه الدورة.',
      body: 'قراءة صادقة: منحة CSC للدكتوراه عند هذا النطاق من الدرجات احتمالها ضعيف ما لم يكن الإنتاج البحثي استثنائياً. الخيارات: استهداف المنح الإقليمية/الجامعية، أو سلوك مسار ماجستير بحثي ممول أولاً، أو تعزيز المنشورات للدورة القادمة.',
    },
    masterStrong: {
      label: 'النطاق 1 — موقع قوي لمنحة CSC',
      title: 'أنت في نطاق المنحة الكاملة.',
      body: 'متقدمو الماجستير بـ 90%+ مع دليل الإنجليزية يقعون ضمن النطاق الذي يفوز بمنح CSC الكاملة في الجامعات القوية — خصوصاً طلبات النوع B إلى حرم مدن الدرجة الثانية حيث المنافسة أخف. قدّم إلى ثلاث: واحدة طموحة وواحدة مناسبة وواحدة عالية الاحتمال.',
    },
    masterGood: {
      label: 'النطاق 1–2 — منافس لمنحة CSC',
      title: 'المنح الكاملة واردة؛ والجزئية مرجحة.',
      body: 'يفوز هذا النطاق بانتظام بمنح CSC كاملة في الجامعات الإقليمية ومنح جزئية (رسوم فقط) في الجامعات الكبرى. خطة الدراسة وخطابات التوصية ترفعك في الترتيب — وهذا عمل يمكن صياغته ونقوم به معك.',
    },
    masterMid: {
      label: 'النطاق 2 — نطاق المنح الجزئية',
      title: 'فكّر في إعفاءات الرسوم لا في تغطية كاملة.',
      body: 'النتيجة الواقعية: منح جامعية جزئية — الرسوم مغطاة والسكن والراتب على نفقتك — إضافة إلى منح إقليمية. عدة جامعات شريكة تجمع المنح الجزئية بقوة لهذا النطاق.',
    },
    masterLow: {
      label: 'النطاق 3 — تمويل ذاتي بخيارات ذكية',
      title: 'خطط للتمويل الذاتي؛ وأنفق حيث يهم.',
      body: 'المنح غير مرجحة في هذه الدورة. والخبر الجيد: ماجستير الهندسة والأعمال في مدن الدرجة الثانية يكلف 2,500–4,000 دولار سنوياً — وقد تتفوق الحسابات على الخيارات المحلية. اخفض التكاليف باختيار المدينة لا بخفض الجودة.',
    },
    bachStrong: {
      label: 'النطاق 1 — قمة مجموعة البكالوريوس',
      title: 'موقع قوي للمنح الكاملة والجزئية.',
      body: 'بـ 90%+ تنافس على مقاعد CSC للبكالوريوس (نادرة لكنها حقيقية) وجوائز رئاسة الجامعة والمنح الإقليمية. حصة CSC للبكالوريوس أصغر بكثير من الماجستير — اقرن كل طلب CSC بطلبين لجوائز جامعية.',
    },
    bachGood: {
      label: 'النطاق 2 — نطاق المنح الجزئية',
      title: 'المنح الجزئية الجامعية هي مسارك.',
      body: 'يفوز هذا النطاق بثبات بإعفاءات الرسوم والمنح الإقليمية الجزئية في جامعات جيدة. تحدث منحة CSC كاملة للبكالوريوس أحياناً، لكن خطط للرسوم على أساس تغطية جزئية واعتبر أي منحة كاملة مكسباً إضافياً.',
    },
    bachMid: {
      label: 'النطاق 3 — بعض المنح الجامعية',
      title: 'منح جزئية انتقائية؛ والجامعات الاقتصادية تتألق.',
      body: 'توقع خصومات على الرسوم في الجامعات المركزة على القيمة بدلاً من منح مسماة. مدن الدرجة الثانية تُبقي التكلفة الإجمالية معقولة — وهنا يغير اختيار المدينة الحساب أكثر من مطاردة المنح.',
    },
    bachLow: {
      label: 'النطاق 4 — مسار التمويل الذاتي',
      title: 'التمويل الذاتي هو الخطة الصادقة.',
      body: 'خطط على أساس الرسوم الكاملة واعتمد على الجامعات منخفضة الرسوم والمدن منخفضة التكلفة. الشهادة أهم من الخصم؛ وطالب مقبول أفضل من طلب بلا تمويل.',
    },
    englishBold: 'العائق التالي: دليل الإنجليزية.',
    englishRest: 'احصل على شهادة لغة التدريس أو احجز موعد IELTS/TOEFL — الملفات بلا إثبات لغة تسقط في فرز المنح.',
    ctaGuide: 'اقرأ دليل CSC',
    ctaReview: 'احصل على مراجعة للملف',
  },
};

const es: ScholarshipStrings = {
  title: 'Elegibilidad para becas — CSC y becas universitarias',
  description:
    'Vea dónde se sitúan realmente sus calificaciones y nivel de estudios para las becas del gobierno chino (CSC) y de las universidades: rango de beca completa, becas parciales o autofinanciación con mejores probabilidades. Rangos honestos, sin correo electrónico.',
  crumb: 'Prueba de becas',
  toolsCrumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramienta gratis · 2 minutos',
    title: 'Prueba de becas. Rangos honestos, no halagos.',
    lede: 'Los comités de becas no publican notas de corte y nadie puede prometer resultados. Lo que podemos hacer es situar su perfil frente a los rangos que realmente hemos visto financiados.',
  },
  select: 'Seleccione…',
  labels: { level: 'Nivel de estudios al que solicita', marks: 'Último resultado académico', english: '¿Evidencia de dominio del inglés?' },
  levels: { bachelor: 'Licenciatura', master: 'Maestría', phd: 'Doctorado' },
  marks: { m90: '90 %+ / GPA 3.7+', m80: '80–89 % / GPA 3.3+', m70: '70–79 % / GPA 2.8+', m60: 'Menos de 70 % / GPA 2.8' },
  english: { yes: 'Sí (certificado de idioma de instrucción / IELTS / TOEFL)', no: 'Todavía no' },
  error: 'Responda las tres preguntas para ver su rango.',
  go: 'Mostrar mi rango',
  how: {
    label: 'Cómo se construyen estos rangos',
    text: 'A partir de registros de colocación: las becas CSC completas se concentran en la población de 80 %+ / GPA 3.3+, y los perfiles de investigación de doctorado se juzgan por publicaciones y encaje con el supervisor más que solo por calificaciones. Las becas parciales provinciales y universitarias llegan a rangos más bajos. Nadie — incluidos nosotros — controla las decisiones de los comités; nosotros controlamos la calidad del expediente y la elección de universidad.',
  },
  script: {
    phdStrong: {
      label: 'Rango 1 — Posición CSC sólida',
      title: 'Está en territorio CSC de doctorado.',
      body: 'Para candidatos a doctorado, los comités pesan publicaciones, encaje de investigación y aceptación del supervisor por encima de las calificaciones solas — y sus calificaciones superan el listón. Las jugadas decisivas: escribir a supervisores afines con una propuesta sólida y solicitar Tipo B a 2–3 universidades designadas por CSC. Nuestro equipo redacta estos expedientes cada semana.',
    },
    phdMid: {
      label: 'Rango 2 — Depende de la investigación',
      title: 'Las calificaciones sirven; la evidencia de investigación decide.',
      body: 'Las becas CSC de doctorado en este rango dependen de lo que hay detrás del expediente: artículos, proyectos, un supervisor que lo quiere. Con una propuesta sólida y la universidad adecuada, la financiación es realista; sin ellas, planee solo matrícula o becas provinciales.',
    },
    phdLow: {
      label: 'Rango 3 — Construya primero el perfil',
      title: 'La financiación será difícil en este ciclo.',
      body: 'Lectura honesta: una CSC de doctorado en este rango de calificaciones es poco probable salvo que la producción investigadora sea excepcional. Opciones: apuntar a becas provinciales/universitarias, hacer primero un MPhil financiado o reforzar las publicaciones para el próximo ciclo.',
    },
    masterStrong: {
      label: 'Rango 1 — Posición CSC sólida',
      title: 'Está en el rango de beca completa.',
      body: 'Los candidatos a maestría con 90 %+ y evidencia de inglés están dentro del rango que gana becas CSC completas en buenas universidades — sobre todo con solicitudes Tipo B a campus de ciudades de segundo nivel, donde la competencia es menor. Solicite a tres: una ambiciosa, una realista y una de alta probabilidad.',
    },
    masterGood: {
      label: 'Rango 1–2 — Competitivo para CSC',
      title: 'Las becas completas están en juego; las parciales son probables.',
      body: 'Este rango gana con regularidad becas CSC completas en universidades provinciales y becas parciales (solo matrícula) en los grandes nombres. El plan de estudios y las cartas de recomendación lo suben en la pila — es trabajo que se puede pulir y lo hacemos con usted.',
    },
    masterMid: {
      label: 'Rango 2 — Territorio de becas parciales',
      title: 'Piense en exenciones de matrícula, no en beca completa.',
      body: 'Resultado realista: becas parciales universitarias — matrícula cubierta, residencia y asignación por su cuenta — más becas provinciales. Varias universidades socias acumulan parciales con decisión para este rango.',
    },
    masterLow: {
      label: 'Rango 3 — Autofinanciado con elecciones inteligentes',
      title: 'Planee autofinanciarse; gaste donde cuenta.',
      body: 'Las becas serán improbables en este ciclo. La buena noticia: las maestrías de ingeniería y negocios en ciudades de segundo nivel cuestan 2500–4000 USD/año — las cuentas aún pueden superar las opciones locales. Reduzca costos con la ciudad, no con la calidad.',
    },
    bachStrong: {
      label: 'Rango 1 — Lo más alto del grupo de licenciatura',
      title: 'Posición sólida para becas completas y parciales.',
      body: 'Con 90 %+ compite por plazas CSC de licenciatura (escasas pero reales), premios presidenciales universitarios y becas provinciales. El cupo CSC de licenciatura es mucho menor que el de maestría — acompañe cada solicitud CSC con 2 solicitudes de premios universitarios.',
    },
    bachGood: {
      label: 'Rango 2 — Rango de becas parciales',
      title: 'Las becas parciales universitarias son su carril.',
      body: 'Este rango gana de forma fiable exenciones de matrícula y becas provinciales parciales en buenas universidades. La CSC completa en licenciatura ocurre, pero planee las tarifas suponiendo cobertura parcial y trate cualquier beca completa como un extra.',
    },
    bachMid: {
      label: 'Rango 3 — Algunas becas universitarias',
      title: 'Parciales selectivas; las universidades de buen precio destacan.',
      body: 'Espere descuentos de matrícula en universidades centradas en el valor más que becas con nombre. Las ciudades de segundo nivel mantienen manejable el costo total — aquí la elección de ciudad cambia las cuentas más que perseguir becas.',
    },
    bachLow: {
      label: 'Rango 4 — Ruta autofinanciada',
      title: 'Autofinanciarse es el plan honesto.',
      body: 'Planee con las tarifas completas y apóyese en universidades de matrícula baja y ciudades económicas. El título importa más que el descuento; un estudiante colocado vale más que una solicitud sin financiación.',
    },
    englishBold: 'Próximo obstáculo: evidencia de inglés.',
    englishRest: 'Obtenga el certificado de idioma de instrucción o reserve una fecha de IELTS/TOEFL — los expedientes sin prueba de idioma no pasan los filtros de beca.',
    ctaGuide: 'Leer la guía CSC',
    ctaReview: 'Obtener una revisión del expediente',
  },
};

const de: ScholarshipStrings = {
  title: 'Stipendien-Check — CSC & Universitätsstipendien',
  description:
    'Prüfen Sie, wo Ihre Noten und Ihr Studienlevel tatsächlich stehen für chinesische Regierungsstipendien (CSC) und Universitätsstipendien: Vollstipendien-Spanne, Teilstipendien oder selbstfinanziert mit besseren Chancen. Ehrliche Stufen, keine E-Mail nötig.',
  crumb: 'Stipendien-Check',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Kostenloses Tool · 2 Minuten',
    title: 'Stipendien-Check. Ehrliche Stufen, keine Schmeichelei.',
    lede: 'Stipendienkommissionen veröffentlichen keine Grenzwerte, und niemand kann Ergebnisse versprechen. Was wir können: Ihr Profil an den Stufen messen, die wir tatsächlich gefördert gesehen haben.',
  },
  select: 'Auswählen…',
  labels: { level: 'Angestrebtes Studienlevel', marks: 'Aktuelles akademisches Ergebnis', english: 'Englisch-Nachweis vorhanden?' },
  levels: { bachelor: 'Bachelor', master: 'Master', phd: 'Promotion' },
  marks: { m90: '90%+ / GPA 3,7+', m80: '80–89% / GPA 3,3+', m70: '70–79% / GPA 2,8+', m60: 'Unter 70% / GPA 2,8' },
  english: { yes: 'Ja (Unterrichtssprachen-Zertifikat / IELTS / TOEFL)', no: 'Noch nicht' },
  error: 'Beantworten Sie alle drei Fragen, um Ihre Stufe zu sehen.',
  go: 'Meine Stufe anzeigen',
  how: {
    label: 'Wie diese Stufen entstehen',
    text: 'Aus Platzierungsunterlagen: Voll-CSC-Stipendien konzentrieren sich auf die Gruppe mit 80%+ / GPA 3,3+, Promotionsforschungsprofile werden nach Publikationen und Betreuer-Passung beurteilt statt nur nach Noten. Provinz- und Universitäts-Teilstipendien erreichen tiefere Stufen. Niemand — auch wir nicht — kontrolliert Kommissionsentscheide; wir kontrollieren Aktenqualität und Universitätswahl.',
  },
  script: {
    phdStrong: {
      label: 'Stufe 1 — Starke CSC-Position',
      title: 'Sie sind im CSC-Promotionsgebiet.',
      body: 'Bei Promotionsbewerbern wiegen Kommissionen Publikationen, Forschungspassung und Betreuerzusage höher als Noten allein — und Ihre Noten passieren die Hürde. Entscheidend sind: passende Betreuer mit einem präzisen Vorschlag anschreiben und Typ-B-Bewerbungen an 2–3 CSC-designierte Universitäten. Unser Desk schreibt solche Akten wöchentlich.',
    },
    phdMid: {
      label: 'Stufe 2 — Forschungsabhängig',
      title: 'Noten sind brauchbar; die Forschungsnachweise entscheiden.',
      body: 'CSC-Promotionsstipendien auf dieser Stufe hängen an dem, was hinter der Notenabchrift steht: Publikationen, Projekte, ein Betreuer, der Sie will. Mit starkem Vorschlag und der richtigen Universität ist die Förderung realistisch; ohne — planen Sie reine Gebührenbefreiung oder Provinzstipendien.',
    },
    phdLow: {
      label: 'Stufe 3 — Erst das Profil aufbauen',
      title: 'Förderung wird in diesem Zyklus schwierig.',
      body: 'Ehrliche Lesart: Ein CSC-Promotionsstipendium bei dieser Notenstufe ist unwahrscheinlich, sofern die Forschungsbilanz nicht außergewöhnlich ist. Optionen: Provinz-/Universitätsstipendien anvisieren, zuerst einen finanzierten MPhil-Weg gehen oder Publikationen für den nächsten Zyklus ausbauen.',
    },
    masterStrong: {
      label: 'Stufe 1 — Starke CSC-Position',
      title: 'Sie sind in der Vollstipendien-Spanne.',
      body: 'Masterbewerber mit 90%+ und Englischnachweis liegen in der Spanne, die an starken Universitäten volle CSC-Stipendien gewinnt — besonders Typ-B-Bewerbungen an Campusse in Städten zweiter Kategorie, wo die Konkurrenz dünner ist. Bewerben Sie sich auf drei: eine ehrgeizige, eine realistische, eine sehr wahrscheinliche.',
    },
    masterGood: {
      label: 'Stufe 1–2 — CSC-kompetitiv',
      title: 'Vollstipendien im Spiel; Teilstipendien wahrscheinlich.',
      body: 'Diese Stufe gewinnt regelmäßig volle CSC-Stipendien an Provinzuniversitäten und Teilstipendien (nur Studiengebühren) an Topnamen. Studienplan und Empfehlungsschreiben heben Sie im Stapel — handwerkliche Arbeit, die wir mit Ihnen machen.',
    },
    masterMid: {
      label: 'Stufe 2 — Teilstipendien-Gebiet',
      title: 'Denken Sie an Gebührenerlasse, nicht an die volle Förderung.',
      body: 'Realistisches Ergebnis: Universitäts-Teilstipendien — Studiengebühren gedeckt, Wohnheim und Förderung selbst zu tragen — plus Provinzstipendien. Mehrere Partneruniversitäten stapeln Teilstipendien für diese Stufe aktiv.',
    },
    masterLow: {
      label: 'Stufe 3 — Selbstfinanziert mit klugen Wahlen',
      title: 'Planen Sie Selbstfinanzierung; geben Sie dort aus, wo es zählt.',
      body: 'Stipendien sind in diesem Zyklus unwahrscheinlich. Die gute Nachricht: Master in Ingenieurwesen und BWL in Städten zweiter Kategorie kosten 2.500–4.000 USD/Jahr — die Rechnung kann Inlandsoptionen noch schlagen. Senken Sie Kosten über die Stadtwahl, nicht über die Qualität.',
    },
    bachStrong: {
      label: 'Stufe 1 — Spitze des Bachelor-Pools',
      title: 'Starke Position für Voll- und Teilstipendien.',
      body: 'Mit 90%+ konkurrieren Sie um CSC-Bachelorplätze (selten, aber real), Universitäts-Presidential Awards und Provinzstipendien. Das CSC-Bachelorquotum ist viel kleiner als beim Master — kombinieren Sie jede CSC-Bewerbung mit 2 Universitätsstipendien-Bewerbungen.',
    },
    bachGood: {
      label: 'Stufe 2 — Teilstipendien-Spanne',
      title: 'Universitäre Teilstipendien sind Ihre Spur.',
      body: 'Diese Stufe gewinnt zuverlässig Gebührenerlasse und Provinz-Teilstipendien an guten Universitäten. Volle CSC im Bachelor kommt vor, aber planen Sie die Gebühren mit Teildeckung und rechnen jede Vollförderung als Bonus.',
    },
    bachMid: {
      label: 'Stufe 3 — Einige Universitätsstipendien',
      title: 'Selektive Teilstipendien; Preis-Leistungs-Universitäten glänzen.',
      body: 'Rechnen Sie mit Gebührenerlassen an preiswerten Universitäten statt namentlichen Stipendien. Städte zweiter Kategorie halten die Gesamtkosten tragbar — hier ändert die Stadtwahl die Rechnung mehr als die Stipendienjagd.',
    },
    bachLow: {
      label: 'Stufe 4 — Selbstfinanzierter Weg',
      title: 'Selbstfinanzierung ist der ehrliche Plan.',
      body: 'Planen Sie volle Gebühren und stützen Sie sich auf gebührenarme Universitäten und kostengünstige Städte. Der Abschluss zählt mehr als der Rabatt; ein platzierter Student schlägt eine unfinanzierte Bewerbung.',
    },
    englishBold: 'Nächste Hürde: der Englischnachweis.',
    englishRest: 'Holen Sie das Unterrichtssprachen-Zertifikat oder buchen Sie einen IELTS/TOEFL-Termin — Akten ohne Sprachnachweis fallen beim Stipendien-Screening durch.',
    ctaGuide: 'Den CSC-Leitfaden lesen',
    ctaReview: 'Aktenprüfung anfragen',
  },
};

const ja: ScholarshipStrings = {
  title: '奨学金受給資格チェック — CSC奨学金と大学奨学金',
  description: 'あなたの成績と学習段階が、中国政府奨学金（CSC）や大学奨学金のどこに実際に当てはまるかを確認します：全額奨学金の幅、部分奨学金、または可能性の高い自費ルート。正直なランクで、メール登録は不要です。',
  crumb: '奨学金チェック',
  toolsCrumb: 'ツール',
  hero: {
    eyebrow: '無料ツール · 2分',
    title: '奨学金チェック。正直なランクで、お世辞はありません。',
    lede: '奨学金の選考委員会は基準ラインを公表しませんし、誰も結果を約束できません。私たちにできるのは、実際に採択されたのを見てきたランクに対してあなたのプロフィールを位置づけることです。',
  },
  select: '選択してください…',
  labels: { level: '出願する学習段階', marks: '直近の学業成績', english: '英語能力の証明はありますか？' },
  levels: { bachelor: '学士', master: '修士', phd: '博士' },
  marks: { m90: '90%以上 / GPA 3.7+', m80: '80〜89% / GPA 3.3+', m70: '70〜79% / GPA 2.8+', m60: '70%未満 / GPA 2.8' },
  english: { yes: 'はい（授業言語証明書 / IELTS / TOEFL）', no: 'まだない' },
  error: 'ランクを見るには3つの質問すべてにお答えください。',
  go: '自分のランクを表示',
  how: {
    label: 'このランクの作られ方',
    text: '配属実績から：CSC全額奨学金は80%以上 / GPA 3.3+ の層に集中し、博士の研究系プロフィールは成績だけでなく論文実績と指導教員との適合性で判断されます。省級・大学の部分奨学金はより低いランクにも届きます。誰も — 私たちも含めて — 選考委員会の決定は変えられません；私たちが変えられるのは書類の質と大学の選択です。',
  },
  script: {
    phdStrong: {
      label: 'ランク1 — CSCで有利な位置',
      title: 'あなたはCSC博士の射程内です。',
      body: '博士出願者に対し、選考委員会は成績以上に論文実績・研究適合性・指導教員の受諾を重く見ます — あなたの成績はすでに基準を超えています。決め手は、練れた計画書を持って合う指導教員に連絡し、CSC指定大学2〜3校にタイプBで出願すること。私たちのチームは毎週こうした書類を書いています。',
    },
    phdMid: {
      label: 'ランク2 — 研究次第',
      title: '成績は及第点；研究実績が決め手です。',
      body: 'このランクのCSC博士奨学金は、成績証明書の裏にあるもの次第です：論文、プロジェクト、あなたを欲しがる指導教員。強い計画書と適切な大学があれば採択は現実的；なければ学費免除のみか省級奨学金を計画してください。',
    },
    phdLow: {
      label: 'ランク3 — まずプロフィールを築く',
      title: 'このサイクルでの採択は困難です。',
      body: '正直に見ると：この成績ランクでのCSC博士は、研究実績が際立っていない限り見込みが薄いです。選択肢：省級・大学奨学金を狙う、まず研究系修士（MPhil）の奨学金ルートを通る、次のサイクルに向け論文実績を強化する。',
    },
    masterStrong: {
      label: 'ランク1 — CSCで有利な位置',
      title: '全額奨学金の幅に入っています。',
      body: '90%以上で英語証明のある修士出願者は、強い大学でCSC全額を取れるランクにいます — 特に競争の緩い二線都市キャンパスへのタイプB出願。3校に出願を：ひとつ挑戦、ひとつ本命、ひとつ可能性大。',
    },
    masterGood: {
      label: 'ランク1〜2 — CSCで十分競争力あり',
      title: '全額も射程に；部分奨学金は見込み大。',
      body: 'このランクは省属大学でCSC全額を、名門校では部分奨学金（学費のみ）を定期的に取ります。学習計画書と推薦状が書類の山であなたを上げます — 磨ける仕事であり、私たちが一緒に取り組みます。',
    },
    masterMid: {
      label: 'ランク2 — 部分奨学金の領域',
      title: '全額ではなく学費免除を考えましょう。',
      body: '現実的な結果：大学の部分奨学金 — 学費は免除、寮と生活奨励金は自費 — に省級奨学金を加える形。複数の提携大学はこのランクに部分奨学金を積極的に重ねます。',
    },
    masterLow: {
      label: 'ランク3 — 賢い選択で自費',
      title: '自費で計画；お金は効く場所に。',
      body: 'このサイクルでの奨学金は見込み薄です。朗報：二線都市の工学・経営修士は年2,500〜4,000米ドル — 計算次第では国内の選択肢に勝てます。コストは質ではなく都市選択で下げてください。',
    },
    bachStrong: {
      label: 'ランク1 — 学士層の頂点',
      title: '全額・部分の両方で有利な位置。',
      body: '90%以上ならCSCの学士枠（希少だが実在）、大学総長賞、省級奨学金を狙えます。CSCの学士枠は修士よりはるかに小さい — CSC出願1件ごとに大学奨学金出願2件を組み合わせてください。',
    },
    bachGood: {
      label: 'ランク2 — 部分奨学金の幅',
      title: '大学の部分奨学金があなたのルート。',
      body: 'このランクは良い大学で学費免除と省級部分奨学金を確実に取ります。学士レベルでCSC全額も起こりますが、費用は部分給付を前提に計画し、全額が取れたら上乗せと考えてください。',
    },
    bachMid: {
      label: 'ランク3 — 一部の大学奨学金',
      title: '選抜的な部分給付；費用対効果の高い大学が輝きます。',
      body: '名の知れた奨学金よりも、コスト重視の大学での学費減免を想定してください。二線都市なら総費用が現実的 — ここでは奨学金追いかけより都市選択のほうが計算を変えます。',
    },
    bachLow: {
      label: 'ランク4 — 自費ルート',
      title: '自費が正直な計画です。',
      body: '全額学費を前提にし、学費の安い大学と費用の安い都市に頼ってください。大事なのは割引より学位；配置された学生は奨学金のない出願に勝ります。',
    },
    englishBold: '次の関門：英語の証明。',
    englishRest: '授業言語証明書を取得するか、IELTS/TOEFLの試験日を予約してください — 言語証明のない書類は奨学金の選考で落とされます。',
    ctaGuide: 'CSCガイドを読む',
    ctaReview: '書類レビューを依頼する',
  },
};

const pt: ScholarshipStrings = {
  title: 'Verificação de elegibilidade para bolsas — CSC e bolsas universitárias',
  description:
    'Veja onde suas notas e seu nível de estudo realmente se situam para bolsas do governo chinês (CSC) e de universidades: faixa de bolsa integral, bolsas parciais ou rota autofinanciada com melhores chances. Faixas honestas, sem e-mail.',
  crumb: 'Verificação de bolsas',
  toolsCrumb: 'Ferramentas',
  hero: {
    eyebrow: 'Ferramenta gratuita · 2 minutos',
    title: 'Verificação de bolsas. Faixas honestas, não bajulação.',
    lede: 'Os comitês de bolsas não publicam notas de corte, e ninguém pode prometer resultados. O que podemos fazer é posicionar seu perfil em relação às faixas que realmente vimos serem financiadas.',
  },
  select: 'Selecione…',
  labels: { level: 'Nível de estudo ao qual você se candidata', marks: 'Resultado acadêmico mais recente', english: 'Comprovação de proficiência em inglês?' },
  levels: { bachelor: 'Graduação', master: 'Mestrado', phd: 'Doutorado' },
  marks: { m90: '90%+ / GPA 3.7+', m80: '80–89% / GPA 3.3+', m70: '70–79% / GPA 2.8+', m60: 'Abaixo de 70% / GPA 2.8' },
  english: { yes: 'Sim (certificado de língua de instrução / IELTS / TOEFL)', no: 'Ainda não' },
  error: 'Responda as três perguntas para ver sua faixa.',
  go: 'Mostrar minha faixa',
  how: {
    label: 'Como estas faixas são construídas',
    text: 'A partir de registros de colocações: as bolsas CSC integrais se concentram no grupo de 80%+ / GPA 3.3+, e perfis de pesquisa de doutorado são julgados por publicações e afinidade com o orientador, não só pelas notas. Bolsas parciais provinciais e universitárias alcançam faixas mais baixas. Ninguém — nem nós — controla as decisões dos comitês; controlamos a qualidade do dossiê e a escolha da universidade.',
  },
  script: {
    phdStrong: {
      label: 'Faixa 1 — Posição CSC forte',
      title: 'Você está no território CSC de doutorado.',
      body: 'Para candidatos a doutorado, os comitês pesam publicações, afinidade de pesquisa e aceite do orientador acima das notas sozinhas — e suas notas ultrapassam o corte. As jogadas decisivas: escrever a orientadores compatíveis com uma proposta afiada e candidatar-se Tipo B a 2–3 universidades designadas pelo CSC. Nossa equipe escreve esses dossiês toda semana.',
    },
    phdMid: {
      label: 'Faixa 2 — Depende da pesquisa',
      title: 'As notas servem; a evidência de pesquisa decide.',
      body: 'As bolsas CSC de doutorado nessa faixa dependem do que há por trás do histórico: artigos, projetos, um orientador que o quer. Com uma proposta forte e a universidade certa, o financiamento é realista; sem, planeje só isenção de mensalidade ou bolsas provinciais.',
    },
    phdLow: {
      label: 'Faixa 3 — Construa o perfil primeiro',
      title: 'O financiamento será difícil neste ciclo.',
      body: 'Leitura honesta: bolsa CSC de doutorado nessa faixa de notas é aposta distante, a menos que a produção de pesquisa seja excepcional. Opções: mirar bolsas provinciais/universitárias, passar primeiro por um mestrado de pesquisa financiado ou reforçar as publicações para o próximo ciclo.',
    },
    masterStrong: {
      label: 'Faixa 1 — Posição CSC forte',
      title: 'Você está na faixa da bolsa integral.',
      body: 'Candidatos a mestrado com 90%+ e comprovação de inglês estão dentro da faixa que ganha bolsas CSC integrais em universidades fortes — sobretudo candidaturas Tipo B a campi de cidades de segundo nível, onde a competição é menor. Candidate-se a três: uma ambiciosa, uma realista, uma de alta probabilidade.',
    },
    masterGood: {
      label: 'Faixa 1–2 — Competitivo para CSC',
      title: 'Integrais em jogo; parciais prováveis.',
      body: 'Esta faixa ganha com regularidade bolsas CSC integrais em universidades provinciais e parciais (só mensalidade) nos grandes nomes. O plano de estudos e as cartas de recomendação o sobem na pilha — é trabalho que se lapida, e fazemos com você.',
    },
    masterMid: {
      label: 'Faixa 2 — Território de bolsas parciais',
      title: 'Pense em isenção de mensalidade, não em bolsa integral.',
      body: 'Resultado realista: bolsas parciais universitárias — mensalidade coberta, alojamento e bolsa por sua conta — mais bolsas provinciais. Várias universidades parceiras empilham parciais com força nesta faixa.',
    },
    masterLow: {
      label: 'Faixa 3 — Autofinanciado com escolhas inteligentes',
      title: 'Planeje o autofinanciamento; gaste onde importa.',
      body: 'Bolsas serão improváveis neste ciclo. A boa notícia: mestrados de engenharia e negócios em cidades de segundo nível custam US$2.500–4.000/ano — as contas ainda podem vencer as opções nacionais. Corte custos pela escolha da cidade, não da qualidade.',
    },
    bachStrong: {
      label: 'Faixa 1 — Topo do grupo de graduação',
      title: 'Posição forte para bolsas integrais e parciais.',
      body: 'Com 90%+ você disputa vagas CSC de graduação (escassas, mas reais), prêmios de reitoria de universidades e bolsas provinciais. A cota CSC de graduação é bem menor que a de mestrado — combine cada candidatura CSC com 2 candidaturas a prêmios universitários.',
    },
    bachGood: {
      label: 'Faixa 2 — Faixa de bolsas parciais',
      title: 'As parciais universitárias são sua pista.',
      body: 'Esta faixa ganha de forma confiável isenções de mensalidade e parciais provinciais em boas universidades. CSC integral na graduação acontece, mas planeje as taxas assumindo cobertura parcial e trate qualquer bolsa integral como bônus.',
    },
    bachMid: {
      label: 'Faixa 3 — Algumas bolsas universitárias',
      title: 'Parciais seletivas; universidades de bom custo-benefício brilham.',
      body: 'Espere descontos de mensalidade em universidades focadas em custo-benefício, mais do que bolsas com nome. As cidades de segundo nível mantêm o custo total administrável — aqui a escolha da cidade muda a conta mais do que perseguir bolsas.',
    },
    bachLow: {
      label: 'Faixa 4 — Rota autofinanciada',
      title: 'Autofinanciar é o plano honesto.',
      body: 'Planeje com as taxas cheias e apoie-se em universidades de mensalidade baixa e cidades baratas. O diploma importa mais que o desconto; um estudante colocado vale mais que uma candidatura sem financiamento.',
    },
    englishBold: 'Próxima barreira: comprovação de inglês.',
    englishRest: 'Obtenha o certificado de língua de instrução ou reserve uma data de IELTS/TOEFL — dossiês sem prova de idioma caem na triagem das bolsas.',
    ctaGuide: 'Ler o guia do CSC',
    ctaReview: 'Pedir uma revisão do dossiê',
  },
};

const hi: ScholarshipStrings = {
  title: 'छात्रवृत्ति पात्रता जाँच — CSC और विश्वविद्यालय छात्रवृत्तियाँ',
  description: 'जानें आपके अंक और अध्ययन स्तर चीन सरकार (CSC) और विश्वविद्यालय छात्रवृत्तियों के लिए असल में कहाँ खड़े हैं: पूर्ण छात्रवृत्ति रेंज, आंशिक छात्रवृत्तियाँ, या बेहतर संभावनाओं वाला स्वयं वित्तपोषित रास्ता। ईमानदार स्तर, ईमेल आवश्यक नहीं।',
  crumb: 'छात्रवृत्ति जाँच',
  toolsCrumb: 'टूल्स',
  hero: {
    eyebrow: 'मुफ़्त टूल · 2 मिनट',
    title: 'छात्रवृत्ति जाँच। ईमानदार स्तर, चापलूसी नहीं।',
    lede: 'छात्रवृत्ति समितियाँ कट-ऑफ प्रकाशित नहीं करतीं और कोई परिणाम का वादा नहीं कर सकता। हम यह कर सकते हैं कि आपकी प्रोफ़ाइल को उन स्तरों पर रखें जिन्हें हमने वास्तव में वित्तपोषित देखा है।',
  },
  select: 'चुनें…',
  labels: { level: 'जिस अध्ययन स्तर के लिए आवेदन कर रहे हैं', marks: 'नवीनतम शैक्षणिक परिणाम', english: 'अंग्रेज़ी प्रवीणता का प्रमाण?' },
  levels: { bachelor: 'स्नातक', master: 'स्नातकोत्तर', phd: 'पीएचडी' },
  marks: { m90: '90%+ / GPA 3.7+', m80: '80–89% / GPA 3.3+', m70: '70–79% / GPA 2.8+', m60: '70% से नीचे / GPA 2.8' },
  english: { yes: 'हाँ (माध्यम प्रमाणपत्र / IELTS / TOEFL)', no: 'अभी नहीं' },
  error: 'अपना स्तर देखने के लिए तीनों सवालों के उत्तर दें।',
  go: 'मेरा स्तर दिखाएँ',
  how: {
    label: 'ये स्तर कैसे बनते हैं',
    text: 'प्लेसमेंट रिकॉर्ड से: पूर्ण CSC छात्रवृत्तियाँ 80%+ / GPA 3.3+ समूह में केंद्रित होती हैं, और पीएचडी शोध प्रोफ़ाइल को प्रकाशनों और पर्यवेक्षक-उपयुक्तता पर आँका जाता है, केवल अंकों पर नहीं। प्रांतीय और विश्वविद्यालय आंशिक छात्रवृत्तियाँ निचले स्तरों तक पहुँचती हैं। कोई — हम सहित — समिति के निर्णय नहीं बदल सकता; हम फ़ाइल की गुणवत्ता और विश्वविद्यालय के चयन को बदल सकते हैं।',
  },
  script: {
    phdStrong: {
      label: 'स्तर 1 — CSC में मज़बूत स्थिति',
      title: 'आप CSC पीएचडी क्षेत्र में हैं।',
      body: 'पीएचडी आवेदकों के लिए समितियाँ प्रकाशन, शोध-उपयुक्तता और पर्यवेक्षक की स्वीकृति को अंकों से ऊपर तौलती हैं — और आपके अंक दहलीज़ पार करते हैं। निर्णायक कदम: उपयुक्त पर्यवेक्षकों को तीखे प्रस्ताव के साथ ईमेल करना और 2–3 CSC-नामित विश्वविद्यालयों में टाइप B आवेदन। हमारी टीम हर सप्ताह ऐसी फ़ाइलें लिखती है।',
    },
    phdMid: {
      label: 'स्तर 2 — शोध पर निर्भर',
      title: 'अंक काम के हैं; शोध साक्ष्य तय करेगा।',
      body: 'इस स्तर की CSC पीएचडी छात्रवृत्ति अंकसूची के पीछे की चीज़ों पर टिकी है: पेपर, प्रोजेक्ट, आपको चाहने वाला पर्यवेक्षक। मज़बूत प्रस्ताव और सही विश्वविद्यालय के साथ वित्तपोषण यथार्थपरक है; बिना उसके केवल ट्यूशन माफी या प्रांतीय छात्रवृत्तियों की योजना बनाएँ।',
    },
    phdLow: {
      label: 'स्तर 3 — पहले प्रोफ़ाइल बनाएँ',
      title: 'इस चक्र में वित्तपोषण कठिन रहेगा।',
      body: 'ईमानदार पढ़ाई: इस अंक स्तर पर CSC पीएचडी लंबा शॉट है, जब तक शोध उत्पादन असाधारण न हो। विकल्प: प्रांतीय/विश्वविद्यालय छात्रवृत्तियाँ लक्षित करें, पहले वित्तपोषित MPhil रास्ता अपनाएँ, या अगले चक्र के लिए प्रकाशन मज़बूत करें।',
    },
    masterStrong: {
      label: 'स्तर 1 — CSC में मज़बूत स्थिति',
      title: 'आप पूर्ण छात्रवृत्ति रेंज में हैं।',
      body: '90%+ और अंग्रेज़ी प्रमाण वाले स्नातकोत्तर आवेदक उस रेंज में हैं जो मज़बूत विश्वविद्यालयों में CSC पूर्ण छात्रवृत्ति जीतती है — ख़ासकर द्वितीय श्रेणी शहरों के कैंपस में टाइप B आवेदन, जहाँ प्रतिस्पर्धा कम है। तीन पर आवेदन करें: एक महत्वाकांक्षी, एक लक्ष्य, एक उच्च-संभावना।',
    },
    masterGood: {
      label: 'स्तर 1–2 — CSC के लिए प्रतिस्पर्धी',
      title: 'पूर्ण छात्रवृत्तियाँ दायरे में; आंशिक संभावित।',
      body: 'यह स्तर प्रांतीय विश्वविद्यालयों में CSC पूर्ण और नामी संस्थानों में आंशिक (केवल ट्यूशन) नियमित रूप से जीतता है। अध्ययन योजना और अनुशंसा पत्र आपको ढेर में ऊपर उठाते हैं — यह गढ़ा जा सकने वाला काम है, और हम आपके साथ करते हैं।',
    },
    masterMid: {
      label: 'स्तर 2 — आंशिक छात्रवृत्ति क्षेत्र',
      title: 'पूरी छात्रवृत्ति नहीं, ट्यूशन माफी सोचें।',
      body: 'यथार्थपरक परिणाम: विश्वविद्यालय आंशिक छात्रवृत्तियाँ — ट्यूशन कवर, छात्रावास और वृत्तिराशि अपने खर्च पर — साथ में प्रांतीय छात्रवृत्तियाँ। कई साझेदार विश्वविद्यालय इस स्तर के लिए आंशिक छात्रवृत्तियाँ ज़ोर से जोड़ते हैं।',
    },
    masterLow: {
      label: 'स्तर 3 — समझदार चयन के साथ स्वयं वित्तपोषित',
      title: 'स्वयं वित्तपोषित की योजना बनाएँ; पैसा जहाँ असर हो वहाँ खर्च करें।',
      body: 'इस चक्र में छात्रवृत्ति संभावित नहीं। अच्छी ख़बर: द्वितीय श्रेणी शहरों में इंजीनियरिंग और व्यवसाय के स्नातकोत्तर प्रोग्राम 2,500–4,000 डॉलर/वर्ष चलते हैं — हिसाब अब भी घरेलू विकल्पों से बेहतर हो सकता है। लागत गुणवत्ता नहीं, शहर के चयन से घटाएँ।',
    },
    bachStrong: {
      label: 'स्तर 1 — स्नातक समूह की चोटी',
      title: 'पूर्ण और आंशिक दोनों के लिए मज़बूत स्थिति।',
      body: '90%+ पर आप CSC स्नातक सीटों (दुर्लभ पर वास्तविक), विश्वविद्यालय प्रेसिडेंशियल पुरस्कारों और प्रांतीय छात्रवृत्तियों के लिए प्रतिस्पर्धा करते हैं। CSC स्नातक कोटा स्नातकोत्तर से बहुत छोटा है — हर CSC आवेदन के साथ 2 विश्वविद्यालय-पुरस्कार आवेदन जोड़ें।',
    },
    bachGood: {
      label: 'स्तर 2 — आंशिक छात्रवृत्ति रेंज',
      title: 'विश्वविद्यालय आंशिक छात्रवृत्तियाँ आपकी लेन हैं।',
      body: 'यह स्तर अच्छे विश्वविद्यालयों में ट्यूशन माफी और प्रांतीय आंशिक छात्रवृत्तियाँ विश्वसनीय रूप से जीतता है। स्नातक स्तर पर CSC पूर्ण भी होती है, पर शुल्क की योजना आंशिक कवरेज मानकर बनाएँ और किसी भी पूर्ण छात्रवृत्ति को बोनस मानें।',
    },
    bachMid: {
      label: 'स्तर 3 — कुछ विश्वविद्यालय छात्रवृत्तियाँ',
      title: 'चयनात्मक आंशिक; किफ़ायती विश्वविद्यालय चमकते हैं।',
      body: 'नाम की छात्रवृत्तियों के बजाय किफ़ायती विश्वविद्यालयों में ट्यूशन छूट की अपेक्षा करें। द्वितीय श्रेणी शहर कुल लागत को संभालने योग्य रखते हैं — यहाँ छात्रवृत्ति के पीछे भागने से ज़्यादा शहर का चयन हिसाब बदलता है।',
    },
    bachLow: {
      label: 'स्तर 4 — स्वयं वित्तपोषित रास्ता',
      title: 'स्वयं वित्तपोषित ही ईमानदार योजना है।',
      body: 'पूर्ण शुल्क की योजना बनाएँ और कम-ट्यूशन विश्वविद्यालयों व कम-लागत शहरों पर टिकें। डिग्री छूट से ज़्यादा मायने रखती है; एक प्लेस हुआ छात्र बिना वित्तपोषण के आवेदन से बेहतर है।',
    },
    englishBold: 'अगली बाधा: अंग्रेज़ी का प्रमाण।',
    englishRest: 'माध्यम प्रमाणपत्र पाएँ या IELTS/TOEFL की तारीख़ बुक करें — भाषा प्रमाण के बिना फ़ाइलें छात्रवृत्ति छँटाई में छूट जाती हैं।',
    ctaGuide: 'CSC गाइड पढ़ें',
    ctaReview: 'फ़ाइल समीक्षा पाएँ',
  },
};

export const SCHOLARSHIP_STRINGS: Record<Locale, ScholarshipStrings> = { en, zh, fr, ar, es, de, ja, pt, hi };
