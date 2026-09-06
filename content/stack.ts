import type { Hue } from "./types";

export type StackChip = { name: string; description: string };
export type StackCategory = { label: string; hue: Hue; chips: StackChip[] };

export const stack: StackCategory[] = [
  {
    label: "LANGUAGES",
    hue: "h1",
    chips: [
      { name: "C / C++", description: "Foundation for competitive programming and algorithms" },
      { name: "JavaScript", description: "Primary language across frontend and backend work" },
      { name: "TypeScript", description: "Default choice for production application code" },
      { name: "Python", description: "Django services, data work and machine learning coursework" },
      { name: "SQL", description: "Query design, indexing and optimisation" },
    ],
  },
  {
    label: "FRONTEND",
    hue: "h2",
    chips: [
      { name: "React", description: "Component architecture and rendering performance" },
      { name: "Next.js", description: "SSR, routing and production deployments" },
      { name: "React Native", description: "Cross-platform mobile clients with Expo" },
      { name: "Tailwind CSS", description: "Design-system-driven styling" },
      { name: "React Query", description: "Server state, caching and invalidation" },
      { name: "Zustand", description: "Lightweight client state" },
    ],
  },
  {
    label: "BACKEND",
    hue: "h3",
    chips: [
      { name: "Node.js", description: "Scalable service layer and REST APIs" },
      { name: "Express.js", description: "API routing, middleware and auth" },
      { name: "Django", description: "Full-stack Python applications" },
      { name: "WebSocket", description: "Real-time notifications and live contests" },
    ],
  },
  {
    label: "DATABASES",
    hue: "h4",
    chips: [
      { name: "MySQL", description: "Primary relational store for multi-tenant data" },
      { name: "PostgreSQL", description: "Relational store for Django projects" },
      { name: "MongoDB", description: "Document store with Mongoose" },
      { name: "Redis", description: "Caching and task queues" },
      { name: "Prisma", description: "Type-safe data access and migrations" },
    ],
  },
  {
    label: "CLOUD / DEVOPS",
    hue: "h5",
    chips: [
      { name: "AWS", description: "EC2, S3 and SES in production" },
      { name: "Docker", description: "Containerised local and deployed environments" },
      { name: "DigitalOcean", description: "Deployment for smaller services" },
      { name: "CI/CD", description: "Automated test and deploy pipelines" },
      { name: "GitHub", description: "Source control and code review" },
      { name: "GitLab", description: "Source control and pipelines" },
    ],
  },
];
