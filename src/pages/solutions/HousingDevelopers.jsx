// Housing Developers solutions page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, DollarSign, Package, Users, Globe, Leaf, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SolutionFAQ from '@/components/shared/SolutionFAQ';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function HousingDevelopers() {
  const { t } = useTranslation();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const benefits = [
    { icon: DollarSign, title: t('housing_dev.benefits.0.title'), desc: t('housing_dev.benefits.0.desc') },
    { icon: Clock, title: t('housing_dev.benefits.1.title'), desc: t('housing_dev.benefits.1.desc') },
    { icon: Users, title: t('housing_dev.benefits.2.title'), desc: t('housing_dev.benefits.2.desc') },
    { icon: TrendingUp, title: t('housing_dev.benefits.3.title'), desc: t('housing_dev.benefits.3.desc') },
    { icon: Globe, title: t('housing_dev.benefits.4.title'), desc: t('housing_dev.benefits.4.desc') },
    { icon: Leaf, title: t('housing_dev.benefits.5.title'), desc: t('housing_dev.benefits.5.desc') },
    { icon: Settings, title: t('housing_dev.benefits.6.title'), desc: t('housing_dev.benefits.6.desc') },
  ];

  const roiMetrics = t('housing_dev.roi_items', { returnObjects: true });

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.solutions.title')}
        description={t('seo.solutions.description')}
        canonical="https://othalo.com/solutions/housing-developers"
        keywords={t('seo.solutions.keywords').split(', ')}
      />
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="housing-developers" />

      {/* Hero */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('housing_dev.label')}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-5">
              {t('housing_dev.title')}
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              {t('housing_dev.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                {t('housing_dev.cta1')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base">
                <Link to="/contact">{t('housing_dev.cta2')}</Link>
              </Button>
            </div>
          </SlotIn>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-surface py-20 lg:py-28 border-b border-tech-slate">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SlotIn>
              <div className="inline-flex items-center gap-2 text-navy/50 text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-navy/20" />
                {t('housing_dev.challenge_label')}
              </div>
              <h2 className="font-heading text-3xl font-semibold text-navy mb-6">{t('housing_dev.challenge_title')}</h2>
              <ul className="space-y-4">
                {t('housing_dev.challenge_bullets', { returnObjects: true }).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-navy/30 rounded-full flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </SlotIn>
            <SlotIn delay={0.15}>
              <div className="bg-navy rounded-sm p-8 lg:p-10 text-white shadow-lg">
                <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                  <span className="w-8 h-px bg-teal" />
                  {t('housing_dev.solution_label')}
                </div>
                <h2 className="font-heading text-3xl font-semibold text-white mb-6">{t('housing_dev.solution_title')}</h2>
                <ul className="space-y-4">
                  {t('housing_dev.solution_bullets', { returnObjects: true }).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full flex-shrink-0 mt-2.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-14">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('housing_dev.benefits_label')}
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy">
                {t('housing_dev.benefits_title')}
              </h2>
            </div>
          </SlotIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <SlotIn key={b.title} delay={i * 0.08}>
                  <div className="flex gap-5 p-6 bg-surface border border-tech-slate rounded-sm hover:border-teal/30 hover:shadow-md transition-all group">
                    <div className="w-11 h-11 bg-teal/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy text-base mb-1.5">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </SlotIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                {t('housing_dev.roi_label')}
              </div>
              <h2 className="font-heading text-3xl font-semibold text-navy">{t('housing_dev.roi_title')}</h2>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(roiMetrics) && roiMetrics.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-sm p-6 border ${m.highlight ? 'bg-navy border-navy text-white' : 'bg-white border-tech-slate'}`}
                >
                  <div className={`text-xs uppercase tracking-widest font-heading font-semibold mb-2 ${m.highlight ? 'text-teal' : 'text-muted-foreground'}`}>
                    {m.label}
                  </div>
                  <div className={`font-heading font-semibold text-2xl ${m.highlight ? 'text-white' : 'text-navy'}`}>
                    {m.value}
                  </div>
                  <div className={`text-[10px] mt-1 ${m.highlight ? 'text-white/50' : 'text-muted-foreground/60'}`}>
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </SlotIn>
        </div>
      </section>

      <SolutionFAQ />

      {/* CTA */}
      <section className="bg-teal py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">{t('housing_dev.cta_title')}</h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              {t('housing_dev.cta_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-white hover:bg-white/90 text-teal font-semibold px-10 h-12 rounded-sm text-base"
              >
                {t('housing_dev.cta1_bottom')}
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base">
                <Link to="/contact">{t('housing_dev.cta_contact')}</Link>
              </Button>
            </div>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}