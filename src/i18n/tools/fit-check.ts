/**
 * Fit-check strings. `script` is serialized onto the page (data-i18n) for the
 * quiz's client script; everything else renders at build time. Verdict
 * bodies are trusted source constants (no user input is interpolated).
 */
import type { Locale } from '../../lib/i18n';

interface Verdict {
  title: string;
  body: string;
}
interface VerdictByCountry {
  title: string;
  bodyIndia: string;
  bodyOther: string;
}

export interface FitStrings {
  title: string;
  description: string;
  crumb: string;
  toolsCrumb: string;
  hero: { eyebrow: string; title: string; lede: string };
  questionsH2: string;
  q1: { legend: string; opts: [string, string, string, string] };
  q2: { legend: string; opts: [string, string, string, string] };
  q3: { legend: string; opts: [string, string, string, string, string, string] };
  q4: { legend: string; opts: [string, string, string] };
  back: string;
  hint: string;
  caveat: { bold: string; text: string };
  script: {
    researchYes: Verdict;
    mbbsYes: VerdictByCountry;
    mbbsMarch: Verdict;
    bachMarch: Verdict;
    bachYes: Verdict;
    bachelorMbbs: Verdict;
    masterYes: Verdict;
    languageYes: Verdict;
    later: Verdict;
    flexible: Verdict;
    fallback: VerdictByCountry;
    ctaTalk: string;
    ctaScholarship: string;
    ctaMbbsGuide: string;
    ctaRoadmap: string;
    restart: string;
  };
}

const en: FitStrings = {
  title: 'Fit Check — Are You Eligible to Study in China?',
  description:
    'Four questions, a straight answer. The same first pass a RouteToAbroad advisor makes on a call — citizenship, qualification, field and intake — with no email required.',
  crumb: 'Fit check',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Free tool · 2 minutes',
    title: 'Fit check. Four questions. A straight answer.',
    lede: 'This is the same first pass an advisor makes on a call. It is not an application, and it does not ask for documents or an email.',
  },
  questionsH2: 'The four questions',
  q1: { legend: 'Where are you applying from?', opts: ['India', 'GCC (UAE, Saudi, Qatar…)', 'Africa', 'Elsewhere'] },
  q2: { legend: 'Your highest completed qualification?', opts: ['School / 12th', "Bachelor's degree", "Master's or above", 'Later, or not sure'] },
  q3: {
    legend: 'What do you want to study?',
    opts: ['MBBS / Medicine', 'Engineering / CS', 'Business / Management', 'Chinese language (HSK)', 'Research (Masters / PhD)', 'Not sure yet'],
  },
  q4: { legend: 'When do you want to start?', opts: ['September 2027', 'March 2027', 'Later / flexible'] },
  back: '← Back',
  hint: "Answer all four and we'll give you a straight yes or an honest maybe.",
  caveat: {
    bold: 'Honesty clause:',
    text: 'four answers cannot see a transcript. This check is a routing tool, not a verdict — the real assessment happens when an advisor reviews your documents.',
  },
  script: {
    researchYes: {
      title: 'Yes — research degrees are your route.',
      body: "Master's and PhD applicants are exactly who Chinese universities compete for, and CSC funding is designed for you. The decisive factor is supervisor contact and a sharp research proposal — we help write both. Start 8–10 months before your target intake.",
    },
    mbbsYes: {
      title: 'Yes — the MBBS route is open to you.',
      bodyIndia:
        'School-leaver MBBS applicants are our core cohort. The two conditions that decide everything: qualifying NEET (mandatory for Indian applicants) and choosing an MOE-listed university — which is exactly what we shortlist for. Scholarship windows for September run January–April.',
      bodyOther:
        "School-leaver MBBS applicants are our core cohort. The two conditions that decide everything: meeting your home regulator's equivalency requirements before you enrol, and choosing an MOE-listed university — which is exactly what we shortlist for. Scholarship windows for September run January–April.",
    },
    mbbsMarch: {
      title: 'Maybe — March is a thin intake for MBBS.',
      body: 'A few universities run March MBBS intakes; most run September only. If you can flex to September 2027, your options widen dramatically — and the scholarship windows align.',
    },
    bachMarch: {
      title: "Maybe — March is thin for bachelor's entry too.",
      body: 'A few universities run March intakes for engineering and business; most admit in September only. If you can flex to September 2027, programme choice and scholarship money both widen significantly.',
    },
    bachYes: {
      title: "Yes — bachelor's programmes are open.",
      body: "English-taught bachelor's in engineering and business have real September capacity across our partner universities, from elite (Zhejiang, SJTU) to value-focused provincial options. Marks decide which tier; the fit check cannot see them — the advisor call can.",
    },
    bachelorMbbs: {
      title: 'Maybe — medicine routes graduates differently.',
      body: "MBBS is an entry-level, school-leaver degree in China; bachelor's holders usually take a different lane — a master's in public health, biomedical science or a research degree — or re-enter medicine via a graduate-entry programme where offered. Tell the advisor your goal and we'll map the honest options.",
    },
    masterYes: {
      title: "Yes — master's entry is realistic.",
      body: "A completed bachelor's qualifies you for English-taught master's programmes, and CSC partial-to-full funding is in play depending on marks. The gap between \"realistic\" and \"funded\" is usually the study plan.",
    },
    languageYes: {
      title: 'Yes — language pathways run year-round.',
      body: 'HSK pathway programmes admit flexibly (September and March intakes, some rolling), cost less, and ladder directly into degree programmes. It is the lowest-risk way to start a China education file.',
    },
    later: {
      title: "Maybe — let's define the target first.",
      body: 'Without a completed qualification we cannot place you into a degree yet — but a foundation or language year can start now and keep every door open. One call will map it.',
    },
    flexible: {
      title: 'Maybe — timing is the only open question.',
      body: 'Your profile looks placeable; the calendar needs work. September intakes offer the most programmes and scholarship money; March is a thinner, faster option. Decide the intake and the rest locks in.',
    },
    fallback: {
      title: 'Probably yes — with details to confirm.',
      bodyIndia:
        'Nothing in your answers closes a route. The variables we cannot see here — marks, budget, documents, NEET status — are exactly what the free advisor call is for.',
      bodyOther:
        'Nothing in your answers closes a route. The variables we cannot see here — marks, budget, documents, and how your credentials are recognised at home — are exactly what the free advisor call is for.',
    },
    ctaTalk: 'Talk to an advisor',
    ctaScholarship: 'Check scholarship odds',
    ctaMbbsGuide: 'Read the MBBS guide',
    ctaRoadmap: 'Read the roadmap',
    restart: 'Start over',
  },
};

