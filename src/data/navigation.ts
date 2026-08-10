export const navLinkIds = [
  "home",
  "about",
  "projects",
  "certificates",
  "skills",
  "education",
  "contact",
] as const;

export type NavLinkId = (typeof navLinkIds)[number];

export const navLinks = [
  { id: "home", href: "#home" },
  { id: "about", href: "#about" },
  { id: "projects", href: "#projects" },
  { id: "certificates", href: "#certificates" },
  { id: "skills", href: "#skills" },
  { id: "education", href: "#education" },
  { id: "contact", href: "#contact" },
] as const;

export const footerLinks = [
  { id: "projects", href: "#projects" },
  { id: "certificates", href: "#certificates" },
  { id: "contact", href: "#contact" },
] as const;
