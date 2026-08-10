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
      en: "An end-to-end regional web platform for Satovcha Municipality and the Western Rhodopes.",
      bg: "Цялостна регионална уеб платформа за община Сатовча и Западните Родопи.",
    },
    overview: {
      en: "Satovcha.info is a regional information platform built for residents, visitors and local organizations around Satovcha Municipality. Instead of scattering news, events, tourism, businesses, classifieds, jobs and village information across separate channels, the platform brings them into one structured web product with shared navigation, search and content workflows. I built it as an independent full-stack project with a production-facing public site and an admin/content management layer.",
      bg: "Satovcha.info е регионална информационна платформа, създадена за жители, посетители и местни организации около община Сатовча. Вместо новините, събитията, туризмът, бизнесите, обявите, работата и информацията за селата да са разпръснати в отделни канали, платформата ги събира в един структуриран уеб продукт със споделена навигация, търсене и работни процеси за съдържание. Разработих я като независим full-stack проект с публичен продукционен сайт и административен слой за управление на съдържанието.",
    },
    whatIBuilt: {
      en: [
        "Designed and implemented the public portal information architecture across news, events, tourism, businesses, listings, jobs, villages and map sections",
        "Built responsive page layouts and navigation so the same content system works clearly on desktop and mobile",
        "Structured category-based content hubs and detail pages for local news and related community content",
        "Implemented events, tourism and village sections as dedicated content areas with shared portal patterns",
        "Built business and classified listing flows, including create/publish-oriented pages where the product supports them",
        "Implemented a jobs section for published local opportunities within the same portal structure",
        "Integrated an interactive Leaflet map experience for municipality/village-oriented exploration",
        "Built site search with server-side search APIs and a dedicated search experience",
        "Developed a custom CMS/admin layer for managing portal content types, media and publishing workflows",
        "Implemented SEO-oriented metadata, robots handling and multi-section sitemaps for the public site",
        "Connected the application to PostgreSQL via Prisma and used Supabase for auth/storage-related product needs",
      ],
      bg: [
        "Проектирах и реализирах информационната архитектура на публичния портал за новини, събития, туризъм, бизнеси, обяви, работа, села и карта",
        "Изградих адаптивни оформления и навигация, така че една и съща система за съдържание да работи ясно на десктоп и мобилни устройства",
        "Структурирах съдържателни хъбове по категории и страници с детайли за местни новини и свързано обществено съдържание",
        "Реализирах секциите за събития, туризъм и села като самостоятелни съдържателни зони със споделени портални модели",
        "Изградих потоци за бизнеси и обяви, включително страници за създаване/публикуване там, където продуктът ги поддържа",
        "Реализирах секция за работа с публикувани местни възможности в рамките на същата портална структура",
        "Интегрирах интерактивна карта с Leaflet за изследване на общината и селата",
        "Изградих търсене в сайта със сървърни search API-та и отделно потребителско изживяване за търсене",
        "Разработих собствен CMS/admin слой за управление на типове съдържание, медия и работни процеси по публикуване",
        "Реализирах SEO-ориентирани метаданни, robots правила и sitemap-и по секции за публичния сайт",
        "Свързах приложението с PostgreSQL чрез Prisma и използвах Supabase за нужди, свързани с автентикация и хранилище",
      ],
    },
    keyFeatures: {
      en: [
        "Unified regional information portal",
        "Local news hubs and article pages",
        "Events, tourism and villages sections",
        "Businesses, listings and jobs",
        "Interactive municipality map",
        "Site-wide search",
        "Custom CMS / admin workflows",
        "SEO metadata and sitemaps",
        "Responsive desktop and mobile UI",
      ],
      bg: [
        "Единен регионален информационен портал",
        "Хъбове за местни новини и страници на статии",
        "Секции за събития, туризъм и села",
        "Бизнеси, обяви и работа",
        "Интерактивна общинска карта",
        "Търсене в целия сайт",
        "Собствен CMS / административни процеси",
        "SEO метаданни и sitemap-и",
        "Адаптивен UI за десктоп и мобилни устройства",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Leaflet",
    ],
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
      en: "A Bulgarian promotion and deal discovery platform with automated collection, validation and publishing workflows.",
      bg: "Българска платформа за откриване на промоции и оферти с автоматизирано събиране, валидиране и публикуване.",
    },
    overview: {
      en: "PromoGuru.bg is a Bulgarian web platform for discovering promo codes, discounts and deals from online stores. It is not only a marketing website: the product combines a public discovery frontend with store/promotion data in Supabase, search and category navigation, and server-side automation for collecting, validating, deduplicating and refreshing promotional information. I built and maintain it as an independent project with production deployment on Vercel.",
      bg: "PromoGuru.bg е българска уеб платформа за откриване на промо кодове, намаления и оферти от онлайн магазини. Това не е само маркетинг сайт: продуктът комбинира публичен frontend за откриване с данни за магазини/промоции в Supabase, търсене и навигация по категории, както и сървърна автоматизация за събиране, валидиране, премахване на дубликати и обновяване на промоционалната информация. Изградих и поддържам проекта като независим продукт с продукционно публикуване във Vercel.",
    },
    whatIBuilt: {
      en: [
        "Built the responsive public frontend for browsing promo codes, deals, stores and categories",
        "Structured store, category, promo-code and deal data models around a Supabase/PostgreSQL backend",
        "Implemented search and discovery flows so users can find promotions and stores quickly",
        "Developed server-side crawling/import workflows that fetch and parse promotional content from store sources",
        "Added validation workflows to check and report on promotion data quality before it stays in the catalog",
        "Implemented duplicate detection for offers and content-fingerprint checks to reduce repeated imports",
        "Added reliability controls for crawler execution, including request timeouts, retries and per-store page limits",
        "Wired scheduled production jobs for import/coupon-engine runs through deployment hooks and automation",
        "Built authenticated user and admin-facing management areas for catalog and operational workflows",
        "Deployed and maintained the production application on Vercel with ongoing data and content operations",
      ],
      bg: [
        "Изградих адаптивния публичен frontend за разглеждане на промо кодове, оферти, магазини и категории",
        "Структурирах моделите за магазини, категории, промо кодове и оферти върху backend със Supabase/PostgreSQL",
        "Реализирах потоци за търсене и откриване, за да могат потребителите бързо да намират промоции и магазини",
        "Разработих сървърни crawling/import процеси, които извличат и парсват промоционално съдържание от източници на магазини",
        "Добавих работни процеси за валидиране, които проверяват и докладват качеството на промоционалните данни",
        "Реализирах откриване на дубликати за оферти и проверки с content fingerprint, за да се намалят повторните импорти",
        "Добавих механизми за надеждност на crawler изпълнението, включително timeout-и, retry логика и лимити на страници по магазин",
        "Свързах планирани продукционни задачи за import/coupon-engine през deployment hooks и автоматизация",
        "Изградих автентифицирани потребителски и административни зони за каталога и оперативните процеси",
        "Публикувах и поддържам продукционното приложение във Vercel с текущи операции по данни и съдържание",
      ],
    },
    keyFeatures: {
      en: [
        "Promo code and deal discovery",
        "Store and category navigation",
        "Search across the catalog",
        "Automated crawling and import pipelines",
        "Promotion validation workflows",
        "Duplicate detection and import safeguards",
        "Timeouts, retries and crawl limits",
        "Supabase-backed data and auth",
        "Production deployment on Vercel",
      ],
      bg: [
        "Откриване на промо кодове и оферти",
        "Навигация по магазини и категории",
        "Търсене в каталога",
        "Автоматизирани crawling и import pipelines",
        "Работни процеси за валидиране на промоции",
        "Откриване на дубликати и защита при импорт",
        "Timeout-и, retry логика и crawl лимити",
        "Данни и автентикация чрез Supabase",
        "Продукционно публикуване във Vercel",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Playwright",
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
      en: "A private automated market-analysis and trading automation system connected to MetaTrader 5.",
      bg: "Частна автоматизирана система за пазарен анализ и търговска автоматизация, свързана с MetaTrader 5.",
    },
    overview: {
      en: "Stinger is a private automated market-analysis and trading automation system connected to MetaTrader 5. It is built as a desktop engineering platform with a centralized operational dashboard for scanning markets, evaluating signals, running a decision engine, applying risk checks and monitoring system state. The project is an independent private software system — not a public financial product.",
      bg: "Stinger е частна автоматизирана система за пазарен анализ и търговска автоматизация, свързана с MetaTrader 5. Изградена е като десктоп инженерингова платформа с централизирано оперативно табло за сканиране на пазари, оценка на сигнали, работа на decision engine, прилагане на рискови проверки и мониторинг на състоянието на системата. Проектът е независима частна софтуерна система — не публичен финансов продукт.",
    },
    whatIBuilt: {
      en: [
        "Designed the system as a decision pipeline: market data → scanner → analysis → decision engine → risk checks → trading decision → MT5",
        "Built automated multi-symbol market scanning and signal evaluation workflows",
        "Implemented a decision engine that produces BUY / SELL / NO TRADE outcomes from analyzed inputs",
        "Added risk and safety monitoring layers that can block trades when checks fail",
        "Integrated MetaTrader 5 connectivity for market access and execution-related workflows",
        "Built a private desktop monitoring/control dashboard for scanning, decisions, positions, logs and system health",
        "Implemented Bayesian and ensemble analysis components used in the probability/decision path",
        "Added logging, operational status visibility and learning/replay tooling for reviewing decision flow",
      ],
      bg: [
        "Проектирах системата като decision pipeline: пазарни данни → scanner → анализ → decision engine → рискови проверки → търговско решение → MT5",
        "Изградих автоматизирани работни процеси за multi-symbol пазарно сканиране и оценка на сигнали",
        "Реализирах decision engine, който генерира резултати BUY / SELL / NO TRADE от анализираните входни данни",
        "Добавих слоеве за мониторинг на риск и безопасност, които могат да блокират сделки при неуспешни проверки",
        "Интегрирах свързаност с MetaTrader 5 за достъп до пазара и свързани с изпълнението процеси",
        "Изградих частно десктоп табло за мониторинг и контрол на сканиране, решения, позиции, логове и здраве на системата",
        "Реализирах Bayesian и ensemble компоненти за анализ, използвани в probability/decision пътя",
        "Добавих логване, видимост на оперативния статус и инструменти за learning/replay за преглед на decision flow",
      ],
    },
    keyFeatures: {
      en: [
        "Private MT5-connected automation system",
        "Multi-symbol market scanning",
        "Signal evaluation and decision engine",
        "BUY / SELL / NO TRADE workflow",
        "Risk and safety checks",
        "Bayesian and ensemble analysis components",
        "Operational desktop dashboard",
        "Logging, monitoring and replay tooling",
      ],
      bg: [
        "Частна автоматизация, свързана с MT5",
        "Multi-symbol пазарно сканиране",
        "Оценка на сигнали и decision engine",
        "Работен процес BUY / SELL / NO TRADE",
        "Рискови проверки и safety слой",
        "Bayesian и ensemble компоненти за анализ",
        "Оперативно десктоп табло",
        "Логване, мониторинг и replay инструменти",
      ],
    },
    technologies: ["Python", "PySide6", "MetaTrader 5"],
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
