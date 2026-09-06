import type { Hue } from "./types";

export const philosophyKicker = "ENGINEERING PHILOSOPHY";
export const philosophyHeading = "Build with intent.";

export const philosophyCards: {
  ordinal: string;
  hue: Hue;
  title: string;
  body: string;
}[] = [
  {
    ordinal: "P.01",
    hue: "h1",
    title: "Performance",
    body: "Systems should be fast and efficient. Measure first, then optimise the path that actually costs time.",
  },
  {
    ordinal: "P.02",
    hue: "h2",
    title: "Scalability",
    body: "Architecture should support growth. Multi-tenant boundaries, caching and query design decided early, not patched later.",
  },
  {
    ordinal: "P.03",
    hue: "h3",
    title: "Maintainability",
    body: "Code should remain understandable. Reviewing 50+ pull requests a month teaches you what future readers need.",
  },
  {
    ordinal: "P.04",
    hue: "h4",
    title: "User experience",
    body: "Engineering exists to improve the product. A 60fps board is a user outcome before it is a technical one.",
  },
  {
    ordinal: "P.05",
    hue: "h5",
    title: "Continuous learning",
    body: "Technology changes and engineers should too. Currently that means an MSc in Artificial Intelligence.",
  },
];