const zh: FitStrings = {
  title: '适配检查 — 你符合在中国留学的条件吗？',
  description: '四个问题，一个直接的答案。与 RouteToAbroad 顾问电话沟通时的第一轮判断相同——国籍、学历、专业和入学时间——无需邮箱。',
  crumb: '适配检查',
  toolsCrumb: '工具',
  hero: {
    eyebrow: '免费工具 · 2 分钟',
    title: '适配检查。四个问题。一个直接的答案。',
    lede: '这与顾问在电话中做的第一轮判断相同。它不是申请，也不会要求您提供文件或邮箱。',
  },
  questionsH2: '四个问题',
  q1: { legend: '您从哪里申请？', opts: ['印度', '海湾国家（阿联酋、沙特、卡塔尔…）', '非洲', '其他地区'] },
  q2: { legend: '您已完成的最高学历？', opts: ['高中 / 12 年级', '本科学位', '硕士及以上', '稍后获得，或不确定'] },
  q3: {
    legend: '您想学什么？',
    opts: ['MBBS / 临床医学', '工程 / 计算机', '商科 / 管理', '中文（HSK）', '研究（硕士 / 博士）', '暂时不确定'],
  },
  q4: { legend: '您想什么时候开始？', opts: ['2027 年 9 月', '2027 年 3 月', '以后 / 灵活'] },
  back: '← 返回',
  hint: '回答完四个问题，我们会给您一个明确的“可以”或坦诚的“也许”。',
  caveat: {
    bold: '诚信声明：',
    text: '四个答案看不到成绩单。这个检查只是分流工具，而不是结论——真正的评估在顾问审阅您的文件时进行。',
  },
  script: {
    researchYes: {
      title: '可以——研究型学位是您的路径。',
      body: '硕士和博士申请者正是中国大学争相录取的对象，CSC 奖学金就是为您设计的。决定性因素是与导师的联系和一份出色的研究计划——两者我们都帮您撰写。请在目标入学前 8–10 个月开始准备。',
    },
    mbbsYes: {
      title: '可以——MBBS 路径对您开放。',
      bodyIndia:
        '应届高中毕业生申请 MBBS 是我们的核心群体。决定一切的两个条件：通过 NEET（印度申请者必须）以及选择教育部认可的大学——这正是我们筛选的标准。9 月入学的奖学金申请窗口为 1 月至 4 月。',
      bodyOther:
        '应届高中毕业生申请 MBBS 是我们的核心群体。决定一切的两个条件：入学前满足您本国监管机构的学历认定要求，以及选择教育部认可的大学——这正是我们筛选的标准。9 月入学的奖学金申请窗口为 1 月至 4 月。',
    },
    mbbsMarch: {
      title: '也许——3 月的 MBBS 入学名额很少。',
      body: '少数大学有 3 月的 MBBS 入学，多数只在 9 月招生。如果您可以调整到 2027 年 9 月，选择会大大增加——奖学金窗口也能对上。',
    },
    bachMarch: {
      title: '也许——本科 3 月入学同样名额很少。',
      body: '少数大学在 3 月招收工程和商科学生，多数只在 9 月录取。如果您可以调整到 2027 年 9 月，专业选择和奖学金机会都会明显增加。',
    },
    bachYes: {
      title: '可以——本科项目对您开放。',
      body: '我们合作大学的英文授课工程和商科本科项目在 9 月有充足名额，从顶尖（浙江大学、上海交大）到性价比高的省属院校都有。成绩决定档次；适配检查看不到成绩——顾问通话可以。',
    },
    bachelorMbbs: {
      title: '也许——医学对已有学位者的路径不同。',
      body: 'MBBS 在中国是面向应届高中毕业生的本科入门学位；已有本科学位者通常走另一条路——公共卫生、生物医学硕士或研究型学位——或通过提供的研究生入学项目重新进入医学领域。告诉顾问您的目标，我们会梳理出切实可行的选项。',
    },
    masterYes: {
      title: '可以——硕士入学是现实的。',
      body: '已完成的本科学位使您有资格申请英文授课硕士项目，视成绩而定，CSC 部分至全额资助也有可能。“现实”和“获得资助”之间的差距通常在于学习计划。',
    },
    languageYes: {
      title: '可以——语言项目全年都可入学。',
      body: 'HSK 预备项目入学灵活（9 月和 3 月入学，部分滚动招生），费用更低，并可直接衔接学位项目。这是开启中国留学档案风险最低的方式。',
    },
    later: {
      title: '也许——先明确目标。',
      body: '没有已完成的学历，我们暂时无法为您安排学位项目——但预科或语言学年可以现在开始，并保留所有选择。一次通话就能理清。',
    },
    flexible: {
      title: '也许——时间是唯一悬而未决的问题。',
      body: '您的条件看起来可以安排；时间表还需要调整。9 月入学的项目和奖学金最多；3 月则是名额较少但更快的选择。确定入学时间，其余就能落定。',
    },
    fallback: {
      title: '很可能可以——还有细节需确认。',
      bodyIndia: '您的答案没有堵死任何路径。我们在这里看不到的变量——成绩、预算、文件、NEET 状态——正是免费顾问通话的意义所在。',
      bodyOther: '您的答案没有堵死任何路径。我们在这里看不到的变量——成绩、预算、文件，以及您的学历在本国如何被认可——正是免费顾问通话的意义所在。',
    },
    ctaTalk: '与顾问交谈',
    ctaScholarship: '查看奖学金机会',
    ctaMbbsGuide: '阅读 MBBS 指南',
    ctaRoadmap: '阅读路线图',
    restart: '重新开始',
  },
};

const fr: FitStrings = {
  title: 'Test de compatibilité — Êtes-vous éligible pour étudier en Chine ?',
  description:
    'Quatre questions, une réponse franche. Le même premier tri qu’un conseiller RouteToAbroad fait au téléphone — nationalité, diplôme, filière et rentrée — sans e-mail.',
  crumb: 'Test de compatibilité',
  toolsCrumb: 'Outils',
  hero: {
    eyebrow: 'Outil gratuit · 2 minutes',
    title: 'Test de compatibilité. Quatre questions. Une réponse franche.',
    lede: 'C’est le même premier tri qu’un conseiller fait au téléphone. Ce n’est pas une candidature, et il ne demande ni documents ni e-mail.',
  },
  questionsH2: 'Les quatre questions',
  q1: { legend: 'D’où postulez-vous ?', opts: ['Inde', 'Pays du Golfe (EAU, Arabie saoudite, Qatar…)', 'Afrique', 'Ailleurs'] },
  q2: { legend: 'Votre plus haut diplôme obtenu ?', opts: ['Lycée / terminale', 'Licence', 'Master ou plus', 'Plus tard, ou je ne sais pas'] },
  q3: {
    legend: 'Que souhaitez-vous étudier ?',
    opts: ['MBBS / Médecine', 'Ingénierie / Informatique', 'Gestion / Management', 'Langue chinoise (HSK)', 'Recherche (Master / doctorat)', 'Pas encore sûr'],
  },
  q4: { legend: 'Quand souhaitez-vous commencer ?', opts: ['Septembre 2027', 'Mars 2027', 'Plus tard / flexible'] },
  back: '← Retour',
  hint: 'Répondez aux quatre questions et nous vous donnerons un oui franc ou un peut-être honnête.',
  caveat: {
    bold: 'Clause d’honnêteté :',
    text: 'quatre réponses ne permettent pas de lire un relevé de notes. Ce test est un outil d’orientation, pas un verdict — la vraie évaluation a lieu quand un conseiller examine vos documents.',
  },
  script: {
    researchYes: {
      title: 'Oui — les diplômes de recherche sont votre voie.',
      body: 'Les candidats en master et en doctorat sont exactement ceux que les universités chinoises s’arrachent, et le financement CSC est conçu pour vous. Le facteur décisif est le contact avec un directeur de recherche et un projet de recherche solide — nous aidons à rédiger les deux. Commencez 8 à 10 mois avant la rentrée visée.',
    },
    mbbsYes: {
      title: 'Oui — la voie MBBS vous est ouverte.',
      bodyIndia:
        'Les bacheliers candidats au MBBS sont notre cohorte principale. Les deux conditions qui décident de tout : réussir le NEET (obligatoire pour les candidats indiens) et choisir une université reconnue par le MOE — c’est exactement ce que nous présélectionnons. Les fenêtres de bourse pour septembre vont de janvier à avril.',
      bodyOther:
        'Les bacheliers candidats au MBBS sont notre cohorte principale. Les deux conditions qui décident de tout : satisfaire aux exigences d’équivalence de votre régulateur national avant l’inscription, et choisir une université reconnue par le MOE — c’est exactement ce que nous présélectionnons. Les fenêtres de bourse pour septembre vont de janvier à avril.',
    },
    mbbsMarch: {
      title: 'Peut-être — mars est une rentrée étroite pour le MBBS.',
      body: 'Quelques universités ouvrent des rentrées MBBS en mars ; la plupart n’ont que septembre. Si vous pouvez viser septembre 2027, vos options s’élargissent nettement — et les fenêtres de bourse coïncident.',
    },
    bachMarch: {
      title: 'Peut-être — mars est aussi étroit pour la licence.',
      body: 'Quelques universités ouvrent des rentrées de mars en ingénierie et en gestion ; la plupart n’admettent qu’en septembre. Si vous pouvez viser septembre 2027, le choix de programmes et les bourses s’élargissent sensiblement.',
    },
    bachYes: {
      title: 'Oui — les licences vous sont ouvertes.',
      body: 'Les licences en ingénierie et en gestion enseignées en anglais ont une vraie capacité en septembre dans nos universités partenaires, des plus prestigieuses (Zhejiang, SJTU) aux options provinciales à bon rapport qualité-prix. Les notes décident du niveau ; ce test ne peut pas les voir — l’appel avec un conseiller, si.',
    },
    bachelorMbbs: {
      title: 'Peut-être — la médecine oriente autrement les diplômés.',
      body: 'Le MBBS est un diplôme d’entrée pour bacheliers en Chine ; les titulaires d’une licence prennent généralement une autre voie — un master en santé publique, en sciences biomédicales ou un diplôme de recherche — ou reviennent à la médecine via un programme d’entrée pour diplômés lorsqu’il existe. Dites votre objectif au conseiller et nous cartographierons les options réalistes.',
    },
    masterYes: {
      title: 'Oui — l’entrée en master est réaliste.',
      body: 'Une licence obtenue vous qualifie pour les masters enseignés en anglais, et un financement CSC partiel à complet est possible selon les notes. L’écart entre « réaliste » et « financé » tient généralement au projet d’études.',
    },
    languageYes: {
      title: 'Oui — les parcours de langue sont ouverts toute l’année.',
      body: 'Les programmes passerelle HSK admettent de façon flexible (rentrées de septembre et mars, certaines au fil de l’eau), coûtent moins cher et mènent directement aux programmes diplômants. C’est la façon la moins risquée d’ouvrir un dossier d’études en Chine.',
    },
    later: {
      title: 'Peut-être — définissons d’abord l’objectif.',
      body: 'Sans diplôme obtenu, nous ne pouvons pas encore vous placer dans un cursus diplômant — mais une année préparatoire ou de langue peut commencer maintenant et garder toutes les portes ouvertes. Un appel suffit à tout cartographier.',
    },
    flexible: {
      title: 'Peut-être — le calendrier est la seule question ouverte.',
      body: 'Votre profil semble plaçable ; le calendrier reste à travailler. Les rentrées de septembre offrent le plus de programmes et de bourses ; mars est une option plus étroite et plus rapide. Fixez la rentrée et le reste s’enclenche.',
    },
    fallback: {
      title: 'Probablement oui — avec des détails à confirmer.',
      bodyIndia:
        'Rien dans vos réponses ne ferme une voie. Les variables que nous ne voyons pas ici — notes, budget, documents, statut NEET — sont exactement l’objet de l’appel gratuit avec un conseiller.',
      bodyOther:
        'Rien dans vos réponses ne ferme une voie. Les variables que nous ne voyons pas ici — notes, budget, documents, et la reconnaissance de vos diplômes dans votre pays — sont exactement l’objet de l’appel gratuit avec un conseiller.',
    },
    ctaTalk: 'Parler à un conseiller',
    ctaScholarship: 'Vérifier mes chances de bourse',
    ctaMbbsGuide: 'Lire le guide MBBS',
    ctaRoadmap: 'Lire la feuille de route',
    restart: 'Recommencer',
  },
};

