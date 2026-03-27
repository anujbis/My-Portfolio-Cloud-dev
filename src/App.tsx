import { useEffect } from 'react';
import { useStore } from './store';
import { CloudBackground } from './components/CloudBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Education } from './components/sections/Education';
import { ProjectModal } from './components/sections/ProjectModal';
import { Footer } from './components/Footer';

function App() {
  const { setCurrentSection } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setCurrentSection]);

  return (
    <div className="relative w-full min-h-screen font-sans">
      <CloudBackground />
      <Navigation />

      <main className="relative flex flex-col items-center justify-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
      </main>

      <Footer />
      <ProjectModal />
    </div>
  );
}

export default App;
