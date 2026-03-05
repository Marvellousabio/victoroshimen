
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import AchievementsSection from './components/AchievementsSection';
import Timeline from './components/Timeline';
import QuotesSection from './components/QuotesSection';
import MaskSection from './components/MaskSection';
import GallerySection from './components/GallerySection';
import Foundation from './components/Foundation';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-[#D4AF37] selection:text-black bg-[#050505]">
      <Header />

      <main>
        <Hero />

        {/* Quote Separator */}
        <div className="py-20 text-center px-6 bg-[#050505]">
          <p className="text-3xl md:text-5xl heading-font font-bold italic text-white/10 select-none">
            "FAITH. FIGHT. FOCUS."
          </p>
        </div>

        <StatsSection />
        <AchievementsSection />
        <Timeline />
        <QuotesSection />
        <MaskSection />
        <GallerySection />
        <Foundation />

        {/* Partners Banner */}
        <section className="py-12 bg-white/3 border-y border-white/10 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee items-center gap-24 opacity-20">
            {['NIKE', 'PEPSI', 'PUMA', 'SORARE', 'EA SPORTS', 'ADIDAS', 'HEINEKEN'].map((brand, i) => (
              <span key={i} className="text-3xl font-black heading-font tracking-[0.5em]">{brand}</span>
            ))}
            {/* Duplicate for seamless scroll */}
            {['NIKE', 'PEPSI', 'PUMA', 'SORARE', 'EA SPORTS', 'ADIDAS', 'HEINEKEN'].map((brand, i) => (
              <span key={i + 20} className="text-3xl font-black heading-font tracking-[0.5em]">{brand}</span>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
