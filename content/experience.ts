export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  railStart: string;
  railEnd: string;
  current: boolean;
  summary: string;
  technologies: string[];
  impact: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Technext Limited",
    role: "Senior Software Engineer",
    dates: "May 2022 – Dec 2025",
    location: "Dhaka, Bangladesh",
    railStart: "2022",
    railEnd: "2025",
    current: true,
    summary:
      "Led the development of OneSuite.io, a multi-tenant SaaS platform uniting CRM, project management, client portal, invoicing and eSignature for SMEs. Managed international clients, distributed work across a cross-functional team and reviewed 50+ pull requests a month.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "MySQL", "Prisma", "AWS"],
    impact: [
      "Top 3 Product of the Day on Product Hunt; 3,000+ businesses onboarded",
      "Reduced processing time for 200K+ records by 95% through query and caching work",
      "Virtualised a 30,000-card Kanban board: 99% fewer DOM nodes, sustained 60fps",
      "Improved a UK client's workflow efficiency by over 70% against their previous system",
    ],
  },
  {
    company: "Shohozdeal Ltd",
    role: "Software Engineer",
    dates: "Aug 2021 – Apr 2022",
    location: "Sylhet, Bangladesh",
    railStart: "2021",
    railEnd: "2022",
    current: false,
    summary:
      "Built a multi-vendor e-commerce SaaS platform from scratch, supporting B2C and C2C models with secure payment processing, vendor onboarding and responsive web and mobile interfaces for 100+ vendors and 10,000+ users.",
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "SWR"],
    impact: [
      "Cut initial load time by reducing bundle size with React.lazy",
      "Improved API query performance and response times by 30%",
      "Introduced a modular React component architecture that reduced code complexity",
    ],
  },
];
