
import React from 'react';
import { motion } from 'framer-motion';

const MaskSection: React.FC = () => {
  return (
    <section id="mask" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold heading-font mb-8">
            Behind <span className="text-[#D4AF37]">The Mask</span>
          </h2>
          <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
            <p>
              To the world, it's a protective gear. To Victor, it's armor. It symbolizes the resilience required to survive the toughest tackles and the hardest roads.
            </p>
            <p>
              "I wear it to remind myself of where I come from. Every time I strap it on, I’m not just Victor the striker, I’m the hope of a continent."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {['FAITH', 'FIGHT', 'FOCUS'].map((word) => (
              <div key={word} className="border border-white/10 p-4 text-center group hover:border-[#D4AF37] transition-all">
                <span className="text-xs tracking-[0.3em] font-bold group-hover:text-[#D4AF37]">{word}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-[#D4AF37]/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-10 w-4/5 h-4/5 bg-gradient-to-br from-zinc-800 to-black rounded-3xl p-1 shadow-2xl overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/mask-side/800/800?grayscale" 
              alt="Victor Mask"
              className="w-full h-full object-cover filter brightness-75 mix-blend-overlay"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
               <span className="text-7xl font-black heading-font opacity-20">VO9</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaskSection;
