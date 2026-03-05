
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUOTES } from '../constants';

const QuotesSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % QUOTES.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + QUOTES.length) % QUOTES.length);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Decorative: large VO9 watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-[20vw] font-black heading-font text-white/[0.015]">VO9</span>
            </div>

            {/* Big decorative quote mark */}
            <div className="absolute top-12 left-12 text-[12rem] leading-none font-serif text-[#D4AF37]/10 select-none pointer-events-none">
                "
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-[1px] w-12 bg-[#D4AF37]/60" />
                        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.5em] font-bold">His Words</span>
                        <div className="h-[1px] w-12 bg-[#D4AF37]/60" />
                    </div>
                    <h2 className="text-5xl font-bold heading-font">In His Own Voice</h2>
                </motion.div>

                {/* Quote display */}
                <div className="min-h-[200px] flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
                                "{QUOTES[activeIndex].text}"
                            </p>
                            <span className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold">
                                {QUOTES[activeIndex].context}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center justify-center gap-8">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-white/60 text-xl"
                    >
                        ‹
                    </button>

                    {/* Progress dots */}
                    <div className="flex gap-2">
                        {QUOTES.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`transition-all duration-300 rounded-full ${i === activeIndex
                                        ? 'bg-[#D4AF37] w-6 h-2'
                                        : 'bg-white/20 w-2 h-2 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-white/60 text-xl"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default QuotesSection;
