import { Project, Service, TechItem, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: "MS MASUD",
  role: "Full Stack Web Developer",
  email: "itsmasud25@gmail.com",
  headline: "I build modern websites, SaaS products and AI-powered web applications.",
  subheadline: "I help businesses and startups turn ideas into fast, responsive and scalable digital products.",
  trustLine: ["React", "Next.js", "Node.js", "Supabase", "AI"],
  rotatingWords: ["Websites", "SaaS Products", "AI Applications"],
  bio: `I'm MS Masud, a Full Stack Web Developer focused on building modern, responsive and high-performance digital products.

I work across frontend, backend, databases and AI integrations to turn ideas into functional products — from business websites and web applications to SaaS platforms.`,
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
  },
  availability: "Available for freelance projects",
};

export const ABOUT_HIGHLIGHTS = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web engineering covering responsive frontend architectures and solid server-side backends.",
  },
  {
    title: "Modern UI/UX",
    desc: "Polished, intuitive interfaces with deliberate typography, high responsiveness, and smooth micro-interactions.",
  },
  {
    title: "SaaS Development",
    desc: "Complete software products with authentication, scalable databases, structured workflows, and dashboard tooling.",
  },
  {
    title: "AI Integration",
    desc: "Embedding modern LLMs, automated multimodal pipelines, and intelligent workflows into production applications.",
  },
];

