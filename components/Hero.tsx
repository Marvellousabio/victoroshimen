
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Hero Background */}
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-[#050505] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/30 z-10" />
        <img
          src="/images/hero_background_1772708175592.png"
          alt="Victor Osimhen — Born To Rise"
          className="w-full h-full object-cover object-center filter contrast-110 brightness-60"
        />
      </motion.div>

      {/* Decorative Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-30 opacity-60" />

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-16 bg-[#D4AF37]/60" />
            <h2 className="text-[#D4AF37] tracking-[0.5em] uppercase text-xs font-bold">
              Victor Osimhen — VO9 Digital Arena
            </h2>
            <div className="h-[1px] w-16 bg-[#D4AF37]/60" />
          </div>
          <h1 className="text-7xl md:text-9xl font-black heading-font tracking-tighter leading-none mb-6">
            BORN TO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">
              RISE
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            From the bustling streets of Olusosun, Lagos — to Napoli, Istanbul, and Paris.
            The striker of a continent, powered by faith, fight, and focus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <a
            href="#pitch"
            className="bg-[#D4AF37] text-black px-8 py-3 text-xs uppercase font-bold tracking-widest hover:bg-white transition-all rounded-sm"
          >
            Explore Career
          </a>
          <a
            href="#foundation"
            className="border border-white/20 text-white px-8 py-3 text-xs uppercase font-bold tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all rounded-sm"
          >
            VOF Foundation
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Scroll to Enter</span>
        </motion.div>
      </div>

      {/* Floating Stats Panel */}
      <motion.div
        className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-6 text-right border-r-2 border-[#D4AF37] pr-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div>
          <div className="text-3xl heading-font font-bold text-white">163+</div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">Career Goals</div>
        </div>
        <div>
          <div className="text-3xl heading-font font-bold text-white">37</div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">Goals in 24/25</div>
        </div>
        <div>
          <div className="text-3xl heading-font font-bold text-[#D4AF37]">2023</div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">Serie A Champion</div>
        </div>
      </motion.div>

      {/* Floating Left Badge */}
      <motion.div
        className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-1 border-l-2 border-[#D4AF37] pl-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Currently At</div>
        <div className="text-xl font-black heading-font">Paris Saint-Germain</div>
        <div className="text-[10px] uppercase tracking-widest text-white/40">2025 Season</div>
      </motion.div>
    </section>
  );
};

export default Hero;
