// Home page
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowRight, Recycle, Clock, Shield, Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import ImageSlider from '@/components/shared/ImageSlider';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
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
      <section ref={heroRef} className="relative h-[90vh] min-h-[640px] flex items-center overflow-hidden">
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
            poster="/images/The House Kenya crop.png"
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
            {/* Fallback image if video is not supported */}
            <img
              src="/images/The House Kenya crop.png"
              alt="Othalo sustainable housing"
              className="w-full h-full object-cover"
            />
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
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal-50 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-6 font-heading">
              <span className="w-1.5 h-1.5 bg-teal rounded-full" />
              {t('home.hero_badge')}
            </div>
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
                <Link to="/solutions/governments">
                  {t('home.hero_cta1')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base"
              >
                <Link to="/products">{t('home.hero_cta2')}</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('home.tech_label')}
                <span className="w-8 h-px bg-teal" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-4">
                {t('home.tech_title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('home.tech_subtitle')}
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <SlotIn key={f.title} delay={i * 0.08}>
                  <div className="bg-surface border border-tech-slate rounded-sm p-6 h-full hover:border-teal/40 hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-teal/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </SlotIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlotIn>
              <img
                src="/images/Panel 3D.jpg"
                alt="Community impact"
                className="w-full h-80 lg:h-96 object-cover rounded-sm"
              />
            </SlotIn>
            <SlotIn delay={0.15}>
              <div className="text-white/20 font-heading text-8xl leading-none mb-4">"</div>
              <blockquote className="font-heading text-xl lg:text-2xl text-white font-light leading-relaxed mb-8 -mt-6">
                {t('home.quote_text')}
              </blockquote>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-teal/20 border border-teal/40 overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt={t('home.quote_author')}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-heading font-semibold text-white text-sm">{t('home.quote_author')}</div>
                  <div className="text-white/50 text-xs">{t('home.quote_title')}</div>
                </div>
              </div>
              <Button
                asChild
                className="mt-8 bg-teal hover:bg-teal-light text-white font-semibold px-6 h-10 rounded-sm text-sm"
              >
                <Link to="/about">{t('home.quote_cta')}</Link>
              </Button>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Build the Future */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('home.approach_label')}
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy">
                {t('home.approach_title')}
              </h2>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {Array.isArray(buildFuture) && buildFuture.map((item, i) => (
              <SlotIn key={item.num} delay={i * 0.08}>
                <div className="flex gap-6 p-6 border border-tech-slate rounded-sm hover:border-teal/30 hover:shadow-sm transition-all group">
                  <div className="font-heading font-semibold text-teal text-3xl leading-none flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryCategories.map((cat, i) => (
              <SlotIn key={cat.label} delay={i * 0.06}>
                <div className="relative overflow-hidden rounded-sm aspect-video group cursor-pointer border border-tech-slate">
                  <ImageSlider images={cat.images} name={cat.label} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-10 pointer-events-none">
                    <span className="text-white text-sm font-heading font-medium p-4">{cat.label}</span>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('home.comparison.label')}
                <span className="w-8 h-px bg-teal" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                {t('home.comparison.title')}
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                {t('home.comparison.subtitle')}
              </p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-x-auto rounded-sm border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {t('home.comparison.headers', { returnObjects: true }).map((header, idx) => (
                      <th 
                        key={header}
                        className={`py-4 px-5 font-heading font-semibold uppercase text-xs tracking-widest ${
                          idx === 0 ? 'text-left text-white/50' : idx === 1 ? 'text-center text-teal' : 'text-center text-white/40'
                        }`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(comparisonRows) && comparisonRows.map((row, i) => (
                    <tr
                      key={row.f}
                      className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <td className="py-4 px-5 text-white/70">{row.f}</td>
                      <td className="py-4 px-5 text-center font-semibold text-teal font-heading">{row.o}</td>
                      <td className="py-4 px-5 text-center text-white/40">{row.c}</td>
                      <td className="py-4 px-5 text-center text-white/40">{row.s}</td>
                      <td className="py-4 px-5 text-center text-white/40">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SlotIn>
        </div>
      </section>

      {/* ESG Goals */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-4">
                {t('home.esg_title')}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t('home.esg_subtitle')}
              </p>
            </div>
          </SlotIn>
          <div className="flex flex-wrap justify-center gap-3">
            {esgGoals.map((goal, i) => (
              <SlotIn key={goal.num} delay={i * 0.05}>
                <div
                  className="w-20 h-20 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: goal.color }}
                >
                  <span className="text-white font-heading font-bold text-xl leading-none">{goal.num}</span>
                  <span className="text-white/80 text-[9px] text-center mt-1 px-1 leading-tight font-heading uppercase tracking-wide">
                    {goal.label}
                  </span>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-teal py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <SlotIn>
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-2">
                {t('home.cta_title')}
              </h2>
              <p className="text-white/80 max-w-lg">
                {t('home.cta_subtitle')}
              </p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              {[
                { label: t('nav.gov'), href: '/solutions/governments' },
                { label: t('nav.dev'), href: '/solutions/housing-developers' },
                { label: t('nav.corp'), href: '/solutions/corporations' },
              ].map((s) => (
                <Button
                  key={s.label}
                  asChild
                  variant="outline"
                  className="border-white/40 text-white bg-transparent hover:bg-white hover:text-teal font-semibold px-5 h-11 rounded-sm text-sm transition-all"
                >
                  <Link to={s.href}>
                    {s.label}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}