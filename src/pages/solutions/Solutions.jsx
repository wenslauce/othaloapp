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
      href: '/solutions/governments',
      img: '/images/The District 2a.png',
      headline: t('solutions.cards.0.headline'),
      bullets: t('solutions.cards.0.bullets', { returnObjects: true }),
    },
    {
      key: 'housing-developers',
      icon: TrendingUp,
      label: t('solutions.cards.1.label'),
      href: '/solutions/housing-developers',
      img: '/images/The community 2c.png',
      headline: t('solutions.cards.1.headline'),
      bullets: t('solutions.cards.1.bullets', { returnObjects: true }),
    },
    {
      key: 'corporations',
      icon: Briefcase,
      label: t('solutions.cards.2.label'),
      href: '/solutions/corporations',
      img: '/images/The House Kenya crop.png',
      headline: t('solutions.cards.2.headline'),
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

      {/* Hero: 50/50 — navy + title | six-quadrant image */}
      <section className="flex flex-col lg:flex-row lg:items-stretch min-h-0">
        <div className="w-full lg:w-1/2 bg-navy flex items-center px-8 md:px-12 lg:px-14 xl:px-16 py-16 lg:py-20 min-h-[min(44vh,400px)] lg:min-h-[min(52vh,560px)]">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-6 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('solutions.label')}
              <span className="w-8 h-px bg-teal" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold text-white max-w-4xl leading-[1.08]">
              {t('solutions.title')}
            </h1>
          </SlotIn>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[min(40vh,320px)] lg:min-h-[min(52vh,560px)]">
          <img
            src="/images/The House step by step 2.png"
            alt={t('solutions.title')}
            className="absolute inset-0 size-full object-cover object-center"
          />
        </div>
      </section>

      {/* Solution rows */}
      {solutions.map((sol, i) => {
        const Icon = sol.icon;
        const isEven = i % 2 === 0;
        const brightImage = i === 0 || i === 1;
        return (
          <section
            key={sol.key}
            className={i === 1 ? 'bg-surface' : 'bg-white'}
          >
            <div className="max-w-8xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
              <SlotIn delay={i * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative overflow-hidden rounded-sm ${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src={sol.img}
                      alt={sol.headline}
                      className={`w-full h-72 lg:h-[440px] object-cover ${brightImage ? 'brightness-110 contrast-[1.03]' : ''}`}
                    />
                    {i === 2 && (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/15 to-transparent" />
                    )}
                  </div>

                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal" />
                      </div>
                      <span className="font-heading font-semibold text-teal text-sm uppercase tracking-widest">{sol.label}</span>
                    </div>
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-6 leading-tight">
                      {sol.headline}
                    </h2>
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
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">{t('solutions.not_sure_title')}</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
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
