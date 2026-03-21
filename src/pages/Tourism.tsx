import { useTranslation } from 'react-i18next';
import {
  Compass,
  Palmtree,
  Building2,
  Users,
  ChevronRight,
  Plane,
  Hotel,
  Clock,
  ShieldCheck,
  Car,
  LifeBuoy
} from 'lucide-react';
import TourismForm from '../components/forms/TourismForm';
import Accordion, { type AccordionItem } from '../components/ui/Accordion';
import Reveal from '../components/animation/Reveal';

const Tourism = () => {
  const { t } = useTranslation();

  const faqItems: AccordionItem[] = [
    { id: 1, question: t('tourism.faq.q1'), answer: t('tourism.faq.a1') },
    { id: 2, question: t('tourism.faq.q2'), answer: t('tourism.faq.a2') },
    { id: 3, question: t('tourism.faq.q3'), answer: t('tourism.faq.a3') },
    { id: 4, question: t('tourism.faq.q4'), answer: t('tourism.faq.a4') },
    { id: 5, question: t('tourism.faq.q5'), answer: t('tourism.faq.a5') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_tourism.webp"
            alt={t('tourism.hero.alt')}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {t('tourism.hero.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t('tourism.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-orange-900/20">
              {t('tourism.hero.cta_primary')}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all">
              {t('tourism.hero.cta_secondary')}
            </button>
          </div>
        </div>
      </div>

      {/* Destination Showcase - China */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="slide-right" className="space-y-8 order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold tracking-widest uppercase">
                {t('tourism.destinations.china.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {t('tourism.destinations.china.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('tourism.destinations.china.description')}
              </p>

              <div className="space-y-6">
                {[
                  { title: t('tourism.destinations.china.item_01_title'), desc: t('tourism.destinations.china.item_01_desc'), icon: Building2 },
                  { title: t('tourism.destinations.china.item_02_title'), desc: t('tourism.destinations.china.item_02_desc'), icon: Palmtree },
                  { title: t('tourism.destinations.china.item_03_title'), desc: t('tourism.destinations.china.item_03_desc'), icon: Compass }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="slide-left" className="order-1 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/assets/images/tourism_traditional.jpg"
                    alt={t('tourism.destinations.china.alt_traditional')}
                    className="rounded-3xl h-48 sm:h-64 w-full object-cover shadow-2xl"
                    loading="lazy"
                  />
                  <img
                    src="/assets/images/tourism_shanghai.webp"
                    alt={t('tourism.destinations.china.alt_modern')}
                    className="rounded-3xl h-56 sm:h-80 w-full object-cover shadow-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="pt-8">
                  <img
                    src="/assets/images/tourism_nature.webp"
                    alt={t('tourism.destinations.china.alt_nature')}
                    className="rounded-3xl h-full w-full object-cover shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Destination Showcase - Japan */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="slide-right" className="relative">
              <img
                src="/assets/images/tourism_japan.webp"
                alt={t('tourism.destinations.japan.alt_landscape')}
                className="rounded-[3rem] shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 hidden md:block">
                <div className="text-center">
                  <span className="text-5xl font-bold text-orange-600 block mb-1">{t('tourism.destinations.japan.badge_value')}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-xs">
                    {t('tourism.destinations.japan.badge_label')}
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="slide-left" className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-bold tracking-widest uppercase">
                {t('tourism.destinations.japan.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {t('tourism.destinations.japan.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('tourism.destinations.japan.description')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t('tourism.destinations.japan.kyoto_title')}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t('tourism.destinations.japan.kyoto_desc')}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{t('tourism.destinations.japan.tokyo_title')}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{t('tourism.destinations.japan.tokyo_desc')}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Travel Modes */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal variant="fade" className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('tourism.modes.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('tourism.modes.subtitle')}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('tourism.modes.culture_title'),
                desc: t('tourism.modes.culture_desc'),
                icon: Palmtree,
                color: 'bg-emerald-50 text-emerald-600'
              },
              {
                title: t('tourism.modes.business_title'),
                desc: t('tourism.modes.business_desc'),
                icon: Building2,
                color: 'bg-blue-50 text-blue-600'
              },
              {
                title: t('tourism.modes.custom_title'),
                desc: t('tourism.modes.custom_desc'),
                icon: Users,
                color: 'bg-purple-50 text-purple-600'
              }
            ].map((mode, idx) => (
              <Reveal key={idx} variant="slide-up" delay={idx * 100}>
                <div className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-slate-100 dark:hover:border-slate-700 h-full">
                  <div className={`w-16 h-16 rounded-2xl ${mode.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    <mode.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{mode.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{mode.desc}</p>
                  <button className="text-orange-600 font-bold flex items-center gap-2 group/btn">
                    {t('tourism.modes.explore')}
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Care */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <Reveal variant="slide-right" className="lg:col-span-1 space-y-8">
              <h2 className="text-4xl font-bold leading-tight">{t('tourism.care.title')}</h2>
              <p className="text-slate-400 text-lg leading-relaxed">{t('tourism.care.description')}</p>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl">
                <span className="text-5xl font-bold text-emerald-400 block mb-2">{t('tourism.care.guarantee_value')}</span>
                <span className="text-slate-300 font-medium">{t('tourism.care.guarantee_label')}</span>
              </div>
            </Reveal>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: t('tourism.care.service_01_title'), desc: t('tourism.care.service_01_desc'), icon: Plane },
                { title: t('tourism.care.service_02_title'), desc: t('tourism.care.service_02_desc'), icon: Hotel },
                { title: t('tourism.care.service_03_title'), desc: t('tourism.care.service_03_desc'), icon: Clock },
                { title: t('tourism.care.service_04_title'), desc: t('tourism.care.service_04_desc'), icon: ShieldCheck },
                { title: t('tourism.care.service_05_title'), desc: t('tourism.care.service_05_desc'), icon: Car },
                { title: t('tourism.care.service_06_title'), desc: t('tourism.care.service_06_desc'), icon: LifeBuoy }
              ].map((service, idx) => (
                <Reveal key={idx} variant="slide-up" delay={idx * 80}>
                  <div className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{service.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-white dark:bg-slate-900" id="inquiry">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal variant="slide-up">
            <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-slate-100 dark:border-slate-800">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{t('tourism.form.title')}</h2>
                <p className="text-slate-600 dark:text-slate-400">{t('tourism.form.description')}</p>
              </div>

              <TourismForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4">
          <Reveal variant="fade">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              {t('tourism.faq.title')}
            </h2>
          </Reveal>
          <Reveal variant="slide-up" delay={100}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden">
              <Accordion items={faqItems} pillar="tourism" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Tourism;
