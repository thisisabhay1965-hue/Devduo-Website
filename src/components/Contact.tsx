import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Instagram, ArrowRight, Copy, Check, AlertCircle, Loader2, Mail } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  initialProjectType?: string;
  initialBudget?: string;
  initialNotes?: string;
}

const FORMSPREE_FORM_ID = 'xeaqbgqk';

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
  if (!val) return '';
  const lower = val.toLowerCase();
  if (lower.includes('business')) return 'Business Website';
  if (lower.includes('landing')) return 'Landing Page';
  if (lower.includes('portfolio')) return 'Portfolio';
  if (lower.includes('personal') || lower.includes('creator')) return 'Personal Brand';
  if (lower.includes('custom')) return 'Custom Website';
  if (lower.includes('not sure')) return 'Not Sure Yet';
  return '';
};

const normalizeBudget = (val?: string) => {
  if (!val) return '';
  const lower = val.toLowerCase();
  if (lower.includes('starter') || lower.includes('5,000')) return '₹5,000 – ₹10,000';
  if (lower.includes('business') || lower.includes('10,000')) return '₹10,000 – ₹25,000';
  if (lower.includes('25,000') || lower.includes('custom') || lower.includes('talk')) return '₹25,000+';
  if (lower.includes('not sure')) return 'Not Sure Yet';
  return '';
};

export const Contact: React.FC<ContactProps> = ({
  initialProjectType = '',
  initialBudget = '',
  initialNotes = '',
}) => {
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(normalizeProjectType(initialProjectType));
  const [budget, setBudget] = useState(normalizeBudget(initialBudget));
  const [message, setMessage] = useState(initialNotes || '');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProjectType) setProjectType(normalizeProjectType(initialProjectType));
    if (initialBudget) setBudget(normalizeBudget(initialBudget));
    if (initialNotes) setMessage(initialNotes);
  }, [initialProjectType, initialBudget, initialNotes]);

  // Reset form and clear local summary once successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setName('');
      setEmail('');
      setProjectType('');
      setBudget('');
      setMessage('');
    }
  }, [state.succeeded]);

  const handleResetForm = () => {
    reset();
    setName('');
    setEmail('');
    setProjectType('');
    setBudget('');
    setMessage('');
  };

  const hasAnyContent = Boolean(
    name.trim() || email.trim() || projectType || budget || message.trim()
  );

  const getSummaryText = () => {
    const lines = [
      `Hi DevDuo!`,
      name.trim() ? `• Name: ${name.trim()}` : null,
      email.trim() ? `• Contact: ${email.trim()}` : null,
      projectType ? `• Project Type: ${projectType}` : null,
      budget ? `• Budget: ${budget}` : null,
      message.trim() ? `• Notes: ${message.trim()}` : null,
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

            {/* Direct Channels: Email & Instagram */}
            <div className="space-y-3">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Prefer to reach us directly?
                </div>
                <p className="text-xs text-[#526078] mt-0.5">
                  Email or message us on Instagram.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Option */}
                <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#1677FF] flex items-center justify-center shadow-xs shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        EMAIL
                      </div>
                      <a
                        href="mailto:devduowebsites@gmail.com"
                        aria-label="Email DevDuo at devduowebsites@gmail.com"
                        className="font-heading text-sm sm:text-base font-bold text-[#0B1220] hover:text-blue-600 transition-colors block truncate"
                      >
                        devduowebsites@gmail.com
                      </a>
                    </div>
                  </div>

                  <a
                    href="mailto:devduowebsites@gmail.com"
                    aria-label="Email DevDuo at devduowebsites@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all shadow-2xs cursor-pointer"
                  >
                    <span>Email Us →</span>
                  </a>
                </div>

                {/* Instagram Option */}
                <div className="p-5 rounded-2xl bg-[#F7F9FC] border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        INSTAGRAM
                      </div>
                      <a
                        href="https://instagram.com/devd_uo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-sm sm:text-base font-bold text-[#0B1220] hover:text-blue-600 transition-colors block truncate"
                      >
                        @devd_uo
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://instagram.com/devd_uo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-2xs cursor-pointer"
                  >
                    <span>Message us on Instagram →</span>
                  </a>
                </div>
              </div>
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
              {state.succeeded ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#0B1220]">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-[#526078] mt-2 max-w-md mx-auto leading-relaxed">
                      Thanks — your enquiry has been sent. We'll get back to you soon.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href="https://instagram.com/devd_uo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Message us on Instagram →</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div>
                  {/* Header above form */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-1">
                      START YOUR PROJECT
                    </div>
                    <p className="text-xs sm:text-sm text-[#526078]">
                      Tell us what you want to build and we'll take it from there.
                    </p>
                  </div>

                  {/* Submission Error Banner */}
                  {state.errors && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-rose-900">Submission failed</div>
                        <p className="mt-0.5 text-rose-700">
                          We couldn't send your enquiry right now. Please try again or message us on Instagram{' '}
                          <a
                            href="https://instagram.com/devd_uo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold underline hover:text-rose-900"
                          >
                            @devd_uo
                          </a>.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden inputs to guarantee projectType and budget are captured by FormData */}
                    <input type="hidden" name="projectType" value={projectType} />
                    <input type="hidden" name="budget" value={budget} />

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
                          name="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-2xs"
                        />
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                          className="text-xs text-rose-600 mt-1"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-2xs"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                          className="text-xs text-rose-600 mt-1"
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
                              onClick={() => setProjectType(isSelected ? '' : type)}
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
                      <ValidationError
                        prefix="Project Type"
                        field="projectType"
                        errors={state.errors}
                        className="text-xs text-rose-600 mt-1"
                      />
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
                              onClick={() => setBudget(isSelected ? '' : range)}
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
                      <ValidationError
                        prefix="Budget"
                        field="budget"
                        errors={state.errors}
                        className="text-xs text-rose-600 mt-1"
                      />
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
                        name="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="What is your business? Do you have an existing website or starting fresh? Any specific goals or timeframe?"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-2xs"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-xs text-rose-600 mt-1"
                      />
                    </div>

                    {/* Live Enquiry Summary & Copy Button */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-2xs space-y-2">
                      <div className="flex items-center justify-between font-sans">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                          Your Enquiry Summary
                        </span>
                        {hasAnyContent && (
                          <button
                            type="button"
                            onClick={copySummary}
                            className="text-[11px] text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 cursor-pointer"
                          >
                            {copied ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Summary</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                      <div className="whitespace-pre-wrap font-mono text-[11px] text-slate-700">
                        {hasAnyContent ? (
                          <div className="space-y-1">
                            {name.trim() && <div>• Name: {name.trim()}</div>}
                            {email.trim() && <div>• Contact: {email.trim()}</div>}
                            {projectType && <div>• Project Type: {projectType}</div>}
                            {budget && <div>• Budget: {budget}</div>}
                            {message.trim() && <div>• Notes: {message.trim()}</div>}
                          </div>
                        ) : (
                          <div className="text-slate-400 text-xs italic font-sans">
                            Form details will appear here as you type.
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#1677FF] hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
