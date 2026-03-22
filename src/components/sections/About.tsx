import { motion } from 'framer-motion';
import { Code2, Globe } from 'lucide-react';
import avatar from '../../assets/hero.png';

export const About = () => {
    return (
        <section id="about" className="py-32 relative z-10 px-6 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16"
            >
                {/* Avatar column */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative">
                        {/* Outer spinning ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute -inset-4 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #00e5ff, #b026ff, #ff0055, #00e5ff)',
                                filter: 'blur(2px)',
                                opacity: 0.6,
                            }}
                        />
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 30px rgba(0,229,255,0.3)',
                                    '0 0 60px rgba(176,38,255,0.4)',
                                    '0 0 30px rgba(0,229,255,0.3)',
                                ],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="relative p-1.5 rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80"
                            style={{ background: '#0a0a0f', zIndex: 1 }}
                        >
                            <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                                <img
                                    src={avatar}
                                    alt="Anuj Bishnoi"
                                    className="object-cover w-full h-full"
                                    style={{ filter: 'saturate(0.8) brightness(0.9)' }}
                                />
                            </div>
                        </motion.div>

                        {/* Floating badges */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-3 -right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold text-black"
                            style={{ background: 'linear-gradient(90deg, #00e5ff, #b026ff)' }}
                        >
                            <Globe className="w-3 h-3" /> Cloud Native
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                            className="absolute -bottom-3 -left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold border border-purple-400/50 text-purple-300"
                            style={{ background: 'rgba(176,38,255,0.1)' }}
                        >
                            <Code2 className="w-3 h-3" /> DevOps
                        </motion.div>
                    </div>
                </div>

                {/* Content column */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 block mb-3">
                            // identity.sys
                        </span>
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            About <span className="text-gradient">Me</span>
                        </h2>
                    </div>

                    <div
                        className="p-6 rounded-2xl space-y-5 border border-white/5 relative overflow-hidden"
                        style={{ background: 'rgba(5,5,15,0.6)' }}
                    >
                        {/* Accent line */}
                        <div
                            className="absolute left-0 top-6 bottom-6 w-0.5 rounded"
                            style={{ background: 'linear-gradient(to bottom, #00e5ff, #b026ff)' }}
                        />
                        <p className="text-base text-slate-300 leading-relaxed pl-4">
                            I am a Cloud Developer and DevOps Engineer orchestrating high-performance infrastructures across modern computing platforms.
                            My work focuses on building scalable, resilient, and secure systems that thrive in the digital frontier.
                        </p>
                        <p className="text-base text-slate-400 leading-relaxed pl-4">
                            With expertise in AWS, Docker, and Kubernetes, I bridge the gap between complex backend systems and seamless user experiences, ensuring every deployment is precision-engineered for the future.
                        </p>
                    </div>

                    {/* Info grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: 'Location', value: 'Punjab, India' },
                            { label: 'Status', value: 'Available' },
                            { label: 'Focus', value: 'Cloud Architecture' },
                            { label: 'Mode', value: 'Dark Theme 🌑' },
                        ].map(info => (
                            <div
                                key={info.label}
                                className="rounded-xl p-3 border border-white/5 text-left"
                                style={{ background: 'rgba(0,229,255,0.03)' }}
                            >
                                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">{info.label}</p>
                                <p className="text-sm font-semibold text-white mt-1">{info.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
