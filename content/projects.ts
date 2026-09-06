export type Project = {
  number: string;
  slug: string | null;
  title: string;
  years: string;
  role?: string;
  stack: string[];
  highlight?: string;
  description: string;
  liveUrl: string | null;
  githubUrl: string | null;
  hue: import("./types").Hue;
};

export const projects: Project[] = [
  {
    number: "001",
    slug: "onesuite",
    title: "OneSuite.io",
    years: "2022—2025",
    role: "Lead Engineer",
    stack: ["Next.js", "Node.js", "MySQL", "Prisma", "AWS"],
    highlight: "Product Hunt Top 3",
    description:
      "Multi-tenant SaaS platform unifying CRM, project management, client portal, invoicing, eSignature and white-labeling for small and medium businesses.",
    liveUrl: "https://onesuite.io/",
    githubUrl: null,
    hue: "h3",
  },
  {
    number: "002",
    slug: null,
    title: "MU Online Judge",
    years: "",
    stack: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "WebSocket"],
    description:
      "An online competitive programming platform where users solve coding challenges, take part in live contests and earn ratings based on their performance.",
    liveUrl: null,
    githubUrl: null,
    hue: "h4",
  },
  {
    number: "003",
    slug: null,
    title: "JugaJug",
    years: "",
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    description:
      "A social platform where users connect through helpful posts and chat, and learn C programming through an interactive section that requires solving problems to complete lessons.",
    liveUrl: null,
    githubUrl: null,
    hue: "h5",
  },
];
