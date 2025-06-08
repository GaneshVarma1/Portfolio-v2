// Common types
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Project types
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

// Experience types
export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface ExperienceCategory {
  category: 'work' | 'education';
  items: Experience[];
}

// Technology types
export interface Technology {
  name: string;
  iconSlug: string;
}

export interface TechnologyCategory {
  title: string;
  items: Technology[];
}

// Publication types
export interface Publication {
  title: string;
  venue: string;
  authors: string;
  publisher: string;
  year: number;
  doi: string;
  url: string;
}

// Component Props types
export interface ThemeToggleProps extends BaseProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface SocialLinkProps extends BaseProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export interface ProjectCardProps extends BaseProps {
  project: Project;
}

export interface TechStackProps extends BaseProps {
  technologies: Technology[];
} 