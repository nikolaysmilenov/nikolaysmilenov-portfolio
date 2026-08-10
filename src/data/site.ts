import type { LocalizedString } from "@/lib/i18n";

export const siteConfig = {
  name: "Nikolay Smilenov",
  shortName: "NS",
  title: {
    en: "Nikolay Smilenov | Junior Web Developer • AI • Cybersecurity",
    bg: "Николай Смиленов | Junior Web Developer • AI • Киберсигурност",
  } satisfies LocalizedString,
  description: {
    en: "Personal portfolio of Nikolay Smilenov — Junior Web Developer building modern web applications while developing skills in AI and cybersecurity.",
    bg: "Персонално портфолио на Николай Смиленов — Junior Web Developer, който създава модерни уеб приложения, докато развива умения в AI и киберсигурността.",
  } satisfies LocalizedString,
  url: "https://nikolaysmilenov.dev",
  role: {
    en: "Junior Web Developer",
    bg: "Junior Web Developer",
  } satisfies LocalizedString,
  focus: {
    en: ["AI", "Cybersecurity", "Web Development"],
    bg: ["AI", "Киберсигурност", "Уеб разработка"],
  },
  tagline: {
    en: "Building modern web applications and digital products while developing my skills in AI, cybersecurity and software engineering.",
    bg: "Създавам модерни уеб приложения и дигитални продукти, докато развивам уменията си в AI, киберсигурността и софтуерното инженерство.",
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