export const TECH_STACK: TechItem[] = [
  {
    name: "React",
    category: "Frontend",
    level: "Core Frontend",
    description: "Component-driven architectures, modern hooks, and state management.",
    icon: "Atom",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Full Stack Framework",
    description: "Server-side rendering, static site generation, and optimized API routes.",
    icon: "Globe",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Type-Safe Dev",
    description: "Robust type safety, strict contracts, and scalable codebase maintenance.",
    icon: "Code2",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Language Standard",
    description: "Modern ESNext features, asynchronous programming, and DOM APIs.",
    icon: "FileCode",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Server Runtime",
    description: "Event-driven runtime for high-throughput APIs and background workers.",
    icon: "Server",
  },
  {
    name: "Express",
    category: "Backend",
    level: "REST Backend",
    description: "Minimalist, robust RESTful routing, middleware pipelines, and auth handling.",
    icon: "Cpu",
  },
  {
    name: "Supabase",
    category: "Database",
    level: "Backend as a Service",
    description: "Postgres database, row-level security, auth triggers, and real-time subscriptions.",
    icon: "Flame",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Relational Database",
    description: "ACID transactions, relational schema design, indexes, and complex queries.",
    icon: "Database",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Styling Framework",
    description: "Utility-first CSS, custom design tokens, and fluid responsive styling.",
    icon: "Palette",
  },
  {
    name: "AI / Gemini",
    category: "AI & Tools",
    level: "Intelligent Workflows",
    description: "LLM completions, embeddings, multimodal processing, and automated content generation.",
    icon: "Sparkles",
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Architecture",
    description: "Clean resource-oriented API design, serialization, and secure authentication.",
    icon: "Layers",
  },
  {
    name: "Git / GitHub",
    category: "AI & Tools",
    level: "Version Control",
    description: "Branch management, pull requests, automated workflows, and continuous deployment.",
    icon: "GitBranch",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "lumoclip",
    name: "LumoClip",
    tagline: "AI-Powered Video Repurposing SaaS",
    category: "AI SaaS / Video Repurposing",
    description: "LumoClip is an AI-powered video repurposing platform designed to turn long-form videos into engaging short-form content for platforms like YouTube Shorts, TikTok and Instagram Reels.",
    fullDescription: "Built from the ground up for digital creators and marketing teams, LumoClip automates the labor-intensive process of cutting long videos, extracting engaging hooks, creating synced dynamic captions, generating viral titles, and exporting ready-to-post short video formats.",
    features: [
      "AI video clipping",
      "AI captions",
      "Short-form generation",
      "AI titles and descriptions",
      "Social media optimization",
      "Video processing",
      "SaaS dashboard"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "AI Pipelines", "Tailwind CSS"],
    websiteUrl: "https://lumo-clip.com/",
    isPrimary: true,
    highlights: [
      { label: "Target Platforms", value: "Reels • Shorts • TikTok" },
      { label: "Core Technology", value: "AI Video Processing" },
      { label: "Architecture", value: "Full Stack SaaS Platform" }
    ]
  },
  {
    id: "business-website",
    name: "Business Website",
    tagline: "Modern Corporate Brand Experience",
    category: "Business Website",
    description: "Modern responsive business website with premium UI and optimized user experience.",
    fullDescription: "A custom-designed business website crafted to communicate brand authority, convert qualified leads, and load lightning-fast across every mobile and desktop screen with smooth micro-interactions.",
    features: [
      "Modern responsive design",
      "Optimized load times & SEO",
      "Lead generation contact flows",
      "Interactive product showcases",
      "Accessible typography and structure",
      "Custom brand aesthetics"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    statusText: "Case Study Coming Soon",
    highlights: [
      { label: "Design", value: "Custom Dark / Light Layout" },
      { label: "Performance", value: "Optimized Core Web Vitals" },
      { label: "Audience", value: "Clients & Stakeholders" }
    ]
  },
  {
    id: "ai-web-app",
    name: "AI Web Application",
    tagline: "Intelligent Workflow Engine",
    category: "AI Web Application",
    description: "AI-powered web application demonstrating modern frontend, backend and AI integration.",
    fullDescription: "Demonstrating end-to-end full-stack capabilities with real-time prompt streaming, secure backend proxy authentication, structured output generation, and clean user control.",
    features: [
      "LLM integration & streaming",
      "Real-time token response render",
      "Secure API proxy layer",
      "Interactive parameter controls",
      "Export & history management",
      "Responsive workspace layout"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Gemini API", "Supabase"],
    statusText: "Case Study Coming Soon",
    highlights: [
      { label: "Capability", value: "Real-time AI Inference" },
      { label: "Backend", value: "Secure Server Proxy" },
      { label: "Integration", value: "Multimodal AI" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Modern responsive websites for businesses and brands.",
    deliverables: [
      "Tailored layout reflecting your brand identity",
      "Flawless mobile & tablet responsiveness",
      "SEO-ready structure & fast loading speeds",
      "Integrated contact forms and call-to-actions"
    ],
    iconName: "Globe"
  },
  {
    id: "saas-applications",
    title: "SaaS Applications",
    description: "Scalable SaaS products with authentication, dashboards, databases and payments.",
    deliverables: [
      "Secure user auth & session management",
      "Interactive data dashboards and charts",
      "Relational database schemas (PostgreSQL / Supabase)",
      "Role-based access & modular architecture"
    ],
    iconName: "LayoutGrid"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Custom full-stack applications built around specific business requirements.",
    deliverables: [
      "Tailor-made business logic and workflows",
      "Clean RESTful API development",
      "Performant state management and UX",
      "Third-party integrations and webhooks"
    ],
    iconName: "Code"
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    description: "AI integrations, intelligent workflows and AI-powered web products.",
    deliverables: [
      "Large Language Model (LLM) feature integration",
      "Automated content generation & processing",
      "Dynamic prompt engineering & structured outputs",
      "Streaming responses with smooth UX"
    ],
    iconName: "Sparkles"
  },
  {
    id: "ecommerce-websites",
    title: "E-commerce Websites",
    description: "Modern online stores with responsive UX and business-focused features.",
    deliverables: [
      "Clean product catalogs & filter controls",
      "Fast checkout journeys and cart management",
      "Inventory & order management interfaces",
      "Mobile-optimized transaction flows"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Modernize outdated websites with better UI, responsiveness and performance.",
    deliverables: [
      "Complete visual & typographic overhaul",
      "Mobile-first responsive rebuild",
      "Asset optimization and faster load times",
      "Preserved SEO indexing and cleaner code"
    ],
    iconName: "RefreshCw"
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Modern & Responsive",
    description: "Designed to work beautifully across every screen.",
    detail: "Every interface is built mobile-first, ensuring crisp typography, natural touch targets, and balanced spacing on phones, tablets, laptops, and ultra-wide monitors.",
    icon: "Smartphone"
  },
  {
    title: "Performance Focused",
    description: "Fast, lightweight and optimized user experiences.",
    detail: "Clean code structure, optimized assets, and efficient rendering cycles ensure instantaneous page transitions and frictionless visitor journeys.",
    icon: "Zap"
  },
  {
    title: "Scalable Architecture",
    description: "Built with maintainability and future growth in mind.",
    detail: "Modular component hierarchies, typed data contracts, and clean separation between frontend presentation and backend services make extending features effortless.",
    icon: "ShieldCheck"
  },
  {
    title: "Direct Communication",
    description: "Clear communication from idea to final product.",
    detail: "No middlemen or confusing technical jargon. Transparent updates, timely milestones, and direct collaboration from initial scoping to production launch.",
    icon: "MessageSquare"
  }
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the idea, requirements and goals.",
    deliverable: "Clear project scope, target audience understanding, and technical requirements definition."
  },
  {
    step: "02",
    title: "Plan",
    description: "Define structure, technology and user experience.",
    deliverable: "Sitemap, component architecture, database schemas, and interface wireframing."
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the frontend, backend and integrations.",
    deliverable: "Clean TypeScript code, responsive UI, database modeling, and API integrations."
  },
  {
    step: "04",
    title: "Test",
    description: "Check responsiveness, functionality and performance.",
    deliverable: "Cross-device responsiveness check, input validation, and speed optimization."
  },
  {
    step: "05",
    title: "Launch",
    description: "Deploy the finished product and make it production-ready.",
    deliverable: "Production deployment, domain setup, final verification, and handover."
  }
];
