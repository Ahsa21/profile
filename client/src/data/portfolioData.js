// src/data/portfolioData.js

// Import icons needed for the data structure, they will be used by components
import { Monitor, Code, TrendingUp, Zap, Smartphone, Brain } from 'lucide-react'; 

export const PROFILE_DATA = {
  name: "Ahmad Saloukha",
  tagline: "Software Engineer | Specializing in AI/ML & App Development.",
  bio: "I am a dedicated Software Engineer specialized in Artificial Intelligence and Machine Learning. My core strength is building and deploying intelligent systems, coupled with the ability to create robust applications that deliver these features to users. I focus on implementing scalable models, optimizing data pipelines, and transforming complex algorithms into practical, high-performance applications.",
  profilePicUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHixNJaYjn9BQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718966520064?e=1764806400&v=beta&t=9wOya3p6sSDpwJyW4fZp_nCqI1m94_4sFS-V6c-qwyY", // Använd din uppdaterade länk här
  githubUrl: "https://github.com/Ahsa21",
  linkedinUrl: "https://www.linkedin.com/in/ahmad-saloukha-b26b40203/",
  email: "ahmad.saloukha@example.com",
};

export const SKILLS = [
  // 1. PRIMARY FOCUS: AI / ML
  { icon: Brain, name: "AI / Machine Learning", details: "Python, TensorFlow, PyTorch, Data Science, Neural Networks, Model Deployment" },
  // 2. SECONDARY FOCUS: App Development
  { icon: Smartphone, name: "App Development", details: "React Native, Flutter, Swift/Kotlin (App Building), UI/UX Implementation" },
  // 3. SUPPORTING SKILLS
  { icon: Code, name: "Backend & Data", details: "Node.js, Express, PostgreSQL, MongoDB, REST/GraphQL APIs" },
  { icon: Monitor, name: "Supporting Frontend (App Layer)", details: "React, JavaScript/TypeScript, UI Integration (Note: Limited to application needs)" },
  { icon: TrendingUp, name: "DevOps & Tools", details: "Git, Docker, Cloud Platforms (AWS, Azure), CI/CD, Model Versioning" },
];

export const PROJECTS = [
  // --- BILJEX APP (Nytt projekt) ---
  {
    title: "Biljex (Lending Ticket App)",
    description: "A peer-to-peer mobile platform for the short-term rental and sharing of period travel passes, offering users a cost-effective alternative for public transport use.",
    imageUrl: "https://placehold.co/400x250/0f172a/f97316?text=Biljex+App", 
    projectUrl: "#", // Länk till GitHub/Live-demo måste läggas till
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
    title: "CV Page App", // Namn ändrat
    description: "A dedicated application for efficiently creating and managing professional CV pages/portfolios. Focuses on intuitive user interface and structured data presentation for job applications.",
    imageUrl: "https://placehold.co/400x250/0f172a/3b82f6?text=CV+App",
    projectUrl: "https://github.com/snauzeer/CV_Page",
  },
];