
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold heading-font mb-4">The Journey</h2>
          <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-white/40 max-w-xl mx-auto font-light">
            Six chapters of a story that was never supposed to happen — but did, because he dared to believe.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37]/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-28">
            {TIMELINE.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    {/* Year Badge */}
                    <div className="absolute top-5 left-5 bg-[#D4AF37] text-black px-4 py-1.5 text-sm font-black rounded-sm tracking-widest heading-font">
                      {event.year}
                    </div>
                    {/* Location chip */}
                    <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-[10px] uppercase tracking-widest text-white/70 border border-white/10">
                      📍 {event.location}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`w-full md:w-1/2 relative ${index % 2 === 0 ? 'md:text-left md:pr-16' : 'md:text-right md:pl-16'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-3 inset-x-0">
                    <div
                      className={`absolute top-0 w-4 h-4 rounded-full border-2 border-[#D4AF37] bg-[#050505] ${index % 2 === 0 ? 'right-0 translate-x-1/2 mr-[-2rem]' : 'left-0 -translate-x-1/2 ml-[-2rem]'
                        }`}
                    >
                      <div className="absolute inset-1 rounded-full bg-[#D4AF37]" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold heading-font mb-2 text-white">{event.title}</h3>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-6 font-bold">
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
