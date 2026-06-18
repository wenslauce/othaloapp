// Home page
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Recycle, Clock, Shield, Leaf, DollarSign, Award, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import ImageSlider from '@/components/shared/ImageSlider';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const [impactModal, setImpactModal] = useState(null); // 'plastic' | 'housing' | null
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const techFeatures = [
    { icon: Recycle, title: t('home.tech_features.0.title'), desc: t('home.tech_features.0.desc') },
    { icon: Leaf, title: t('home.tech_features.1.title'), desc: t('home.tech_features.1.desc') },
    { icon: Clock, title: t('home.tech_features.2.title'), desc: t('home.tech_features.2.desc') },
    { icon: Shield, title: t('home.tech_features.3.title'), desc: t('home.tech_features.3.desc') },
  ];

  const buildFuture = t('home.approach_items', { returnObjects: true });
  const comparisonRows = t('home.comparison.rows', { returnObjects: true });
  const dualImpactItems = t('products.dual_items', { returnObjects: true });
  const panelFeatures = t('products.panel_features', { returnObjects: true });
  const featureIcons = [DollarSign, Clock, Award, Shield, Recycle];
  const plasticStats = t('home.plastic_modal_stats', { returnObjects: true });
  const housingSection1Stats = t('home.housing_modal_section1_stats', { returnObjects: true });
  const housingSection2Stats = t('home.housing_modal_section2_stats', { returnObjects: true });
  const housingSection3Stats = t('home.housing_modal_section3_stats', { returnObjects: true });
  const housingSection3Regions = t('home.housing_modal_section3_regions', { returnObjects: true });
  const housingSection4Headers = t('home.housing_modal_section4_headers', { returnObjects: true });
  const housingSection4Rows = t('home.housing_modal_section4_rows', { returnObjects: true });

  const galleryCategories = [
    {
      label: t('home.gallery_categories.community'),
      images: ['/images/The community 1a.png', '/images/The community 2a.png', '/images/The community 2c.png'],
    },
    {
      label: t('home.gallery_categories.district'),
      images: ['/images/The District 2a.png', '/images/The District 2b.png'],
    },
    {
      label: t('home.gallery_categories.emergency'),
      images: ['/images/The Emergency Shelter 1.png', '/images/The Emergency Shelter 1a.png', '/images/The Emergency Shelter 1b.png'],
    },
    {
      label: t('home.gallery_categories.medical'),
      images: ['/images/The Medical Unit 3.png', '/images/The Medical Unit 3a.png', '/images/The Medical Unit 3b.png'],
    },
    {
      label: t('home.gallery_categories.worker'),
      images: ['/images/The Worker Accomodation 5a.png', '/images/The Worker Accomodation 5b.png', '/images/The Worker Accomodation 6a.png'],
    },
    {
      label: t('home.gallery_categories.factory'),
      images: ['/images/Panels in the factory.png', '/images/Panel 3D.jpg'],
    },
  ];

  const esgGoals = [
    { id: '1', image: '/images/SDG1.png', label: t('home.sdg_names.1') },
    { id: '6', image: '/images/SDG6.png', label: t('home.sdg_names.6') },
    { id: '8', image: '/images/SDG8.png', label: t('home.sdg_names.8') },
    { id: '9', image: '/images/SDG9.png', label: t('home.sdg_names.9') },
    { id: '10', image: '/images/SDG10.png', label: t('home.sdg_names.10') },
    { id: '11', image: '/images/SDG11.png', label: t('home.sdg_names.11') },
    { id: '12', image: '/images/SDG12.png', label: t('home.sdg_names.12') },
    { id: '13', image: '/images/SDG13.png', label: t('home.sdg_names.13') },
    { id: '17', image: '/images/SDG17.png', label: t('home.sdg_names.17') },
  ];

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        canonical="https://othalo.com/"
        keywords={t('seo.home.keywords').split(', ')}
      />
      {/* Hero */}
      <section ref={heroRef} className="relative h-[min(65vh,680px)] min-h-[480px] sm:min-h-[520px] flex items-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-[48px] lg:text-[60px] font-bold text-white max-w-3xl leading-tight mb-5">
              {t('home.hero_title')}
            </h1>
            <p className="text-white/70 text-base lg:text-lg max-w-xl leading-relaxed mb-8">
              {t('home.hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-teal hover:bg-teal-light text-white font-semibold px-5 h-8 rounded-[6px] text-xs uppercase tracking-wide"
              >
                <Link to="/products">
                  {t('home.hero_cta1')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Market Leading Technology */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            <SlotIn>
              <div className="bg-white p-8 lg:p-12 rounded-sm border border-tech-slate shadow-sm relative">
                <img
                  src="/images/Panel-3D-v2.jpg"
                  alt="Othalo 3D Panel Exploded View"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute top-5 left-5 bg-navy/80 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                  {t('products.panel_label')}
                </div>
              </div>
            </SlotIn>

            <div className="flex flex-col">
              <SlotIn>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 leading-tight">
                  {t('products.comparison_title')}
                </h2>
                <div className="space-y-7">
                  {Array.isArray(panelFeatures) && panelFeatures.map((f, i) => {
                    const Icon = featureIcons[i] || Recycle;
                    return (
                      <SlotIn key={f.title} delay={i * 0.1}>
                        <div className="flex gap-4 group">
                          <div className="w-11 h-11 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal transition-all duration-300 mt-0.5">
                            <Icon className="w-5 h-5 text-teal group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-navy text-base mb-1 leading-tight">{f.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                          </div>
                        </div>
                      </SlotIn>
                    );
                  })}
                </div>
              </SlotIn>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Split Section */}
      <section className="flex flex-col lg:flex-row w-full bg-teal text-white">
        <div className="w-full lg:w-1/2 p-10 lg:p-14 xl:p-16 flex flex-col justify-center">
          <SlotIn>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-10 leading-tight">
              {t('home.solutions_section_title')}
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold">{t('home.solutions_gov_name')}</h3>
                <Button asChild variant="outline" className="bg-[#E7E9EC] hover:bg-white text-teal border-0 font-semibold px-4 h-8 rounded-[6px] self-start sm:self-auto uppercase text-xs tracking-wide">
                  <Link to="/solutions/governments">{t('home.solutions_learn_more')}</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold">{t('home.solutions_dev_name')}</h3>
                <Button asChild variant="outline" className="bg-[#E7E9EC] hover:bg-white text-teal border-0 font-semibold px-4 h-8 rounded-[6px] self-start sm:self-auto uppercase text-xs tracking-wide">
                  <Link to="/solutions/housing-developers">{t('home.solutions_learn_more')}</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="font-heading text-lg font-semibold">{t('home.solutions_corp_name')}</h3>
                <Button asChild variant="outline" className="bg-[#E7E9EC] hover:bg-white text-teal border-0 font-semibold px-4 h-8 rounded-[6px] self-start sm:self-auto uppercase text-xs tracking-wide">
                  <Link to="/solutions/corporations">{t('home.solutions_learn_more')}</Link>
                </Button>
              </div>
            </div>
          </SlotIn>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[min(52vh,560px)] flex items-stretch">
          <ImageSlider 
            images={[
              '/images/The community 1a.png',
              '/images/The community 2c.png',
              '/images/The District 2a.png',
              '/images/The Worker Accomodation 6a.png'
            ]} 
            name="Solutions Gallery" 
            interval={4000}
            autoPlay={true}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </section>

      {/* Dual Impact CTA */}
      <section className="flex flex-col lg:flex-row w-full">
        <div className="relative w-full lg:w-1/2 min-h-[260px] sm:min-h-[320px] lg:min-h-[min(55vh,580px)] overflow-hidden">
          <SlotIn className="absolute inset-0 size-full">
            <img
              src="/images/House in Dumpsite crop.png"
              alt="Plastic waste crisis"
              className="size-full object-cover"
            />
          </SlotIn>
        </div>
        <div className="w-full lg:w-1/2 bg-[#E7E9EC] flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-16 lg:py-14">
          <SlotIn delay={0.12}>
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-8 leading-tight">
                {t('home.dual_impact_title')}
              </h2>
              <div className="space-y-7">
                {Array.isArray(dualImpactItems) && dualImpactItems.map((item, idx) => (
                  <div key={item.title}>
                    <h3 className="font-heading font-semibold text-navy text-base mb-1 leading-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{item.desc}</p>
                    <Button
                      size="sm"
                      className="bg-teal hover:bg-teal-light text-white font-semibold px-4 h-8 rounded-[6px] text-xs uppercase tracking-wide"
                      onClick={() => setImpactModal(idx === 0 ? 'plastic' : 'housing')}
                    >
                      {t('solutions.learn_more')}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </SlotIn>
        </div>
      </section>

      {/* Plastic Waste Modal */}
      <AnimatePresence>
        {impactModal === 'plastic' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
            onClick={() => setImpactModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-sm shadow-2xl max-w-lg w-full p-5 sm:p-8 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setImpactModal(null)}
                className="absolute top-4 right-4 text-navy/40 hover:text-navy transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center mb-5">
                <Recycle className="w-5 h-5 text-teal" />
              </div>
              <h2 className="font-heading font-bold text-navy text-xl mb-1">{t('home.plastic_modal_title')}</h2>
              <p className="text-muted-foreground text-sm mb-6">{t('home.plastic_modal_subtitle')}</p>
              <ul className="space-y-3">
                {Array.isArray(plasticStats) && plasticStats.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="font-heading font-bold text-teal text-sm flex-shrink-0 min-w-[110px]">{item.stat}</span>
                    <span className="text-navy/80 text-sm leading-relaxed">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Affordable Homes Modal */}
      <AnimatePresence>
        {impactModal === 'housing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
            onClick={() => setImpactModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-sm shadow-2xl max-w-2xl w-full p-5 sm:p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setImpactModal(null)}
                className="sticky top-0 float-right ml-4 mb-2 w-8 h-8 flex items-center justify-center rounded-full bg-navy/10 hover:bg-navy/20 text-navy transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-teal" />
              </div>
              <h2 className="font-heading font-bold text-navy text-xl mb-1">{t('home.housing_modal_title')}</h2>
              <p className="text-muted-foreground text-sm mb-6">{t('home.housing_modal_subtitle')}</p>

              {/* Section 1 — Homelessness */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-2">{t('home.housing_modal_section1_title')}</h3>
                <ul className="space-y-2">
                  {Array.isArray(housingSection1Stats) && housingSection1Stats.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="font-heading font-bold text-teal text-sm flex-shrink-0 min-w-[60px]">{item.stat}</span>
                      <span className="text-navy/80 text-sm leading-relaxed">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2 — Inadequate Housing */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-2">{t('home.housing_modal_section2_title')}</h3>
                <ul className="space-y-2">
                  {Array.isArray(housingSection2Stats) && housingSection2Stats.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="font-heading font-bold text-teal text-sm flex-shrink-0 min-w-[80px]">{item.stat}</span>
                      <span className="text-navy/80 text-sm leading-relaxed">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 — Slums */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-2">{t('home.housing_modal_section3_title')}</h3>
                <ul className="space-y-2">
                  {Array.isArray(housingSection3Stats) && housingSection3Stats.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="font-heading font-bold text-teal text-sm flex-shrink-0 min-w-[80px]">{item.stat}</span>
                      <span className="text-navy/80 text-sm leading-relaxed">{item.detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pl-2 space-y-1 text-sm text-navy/70">
                  <p className="font-semibold text-navy">{t('home.housing_modal_section3_regions_title')}</p>
                  {Array.isArray(housingSection3Regions) && housingSection3Regions.map((r, i) => (
                    <p key={i}><span className="font-semibold text-navy">{r.region}:</span> {r.value}</p>
                  ))}
                </div>
              </div>

              {/* Section 4 — 2050 Table */}
              <div className="mb-5">
                <h3 className="font-heading font-semibold text-navy text-sm uppercase tracking-wide mb-3">{t('home.housing_modal_section4_title')}</h3>
                <div className="overflow-x-auto rounded-sm border border-navy/10">
                  <table className="w-full text-xs min-w-[400px]">
                    <thead>
                      <tr className="bg-navy text-white">
                        {Array.isArray(housingSection4Headers) && housingSection4Headers.map((h, i) => (
                          <th key={i} className={`py-2 px-3 text-left font-heading font-semibold ${i > 0 ? 'border-l border-white/10' : ''}`}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(housingSection4Rows) && housingSection4Rows.map((row, i) => (
                        <tr key={i} className={`border-t border-navy/10 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                          <td className="py-2 px-3 font-semibold text-navy">{row.cat}</td>
                          <td className="py-2 px-3 text-navy/70 border-l border-navy/10">{row.now}</td>
                          <td className="py-2 px-3 text-navy/70 border-l border-navy/10">{row.future}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-navy/60 text-xs leading-relaxed italic border-t border-navy/10 pt-4">
                {t('home.housing_modal_closing')}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ESG Goals */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-8 lg:mb-10">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-2 leading-tight">
                {t('home.esg_title')}
              </h2>
            </div>
          </SlotIn>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6">
            {esgGoals.map((goal, i) => (
              <SlotIn key={goal.id} delay={i * 0.05}>
                <img
                  src={goal.image}
                  alt={goal.label}
                  title={goal.label}
                  loading="lazy"
                  decoding="async"
                  className="size-16 sm:size-[4.5rem] md:size-24 object-contain hover:scale-105 transition-transform drop-shadow-sm"
                />
              </SlotIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}