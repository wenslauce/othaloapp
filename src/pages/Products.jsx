// Products page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Zap, Leaf, ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import GetQuoteModal from '@/components/shared/GetQuoteModal';

const panelFeatures = [
  { icon: CheckCircle, title: 'Cost Effective', desc: 'Use of plastic waste, limited manpower and machinery needed on site, fast construction methodology.' },
  { icon: Shield, title: 'Quality and durability', desc: '60 years lifespan, x7 stronger than concrete, insulation x3 more effective than concrete.' },
  { icon: Zap, title: 'Safety', desc: 'Fire resistant, hurricane and earthquake resistant. Tested to international standards.' },
  { icon: Leaf, title: 'Carbon efficient', desc: 'Made from 100% recycled plastic. No cement or steel used. Low water use in construction.' },
];

const panelSpecs = [
  { label: 'Material', value: '100% Recycled Polyethylene (HDPE)' },
  { label: 'Lifespan', value: '60+ years' },
  { label: 'Strength vs. Concrete', value: '7x stronger' },
  { label: 'Insulation vs. Concrete', value: '3x more effective' },
  { label: 'Fire rating', value: 'Class B1 (self-extinguishing)' },
  { label: 'Wind resistance', value: 'Category 5 hurricane (>200 km/h)' },
  { label: 'Seismic rating', value: 'Zone 4 earthquake resistant' },
  { label: 'Plastic per 2BR unit', value: '~8 tonnes diverted' },
  { label: 'Construction water use', value: 'None' },
  { label: 'Cement / steel required', value: 'None' },
  { label: 'Panel size', value: '2.8m x 1.2m x 0.12m' },
  { label: 'Weight per panel', value: '~28 kg' },
];

const productLines = [
  {
    name: 'The Community 1a',
    desc: 'Single-family 2-bedroom unit, 42m². Optimized for rapid urban deployment and low-income housing programs.',
    img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=700&q=80',
    specs: ['42 m²', '2 Bedrooms', '72-hr build', '8T plastic'],
    badge: 'Flagship',
  },
  {
    name: 'The Community 2c',
    desc: 'Multi-family block of 6 units. Designed for organized housing developments and community-scale projects.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
    specs: ['6 Units', '252 m² total', '7-day build', '48T plastic'],
    badge: 'Most Deployed',
  },
  {
    name: 'The District 2a',
    desc: 'Medium-density residential cluster for 12–24 families. Full infrastructure integration including utilities.',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    specs: ['24 units', '1,008 m²', '21-day build', '192T plastic'],
    badge: null,
  },
  {
    name: 'Worker Accommodation 6x',
    desc: 'Purpose-built worker accommodation for construction sites, mining operations, and industrial deployment.',
    img: 'https://images.unsplash.com/photo-1509395062183-a6ab13caa6e4?w=700&q=80',
    specs: ['6 rooms', '144 m²', '96-hr build', '24T plastic'],
    badge: 'Industrial',
  },
];

