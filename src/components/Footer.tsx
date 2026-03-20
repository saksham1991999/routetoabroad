import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-16 px-8 mt-auto bg-slate-950 dark:bg-black border-t border-slate-800 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto font-['Inter'] text-sm leading-relaxed">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-bold text-white mb-6 block">RouteToAbroad</span>
          <p className="text-slate-400 mb-8">{t('footer.description')}</p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-white transition-colors" href="#" aria-label="Global"><span className="material-symbols-outlined">public</span></a>
            <a className="text-slate-400 hover:text-white transition-colors" href="mailto:support@routetoabroad.com" aria-label="Email"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1">{t('footer.categories.services')}</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors" to="/education">{t('nav.education')}</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" to="/tourism">{t('nav.tourism')}</Link></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" to="/trade">{t('nav.trade')}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1">{t('footer.categories.company')}</h4>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors" to="/about">{t('nav.about')}</Link></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">{t('footer.links.blog')}</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">{t('footer.links.careers')}</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 px-1">{t('nav.contact')}</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">{t('common.whatsapp')}</a></li>
            <li><Link className="text-slate-400 hover:text-white transition-colors" to="/contact">{t('nav.contact')}</Link></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">{t('footer.links.privacy')}</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors" href="#">{t('footer.links.terms')}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 mt-16 pt-8 border-t border-slate-900">
        <p className="text-slate-500 text-xs">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
