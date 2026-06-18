// Solutions page
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Solutions() {
  const { t } = useTranslation();
  const cards = t('solutions.cards', { returnObjects: true });

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.solutions.title')}
        description={t('seo.solutions.description')}
        canonical="https://othalo.com/solutions"
        keywords={t('seo.solutions.keywords').split(', ')}
      />

      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <p className="text-teal font-heading text-sm uppercase tracking-widest mb-3">{t('solutions.label')}</p>
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white max-w-3xl leading-tight mb-4">
              {t('solutions.title')}
            </h1>
            <p className="text-white/60 text-sm lg:text-base max-w-2xl leading-relaxed">
              {t('solutions.subtitle')}
            </p>
          </SlotIn>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {Array.isArray(cards) && cards.map((card, i) => (
              <SlotIn key={card.label} delay={i * 0.1}>
                <div className="bg-[#E7E9EC] border border-tech-slate rounded-sm p-8 flex flex-col h-full">
                  <p className="text-teal font-semibold text-xs uppercase tracking-wider mb-2">{card.tag}</p>
                  <h3 className="font-heading font-bold text-navy text-xl lg:text-2xl leading-tight mb-4">{card.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.desc}</p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {card.bullets && card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-navy/70 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0 mt-2.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="bg-teal hover:bg-teal-light text-white font-semibold px-4 h-8 rounded-[6px] text-xs self-start uppercase tracking-wide"
                  >
                    <Link to={card.cta_link || '#'}>{card.cta}</Link>
                  </Button>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure CTA */}
      <section className="bg-[#E7E9EC] py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-3">{t('solutions.not_sure_title')}</h2>
            <p className="text-navy/70 text-sm lg:text-base mb-8 max-w-xl mx-auto">{t('solutions.not_sure_subtitle')}</p>
            <Button
              asChild
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-6 h-10 rounded-sm text-sm"
            >
              <Link to="/contact">{t('solutions.contact_us')}</Link>
            </Button>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}