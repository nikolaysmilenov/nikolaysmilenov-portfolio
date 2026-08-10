"use client";

import { Eye } from "lucide-react";
import type { Certificate } from "@/data/certificates";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { Button } from "@/components/ui/button";
import { CertificateImage } from "@/components/ui/certificate-image";
import { cn } from "@/lib/utils";

type CertificateCardProps = {
  certificate: Certificate;
  index?: number;
  onOpen: (certificate: Certificate) => void;
};

export function CertificateCard({
  certificate,
  index = 0,
  onOpen,
}: CertificateCardProps) {
  const { dictionary } = useLocaleContext();

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 shadow-card backdrop-blur-md",
        "transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card-hover",
        "animate-fade-up",
      )}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(certificate)}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl border-b border-border bg-background/40 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        aria-label={`${dictionary.certificates.viewCertificateAria}: ${certificate.title}`}
      >
        <CertificateImage
          src={certificate.image}
          alt={`${certificate.title} — SoftUni certificate, grade ${certificate.grade}, ${certificate.date}`}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="transition-transform duration-500 group-hover:scale-[1.03]"
          fit="cover"
        />
      </button>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
            {certificate.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{certificate.institution}</p>
        </div>

        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">
              {dictionary.certificates.date}
            </dt>
            <dd className="mt-1 text-foreground">{certificate.date}</dd>
          </div>
          <div>
            <dt className="text-xs tracking-wide text-muted uppercase">
              {dictionary.certificates.grade}
            </dt>
            <dd className="mt-1 font-semibold tabular-nums text-accent">
              {certificate.grade}
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-1">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            leftIcon={<Eye className="h-3.5 w-3.5" />}
            onClick={() => onOpen(certificate)}
          >
            {dictionary.certificates.viewCertificate}
          </Button>
        </div>
      </div>
    </article>
  );
}
