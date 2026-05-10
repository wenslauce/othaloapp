// Solutions page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, TrendingUp, Briefcase, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SEOHead from '@/components/shared/SEOHead';

const solutions = [
  {
    key: 'governments',
    icon: Building2,
    label: 'Governments',
    tag: 'Public Sector',
    href: '/solutions/governments',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    headline: 'Housing at the scale governments need',
    desc: 'Affordable homes from recycled plastic for scale. Prefabricated modular systems with UN-endorsed, patented technology.',
    bullets: [
      'Affordable homes from recycled plastic for scale',
      'Prefabricated modular systems with UN-endorsed, patented technology',
      'Faster build for speed',
      'Multi-storey (up to 4 floors)',
      'Globally compliant, locally adaptable',
    ],
    ctaLabel: 'Request a Government Brief',
    quoteContext: 'governments',
  },
  {
    key: 'housing-developers',
    icon: TrendingUp,
    label: 'Housing Developers',
    tag: 'Private Sector',
    href: '/solutions/housing-developers',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    headline: 'The fastest path from land to delivered homes',
    desc: 'Faster, more cost-efficient construction. Flexible designs adapt to your project, market, and regulation.',
    bullets: [
      'Faster, more cost-efficient construction',
      'Prefabricated modular systems made from recycled plastic',
      'Simplified on-site execution',
      'Lightweight, scalable components',
      'Flexible designs adapt to your project, market, and regulation',
    ],
    ctaLabel: 'Request a Developer Quote',
    quoteContext: 'housing-developers',
  },
  {
    key: 'corporations',
    icon: Briefcase,
    label: 'Corporations',
    tag: 'Corporate ESG',
    href: '/solutions/corporations',
    img: 'https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=800&q=80',
    headline: 'ESG excellence that delivers real-world change',
    desc: 'Turnkey ESG platform. Link compliance + environmental + social impact. Convert waste into tangible construction materials.',
    bullets: [
      'Turnkey ESG platform',
      'Link compliance + environmental + social impact',
      'Convert waste into tangible construction materials',
      'Scalable, verified, measurable impact for reporting',
      'Fast execution',
      'Stakeholders engagement programs',
    ],
    ctaLabel: 'Explore a Corporate Partnership',
    quoteContext: 'corporations',
  },
];

export default function Solutions() {
  const [quoteContext, setQuoteContext] = useState(null);

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Solutions — Governments, Developers & Corporations"
        description="Scalable housing solutions for governments, housing developers, and corporations. Deploy sustainable homes at scale with Othalo's recycled plastic panel system."
        canonical="https://othalo.com/solutions"
        keywords={['housing solutions', 'scalable housing', 'government housing programs', 'developer housing solutions', 'corporate ESG housing']}
      />
      <GetQuoteModal open={!!quoteContext} onClose={() => setQuoteContext(null)} context={quoteContext} />

      {/* Hero */}
      <section className="bg-navy py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1800&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 text-center">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              What We Offer
              <span className="w-8 h-px bg-teal" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mx-auto leading-tight mb-5">
              Solutions built for every deployment context
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're a government deploying at national scale, a developer chasing ROI, or a corporation building your ESG story — Othalo has a tailored solution for you.
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
                        onClick={() => setQuoteContext(sol.quoteContext)}
                        className="bg-teal hover:bg-teal-light text-white font-semibold px-6 h-11 rounded-sm text-sm"
                      >
                        {sol.ctaLabel}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-navy/20 text-navy hover:bg-surface font-semibold px-6 h-11 rounded-sm text-sm"
                      >
                        <Link to={sol.href}>
                          Learn More
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
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">Not sure which solution fits?</h2>
            <p className="text-white/60 max-w-md mx-auto mb-8">
              Our team is happy to help scope the right approach for your context. Reach out and we'll respond within 2 business days.
            </p>
            <Button asChild size="lg" className="bg-teal hover:bg-teal-light text-white font-semibold px-10 h-12 rounded-sm text-base">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}