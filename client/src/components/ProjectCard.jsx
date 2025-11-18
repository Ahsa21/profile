// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn.js'; // Added .js extension

export const ProjectCard = ({ title, description, imageUrl, projectUrl, delay }) => {
  // Use the custom hook for animation
  const fadeIn = useFadeIn(600, 300 + delay);

  return (
    <div className={`group bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-indigo-500/40 ${fadeIn}`}>
      
      {/* Project Image */}
      <div className="relative overflow-hidden h-52">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/0f172a/60a5fa?text=Project+Image" }}
        />
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 h-20 overflow-hidden">{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" 
           className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-colors"
           aria-label={`View ${title} Project`}>
          View Project
          <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 duration-300" />
        </a>
      </div>
    </div>
  );
};