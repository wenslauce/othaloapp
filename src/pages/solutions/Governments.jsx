// Governments solutions page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Users, Globe, Building2, DollarSign, Clock, Leaf, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SolutionFAQ from '@/components/shared/SolutionFAQ';

const benefits = [
  {
    icon: Users,
    title: 'Scale quickly and efficiently',
    desc: 'Scale affordable homes quickly and efficiently to meet growing population demands.',
  },
  {
    icon: Building2,
    title: 'Higher-density urban projects',
    desc: 'Build for higher-density urban projects with multi-storey capabilities.',
  },
  {
    icon: DollarSign,
    title: 'Reduce costs',
    desc: 'Reduce costs with our patented alternatives to expensive steel and cement.',
  },
  {
    icon: Clock,
    title: 'Build faster',
    desc: 'Build faster with prefabrication—delivering homes in days, not months.',
  },
  {
    icon: Leaf,
    title: 'Lower carbon footprint',
    desc: 'Lower carbon footprint with sustainable, circular materials diverted from waste.',
  },
  {
    icon: Settings,
    title: 'Design flexibly',
    desc: 'Design flexibly to meet specific local needs and regulatory requirements.',
  },
];

const comparisonRows = [
  { feature: 'Build time (100 units)', othalo: '< 3 months', traditional: '18–36 months' },
  { feature: 'Cost per unit (2BR)', othalo: '30–50% lower', traditional: 'Baseline' },
  { feature: 'Local job creation', othalo: 'High — no heavy machinery', traditional: 'Medium — machinery dependent' },
  { feature: 'Environmental liability', othalo: 'Plastic diverted', traditional: 'CO₂ emitted' },
  { feature: 'SDG reporting', othalo: 'Built-in metrics', traditional: 'Manual audit required' },
  { feature: 'Disaster resilience', othalo: 'Hurricane Cat.5 + Seismic Z4', traditional: 'Varies — often lower' },
];

export default function Governments() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="governments" />

      {/* Hero */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              Solutions — Governments
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-5">
              Housing at the scale governments need
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              Affordable, disaster-resilient, SDG-aligned housing deployed at national scale — without the delays and costs of traditional construction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                Request a Government Brief
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </SlotIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-14">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                Why Othalo for Governments
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy">
                A public sector housing strategy that delivers
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
                Othalo vs. Traditional Public Housing Construction
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">A direct comparison of key government procurement metrics.</p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-x-auto rounded-sm border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-4 px-6 text-white/50 font-heading font-semibold text-xs uppercase tracking-widest">Metric</th>
                    <th className="text-center py-4 px-6 text-teal font-heading font-semibold text-xs uppercase tracking-widest">Othalo</th>
                    <th className="text-center py-4 px-6 text-white/40 font-heading font-semibold text-xs uppercase tracking-widest">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                      <td className="py-4 px-6 text-white/70">{row.feature}</td>
                      <td className="py-4 px-6 text-center font-semibold text-teal font-heading">{row.othalo}</td>
                      <td className="py-4 px-6 text-center text-white/40">{row.traditional}</td>
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
              Ready to explore a national deployment?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              Our team works directly with government ministries, housing agencies, and NGOs to scope and deploy at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-white hover:bg-white/90 text-teal font-semibold px-10 h-12 rounded-sm text-base"
              >
                Request a Government Brief
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}