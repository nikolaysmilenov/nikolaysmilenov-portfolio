"use client";

import Image from "next/image";
import { useState } from "react";
import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

type ProfileImageProps = {
  src?: string;
  alt: string;
  className?: string;
};

/**
 * Profile photo with graceful fallback.
 * Asset: public/profile/nikolay-smilenov.jpg
 */
export function ProfileImage({
  src = "/profile/nikolay-smilenov.jpg",
  alt,
  className,
}: ProfileImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showPlaceholder = failed || !loaded;

  return (
    <div
      className={cn(
        "relative mx-auto h-[100px] w-[100px] shrink-0 sm:h-[120px] sm:w-[120px] lg:h-[136px] lg:w-[136px]",
        className,
      )}
    >
      <div
        className="absolute -inset-1 rounded-full bg-accent/20 blur-md"
        aria-hidden
      />
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-full",
          "border border-border bg-surface-elevated",
          "ring-1 ring-accent/20",
        )}
      >
        {!failed ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100px, 136px"
            priority
            unoptimized
            className={cn(
              "object-cover transition-opacity duration-300",
              loaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setFailed(true);
              setLoaded(false);
            }}
          />
        ) : null}

        {showPlaceholder ? (
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface via-background to-accent/10"
            aria-hidden={loaded && !failed}
          >
            <UserRound className="h-10 w-10 text-accent/70" aria-hidden />
          </div>
        ) : null}
      </div>
    </div>
  );
}
