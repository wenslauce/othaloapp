import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SlotIn from '@/components/shared/SlotIn';
import { useTranslation } from 'react-i18next';

function FAQItem({ item }) {
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
  const { t } = useTranslation();
  const faqs = t('faqs.items', { returnObjects: true });

  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <SlotIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-teal text-xs font-semibold uppercase tracking-widest mb-4 font-heading">
              <span className="w-8 h-px bg-teal" />
              {t('faqs.label')}
              <span className="w-8 h-px bg-teal" />
            </div>
            <h2 className="font-heading text-3xl font-semibold text-white mb-3">
              {t('faqs.title')}
            </h2>
            <p className="text-white/50 max-w-lg mx-auto text-sm">
              {t('faqs.subtitle')}
            </p>
          </div>
        </SlotIn>
        <SlotIn delay={0.1}>
          <div className="max-w-3xl mx-auto border border-white/10 rounded-sm overflow-hidden divide-y divide-white/10 px-6">
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} />
            ))}
          </div>
        </SlotIn>
      </div>
    </section>
  );
}