import type { LocalizedString, LocalizedStringList } from "@/lib/i18n";

export type ServicePriceType = "starting-from" | "monthly" | "hourly";

export type ServiceCategoryId =
  | "websites"
  | "software"
  | "maintenance"
  | "custom";

export type Service = {
  id: string;
  /** Value used in the Contact form select / mailto */
  inquiryId: string;
  category: ServiceCategoryId;
  title: LocalizedString;
  description: LocalizedString;
  price: number;
  priceType: ServicePriceType;
  features: LocalizedStringList;
  /** Optional note under the price */
  priceNote?: LocalizedString;
};

export type ServiceCategory = {
  id: ServiceCategoryId;
  number: string;
  title: LocalizedString;
  description?: LocalizedString;
  variant: "project" | "maintenance" | "custom";
  services: Service[];
};

/** Contact form / mailto inquiry options (includes cross-cutting choices). */
export const serviceInquiryOptions = [
  { id: "landing-page", title: { en: "Landing Page", bg: "Landing страница" } },
  { id: "starter-website", title: { en: "Starter Website", bg: "Стартов уебсайт" } },
  {
    id: "business-website",
    title: { en: "Business Website", bg: "Бизнес уебсайт" },
  },
  {
    id: "advanced-website",
    title: { en: "Advanced Website", bg: "Разширен уебсайт" },
  },
  {
    id: "automation-tools",
    title: {
      en: "Automation & Internal Tools",
      bg: "Автоматизация и вътрешни инструменти",
    },
  },
  {
    id: "custom-web-app",
    title: {
      en: "Custom Web Applications",
      bg: "Персонализирани уеб приложения",
    },
  },
  {
    id: "custom-software",
    title: { en: "Custom Software", bg: "Персонализиран софтуер" },
  },
  {
    id: "essential-care",
    title: { en: "Essential Care", bg: "Essential Care" },
  },
  {
    id: "business-care",
    title: { en: "Business Care", bg: "Business Care" },
  },
  {
    id: "priority-care",
    title: { en: "Priority Care", bg: "Priority Care" },
  },
  {
    id: "custom-project",
    title: { en: "Custom Project", bg: "Персонализиран проект" },
  },
  { id: "other", title: { en: "Other", bg: "Друго" } },
] as const;

export type ServiceInquiryId = (typeof serviceInquiryOptions)[number]["id"];