const ar: FitStrings = {
  title: 'فحص الملاءمة — هل تستوفي شروط الدراسة في الصين؟',
  description:
    'أربعة أسئلة وإجابة صريحة. هو نفس الفرز الأول الذي يجريه مستشار RouteToAbroad في المكالمة — الجنسية والمؤهل والتخصص وموعد الالتحاق — دون الحاجة إلى بريد إلكتروني.',
  crumb: 'فحص الملاءمة',
  toolsCrumb: 'الأدوات',
  hero: {
    eyebrow: 'أداة مجانية · دقيقتان',
    title: 'فحص الملاءمة. أربعة أسئلة. إجابة صريحة.',
    lede: 'هذا هو نفس الفرز الأول الذي يجريه المستشار في المكالمة. إنه ليس طلب التحاق، ولا يطلب مستندات أو بريداً إلكترونياً.',
  },
  questionsH2: 'الأسئلة الأربعة',
  q1: { legend: 'من أين تتقدم؟', opts: ['الهند', 'دول الخليج (الإمارات، السعودية، قطر…)', 'أفريقيا', 'مكان آخر'] },
  q2: { legend: 'أعلى مؤهل أنهيته؟', opts: ['المدرسة / الثانوية', 'درجة البكالوريوس', 'الماجستير أو أعلى', 'لاحقاً، أو لست متأكداً'] },
  q3: {
    legend: 'ماذا تريد أن تدرس؟',
    opts: ['MBBS / الطب', 'الهندسة / علوم الحاسوب', 'إدارة الأعمال', 'اللغة الصينية (HSK)', 'البحث (ماجستير / دكتوراه)', 'لست متأكداً بعد'],
  },
  q4: { legend: 'متى تريد أن تبدأ؟', opts: ['سبتمبر 2027', 'مارس 2027', 'لاحقاً / مرن'] },
  back: '← رجوع',
  hint: 'أجب عن الأسئلة الأربعة وسنعطيك «نعم» صريحة أو «ربما» صادقة.',
  caveat: {
    bold: 'بند الصدق:',
    text: 'أربع إجابات لا ترى كشف الدرجات. هذا الفحص أداة توجيه وليس حكماً — التقييم الحقيقي يحدث عندما يراجع المستشار مستنداتك.',
  },
  script: {
    researchYes: {
      title: 'نعم — الدرجات البحثية هي طريقك.',
      body: 'المتقدمون للماجستير والدكتوراه هم بالضبط من تتنافس عليهم الجامعات الصينية، ومنحة CSC مصممة لك. العامل الحاسم هو التواصل مع المشرف ومقترح بحثي قوي — ونساعدك في كتابة الاثنين. ابدأ قبل موعد الالتحاق المستهدف بـ 8–10 أشهر.',
    },
    mbbsYes: {
      title: 'نعم — طريق MBBS مفتوح أمامك.',
      bodyIndia:
        'خريجو المدارس المتقدمون لـ MBBS هم فئتنا الأساسية. الشرطان اللذان يحسمان كل شيء: اجتياز NEET (إلزامي للمتقدمين الهنود) واختيار جامعة معتمدة من وزارة التعليم — وهذا بالضبط ما نرشّحه. نوافذ المنح لسبتمبر تمتد من يناير إلى أبريل.',
      bodyOther:
        'خريجو المدارس المتقدمون لـ MBBS هم فئتنا الأساسية. الشرطان اللذان يحسمان كل شيء: استيفاء متطلبات معادلة الشهادة لدى الجهة التنظيمية في بلدك قبل التسجيل، واختيار جامعة معتمدة من وزارة التعليم — وهذا بالضبط ما نرشّحه. نوافذ المنح لسبتمبر تمتد من يناير إلى أبريل.',
    },
    mbbsMarch: {
      title: 'ربما — مارس موعد محدود لـ MBBS.',
      body: 'قلة من الجامعات تفتح قبولاً في مارس لـ MBBS؛ أغلبها لسبتمبر فقط. إذا استطعت التحول إلى سبتمبر 2027 تتسع خياراتك كثيراً — وتتوافق نوافذ المنح.',
    },
    bachMarch: {
      title: 'ربما — مارس محدود للبكالوريوس أيضاً.',
      body: 'بعض الجامعات تفتح قبولاً في مارس للهندسة والأعمال؛ أغلبها يقبل في سبتمبر فقط. إذا استطعت التحول إلى سبتمبر 2027 يتسع اختيار البرامج وتمويل المنح بشكل ملحوظ.',
    },
    bachYes: {
      title: 'نعم — برامج البكالوريوس مفتوحة.',
      body: 'لبرامج البكالوريوس بالإنجليزية في الهندسة والأعمال طاقة استيعابية حقيقية في سبتمبر عبر جامعاتنا الشريكة، من النخبة (تشجيانغ، SJTU) إلى الخيارات الإقليمية الاقتصادية. الدرجات تحدد المستوى؛ وهذا الفحص لا يراها — أما مكالمة المستشار فتراها.',
    },
    bachelorMbbs: {
      title: 'ربما — الطب يوجّه الخريجين بشكل مختلف.',
      body: 'MBBS شهادة مبتدئة لخريجي المدارس في الصين؛ وحاملو البكالوريوس يسلكون عادةً مساراً آخر — ماجستير في الصحة العامة أو العلوم الطبية الحيوية أو درجة بحثية — أو يعودون إلى الطب عبر برنامج قبول للخريجين حيث يتوفر. أخبر المستشار بهدفك وسنرسم الخيارات الصادقة.',
    },
    masterYes: {
      title: 'نعم — القبول في الماجستير واقعي.',
      body: 'يؤهلك البكالوريوس المكتمل لبرامج الماجستير بالإنجليزية، وتمويل CSC الجزئي إلى الكامل وارد بحسب الدرجات. والفارق بين «الواقعي» و«الممول» يكون عادةً في خطة الدراسة.',
    },
    languageYes: {
      title: 'نعم — مسارات اللغة متاحة طوال العام.',
      body: 'برامج مسار HSK تقبل بمرونة (موعدا سبتمبر ومارس، وبعضها مستمر)، وتكلف أقل، وتؤدي مباشرة إلى برامج الدرجات. إنها أقل الطرق مخاطرة لبدء ملف تعليمي في الصين.',
    },
    later: {
      title: 'ربما — لنحدد الهدف أولاً.',
      body: 'بدون مؤهل مكتمل لا نستطيع إلحاقك ببرنامج درجة بعد — لكن سنة تأسيسية أو لغوية يمكن أن تبدأ الآن وتُبقي كل الأبواب مفتوحة. مكالمة واحدة سترسم الطريق.',
    },
    flexible: {
      title: 'ربما — التوقيت هو السؤال الوحيد المفتوح.',
      body: 'ملفك يبدو قابلاً للإلحاق؛ أما التقويم فيحتاج عملاً. مواعيد سبتمبر تقدم أكبر عدد من البرامج والمنح؛ ومارس خيار أضيق وأسرع. حدد الموعد وسيستقر الباقي.',
    },
    fallback: {
      title: 'غالباً نعم — مع تفاصيل تحتاج تأكيداً.',
      bodyIndia: 'لا شيء في إجاباتك يغلق طريقاً. المتغيرات التي لا نراها هنا — الدرجات والميزانية والمستندات وحالة NEET — هي بالضبط غرض مكالمة المستشار المجانية.',
      bodyOther: 'لا شيء في إجاباتك يغلق طريقاً. المتغيرات التي لا نراها هنا — الدرجات والميزانية والمستندات وكيف تُعترف مؤهلاتك في بلدك — هي بالضبط غرض مكالمة المستشار المجانية.',
    },
    ctaTalk: 'تحدث مع مستشار',
    ctaScholarship: 'تحقق من فرص المنح',
    ctaMbbsGuide: 'اقرأ دليل MBBS',
    ctaRoadmap: 'اقرأ خارطة الطريق',
    restart: 'ابدأ من جديد',
  },
};

