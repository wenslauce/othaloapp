// Solutions page
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Briefcase, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Solutions() {
  const { t } = useTranslation();

  const solutions = [
    {
      key: 'governments',
      icon: Building2,
      label: t('solutions.cards.0.label'),
      tag: t('solutions.cards.0.tag'),
      href: '/solutions/governments',
      img: '/images/The District 2a.png',
      headline: t('solutions.cards.0.headline'),
      desc: t('solutions.cards.0.desc'),
      bullets: t('solutions.cards.0.bullets', { returnObjects: true }),
    },
    {
      key: 'housing-developers',
      icon: TrendingUp,
      label: t('solutions.cards.1.label'),
      tag: t('solutions.cards.1.tag'),
      href: '/solutions/housing-developers',
      img: '/images/The community 2c.png',
      headline: t('solutions.cards.1.headline'),
      desc: t('solutions.cards.1.desc'),
      bullets: t('solutions.cards.1.bullets', { returnObjects: true }),
    },
    {
      key: 'corporations',
      icon: Briefcase,
      label: t('solutions.cards.2.label'),
      tag: t('solutions.cards.2.tag'),
      href: '/solutions/corporations',
      img: '/images/Panels in the factory.png',
      headline: t('solutions.cards.2.headline'),
      desc: t('solutions.cards.2.desc'),
      bullets: t('solutions.cards.2.bullets', { returnObjects: true }),
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.solutions.title')}
        description={t('seo.solutions.description')}
        canonical="https://othalo.com/solutions"
        keywords={t('seo.solutions.keywords').split(', ')}
      />
      {/* Hero */}
      <section className="bg-navy py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/The House step by step 2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('solutions.label')}
              <span className="w-8 h-px bg-teal" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mx-auto leading-tight mb-5">
              {t('solutions.title')}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('solutions.subtitle')}
            </p>
          </SlotIn>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 space-y-16">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const isEven = i % 2 === 0;
            return (
              <SlotIn key={sol.key} delay={i * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-sm ${!isEven ? 'lg:order-2' : ''}`}>
                    <img src={sol.img} alt={sol.headline} className="w-full h-72 lg:h-[440px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-5 left-5">
                      <span className="bg-teal text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm font-heading">
                        {sol.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal" />
                      </div>
                      <span className="font-heading font-semibold text-teal text-sm uppercase tracking-widest">{sol.label}</span>
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-navy mb-3 leading-tight">{sol.headline}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{sol.desc}</p>
                    <ul className="space-y-2.5 mb-8">
                      {sol.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-navy/80">
                          <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0 mt-1.5" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="bg-teal hover:bg-teal-light text-white font-semibold px-6 h-11 rounded-sm text-sm"
                      >
                        <Link to={sol.href}>
                          {t('solutions.learn_more')}
                          <ChevronRight className="ml-1 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SlotIn>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">{t('solutions.not_sure_title')}</h2>
            <p className="text-white/60 max-md mx-auto mb-8">
              {t('solutions.not_sure_subtitle')}
            </p>
            <Button asChild size="lg" className="bg-teal hover:bg-teal-light text-white font-semibold px-10 h-12 rounded-sm text-base">
              <Link to="/contact">
                {t('solutions.contact_us')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}