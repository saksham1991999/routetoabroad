import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Globe2,
  GraduationCap,
  Palmtree,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { cn } from '../utils/cn';

const Contact = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('education');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const contactOptions = [
    { id: 'education', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { id: 'tourism', icon: Palmtree, color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { id: 'trade', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
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
          <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            {t('contact.hero.badge')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 dark:text-white mb-8 tracking-tight">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t('contact.hero.description')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info & Options */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">
                  {t('contact.options.title')}
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  {t('contact.options.description')}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
                {contactOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setActiveTab(option.id)}
                    className={cn(
                      "flex items-center gap-6 p-6 rounded-3xl border-2 transition-all text-left group",
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
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    {t('contact.info.visit_us')}
                  </h4>
                  <div className="space-y-2 text-slate-500 dark:text-slate-400 text-sm">
                    <p className="font-bold text-slate-700 dark:text-slate-300">{t('contact.info.india_office')}</p>
                    <p>Level 4, Rectangle 1, Saket District Centre</p>
                    <p>New Delhi, 110017</p>
                  </div>
                  <div className="space-y-2 text-slate-500 dark:text-slate-400 text-sm pt-4">
                    <p className="font-bold text-slate-700 dark:text-slate-300">{t('contact.info.china_office')}</p>
                    <p>Tower B, Victory Plaza, Tainhe District</p>
                    <p>Guangzhou, 510000</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      <Phone className="w-5 h-5 text-blue-600" />
                      {t('contact.info.call_us')}
                    </h4>
                    <div className="space-y-1 text-slate-500 dark:text-slate-400 text-sm">
                      <p>{t('common.phone_numbers.india')}</p>
                      <p>{t('common.phone_numbers.china')}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      <Mail className="w-5 h-5 text-blue-600" />
                      {t('contact.info.email_us')}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      support@routetoabroad.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 rounded-[3rem] shadow-2xl">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-slate-950 dark:text-white mb-2">
                    {t('contact.form.title')}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    {t('contact.form.subtitle')}
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="py-20 text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-950 dark:text-white">{t('contact.form.success')}</h4>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                        {t('common.full_name')}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                        {t('common.email')}
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all shadow-sm"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                        {t('common.phone')}
                      </label>
                      <input 
                        type="tel" 
                        placeholder="+91 XXXX XXX XXX"
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all shadow-sm"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-black uppercase text-slate-400 tracking-wider">
                        {t('common.additional_notes')}
                      </label>
                      <textarea 
                        rows={4}
                        placeholder={t('common.notes_placeholder')}
                        className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white transition-all shadow-sm resize-none"
                      />
                    </div>
                    <div className="md:col-span-2 pt-6">
                      <button 
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                        {formStatus === 'submitting' ? '...' : t('contact.form.submit')}
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section or Social Section */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <Globe2 className="w-[800px] h-[800px] absolute -right-64 -bottom-64 text-blue-500 animate-[spin_60s_linear_infinite]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6 italic">"A journey of a thousand miles begins with a single conversation."</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Connect with our local experts today and let us simplify your global transition. We're not just consultants; we're your partners in East Asian growth.
              </p>
            </div>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 font-bold text-xs"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
