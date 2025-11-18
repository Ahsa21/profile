// src/App.jsx
import React from 'react';

// Import all structural components
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';

// Import all page sections
import { HeroSection } from './sections/HeroSection.jsx';
import { SkillsSection } from './sections/SkillsSection.jsx';
import { ProjectsSection } from './sections/ProjectsSection.jsx';
import { ContactSection } from './sections/ContactSection.jsx';


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