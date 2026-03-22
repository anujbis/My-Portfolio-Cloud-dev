import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const EVENTS = [
    {
        year: '2023 - Present',
        icon: GraduationCap,
        color: '#00e5ff',
        title: 'B.Tech - Computer Science & Engineering',
        company: 'Lovely Professional University',
        desc: 'CGPA: 6.0. Focus on advanced computing, algorithms, and cloud technologies.',
    },
    {
        year: '2022 - 2023',
        icon: GraduationCap,
        color: '#b026ff',
        title: 'Senior Secondary (CBSE)',
        company: 'LRS DAV Sr Sec School',
        desc: 'Completed XII grade with 61% percentage. Specialized in Science and Mathematics.',
    },
    {
        year: '2020 - 2021',
        icon: GraduationCap,
        color: '#ff0055',
        title: 'Secondary (HBSE)',
        company: 'Blooming Child Sr Sec School',
        desc: 'Completed X grade with 99% percentage. Academic excellence in core subjects.',
    },
];

export const Timeline = () => {
    return (
        <section id="experience" className="py-24 relative z-10 px-6 container mx-auto">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 block mb-4">
                        // timeline.log
                    </span>
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">
                        System <span className="text-gradient">Timeline</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Central glowing line */}
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                        style={{
                            background: 'linear-gradient(to bottom, rgba(0,229,255,0), rgba(0,229,255,0.5) 20%, rgba(176,38,255,0.5) 80%, rgba(255,0,85,0))',
                            filter: 'blur(1px)',
                        }}
                    />
                    <div
                        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                        style={{
                            background: 'linear-gradient(to bottom, transparent, #00e5ff 20%, #b026ff 80%, transparent)',
                        }}
                    />

                    <div className="space-y-16">
                        {EVENTS.map((event, i) => {
                            const Icon = event.icon;
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
                                    className={`flex items-center gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    {/* Card */}
                                    <div className="w-5/12">
                                        <motion.div
                                            whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${event.color}20` }}
                                            className="p-5 rounded-2xl border border-white/5 relative overflow-hidden"
                                            style={{ background: 'rgba(5,5,15,0.8)' }}
                                        >
                                            {/* Top accent */}
                                            <div
                                                className="absolute top-0 left-0 right-0 h-[1px]"
                                                style={{ background: `linear-gradient(90deg, transparent, ${event.color}, transparent)` }}
                                            />
                                            <span
                                                className="text-xs font-mono font-bold mb-3 block"
                                                style={{ color: event.color }}
                                            >
                                                {event.year}
                                            </span>
                                            <h3 className="text-base font-bold text-white mb-1">{event.title}</h3>
                                            <h4
                                                className="text-sm font-mono mb-3"
                                                style={{ color: event.color + 'aa' }}
                                            >
                                                {event.company}
                                            </h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{event.desc}</p>
                                        </motion.div>
                                    </div>

                                    {/* Centre node */}
                                    <div className="w-2/12 flex justify-center">
                                        <motion.div
                                            animate={{
                                                boxShadow: [
                                                    `0 0 0px ${event.color}`,
                                                    `0 0 20px ${event.color}`,
                                                    `0 0 0px ${event.color}`,
                                                ],
                                            }}
                                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center z-10"
                                            style={{
                                                borderColor: event.color,
                                                background: '#050505',
                                            }}
                                        >
                                            <Icon className="w-4 h-4" style={{ color: event.color }} />
                                        </motion.div>
                                    </div>

                                    {/* Empty side */}
                                    <div className="w-5/12" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
