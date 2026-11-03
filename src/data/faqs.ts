/** FAQ datasets — power the FAQ pages AND the matching FAQPage JSON-LD. */

export interface Faq {
  question: string;
  answer: string;
}

export const EDUCATION_FAQS: Faq[] = [
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

export const TOURISM_FAQS: Faq[] = [
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

export const TRADE_FAQS: Faq[] = [
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

export const GENERAL_FAQS: Faq[] = [
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
