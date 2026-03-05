
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';

const CATEGORY_COLORS: Record<string, string> = {
    'Celebration': 'text-[#D4AF37] border-[#D4AF37]/40 bg-[#D4AF37]/10',
    'Foundation': 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
    'International': 'text-green-400 border-green-400/40 bg-green-400/10',
    'Training': 'text-blue-400 border-blue-400/40 bg-blue-400/10',
};

const GallerySection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="gallery" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[2px] w-8 bg-[#D4AF37]" />
                        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold">The Visual Story</span>
                    </div>
                    <h2 className="text-5xl font-bold heading-font mb-4">Gallery</h2>
                    <p className="text-white/40 max-w-xl font-light">
                        Frames that capture the essence of Victor Osimhen — on and off the pitch. A life lived at full intensity.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {GALLERY_IMAGES.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${i === 0 || i === 5 ? 'sm:col-span-2 lg:col-span-1' : ''
                                } ${i === 2 ? 'lg:row-span-2' : ''}`}
                            style={{ aspectRatio: i === 2 ? '9/16' : '4/3' }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className={`w-full h-full object-cover transition-all duration-700 ${hoveredIndex === i ? 'scale-110 grayscale-0' : 'scale-100 grayscale'
                                    }`}
                            />

                            {/* Always-visible subtle gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            {/* Hover overlay */}
                            <div
                                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />

                            {/* Category badge */}
                            <div
                                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold border transition-all duration-300 ${CATEGORY_COLORS[img.category]
                                    } ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}
                            >
                                {img.category}
                            </div>

                            {/* Caption */}
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-300 ${hoveredIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                            >
                                <p className="text-white text-sm font-light leading-snug">{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
