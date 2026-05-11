import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';


const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
  ],
  Solutions: [
    { label: 'Governments', href: '/solutions/governments' },
    { label: 'Housing Developers', href: '/solutions/housing-developers' },
    { label: 'Corporations', href: '/solutions/corporations' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-3 gap-10">

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div className="text-xs font-semibold text-teal uppercase tracking-widest mb-4 font-heading">
                {section}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Othalo AS. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/30 hover:text-teal transition-colors"
                >
                  <SocialIcon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}