// src/components/SkillCard.tsx

import type React from 'react'; 
// FIX: Change 'import type' to 'import' for the executed function (TS1361)
import { useFadeIn } from '../hooks/useFadeIn.ts'; 
import type { LucideIcon } from 'lucide-react'; 

// 1. Define the interface for the component props
export interface SkillCardProps {
  icon: LucideIcon; 
  name: string;
  details: string;
  delay: number;
}

// 2. Assign the interface to the component function
export const SkillCard: React.FC<SkillCardProps> = ({ 
  icon: Icon, 
  name, 
  details, 
  delay 
}) => {
  // This line is where useFadeIn is executed.
  const fadeIn = useFadeIn(600, 300 + delay);
  
  return (
    <div className={`p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700/50 hover:border-indigo-500 hover:shadow-indigo-500/30 transition-all duration-300 ${fadeIn} transform hover:-translate-y-2`}>
      <Icon className="w-8 h-8 text-indigo-400 mb-3" />
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">{details}</p>
    </div>
  );
};