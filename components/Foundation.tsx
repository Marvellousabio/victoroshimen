
import React from 'react';
import { motion } from 'framer-motion';

const IMPACT_ITEMS = [
  {
    title: 'Education',
    desc: 'Building schools and providing full scholarships for underprivileged kids across Lagos and Delta State.',
    icon: '🎓',
    stat: '5,000+',
    statLabel: 'Students Supported'
  },
  {
    title: 'Healthcare',
    desc: 'Funding medical clinics, surgical equipment, and clean water infrastructure in underserved rural communities.',
    icon: '🏥',
    stat: '12',
    statLabel: 'Clinics Built'
  },
  {
    title: 'Sports',
    desc: 'Running youth football academies with professional coaching, kits, boots, and a pathway to professional football.',
    icon: '⚽',
    stat: '20',
    statLabel: 'Academies Operating'
  },
  {
    title: 'Community Aid',
    desc: 'Direct cash transfers, food distribution, and relief programs for the most vulnerable families in Lagos.',
    icon: '🤝',
    stat: '15,000+',
    statLabel: 'Families Helped'
  },
];

const Foundation: React.FC = () => {
  return (
    <section id="foundation" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold">Giving Back</span>
            </div>
            <h2 className="text-5xl font-bold heading-font mb-3">VOF FOUNDATION</h2>
            <p className="text-[#D4AF37] tracking-widest text-sm font-bold">SOVEREIGNTY THROUGH SERVICE</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#"
              className="border border-white/20 px-8 py-3 uppercase text-xs tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all inline-block"
            >
              Join the Movement
            </a>
          </motion.div>
        </div>

        {/* Mission statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-l-2 border-[#D4AF37] pl-8 mb-16 max-w-3xl"
        >
          <p className="text-white/60 text-xl font-light leading-relaxed italic">
            "I want every child in Nigeria to know that where you start doesn't determine where you finish.
            The foundation is my way of giving them that ladder — the ladder I never had."
          </p>
          <footer className="mt-4 text-[#D4AF37] text-xs uppercase tracking-widest font-bold">
            — Victor Osimhen, Founder
          </footer>
        </motion.blockquote>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900/50 p-8 border border-white/5 rounded-2xl hover:border-[#D4AF37]/50 transition-all group"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold heading-font mb-3 text-white group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
              <p className="text-white/50 mb-8 font-light leading-relaxed text-sm">{item.desc}</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[#D4AF37] font-black text-2xl heading-font">{item.stat}</span>
                <span className="block text-[10px] uppercase tracking-widest text-white/30 mt-1">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundation;
