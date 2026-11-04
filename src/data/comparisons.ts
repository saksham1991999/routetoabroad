/** Comparison page datasets — rendered by /compare/[slug].astro */
import { type Locale } from '../lib/i18n';

export interface CompareRow {
  label: string;
  a: string;
  b: string;
}

export interface Comparison {
  slug: string;
  title: string;
  headline: string;
  answer: string; // answer-first verdict summary
  entityA: string;
  entityB: string;
  pillar: 'education' | 'trade';
  updated: string;
  rows: CompareRow[];
  verdict: {
    winner: string;
    text: string;
  };
  body: string[]; // paragraphs (markdown-free, HTML allowed)
  faqs: { question: string; answer: string }[];
}

const COMPARISONS_EN: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'MBBS in China vs India: Costs, Recognition & Verdict',
    headline: 'MBBS in China vs India',
    answer:
      'Choose India if you can win a government seat — it remains the cheapest recognised route. Choose China when the realistic Indian alternative is a ₹60L–1Cr private seat: an MOE-listed Chinese MBBS delivers comparable recognition at roughly a third of the cost, with the non-negotiable condition that, as a foreign medical graduate, you clear the FMGE/NExT screening on return (Indian graduates register through NExT instead — eligibility rules depend on your admission year, so verify the current NMC regulations before you commit).',
    entityA: 'MBBS in China',
    entityB: 'MBBS in India',
    pillar: 'education',
    updated: '2025-11-01',
    rows: [
      { label: 'Tuition (per year)', a: 'US$3,500–8,000 (MOE-listed)', b: 'Government: ₹10k–1L · Private: ₹8–20L' },
      { label: 'Total programme cost', a: 'US$35–80k all-in (5.5 yrs)', b: 'Govt: ₹5–10L · Private: ₹60L–1Cr+' },
      { label: 'Licensing exam for India practice', a: 'FMGE/NExT screening (foreign graduates only)', b: 'NExT / university registration — FMGE does not apply to Indian graduates' },
      { label: 'Medium of instruction', a: 'English (HSK 4 needed for clinical years)', b: 'English (private) / regional languages' },
      { label: 'Admission gate', a: 'NEET qualification + Class 12 PCB', b: 'NEET rank (govt) / NEET qualification (private)' },
      { label: 'Living costs', a: 'US$300–850/month by city', b: '₹12–30k/month by city' },
      { label: 'Scholarships', a: 'CSC + university awards can cut tuition to zero', b: 'Rare at private colleges; state quotas' },
      { label: 'Patient exposure', a: 'Strong at affiliated hospitals; language-dependent', b: 'Strong; language is native' },
      { label: 'Biggest risk', a: 'Unlisted universities + language neglect', b: 'Capitation fees + seat scarcity' },
    ],
    verdict: {
      winner: 'Depends on your NEET outcome',
      text: 'Government MBBS seat in India → take it, full stop. No government seat and budget-tight → MOE-listed China beats any private Indian seat on cost with comparable recognition effort (FMGE either way). Paying ₹1Cr privately with funds available and no appetite for abroad adjustment → private India remains rational. The two failure modes to avoid: unlisted Chinese universities, and choosing China while ignoring HSK and FMGE preparation.',
    },
    body: [
      'The comparison most Indian families actually face is not China-vs-India in the abstract — it is China-vs-the-only-Indian-option-they-have: a private seat with a seven-figure price tag. Frame it that way and the decision gets clearer.',
      'Recognition is symmetric: an MBBS from either side of the border requires clearing FMGE/NExT for Indian practice (graduates of Indian private colleges also face NEXT). What differs is the cost of acquiring the degree and the discipline the abroad route demands — language, independence, and document hygiene.',
      'China\'s MBBS system is purpose-built for international intake: English-medium tracks at MOE-listed universities, predictable fee tables, and dormitory infrastructure. India\'s advantage is clinical exposure in your own healthcare system from day one — a genuine strength for FMGE and eventual practice.',
    ],
    faqs: [
      {
        question: 'Is Chinese MBBS better than Indian private MBBS?',
        answer:
          'On cost, decisively yes: a full MOE-listed Chinese MBBS costs roughly a third of a private Indian seat. On clinical exposure and system familiarity, Indian private colleges win. On recognition, both need FMGE/NExT — neither is automatic.',
      },
      {
        question: 'Can I practice in India after MBBS from China?',
        answer:
          'Yes, after clearing the FMGE (transitioning to NExT) conducted by the NBE, plus the standard internship registration. Thousands do this annually; preparation during the degree matters more than where you studied.',
      },
      {
        question: 'Which is cheaper overall?',
        answer:
          'A Chinese MBBS at a second-tier city university can land near US$35–45k all-in. Indian private seats commonly exceed ₹60L–1Cr in tuition alone. Government Indian seats are cheaper than both but scarce.',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'Tsinghua vs Peking University: Which Should You Apply To?',
    headline: 'Tsinghua vs Peking University',
    answer:
      'They are two halves of China\'s academic summit, 3 km apart in Haidian. Pick Tsinghua for engineering, computer science and technology careers; pick Peking for humanities, economics, sciences and research breadth. International admission difficulty is comparable — apply to the one your subject calls for, not the one a ranking says.',
    entityA: 'Tsinghua University',
    entityB: 'Peking University',
    pillar: 'education',
    updated: '2025-10-15',
    rows: [
      { label: 'Identity', a: 'Engineering & technology supremacy', b: 'Humanities, sciences & policy breadth' },
      { label: 'Global standing (QS)', a: 'Top-25, engineering top-10', b: 'Top-15 overall' },
      { label: 'Flagship for internationals', a: 'CS/AI, engineering, Schwarzman, MBA', b: 'Economics, IR, Chinese studies, Yenching' },
      { label: 'Campus character', a: 'Red-brick collegiate + modern labs', b: 'Imperial gardens, Weiming Lake' },
      { label: 'Industry adjacency', a: 'Zhongguancun: Baidu, ByteDance, MSR Asia', b: 'Think tanks, finance, government pathways' },
      { label: 'International cohort', a: '~3,000+ across degrees', b: '~3,000+ across degrees' },
      { label: 'Best-fit applicant', a: 'Builder/researcher in STEM', b: 'Analyst/policy/humanities mind' },
    ],
    verdict: {
      winner: 'Subject decides, not rankings',
      text: 'For engineering and CS, Tsinghua\'s pull is unmatched in Asia; for economics, international relations, law or pure sciences, Peking\'s depth and garden campus win. Application difficulty is comparable for international students; research-degree odds improve sharply at both with prior supervisor contact — which is the work we do before applications open.',
    },
    body: [
      'The rivalry is affectionate and geographic: the two campuses face each other across Haidian, and Chinese families joke about which side of Chengfu Road a child lives on. For international applicants the choice is less tribal and more practical — department strength, English-taught menu, and post-study network.',
      'Both universities run CSC Type B admissions and university-level scholarships (Tsinghua\'s presidential awards; Peking\'s Yenching and school-level funding). Both expect competitive marks and, for research degrees, early supervisor engagement. Neither is a "safety" for anyone.',
    ],
    faqs: [
      {
        question: 'Which is harder for international students to get into?',
        answer:
          'Comparable overall; subject-dependent at the edges. Tsinghua\'s engineering/CS intake is tiny and fierce; Peking\'s economics and Yenching cohorts are similarly selective. Research-degree admission at both is realistically winnable with strong files and supervisor backing.',
      },
      {
        question: 'Do both offer CSC scholarships?',
        answer:
          'Yes — both are Type B-designated universities, meaning you apply through the university itself (the direct route). The Type A government channel runs through your home ministry or embassy, not the university. Full awards at either are competitive regardless of marks; apply to both plus one high-probability partner university.',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'Sea vs Air Freight: China to India Shipping Compared',
    headline: 'Sea vs air freight from China to India',
    answer:
      'Sea wins on cost — 5–8× cheaper per kg — and loses on time: 18–25 days port-to-port versus 3–7 days door-to-door by air. Ship by sea anything that is not losing money by waiting; fly high-value-density, launch, or urgent-replacement goods. For most sourcing programmes, the right answer is sea for volume plus a standing air lane for emergencies.',
    entityA: 'Sea freight',
    entityB: 'Air freight',
    pillar: 'trade',
    updated: '2025-10-20',
    rows: [
      { label: 'Transit (China → India)', a: '18–25 days port-to-port + customs', b: '3–7 days door-to-door' },
      { label: 'Relative cost', a: '1× (baseline)', b: '5–8× per kg' },
      { label: 'Best for', a: 'Bulk, replenishment, low value density', b: 'Launches, samples, spares, electronics' },
      { label: 'Modes', a: 'LCL (shared) or FCL 20ft/40ft', b: 'Consol or direct, chargeable weight rules' },
      { label: 'Carbon intensity', a: 'Lowest per tonne-km', b: 'High — 20×+ sea per tonne-km' },
      { label: 'Main risk', a: 'Port congestion, blank sailings (Golden Week)', b: 'Capacity pricing spikes (fair season)' },
      { label: 'Cash-flow shape', a: 'Slow inventory turn, lower freight outlay', b: 'Fast turn, freight-heavy P&L' },
    ],
    verdict: {
      winner: 'Sea for volume, air for velocity',
      text: 'Run the default on sea — LCL for trials under ~12–15 CBM, FCL at scale — and keep a defined air lane for launches and stockouts. The math that matters is not freight cost per kg but landed cost per unit against your sell-through speed; our desk models both before you commit.',
    },
    body: [
      'Port pairs matter as much as mode: Guangzhou/Shenzhen to Mundra or JNPT is the workhorse corridor (18–25 days), with Shanghai/Ningbo adding 2–3 days. Air moves via PVG/CAN to DEL/BOM in 3–7 days door-to-door including clearance.',
      'Timing risks are seasonal: Golden Week blank sailings squeeze sea capacity each October, while Canton Fair weeks and pre-Chinese-New-Year rushes spike air rates. Build buffer stock around those windows rather than paying spot premiums.',
    ],
    faqs: [
      {
        question: 'When does air freight from China to India make sense?',
        answer:
          'Three cases: launch stock that must hit a market date, high-value-density goods where freight is a small share of unit economics, and emergency stockouts. Everything else is usually sea.',
      },
      {
        question: 'How much cheaper is sea freight?',
        answer:
          'Roughly 5–8× cheaper per kg than air on the China–India lane, before inventory-carrying costs. For full containers, sea is not a comparison — it is the only economic option.',
      },
      {
        question: 'LCL or FCL for a first order?',
        answer:
          'LCL for trial volumes (up to ~12–15 CBM) — you pay only for the space you use. Move to FCL when volumes make the per-unit math win, typically 2–3 orders in.',
      },
    ],
  },
];

/* zh — machine-assisted translation, pending native-speaker review.
   Slug/pillar/updated and all figures (US$/₹ amounts, day counts,
   percentages) are identical to en; only prose localizes. */
const COMPARISONS_ZH: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: '在中国读 MBBS 还是在印度：费用、认证与结论',
    headline: '中国 MBBS 对比印度 MBBS',
    answer:
      '如果你能拿到政府公办名额，选印度——它仍是最便宜的受认可路径。当现实中的印度替代方案是一个 ₹60L–1Cr 的私立名额时，选中国：教育部名单上的中国 MBBS 以大约三分之一的成本提供相当的认证前景，且有一个不可谈判的前提——作为外国医学毕业生，回国后你必须通过 FMGE/NExT 筛查（印度毕业生则改走 NExT 注册——资格规则取决于你的入学年份，承诺之前请核实现行 NMC 规定）。',
    entityA: '中国 MBBS',
    entityB: '印度 MBBS',
    pillar: 'education',
    updated: '2025-11-01',
    rows: [
      { label: '学费（每年）', a: 'US$3,500–8,000（教育部名单院校）', b: '公办：₹10k–1L · 私立：₹8–20L' },
      { label: '项目总花费', a: 'US$35–80k 全包（5.5 年）', b: '公办：₹5–10L · 私立：₹60L–1Cr+' },
      { label: '在印度执业的执照考试', a: 'FMGE/NExT 筛查（仅限外国毕业生）', b: 'NExT / 大学注册——FMGE 不适用于印度毕业生' },
      { label: '授课语言', a: '英语（临床年份需 HSK 4）', b: '英语（私立）/ 地方语言' },
      { label: '入学门槛', a: 'NEET 达标 + 12 年级 PCB', b: 'NEET 排名（公办）/ NEET 达标（私立）' },
      { label: '生活成本', a: 'US$300–850/月，按城市', b: '₹12–30k/月，按城市' },
      { label: '奖学金', a: 'CSC 及校级奖项可把学费降到零', b: '私立院校罕见；有邦配额' },
      { label: '病人接触量', a: '附属医院资源充足；取决于语言能力', b: '充足；语言即母语' },
      { label: '最大风险', a: '未上榜的大学 + 轻视语言', b: '巨额捐资费 + 名额稀缺' },
    ],
    verdict: {
      winner: '取决于你的 NEET 结果',
      text: '印度的公办 MBBS 名额 → 直接拿下，不犹豫。没有公办名额且预算紧张 → 就认证所需的同等努力（两边都要 FMGE）而言，教育部名单上的中国在成本上胜过任何印度私立名额。资金充裕、无意适应国外生活、却要为私立名额支付 ₹1Cr → 印度私立仍是理性选择。要避免的两种失败模式：未上榜的中国大学，以及选了中国却忽视 HSK 和 FMGE 备考。',
    },
    body: [
      '大多数印度家庭真正面对的比较，不是抽象的中国对印度——而是中国对他们唯一拥有的印度选项：一个七位数的私立名额。按这个框架去想，决定就清晰了。',
      '认证是对称的：无论边境哪一边的 MBBS，要在印度执业都必须通过 FMGE/NExT（印度私立院校的毕业生同样要面对 NExT）。差别在于取得学位的成本，以及留学路线要求的自律——语言、独立性和文件管理。',
      '中国的 MBBS 体系专为国际生源而建：教育部名单大学的英语授课轨道、可预期的收费表和宿舍基础设施。印度的优势是从第一天起就在你自己的医疗体系内积累临床经验——这对 FMGE 和最终执业是真正的强项。',
    ],
    faqs: [
      {
        question: '中国 MBBS 比印度私立 MBBS 好吗？',
        answer: '论成本，决定性地好：教育部名单上的完整中国 MBBS 大约只是印度私立名额的三分之一。论临床暴露和对体系的熟悉度，印度私立胜。论认证，双方都需要 FMGE/NExT——谁都不自动。',
      },
      {
        question: '在中国读完 MBBS 后能在印度执业吗？',
        answer: '可以，前提是通过 NBE 主办的 FMGE（正在过渡为 NExT），并完成标准的实习注册。每年有成千上万人这样做；学位期间的备考比在哪里读书更重要。',
      },
      {
        question: '总体上哪边更便宜？',
        answer: '二线城市大学的中国 MBBS 全包可落在 US$35–45k 左右。印度私立名额通常仅学费就超过 ₹60L–1Cr。印度公办名额比两者都便宜，但稀缺。',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: '清华大学对比北京大学：你该申请哪一所？',
    headline: '清华大学 对比 北京大学',
    answer: '它们是中国学术之巅的两半，在海淀相距 3 公里。选清华：工程、计算机和技术职业；选北大：人文、经济、理学和研究广度。国际录取难度相当——按你的学科选，而不是按排名选。',
    entityA: '清华大学',
    entityB: '北京大学',
    pillar: 'education',
    updated: '2025-10-15',
    rows: [
      { label: '身份定位', a: '工程与技术的巅峰', b: '人文、理学与政策的广度' },
      { label: '全球地位（QS）', a: '前 25，工程前 10', b: '总体前 15' },
      { label: '面向国际生的旗舰项目', a: '计算机/AI、工程、苏世民学者、MBA', b: '经济、国际关系、中国研究、燕京学堂' },
      { label: '校园气质', a: '红砖学院风 + 现代实验室', b: '皇家园林，未名湖' },
      { label: '产业毗邻', a: '中关村：百度、字节跳动、微软亚洲研究院', b: '智库、金融、政府通道' },
      { label: '国际学生规模', a: '各学位合计约 3,000+', b: '各学位合计约 3,000+' },
      { label: '最适合的申请者', a: 'STEM 的建设者/研究者', b: '分析/政策/人文型头脑' },
    ],
    verdict: {
      winner: '学科说了算，不是排名',
      text: '工程和计算机，清华的号召力在亚洲无可匹敌；经济、国际关系、法律或纯理学，北大的深度和园林式校园胜出。对国际学生，两校申请难度相当；两校研究型学位的胜算都会因提前联系导师而显著提升——这正是我们在开放申请前做的功课。',
    },
    body: [
      '这对对手的较量亲切而地理：两个校园隔着海淀相望，中国家庭会开玩笑说孩子住在成府路的哪一边。对国际申请者，选择少了部落色彩、多了实用考量——院系实力、英语授课菜单和毕业后的人脉网络。',
      '两校都开设 CSC B 类招生和校级奖学金（清华的校长奖学金；北大的燕京学堂与院系级资助）。两校都期待有竞争力的成绩，研究型学位还需要尽早联系导师。对任何人来说，两所都不是“保底”。',
    ],
    faqs: [
      {
        question: '哪所对国际学生更难进？',
        answer: '总体相当；边缘处取决于学科。清华的工程/计算机名额极少且竞争激烈；北大的经济学和燕京项目同样挑剔。两校的研究型学位在材料扎实、导师支持的情况下都现实可赢。',
      },
      {
        question: '两所都提供 CSC 奖学金吗？',
        answer: '是——两所都是 B 类指定高校，意味着直接向大学申请（直通渠道）。A 类政府渠道经你所在国家的部委或使领馆，不经大学。无论成绩如何，两校的全额资助都有竞争性；两所都申，外加一所高概率的伙伴大学。',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: '海运对比空运：中国到印度运输方式全比较',
    headline: '中国到印度：海运对比空运',
    answer: '海运赢在成本——每公斤便宜 5–8 倍——输在时间：港到港 18–25 天，对比空运 3–7 天门到门。凡是等待不会亏钱的货都走海运；高价值密度、新品上市或紧急替换的货走空运。对大多数采购计划，正确答案是海运走量，外加一条常备的应急空运通道。',
    entityA: '海运',
    entityB: '空运',
    pillar: 'trade',
    updated: '2025-10-20',
    rows: [
      { label: '在途时间（中国 → 印度）', a: '18–25 天港到港 + 清关', b: '3–7 天门到门' },
      { label: '相对成本', a: '1×（基准）', b: '每公斤 5–8×' },
      { label: '最适合', a: '大宗、补货、低价值密度', b: '新品上市、样品、备件、电子产品' },
      { label: '运输模式', a: 'LCL（拼箱）或 FCL 20ft/40ft', b: 'Consol 或直飞，按计费重量规则' },
      { label: '碳强度', a: '每吨公里最低', b: '高——每吨公里约为海运的 20× 以上' },
      { label: '主要风险', a: '港口拥堵、跳港停航（黄金周）', b: '运力定价飙升（展会季）' },
      { label: '现金流形态', a: '库存周转慢，运费支出低', b: '周转快，损益表被运费吃重' },
    ],
    verdict: {
      winner: '量走海运，急走空运',
      text: '默认走海运——试单 12–15 CBM 以下用 LCL，上量后用 FCL——并为新品上市和断货保留一条明确的空运通道。真正要算的不是每公斤运费，而是对照你的售出速度算出的每单位到岸成本；在你拍板之前，我们的团队会为两者建模。',
    },
    body: [
      '港口配对和运输模式同样重要：广州/深圳到蒙德拉或 JNPT 是主力走廊（18–25 天），上海/宁波再多 2–3 天。空运经 PVG/CAN 到 DEL/BOM，3–7 天门到门含清关。',
      '时间风险有季节性：每年 10 月黄金周的跳港停航挤压海运运力，而广交会期间和春节前的抢运推高空运价格。围绕这些窗口建立缓冲库存，而不是支付即期溢价。',
    ],
    faqs: [
      {
        question: '什么时候从中国到印度走空运才划算？',
        answer: '三种情形：必须赶上上市日期的新品库存、运费在单位经济中占比很小的超高价值密度货物、以及紧急断货。其余通常走海运。',
      },
      {
        question: '海运到底便宜多少？',
        answer: '在中印航线上，海运每公斤大约比空运便宜 5–8 倍——还未计入库存持有成本。对整柜而言，海运不存在比较——它是唯一经济的选择。',
      },
      {
        question: '第一单用 LCL 还是 FCL？',
        answer: '试单量（12–15 CBM 以内）用 LCL——只为占用的空间付费。等上量后单件算得过账时再转 FCL，通常在 2–3 单之后。',
      },
    ],
  },
];

/* fr — machine-assisted translation, pending native-speaker review. */
const COMPARISONS_FR: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'MBBS en Chine vs Inde : coûts, reconnaissance et verdict',
    headline: 'MBBS en Chine vs MBBS en Inde',
    answer:
      'Choisissez l’Inde si vous pouvez décrocher une place publique — c’est la voie reconnue la moins chère. Choisissez la Chine quand l’alternative indienne réaliste est une place privée à ₹60L–1Cr : un MBBS chinois d’une université listée au MOE offre une reconnaissance comparable pour environ un tiers du coût, à la condition non négociable que, diplômé médical étranger, vous réussissiez le screening FMGE/NExT au retour (les diplômés indiens s’inscrivent via le NExT — les règles d’éligibilité dépendent de votre année d’admission, vérifiez la réglementation NMC actuelle avant de vous engager).',
    entityA: 'MBBS en Chine',
    entityB: 'MBBS en Inde',
    pillar: 'education',
    updated: '2025-11-01',
    rows: [
      { label: 'Frais de scolarité (par an)', a: 'US$3,500–8,000 (universités listées MOE)', b: 'Public : ₹10k–1L · Privé : ₹8–20L' },
      { label: 'Coût total du cursus', a: 'US$35–80k tout compris (5.5 ans)', b: 'Public : ₹5–10L · Privé : ₹60L–1Cr+' },
      { label: 'Examen de licence pour exercer en Inde', a: 'Screening FMGE/NExT (diplômés étrangers uniquement)', b: 'NExT / inscription universitaire — le FMGE ne s’applique pas aux diplômés indiens' },
      { label: 'Langue d’enseignement', a: 'Anglais (HSK 4 requis pour les années cliniques)', b: 'Anglais (privé) / langues régionales' },
      { label: 'Porte d’entrée', a: 'Qualification NEET + PCB en classe 12', b: 'Rang NEET (public) / qualification NEET (privé)' },
      { label: 'Coût de la vie', a: 'US$300–850/mois selon la ville', b: '₹12–30k/mois selon la ville' },
      { label: 'Bourses', a: 'Les bourses CSC et universitaires peuvent ramener les frais à zéro', b: 'Rares dans le privé ; quotas d’État' },
      { label: 'Exposition aux patients', a: 'Forte dans les hôpitaux affiliés ; dépend de la langue', b: 'Forte ; la langue est maternelle' },
      { label: 'Risque principal', a: 'Universités non listées + négligence de la langue', b: 'Frais de capitation + rareté des places' },
    ],
    verdict: {
      winner: 'Cela dépend de votre résultat NEET',
      text: 'Place publique de MBBS en Inde → prenez-la, point. Pas de place publique et budget serré → la Chine listée MOE bat toute place privée indienne sur le coût, à effort de reconnaissance comparable (FMGE dans les deux cas). Payer ₹1Cr en privé avec des fonds disponibles et aucune envie d’adaptation à l’étranger → le privé en Inde reste rationnel. Les deux échecs à éviter : les universités chinoises non listées, et choisir la Chine en ignorant la préparation HSK et FMGE.',
    },
    body: [
      'La comparaison à laquelle font face la plupart des familles indiennes n’est pas la Chine contre l’Inde dans l’abstrait — c’est la Chine contre la seule option indienne qu’elles ont : une place privée à sept chiffres. Cadrée ainsi, la décision s’éclaircit.',
      'La reconnaissance est symétrique : un MBBS de l’un ou l’autre côté de la frontière exige de réussir le FMGE/NExT pour exercer en Inde (les diplômés des facultés privées indiennes affrontent aussi le NExT). Ce qui diffère, c’est le coût d’acquisition du diplôme et la discipline qu’exige la voie de l’étranger — langue, autonomie et hygiène documentaire.',
      'Le système MBBS chinois est conçu pour l’admission internationale : filières en anglais dans des universités listées MOE, barèmes de frais prévisibles et infrastructures de dortoirs. L’avantage de l’Inde est l’exposition clinique dans votre propre système de santé dès le premier jour — une force réelle pour le FMGE et la pratique à venir.',
    ],
    faqs: [
      {
        question: 'Le MBBS chinois est-il meilleur que le MBBS privé indien ?',
        answer: 'Sur le coût, oui sans ambiguïté : un MBBS chinois complet dans une université listée MOE coûte environ un tiers d’une place privée indienne. Sur l’exposition clinique et la familiarité du système, les facultés privées indiennes gagnent. Sur la reconnaissance, tous deux exigent le FMGE/NExT — ni l’un ni l’autre n’est automatique.',
      },
      {
        question: 'Puis-je exercer en Inde après un MBBS en Chine ?',
        answer: 'Oui, après avoir réussi le FMGE (en transition vers le NExT) conduit par le NBE, plus l’inscription d’internat standard. Des milliers le font chaque année ; la préparation pendant le cursus compte plus que l’endroit où vous avez étudié.',
      },
      {
        question: 'Lequel est moins cher au total ?',
        answer: 'Un MBBS chinois dans une université d’une ville de second rang peut descendre vers US$35–45k tout compris. Les places privées indiennes dépassent couramment ₹60L–1Cr de frais seuls. Les places publiques indiennes sont moins chères que les deux mais rares.',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'Tsinghua vs Université de Pékin : laquelle choisir ?',
    headline: 'Tsinghua vs Université de Pékin',
    answer: 'Ce sont deux moitiés du sommet académique chinois, à 3 km l’une de l’autre à Haidian. Choisissez Tsinghua pour l’ingénierie, l’informatique et les carrières technologiques ; choisissez Pékin pour les humanités, l’économie, les sciences et l’étendue de recherche. La difficulté d’admission internationale est comparable — candidatez à celle que votre discipline appelle, pas à celle qu’un classement désigne.',
    entityA: 'Université Tsinghua',
    entityB: 'Université de Pékin',
    pillar: 'education',
    updated: '2025-10-15',
    rows: [
      { label: 'Identité', a: 'Suprématie de l’ingénierie et de la technologie', b: 'Étendue en humanités, sciences et politique' },
      { label: 'Standing mondial (QS)', a: 'Top-25, ingénierie top-10', b: 'Top-15 général' },
      { label: 'Fleurons pour les internationaux', a: 'CS/IA, ingénierie, Schwarzman, MBA', b: 'Économie, RI, études chinoises, Yenching' },
      { label: 'Caractère du campus', a: 'Collegiate brique rouge + labs modernes', b: 'Jardins impériaux, lac Weiming' },
      { label: 'Proximité industrielle', a: 'Zhongguancun : Baidu, ByteDance, MSR Asia', b: 'Think tanks, finance, voies gouvernementales' },
      { label: 'Cohorte internationale', a: '~3,000+ tous cursus', b: '~3,000+ tous cursus' },
      { label: 'Candidat au meilleur profil', a: 'Bâtisseur/chercheur en STEM', b: 'Esprit analyste/politique/humanités' },
    ],
    verdict: {
      winner: 'La discipline décide, pas les classements',
      text: 'Pour l’ingénierie et l’informatique, l’attraction de Tsinghua est inégalée en Asie ; pour l’économie, les relations internationales, le droit ou les sciences pures, la profondeur de Pékin et son campus-jardin l’emportent. La difficulté de candidature est comparable pour les étudiants internationaux ; les chances en recherche s’améliorent nettement dans les deux avec un contact préalable avec un superviseur — le travail que nous faisons avant l’ouverture des candidatures.',
    },
    body: [
      'La rivalité est affectueuse et géographique : les deux campus se font face à travers Haidian, et les familles chinoises plaisantent sur le côté de la route Chengfu où vit un enfant. Pour les candidats internationaux, le choix est moins tribal et plus pratique — force du département, offre enseignée en anglais et réseau post-études.',
      'Les deux universités mènent des admissions CSC Type B et des bourses universitaires (les prix présidentiels de Tsinghua ; le Yenching et les financements d’école de Pékin). Toutes deux attendent des notes compétitives et, pour les diplômes de recherche, un engagement précoce du superviseur. Aucune n’est une « sécurité » pour quiconque.',
    ],
    faqs: [
      {
        question: 'Laquelle est la plus difficile d’accès pour les étudiants internationaux ?',
        answer: 'Comparable dans l’ensemble ; dépendante de la discipline aux marges. L’admission ingénierie/CS de Tsinghua est minuscule et féroce ; les cohortes économie et Yenching de Pékin sont tout aussi sélectives. L’admission en recherche est réaliste dans les deux avec des dossiers solides et l’appui d’un superviseur.',
      },
      {
        question: 'Les deux offrent-elles des bourses CSC ?',
        answer: 'Oui — les deux sont désignées Type B, ce qui signifie que vous candidatez via l’université elle-même (la voie directe). Le canal gouvernemental Type A passe par votre ministère ou ambassade d’origine, pas par l’université. Les attributions complètes sont compétitives dans les deux quelles que soient vos notes ; candidatez aux deux plus une université partenaire à forte probabilité.',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'Fret maritime vs aérien : Chine vers Inde comparés',
    headline: 'Fret maritime vs aérien de la Chine vers l’Inde',
    answer: 'La mer gagne sur le coût — 5–8× moins cher au kg — et perd sur le temps : 18–25 jours port à port contre 3–7 jours porte à porte par avion. Envoyez par mer tout ce qui ne perd pas d’argent en attendant ; faites voler les biens à haute densité de valeur, les lancements et les remplacements urgents. Pour la plupart des programmes de sourcing, la bonne réponse est la mer pour le volume plus une ligne aérienne permanente pour les urgences.',
    entityA: 'Fret maritime',
    entityB: 'Fret aérien',
    pillar: 'trade',
    updated: '2025-10-20',
    rows: [
      { label: 'Transit (Chine → Inde)', a: '18–25 jours port à port + douanes', b: '3–7 jours porte à porte' },
      { label: 'Coût relatif', a: '1× (base)', b: '5–8× au kg' },
      { label: 'Idéal pour', a: 'Volume, réapprovisionnement, faible densité de valeur', b: 'Lancements, échantillons, pièces, électronique' },
      { label: 'Modes', a: 'LCL (partagé) ou FCL 20ft/40ft', b: 'Consol ou direct, règles de poids taxable' },
      { label: 'Intensité carbone', a: 'La plus basse par tonne-km', b: 'Élevée — 20×+ la mer par tonne-km' },
      { label: 'Risque principal', a: 'Congestion portuaire, départs annulés (Golden Week)', b: 'Pics tarifaires de capacité (saison des salons)' },
      { label: 'Forme de la trésorerie', a: 'Rotation lente des stocks, fret moins lourd', b: 'Rotation rapide, P&L chargé en fret' },
    ],
    verdict: {
      winner: 'La mer pour le volume, l’air pour la vitesse',
      text: 'Faites tourner le régime par défaut sur la mer — LCL pour les essais sous ~12–15 CBM, FCL à l’échelle — et gardez une ligne aérienne définie pour les lancements et les ruptures de stock. Le calcul qui compte n’est pas le coût de fret au kg mais le coût rendu par unité rapporté à votre vitesse d’écoulement ; notre desk modélise les deux avant que vous vous engagiez.',
    },
    body: [
      'Les paires de ports comptent autant que le mode : Guangzhou/Shenzhen vers Mundra ou JNPT est le corridor le plus utilisé (18–25 jours), Shanghai/Ningbo ajoutant 2–3 jours. L’air passe via PVG/CAN vers DEL/BOM en 3–7 jours porte à porte, dégagement compris.',
      'Les risques de calendrier sont saisonniers : les départs annulés de la Golden Week compriment la capacité maritime chaque octobre, tandis que les semaines de la Canton Fair et la ruée avant le Nouvel An chinois font grimper les tarifs aériens. Constituez du stock tampon autour de ces fenêtres plutôt que de payer des primes au comptant.',
    ],
    faqs: [
      {
        question: 'Quand le fret aérien de la Chine vers l’Inde a-t-il du sens ?',
        answer: 'Trois cas : un stock de lancement qui doit respecter une date de marché, des biens à haute densité de valeur où le fret est une faible part de l’économie unitaire, et des ruptures de stock urgentes. Tout le reste va généralement par mer.',
      },
      {
        question: 'Le fret maritime est-il combien moins cher ?',
        answer: 'Environ 5–8× moins cher au kg que l’air sur la ligne Chine–Inde, avant les coûts de port de stock. Pour les conteneurs complets, la mer n’est pas une comparaison — c’est la seule option économique.',
      },
      {
        question: 'LCL ou FCL pour une première commande ?',
        answer: 'LCL pour les volumes d’essai (jusqu’à ~12–15 CBM) — vous ne payez que l’espace utilisé. Passez au FCL quand les volumes font gagner le calcul au détail, typiquement après 2–3 commandes.',
      },
    ],
  },
];

/* ar — machine-assisted translation, pending native-speaker review. */
const COMPARISONS_AR: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'MBBS في الصين مقابل الهند: التكاليف والاعتراف والخلاصة',
    headline: 'MBBS في الصين مقابل MBBS في الهند',
    answer: 'اختر الهند إذا كان بإمكانك الفوز بمقعد حكومي — فهي لا تزال الطريق المعترف به الأرخص. اختر الصين عندما يكون البديل الهندي الواقعي مقعدًا خاصًا بـ₹60L–1Cr: فـMBBS الصيني في جامعة مدرجة على قائمة MOE يوفر اعترافًا مماثلًا بنحو ثلث التكلفة، بشرط غير قابل للتفاوض أنك، بوصفك خريج طبي أجنبي، ستجتاز فرز FMGE/NExT عند العودة (الخريجون الهنود يسجلون عبر NExT بدلًا منه — وقواعد الأهلية تعتمد على سنة قبولك، فتحقق من لوائح NMC الحالية قبل الالتزام).',
    entityA: 'MBBS في الصين',
    entityB: 'MBBS في الهند',
    pillar: 'education',
    updated: '2025-11-01',
    rows: [
      { label: 'الرسوم الدراسية (سنويًا)', a: 'US$3,500–8,000 (جامعات مدرجة على قائمة MOE)', b: 'حكومي: ₹10k–1L · خاص: ₹8–20L' },
      { label: 'إجمالي تكلفة البرنامج', a: 'US$35–80k شاملًا (5.5 سنوات)', b: 'حكومي: ₹5–10L · خاص: ₹60L–1Cr+' },
      { label: 'امتحان الترخيص للممارسة في الهند', a: 'فرز FMGE/NExT (للخريجين الأجانب فقط)', b: 'NExT / تسجيل الجامعة — FMGE لا ينطبق على الخريجين الهنود' },
      { label: 'لغة التعليم', a: 'الإنجليزية (يلزم HSK 4 للسنوات السريرية)', b: 'الإنجليزية (خاص) / لغات إقليمية' },
      { label: 'بوابة القبول', a: 'اجتياز NEET + مواد PCB في الصف 12', b: 'ترتيب NEET (حكومي) / اجتياز NEET (خاص)' },
      { label: 'تكاليف المعيشة', a: 'US$300–850 شهريًا حسب المدينة', b: '₹12–30k شهريًا حسب المدينة' },
      { label: 'المنح', a: 'منح CSC والجامعات قد تُصفّر الرسوم الدراسية', b: 'نادرة في الكليات الخاصة؛ حصص للولايات' },
      { label: 'التعرض للمرضى', a: 'قوي في المستشفيات التابعة؛ يعتمد على اللغة', b: 'قوي؛ اللغة هي الأم' },
      { label: 'أكبر خطر', a: 'جامعات غير مدرجة + إهمال اللغة', b: 'رسوم التبرعات + ندرة المقاعد' },
    ],
    verdict: {
      winner: 'يعتمد على نتيجتك في NEET',
      text: 'مقعد MBBS حكومي في الهند → خذه، نقطة. لا مقعد حكومي والميزانية ضيقة → الصين المدرجة على قائمة MOE تتفوق على أي مقعد هندي خاص في التكلفة بمجهود اعتراف مماثل (FMGE في الحالتين). دفع ₹1Cr خاصًا مع توفر الأموال ولا رغبة في التأقلم بالخارج → الخاص في الهند يبقى خيارًا عقلانيًا. نمطا الفشل اللذان يجب تجنبهما: الجامعات الصينية غير المدرجة، واختيار الصين مع إهمال التحضير لـHSK وFMGE.',
    },
    body: [
      'المقارنة التي تواجهها معظم العائلات الهندية ليست الصين ضد الهند في المجرد — بل الصين ضد الخيار الهندي الوحيد المتاح لها: مقعد خاص بسعر من سبعة أرقام. بإطار ذلك تصبح القراءة أوضح.',
      'الاعتراف متماثل: MBBS من أي جانب من الحدود يتطلب اجتياز FMGE/NExT للممارسة في الهند (خريجو الكليات الخاصة الهندية يواجهون NExT أيضًا). ما يختلف هو تكلفة الحصول على الدرجة والانضباط الذي يطلبه الطريق الأجنبي — اللغة والاستقلالية ونظافة المستندات.',
      'نظام MBBS الصيني مصمم خصيصًا للاستقطاب الدولي: مسارات بالإنجليزية في جامعات مدرجة على قائمة MOE، وجداول رسوم يمكن التنبؤ بها، وبنية سكن جامعي. ميزة الهند هي التعرض السريري في منظومة الرعاية الصحية الخاصة بك من اليوم الأول — قوة حقيقية لـFMGE والممارسة لاحقًا.',
    ],
    faqs: [
      {
        question: 'هل MBBS الصيني أفضل من MBBS الخاص الهندي؟',
        answer: 'من حيث التكلفة، نعم حاسمًا: MBBS صيني كامل في جامعة مدرجة يكلف نحو ثلث المقعد الخاص الهندي. من حيث التعرض السريري والمعرفة بالنظام، الكليات الخاصة الهندية تتفوق. من حيث الاعتراف، كلاهما يحتاج FMGE/NExT — ولا واحد منهما تلقائي.',
      },
      {
        question: 'هل أستطيع الممارسة في الهند بعد MBBS من الصين؟',
        answer: 'نعم، بعد اجتياز FMGE (الذي يتحول إلى NExT) الذي ينظمه NBE، إضافة إلى تسجيل الامتياز القياسي. آلاف يفعلون ذلك سنويًا؛ والتحضير أثناء الدرجة أهم من مكان الدراسة.',
      },
      {
        question: 'أيهما أرخص إجمالًا؟',
        answer: 'MBBS صيني في جامعة بمدينة من الدرجة الثانية قد ينتهي قرب US$35–45k شاملًا. المقاعد الخاصة الهندية تتجاوز عادةً ₹60L–1Cr رسومًا فقط. المقاعد الحكومية الهندية أرخص من كليهما لكنها شحيحة.',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'تسينغهوا مقابل جامعة بكين: إلى أيهما تتقدم؟',
    headline: 'تسينغهوا مقابل جامعة بكين',
    answer: 'هما نصفا قمة التعليم الأكاديمي في الصين، تفصلهما 3 كم في هايديان. اختر تسينغهوا للهندسة وعلوم الحاسوب والمسارات التقنية؛ واختر بكين للعلوم الإنسانية والاقتصاد والعلوم واتساع البحث. صعوبة القبول الدولي متقاربة — قدّم على التي تفرضها تخصصك، لا التي يفرضها التصنيف.',
    entityA: 'جامعة تسينغهوا',
    entityB: 'جامعة بكين',
    pillar: 'education',
    updated: '2025-10-15',
    rows: [
      { label: 'الهوية', a: 'العليا في الهندسة والتقنية', b: 'اتساع في الإنسانيات والعلوم والسياسات' },
      { label: 'المكانة العالمية (QS)', a: 'ضمن أفضل 25، والهندسة ضمن أفضل 10', b: 'ضمن أفضل 15 عمومًا' },
      { label: 'البرامج الرائدة للدوليين', a: 'حاسوب/AI، هندسة، شوارتزمان، MBA', b: 'اقتصاد، علاقات دولية، دراسات صينية، ين-تشنغ' },
      { label: 'طابع الحرم', a: 'طابع جامعي بطوب أحمر + مختبرات حديثة', b: 'حدائق إمبراطورية، بحر وي-مينغ' },
      { label: 'الجوار الصناعي', a: 'تشونغقوانتسون: بايدو، بايت دانس، MSR آسيا', b: 'مراكز أبحاث، تمويل، مسارات حكومية' },
      { label: 'الحجم الدولي', a: '~3,000+ عبر الدرجات', b: '~3,000+ عبر الدرجات' },
      { label: 'المتقدم الأنسب', a: 'باني/باحث في STEM', b: 'عقل محلل/سياسات/إنساني' },
    ],
    verdict: {
      winner: 'التخصص هو الحاسم، لا التصنيفات',
      text: 'في الهندسة وعلوم الحاسوب، جاذبية تسينغهوا لا مثيل لها في آسيا؛ في الاقتصاد والعلاقات الدولية والقانون أو العلوم البتة، تفوز عمق بكين وحرمها الحديقي. صعوبة التقديم متقاربة للطلاب الدوليين؛ واحتمالات درجات البحث تتحسن حادًا في كلتيهما بتواصل مسبق مع المشرف — وهو العمل الذي نقوم به قبل فتح التقديمات.',
    },
    body: [
      'التنافس عاطفي وجغرافي: الحرم يتقابلان عبر هايديان، والعائلات الصينية تمزح عن أي جانب من طريق تشنغ-فو يسكنه الطفل. للمتقدمين الدوليين يكون الاختيار أقل قبلية وأكثر عملية — قوة القسم، والقائمة المدرّسة بالإنجليزية، وشبكة ما بعد الدراسة.',
      'كلتا الجامعتين تشغّلان قبول CSC النوع B ومنحًا على مستوى الجامعة (جوائز الرئيس في تسينغهوا؛ ين-تشنغ وتمويل الكليات في بكين). كلتاهما تتوقعان درجات تنافسية، ولدرجات البحث تفاعلًا مبكرًا مع المشرف. ولا واحدة منهما «خطة أمان» لأحد.',
    ],
    faqs: [
      {
        question: 'أيهما أصعب في القبول للطلاب الدوليين؟',
        answer: 'متقاربة عمومًا؛ وتتباين حسب التخصص في الحدود. قبول الهندسة/الحاسوب في تسينغهوا ضئيل وعنيف؛ وقطب الاقتصاد وين-تشنغ في بكين انتقائي بالمثل. قبول درجات البحث قابل للفوز واقعيًا في كلتيهما بملفات قوية ودعم مشرف.',
      },
      {
        question: 'هل تقدمان منح CSC كلتاهما؟',
        answer: 'نعم — كلتاهما جامعتا النوع B، أي أنك تتقدم عبر الجامعة نفسها (الطريق المباشر). القناة الحكومية النوع A تمر عبر وزارتك أو سفارتك، لا عبر الجامعة. الجوائز الكاملة في كلتيهما تنافسية أينما كانت درجاتك؛ قدّم على كلتيهما زائد جامعة شريكة عالية الاحتمال.',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'الشحن البحري مقابل الجوي: مقارنة الشحن من الصين إلى الهند',
    headline: 'الشحن البحري مقابل الجوي من الصين إلى الهند',
    answer: 'البحر يفوز في التكلفة — أرخص 5–8 مرات لكل كغ — ويخسر في الوقت: 18–25 يومًا من ميناء إلى ميناء مقابل 3–7 أيام من باب إلى باب جويًا. اشحن بحرًا كل ما لا يخسر مالًا بانتظاره؛ وطِر البضائع عالية الكثافة القيمية والإطلاقات والاستبدالات العاجلة. لمعظم برامج التوريد، الإجابة الصحيحة هي البحر للحجم مع خط جوي دائم للطوارئ.',
    entityA: 'الشحن البحري',
    entityB: 'الشحن الجوي',
    pillar: 'trade',
    updated: '2025-10-20',
    rows: [
      { label: 'العبور (الصين → الهند)', a: '18–25 يومًا ميناء إلى ميناء + جمارك', b: '3–7 أيام باب إلى باب' },
      { label: 'التكلفة النسبية', a: '1× (خط الأساس)', b: '5–8× لكل كغ' },
      { label: 'الأفضل لـ', a: 'الكميات، وإعادة التزود، والكثافة القيمية المنخفضة', b: 'الإطلاقات والعينات وقطع الغيار والإلكترونيات' },
      { label: 'الأنماط', a: 'LCL (مشترك) أو FCL 20ft/40ft', b: 'Consol أو مباشر، بقواعد الوزن الخاضع للرسوم' },
      { label: 'كثافة الكربون', a: 'الأدنى لكل طن-كم', b: 'مرتفعة — 20×+ من البحر لكل طن-كم' },
      { label: 'الخطر الرئيسي', a: 'ازدحام الموانئ وإلغاء الرحلات البحرية (أسبوع الذهبي)', b: 'قفزات أسعار السعة (موسم المعارض)' },
      { label: 'شكل التدفق النقدي', a: 'دوران مخزون بطيء وإنفاق شحن أقل', b: 'دوران سريع وقوائم مالية محمّلة بالشحن' },
    ],
    verdict: {
      winner: 'البحر للحجم والجو للسرعة',
      text: 'شغّل الافتراضي على البحر — LCL للتجارب تحت ~12–15 CBM، وFCL عند الحجم — واحتفظ بخط جوي محدد للإطلاقات والنواقص. الحساب المهم ليس تكلفة الشحن لكل كغ بل تكلفة الوحدة على أرض الواقع مقابل سرعة بيعك؛ ومكتبنا يبني النموذجين قبل التزامك.',
    },
    body: [
      'أزواج الموانئ تهم بقدر النمط: قوانغتشو/شنتشن إلى موندرا أو JNPT هو الممر الأكثر استخدامًا (18–25 يومًا)، وشنغهاي/نينغبو تضيف 2–3 أيام. الجو يمر عبر PVG/CAN إلى DEL/BOM في 3–7 أيام باب إلى باب شاملًا التخليص.',
      'مخاطر التوقيت موسمية: إلغاء الرحلات البحرية في أسبوع الذهبي يضغط سعة البحر كل أكتوبر، بينما أسابيع معرض كانتون والزحمة قبل رأس السنة الصينية ترفع أسعار الجو. ابنِ مخزونًا احتياطيًا حول تلك النوافذ بدلًا من دفع علاوات لحظية.',
    ],
    faqs: [
      {
        question: 'متى يكون الشحن الجوي من الصين إلى الهند منطقيًا؟',
        answer: 'ثلاث حالات: مخزون إطلاق يجب أن يصل في تاريخ تسويقي، وبضائع عالية الكثافة القيمية حيث الشحن حصة صغيرة من اقتصاديات الوحدة، والنواقص الطارئة. كل ما عدا ذلك عادةً بحر.',
      },
      {
        question: 'كم يكون الشحن البحري أرخص؟',
        answer: 'بنحو 5–8 مرات أرخص لكل كغ من الجو على خط الصين–الهند، قبل تكاليف حمل المخزون. للحاويات الكاملة، البحر ليس مقارنة — إنه الخيار الاقتصادي الوحيد.',
      },
      {
        question: 'LCL أم FCL لطلب أول؟',
        answer: 'LCL لأحجام التجربة (حتى ~12–15 CBM) — تدفع فقط مقابل المساحة التي تستخدمها. انتقل إلى FCL عندما تجعل الأحجام معادلة الوحدة تفوز، عادةً بعد طلبين إلى ثلاثة.',
      },
    ],
  },
];

/* es — machine-assisted translation, pending native-speaker review. */
const COMPARISONS_ES: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'MBBS en China vs India: costes, reconocimiento y veredicto',
    headline: 'MBBS en China vs MBBS en India',
    answer: 'Elige India si puedes ganar una plaza pública — sigue siendo la vía reconocida más barata. Elige China cuando la alternativa india realista es una plaza privada de ₹60L–1Cr: un MBBS chino de una universidad de la lista del MOE ofrece un reconocimiento comparable por aproximadamente un tercio del costo, con la condición innegociable de que, como graduado médico extranjero, apruebes el filtro FMGE/NExT al regresar (los graduados indios se registran vía NExT — las reglas de elegibilidad dependen de tu año de admisión, verifica la normativa actual del NMC antes de comprometerte).',
    entityA: 'MBBS en China',
    entityB: 'MBBS en India',
    pillar: 'education',
    updated: '2025-11-01',
    rows: [
      { label: 'Matrícula (por año)', a: 'US$3,500–8,000 (universidades de la lista MOE)', b: 'Pública: ₹10k–1L · Privada: ₹8–20L' },
      { label: 'Coste total del programa', a: 'US$35–80k todo incluido (5.5 años)', b: 'Pública: ₹5–10L · Privada: ₹60L–1Cr+' },
      { label: 'Examen de licencia para ejercer en India', a: 'Filtro FMGE/NExT (solo graduados extranjeros)', b: 'NExT / registro universitario — el FMGE no aplica a graduados indios' },
      { label: 'Idioma de instrucción', a: 'Inglés (se necesita HSK 4 para los años clínicos)', b: 'Inglés (privada) / lenguas regionales' },
      { label: 'Puerta de admisión', a: 'Calificación NEET + PCB en 12.º', b: 'Rango NEET (pública) / calificación NEET (privada)' },
      { label: 'Coste de vida', a: 'US$300–850/mes según ciudad', b: '₹12–30k/mes según ciudad' },
      { label: 'Becas', a: 'Las becas CSC y universitarias pueden llevar la matrícula a cero', b: 'Raras en privadas; cuotas estatales' },
      { label: 'Exposición a pacientes', a: 'Fuerte en hospitales adscritos; depende del idioma', b: 'Fuerte; el idioma es nativo' },
      { label: 'Mayor riesgo', a: 'Universidades fuera de la lista + descuidar el idioma', b: 'Donaciones capitales + escasez de plazas' },
    ],
    verdict: {
      winner: 'Depende de tu resultado NEET',
      text: 'Plaza pública de MBBS en India → tómala, sin más. Sin plaza pública y presupuesto ajustado → China de la lista MOE supera a cualquier plaza india privada en coste con esfuerzo de reconocimiento comparable (FMGE en ambos casos). Pagar ₹1Cr en privada con fondos disponibles y sin ganas de adaptación en el extranjero → la privada en India sigue siendo racional. Los dos modos de fallo que hay que evitar: universidades chinas fuera de la lista, y elegir China ignorando la preparación de HSK y FMGE.',
    },
    body: [
      'La comparación a la que se enfrentan la mayoría de las familias indias no es China contra India en abstracto — es China contra la única opción india que tienen: una plaza privada de siete cifras. Planteado así, la decisión se aclara.',
      'El reconocimiento es simétrico: un MBBS de cualquier lado de la frontera exige aprobar el FMGE/NExT para ejercer en India (los graduados de facultades privadas indias también enfrentan el NExT). Lo que difiere es el coste de adquirir el título y la disciplina que exige la vía del extranjero — idioma, independencia e higiene documental.',
      'El sistema MBBS chino está construido a medida para el ingreso internacional: vías en inglés en universidades de la lista MOE, tablas de tarifas predecibles e infraestructura de residencias. La ventaja de India es la exposición clínica en tu propio sistema sanitario desde el primer día — una fuerza genuina para el FMGE y el ejercicio posterior.',
    ],
    faqs: [
      {
        question: '¿Es mejor el MBBS chino que el MBBS privado indio?',
        answer: 'En coste, decisivamente sí: un MBBS chino completo en una universidad de la lista MOE cuesta alrededor de un tercio de una plaza privada india. En exposición clínica y familiaridad con el sistema, ganan las privadas indias. En reconocimiento, ambos necesitan FMGE/NExT — ninguno es automático.',
      },
      {
        question: '¿Puedo ejercer en India tras un MBBS de China?',
        answer: 'Sí, tras aprobar el FMGE (en transición al NExT) conducido por el NBE, más el registro de internado estándar. Miles lo hacen cada año; la preparación durante el grado importa más que dónde estudiaste.',
      },
      {
        question: '¿Cuál es más barato en total?',
        answer: 'Un MBBS chino en una universidad de una ciudad de segundo nivel puede quedar cerca de US$35–45k todo incluido. Las plazas privadas indias suelen superar los ₹60L–1Cr solo en matrícula. Las plazas públicas indias son más baratas que ambas pero escasas.',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'Tsinghua vs Universidad de Pekín: ¿a cuál solicitar?',
    headline: 'Tsinghua vs Universidad de Pekín',
    answer: 'Son dos mitades de la cumbre académica de China, a 3 km la una de la otra en Haidian. Elige Tsinghua para ingeniería, informática y carreras tecnológicas; elige Pekín para humanidades, economía, ciencias y amplitud de investigación. La dificultad de admisión internacional es comparable — solicita a la que tu disciplina pide, no a la que dice un ranking.',
    entityA: 'Universidad de Tsinghua',
    entityB: 'Universidad de Pekín',
    pillar: 'education',
    updated: '2025-10-15',
    rows: [
      { label: 'Identidad', a: 'Supremacía en ingeniería y tecnología', b: 'Amplitud en humanidades, ciencias y políticas' },
      { label: 'Posición global (QS)', a: 'Top-25, ingeniería top-10', b: 'Top-15 general' },
      { label: 'Programas insignia para internacionales', a: 'CS/IA, ingeniería, Schwarzman, MBA', b: 'Economía, RRII, estudios chinos, Yenching' },
      { label: 'Carácter del campus', a: 'Colegiado de ladrillo rojo + labs modernos', b: 'Jardines imperiales, lago Weiming' },
      { label: 'Vecindad industrial', a: 'Zhongguancun: Baidu, ByteDance, MSR Asia', b: 'Think tanks, finanzas, vías gubernamentales' },
      { label: 'Cohorte internacional', a: '~3,000+ en grados', b: '~3,000+ en grados' },
      { label: 'Candidato ideal', a: 'Constructor/investigador STEM', b: 'Mente analista/política/humanidades' },
    ],
    verdict: {
      winner: 'La asignatura decide, no los rankings',
      text: 'Para ingeniería e informática, el poder de atracción de Tsinghua no tiene rival en Asia; para economía, relaciones internacionales, derecho o ciencias puras, ganan la profundidad de Pekín y su campus jardín. La dificultad de solicitud es comparable para estudiantes internacionales; las probabilidades de investigación mejoran notablemente en ambas con contacto previo con el supervisor — el trabajo que hacemos antes de que abran las solicitudes.',
    },
    body: [
      'La rivalidad es afectuosa y geográfica: los dos campus se miran a través de Haidian, y las familias chinas bromeaban sobre qué lado de la carretera Chengfu vive un hijo. Para los solicitantes internacionales la elección es menos tribal y más práctica — fuerza del departamento, oferta en inglés y red postgrado.',
      'Ambas universidades gestionan admisiones CSC Tipo B y becas universitarias (los premios presidenciales de Tsinghua; el Yenching y la financiación de escuelas de Pekín). Ambas esperan notas competitivas y, para títulos de investigación, contacto temprano con el supervisor. Ninguna es una «seguridad» para nadie.',
    ],
    faqs: [
      {
        question: '¿Cuál es más difícil de entrar para estudiantes internacionales?',
        answer: 'Comparable en general; dependiente de la asignatura en los bordes. El cupo de ingeniería/informática de Tsinghua es mínimo y feroz; las cohortes de economía y Yenching de Pekín son igual de selectivas. La admisión de investigación es ganable de forma realista en ambas con expedientes fuertes y respaldo de supervisor.',
      },
      {
        question: '¿Ofrecen ambas becas CSC?',
        answer: 'Sí — ambas son universidades designadas Tipo B, es decir, solicitas a través de la propia universidad (la vía directa). El canal gubernamental Tipo A va a través de tu ministerio o embajada de origen, no de la universidad. Las concesiones completas en cualquiera son competitivas sin importar las notas; solicita a ambas más una universidad asociada de alta probabilidad.',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'Flete marítimo vs aéreo: comparación de envíos de China a India',
    headline: 'Flete marítimo vs aéreo de China a India',
    answer: 'El mar gana en costo — 5–8× más barato por kg — y pierde en tiempo: 18–25 días puerto a puerto frente a 3–7 días puerta a puerta por aire. Envía por mar todo lo que no pierde dinero esperando; vuela los bienes de alta densidad de valor, los lanzamientos y los reemplazos urgentes. Para la mayoría de los programas de sourcing, la respuesta correcta es mar para el volumen más una ruta aérea permanente para emergencias.',
    entityA: 'Flete marítimo',
    entityB: 'Flete aéreo',
    pillar: 'trade',
    updated: '2025-10-20',
    rows: [
      { label: 'Tránsito (China → India)', a: '18–25 días puerto a puerto + aduanas', b: '3–7 días puerta a puerta' },
      { label: 'Costo relativo', a: '1× (línea base)', b: '5–8× por kg' },
      { label: 'Mejor para', a: 'Volumen, reabastecimiento, baja densidad de valor', b: 'Lanzamientos, muestras, repuestos, electrónica' },
      { label: 'Modos', a: 'LCL (compartido) o FCL 20ft/40ft', b: 'Consol o directo, reglas de peso cobrable' },
      { label: 'Intensidad de carbono', a: 'La más baja por tonelada-km', b: 'Alta — 20×+ el mar por tonelada-km' },
      { label: 'Riesgo principal', a: 'Congestión portuaria, salidas canceladas (Golden Week)', b: 'Picos de precios de capacidad (temporada de ferias)' },
      { label: 'Forma del flujo de caja', a: 'Rotación lenta de inventario, menor gasto de flete', b: 'Rotación rápida, P&L cargado de flete' },
    ],
    verdict: {
      winner: 'Mar para volumen, aire para velocidad',
      text: 'Opera el régimen por defecto en mar — LCL para pruebas bajo ~12–15 CBM, FCL a escala — y mantén una ruta aérea definida para lanzamientos y quiebres de stock. El cálculo que importa no es el costo de flete por kg sino el costo puesto en destino por unidad contra tu velocidad de venta; nuestra mesa modela ambos antes de que te comprometas.',
    },
    body: [
      'Los pares de puertos importan tanto como el modo: Guangzhou/Shenzhen a Mundra o JNPT es el corredor de trabajo (18–25 días), con Shanghai/Ningbo añadiendo 2–3 días. El aire va vía PVG/CAN a DEL/BOM en 3–7 días puerta a puerta incluyendo despacho.',
      'Los riesgos de calendario son estacionales: las cancelaciones de la Golden Week comprimen la capacidad marítima cada octubre, mientras las semanas de la Canton Fair y la carrera previa al Año Nuevo chino disparan las tarifas aéreas. Construye stock colchón en torno a esas ventanas en vez de pagar primas spot.',
    ],
    faqs: [
      {
        question: '¿Cuándo tiene sentido el flete aéreo de China a India?',
        answer: 'Tres casos: stock de lanzamiento que debe llegar a una fecha de mercado, bienes de alta densidad de valor donde el flete es una pequeña parte de la economía unitaria, y quiebres de stock de emergencia. Todo lo demás suele ir por mar.',
      },
      {
        question: '¿Cuánto más barato es el flete marítimo?',
        answer: 'Aproximadamente 5–8× más barato por kg que el aéreo en la ruta China–India, antes de los costos de mantener inventario. Para contenedores completos, el mar no es una comparación — es la única opción económica.',
      },
      {
        question: '¿LCL o FCL para un primer pedido?',
        answer: 'LCL para volúmenes de prueba (hasta ~12–15 CBM) — pagas solo el espacio que usas. Pasa a FCL cuando los volúmenes hagan ganar la matemática por unidad, típicamente a los 2–3 pedidos.',
      },
    ],
  },
];

/**
 * Slugs stay identical across locales (URLs are shared); en is the source
 * of truth and zh/fr/ar/es are machine-assisted translations pending
 * native-speaker review — same comparison count and order, same row and
 * FAQ counts, identical slug/pillar/updated/figures.
 */
export const COMPARISONS: Record<Locale, Comparison[]> = {
  en: COMPARISONS_EN,
  zh: COMPARISONS_ZH,
  fr: COMPARISONS_FR,
  ar: COMPARISONS_AR,
  es: COMPARISONS_ES,
};
