import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Building2, TrendingUp, Briefcase, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const solutions = [
    { label: t('nav.gov'),  href: '/solutions/governments',      icon: Building2,  desc: t('nav.gov_desc') },
    { label: t('nav.dev'),  href: '/solutions/housing-developers',icon: TrendingUp, desc: t('nav.dev_desc') },
    { label: t('nav.corp'), href: '/solutions/corporations',      icon: Briefcase,  desc: t('nav.corp_desc') },
  ];

  const navLinks = [
    { label: t('nav.home'),     href: '/' },
    { label: t('nav.about'),    href: '/about' },
    { label: t('nav.solutions'), href: '/solutions', hasMegaMenu: true },
    { label: t('nav.products'), href: '/products' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  const isSolutionsActive = location.pathname.startsWith('/solutions');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg border-b border-navy/5' : 'bg-white/95 backdrop-blur-md border-b border-navy/5'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo.png" alt="Othalo Logo" className="h-8 lg:h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.hasMegaMenu ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  {/* Clickable label navigates to /solutions */}
                  <Link
                    to="/solutions"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                      isSolutionsActive ? 'text-teal border-b-2 border-teal pb-0.5' : 'text-navy/80 hover:text-teal'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[260px] bg-white rounded-sm shadow-2xl border border-tech-slate overflow-hidden"
                      >
                        <div className="p-2">
                          {/* Overview link */}
                          <Link
                            to="/solutions"
                            className="flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-surface transition-colors group border-b border-tech-slate mb-1"
                          >
                            <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                              <LayoutGrid className="w-5 h-5 text-teal" />
                            </div>
                            <div>
                              <div className="text-navy font-semibold text-sm font-heading group-hover:text-teal transition-colors">{t('nav.all_solutions')}</div>
                            </div>
                          </Link>
                          {solutions.map((s) => {
                            const Icon = s.icon;
                            return (
                              <Link
                                key={s.label}
                                to={s.href}
                                className="flex items-center gap-4 px-4 py-3 rounded-sm hover:bg-surface transition-colors group"
                              >
                                <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                                  <Icon className="w-5 h-5 text-teal" />
                                </div>
                                <div>
                                  <div className="text-navy font-semibold text-sm font-heading group-hover:text-teal transition-colors">{s.label}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-teal border-b-2 border-teal pb-0.5'
                      : 'text-navy/80 hover:text-teal'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right: Language + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher variant="light" />
            <Button
              asChild
              className="bg-teal hover:bg-teal-light text-white font-semibold px-4 h-8 rounded-[6px] text-xs tracking-wide"
            >
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher variant="light" />
            <button
              className="text-navy p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-navy/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.hasMegaMenu ? (
                  <div key={link.label}>
                    <div className="flex items-center border-b border-navy/10">
                      <Link to="/solutions" className="flex-1 text-navy/80 text-sm font-medium py-3">
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                        className="text-navy/60 px-2 py-3"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    {solutionsOpen && (
                      <div className="pl-4 py-2 flex flex-col gap-2">
                        {solutions.map((s) => (
                          <Link key={s.label} to={s.href} className="text-navy/70 hover:text-teal text-sm py-1.5">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-navy/80 hover:text-teal text-sm font-medium py-3 border-b border-navy/10"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button asChild className="mt-3 bg-teal hover:bg-teal-light text-white font-semibold rounded-sm">
                <Link to="/contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}