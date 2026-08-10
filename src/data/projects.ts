import type { LocalizedString, LocalizedStringList } from "@/lib/i18n";

export type ProjectStatus = "live" | "private";

export type Project = {
  id: string;
  title: string;
  /** Short one-line card description */
  description: LocalizedString;
  overview: LocalizedString;
  whatIBuilt: LocalizedStringList;
  keyFeatures: LocalizedStringList;
  technologies: string[];
  previewImage: string;
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  statusLabel: LocalizedString;
  private?: boolean;
  featured?: boolean;
};

/**
 * Featured projects — append objects here to add more work.
 * Only include verified information.
 */
export const projects: Project[] = [
  {
    id: "satovcha-info",
    title: "Satovcha.info",
    description: {
      en: "A modern local news and community information platform for Satovcha and the Western Rhodopes.",
      bg: "Модерна платформа за местни новини и обществена информация за Сатовча и Западните Родопи.",
    },
    overview: {
      en: "A modern local news and community information platform focused on Satovcha and the Western Rhodopes. The platform brings local information into one place, including news, events, tourism, businesses, listings, jobs, villages and an interactive map.",
      bg: "Модерна платформа за местни новини и обществена информация с фокус върху Сатовча и Западните Родопи. Платформата събира местната информация на едно място — новини, събития, туризъм, бизнеси, обяви, работа, села и интерактивна карта.",
    },
    whatIBuilt: {
      en: [
        "Modern responsive web interface",
        "Local news and community portal structure",
        "Navigation and category architecture",
        "Search-oriented content experience",
        "Tourism and local information sections",
        "Business and listings structure",
        "Events section",
        "Villages section",
        "Interactive map section",
        "Responsive layouts for desktop and mobile",
        "SEO-oriented website structure",
      ],
      bg: [
        "Модерен адаптивен уеб интерфейс",
        "Структура на портал за местни новини и общност",
        "Архитектура на навигацията и категориите",
        "Съдържание, ориентирано към търсене",
        "Секции за туризъм и местна информация",
        "Структура за бизнеси и обяви",
        "Секция за събития",
        "Секция за села",
        "Секция с интерактивна карта",
        "Адаптивни оформления за десктоп и мобилни устройства",
        "SEO-ориентирана структура на сайта",
      ],
    },
    keyFeatures: {
      en: [
        "Local news",
        "Events",
        "Tourism information",
        "Businesses and listings",
        "Jobs",
        "Villages",
        "Interactive map",
        "Responsive design",
        "SEO-oriented structure",
      ],
      bg: [
        "Местни новини",
        "Събития",
        "Туристическа информация",
        "Бизнеси и обяви",
        "Работа",
        "Села",
        "Интерактивна карта",
        "Адаптивен дизайн",
        "SEO-ориентирана структура",
      ],
    },
    technologies: [],
    previewImage: "/projects/satovcha.png",
    liveUrl: "https://satovcha.info",
    githubUrl: "https://github.com/satovchainfo-debug/satovcha-info",
    status: "live",
    statusLabel: {
      en: "Live Project",
      bg: "Активен проект",
    },
    featured: true,
  },
  {
    id: "promoguru-bg",
    title: "PromoGuru.bg",
    description: {
      en: "A Bulgarian platform for discovering promotions, discount codes and deals from online stores.",
      bg: "Българска платформа за откриване на промоции, кодове за отстъпка и оферти от онлайн магазини.",
    },
    overview: {
      en: "A Bulgarian platform for discovering promotions, discount codes and deals from online stores. The platform is designed around automatically collecting, validating and updating promotional information.",
      bg: "Българска платформа за откриване на промоции, кодове за отстъпка и оферти от онлайн магазини. Платформата е проектирана около автоматично събиране, валидиране и обновяване на промоционална информация.",
    },
    whatIBuilt: {
      en: [
        "Modern responsive promotional platform",
        "Store and promotion discovery experience",
        "Search functionality",
        "Categories and store navigation",
        "Promotion and deal cards",
        "Promotion tracking concepts",
        "Automated promotion data processing",
        "Validation workflow",
        "SEO-oriented pages",
        "Admin and management functionality where implemented",
        "Responsive UI",
        "Production deployment workflow",
      ],
      bg: [
        "Модерна адаптивна промоционална платформа",
        "Изживяване за откриване на магазини и промоции",
        "Функционалност за търсене",
        "Категории и навигация по магазини",
        "Карти за промоции и оферти",
        "Концепции за проследяване на промоции",
        "Автоматизирана обработка на промоционални данни",
        "Работен процес за валидиране",
        "SEO-ориентирани страници",
        "Административна и управленска функционалност, където е реализирана",
        "Адаптивен UI",
        "Работен процес за продукционно публикуване",
      ],
    },
    keyFeatures: {
      en: [
        "Promotion discovery",
        "Store navigation",
        "Search",
        "Categories",
        "Automated data processing",
        "Validation workflow",
        "SEO-oriented pages",
        "Responsive UI",
      ],
      bg: [
        "Откриване на промоции",
        "Навигация по магазини",
        "Търсене",
        "Категории",
        "Автоматизирана обработка на данни",
        "Работен процес за валидиране",
        "SEO-ориентирани страници",
        "Адаптивен UI",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "Supabase",
      "Vercel",
      "SEO",
      "Automation",
      "AI",
    ],
    previewImage: "/projects/promoguru.png",
    liveUrl: "https://promoguru.bg",
    githubUrl: "https://github.com/promogurubg-netizen/promo-guru-bg",
    status: "live",
    statusLabel: {
      en: "Live Project",
      bg: "Активен проект",
    },
    featured: true,
  },
  {
    id: "stinger",
    title: "Stinger",
    description: {
      en: "A private trading analysis, monitoring and decision-support platform connected to MetaTrader 5.",
      bg: "Частна платформа за търговски анализ, мониторинг и подкрепа на решения, свързана с MetaTrader 5.",
    },
    overview: {
      en: "A private trading analysis, monitoring and decision-support platform connected to MetaTrader 5. The system provides a centralized operational dashboard for market scanning, decision analysis, risk monitoring and system health. This is a private engineering project — not a public financial product.",
      bg: "Частна платформа за търговски анализ, мониторинг и подкрепа на решения, свързана с MetaTrader 5. Системата предоставя централизирано оперативно табло за пазарно сканиране, анализ на решения, мониторинг на риска и състоянието на системата. Това е частен инженерен проект — не публичен финансов продукт.",
    },
    whatIBuilt: {
      en: [
        "Centralized dashboard",
        "MetaTrader 5 integration",
        "Automated market scanning",
        "BUY / SELL / NO TRADE decision workflow",
        "Decision analysis",
        "Risk monitoring",
        "Position monitoring",
        "AI analysis and status monitoring",
        "Bayesian and ensemble analysis indicators",
        "Scanning pipeline visibility",
        "Learning and replay status",
        "Operational and system health monitoring",
        "Real-time status information",
        "Private desktop interface",
      ],
      bg: [
        "Централизирано табло",
        "Интеграция с MetaTrader 5",
        "Автоматизирано пазарно сканиране",
        "Работен процес за решения BUY / SELL / NO TRADE",
        "Анализ на решения",
        "Мониторинг на риска",
        "Мониторинг на позиции",
        "AI анализ и мониторинг на статуса",
        "Индикатори за Bayesian и ensemble анализ",
        "Видимост на pipeline за сканиране",
        "Статус на обучение и replay",
        "Оперативен мониторинг и здраве на системата",
        "Информация за статуса в реално време",
        "Частен десктоп интерфейс",
      ],
    },
    keyFeatures: {
      en: [
        "MT5 connection",
        "Automated scanning",
        "Decision engine",
        "Bayesian analysis",
        "Ensemble analysis",
        "Risk monitoring",
        "Position monitoring",
        "AI status",
        "Learning and replay status",
        "System monitoring",
      ],
      bg: [
        "Връзка с MT5",
        "Автоматизирано сканиране",
        "Двигател за решения",
        "Bayesian анализ",
        "Ensemble анализ",
        "Мониторинг на риска",
        "Мониторинг на позиции",
        "AI статус",
        "Статус на обучение и replay",
        "Системен мониторинг",
      ],
    },
    technologies: [],
    previewImage: "/projects/stinger.png",
    status: "private",
    statusLabel: {
      en: "Private Project",
      bg: "Частен проект",
    },
    private: true,
    featured: true,
  },
];
