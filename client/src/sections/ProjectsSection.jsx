// src/sections/ProjectsSection.jsx
import React from 'react';
import { PROJECTS } from '../data/portfolioData.js'; 
import { ProjectCard } from '../components/ProjectCard.jsx'; 

export const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-gray-900">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">Featured Projects</h2>
      <p className="text-lg text-gray-400 mb-12">A selection of my recent work, showcasing my development skills.</p>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} {...project} delay={index * 150} />
        ))}
      </div>
    </div>
  </section>
);