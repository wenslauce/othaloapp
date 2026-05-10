// Products page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Zap, Leaf, ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import SlotIn from '@/components/shared/SlotIn';
import ImageSlider from '@/components/shared/ImageSlider';
import GetQuoteModal from '@/components/shared/GetQuoteModal';
import SEOHead from '@/components/shared/SEOHead';

const panelFeatures = [
  { icon: CheckCircle, title: 'Cost Effective', desc: 'Use of plastic waste, limited manpower and machinery needed on site, fast construction methodology.' },
  { icon: Shield, title: 'Quality and durability', desc: '60 years lifespan, x7 stronger than concrete, insulation x3 more effective than concrete.' },
  { icon: Zap, title: 'Safety', desc: 'Fire resistant, hurricane and earthquake resistant. Tested to international standards.' },
  { icon: Leaf, title: 'Carbon efficient', desc: 'Made from 100% recycled plastic. No cement or steel used. Low water use in construction.' },
];

const comparisonData = [
  { particular: 'Market ready', othalo: 'full', threeD: 'none', triple: 'partial', traditional: 'full' },
  { particular: 'Low production time', othalo: 'full', threeD: 'none', triple: 'none', traditional: 'partial' },
  { particular: 'Recyclable', othalo: 'full', threeD: 'partial', triple: 'partial', traditional: 'none' },
  { particular: 'Sustainable', othalo: 'full', threeD: 'partial', triple: 'partial', traditional: 'none' },
  { particular: 'Accessible raw materials', othalo: 'full', threeD: 'none', triple: 'partial', traditional: 'none' },
  { particular: 'Low cost', othalo: 'full', threeD: 'none', triple: 'none', traditional: 'partial' },
  { particular: 'Industrial production', othalo: 'full', threeD: 'none', triple: 'none', traditional: 'partial' },
];

const productLines = [
  {
    name: 'The Community',
    desc: 'Single-family and multi-family units optimized for rapid urban deployment and low-income housing programs.',
    images: ['/images/The community 1a.png', '/images/The community 2a.png', '/images/The community 2c.png'],
  },
  {
    name: 'The District',
    desc: 'Medium-density residential clusters for families. Full infrastructure integration including utilities.',
    images: ['/images/The District 2a.png', '/images/The District 2b.png'],
  },
  {
    name: 'The Emergency Shelter',
    desc: 'Rapid deployment emergency housing for disaster relief and humanitarian aid missions.',
    images: ['/images/The Emergency Shelter 1.png', '/images/The Emergency Shelter 1a.png', '/images/The Emergency Shelter 1b.png'],
  },
  {
    name: 'The Medical Units',
    desc: 'Specialized healthcare modules including clinics, isolation wards, and diagnostic centers.',
    images: ['/images/The Medical Unit 3.png', '/images/The Medical Unit 3a.png', '/images/The Medical Unit 3b.png'],
  },
  {
    name: 'The Worker Accommodation',
    desc: 'Purpose-built worker accommodation for construction sites, mining operations, and industrial deployment.',
    images: ['/images/The Worker Accomodation 5a.png', '/images/The Worker Accomodation 5b.png', '/images/The Worker Accomodation 6a.png'],
  },
];

export default function Products() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Othalo Panel System — Products & Specifications"
        description="Explore the Othalo structural panel system. 100% recycled plastic, 7x stronger than concrete, 60+ year lifespan. Request a quote today."
        canonical="https://othalo.com/products"
        keywords={['Othalo panel', 'recycled plastic building panels', 'sustainable construction materials', 'modular building system', 'affordable housing product']}
      />
      <GetQuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} context="product" />

      {/* Hero */}
      <section className="relative bg-navy py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/The House Kenya crop.png" alt="" className="w-full h-full object-cover" />
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
                  src="/images/Panels in the factory.png"
                  alt="Othalo structural panel manufacturing"
                  className="w-full h-[480px] object-cover rounded-sm"
                />
                <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-3">
                  <div className="text-xs text-white/50 uppercase tracking-widest font-heading">Material</div>
                  <div className="font-heading font-semibold text-white text-sm">100% Recycled Plastic</div>
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

      {/* Market Leading Technology */}
      <section className="bg-teal py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-12 text-center">
              Market leading technology and innovation
            </h2>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-x-auto rounded-sm border border-white/20 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white text-xs font-semibold tracking-wide">
                    <th className="text-left py-4 px-6 font-heading">Particulars</th>
                    <th className="text-center py-4 px-6 font-heading">Othalo</th>
                    <th className="text-center py-4 px-6 font-heading">3D Printing</th>
                    <th className="text-center py-4 px-6 font-heading leading-tight max-w-[120px]">Triple Panel<br/>Buildings</th>
                    <th className="text-center py-4 px-6 font-heading leading-tight max-w-[120px]">Traditional<br/>construction</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr
                      key={row.particular}
                      className={`border-b border-navy/10 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                    >
                      <td className="py-4 px-6 text-left font-semibold text-navy/90 font-heading text-xs">{row.particular}</td>
                      <td className="py-4 px-6 text-center text-base">
                        {row.othalo === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.othalo === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                      <td className="py-4 px-6 text-center text-base">
                        {row.threeD === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.threeD === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                      <td className="py-4 px-6 text-center text-base">
                        {row.triple === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.triple === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                      <td className="py-4 px-6 text-center text-base">
                        {row.traditional === 'full' && <span className="text-teal font-bold">✓</span>}
                        {row.traditional === 'partial' && <span className="text-teal/70 font-bold">(✓)</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-end text-white/90 text-xs gap-4 font-medium font-heading">
              <span className="flex items-center gap-1"><span className="font-bold text-white text-sm">✓</span> Fulfilled</span>
              <span className="flex items-center gap-1"><span className="font-bold text-white text-sm">(✓)</span> Partially fulfilled</span>
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
                    {/* Auto-sliding Image Gallery */}
                    <ImageSlider images={product.images} name={product.name} />
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="font-heading font-semibold text-navy text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{product.desc}</p>
                    <Button
                      onClick={() => setQuoteOpen(true)}
                      className="bg-teal hover:bg-teal-light text-white font-semibold px-5 h-9 rounded-sm text-xs self-start"
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