const es: FitStrings = {
  title: 'Prueba de compatibilidad — ¿Cumple los requisitos para estudiar en China?',
  description:
    'Cuatro preguntas, una respuesta directa. El mismo primer filtro que hace un asesor de RouteToAbroad por teléfono — nacionalidad, titulación, campo y fecha de ingreso — sin correo electrónico.',
  crumb: 'Prueba de compatibilidad',
  toolsCrumb: 'Herramientas',
  hero: {
    eyebrow: 'Herramienta gratis · 2 minutos',
    title: 'Prueba de compatibilidad. Cuatro preguntas. Una respuesta directa.',
    lede: 'Es el mismo primer filtro que hace un asesor por teléfono. No es una solicitud y no pide documentos ni correo electrónico.',
  },
  questionsH2: 'Las cuatro preguntas',
  q1: { legend: '¿Desde dónde solicita?', opts: ['India', 'Países del Golfo (EAU, Arabia Saudita, Catar…)', 'África', 'Otro lugar'] },
  q2: { legend: '¿Su titulación más alta completada?', opts: ['Escuela / 12.º grado', 'Licenciatura', 'Maestría o superior', 'Más adelante, o no estoy seguro'] },
  q3: {
    legend: '¿Qué quiere estudiar?',
    opts: ['MBBS / Medicina', 'Ingeniería / Informática', 'Negocios / Gestión', 'Idioma chino (HSK)', 'Investigación (Maestría / Doctorado)', 'Aún no lo sé'],
  },
  q4: { legend: '¿Cuándo quiere empezar?', opts: ['Septiembre 2027', 'Marzo 2027', 'Más adelante / flexible'] },
  back: '← Atrás',
  hint: 'Responda las cuatro y le daremos un sí directo o un quizás honesto.',
  caveat: {
    bold: 'Cláusula de honestidad:',
    text: 'cuatro respuestas no pueden ver un expediente. Esta prueba es una herramienta de orientación, no un veredicto — la evaluación real ocurre cuando un asesor revisa sus documentos.',
  },
  script: {
    researchYes: {
      title: 'Sí — los grados de investigación son su camino.',
      body: 'Los candidatos a maestría y doctorado son exactamente a quienes las universidades chinas se disputan, y la financiación CSC está pensada para usted. El factor decisivo es el contacto con el supervisor y una propuesta de investigación sólida — ayudamos a redactar ambos. Empiece de 8 a 10 meses antes del ingreso previsto.',
    },
    mbbsYes: {
      title: 'Sí — la ruta MBBS está abierta para usted.',
      bodyIndia:
        'Los recién egresados de la escuela que solicitan MBBS son nuestra cohorte principal. Las dos condiciones que lo deciden todo: aprobar el NEET (obligatorio para candidatos indios) y elegir una universidad reconocida por el MOE — justo lo que preseleccionamos. Las ventanas de beca para septiembre van de enero a abril.',
      bodyOther:
        'Los recién egresados de la escuela que solicitan MBBS son nuestra cohorte principal. Las dos condiciones que lo deciden todo: cumplir los requisitos de equivalencia de su regulador nacional antes de matricularse, y elegir una universidad reconocida por el MOE — justo lo que preseleccionamos. Las ventanas de beca para septiembre van de enero a abril.',
    },
    mbbsMarch: {
      title: 'Quizás — marzo es un ingreso reducido para MBBS.',
      body: 'Unas pocas universidades tienen ingresos de MBBS en marzo; la mayoría solo en septiembre. Si puede flexibilizar a septiembre de 2027, sus opciones se amplían mucho — y las ventanas de beca coinciden.',
    },
    bachMarch: {
      title: 'Quizás — marzo también es reducido para licenciatura.',
      body: 'Unas pocas universidades tienen ingresos en marzo para ingeniería y negocios; la mayoría admite solo en septiembre. Si puede flexibilizar a septiembre de 2027, la elección de programa y el dinero de becas se amplían notablemente.',
    },
    bachYes: {
      title: 'Sí — las licenciaturas están abiertas.',
      body: 'Las licenciaturas en inglés de ingeniería y negocios tienen capacidad real en septiembre en nuestras universidades socias, desde las de élite (Zhejiang, SJTU) hasta opciones provinciales de buena relación calidad-precio. Las calificaciones deciden el nivel; esta prueba no puede verlas — la llamada con el asesor sí.',
    },
    bachelorMbbs: {
      title: 'Quizás — la medicina encamina distinto a los graduados.',
      body: 'El MBBS es un título de entrada para recién egresados de la escuela en China; quienes ya tienen licenciatura suelen tomar otro carril — una maestría en salud pública, ciencias biomédicas o un grado de investigación — o reingresan a medicina mediante un programa de acceso para graduados donde exista. Cuéntele su objetivo al asesor y trazaremos las opciones reales.',
    },
    masterYes: {
      title: 'Sí — el ingreso a maestría es realista.',
      body: 'Una licenciatura completada lo califica para maestrías impartidas en inglés, y la financiación CSC parcial a total es posible según las calificaciones. La diferencia entre «realista» y «financiado» suele ser el plan de estudios.',
    },
    languageYes: {
      title: 'Sí — las rutas de idioma funcionan todo el año.',
      body: 'Los programas puente de HSK admiten con flexibilidad (ingresos de septiembre y marzo, algunos continuos), cuestan menos y conducen directamente a programas de grado. Es la forma de menor riesgo de abrir un expediente de estudios en China.',
    },
    later: {
      title: 'Quizás — definamos primero el objetivo.',
      body: 'Sin una titulación completada todavía no podemos ubicarlo en un grado — pero un año de fundamentos o de idioma puede empezar ahora y mantener todas las puertas abiertas. Una llamada lo aclarará.',
    },
    flexible: {
      title: 'Quizás — el momento es la única duda abierta.',
      body: 'Su perfil parece colocable; el calendario necesita trabajo. Los ingresos de septiembre ofrecen más programas y dinero de becas; marzo es una opción más reducida y rápida. Decida el ingreso y lo demás encaja.',
    },
    fallback: {
      title: 'Probablemente sí — con detalles por confirmar.',
      bodyIndia:
        'Nada en sus respuestas cierra una ruta. Las variables que no vemos aquí — calificaciones, presupuesto, documentos, estado del NEET — son justo para lo que sirve la llamada gratuita con el asesor.',
      bodyOther:
        'Nada en sus respuestas cierra una ruta. Las variables que no vemos aquí — calificaciones, presupuesto, documentos y cómo se reconocen sus credenciales en su país — son justo para lo que sirve la llamada gratuita con el asesor.',
    },
    ctaTalk: 'Hablar con un asesor',
    ctaScholarship: 'Ver mis opciones de beca',
    ctaMbbsGuide: 'Leer la guía de MBBS',
    ctaRoadmap: 'Leer la hoja de ruta',
    restart: 'Empezar de nuevo',
  },
};

