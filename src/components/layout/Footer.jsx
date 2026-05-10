import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';

function CarbonCounter() {
  const BASE = 48_230;
  const [count, setCount] = useState(BASE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3 + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-teal/10 border border-teal/30 rounded-sm px-6 py-4 text-center">
      <div className="text-xs text-white/50 uppercase tracking-widest mb-1 font-heading">
        Plastic Diverted from Oceans
      </div>
      <div className="font-heading font-semibold text-3xl text-white tabular-nums">
        {count.toLocaleString()}
        <span className="text-teal text-xl ml-1">kg</span>
      </div>
      <div className="text-xs text-white/40 mt-1">and counting — updated in real time</div>
    </div>
  );
}

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
      {/* Carbon Counter Banner */}
      <div className="border-t border-white/10 bg-navy/80">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-10">
          <CarbonCounter />
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Link to="/">
                <img src="/images/logo.png" alt="Othalo Logo" className="h-8 lg:h-10 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Turning plastic waste into dignified, sustainable housing for communities worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/5 hover:bg-teal rounded-sm flex items-center justify-center transition-colors"
                  >
                    <SocialIcon className="w-4 h-4 text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>

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
        <div className="max-w-8xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Othalo AS. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}