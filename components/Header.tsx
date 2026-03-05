
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_ITEMS = [
  { label: 'Pitch', href: '#pitch' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Journey', href: '#journey' },
  { label: 'Mask', href: '#mask' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Foundation', href: '#foundation' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
        ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl'
        : 'bg-black/60 backdrop-blur-sm border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tighter heading-font text-white">
            VO<span className="text-[#D4AF37]">9</span>
          </span>
          <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-light hidden md:block text-white/70">
            Personality In Motion
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {MENU_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#foundation"
            className="hidden md:block bg-[#D4AF37] text-black px-6 py-2 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-all"
          >
            Connect
          </a>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {MENU_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setTimeout(() => setMenuOpen(false), 100)}
                  className="block w-full text-sm uppercase tracking-widest text-white/70 hover:text-[#D4AF37] transition-colors py-3 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#foundation"
                onClick={() => setTimeout(() => setMenuOpen(false), 100)}
                className="block w-full bg-[#D4AF37] text-black px-6 py-4 text-[10px] uppercase font-bold tracking-widest text-center hover:bg-white transition-all mt-2"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
