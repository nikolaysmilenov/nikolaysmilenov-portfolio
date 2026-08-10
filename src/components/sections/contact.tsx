"use client";

import { FormEvent, type ComponentType, type SVGProps } from "react";
import { Mail, Send } from "lucide-react";
import { social } from "@/data/social";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

/**
 * Contact UI — primary action opens the real mailto address (no backend mail service).
 */
export function Contact() {
  const { dictionary } = useLocaleContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!social.email) return;

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      name ? `Portfolio contact from ${name}` : "Portfolio contact",
    );
    const body = encodeURIComponent(
      [
        name ? `Name: ${name}` : null,
        email ? `Email: ${email}` : null,
        message ? `\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
  };

  const methods = [
    {
      icon: Mail,
      label: dictionary.contact.email,
      value: social.email,
      href: social.email ? `mailto:${social.email}` : undefined,
    },
    {
      icon: GitHubIcon,
      label: dictionary.contact.github,
      value: social.github,
      href: social.github ?? undefined,
    },
    {
      icon: LinkedInIcon,
      label: dictionary.contact.linkedin,
      value: social.linkedin,
      href: social.linkedin ?? undefined,
    },
  ].filter((method) => Boolean(method.value));

  return (
    <section id="contact" className="section-pad" aria-labelledby="contact-heading">
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.contact.number}
            title={dictionary.contact.title}
            description={dictionary.contact.description}
          />
          <h2 id="contact-heading" className="sr-only">
            {dictionary.contact.srTitle}
          </h2>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
          <FadeIn delay={0.05}>
            <div className="space-y-3 rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-xs tracking-wide text-muted uppercase">
                {dictionary.contact.reachOut}
              </p>

              {methods.length > 0 ? (
                methods.map((method) => (
                  <ContactMethod
                    key={method.label}
                    icon={method.icon}
                    label={method.label}
                    value={method.value as string}
                    href={method.href}
                    sendEmailTo={dictionary.contact.sendEmailTo}
                  />
                ))
              ) : (
                <p className="rounded-xl border border-border bg-background/40 px-4 py-5 text-sm leading-relaxed text-muted">
                  {dictionary.contact.emptyMethods}
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface/80 p-6 shadow-card backdrop-blur-md sm:p-7"
              noValidate
            >
              <div className="grid gap-5">
                <Field
                  id="name"
                  name="name"
                  label={dictionary.contact.name}
                  type="text"
                  autoComplete="name"
                  required
                  placeholder={dictionary.contact.namePlaceholder}
                />
                <Field
                  id="email"
                  name="email"
                  label={dictionary.contact.email}
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={dictionary.contact.emailPlaceholder}
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {dictionary.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={dictionary.contact.messagePlaceholder}
                    className="field-input min-h-[140px] resize-y"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button type="submit" leftIcon={<Send className="h-4 w-4" />}>
                    {dictionary.contact.sendMessage}
                  </Button>
                  <p className="text-xs text-muted">
                    {dictionary.contact.preferEmail}{" "}
                    <a
                      href={`mailto:${social.email}`}
                      className="text-accent underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {social.email}
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  sendEmailTo,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  sendEmailTo: string;
}) {
  const isMail = href?.startsWith("mailto:");

  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background/50 text-accent">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-xs tracking-wide text-muted uppercase">
          {label}
        </span>
        <span
          className={cn(
            "mt-0.5 block text-sm text-foreground",
            isMail ? "break-all" : "truncate",
          )}
        >
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        aria-label={isMail ? `${sendEmailTo} ${value}` : label}
        className="flex min-h-14 items-center gap-4 rounded-xl border border-border bg-surface/80 p-4 transition-colors hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="flex min-h-14 items-center gap-4 rounded-xl border border-border bg-surface/80 p-4">
      {content}
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
  required,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="field-input"
      />
    </div>
  );
}
