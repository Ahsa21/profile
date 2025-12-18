// src/App.jsx

// Import all structural components
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

// Import all page sections
import { HeroSection } from './sections/HeroSection.js';
import { SkillsSection } from './sections/SkillsSection.js';
import { ProjectsSection } from './sections/ProjectsSection.js';
import { ContactSection } from './sections/ContactSection.js';


/**
 * Main application component. This is where all the sections and components
 * are imported and assembled to create the final portfolio page layout.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 font-sans text-white">
      {/* Load Inter font for a professional look */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      
      <Header />
      <main>
        <HeroSection />
        {/* Visual separators for clean sections */}
        <hr className="border-gray-700 mx-auto" />
        <SkillsSection />
        <hr className="border-gray-700 mx-auto" />
        <ProjectsSection />
        <hr className="border-gray-700 mx-auto" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}