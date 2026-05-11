// Governments solutions page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users, Globe, Building2, DollarSign, Clock, Leaf, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SolutionFAQ from '@/components/shared/SolutionFAQ';
import SEOHead from '@/components/shared/SEOHead';
import { useTranslation } from 'react-i18next';

export default function Governments() {
  const { t } = useTranslation();
  const [quoteOpen, setQuoteOpen] = useState(false);

  const benefits = [
    { icon: Users, title: t('governments.benefits.0.title'), desc: t('governments.benefits.0.desc') },
    { icon: Building2, title: t('governments.benefits.1.title'), desc: t('governments.benefits.1.desc') },
    { icon: DollarSign, title: t('governments.benefits.2.title'), desc: t('governments.benefits.2.desc') },
    { icon: Clock, title: t('governments.benefits.3.title'), desc: t('governments.benefits.3.desc') },
    { icon: Leaf, title: t('governments.benefits.4.title'), desc: t('governments.benefits.4.desc') },
    { icon: Settings, title: t('governments.benefits.5.title'), desc: t('governments.benefits.5.desc') },
  ];

  const comparisonRows = t('governments.comparison_rows', { returnObjects: true });

  return (
    <div className="overflow-hidden">
      <SEOHead
        title={t('seo.solutions.title')}
        description={t('seo.solutions.description')}
        canonical="https://othalo.com/solutions/governments"
        keywords={t('seo.solutions.keywords').split(', ')}
      />
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="governments" />

      {/* Hero */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/The District 2b.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('governments.label')}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-5">
              {t('governments.title')}
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              {t('governments.subtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                {t('governments.cta1')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base"
              >
                <Link to="/contact">{t('governments.cta2')}</Link>
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
                {t('governments.challenge_label')}
              </div>
              <h2 className="font-heading text-3xl font-semibold text-navy mb-6">{t('governments.challenge_title')}</h2>
              <ul className="space-y-4">
                {t('governments.challenge_bullets', { returnObjects: true }).map((item, i) => (
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
                  {t('governments.solution_label')}
                </div>
                <h2 className="font-heading text-3xl font-semibold text-white mb-6">{t('governments.solution_title')}</h2>
                <ul className="space-y-4">
                  {t('governments.solution_bullets', { returnObjects: true }).map((item, i) => (
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
                {t('governments.benefits_label')}
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy">
                {t('governments.benefits_title')}
              </h2>
            </div>
          </SlotIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <SlotIn key={b.title} delay={i * 0.08}>
                  <div className="bg-surface border border-tech-slate rounded-sm p-7 hover:border-teal/30 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-teal/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </SlotIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-semibold text-white mb-3">
                {t('governments.comparison_title')}
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">{t('governments.comparison_subtitle')}</p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-x-auto rounded-sm border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {t('governments.comparison_headers', { returnObjects: true }).map((header, idx) => (
                      <th key={header} className={`py-4 px-6 font-heading font-semibold text-xs uppercase tracking-widest ${idx === 0 ? 'text-left text-white/50' : idx === 1 ? 'text-center text-teal' : 'text-center text-white/40'}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(comparisonRows) && comparisonRows.map((row, i) => (
                    <tr key={row.f} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <td className="py-4 px-6 text-white/70">{row.f}</td>
                      <td className="py-4 px-6 text-center font-semibold text-teal font-heading">{row.o}</td>
                      <td className="py-4 px-6 text-center text-white/40">{row.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SlotIn>
        </div>
      </section>

      <SolutionFAQ />

      {/* CTA */}
      <section className="bg-teal py-20">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">
              {t('governments.cta_section_title')}
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              {t('governments.cta_section_subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-white hover:bg-white/90 text-teal font-semibold px-10 h-12 rounded-sm text-base"
              >
                {t('governments.cta1')}
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base">
                <Link to="/contact">{t('governments.cta_contact')}</Link>
              </Button>
            </div>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}