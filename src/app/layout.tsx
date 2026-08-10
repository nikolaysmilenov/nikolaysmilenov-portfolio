import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { JetBrains_Mono, Manrope, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { getDictionary } from "@/data/translations";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import {
  defaultLocale,
  isLocale,
  localeToHtmlLang,
  type Locale,
} from "@/lib/i18n";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/**
 * Cyrillic-capable brand font for Bulgarian UI.
 * Includes Latin so mixed EN/BG strings stay visually consistent on /bg.
 */
const cyrillic = Manrope({
  variable: "--font-cyrillic",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata("en"),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Nikolay Smilenov",
    "Николай Смиленов",
    "Full-Stack Web Developer",
    "AI",
    "Cybersecurity",
    "Киберсигурност",
    "Web Development",
    "Portfolio",
  ],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090f" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
  ],
  colorScheme: "dark light",
};

async function resolveLocale(): Promise<Locale> {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-locale");
  if (headerLocale && isLocale(headerLocale)) {
    return headerLocale;
  }
  return defaultLocale;
}

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const locale = await resolveLocale();
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={localeToHtmlLang(locale)}
      className={`${display.variable} ${body.variable} ${cyrillic.variable} ${mono.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            {dictionary.skipToContent}
          </a>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
