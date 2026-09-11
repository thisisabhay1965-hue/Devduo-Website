import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1220] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#1677FF] shadow-[0_0_12px_rgba(22,119,255,0.8)]" />
              <span className="font-heading tracking-tight text-lg font-bold text-white">
                DEVDUO
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm">
              "We Build for Tomorrow."
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-slate-300">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={(e) => scrollToSection(e, 'process')}
              className="hover:text-blue-400 transition-colors"
            >
              Process
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="hover:text-blue-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/devd_uo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-blue-500/50 hover:text-white transition-all text-slate-300 text-xs font-medium"
              aria-label="DevDuo Instagram"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@devd_uo</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-[#1677FF] hover:text-white hover:border-[#1677FF] transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 DevDuo. All rights reserved.
          </div>
          <div>
            DevDuo • Modern Web Development Studio
          </div>
        </div>
      </div>
    </footer>
  );
};
