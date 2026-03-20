import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <main className="pt-[72px] transition-colors duration-300">
        {/* Hero Section */}
        <section className="py-24 px-8 bg-surface dark:bg-slate-950">
          <div className="max-w-[720px] mx-auto text-left md:text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-6 block">
              {t('about.hero.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.1] mb-8">
              {t('about.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-[640px] mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 px-8 bg-surface-container-lowest dark:bg-slate-900/30">
          <div className="max-w-[720px] mx-auto">
            <div className="prose prose-slate prose-lg lg:prose-xl text-slate-600 dark:text-slate-400 font-body leading-relaxed max-w-none">
              <p className="mb-8">
                {t('about.story.p1')}
              </p>
              <blockquote className="border-l-4 border-blue-600 dark:border-blue-500 pl-8 my-12 italic text-slate-900 dark:text-slate-200 font-medium bg-surface-container-low dark:bg-slate-800 p-8 rounded-r-2xl border-y border-r border-outline-variant/5">
                "{t('about.story.quote1')}"
                <footer className="mt-4 not-italic font-mono text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {t('about.story.ceo')}
                </footer>
              </blockquote>
              <p className="mb-8">
                {t('about.story.p2')}
              </p>
              <blockquote className="border-l-4 border-blue-600 dark:border-blue-500 pl-8 my-12 italic text-slate-900 dark:text-slate-200 font-medium bg-surface-container-low dark:bg-slate-800 p-8 rounded-r-2xl border-y border-r border-outline-variant/5">
                "{t('about.story.quote2')}"
                <footer className="mt-4 not-italic font-mono text-sm text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  {t('about.story.director')}
                </footer>
              </blockquote>
              <p>
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-8 bg-surface-container-low dark:bg-slate-900/50">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'handshake', title: t('about.values.v1_title'), desc: t('about.values.v1_desc'), color: 'blue' },
                { icon: 'swap_horiz', title: t('about.values.v2_title'), desc: t('about.values.v2_desc'), color: 'emerald' },
                { icon: 'shield', title: t('about.values.v3_title'), desc: t('about.values.v3_desc'), color: 'violet' }
              ].map((value) => (
                <div key={value.title} className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group border border-outline-variant/10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                    <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-4 leading-tight">{value.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 px-8 bg-surface dark:bg-slate-950">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-20">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold mb-4 block">
                {t('about.leadership.badge')}
              </span>
              <h2 className="text-4xl font-headline font-extrabold tracking-tight text-slate-950 dark:text-white">
                {t('about.leadership.title')}
              </h2>
            </div>
            
            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
              {[
                { name: 'Mr. Minhaj Al Shukoor', role: t('about.leadership.ceo_role'), img: '/assets/images/ceo_minhaj.jpg', bio: t('about.leadership.ceo_bio') },
                { name: 'Mr. Vijeesh Vijayan', role: t('about.leadership.dir_role'), img: '/assets/images/director_vijeesh.jpg', bio: t('about.leadership.dir_bio') }
              ].map((leader) => (
                <div key={leader.name} className="group">
                  <div className="aspect-[4/5] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden mb-8 relative border border-outline-variant/10 shadow-2xl">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={leader.img} alt={leader.name}/>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{leader.bio}</p>
                    </div>
                  </div>
                  <h3 className="text-3xl font-headline font-extrabold text-slate-950 dark:text-white mb-2">{leader.name}</h3>
                  <p className="font-mono text-sm text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6 font-bold">{leader.role}</p>
                  <a className="inline-flex items-center gap-3 text-slate-950 dark:text-white font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-all group/link" href="#">
                    <span className="font-mono text-xs tracking-widest uppercase">{t('about.leadership.linkedin')}</span>
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">open_in_new</span>
                  </a>
                </div>
              ))}
            </div>

            {/* Support Team Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: t('about.leadership.member1_name'), role: t('about.leadership.member1_role'), img: '/assets/images/team_sarah.jpg' },
                { name: t('about.leadership.member2_name'), role: t('about.leadership.member2_role'), img: '/assets/images/team_david.jpg' },
                { name: t('about.leadership.member3_name'), role: t('about.leadership.member3_role'), img: '/assets/images/team_amara.jpg' },
                { name: t('about.leadership.member4_name'), role: t('about.leadership.member4_role'), img: '/assets/images/team_lucas.jpg' }
              ].map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden mb-6 border border-outline-variant/5 group-hover:shadow-lg transition-all duration-500 overflow-hidden">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" src={member.img} alt={member.name}/>
                  </div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-lg mb-1">{member.name}</h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 px-8 bg-surface-container-low dark:bg-slate-900/50">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-slate-950 dark:text-white mb-8 tracking-tighter">
              {t('about.contact_cta.title')}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-[540px] mx-auto">
              {t('about.contact_cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-[0.98]">
                {t('about.contact_cta.contact_us')}
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-white dark:bg-slate-800 border border-outline-variant/30 dark:border-slate-700 text-slate-950 dark:text-white rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">chat</span>
                {t('about.contact_cta.whatsapp')}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