export const SERVICE_INQUIRY_STORAGE_KEY = "portfolio-contact-service";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "websites",
    number: "01",
    variant: "project",
    title: {
      en: "Websites",
      bg: "Уебсайтове",
    },
    description: {
      en: "Responsive websites for products, businesses and personal brands.",
      bg: "Адаптивни уебсайтове за продукти, бизнеси и лични брандове.",
    },
    services: [
      {
        id: "landing-page",
        inquiryId: "landing-page",
        category: "websites",
        title: { en: "Landing Page", bg: "Landing страница" },
        description: {
          en: "A focused, responsive website for a product, service, campaign or personal project.",
          bg: "Фокусиран, адаптивен уебсайт за продукт, услуга, кампания или личен проект.",
        },
        price: 299,
        priceType: "starting-from",
        features: {
          en: [
            "1-page responsive website",
            "Custom UI",
            "Mobile optimization",
            "Contact / CTA",
            "Basic SEO setup",
            "Deployment",
          ],
          bg: [
            "Едностраничен адаптивен уебсайт",
            "Персонализиран UI",
            "Мобилна оптимизация",
            "Контакт / CTA",
            "Базова SEO настройка",
            "Публикуване (deployment)",
          ],
        },
      },
      {
        id: "starter-website",
        inquiryId: "starter-website",
        category: "websites",
        title: { en: "Starter Website", bg: "Стартов уебсайт" },
        description: {
          en: "A professional website for a small business, service or personal brand.",
          bg: "Професионален уебсайт за малък бизнес, услуга или личен бранд.",
        },
        price: 449,
        priceType: "starting-from",
        features: {
          en: [
            "Up to approximately 5 pages",
            "Responsive design",
            "Custom sections",
            "Contact functionality",
            "Basic SEO",
            "Deployment",
          ],
          bg: [
            "До около 5 страници",
            "Адаптивен дизайн",
            "Персонализирани секции",
            "Контактна функционалност",
            "Базово SEO",
            "Публикуване (deployment)",
          ],
        },
      },
      {
        id: "business-website",
        inquiryId: "business-website",
        category: "websites",
        title: { en: "Business Website", bg: "Бизнес уебсайт" },
        description: {
          en: "A more complete website for businesses that need a stronger online presence.",
          bg: "По-завършен уебсайт за бизнеси, които имат нужда от по-силно онлайн присъствие.",
        },
        price: 699,
        priceType: "starting-from",
        features: {
          en: [
            "Multi-page structure",
            "Custom UI",
            "Responsive design",
            "Forms and integrations",
            "SEO-oriented structure",
            "Deployment",
          ],
          bg: [
            "Многостранична структура",
            "Персонализиран UI",
            "Адаптивен дизайн",
            "Форми и интеграции",
            "SEO-ориентирана структура",
            "Публикуване (deployment)",
          ],
        },
      },
      {
        id: "advanced-website",
        inquiryId: "advanced-website",
        category: "websites",
        title: { en: "Advanced Website", bg: "Разширен уебсайт" },
        description: {
          en: "For websites that require dynamic content, databases, APIs or more advanced functionality.",
          bg: "За уебсайтове, които изискват динамично съдържание, бази данни, API-та или по-разширена функционалност.",
        },
        price: 999,
        priceType: "starting-from",
        features: {
          en: [
            "Dynamic content",
            "Database integration",
            "Authentication when required",
            "API integrations",
            "Admin functionality",
            "Deployment",
          ],
          bg: [
            "Динамично съдържание",
            "Интеграция с база данни",
            "Автентикация при нужда",
            "API интеграции",
            "Административна функционалност",
            "Публикуване (deployment)",
          ],
        },
        priceNote: {
          en: "Exact scope is agreed before development.",
          bg: "Точният обхват се договаря преди разработката.",
        },
      },
    ],
  },
  {
    id: "software",
    number: "02",
    variant: "project",
    title: {
      en: "Custom Software",
      bg: "Персонализиран софтуер",
    },
    description: {
      en: "Tools and applications built around a specific workflow or idea.",
      bg: "Инструменти и приложения, изградени около конкретен работен процес или идея.",
    },
    services: [
      {
        id: "automation-tools",
        inquiryId: "automation-tools",
        category: "software",
        title: {
          en: "Automation & Internal Tools",
          bg: "Автоматизация и вътрешни инструменти",
        },
        description: {
          en: "Custom tools and automation designed to simplify repetitive workflows and business processes.",
          bg: "Персонализирани инструменти и автоматизация, създадени да опростят повтарящи се работни процеси и бизнес процеси.",
        },
        price: 500,
        priceType: "starting-from",
        features: {
          en: [
            "Data processing",
            "Web crawling",
            "Validation systems",
            "Internal dashboards",
            "Workflow automation",
            "API integrations",
          ],
          bg: [
            "Обработка на данни",
            "Web crawling",
            "Системи за валидиране",
            "Вътрешни табла",
            "Автоматизация на работни процеси",
            "API интеграции",
          ],
        },
      },
      {
        id: "custom-web-app",
        inquiryId: "custom-web-app",
        category: "software",
        title: {
          en: "Custom Web Applications",
          bg: "Персонализирани уеб приложения",
        },
        description: {
          en: "Custom web applications built around a specific business process, idea or workflow.",
          bg: "Персонализирани уеб приложения, изградени около конкретен бизнес процес, идея или работен поток.",
        },
        price: 800,
        priceType: "starting-from",
        features: {
          en: [
            "Dashboards",
            "Business tools",
            "User systems",
            "Database-driven applications",
            "Custom platforms",
          ],
          bg: [
            "Табла (dashboards)",
            "Бизнес инструменти",
            "Потребителски системи",
            "Приложения върху база данни",
            "Персонализирани платформи",
          ],
        },
      },
      {
        id: "custom-software",
        inquiryId: "custom-software",
        category: "software",
        title: { en: "Custom Software", bg: "Персонализиран софтуер" },
        description: {
          en: "Larger custom software projects built according to specific technical requirements.",
          bg: "По-големи персонализирани софтуерни проекти според конкретни технически изисквания.",
        },
        price: 1500,
        priceType: "starting-from",
        features: {
          en: [
            "Requirements-based scoping",
            "Custom architecture for the project",
            "Iterative delivery",
            "Individual evaluation before a final quote",
          ],
          bg: [
            "Обхват според изискванията",
            "Архитектура според проекта",
            "Итеративна доставка",
            "Индивидуална оценка преди крайна оферта",
          ],
        },
        priceNote: {
          en: "Every custom software project is evaluated individually before a final quote is provided.",
          bg: "Всеки персонализиран софтуерен проект се оценява индивидуално преди крайна оферта.",
        },
      },
    ],
  },
  {
    id: "maintenance",
    number: "03",
    variant: "maintenance",
    title: {
      en: "Website Maintenance",
      bg: "Поддръжка на уебсайт",
    },
    description: {
      en: "Monthly support for small changes, fixes and ongoing technical care.",
      bg: "Месечна поддръжка за малки промени, корекции и текуща техническа грижа.",
    },
    services: [
      {
        id: "maintenance-essential",
        inquiryId: "essential-care",
        category: "maintenance",
        title: { en: "Essential Care", bg: "Essential Care" },
        description: {
          en: "Essential technical care for small websites.",
          bg: "Основна техническа грижа за малки сайтове.",
        },
        price: 49,
        priceType: "monthly",
        features: {
          en: [
            "Technical updates",
            "Backup checks",
            "Basic technical issue checks",
            "Small content changes",
            "Basic monitoring",
          ],
          bg: [
            "Технически актуализации",
            "Backup проверки",
            "Проверка за основни технически проблеми",
            "Малки промени по съдържанието",
            "Базов мониторинг",
          ],
        },
      },
      {
        id: "maintenance-standard",
        inquiryId: "business-care",
        category: "maintenance",
        title: { en: "Business Care", bg: "Business Care" },
        description: {
          en: "Complete ongoing maintenance for business websites.",
          bg: "Цялостна текуща поддръжка за бизнес сайт.",
        },
        price: 99,
        priceType: "monthly",
        features: {
          en: [
            "Everything in Essential Care",
            "Bug fixes",
            "Content updates",
            "Performance checks",
            "Minor improvements",
            "Deployment and technical support",
          ],
          bg: [
            "Всичко от Essential Care",
            "Bug fixes",
            "Content updates",
            "Performance checks",
            "Малки подобрения",
            "Deployment и техническа поддръжка",
          ],
        },
      },
      {
        id: "maintenance-priority",
        inquiryId: "priority-care",
        category: "maintenance",
        title: { en: "Priority Care", bg: "Priority Care" },
        description: {
          en: "Priority maintenance for websites your business relies on.",
          bg: "Приоритетна поддръжка за сайтове, на които бизнесът разчита.",
        },
        price: 179,
        priceType: "monthly",
        features: {
          en: [
            "Everything in Business Care",
            "Priority requests",
            "Faster response",
            "More frequent technical checks",
            "Minor functional improvements",
            "Technical monitoring",
          ],
          bg: [
            "Всичко от Business Care",
            "Приоритетни заявки",
            "По-бърза реакция",
            "По-чести технически проверки",
            "Малки функционални подобрения",
            "Технически мониторинг",
          ],
        },
      },
    ],
  },
  {
    id: "custom",
    number: "04",
    variant: "custom",
    title: {
      en: "Custom Projects",
      bg: "Персонализирани проекти",
    },
    services: [
      {
        id: "custom-project",
        inquiryId: "custom-project",
        category: "custom",
        title: { en: "Custom Project", bg: "Персонализиран проект" },
        description: {
          en: "Have a specific idea that doesn't fit one of the packages? Tell me what you want to build and I'll evaluate the requirements and provide a custom quote.",
          bg: "Имате конкретна идея, която не попада в пакетите? Споделете какво искате да изградим — ще оценя изискванията и ще предложа индивидуална оферта.",
        },
        price: 500,
        priceType: "starting-from",
        features: {
          en: [
            "Web platforms",
            "Business tools",
            "Automation systems",
            "Custom dashboards",
            "Data-driven applications",
            "Other technically achievable projects",
          ],
          bg: [
            "Уеб платформи",
            "Бизнес инструменти",
            "Системи за автоматизация",
            "Персонализирани табла",
            "Приложения, базирани на данни",
            "Други технически осъществими проекти",
          ],
        },
      },
    ],
  },
];

