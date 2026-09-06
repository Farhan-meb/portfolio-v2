import type { Hue } from "./types";

export const profile = {
  heading: "I build systems that stay fast as they grow.",
  paragraphs: [
    "Over four years I have worked across the full stack: multi-tenant SaaS architecture, backend services in Node.js and Django, and frontend interfaces where performance is a product requirement rather than an afterthought.",
    "At Technext Limited I led the engineering team behind OneSuite.io, a platform combining CRM, project management, invoicing and eSignature for small and medium businesses. Before that I built a multi-vendor e-commerce platform from scratch at Shohozdeal.",
    "My engineering habits come from competitive programming: roughly 2,000 solved problems, ICPC Dhaka Regionals in 2019 and 2020, and several years judging and setting problems for university contests.",
  ],
  chips: [
    { label: "TYPESCRIPT", hue: "h1" as Hue },
    { label: "REACT / NEXT.JS", hue: "h2" as Hue },
    { label: "NODE.JS", hue: "h3" as Hue },
    { label: "PYTHON / DJANGO", hue: "h4" as Hue },
    { label: "AWS", hue: "h5" as Hue },
    { label: "SYSTEM DESIGN", hue: "h6" as Hue },
  ],
} as const;

export const identityPanel = {
  id: "SYS_002",
  title: "ENGINEER_PROFILE",
  role: "Software Engineer",
  experience: "4+ years, SaaS and web platforms",
  specialization: "Full-stack development",
  focus: "Scalable systems / Artificial intelligence / Web applications / Product engineering",
  currently: ["MSc Artificial Intelligence", "BTU Cottbus-Senftenberg, Germany"],
  languages: "English C1 · German A1",
} as const;
