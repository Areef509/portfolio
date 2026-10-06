export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  featured: boolean;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  stats: {
    label: string;
    value: string;
  }[];
  overview: {
    problem: string;
    solution: string;
    impact: string;
  };
  architecture: {
    summary: string;
    steps: {
      title: string;
      desc: string;
      tech: string;
    }[];
  };
  mlWorkflow: {
    title: string;
    description: string;
    components: string[];
    metrics: { name: string; score: string }[];
  };
  visualTheme: {
    accentGradient: string;
    primaryBadge: string;
  };
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export interface Publication {
  title: string;
  conference: string;
  status: string;
  year: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  keyFindings: string[];
  paperLink?: string;
  citationText: string;
}

export interface TechCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Practitioner';
    highlight?: boolean;
  }[];
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  topics: string[];
  updatedAt: string;
}
