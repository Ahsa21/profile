// src/components/ProjectCard.tsx
import { useFadeIn } from '../hooks/useFadeIn.ts'; 

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  delay: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, delay }) => {
  const fadeIn = useFadeIn(600, 300 + delay);

  return (
    <div className={`group bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-indigo-500/40 ${fadeIn}`}>
      
      {/* Project Image */}
      <div className="relative overflow-hidden h-52">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          onError={(e) => { 
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src = "https://placehold.co/400x250/0f172a/60a5fa?text=Project+Image" 
          }}
        />
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        {/* Changed: Removed h-20 and overflow-hidden to make all text visible */}
        <p className="text-gray-400 mb-2 leading-relaxed">{description}</p>
        
        {/* Removed: The entire <a> tag for "View Project" has been deleted */}
      </div>
    </div>
  );
};