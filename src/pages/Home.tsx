import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';
import { useTranslation } from 'react-i18next';
import { cn } from '../utils/cn';
import type { PillarId } from '../types';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Reveal from '../components/animation/Reveal';
import SectionDivider from '../components/ui/SectionDivider';
import DecorativeBlob from '../components/ui/DecorativeBlob';
import { TESTIMONIALS } from '../data/testimonials';
import { BLOGS } from '../data/blogs';
import Seo from '../components/seo/Seo';

interface PillarConfig {
  id: PillarId;
  label: string;
  icon: string;
  color: string;
}

const pillarBorderColor: Record<string, string> = {
  education: 'border-blue-500',
  tourism: 'border-emerald-500',
  trade: 'border-violet-500',
};

const statBarItems = [
  { statKey: 'common.stats.students', labelKey: 'home.hero.students_placed', icon: 'school' },
  { statKey: 'common.stats.years', labelKey: 'home.hero.years_experience', icon: 'calendar_month' },
  { statKey: 'common.stats.success', labelKey: 'education.hero.stat_label', icon: 'verified' },
  { statKey: 'common.stats.countries', labelKey: 'home.hero.countries_served', icon: 'public' },
] as const;

const advantagePoints = [
  { num: '01', titleKey: 'home.advantage.point_01_title', descKey: 'home.advantage.point_01_desc' },
  { num: '02', titleKey: 'home.advantage.point_02_title', descKey: 'home.advantage.point_02_desc' },
  { num: '03', titleKey: 'home.advantage.point_03_title', descKey: 'home.advantage.point_03_desc' },
] as const;

