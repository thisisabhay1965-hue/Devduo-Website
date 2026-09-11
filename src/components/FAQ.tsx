import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-[#F7F9FC]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>FAQ</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1220]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[#526078] text-base leading-relaxed">
            Honest answers to common questions about timelines, pricing, and how we work together.
          </p>
        </div>

        {/* Minimal Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-blue-300 shadow-sm'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0B1220]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 ${
                      isOpen
                        ? 'rotate-180 bg-blue-50 border-blue-200 text-blue-600'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#526078] leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
