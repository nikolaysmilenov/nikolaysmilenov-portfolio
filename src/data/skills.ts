import type { LocalizedString } from "@/lib/i18n";

export type SkillCategory = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  items: string[];
  icon: "frontend" | "backend" | "tools" | "security" | "ai";
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: {
      en: "Frontend",
      bg: "Frontend",
    },
    description: {
      en: "Interfaces and modern UI development",
      bg: "Интерфейси и модерна UI разработка",
    },
    icon: "frontend",
    items: ["React", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: {
      en: "Backend / Data",
      bg: "Backend / Данни",
    },
    description: {
      en: "APIs, data and application backends",
      bg: "API-та, данни и бекенд на приложения",
    },
    icon: "backend",
    items: ["Node.js", "Supabase", "PostgreSQL"],
  },
  {
    id: "tools",
    title: {
      en: "Deployment / Tools",
      bg: "Deployment / Инструменти",
    },
    description: {
      en: "Version control and hosting workflows",
      bg: "Контрол на версиите и работни процеси за хостинг",
    },
    icon: "tools",
    items: ["Git", "GitHub", "Vercel"],
  },
  {
    id: "security",
    title: {
      en: "Cybersecurity",
      bg: "Киберсигурност",
    },
    description: {
      en: "Foundations from SoftUni training and hands-on practice",
      bg: "Основи чрез обучение в SoftUni и практическа работа",
    },
    icon: "security",
    items: ["Cybersecurity", "Linux", "Networking"],
  },
  {
    id: "ai",
    title: {
      en: "AI",
      bg: "AI",
    },
    description: {
      en: "Currently learning and exploring through SoftUni training and practical projects",
      bg: "В момента уча и изследвам чрез обучение в SoftUni и практически проекти",
    },
    icon: "ai",
    items: [
      "AI-assisted development",
      "AI Agents",
      "Workflow Automation",
      "n8n",
      "LangChain",
      "LangGraph",
    ],
  },
];

export const aboutFocus = [
  {
    id: "web",
    title: {
      en: "Web Development",
      bg: "Уеб разработка",
    } satisfies LocalizedString,
    description: {
      en: "Building modern, responsive web applications and interfaces through real-world projects.",
      bg: "Създаване на модерни, адаптивни уеб приложения и интерфейси чрез реални проекти.",
    } satisfies LocalizedString,
  },
  {
    id: "ai",
    title: {
      en: "AI & Automation",
      bg: "AI и автоматизация",
    } satisfies LocalizedString,
    description: {
      en: "Learning AI agents, workflows and automation while applying them to practical projects.",
      bg: "Учене на AI агенти, работни процеси и автоматизация и прилагането им в практически проекти.",
    } satisfies LocalizedString,
  },
  {
    id: "security",
    title: {
      en: "Cybersecurity",
      bg: "Киберсигурност",
    } satisfies LocalizedString,
    description: {
      en: "Developing practical cybersecurity skills through SoftUni training and hands-on practice.",
      bg: "Развиване на практически умения по киберсигурност чрез обучение в SoftUni и практика.",
    } satisfies LocalizedString,
  },
  {
    id: "learning",
    title: {
      en: "Continuous Learning",
      bg: "Непрекъснато учене",
    } satisfies LocalizedString,
    description: {
      en: "Continuously expanding my technical skills by building, testing and improving real applications.",
      bg: "Непрекъснато разширявам техническите си умения чрез изграждане, тестване и подобряване на реални приложения.",
    } satisfies LocalizedString,
  },
] as const;

/**
 * Broader learning focus areas (secondary to the active SoftUni course in education.ts).
 */
export const currentlyLearning = [
  {
    category: {
      en: "Web Development",
      bg: "Уеб разработка",
    } satisfies LocalizedString,
    note: {
      en: "Web applications and digital products through real projects",
      bg: "Уеб приложения и дигитални продукти чрез реални проекти",
    } satisfies LocalizedString,
  },
  {
    category: {
      en: "AI",
      bg: "AI",
    } satisfies LocalizedString,
    note: {
      en: "AI agents, workflows and automation (SoftUni course in progress)",
      bg: "AI агенти, работни процеси и автоматизация (курс в SoftUni в процес)",
    } satisfies LocalizedString,
  },
  {
    category: {
      en: "Cybersecurity",
      bg: "Киберсигурност",
    } satisfies LocalizedString,
    note: {
      en: "SoftUni cybersecurity training path",
      bg: "Обучителен път по киберсигурност в SoftUni",
    } satisfies LocalizedString,
  },
  {
    category: {
      en: "Development & Deployment",
      bg: "Разработка и deployment",
    } satisfies LocalizedString,
    note: {
      en: "Git, hosting, deployment and modern development tooling",
      bg: "Git, хостинг, deployment и модерни инструменти за разработка",
    } satisfies LocalizedString,
  },
] as const;
