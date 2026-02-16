
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold heading-font mb-4">The Journey</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

          <div className="space-y-24">
            {TIMELINE.map((event, index) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-6 left-6 bg-[#D4AF37] text-black px-4 py-1 text-sm font-bold rounded">
                      {event.year}
                    </div>
                  </div>
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-3xl font-bold heading-font mb-2 text-white">{event.title}</h3>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-widest mb-6 font-semibold">
                    {event.location}
                  </p>
                  <p className="text-white/60 leading-relaxed font-light text-lg">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
