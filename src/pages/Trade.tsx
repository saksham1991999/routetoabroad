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

const Trade = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
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
            <div className="space-y-8">
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
            </div>

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
                <div key={idx} className={`${idx === 2 ? 'md:col-span-2' : ''} p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 transition-all group`}>
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Excellence */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
              <img src="/assets/images/trade_consulting.jpg" alt={t('trade.services.alt_consulting')} className="w-full h-full object-cover" />
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
        </div>
      </section>

      {/* Standardized Process */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('trade.process.title')}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t('trade.process.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { id: '01', title: t('trade.process.step_01_title'), desc: t('trade.process.step_01_text'), icon: Search },
              { id: '02', title: t('trade.process.step_02_title'), desc: t('trade.process.step_02_text'), icon: Box },
              { id: '03', title: t('trade.process.step_03_title'), desc: t('trade.process.step_03_text'), icon: Zap },
              { id: '04', title: t('trade.process.step_04_title'), desc: t('trade.process.step_04_text'), icon: BadgeCheck }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-center group hover:bg-white dark:hover:bg-slate-800 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                <span className="absolute top-4 right-8 font-black text-4xl text-blue-600/10 dark:text-blue-400/5">{step.id}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">{t('trade.industries.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
                <span className="text-slate-700 dark:text-slate-300 font-bold">{t(`trade.industries.cat_0${num}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Inquiry Form */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 text-white relative flex flex-col justify-between">
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
              <img src="/assets/images/trade_form_bg.jpg" alt={t('trade.form.alt_form')} className="absolute inset-0 w-full h-full object-cover opacity-20" />
            </div>

            <div className="lg:w-1/2 bg-white dark:bg-slate-800 p-8 md:p-16">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">{t('trade.form.label_company')}</label>
                  <input type="text" placeholder={t('trade.form.placeholder_company')} className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-600 dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">{t('trade.form.label_direction')}</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-600 dark:text-white">
                    <option>{t('trade.form.option_import')}</option>
                    <option>{t('trade.form.option_export')}</option>
                    <option>{t('trade.form.option_bilateral')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">{t('trade.form.label_category')}</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-600 dark:text-white">
                    <option>{t('trade.form.cat_electronics')}</option>
                    <option>{t('trade.form.cat_machinery')}</option>
                    <option>{t('trade.form.cat_textiles')}</option>
                    <option>{t('trade.form.cat_other')}</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">{t('trade.form.label_volume')}</label>
                  <input type="text" placeholder={t('trade.form.placeholder_volume')} className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-600 dark:text-white" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400">{t('trade.form.label_desc')}</label>
                  <textarea rows={4} placeholder={t('trade.form.placeholder_desc')} className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border-none focus:ring-2 focus:ring-blue-600 dark:text-white" />
                </div>
                <button type="submit" className="md:col-span-2 py-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
                  {t('trade.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">{t('trade.faq.badge')}</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">{t('trade.faq.title')}</h2>
            </div>
            <div className="text-right">
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{t('trade.faq.cta_desc')}</p>
              <a href="#" className="text-blue-600 font-bold flex items-center justify-end gap-1">
                {t('trade.faq.cta_link')} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-xs font-black shrink-0">{num}</span>
                  {t(`trade.faq.q${num}`)}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-11">
                  {t(`trade.faq.a${num}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trade;
