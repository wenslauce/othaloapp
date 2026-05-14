import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const socials = [
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Youtube,   href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const links = [
  { label: 'Contact us',       href: '/contact' },
  { label: 'Products',         href: '/products' },
  { label: 'About',            href: '/about' },
  { label: 'Terms of service', href: '/terms' },
  { label: 'Privacy policy',   href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        {/* Left: label then social icons (matches homepage comp) */}
        <div>
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-heading mb-3">
            Join, share, like, follow us on:
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right: nav links */}
        <ul className="flex flex-col items-start sm:items-end gap-1">
          {links.map(({ label, href }) => (
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
    </footer>
  );
}
