import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STAGES } from '../data/content';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Workflow</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-tight">
            From Idea to Live Website.
          </h2>
          <p className="mt-4 text-[#526078] text-base sm:text-lg leading-relaxed">
            A simple, transparent four-step progression from initial conversation to launch day.
          </p>
        </div>

        {/* Connected Timeline: Horizontal on desktop, Vertical on mobile */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-slate-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STAGES.map((stage, index) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col items-start group"
              >
                {/* Mobile vertical line connector */}
                {index < PROCESS_STAGES.length - 1 && (
                  <div
                    className="lg:hidden absolute left-[27px] top-[56px] bottom-[-24px] w-[2px] bg-slate-200"
                    aria-hidden="true"
                  />
                )}

                {/* Step Node */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#1677FF] group-hover:shadow-[0_0_16px_rgba(22,119,255,0.2)] flex items-center justify-center font-heading font-extrabold text-[#0B1220] group-hover:text-[#1677FF] text-base transition-all duration-200 shrink-0">
                    {stage.number}
                  </div>
                  <div className="lg:hidden">
                    <span className="font-heading text-lg font-bold text-[#0B1220]">
                      {stage.title}
                    </span>
                  </div>
                </div>

                {/* Desktop Title & Content */}
                <div className="mt-1 pl-[70px] lg:pl-0">
                  <h3 className="hidden lg:block font-heading text-xl font-bold text-[#0B1220] mb-2 tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#526078] leading-relaxed max-w-xs">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
