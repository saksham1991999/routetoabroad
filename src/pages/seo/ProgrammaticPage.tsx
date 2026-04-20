import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Seo, faqSchema, type BreadcrumbItem } from '../../components/seo';
import Reveal from '../../components/animation/Reveal';
import { COMPANY } from '../../constants';
import type { LucideIcon } from 'lucide-react';
import {
  GraduationCap,
  Plane,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  MessageSquare,
} from 'lucide-react';

export interface ProgrammaticPageProps {
  title: string;
  description: string;
  keywords: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
  canonical: string;
  breadcrumbItems: BreadcrumbItem[];
  faqs?: Array<{ question: string; answer: string }>;
  features?: Array<{ icon: LucideIcon; title: string; description: string }>;
  stats?: Array<{ value: string; label: string }>;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtons?: Array<{ label: string; href: string; icon: LucideIcon }>;
  relatedPages?: Array<{ title: string; href: string; description: string }>;
  type: 'education' | 'tourism' | 'trade';
}

const pillarColors = {
  education: {
    primary: 'text-blue-600',
    bg: 'bg-blue-600',
    light: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-500',
    gradient: 'from-blue-600 to-blue-700',
  },
  tourism: {
    primary: 'text-emerald-600',
    bg: 'bg-emerald-600',
    light: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-500',
    gradient: 'from-emerald-600 to-emerald-700',
  },
  trade: {
    primary: 'text-violet-600',
    bg: 'bg-violet-600',
    light: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-500',
    gradient: 'from-violet-600 to-violet-700',
  },
};

export default function ProgrammaticPage({
  title,
  description,
  keywords,
  heroTitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  canonical,
  breadcrumbItems,
  faqs = [],
  features = [],
  stats = [],
  ctaTitle,
  ctaSubtitle,
  ctaButtons = [],
  relatedPages = [],
  type,
}: ProgrammaticPageProps) {
  const { t } = useTranslation();
  const colors = pillarColors[type];

  const jsonLd = faqs.length > 0 ? faqSchema(faqs) : null;

  useEffect(() => {
    if (jsonLd) {
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
    }
  }, [jsonLd]);

  return (
    <>
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        breadcrumbs={breadcrumbItems}
      />

      <main className="pt-0">
        {/* Breadcrumb */}
        <nav className="bg-slate-50 dark:bg-slate-900 py-3 px-4" aria-label={t('common.accessibility.breadcrumb')}>
          <div className="max-w-[1440px] mx-auto">
            <ol className="flex items-center gap-2 text-sm font-mono">
              <li>
                <Link to="/" className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                  {t('nav.home')}
                </Link>
              </li>
              {breadcrumbItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-slate-400">/</span>
                  {idx === breadcrumbItems.length - 1 ? (
                    <span className="text-slate-900 dark:text-white">{item.name}</span>
                  ) : (
                    <Link to={item.url} className="text-slate-500 hover:text-slate-900 dark:hover:text-white">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="absolute inset-0 bg-grid-slate-700/50" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
          
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className={`grid items-center gap-12 ${heroImage ? 'lg:grid-cols-12' : ''}`}>
              <Reveal variant="fade" className={heroImage ? 'lg:col-span-7' : undefined}>
                <div className="max-w-3xl">
                  <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.light} ${colors.primary} text-sm font-semibold mb-6`}>
                    {type === 'education' && <GraduationCap className="w-4 h-4" />}
                    {type === 'tourism' && <Plane className="w-4 h-4" />}
                    {type === 'trade' && <Briefcase className="w-4 h-4" />}
                    {type === 'education' && t('nav.education')}
                    {type === 'tourism' && t('nav.tourism')}
                    {type === 'trade' && t('nav.trade')}
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {heroTitle}
                  </h1>
                  
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    {heroDescription}
                  </p>

                  {ctaButtons.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {ctaButtons.map((btn, idx) => (
                        <Link
                          key={idx}
                          to={btn.href}
                          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${idx === 0
                            ? 'bg-secondary text-white hover:bg-secondary/90'
                            : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                          }`}
                        >
                          <btn.icon className="w-5 h-5" />
                          {btn.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>

              {heroImage && (
                <Reveal variant="slide-left" delay={150} className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
                    <img
                      src={heroImage}
                      alt={heroImageAlt || heroTitle}
                      className="h-[320px] w-full object-cover md:h-[420px]"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/10" />
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
                  </div>
                </Reveal>
              )}
            </div>

            {stats.length > 0 && (
              <Reveal variant="slide-up" delay={200}>
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Features Section */}
        {features.length > 0 && (
          <section className="py-24 px-4 bg-white dark:bg-slate-950">
            <div className="max-w-[1440px] mx-auto">
              <Reveal variant="fade">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  {t('common.what_we_offer')}
                </h2>
              </Reveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                  <Reveal key={idx} variant="slide-up" delay={idx * 100}>
                    <div className={`p-8 rounded-3xl ${colors.light} border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 group`}>
                      <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
            <div className="max-w-[1440px] mx-auto">
              <Reveal variant="fade">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">
                  {t('common.related_resources')}
                </h2>
              </Reveal>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPages.map((page, idx) => (
                  <Reveal key={idx} variant="slide-up" delay={idx * 100}>
                    <Link
                      to={page.href}
                      className="group block p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-secondary transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">{page.description}</p>
                      <span className="inline-flex items-center gap-2 text-secondary font-semibold">
                        {t('common.learn_more')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="py-24 px-4 bg-white dark:bg-slate-950">
            <div className="max-w-3xl mx-auto">
              <Reveal variant="fade">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  {t('common.frequently_asked_questions')}
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <Reveal key={idx} variant="slide-up" delay={idx * 100}>
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
        )}

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-[1440px] mx-auto text-center">
            <Reveal variant="fade">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {ctaTitle ?? t('common.ready_to_get_started')}
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                {ctaSubtitle ?? t('common.connect_with_experts')}
              </p>
            </Reveal>
            
            <Reveal variant="slide-up" delay={200}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {ctaButtons.length > 0 ? ctaButtons.map((btn, idx) => (
                  <Link
                    key={idx}
                    to={btn.href}
                    className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all ${idx === 0
                      ? 'bg-secondary text-white hover:bg-secondary/90'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <btn.icon className="w-5 h-5" />
                    {btn.label}
                  </Link>
                )) : (
                  <>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-secondary text-white hover:bg-secondary/90 transition-all"
                    >
                      <MessageSquare className="w-5 h-5" />
                      {t('about.contact_cta.contact_us')}
                    </Link>
                    <Link
                      to="/education"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
                    >
                      {t('home.hero.explore')}
                    </Link>
                  </>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{COMPANY.phone.india}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{COMPANY.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{COMPANY.address.india}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
