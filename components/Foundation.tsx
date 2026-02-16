
import React from 'react';
import { motion } from 'framer-motion';

const Foundation: React.FC = () => {
  return (
    <section id="foundation" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-bold heading-font mb-4">VOF FOUNDATION</h2>
            <p className="text-[#D4AF37] tracking-widest text-sm font-bold">SOVEREIGNTY THROUGH SERVICE</p>
          </div>
          <button className="border border-white/20 px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
            Join the Movement
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Education", 
              desc: "Building schools and providing scholarships for underprivileged kids in Lagos.", 
              icon: "🎓",
              stat: "5,000+ Students"
            },
            { 
              title: "Healthcare", 
              desc: "Improving medical facilities and access to clean water in rural communities.", 
              icon: "🏥",
              stat: "12 Clinics Built"
            },
            { 
              title: "Sports", 
              desc: "Youth football academies providing boots, kits, and professional training.", 
              icon: "⚽",
              stat: "20 Academies"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 p-8 border border-white/5 rounded-2xl hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold heading-font mb-4 text-white">{item.title}</h3>
              <p className="text-white/50 mb-8 font-light leading-relaxed">{item.desc}</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[#D4AF37] font-bold text-xl">{item.stat}</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/30 mt-1">Impact to Date</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundation;
