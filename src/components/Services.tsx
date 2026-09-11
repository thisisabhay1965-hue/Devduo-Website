import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Target,
  Layers,
  Sparkles,
  Code2,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Target':
        return <Target className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Code2':
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const service1 = SERVICES[0]; // Business Websites
  const service2 = SERVICES[1]; // Landing Pages
  const service3 = SERVICES[2]; // Portfolio Websites
  const service4 = SERVICES[3]; // Personal Brand Websites
  const service5 = SERVICES[4]; // Custom Websites

  return (
    <section id="services" className="py-24 md:py-32 relative bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-tight">
            What We Build.
          </h2>
          <p className="mt-4 text-[#526078] text-base sm:text-lg leading-relaxed">
            Five tailored website categories crafted for businesses, founders, creators, and independent professionals looking to leave an impression.
          </p>
        </div>

        {/* Asymmetric Varied Layout */}
        <div className="space-y-6">
          {/* Row 1: 2 Asymmetric Featured Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Service 1: Business Websites (7 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-7 rounded-2xl p-7 sm:p-9 bg-[#F7F9FC] border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-[0_12px_32px_-8px_rgba(11,18,32,0.06)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-2xs group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    {getIcon(service1.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {service1.number}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#0B1220] mb-3">
                  {service1.title}
                </h3>
                <p className="text-[#526078] text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  {service1.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service1.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200/80 text-xs font-medium text-slate-700 flex items-center gap-1.5 shadow-2xs"
                    >
                      <Check className="w-3 h-3 text-blue-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200/70">
                <button
                  type="button"
                  onClick={() => onSelectService(service1.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Discuss Your Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Service 2: Landing Pages (5 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="lg:col-span-5 rounded-2xl p-7 sm:p-9 bg-[#F7F9FC] border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-[0_12px_32px_-8px_rgba(11,18,32,0.06)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-2xs group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                    {getIcon(service2.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {service2.number}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#0B1220] mb-3">
                  {service2.title}
                </h3>
                <p className="text-[#526078] text-sm sm:text-base leading-relaxed mb-6">
                  {service2.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service2.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200/80 text-xs font-medium text-slate-700 flex items-center gap-1.5 shadow-2xs"
                    >
                      <Check className="w-3 h-3 text-blue-600" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-200/70">
                <button
                  type="button"
                  onClick={() => onSelectService(service2.title)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Discuss Your Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Row 2: 3 Balanced Complementary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[service3, service4, service5].map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl p-7 sm:p-8 bg-[#F7F9FC] border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-[0_12px_32px_-8px_rgba(11,18,32,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-2xs group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#0B1220] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[#526078] text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200/70 text-[11px] font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/70">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Discuss Your Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