const deepDivePillars = [
  { dir: 'md:flex-row', badgeKey: 'home.pillars_deep.edu_badge', titleKey: 'home.pillars_deep.edu_title', descKey: 'home.pillars_deep.edu_desc', ctaKey: 'home.pillars_deep.edu_cta', route: '/education', icon: 'school', img: '/assets/images/pillar_edu.webp', bgLight: 'bg-blue-100', bgDark: 'dark:bg-blue-900/20', gradientFrom: 'from-blue-900/50', badgeColor: 'text-[#2563EB]', borderColor: 'border-blue-500' },
  { dir: 'md:flex-row-reverse', badgeKey: 'home.pillars_deep.tourism_badge', titleKey: 'home.pillars_deep.tourism_title', descKey: 'home.pillars_deep.tourism_desc', ctaKey: 'home.pillars_deep.tourism_cta', route: '/tourism', icon: 'explore', img: '/assets/images/pillar_tourism.webp', bgLight: 'bg-emerald-100', bgDark: 'dark:bg-emerald-900/20', gradientFrom: 'from-emerald-900/50', badgeColor: 'text-[#059669]', borderColor: 'border-emerald-500' },
  { dir: 'md:flex-row', badgeKey: 'home.pillars_deep.trade_badge', titleKey: 'home.pillars_deep.trade_title', descKey: 'home.pillars_deep.trade_desc', ctaKey: 'home.pillars_deep.trade_cta', route: '/trade', icon: 'inventory_2', img: '/assets/images/pillar_trade.webp', bgLight: 'bg-violet-100', bgDark: 'dark:bg-violet-900/20', gradientFrom: 'from-violet-900/50', badgeColor: 'text-[#7C3AED]', borderColor: 'border-violet-500' },
] as const;

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
    education: t('education.hero.badge'),
    tourism: t('tourism.hero.title_part1') || 'Tourism',
    trade: t('trade.hero.trade_tab'),
  };

  const pillars: PillarConfig[] = [
    { id: 'education', label: t('home.expertise.pillar_01'), icon: 'school', color: 'primary' },
    { id: 'tourism', label: t('home.expertise.pillar_02'), icon: 'explore', color: 'tourism-emerald' },
    { id: 'trade', label: t('home.expertise.pillar_03'), icon: 'inventory_2', color: 'trade-violet' },
  ];

  return (
    <>
      <Seo
        title="RouteToAbroad | Your Strategic Gateway to East Asia - Education, Tourism & Trade"
        description="Expert guidance for studying in China, traveling East Asia, and navigating India-China trade. 500+ students placed, 12+ years experience. Offices in New Delhi & Guangzhou."
        keywords="study in china, mbbs in china, china education consultant, east asia travel, india china trade, chinese scholarship, csc scholarship"
        canonical="https://routetoabroad.com/"
      />
      <main className="pt-0 transition-colors duration-300">
        {/* ───── Hero Section ───── */}
        <section className="min-h-[calc(100vh-72px)] flex flex-col md:flex-row overflow-hidden mesh-grain">
          {/* Left Content (55%) */}
          <div className="w-full md:w-[55%] px-4 sm:px-8 md:px-24 flex flex-col justify-center py-16 relative">
            <Reveal variant="fade" delay={0}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/5 dark:bg-secondary/10 border border-secondary/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-sm font-semibold tracking-widest text-secondary uppercase">{t('home.hero.badge')}</span>
              </div>
            </Reveal>
            <Reveal variant="slide-up" delay={100}>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-primary dark:text-blue-400 leading-[1.05] tracking-tight mb-8">
                {t('home.hero.title')}
              </h1>
            </Reveal>
            <Reveal variant="slide-up" delay={200}>
              <p className="text-lg md:text-xl text-on-surface-variant dark:text-slate-400 max-w-xl leading-relaxed mb-12">
                {t('home.hero.description')}
              </p>
            </Reveal>
            <Reveal variant="slide-up" delay={300}>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/education" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-md hover:-translate-y-1 transition-all duration-300 shimmer-on-hover">
                  {t('home.hero.explore')} <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/about" className="bg-surface-container-lowest dark:bg-slate-900 text-primary dark:text-blue-300 border border-outline-variant/30 px-8 py-4 rounded-xl font-bold hover:bg-surface-container-low transition-all">
                  {t('home.hero.talk_advisor')}
                </Link>
              </div>
            </Reveal>
            {/* Trust badge row */}
            <Reveal variant="fade" delay={400}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <span className="material-symbols-outlined text-emerald-600 text-base" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">{t('home.hero.google_rating')}</span>
                </div>
                <span className="text-sm text-on-surface-variant dark:text-slate-500">{t('home.hero.trust_badge')}</span>
              </div>
            </Reveal>
            {/* Trust Strip */}
            <Reveal variant="slide-up" delay={500}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-outline-variant/20">
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
            </Reveal>
          </div>
          {/* Right Visual (45%) */}
          <div className="w-full md:w-[45%] relative bg-surface-container-low dark:bg-slate-900 overflow-hidden min-h-[300px] md:min-h-[500px] flex items-center justify-center dot-grid">
            <DecorativeBlob color="blue" size="lg" position="top-1/4 left-1/4" animation="pulse-glow" />
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Geometric Composition */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-[48px] overflow-hidden shadow-2xl rotate-3 bg-blue-100 p-2 dark:bg-blue-900/30 animate-float-slow">
                <img className="w-full h-full object-cover rounded-[40px] opacity-80 mix-blend-multiply dark:mix-blend-overlay" alt={t('home.hero.alt_edu')} src="/assets/images/hero_edu.webp" fetchPriority="high" width="500" height="500" />
              </div>
              <div className="absolute bottom-10 left-0 w-2/3 h-2/3 rounded-[48px] overflow-hidden shadow-2xl -rotate-6 bg-emerald-100 p-2 dark:bg-emerald-900/30 animate-float-delayed">
                <img className="w-full h-full object-cover rounded-[40px] opacity-80 mix-blend-multiply dark:mix-blend-overlay" alt={t('home.hero.alt_tourism')} src="/assets/images/hero_tourism.webp" loading="lazy" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-[48px] overflow-hidden shadow-2xl rotate-12 bg-violet-100 p-2 border-4 border-white dark:border-slate-800 dark:bg-violet-900/30 animate-float">
                <img className="w-full h-full object-cover rounded-[40px] opacity-80 mix-blend-multiply dark:mix-blend-overlay" alt={t('home.hero.alt_trade')} src="/assets/images/hero_trade.webp" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* ───── Wave Divider: Hero → Ticker ───── */}
        <SectionDivider variant="wave" fillClass="fill-surface-container-low dark:fill-slate-900" />

        {/* ───── Social Proof Ticker ───── */}
        <div className="bg-surface-container-low dark:bg-slate-900 py-4 overflow-hidden border-y border-outline-variant/10 relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-container-low dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-container-low dark:from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="flex whitespace-nowrap gap-12 animate-marquee font-mono text-sm font-medium text-on-surface-variant dark:text-slate-500 uppercase tracking-tight">
            <span className="flex items-center gap-4">{t('home.marquee.item_01')} <span className="material-symbols-outlined text-secondary text-xs">diamond</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_02')} <span className="material-symbols-outlined text-secondary text-xs">diamond</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_03')} <span className="material-symbols-outlined text-secondary text-xs">diamond</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_04')} <span className="material-symbols-outlined text-secondary text-xs">diamond</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_01')} <span className="material-symbols-outlined text-secondary text-xs">diamond</span></span>
            <span className="flex items-center gap-4">{t('home.marquee.item_02')} <span className="material-symbols-outlined text-secondary text-xs">diamond</span></span>
          </div>
        </div>

        {/* ───── Curve Divider: Ticker → Pillar Navigator ───── */}
        <SectionDivider variant="curve" fillClass="fill-white dark:fill-slate-950" />

        {/* ───── Pillar Navigator ───── */}
        <section className="py-24 px-4 sm:px-8 max-w-[1440px] mx-auto bg-white dark:bg-slate-950 relative overflow-hidden gradient-mesh-blue">
          <DecorativeBlob color="blue" size="md" position="-top-20 -right-20" animation="float-slow" />
          <div className="flex flex-col items-center mb-16 text-center relative z-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-on-surface-variant dark:text-slate-500 font-bold mb-4">{t('home.expertise.badge')}</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary dark:text-blue-400">{t('home.expertise.title')}</h2>
          </div>
          <Reveal variant="slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-surface-container-lowest dark:bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-sm border border-outline-variant/10 relative z-10">
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
                <div key={activePillar} className="grid md:grid-cols-2 gap-12 items-center min-h-[300px] md:min-h-[400px]">
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
                      <Link to={ROUTES[activePillar]} className="inline-flex">
                        <Button
                          pillar={activePillar}
                          size="lg"
                          className="rounded-xl shadow-md active:scale-95"
                        >
                          {t(`home.expertise.${activePillar}_panel.cta`)}
                        </Button>
                      </Link>
                      <Link to={ROUTES[activePillar]} className="inline-flex">
                        <Button
                          variant="ghost"
                          size="md"
                          className="text-primary dark:text-blue-400 font-mono text-sm font-bold group p-0 shadow-none"
                          iconRight={<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                        >
                          {t(`home.expertise.${activePillar}_panel.learn_more`)}
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={cn("p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-t-2", pillarBorderColor[activePillar])}>
                      <div className="font-mono text-2xl font-bold text-[#2563EB] mb-1">
                        {activePillar === 'education' ? t('common.stats.partners') : activePillar === 'tourism' ? t('common.stats.regions') : t('common.stats.suppliers')}
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">{t(`home.expertise.${activePillar}_panel.stat_unis`)}</div>
                    </div>
                    <div className={cn("p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-t-2", pillarBorderColor[activePillar])}>
                      <div className="font-mono text-2xl font-bold text-[#2563EB] mb-1">
                        {activePillar === 'education' ? '100%' : activePillar === 'tourism' ? t('common.stats.success') : t('common.stats.support')}
                      </div>
                      <div className="text-[10px] uppercase font-bold tracking-wider opacity-60">{t(`home.expertise.${activePillar}_panel.stat_visa`)}</div>
                    </div>
                    <div className={cn("col-span-2 p-6 bg-surface-container-low dark:bg-slate-800 rounded-2xl border border-outline-variant/10 flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-t-2", pillarBorderColor[activePillar])}>
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

        {/* ───── Curve Divider: Pillar Navigator → Why ───── */}
        <SectionDivider variant="curve" flip fillClass="fill-surface dark:fill-slate-950" />

        {/* ───── Why RouteToAbroad (Sticky Narrative) ───── */}
        <section className="py-24 bg-surface dark:bg-slate-950 px-4 sm:px-8 transition-colors duration-300 dot-grid">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="md:sticky md:top-32 h-fit relative overflow-hidden">
              <DecorativeBlob color="red" size="md" position="-bottom-20 -left-20" animation="pulse-glow" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">{t('home.advantage.badge')}</span>
              <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-primary dark:text-blue-400 mb-12">{t('home.advantage.title')}</h2>
              <div className="space-y-12">
                <div>
                  <div className="font-mono text-5xl md:text-7xl font-extrabold text-primary/10 dark:text-blue-400/10 tracking-tighter mb-[-1.5rem] relative z-0">{t('common.stats.years')}</div>
                  <div className="text-xl font-bold relative z-10 text-primary dark:text-blue-300">{t('home.advantage.years_exp_title')}</div>
                  <p className="text-on-surface-variant dark:text-slate-400 max-w-xs mt-2">{t('home.advantage.years_exp_desc')}</p>
                </div>
                <div>
                  <div className="font-mono text-5xl md:text-7xl font-extrabold text-primary/10 dark:text-blue-400/10 tracking-tighter mb-[-1.5rem] relative z-0">{t('common.stats.students')}</div>
                  <div className="text-xl font-bold relative z-10 text-primary dark:text-blue-300">{t('home.advantage.impact_title')}</div>
                  <p className="text-on-surface-variant dark:text-slate-400 max-w-xs mt-2">{t('home.advantage.impact_desc')}</p>
                </div>
              </div>
            </div>
            <div className="space-y-32 py-12">
              {advantagePoints.map((point, idx) => (
                <Reveal key={point.num} variant="slide-up" delay={idx * 200}>
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary font-mono font-bold text-lg flex items-center justify-center border border-secondary/20 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        {point.num}
                      </div>
                      <div className="h-[2px] w-0 group-hover:w-12 bg-secondary transition-all duration-500" />
                    </div>
                    <h3 className="text-3xl font-headline font-bold mb-6 text-slate-900 dark:text-slate-100">{t(point.titleKey)}</h3>
                    <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                      {t(point.descKey)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Slant Divider: Why → Stats Bar ───── */}
        <SectionDivider variant="slant" fillClass="fill-slate-900 dark:fill-slate-950" />

        {/* ───── Stats Bar ───── */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {statBarItems.map((item, idx) => (
              <Reveal key={item.statKey} variant="slide-up" delay={idx * 100}>
                <div className={cn("text-center", idx < 3 && "md:border-r md:border-white/10")}>
                  <span className="material-symbols-outlined text-white/40 text-2xl mb-3 block">{item.icon}</span>
                  <div className="font-mono text-2xl sm:text-4xl font-extrabold text-white mb-2">{t(item.statKey)}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-slate-400">{t(item.labelKey)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ───── Wave Divider: Stats Bar → Pillars Deep-Dive ───── */}
        <SectionDivider variant="wave" fillClass="fill-white dark:fill-slate-950" />

        {/* ───── Three Pillars Deep-Dive Cards ───── */}
        <section className="py-24 space-y-24 px-4 sm:px-8 max-w-[1440px] mx-auto bg-white dark:bg-slate-950">
          {deepDivePillars.map((pillar, idx) => (
            <Reveal key={pillar.route} variant="slide-up" delay={idx * 200}>
              <div className={cn("flex flex-col items-center gap-12 group", pillar.dir)}>
                <div className={cn("w-full md:w-1/2 aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl relative", pillar.bgLight, pillar.bgDark)}>
                  <img className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-80 transition-transform duration-700 group-hover:scale-110" alt={t(pillar.badgeKey)} src={pillar.img} loading="lazy" />
                  <div className={cn("absolute inset-0 bg-gradient-to-t via-transparent to-transparent", pillar.gradientFrom)} />
                </div>
                <div className={cn("w-full md:w-1/2 space-y-6 border-s-4 ps-8", pillar.borderColor)}>
                  <span className={cn("font-mono text-xs font-bold tracking-[0.2em] uppercase", pillar.badgeColor)}>{t(pillar.badgeKey)}</span>
                  <h3 className="text-4xl font-headline font-bold text-primary dark:text-blue-400">{t(pillar.titleKey)}</h3>
                  <p className="text-lg text-on-surface-variant dark:text-slate-400 leading-relaxed">
                    {t(pillar.descKey)}
                  </p>
                  <Link to={pillar.route} className="bg-surface-container-low dark:bg-slate-900 hover:bg-surface-container-high dark:hover:bg-slate-800 text-primary dark:text-blue-400 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-3 transition-all shadow-sm hover:shadow-md shimmer-on-hover group/cta">
                    {t(pillar.ctaKey)} <span className="material-symbols-outlined group-hover/cta:translate-x-1 transition-transform">{pillar.icon}</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ───── Latest Insights ───── */}
        <section className="py-24 px-4 sm:px-8 max-w-[1440px] mx-auto dot-grid">
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
            {featuredBlogs.map((blog, idx) => (
              <Reveal key={blog.id} variant="slide-up" delay={idx * 150}>
                <Link
                  to={`/blog/${blog.slug}`}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-secondary/30 transition-all duration-300 h-full"
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
                    <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-mono mt-auto mb-3">
                      <span>{blog.date}</span>
                      <span>{blog.readTime} {t('blog.min_read')}</span>
                    </div>
                    {/* Expanding bottom border */}
                    <div className="h-0.5 w-0 group-hover:w-full bg-secondary transition-all duration-500" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───── Slant Divider: Insights → Testimonials ───── */}
        <SectionDivider variant="slant" fillClass="fill-slate-950" />

        {/* ───── Testimonials Carousel ───── */}
        <Reveal variant="slide-up">
          <section className="bg-slate-950 py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px]" />
            <DecorativeBlob color="blue" size="md" position="bottom-0 left-0" animation="float-delayed" />
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center text-center">
              {/* Section heading */}
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-3">{t('home.testimonials.badge')}</span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-12">{t('home.testimonials.title')}</h2>

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
              <div key={activeTestimonial} className="animate-in fade-in duration-700">
                <h3 className="text-3xl md:text-5xl font-headline italic font-light text-white leading-tight max-w-4xl mb-16">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </h3>
              </div>
              <div className="flex flex-col items-center mb-10">
                <div className={cn("w-20 h-20 rounded-full border-2 p-1 mb-4 bg-slate-800 flex items-center justify-center overflow-hidden transition-colors duration-300", pillarBorderColor[TESTIMONIALS[activeTestimonial].category])}>
                  {TESTIMONIALS[activeTestimonial].image ? (
                    <img
                      className="w-full h-full object-cover rounded-full"
                      alt={TESTIMONIALS[activeTestimonial].name}
                      src={TESTIMONIALS[activeTestimonial].image}
                      loading="lazy"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-4xl text-slate-500">person</span>
                  )}
                </div>
                <div className="text-white font-bold text-xl">{TESTIMONIALS[activeTestimonial].name}</div>
                <div className="font-mono text-sm text-slate-400 uppercase tracking-widest mt-1">{TESTIMONIALS[activeTestimonial].role}</div>
              </div>
              {/* Pill-button nav (desktop) */}
              <div className="hidden sm:flex items-center gap-4 flex-wrap justify-center">
                {TESTIMONIALS.map((testimonial, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Testimonial from ${testimonial.name}`}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 border',
                      idx === activeTestimonial
                        ? 'bg-white/10 border-white/30 text-white'
                        : 'bg-transparent border-white/10 text-white/50 hover:text-white/80 hover:border-white/20'
                    )}
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-700 flex-shrink-0 flex items-center justify-center">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <span className="material-symbols-outlined text-sm text-slate-500">person</span>
                      )}
                    </div>
                    <span className="text-sm font-medium">{testimonial.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
              {/* Dot navigation (mobile) */}
              <div className="flex items-center gap-3 sm:hidden">
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

        {/* ───── CTA Section ───── */}
        <section className="bg-secondary-container py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 grain-overlay mix-blend-overlay" />
          {/* Decorative blurs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white mb-6">{t('home.cta_strip.title')}</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-12 leading-relaxed">{t('home.cta_strip.subtitle')}</p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/education" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95 shimmer-on-hover inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-base">school</span> {t('home.cta_strip.edu')}
              </Link>
              <Link to="/tourism" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95 shimmer-on-hover inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-base">explore</span> {t('home.cta_strip.tourism')}
              </Link>
              <Link to="/trade" className="bg-white text-secondary-container px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 hover:-translate-y-1 transition-all active:scale-95 shimmer-on-hover inline-flex items-center gap-2">
                <span className="material-symbols-outlined text-base">inventory_2</span> {t('home.cta_strip.trade')}
              </Link>
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-mono text-lg">
              <span className="material-symbols-outlined animate-pulse">call</span>
              {t('home.cta_strip.call_label')}: {t('common.phone_numbers.india')}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
