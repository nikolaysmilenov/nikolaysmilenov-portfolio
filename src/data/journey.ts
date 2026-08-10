import type { LocalizedString } from "@/lib/i18n";

export type JourneyItem = {
  id: string;
  year: string;
  title: string | LocalizedString;
  description: LocalizedString;
};

export const journey: JourneyItem[] = [
  {
    id: "2025-intro-cyber",
    year: "2025",
    title: "Introduction to Cyber Security",
    description: {
      en: "Started developing cybersecurity knowledge and completed Introduction to Cyber Security at SoftUni.",
      bg: "Започнах да развивам знания по киберсигурност и завърших Introduction to Cyber Security в SoftUni.",
    },
  },
  {
    id: "2025-recon",
    year: "2025",
    title: "Reconnaissance Fundamentals",
    description: {
      en: "Completed Reconnaissance Fundamentals at SoftUni.",
      bg: "Завърших Reconnaissance Fundamentals в SoftUni.",
    },
  },
  {
    id: "2026-snc",
    year: "2026",
    title: "System and Network Compromising",
    description: {
      en: "Completed System and Network Compromising at SoftUni.",
      bg: "Завърших System and Network Compromising в SoftUni.",
    },
  },
  {
    id: "2026-web-ai",
    year: "2026",
    title: {
      en: "Web Applications & Digital Products",
      bg: "Уеб приложения и дигитални продукти",
    },
    description: {
      en: "Continued developing web applications, AI-related projects and digital products.",
      bg: "Продължих да развивам уеб приложения, проекти свързани с AI и дигитални продукти.",
    },
  },
  {
    id: "2026-ai-agents",
    year: "2026",
    title: "AI Agents and Workflows for Developers",
    description: {
      en: "Started studying AI agents, workflow automation, LangChain, LangGraph and n8n at SoftUni.",
      bg: "Започнах обучение по AI агенти, автоматизация на работни процеси, LangChain, LangGraph и n8n в SoftUni.",
    },
  },
];
