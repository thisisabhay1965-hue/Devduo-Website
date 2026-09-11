import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyDevDuo } from './components/WhyDevDuo';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<string>('');
  const [selectedBudgetTier, setSelectedBudgetTier] = useState<string>('');

  const scrollToContact = (projectType?: string, budget?: string) => {
    if (projectType) setSelectedProjectType(projectType);
    if (budget) setSelectedBudgetTier(budget);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProcess = () => {
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#0B1220] flex flex-col selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Sticky Header Navigation */}
      <Navbar onQuoteClick={() => scrollToContact()} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onStartProject={() => scrollToContact()}
          onSeeHowWeWork={scrollToProcess}
        />

        {/* 2. Services / What We Build */}
        <Services onSelectService={(serviceName) => scrollToContact(serviceName)} />

        {/* 3. Why DevDuo */}
        <WhyDevDuo />

        {/* 4. Process */}
        <Process />

        {/* 5. Pricing */}
        <Pricing onSelectTier={(tierName) => scrollToContact(undefined, tierName)} />

        {/* 6. About DevDuo */}
        <About />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Contact */}
        <Contact
          initialProjectType={selectedProjectType}
          initialBudget={selectedBudgetTier}
        />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
