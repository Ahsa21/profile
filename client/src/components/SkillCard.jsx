// src/components/SkillCard.jsx
import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn.js'; // Added .js extension

export const SkillCard = ({ icon: Icon, name, details, delay }) => {
  // Use the custom hook for animation
  const fadeIn = useFadeIn(600, 300 + delay);
  
  return (
    <div className={`p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700/50 hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 ${fadeIn} transform hover:-translate-y-2`}>
      <Icon className="w-8 h-8 text-indigo-400 mb-3" />
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">{details}</p>
    </div>
  );
};