/** Comparison page datasets — rendered by /compare/[slug].astro */

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

export const COMPARISONS: Comparison[] = [
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
