import { About } from "@/components/sections/about";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { JsonLd } from "@/components/seo/json-ld";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <main id="main">
        <Hero locale={locale} />
        <About locale={locale} />
        <Projects />
        <Services />
        <Certificates />
        <Skills locale={locale} />
        <Education locale={locale} />
        <Journey locale={locale} />
        <Contact />
      </main>
      <JsonLd locale={locale} />
    </LocaleProvider>
  );
}
