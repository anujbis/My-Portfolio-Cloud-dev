import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';

const EDUCATION = [
    {
        id: 1,
        degree: 'Bachelor of Technology',
        specialization: 'Computer Science and Engineering',
        institution: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        period: '2023 - Present',
        grade: 'CGPA: 6.0',
        color: '#00e5ff',
        details: [
            'Focus on advanced computing & algorithms',
            'Cloud Computing specialization',
            
        ],
        icon: GraduationCap
    },
    {
        id: 2,
        degree: 'Senior Secondary (CBSE)',
        specialization: 'Science & Mathematics',
        institution: 'LRS DAV Sr Sec School',
        location: 'Abohar, Punjab',
        period: "Apr'22 - Mar'23",
        grade: 'Percentage: 87.6%',
        color: '#b026ff',
        details: [
            'Class XII Board Examination',
            'Major subjects: Physics, Chemistry, Maths',
            
        ],
        icon: School
    },
    {
        id: 3,
        degree: 'Secondary (HBSE)',
        specialization: 'General Academic Studies',
        institution: 'Blooming Child Sr Sec School',
        location: 'Hisar, Haryana',
        period: "Apr'20 - Mar'21",
        grade: 'Percentage: 99%',
        color: '#ff0055',
        details: [
            'Class X Board Examination',
            'Academic Excellence Award recipient',
            
        ],
        icon: BookOpen
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-24 relative z-10 overflow-hidden">
            {/* Background elements for crazy animation */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-mono mb-6">
                        <Sparkles className="w-3 h-3 animate-pulse" />
                        <span>ACADEMIC_INITIALIZATION_SUCCESS</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
                        Learning <span className="text-gradient">Trajectory</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
                        // Sequential data log of educational modules and certifications
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* The Animated Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden">
                        <div className="h-full w-full bg-slate-800/50" />
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"
                        />
                        {/* Moving light pulse */}
                        <motion.div
                            animate={{
                                top: ['-10%', '110%'],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute w-full h-20 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] z-10"
                        />
                    </div>

                    <div className="space-y-24">
                        {EDUCATION.map((edu, index) => {
                            const Icon = edu.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div key={edu.id} className="relative">
                                    {/* Mobile/Default Circle node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 z-20">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.2 }}
                                            className="w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center border-2 border-slate-800 bg-slate-950 shadow-[0_0_25px_rgba(0,0,0,0.5)] group overflow-hidden"
                                            style={{ borderColor: `${edu.color}40` }}
                                        >
                                            <div
                                                className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-gradient-to-br"
                                                style={{ backgroundImage: `linear-gradient(to bottom right, ${edu.color}, transparent)` }}
                                            />
                                            <Icon className="w-4 h-4 md:w-6 md:h-6 relative z-10" style={{ color: edu.color }} />
                                        </motion.div>
                                    </div>

                                    {/* Timeline Card */}
                                    <div className={`flex flex-col md:flex-row items-center w-full gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                            <motion.div
                                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: index * 0.3 }}
                                                className="group relative"
                                            >
                                                {/* Card Outer Container */}
                                                <div
                                                    className="p-1 rounded-[2rem] transition-all duration-500 group-hover:scale-[1.02]"
                                                    style={{ background: `linear-gradient(135deg, ${edu.color}10, transparent 50%, ${edu.color}05)` }}
                                                >
                                                    <div className="bg-slate-950/80 backdrop-blur-xl rounded-[1.8rem] p-8 border border-white/5 relative overflow-hidden shadow-2xl">
                                                        {/* Scanning lines effect */}
                                                        <div className="absolute inset-0 opacity-5 pointer-events-none">
                                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
                                                            <div className="h-full w-full" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${edu.color} 2px, ${edu.color} 4px)` }} />
                                                        </div>

                                                        {/* Animated corner accent */}
                                                        <div
                                                            className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 blur-2xl opacity-20 transition-opacity group-hover:opacity-40"
                                                            style={{ backgroundColor: edu.color }}
                                                        />

                                                        {/* Header */}
                                                        <div className={`mb-6 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                                            <div
                                                                className="flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest mb-3"
                                                                style={{ color: edu.color, background: `${edu.color}15` }}
                                                            >
                                                                <Calendar className="w-3 h-3" />
                                                                {edu.period}
                                                            </div>
                                                            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                                                {edu.degree}
                                                            </h3>
                                                            <div className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-400">
                                                                {edu.specialization}
                                                            </div>
                                                        </div>

                                                        <div className={`space-y-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                                            <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                                                                <School className="w-4 h-4" />
                                                                {edu.institution}
                                                            </div>
                                                            <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                                                                <MapPin className="w-3 h-3" />
                                                                {edu.location}
                                                            </div>

                                                            <div
                                                                className="inline-block px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-white font-mono text-lg font-bold"
                                                                style={{ boxShadow: `0 0 20px ${edu.color}10` }}
                                                            >
                                                                {edu.grade}
                                                            </div>

                                                            <ul className={`list-none space-y-2 pt-4 border-t border-white/5 ${isEven ? 'text-right' : 'text-left'}`}>
                                                                {edu.details.map((detail, dIdx) => (
                                                                    <li key={dIdx} className="text-slate-400 text-sm flex items-center gap-3 justify-start md:justify-end">
                                                                        {!isEven && <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: edu.color }} />}
                                                                        <span className="flex-1">{detail}</span>
                                                                        {isEven && <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: edu.color }} />}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* Subtle glowing bar at bottom */}
                                                        <motion.div
                                                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: '100%' }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                                                            style={{ backgroundImage: `linear-gradient(90deg, transparent, ${edu.color}, transparent)` }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Reflection effect */}
                                                <div className="absolute inset-x-4 -bottom-4 h-8 bg-cyan-400/5 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </motion.div>
                                        </div>
                                        {/* Spacer for other side mapping matching MD-breakpoint above */}
                                        <div className="hidden md:block md:w-[45%]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Massive side text */}
            <div className="absolute -left-20 top-1/2 -rotate-90 text-[10vw] font-black text-white/5 select-none pointer-events-none uppercase tracking-widest whitespace-nowrap">
                Systems Overcharge // Log_04
            </div>
            <div className="absolute -right-20 top-1/2 rotate-90 text-[10vw] font-black text-white/5 select-none pointer-events-none uppercase tracking-widest whitespace-nowrap">
                Neural Education Path
            </div>
        </section>
    );
};
