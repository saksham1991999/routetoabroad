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
  pillar: 'education' | 'trade' | 'tourism';
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
    updated: '2026-11-05',
    rows: [
      { label: 'Tuition (per year)', a: 'US$3,500–8,000 (MOE-listed)', b: 'Government: ₹10k–1L · Private: ₹8–20L' },
      { label: 'Total programme cost', a: 'US$38.5–83k all-in (5.5 yrs)', b: 'Govt: ₹5–10L · Private: ₹60L–1Cr+' },
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
      text: 'Government MBBS seat in India → take it, full stop. No government seat and budget-tight → MOE-listed China beats any private Indian seat on cost with comparable recognition effort (FMGE for China graduates; India graduates register through NExT). Paying ₹1Cr privately with funds available and no appetite for abroad adjustment → private India remains rational. The two failure modes to avoid: unlisted Chinese universities, and choosing China while ignoring HSK and FMGE preparation.',
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
    updated: '2026-11-05',
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
    updated: '2026-11-05',
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
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'MBBS in China vs Kyrgyzstan: Teaching, Recognition & Cost',
    headline: 'MBBS in China vs Kyrgyzstan',
    answer:
      'Choose China if you can afford US$38–65k all-in and want larger teaching hospitals, stronger research campuses, and MOE-listed English-medium tracks. Kyrgyzstan is cheaper on tuition (often US$22–32k total), but clinical exposure, FMGE pass consistency, and hospital volume vary sharply across private academies.',
    entityA: 'MBBS in China',
    entityB: 'MBBS in Kyrgyzstan',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Total 5.5–6 yr cost', a: 'US$38.5–65k (MOE-listed public)', b: 'US$22–32k (mostly private)' },
      { label: 'Hospital scale', a: '1,500–3,000+ bed affiliated teaching hospitals', b: 'Smaller municipal/private clinics shared across cohorts' },
      { label: 'FMGE / NExT track record', a: 'Higher at established MOE-listed public schools', b: 'Uneven across newer private campuses' },
      { label: 'Language requirement', a: 'English + HSK 4 for clinical communication', b: 'English + Russian/Kyrgyz for ward interaction' },
      { label: 'Infrastructure & dorms', a: 'Purpose-built international campuses, high-speed rail', b: 'Variable by city; Bishkek/Osh concentrated' },
      { label: 'Scholarship access', a: 'CSC & provincial/university awards available', b: 'Limited; mostly self-funded' },
    ],
    verdict: {
      winner: 'China for clinical depth; Kyrgyzstan only on strict budget',
      text: 'If your family budget stretches to US$40k+, MOE-listed Chinese public universities deliver markedly stronger hospital volume, lab infrastructure, and campus safety. Kyrgyzstan only makes sense when budget is strictly capped under US$30k and you vet the specific university’s NMC compliance and clinical rotation schedule.',
    },
    body: [
      'Both destinations attract international medical applicants seeking an English-taught degree without private-college capitation fees, yet their university ecosystems are built very differently.',
      'China’s 45+ MOE-listed medical universities are large, state-funded comprehensive or medical institutions with multi-thousand-bed affiliated hospitals. Kyrgyzstan’s international MBBS intake is concentrated in smaller private medical academies where clinical rotations can be crowded.',
    ],
    faqs: [
      {
        question: 'Is MBBS in Kyrgyzstan cheaper than China?',
        answer: 'Yes on sticker tuition — typically US$22–32k total versus US$38.5–65k at MOE-listed Chinese public universities. However, factor in FMGE coaching, winter heating, and clinical quality.',
      },
      {
        question: 'Which has better hospital exposure?',
        answer: 'China’s Tier-1 and Tier-2 provincial medical universities operate massive Class-3A affiliated hospitals with high patient volume, provided you learn basic conversational Mandarin (HSK 4).',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'CSC Type A vs Type B Scholarship: Which Route Should You Take?',
    headline: 'CSC Type A vs Type B Scholarship',
    answer:
      'Apply through Type B (university direct) if you want higher agency-level control, faster supervisor alignment, and the ability to target specific top universities directly. Type A runs through your home-country embassy or ministry, has stricter national quotas, and limits you to bilateral nominating slots.',
    entityA: 'CSC Type A (Embassy)',
    entityB: 'CSC Type B (University)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Application channel', a: 'Home-country embassy / education ministry', b: 'Directly through the Chinese university portal' },
      { label: 'Target degrees', a: 'Bachelor, Master, PhD & visiting scholars', b: 'Primarily Master & PhD (plus select Bachelor tracks)' },
      { label: 'Agency number', a: 'Embassy / dispatching authority code', b: 'University-specific 5-digit agency code' },
      { label: 'University choices', a: 'Up to 3 preferences (not guaranteed)', b: '1 primary university per Type B slot' },
      { label: 'Deadline window', a: 'Typically Jan–Feb (set by home embassy)', b: 'Typically Dec–Mar (set by each university)' },
      { label: 'Acceptance letter impact', a: 'Helpful, still subject to national quota', b: 'Decisive — pre-admission & supervisor backing rule' },
    ],
    verdict: {
      winner: 'Type B for postgraduate control; Type A for undergraduates',
      text: 'Undergraduate applicants outside special bilateral programmes usually need Type A or provincial/university scholarships, because Type B mostly funds Master’s and PhD candidates. For Master’s and PhD, Type B is faster and rewards direct supervisor outreach.',
    },
    body: [
      'Both Type A and Type B award the same Chinese Government Scholarship benefits: full tuition waiver, free campus dorm or housing stipend, comprehensive medical insurance, and a monthly living stipend (¥2,500–3,500 depending on degree level).',
      'What differs is the gatekeeper. Type A passes through a national nominating body in your home country before reaching the CSC; Type B lets the Chinese university nominate you directly once its admissions committee approves your file.',
    ],
    faqs: [
      {
        question: 'Can I apply to both CSC Type A and Type B in the same year?',
        answer: 'Yes, you may submit Type A via your embassy and Type B to a university, though CSC rules only allow you to hold one final scholarship award.',
      },
      {
        question: 'Do I need a pre-admission letter for Type B?',
        answer: 'At almost all competitive universities, yes — securing supervisor acceptance and a university pre-admission notice dramatically raises Type B conversion odds.',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'China vs Japan Travel: Costs, Visas, Transport & Itinerary Fit',
    headline: 'China vs Japan for Travellers',
    answer:
      'Pick Japan for effortless first-time East Asia travel, rail precision, and compact 7–12 day cultural loops. Pick China for vast scale, lower daily on-ground costs, dramatic landscapes from Guilin to Xi’an, and deep imperial and modern contrast — once visa and payment setup are handled in advance.',
    entityA: 'China Travel',
    entityB: 'Japan Travel',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'Typical daily budget', a: 'US$45–120/day (mid-range)', b: 'US$85–220/day (mid-range)' },
      { label: 'Rail network', a: 'World’s largest HSR network; passport-linked e-tickets', b: 'Shinkansen & IC cards; seamless English signage' },
      { label: 'Payments & apps', a: 'Alipay / WeChat Pay linked to foreign cards', b: 'Credit cards, Suica/PASMO & cash' },
      { label: 'Visa friction', a: 'L visa required for most passports (or 15–30d exemptions)', b: 'eVisa / sticker visa or visa-waiver by passport' },
      { label: 'Best trip length', a: '10–14 days (2–3 regions)', b: '7–12 days (Golden Route: Tokyo–Kyoto–Osaka)' },
      { label: 'Language barrier', a: 'High outside Tier-1 hotels; translation app essential', b: 'Moderate; strong transit & station English signage' },
    ],
    verdict: {
      winner: 'Japan for ease; China for scale & value',
      text: 'Japan is the smoother first trip if you want minimal digital setup and compact distances. China delivers twice the geographic variety per dollar — ancient capitals, karst rivers, megacities — when paired with pre-configured Alipay/WeChat, eSIMs, and rail bookings.',
    },
    body: [
      'Travellers often debate China versus Japan as if they compete on the same axis. In practice, Japan excels at refinement, punctuality, and walkable neighbourhood density, while China excels at monumental scale and regional diversity.',
      'With foreign cards now linkable inside Alipay and WeChat Pay and high-speed rail connecting Beijing, Xi’an, Chengdu, Guilin, and Shanghai, China has become far easier to navigate when prepared properly before departure.',
    ],
    faqs: [
      {
        question: 'Which country is cheaper to visit: China or Japan?',
        answer: 'China is typically 35–45% cheaper on hotels, domestic high-speed rail, and everyday dining compared with Tokyo and Kyoto.',
      },
      {
        question: 'Can you combine China and Japan in one trip?',
        answer: 'Yes — Shanghai or Beijing to Tokyo or Osaka is a 2.5–3.5 hour flight, making a 14-day two-country East Asia itinerary straightforward.',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'LCL vs FCL China Shipping: Break-Even Volume & Cost Guide',
    headline: 'LCL vs FCL Shipping from China',
    answer:
      'Use LCL (Less than Container Load) for trial orders and shipments under ~12–15 CBM so you pay only for the cubic metres you use. Switch to a 20ft FCL container once cargo reaches 14–16+ CBM, where flat container pricing beats per-CBM consolidation fees and cuts handling damage.',
    entityA: 'LCL (Shared Container)',
    entityB: 'FCL (Full Container)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'Ideal shipment size', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'Pricing model', a: 'Per CBM / tonne + destination CFS fees', b: 'Flat rate per container' },
      { label: 'Door-to-door speed', a: '+3–5 days for consolidation & deconsolidation', b: 'Faster port turnaround, sealed factory-to-port' },
      { label: 'Damage & pilferage risk', a: 'Higher (shared handling at CFS warehouses)', b: 'Lower (sealed at supplier or consolidation hub)' },
      { label: 'Destination charges', a: 'High per-CBM CFS/deconsolidation surprises if unquoted', b: 'Predictable per-container THC & clearance' },
    ],
    verdict: {
      winner: 'LCL under ~13 CBM; FCL from 14–15 CBM upward',
      text: 'Do not book FCL for a 5 CBM sample batch, and do not ship 16 CBM on LCL — destination CFS fees will wipe out the apparent savings. Always compare total landed quote (origin + freight + destination THC/CFS) rather than ocean freight alone.',
    },
    body: [
      'New importers often look only at the ocean-freight line item and miss destination Container Freight Station (CFS) charges on LCL shipments. Around 13–15 CBM, a 20ft FCL container usually becomes cheaper all-in while eliminating co-loading delays.',
      'For multi-supplier buyers, a middle path exists: consolidate goods from 2–3 Chinese factories into one Guangzhou or Yiwu warehouse and dispatch a single sealed FCL container.',
    ],
    faqs: [
      {
        question: 'At how many CBM does FCL become cheaper than LCL?',
        answer: 'Typically between 13 and 15 CBM for a 20ft container, once destination CFS and handling fees are included in the comparison.',
      },
      {
        question: 'Can I mix multiple suppliers in one FCL container?',
        answer: 'Yes — buyer’s consolidation in Guangzhou, Shenzhen, or Yiwu lets you combine cartons from multiple factories into a single sealed FCL.',
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
    updated: '2026-11-05',
    rows: [
      { label: '学费（每年）', a: 'US$3,500–8,000（教育部名单院校）', b: '公办：₹10k–1L · 私立：₹8–20L' },
      { label: '项目总花费', a: 'US$38.5–83k 全包（5.5 年）', b: '公办：₹5–10L · 私立：₹60L–1Cr+' },
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
      text: '印度的公办 MBBS 名额 → 直接拿下，不犹豫。没有公办名额且预算紧张 → 就认证所需的同等努力（中国毕业生需通过 FMGE，印度毕业生走 NExT）而言，教育部名单上的中国在成本上胜过任何印度私立名额。资金充裕、无意适应国外生活、却要为私立名额支付 ₹1Cr → 印度私立仍是理性选择。要避免的两种失败模式：未上榜的中国大学，以及选了中国却忽视 HSK 和 FMGE 备考。',
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
    updated: '2026-11-05',
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
    updated: '2026-11-05',
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
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: '中国 MBBS 对比吉尔吉斯斯坦：教学、认证与费用',
    headline: '中国 MBBS 对比吉尔吉斯斯坦',
    answer:
      '如果预算能覆盖 US$38–65k 全包，选中国——更大的附属教学医院、更强的科研校园和教育部名单英语授课项目。吉尔吉斯斯坦学费更低（总计常在 US$22–32k），但私立医学院之间的临床轮转、FMGE 通过率稳定性与医院接诊量差异很大。',
    entityA: '中国 MBBS',
    entityB: '吉尔吉斯斯坦 MBBS',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: '5.5–6 年总花费', a: 'US$38.5–65k（教育部名单公办）', b: 'US$22–32k（多为私立）' },
      { label: '医院规模', a: '1,500–3,000+ 床位附属教学医院', b: '规模较小的市立/私立诊所共用' },
      { label: 'FMGE / NExT 记录', a: '老牌教育部名单公办院校表现更稳', b: '新建私立校区之间差异明显' },
      { label: '语言要求', a: '英语 + 临床沟通需 HSK 4', b: '英语 + 病房沟通需俄语/吉尔吉斯语' },
      { label: '校园与宿舍', a: '专用国际生校园、高铁互联', b: '因城市而异，集中在比什凯克/奥什' },
      { label: '奖学金渠道', a: '可申请 CSC 及省校级奖学金', b: '极少，基本全自费' },
    ],
    verdict: {
      winner: '临床深度选中国；仅极严预算选吉尔吉斯斯坦',
      text: '若家庭预算可到 US$40k 以上，教育部名单中国公办大学在医院病源、实验设施和校园安全上明显更强。只有预算严格封顶在 US$30k 以内且逐校核实 NMC 合规与临床轮转时，吉尔吉斯斯坦才值得考虑。',
    },
    body: [
      '两个目的地都吸引希望避开高额捐资费、寻找英语授课医学学位的国际学生，但两国的大学体系截然不同。',
      '中国 45+ 所教育部名单医学院校均为大型公办大学，配有多千张床位的三甲附属医院；吉尔吉斯斯坦的国际 MBBS 生源则集中在规模较小的私立医学院。',
    ],
    faqs: [
      {
        question: '吉尔吉斯斯坦 MBBS 比中国更便宜吗？',
        answer: '账面学费确实更低——通常总计 US$22–32k，对比中国教育部名单公办大学的 US$38.5–65k。但需同时计入考证辅导、冬季取暖和临床质量差异。',
      },
      {
        question: '哪边的医院临床接触更好？',
        answer: '中国一二线省属医科大学拥有大型三甲附属医院，只要掌握基础中文沟通（HSK 4），病源与病例数非常充足。',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'CSC Type A 对比 Type B 奖学金：应该走哪条通道？',
    headline: 'CSC Type A 对比 Type B 奖学金',
    answer:
      '如果你想直接对接目标名校、更快锁定导师并掌握申请主动权，选 Type B（高校直招通道）。Type A 需经本国使馆或教育部提名，配额更紧，且受限于双边政府名额。',
    entityA: 'CSC Type A（使馆通道）',
    entityB: 'CSC Type B（高校直招）',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: '申请渠道', a: '本国驻华使馆 / 教育部派遣机构', b: '直接通过中国高校国际生系统申请' },
      { label: '适用学位', a: '本科、硕士、博士及进修生', b: '主要面向硕士与博士（含部分本科项目）' },
      { label: '机构代码', a: '使馆 / 派遣机构代码', b: '各高校专属 5 位数字机构代码' },
      { label: '志愿数量', a: '最多 3 所志愿（不保证录取）', b: '每个 Type B 名额对应 1 所主申高校' },
      { label: '截止时间', a: '通常 1–2 月（由使馆决定）', b: '通常 12–3 月（由各高校决定）' },
      { label: '预录取/导师信作用', a: '有帮助，但仍受国家总配额限制', b: '关键决定因素——预录取与导师背书占主导' },
    ],
    verdict: {
      winner: '硕博优先 Type B；本科多走 Type A',
      text: '非双边专项下的本科生通常需要依赖 Type A 或省校级奖学金；硕博申请人走 Type B 路径更清晰，提前套磁导师能显著提高中标率。',
    },
    body: [
      'Type A 和 Type B 提供的中国政府奖学金待遇完全一致：免学费、免费校内宿舍或住宿补贴、综合医疗保险及每月生活费（¥2,500–3,500，按学历层次）。',
      '真正不同的是初审把关人：Type A 先由本国派遣机构筛选再报送 CSC，而 Type B 由中国大学招生委员会审核后直接向 CSC 推荐。',
    ],
    faqs: [
      {
        question: '同一年可以同时申请 CSC Type A 和 Type B 吗？',
        answer: '可以分别通过使馆与高校提交申请，但按照 CSC 规定，最终只能保留一项奖学金录取资格。',
      },
      {
        question: '申请 Type B 必须要有预录取通知书吗？',
        answer: '在绝大多数热门高校几乎是必须条件——获得导师接收函与高校预录取通知书能大幅提升 Type B 成功率。',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: '中国旅游对比日本旅游：预算、签证、交通与行程匹配',
    headline: '中国 vs 日本旅行对比',
    answer:
      '如果是首次东亚自由行、追求极简交通与 7–12 天紧凑文化环线，选日本。如果想要更震撼的地理尺度、更低的每日花销以及从桂林山水到西安古都的厚重反差，选中国——只需提前配置好签证与移动支付。',
    entityA: '中国旅行',
    entityB: '日本旅行',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: '日均中等预算', a: 'US$45–120/天', b: 'US$85–220/天' },
      { label: '铁路网络', a: '全球最大高铁网；护照直刷电子票', b: '新干线与交通卡；英文标识完善' },
      { label: '支付方式', a: '支付宝 / 微信绑定外卡', b: '信用卡、Suica/PASMO 与现金' },
      { label: '签证门槛', a: '多数护照需 L 签（或 15–30 天免签）', b: '电子签 / 贴纸签或按护照免签' },
      { label: '建议行程天数', a: '10–14 天（2–3 个区域）', b: '7–12 天（东京–京都–大阪黄金线）' },
      { label: '语言环境', a: '一线酒店外英文有限；需翻译软件', b: '中等；车站与景区英文标识友好' },
    ],
    verdict: {
      winner: '省心选日本；尺度与性价比选中国',
      text: '日本在行前准备上最省心、动线紧凑；中国则在同等预算下提供翻倍的地理跨度与古今反差，只要行前备好支付宝外卡、eSIM 与高铁车票即可顺畅出行。',
    },
    body: [
      '日本强在精细度、准点率与步行街区密度，中国则强在宏大尺度与跨区域多样性。',
      '如今外卡已可直接绑定支付宝与微信支付，北京、西安、成都、桂林与上海之间高铁密布，行前准备到位后中国自由行同样顺畅。',
    ],
    faqs: [
      {
        question: '中国和日本哪个旅游更省钱？',
        answer: '相比东京与京都，中国在酒店、高铁和日常餐饮上通常便宜 35–45%。',
      },
      {
        question: '一次行程可以同时玩中国和日本吗？',
        answer: '完全可以——上海或北京飞往东京、大阪仅需 2.5–3.5 小时，14 天串联两国非常成熟。',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: '中国海运拼箱 LCL 对比整柜 FCL：盈亏平衡点与成本指南',
    headline: '中国海运 LCL 对比 FCL',
    answer:
      '试单及 ~12–15 CBM 以下的货物选 LCL（拼箱），只为实际占用的立方米付费。一旦货量达到 14–16+ CBM，立即切换到 20 尺 FCL 整柜——整柜包干价不仅低于按方计费的拆箱费，还能显著降低货损率。',
    entityA: 'LCL（拼箱）',
    entityB: 'FCL（整柜）',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: '适用货量', a: '1–13 CBM', b: '14–28 CBM（20ft）· 30–65 CBM（40ft/HQ）' },
      { label: '计费模式', a: '按 CBM/吨 + 目的港 CFS 拆箱费', b: '按整柜一口价' },
      { label: '门到门时效', a: '需多出 3–5 天用于集货与拆箱', b: '港区周转更快，工厂铅封直达目的港' },
      { label: '货损与丢件风险', a: '较高（CFS 仓库多次混装搬运）', b: '较低（工厂或集货仓直接铅封）' },
      { label: '目的港杂费', a: '未提前锁价时容易出现高额 CFS 拆箱费', b: 'THC 与清关费用结构可预期' },
    ],
    verdict: {
      winner: '~13 CBM 以下用 LCL；14–15 CBM 起转 FCL',
      text: '5 CBM 的试单别硬订整柜，16 CBM 的货也别走拼箱——目的港 CFS 费用会吃掉表面省下的运费。对比报价时务必看“起运港+海运+目的港 THC/CFS”全包落地价。',
    },
    body: [
      '新进口商常只盯海运费单价而忽略目的港拼箱仓库（CFS）收费。到 13–15 CBM 左右，20 尺整柜的全包成本通常会反超拼箱并省去等柜拆箱时间。',
      '多工厂采购时，可将 2–3 家中国工厂的货先集运至广州或义乌仓库，再打成一票铅封整柜发出。',
    ],
    faqs: [
      {
        question: '多少立方米开始 FCL 比 LCL 更划算？',
        answer: '计入目的港 CFS 与操作费后，通常在 13–15 CBM 左右，20 尺整柜开始比拼箱更划算。',
      },
      {
        question: '多家供应商的货可以装进同一个 FCL 整柜吗？',
        answer: '可以——通过广州、深圳或义乌的买家集货仓，把多家工厂纸箱合并为一个铅封整柜发运。',
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
    updated: '2026-11-05',
    rows: [
      { label: 'Frais de scolarité (par an)', a: 'US$3,500–8,000 (universités listées MOE)', b: 'Public : ₹10k–1L · Privé : ₹8–20L' },
      { label: 'Coût total du cursus', a: 'US$38.5–83k tout compris (5.5 ans)', b: 'Public : ₹5–10L · Privé : ₹60L–1Cr+' },
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
      text: 'Place publique de MBBS en Inde → prenez-la, point. Pas de place publique et budget serré → la Chine listée MOE bat toute place privée indienne sur le coût, à effort de reconnaissance comparable (FMGE pour les diplômés de Chine ; les diplômés indiens s’inscrivent via le NExT). Payer ₹1Cr en privé avec des fonds disponibles et aucune envie d’adaptation à l’étranger → le privé en Inde reste rationnel. Les deux échecs à éviter : les universités chinoises non listées, et choisir la Chine en ignorant la préparation HSK et FMGE.',
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
    updated: '2026-11-05',
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
    updated: '2026-11-05',
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
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'MBBS en Chine vs Kirghizistan : enseignement, reconnaissance et coût',
    headline: 'MBBS en Chine vs Kirghizistan',
    answer:
      'Choisissez la Chine si votre budget atteint US$38–65k tout compris et que vous voulez de grands CHU, des campus publics solides et des cursus anglophones listés par le MOE. Le Kirghizistan coûte moins cher (souvent US$22–32k au total), mais l’exposition clinique et la régularité au FMGE varient fortement entre académies privées.',
    entityA: 'MBBS en Chine',
    entityB: 'MBBS au Kirghizistan',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Coût total 5,5–6 ans', a: 'US$38,5–65k (publics listés MOE)', b: 'US$22–32k (majoritairement privés)' },
      { label: 'Taille des hôpitaux', a: 'CHU affiliés de 1 500–3 000+ lits', b: 'Cliniques municipales/privées plus petites' },
      { label: 'Résultats FMGE / NExT', a: 'Plus réguliers dans les facultés publiques MOE', b: 'Inégaux selon les campus privés récents' },
      { label: 'Exigence linguistique', a: 'Anglais + HSK 4 pour les stages cliniques', b: 'Anglais + russe/kirghize en service' },
      { label: 'Infrastructures', a: 'Campus internationaux dédiés, TGV', b: 'Variable ; concentré à Bichkek/Och' },
      { label: 'Bourses', a: 'CSC et bourses provinciales/universitaires', b: 'Limitées ; quasi exclusivement autofinancé' },
    ],
    verdict: {
      winner: 'La Chine pour la clinique ; le Kirghizistan uniquement sous budget strict',
      text: 'Au-delà de US$40k de budget familial, les universités publiques chinoises listées MOE offrent nettement plus de volume hospitalier et d’encadrement. Le Kirghizistan n’a de sens que sous un plafond strict de US$30k après vérification minutieuse des rotations cliniques.',
    },
    body: [
      'Les deux destinations attirent les étudiants internationaux cherchant un cursus médical en anglais sans frais de capitation élevés, mais leurs écosystèmes universitaires diffèrent profondément.',
      'Les 45+ facultés chinoises listées par le MOE sont de grandes universités publiques dotées d’hôpitaux universitaires de plusieurs milliers de lits, tandis que l’offre internationale au Kirghizistan repose surtout sur de petites académies privées.',
    ],
    faqs: [
      {
        question: 'Le MBBS au Kirghizistan est-il moins cher qu’en Chine ?',
        answer: 'Oui sur les frais affichés : US$22–32k au total contre US$38,5–65k en université publique chinoise listée MOE, mais il faut intégrer la préparation aux examens et la qualité clinique.',
      },
      {
        question: 'Quel pays offre la meilleure exposition hospitalière ?',
        answer: 'Les universités médicales publiques chinoises gèrent d’immenses hôpitaux de classe 3A avec un fort flux de patients, à condition d’acquérir le niveau HSK 4.',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'Bourse CSC Type A vs Type B : quelle voie choisir ?',
    headline: 'Bourse CSC Type A vs Type B',
    answer:
      'Passez par le Type B (direct université) pour garder le contrôle, aligner un directeur de recherche plus vite et cibler directement une université précise. Le Type A passe par votre ambassade ou ministère national avec des quotas bilatéraux plus stricts.',
    entityA: 'CSC Type A (Ambassade)',
    entityB: 'CSC Type B (Université)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Canal de candidature', a: 'Ambassade / ministère de l’éducation du pays', b: 'Directement via le portail de l’université chinoise' },
      { label: 'Niveaux visés', a: 'Licence, Master, Doctorat et chercheurs', b: 'Principalement Master & Doctorat (et quelques Licences)' },
      { label: 'Numéro d’agence', a: 'Code de l’ambassade / autorité d’envoi', b: 'Code à 5 chiffres propre à l’université' },
      { label: 'Choix d’universités', a: 'Jusqu’à 3 vœux (non garantis)', b: '1 université principale par dossier Type B' },
      { label: 'Fenêtre de clôture', a: 'Souvent janv.–févr. (selon ambassade)', b: 'Souvent déc.–mars (selon université)' },
      { label: 'Impact lettre d’acceptation', a: 'Utile, mais soumis au quota national', b: 'Décisif — pré-admission et tuteur déterminants' },
    ],
    verdict: {
      winner: 'Type B pour Master/PhD ; Type A pour Licence',
      text: 'Les candidats en Licence hors accords spéciaux passent généralement par le Type A ou des bourses provinciales. En Master et Doctorat, le Type B est plus rapide et valorise le contact direct avec un superviseur.',
    },
    body: [
      'Type A et Type B financent exactement les mêmes prestations : exonération totale des frais de scolarité, logement universitaire, assurance médicale et allocation mensuelle (¥2 500–3 500 selon le cycle).',
      'La différence tient à l’organisme sélectionneur : autorité nationale pour le Type A, commission d’admission de l’université chinoise pour le Type B.',
    ],
    faqs: [
      {
        question: 'Puis-je postuler aux deux voies CSC Type A et Type B la même année ?',
        answer: 'Oui, vous pouvez soumettre un dossier Type A via votre ambassade et un Type B à une université, mais vous ne pourrez conserver qu’une seule bourse finale.',
      },
      {
        question: 'Faut-il une lettre de pré-admission pour le Type B ?',
        answer: 'Dans presque toutes les universités sélectives, oui : l’accord d’un superviseur et une pré-admission augmentent fortement vos chances.',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'Voyage Chine vs Japon : budget, visas, trains et itinéraire',
    headline: 'Chine vs Japon pour les voyageurs',
    answer:
      'Choisissez le Japon pour une première découverte fluide de l’Asie de l’Est, la précision du rail et une boucle compacte de 7–12 jours. Choisissez la Chine pour l’échelle grandiose, un budget quotidien plus doux et une diversité immense — une fois visa et paiements configurés avant le départ.',
    entityA: 'Voyage en Chine',
    entityB: 'Voyage au Japon',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'Budget quotidien moyen', a: 'US$45–120/jour', b: 'US$85–220/jour' },
      { label: 'Réseau ferroviaire', a: 'Plus grand réseau TGV mondial ; billet lié au passeport', b: 'Shinkansen & cartes IC ; signalétique anglaise claire' },
      { label: 'Paiements', a: 'Alipay / WeChat Pay liés aux cartes étrangères', b: 'Cartes bancaires, Suica/PASMO et espèces' },
      { label: 'Visa', a: 'Visa L requis pour la plupart (ou exemptions 15–30j)', b: 'eVisa / visa ou exemption selon passeport' },
      { label: 'Durée idéale', a: '10–14 jours (2–3 régions)', b: '7–12 jours (Tokyo–Kyoto–Osaka)' },
      { label: 'Barrière linguistique', a: 'Élevée hors hôtels internationaux ; traducteur utile', b: 'Modérée ; gares bien balisées en anglais' },
    ],
    verdict: {
      winner: 'Japon pour la simplicité ; Chine pour l’échelle et le rapport qualité-prix',
      text: 'Le Japon demande moins de préparation numérique et offre des distances compactes. La Chine offre le double de variété géographique par dollar dès que Alipay/WeChat, eSIM et billets de train sont prêts.',
    },
    body: [
      'Le Japon brille par son raffinement, sa ponctualité et ses quartiers piétons ; la Chine impressionne par son échelle monumentale et ses contrastes régionaux.',
      'Avec les cartes étrangères désormais acceptées dans Alipay et WeChat Pay et le réseau TGV reliant Pékin, Xi’an, Chengdu, Guilin et Shanghai, voyager en Chine est devenu bien plus accessible.',
    ],
    faqs: [
      {
        question: 'Quel pays coûte le moins cher à visiter : la Chine ou le Japon ?',
        answer: 'La Chine revient généralement 35–45% moins cher sur l’hôtellerie, le train à grande vitesse et les repas courants.',
      },
      {
        question: 'Peut-on combiner Chine et Japon en un seul voyage ?',
        answer: 'Oui — un vol Shanghai/Pékin vers Tokyo ou Osaka dure 2h30 à 3h30, ce qui permet un itinéraire combiné de 14 jours très fluide.',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'Fret maritime LCL vs FCL depuis la Chine : seuil de rentabilité',
    headline: 'LCL vs FCL depuis la Chine',
    answer:
      'Utilisez le LCL (groupage) pour les commandes d’essai sous ~12–15 CBM afin de ne payer que le volume occupé. Passez au conteneur complet FCL 20 pieds dès 14–16+ CBM : le tarif forfaitaire bat les frais de dégroupage à destination et réduit les avaries.',
    entityA: 'LCL (Groupage)',
    entityB: 'FCL (Conteneur complet)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'Volume idéal', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'Tarification', a: 'Au CBM / tonne + frais CFS à destination', b: 'Forfait par conteneur' },
      { label: 'Délai porte-à-porte', a: '+3–5 jours pour empotage et dégroupage', b: 'Rotation portuaire plus rapide, scellé d’usine' },
      { label: 'Risque de casse', a: 'Plus élevé (manipulations multiples en entrepôt CFS)', b: 'Plus faible (scellé chez le fournisseur ou hub)' },
      { label: 'Frais à l’arrivée', a: 'Surprises fréquentes sur les frais CFS/CBM', b: 'THC et dédouanement par conteneur prévisibles' },
    ],
    verdict: {
      winner: 'LCL sous ~13 CBM ; FCL à partir de 14–15 CBM',
      text: 'Ne réservez pas un FCL pour 5 CBM, et n’expédiez pas 16 CBM en LCL : les frais CFS à destination annulent l’économie apparente. Comparez toujours le coût rendu complet.',
    },
    body: [
      'Les nouveaux importateurs regardent souvent uniquement le fret maritime de base et oublient les frais de station CFS à l’arrivée sur le LCL. Vers 13–15 CBM, un 20ft FCL devient moins cher tout compris.',
      'Pour les acheteurs multi-fournisseurs, il est possible de consolider 2–3 usines à Guangzhou ou Yiwu dans un seul conteneur FCL scellé.',
    ],
    faqs: [
      {
        question: 'À partir de combien de CBM le FCL devient-il moins cher que le LCL ?',
        answer: 'En général entre 13 et 15 CBM pour un conteneur de 20 pieds, une fois les frais CFS et de manutention à destination inclus.',
      },
      {
        question: 'Peut-on regrouper plusieurs fournisseurs dans un seul FCL ?',
        answer: 'Oui — la consolidation acheteur à Guangzhou, Shenzhen ou Yiwu permet de réunir plusieurs usines dans un même conteneur scellé.',
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
    updated: '2026-11-05',
    rows: [
      { label: 'الرسوم الدراسية (سنويًا)', a: 'US$3,500–8,000 (جامعات مدرجة على قائمة MOE)', b: 'حكومي: ₹10k–1L · خاص: ₹8–20L' },
      { label: 'إجمالي تكلفة البرنامج', a: 'US$38.5–83k شاملًا (5.5 سنوات)', b: 'حكومي: ₹5–10L · خاص: ₹60L–1Cr+' },
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
      text: 'مقعد MBBS حكومي في الهند → خذه، نقطة. لا مقعد حكومي والميزانية ضيقة → الصين المدرجة على قائمة MOE تتفوق على أي مقعد هندي خاص في التكلفة بمجهود اعتراف مماثل (FMGE لخريجي الصين؛ أما خريجو الهند فيسجلون عبر NExT). دفع ₹1Cr خاصًا مع توفر الأموال ولا رغبة في التأقلم بالخارج → الخاص في الهند يبقى خيارًا عقلانيًا. نمطا الفشل اللذان يجب تجنبهما: الجامعات الصينية غير المدرجة، واختيار الصين مع إهمال التحضير لـHSK وFMGE.',
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
    updated: '2026-11-05',
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
    updated: '2026-11-05',
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
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'دراسة الطب MBBS في الصين مقابل قيرغيزستان: التكلفة والاعتماد',
    headline: 'MBBS في الصين مقابل قيرغيزستان',
    answer:
      'اختر الصين إذا كانت ميزانيتك تسمح بـ US$38–65k إجمالاً وتريد مستشفيات تعليمية أكبر وحرماً جامعياً حكومياً مدرجاً لدى وزارة التعليم الصينية (MOE). قيرغيزستان أقل تكلفة في الرسوم (غالباً US$22–32k إجمالاً)، لكن التدريب السريري وثبات نتائج FMGE يتفاوتان بشدة بين الأكاديميات الخاصة.',
    entityA: 'MBBS في الصين',
    entityB: 'MBBS في قيرغيزستان',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'التكلفة الإجمالية لـ 5.5–6 سنوات', a: 'US$38.5–65k (حكومية مدرجة لدى MOE)', b: 'US$22–32k (معظمها خاصة)' },
      { label: 'حجم المستشفيات', a: 'مستشفيات جامعية بسعة 1,500–3,000+ سرير', b: 'عيادات بلدية/خاصة أصغر حجماً' },
      { label: 'نتائج FMGE / NExT', a: 'أعلى استقراراً في الجامعات الحكومية العريقة', b: 'متفاوتة بين الكليات الخاصة الحديثة' },
      { label: 'متطلب اللغة', a: 'الإنجليزية + HSK 4 للتواصل السريري', b: 'الإنجليزية + الروسية/القيرغيزية في الأقسام' },
      { label: 'البنية التحتية والسكن', a: 'حرم دولي مجهز وشبكة قطارات سريعة', b: 'متفاوتة؛ تتركز في بيشكيك وأوش' },
      { label: 'المنح الدراسية', a: 'منح CSC ومنح المقاطعات والجامعات متاحة', b: 'محدودة؛ تمويل ذاتي في الغالب' },
    ],
    verdict: {
      winner: 'الصين للعمق السريري؛ قيرغيزستان للميزانية المحدودة فقط',
      text: 'إذا وصلت ميزانية الأسرة إلى US$40k فأكثر، تقدم الجامعات الحكومية الصينية المدرجة لدى MOE حجماً مستشفياً وبنية بحثية أقوى بوضوح. قيرغيزستان تناسب فقط سقف ميزانية صارم دون US$30k مع فحص دقيق لجدول التدريب السريري.',
    },
    body: [
      'تجذب الوجهتان الطلاب الباحثين عن دراسة الطب بالإنجليزية دون رسوم الكليات الخاصة الباهظة، لكن البنية الجامعية في البلدين مختلفة تماماً.',
      'تضم قائمة MOE في الصين أكثر من 45 جامعة طبية حكومية كبرى بمستشفيات تعليمية ضخمة، بينما يتركز القبول الدولي في قيرغيزستان في أكاديميات طبية خاصة أصغر.',
    ],
    faqs: [
      {
        question: 'هل دراسة الطب في قيرغيزستان أرخص من الصين؟',
        answer: 'نعم في الرسوم المعلنة — عادة US$22–32k إجمالاً مقابل US$38.5–65k في الجامعات الحكومية الصينية المدرجة لدى MOE، لكن يجب احتساب جودة التدريب والتحضير لاختبارات الترخيص.',
      },
      {
        question: 'أيهما يوفر تدريباً مستشفياً أفضل؟',
        answer: 'الجامعات الطبية الحكومية الصينية تدير مستشفيات من الفئة 3A بكثافة مرضى عالية، بشرط تعلم الصينية الأساسية (HSK 4).',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'منحة CSC Type A مقابل Type B: أي مسار تختار؟',
    headline: 'منحة CSC Type A مقابل Type B',
    answer:
      'تقدّم عبر Type B (مباشرة عبر الجامعة) إذا أردت تحكماً أكبر في اختيار الجامعة وتنسيقاً أسرع مع المشرف الأكاديمي. أما Type A فيمر عبر سفارة بلدك أو وزارة التعليم بحصص وطنية أكثر صرامة.',
    entityA: 'CSC Type A (السفارة)',
    entityB: 'CSC Type B (الجامعة)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'قناة التقديم', a: 'سفارة بلدك / وزارة التعليم', b: 'مباشرة عبر بوابة الجامعة الصينية' },
      { label: 'الدرجات المستهدفة', a: 'بكالوريوس، ماجستير، دكتوراه وباحثون', b: 'أساساً ماجستير ودكتوراه (وبعض برامج البكالوريوس)' },
      { label: 'رقم الوكالة', a: 'رمز السفارة / جهة الإيفاد', b: 'رمز الجامعة المكون من 5 أرقام' },
      { label: 'خيارات الجامعات', a: 'حتى 3 رغبات (غير مضمونة)', b: 'جامعة رئيسية واحدة لكل طلب Type B' },
      { label: 'نافذة الإغلاق', a: 'غالباً يناير–فبراير (تحدده السفارة)', b: 'غالباً ديسمبر–مارس (تحدده الجامعة)' },
      { label: 'أثر خطاب القبول', a: 'مفيد لكنه خاضع للحصة الوطنية', b: 'حاسم — القبول المبدئي ودعم المشرف أساسيان' },
    ],
    verdict: {
      winner: 'Type B للدراسات العليا؛ Type A للبكالوريوس',
      text: 'متقدمو البكالوريوس خارج البرامج الثنائية الخاصة يعتمدون غالباً على Type A أو منح المقاطعات. أما لطلبة الماجستير والدكتوراه فمسار Type B أسرع ويكافئ التواصل المبكر مع المشرف.',
    },
    body: [
      'يمنح كل من Type A وType B نفس مزايا منحة الحكومة الصينية: إعفاء كامل من الرسوم، سكن جامعي، تأمين طبي، ومخصص شهري (¥2,500–3,500 حسب الدرجة).',
      'الاختلاف في جهة الفرز الأولى: تمر Type A عبر جهة الترشيح الوطنية في بلدك، بينما ترشحك الجامعة الصينية مباشرة في Type B.',
    ],
    faqs: [
      {
        question: 'هل يمكنني التقديم على Type A وType B في نفس السنة؟',
        answer: 'نعم يمكنك التقديم في المسارين، لكن قواعد CSC تسمح بالاحتفاظ بمنحة واحدة فقط عند القبول النهائي.',
      },
      {
        question: 'هل أحتاج خطاب قبول مبدئي لمسار Type B؟',
        answer: 'في معظم الجامعات التنافسية نعم — الحصول على موافقة مشرف وإشعار قبول مبدئي يرفع فرص القبول بشكل كبير.',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'السفر إلى الصين مقابل اليابان: التكلفة والتأشيرة والقطارات',
    headline: 'الصين مقابل اليابان للمسافرين',
    answer:
      'اختر اليابان لأول رحلة سلسة في شرق آسيا مع دقة القطارات ومسار مدمج لـ 7–12 يوماً. واختر الصين للاتساع الجغرافي والتكلفة اليومية الأقل والتنوع التاريخي والطبيعي — بعد تجهيز التأشيرة وتطبيقات الدفع مسبقاً.',
    entityA: 'السفر إلى الصين',
    entityB: 'السفر إلى اليابان',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'الميزانية اليومية المتوسطة', a: 'US$45–120/يوم', b: 'US$85–220/يوم' },
      { label: 'شبكة القطارات', a: 'أكبر شبكة قطارات فائقة السرعة؛ تذاكر بالجواز', b: 'شينكانسن وبطاقات IC؛ لوحات إنجليزية واضحة' },
      { label: 'الدفع والتطبيقات', a: 'Alipay / WeChat Pay بربط البطاقات الدولية', b: 'البطاقات البنكية، Suica/PASMO والنقد' },
      { label: 'التأشيرة', a: 'تأشيرة L لمعظم الجوازات (أو إعفاءات 15–30 يوماً)', b: 'تأشيرة إلكترونية / لاصقة أو إعفاء حسب الجواز' },
      { label: 'المدة المثالية للرحلة', a: '10–14 يوماً (2–3 مناطق)', b: '7–12 يوماً (طوكيو–كيوتو–أوساكا)' },
      { label: 'حاجز اللغة', a: 'مرتفع خارج الفنادق الكبرى؛ تطبيق ترجمة ضروري', b: 'متوسط؛ لافتات إنجليزية جيدة في المحطات' },
    ],
    verdict: {
      winner: 'اليابان للسهولة؛ الصين للاتساع والقيمة',
      text: 'اليابان أسهل في التجهيز الرقمي والمسافات القصيرة. الصين تمنح تنوعاً مضاعفاً مقابل كل دولار عند تجهيز Alipay/WeChat وشرائح eSIM وحجوزات القطار مسبقاً.',
    },
    body: [
      'تتفوق اليابان في الدقة وسهولة التنقل بين الأحياء، بينما تتفوق الصين في الحجم المهيب والتنوع الثقافي والجغرافي.',
      'مع إمكانية ربط البطاقات الأجنبية داخل Alipay وWeChat Pay وشبكة القطارات السريعة بين بكين وشيآن وتشنغدو وشنغهاي، أصبحت الصين أسهل بكثير عند الإعداد الجيد.',
    ],
    faqs: [
      {
        question: 'أيهما أرخص للسياحة: الصين أم اليابان؟',
        answer: 'الصين أرخص عادة بنسبة 35–45% في الفنادق والقطارات السريعة والوجبات اليومية مقارنة بطوكيو وكيوتو.',
      },
      {
        question: 'هل يمكن الجمع بين الصين واليابان في رحلة واحدة؟',
        answer: 'نعم — الرحلة الجوية من شنغهاي أو بكين إلى طوكيو أو أوساكا تستغرق 2.5–3.5 ساعة فقط، ما يسهل برنامجاً من 14 يوماً للبلدين.',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'الشحن البحري LCL مقابل FCL من الصين: نقطة التعادل والتكلفة',
    headline: 'الشحن LCL مقابل FCL من الصين',
    answer:
      'استخدم LCL (الحاوية المشتركة) لطلبات التجربة والشحنات دون ~12–15 CBM لتدفع مقابل المساحة المستخدمة فقط. وانتقل إلى حاوية كاملة FCL 20ft من 14–16+ CBM حيث يتفوق السعر الثابت للحاوية على رسوم CFS في ميناء الوصول.',
    entityA: 'LCL (شحن مشترك)',
    entityB: 'FCL (حاوية كاملة)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'الحجم المثالي', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'نموذج التسعير', a: 'لكل CBM/طن + رسوم CFS عند الوصول', b: 'سعر مقطوع للحاوية' },
      { label: 'السرعة من الباب للباب', a: '+3–5 أيام للتجميع والتفريغ', b: 'مناولة أسرع ومختومة من المصنع' },
      { label: 'مخاطر التلف', a: 'أعلى (مناولة متكررة في مستودعات CFS)', b: 'أقل (تُختم عند المورد أو مركز التجميع)' },
      { label: 'رسوم ميناء الوصول', a: 'مفاجآت رسوم CFS لكل CBM إذا لم تُسعّر مسبقاً', b: 'رسوم THC وتخليص واضحة لكل حاوية' },
    ],
    verdict: {
      winner: 'LCL دون ~13 CBM؛ FCL من 14–15 CBM فأعلى',
      text: 'لا تحجز حاوية كاملة لـ 5 CBM، ولا تشحن 16 CBM بنظام LCL لأن رسوم CFS في الوصول ستلتهم الوفورات. قارن دائماً التكلفة الإجمالية حتى التخليص.',
    },
    body: [
      'ينظر المستوردون الجدد أحياناً إلى أجرة البحر فقط ويغفلون رسوم مستودع التجميع (CFS) في ميناء الوصول. عند حدود 13–15 CBM تصبح حاوية 20ft أرخص إجمالاً.',
      'للمشترين من عدة مصانع، يمكن تجميع البضائع في مستودع بغوانغتشو أو ييوو وإرسالها في حاوية FCL واحدة مختومة.',
    ],
    faqs: [
      {
        question: 'عند أي حجم CBM يصبح FCL أرخص من LCL؟',
        answer: 'عادة بين 13 و15 CBM لحاوية 20 قدماً عند احتساب رسوم CFS والمناولة في ميناء الوصول.',
      },
      {
        question: 'هل يمكن جمع بضائع عدة موردين في حاوية FCL واحدة؟',
        answer: 'نعم — عبر التجميع في غوانغتشو أو شينزين أو ييوو لدمج شحنات عدة مصانع في حاوية واحدة مختومة.',
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
    updated: '2026-11-05',
    rows: [
      { label: 'Matrícula (por año)', a: 'US$3,500–8,000 (universidades de la lista MOE)', b: 'Pública: ₹10k–1L · Privada: ₹8–20L' },
      { label: 'Coste total del programa', a: 'US$38.5–83k todo incluido (5.5 años)', b: 'Pública: ₹5–10L · Privada: ₹60L–1Cr+' },
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
      text: 'Plaza pública de MBBS en India → tómala, sin más. Sin plaza pública y presupuesto ajustado → China de la lista MOE supera a cualquier plaza india privada en coste con esfuerzo de reconocimiento comparable (FMGE para los graduados de China; los graduados indios se registran vía NExT). Pagar ₹1Cr en privada con fondos disponibles y sin ganas de adaptación en el extranjero → la privada en India sigue siendo racional. Los dos modos de fallo que hay que evitar: universidades chinas fuera de la lista, y elegir China ignorando la preparación de HSK y FMGE.',
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
    updated: '2026-11-05',
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
    updated: '2026-11-05',
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
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'MBBS en China vs Kirguistán: enseñanza, reconocimiento y coste',
    headline: 'MBBS en China vs Kirguistán',
    answer:
      'Elige China si tu presupuesto cubre US$38–65k todo incluido y buscas hospitales universitarios más grandes, campus públicos sólidos y programas en inglés listados por el MOE. Kirguistán es más barato en matrícula (US$22–32k total), pero la exposición clínica y la tasa de aprobación del FMGE varían mucho entre academias privadas.',
    entityA: 'MBBS en China',
    entityB: 'MBBS en Kirguistán',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Coste total 5,5–6 años', a: 'US$38,5–65k (públicas listadas MOE)', b: 'US$22–32k (mayormente privadas)' },
      { label: 'Escala hospitalaria', a: 'Hospitales afiliados de 1.500–3.000+ camas', b: 'Clínicas municipales/privadas más pequeñas' },
      { label: 'Historial FMGE / NExT', a: 'Más consistente en públicas listadas MOE', b: 'Desigual en campus privados recientes' },
      { label: 'Requisito de idioma', a: 'Inglés + HSK 4 para rotaciones clínicas', b: 'Inglés + ruso/kirguís en planta' },
      { label: 'Infraestructura', a: 'Campus internacionales dedicados y alta velocidad', b: 'Variable; concentrado en Biskek/Osh' },
      { label: 'Acceso a becas', a: 'Becas CSC y provinciales/universitarias', b: 'Limitado; casi todo autofinanciado' },
    ],
    verdict: {
      winner: 'China por profundidad clínica; Kirguistán solo por presupuesto estricto',
      text: 'Con un presupuesto familiar de US$40k+, las universidades públicas chinas listadas por el MOE ofrecen mayor volumen hospitalario y respaldo académico. Kirguistán solo tiene sentido con un techo estricto bajo US$30k verificando rotaciones reales.',
    },
    body: [
      'Ambos destinos atraen a estudiantes internacionales que buscan medicina en inglés sin tasas privadas desorbitadas, pero sus sistemas universitarios son muy distintos.',
      'Las más de 45 universidades médicas listadas por el MOE en China son grandes instituciones públicas con hospitales de miles de camas, mientras que Kirguistán concentra su oferta internacional en academias privadas pequeñas.',
    ],
    faqs: [
      {
        question: '¿Es más barato estudiar MBBS en Kirguistán que en China?',
        answer: 'Sí en matrícula nominal: US$22–32k frente a US$38,5–65k en públicas chinas listadas MOE, aunque conviene sumar preparación de examen y calidad clínica.',
      },
      {
        question: '¿Qué país ofrece mejor exposición hospitalaria?',
        answer: 'Las universidades médicas públicas chinas operan grandes hospitales Clase 3A con alto flujo de pacientes si dominas el mandarín básico (HSK 4).',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'Beca CSC Tipo A vs Tipo B: ¿qué vía elegir?',
    headline: 'Beca CSC Tipo A vs Tipo B',
    answer:
      'Solicita la vía Tipo B (directa con la universidad) si buscas mayor control, contacto rápido con un supervisor y apuntar a universidades concretas. La vía Tipo A pasa por la embajada o ministerio de tu país con cupos bilaterales más rígidos.',
    entityA: 'CSC Tipo A (Embajada)',
    entityB: 'CSC Tipo B (Universidad)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Canal de solicitud', a: 'Embajada / ministerio de educación nacional', b: 'Directamente en el portal de la universidad china' },
      { label: 'Grados elegibles', a: 'Grado, Máster, Doctorado e investigadores', b: 'Principalmente Máster y Doctorado (y algunos Grados)' },
      { label: 'Número de agencia', a: 'Código de la embajada / organismo', b: 'Código de 5 dígitos de la universidad' },
      { label: 'Opciones de universidad', a: 'Hasta 3 preferencias (sin garantía)', b: '1 universidad principal por solicitud Tipo B' },
      { label: 'Plazos habituales', a: 'Enero–febrero (según embajada)', b: 'Diciembre–marzo (según universidad)' },
      { label: 'Carta de preadmisión', a: 'Útil, sujeta al cupo nacional', b: 'Decisiva — preadmisión y aval de tutor mandan' },
    ],
    verdict: {
      winner: 'Tipo B para posgrado; Tipo A para pregrado',
      text: 'Quienes postulan a Grado fuera de convenios especiales suelen depender de Tipo A o becas provinciales. Para Máster y Doctorado, Tipo B es más ágil y premia el contacto previo con tutores.',
    },
    body: [
      'Tanto Tipo A como Tipo B otorgan la misma cobertura CSC: matrícula completa, alojamiento en campus, seguro médico y estipendio mensual (¥2.500–3.500 según nivel).',
      'La diferencia está en quién filtra primero: el organismo nacional en Tipo A frente al comité de admisión de la universidad china en Tipo B.',
    ],
    faqs: [
      {
        question: '¿Puedo solicitar CSC Tipo A y Tipo B el mismo año?',
        answer: 'Sí, puedes presentar ambas solicitudes, aunque las normas CSC solo permiten aceptar una única beca final.',
      },
      {
        question: '¿Necesito carta de preadmisión para Tipo B?',
        answer: 'En casi todas las universidades competitivas sí: contar con aceptación de supervisor y preadmisión multiplica tus probabilidades.',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'Viajar a China vs Japón: presupuesto, visado, trenes y ruta',
    headline: 'China vs Japón para viajeros',
    answer:
      'Elige Japón para un primer viaje sin fricciones por Asia Oriental, trenes puntuales y un circuito compacto de 7–12 días. Elige China por su escala monumental, menor gasto diario y enorme diversidad — una vez resueltos visado y pagos digitales antes de volar.',
    entityA: 'Viajar a China',
    entityB: 'Viajar a Japón',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'Presupuesto diario medio', a: 'US$45–120/día', b: 'US$85–220/día' },
      { label: 'Red ferroviaria', a: 'Mayor red de alta velocidad; billete con pasaporte', b: 'Shinkansen y tarjetas IC; señalización en inglés' },
      { label: 'Pagos y apps', a: 'Alipay / WeChat Pay con tarjeta extranjera', b: 'Tarjetas, Suica/PASMO y efectivo' },
      { label: 'Visado', a: 'Visado L para la mayoría (o exenciones 15–30d)', b: 'eVisa / visado o exención según pasaporte' },
      { label: 'Duración ideal', a: '10–14 días (2–3 regiones)', b: '7–12 días (Tokio–Kioto–Osaka)' },
      { label: 'Idioma', a: 'Alto fuera de hoteles principales; traductor clave', b: 'Moderado; estaciones bien señalizadas' },
    ],
    verdict: {
      winner: 'Japón por comodidad; China por escala y valor',
      text: 'Japón exige menos configuración previa y tiene distancias cortas. China ofrece el doble de variedad geográfica por dólar cuando llevas Alipay/WeChat, eSIM y billetes de tren preparados.',
    },
    body: [
      'Japón destaca por su precisión y barrios caminables; China impresiona por su escala monumental y contrastes entre capitales imperiales y paisajes kársticos.',
      'Con tarjetas extranjeras ya vinculables en Alipay y WeChat Pay y alta velocidad entre Pekín, Xi’an, Chengdu, Guilin y Shanghái, viajar por China es mucho más sencillo si se prepara bien.',
    ],
    faqs: [
      {
        question: '¿Qué país es más barato para viajar: China o Japón?',
        answer: 'China suele ser un 35–45% más económica en hoteles, trenes de alta velocidad y comidas diarias frente a Tokio y Kioto.',
      },
      {
        question: '¿Se pueden combinar China y Japón en un solo viaje?',
        answer: 'Sí — volar de Shanghái o Pekín a Tokio u Osaka lleva 2,5–3,5 horas, ideal para una ruta de 14 días.',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'Envío marítimo LCL vs FCL desde China: punto de equilibrio y costes',
    headline: 'LCL vs FCL desde China',
    answer:
      'Usa LCL (carga consolidada) para pedidos de prueba bajo ~12–15 CBM y paga solo por el volumen ocupado. Cambia a contenedor completo FCL de 20 pies desde 14–16+ CBM, donde la tarifa fija supera los cargos CFS en destino y reduce daños.',
    entityA: 'LCL (Contenedor compartido)',
    entityB: 'FCL (Contenedor completo)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'Volumen ideal', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'Modelo de precio', a: 'Por CBM / tonelada + cargos CFS en destino', b: 'Tarifa fija por contenedor' },
      { label: 'Tiempo puerta a puerta', a: '+3–5 días por consolidación y desconsolidación', b: 'Rotación portuaria más rápida y precintado' },
      { label: 'Riesgo de daños', a: 'Mayor (manipulación compartida en almacén CFS)', b: 'Menor (precintado en fábrica o hub)' },
      { label: 'Cargos en destino', a: 'Sorpresas de CFS por CBM si no se cotizan', b: 'THC y despacho predecibles por contenedor' },
    ],
    verdict: {
      winner: 'LCL bajo ~13 CBM; FCL desde 14–15 CBM',
      text: 'No reserves FCL para 5 CBM ni envíes 16 CBM en LCL: las tasas CFS en destino anularán el ahorro aparente. Compara siempre el coste total puesto en puerto.',
    },
    body: [
      'Muchos importadores nuevos solo miran el flete oceánico y pasan por alto los cargos CFS en destino del LCL. Alrededor de 13–15 CBM, un FCL de 20ft resulta más barato en total.',
      'Si compras a varios proveedores, puedes consolidar mercancía de 2–3 fábricas en Guangzhou o Yiwu en un único FCL precintado.',
    ],
    faqs: [
      {
        question: '¿A partir de cuántos CBM es más barato FCL que LCL?',
        answer: 'Normalmente entre 13 y 15 CBM para un contenedor de 20 pies, al incluir tarifas CFS y manipulación en destino.',
      },
      {
        question: '¿Puedo mezclar varios proveedores en un mismo FCL?',
        answer: 'Sí — mediante consolidación en Guangzhou, Shenzhen o Yiwu puedes reunir cajas de varias fábricas en un solo contenedor precintado.',
      },
    ],
  },
];

/* de — machine-assisted translation, pending native-speaker review (Sie-form). */
const COMPARISONS_DE: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'MBBS in China vs. Indien: Kosten, Anerkennung & Fazit',
    headline: 'MBBS in China vs. Indien',
    answer:
      'Wählen Sie Indien, wenn Sie einen staatlichen Studienplatz gewinnen können — es bleibt der günstigste anerkannte Weg. Wählen Sie China, wenn die realistische indische Alternative ein privater Platz für ₹60L–1Cr ist: ein MBBS an einer MOE-gelisteten chinesischen Hochschule liefert vergleichbare Anerkennung zu rund einem Drittel der Kosten, mit der unverhandelbaren Bedingung, dass Sie als ausländischer Medizinabsolvent bei der Rückkehr das FMGE/NExT-Screening bestehen (indische Absolventen registrieren sich stattdessen über NExT — die Eignungsregeln hängen von Ihrem Zulassungsjahr ab, prüfen Sie also die aktuellen NMC-Vorschriften, bevor Sie sich festlegen).',
    entityA: 'MBBS in China',
    entityB: 'MBBS in Indien',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'Studiengebühren (pro Jahr)', a: 'US$3,500–8,000 (MOE-gelistet)', b: 'Staatlich: ₹10k–1L · Privat: ₹8–20L' },
      { label: 'Gesamtkosten des Studiums', a: 'US$38,5–83k alles in allem (5,5 Jahre)', b: 'Staatlich: ₹5–10L · Privat: ₹60L–1Cr+' },
      { label: 'Lizenzprüfung für die Praxis in Indien', a: 'FMGE/NExT-Screening (nur ausländische Absolventen)', b: 'NExT / Universitätsregistrierung — FMGE gilt nicht für indische Absolventen' },
      { label: 'Unterrichtssprache', a: 'Englisch (HSK 4 für die klinischen Jahre nötig)', b: 'Englisch (privat) / Regionalsprachen' },
      { label: 'Zulassungshürde', a: 'NEET-Qualifikation + Klasse 12 PCB', b: 'NEET-Rang (staatlich) / NEET-Qualifikation (privat)' },
      { label: 'Lebenshaltungskosten', a: 'US$300–850/Monat je nach Stadt', b: '₹12–30k/Monat je nach Stadt' },
      { label: 'Stipendien', a: 'CSC + Universitätsstipendien können die Gebühren auf null senken', b: 'An privaten Hochschulen selten; Staatsquoten' },
      { label: 'Patientenkontakt', a: 'Stark an Universitätskliniken; sprachabhängig', b: 'Stark; die Sprache ist die Muttersprache' },
      { label: 'Größtes Risiko', a: 'Ungelistete Universitäten + vernachlässigte Sprache', b: 'Kapitationsgebühren + Platzmangel' },
    ],
    verdict: {
      winner: 'Hängt von Ihrem NEET-Ergebnis ab',
      text: 'Staatlicher MBBS-Platz in Indien → nehmen Sie ihn, ohne Wenn und Aber. Kein staatlicher Platz und knappes Budget → MOE-gelistetes China schlägt jeden privaten indischen Platz bei den Kosten, bei gleichem Anerkennungsaufwand (FMGE für Absolventen aus China; indische Absolventen registrieren sich über NExT). ₹1Cr privat zahlen, obwohl Mittel vorhanden sind und keine Bereitschaft zur Auslandsanpassung besteht → privates Indien bleibt rational. Die zwei Fehlerarten, die es zu vermeiden gilt: ungelistete chinesische Universitäten, und China zu wählen, während man die HSK- und FMGE-Vorbereitung vernachlässigt.',
    },
    body: [
      'Der Vergleich, dem sich die meisten indischen Familien tatsächlich stellen, ist nicht China-gegen-Indien im Abstrakten — sondern China gegen die einzige indische Option, die sie haben: einen privaten Platz mit siebenstelligem Preis. So gerahmt wird die Entscheidung klarer.',
      'Die Anerkennung ist symmetrisch: Ein MBBS von beiden Seiten der Grenze erfordert das Bestehen von FMGE/NExT für die Praxis in Indien (Absolventen indischer Privathochschulen stehen ebenfalls vor dem NExT). Was sich unterscheidet, sind die Kosten des Abschlusses und die Disziplin, die der Auslandsweg verlangt — Sprache, Eigenständigkeit und Dokumentensorgfalt.',
      'Chinas MBBS-System ist für internationale Studierende gebaut: englischsprachige Tracks an MOE-gelisteten Universitäten, vorhersehbare Gebührenlisten und Wohnheiminfrastruktur. Indiens Vorteil ist der klinische Kontakt mit dem eigenen Gesundheitssystem vom ersten Tag an — eine echte Stärke für FMGE und die spätere Praxis.',
    ],
    faqs: [
      {
        question: 'Ist ein chinesischer MBBS besser als ein indischer privater MBBS?',
        answer: 'Bei den Kosten eindeutig ja: Ein vollständiger chinesischer MBBS an einer MOE-gelisteten Hochschule kostet etwa ein Drittel eines privaten indischen Platzes. Bei klinischem Kontakt und Vertrautheit mit dem System gewinnen indische Privathochschulen. Bei der Anerkennung brauchen beide FMGE/NExT — nichts davon ist automatisch.',
      },
      {
        question: 'Kann ich nach einem MBBS aus China in Indien praktizieren?',
        answer: 'Ja, nach dem Bestehen der vom NBE durchgeführten FMGE (in Übergang zum NExT), plus der üblichen Internatsregistrierung. Tausende tun dies jedes Jahr; die Vorbereitung während des Studiums zählt mehr als der Studienort.',
      },
      {
        question: 'Was ist insgesamt günstiger?',
        answer: 'Ein chinesischer MBBS an einer Hochschule in einer zweitrangigen Stadt landet gesamt bei etwa US$35–45k. Indische private Plätze übersteigen allein an Gebühren häufig ₹60L–1Cr. Staatliche indische Plätze sind günstiger als beide, aber selten.',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'Tsinghua vs. Peking University: Wohin sollten Sie sich bewerben?',
    headline: 'Tsinghua vs. Peking University',
    answer:
      'Sie sind die zwei Hälften des akademischen Gipfels Chinas, 3 km voneinander entfernt in Haidian. Wählen Sie Tsinghua für Ingenieurwesen, Informatik und Technologiekarrieren; wählen Sie Peking für Geisteswissenschaften, Ökonomie, Naturwissenschaften und Forschungsbreite. Die internationale Zulassung ist vergleichbar schwer — bewerben Sie sich dort, wo es Ihr Fach verlangt, nicht dort, wo es ein Ranking sagt.',
    entityA: 'Tsinghua University',
    entityB: 'Peking University',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'Identität', a: 'Vormachtstellung in Ingenieurwesen & Technologie', b: 'Breite in Geisteswissenschaften, Naturwissenschaften & Politik' },
      { label: 'Globaler Rang (QS)', a: 'Top-25, Ingenieurwesen Top-10', b: 'Top-15 insgesamt' },
      { label: 'Flaggschiffe für internationale Studierende', a: 'CS/KI, Ingenieurwesen, Schwarzman, MBA', b: 'Ökonomie, Internationale Beziehungen, Chinastudien, Yenching' },
      { label: 'Campus-Charakter', a: 'Rotziegel-Collegiate + moderne Labore', b: 'Kaiserliche Gärten, Weiming-See' },
      { label: 'Industrienähe', a: 'Zhongguancun: Baidu, ByteDance, MSR Asia', b: 'Think Tanks, Finanzen, Regierungspfade' },
      { label: 'Internationale Kohorte', a: '~3,000+ über alle Abschlüsse', b: '~3,000+ über alle Abschlüsse' },
      { label: 'Am besten passender Bewerber', a: 'Bauer/Forscher im MINT-Bereich', b: 'Analytiker-/Politik-/Geisteswissenschafts-Kopf' },
    ],
    verdict: {
      winner: 'Das Fach entscheidet, nicht die Rankings',
      text: 'Für Ingenieurwesen und Informatik ist Tsinghuas Anziehungskraft in Asien unerreicht; für Ökonomie, internationale Beziehungen, Recht oder reine Naturwissenschaften gewinnen Pekings Tiefe und der Garten-Campus. Die Bewerbung ist für internationale Studierende vergleichbar schwer; die Chancen bei Forschungsabschlüssen steigen an beiden deutlich mit frühem Betreuerkontakt — genau die Arbeit, die wir leisten, bevor die Bewerbungen öffnen.',
    },
    body: [
      'Die Rivalität ist herzlich und geografisch: Die beiden Campus liegen sich über Haidian hinweg gegenüber, und chinesische Familien scherzen, auf welcher Seite der Chengfu-Straße ein Kind wohnt. Für internationale Bewerber ist die Wahl weniger stammeshaft und eher pragmatisch — Stärke der Fakultät, englischsprachiges Angebot und das Netzwerk nach dem Studium.',
      'Beide Universitäten führen CSC-Typ-B-Zulassungen und Universitätsstipendien durch (Tsinghuas Presidential Awards; Pekings Yenching und Fakultätsfinanzierungen). Beide erwarten konkurrenzfähige Noten und, bei Forschungsabschlüssen, frühe Betreueransprache. Keine der beiden ist für irgendeinen ein „Sicherheitsnetz“.',
    ],
    faqs: [
      {
        question: 'Welche ist für internationale Studierende schwerer zu bekommen?',
        answer: 'Insgesamt vergleichbar; an den Rändern fachabhängig. Tsinghuas Ingenieur-/CS-Quote ist winzig und erbittert; Pekings Ökonomie- und Yenching-Kohorten sind ähnlich selektiv. Forschungszulassungen sind an beiden realistisch gewinnbar — mit starken Unterlagen und Betreuerunterstützung.',
      },
      {
        question: 'Bieten beide CSC-Stipendien an?',
        answer: 'Ja — beide sind Typ-B-designierte Universitäten, d. h. Sie bewerben sich über die Universität selbst (der direkte Weg). Der staatliche Typ-A-Kanal läuft über Ihr Heimatministerium oder Ihre Botschaft, nicht über die Universität. Vollstipendien sind an beiden konkurrenzfähig, egal welche Noten Sie haben; bewerben Sie sich an beiden plus einer wahrscheinlichen Partneruniversität.',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'Seefracht vs. Luftfracht: China–Indien Versand im Vergleich',
    headline: 'Seefracht vs. Luftfracht von China nach Indien',
    answer:
      'Die See gewinnt bei den Kosten — 5–8× günstiger pro kg — und verliert bei der Zeit: 18–25 Tage Hafen zu Hafen gegenüber 3–7 Tagen Tür zu Tür per Luft. Verschiffen Sie per See alles, was durch Warten kein Geld verliert; fliegen Sie hochwertdichte Waren, Launches und dringende Ersatzware. Für die meisten Sourcing-Programme lautet die richtige Antwort: See für Volumen plus einer ständigen Luftfrachtroute für Notfälle.',
    entityA: 'Seefracht',
    entityB: 'Luftfracht',
    pillar: 'trade',
    updated: '2026-11-05',
    rows: [
      { label: 'Transit (China → Indien)', a: '18–25 Tage Hafen zu Hafen + Zoll', b: '3–7 Tage Tür zu Tür' },
      { label: 'Relative Kosten', a: '1× (Basislinie)', b: '5–8× pro kg' },
      { label: 'Am besten für', a: 'Massengut, Nachschub, geringe Wertdichte', b: 'Launches, Muster, Ersatzteile, Elektronik' },
      { label: 'Modi', a: 'LCL (geteilt) oder FCL 20ft/40ft', b: 'Consol oder direkt, Regeln zum abrechenbaren Gewicht' },
      { label: 'CO₂-Intensität', a: 'Am niedrigsten pro Tonne-km', b: 'Hoch — 20×+ der See pro Tonne-km' },
      { label: 'Hauptrisiko', a: 'Hafenüberlastung, ausgesetzte Abfahrten (Golden Week)', b: 'Kapazitätspreisspitzen (Messensaison)' },
      { label: 'Cashflow-Form', a: 'Langsamer Lagerumschlag, geringerer Frachtaufwand', b: 'Schneller Umschlag, P&L frachtlastig' },
    ],
    verdict: {
      winner: 'See für Volumen, Luft für Tempo',
      text: 'Fahren Sie den Standard auf See — LCL für Versuche unter ca. 12–15 CBM, FCL in der Skalierung — und halten Sie eine definierte Luftfrachtroute für Launches und Bestandslücken bereit. Entscheidend ist nicht der Frachtpreis pro kg, sondern die Landekosten pro Einheit, gemessen an Ihrer Absatzgeschwindigkeit; unser Desk modelliert beides, bevor Sie sich festlegen.',
    },
    body: [
      'Die Hafenpaare zählen so viel wie der Modus: Guangzhou/Shenzhen nach Mundra oder JNPT ist der Hauptkorridor (18–25 Tage), Shanghai/Ningbo kommen 2–3 Tage hinzu. Luft geht über PVG/CAN nach DEL/BOM in 3–7 Tagen Tür zu Tür einschließlich Abfertigung.',
      'Zeitrisiken sind saisonal: Golden-Week-Aussetzungen drücken die Seekapazität jeden Oktober, während Canton-Fair-Wochen und der Run vor dem chinesischen Neujahrsfest Lufttarife hochtreiben. Bauen Sie Pufferbestände um diese Fenster auf, statt Spot-Prämien zu zahlen.',
    ],
    faqs: [
      {
        question: 'Wann ergibt Luftfracht von China nach Indien Sinn?',
        answer: 'Drei Fälle: Launchbestand, der einen Marktermin einhalten muss, hochwertdichte Waren, bei denen Fracht ein kleiner Anteil der Stückökonomie ist, und Notfall-Stockouts. Alles andere geht üblicherweise per See.',
      },
      {
        question: 'Wie viel günstiger ist Seefracht?',
        answer: 'Etwa 5–8× günstiger pro kg als Luft auf der China–Indien-Route, vor Lagerhaltungskosten. Bei vollen Containern ist See kein Vergleich — es ist die einzige wirtschaftliche Option.',
      },
      {
        question: 'LCL oder FCL für die erste Bestellung?',
        answer: 'LCL für Probevolumen (bis ca. 12–15 CBM) — Sie zahlen nur den genutzten Platz. Wechseln Sie zu FCL, wenn die Volumina die Stückrechnung gewinnen lassen, typischerweise nach 2–3 Bestellungen.',
      },
    ],
  },
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'MBBS in China vs. Kirgisistan: Lehre, Anerkennung & Kosten',
    headline: 'MBBS in China vs. Kirgisistan',
    answer:
      'Wählen Sie China, wenn Ihr Budget US$38–65k all-in abdeckt und Sie größere Lehrkrankenhäuser, staatliche Campusse und MOE-gelistete englischsprachige Studiengänge möchten. Kirgisistan ist bei den Studiengebühren günstiger (oft US$22–32k gesamt), aber klinische Praxis und FMGE-Erfolgsquoten schwanken zwischen privaten Akademien stark.',
    entityA: 'MBBS in China',
    entityB: 'MBBS in Kirgisistan',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Gesamtkosten 5,5–6 J.', a: 'US$38,5–65k (staatlich MOE-gelistet)', b: 'US$22–32k (meist privat)' },
      { label: 'Krankenhausgröße', a: 'Lehrkrankenhäuser mit 1.500–3.000+ Betten', b: 'Kleinere kommunale/private Kliniken' },
      { label: 'FMGE / NExT-Bilanz', a: 'Konstanter an etablierten MOE-Hochschulen', b: 'Uneinheitlich bei neueren Privatcampus' },
      { label: 'Sprachanforderung', a: 'Englisch + HSK 4 für klinische Jahre', b: 'Englisch + Russisch/Kirgisisch auf Station' },
      { label: 'Infrastruktur', a: 'Eigene internationale Campusse, Hochgeschwindigkeitszug', b: 'Variabel; Fokus auf Bischkek/Osch' },
      { label: 'Stipendien', a: 'CSC- sowie Provinz-/Hochschulstipendien', b: 'Begrenzt; meist selbst finanziert' },
    ],
    verdict: {
      winner: 'China für klinische Tiefe; Kirgisistan nur bei engem Budget',
      text: 'Ab US$40k+ Familienbudget bieten MOE-gelistete chinesische Staatsuniversitäten deutlich mehr Patientenaufkommen und Laborinfrastruktur. Kirgisistan ergibt nur unter US$30k mit genauer Prüfung der klinischen Rotationen Sinn.',
    },
    body: [
      'Beide Länder ziehen internationale Medizinstudierende an, die ein englischsprachiges Studium ohne hohe Privatgebühren suchen, doch die Hochschulsysteme unterscheiden sich grundlegend.',
      'Chinas über 45 MOE-gelistete medizinische Universitäten sind große staatliche Hochschulen mit riesigen Lehrkrankenhäusern, während Kirgisistan überwiegend auf kleinere private Akademien setzt.',
    ],
    faqs: [
      {
        question: 'Ist MBBS in Kirgisistan günstiger als in China?',
        answer: 'Bei den reinen Studiengebühren ja: US$22–32k gegenüber US$38,5–65k an MOE-gelisteten chinesischen Staatsuniversitäten. Berücksichtigen Sie jedoch Prüfungsvorbereitung und Klinikqualität.',
      },
      {
        question: 'Welches Land bietet die bessere Klinikpraxis?',
        answer: 'Chinesische staatliche Medizinuniversitäten betreiben große 3A-Lehrkrankenhäuser mit hohem Patientenaufkommen, sofern Sie grundlegendes Mandarin (HSK 4) lernen.',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'CSC-Stipendium Typ A vs. Typ B: Welcher Weg passt?',
    headline: 'CSC-Stipendium Typ A vs. Typ B',
    answer:
      'Bewerben Sie sich über Typ B (direkt an der Universität), wenn Sie mehr Kontrolle, schnellere Betreuer-Abstimmung und gezielte Spitzenuniversitäten wünschen. Typ A läuft über die Botschaft oder das Bildungsministerium Ihres Heimatlandes mit engeren bilateralen Quoten.',
    entityA: 'CSC Typ A (Botschaft)',
    entityB: 'CSC Typ B (Universität)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Bewerbungsweg', a: 'Heimatbotschaft / Bildungsministerium', b: 'Direkt über das Portal der chinesischen Universität' },
      { label: 'Zielabschlüsse', a: 'Bachelor, Master, PhD & Gaststudierende', b: 'Vorwiegend Master & PhD (plus ausgewählte Bachelor)' },
      { label: 'Agenturnummer', a: 'Code der Botschaft / Entsendebehörde', b: '5-stelliger Universitätscode' },
      { label: 'Hochschulwahl', a: 'Bis zu 3 Präferenzen (ohne Garantie)', b: '1 Hauptuniversität je Typ-B-Antrag' },
      { label: 'Fristen', a: 'Meist Jan.–Feb. (je nach Botschaft)', b: 'Meist Dez.–März (je nach Universität)' },
      { label: 'Zulassungsschreiben', a: 'Hilfreich, aber an Landesquote gebunden', b: 'Entscheidend — Vorzulassung & Betreuer zählen' },
    ],
    verdict: {
      winner: 'Typ B für Master/PhD; Typ A für Bachelor',
      text: 'Bachelor-Bewerber außerhalb bilateraler Programme nutzen meist Typ A oder Provinzstipendien. Für Master und PhD ist Typ B schneller und honoriert direkten Betreuerkontakt.',
    },
    body: [
      'Sowohl Typ A als auch Typ B gewähren identische CSC-Leistungen: vollständigen Gebührenerlass, Wohnheim, Krankenversicherung und monatliches Stipendium (¥2.500–3.500 je nach Abschluss).',
      'Der Unterschied liegt in der Vorauswahl: Typ A läuft über eine nationale Behörde im Heimatland, Typ B über den Zulassungsausschuss der chinesischen Universität.',
    ],
    faqs: [
      {
        question: 'Kann ich mich im selben Jahr für CSC Typ A und Typ B bewerben?',
        answer: 'Ja, Sie können beide Wege einreichen, dürfen laut CSC-Regeln am Ende aber nur ein Stipendium annehmen.',
      },
      {
        question: 'Brauche ich für Typ B ein Vorzulassungsschreiben?',
        answer: 'An fast allen gefragten Universitäten ja — die Zusage eines Betreuers und eine Vorzulassung erhöhen die Chancen deutlich.',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'Reisen nach China vs. Japan: Budget, Visum, Bahn & Route',
    headline: 'China vs. Japan für Reisende',
    answer:
      'Wählen Sie Japan für eine reibungslose erste Ostasienreise mit präzisen Zügen und kompakter 7–12-Tage-Route. Wählen Sie China für gewaltige Dimensionen, niedrigere Tageskosten und enorme landschaftliche Vielfalt — sobald Visum und Zahlungs-Apps vorab eingerichtet sind.',
    entityA: 'Reisen in China',
    entityB: 'Reisen in Japan',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'Tagesbudget (Mittelklasse)', a: 'US$45–120/Tag', b: 'US$85–220/Tag' },
      { label: 'Schienennetz', a: 'Größtes Hochgeschwindigkeitsnetz; Pass-E-Ticket', b: 'Shinkansen & IC-Karten; klare englische Beschilderung' },
      { label: 'Zahlung & Apps', a: 'Alipay / WeChat Pay mit Auslandskarte', b: 'Kreditkarten, Suica/PASMO & Bargeld' },
      { label: 'Visum', a: 'L-Visum für viele Pässe (oder 15–30T Befreiung)', b: 'eVisa / Visum oder Visumbefreiung je nach Pass' },
      { label: 'Ideale Reisedauer', a: '10–14 Tage (2–3 Regionen)', b: '7–12 Tage (Tokio–Kyoto–Osaka)' },
      { label: 'Sprachbarriere', a: 'Hoch außerhalb großer Hotels; Übersetzer nötig', b: 'Moderat; gute englische Bahnhofsbeschilderung' },
    ],
    verdict: {
      winner: 'Japan für Komfort; China für Größe & Preis-Leistung',
      text: 'Japan erfordert weniger digitale Vorbereitung und bietet kurze Distanzen. China liefert doppelt so viel geografische Vielfalt pro Dollar, wenn Alipay/WeChat, eSIM und Zugtickets vorab stehen.',
    },
    body: [
      'Japan überzeugt durch Präzision und fußläufige Viertel; China beeindruckt durch monumentale Dimensionen und regionale Kontraste.',
      'Da ausländische Karten inzwischen in Alipay und WeChat Pay hinterlegt werden können und Hochgeschwindigkeitszüge Peking, Xi’an, Chengdu, Guilin und Shanghai verbinden, ist China gut vorbereitet leicht zu bereisen.',
    ],
    faqs: [
      {
        question: 'Welches Land ist günstiger zu bereisen: China oder Japan?',
        answer: 'China ist bei Hotels, Hochgeschwindigkeitszügen und Alltagsverpflegung meist 35–45% günstiger als Tokio und Kyoto.',
      },
      {
        question: 'Lassen sich China und Japan in einer Reise kombinieren?',
        answer: 'Ja — Flüge von Shanghai oder Peking nach Tokio oder Osaka dauern nur 2,5–3,5 Stunden, ideal für eine 14-tägige Doppelroute.',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'Seefracht LCL vs. FCL ab China: Break-even & Kostenleitfaden',
    headline: 'LCL vs. FCL ab China',
    answer:
      'Nutzen Sie LCL (Teilladung) für Testbestellungen unter ~12–15 CBM, sodass Sie nur den genutzten Kubikmeter zahlen. Wechseln Sie ab 14–16+ CBM auf einen 20ft-FCL-Vollcontainer: Der Pauschalpreis schlägt die Ziel-CFS-Gebühren und senkt Transportschäden.',
    entityA: 'LCL (Sammelcontainer)',
    entityB: 'FCL (Vollcontainer)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'Ideales Volumen', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'Preismodell', a: 'Pro CBM / Tonne + Ziel-CFS-Gebühren', b: 'Pauschalpreis pro Container' },
      { label: 'Tür-zu-Tür-Laufzeit', a: '+3–5 Tage für Konsolidierung & Dekonsolidierung', b: 'Schnellerer Hafenumschlag, ab Werk verplombt' },
      { label: 'Schadensrisiko', a: 'Höher (mehrfaches Umladen im CFS-Lager)', b: 'Geringer (direkt beim Lieferanten/Hub verplombt)' },
      { label: 'Zielhafenkosten', a: 'Hohe CFS-Überraschungen pro CBM ohne Fixangebot', b: 'Planbare THC & Verzollung pro Container' },
    ],
    verdict: {
      winner: 'LCL unter ~13 CBM; FCL ab 14–15 CBM',
      text: 'Buchen Sie keinen FCL für 5 CBM und verschiffen Sie keine 16 CBM als LCL — Ziel-CFS-Gebühren fressen die vermeintliche Ersparnis auf. Vergleichen Sie immer die gesamten Landed-Kosten.',
    },
    body: [
      'Neue Importeure schauen oft nur auf die Seefrachtrate und übersehen die Container-Freight-Station-(CFS)-Gebühren am Zielhafen. Ab etwa 13–15 CBM wird ein 20ft-FCL insgesamt günstiger.',
      'Bei mehreren Lieferanten lassen sich Waren von 2–3 Fabriken in Guangzhou oder Yiwu in einem einzigen verplombten FCL-Container bündeln.',
    ],
    faqs: [
      {
        question: 'Ab wie viel CBM ist FCL günstiger als LCL?',
        answer: 'Typischerweise zwischen 13 und 15 CBM für einen 20-Fuß-Container, sobald Ziel-CFS- und Handlinggebühren einberechnet werden.',
      },
      {
        question: 'Kann man mehrere Lieferanten in einem FCL kombinieren?',
        answer: 'Ja — per Buyer’s Consolidation in Guangzhou, Shenzhen oder Yiwu lassen sich Kartons mehrerer Werke in einem verplombten Container bündeln.',
      },
    ],
  },
];

/* ja — machine-assisted translation, pending native-speaker review. */
const COMPARISONS_JA: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: '中国とインドのMBBS：費用、認可、結論',
    headline: '中国MBBS vs インドMBBS',
    answer:
      '政府枠を取れるならインドを選んでください——依然として最も安い認可ルートです。現実的なインド側の選択肢が₹60L–1Crの私立枠であるなら中国を選びましょう：MOE掲載大学の中国MBBSは約3分の1の費用で同等の認可見通しを提供します。ただし譲れない条件として、外国医学卒業生は帰国後にFMGE/NExT審査に合格する必要があります（インド卒業生はNExTで登録——適格規則は入学年度によって異なるため、決断前に現行のNMC規則を確認してください）。',
    entityA: '中国のMBBS',
    entityB: 'インドのMBBS',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: '学費（年間）', a: 'US$3,500–8,000（MOE掲載校）', b: '公立：₹10k–1L · 私立：₹8–20L' },
      { label: 'プログラム総費用', a: 'US$38.5–83k 全込み（5.5年）', b: '公立：₹5–10L · 私立：₹60L–1Cr+' },
      { label: 'インド開業のライセンス試験', a: 'FMGE/NExT審査（外国卒業生のみ）', b: 'NExT / 大学登録——FMGEはインド卒業生には適用されない' },
      { label: '授業言語', a: '英語（臨床年次にはHSK 4が必要）', b: '英語（私立）/ 地域言語' },
      { label: '入学ゲート', a: 'NEET合格 + 12年生のPCB', b: 'NEET順位（公立）/ NEET合格（私立）' },
      { label: '生活費', a: 'US$300–850/月、都市による', b: '₹12–30k/月、都市による' },
      { label: '奨学金', a: 'CSCや大学奨学金で学費がゼロになることも', b: '私立では稀；州割当あり' },
      { label: '患者への接点', a: '附属病院で豊富；言語次第', b: '豊富；言語は母語' },
      { label: '最大のリスク', a: '未掲載大学＋言語の軽視', b: '寄付金（キャピテーション）＋枠の希少性' },
    ],
    verdict: {
      winner: 'NEETの結果次第',
      text: 'インドの公立MBBS枠 → 迷わず取る。公立枠がなく予算が限られる → 同じ認可努力（中国卒はFMGE、インド卒はNExT登録）なら、MOE掲載の中国は費用面でどのインド私立枠よりも有利。資金があり海外適応の意欲もないのに₹1Crを私立に払う → インド私立が合理的。避けるべき2つの失敗パターン：未掲載の中国大学、そして中国を選びながらHSKとFMGE対策を怠ること。',
    },
    body: [
      '多くのインドの家庭が実際に直面する比較は、抽象的な「中国かインドか」ではありません——彼らの唯一のインドの選択肢、七桁の値段がついた私立枠と中国の比較です。こう枠組みを変えると決断ははっきりします。',
      '認可は対称です：どちら側のMBBSでも、インドで開業するにはFMGE/NExTの合格が求められます（インド私立卒業生もNExTを直面します）。違うのは学位取得コストと、海外ルートが要求する規律——言語、自立、書類管理です。',
      '中国のMBBS制度は留学生向けに設計されています：MOE掲載大学の英語授業トラック、予測可能な費用表、寮インフラ。インドの強みは初日から自国の医療制度の中での臨床経験——FMGEと将来の開業にとって実質的な強みです。',
    ],
    faqs: [
      {
        question: '中国のMBBSはインドの私立MBBSより優れていますか？',
        answer: '費用では明確にイエス：MOE掲載大学での中国MBBS全課程は、インド私立枠の約3分の1です。臨床経験と制度への慣れではインド私立が有利。認可では双方ともFMGE/NExTが必要——どちらも自動ではありません。',
      },
      {
        question: '中国でMBBSを取った後、インドで開業できますか？',
        answer: 'はい。NBEが実施するFMGE（NExTへ移行中）に合格し、標準のインターン登録を済ませれば可能です。毎年何千人もがそうしています。学位取得中の試験対策が、どこで学んだかより重要です。',
      },
      {
        question: '総合的にどちらが安いですか？',
        answer: '第二級都市の大学での中国MBBSなら総費用US$35–45k程度に収まります。インド私立枠は学費だけで₹60L–1Crを超えるのが通例。インド公立枠は両方より安いですが希少です。',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: '清華大学 vs 北京大学：どちらに出願すべき？',
    headline: '清華大学 vs 北京大学',
    answer:
      '両校は中国の学術の頂点を分け合う2つの半分で、海淀区内で3kmしか離れていません。工学・コンピュータサイエンス・テクノロジー職なら清華、人文・経済・理学・研究の広がりなら北大を選びましょう。留学生の入学難易度はほぼ同等——ランキングではなく、自分の学問分野が求める方に出願してください。',
    entityA: '清華大学',
    entityB: '北京大学',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'アイデンティティ', a: '工学・技術の頂点', b: '人文・理学・政策の広がり' },
      { label: '世界ランキング（QS）', a: 'トップ25、工学トップ10', b: '総合トップ15' },
      { label: '留学生向けの看板', a: 'CS/AI、工学、シュワルツマン、MBA', b: '経済、国際関係、中国研究、燕京' },
      { label: 'キャンパスの性格', a: '赤煉瓦のコレジエート＋近代的な実験棟', b: '皇家庭園、未名湖' },
      { label: '産業との近さ', a: '中関村：百度、字節跳動、マイクロソフトアジア研究院', b: 'シンクタンク、金融、政府ルート' },
      { label: '留学生の規模', a: '全学位で約3,000人以上', b: '全学位で約3,000人以上' },
      { label: '最適な志望者', a: 'STEMの構築者/研究者', b: '分析・政策・人文系の思考' },
    ],
    verdict: {
      winner: '決めるのは学科であってランキングではない',
      text: '工学とCSでは清華の引力はアジアで比類がなく、経済・国際関係・法学・純粋理学では北大の深さと庭園キャンパスが勝ります。留学生にとって出願難易度は同等で、どちらも研究学位の勝率は事前の指導教員コンタクトで大きく上がります——出願が始まる前に私たちが行っている仕事です。',
    },
    body: [
      '両校の対決は親愛で地理的：海淀を挟んでキャンパスが向かい合い、中国の家庭は子どもが成府路のどちら側に住むかを冗談にします。留学生にとって選択は部族性より実用性——学科の強さ、英語授業のメニュー、卒業後のネットワークです。',
      '両校ともCSC B類の入学と大学独自の奨学金（清華の校長奨学金；北大の燕京と各学院の資金）を実施しています。双方とも競争力のある成績を、研究学位では早期の指導教員との関係を期待します。どちらも誰にとっての「滑り止め」ではありません。',
    ],
    faqs: [
      {
        question: '留学生にとってどちらが入るのが難しいですか？',
        answer: '総体ではほぼ同等；境界は学科次第。清華の工学/CS枠は極端に少なく激戦で、北大の経済学と燕京も同様に選抜が厳しい。どちらも強い書類と指導教員の後押しがあれば研究学位は現実的に狙えます。',
      },
      {
        question: '両校ともCSC奨学金はありますか？',
        answer: 'はい——両校ともB類指定大学で、大学自身に直接出願します（直通ルート）。A類の政府ルートは母国の省庁や大使館を通ります。どちらの全額支給も成績にかかわらず競争的；両校に加えて可能性の高い提携大学にも出願してください。',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: '海上輸送 vs 航空輸送：中国からインドへの輸送比較',
    headline: '中国からインドへ：海上輸送 vs 航空輸送',
    answer:
      '海はコストで勝ち——kgあたり5～8倍安い——時間で負けます：港から港まで18～25日、航空なら戸口から戸口まで3～7日。待っても損をしない貨物はすべて海へ；価値密度の高い貨物、新規上市、緊急補充は空へ。ほとんどの調達プログラムでは、基本は海で量を運び、緊急用の空輸ルートを常設するのが正解です。',
    entityA: '海上輸送',
    entityB: '航空輸送',
    pillar: 'trade',
    updated: '2026-11-05',
    rows: [
      { label: '輸送期間（中国 → インド）', a: '18～25日 港⇔港 ＋ 通関', b: '3～7日 戸口⇔戸口' },
      { label: '相対コスト', a: '1×（基準）', b: 'kgあたり5～8×' },
      { label: '最適な用途', a: '大量・補充・低価値密度', b: '新規上市、サンプル、スペア部品、電子機器' },
      { label: '方式', a: 'LCL（混載）またはFCL 20ft/40ft', b: '混載または直行、課金重量ルール' },
      { label: '炭素強度', a: 'トンkmあたり最も低い', b: '高い——トンkmあたり海の20×以上' },
      { label: '主なリスク', a: '港湾混雑、欠航（黄金週間）', b: '運賃急騰（見本市シーズン）' },
      { label: 'キャッシュフローの形状', a: '在庫回転が遅く輸送費負担が小さい', b: '回転が速く損益が輸送費中心' },
    ],
    verdict: {
      winner: '量は海で、速さは空で',
      text: 'デフォルトは海——トライアルは約12～15CBM未満をLCL、規模が出たらFCL——で運用し、新規上市と在庫切れ用に明確な空輸ルートを確保します。重要なのはkgあたり運賃ではなく、販売スピードに対する1単位あたりの着地コスト。当社デスクはご決断前に両方を試算します。',
    },
    body: [
      '港の組み合わせは方式と同じくらい重要：広州/深圳からムンドラまたはJNPTへの幹線回廊（18～25日）に、上海/寧波はさらに2～3日。空はPVG/CANからDEL/BOMへ、通関込みで3～7日戸口から戸口です。',
      'タイミングのリスクは季節性：毎年10月の黄金週間の欠航は海の能力を圧迫し、広交会の期間と春節前の駆け込みは航空運賃を押し上げます。スポットプレミアムを払うのではなく、これらの窓の前後でバッファ在庫を組んでください。',
    ],
    faqs: [
      {
        question: '中国からインドへ航空輸送が理にかなうのはいつ？',
        answer: '3つの場合：市場の日付に間に合わせる必要がある上市在庫、運賃が単位経済に占める割合が小さい高価値密度品、緊急の在庫切れ。それ以外は通常、海です。',
      },
      {
        question: '海運はどれほど安いですか？',
        answer: '中国–インド航路ではkgあたり航空より約5～8倍安く、在庫保有コストは含みません。フルコンテナでは海は比較の対象ではなく、唯一の経済的選択肢です。',
      },
      {
        question: '最初の発注はLCLかFCLか？',
        answer: 'トライアル量（約12～15CBMまで）はLCL——使ったスペース分だけ払います。量が揃って単位あたり計算が勝つようになったらFCLへ。通常は2～3回の発注の後です。',
      },
    ],
  },
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: '中国 vs キルギスの医学部 MBBS：教育・認定・費用比較',
    headline: '中国のMBBS vs キルギスのMBBS',
    answer:
      '総予算 US$38–65k を確保でき、大規模な大学附属病院や安定した公立キャンパス、MOE認定英語コースを求めるなら中国が有力です。キルギスは学費が抑えられます（総額 US$22–32k が多い）が、私立校ごとの臨床実習とFMGE合格実績にばらつきがあります。',
    entityA: '中国のMBBS',
    entityB: 'キルギスのMBBS',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: '5.5〜6年間の総費用', a: 'US$38.5–65k（MOE認定公立）', b: 'US$22–32k（多くが私立）' },
      { label: '附属病院の規模', a: '1,500〜3,000床以上の大学病院', b: '比較的小規模な市立・私立クリニック' },
      { label: 'FMGE / NExT 実績', a: 'MOE認定公立校で安定傾向', b: '新設私立キャンパス間で差が大きい' },
      { label: '言語要件', a: '英語＋臨床実習向けに HSK 4', b: '英語＋病棟でのロシア語/キルギス語' },
      { label: 'キャンパス環境', a: '留学生向け寮整備・高速鉄道網', b: '都市により差；ビシュケク/オシ中心' },
      { label: '奨学金', a: 'CSC・省・大学奨学金あり', b: '限定的；ほぼ私費留学' },
    ],
    verdict: {
      winner: '臨床の厚みは中国；厳格な予算上限ならキルギス',
      text: 'US$40k以上の予算がある場合は、MOE認定の中国公立医大が症例数・設備ともに優位です。キルギスは予算がUS$30k未満に厳しく制限される場合に、各校の臨床ローテーションを確認した上で検討すべき選択肢です。',
    },
    body: [
      '両国とも高額な寄付金を避けて英語で医学を学びたい留学生に選ばれていますが、大学の成り立ちが大きく異なります。',
      '中国のMOE認定45校以上は数千床規模の附属病院を持つ大規模公立大学である一方、キルギスの留学生受け入れは小規模な私立医大に集中しています。',
    ],
    faqs: [
      {
        question: 'キルギスのMBBSは中国より安いですか？',
        answer: '学費総額では US$22–32k 対 US$38.5–65k とキルギスが安価ですが、試験対策費や臨床環境の質も合わせて比較する必要があります。',
      },
      {
        question: '病院実習が充実しているのはどちらですか？',
        answer: '中国の公立医科大学は巨大な三甲附属病院を運営しており、基礎中国語（HSK 4）を習得すれば豊富な症例に触れられます。',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'CSC奨学金 Type A vs Type B：どちらの申請ルートを選ぶべきか',
    headline: 'CSC奨学金 Type A vs Type B',
    answer:
      '志望大学をピンポイントで狙い、指導教員との調整を主導したい場合は Type B（大学直接枠）が適しています。Type A は自国の大使館・教育省経由となり、国別の推薦枠に左右されます。',
    entityA: 'CSC Type A（大使館枠）',
    entityB: 'CSC Type B（大学枠）',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: '申請窓口', a: '自国大使館 / 教育省', b: '中国の大学ポータルへ直接出願' },
      { label: '対象課程', a: '学部・修士・博士・研修生', b: '主に修士・博士（一部学部あり）' },
      { label: '機関コード', a: '大使館 / 派遣機関コード', b: '大学固有の5桁機関コード' },
      { label: '志望校数', a: '最大3校（配属保証なし）', b: 'Type B 1枠につき主志望1校' },
      { label: '締切時期', a: '通常1〜2月（大使館による）', b: '通常12〜3月（大学による）' },
      { label: '仮合格通知の効果', a: '有利だが国別枠が優先', b: '決定的——仮合格と指導教員の推薦が鍵' },
    ],
    verdict: {
      winner: '大学院は Type B；学部は Type A 中心',
      text: '特別枠以外の学部志願者は Type A や省奨学金が中心になります。修士・博士課程では指導教員へ直接アプローチできる Type B の方が効率的です。',
    },
    body: [
      'Type A・Type B ともに支給内容は同一で、授業料全額免除、寮費または住居手当、医療保険、月額生活費（課程により ¥2,500–3,500）が含まれます。',
      '違いは一次審査の主体で、Type A は自国機関、Type B は中国の大学の入試委員会が推薦を行います。',
    ],
    faqs: [
      {
        question: '同じ年に CSC Type A と Type B の両方に出願できますか？',
        answer: '出願自体は可能ですが、CSC規定により最終的に受給できる奨学金は1件のみです。',
      },
      {
        question: 'Type B に仮合格通知（Pre-admission）は必要ですか？',
        answer: 'ほとんどの難関大学で事実上必須です。指導教員の受入内諾と仮合格通知が採択率を大きく引き上げます。',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: '中国旅行 vs 日本旅行：予算・ビザ・鉄道・ルート適合比較',
    headline: '旅行者向け 中国 vs 日本比較',
    answer:
      '初めての東アジア旅行で手軽さと鉄道の正確さ、7〜12日のコンパクトな周遊を求めるなら日本が最適です。圧倒的なスケールや低い滞在費、歴史と現代のコントラストを求めるなら中国——ただしビザと決済アプリの事前設定が鍵になります。',
    entityA: '中国旅行',
    entityB: '日本旅行',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: '1日あたりの標準予算', a: 'US$45–120/日', b: 'US$85–220/日' },
      { label: '鉄道網', a: '世界最大の高速鉄道網；パスポート紐付け電子券', b: '新幹線とICカード；英語案内が充実' },
      { label: '決済手段', a: '海外カード連携の Alipay / WeChat Pay', b: 'クレジットカード、Suica/PASMO、現金' },
      { label: 'ビザ要件', a: '多くの国籍でLビザ必須（15〜30日免除枠あり）', b: 'eVisa・査証または国籍別のビザ免除' },
      { label: '推奨日数', a: '10〜14日（2〜3地域）', b: '7〜12日（東京–京都–大阪）' },
      { label: '言語環境', a: '主要ホテル外は英語少なめ；翻訳アプリ必須', b: '中程度；駅や観光地の英語表示が整う' },
    ],
    verdict: {
      winner: '手軽さなら日本；スケールとコスパなら中国',
      text: '事前準備の少なさと移動のしやすさでは日本が優位です。Alipay/WeChat・eSIM・鉄道手配を整えれば、中国は同予算で倍以上の地域多様性を楽しめます。',
    },
    body: [
      '日本は洗練された都市導線と時間通りの交通が魅力であり、中国は広大な国土と地域ごとの圧倒的な対比が魅力です。',
      '現在はAlipayやWeChat Payに海外カードを直接紐付けられるようになり、北京・西安・成都・桂林・上海を結ぶ高速鉄道も事前予約で快適に利用できます。',
    ],
    faqs: [
      {
        question: '中国と日本、旅行費用が安いのはどちらですか？',
        answer: '東京・京都と比べ、中国は宿泊・高速鉄道・食事の現地費用が概ね35〜45%安く抑えられます。',
      },
      {
        question: '1回の旅行で中国と日本を両方回れますか？',
        answer: '可能です。上海・北京から東京・大阪へは空路2.5〜3.5時間のため、14日間の2か国周遊ルートが組みやすいです。',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: '中国発の海上輸送 LCL vs FCL：損益分岐点とコスト比較',
    headline: '中国発 LCL vs FCL 海上輸送',
    answer:
      '~12–15 CBM未満のテスト発注には、使用容積分だけ支払う LCL（混載便）が適しています。14–16+ CBM以上に達したら 20ft FCL（コンテナ貸切）へ切り替えると、定額運賃が到着地CFS費用を下回り破損リスクも減ります。',
    entityA: 'LCL（混載便）',
    entityB: 'FCL（コンテナ貸切）',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: '適した貨物量', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: '料金体系', a: 'CBM/トン単価＋到着地CFS諸費用', b: 'コンテナ単位の定額レート' },
      { label: 'ドア・ツー・ドア日数', a: '混載・デバンニングで+3〜5日', b: '港湾処理が速く工場封印で直送' },
      { label: '破損リスク', a: '高め（CFS倉庫での複数回荷役）', b: '低め（工場または集約倉庫で封印）' },
      { label: '到着地費用', a: '未確認だと高額なCFS費用が発生しやすい', b: 'THC・通関費用の見通しが立てやすい' },
    ],
    verdict: {
      winner: '~13 CBM未満はLCL；14–15 CBM以上はFCL',
      text: '5 CBMでFCLを組むのも、16 CBMをLCLで送るのも非効率です。海上運賃単体ではなく、発地・海上・着地THC/CFSを含む総着地コストで比較してください。',
    },
    body: [
      '初めての輸入では海上運賃だけを見て着地のCFS（コンテナ・フレート・ステーション）費用を見落としがちです。13〜15 CBM前後で20ft FCLの方が総額で割安になります。',
      '複数工場から仕入れる場合は、広州や義烏の倉庫で貨物を集約し、1本の封印FCLとして出荷する方法が有効です。',
    ],
    faqs: [
      {
        question: '何CBMからFCLの方がLCLより安くなりますか？',
        answer: '到着地のCFSおよび取扱手数料を含めると、20ftコンテナでは概ね13〜15 CBMが損益分岐点です。',
      },
      {
        question: '複数サプライヤーの貨物を1本のFCLに混載できますか？',
        answer: 'はい。広州・深圳・義烏でのバイヤーズ・コンソリデーションにより、複数工場のカートンを1本の封印コンテナにまとめられます。',
      },
    ],
  },
];

/* pt — machine-assisted translation, pending native-speaker review. */
const COMPARISONS_PT: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'MBBS na China vs Índia: custos, reconhecimento e veredito',
    headline: 'MBBS na China vs MBBS na Índia',
    answer:
      'Escolha a Índia se você puder conquistar uma vaga pública — continua sendo o caminho reconhecido mais barato. Escolha a China quando a alternativa indiana realista é uma vaga privada de ₹60L–1Cr: um MBBS chinês numa universidade da lista do MOE entrega reconhecimento comparável por cerca de um terço do custo, com a condição inegociável de que, como graduado médico estrangeiro, você passe na triagem FMGE/NExT ao voltar (graduados indianos se registram via NExT — as regras de elegibilidade dependem do seu ano de admissão, verifique a regulamentação atual do NMC antes de se comprometer).',
    entityA: 'MBBS na China',
    entityB: 'MBBS na Índia',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'Mensalidade (por ano)', a: 'US$3,500–8,000 (universidades listadas MOE)', b: 'Pública: ₹10k–1L · Privada: ₹8–20L' },
      { label: 'Custo total do curso', a: 'US$38,5–83 mil completo (5,5 anos)', b: 'Pública: ₹5–10L · Privada: ₹60L–1Cr+' },
      { label: 'Exame de licença para exercer na Índia', a: 'Triagem FMGE/NExT (só graduados estrangeiros)', b: 'NExT / registro universitário — FMGE não se aplica a graduados indianos' },
      { label: 'Idioma de instrução', a: 'Inglês (HSK 4 necessário nos anos clínicos)', b: 'Inglês (privadas) / línguas regionais' },
      { label: 'Portão de admissão', a: 'Qualificação NEET + PCB no 12.º ano', b: 'Classificação NEET (pública) / qualificação NEET (privada)' },
      { label: 'Custo de vida', a: 'US$300–850/mês conforme a cidade', b: '₹12–30k/mês conforme a cidade' },
      { label: 'Bolsas', a: 'CSC + bolsas universitárias podem zerar a mensalidade', b: 'Raras em faculdades privadas; cotas estaduais' },
      { label: 'Exposição a pacientes', a: 'Forte em hospitais universitários; depende do idioma', b: 'Forte; o idioma é o nativo' },
      { label: 'Maior risco', a: 'Universidades fora da lista + negligenciar o idioma', b: 'Doações capitais + escassez de vagas' },
    ],
    verdict: {
      winner: 'Depende do seu resultado no NEET',
      text: 'Vaga pública de MBBS na Índia → pegue, ponto final. Sem vaga pública e orçamento apertado → a China listada no MOE vence qualquer vaga privada indiana em custo, com esforço de reconhecimento equivalente (FMGE para graduados da China; graduados indianos se registram via NExT). Pagar ₹1Cr numa privada com recursos disponíveis e sem vontade de adaptação no exterior → a privada na Índia continua racional. Os dois modos de falha a evitar: universidades chinesas fora da lista, e escolher a China ignorando a preparação de HSK e FMGE.',
    },
    body: [
      'A comparação que a maioria das famílias indianas realmente enfrenta não é China contra Índia no abstrato — é China contra a única opção indiana de que dispõem: uma vaga privada com preço de sete dígitos. Encarada assim, a decisão fica mais clara.',
      'O reconhecimento é simétrico: um MBBS de qualquer lado da fronteira exige passar no FMGE/NExT para exercer na Índia (graduados de faculdades privadas indianas também enfrentam o NExT). O que muda é o custo de obter o diploma e a disciplina que o caminho do exterior exige — idioma, independência e higiene documental.',
      'O sistema de MBBS chinês é feito sob medida para estudantes internacionais: trilhas em inglês em universidades da lista do MOE, tabelas de tarifas previsíveis e infraestrutura de alojamento. A vantagem da Índia é a exposição clínica no seu próprio sistema de saúde desde o primeiro dia — uma força genuína para o FMGE e a prática futura.',
    ],
    faqs: [
      {
        question: 'O MBBS chinês é melhor que o MBBS privado indiano?',
        answer: 'No custo, decisivamente sim: um MBBS chinês completo numa universidade da lista do MOE custa cerca de um terço de uma vaga privada indiana. Em exposição clínica e familiaridade com o sistema, vencem as privadas indianas. Em reconhecimento, ambos precisam de FMGE/NExT — nenhum é automático.',
      },
      {
        question: 'Posso exercer na Índia depois de um MBBS na China?',
        answer: 'Sim, depois de passar no FMGE (em transição para o NExT) conduzido pelo NBE, mais o registro de internato padrão. Milhares fazem isso todos os anos; a preparação durante o curso importa mais do que onde você estudou.',
      },
      {
        question: 'Qual é mais barato no total?',
        answer: 'Um MBBS chinês numa universidade de cidade de segundo nível pode ficar perto de US$35–45 mil completo. Vagas privadas indianas costumam passar de ₹60L–1Cr só em mensalidade. Vagas públicas indianas são mais baratas que ambas, mas escassas.',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'Tsinghua vs Peking University: em qual se candidatar?',
    headline: 'Tsinghua vs Peking University',
    answer:
      'São duas metades do pico acadêmico da China, a 3 km uma da outra em Haidian. Tsinghua para engenharia, computação e carreiras tecnológicas; Peking para humanidades, economia, ciências e amplitude de pesquisa. A dificuldade de admissão internacional é comparável — candidate-se àquela que sua área pede, não à que um ranking indica.',
    entityA: 'Universidade Tsinghua',
    entityB: 'Universidade de Pequim (Peking University)',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'Identidade', a: 'Supremacia em engenharia e tecnologia', b: 'Amplitude em humanidades, ciências e políticas públicas' },
      { label: 'Posição global (QS)', a: 'Top-25, engenharia top-10', b: 'Top-15 geral' },
      { label: 'Carros-chefes para internacionais', a: 'CS/IA, engenharia, Schwarzman, MBA', b: 'Economia, RI, estudos chineses, Yenching' },
      { label: 'Caráter do campus', a: 'Colegial de tijolo vermelho + laboratórios modernos', b: 'Jardins imperiais, lago Weiming' },
      { label: 'Vizinhança industrial', a: 'Zhongguancun: Baidu, ByteDance, MSR Asia', b: 'Think tanks, finanças, caminhos governamentais' },
      { label: 'Coorte internacional', a: '~3.000+ nos cursos', b: '~3.000+ nos cursos' },
      { label: 'Candidato ideal', a: 'Construtor/pesquisador em STEM', b: 'Mente analítica/pública/humanista' },
    ],
    verdict: {
      winner: 'A área decide, não os rankings',
      text: 'Para engenharia e computação, a atração de Tsinghua não tem rival na Ásia; para economia, relações internacionais, direito ou ciências puras, vencem a profundidade de Peking e seu campus-jardim. A dificuldade de candidatura é comparável para estudantes internacionais; as chances em pesquisa melhoram muito nas duas com contato prévio com o orientador — o trabalho que fazemos antes de as candidaturas abrirem.',
    },
    body: [
      'A rivalidade é afetuosa e geográfica: os dois campi se encaram através de Haidian, e famílias chinesas brincam sobre de que lado da estrada Chengfu um filho mora. Para candidatos internacionais a escolha é menos tribal e mais prática — força do departamento, oferta em inglês e rede pós-graduação.',
      'As duas universidades administram admissões CSC Tipo B e bolsas universitárias (os prêmios presidenciais de Tsinghua; o Yenching e financiamentos de escolas de Peking). Ambas esperam notas competitivas e, nos títulos de pesquisa, engajamento precoce do orientador. Nenhuma é “segurança” para ninguém.',
    ],
    faqs: [
      {
        question: 'Qual é mais difícil de entrar para estudantes internacionais?',
        answer: 'Comparável no geral; dependente da área nas bordas. O cupo de engenharia/CS de Tsinghua é minúsculo e feroz; as coortes de economia e Yenching de Peking são igualmente seletivas. Admissão de pesquisa é vencível de forma realista nas duas com dossiês fortes e apoio do orientador.',
      },
      {
        question: 'As duas oferecem bolsas CSC?',
        answer: 'Sim — ambas são universidades designadas Tipo B, ou seja, você se candidata pela própria universidade (a via direta). O canal governamental Tipo A passa pelo seu ministério ou embaixada de origem, não pela universidade. As concessões integrais nas duas são competitivas, independentemente das notas; candidate-se às duas mais uma universidade parceira de alta probabilidade.',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'Frete marítimo vs aéreo: comparação de envios da China para a Índia',
    headline: 'Frete marítimo vs aéreo da China para a Índia',
    answer:
      'O mar vence no custo — 5–8× mais barato por kg — e perde no tempo: 18–25 dias porta a porta contra 3–7 dias porta a porta pelo ar. Envie por mar tudo o que não perde dinheiro esperando; voe mercadorias de alta densidade de valor, lançamentos e reposições urgentes. Para a maioria dos programas de sourcing, a resposta certa é mar para volume mais uma rota aérea permanente para emergências.',
    entityA: 'Frete marítimo',
    entityB: 'Frete aéreo',
    pillar: 'trade',
    updated: '2026-11-05',
    rows: [
      { label: 'Trânsito (China → Índia)', a: '18–25 dias porta a porta + alfândega', b: '3–7 dias porta a porta' },
      { label: 'Custo relativo', a: '1× (linha de base)', b: '5–8× por kg' },
      { label: 'Melhor para', a: 'Volume, reposição, baixa densidade de valor', b: 'Lançamentos, amostras, peças, eletrônicos' },
      { label: 'Modos', a: 'LCL (compartilhado) ou FCL 20ft/40ft', b: 'Consol ou direto, regras de peso tarifável' },
      { label: 'Intensidade de carbono', a: 'A menor por tonelada-km', b: 'Alta — 20×+ o mar por tonelada-km' },
      { label: 'Risco principal', a: 'Congestionamento portuário, saídas canceladas (Golden Week)', b: 'Picos de preço de capacidade (temporada de feiras)' },
      { label: 'Forma do fluxo de caixa', a: 'Giro lento de estoque, menor gasto de frete', b: 'Giro rápido, DRE pesado em frete' },
    ],
    verdict: {
      winner: 'Mar para volume, ar para velocidade',
      text: 'Opere o padrão no mar — LCL para testes abaixo de ~12–15 CBM, FCL em escala — e mantenha uma rota aérea definida para lançamentos e rupturas de estoque. A conta que importa não é o frete por kg, mas o custo posto em destino por unidade contra sua velocidade de venda; nossa mesa modela os dois antes de você se comprometer.',
    },
    body: [
      'Os pares de portos importam tanto quanto o modo: Guangzhou/Shenzhen para Mundra ou JNPT é o corredor de trabalho (18–25 dias), com Shanghai/Ningbo somando 2–3 dias. O ar vai via PVG/CAN para DEL/BOM em 3–7 dias porta a porta, desembaraço incluído.',
      'Os riscos de calendário são sazonais: as saídas canceladas da Golden Week comprimem a capacidade marítima todo outubro, enquanto as semanas da Canton Fair e a corrida pré-Ano Novo Chinês disparam as tarifas aéreas. Monte estoque colchão em torno dessas janelas em vez de pagar prêmios spot.',
    ],
    faqs: [
      {
        question: 'Quando o frete aéreo da China para a Índia faz sentido?',
        answer: 'Três casos: estoque de lançamento que precisa cumprir uma data de mercado, bens de alta densidade de valor em que o frete é fatia pequena da economia unitária, e rupturas de estoque de emergência. Todo o resto geralmente vai por mar.',
      },
      {
        question: 'Quanto mais barato é o frete marítimo?',
        answer: 'Cerca de 5–8× mais barato por kg que o aéreo na rota China–Índia, antes dos custos de manter estoque. Para contêineres cheios, o mar não é uma comparação — é a única opção econômica.',
      },
      {
        question: 'LCL ou FCL para o primeiro pedido?',
        answer: 'LCL para volumes de teste (até ~12–15 CBM) — você paga só o espaço que usa. Mude para FCL quando os volumes fizerem a matemática por unidade vencer, tipicamente após 2–3 pedidos.',
      },
    ],
  },
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'MBBS na China vs Quirguistão: ensino, reconhecimento e custo',
    headline: 'MBBS na China vs Quirguistão',
    answer:
      'Escolha a China se seu orçamento cobrir US$38–65k no total e você quiser grandes hospitais universitários, campi públicos estruturados e cursos em inglês listados pelo MOE. O Quirguistão tem mensalidades menores (muitas vezes US$22–32k no total), mas a exposição clínica e a consistência no FMGE variam muito entre faculdades privadas.',
    entityA: 'MBBS na China',
    entityB: 'MBBS no Quirguistão',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Custo total (5,5–6 anos)', a: 'US$38,5–65k (públicas listadas MOE)', b: 'US$22–32k (maioria privada)' },
      { label: 'Porte hospitalar', a: 'Hospitais afiliados com 1.500–3.000+ leitos', b: 'Clínicas municipais/privadas menores' },
      { label: 'Desempenho FMGE / NExT', a: 'Mais regular nas públicas listadas MOE', b: 'Desigual em campi privados recentes' },
      { label: 'Exigência de idioma', a: 'Inglês + HSK 4 para anos clínicos', b: 'Inglês + russo/quirguiz na enfermaria' },
      { label: 'Infraestrutura', a: 'Campi internacionais dedicados, trem-bala', b: 'Variável; concentrado em Bishkek/Osh' },
      { label: 'Bolsas de estudo', a: 'CSC e bolsas provinciais/universitárias', b: 'Limitadas; quase todo autofinanciado' },
    ],
    verdict: {
      winner: 'China para profundidade clínica; Quirguistão só com orçamento estrito',
      text: 'Com orçamento familiar acima de US$40k, universidades públicas chinesas listadas pelo MOE oferecem volume hospitalar e laboratórios muito superiores. O Quirguistão só faz sentido abaixo de US$30k após checagem rigorosa das rotações clínicas.',
    },
    body: [
      'Ambos os destinos atraem estudantes internacionais em busca de medicina em inglês sem taxas privadas exorbitantes, mas seus ecossistemas universitários são bem distintos.',
      'As mais de 45 universidades médicas listadas pelo MOE na China são grandes instituições públicas com hospitais de milhares de leitos, enquanto o Quirguistão concentra alunos internacionais em academias privadas menores.',
    ],
    faqs: [
      {
        question: 'MBBS no Quirguistão é mais barato que na China?',
        answer: 'Sim na anuidade nominal: US$22–32k no total contra US$38,5–65k em públicas chinesas listadas pelo MOE, mas considere preparação para exames e qualidade clínica.',
      },
      {
        question: 'Qual país oferece melhor prática hospitalar?',
        answer: 'As universidades médicas públicas chinesas operam grandes hospitais Classe 3A com alto fluxo de pacientes, desde que o aluno alcance o HSK 4.',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'Bolsa CSC Tipo A vs Tipo B: qual via escolher?',
    headline: 'Bolsa CSC Tipo A vs Tipo B',
    answer:
      'Candidate-se pelo Tipo B (direto na universidade) se quiser maior controle, alinhamento rápido com orientador e foco direto em universidades específicas. O Tipo A passa pela embaixada ou ministério do seu país com cotas bilaterais mais rígidas.',
    entityA: 'CSC Tipo A (Embaixada)',
    entityB: 'CSC Tipo B (Universidade)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'Canal de inscrição', a: 'Embaixada / ministério da educação local', b: 'Diretamente no portal da universidade chinesa' },
      { label: 'Níveis elegíveis', a: 'Graduação, Mestrado, Doutorado e visitantes', b: 'Principalmente Mestrado e Doutorado (e algumas graduações)' },
      { label: 'Número da agência', a: 'Código da embaixada / órgão indicador', b: 'Código de 5 dígitos da universidade' },
      { label: 'Escolhas de universidade', a: 'Até 3 opções (sem garantia)', b: '1 universidade principal por candidatura Tipo B' },
      { label: 'Janela de prazo', a: 'Geralmente jan.–fev. (via embaixada)', b: 'Geralmente dez.–mar. (via universidade)' },
      { label: 'Carta de pré-admissão', a: 'Ajuda, mas depende da cota nacional', b: 'Decisiva — pré-admissão e orientador pesam muito' },
    ],
    verdict: {
      winner: 'Tipo B para pós-graduação; Tipo A para graduação',
      text: 'Candidatos à graduação fora de acordos especiais costumam depender do Tipo A ou de bolsas provinciais. Para Mestrado e Doutorado, o Tipo B é mais ágil e premia contato prévio com orientadores.',
    },
    body: [
      'Tanto o Tipo A quanto o Tipo B oferecem exatamente os mesmos benefícios da bolsa CSC: isenção total de mensalidade, moradia no campus, seguro médico e auxílio mensal (¥2.500–3.500 conforme o nível).',
      'A diferença está em quem faz a triagem inicial: o órgão nacional no Tipo A versus o comitê de admissão da universidade chinesa no Tipo B.',
    ],
    faqs: [
      {
        question: 'Posso me inscrever no CSC Tipo A e Tipo B no mesmo ano?',
        answer: 'Sim, você pode enviar candidaturas nos dois canais, mas as regras do CSC permitem aceitar apenas uma bolsa final.',
      },
      {
        question: 'Preciso de carta de pré-admissão para o Tipo B?',
        answer: 'Na maioria das universidades concorridas sim — ter aceite de orientador e pré-admissão eleva muito as chances.',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'Viagem China vs Japão: custos, visto, trens e roteiro',
    headline: 'China vs Japão para viajantes',
    answer:
      'Escolha o Japão para uma primeira viagem tranquila pela Ásia Oriental, trens pontuais e um circuito compacto de 7–12 dias. Escolha a China pela escala monumental, menor custo diário e diversidade imensa — após configurar visto e pagamentos digitais antes do embarque.',
    entityA: 'Viagem na China',
    entityB: 'Viagem no Japão',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'Orçamento diário médio', a: 'US$45–120/dia', b: 'US$85–220/dia' },
      { label: 'Rede ferroviária', a: 'Maior rede de alta velocidade; bilhete no passaporte', b: 'Shinkansen e cartões IC; sinalização em inglês' },
      { label: 'Pagamentos e apps', a: 'Alipay / WeChat Pay com cartão internacional', b: 'Cartões, Suica/PASMO e dinheiro' },
      { label: 'Visto', a: 'Visto L para maioria dos passaportes (ou isenções 15–30d)', b: 'eVisa / visto ou isenção conforme passaporte' },
      { label: 'Duração ideal', a: '10–14 dias (2–3 regiões)', b: '7–12 dias (Tóquio–Quioto–Osaka)' },
      { label: 'Barreira do idioma', a: 'Alta fora de grandes hotéis; app tradutor essencial', b: 'Moderada; estações bem sinalizadas em inglês' },
    ],
    verdict: {
      winner: 'Japão pela praticidade; China pela escala e custo-benefício',
      text: 'O Japão exige menos preparação digital e tem distâncias curtas. A China entrega o dobro de variedade geográfica por dólar quando Alipay/WeChat, eSIM e trens estão prontos.',
    },
    body: [
      'O Japão se destaca pelo refinamento e pontualidade; a China impressiona pela escala monumental e contrastes entre capitais imperiais e paisagens cársticas.',
      'Com cartões estrangeiros aceitos no Alipay e WeChat Pay e trens-bala ligando Pequim, Xi’an, Chengdu, Guilin e Xangai, viajar pela China ficou muito mais acessível com preparo prévio.',
    ],
    faqs: [
      {
        question: 'Qual país é mais barato para visitar: China ou Japão?',
        answer: 'A China costuma ser 35–45% mais econômica em hotéis, trens de alta velocidade e alimentação diária em comparação a Tóquio e Quioto.',
      },
      {
        question: 'É possível combinar China e Japão na mesma viagem?',
        answer: 'Sim — voos de Xangai ou Pequim para Tóquio ou Osaka levam 2,5–3,5 horas, tornando viável um roteiro de 14 dias pelos dois países.',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'Frete marítimo LCL vs FCL da China: ponto de equilíbrio e custos',
    headline: 'LCL vs FCL da China',
    answer:
      'Use LCL (carga compartilhada) para pedidos-teste abaixo de ~12–15 CBM para pagar apenas pelo volume ocupado. Migre para contêiner fechado FCL de 20 pés a partir de 14–16+ CBM, onde a tarifa fechada vence as taxas de CFS no destino e reduz avarias.',
    entityA: 'LCL (Contêiner compartilhado)',
    entityB: 'FCL (Contêiner fechado)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'Volume ideal', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'Modelo de preço', a: 'Por CBM / tonelada + taxas CFS no destino', b: 'Tarifa fixa por contêiner' },
      { label: 'Prazo porta a porta', a: '+3–5 dias para consolidação e desconsolidação', b: 'Giro portuário mais rápido e lacrado na fábrica' },
      { label: 'Risco de avaria', a: 'Maior (manuseio múltiplo em armazém CFS)', b: 'Menor (lacrado no fornecedor ou hub)' },
      { label: 'Taxas no destino', a: 'Surpresas de CFS por CBM sem cotação completa', b: 'THC e desembaraço previsíveis por contêiner' },
    ],
    verdict: {
      winner: 'LCL abaixo de ~13 CBM; FCL a partir de 14–15 CBM',
      text: 'Não feche um FCL para 5 CBM nem embarque 16 CBM em LCL — as taxas de CFS no destino anulam a economia aparente. Compare sempre o custo total nacionalizado.',
    },
    body: [
      'Novos importadores muitas vezes olham só para o frete marítimo e ignoram as taxas de Container Freight Station (CFS) no destino. Por volta de 13–15 CBM, um FCL de 20 pés já fica mais barato no total.',
      'Para quem compra de vários fornecedores, é possível consolidar cargas de 2–3 fábricas em Guangzhou ou Yiwu em um único FCL lacrado.',
    ],
    faqs: [
      {
        question: 'A partir de quantos CBM o FCL fica mais barato que o LCL?',
        answer: 'Normalmente entre 13 e 15 CBM para um contêiner de 20 pés, incluindo taxas de CFS e manuseio no destino.',
      },
      {
        question: 'Posso juntar vários fornecedores em um único FCL?',
        answer: 'Sim — por meio de consolidação em Guangzhou, Shenzhen ou Yiwu você reúne caixas de várias fábricas em um só contêiner lacrado.',
      },
    ],
  },
];

