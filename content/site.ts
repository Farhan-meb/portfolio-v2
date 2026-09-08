export const site = {
  name: "Mahbub Abedin Talukdar",
  firstName: "Mahbub",
  initial: "M",
  title: "Software Engineer",
  location: "Berlin, Germany",
  locationShort: "DE",
  phone: "+49 163 1543678",
  email: "farhan.meb@gmail.com",
  linkedinUrl: "https://linkedin.com/in/farhan-meb",
  linkedinLabel: "linkedin.com/in/farhan-meb",
  githubUrl: "https://github.com/farhan-meb",
  githubLabel: "github.com/farhan-meb",
  /** Set this to the production domain before deploying — feeds canonical, sitemap, robots and OG tags. */
  url: "https://example.com",
  buildYear: 2026,
  version: "1.0",
} as const;

export type NavItem = {
  ordinal: string;
  label: string;
  href: string;
  hue: import("./types").Hue;
};

export const navItems: NavItem[] = [
  { ordinal: "01", label: "PROFILE", href: "/#about", hue: "h1" },
  { ordinal: "02", label: "EXPERIENCE", href: "/#experience", hue: "h2" },
  { ordinal: "03", label: "SELECTED WORK", href: "/#work", hue: "h3" },
  { ordinal: "04", label: "CAPABILITIES", href: "/#technology", hue: "h4" },
  { ordinal: "05", label: "CURRICULUM VITAE", href: "/cv", hue: "h5" },
  { ordinal: "06", label: "CONTACT", href: "/#contact", hue: "h6" },
];
