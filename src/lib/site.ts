export const site = {
  name: "Nikhil Garg",
  role: "Full-Stack Developer | Backend Engineer | AI Systems",
  title: "Nikhil Garg — Full-Stack Developer & Backend Engineer",
  description:
    "Nikhil Garg is a full-stack developer and backend engineer with 2 years of experience building AI-powered systems, production REST APIs, and scalable Node.js services.",
  email: "nikhil.garg.2509@gmail.com",
  phoneDisplay: "+91 70821 30367",
  phoneHref: "tel:+917082130367",
  linkedin: "https://linkedin.com/in/nikhil-garg-6539911a3",
  github: "https://github.com/nikhil111111/",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#engineering", label: "Engineering" },
  { href: "#contact", label: "Contact" },
] as const;

export const experience = [
  {
    company: "LyteHire AI",
    role: "Full-Stack Developer",
    dates: "Oct 2025 – Jun 2026",
    location: "Gurugram, Haryana",
    highlights: [
      "Architected the backend for an AI hiring platform covering recruiter onboarding, organization management, jobs, candidate pipelines, AI interviews, subscriptions, billing, and payments.",
      "Built an end-to-end AI interview engine with OpenAI, Gemini, Deepgram, and ElevenLabs for real-time voice conversations, transcript generation, and automated candidate evaluation.",
      "Designed and maintained 60+ production REST APIs, and optimized PostgreSQL data-access patterns for high-volume hiring operations.",
      "Engineered subscription and credit-management workflows with Razorpay, containerized services with Docker, and contributed to CI/CD deployments on Google Cloud Run.",
    ],
  },
  {
    company: "Shaurya Soft",
    role: "Software Developer Intern",
    dates: "Jan 2025 – Aug 2025",
    location: "Zirakpur, Punjab",
    highlights: [
      "Developed the backend architecture for a School ERP covering Visitor Management, CRM, HR & Payroll, and Student Management.",
      "Optimized relational database design and SQL queries, reducing average API response time by 30%.",
      "Built and maintained 40+ REST APIs with JWT authentication, refresh tokens, RBAC, and OAuth.",
      "Built scheduled NestJS automation services and collaborated with frontend developers on React API integration.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Email Marketing Platform",
    description:
      "Contact management, audience segmentation, and bulk campaign delivery on an asynchronous processing pipeline.",
    highlights: [
      "Designed a Redis and BullMQ worker pipeline for asynchronous email processing.",
      "Implemented JWT authentication, CSV contact import, and reusable email templates.",
      "Added campaign analytics on top of the delivery workflow.",
    ],
    tech: [
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "BullMQ",
      "Next.js",
    ],
    github: "https://github.com/nikhil111111/email-marketing-app",
    live: null,
  },
  {
    name: "MediaFlow AI",
    description:
      "An LLM-powered media platform that generates image captions, object labels, and content-safety analysis.",
    highlights: [
      "Created an event-driven Redis and BullMQ pipeline for asynchronous AI processing.",
      "Added real-time job status tracking and secure REST APIs.",
      "Containerized services with Docker and deployed on Render, Vercel, Neon PostgreSQL, and Upstash Redis.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "React.js",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    github: "https://github.com/nikhil111111/",
    live: "https://ai-mediaflow.vercel.app/",
  },
] as const;

export type TechItem = {
  name: string;
  brand?: string;
  mark?: string;
  lucide?: "database" | "braces" | "layers" | "waypoints" | "git-branch";
};

export const techGroups: { label: string; items: TechItem[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", brand: "typescript" },
      { name: "JavaScript", brand: "javascript" },
      { name: "Python", brand: "python" },
      { name: "SQL", lucide: "database" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", brand: "nodejs" },
      { name: "NestJS", brand: "nestjs" },
      { name: "Express.js", brand: "express" },
      { name: "REST APIs", lucide: "braces" },
      { name: "BullMQ", lucide: "layers" },
      { name: "Redis", brand: "redis" },
    ],
  },
  {
    label: "AI & LLM",
    items: [
      { name: "OpenAI", mark: "OA" },
      { name: "Gemini", brand: "gemini" },
      { name: "LangChain", brand: "langchain" },
      { name: "RAG", lucide: "waypoints" },
      { name: "Google ADK", mark: "ADK" },
      { name: "Deepgram", brand: "deepgram" },
      { name: "ElevenLabs", brand: "elevenlabs" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", brand: "postgresql" },
      { name: "MongoDB", brand: "mongodb" },
      { name: "Sequelize ORM", brand: "sequelize" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React.js", brand: "react" },
      { name: "Next.js", brand: "nextjs" },
      { name: "Tailwind CSS", brand: "tailwind" },
      { name: "shadcn/ui", brand: "shadcn" },
      { name: "HTML5", brand: "html5" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Docker", brand: "docker" },
      { name: "Google Cloud Run", brand: "googlecloud" },
      { name: "CI/CD", lucide: "git-branch" },
      { name: "Vercel", brand: "vercel" },
      { name: "Render", brand: "render" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", brand: "git" },
      { name: "GitHub", brand: "github" },
      { name: "Postman", brand: "postman" },
      { name: "Hoppscotch", brand: "hoppscotch" },
      { name: "Swagger", brand: "swagger" },
      { name: "Playwright", mark: "PW" },
    ],
  },
];

export const highlights = [
  {
    title: "Production APIs",
    icon: "server",
    body: "REST APIs for hiring workflows and school operations — onboarding, organizations, jobs, candidate pipelines, and student systems — designed to be maintained in production.",
  },
  {
    title: "AI Integrations",
    icon: "audio",
    body: "LLM and voice systems with OpenAI, Gemini, Deepgram, and ElevenLabs, including real-time conversations, transcripts, automated evaluation, and media analysis.",
  },
  {
    title: "Async Processing",
    icon: "workflow",
    body: "Redis and BullMQ pipelines that move email delivery and AI jobs off the request path, with real-time job status tracking.",
  },
  {
    title: "Authentication & Security",
    icon: "shield",
    body: "JWT authentication, refresh tokens, role-based access control, and OAuth implemented in production services.",
  },
  {
    title: "Payments & Subscriptions",
    icon: "card",
    body: "Subscription billing, credit management, and Razorpay payment workflows for a production hiring platform.",
  },
  {
    title: "Database Optimization",
    icon: "database",
    body: "PostgreSQL schema and query work for high-volume hiring operations, and SQL changes that reduced API response time.",
  },
  {
    title: "Cloud Deployment",
    icon: "cloud",
    body: "Dockerized services, CI/CD, and Google Cloud Run, with product deployments on Render and Vercel.",
  },
] as const;

export const education = [
  {
    degree: "Master of Computer Applications",
    short: "MCA",
    school: "National Institute of Technology Raipur",
    dates: "Aug 2022 – Aug 2025",
  },
  {
    degree: "Bachelor of Computer Applications",
    short: "BCA",
    school: "Chandigarh Group of Colleges",
    dates: "Aug 2019 – May 2022",
  },
] as const;

export const focusAreas = [
  "Scalable backend systems and REST APIs",
  "AI and LLM integrations",
  "Real-time AI voice systems",
  "Async processing with Redis and BullMQ",
  "Authentication, payments, and subscriptions",
  "PostgreSQL, Docker, and cloud deployment",
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Full-Stack Developer",
  description: site.description,
  email: site.email,
  telephone: "+917082130367",
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    "Node.js",
    "NestJS",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "AI integrations",
    "Docker",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Technology Raipur",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Chandigarh Group of Colleges",
    },
  ],
};
