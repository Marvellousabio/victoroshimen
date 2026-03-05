
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';

const AchievementsSection: React.FC = () => {
    return (
        <section id="achievements" className="py-24 bg-gradient-to-b from-[#050505] to-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold">The Record Books</span>
                    </div>
                    <h2 className="text-5xl font-bold heading-font mb-4">Achievement Wall</h2>
                    <p className="text-white/40 max-w-xl font-light">
                        Every trophy, every title, every record — the evidence of a career built on unshakeable self-belief.
                    </p>
                </motion.div>

                {/* Achievement Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {ACHIEVEMENTS.map((ach, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.6 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group relative bg-white/3 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/60 transition-all duration-300 cursor-default overflow-hidden"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                            {/* Year badge */}
                            <div className="absolute top-4 right-4 text-[9px] font-black tracking-widest text-[#D4AF37]/60 heading-font">
                                {ach.year}
                            </div>

                            <div className="text-4xl mb-4">{ach.icon}</div>
                            <h3 className="text-sm font-bold heading-font text-white group-hover:text-[#D4AF37] transition-colors leading-tight mb-2">
                                {ach.award}
                            </h3>
                            <p className="text-[10px] uppercase tracking-widest text-white/30 font-light">{ach.org}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Trophy count summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-12 border-t border-white/5 flex flex-wrap gap-12 justify-center text-center"
                >
                    {[
                        { label: 'Individual Awards', value: '7+' },
                        { label: 'Club Trophies', value: '3+' },
                        { label: 'International Honors', value: '5+' },
                        { label: 'Records Broken', value: '8+' },
                    ].map(({ label, value }) => (
                        <div key={label}>
                            <div className="text-4xl font-black heading-font text-[#D4AF37]">{value}</div>
                            <div className="text-[10px] uppercase tracking-widest text-white/30 mt-1">{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AchievementsSection;