export default function Products() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="product" />

      {/* Hero */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1509395062183-a6ab13caa6e4?w=1800&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        {/* UN-Habitat Badge */}
        <div className="absolute top-24 right-6 lg:right-12 z-20">
          <div className="bg-white rounded-sm p-4 shadow-xl max-w-[160px] text-center border border-tech-slate">
            <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-teal" />
            </div>
            <div className="text-navy font-heading font-bold text-[10px] uppercase tracking-wider leading-tight">
              Endorsed by UN-HABITAT
            </div>
            <div className="text-muted-foreground text-[9px] mt-1">For a Better Urban Future</div>
          </div>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-6 font-heading">
              <span className="w-8 h-px bg-teal" />
              Product Portfolio
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-5">
              The Othalo Panel System
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              Patented structural wall panels manufactured from 100% recycled plastic — the foundation of every Othalo structure.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setQuoteOpen(true)}
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                Get a Product Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base">
                <Link to="/solutions">View Solutions</Link>
              </Button>
            </div>
          </SlotIn>
        </div>
      </section>

      {/* Market Leading Tech + Panel Features */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlotIn>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=85"
                  alt="Othalo structural panel"
                  className="w-full h-[480px] object-cover rounded-sm"
                />
                <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-3">
                  <div className="text-xs text-white/50 uppercase tracking-widest font-heading">Material</div>
                  <div className="font-heading font-semibold text-white text-sm">100% Recycled HDPE</div>
                </div>
              </div>
            </SlotIn>
            <SlotIn delay={0.12}>
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
                <span className="w-8 h-px bg-teal" />
                Technical Advantage
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-10">
                Market leading technology and innovation
              </h2>
              <div className="space-y-5">
                {panelFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <SlotIn key={f.title} delay={i * 0.08}>
                      <div className="flex gap-4 p-4 rounded-sm border border-tech-slate hover:border-teal/30 hover:bg-surface transition-all">
                        <div className="w-10 h-10 bg-teal/10 rounded-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-teal" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-navy text-sm mb-0.5">{f.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    </SlotIn>
                  );
                })}
              </div>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Technical Spec Sheet */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                Specification Sheet
              </div>
              <h2 className="font-heading text-3xl font-semibold text-navy">Panel Technical Specifications</h2>
            </div>
          </SlotIn>
          <SlotIn delay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-tech-slate rounded-sm overflow-hidden border border-tech-slate">
              {panelSpecs.map((spec, i) => (
                <div key={spec.label} className={`bg-white px-6 py-4 flex items-center justify-between gap-4 ${i % 2 === 0 ? '' : 'bg-surface'}`}>
                  <span className="text-muted-foreground text-sm">{spec.label}</span>
                  <span className="font-heading font-semibold text-navy text-sm text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </SlotIn>
        </div>
      </section>

      {/* Product Lines */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-14">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                Product Lines
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-3">Housing configurations</h2>
              <p className="text-muted-foreground max-w-xl">Each configuration is purpose-engineered, modular, and locally adaptable.</p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productLines.map((product, i) => (
              <SlotIn key={product.name} delay={i * 0.08}>
                <div className="group bg-surface border border-tech-slate rounded-sm overflow-hidden hover:shadow-lg hover:border-teal/30 transition-all duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-teal text-white text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-sm font-heading">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-navy text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.specs.map((spec) => (
                        <span key={spec} className="bg-tech-slate text-navy text-xs font-semibold font-heading px-3 py-1 rounded-sm">{spec}</span>
                      ))}
                    </div>
                    <Button
                      onClick={() => setQuoteOpen(true)}
                      className="bg-teal hover:bg-teal-light text-white font-semibold px-5 h-9 rounded-sm text-xs"
                    >
                      Get a Quote
                      <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Impact CTA */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlotIn>
              <img src="https://images.unsplash.com/photo-1604599340287-2042e85a3802?w=700&q=85" alt="Plastic waste crisis" className="w-full h-72 object-cover rounded-sm" />
            </SlotIn>
            <SlotIn delay={0.12}>
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-5 font-heading">
                <span className="w-8 h-px bg-teal" />
                Dual Impact
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-8">
                Using one global challenge to solve another
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Plastic waste', desc: 'A global liability, over 9 billion tons already accumulated in the environment.', href: '/about' },
                  { title: 'Affordable homes', desc: 'An ever-rising crisis: 1.6 billion people live without adequate housing.', href: '/solutions/governments' },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-teal pl-5">
                    <h3 className="font-heading font-semibold text-white text-base mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-3">{item.desc}</p>
                    <Button asChild size="sm" className="bg-teal hover:bg-teal-light text-white font-semibold px-4 h-9 rounded-sm text-xs">
                      <Link to={item.href}>Learn More</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </SlotIn>
          </div>
        </div>
      </section>
    </div>
  );
}