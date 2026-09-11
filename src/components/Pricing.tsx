import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingProps {
  onSelectTier?: (tierName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 md:py-32 relative bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-tight">
            Transparent Starting Rates.
          </h2>
          <p className="mt-4 text-[#526078] text-base sm:text-lg leading-relaxed">
            Accessible starting points designed for straightforward projects, with custom quotes for more comprehensive scopes.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-white border-2 border-[#1677FF] shadow-[0_16px_40px_-8px_rgba(22,119,255,0.16)]'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#1677FF] text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
                    {plan.badge || 'POPULAR CHOICE'}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {plan.name}
                    </span>
                    <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1220]">
                      {plan.price}
                    </div>
                    <div className="text-xs text-[#526078] font-medium mt-1">
                      {plan.id === 'custom' ? 'Tailored to your specific scope' : 'Starting rate'}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526078] leading-relaxed mb-6 pb-6 border-b border-slate-100">
                    {plan.description}
                  </p>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Ideal For
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {plan.targetAudience.map((target, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Key Highlights
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => onSelectTier && onSelectTier(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPopular
                        ? 'bg-[#1677FF] hover:bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scope Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-2xs">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#526078] leading-relaxed">
            <span className="font-semibold text-[#0B1220]">Scope &amp; Quotation Note: </span>
            Every website is unique. Final quotes depend on total page count, specific interactive features, and content readiness. We always confirm a clear, transparent project quote before any design or code begins.
          </div>
        </div>
      </div>
    </section>
  );
};
