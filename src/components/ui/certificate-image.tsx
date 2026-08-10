"use client";

import Image from "next/image";
import { useState } from "react";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

type CertificateImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  placeholderClassName?: string;
  /** Card thumbnails use cover; modal uses contain */
  fit?: "cover" | "contain";
};

export function CertificateImage({
  src,
  alt,
  sizes,
  priority,
  className,
  placeholderClassName,
  fit = "cover",
}: CertificateImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-surface via-background to-accent/12 px-6 text-center",
          placeholderClassName,
        )}
      >
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface-elevated text-accent">
          <Award className="h-5 w-5" aria-hidden />
        </span>
        <p className="relative text-sm font-medium text-foreground">
          Certificate Preview
        </p>
      </div>
    );
  }

  if (fit === "contain") {
    return (
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1131}
        sizes={sizes}
        priority={priority}
        className={cn("h-auto w-full max-w-full object-contain", className)}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      onError={() => setFailed(true)}
    />
  );
}
