export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: "AI" | "Real-Time" | "Full-Stack" | "Backend" | "Product";
  image: string;
  featured: boolean;
  technologies: string[];
  keyFeatures: string[];
  technicalChallenge: string;
  solution: string;
  role: string;
  architecture: string;
  challenges: string[];
  results: string[];
  learnings: string[];
  links?: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };
  screenshots?: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}
