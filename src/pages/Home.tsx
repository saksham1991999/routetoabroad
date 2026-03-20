import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';
import type { PillarId } from '../types';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Reveal from '../components/animation/Reveal';
import { TESTIMONIALS } from '../data/testimonials';
import { BLOGS } from '../data/blogs';

interface PillarConfig {
  id: PillarId;
  label: string;
  icon: string;
  color: string;
}

export default function Home() {
  const { t } = useTranslation();
  const [activePillar, setActivePillar] = useState<PillarId>('education');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredBlogs = BLOGS.filter((b) => b.featured);

  const testimonialCategoryLabel: Record<string, string> = {
    education: 'Education',
    tourism: 'Tourism',
    trade: 'Trade',
  };

  const pillars: PillarConfig[] = [
    { id: 'education', label: t('home.expertise.pillar_01'), icon: 'school', color: 'primary' },
    { id: 'tourism', label: t('home.expertise.pillar_02'), icon: 'explore', color: 'tourism-emerald' },
    { id: 'trade', label: t('home.expertise.pillar_03'), icon: 'inventory_2', color: 'trade-violet' },
  ];

  return (
    <>
      <main className="pt-0 transition-colors duration-300">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-72px)] flex flex-col md:flex-row overflow-hidden mesh-grain">
          {/* Left Content (55%) */}
          <div className="w-full md:w-[55%] px-8 md:px-24 flex flex-col justify-center py-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-secondary"></div>
              <span className="font-mono text-sm font-semibold tracking-widest text-secondary uppercase whitespace-normal">{t('home.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary dark:text-blue-400 leading-[1.05] tracking-tight mb-8">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant dark:text-slate-400 max-w-xl leading-relaxed mb-12">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/education" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-md hover:-translate-y-1 transition-all duration-300">
                {t('home.hero.explore')} <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/about" className="bg-surface-container-lowest dark:bg-slate-900 text-primary dark:text-blue-300 border border-outline-variant/30 px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all">
                {t('home.hero.talk_advisor')}
              </Link>
            </div>
            {/* Trust Strip */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-outline-variant/20">
              <div>
                <div className="font-mono text-3xl font-bold text-primary dark:text-blue-400 mb-1">{t('common.stats.students')}</div>
                <div className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">{t('home.hero.students_placed')}</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-primary dark:text-blue-400 mb-1">{t('common.stats.years')}</div>
                <div className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">{t('home.hero.years_experience')}</div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-primary dark:text-blue-400 mb-1">{t('common.stats.countries')}</div>
                <div className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">{t('home.hero.countries_served')}</div>
              </div>
            </div>
          </div>
          {/* Right Visual (45%) */}
          <div className="w-full md:w-[45%] relative bg-surface-container-low dark:bg-slate-900 overflow-hidden min-h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Geometric Composition */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-[48px] overflow-hidden shadow-2xl rotate-3 bg-blue-100 p-2 dark:bg-blue-900/30">
                <img className="w-full h-full object-cover rounded-[40px] opacity-80 mix-blend-multiply dark:mix-blend-overlay" alt={t('home.hero.alt_edu')} src="/assets/images/hero_edu.jpg" />
              </div>
              <div className="absolute bottom-10 left-0 w-2/3 h-2/3 rounded-[48px] overflow-hidden shadow-2xl -rotate-6 bg-emerald-100 p-2 dark:bg-emerald-900/30">
                <img className="w-full h-full object-cover rounded-[40px] opacity-80 mix-blend-multiply dark:mix-blend-overlay" alt={t('home.hero.alt_tourism')} src="/assets/images/hero_tourism.jpg" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-[48px] overflow-hidden shadow-2xl rotate-12 bg-violet-100 p-2 border-4 border-white dark:border-slate-800 dark:bg-violet-900/30">
                <img className="w-full h-full object-cover rounded-[40px] opacity-80 mix-blend-multiply dark:mix-blend-overlay" alt={t('home.hero.alt_trade')} src="/assets/images/hero_trade.jpg" />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Ticker */}
        <div className="bg-surface-container-low dark:bg-slate-900 py-4 overflow-hidden border-y border-outline-variant/10">
          <div className="flex whitespace-nowrap gap-12 animate-marquee font-mono text-sm font-medium text-on-surface-variant dark:text-slate-500 uppercase tracking-tight">
            <span className="flex items-center gap-4">{t('home.marquee.item_01')} <span className="text-secondary">●</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_02')} <span className="text-secondary">●</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_03')} <span className="text-secondary">●</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_04')} <span className="text-secondary">●</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_01')} <span className="text-secondary">●</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_02')} <span className="text-secondary">●</span></span>
          </div>
        </div>

        {/* Pillar Navigator */}
        <section className="py-24 px-8 max-w-[1440px] mx-auto bg-white dark:bg-slate-950">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-500 font-bold mb-4">{t('home.expertise.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary dark:text-blue-400">{t('home.expertise.title')}</h2>
          </div>
          <Reveal variant="slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-surface-container-lowest dark:bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-sm border border-outline-variant/10">
              {/* Interactive Tabs */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                {pillars.map((pillar, idx) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={cn(
                      "w-full sm:w-auto flex items-center justify-between p-6 rounded-2xl transition-all duration-300 text-left",
                      activePillar === pillar.id
                        ? "bg-primary text-white shadow-lg shadow-blue-500/20"
                        : "hover:bg-surface-container-low dark:hover:bg-slate-800 text-on-surface dark:text-slate-300"
                    )}
                  >
                    <div className="flex flex-col">
                      <span className={cn("text-xs uppercase tracking-widest mb-1 opacity-60", activePillar === pillar.id ? "text-white" : "text-on-surface-variant")}>
                        {t('home.expertise.pillar_badge')} 0{idx + 1}
                      </span>
                      <span className="text-xl font-bold">{pillar.label}</span>
                    </div>
                    <span className={cn("material-symbols-outlined transition-opacity", activePillar === pillar.id ? "opacity-100" : "opacity-40")}>
                      {pillar.icon}
                    </span>
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <div className="lg:col-span-8 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[400px]">
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                    <h3 className="text-3xl font-headline font-bold text-primary dark:text-blue-400">{t(`home.expertise.${activePillar}_panel.title`)}</h3>
                    <p className="text-on-surface-variant dark:text-slate-400 leading-relaxed">
                      {t(`home.expertise.${activePillar}_panel.description`)}
                    </p>
                    <ul className="space-y-4">
                      {[1, 2, 3].map((num) => (
                        <li key={num} className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-300">
                          <span className="material-symbols-outlined text-[#2563EB]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                          {t(`home.expertise.${activePillar}_panel.feature_0${num}`)}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button
                        pillar={activePillar}
                        size="lg"
                        className="rounded-xl shadow-md active:scale-95"
                      >
                        {t(`home.expertise.${activePillar}_panel.cta`)}
                      </Button>
                      <Button
                        variant="ghost"
                        size="md"
                        className="text-primary dark:text-blue-400 font-mono text-sm font-bold group p-0 shadow-none"
                        iconRight={<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                      >
                        {t(`home.expertise.${activePillar}_panel.learn_more`)}
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/10">
                      <div className="font-mono text-2xl font-bold text-[#2563EB] mb-1">
                        {activePillar === 'education' ? t('common.stats.partners') : activePillar === 'tourism' ? t('common.stats.regions') : t('common.stats.suppliers')}
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">{t(`home.expertise.${activePillar}_panel.stat_unis`)}</div>
                    </div>
                    <div className="p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/10">
                      <div className="font-mono text-2xl font-bold text-[#2563EB] mb-1">
                        {activePillar === 'education' ? '100%' : activePillar === 'tourism' ? t('common.stats.success') : t('common.stats.support')}
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">{t(`home.expertise.${activePillar}_panel.stat_visa`)}</div>
                    </div>
                    <div className="col-span-2 p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/10 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#2563EB]">verified</span>
                      </div>
                      <div>
                        <div className="font-mono text-xl font-bold text-primary dark:text-blue-400">
                          {activePillar === 'education' ? t('common.stats.scholarships') : activePillar === 'tourism' ? t('common.stats.guides') : t('common.stats.volume')}
                        </div>
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">{t(`home.expertise.${activePillar}_panel.stat_scholarship`)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Why RouteToAbroad (Sticky Narrative) */}
        <section className="py-24 bg-surface dark:bg-slate-950 px-8 transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="md:sticky md:top-32 h-fit">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">{t('home.advantage.badge')}</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-primary dark:text-blue-400 mb-12">{t('home.advantage.title')}</h2>
              <div className="space-y-12">
                <div>
                  <div className="font-mono text-7xl font-extrabold text-primary/10 dark:text-blue-400/10 tracking-tighter mb-[-1.5rem] relative z-0">{t('common.stats.years')}</div>
                  <div className="text-xl font-bold relative z-10 text-primary dark:text-blue-300">{t('home.advantage.years_exp_title')}</div>
                  <p className="text-on-surface-variant dark:text-slate-400 max-w-xs mt-2">{t('home.advantage.years_exp_desc')}</p>
                </div>
                <div>
                  <div className="font-mono text-7xl font-extrabold text-primary/10 dark:text-blue-400/10 tracking-tighter mb-[-1.5rem] relative z-0">{t('common.stats.students')}</div>
                  <div className="text-xl font-bold relative z-10 text-primary dark:text-blue-300">{t('home.advantage.impact_title')}</div>
                  <p className="text-on-surface-variant dark:text-slate-400 max-w-xs mt-2">{t('home.advantage.impact_desc')}</p>
                </div>
              </div>
            </div>
            <div className="space-y-32 py-12">
              <div className="group">
                <div className="w-16 h-1 w-0 bg-secondary group-hover:w-16 transition-all duration-500 mb-8"></div>
                <h3 className="text-3xl font-headline font-bold mb-6 text-slate-900 dark:text-slate-100">{t('home.advantage.point_01_title')}</h3>
                <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                  {t('home.advantage.point_01_desc')}
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-1 w-0 bg-secondary group-hover:w-16 transition-all duration-500 mb-8"></div>
                <h3 className="text-3xl font-headline font-bold mb-6 text-slate-900 dark:text-slate-100">{t('home.advantage.point_02_title')}</h3>
                <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                  {t('home.advantage.point_02_desc')}
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-1 w-0 bg-secondary group-hover:w-16 transition-all duration-500 mb-8"></div>
                <h3 className="text-3xl font-headline font-bold mb-6 text-slate-900 dark:text-slate-100">{t('home.advantage.point_03_title')}</h3>
                <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                  {t('home.advantage.point_03_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <Reveal variant="slide-up">
          <div className="bg-surface-container-low dark:bg-slate-900 py-12 border-y border-outline-variant/10">
            <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center md:border-r border-outline-variant/20 last:border-0">
                <div className="font-mono text-4xl font-extrabold text-primary dark:text-blue-400 mb-2">{t('common.stats.students')}</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60 text-slate-500">{t('home.hero.students_placed')}</div>
              </div>
              <div className="text-center md:border-r border-outline-variant/20 last:border-0">
                <div className="font-mono text-4xl font-extrabold text-primary dark:text-blue-400 mb-2">{t('common.stats.years')}</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60 text-slate-500">{t('home.hero.years_experience')}</div>
              </div>
              <div className="text-center md:border-r border-outline-variant/20 last:border-0">
                <div className="font-mono text-4xl font-extrabold text-primary dark:text-blue-400 mb-2">{t('common.stats.success')}</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60 text-slate-500">{t('education.hero.stat_label')}</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-4xl font-extrabold text-primary dark:text-blue-400 mb-2">{t('common.stats.countries')}</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-60 text-slate-500">{t('home.hero.countries_served')}</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Three Pillars Deep-Dive Cards */}
        <Reveal variant="slide-up">
          <section className="py-24 space-y-24 px-8 max-w-[1440px] mx-auto bg-white dark:bg-slate-950">
            {/* Education */}
            <div className="flex flex-col md:flex-row items-center gap-12 group">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl bg-blue-100 dark:bg-blue-900/20 relative">
                <img className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-110" alt={t('home.pillars_deep.edu_badge')} src="/assets/images/pillar_edu.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="font-mono text-xs font-bold text-[#2563EB] tracking-[0.2em] uppercase">{t('home.pillars_deep.edu_badge')}</span>
                <h3 className="text-4xl font-headline font-bold text-primary dark:text-blue-400">{t('home.pillars_deep.edu_title')}</h3>
                <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                  {t('home.pillars_deep.edu_desc')}
                </p>
                <Link to="/education" className="bg-surface-container-low dark:bg-slate-900 hover:bg-surface-container-high dark:hover:bg-slate-800 text-primary dark:text-blue-400 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 transition-all">
                  {t('home.pillars_deep.edu_cta')} <span className="material-symbols-outlined">school</span>
                </Link>
              </div>
            </div>
            {/* Tourism */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 group">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl bg-emerald-100 dark:bg-emerald-900/20 relative">
                <img className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-110" alt={t('home.pillars_deep.tourism_badge')} src="/assets/images/pillar_tourism.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="font-mono text-xs font-bold text-[#059669] tracking-[0.2em] uppercase">{t('home.pillars_deep.tourism_badge')}</span>
                <h3 className="text-4xl font-headline font-bold text-primary dark:text-blue-400">{t('home.pillars_deep.tourism_title')}</h3>
                <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                  {t('home.pillars_deep.tourism_desc')}
                </p>
                <Link to="/tourism" className="bg-surface-container-low dark:bg-slate-900 hover:bg-surface-container-high dark:hover:bg-slate-800 text-primary dark:text-blue-400 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 transition-all">
                  {t('home.pillars_deep.tourism_cta')} <span className="material-symbols-outlined">explore</span>
                </Link>
              </div>
            </div>
            {/* Trade */}
            <div className="flex flex-col md:flex-row items-center gap-12 group">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl bg-violet-100 dark:bg-violet-900/20 relative">
                <img className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-110" alt={t('home.pillars_deep.trade_badge')} src="/assets/images/pillar_trade.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent"></div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="font-mono text-xs font-bold text-[#7C3AED] tracking-[0.2em] uppercase">{t('home.pillars_deep.trade_badge')}</span>
                <h3 className="text-4xl font-headline font-bold text-primary dark:text-blue-400">{t('home.pillars_deep.trade_title')}</h3>
                <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                  {t('home.pillars_deep.trade_desc')}
                </p>
                <Link to="/trade" className="bg-surface-container-low dark:bg-slate-900 hover:bg-surface-container-high dark:hover:bg-slate-800 text-primary dark:text-blue-400 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 transition-all">
                  {t('home.pillars_deep.trade_cta')} <span className="material-symbols-outlined">inventory_2</span>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Latest Insights */}
        <Reveal variant="slide-up">
          <section className="py-24 px-8 max-w-[1440px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3 block">{t('home.insights.badge')}</span>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary dark:text-blue-400">{t('home.insights.title')}</h2>
              </div>
              <Link to="/blog" className="text-sm font-bold font-mono text-secondary hover:text-secondary/80 transition-colors flex items-center gap-2 whitespace-nowrap">
                {t('home.insights.cta')} <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  {/* Cover image */}
                  <div className="relative h-44 overflow-hidden">
                    {blog.coverImage ? (
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className={cn(
                        'w-full h-full',
                        blog.category === 'education' ? 'bg-blue-100 dark:bg-blue-900/20' : blog.category === 'tourism' ? 'bg-emerald-100 dark:bg-emerald-900/20' : 'bg-violet-100 dark:bg-violet-900/20'
                      )} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <Badge variant={blog.category} size="sm">
                        {blog.category.charAt(0).toUpperCase() + blog.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug mb-3 group-hover:text-secondary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-mono mt-auto">
                      <span>{blog.date}</span>
                      <span>{blog.readTime} {t('blog.min_read')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Testimonials Carousel */}
        <Reveal variant="slide-up">
          <section className="bg-slate-950 py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px]"></div>
            <div className="max-w-[1440px] mx-auto px-8 relative z-10 flex flex-col items-center text-center">
              <svg className="text-white/20 mb-8" fill="none" height="60" viewBox="0 0 24 24" width="60">
                <path d="M10 11L8 17H5L7 11H5V7H11V11H10ZM18 11L16 17H13L15 11H13V7H19V11H18Z" fill="currentColor"></path>
              </svg>
              <Badge
                variant={TESTIMONIALS[activeTestimonial].category}
                size="sm"
                className="mb-8"
              >
                {testimonialCategoryLabel[TESTIMONIALS[activeTestimonial].category]}
              </Badge>
              <h3 className="text-3xl md:text-5xl font-headline italic font-light text-white leading-tight max-w-4xl mb-16 transition-all duration-500">
                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
              </h3>
              <div className="flex flex-col items-center mb-10">
                <div className="w-20 h-20 rounded-full border-2 border-secondary p-1 mb-4 bg-slate-800 flex items-center justify-center overflow-hidden">
                  {TESTIMONIALS[activeTestimonial].image ? (
                    <img
                      className="w-full h-full object-cover rounded-full"
                      alt={TESTIMONIALS[activeTestimonial].name}
                      src={TESTIMONIALS[activeTestimonial].image}
                    />
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-slate-500">person</span>
                  )}
                </div>
                <div className="text-white font-bold text-xl">{TESTIMONIALS[activeTestimonial].name}</div>
                <div className="font-mono text-sm text-slate-400 uppercase tracking-widest mt-1">{TESTIMONIALS[activeTestimonial].role}</div>
              </div>
              {/* Dot navigation */}
              <div className="flex items-center gap-3">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={cn(
                      'rounded-full transition-all duration-300',
                      idx === activeTestimonial
                        ? 'w-6 h-2 bg-secondary'
                        : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                    )}
                  />
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* CTA Section */}
        <section className="bg-secondary-container py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 grain-overlay mix-blend-overlay"></div>
          <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-12">{t('home.cta_strip.title')}</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/education" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95">{t('home.cta_strip.edu')}</Link>
              <Link to="/tourism" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95">{t('home.cta_strip.tourism')}</Link>
              <Link to="/trade" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all active:scale-95">{t('home.cta_strip.trade')}</Link>
            </div>
            <div className="text-white/80 font-mono text-lg flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">call</span>
              {t('common.hotline')}: {t('common.phone_numbers.india')}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
