import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { useEffect, useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import cv from '../assets/Anuj CV.pdf';

const LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certs' },
];

export const Navigation = () => {
    const { currentSection } = useStore();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6 py-3 
                    ${scrolled
                        ? 'bg-black/70 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_0_30px_rgba(0,229,255,0.05)]'
                        : 'bg-transparent'
                    }`}
            >
                {/* Top neon line */}
                {scrolled && (
                    <motion.div
                        layoutId="nav-top-line"
                        className="absolute top-0 left-0 right-0 h-[1px]"
                        style={{ background: 'linear-gradient(90deg, transparent, #00e5ff, #b026ff, transparent)' }}
                    />
                )}

                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                            style={{ background: 'linear-gradient(135deg, #00e5ff, #b026ff)' }}
                        >
                            <Zap className="w-5 h-5" />
                        </motion.span>
                        <span className="hidden sm:inline-block font-mono">
                            <span className="text-cyan-400">{'{'}</span>
                            Anuj<span className="text-purple-400">.Dev</span>
                            <span className="text-cyan-400">{'}'}</span>
                        </span>
                    </div>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {LINKS.map(link => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    className={`relative px-4 py-2 rounded-full text-sm font-mono font-medium transition-all duration-300
                                        ${currentSection === link.id
                                            ? 'text-cyan-400'
                                            : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {currentSection === link.id && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full z-[-1] border border-cyan-400/40"
                                            style={{ background: 'rgba(0,229,255,0.08)' }}
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Hire me + mobile toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-black text-sm font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
                            style={{ background: 'linear-gradient(90deg, #00e5ff, #b026ff)' }}
                        >
                            Hire Me
                        </a>
                        <button
                            className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileOpen(v => !v)}
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-16 inset-x-4 z-40 rounded-2xl border border-cyan-400/20 bg-black/90 backdrop-blur-xl p-6 flex flex-col gap-2"
                    >
                        {LINKS.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setMobileOpen(false)}
                                className={`px-4 py-3 rounded-xl text-sm font-mono font-medium transition-all
                                    ${currentSection === link.id
                                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
