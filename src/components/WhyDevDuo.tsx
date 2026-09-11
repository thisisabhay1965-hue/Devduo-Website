import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layout, Zap, MessageSquare, ArrowRight } from 'lucide-react';
import { WHY_PRINCIPLES } from '../data/content';

export const WhyDevDuo: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 2:
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 3:
      default:
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="why" className="py-24 md:py-32 relative bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Large Statement + Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Studio Philosophy</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-[1.15]">
              Why Build With DevDuo?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base sm:text-lg text-[#526078] leading-relaxed">
              DevDuo is an independent web development studio. When you work with us, you get direct collaboration, thoughtful craftsmanship, and a website built purposefully for your goals without agency fluff or generic templates.
            </p>
          </div>
        </div>

        {/* 4 Supporting Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100/80">
                    {getIcon(index)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-base sm:text-lg font-bold text-[#0B1220] tracking-wide mb-3 uppercase">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#526078] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
