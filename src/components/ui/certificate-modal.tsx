"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import type { Certificate } from "@/data/certificates";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { CertificateImage } from "@/components/ui/certificate-image";
import { cn } from "@/lib/utils";

type CertificateModalProps = {
  certificate: Certificate | null;
  open: boolean;
  onClose: () => void;
};

export function CertificateModal({
  certificate,
  open,
  onClose,
}: CertificateModalProps) {
  const { dictionary } = useLocaleContext();
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !certificate) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label={dictionary.certificates.closeCertificate}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden",
          "rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl",
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
          <div>
            <h3
              id={titleId}
              className="font-display text-lg font-semibold text-foreground"
            >
              {certificate.title}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {certificate.institution} · {certificate.date} ·{" "}
              <span className="font-medium text-accent">{certificate.grade}</span>
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-xl border border-border p-2 text-muted transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={dictionary.certificates.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-background/50 p-3 sm:p-6">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-center rounded-xl border border-border bg-white p-2 sm:p-3">
            <CertificateImage
              key={certificate.id}
              src={certificate.image}
              alt={`${certificate.title} SoftUni certificate issued ${certificate.date}, grade ${certificate.grade}`}
              sizes="(max-width: 768px) 100vw, 896px"
              priority
              fit="contain"
              className="max-h-[min(75vh,820px)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
