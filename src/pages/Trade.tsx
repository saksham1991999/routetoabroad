import { useTranslation } from 'react-i18next';
import {
  ShieldCheck,
  Truck,
  Search,
  FileText,
  ArrowRight,
  ChevronRight,
  Globe2,
  TrendingUp,
  Box,
  BadgeCheck,
  Zap,
  Users
} from 'lucide-react';
import TradeForm from '../components/forms/TradeForm';
import Accordion, { type AccordionItem } from '../components/ui/Accordion';
import Reveal from '../components/animation/Reveal';

const Trade = () => {
  const { t } = useTranslation();

  const faqItems: AccordionItem[] = [
    { id: 1, question: t('trade.faq.q1'), answer: t('trade.faq.a1') },
    { id: 2, question: t('trade.faq.q2'), answer: t('trade.faq.a2') },
    { id: 3, question: t('trade.faq.q3'), answer: t('trade.faq.a3') },
    { id: 4, question: t('trade.faq.q4'), answer: t('trade.faq.a4') },
    { id: 5, question: t('trade.faq.q5'), answer: t('trade.faq.a5') },
    { id: 6, question: t('trade.faq.q6'), answer: t('trade.faq.a6') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent)] md:animate-pulse" />
          <img
            src="/assets/images/trade_hero_map.jpg"
            alt={t('trade.hero.alt_map')}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 backdrop-blur-md">
              <Globe2 className="w-4 h-4" />
              {t('trade.hero.trade_tab')}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              {t('trade.hero.title_main')} <br />
              <span className="text-blue-500">{t('trade.hero.title_sub')}</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
              {t('trade.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-900/40">
                {t('trade.hero.cta_primary')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-900 text-white border border-slate-800 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                {t('trade.hero.cta_secondary')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Orchestration */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal variant="slide-right" className="space-y-8">
              <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-black uppercase tracking-tighter">
                {t('trade.services.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {t('trade.services.title')}
              </h2>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-4xl font-bold text-blue-600 block mb-1">{t('trade.services.count')}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-widest">
                    {t('trade.services.count_label')}
                  </span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-slate-900 dark:text-white block mb-1">100%</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-widest">
                    {t('trade.services.logistics_stat_03_label')}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 transition-all group">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20">
                      <Search className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('trade.services.sourcing_title')}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        {t('trade.services.sourcing_desc')}
                      </p>
                      <div className="flex gap-8">
                        <div>
                          <p className="text-xl font-bold text-slate-900 dark:text-white">{t('trade.services.sourcing_stat_01_val')}</p>
                          <p className="text-xs text-slate-500 uppercase font-bold">{t('trade.services.sourcing_stat_01_label')}</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold text-slate-900 dark:text-white">{t('trade.services.sourcing_stat_02_val')}</p>
                          <p className="text-xs text-slate-500 uppercase font-bold">{t('trade.services.sourcing_stat_02_label')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: t('trade.services.qc_title'),
                  desc: t('trade.services.qc_desc'),
                  icon: ShieldCheck,
                  cta: t('trade.services.qc_cta')
                },
                {
                  title: t('trade.services.customs_title'),
                  desc: t('trade.services.customs_desc'),
                  icon: FileText,
                  cta: t('trade.services.customs_cta')
                },
                {
                  title: t('trade.services.logistics_title'),
                  desc: t('trade.services.logistics_desc'),
                  icon: Truck,
                  stats: [
                    { val: t('trade.services.logistics_stat_01_val'), label: t('trade.services.logistics_stat_01_label') },
                    { val: t('trade.services.logistics_stat_02_val'), label: t('trade.services.logistics_stat_02_label') }
                  ]
                }
              ].map((service, idx) => (
                <Reveal key={idx} variant="slide-up" delay={idx * 100}>
                  <div className={`${idx === 2 ? 'md:col-span-2' : ''} p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-all group`}>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                    {service.cta && (
                      <button className="text-blue-600 text-sm font-bold flex items-center gap-1">
                        {service.cta} <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                    {service.stats && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        {service.stats.map((s, i) => (
                          <div key={i}>
                            <p className="text-lg font-bold text-slate-900 dark:text-white">{s.val}</p>
                            <p className="text-[10px] text-slate-500 uppercase font-black">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Excellence */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal variant="slide-up">
            <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
                <img
                  src="/assets/images/trade_consulting.jpg"
                  alt={t('trade.services.alt_consulting')}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900" />
              </div>

              <div className="relative z-10 p-12 md:p-20 max-w-2xl">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded mb-6 inline-block">
                  {t('trade.services.consulting_badge')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t('trade.services.consulting_title')}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  {t('trade.services.consulting_desc')}
                </p>
                <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t('trade.services.consulting_cta')}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Standardized Process */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal variant="fade" className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('trade.process.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('trade.process.description')}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: '01', title: t('trade.process.step_01_title'), desc: t('trade.process.step_01_text'), icon: Search },
              { id: '02', title: t('trade.process.step_02_title'), desc: t('trade.process.step_02_text'), icon: Box },
              { id: '03', title: t('trade.process.step_03_title'), desc: t('trade.process.step_03_text'), icon: Zap },
              { id: '04', title: t('trade.process.step_04_title'), desc: t('trade.process.step_04_text'), icon: BadgeCheck }
            ].map((step, idx) => (
              <Reveal key={idx} variant="slide-up" delay={idx * 100}>
                <div className="relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center group hover:bg-white dark:hover:bg-slate-800 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  <span className="absolute top-4 right-8 font-black text-4xl text-blue-600/10 dark:text-blue-400/5">{step.id}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal variant="fade">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              {t('trade.industries.title')}
            </h2>
          </Reveal>
          <Reveal variant="slide-up" delay={100}>
            <div className="flex flex-wrap gap-4 justify-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div
                  key={num}
                  className="px-6 py-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-slate-700 dark:text-slate-300 font-bold">
                    {t(`trade.industries.cat_0${num}`)}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trade Inquiry Form */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal variant="slide-up">
            <div className="max-w-5xl mx-auto bg-blue-600 rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 text-white relative flex flex-col justify-between">
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-6">{t('trade.form.title')}</h2>
                  <p className="text-blue-100 text-lg mb-12">{t('trade.form.description')}</p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <p className="font-medium">{t('trade.services.sourcing_stat_02_val')} {t('trade.services.sourcing_stat_02_label')}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <p className="font-medium">{t('trade.services.logistics_stat_03_label')}</p>
                    </div>
                  </div>
                </div>
                <img
                  src="/assets/images/trade_form_bg.jpg"
                  alt={t('trade.form.alt_form')}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
              </div>

              <div className="lg:w-1/2 bg-white dark:bg-slate-800 p-6 md:p-8 lg:p-16">
                <TradeForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <Reveal variant="slide-right">
              <div>
                <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">
                  {t('trade.faq.badge')}
                </span>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                  {t('trade.faq.title')}
                </h2>
              </div>
            </Reveal>
            <Reveal variant="slide-left">
              <div className="text-right">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{t('trade.faq.cta_desc')}</p>
                <a href="#" className="text-blue-600 font-bold flex items-center justify-end gap-1">
                  {t('trade.faq.cta_link')} <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal variant="slide-up" delay={100}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
              <Accordion items={faqItems} pillar="trade" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Trade;
