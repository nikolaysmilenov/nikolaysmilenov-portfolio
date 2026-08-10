import type { LocalizedString } from "@/lib/i18n";

export const siteConfig = {
  name: "Nikolay Smilenov",
  shortName: "NS",
  title: {
    en: "Nikolay Smilenov | Full-Stack Developer • AI • Cybersecurity",
    bg: "Николай Смиленов | Full-Stack Developer • AI • Киберсигурност",
  } satisfies LocalizedString,
  description: {
    en: "Personal portfolio of Nikolay Smilenov — Full-Stack Web Developer focused on modern web applications, AI and cybersecurity.",
    bg: "Персонално портфолио на Николай Смиленов — Full-Stack Web Developer с фокус върху модерни уеб приложения, AI и киберсигурност.",
  } satisfies LocalizedString,
  url: "https://nikolaysmilenov.dev",
  role: {
    en: "Full-Stack Web Developer",
    bg: "Full-Stack Web Developer",
  } satisfies LocalizedString,
  focus: {
    en: ["AI", "Cybersecurity", "Web Development"],
    bg: ["AI", "Киберсигурност", "Уеб разработка"],
  },
  tagline: {
    en: "Building modern web applications and digital products while developing deeper expertise in AI, cybersecurity and software engineering.",
    bg: "Създавам модерни уеб приложения и дигитални продукти, докато задълбочавам експертизата си в AI, киберсигурността и софтуерното инженерство.",
  } satisfies LocalizedString,
  profilePath: "/profile/nikolay-smilenov.jpg",
  ogImage: "/og-image.png",
  cvPath: "/cv/Nikolay-Smilenov-CV.pdf",
  /** PDF available at public/cv/Nikolay-Smilenov-CV.pdf */
  cvAvailable: true,
  statusBadge: {
    en: "Developer",
    bg: "Разработчик",
  } satisfies LocalizedString,
  /** Optional location line — leave null to hide */
  location: null as LocalizedString | null,
} as const;
