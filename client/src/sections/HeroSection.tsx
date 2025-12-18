// src/sections/HeroSection.tsx

import React from 'react'; // Retained for clarity, though often not strictly required in modern React
import { Github, Linkedin, Mail } from 'lucide-react';

// NOTE: You must rename your data and hooks files to .ts in your filesystem.
// You will also need to define the type/interface for PROFILE_DATA in portfolioData.ts
import { PROFILE_DATA } from '../data/portfolioData.ts'; 
import { useFadeIn } from '../hooks/useFadeIn.ts'; 

// This component receives no props, so the definition is simple:
export const HeroSection: React.FC = () => {
  const fadeIn = useFadeIn(700, 200);

  return (
    <section id="about" className={`min-h-screen pt-32 pb-16 flex items-center bg-gray-900 text-white ${fadeIn}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tighter">
            Hi, I'm <span className="text-indigo-400 block sm:inline">{PROFILE_DATA.name}</span>
          </h1>
          <p className="text-xl md:text-3xl font-light text-gray-400 mb-8">
            {PROFILE_DATA.tagline}
          </p>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
            {PROFILE_DATA.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6">
            <a href={PROFILE_DATA.linkedinUrl} target="_blank" rel="noopener noreferrer" 
               className="p-3 text-white bg-indigo-600 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-300 transform"
               aria-label="LinkedIn Profile">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={PROFILE_DATA.githubUrl} target="_blank" rel="noopener noreferrer" 
               className="p-3 text-white bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 hover:scale-110 transition-all duration-300 transform"
               aria-label="GitHub Profile">
              <Github className="w-6 h-6" />
            </a>
            <a href={`mailto:${PROFILE_DATA.email}`}
               className="p-3 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 hover:scale-110 transition-all duration-300 transform"
               aria-label="Email Me">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Profile Image (Animated) */}
        <div className="md:w-2/5 flex justify-center">
          <div className="relative p-2 border-4 border-indigo-500 rounded-full shadow-2xl transition-all duration-500 hover:shadow-indigo-500/50 hover:border-indigo-400">
            <img 
              src={PROFILE_DATA.profilePicUrl}
              alt={PROFILE_DATA.name}
              className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full"
              // Fixes TS2339 by telling TS the target is an HTMLImageElement
              onError={(e) => { 
                const target = e.target as HTMLImageElement;
                target.onerror = null; 
                target.src = "https://placehold.co/150x150/1e293b/ffffff?text=AS" 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ---
// ⚠️ REQUIRED NEXT STEP IN YOUR 'portfolioData.ts'
// To prevent the TS7016 error on PROFILE_DATA, you must define the type 
// for the exported data in your 'portfolioData.ts' file:
/* export interface ProfileData {
  name: string;
  tagline: string;
  bio: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  profilePicUrl: string;
}

export const PROFILE_DATA: ProfileData = {
  // ... your actual data here
};
*/