import { motion } from 'framer-motion';
import { useStore } from '../../store';
import type { Project } from '../../types';
import { ArrowUpRight, Eye } from 'lucide-react';

import project1 from '../../assets/projects/code pipeline ci cd.png';
import project2 from '../../assets/projects/docker 1.o.png';
import project3 from '../../assets/projects/voting app.png';

const PROJECTS: Project[] = [
    {
        id: 'project-one',
        title: 'CI/CD Pipeline',
        description: 'Automated CI/CD service using AWS CodePipeline. Integrates with CodeBuild, CodeDeploy, and GitHub for seamless deployment workflows.',
        tags: ['AWS', 'CodePipeline', 'CI/CD', 'GitHub'],
        image: project1,
        github: 'https://github.com/anujbis/Codepipeline-CI-CD'
    },
    {
        id: 'project-two',
        title: 'Docker 1.o',
        description: 'Comprehensive Docker container management, including multi-stage builds, bind mounts, and networking for efficient application deployment.',
        tags: ['Docker', 'Containerization', 'DevOps'],
        image: project2,
        github: 'https://github.com/anujbis/Docker-1.o'
    },
    {
        id: 'project-three',
        title: 'Example Voting App',
        description: 'A microservices-based application using Docker and Kubernetes to demonstrate service communication in distributed systems.',
        tags: ['Kubernetes', 'Microservices', 'Docker', 'Distributed Systems'],
        image: project3,
        github: 'https://github.com/anujbis/Voting-app'
    },
];

const TAG_COLORS: Record<string, string> = {
    AWS: '#ff9900',
    CodePipeline: '#ff0055',
    'CI/CD': '#00e5ff',
    GitHub: '#ffffff',
    Docker: '#00e5ff',
    Containerization: '#b026ff',
    DevOps: '#ff0055',
    Kubernetes: '#b026ff',
    Microservices: '#00e5ff',
    'Distributed Systems': '#ff0055',
};

export const Projects = () => {
    const { setSelectedProject, setModalOpen } = useStore();

    const handleOpenProject = (project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    return (
        <section id="projects" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16 gap-4">
                <div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/70 block mb-3"
                    >
                        // project_logs.db
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-extrabold text-white tracking-tight"
                    >
                        Recent <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-base text-slate-400 mt-4 max-w-lg"
                    >
                        Systems engineered for scalability and precision,
                        wrapped in neon-dark aesthetics.
                    </motion.p>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="hidden md:flex items-center gap-2 text-sm font-mono text-cyan-400 border border-cyan-400/30 px-4 py-2.5 rounded-full transition-all hover:bg-cyan-400/10 hover:border-cyan-400/60 whitespace-nowrap"
                >
                    View all <ArrowUpRight className="w-4 h-4" />
                </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                        onClick={() => handleOpenProject(project)}
                        whileHover={{ y: -8 }}
                        className="group cursor-pointer rounded-2xl overflow-hidden border border-white/5 relative transition-all duration-500"
                        style={{
                            background: 'rgba(5,5,15,0.8)',
                        }}
                    >
                        {/* Image */}
                        <div className="h-48 overflow-hidden relative">
                            {/* Color overlay */}
                            <div
                                className="absolute inset-0 z-10 opacity-60 mix-blend-multiply"
                                style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.3), rgba(176,38,255,0.3))' }}
                            />
                            {/* Scanline */}
                            <div className="absolute inset-0 z-10 pointer-events-none"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)',
                                }}
                            />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ filter: 'saturate(0.3) brightness(0.6)' }}
                            />
                            {/* Hover reveal icon */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 bg-black/50 backdrop-blur-sm">
                                    <Eye className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {/* Neon line top */}
                            <div
                                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'linear-gradient(90deg, transparent, #00e5ff, transparent)' }}
                            />

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                {project.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 rounded-md text-xs font-mono border"
                                        style={{
                                            color: TAG_COLORS[tag] ?? '#94a3b8',
                                            borderColor: `${TAG_COLORS[tag] ?? '#94a3b8'}30`,
                                            background: `${TAG_COLORS[tag] ?? '#94a3b8'}08`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
