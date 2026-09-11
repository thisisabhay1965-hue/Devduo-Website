import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onQuoteClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToQuote = () => {
    setMobileMenuOpen(false);
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(11,18,32,0.05)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-2.5 text-slate-900 text-lg font-extrabold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-2.5 h-2.5 rounded-sm bg-blue-600 shadow-[0_0_12px_rgba(22,119,255,0.7)] group-hover:scale-110 transition-transform" />
          <span className="font-heading tracking-tight text-[#0B1220] group-hover:text-blue-600 transition-colors">
            DEVDUO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#526078]"
          aria-label="Main Navigation"
        >
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="hover:text-blue-600 transition-colors py-1 relative"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={(e) => handleNavClick(e, 'process')}
            className="hover:text-blue-600 transition-colors py-1 relative"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="hover:text-blue-600 transition-colors py-1 relative"
          >
            About
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, 'faq')}
            className="hover:text-blue-600 transition-colors py-1 relative"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center">
          <button
            id="nav-get-quote-btn"
            type="button"
            onClick={scrollToQuote}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide bg-[#0B1220] hover:bg-blue-600 text-white shadow-sm hover:shadow-[0_4px_16px_rgba(22,119,255,0.25)] transition-all duration-200 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 text-slate-700 hover:text-blue-600 rounded-lg border border-slate-200 bg-white/90 shadow-xs transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl transition-all duration-200"
        >
          <div className="flex flex-col gap-3 text-base font-medium">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-[#0B1220] hover:text-blue-600 transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Services</span>
              <span className="text-xs text-slate-400 font-mono">01</span>
            </a>
            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className="text-[#0B1220] hover:text-blue-600 transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Process</span>
              <span className="text-xs text-slate-400 font-mono">02</span>
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-[#0B1220] hover:text-blue-600 transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>About</span>
              <span className="text-xs text-slate-400 font-mono">03</span>
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, 'faq')}
              className="text-[#0B1220] hover:text-blue-600 transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>FAQ</span>
              <span className="text-xs text-slate-400 font-mono">04</span>
            </a>

            <div className="pt-3">
              <button
                id="mobile-quote-btn"
                type="button"
                onClick={scrollToQuote}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <span>Get a Quote →</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