/* hi — machine-assisted translation, pending native-speaker review. */
const COMPARISONS_HI: Comparison[] = [
  {
    slug: 'mbbs-china-vs-india',
    title: 'चीन बनाम भारत में MBBS: लागत, मान्यता और निष्कर्ष',
    headline: 'चीन MBBS बनाम भारत MBBS',
    answer:
      'अगर आप सरकारी सीट जीत सकते हैं तो भारत चुनें — यह मान्यता प्राप्त सबसे सस्ता रास्ता बना हुआ है। जब वास्तविक भारतीय विकल्प ₹60L–1Cr की प्राइवेट सीट हो, तब चीन चुनें: MOE सूची में शामिल चीनी MBBS लगभग एक-तिहाई लागत में तुलनीय मान्यता देता है, बशर्ते — यह बातचीत-से-बाहर शर्त है — कि विदेशी मेडिकल ग्रेजुएट के रूप में लौटते समय आप FMGE/NExT स्क्रीनिंग पास करें (भारतीय ग्रेजुएट NExT से रजिस्टर होते हैं — पात्रता नियम आपके प्रवेश वर्ष पर निर्भर हैं, प्रतिबद्ध होने से पहले वर्तमान NMC नियम जाँचें)।',
    entityA: 'चीन में MBBS',
    entityB: 'भारत में MBBS',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'ट्यूशन (प्रति वर्ष)', a: 'US$3,500–8,000 (MOE सूचीबद्ध)', b: 'सरकारी: ₹10k–1L · प्राइवेट: ₹8–20L' },
      { label: 'कुल कार्यक्रम लागत', a: 'US$38.5–83k सब मिलाकर (5.5 वर्ष)', b: 'सरकारी: ₹5–10L · प्राइवेट: ₹60L–1Cr+' },
      { label: 'भारत में प्रैक्टिस के लिए लाइसेंस परीक्षा', a: 'FMGE/NExT स्क्रीनिंग (केवल विदेशी ग्रेजुएट)', b: 'NExT / विश्वविद्यालय पंजीकरण — FMGE भारतीय ग्रेजुएट पर लागू नहीं' },
      { label: 'शिक्षा का माध्यम', a: 'अंग्रेज़ी (क्लिनिकल वर्षों के लिए HSK 4 चाहिए)', b: 'अंग्रेज़ी (प्राइवेट) / क्षेत्रीय भाषाएँ' },
      { label: 'प्रवेश द्वार', a: 'NEET योग्यता + कक्षा 12 PCB', b: 'NEET रैंक (सरकारी) / NEET योग्यता (प्राइवेट)' },
      { label: 'जीवन-यापन लागत', a: 'US$300–850/माह शहर अनुसार', b: '₹12–30k/माह शहर अनुसार' },
      { label: 'छात्रवृत्तियाँ', a: 'CSC + विश्वविद्यालय पुरस्कार ट्यूशन शून्य तक घटा सकते हैं', b: 'प्राइवेट कॉलेजों में दुर्लभ; राज्य कोटा' },
      { label: 'मरीज़ों का संपर्क', a: 'संबद्ध अस्पतालों में मज़बूत; भाषा पर निर्भर', b: 'मज़बूत; भाषा मातृभाषा' },
      { label: 'सबसे बड़ा जोखिम', a: 'सूची-बाहर विश्वविद्यालय + भाषा की उपेक्षा', b: 'कैपिटेशन फ़ीस + सीटों की कमी' },
    ],
    verdict: {
      winner: 'आपके NEET नतीजे पर निर्भर',
      text: 'भारत में सरकारी MBBS सीट → ले लो, बस। सरकारी सीट नहीं और बजट तंग → समान मान्यता प्रयास (चीन ग्रेजुएट के लिए FMGE; भारतीय ग्रेजुएट NExT से रजिस्टर) में MOE-सूचीबद्ध चीन लागत पर किसी भी भारतीय प्राइवेट सीट से बेहतर। धन उपलब्ध होने पर भी ₹1Cr प्राइवेट देना और विदेशी अनुकूलन की इच्छा न होना → भारत प्राइवेट तर्कसंगत है। दो असफलता-पैटर्न जिनसे बचें: सूची-बाहर चीनी विश्वविद्यालय, और चीन चुनकर HSK व FMGE तैयारी की उपेक्षा।',
    },
    body: [
      'ज़्यादातर भारतीय परिवारों के सामने असली तुलना भावनात्मक “चीन बनाम भारत” नहीं है — बल्कि चीन बनाम उनका एकमात्र भारतीय विकल्प: सात अंकों की क़ीमत वाली प्राइवेट सीट। इस ढाँचे में सोचें तो फ़ैसला साफ़ हो जाता है।',
      'मान्यता सममित है: सीमा के दोनों ओर का MBBS भारत में प्रैक्टिस के लिए FMGE/NExT पास करने को कहता है (भारतीय प्राइवेट कॉलेजों के ग्रेजुएट भी NExT का सामना करते हैं)। फ़र्क़ डिग्री हासिल करने की लागत और विदेश रास्ते की अनुशासन माँग में है — भाषा, आत्मनिर्भरता और दस्तावेज़-सफ़ाई।',
      'चीन का MBBS तंत्र अंतरराष्ट्रीय प्रवेश के लिए बना है: MOE-सूचीबद्ध विश्वविद्यालयों में अंग्रेज़ी-माध्यम ट्रैक, पूर्वानुमेय फ़ीस तालिकाएँ और छात्रावास बुनियादी ढाँचा। भारत का फ़ायदा पहले दिन से अपनी स्वास्थ्य प्रणाली में क्लिनिकल अनुभव है — FMGE और भविष्य की प्रैक्टिस के लिए वास्तविक शक्ति।',
    ],
    faqs: [
      {
        question: 'क्या चीनी MBBS भारतीय प्राइवेट MBBS से बेहतर है?',
        answer: 'लागत पर, निर्णायक रूप से हाँ: MOE-सूचीबद्ध चीनी MBBS पूरा करने की लागत भारतीय प्राइवेट सीट की लगभग एक-तिहाई है। क्लिनिकल संपर्क और प्रणाली परिचय पर भारतीय प्राइवेट बेहतर। मान्यता पर दोनों को FMGE/NExT चाहिए — कोई भी स्वतः नहीं।',
      },
      {
        question: 'क्या चीन से MBBS के बाद भारत में प्रैक्टिस कर सकता हूँ?',
        answer: 'हाँ, NBE द्वारा आयोजित FMGE (NExT में तब्दील हो रही) पास करने और मानक इंटर्न पंजीकरण के बाद। हर साल हज़ारों लोग यह करते हैं; डिग्री के दौरान तैयारी, आपने कहाँ पढ़ा उससे ज़्यादा मायने रखती है।',
      },
      {
        question: 'कुल मिलाकर कौन सस्ता है?',
        answer: 'द्वितीय श्रेणी शहर के विश्वविद्यालय में चीनी MBBS सब मिलाकर लगभग US$35–45k तक आ सकता है। भारतीय प्राइवेट सीटें अक्सर केवल ट्यूशन में ₹60L–1Cr पार करती हैं। सरकारी भारतीय सीटें दोनों से सस्ती पर दुर्लभ।',
      },
    ],
  },
  {
    slug: 'tsinghua-vs-peking',
    title: 'त्सिंगहुआ बनाम पेकिंग यूनिवर्सिटी: किसमें आवेदन करें?',
    headline: 'त्सिंगहुआ बनाम पेकिंग यूनिवर्सिटी',
    answer:
      'ये चीन की शैक्षिक चोटी के दो आधे हिस्से हैं, हाइडियन में 3 किमी दूर। इंजीनियरिंग, कंप्यूटर साइंस और टेक्नोलॉजी करियर के लिए त्सिंगहुआ; मानविकी, अर्थशास्त्र, विज्ञान और शोध व्याप्ति के लिए पेकिंग चुनें। अंतरराष्ट्रीय प्रवेश कठिनाई तुलनीय है — रैंकिंग की नहीं, अपने विषय की ज़रूरत वाले विश्वविद्यालय में आवेदन करें।',
    entityA: 'त्सिंगहुआ विश्वविद्यालय',
    entityB: 'पेकिंग विश्वविद्यालय',
    pillar: 'education',
    updated: '2026-11-05',
    rows: [
      { label: 'पहचान', a: 'इंजीनियरिंग और तकनीक की सर्वोच्चता', b: 'मानविकी, विज्ञान और नीति की व्याप्ति' },
      { label: 'वैश्विक स्थान (QS)', a: 'टॉप-25, इंजीनियरिंग टॉप-10', b: 'कुल में टॉप-15' },
      { label: 'अंतरराष्ट्रीय छात्रों के लिए प्रमुख कार्यक्रम', a: 'CS/AI, इंजीनियरिंग, श्वार्ट्ज़मैन, MBA', b: 'अर्थशास्त्र, अंतरराष्ट्रीय संबंध, चीनी अध्ययन, येनचिंग' },
      { label: 'कैंपस का स्वभाव', a: 'लाल-ईंट कॉलेजिएट + आधुनिक लैब', b: 'शाही बाग, वेइमिंग झील' },
      { label: 'उद्योग निकटता', a: 'झोंगग्वानचुन: बैडू, बाइटडांस, MSR एशिया', b: 'थिंक टैंक, वित्त, सरकारी मार्ग' },
      { label: 'अंतरराष्ट्रीय समूह', a: 'सभी डिग्री में ~3,000+', b: 'सभी डिग्री में ~3,000+' },
      { label: 'सबसे उपयुक्त आवेदक', a: 'STEM का निर्माता/शोधकर्ता', b: 'विश्लेषक/नीति/मानविकी मस्तिष्क' },
    ],
    verdict: {
      winner: 'विषय फ़ैसला करता है, रैंकिंग नहीं',
      text: 'इंजीनियरिंग और CS में त्सिंगहुआ का आकर्षण एशिया में अद्वितीय है; अर्थशास्त्र, अंतरराष्ट्रीय संबंध, कानून या शुद्ध विज्ञान में पेकिंग की गहराई और बाग-कैंपस जीतते हैं। अंतरराष्ट्रीय छात्रों के लिए आवेदन कठिनाई तुलनीय है; दोनों में शोध-डिग्री की संभावनाएँ पूर्व-सलाहकार संपर्क से तेज़ी से बेहतर होती हैं — यही वह काम है जो हम आवेदन खुलने से पहले करते हैं।',
    },
    body: [
      'यह प्रतिद्वंद्विता सौम्य और भौगोलिक है: हाइडियन में दोनों कैंपस आमने-सामने हैं, और चीनी परिवार हँसते हैं कि बच्चा चेंगफ़ू रोड के किस पार्श्व में रहता है। अंतरराष्ट्रीय आवेदकों के लिए चुनाव कम गुटबाज़, अधिक व्यावहारिक है — विभाग की ताक़त, अंग्रेज़ी-माध्यम का मेनू और पढ़ाई के बाद का नेटवर्क।',
      'दोनों विश्वविद्यालय CSC टाइप B प्रवेश और विश्वविद्यालय-स्तरीय छात्रवृत्तियाँ चलाते हैं (त्सिंगहुआ के अध्यक्षीय पुरस्कार; पेकिंग का येनचिंग और स्कूल-स्तरीय वित्तपोषण)। दोनों प्रतिस्पर्धी अंक चाहते हैं, और शोध-डिग्री के लिए जल्दी सलाहकार-संपर्क। कोई भी किसी के लिए “सेफ़्टी” नहीं है।',
    ],
    faqs: [
      {
        question: 'अंतरराष्ट्रीय छात्रों के लिए किसमें प्रवेश कठिन है?',
        answer: 'कुल में तुलनीय; किनारों पर विषय-आधारित। त्सिंगहुआ का इंजीनियरिंग/CS कोटा छोटा और कठोर है; पेकिंग के अर्थशास्त्र और येनचिंग समूह भी उतने ही चयनात्मक। दोनों में मज़बूत फ़ाइल और सलाहकार समर्थन से शोध-प्रवेश वास्तविक रूप से जीता जा सकता है।',
      },
      {
        question: 'क्या दोनों CSC छात्रवृत्तियाँ देती हैं?',
        answer: 'हाँ — दोनों टाइप B नामित विश्वविद्यालय हैं, यानी आप विश्वविद्यालय के ज़रिए ही आवेदन करते हैं (सीधा मार्ग)। टाइप A सरकारी मार्ग आपके देश के मंत्रालय या दूतावास से होकर जाता है, विश्वविद्यालय से नहीं। दोनों में पूर्ण वित्तपोषण अंक चाहे जो हों प्रतिस्पर्धी हैं; दोनों में, साथ में एक अधिक-संभावना पार्टनर विश्वविद्यालय में आवेदन करें।',
      },
    ],
  },
  {
    slug: 'sea-vs-air-freight',
    title: 'समुद्री बनाम हवाई मालभाड़ा: चीन से भारत शिपिंग तुलना',
    headline: 'चीन से भारत: समुद्री बनाम हवाई मालभाड़ा',
    answer:
      'समुद्र लागत में जीतता है — प्रति किग्रा 5–8× सस्ता — और समय में हारता है: पोर्ट-टू-पोर्ट 18–25 दिन बनाम हवाई 3–7 दिन डोर-टू-डोर। जो चीज़ इंतज़ार से पैसा नहीं खोती वह समुद्र से भेजें; उच्च-मूल्य-घनत्व, लॉन्च और अत्यावश्यक प्रतिस्थापन हवा से। ज़्यादातर सोर्सिंग कार्यक्रमों के लिए सही उत्तर: वॉल्यूम के लिए समुद्र और आपात के लिए एक स्थायी हवाई मार्ग।',
    entityA: 'समुद्री मालभाड़ा',
    entityB: 'हवाई मालभाड़ा',
    pillar: 'trade',
    updated: '2026-11-05',
    rows: [
      { label: 'पारगमन (चीन → भारत)', a: '18–25 दिन पोर्ट-टू-पोर्ट + कस्टम', b: '3–7 दिन डोर-टू-डोर' },
      { label: 'सापेक्ष लागत', a: '1× (आधार)', b: 'प्रति किग्रा 5–8×' },
      { label: 'सर्वोत्तम', a: 'थोक, पुनःपूर्ति, कम मूल्य घनत्व', b: 'लॉन्च, नमूने, स्पेयर, इलेक्ट्रॉनिक्स' },
      { label: 'पद्धतियाँ', a: 'LCL (साझा) या FCL 20ft/40ft', b: 'Consol या सीधा, चार्जेबल वेट नियम' },
      { label: 'कार्बन तीव्रता', a: 'प्रति टन-किमी सबसे कम', b: 'अधिक — प्रति टन-किमी समुद्र का 20×+' },
      { label: 'मुख्य जोखिम', a: 'पोर्ट जाम, रद्द वॉयेज (गोल्डन वीक)', b: 'क्षमता-मूल्य उछाल (फ़ेयर सीज़न)' },
      { label: 'कैशफ़्लो आकार', a: 'धीमा इन्वेंटरी टर्न, कम फ़्रेट खर्च', b: 'तेज़ टर्न, P&L में फ़्रेट-भारी' },
    ],
    verdict: {
      winner: 'वॉल्यूम के लिए समुद्र, रफ़्तार के लिए हवा',
      text: 'डिफ़ॉल्ट समुद्र पर चलाएँ — ~12–15 CBM से नीचे ट्रायल के लिए LCL, स्केल पर FCL — और लॉन्च व स्टॉकआउट के लिए एक स्पष्ट हवाई मार्ग रखें। असली गणित प्रति किग्रा फ़्रेट नहीं, आपकी बिक्री गति के मुक़ाबले प्रति यूनिट लैंडेड लागत है; प्रतिबद्ध होने से पहले हमारी डेस्क दोनों का मॉडल बनाती है।',
    },
    body: [
      'पोर्ट-जोड़ी उतनी ही मायने रखती है जितनी पद्धति: गुआंगझू/शेनज़ें से मुंद्रा या JNPT मुख्य कॉरिडोर (18–25 दिन) है, शंघाई/निंगबो 2–3 दिन जोड़ते हैं। हवाई PVG/CAN से DEL/BOM 3–7 दिन डोर-टू-डोर, क्लियरेंस सहित।',
      'समय के जोखिम मौसमी हैं: गोल्डन वीक के रद्द वॉयेज हर अक्टूबर समुद्री क्षमता सिकोड़ते हैं, जबकि कैंटन फ़ेयर सप्ताह और चीनी नववर्ष-पूर्व की भागदौड़ हवाई दरें चढ़ाती हैं। स्पॉट प्रीमियम देने के बजाय इन खिड़कियों के इर्द-गिर्द बफ़र स्टॉक बनाएँ।',
    ],
    faqs: [
      {
        question: 'चीन से भारत हवाई मालभाड़ा कब सही रहता है?',
        answer: 'तीन स्थितियाँ: बाज़ार-तिथि पर पहुँचना ज़रूरी लॉन्च स्टॉक, ऐसे उच्च-मूल्य-घनत्व माल जहाँ फ़्रेट यूनिट-अर्थशास्त्र का छोटा हिस्सा है, और आपातकालीन स्टॉकआउट। बाक़ी सब आमतौर पर समुद्र से।',
      },
      {
        question: 'समुद्री मालभाड़ा कितना सस्ता है?',
        answer: 'चीन–भारत मार्ग पर हवाई से प्रति किग्रा लगभग 5–8× सस्ता, इन्वेंटरी-धारण लागत से पहले। पूरे कंटेनर के लिए समुद्र तुलना नहीं — एकमात्र आर्थिक विकल्प है।',
      },
      {
        question: 'पहले ऑर्डर के लिए LCL या FCL?',
        answer: 'ट्रायल वॉल्यूम (~12–15 CBM तक) के लिए LCL — आप जो स्पेस इस्तेमाल करें बस उसका भुगतान करते हैं। जब वॉल्यूम प्रति-यूनिट गणित जिताने लगें, आमतौर पर 2–3 ऑर्डर बाद, FCL पर जाएँ।',
      },
    ],
  },
  {
    slug: 'mbbs-china-vs-kyrgyzstan',
    title: 'चीन बनाम किर्गिज़स्तान में MBBS: शिक्षण, मान्यता और लागत',
    headline: 'चीन बनाम किर्गिज़स्तान MBBS',
    answer:
      'यदि आपका कुल बजट US$38–65k है और आप बड़े शिक्षण अस्पताल, मज़बूत सरकारी कैंपस व MOE-सूचीबद्ध अंग्रेज़ी-माध्यम पाठ्यक्रम चाहते हैं तो चीन चुनें। किर्गिज़स्तान ट्यूशन में सस्ता है (अक्सर US$22–32k कुल), पर निजी अकादमियों के बीच क्लिनिकल अनुभव और FMGE परिणामों में बड़ा अंतर रहता है।',
    entityA: 'चीन में MBBS',
    entityB: 'किर्गिज़स्तान में MBBS',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: '5.5–6 वर्ष की कुल लागत', a: 'US$38.5–65k (MOE-सूचीबद्ध सरकारी)', b: 'US$22–32k (अधिकतर निजी)' },
      { label: 'अस्पताल का आकार', a: '1,500–3,000+ बेड वाले संबद्ध अस्पताल', b: 'छोटे नगर/निजी क्लिनिक' },
      { label: 'FMGE / NExT ट्रैक रिकॉर्ड', a: 'प्रतिष्ठित MOE सरकारी कॉलेजों में बेहतर', b: 'नए निजी कैंपसों में असमान' },
      { label: 'भाषा आवश्यकता', a: 'अंग्रेज़ी + क्लिनिकल वर्षों हेतु HSK 4', b: 'अंग्रेज़ी + वार्ड हेतु रूसी/किर्गिज़' },
      { label: 'बुनियादी ढाँचा', a: 'समर्पित अंतरराष्ट्रीय कैंपस, हाई-स्पीड रेल', b: 'शहर-निर्भर; बिश्केक/ओश केंद्रित' },
      { label: 'छात्रवृत्ति', a: 'CSC व प्रांतीय/विश्वविद्यालय छात्रवृत्ति उपलब्ध', b: 'सीमित; अधिकतर स्व-वित्तपोषित' },
    ],
    verdict: {
      winner: 'क्लिनिकल गहराई के लिए चीन; केवल सख़्त बजट में किर्गिज़स्तान',
      text: 'यदि परिवार का बजट US$40k+ तक जाता है, तो MOE-सूचीबद्ध चीनी सरकारी विश्वविद्यालय बेहतर अस्पताल और लैब ढाँचा देते हैं। किर्गिज़स्तान तभी चुनें जब बजट US$30k से कम पर सख़्त सीमित हो और आपने क्लिनिकल रोटेशन की पूरी जाँच की हो।',
    },
    body: [
      'दोनों देश उन छात्रों को आकर्षित करते हैं जो भारी निजी कैपिटेशन फ़ीस के बिना अंग्रेज़ी में MBBS करना चाहते हैं, लेकिन दोनों के विश्वविद्यालय तंत्र बिल्कुल अलग हैं।',
      'चीन के 45+ MOE-सूचीबद्ध मेडिकल विश्वविद्यालय हज़ारों बेड वाले सरकारी शिक्षण अस्पतालों से जुड़े हैं, जबकि किर्गिज़स्तान में अंतरराष्ट्रीय प्रवेश छोटे निजी कॉलेजों में केंद्रित है।',
    ],
    faqs: [
      {
        question: 'क्या किर्गिज़स्तान में MBBS चीन से सस्ता है?',
        answer: 'ट्यूशन के हिसाब से हाँ — कुल US$22–32k बनाम चीन के MOE-सूचीबद्ध सरकारी विश्वविद्यालयों में US$38.5–65k। पर FMGE कोचिंग और क्लिनिकल गुणवत्ता भी गिनें।',
      },
      {
        question: 'अस्पताल अनुभव कहाँ बेहतर मिलता है?',
        answer: 'चीन के सरकारी मेडिकल विश्वविद्यालय बड़े क्लास-3A अस्पताल चलाते हैं, बशर्ते आप बुनियादी मंदारिन (HSK 4) सीख लें।',
      },
    ],
  },
  {
    slug: 'csc-type-a-vs-type-b-scholarship',
    title: 'CSC Type A बनाम Type B छात्रवृत्ति: कौन-सा मार्ग चुनें?',
    headline: 'CSC Type A बनाम Type B छात्रवृत्ति',
    answer:
      'यदि आप सीधे चुनिंदा विश्वविद्यालय को लक्षित करना, सुपरवाइज़र से तेज़ तालमेल बनाना और अधिक नियंत्रण रखना चाहते हैं तो Type B (विश्वविद्यालय सीधा मार्ग) चुनें। Type A आपके देश के दूतावास या मंत्रालय से चलता है और राष्ट्रीय कोटे से बँधा होता है।',
    entityA: 'CSC Type A (दूतावास)',
    entityB: 'CSC Type B (विश्वविद्यालय)',
    pillar: 'education',
    updated: '2026-11-17',
    rows: [
      { label: 'आवेदन माध्यम', a: 'स्वदेश दूतावास / शिक्षा मंत्रालय', b: 'सीधे चीनी विश्वविद्यालय के पोर्टल से' },
      { label: 'लक्षित डिग्री', a: 'स्नातक, स्नातकोत्तर, PhD व विज़िटिंग', b: 'मुख्यतः स्नातकोत्तर व PhD (कुछ स्नातक भी)' },
      { label: 'एजेंसी नंबर', a: 'दूतावास / प्रेषक एजेंसी कोड', b: 'विश्वविद्यालय का 5-अंकीय एजेंसी कोड' },
      { label: 'विश्वविद्यालय विकल्प', a: 'अधिकतम 3 वरीयताएँ (गारंटी नहीं)', b: 'प्रति Type B आवेदन 1 मुख्य विश्वविद्यालय' },
      { label: 'अंतिम तिथि', a: 'अक्सर जनवरी–फ़रवरी (दूतावास अनुसार)', b: 'अक्सर दिसंबर–मार्च (विश्वविद्यालय अनुसार)' },
      { label: 'प्री-एडमिशन पत्र का असर', a: 'सहायक, पर राष्ट्रीय कोटा लागू', b: 'निर्णायक — प्री-एडमिशन व गाइड समर्थन प्रमुख' },
    ],
    verdict: {
      winner: 'स्नातकोत्तर/PhD के लिए Type B; स्नातक के लिए Type A',
      text: 'विशेष द्विपक्षीय समझौतों से बाहर स्नातक आवेदकों को प्रायः Type A या प्रांतीय छात्रवृत्ति पर निर्भर रहना होता है। मास्टर्स व PhD के लिए Type B तेज़ और अधिक प्रभावी है।',
    },
    body: [
      'Type A और Type B दोनों समान CSC लाभ देते हैं: पूर्ण ट्यूशन माफ़ी, कैंपस हॉस्टल, चिकित्सा बीमा और मासिक वज़ीफ़ा (डिग्री स्तर के अनुसार ¥2,500–3,500)।',
      'फ़र्क़ केवल पहले चयनकर्ता का है: Type A में राष्ट्रीय निकाय और Type B में चीनी विश्वविद्यालय की प्रवेश समिति नाम आगे भेजती है।',
    ],
    faqs: [
      {
        question: 'क्या मैं एक ही वर्ष में CSC Type A और Type B दोनों में आवेदन कर सकता हूँ?',
        answer: 'हाँ, आप दोनों चैनलों से आवेदन कर सकते हैं, लेकिन CSC नियमों के अनुसार अंत में केवल एक ही छात्रवृत्ति स्वीकार कर सकते हैं।',
      },
      {
        question: 'क्या Type B के लिए प्री-एडमिशन पत्र ज़रूरी है?',
        answer: 'लगभग सभी प्रतिस्पर्धी विश्वविद्यालयों में हाँ — सुपरवाइज़र की स्वीकृति और प्री-एडमिशन नोटिस चयन की संभावना काफ़ी बढ़ाते हैं।',
      },
    ],
  },
  {
    slug: 'china-vs-japan-travel',
    title: 'चीन बनाम जापान यात्रा: बजट, वीज़ा, रेल और रूट तुलना',
    headline: 'यात्रियों के लिए चीन बनाम जापान',
    answer:
      'पहली बार आसान पूर्वी एशिया यात्रा, सटीक रेल नेटवर्क और 7–12 दिन के कॉम्पैक्ट सांस्कृतिक रूट के लिए जापान चुनें। विशाल पैमाने, कम दैनिक खर्च और प्राचीन से आधुनिक के गहरे संगम के लिए चीन चुनें — बस वीज़ा और भुगतान ऐप पहले से सेट रखें।',
    entityA: 'चीन यात्रा',
    entityB: 'जापान यात्रा',
    pillar: 'tourism',
    updated: '2026-11-17',
    rows: [
      { label: 'औसत दैनिक बजट', a: 'US$45–120/दिन', b: 'US$85–220/दिन' },
      { label: 'रेल नेटवर्क', a: 'विश्व का सबसे बड़ा HSR नेटवर्क; पासपोर्ट ई-टिकट', b: 'शिंकानसेन व IC कार्ड; स्पष्ट अंग्रेज़ी संकेत' },
      { label: 'भुगतान व ऐप', a: 'विदेशी कार्ड से जुड़े Alipay / WeChat Pay', b: 'क्रेडिट कार्ड, Suica/PASMO व नक़दी' },
      { label: 'वीज़ा', a: 'अधिकांश पासपोर्ट हेतु L वीज़ा (या 15–30 दिन छूट)', b: 'eVisa / स्टिकर वीज़ा या पासपोर्ट अनुसार छूट' },
      { label: 'आदर्श अवधि', a: '10–14 दिन (2–3 क्षेत्र)', b: '7–12 दिन (टोक्यो–क्योटो–ओसाका)' },
      { label: 'भाषा बाधा', a: 'बड़े होटलों के बाहर अधिक; अनुवाद ऐप ज़रूरी', b: 'मध्यम; स्टेशनों पर अंग्रेज़ी संकेत सुलभ' },
    ],
    verdict: {
      winner: 'सुगमता के लिए जापान; पैमाने व मूल्य के लिए चीन',
      text: 'कम डिजिटल तैयारी और छोटे सफ़र के लिए जापान बेहतर है। पहले से Alipay/WeChat, eSIM और ट्रेन टिकट तैयार हों तो चीन प्रति डॉलर दोगुनी विविधता देता है।',
    },
    body: [
      'जापान अपनी सटीकता और पैदल घूमने योग्य मोहल्लों के लिए जाना जाता है, जबकि चीन अपने विशाल पैमाने और क्षेत्रीय विविधता से प्रभावित करता है।',
      'अब Alipay और WeChat Pay में विदेशी कार्ड जुड़ने और बीजिंग, शीआन, चेंगदू, गुइलिन व शंघाई के बीच हाई-स्पीड रेल चलने से चीन यात्रा पहले से कहीं अधिक सहज हो गई है।',
    ],
    faqs: [
      {
        question: 'घूमने के लिए कौन-सा देश सस्ता है: चीन या जापान?',
        answer: 'टोक्यो और क्योटो की तुलना में चीन में होटल, हाई-स्पीड रेल और दैनिक भोजन आमतौर पर 35–45% सस्ता पड़ता है।',
      },
      {
        question: 'क्या एक ही ट्रिप में चीन और जापान दोनों घूम सकते हैं?',
        answer: 'हाँ — शंघाई या बीजिंग से टोक्यो या ओसाका की उड़ान 2.5–3.5 घंटे की है, जिससे 14 दिन का दो-देशीय कार्यक्रम आसानी से बन जाता है।',
      },
    ],
  },
  {
    slug: 'lcl-vs-fcl-china-shipping',
    title: 'चीन से समुद्री शिपिंग LCL बनाम FCL: ब्रेक-ईवन वॉल्यूम और लागत',
    headline: 'चीन से LCL बनाम FCL शिपिंग',
    answer:
      '~12–15 CBM से कम के ट्रायल ऑर्डर के लिए LCL (साझा कंटेनर) चुनें ताकि आप केवल उपयोग किए गए घन मीटर का भुगतान करें। 14–16+ CBM पर 20ft FCL पर स्विच करें, जहाँ फ़्लैट कंटेनर दर गंतव्य CFS शुल्क को हराती है और नुक़सान घटता है।',
    entityA: 'LCL (साझा कंटेनर)',
    entityB: 'FCL (पूरा कंटेनर)',
    pillar: 'trade',
    updated: '2026-11-17',
    rows: [
      { label: 'आदर्श शिपमेंट आकार', a: '1–13 CBM', b: '14–28 CBM (20ft) · 30–65 CBM (40ft/HQ)' },
      { label: 'मूल्य मॉडल', a: 'प्रति CBM / टन + गंतव्य CFS शुल्क', b: 'प्रति कंटेनर निश्चित दर' },
      { label: 'डोर-टू-डोर गति', a: 'कंसॉलिडेशन/डीकंसॉलिडेशन में +3–5 दिन', b: 'तेज़ पोर्ट टर्नअराउंड, फ़ैक्ट्री से सीलबंद' },
      { label: 'क्षति जोखिम', a: 'अधिक (CFS गोदाम में बार-बार हैंडलिंग)', b: 'कम (सप्लायर या हब पर सीलबंद)' },
      { label: 'गंतव्य शुल्क', a: 'बिना पूर्व-कोटेशन के ऊँचे CFS शुल्क का जोखिम', b: 'प्रति कंटेनर अनुमानित THC व क्लीयरेंस' },
    ],
    verdict: {
      winner: '~13 CBM से कम पर LCL; 14–15 CBM से ऊपर FCL',
      text: '5 CBM के लिए FCL बुक न करें और 16 CBM को LCL से न भेजें — गंतव्य के CFS शुल्क बचत ख़त्म कर देंगे। हमेशा कुल लैंडेड लागत की तुलना करें।',
    },
    body: [
      'नए आयातक अक्सर केवल समुद्री मालभाड़े की दर देखते हैं और LCL पर गंतव्य CFS (कंटेनर फ़्रेट स्टेशन) शुल्क भूल जाते हैं। लगभग 13–15 CBM पर 20ft FCL कुल मिलाकर सस्ता पड़ता है।',
      'कई सप्लायरों से ख़रीदने पर गुआंगझू या ईवू गोदाम में 2–3 फ़ैक्ट्रियों का माल मिलाकर एक सीलबंद FCL कंटेनर भेजा जा सकता है।',
    ],
    faqs: [
      {
        question: 'कितने CBM पर FCL, LCL से सस्ता हो जाता है?',
        answer: 'गंतव्य के CFS और हैंडलिंग शुल्क जोड़ने पर आमतौर पर 20ft कंटेनर के लिए 13 से 15 CBM के बीच।',
      },
      {
        question: 'क्या एक ही FCL कंटेनर में कई सप्लायरों का माल मिला सकते हैं?',
        answer: 'हाँ — गुआंगझू, शेनज़ें या ईवू में बायर कंसॉलिडेशन के ज़रिए कई फ़ैक्ट्रियों के कार्टन एक सीलबंद कंटेनर में भेजे जा सकते हैं।',
      },
    ],
  },
];

/**
 * Slugs stay identical across locales (URLs are shared); en is the source
 * of truth and zh/fr/ar/es/de/ja/pt/hi are machine-assisted translations
 * pending native-speaker review — same comparison count and order, same
 * row and FAQ counts, identical slug/pillar/updated/figures.
 */
export const COMPARISONS: Record<Locale, Comparison[]> = {
  en: COMPARISONS_EN,
  zh: COMPARISONS_ZH,
  fr: COMPARISONS_FR,
  ar: COMPARISONS_AR,
  es: COMPARISONS_ES,
  de: COMPARISONS_DE,
  ja: COMPARISONS_JA,
  pt: COMPARISONS_PT,
  hi: COMPARISONS_HI,
};
