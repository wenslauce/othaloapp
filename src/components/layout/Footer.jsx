import Link from '@/components/shared/LocalizedLink';
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const socialIcons = [
  { icon: Twitter,   key: 'Twitter' },
  { icon: Facebook,  key: 'Facebook' },
  { icon: Linkedin,  key: 'LinkedIn' },
  { icon: Youtube,   key: 'YouTube' },
  { icon: Instagram, key: 'Instagram' },
];

export default function Footer() {
  const { t } = useTranslation();
  const footerLinks = t('footer.links', { returnObjects: true });
  const footerSocials = t('footer.socials', { returnObjects: true });

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-heading mb-3">
            {t('footer.social_label')}
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ icon: Icon, key }) => (
              <a
                key={key}
                href="#"
                aria-label={key}
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <ul className="flex flex-col items-start sm:items-end gap-1">
          {Array.isArray(footerLinks) && footerLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                to={href}
                className="text-white/50 hover:text-white text-xs transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-12 pb-8">
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between gap-8 text-xs text-white/40">
          <div>
            <h4 className="text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">{t('footer.company_name')}</h4>
            <div className="flex flex-col gap-1.5">
              <p>{t('footer.registration_no')} <span className="text-white/60">01010884</span></p>
              <p>{t('footer.license_no')} <span className="text-white/60">07010857</span></p>
            </div>
          </div>
          <div className="md:text-right">
            <h4 className="text-white/70 font-medium mb-2 text-sm uppercase tracking-wider">{t('footer.address_heading')}</h4>
            <address className="not-italic flex flex-col gap-1.5">
              <p>{t('footer.address_line1')}</p>
              <p>{t('footer.address_line2')}</p>
              <p>{t('footer.address_line3')}</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}