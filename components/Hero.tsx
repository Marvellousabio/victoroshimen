
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Visual */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://picsum.photos/seed/osimhen-hero/1920/1080?grayscale" 
          alt="Victor Osimhen Action"
          className="w-full h-full object-cover filter contrast-125 brightness-50"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-[#D4AF37] tracking-[0.4em] uppercase text-sm mb-4 font-semibold">
            The Digital Arena
          </h2>
          <h1 className="text-7xl md:text-9xl font-black heading-font tracking-tighter leading-none mb-6">
            BORN TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">RISE</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            From the bustling streets of Lagos to the roar of the Stadio Diego Armando Maradona.
            The striker of the people, powered by faith.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40">Scroll to Enter</span>
        </motion.div>
      </div>

      {/* Stats Quick View (Floating) */}
      <motion.div 
        className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-6 text-right border-r-2 border-[#D4AF37] pr-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div>
          <div className="text-3xl heading-font font-bold">100+</div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">Career Goals</div>
        </div>
        <div>
          <div className="text-3xl heading-font font-bold">2023</div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">Serie A Champion</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
