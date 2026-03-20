import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Linkedin, Instagram, Twitter, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY, SOCIAL_LINKS, NAV_LINKS } from '../../constants';

const SOCIAL = [
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter / X' },
  { icon: Youtube, href: SOCIAL_LINKS.youtube, label: 'YouTube' },
  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white tracking-tight">
                Route<span className="text-red-500">To</span>Abroad
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 flex-wrap">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.categories.services')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/education', key: 'nav.education' },
                { to: '/tourism', key: 'nav.tourism' },
                { to: '/trade', key: 'nav.trade' },
              ].map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('footer.categories.company')}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.filter(l => ['/about', '/contact', '/blog'].includes(l.path)).map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {t(link.translationKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t('nav.contact')}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone.india.replace(/\s/g, '')}`} className="flex items-start gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{COMPANY.phone.india}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{COMPANY.address.india}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY.name}. {t('footer.copyright').replace(/^©\s*\d{4}\s*RouteToAbroad\.\s*/i, '')}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              {t('footer.links.privacy')}
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
              {t('footer.links.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
