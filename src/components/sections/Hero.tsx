import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

const TYPING_STRINGS = [
    'Cloud Developer',
    'DevOps Engineer',
    'AWS Solutions Associate',
    'Full-Stack Developer',
];

export const Hero = () => {
    const [displayed, setDisplayed] = useState('');
    const [strIdx, setStrIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = TYPING_STRINGS[strIdx];
        let timer: ReturnType<typeof setTimeout>;

        if (!deleting && charIdx < current.length) {
            timer = setTimeout(() => setCharIdx(c => c + 1), 80);
        } else if (!deleting && charIdx === current.length) {
            timer = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && charIdx > 0) {
            timer = setTimeout(() => setCharIdx(c => c - 1), 40);
        } else if (deleting && charIdx === 0) {
            setDeleting(false);
            setStrIdx(s => (s + 1) % TYPING_STRINGS.length);
        }

        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(timer);
    }, [charIdx, deleting, strIdx]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">

            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.015) 2px, rgba(0,229,255,0.015) 4px)',
                }}
            />

            {/* Grid floor perspective */}
            <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,229,255,0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,229,255,0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    transform: 'perspective(400px) rotateX(60deg)',
                    transformOrigin: 'bottom',
                    maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
                }}
            />

            {/* Floating glow orbs */}
            <motion.div
                animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.12) 0%, transparent 70%)' }}
            />
            <motion.div
                animate={{ y: [0, 25, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(176,38,255,0.12) 0%, transparent 70%)' }}
            />

            <div className="container mx-auto px-6 z-10">
                <div className="max-w-5xl mx-auto text-center space-y-8">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-sm font-mono text-cyan-400"
                    >
                        <Terminal className="w-4 h-4" />
                        <span>// system online — welcome to the grid</span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-1.5 h-4 bg-cyan-400 inline-block"
                        />
                    </motion.div>

                    {/* Main heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-none">
                            Anuj
                            <br />
                            <span className="text-transparent bg-clip-text"
                                style={{ backgroundImage: 'linear-gradient(90deg, #00e5ff, #b026ff, #ff0055)' }}>
                                Bishnoi
                            </span>
                        </h1>
                    </motion.div>

                    {/* Typing sub-title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="flex items-center justify-center gap-3 font-mono text-2xl text-slate-300"
                    >
                        <Cpu className="w-6 h-6 text-cyan-400" />
                        <span>{displayed}</span>
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-0.5 h-7 bg-cyan-400 inline-block"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Designing high-performance cloud architectures that dive deep into a neon-lit cyberpunk metropolis.
                        Forging robust and scalable digital infrastructures with precision engineering.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                    >
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-300 rounded-full overflow-hidden"
                            style={{ background: 'linear-gradient(90deg, #00e5ff, #b026ff)' }}
                        >
                            <motion.span
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'linear-gradient(90deg, #b026ff, #00e5ff)' }}
                            />
                            <span className="relative flex items-center gap-2">
                                View Projects
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-cyan-400 border border-cyan-400/50 rounded-full transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,229,255,0.3)]"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Stat counters */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex items-center justify-center gap-12 pt-8 border-t border-white/5"
                    >
                        {[
                            { label: 'Projects', value: '10+' },
                            { label: 'Certifications', value: '5' },
                        ].map(stat => (
                            <div key={stat.label} className="text-center">
                                <div className="text-2xl font-bold text-cyan-400 font-mono">{stat.value}</div>
                                <div className="text-xs text-slate-500 mt-1 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
