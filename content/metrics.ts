import type { Hue } from "./types";

export const metrics: { value: number; suffix: string; prefix?: string; caption: string; hue: Hue }[] = [
  { value: 4, suffix: "+", caption: "YEARS EXPERIENCE", hue: "h1" },
  { value: 2000, suffix: "+", caption: "PROBLEMS SOLVED", hue: "h2" },
  { value: 200, suffix: "K+", caption: "RECORDS OPTIMISED", hue: "h3" },
  { value: 95, suffix: "%", caption: "PROCESSING TIME REDUCED", hue: "h4" },
  { value: 60, suffix: " FPS", caption: "UI PERFORMANCE", hue: "h5" },
];
