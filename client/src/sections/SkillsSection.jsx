// src/sections/SkillsSection.jsx
import React from 'react';
import { SKILLS } from '../data/portfolioData.js'; 
import { SkillCard } from '../components/SkillCard.jsx'; 

export const SkillsSection = () => (
  <section id="skills" className="py-20 bg-gray-800">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">My Expertise</h2>
      <p className="text-lg text-gray-400 mb-12">Technologies and tools I use to bring ideas to life.</p>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((skill, index) => (
          <SkillCard key={skill.name} {...skill} delay={index * 150} />
        ))}
      </div>
    </div>
  </section>
);