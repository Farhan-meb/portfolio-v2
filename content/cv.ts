export const cv = {
  subtitle: "SOFTWARE ENGINEER / FULL STACK ENGINEER",
  profile:
    "Full-stack software engineer with 4+ years of experience building and maintaining SaaS, web, and mobile applications for international clients. Strong background in backend systems, frontend performance optimisation, and close collaboration with teams and clients across different time zones. Currently open to full-stack software engineering roles, including remote, on-site, or working student positions.",
  experience: [
    {
      role: "Senior Software Engineer",
      org: "Technext Limited",
      dates: "May 2022 – Dec 2025",
      location: "Dhaka, Bangladesh",
      bullets: [
        "Led the development of OneSuite.io, a SaaS platform uniting CRM, project management, client portal, invoicing and eSignature for SMEs. Achieved Top 3 Product of the Day on Product Hunt; serves 3,000+ businesses.",
        "Delivered full-stack solutions with advanced caching and query optimisation, achieving approximately 70% higher workflow efficiency and 95% faster load times for 200K+ records for a UK-based client.",
        "Architected virtualisation, lazy loading and caching for a 30,000-card Kanban board, reducing DOM nodes by 99% and achieving 60fps performance.",
        "Reviewed 50+ pull requests per month, ensuring clean architecture and maintainable code.",
        "Managed international clients and coordinated cross-functional team members, distributing tasks and ensuring on-time delivery.",
      ],
    },
    {
      role: "Software Engineer",
      org: "Shohozdeal Ltd",
      dates: "Aug 2021 – Apr 2022",
      location: "Sylhet, Bangladesh",
      bullets: [
        "Developed a multi-vendor e-commerce SaaS platform (B2C and C2C), integrating secure payment processing, vendor onboarding and responsive web and mobile interfaces.",
        "Optimised frontend performance using React.lazy, reducing bundle size and cutting initial load times significantly.",
        "Collaborated on backend APIs with Node.js and Express.js, ensuring efficient data handling with MongoDB.",
      ],
    },
  ],
  education: [
    {
      title: "MSc Artificial Intelligence",
      org: "Brandenburgische Technische Universität Cottbus-Senftenberg",
      dates: "Oct 2025 – present",
      location: "Cottbus, Germany",
      note: "Relevant coursework: machine learning and deep learning, natural language processing, computer vision, advanced algorithms and optimisation, data mining and big data analytics, neural networks.",
    },
    {
      title: "BSc (Engg.) Computer Science and Engineering",
      org: "Metropolitan University",
      dates: "Jan 2017 – Jun 2021",
      location: "Sylhet, Bangladesh",
      note: 'GPA 3.89 / 4.0 — equivalent to 1.1 "Sehr Gut" in the German grading system.',
    },
  ],
  technicalSkills: [
    { label: "LANGUAGES", value: "C/C++, JavaScript, TypeScript, Python, SQL" },
    { label: "FRAMEWORKS", value: "Node.js, Express.js, Django, React.js, Next.js, React Native (Expo)" },
    { label: "DATABASES", value: "MySQL, PostgreSQL, MongoDB, Redis, Prisma, Mongoose" },
    { label: "CLOUD", value: "AWS (EC2, S3, SES), DigitalOcean" },
    { label: "DEVOPS", value: "Docker, GitHub, GitLab, CI/CD pipelines" },
    { label: "TOOLS", value: "React Query, Zustand, Tailwind CSS, SWR, Celery, WebSocket" },
  ],
  achievements: [
    {
      kicker: "TECHNEXT LIMITED",
      paragraphs: [
        "Outstanding Team Player 2024 and 2025, for collaboration and contribution to team success.",
      ],
    },
    {
      kicker: "MANGTAS",
      paragraphs: ["Full Stack Engineer Certificate, November 2022. REF 1194501."],
    },
    {
      kicker: "COMPETITIVE PROGRAMMING",
      paragraphs: [
        "2000+ problems solved across CodeForces, UVa, CodeChef, LightOJ, Toph, AtCoder and LeetCode. 10+ national onsite contests and 300+ online contests.",
        "Codeforces max rating 1647 (Expert). Codechef max rating 1733.",
      ],
    },
    {
      kicker: "CONTESTS",
      paragraphs: [
        "ICPC Dhaka Regional 2019 and 2020 — qualified and participated.",
        "IUPC: 16th of 42 (NEUB 2017), 17th of 70 (LU 2019), 29th of 161 (SUST 2019).",
      ],
    },
    {
      kicker: "ACTIVITIES",
      paragraphs: [
        "Judge and problem setter for university programming contests, 2019–2023. Programming mentor at Grace Hopper Girls' Programming Camp 2019; trained 300+ juniors.",
      ],
    },
  ],
  languages: [
    { name: "English", level: "C1" },
    { name: "German", level: "A1 (actively learning)" },
    { name: "Bengali", level: "Native" },
  ],
} as const;
