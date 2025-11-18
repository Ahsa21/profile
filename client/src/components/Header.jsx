// src/components/Header.jsx
import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData.js'; // Added .js extension

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-gray-900/80 shadow-lg">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-400 tracking-wider hover:text-indigo-300 transition-colors">
        {PROFILE_DATA.name.split(' ')[0]}.Dev
      </div>
      <nav className="hidden md:flex space-x-6">
        {navItems.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-indigo-400 transition-colors font-medium text-lg">
            {item}
          </a>
        ))}
      </nav>
    </div>
  </header>
);