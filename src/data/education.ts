import type { LocalizedString } from "@/lib/i18n";

export type EducationCourseDetail = {
  /** Keep official SoftUni course titles untranslated */
  title: string;
  /** Grade when the course/certificate is completed */
  grade?: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  /** Official course/program name — may stay untranslated when required */
  program: string | LocalizedString;
  degree?: LocalizedString;
  specialization?: LocalizedString;
  period?: LocalizedString;
  started?: LocalizedString;
  duration?: LocalizedString;
  status: "completed" | "in-progress" | "planned";
  description?: LocalizedString;
  courses?: EducationCourseDetail[];
  /** Compact topic / technology tags — keep tech names as-is */
  tags?: string[];
  /** Hidden from public UI until real data is provided */
  isPlaceholder?: boolean;
};

/**
 * Education entries.
 * SoftUni cybersecurity path certificates are completed.
 * AI Agents course is currently in progress (no certificate/grade).
 * University remains a data-ready placeholder (hidden in UI).
 */
export const education: EducationItem[] = [
  {
    id: "softuni-ai-agents",
    institution: "Software University (SoftUni)",
    program: "AI Agents and Workflows for Developers",
    started: {
      en: "August 2026",
      bg: "август 2026 г.",
    },
    duration: {
      en: "6 weeks",
      bg: "6 седмици",
    },
    status: "in-progress",
    description: {
      en: "Currently studying AI agents, workflow automation and multi-agent systems.",
      bg: "В момента изучавам AI агенти, автоматизация на работни процеси и мултиагентни системи.",
    },
    tags: [
      "n8n",
      "LangChain Agents & Tools",
      "LangChain Memory & Human-in-the-Loop",
      "LangGraph Multi-Agent Systems",
      "Workflow Automation",
      "AI Agents",
      "Multi-Agent Systems",
    ],
  },
  {
    id: "softuni-cybersecurity",
    institution: "Software University (SoftUni)",
    program: {
      en: "Cybersecurity Training",
      bg: "Обучение по киберсигурност",
    },
    status: "completed",
    description: {
      en: "Completed SoftUni cybersecurity courses covering foundational and intermediate topics.",
      bg: "Завършени курсове по киберсигурност в SoftUni, покриващи фундаментални и междинни теми.",
    },
    courses: [
      {
        title: "Introduction to Cyber Security",
        grade: "6.00 / 6.00",
      },
      {
        title: "Reconnaissance Fundamentals",
        grade: "5.40 / 6.00",
      },
      {
        title: "System and Network Compromising",
        grade: "5.54 / 6.00",
      },
    ],
  },
  {
    id: "university-placeholder",
    institution: "University",
    program: "",
    degree: { en: "", bg: "" },
    specialization: { en: "", bg: "" },
    period: { en: "", bg: "" },
    status: "planned",
    description: { en: "", bg: "" },
    isPlaceholder: true,
  },
];
