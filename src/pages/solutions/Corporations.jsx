// Corporations solutions page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, FileCheck, Handshake, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SolutionFAQ from '@/components/shared/SolutionFAQ';

const benefits = [
  {
    icon: Target,
    title: 'Tangible ESG outcomes',
    desc: 'Every Othalo deployment generates verifiable environmental (plastic diversion), social (housing units), and governance metrics for your ESG reports.',
  },
  {
    icon: FileCheck,
    title: 'SDG-aligned reporting',
    desc: 'Projects map directly to 9 UN SDGs. We provide full impact documentation compatible with GRI, SASB, and TCFD frameworks.',
  },
  {
    icon: Handshake,
    title: 'Strategic CSR partnerships',
    desc: 'Othalo\'s corporate program creates branded housing projects — linking your company\'s investment directly to visible, community-level impact.',
  },
  {
    icon: BarChart2,
    title: 'Worker accommodation',
    desc: 'Deploy dignified, certified worker accommodation for your operations in emerging markets — faster and at a fraction of conventional costs.',
  },
];

const esgMetrics = [
  { label: 'Plastic diverted per 2BR unit', value: '8 tonnes' },
  { label: 'CO₂ avoided vs. concrete', value: '~12 tonnes per unit' },
  { label: 'SDGs addressed', value: '9 of 17' },
  { label: 'Local jobs created per 100 units', value: '80–120 roles' },
  { label: 'Impact frameworks supported', value: 'GRI, SASB, TCFD' },
  { label: 'Verification', value: 'Third-party auditable' },
];

export default function Corporations() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="corporations" />

      {/* Hero */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?w=1800&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
              <span className="w-8 h-px bg-teal" />
              Solutions — Corporations
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-5">
              ESG excellence that delivers real-world change
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              Partner with Othalo to turn your ESG commitments into measurable, independently verifiable impact on housing, waste, and communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                Explore a Corporate Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base">
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
                Corporate Advantage
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy">
                Structured ESG impact for forward-thinking companies
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

      {/* ESG Metrics */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-semibold text-white mb-3">
                Metrics your sustainability team will trust
              </h2>
              <p className="text-white/60 max-w-lg mx-auto">Every Othalo corporate deployment generates a full impact data package.</p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {esgMetrics.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-teal/40 transition-colors">
                  <div className="text-xs text-white/40 uppercase tracking-widest font-heading font-semibold mb-2">{m.label}</div>
                  <div className="font-heading font-semibold text-teal text-xl">{m.value}</div>
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
            <h2 className="font-heading text-3xl font-semibold text-white mb-4">
              Turn your ESG commitments into verified impact
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">
              Speak with our corporate partnerships team to scope a program aligned to your sustainability goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-white hover:bg-white/90 text-teal font-semibold px-10 h-12 rounded-sm text-base"
              >
                Contact Corporate Partnerships
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