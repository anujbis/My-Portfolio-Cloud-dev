import { motion } from 'framer-motion';
import { Shield, Braces, Server, Cloud } from 'lucide-react';

const SKILL_CATEGORIES = [
    {
        id: 'cloud',
        icon: Cloud,
        title: 'Cloud & Infrastructure',
        color: '#00e5ff',
        items: ['AWS', 'Apache CloudStack', 'Linux', 'GCP'],
    },
    {
        id: 'devops',
        icon: Server,
        title: 'DevOps & Tools',
        color: '#b026ff',
        items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'CI/CD'],
    },
    {
        id: 'backend',
        icon: Shield,
        title: 'Backend & Microservices',
        color: '#ff0055',
        items: ['Java Spring Boot', 'REST APIs', 'Node.js', 'Python'],
    },
    {
        id: 'languages',
        icon: Braces,
        title: 'Languages & Databases',
        color: '#00e5ff',
        items: ['C++', 'Java', 'Python', 'C', 'MySQL', 'PostgreSQL'],
    },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-32 relative z-10 px-6 max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 block mb-4">
                        // technology stack
                    </span>
                    <h2 className="text-5xl font-extrabold text-white tracking-tight">
                        Technical <span className="text-gradient">Expertise</span>
                    </h2>
                    <p className="text-lg text-slate-400 mt-5 max-w-xl mx-auto font-light leading-relaxed">
                        An ecosystem of battle-tested technologies, woven into a seamless
                        high-performance digital infrastructure.
                    </p>
                </motion.div>
            </div>

            {/* Neon connecting lines */}
            <div className="absolute inset-0 z-[-1] pointer-events-none opacity-30 hidden md:block">
                <svg className="w-full h-full" fill="none">
                    <defs>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0" />
                            <stop offset="50%" stopColor="#00e5ff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#b026ff" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M200 150 Q 500 50, 800 150" stroke="url(#lineGrad)" strokeWidth="1" />
                    <path d="M200 350 Q 500 450, 800 350" stroke="url(#lineGrad)" strokeWidth="1" />
                    <path d="M500 50 L 500 450" stroke="url(#lineGrad)" strokeWidth="1" />
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: `0 0 30px ${category.color}30`,
                            }}
                            className="glass-card p-8 rounded-2xl border border-white/5 transition-all duration-500 group cursor-default relative overflow-hidden"
                        >
                            {/* Corner accent */}
                            <div
                                className="absolute top-0 right-0 w-20 h-20 opacity-20 rounded-bl-full"
                                style={{ background: `radial-gradient(circle at top right, ${category.color}, transparent)` }}
                            />

                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        background: `${category.color}18`,
                                        border: `1px solid ${category.color}40`,
                                        boxShadow: `0 0 20px ${category.color}20`,
                                    }}
                                >
                                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                                </div>
                                <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, i) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 + i * 0.05, duration: 0.3 }}
                                        className="px-3 py-1.5 rounded-full text-sm font-mono border transition-all duration-300"
                                        style={{
                                            color: category.color,
                                            borderColor: `${category.color}30`,
                                            background: `${category.color}08`,
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
