export const hero = {
  eyebrow: "< SOFTWARE_ENGINEER />",
  paragraphs: [
    "Full-stack software engineer with four years of professional experience building SaaS platforms, scalable backend services and high-performance web interfaces for international clients.",
    "Currently based in Cottbus, Germany, studying for an MSc in Artificial Intelligence at BTU Cottbus-Senftenberg and open to full-stack engineering roles.",
  ],
} as const;

export const systemPanel = {
  id: "SYS_001",
  rows: [
    { label: "STATUS", value: "ONLINE", live: true },
    { label: "ROLE", value: "SOFTWARE ENGINEER", live: false },
    { label: "STACK", value: "FULL STACK", live: false },
    { label: "FOCUS", value: "AI / WEB / SYSTEMS", live: false },
    { label: "BUILD", value: "2026", live: false },
    { label: "LOCATION", value: "GERMANY", live: false },
  ],
} as const;

export const bootLines = [
  "> initializing portfolio...",
  "> loading experience [2 records]...",
  "> loading projects [3 records]...",
  "> system ready.",
] as const;
