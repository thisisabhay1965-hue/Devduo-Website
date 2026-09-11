import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Smartphone,
  Monitor,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onSeeHowWeWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onSeeHowWeWork }) => {
  const [activeView, setActiveView] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F7F9FC]"
    >
      {/* Background ambient lighting - subtle electric blue glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[360px] sm:h-[460px] bg-blue-500/[0.06] blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtle Studio Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2FF] border border-blue-200/70 text-blue-700 text-xs font-semibold tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Independent Web Development Studio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0B1220] leading-[1.12] mb-6"
          >
            We Build Websites That Move Businesses Forward.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-base sm:text-lg md:text-xl text-[#526078] leading-relaxed max-w-2xl mx-auto mb-9 font-normal"
          >
            Modern, responsive websites designed around your business, your audience, and your goals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <button
              id="hero-primary-cta"
              type="button"
              onClick={onStartProject}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#1677FF] hover:bg-blue-600 text-white shadow-[0_4px_18px_rgba(22,119,255,0.28)] hover:shadow-[0_6px_24px_rgba(22,119,255,0.38)] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-secondary-cta"
              type="button"
              onClick={onSeeHowWeWork}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-sm text-[#0B1220] hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>See How We Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-blue-600" />
            </button>
          </motion.div>

          {/* Grounded micro-copy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-6 text-xs text-[#526078] flex items-center justify-center gap-2 font-medium"
          >
            <span>Websites starting from ₹5,000</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Modern, responsive design</span>
          </motion.div>
        </div>

        {/* Prominent, Realistic Modern Website Interface Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto relative"
        >
          {/* Subtle soft backdrop accent */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-80" />

          {/* Browser Container */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_20px_60px_-15px_rgba(11,18,32,0.08)]">
            {/* Browser Top Window Bar */}
            <div className="px-4 py-3 bg-[#F7F9FC] border-b border-slate-200 flex items-center justify-between gap-3">
              {/* Traffic control dots */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40" />
              </div>

              {/* Realistic URL Bar */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 font-mono w-full max-w-md justify-center shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                <span className="text-slate-400 select-none">https://</span>
                <span className="text-[#0B1220] font-semibold truncate">yourbusiness.com</span>
              </div>

              {/* Responsive viewport preview switcher */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-slate-600 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveView('desktop')}
                  className={`p-1 rounded-md text-xs transition-colors flex items-center gap-1 ${
                    activeView === 'desktop'
                      ? 'bg-white text-blue-600 shadow-2xs font-medium'
                      : 'hover:text-slate-900 text-slate-500'
                  }`}
                  aria-label="Desktop Preview"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Desktop</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveView('mobile')}
                  className={`p-1 rounded-md text-xs transition-colors flex items-center gap-1 ${
                    activeView === 'mobile'
                      ? 'bg-white text-blue-600 shadow-2xs font-medium'
                      : 'hover:text-slate-900 text-slate-500'
                  }`}
                  aria-label="Mobile Preview"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Mobile</span>
                </button>
              </div>
            </div>

            {/* Inner Live Website Simulation */}
            <div
              className={`transition-all duration-300 mx-auto ${
                activeView === 'mobile' ? 'max-w-sm py-4' : 'w-full'
              }`}
            >
              <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-b from-white via-[#FCFDFE] to-[#F7F9FC]">
                {/* Simulated Nav */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm bg-[#1677FF]" />
                    <span className="font-heading text-sm font-bold tracking-tight text-[#0B1220]">
                      VALE &amp; CO.
                    </span>
                  </div>
                  {activeView === 'desktop' && (
                    <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-500">
                      <span className="text-[#1677FF] font-semibold">Services</span>
                      <span>Case Studies</span>
                      <span>About Us</span>
                      <span>Journal</span>
                    </div>
                  )}
                  <div className="text-xs px-3.5 py-1.5 rounded-lg bg-[#0B1220] text-white font-medium hover:bg-slate-800 transition-colors cursor-pointer">
                    Book Call
                  </div>
                </div>

                {/* Simulated Main Body */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-7 sm:pt-9 items-center">
                  <div className="md:col-span-7 space-y-4 text-left">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      <Sparkles className="w-3 h-3" />
                      <span>STRATEGIC BRAND &amp; DIGITAL WORK</span>
                    </div>
                    <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#0B1220] tracking-tight leading-snug">
                      Clarity and craft for companies building what’s next.
                    </h2>
                    <p className="text-xs sm:text-sm text-[#526078] leading-relaxed max-w-md">
                      We help growing businesses clarify their proposition, refine their customer journey, and launch high-impact digital experiences.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <span className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#1677FF] text-white shadow-2xs">
                        View Offerings
                      </span>
                      <span className="text-xs text-slate-600 hover:text-blue-600 font-medium flex items-center gap-1 cursor-pointer">
                        Our Story &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Right Showcase Card */}
                  <div className="md:col-span-5">
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
                      <div className="p-3 rounded-lg bg-[#F7F9FC] border border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-mono text-slate-400">Status</div>
                          <div className="text-xs font-bold text-[#0B1220]">Accepting New Projects</div>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>Direct collaboration</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>Mobile-first responsive architecture</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>Turnaround in 1–2 weeks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Qualitative Ribbon */}
                <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-100">
                    <div className="text-xs font-bold text-[#0B1220]">Fast &amp; Lean</div>
                    <div className="text-[10px] text-[#526078]">No bloat, clean code</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-100">
                    <div className="text-xs font-bold text-[#0B1220]">Responsive</div>
                    <div className="text-[10px] text-[#526078]">Every screen size</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-100">
                    <div className="text-xs font-bold text-[#0B1220]">Human Focus</div>
                    <div className="text-[10px] text-[#526078]">No agency bureaucracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
