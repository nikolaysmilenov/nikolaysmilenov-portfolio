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
    items: ["Git", "GitHub", "Vercel", "Cloudflare"],
  },
  {
    id: "security",
    title: {
      en: "Cybersecurity",
      bg: "Киберсигурност",
    },
    description: {
      en: "Foundations in cybersecurity practice",
      bg: "Основи в практиката по киберсигурност",
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
      en: "Applying AI in products and workflows",
      bg: "Прилагане на AI в продукти и работни процеси",
    },
    icon: "ai",
    items: [
      "AI-assisted development",
      "AI applications",
      "AI automation",
      "n8n",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Workflow Automation",
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
      en: "Full-stack applications and digital products",
      bg: "Full-stack приложения и дигитални продукти",
    } satisfies LocalizedString,
  },
  {
    category: {
      en: "AI",
      bg: "AI",
    } satisfies LocalizedString,
    note: {
      en: "AI-powered features, agents and automation",
      bg: "AI функционалности, агенти и автоматизация",
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
      en: "Software Engineering / DevOps",
      bg: "Software Engineering / DevOps",
    } satisfies LocalizedString,
    note: {
      en: "Deployment, hosting and modern tooling",
      bg: "Deployment, хостинг и модерни инструменти",
    } satisfies LocalizedString,
  },
] as const;
