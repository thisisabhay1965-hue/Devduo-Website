import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, ArrowRight, Copy, Check, Info } from 'lucide-react';

interface ContactProps {
  initialProjectType?: string;
  initialBudget?: string;
  initialNotes?: string;
}

// Easy hook for future form handler (Formspree, Formkeep, custom API route, etc.)
const FORM_ENDPOINT = '';

const PROJECT_TYPES = [
  'Business Website',
  'Landing Page',
  'Portfolio',
  'Personal Brand',
  'Custom Website',
  'Not Sure Yet',
];

const BUDGET_RANGES = [
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000+',
  'Not Sure Yet',
];

const normalizeProjectType = (val?: string) => {
  if (!val) return 'Business Website';
  const lower = val.toLowerCase();
  if (lower.includes('business')) return 'Business Website';
  if (lower.includes('landing')) return 'Landing Page';
  if (lower.includes('portfolio')) return 'Portfolio';
  if (lower.includes('personal') || lower.includes('creator')) return 'Personal Brand';
  if (lower.includes('custom')) return 'Custom Website';
  if (lower.includes('not sure')) return 'Not Sure Yet';
  return 'Business Website';
};

const normalizeBudget = (val?: string) => {
  if (!val) return '₹5,000 – ₹10,000';
  const lower = val.toLowerCase();
  if (lower.includes('starter') || lower.includes('5,000')) return '₹5,000 – ₹10,000';
  if (lower.includes('business') || lower.includes('10,000')) return '₹10,000 – ₹25,000';
  if (lower.includes('25,000') || lower.includes('custom') || lower.includes('talk')) return '₹25,000+';
  if (lower.includes('not sure')) return 'Not Sure Yet';
  return '₹5,000 – ₹10,000';
};

export const Contact: React.FC<ContactProps> = ({
  initialProjectType = '',
  initialBudget = '',
  initialNotes = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(normalizeProjectType(initialProjectType));
  const [budget, setBudget] = useState(normalizeBudget(initialBudget));
  const [message, setMessage] = useState(initialNotes || '');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProjectType) setProjectType(normalizeProjectType(initialProjectType));
    if (initialBudget) setBudget(normalizeBudget(initialBudget));
    if (initialNotes) setMessage(initialNotes);
  }, [initialProjectType, initialBudget, initialNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (FORM_ENDPOINT) {
      // Future backend submission:
      // fetch(FORM_ENDPOINT, { method: 'POST', body: JSON.stringify({ name, email, projectType, budget, message }) })
      return;
    }

    // Honest temporary state: no backend email gateway connected yet
    setSubmitted(true);
  };

  const getSummaryText = () => {
    const lines = [
      `Hi DevDuo!`,
      name ? `• Name: ${name}` : null,
      email ? `• Contact: ${email}` : null,
      `• Project Type: ${projectType}`,
      `• Budget: ${budget}`,
      message ? `• Notes: ${message}` : `• Notes: Looking to discuss a new website.`,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const copySummary = async () => {
    const text = getSummaryText();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Supporting Text & Instagram Channel */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <span>Contact DevDuo</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B1220] leading-tight">
                Have an Idea? Let's Build It.
              </h2>
              <p className="mt-4 text-[#526078] text-base sm:text-lg leading-relaxed">
                Tell us what you want to build and we'll take it from there.
              </p>
            </div>

            {/* Direct Channel: Instagram */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Direct Channel
                  </div>
                  <div className="font-heading text-lg font-bold text-[#0B1220]">
                    @devd_uo
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#526078] leading-relaxed">
                Instagram DM is our primary direct communication channel. Send us a message and we will respond promptly to discuss your goals.
              </p>

              <a
                href="https://instagram.com/devd_uo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#1677FF] hover:bg-blue-600 text-white transition-all shadow-xs cursor-pointer"
              >
                <span>Message us on Instagram</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Studio Note */}
            <div className="pt-1 text-xs text-[#526078] space-y-1.5">
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Currently open for new website projects</span>
              </div>
              <p className="text-slate-500">
                Direct collaboration on your website from initial concept to launch.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-7 sm:p-9 bg-[#F7F9FC] border border-slate-200/90 shadow-xs">
              {submitted ? (
                /* Honest temporary state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#1677FF] flex items-center justify-center mx-auto">
                    <Info className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#0B1220]">
                      Form Integration Connecting Soon
                    </h3>
                    <p className="text-xs sm:text-sm text-[#526078] mt-2 max-w-md mx-auto leading-relaxed">
                      We haven't connected an automated email backend to this form yet. To make sure your inquiry reaches us immediately, message us directly on Instagram or copy your project summary below.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-left text-xs font-mono text-slate-700 max-w-md mx-auto shadow-2xs">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-sans">
                      Your Project Inquiry:
                    </div>
                    <div className="whitespace-pre-wrap">{getSummaryText()}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={copySummary}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copied ? 'Summary Copied!' : 'Copy Summary'}</span>
                    </button>

                    <a
                      href="https://instagram.com/devd_uo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Message us on Instagram →</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-500 hover:text-slate-800 underline block mx-auto pt-2 cursor-pointer"
                  >
                    Edit your details
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                      >
                        Email or Instagram Handle *
                      </label>
                      <input
                        id="contact-email"
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maya@example.com or @handle"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Project Types */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setProjectType(type)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#1677FF] text-white shadow-xs font-semibold'
                                : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Ranges */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2.5">
                      Estimated Budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_RANGES.map((range) => {
                        const isSelected = budget === range;
                        return (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setBudget(range)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#1677FF] text-white shadow-xs font-semibold'
                                : 'bg-white text-slate-700 border border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What is your business? Do you have an existing website or starting fresh? Any specific goals or timeframe?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-2xs"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#1677FF] hover:bg-blue-600 text-white shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