const de: FitStrings = {
  title: 'Eignungscheck — Sind Sie berechtigt, in China zu studieren?',
  description:
    'Vier Fragen, eine klare Antwort. Derselbe erste Eindruck wie ein RouteToAbroad-Berater am Telefon — Staatsangehörigkeit, Qualifikation, Fachrichtung und Studienbeginn — ohne E-Mail.',
  crumb: 'Eignungscheck',
  toolsCrumb: 'Tools',
  hero: {
    eyebrow: 'Kostenloses Tool · 2 Minuten',
    title: 'Eignungscheck. Vier Fragen. Eine klare Antwort.',
    lede: 'Derselbe erste Eindruck wie ein Berater am Telefon. Keine Bewerbung, und es werden weder Dokumente noch eine E-Mail verlangt.',
  },
  questionsH2: 'Die vier Fragen',
  q1: { legend: 'Von wo bewerben Sie sich?', opts: ['Indien', 'Golfstaaten (VAE, Saudi-Arabien, Katar…)', 'Afrika', 'Anderswo'] },
  q2: { legend: 'Ihre höchste abgeschlossene Qualifikation?', opts: ['Schule / 12. Klasse', 'Bachelor-Abschluss', 'Master oder höher', 'Später, oder unsicher'] },
  q3: {
    legend: 'Was möchten Sie studieren?',
    opts: ['MBBS / Medizin', 'Ingenieurwesen / Informatik', 'BWL / Management', 'Chinesische Sprache (HSK)', 'Forschung (Master / Promotion)', 'Noch unsicher'],
  },
  q4: { legend: 'Wann möchten Sie beginnen?', opts: ['September 2027', 'März 2027', 'Später / flexibel'] },
  back: '← Zurück',
  hint: 'Beantworten Sie alle vier Fragen, und Sie erhalten ein klares Ja oder ein ehrliches Vielleicht.',
  caveat: {
    bold: 'Ehrlichkeitsklausel:',
    text: 'Vier Antworten sehen keine Notenabchrift. Dieser Check ist ein Routing-Instrument, kein Urteil — die echte Prüfung erfolgt, wenn ein Berater Ihre Dokumente sichtet.',
  },
  script: {
    researchYes: {
      title: 'Ja — Forschungsabschlüsse sind Ihr Weg.',
      body: 'Master- und Promotionsbewerber sind genau die, um die sich chinesische Universitäten bemühen, und die CSC-Förderung ist für Sie gemacht. Ausschlaggebend sind Betreuerkontakt und ein präziser Forschungsvorschlag — bei beidem helfen wir beim Verfassen. Beginnen Sie 8–10 Monate vor Ihrem Ziel-Studienbeginn.',
    },
    mbbsYes: {
      title: 'Ja — der MBBS-Weg steht Ihnen offen.',
      bodyIndia:
        'Direkt von der Schule kommende MBBS-Bewerber sind unsere Kerngruppe. Zwei Bedingungen entscheiden alles: bestandenes NEET (für indische Bewerber Pflicht) und eine MOE-gelistete Universität — genau darauf selektieren wir. Die Stipendienfenster für September laufen Januar–April.',
      bodyOther:
        'Direkt von der Schule kommende MBBS-Bewerber sind unsere Kerngruppe. Zwei Bedingungen entscheiden alles: die Gleichwertigkeitsanforderungen Ihrer heimischen Aufsichtsbehörde vor der Immatrikulation zu erfüllen, und eine MOE-gelistete Universität zu wählen — genau darauf selektieren wir. Die Stipendienfenster für September laufen Januar–April.',
    },
    mbbsMarch: {
      title: 'Vielleicht — März ist ein schmales Fenster für MBBS.',
      body: 'Einige Universitäten bieten MBBS zum März an; die meisten nur zum September. Wenn Sie auf September 2027 ausweichen können, erweitern sich Ihre Optionen erheblich — und die Stipendienfenster passen.',
    },
    bachMarch: {
      title: 'Vielleicht — März ist auch beim Bachelor dünn.',
      body: 'Einige Universitäten nehmen im März Ingenieur- und BWL-Studierende auf; die meisten nur im September. Wenn Sie auf September 2027 ausweichen können, erweitern sich Programmwahl und Stipendienmittel deutlich.',
    },
    bachYes: {
      title: 'Ja — Bachelorprogramme sind offen.',
      body: 'Englischsprachige Bachelor in Ingenieurwesen und BWL haben echte September-Kapazität an unseren Partneruniversitäten, von der Elite (Zhejiang, SJTU) bis zu günstigen Provinzoptionen. Die Noten entscheiden über die Stufe; der Eignungscheck kann sie nicht sehen — das Beratungsgespräch schon.',
    },
    bachelorMbbs: {
      title: 'Vielleicht — die Medizin ordnet Absolventen anders ein.',
      body: 'MBBS ist in China ein Einstiegsabschluss direkt von der Schule; Bachelorabsolventen nehmen meist eine andere Spur — einen Master in Public Health, Biomedizin oder einen Forschungsabschluss — oder kehren über ein Graduate-Entry-Programm zur Medizin zurück, wo angeboten. Nennen Sie dem Berater Ihr Ziel, und wir kartieren die ehrlichen Optionen.',
    },
    masterYes: {
      title: 'Ja — der Master-Einstieg ist realistisch.',
      body: 'Ein abgeschlossener Bachelor qualifiziert Sie für englischsprachige Masterprogramme, und CSC-Teil- bis Vollförderung ist je nach Noten möglich. Der Unterschied zwischen „realistisch“ und „finanziert“ liegt meist im Studienplan.',
    },
    languageYes: {
      title: 'Ja — Sprachprogramme laufen das ganze Jahr.',
      body: 'HSK-Vorbereitungsprogramme nehmen flexibel auf (September- und Märzbeginn, teils laufend), kosten weniger und führen direkt in die Studiengänge. So eröffnen Sie Ihre China-Akte mit dem geringsten Risiko.',
    },
    later: {
      title: 'Vielleicht — definieren wir zuerst das Ziel.',
      body: 'Ohne abgeschlossene Qualifikation können wir Sie noch nicht in einen Studiengang einordnen — aber ein Vorbereitungs- oder Sprachjahr kann jetzt beginnen und alle Türen offen halten. Ein Gespräch ordnet es.',
    },
    flexible: {
      title: 'Vielleicht — der Zeitplan ist die offene Frage.',
      body: 'Ihr Profil scheint platzierbar; der Kalender braucht Arbeit. September-Beginne bieten die meisten Programme und Stipendienmittel; März ist die dünnere, schnellere Option. Legen Sie den Studienbeginn fest — der Rest fügt sich.',
    },
    fallback: {
      title: 'Wahrscheinlich ja — mit Details zu bestätigen.',
      bodyIndia:
        'Nichts in Ihren Antworten schließt einen Weg. Die Variablen, die wir hier nicht sehen — Noten, Budget, Dokumente, NEET-Status — sind genau der Zweck des kostenlosen Beratungsgesprächs.',
      bodyOther:
        'Nichts in Ihren Antworten schließt einen Weg. Die Variablen, die wir hier nicht sehen — Noten, Budget, Dokumente und die Anerkennung Ihrer Abschlüsse in der Heimat — sind genau der Zweck des kostenlosen Beratungsgesprächs.',
    },
    ctaTalk: 'Mit einem Berater sprechen',
    ctaScholarship: 'Stipendienchancen prüfen',
    ctaMbbsGuide: 'Den MBBS-Leitfaden lesen',
    ctaRoadmap: 'Die Roadmap lesen',
    restart: 'Neu starten',
  },
};

