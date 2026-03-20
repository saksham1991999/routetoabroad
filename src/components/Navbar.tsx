import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'transition-all duration-200 ease-in-out font-medium text-sm tracking-tight px-2 py-1 rounded-md',
      isActive
        ? 'text-education-blue dark:text-blue-400 font-semibold border-b-2 border-education-blue rounded-none'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-900'
    );

  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors duration-300">
      <div className="flex items-center justify-between px-8 w-full max-w-[1440px] mx-auto h-full">
        <Link to="/" onClick={scrollToTop} className="text-xl flex items-center gap-0.5 tracking-tighter cursor-pointer font-headline font-bold text-slate-950 dark:text-slate-50">
          RouteToAbroad
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/education" className={navLinkClasses}>{t('nav.education')}</NavLink>
          <NavLink to="/tourism" className={navLinkClasses}>{t('nav.tourism')}</NavLink>
          <NavLink to="/trade" className={navLinkClasses}>{t('nav.trade')}</NavLink>
          <NavLink to="/about" className={navLinkClasses}>{t('nav.about')}</NavLink>
          <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-100 transition-all duration-200 ease-in-out text-sm font-medium">{t('nav.contact')}</Link>
        </div>
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative group">
            <button 
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              aria-label={t('nav.select_language')}
            >
              <span className="material-symbols-outlined text-lg">language</span>
              <span className="text-xs font-bold uppercase">{i18n.language}</span>
            </button>
            <div className="absolute top-full ltr:right-0 rtl:left-0 mt-2 w-32 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-[60]">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={cn(
                    "w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2",
                    i18n.language === lang.code ? "text-education-blue bg-blue-50 dark:bg-blue-900/20" : "text-slate-600 dark:text-slate-400"
                  )}
                >
                  <span className="text-base">{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
            title={t('nav.toggle_theme')}
          >
            <span className="material-symbols-outlined">
              {theme === 'light' ? 'dark_mode' : 'light_mode'}
            </span>
          </button>

          <Link to="/contact" className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all hidden sm:flex">
            {t('nav.apply')}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
