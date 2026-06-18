// Products page
import { useState } from 'react';
import { DollarSign, Award, Shield, Recycle, Zap, Leaf, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import SlotIn from '@/components/shared/SlotIn';
import ImageSlider from '@/components/shared/ImageSlider';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const techFeatures = t('products.tech_features_alt', { returnObjects: true });
  const techFeatureIcons = [DollarSign, Leaf, Zap, Shield, Award, Recycle];
  const approachItems = t('home.approach_items', { returnObjects: true });
  const productLinesNames = t('products.product_lines_names', { returnObjects: true });

  const productLines = [
    {
      name: Array.isArray(productLinesNames) ? productLinesNames[0] : 'The Community',
      images: ['/images/The District 2a.png', '/images/The community 1a.png'],
    },
    {
      name: Array.isArray(productLinesNames) ? productLinesNames[1] : 'The Emergency Shelter',
      images: ['/images/The Emergency Shelter 1.png', '/images/The Emergency Shelter 2c.png'],
    },
    {
      name: Array.isArray(productLinesNames) ? productLinesNames[2] : 'The Medical Unit and Cold Storage',
      images: ['/images/The Medical Unit 3b.png', '/images/The Medical Unit 2a.png'],
    },
    {
      name: Array.isArray(productLinesNames) ? productLinesNames[3] : 'The Worker Accomodation',
      images: ['/images/The Worker Accomodation 6b.png', '/images/The Worker Accomodation 5a.png'],
    },
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

      {/* ── HERO ── */}
      <section className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="w-full lg:w-1/2 bg-navy flex items-center px-8 md:px-12 lg:px-14 py-12 lg:py-16 min-h-[min(44vh,420px)] lg:min-h-[min(52vh,520px)]">
          <SlotIn>
            <p className="text-white font-heading text-lg md:text-xl lg:text-2xl font-semibold leading-snug max-w-xl lg:max-w-none mb-7">
              {t('products.subtitle')}
            </p>
            <Button
              onClick={() => setVideoOpen(true)}
              className="flex items-center gap-3 bg-teal hover:bg-teal-light text-white font-semibold px-5 h-8 rounded-[6px] text-xs shadow-sm border-0 uppercase tracking-wide"
            >
              <div className="w-5 h-5 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
                <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
              </div>
              {t('products.see_how_it_works')}
            </Button>
          </SlotIn>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[220px] sm:min-h-[300px] lg:min-h-[min(52vh,520px)]">
          <img
            src="/images/Panels in the factory.png"
            alt="Othalo panels in the factory"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 max-w-[200px] md:max-w-[260px] lg:max-w-[300px]">
            <img
              src="/images/UN_HABITAT_ENDORSED.png"
              alt="Endorsed by UN-Habitat"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
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

      {/* ── PRODUCT LINES ── */}
      <section className="bg-surface py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {productLines.map((line, i) => (
              <SlotIn key={line.name} delay={i * 0.07}>
                <div>
                  <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-sm bg-white min-h-[160px] sm:min-h-[180px]">
                    <ImageSlider
                      images={line.images}
                      name={line.name}
                      interval={4500}
                      autoPlay
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-navy text-xs sm:text-sm font-heading font-semibold mt-2.5 pl-0.5 leading-snug">
                    {line.name}
                  </p>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-10 lg:mb-14">
              <h2 className="font-heading font-bold text-navy text-2xl lg:text-3xl mb-3 leading-tight">
                {t('products.technology_heading')}
              </h2>
              <p className="text-navy/70 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
                {t('products.technology_desc')}
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {Array.isArray(techFeatures) && techFeatures.map((f, i) => {
              const Icon = techFeatureIcons[i] || Recycle;
              return (
                <SlotIn key={f.title} delay={i * 0.07}>
                  <div className="flex flex-col items-center text-center gap-3 max-w-xs mx-auto">
                    <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-base leading-tight">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </SlotIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BUILD THE FUTURE ── */}
      <section className="bg-teal py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-10 lg:mb-12 text-center">
              {t('home.approach_title')}
            </h2>
          </SlotIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {Array.isArray(approachItems) && approachItems.map((item, i) => (
              <SlotIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <span className="font-heading font-bold text-white/60 text-xl leading-none flex-shrink-0 w-7">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON IMAGE ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <SlotIn>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8 lg:mb-10 text-center">
              {t('products.comparison_title')}
            </h2>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-hidden rounded-sm border-2 border-navy/20 shadow-md">
              <img
                src="/images/Comparison different solutions vs Othalo.png"
                alt="Comparison of different housing solutions vs Othalo"
                className="w-full h-auto block"
              />
            </div>
          </SlotIn>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="bg-[#E7E9EC] py-0">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="w-full lg:w-1/2 relative min-h-[min(44vh,360px)] lg:min-h-[min(52vh,520px)] overflow-hidden">
            <img
              src="/images/vincent.jpg"
              alt="Dr. Vincent Kitio"
              className="absolute inset-0 size-full object-cover object-top lg:object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-end min-h-[min(44vh,360px)] lg:min-h-full">
              <div className="inline-flex items-center gap-2 mb-2">
                <img src="/images/logo.png" alt="Othalo" className="h-7 w-auto brightness-0 invert" />
              </div>
              <p className="text-white/60 text-xs font-heading uppercase tracking-widest">{t('about.label')}</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#E7E9EC] px-8 md:px-12 lg:px-14 xl:px-16 py-12 lg:py-16 flex flex-col justify-center">
            <SlotIn>
              <blockquote className="text-navy font-heading text-lg md:text-xl lg:text-2xl font-bold leading-relaxed mb-6 max-w-xl">
                &ldquo;{t('home.quote_text')}&rdquo;
              </blockquote>
              <div className="mb-8">
                <p className="text-teal font-semibold text-sm font-heading">{t('home.quote_author')}</p>
                <p className="text-navy/50 text-xs">{t('home.quote_title')}</p>
              </div>
              <Button
                asChild
                className="bg-navy hover:bg-navy/90 text-white font-semibold px-4 h-8 rounded-[6px] self-start uppercase tracking-wide text-xs"
              >
                <a
                  href="https://unhabitat.org/news/06-oct-2020/un-habitat-aims-to-use-plastic-waste-to-support-housing-for-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('products.cta_learn_more')}
                </a>
              </Button>
            </SlotIn>
          </div>
        </div>
      </section>
    </div>
  );
}