const ja: FitStrings = {
  title: '適性チェック — 中国留学の条件を満たしていますか？',
  description: '4つの質問、率直な回答。RouteToAbroadのアドバイザーが電話で行う最初のふるい分けと同じ — 国籍、学歴、専攻、入学時期 — メール登録は不要です。',
  crumb: '適性チェック',
  toolsCrumb: 'ツール',
  hero: {
    eyebrow: '無料ツール · 2分',
    title: '適性チェック。4つの質問。率直な回答。',
    lede: 'アドバイザーが電話で行う最初のふるい分けと同じものです。出願ではなく、書類もメールアドレスも求めません。',
  },
  questionsH2: '4つの質問',
  q1: { legend: 'どちらから出願しますか？', opts: ['インド', '湾岸諸国（UAE、サウジアラビア、カタール…）', 'アフリカ', 'その他の地域'] },
  q2: { legend: '修了済みの最終学歴は？', opts: ['高校 / 12年生', '学士号', '修士以上', 'まだ、または未定'] },
  q3: {
    legend: '何を学びたいですか？',
    opts: ['MBBS / 医学', '工学 / 情報', '経営 / マネジメント', '中国語（HSK）', '研究（修士 / 博士）', 'まだ決めていない'],
  },
  q4: { legend: 'いつから始めたいですか？', opts: ['2027年9月', '2027年3月', '以降 / 柔軟'] },
  back: '← 戻る',
  hint: '4つすべてに答えると、明確な「可」か正直な「要検討」をお伝えします。',
  caveat: {
    bold: '誠実さの規定：',
    text: '4つの回答では成績証明書は見えません。このチェックはふるい分けのための道具であり、判定ではありません — 本格的な評価は、アドバイザーが書類を確認するときに行われます。',
  },
  script: {
    researchYes: {
      title: '可 — 研究系学位があなたのルートです。',
      body: '修士・博士の出願者はまさに中国の大学が獲得に動く対象で、CSCの奨学金はあなたのための仕組みです。決め手は指導教員との連絡と練れた研究計画書 — どちらも作成をお手伝いします。目標の入学時期の8〜10か月前から始めてください。',
    },
    mbbsYes: {
      title: '可 — MBBSのルートは開かれています。',
      bodyIndia:
        '高校卒業直後のMBBS出願者は私たちの中心層です。すべてを左右する2つの条件：NEETの合格（インド人出願者には必須）と、教育部認可大学の選択 — まさに私たちが選定しているものです。9月入学の奨学金窓口は1月〜4月です。',
      bodyOther:
        '高校卒業直後のMBBS出願者は私たちの中心層です。すべてを左右する2つの条件：入学前に自国の規制当局の同等性要件を満たすことと、教育部認可大学の選択 — まさに私たちが選定しているものです。9月入学の奨学金窓口は1月〜4月です。',
    },
    mbbsMarch: {
      title: '要検討 — 3月のMBBS入学は限られます。',
      body: 'MBBSを3月に開講する大学は少数で、ほとんどは9月のみです。2027年9月にずらせるなら選択肢は大幅に広がります — 奨学金の窓口も一致します。',
    },
    bachMarch: {
      title: '要検討 — 3月は学士入学も少なめです。',
      body: '工学や経営を3月に開講する大学は少数で、ほとんどは9月にのみ受け入れます。2027年9月にずらせるなら、プログラムの選択肢も奨学金も大きく広がります。',
    },
    bachYes: {
      title: '可 — 学士プログラムは開かれています。',
      body: '英語開講の工学・経営の学士課程は、提携大学の9月入学に十分な定員があります。トップ校（浙江大学、上海交通大学）から費用対効果の高い省属校まで。成績が層を決めますが、適性チェックでは見えません — アドバイザーとの通話では見えます。',
    },
    bachelorMbbs: {
      title: '要検討 — 医学は学位保持者にとって別の道になります。',
      body: 'MBBSは中国では高校卒業直後向けの学部課程です。学士号を持つ方は通常、別のルート — 公衆衛生学・生物医科学の修士や研究系学位 — を取るか、大学院入学制度がある場合にはそこから医学に戻ります。アドバイザーに目標を伝えれば、現実的な選択肢を整理します。',
    },
    masterYes: {
      title: '可 — 修士入学は現実的です。',
      body: '学士修了は英語開講の修士プログラムの出願資格になり、成績次第でCSCの部分〜全額奨学金も射程内です。「現実的」と「奨学金獲得」の差は、多くの場合学習計画書にあります。',
    },
    languageYes: {
      title: '可 — 語学コースは年間を通じて開講しています。',
      body: 'HSKの橋渡しプログラムは柔軟に受け入れ（9月・3月入学、随時募集もあり）、費用が抑えられ、学位プログラムに直接つながります。中国留学のファイルを始めるうえで最もリスクの低い方法です。',
    },
    later: {
      title: '要検討 — まず目標を定めましょう。',
      body: '学位の修了がない段階では、まだ学位プログラムへの配置ができません — ただし予科や語学の年次は今すぐ始められ、あらゆる選択肢を残せます。1本の通話で整理できます。',
    },
    flexible: {
      title: '要検討 — 未決なのは時期だけです。',
      body: 'プロフィールは配置可能そうですが、日程に手入れが必要です。9月入学が最も多くのプログラムと奨学金を提供し、3月は規模が小さく速い選択肢です。入学時期を決めれば残りは固まります。',
    },
    fallback: {
      title: 'おそらく可 — 確認すべき詳細があります。',
      bodyIndia: 'あなたの回答で閉ざされたルートはありません。ここで見えない変数 — 成績、予算、書類、NEETの状況 — こそ、無料のアドバイザー通話の存在意義です。',
      bodyOther: 'あなたの回答で閉ざされたルートはありません。ここで見えない変数 — 成績、予算、書類、および自国での資格の認定状況 — こそ、無料のアドバイザー通話の存在意義です。',
    },
    ctaTalk: 'アドバイザーに相談する',
    ctaScholarship: '奨学金の可能性を調べる',
    ctaMbbsGuide: 'MBBSガイドを読む',
    ctaRoadmap: 'ロードマップを読む',
    restart: '最初からやり直す',
  },
};

