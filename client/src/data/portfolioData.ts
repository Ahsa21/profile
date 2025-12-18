// src/data/portfolioData.ts

// Import types for the Icon property from SkillCardProps
import type { LucideIcon } from 'lucide-react';
// Import icons needed for the data structure, they will be used by components
import { Monitor, Code, TrendingUp, Smartphone, Brain } from 'lucide-react'; 

// 1. Define and Export the ProfileData Interface (Fixes TS2724)
export interface ProfileData {
  name: string;
  tagline: string;
  bio: string;
  profilePicUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

// 2. Define and Export the Skill Interface
export interface Skill {
  icon: LucideIcon; // Uses the imported type
  name: string;
  details: string;
}

// 3. Define and Export the Project Interface (Matches ProjectCardProps)
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}


// --- ACTUAL DATA ---
// 4. We assign the interfaces to the exported constants for type safety
export const PROFILE_DATA: ProfileData = {
  name: "Ahmad Saloukha",
  tagline: "Software Engineer | Specializing in AI/ML & App Development.",
  bio: "I am a dedicated Software Engineer specialized in Artificial Intelligence and Machine Learning. My core strength is building and deploying intelligent systems, coupled with the ability to create robust applications that deliver these features to users. I focus on implementing scalable models, optimizing data pipelines, and transforming complex algorithms into practical, high-performance applications.",
  profilePicUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHixNJaYjn9BQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718966520099?e=1767830400&v=beta&t=a91ekqKHlFLMtOxYJUFDlyhzqtTfqDOBYurrJqm-pPM",
  githubUrl: "https://github.com/Ahsa21",
  linkedinUrl: "https://www.linkedin.com/in/ahmad-saloukha-b26b40203/",
  email: "ahmad.saloukha@example.com",
};

export const SKILLS: Skill[] = [
  // 1. PRIMARY FOCUS: AI / ML
  { icon: Brain, name: "AI / Machine Learning", details: "Python, TensorFlow, PyTorch, Data Science, Neural Networks, Model Deployment" },
  // 2. SECONDARY FOCUS: App Development
  { icon: Smartphone, name: "App Development", details: "React Native, Flutter, Swift/Kotlin (App Building), UI/UX Implementation" },
  // 3. SUPPORTING SKILLS
  { icon: Code, name: "Backend & Data", details: "Node.js, Express, PostgreSQL, MongoDB, REST/GraphQL APIs" },
  { icon: Monitor, name: "Supporting Frontend (App Layer)", details: "React, JavaScript/TypeScript, UI Integration (Note: Limited to application needs)" },
  { icon: TrendingUp, name: "DevOps & Tools", details: "Git, Docker, Cloud Platforms (AWS, Azure), CI/CD, Model Versioning" },
];

export const PROJECTS: Project[] = [
  // --- BILJEX APP (Nytt projekt) ---
  {
    title: "Biljex (Lending Ticket App)",
    description: "A peer-to-peer mobile platform for the short-term rental and sharing of period travel passes, offering users a cost-effective alternative for public transport use.",
    imageUrl: "https://placehold.co/400x250/0f172a/f97316?text=Biljex+App", 
    projectUrl: "#", 
  },
  // --- MEDICINE REMINDER APP ---
  {
    title: "Medicine Reminder App",
    description: "A crucial health application that allows users to log their medications and set personalized notification reminders to ensure correct dosage and timing. Built to enhance user adherence to treatment plans.",
    imageUrl: "https://placehold.co/400x250/0f172a/ef4444?text=Medicine+App", 
    projectUrl: "https://github.com/MoNourH/Medicine-App",
  },
  // --- CV PAGE APP ---
  {
    title: "CV Page App",
    description: "A dedicated application for efficiently creating and managing professional CV pages/portfolios. Focuses on intuitive user interface and structured data presentation for job applications.",
    imageUrl: "https://placehold.co/400x250/0f172a/3b82f6?text=CV+App",
    projectUrl: "https://github.com/snauzeer/CV_Page",
  },
];