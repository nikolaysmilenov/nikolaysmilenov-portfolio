"use client";

import {
  FormEvent,
  useEffect,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";
import { Mail, Send } from "lucide-react";
import {
  isServiceInquiryId,
  serviceInquiryOptions,
  type ServiceInquiryId,
} from "@/data/services";
import { social } from "@/data/social";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  clearContactServiceIntent,
  readContactServiceIntent,
} from "@/lib/contact-intent";
import { cn } from "@/lib/utils";

type SubmitStatus = "idle" | "sending" | "success" | "error";

/**
 * Contact UI — submits through /api/contact (Resend) without opening a mail client.
 */
export function Contact() {
  const { locale, dictionary } = useLocaleContext();
  const [serviceId, setServiceId] = useState<ServiceInquiryId | "">("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const interestPrefix =
      locale === "bg" ? "Интересувам се от:" : "I'm interested in:";

    const applyIntent = () => {
      const intent = readContactServiceIntent();
      if (!intent) return;
      setServiceId(intent.serviceId);
      setStatus("idle");
      setFeedback(null);

      if (intent.detail) {
        setMessage((current) => {
          const trimmed = current.trim();
          if (!trimmed || trimmed.startsWith(interestPrefix)) {
            return `${interestPrefix} ${intent.detail}`;
          }
          return current;
        });
      }

      window.setTimeout(() => {
        const select = document.getElementById(
          "service",
        ) as HTMLSelectElement | null;
        select?.classList.add("ring-2", "ring-accent/60");
        window.setTimeout(() => {
          select?.classList.remove("ring-2", "ring-accent/60");
        }, 1600);
      }, 0);
    };

    applyIntent();
    window.addEventListener("hashchange", applyIntent);
    window.addEventListener("contact-service-intent", applyIntent);
    return () => {
      window.removeEventListener("hashchange", applyIntent);
      window.removeEventListener("contact-service-intent", applyIntent);
    };
  }, [locale]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          service: serviceId,
          message,
          website: honeypot,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;

      if (!response.ok || !payload?.ok) {
        setStatus("error");
        setFeedback(dictionary.contact.submitError);
        return;
      }

      clearContactServiceIntent();
      setName("");
      setEmail("");
      setMessage("");
      setServiceId("");
      setHoneypot("");
      setStatus("success");
      setFeedback(dictionary.contact.submitSuccess);
    } catch {
      setStatus("error");
      setFeedback(dictionary.contact.submitError);
    }
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

  const isSending = status === "sending";

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
              className="relative rounded-2xl border border-border bg-surface/80 p-6 shadow-card backdrop-blur-md sm:p-7"
              noValidate
            >
              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {dictionary.contact.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={serviceId}
                    disabled={isSending}
                    onChange={(event) =>
                      setServiceId(
                        isServiceInquiryId(event.target.value)
                          ? event.target.value
                          : "",
                      )
                    }
                    className="field-input"
                  >
                    <option value="">
                      {dictionary.contact.servicePlaceholder}
                    </option>
                    {serviceInquiryOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.title[locale]}
                      </option>
                    ))}
                  </select>
                </div>
                <Field
                  id="name"
                  name="name"
                  label={dictionary.contact.name}
                  type="text"
                  autoComplete="name"
                  required
                  disabled={isSending}
                  value={name}
                  onChange={setName}
                  placeholder={dictionary.contact.namePlaceholder}
                />
                <Field
                  id="email"
                  name="email"
                  label={dictionary.contact.email}
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isSending}
                  value={email}
                  onChange={setEmail}
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
                    disabled={isSending}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder={dictionary.contact.messagePlaceholder}
                    className="field-input min-h-[140px] resize-y"
                  />
                </div>

                {/* Honeypot — hidden from real users */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>

                {feedback ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className={cn(
                      "rounded-xl border px-4 py-3 text-sm leading-relaxed",
                      status === "success"
                        ? "border-accent/30 bg-accent/10 text-foreground"
                        : "border-border bg-surface-elevated text-muted",
                    )}
                  >
                    {feedback}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Button
                    type="submit"
                    disabled={isSending}
                    leftIcon={<Send className="h-4 w-4" />}
                  >
                    {isSending
                      ? dictionary.contact.sending
                      : dictionary.contact.sendMessage}
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
  value,
  onChange,
  disabled,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
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
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className="field-input"
      />
    </div>
  );
}
