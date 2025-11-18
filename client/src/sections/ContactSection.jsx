// src/sections/ContactSection.jsx
import React from 'react';
import { Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData.js'; 
import { useFadeIn } from '../hooks/useFadeIn.js'; 

export const ContactSection = () => {
  const fadeIn = useFadeIn(700, 200);

  return (
    <section id="contact" className={`py-20 bg-gray-800 ${fadeIn}`}>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-400 mb-8">
          I'm currently available for freelance opportunities or full-time roles. Feel free to send me a message!
        </p>
        <a href={`mailto:${PROFILE_DATA.email}`}
           className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-xl transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-500/50 transform hover:scale-105">
          <Mail className="w-5 h-5 mr-3" />
          Send Email
        </a>
      </div>
    </section>
  );
};