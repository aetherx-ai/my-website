export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  fullDescription?: string;
  features: string[];
  techStack: string[];
  websiteUrl?: string;
  isPrimary?: boolean;
  statusText?: string;
  highlights: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'AI & Tools';
  level: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}
