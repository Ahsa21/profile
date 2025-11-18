// src/sections/HeroSection.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData.js'; // Added .js extension
import { useFadeIn } from '../hooks/useFadeIn.js'; // Added .js extension

export const HeroSection = () => {
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
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/1e293b/ffffff?text=AS" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};