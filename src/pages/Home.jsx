// Home page
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Recycle, Clock, Shield, Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SlotIn from '@/components/shared/SlotIn';
import ImageSlider from '@/components/shared/ImageSlider';
import SEOHead from '@/components/shared/SEOHead';

const techFeatures = [
  {
    icon: Recycle,
    title: 'Innovative patented technology',
    desc: 'Our proprietary process transforms waste plastic into structural panels 7x stronger than concrete.',
  },
  {
    icon: Leaf,
    title: 'Environmentally friendly',
    desc: 'Zero cement, zero steel, zero water in construction. 8 tons of plastic diverted per housing unit.',
  },
  {
    icon: Clock,
    title: 'Fast construction',
    desc: 'From raw panels to completed structure in as little as 72 hours using local labor.',
  },
  {
    icon: Shield,
    title: 'Safety tested',
    desc: 'Fire resistant, hurricane and earthquake resistant. Meets international building standards.',
  },
];

const buildFuture = [
  {
    num: '01',
    title: 'From plastic to high quality construction',
    desc: 'Our patented technology transforms recycled plastic into structural wall panels that are 7x stronger than concrete, fully fire resistant, and designed to last 60+ years.',
  },
  {
    num: '02',
    title: 'Designed for real-world conditions',
    desc: 'Hurricane, earthquake, and flood resistant. Our panels are tested to perform in extreme climates, from coastal tropics to arid highlands — built for where housing is needed most.',
  },
  {
    num: '03',
    title: 'Flexible solutions tailored locally',
    desc: 'Our modular system adapts to any layout — single units, multi-family blocks, schools, health clinics. Each project is configured for local needs and assembled by local workers.',
  },
  {
    num: '04',
    title: 'Built for scale, speed and impact',
    desc: 'Our factory-to-field supply chain enables rapid deployment. One container of panels builds a complete two-bedroom home, delivered and ready to assemble in under a week.',
  },
];

const comparisonRows = [
  { feature: 'Build time (2BR unit)', othalo: '72 hours', concrete: '3–6 months', steel: '2–4 months', timber: '1–3 months' },
  { feature: 'Plastic waste diverted', othalo: '8 tons', concrete: 'None', steel: 'None', timber: 'None' },
  { feature: 'Lifespan', othalo: '60+ years', concrete: '40–50 years', steel: '30–50 years', timber: '20–30 years' },
  { feature: 'Fire resistant', othalo: 'Yes', concrete: 'Yes', steel: 'No', timber: 'No' },
  { feature: 'Earthquake resistant', othalo: 'Yes', concrete: 'Varies', steel: 'Yes', timber: 'Partial' },
  { feature: 'Water use in construction', othalo: 'None', concrete: 'High', steel: 'Medium', timber: 'Low' },
  { feature: 'Cement/steel required', othalo: 'None', concrete: 'High', steel: 'High', timber: 'Some' },
  { feature: 'UN-Habitat certified', othalo: 'Yes', concrete: 'Varies', steel: 'Varies', timber: 'Varies' },
];

const galleryCategories = [
  {
    label: 'The Community',
    images: ['/images/The community 1a.png', '/images/The community 2a.png', '/images/The community 2c.png'],
  },
  {
    label: 'The District',
    images: ['/images/The District 2a.png', '/images/The District 2b.png'],
  },
  {
    label: 'Emergency Shelter',
    images: ['/images/The Emergency Shelter 1.png', '/images/The Emergency Shelter 1a.png', '/images/The Emergency Shelter 1b.png'],
  },
  {
    label: 'Medical Units',
    images: ['/images/The Medical Unit 3.png', '/images/The Medical Unit 3a.png', '/images/The Medical Unit 3b.png'],
  },
  {
    label: 'Worker Accommodation',
    images: ['/images/The Worker Accomodation 5a.png', '/images/The Worker Accomodation 5b.png', '/images/The Worker Accomodation 6a.png'],
  },
  {
    label: 'Factory Production',
    images: ['/images/Panels in the factory.png', '/images/Panel 3D.jpg'],
  },
];

