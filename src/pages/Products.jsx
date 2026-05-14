// Products page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Award, Shield, Recycle, Zap, Leaf, ArrowRight, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const comparisonData = t('products.comparison_rows', { returnObjects: true });

  // 6 tech features for the icon grid
  const techFeatures = [
    { icon: DollarSign, title: t('products.panel_features.0.title'), desc: t('products.panel_features.0.desc') },
    { icon: Leaf,       title: t('products.panel_features.3.title'), desc: t('products.panel_features.3.desc') },
    { icon: Zap,        title: 'Fast construction',                  desc: 'From raw panels to completed structure in as little as 72 hours using local labor.' },
    { icon: Shield,     title: t('products.panel_features.2.title'), desc: t('products.panel_features.2.desc') },
    { icon: Award,      title: t('products.panel_features.1.title'), desc: t('products.panel_features.1.desc') },
    { icon: Recycle,    title: 'High standards',                     desc: 'Meets ISO, Eurocodes, and local equivalents. Independently tested and UN-Habitat endorsed.' },
  ];

  // 4 numbered approach items
  const approachItems = t('home.approach_items', { returnObjects: true });

  // Product lines — 2-col image grid
  const productLines = [
    { name: 'The Community',           image: '/images/The community 1a.png' },
    { name: 'The District',            image: '/images/The District 2a.png' },
    { name: 'The Emergency Shelter',   image: '/images/The Emergency Shelter 1.png' },
    { name: 'The Medical Unit',        image: '/images/The Medical Unit 3.png' },
    { name: 'The Worker Accommodation',image: '/images/The Worker Accomodation 5a.png' },
    { name: 'The Medical Unit',        image: '/images/The Medical Unit 2a.png' },
  ];

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.products.title')}
        description={t('seo.products.description')}
        canonical="https://othalo.com/products"
        keywords={t('seo.products.keywords').split(', ')}
      />
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="products" />

      {/* ── HERO: split navy left / factory image right ── */}
      <section className="flex flex-col lg:flex-row min-h-[340px]">
        {/* Left — navy text panel */}
        <div className="w-full lg:w-1/2 bg-navy flex items-center px-8 md:px-14 lg:px-16 py-16 lg:py-20">
          <SlotIn>
            <p className="text-white font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-md mb-8">
              {t('products.subtitle')}
            </p>
            <Button
              onClick={() => setVideoOpen(true)}
              className="flex items-center gap-3 bg-teal hover:bg-teal-light text-white font-semibold px-6 h-11 rounded-sm text-sm"
            >
              <div className="w-7 h-7 rounded-full border-2 border-white/60 flex items-center justify-center flex-shrink-0">
                <Play className="w-3 h-3 fill-white text-white ml-0.5" />
              </div>
              See how it works
            </Button>
          </SlotIn>
        </div>
        {/* Right — factory image */}
        <div className="w-full lg:w-1/2 min-h-[260px] lg:min-h-0">
          <img
            src="/images/Panels in the factory.png"
            alt="Othalo panels in the factory"
            className="w-full h-full object-cover"
            style={{ minHeight: '260px' }}
          />
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-sm"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl rounded-sm overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-navy/60 text-white hover:bg-navy transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src="/Building of Othalo housing 30s.mp4"
                autoPlay
                controls
                playsInline
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TECHNOLOGY: centered title + 6-icon grid ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-3">
                Technology
              </h2>
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
                Our standardised modular solution excels with practicality, combining cost efficient, fast to build, and durable and sustainable construction solutions.
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {techFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <SlotIn key={f.title} delay={i * 0.07}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-sm">{f.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </SlotIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="bg-navy py-0">
        <div className="flex flex-col lg:flex-row">
          {/* Left: Othalo branding image */}
          <div className="w-full lg:w-2/5 min-h-[260px] relative overflow-hidden">
            <img
              src="/images/vincent.jpg"
              alt="Dr. Vincent Kitio"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="relative z-10 p-8 flex flex-col justify-end h-full min-h-[260px]">
              <div className="inline-flex items-center gap-2 mb-2">
                <img src="/images/logo.png" alt="Othalo" className="h-7 w-auto brightness-0 invert" />
              </div>
              <p className="text-white/60 text-xs font-heading uppercase tracking-widest">Mission</p>
            </div>
          </div>
          {/* Right: quote */}
          <div className="w-full lg:w-3/5 bg-navy px-8 md:px-14 lg:px-16 py-14 lg:py-20 flex flex-col justify-center">
            <SlotIn>
              <blockquote className="text-white font-heading text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 max-w-xl">
                "{t('home.quote_text')}"
              </blockquote>
              <div className="mb-8">
                <p className="text-teal font-semibold text-sm font-heading">{t('home.quote_author')}</p>
                <p className="text-white/50 text-xs">{t('home.quote_title')}</p>
              </div>
              <Button
                asChild
                className="bg-teal hover:bg-teal-light text-white font-semibold px-7 h-10 rounded-sm text-sm self-start"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* ── BUILD THE FUTURE: 4 numbered items 2×2 ── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy mb-12 text-center">
              {t('home.approach_title')}
            </h2>
          </SlotIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {Array.isArray(approachItems) && approachItems.map((item, i) => (
              <SlotIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <span className="font-heading font-bold text-teal text-3xl leading-none flex-shrink-0 w-8">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT LINES: 2-col image grid with labels ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {productLines.map((p, i) => (
              <SlotIn key={`${p.name}-${i}`} delay={i * 0.07}>
                <div>
                  <div className="aspect-video overflow-hidden rounded-sm bg-surface">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-navy text-xs font-heading font-semibold mt-2 pl-0.5">{p.name}</p>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-teal py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-10 text-center">
              {t('products.comparison_title')}
            </h2>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-x-auto rounded-sm border border-white/20 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white text-xs font-semibold tracking-wide">
                    {t('products.comparison_headers', { returnObjects: true }).map((header, idx) => (
                      <th key={header} className={`py-4 px-5 font-heading ${idx === 0 ? 'text-left' : 'text-center'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(comparisonData) && comparisonData.map((row, i) => (
                    <tr key={row.p} className={`border-b border-navy/10 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="py-3.5 px-5 text-left font-semibold text-navy/90 font-heading text-xs">{row.p}</td>
                      <td className="py-3.5 px-5 text-center text-base">
                        {row.o === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.o === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                      <td className="py-3.5 px-5 text-center text-base">
                        {row.d === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.d === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                      <td className="py-3.5 px-5 text-center text-base">
                        {row.r === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.r === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                      <td className="py-3.5 px-5 text-center text-base">
                        {row.t === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.t === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex justify-end text-white/90 text-xs gap-4 font-medium font-heading">
              <span className="flex items-center gap-1"><span className="font-bold text-white text-sm">✓</span> {t('products.fulfilled')}</span>
              <span className="flex items-center gap-1"><span className="font-bold text-white text-sm">(✓)</span> {t('products.partially_fulfilled')}</span>
            </div>
          </SlotIn>
        </div>
      </section>

    </div>
  );
}
