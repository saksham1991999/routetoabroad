import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Seo, faqSchema } from '../../components/seo';
import Reveal from '../../components/animation/Reveal';
import {
  GraduationCap,
  Plane,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';

const educationFaqs = [
  {
    question: 'Is Chinese MBBS recognized in my country?',
    answer: 'Yes, all universities we represent are listed in the WHO World Directory of Medical Schools and are recognized by major national medical councils like PMDC (Pakistan), NMC (India), and ECFMG (USA). Always verify your specific country requirements before applying.',
  },
  {
    question: 'Are scholarships fully funded?',
    answer: 'Many partner universities offer fully funded scholarships covering tuition, accommodation, and a monthly stipend through the CSC (China Scholarship Council) program. Partial scholarships based on academic merit are also available.',
  },
  {
    question: 'What are the Chinese language requirements?',
    answer: 'Most English-taught programs (MBBS, Engineering) do not require Chinese proficiency at enrollment. However, students are required to pass HSK 4 before clinical rotations. We provide HSK preparation courses as part of our support package.',
  },
  {
    question: 'How long does the visa process take?',
    answer: 'The typical visa process takes 4-8 weeks from receiving your JW202 form. We guide you through every step including document preparation, embassy appointment scheduling, and interview preparation.',
  },
  {
    question: 'What is the cost of studying in China?',
    answer: 'Costs vary by university and program. Tuition ranges from $3,000 to $8,000 per year. Accommodation costs $500-1,500 per year. With CSC scholarships, these costs can be fully covered.',
  },
  {
    question: 'Can I work while studying in China?',
    answer: 'With a student visa (X1), you can work part-time on campus with university permission. Off-campus work requires additional approval. The monthly stipend from CSC scholarships typically covers living expenses.',
  },
  {
    question: 'What is the admission timeline?',
    answer: 'Most September intakes have application deadlines from January to April. Our team ensures all documentation is submitted on time and tracks your application status throughout the process.',
  },
  {
    question: 'Is health insurance included?',
    answer: 'All international students in China are required to have health insurance. CSC scholarship recipients receive comprehensive medical insurance as part of their package. We also offer additional coverage options.',
  },
];

const tourismFaqs = [
  {
    question: 'How do visas for China work?',
    answer: 'We provide full concierge support for visa applications. Whether you need a Tourist (L) or Business (M) visa, our team handles documentation, invitation letters, and filing process to ensure smooth approval.',
  },
  {
    question: 'When is the best time to visit East Asia?',
    answer: 'Spring (March-May) for cherry blossoms and autumn (September-November) for temperate weather and fall foliage are generally considered the best times for general tourism in China and Japan.',
  },
  {
    question: 'Can you arrange high-level business meetings?',
    answer: 'Yes. Through our Trade arm, we have access to various industry hubs and can arrange factory tours, government meetings, and local chamber of commerce introductions for business delegations.',
  },
  {
    question: 'How are dietary restrictions handled?',
    answer: 'Your guide will be briefed on any allergies or dietary preferences (Vegan, Halal, Gluten-Free). We pre-vet all restaurants and provide preference cards in the local language for seamless communication.',
  },
  {
    question: 'Is travel insurance included?',
    answer: 'Standard travel insurance is not included in the base price but we offer comprehensive "Digital Diplomat" coverage add-on including medical evacuation and high-value equipment protection.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We offer flexible booking with full refund up to 30 days before departure. Partial refunds are available for cancellations within 30 days, subject to non-recoverable costs already incurred.',
  },
  {
    question: 'Do you organize group tours?',
    answer: 'Yes, we specialize in custom group tours for families, corporate teams, educational institutions, and cultural organizations. Groups of 8+ receive discounted rates and dedicated planning support.',
  },
  {
    question: 'Can you arrange visa for multiple countries?',
    answer: 'Yes, we handle multi-destination visa applications including China, Japan, and other East Asian countries. Our team manages documentation for complex itineraries across multiple jurisdictions.',
  },
];

const tradeFaqs = [
  {
    question: 'What is the Minimum Order Quantity (MOQ)?',
    answer: 'MOQs vary by industry. For custom electronics, MOQs start at 500-1000 units, while for industrial machinery it can be a single unit. We specialize in negotiating MOQs for growing businesses.',
  },
  {
    question: 'How do you ensure Quality Assurance?',
    answer: 'Our inspectors are on the factory floor during production and before sealing the container. We follow AQL (Acceptable Quality Limit) standard protocols with inspections at 20% and 80% of production.',
  },
  {
    question: 'What are typical shipping timeframes?',
    answer: 'Air freight takes 3-7 days. Sea freight from China ports to Mumbai or Mundra typically takes 18-25 days depending on the route. We monitor port conditions and advise on optimal routing.',
  },
  {
    question: 'Can you handle Customs and BIS certifications?',
    answer: 'Yes, we provide full support for BIS, WPC, and other regulatory filings required by the Indian government for specific imports including electronics, machinery, and chemical products.',
  },
  {
    question: 'What are payment terms (LC/TT)?',
    answer: 'Standard terms are 30% deposit via TT and 70% against Bill of Lading. For established enterprise clients, we facilitate LC (Letter of Credit) arrangements. Escrow services available for first-time engagements.',
  },
  {
    question: 'Do you support OEM and Private Labeling?',
    answer: 'Absolutely. We help find factories specializing in white-labeling and manage the branding and packaging customization process including design, materials, and quality control.',
  },
  {
    question: 'How do you handle disputes with suppliers?',
    answer: 'We act as your local representative, mediating disputes with documented evidence. Our contracts include clear quality specifications and penalty clauses. In cases of non-resolution, we assist with arbitration.',
  },
  {
    question: 'What is your fee structure?',
    answer: 'Our trade services are structured as a success fee based on the value of goods sourced. This aligns our incentives with yours. Contact us for a detailed breakdown based on your specific requirements.',
  },
];

const faqData: Record<string, { title: string; description: string; icon: typeof GraduationCap; faqs: typeof educationFaqs }> = {
  education: {
    title: 'Education FAQs',
    description: 'Common questions about studying in China, MBBS programs, scholarships, and visa processes.',
    icon: GraduationCap,
    faqs: educationFaqs,
  },
  tourism: {
    title: 'Tourism FAQs',
    description: 'Questions about travel to China and Japan, visa requirements, and tour arrangements.',
    icon: Plane,
    faqs: tourismFaqs,
  },
  trade: {
    title: 'Trade FAQs',
    description: 'Insights into India-China trade, sourcing, quality control, and logistics.',
    icon: Briefcase,
    faqs: tradeFaqs,
  },
};

interface FaqPageProps {
  type: 'education' | 'tourism' | 'trade';
}

export default function FaqPage({ type }: FaqPageProps) {
  const { t } = useTranslation();
  const data = faqData[type];
  const Icon = data.icon;
  const typeLabel = type === 'education' ? t('nav.education') : type === 'tourism' ? t('nav.tourism') : t('nav.trade');

  const jsonLd = faqSchema(data.faqs.map(f => ({ question: f.question, answer: f.answer })));

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    script.id = 'faq-schema';
    const existing = document.getElementById('faq-schema');
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, [jsonLd]);

  return (
    <>
      <Seo
        title={`${data.title} | RouteToAbroad`}
        description={data.description}
        keywords={`${type} faq, ${type} questions, route to abroad faq, study china faq, china tour faq, india china trade faq`}
        canonical={`https://routetoabroad.com/${type}/faq`}
        breadcrumbs={[
          { name: typeLabel, url: `/${type}` },
          { name: t('common.faq_title'), url: `/${type}/faq` },
        ]}
      />

      <main className="pt-0">
        <nav className="bg-slate-50 dark:bg-slate-900 py-3 px-4" aria-label={t('common.accessibility.breadcrumb')}>
          <div className="max-w-[1440px] mx-auto">
            <ol className="flex items-center gap-2 text-sm font-mono">
              <li>
                <Link to="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">{t('nav.home')}</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400">/</span>
                <Link to={`/${type}`} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">{typeLabel}</Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 dark:text-white">{t('common.faq_title')}</span>
              </li>
            </ol>
          </div>
        </nav>

        <section className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal variant="fade">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-8">
                <Icon className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {data.title}
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                {data.description}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-24 px-4 bg-white dark:bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {data.faqs.map((faq, idx) => (
                <Reveal key={idx} variant="slide-up" delay={idx * 50}>
                  <details className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-slate-900 dark:text-white">
                      <span>{faq.question}</span>
                      <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">
                        expand_more
                      </span>
                    </summary>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal variant="fade">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                {t('common.still_have_questions')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                {t('common.faq_help_text')}
              </p>
            </Reveal>
            <Reveal variant="slide-up" delay={200}>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-secondary text-white hover:bg-secondary/90 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  {t('about.contact_cta.contact_us')}
                </Link>
                <a
                  href="tel:+919633061109"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {t('contact.info.call_us')}
                </a>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 96330 61109</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@routetoabroad.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>New Delhi, India | Guangzhou, China</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