const pt: FitStrings = {
  title: 'Teste de compatibilidade — Você está apto a estudar na China?',
  description:
    'Quatro perguntas, uma resposta direta. A mesma primeira análise que um consultor da RouteToAbroad faz por telefone — cidadania, qualificação, área e ingresso — sem e-mail.',
  crumb: 'Teste de compatibilidade',
  toolsCrumb: 'Ferramentas',
  hero: {
    eyebrow: 'Ferramenta gratuita · 2 minutos',
    title: 'Teste de compatibilidade. Quatro perguntas. Uma resposta direta.',
    lede: 'É a mesma primeira análise que um consultor faz por telefone. Não é uma candidatura e não pede documentos nem e-mail.',
  },
  questionsH2: 'As quatro perguntas',
  q1: { legend: 'De onde você está se candidatando?', opts: ['Índia', 'Países do Golfo (EAU, Arábia Saudita, Catar…)', 'África', 'Outro lugar'] },
  q2: { legend: 'Sua maior qualificação concluída?', opts: ['Ensino médio / 12.º ano', 'Graduação', 'Mestrado ou acima', 'Depois, ou não sei'] },
  q3: {
    legend: 'O que você quer estudar?',
    opts: ['MBBS / Medicina', 'Engenharia / Computação', 'Negócios / Gestão', 'Língua chinesa (HSK)', 'Pesquisa (Mestrado / Doutorado)', 'Ainda não sei'],
  },
  q4: { legend: 'Quando você quer começar?', opts: ['Setembro de 2027', 'Março de 2027', 'Mais tarde / flexível'] },
  back: '← Voltar',
  hint: 'Responda as quatro e daremos um sim direto ou um talvez honesto.',
  caveat: {
    bold: 'Cláusula de honestidade:',
    text: 'quatro respostas não enxergam um histórico. Este teste é uma ferramenta de triagem, não um veredito — a avaliação real acontece quando um consultor revisa seus documentos.',
  },
  script: {
    researchYes: {
      title: 'Sim — os cursos de pesquisa são o seu caminho.',
      body: 'Candidatos a mestrado e doutorado são exatamente quem as universidades chinesas disputam, e o financiamento CSC é feito para você. O fator decisivo é o contato com o orientador e uma proposta de pesquisa afiada — ajudamos a redigir ambos. Comece 8–10 meses antes do ingresso desejado.',
    },
    mbbsYes: {
      title: 'Sim — a rota MBBS está aberta para você.',
      bodyIndia:
        'Candidatos ao MBBS recém-saídos do ensino médio são nosso público principal. As duas condições que decidem tudo: passar no NEET (obrigatório para candidatos indianos) e escolher uma universidade listada pelo MOE — exatamente o que pré-selecionamos. As janelas de bolsa para setembro vão de janeiro a abril.',
      bodyOther:
        'Candidatos ao MBBS recém-saídos do ensino médio são nosso público principal. As duas condições que decidem tudo: cumprir os requisitos de equivalência do órgão regulador do seu país antes de se matricular, e escolher uma universidade listada pelo MOE — exatamente o que pré-selecionamos. As janelas de bolsa para setembro vão de janeiro a abril.',
    },
    mbbsMarch: {
      title: 'Talvez — março é um ingresso escasso para o MBBS.',
      body: 'Poucas universidades têm ingresso de MBBS em março; a maioria só em setembro. Se puder migrar para setembro de 2027, suas opções se ampliam muito — e as janelas de bolsa coincidem.',
    },
    bachMarch: {
      title: 'Talvez — março também é escasso para a graduação.',
      body: 'Poucas universidades têm ingressos em março para engenharia e negócios; a maioria admite só em setembro. Se puder migrar para setembro de 2027, a escolha de programas e o dinheiro de bolsas se ampliam bastante.',
    },
    bachYes: {
      title: 'Sim — os cursos de graduação estão abertos.',
      body: 'As graduações em inglês de engenharia e negócios têm capacidade real em setembro nas nossas universidades parceiras, das de elite (Zhejiang, SJTU) às opções provinciais de bom custo-benefício. As notas decidem a faixa; o teste não as vê — a ligação com o consultor, sim.',
    },
    bachelorMbbs: {
      title: 'Talvez — a medicina encaminha graduados de outro jeito.',
      body: 'O MBBS é um curso de entrada, para recém-saídos do ensino médio, na China; quem já tem graduação costuma seguir outra via — um mestrado em saúde pública, ciências biomédicas ou um curso de pesquisa — ou voltar à medicina por um programa de ingresso para graduados, onde houver. Conte seu objetivo ao consultor e traçaremos as opções honestas.',
    },
    masterYes: {
      title: 'Sim — o ingresso no mestrado é realista.',
      body: 'Uma graduação concluída o qualifica para mestrados em inglês, e o financiamento CSC parcial a integral está em jogo conforme as notas. A diferença entre "realista" e "financiado" costuma ser o plano de estudos.',
    },
    languageYes: {
      title: 'Sim — as rotas de idioma funcionam o ano todo.',
      body: 'Os programas ponte de HSK admitem com flexibilidade (ingressos em setembro e março, alguns contínuos), custam menos e levam direto aos cursos de grau. É a forma de menor risco de abrir um dossiê de estudos na China.',
    },
    later: {
      title: 'Talvez — definamos primeiro o objetivo.',
      body: 'Sem uma qualificação concluída ainda não podemos colocá-lo em um curso de grau — mas um ano de fundamentos ou de idioma pode começar agora e manter todas as portas abertas. Uma ligação resolve o mapa.',
    },
    flexible: {
      title: 'Talvez — o timing é a única questão aberta.',
      body: 'Seu perfil parece colocável; o calendário precisa de trabalho. Os ingressos de setembro oferecem mais programas e dinheiro de bolsas; março é uma opção mais enxuta e rápida. Defina o ingresso e o resto se encaixa.',
    },
    fallback: {
      title: 'Provavelmente sim — com detalhes a confirmar.',
      bodyIndia:
        'Nada nas suas respostas fecha um caminho. As variáveis que não vemos aqui — notas, orçamento, documentos, situação do NEET — são exatamente para isso que serve a ligação gratuita com o consultor.',
      bodyOther:
        'Nada nas suas respostas fecha um caminho. As variáveis que não vemos aqui — notas, orçamento, documentos e como suas credenciais são reconhecidas no seu país — são exatamente para isso que serve a ligação gratuita com o consultor.',
    },
    ctaTalk: 'Falar com um consultor',
    ctaScholarship: 'Ver minhas chances de bolsa',
    ctaMbbsGuide: 'Ler o guia do MBBS',
    ctaRoadmap: 'Ler o roteiro',
    restart: 'Começar de novo',
  },
};

