"use client";

import { useState } from "react";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/certificates";
import { useLocaleContext } from "@/components/i18n/locale-provider";
import { CertificateCard } from "@/components/ui/certificate-card";
import { CertificateModal } from "@/components/ui/certificate-modal";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";

export function Certificates() {
  const { dictionary } = useLocaleContext();
  const [active, setActive] = useState<Certificate | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (certificate: Certificate) => {
    setActive(certificate);
    setOpen(true);
  };

  return (
    <section
      id="certificates"
      className="section-pad"
      aria-labelledby="certificates-heading"
    >
      <Container>
        <FadeIn>
          <SectionHeading
            number={dictionary.certificates.number}
            title={dictionary.certificates.title}
            description={dictionary.certificates.description}
          />
          <h2 id="certificates-heading" className="sr-only">
            {dictionary.certificates.srTitle}
          </h2>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </Container>

      <CertificateModal
        certificate={active}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
