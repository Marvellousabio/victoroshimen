
import React from 'react';
import { motion } from 'framer-motion';

const MaskSection: React.FC = () => {
  return (
    <section id="mask" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Concrete texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none" />
      {/* gold radial glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#D4AF37]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[2px] w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold">The Symbol</span>
          </div>
          <h2 className="text-5xl font-bold heading-font mb-8">
            Behind <span className="text-[#D4AF37]">The Mask</span>
          </h2>
          <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
            <p>
              To the world, it's a protective mask — medical-grade carbon fiber fitted after a fractured orbital bone. To Victor, it became armour. A statement—not of vulnerability, but of indestructible will.
            </p>
            <p>
              "I wear it to remind myself of where I come from. Every time I strap it on, I'm not just Victor the striker. I'm the hope of a continent. You cannot stop what's destined."
            </p>
            <p className="text-white/40 text-sm italic border-l-2 border-[#D4AF37]/40 pl-4">
              March 2022 — After fracturing his orbital socket, Osimhen returned to play 3 weeks later, fully masked, scored twice, and became legend.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { word: 'FAITH', desc: 'God is the source' },
              { word: 'FIGHT', desc: 'Never surrender' },
              { word: 'FOCUS', desc: 'Eyes on the goal' }
            ].map(({ word, desc }) => (
              <div key={word} className="border border-white/10 p-4 text-center group hover:border-[#D4AF37] transition-all rounded-sm cursor-default">
                <span className="text-xs tracking-[0.3em] font-bold group-hover:text-[#D4AF37] transition-colors block mb-1">{word}</span>
                <span className="text-[9px] text-white/30 tracking-widest uppercase">{desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image panel */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative aspect-square flex items-center justify-center"
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-[#D4AF37]/8 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            initial={{ rotate: -8, scale: 0.85, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="z-10 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10"
          >
            <img
              src="/images/mask_closeup_1772708642000.png"
              alt="Victor Osimhen's protective mask — a symbol of resilience"
              className="w-full h-full object-cover filter brightness-90"
            />
            {/* Overlay with VO9 watermark */}
            <div className="absolute inset-0 flex items-end justify-end p-8 bg-gradient-to-t from-black/80 via-transparent to-transparent">
              <span className="text-6xl font-black heading-font text-white/10">VO9</span>
            </div>
          </motion.div>

          {/* Corner accent lines */}
          <div className="absolute top-0 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/60" />
          <div className="absolute bottom-0 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default MaskSection;
