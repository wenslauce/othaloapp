import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SlotIn from '@/components/shared/SlotIn';

const faqs = [
  {
    q: 'What is the Othalo panel made from?',
    a: 'Othalo panels are manufactured from 100% recycled High-Density Polyethylene (HDPE) plastic — primarily sourced from collected ocean-bound and landfill plastic waste. No virgin plastic, cement, or steel is used in the structural system.',
  },
  {
    q: 'How does the building system meet international housing standards?',
    a: 'Othalo structures are engineered to comply with international building codes including ISO, Eurocodes, and local equivalents. Each panel is independently tested for structural load, fire resistance (Class B1 self-extinguishing), wind loads (Category 5 hurricane, >200 km/h), and seismic zones up to Zone 4.',
  },
  {
    q: 'What is the lifespan of an Othalo structure?',
    a: 'Othalo panels are rated for a minimum of 60 years under normal environmental conditions. HDPE does not rot, corrode, or degrade from moisture exposure, making it particularly durable in tropical, coastal, and high-humidity climates.',
  },
  {
    q: 'How is thermal performance ensured?',
    a: 'The Othalo panel system provides thermal insulation approximately 3× more effective than equivalent concrete walls. The hollow-core design creates natural air insulation, reducing the need for additional insulation materials and lowering cooling and heating energy costs.',
  },
  {
    q: 'Is the material safe — are there any harmful emissions?',
    a: 'HDPE is classified as one of the safest plastics. It is food-grade certified, does not off-gas under normal conditions, and does not leach harmful chemicals. Othalo panels have been tested to confirm no volatile organic compound (VOC) emissions in occupied environments.',
  },
  {
    q: 'How does Othalo contribute to sustainability and carbon reduction?',
    a: 'Each 2-bedroom unit diverts approximately 8 tonnes of plastic from the environment. The construction process requires no cement (a major CO₂ source), no steel, and minimal water. The entire lifecycle — from collection to construction — is designed to maximize carbon efficiency and generate verifiable SDG impact data.',
  },
  {
    q: 'Can the structures be adapted to local building codes and climates?',
    a: 'Yes. Othalo works directly with local engineers and authorities to ensure compliance with national building regulations. The modular panel system can be configured for different roof types, foundations, wall thicknesses, and utility integrations to suit tropical, arid, or temperate climate conditions.',
  },
  {
    q: 'What certifications and endorsements does Othalo hold?',
    a: 'Othalo is endorsed by UN-HABITAT for a Better Urban Future. The system has been tested and validated through independent structural and fire safety laboratories. Specific test reports and compliance documentation are available upon request for government procurement and NGO vetting processes.',
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-heading font-semibold text-white text-sm leading-snug group-hover:text-teal transition-colors">
          {item.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-teal flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-white/60 text-sm leading-relaxed pb-5 pr-8">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SolutionFAQ() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SlotIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
              <span className="w-8 h-px bg-teal" />
              FAQ
              <span className="w-8 h-px bg-teal" />
            </div>
            <h2 className="font-heading text-3xl font-semibold text-white mb-3">
              Technical & Sustainability Questions
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-sm">
              Common questions from governments, developers, and partners about Othalo's building system, standards, and environmental credentials.
            </p>
          </div>
        </SlotIn>
        <SlotIn delay={0.1}>
          <div className="max-w-3xl mx-auto border border-white/10 rounded-sm overflow-hidden divide-y divide-white/10 px-6">
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </SlotIn>
      </div>
    </section>
  );
}