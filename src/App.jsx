import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import Footer from './components/Footer.jsx';
import useRevealOnScroll from './hooks/useRevealOnScroll.js';

export default function App() {
  useRevealOnScroll();

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
