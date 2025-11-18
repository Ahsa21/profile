// src/components/Footer.jsx
import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData.js'; // Added .js extension

export const Footer = () => (
  <footer className="bg-gray-900 py-6">
    <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} {PROFILE_DATA.name}. Built with React & Tailwind CSS.
    </div>
  </footer>
);