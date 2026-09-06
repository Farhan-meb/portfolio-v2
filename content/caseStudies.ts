import type { Hue } from "./types";

export type CaseStudy = {
  slug: string;
  kicker: string;
  kickerHue: Hue;
  title: string;
  lead: string;
  primaryActionLabel: string;
  primaryActionUrl: string;
  heroPlaceholderCaption: string;
  meta: { label: string; value: string }[];
  overview: string[];
  problem: string;
  solution: string[];
  architecture: string;
  technology: string[];
  challenges: { ordinal: string; hue: Hue; title: string; body: string }[];
  results: { value: string; hue: Hue; caption: string }[];
  screenshots: { caption: string }[];
};

export const caseStudies: Record<string, CaseStudy> = {
  onesuite: {
    slug: "onesuite",
    kicker: "CASE STUDY / PROJECT 001",
    kickerHue: "h3",
    title: "OneSuite.io",
    lead: "A multi-tenant SaaS platform that replaces four disconnected tools for small and medium businesses: CRM, project management, client portal and invoicing.",
    primaryActionLabel: "VISIT ONESUITE.IO ↗",
    primaryActionUrl: "https://onesuite.io/",
    heroPlaceholderCaption: "OneSuite.io product screenshot",
    meta: [
      { label: "ROLE", value: "Lead Engineer" },
      { label: "TIMELINE", value: "2022 — 2025" },
      { label: "COMPANY", value: "Technext Limited" },
      { label: "SCALE", value: "3,000+ businesses" },
    ],
    overview: [
      "OneSuite brings customer relationships, project delivery, client communication and billing into one workspace. Each customer runs as an isolated tenant with its own users, roles, branding and billing plan, and a single user can belong to several entities at once.",
      "I led the engineering team through launch and the two years after it, owning the database and server architecture as well as the frontend architecture of the web and mobile clients.",
    ],
    problem:
      "Small teams were stitching together a CRM, a project tool, a document signer and an invoicing service. Data was duplicated across all four, permissions were inconsistent, and reporting across the whole client relationship was impossible. The platform had to unify those workflows without becoming slow as tenants grew into tens of thousands of records.",
    solution: [
      "A role- and permission-based architecture supporting multiple entities per user, so agencies can manage several client organisations from one account.",
      "Domain and email white-labeling, multilingual support and feature-based billing, so the product can be resold under a customer's own brand.",
      "Real-time notifications, activity logs, collaboration tools and workflow automation built on a shared event layer rather than per-module logic.",
      "High-performance REST APIs with secure S3 file handling and third-party integrations.",
    ],
    architecture: `CLIENTS        Next.js web app          React Native (Expo) app
                     │                            │
               ──────┴──────────┬─────────────────┘
                                ▼
EDGE           REST API  ·  auth & tenant resolution  ·  rate limiting
                                │
               ┌────────────────┼────────────────┐
               ▼                ▼                ▼
SERVICES   CRM / projects   billing & eSign   notifications
               │                │                │
               └────────────────┼────────────────┘
                                ▼
DATA           MySQL + Prisma  ·  Redis cache  ·  S3 objects
                                │
INFRA          AWS EC2  ·  SES  ·  CI/CD pipeline`,
    technology: [
      "Next.js",
      "React Native (Expo)",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "Prisma",
      "Redis",
      "React Query",
      "Zustand",
      "AWS EC2 / S3 / SES",
    ],
    challenges: [
      {
        ordinal: "C.01",
        hue: "h3",
        title: "200K RECORD QUERIES",
        body: "A UK client's transaction views loaded 200,000+ entries. Query restructuring, indexed access paths and a caching layer brought load times down by 95%.",
      },
      {
        ordinal: "C.02",
        hue: "h4",
        title: "30,000-CARD KANBAN",
        body: "Rendering the full board froze the browser. Virtualisation, lazy loading and memoised selectors cut DOM nodes by 99% and held 60fps during drag.",
      },
      {
        ordinal: "C.03",
        hue: "h5",
        title: "TENANT ISOLATION",
        body: "Multiple entities per user made naive scoping unsafe. Permissions were centralised so every query resolves its tenant at the edge, not in feature code.",
      },
    ],
    results: [
      { value: "Top 3", hue: "h5", caption: "PRODUCT HUNT, PRODUCT OF THE DAY" },
      { value: "3,000+", hue: "h1", caption: "BUSINESSES ONBOARDED" },
      { value: "95%", hue: "h3", caption: "FASTER LOAD, 200K RECORDS" },
      { value: "70%", hue: "h2", caption: "HIGHER WORKFLOW EFFICIENCY" },
    ],
    screenshots: [{ caption: "CRM pipeline" }, { caption: "Kanban board" }],
  },
};
