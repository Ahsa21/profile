// src/hooks/useFadeIn.ts

// Import necessary hooks. No changes here.
import { useState, useEffect } from 'react';

/**
 * Custom hook for applying a staggered fade-in/slide-up animation on mount.
 * @param duration - The duration of the transition in ms (e.g., 600).
 * @param delay - The delay before the animation starts in ms (e.g., 300).
 * @returns Combined Tailwind CSS classes for the transition effect.
 */
// 1. Add types to parameters and the return value (string)
export const useFadeIn = (duration: number = 500, delay: number = 0): string => {
  // useState is implicitly typed as [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility state change after the specified delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [delay]);

  // Combined Tailwind classes
  // Note: Since duration is a number, you might get a warning about non-standard Tailwind values.
  // This is a runtime consideration, but the TS is fine.
  const transitionClass = `transition-all ease-out duration-${duration}`;
  const visibilityClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

  return `${transitionClass} ${visibilityClass}`;
};