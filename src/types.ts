export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
    image?: string;
}

export interface AppState {
    currentSection: string;
    selectedProject: Project | null;
    isModalOpen: boolean;
    hoverNodeId: string | null;
    setCurrentSection: (section: string) => void;
    setSelectedProject: (project: Project | null) => void;
    setModalOpen: (isOpen: boolean) => void;
    setHoverNodeId: (id: string | null) => void;
}
