
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tighter heading-font text-white">
            VO<span className="text-[#D4AF37]">9</span>
          </span>
          <div className="h-4 w-[1px] bg-white/20 hidden md:block" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-light hidden md:block">
            Personality In Motion
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {['Pitch', 'Journey', 'Mask', 'Foundation'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="bg-[#D4AF37] text-black px-6 py-2 text-[10px] uppercase font-bold tracking-widest hover:bg-white transition-all">
          Connect
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