const hi: FitStrings = {
  title: 'फिट चेक — क्या आप चीन में पढ़ने के योग्य हैं?',
  description: 'चार सवाल, सीधा जवाब। वही पहला आकलन जो RouteToAbroad सलाहकार फ़ोन पर करता है — नागरिकता, योग्यता, क्षेत्र और प्रवेश सत्र — बिना ईमेल।',
  crumb: 'फिट चेक',
  toolsCrumb: 'टूल्स',
  hero: {
    eyebrow: 'मुफ़्त टूल · 2 मिनट',
    title: 'फिट चेक। चार सवाल। सीधा जवाब।',
    lede: 'यह वही पहला आकलन है जो सलाहकार फ़ोन पर करता है। यह आवेदन नहीं है और न दस्तावेज़ या ईमेल मांगता है।',
  },
  questionsH2: 'चार सवाल',
  q1: { legend: 'आप कहाँ से आवेदन कर रहे हैं?', opts: ['भारत', 'खाड़ी देश (UAE, सउदी अरब, क़तर…)', 'अफ़्रीका', 'अन्य स्थान'] },
  q2: { legend: 'आपकी पूर्ण की गई सर्वोच्च योग्यता?', opts: ['स्कूल / 12वीं', 'स्नातक डिग्री', 'स्नातकोत्तर या उससे ऊपर', 'बाद में, या निश्चित नहीं'] },
  q3: {
    legend: 'आप क्या पढ़ना चाहते हैं?',
    opts: ['MBBS / चिकित्सा', 'इंजीनियरिंग / कंप्यूटर विज्ञान', 'व्यवसाय / प्रबंधन', 'चीनी भाषा (HSK)', 'शोध (स्नातकोत्तर / पीएचडी)', 'अभी निश्चित नहीं'],
  },
  q4: { legend: 'आप कब शुरू करना चाहते हैं?', opts: ['सितंबर 2027', 'मार्च 2027', 'बाद में / लचीला'] },
  back: '← वापस',
  hint: 'चारों का उत्तर दें और हम आपको स्पष्ट "हाँ" या ईमानदार "शायद" देंगे।',
  caveat: {
    bold: 'ईमानदारी का सिद्धांत:',
    text: 'चार उत्तर अंकसूची नहीं देख सकते। यह जाँच एक मार्गदर्शी उपकरण है, निर्णय नहीं — असली मूल्यांकन तब होता है जब सलाहकार आपके दस्तावेज़ देखता है।',
  },
  script: {
    researchYes: {
      title: 'हाँ — शोध डिग्री आपका रास्ता है।',
      body: 'स्नातकोत्तर और पीएचडी आवेदक ही वे हैं जिनके लिए चीनी विश्वविद्यालय प्रतिस्पर्धा करते हैं, और CSC वित्तपोषण आपके लिए बना है। निर्णायक कारक: पर्यवेक्षक से संपर्क और एक तीखा शोध प्रस्ताव — दोनों लिखने में हम मदद करते हैं। लक्ष्य प्रवेश सत्र से 8–10 महीने पहले शुरू करें।',
    },
    mbbsYes: {
      title: 'हाँ — MBBS रास्ता आपके लिए खुला है।',
      bodyIndia:
        'स्कूल से सीधे आने वाले MBBS आवेदक हमारा मुख्य वर्ग हैं। दो शर्तें सब तय करती हैं: NEET पास करना (भारतीय आवेदकों के लिए अनिवार्य) और MOE-सूचीबद्ध विश्वविद्यालय चुनना — हम यही शॉर्टलिस्ट करते हैं। सितंबर की छात्रवृत्ति खिड़कियाँ जनवरी–अप्रैल चलती हैं।',
      bodyOther:
        'स्कूल से सीधे आने वाले MBBS आवेदक हमारा मुख्य वर्ग हैं। दो शर्तें सब तय करती हैं: प्रवेश से पहले अपने देश के नियामक की समतुल्यता आवश्यकताएँ पूरी करना और MOE-सूचीबद्ध विश्वविद्यालय चुनना — हम यही शॉर्टलिस्ट करते हैं। सितंबर की छात्रवृत्ति खिड़कियाँ जनवरी–अप्रैल चलती हैं।',
    },
    mbbsMarch: {
      title: 'शायद — मार्च में MBBS प्रवेश बहुत कम है।',
      body: 'कुछ विश्वविद्यालय मार्च में MBBS प्रवेश देते हैं; अधिकांश केवल सितंबर में। अगर आप सितंबर 2027 पर बढ़ सकते हैं तो विकल्प काफ़ी बढ़ जाएँगे — छात्रवृत्ति खिड़कियाँ भी मेल खाएँगी।',
    },
    bachMarch: {
      title: 'शायद — स्नातक प्रवेश के लिए भी मार्च कम है।',
      body: 'कुछ विश्वविद्यालय मार्च में इंजीनियरिंग और व्यवसाय का प्रवेश देते हैं; अधिकांश केवल सितंबर में। सितंबर 2027 पर बढ़ने से प्रोग्राम विकल्प और छात्रवृत्ति राशि दोनों काफ़ी बढ़ेंगी।',
    },
    bachYes: {
      title: 'हाँ — स्नातक प्रोग्राम खुले हैं।',
      body: 'इंजीनियरिंग और व्यवसाय के अंग्रेज़ी-माध्यम स्नातक प्रोग्रामों में हमारे साझेदार विश्वविद्यालयों में सितंबर की वास्तविक सीटें हैं — टॉप (झेजियांग, SJTU) से लेकर लागत-कुशल प्रांतीय विकल्पों तक। अंक स्तर तय करते हैं; फिट चेक उन्हें नहीं देख सकता — सलाहकार कॉल देख सकती है।',
    },
    bachelorMbbs: {
      title: 'शायद — चिकित्सा डिग्रीधारकों को अलग रास्ते पर डालती है।',
      body: 'चीन में MBBS स्कूल-उत्तीर्ण छात्रों की प्रवेश-स्तर की डिग्री है; स्नातक धारक आमतौर पर दूसरी लेन लेते हैं — सार्वजनिक स्वास्थ्य, बायोमेडिकल विज्ञान या शोध डिग्री में स्नातकोत्तर — या जहाँ उपलब्ध हो, ग्रेजुएट-एंट्री प्रोग्राम से चिकित्सा में लौटते हैं। सलाहकार को अपना लक्ष्य बताएँ, हम ईमानदार विकल्प मानचित्रित करेंगे।',
    },
    masterYes: {
      title: 'हाँ — स्नातकोत्तर प्रवेश यथार्थपरक है।',
      body: 'पूर्ण स्नातक आपको अंग्रेज़ी-माध्यम स्नातकोत्तर प्रोग्रामों के लिए योग्य बनाता है, और अंकों के अनुसार CSC आंशिक-से-पूर्ण वित्तपोषण भी संभव है। "यथार्थपरक" और "वित्तपोषित" के बीच का अंतर आमतौर पर अध्ययन योजना है।',
    },
    languageYes: {
      title: 'हाँ — भाषा रास्ते पूरे साल चलते हैं।',
      body: 'HSK पुल कार्यक्रम लचीले ढंग से प्रवेश देते हैं (सितंबर और मार्च सत्र, कुछ रोलिंग), कम लागत में चलते हैं और सीधे डिग्री प्रोग्रामों में जुड़ते हैं। चीन शिक्षा फ़ाइल शुरू करने का सबसे कम-जोखिम तरीका यही है।',
    },
    later: {
      title: 'शायद — पहले लक्ष्य तय करें।',
      body: 'पूर्ण योग्यता के बिना हम अभी आपको डिग्री में नहीं रख सकते — पर फाउंडेशन या भाषा वर्ष अभी शुरू हो सकता है और सारे दरवाज़े खुले रखता है। एक कॉल में योजना बन जाएगी।',
    },
    flexible: {
      title: 'शायद — समय ही एकमात्र खुला सवाल है।',
      body: 'आपकी प्रोफ़ाइल रखने योग्य लगती है; कैलेंडर पर काम चाहिए। सितंबर सत्र सबसे अधिक प्रोग्राम और छात्रवृत्ति राशि देते हैं; मार्च पतला पर तेज़ विकल्प है। प्रवेश सत्र तय करें, बाकी अपने आप बैठ जाएगा।',
    },
    fallback: {
      title: 'संभवतः हाँ — कुछ विवरण पुष्टि के लिए।',
      bodyIndia: 'आपके उत्तरों में कोई रास्ता बंद नहीं हुआ। जो चर हम यहाँ नहीं देखते — अंक, बजट, दस्तावेज़, NEET स्थिति — यही मुफ़्त सलाहकार कॉल का उद्देश्य है।',
      bodyOther: 'आपके उत्तरों में कोई रास्ता बंद नहीं हुआ। जो चर हम यहाँ नहीं देखते — अंक, बजट, दस्तावेज़, और आपकी योग्यता की अपने देश में मान्यता — यही मुफ़्त सलाहकार कॉल का उद्देश्य है।',
    },
    ctaTalk: 'सलाहकार से बात करें',
    ctaScholarship: 'छात्रवृत्ति संभावनाएँ देखें',
    ctaMbbsGuide: 'MBBS गाइड पढ़ें',
    ctaRoadmap: 'रोडमैप पढ़ें',
    restart: 'फिर से शुरू करें',
  },
};

export const FIT_STRINGS: Record<Locale, FitStrings> = { en, zh, fr, ar, es, de, ja, pt, hi };
