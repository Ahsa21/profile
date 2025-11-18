// src/hooks/useFadeIn.js
import { useState, useEffect } from 'react';

/**
 * Custom hook for applying a staggered fade-in/slide-up animation on mount.
 * @param {number} duration - The duration of the transition in ms (e.g., 600).
 * @param {number} delay - The delay before the animation starts in ms (e.g., 300).
 * @returns {string} - Combined Tailwind CSS classes for the transition effect.
 */
export const useFadeIn = (duration = 500, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility state change after the specified delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [delay]);

  // Combined Tailwind classes
  const transitionClass = `transition-all ease-out duration-${duration}`;
  const visibilityClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

  return `${transitionClass} ${visibilityClass}`;
};