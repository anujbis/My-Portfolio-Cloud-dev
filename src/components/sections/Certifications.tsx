import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

import cert1 from '../../assets/certificates/DSAa.png';
import cert2 from '../../assets/certificates/java.png';
import cert3 from '../../assets/certificates/Mastering c language.jpeg';
import cert4 from '../../assets/certificates/DSA C++.png';

const CERTIFICATIONS = [
    {
        id: 1,
        title: 'Data Structures and Algorithms',
        issuer: 'LPU - iAmNeo',
        date: '2024',
        color: '#00e5ff',
        icon: '📊',
        image: cert1,
    },
    {
        id: 2,
        title: 'Java Programming',
        issuer: 'LPU - iAmNeo',
        date: '2024',
        color: '#b026ff',
        icon: '☕',
        image: cert2,
    },
    {
        id: 3,
        title: 'Mastering in C: Basic to Beyond',
        issuer: 'CSE Pathshala',
        date: '2023',
        color: '#ff0055',
        icon: '💻',
        image: cert3,
    },
    {
        id: 4,
        title: 'DSA using C++',
        issuer: 'LPU - CPE',
        date: '2024',
        color: '#00e5ff',
        icon: '⚙️',
        image: cert4,
    },
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative z-10 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 block mb-4">
                    // achievements.sys
                </span>
                <h2 className="text-5xl font-extrabold text-white tracking-tight">
                    Achievements &amp; <span className="text-gradient">Certs</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {CERTIFICATIONS.map((cert, i) => (
                    <motion.a
                        key={cert.id}
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{
                            y: -10,
                            boxShadow: `0 0 50px ${cert.color}20`,
                        }}
                        className="group rounded-2xl border border-white/5 relative overflow-hidden transition-all duration-500 cursor-pointer block"
                        style={{ background: 'rgba(5,5,15,0.9)' }}
                    >
                        {/* Certificate Preview */}
                        <div className="h-64 overflow-hidden relative border-b border-white/5">
                            {/* Color overlay matching brand */}
                            <div
                                className="absolute inset-0 z-10 opacity-30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-10"
                                style={{ background: `linear-gradient(135deg, ${cert.color}, transparent)` }}
                            />
                            {/* Scanline effect */}
                            <div className="absolute inset-0 z-10 pointer-events-none opacity-20"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                                }}
                            />
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* View hint overlay */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white text-xs font-mono font-bold tracking-widest uppercase">
                                    Click to View
                                </div>
                            </div>

                            {/* Floating icon */}
                            <div
                                className="absolute bottom-4 right-4 z-30 w-12 h-12 rounded-xl flex items-center justify-center text-xl backdrop-blur-md"
                                style={{
                                    background: `${cert.color}20`,
                                    border: `1px solid ${cert.color}40`,
                                    boxShadow: `0 0 20px ${cert.color}30`,
                                }}
                            >
                                {cert.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Top glow line revealed on hover */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
                            />

                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm font-mono text-slate-400 flex items-center gap-2">
                                        <Award className="w-4 h-4" style={{ color: cert.color }} />
                                        {cert.issuer}
                                    </p>
                                </div>
                                <span
                                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full"
                                    style={{
                                        color: cert.color,
                                        background: `${cert.color}15`,
                                        border: `1px solid ${cert.color}30`,
                                    }}
                                >
                                    <Star className="w-3 h-3" /> {cert.date}
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
