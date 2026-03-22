import { motion, AnimatePresence } from 'framer-motion';
import { X, Github } from 'lucide-react';
import { useStore } from '../../store';
import * as Dialog from '@radix-ui/react-dialog';

export const ProjectModal = () => {
    const { isModalOpen, selectedProject, setModalOpen } = useStore();

    if (!selectedProject) return null;

    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setModalOpen}>
            <AnimatePresence>
                {isModalOpen && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50"
                                style={{
                                    background: 'rgba(0,0,0,0.85)',
                                    backdropFilter: 'blur(12px)',
                                }}
                            />
                        </Dialog.Overlay>

                        <Dialog.Content asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                                className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 outline-none"
                            >
                                <div
                                    className="relative rounded-2xl overflow-hidden border border-white/10"
                                    style={{ background: 'rgba(5,5,15,0.98)' }}
                                >
                                    {/* Top neon line */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-[1px]"
                                        style={{ background: 'linear-gradient(90deg, transparent, #00e5ff, #b026ff, transparent)' }}
                                    />

                                    {/* Close button */}
                                    <Dialog.Close asChild>
                                        <button className="absolute top-5 right-5 z-20 p-2.5 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all">
                                            <X className="w-4 h-4" />
                                        </button>
                                    </Dialog.Close>

                                    <div className="flex flex-col lg:flex-row max-h-[85vh] overflow-y-auto">
                                        {/* Image pane */}
                                        <div className="w-full lg:w-1/2 p-5">
                                            <div className="h-64 lg:h-full w-full rounded-xl overflow-hidden relative">
                                                <div
                                                    className="absolute inset-0 z-10 opacity-50"
                                                    style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(176,38,255,0.15))' }}
                                                />
                                                {/* Scanlines */}
                                                <div className="absolute inset-0 z-10 pointer-events-none"
                                                    style={{
                                                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
                                                    }}
                                                />
                                                <img
                                                    src={selectedProject.image}
                                                    alt={selectedProject.title}
                                                    className="w-full h-full object-cover"
                                                    style={{ filter: 'saturate(0.4) brightness(0.7)' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Info pane */}
                                        <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center gap-6">
                                            <div>
                                                <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 mb-3">
                                                    // project_detail
                                                </p>
                                                <h2 className="text-3xl font-extrabold text-white tracking-tight">{selectedProject.title}</h2>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tags.map(tag => (
                                                    <span key={tag}
                                                        className="px-3 py-1 text-xs font-mono rounded-md border border-cyan-400/20 text-cyan-400 bg-cyan-400/05"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div
                                                className="p-5 rounded-xl border border-white/5 relative"
                                                style={{ background: 'rgba(0,229,255,0.02)' }}
                                            >
                                                <div
                                                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded"
                                                    style={{ background: 'linear-gradient(to bottom, #00e5ff, #b026ff)' }}
                                                />
                                                <p className="text-slate-300 text-sm leading-relaxed pl-4">
                                                    {selectedProject.description}
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <a
                                                    href={selectedProject.github ?? '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
                                                    style={{ background: 'linear-gradient(90deg, #00e5ff, #b026ff)' }}
                                                >
                                                    <Github className="w-4 h-4" /> View Repository
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
};
