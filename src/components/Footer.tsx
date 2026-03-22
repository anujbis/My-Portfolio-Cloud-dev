import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Zap } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contact" className="py-20 relative z-10 overflow-hidden">
            {/* Top neon border */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #00e5ff 30%, #b026ff 70%, transparent)' }}
            />

            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,229,255,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,229,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Glow orbs */}
            <div className="absolute bottom-0 left-1/4 w-64 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
            />
            <div className="absolute bottom-0 right-1/4 w-64 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(176,38,255,0.06) 0%, transparent 70%)' }}
            />

            <div className="container mx-auto px-6 text-center max-w-4xl relative">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                        style={{ background: 'linear-gradient(135deg, #00e5ff, #b026ff)' }}
                    >
                        <Zap className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-lg font-bold">
                        <span className="text-cyan-400">{'{'}</span>
                        Anuj<span className="text-purple-400">.Dev</span>
                        <span className="text-cyan-400">{'}'}</span>
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-extrabold text-white mb-4"
                >
                    Let's Build the{' '}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #00e5ff, #b026ff)' }}>
                        Future
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-400 mb-12 font-mono text-sm"
                >
                    // system ready — open to new missions
                </motion.p>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center gap-5 mb-14"
                >
                    {[
                        { Icon: Github, href: 'https://github.com/anujbis', label: 'GitHub', color: '#ffffff' },
                        { Icon: Linkedin, href: 'https://www.linkedin.com/in/anuj-bishnoi4/', label: 'LinkedIn', color: '#00e5ff' },
                        { Icon: Mail, href: 'mailto:bishnoianuj129@gmail.com', label: 'Email', color: '#b026ff' },
                    ].map(({ Icon, href, label, color }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="group p-4 rounded-2xl border border-white/5 text-slate-400 transition-all duration-300"
                            style={{ background: 'rgba(5,5,15,0.8)' }}
                            title={label}
                        >
                            <Icon
                                className="w-5 h-5 transition-colors duration-300"
                                style={{ color: 'currentColor' }}
                                onMouseEnter={e => (e.currentTarget.style.color = color)}
                                onMouseLeave={e => (e.currentTarget.style.color = '')}
                            />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
                    <span>&copy; {new Date().getFullYear()} Anuj Bishnoi. Forging the digital frontier.</span>
                    <span
                        className="flex items-center gap-1.5"
                        style={{ color: '#00e5ff88' }}
                    >
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block"
                        />
                        All systems operational
                    </span>
                </div>
            </div>
        </footer>
    );
};
