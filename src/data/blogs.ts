export type BlogCategory = 'education' | 'tourism' | 'trade';

export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list';
  content: string;
  items?: string[];
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  category: BlogCategory;
  author: string;
  authorRole: string;
  authorImage?: string;
  coverImage?: string;
  date: string;
  readTime: number;
  tags: string[];
  featured: boolean;
}

export const BLOGS: Blog[] = [
  {
    id: '1',
    slug: 'mbbs-in-china-5-things-to-know',
    title: '5 Things to Know Before Starting MBBS in China',
    excerpt: 'Thinking about pursuing medicine in China? Here are the five most critical things every aspiring student must understand before applying.',
    category: 'education',
    author: 'Dr. Vijeesh Vijayan',
    authorRole: 'Director, RouteToAbroad',
    coverImage: '/assets/images/pillar_edu.jpg',
    date: 'February 18, 2025',
    readTime: 6,
    tags: ['MBBS', 'China', 'Education', 'Scholarships'],
    featured: true,
    content: [
      {
        type: 'paragraph',
        content: 'China has emerged as one of the top destinations for Indian students pursuing MBBS degrees. With globally recognized universities, English-taught programs, and significant scholarship opportunities, the appeal is undeniable. But there are critical nuances every applicant should understand before committing.',
      },
      {
        type: 'heading',
        content: '1. Recognition Is Non-Negotiable',
      },
      {
        type: 'paragraph',
        content: 'Not all Chinese medical universities are recognized by your home country\'s medical council. Always verify that your target university is listed in the WHO World Directory of Medical Schools and approved by regulatory bodies like the NMC (India), PMDC (Pakistan), or ECFMG (USA). RouteToAbroad only works with fully recognized partner institutions.',
      },
      {
        type: 'heading',
        content: '2. Language Is a Two-Phase Journey',
      },
      {
        type: 'paragraph',
        content: 'Most MBBS programs are taught in English for the first few years. However, clinical rotations require patient interaction — meaning you will need to pass HSK 4 before entering clinics. Start Mandarin classes early. We offer integrated HSK preparation as part of our student support package.',
      },
      {
        type: 'heading',
        content: '3. The CSC Scholarship Is Real — But Competitive',
      },
      {
        type: 'paragraph',
        content: 'The Chinese Government Scholarship (CSC) can cover full tuition, accommodation, and a monthly stipend. However, it is merit-based and competitive. Students with a CGPA above 3.5 and strong extracurriculars have the best chances. University-level scholarships are a parallel, often less competitive, route.',
      },
      {
        type: 'heading',
        content: '4. The JW202 Process Takes Time',
      },
      {
        type: 'paragraph',
        content: 'The JW202 is the official admission notice required to apply for a student visa. The processing timeline from university offer to visa approval can take 8–12 weeks. Apply early. Missing intake windows is one of the most common — and most avoidable — mistakes we see.',
      },
      {
        type: 'heading',
        content: '5. On-Ground Support Is Not a Luxury',
      },
      {
        type: 'paragraph',
        content: 'Arriving in a new country for the first time is stressful. Airport pickups, dormitory registration, SIM card setup, bank account opening — these operational details can overwhelm students who arrive without support. Our team provides structured first-week support to ensure you hit the ground running.',
      },
      {
        type: 'list',
        content: 'Quick Checklist Before You Apply:',
        items: [
          'Verify university recognition in your home country',
          'Check application deadlines (January for September intake)',
          'Prepare academic transcripts and passport copies',
          'Secure proof of financial means (even for scholarship applicants)',
          'Register for HSK preparation early',
        ],
      },
      {
        type: 'paragraph',
        content: 'Ready to start your application? Our consultants can assess your eligibility and match you with the best-fit program within 48 hours.',
      },
    ],
  },
  {
    id: '2',
    slug: 'csc-scholarship-step-by-step-guide',
    title: 'How to Apply for the CSC Scholarship: A Step-by-Step Guide',
    excerpt: 'The Chinese Government Scholarship (CSC) can fund your entire degree. Here is a practical, step-by-step breakdown of the application process.',
    category: 'education',
    author: 'Ananya Krishnan',
    authorRole: 'MBBS Graduate, Peking University',
    coverImage: '/assets/images/hero_edu.jpg',
    date: 'January 10, 2025',
    readTime: 8,
    tags: ['CSC Scholarship', 'China', 'Funding', 'Application'],
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: 'The China Scholarship Council (CSC) scholarship is one of the most generous academic funding opportunities available to international students. Covering full tuition, accommodation, a monthly stipend, and medical insurance — it can make an otherwise expensive degree completely accessible. Here is how to apply.',
      },
      {
        type: 'heading',
        content: 'Step 1: Determine Your Route — Type A vs Type B',
      },
      {
        type: 'paragraph',
        content: 'There are two application routes. Type A: Government-to-Government nominations, coordinated through your country\'s Ministry of Education or designated authority. Type B: University-direct applications, where you apply directly to a CSC-designated Chinese university. Most applicants use Type B, as it is more accessible.',
      },
      {
        type: 'heading',
        content: 'Step 2: Choose Your Universities Wisely',
      },
      {
        type: 'paragraph',
        content: 'You can apply to up to three universities through the CSC portal. Strategize: choose one reach school, one target, and one safety. Confirm each university accepts CSC applicants for your specific program, as not all programs at all universities are CSC-eligible.',
      },
      {
        type: 'heading',
        content: 'Step 3: Prepare Your Documents',
      },
      {
        type: 'list',
        content: 'Required documents include:',
        items: [
          'Completed CSC Online Application Form (study in china portal)',
          'Passport (valid for at least 12 months beyond program end)',
          'Certified academic transcripts and diploma',
          'Study Plan or Research Proposal (minimum 800 words)',
          'Two letters of recommendation (academic or professional)',
          'Physical examination form (must use the official CSC form)',
          'Language proficiency proof (English or Chinese)',
          'Police clearance certificate (for postgraduate applicants)',
        ],
      },
      {
        type: 'heading',
        content: 'Step 4: Submit Before the Deadline',
      },
      {
        type: 'paragraph',
        content: 'CSC deadlines typically fall between late February and mid-April for September intake. Submit both online and courier hard copies where required. Late submissions are disqualified without exception. We build a 3-week buffer into our application timelines for all clients to ensure no last-minute scrambles.',
      },
      {
        type: 'heading',
        content: 'Step 5: Track and Follow Up',
      },
      {
        type: 'paragraph',
        content: 'After submission, the CSC portal will update your status over the following 4–8 weeks. University admission decisions are issued separately. You need both the CSC scholarship approval AND the university admission notice (JW202) to proceed with your visa application.',
      },
      {
        type: 'paragraph',
        content: 'The process has many moving parts — but with the right preparation, your chances are excellent. Our team has a 98% scholarship application success rate for clients who engage us early.',
      },
    ],
  },
  {
    id: '3',
    slug: 'top-5-historical-sites-beijing',
    title: 'Top 5 Historical Sites to Visit in Beijing',
    excerpt: 'Beijing is a living museum of imperial China. From the Forbidden City to the Temple of Heaven, discover the five sites every visitor must experience.',
    category: 'tourism',
    author: 'Sarah Jenkins',
    authorRole: 'Head of Tourism, RouteToAbroad',
    coverImage: '/assets/images/tourism_traditional.jpg',
    date: 'March 5, 2025',
    readTime: 5,
    tags: ['Beijing', 'Tourism', 'History', 'Culture', 'China'],
    featured: true,
    content: [
      {
        type: 'paragraph',
        content: 'Beijing has been the political and cultural heart of China for over 700 years. Its historical sites are not merely tourist attractions — they are living documents of a civilization that shaped the entire region. If you are visiting for the first time, these five sites are non-negotiable.',
      },
      {
        type: 'heading',
        content: '1. The Forbidden City (故宫)',
      },
      {
        type: 'paragraph',
        content: 'The world\'s largest palace complex, home to 24 emperors of the Ming and Qing dynasties, the Forbidden City spans 180 acres and 980 buildings. Arrive early to avoid crowds and spend at least half a day walking through its ceremonial halls, imperial gardens, and treasuries. The Palace Museum\'s online booking system sells out fast — plan weeks ahead.',
      },
      {
        type: 'heading',
        content: '2. The Great Wall at Mutianyu',
      },
      {
        type: 'paragraph',
        content: 'While Badaling is the most famous section, Mutianyu offers a more authentic experience with fewer crowds and breathtaking restored towers. The toboggan ride down is a bonus. Mutianyu is 70 km from the city — factor in travel time. Our group tours include private coach transfers.',
      },
      {
        type: 'heading',
        content: '3. The Temple of Heaven (天坛)',
      },
      {
        type: 'paragraph',
        content: 'Where emperors once performed annual rituals to secure divine blessings for good harvests, the Temple of Heaven complex is a masterpiece of Ming-era architecture and cosmological design. The surrounding park is where Beijing\'s retirees gather in the mornings for tai chi, chess, and traditional music — a cultural spectacle in itself.',
      },
      {
        type: 'heading',
        content: '4. The Summer Palace (颐和园)',
      },
      {
        type: 'paragraph',
        content: 'A UNESCO World Heritage Site, the Summer Palace is an imperial garden of extraordinary scale, built around the serene Kunming Lake. A morning boat ride on the lake followed by a walk along the 728-metre Long Corridor (Changlang) is among the most memorable experiences Beijing offers.',
      },
      {
        type: 'heading',
        content: '5. 798 Art District',
      },
      {
        type: 'paragraph',
        content: 'Not ancient — but indispensable. The 798 Art District, built in repurposed Cold-War-era Bauhaus factory buildings, is Beijing\'s creative epicenter. Home to galleries, studios, design boutiques, and some of China\'s best coffee, it offers a striking counterpoint to the imperial sites and illustrates the depth of modern Beijing\'s cultural ambition.',
      },
      {
        type: 'paragraph',
        content: 'Planning a trip to Beijing? Our cultural heritage circuits include curated access to all five sites, expert bilingual guides, and private transport — so you experience the history rather than manage the logistics.',
      },
    ],
  },
  {
    id: '4',
    slug: 'food-guide-indian-students-china',
    title: 'A Food Guide for Indian Students in China',
    excerpt: 'Finding familiar food in a new country is one of every Indian student\'s biggest concerns. Here is how to eat well, stay healthy, and even enjoy Chinese cuisine.',
    category: 'tourism',
    author: 'Rohan Sharma',
    authorRole: 'B.Tech Student, BJTU Beijing',
    coverImage: '/assets/images/tourism_culture.jpg',
    date: 'December 12, 2024',
    readTime: 4,
    tags: ['Food', 'Student Life', 'China', 'Indian Expat'],
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: 'For most Indian students arriving in China, food is the first and biggest culture shock. The smells are different, the flavors are unfamiliar, and you cannot read the menu. Here is what actually helps — from a student who has been there.',
      },
      {
        type: 'heading',
        content: 'The International Student Canteen is Your First Stop',
      },
      {
        type: 'paragraph',
        content: 'Most major Chinese universities have an international student cafeteria (留学生食堂) that serves halal options, rice dishes, and occasionally Indian-inspired food. Find yours in the first week and get comfortable with the payment app (usually WeChat Pay or Alipay — your student card may also work).',
      },
      {
        type: 'heading',
        content: 'Indian Grocery Shops Exist — Know Where They Are',
      },
      {
        type: 'paragraph',
        content: 'Cities like Beijing, Shanghai, Guangzhou, and Wuhan have Indian grocery stores, often run by South Asian expat families. They stock masala, dal, atta, and sometimes fresh vegetables. A quick search for "Indian grocery near [your city]" on WeChat groups for Indian students will guide you.',
      },
      {
        type: 'heading',
        content: 'Learn These 5 Phrases for Restaurants',
      },
      {
        type: 'list',
        content: 'Essential ordering phrases:',
        items: [
          '不辣 (Bù là) — Not spicy',
          '素食 (Sùshí) — Vegetarian',
          '不含猪肉 (Bù hán zhūròu) — No pork',
          '清真 (Qīngzhēn) — Halal',
          '这个 (Zhège) — This one (point at the menu)',
        ],
      },
      {
        type: 'heading',
        content: 'Chinese Dishes That Indian Palates Tend to Love',
      },
      {
        type: 'list',
        content: 'Beginner-friendly Chinese dishes:',
        items: [
          'Mapo Tofu (麻婆豆腐) — Spicy tofu, familiar heat profile',
          'Kung Pao Chicken (宫保鸡丁) — Mildly spiced with peanuts',
          'Egg Fried Rice (蛋炒饭) — A safe, satisfying staple',
          'Hot Pot (火锅) — Customizable and a social experience',
          'Lanzhou Beef Noodles (兰州拉面) — Rich, hearty, halal-friendly',
        ],
      },
      {
        type: 'paragraph',
        content: 'Food adjustment takes about 3–4 weeks. After that, most students find a happy routine. And when homesickness hits hard, most cities have Indian restaurants that will feel like home. We share an updated city-by-city resource guide with all new students in our onboarding package.',
      },
    ],
  },
  {
    id: '5',
    slug: 'india-china-trade-practical-guide-2025',
    title: 'Navigating India–China Trade in 2025: A Practical Guide',
    excerpt: 'Despite geopolitical tensions, India–China bilateral trade crossed $100 billion in 2024. Here is what businesses need to know to operate effectively in this corridor.',
    category: 'trade',
    author: 'Minhaj Al Shukoor',
    authorRole: 'CEO, RouteToAbroad',
    coverImage: '/assets/images/trade_hero_map.jpg',
    date: 'January 28, 2025',
    readTime: 7,
    tags: ['Trade', 'India-China', 'Supply Chain', 'Sourcing'],
    featured: true,
    content: [
      {
        type: 'paragraph',
        content: 'India-China trade is one of the most consequential and complex bilateral trade relationships in the world. Despite diplomatic tensions, bilateral trade crossed $100 billion in 2024 — driven by India\'s insatiable demand for electronics, machinery, chemicals, and consumer goods. For businesses looking to operate in this corridor, the opportunity is enormous. So is the complexity.',
      },
      {
        type: 'heading',
        content: 'The Regulatory Landscape Has Shifted',
      },
      {
        type: 'paragraph',
        content: 'Since 2020, India has tightened FDI rules for companies in countries sharing land borders — effectively requiring prior government approval for Chinese investments. Import restrictions and heightened customs scrutiny have added friction. However, product-level trade has continued to flow, and businesses that understand the compliance framework navigate it smoothly.',
      },
      {
        type: 'heading',
        content: 'Sourcing: Factory Verification Is Non-Negotiable',
      },
      {
        type: 'paragraph',
        content: 'The most common mistake Indian importers make is relying solely on Alibaba listings without physical factory verification. We have seen cases where a "factory" is actually a trading company adding a 20–30% margin, or where quality specifications shift after the sample approval. Our on-ground team in Guangzhou and Shenzhen performs mandatory factory audits before any client commitment.',
      },
      {
        type: 'heading',
        content: 'Key Compliance Checkpoints',
      },
      {
        type: 'list',
        content: 'What to verify before committing to a supplier:',
        items: [
          'Business License (营业执照) — verify the registered address matches the factory',
          'Export license for your specific product category (HS code match)',
          'BIS/WPC certifications for electronics destined for India',
          'Pre-shipment inspection protocol (AQL standards)',
          'Payment terms: avoid 100% advance; standard is 30% deposit, 70% on BL',
        ],
      },
      {
        type: 'heading',
        content: 'Logistics: Sea vs Air',
      },
      {
        type: 'paragraph',
        content: 'Sea freight from Chinese ports (Guangzhou, Shanghai, Ningbo) to Indian ports (Mundra, JNPT) takes 18–25 days. Air freight via direct routes takes 3–5 days but costs 5–8x more. For high-value electronics or time-sensitive orders, air makes sense. For bulk commodities, sea is the only economical option. LCL (Less-than-Container-Load) is available for smaller volumes.',
      },
      {
        type: 'heading',
        content: 'Currency and Payment',
      },
      {
        type: 'paragraph',
        content: 'All transactions are typically settled in USD. For established enterprise relationships, LC (Letter of Credit) arrangements provide protection for both parties. For smaller businesses, TT (Telegraphic Transfer) with a structured deposit-and-balance structure is standard. We advise clients on escrow arrangements for first-time supplier relationships.',
      },
      {
        type: 'paragraph',
        content: 'The India-China trade corridor rewards those who invest in understanding it. Our trade team can assess your sourcing requirements, identify verified suppliers, and manage the entire import process from factory floor to your warehouse door.',
      },
    ],
  },
  {
    id: '6',
    slug: 'managing-supply-chain-risks-china',
    title: 'Managing Supply Chain Risks: Lessons from the Field',
    excerpt: 'After managing hundreds of India–China shipments, our trade team has identified the five most common supply chain risks — and exactly how to mitigate each one.',
    category: 'trade',
    author: 'David Chen',
    authorRole: 'Trade Consultant, RouteToAbroad',
    coverImage: '/assets/images/trade_consulting.jpg',
    date: 'February 5, 2025',
    readTime: 6,
    tags: ['Supply Chain', 'Risk Management', 'Trade', 'Quality Control'],
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: 'Supply chain disruptions cost businesses billions every year. For India-China trade specifically, the risks are amplified by geographical distance, regulatory complexity, language barriers, and the sheer scale of China\'s manufacturing ecosystem. Based on over 500 managed shipments, here are the five risks we see most often — and the frameworks we use to counter them.',
      },
      {
        type: 'heading',
        content: 'Risk 1: Quality Deviation Post-Sample Approval',
      },
      {
        type: 'paragraph',
        content: 'The sample is perfect. The bulk shipment arrives and the quality is noticeably different. This is the single most common complaint in China sourcing. The root cause is almost always the absence of mid-production and pre-shipment inspections. We mandate AQL (Acceptable Quality Level) inspections at 20% and 80% of production completion for all clients.',
      },
      {
        type: 'heading',
        content: 'Risk 2: Supplier Financial Instability',
      },
      {
        type: 'paragraph',
        content: 'Factories in China can fold quickly — especially smaller operations. A 100% advance payment to a factory that then declares insolvency before shipping is a nightmare scenario. Standard mitigation: never pay 100% upfront. Structure payments as 30% deposit, 70% against copy of Bill of Lading. Use escrow services for first-time engagements.',
      },
      {
        type: 'heading',
        content: 'Risk 3: Customs Classification Errors',
      },
      {
        type: 'paragraph',
        content: 'Incorrect HS code classification can result in goods being held at customs, delayed clearance, and unexpected duty charges. This is particularly common with electronics and machinery where the line between categories is technical. Our customs team pre-classifies all product categories and prepares complete documentation sets before goods reach port.',
      },
      {
        type: 'heading',
        content: 'Risk 4: Shipping Delays and Port Congestion',
      },
      {
        type: 'paragraph',
        content: 'Cyclical port congestion — especially in Guangzhou and Shanghai — can add 7–15 days to transit times. Plan for buffer stock and communicate realistic lead times to your customers. We monitor port conditions in real time and advise clients on alternative routing when congestion is flagged.',
      },
      {
        type: 'heading',
        content: 'Risk 5: Communication Breakdown',
      },
      {
        type: 'paragraph',
        content: 'Language barriers, time zone differences, and ambiguous specifications are a combustible mix. Critical specifications — tolerances, materials, colors, packaging requirements — must be documented in both English and Chinese, with photographs where possible. A single misunderstood sentence in an email can result in an entire production run being wrong.',
      },
      {
        type: 'list',
        content: 'Our standard risk mitigation checklist:',
        items: [
          'Factory audit before commitment',
          'Written specifications in EN + ZH with photo references',
          'Staged payment structure (30/70)',
          'AQL inspection at production milestones',
          'Port congestion monitoring and routing alternatives',
          'Complete customs documentation pre-prepared',
        ],
      },
      {
        type: 'paragraph',
        content: 'Supply chain risk is manageable — but it requires systems, not just experience. If you are new to China sourcing or have experienced issues with a previous supplier, our team can help you build a more resilient procurement process.',
      },
    ],
  },
];
