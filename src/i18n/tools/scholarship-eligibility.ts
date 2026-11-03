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

export const SCHOLARSHIP_STRINGS: Record<Locale, ScholarshipStrings> = { en, zh, fr, ar, es };
