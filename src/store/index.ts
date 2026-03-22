import { create } from 'zustand';
import type { AppState } from '../types';

export const useStore = create<AppState>((set) => ({
    currentSection: 'home',
    selectedProject: null,
    isModalOpen: false,
    hoverNodeId: null,
    setCurrentSection: (section) => set({ currentSection: section }),
    setSelectedProject: (project) => set({ selectedProject: project }),
    setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
    setHoverNodeId: (id) => set({ hoverNodeId: id }),
}));
