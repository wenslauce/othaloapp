// Home page
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Recycle, Clock, Shield, Leaf, ChevronRight, DollarSign, Award, X } from 'lucide-react';
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
    { num: '1', color: '#E5243B', label: t('home.sdg_names.1') },
    { num: '6', color: '#26BDE2', label: t('home.sdg_names.6') },
    { num: '8', color: '#A21942', label: t('home.sdg_names.8') },
    { num: '9', color: '#FD6925', label: t('home.sdg_names.9') },
    { num: '10', color: '#DD1367', label: t('home.sdg_names.10') },
    { num: '11', color: '#FD9D24', label: t('home.sdg_names.11') },
    { num: '12', color: '#BF8B2E', label: t('home.sdg_names.12') },
    { num: '13', color: '#3F7E44', label: t('home.sdg_names.13') },
    { num: '17', color: '#19486A', label: t('home.sdg_names.17') },
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
      <section ref={heroRef} className="relative h-[min(72vh,720px)] min-h-[560px] flex items-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          {/* Video Background */}
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
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-6">
              {t('home.hero_title')}
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              {t('home.hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                <Link to="/products">
                  {t('home.hero_cta1')}
                  <ArrowRight className="ml-2 w-5 h-5" />
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
            {/* Left: 3D Panel Image with UN-Habitat Overlay */}
            <SlotIn>
              <div className="relative bg-white p-8 lg:p-12 rounded-sm border border-tech-slate shadow-sm">
                <img
                  src="/images/Panel 3D.jpg"
                  alt="Othalo 3D Panel Exploded View"
                  className="w-full h-auto object-contain"
                />
                {/* UN-Habitat Badge Overlay */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 max-w-[140px] md:max-w-[180px]">
                  <img 
                    src="/images/UN Habitat endorsed logo 5.png" 
                    alt="Endorsed by UN-Habitat" 
                    className="w-full h-auto drop-shadow-md"
                  />
                </div>
              </div>
            </SlotIn>

            {/* Right: Market Leading Features */}
            <div className="flex flex-col">
              <SlotIn>
                <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-8">
                  {t('products.comparison_title')}
                </h2>
                
                <div className="space-y-8">
                  {[
                    { icon: DollarSign, title: t('products.panel_features.0.title'), desc: t('products.panel_features.0.desc') },
                    { icon: Award, title: t('products.panel_features.1.title'), desc: t('products.panel_features.1.desc') },
                    { icon: Shield, title: t('products.panel_features.2.title'), desc: t('products.panel_features.2.desc') },
                    { icon: Recycle, title: t('products.panel_features.3.title'), desc: t('products.panel_features.3.desc') },
                  ].map((f, i) => {
                    const Icon = f.icon;
                    return (
                      <SlotIn key={f.title} delay={i * 0.1}>
                        <div className="flex gap-5 group">
                          <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                            <Icon className="w-6 h-6 text-teal group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-navy text-lg mb-1">{f.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{f.desc}</p>
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
        <div className="w-full lg:w-1/2 p-10 lg:p-16 xl:p-20 flex flex-col justify-center">
          <SlotIn>
            <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-semibold mb-16">
              Your solution starts here
            </h2>
            
            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold">Governments</h3>
                <Button asChild variant="outline" className="bg-[#e9ecef] text-navy hover:bg-white hover:text-navy border-0 font-bold px-8 py-6 rounded-sm self-start sm:self-auto uppercase tracking-widest text-xs">
                  <Link to="/solutions/governments">LEARN MORE</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold">Housing Developers</h3>
                <Button asChild variant="outline" className="bg-[#e9ecef] text-navy hover:bg-white hover:text-navy border-0 font-bold px-8 py-6 rounded-sm self-start sm:self-auto uppercase tracking-widest text-xs">
                  <Link to="/solutions/housing-developers">LEARN MORE</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold">Corporations</h3>
                <Button asChild variant="outline" className="bg-[#e9ecef] text-navy hover:bg-white hover:text-navy border-0 font-bold px-8 py-6 rounded-sm self-start sm:self-auto uppercase tracking-widest text-xs">
                  <Link to="/solutions/corporations">LEARN MORE</Link>
                </Button>
              </div>
            </div>
          </SlotIn>
        </div>

        {/* Right side: Rotating Images */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[min(58vh,620px)] flex items-stretch">
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

      {/* Dual Impact CTA — full-bleed split (image | copy) */}
      <section className="flex flex-col lg:flex-row w-full">
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[min(60vh,640px)] overflow-hidden">
          <SlotIn className="absolute inset-0 size-full">
            <img
              src="/images/House in Dumpsite crop.png"
              alt="Plastic waste crisis"
              className="size-full object-cover"
            />
          </SlotIn>
        </div>
        <div className="w-full lg:w-1/2 bg-surface flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16 xl:px-20 lg:py-16">
          <SlotIn delay={0.12}>
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-8">
                {t('products.dual_title')}
              </h2>
              <div className="space-y-6">
                {Array.isArray(dualImpactItems) && dualImpactItems.map((item, idx) => (
                  <div key={item.title} className="border-l-2 border-teal pl-5">
                    <h3 className="font-heading font-semibold text-navy text-base mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
                    <Button
                      size="sm"
                      className="bg-teal hover:bg-teal-light text-white font-semibold px-4 h-9 rounded-sm text-xs"
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
              className="bg-white rounded-sm shadow-2xl max-w-lg w-full p-8 relative"
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
              <h2 className="font-heading font-bold text-navy text-xl mb-1">Plastic Waste</h2>
              <p className="text-muted-foreground text-sm mb-6">The scale of the global plastic crisis</p>
              <ul className="space-y-3">
                {[
                  { stat: '10 billion tons', detail: 'of plastic have ever been produced (OECD 2022, Global Plastics Outlook)' },
                  { stat: '400 million tons', detail: 'are produced each year' },
                  { stat: '40%', detail: 'of all plastic is single-use — used once, then discarded' },
                  { stat: '~9%', detail: 'of plastic waste is actually recycled globally' },
                  { stat: '80%', detail: 'of plastic waste ends up in landfills — up to 93% in very low-income economies' },
                  { stat: '11 million tonnes', detail: 'of plastic enter the ocean every year' },
                  { stat: '2022', detail: 'Scientists detected microplastics in human blood for the first time' },
                ].map((item, i) => (
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
              className="bg-white rounded-sm shadow-2xl max-w-lg w-full p-8 relative"
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
                <Shield className="w-5 h-5 text-teal" />
              </div>
              <h2 className="font-heading font-bold text-navy text-xl mb-1">Affordable Homes</h2>
              <p className="text-muted-foreground text-sm mb-6">The scale of the global housing crisis</p>
              <ul className="space-y-3">
                {[
                  { stat: '1.1+ billion', detail: 'people live in slums or informal settlements, concentrated primarily in Africa and Asia (≈90%) — UN Habitat Annual Report, 2025' },
                  { stat: '80%', detail: 'of cities already lack affordable housing for most residents' },
                  { stat: '70%', detail: 'of the global population will live in cities by 2050, further driving demand beyond current supply capacity — UN Statistics Division, 2022' },
                  { stat: 'Finance gap', detail: 'Limited access to formal housing finance; insufficient public-sector budgets to close the gap' },
                ].map((item, i) => (
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

      {/* ESG Goals */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-4">
                {t('home.esg_title')}
              </h2>

            </div>
          </SlotIn>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {esgGoals.map((goal, i) => (
              <SlotIn key={goal.num} delay={i * 0.05}>
                <div
                  className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: goal.color }}
                >
                  <span className="text-white font-heading font-bold text-lg leading-none">{goal.num}</span>
                  <span className="text-white/80 text-[8px] sm:text-[9px] text-center mt-0.5 px-0.5 leading-tight font-heading uppercase tracking-wide">
                    {goal.label}
                  </span>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}