const esgGoals = [
  { num: '1', color: '#E5243B', label: 'No Poverty' },
  { num: '6', color: '#26BDE2', label: 'Clean Water' },
  { num: '8', color: '#A21942', label: 'Decent Work' },
  { num: '9', color: '#FD6925', label: 'Industry & Innovation' },
  { num: '10', color: '#DD1367', label: 'Reduced Inequalities' },
  { num: '11', color: '#FD9D24', label: 'Sustainable Cities' },
  { num: '12', color: '#BF8B2E', label: 'Responsible Consumption' },
  { num: '13', color: '#3F7E44', label: 'Climate Action' },
  { num: '17', color: '#19486A', label: 'Partnerships' },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Affordable, Sustainable Homes from Recycled Plastic"
        description="Othalo transforms recycled plastic into affordable, durable housing. Patented panel technology. 72-hour build time. UN-Habitat endorsed."
        canonical="https://othalo.com/"
        keywords={['affordable housing', 'recycled plastic homes', 'sustainable construction', 'modular housing Africa', 'UN-Habitat', 'plastic waste solution']}
      />
      {/* Hero */}
      <section ref={heroRef} className="relative h-[90vh] min-h-[640px] flex items-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=90"
          >
            <source src="/hero-loop.mp4" type="video/mp4" />
            {/* Fallback image if video is not supported */}
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=90"
              alt="Othalo sustainable housing"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        </motion.div>


        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-8xl mx-auto px-6 lg:px-12 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 text-teal-50 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-6 font-heading">
              <span className="w-1.5 h-1.5 bg-teal rounded-full" />
              Patented Technology
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white max-w-2xl leading-tight mb-6">
              Affordable, sustainable homes from recycled plastic
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-8">
              Our patented technology delivers flexible design, using panels made from recycled plastic — delivering homes with speed and scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal hover:bg-teal-light text-white font-semibold px-8 h-12 rounded-sm text-base"
              >
                <Link to="/solutions/governments">
                  Deploy a Solution
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 h-12 rounded-sm text-base"
              >
                <Link to="/products">View the Technology</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                Core Technology
                <span className="w-8 h-px bg-teal" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-4">
                The most effective solution to Africa's housing challenge
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our panels address the plastic waste crisis and the affordable housing deficit simultaneously — one global challenge solving another.
              </p>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <SlotIn key={f.title} delay={i * 0.08}>
                  <div className="bg-surface border border-tech-slate rounded-sm p-6 h-full hover:border-teal/40 hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-teal/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-teal/20 transition-colors">
                      <Icon className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </SlotIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlotIn>
              <img
                src="/images/Panel 3D.jpg"
                alt="Community impact"
                className="w-full h-80 lg:h-96 object-cover rounded-sm"
              />
            </SlotIn>
            <SlotIn delay={0.15}>
              <div className="text-white/20 font-heading text-8xl leading-none mb-4">"</div>
              <blockquote className="font-heading text-xl lg:text-2xl text-white font-light leading-relaxed mb-8 -mt-6">
                There is only one technology in the world today that can do something real about Africa's housing deficiency and the plastic waste problem, and that is Othalo.
              </blockquote>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-teal/20 border border-teal/40 overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Dr. Vincent Kitio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-heading font-semibold text-white text-sm">Dr. Vincent Kitio</div>
                  <div className="text-white/50 text-xs">Chief, Urban Energy Unit, UN-Habitat</div>
                </div>
              </div>
              <Button
                asChild
                className="mt-8 bg-teal hover:bg-teal-light text-white font-semibold px-6 h-10 rounded-sm text-sm"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </SlotIn>
          </div>
        </div>
      </section>

      {/* Build the Future */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                Our Approach
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy">
                Build the future of homes from recycled plastic
              </h2>
            </div>
          </SlotIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {buildFuture.map((item, i) => (
              <SlotIn key={item.num} delay={i * 0.08}>
                <div className="flex gap-6 p-6 border border-tech-slate rounded-sm hover:border-teal/30 hover:shadow-sm transition-all group">
                  <div className="font-heading font-semibold text-teal text-3xl leading-none flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-base mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryCategories.map((cat, i) => (
              <SlotIn key={cat.label} delay={i * 0.06}>
                <div className="relative overflow-hidden rounded-sm aspect-video group cursor-pointer border border-tech-slate">
                  <ImageSlider images={cat.images} name={cat.label} />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end z-10 pointer-events-none">
                    <span className="text-white text-sm font-heading font-medium p-4">{cat.label}</span>
                  </div>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
                <span className="w-8 h-px bg-teal" />
                Competitive Analysis
                <span className="w-8 h-px bg-teal" />
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white mb-4">
                Market leading technology and innovation
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                A direct comparison against traditional construction methods.
              </p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="overflow-x-auto rounded-sm border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left py-4 px-5 font-heading font-semibold text-white/50 uppercase text-xs tracking-widest">
                      Feature
                    </th>
                    <th className="text-center py-4 px-5 font-heading font-semibold text-teal uppercase text-xs tracking-widest">
                      Othalo
                    </th>
                    <th className="text-center py-4 px-5 font-heading font-semibold text-white/40 uppercase text-xs tracking-widest">
                      Concrete
                    </th>
                    <th className="text-center py-4 px-5 font-heading font-semibold text-white/40 uppercase text-xs tracking-widest">
                      Steel Frame
                    </th>
                    <th className="text-center py-4 px-5 font-heading font-semibold text-white/40 uppercase text-xs tracking-widest">
                      Timber
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                    >
                      <td className="py-4 px-5 text-white/70">{row.feature}</td>
                      <td className="py-4 px-5 text-center font-semibold text-teal font-heading">{row.othalo}</td>
                      <td className="py-4 px-5 text-center text-white/40">{row.concrete}</td>
                      <td className="py-4 px-5 text-center text-white/40">{row.steel}</td>
                      <td className="py-4 px-5 text-center text-white/40">{row.timber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SlotIn>
        </div>
      </section>

      {/* ESG Goals */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-8xl mx-auto px-6 lg:px-12">
          <SlotIn>
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-navy mb-4">
                Othalo helps deliver tangible measurable ESG outcomes
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Aligned with 9 of the 17 United Nations Sustainable Development Goals.
              </p>
            </div>
          </SlotIn>
          <div className="flex flex-wrap justify-center gap-3">
            {esgGoals.map((goal, i) => (
              <SlotIn key={goal.num} delay={i * 0.05}>
                <div
                  className="w-20 h-20 rounded-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: goal.color }}
                >
                  <span className="text-white font-heading font-bold text-xl leading-none">{goal.num}</span>
                  <span className="text-white/80 text-[9px] text-center mt-1 px-1 leading-tight font-heading uppercase tracking-wide">
                    {goal.label}
                  </span>
                </div>
              </SlotIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-teal py-16">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <SlotIn>
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-white mb-2">
                Your solution starts here
              </h2>
              <p className="text-white/80 max-w-lg">
                Whether you're a government, developer, or corporation — we have a deployment strategy designed for your context.
              </p>
            </div>
          </SlotIn>
          <SlotIn delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              {[
                { label: 'Governments', href: '/solutions/governments' },
                { label: 'Housing Developers', href: '/solutions/housing-developers' },
                { label: 'Corporations', href: '/solutions/corporations' },
              ].map((s) => (
                <Button
                  key={s.label}
                  asChild
                  variant="outline"
                  className="border-white/40 text-white bg-transparent hover:bg-white hover:text-teal font-semibold px-5 h-11 rounded-sm text-sm transition-all"
                >
                  <Link to={s.href}>
                    {s.label}
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </SlotIn>
        </div>
      </section>
    </div>
  );
}