export const additionalHourlyRate = {
  price: 30,
  priceType: "hourly" as const,
  label: {
    en: "Additional work",
    bg: "Допълнителна работа",
  } satisfies LocalizedString,
  description: {
    en: "Additional work outside the included monthly service allowance: €30 / hour.",
    bg: "Допълнителна работа извън включения месечен ресурс: €30 / час.",
  } satisfies LocalizedString,
};

export function formatServicePrice(
  price: number,
  priceType: ServicePriceType,
  locale: "en" | "bg",
  labels: {
    startingFrom: string;
    perMonth: string;
    perHour: string;
  },
): string {
  const amount = new Intl.NumberFormat(locale === "bg" ? "bg-BG" : "en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

  if (priceType === "monthly") {
    return `${amount} ${labels.perMonth}`;
  }
  if (priceType === "hourly") {
    return `${amount} ${labels.perHour}`;
  }
  return `${labels.startingFrom} ${amount}`;
}

export function isServiceInquiryId(value: string): value is ServiceInquiryId {
  return serviceInquiryOptions.some((option) => option.id === value);
}

export function getServiceInquiryTitle(
  id: string,
  locale: "en" | "bg",
): string | null {
  const option = serviceInquiryOptions.find((item) => item.id === id);
  return option ? option.title[locale] : null;
}
