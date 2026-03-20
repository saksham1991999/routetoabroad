import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  Phone,
  MapPin,
  Globe2,
  GraduationCap,
  Palmtree,
  TrendingUp,
  ChevronRight,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import { cn } from '../utils/cn';
import { COMPANY, SOCIAL_LINKS } from '../constants';
import ContactForm from '../components/forms/ContactForm';
import Reveal from '../components/animation/Reveal';

const socialLinks = [
  { key: 'linkedin', href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { key: 'instagram', href: SOCIAL_LINKS.instagram, icon: Instagram, label: 'Instagram' },
  { key: 'twitter', href: SOCIAL_LINKS.twitter, icon: Twitter, label: 'Twitter / X' },
  { key: 'youtube', href: SOCIAL_LINKS.youtube, icon: Youtube, label: 'YouTube' },
  { key: 'whatsapp', href: SOCIAL_LINKS.whatsapp, icon: MessageCircle, label: 'WhatsApp' },
];

const Contact = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'education' | 'tourism' | 'trade'>('education');

  const contactOptions = [
    { id: 'education' as const, icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { id: 'tourism' as const, icon: Palmtree, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { id: 'trade' as const, icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Reveal variant="fade" delay={0}>
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
              {t('contact.hero.badge')}
            </span>
          </Reveal>
          <Reveal variant="slide-up" delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-950 dark:text-white mb-8 tracking-tight">
              {t('contact.hero.title')}
            </h1>
          </Reveal>
          <Reveal variant="slide-up" delay={200}>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              {t('contact.hero.description')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left: Contact Info & Options */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              <Reveal variant="slide-up" delay={0}>
                <div>
                  <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">
                    {t('contact.options.title')}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400">
                    {t('contact.options.description')}
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
                {contactOptions.map((option, idx) => (
                  <Reveal key={option.id} variant="slide-left" delay={idx * 80}>
                    <button
                      onClick={() => setActiveTab(option.id)}
                      className={cn(
                        "w-full flex items-center gap-6 p-6 rounded-3xl border-2 transition-all text-left group",
                        activeTab === option.id
                          ? "border-blue-600 bg-white dark:bg-slate-900 shadow-xl"
                          : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50"
                      )}
                    >
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", option.bg, option.color)}>
                        <option.icon className="w-7 h-7" />
                      </div>
                      <div className="grow">
                        <h4 className="font-bold text-slate-950 dark:text-white mb-1">
                          {t(`contact.options.${option.id}_title`)}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">
                          {t(`contact.options.${option.id}_desc`)}
                        </p>
                      </div>
                      <ChevronRight className={cn("w-5 h-5 transition-transform", activeTab === option.id ? "text-blue-600 translate-x-1" : "text-slate-300")} />
                    </button>
                  </Reveal>
                ))}
              </div>

              <Reveal variant="slide-up" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                  {/* Address */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      {t('contact.info.visit_us')}
                    </h4>
                    <div className="space-y-1 text-slate-500 dark:text-slate-400 text-sm">
                      <p className="font-bold text-slate-700 dark:text-slate-300">{t('contact.info.india_office')}</p>
                      <p>{COMPANY.address.india}</p>
                    </div>
                    <div className="space-y-1 text-slate-500 dark:text-slate-400 text-sm pt-4">
                      <p className="font-bold text-slate-700 dark:text-slate-300">{t('contact.info.china_office')}</p>
                      <p>{COMPANY.address.china}</p>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-600" />
                        {t('contact.info.call_us')}
                      </h4>
                      <div className="space-y-1 text-slate-500 dark:text-slate-400 text-sm">
                        <p>{COMPANY.phone.india}</p>
                        <p>{COMPANY.phone.china}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        {t('contact.info.email_us')}
                      </h4>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-slate-500 dark:text-slate-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-12 xl:col-span-7">
              <Reveal variant="slide-right" delay={100}>
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-slate-950 dark:text-white mb-2">
                      {t('contact.form.title')}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      {t('contact.form.subtitle')}
                    </p>
                  </div>
                  <ContactForm activeTab={activeTab} />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* Social / Quote Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <Globe2 className="w-[800px] h-[800px] absolute -right-64 -bottom-64 text-blue-500 animate-[spin_60s_linear_infinite]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <Reveal variant="slide-left" delay={0} className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6 italic">
                "A journey of a thousand miles begins with a single conversation."
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Connect with our local experts today and let us simplify your global transition. We're not just consultants; we're your partners in East Asian growth.
              </p>
            </Reveal>

            <Reveal variant="slide-right" delay={100}>
              <div className="flex gap-4 flex-wrap justify-center">
                {socialLinks.map(({ key, href, icon: Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors border border-white/10"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
