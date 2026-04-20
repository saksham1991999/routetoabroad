import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import { cn } from '../../utils/cn';
import { NAV_LINKS } from '../../constants';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { isOpen: mobileOpen, toggle: toggleMobile, close: closeMobile } = useMobileMenu();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const isRTL = i18n.language === 'ar';

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 min-h-[44px] inline-flex items-center',
      isActive
        ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
        : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800',
    );

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80">
        <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between" aria-label={t('common.accessibility.main_navigation')}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={closeMobile}>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Route<span className="text-red-600">To</span>Abroad
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                {t(link.translationKey)}
              </NavLink>
            ))}
          </div>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language selector */}
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px]"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label={t('nav.select_language')}
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span>{currentLang.code.toUpperCase()}</span>
                <ChevronDown className={cn('w-3 h-3 transition-transform', langOpen && 'rotate-180')} aria-hidden="true" />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  aria-label={t('common.accessibility.available_languages')}
                  className={cn(
                    'absolute top-full mt-1 w-40 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 py-1 z-50',
                    isRTL ? 'left-0' : 'right-0',
                  )}
                >
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={lang.code === i18n.language}
                        onClick={() => changeLanguage(lang.code)}
                        className={cn(
                          'w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors',
                          lang.code === i18n.language
                            ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 font-medium'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800',
                        )}
                      >
                        <span aria-hidden="true">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('common.accessibility.switch_to_light') : t('common.accessibility.switch_to_dark')}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
            </button>

            {/* CTA */}
            <Link
              to="/contact"
              className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors min-h-[44px] inline-flex items-center"
            >
              {t('nav.apply')}
            </Link>
          </div>

          {/* Mobile right controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t('common.accessibility.switch_to_light') : t('common.accessibility.switch_to_dark')}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
            </button>

            {/* Hamburger button */}
            <button
              type="button"
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? t('common.accessibility.close_navigation') : t('common.accessibility.open_navigation')}
              className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label={t('common.accessibility.navigation_menu')}
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-30 md:hidden bg-white dark:bg-slate-950 flex flex-col',
          'transition-transform duration-300 ease-in-out',
          mobileOpen
            ? 'translate-x-0'
            : isRTL ? '-translate-x-full' : 'translate-x-full',
        )}
        style={{ top: '72px' }}
      >
        <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
          {/* Nav links */}
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMobile}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-4 py-3.5 rounded-xl text-base font-medium transition-colors',
                  isActive
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                    : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800',
                )
              }
            >
              {t(link.translationKey)}
            </NavLink>
          ))}

          <div className="border-t border-slate-200 dark:border-slate-700 my-4" />

          {/* Language selector in mobile */}
          <p className="px-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
            {t('common.language')}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => { changeLanguage(lang.code); closeMobile(); }}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  lang.code === i18n.language
                    ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
                    : 'text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700',
                )}
              >
                <span aria-hidden="true">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile CTA at bottom */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <Link
            to="/contact"
            onClick={closeMobile}
            className="w-full flex items-center justify-center px-6 py-4 bg-red-600 hover:bg-red-700 text-white text-base font-semibold rounded-xl transition-colors"
          >
            {t('nav.apply')}
          </Link>
        </div>
      </div>
    </>
  );
}
