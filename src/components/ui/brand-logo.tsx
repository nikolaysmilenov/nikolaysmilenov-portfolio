"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Clear premium NS monogram.
 * Distinct geometric N + conventional S, with breathing room between letters.
 */
export function BrandLogo({
  className,
  title = "Nikolay Smilenov",
}: BrandLogoProps) {
  const reactId = useId();
  const titleId = `${reactId}-title`;
  const gradId = `${reactId}-grad`;

  return (
    <span
      className={cn(
        "relative inline-flex h-9 w-[3.15rem] shrink-0 items-center sm:h-10 sm:w-[3.5rem]",
        className,
      )}
    >
      <svg
        viewBox="0 0 60 34"
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full"
      >
        <title id={titleId}>{title}</title>
        <defs>
          <linearGradient
            id={gradId}
            x1="1"
            y1="2"
            x2="59"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        <g fill={`url(#${gradId})`}>
          {/* N */}
          <rect x="1.5" y="3" width="3.6" height="28" rx="0.45" />
          <rect x="14.4" y="3" width="3.6" height="28" rx="0.45" />
          <path d="M5.1 3h3.4L18 24.4V31h-3.4L5.1 9.6V3Z" />

          {/* S — conventional letter, shifted right for clear separation */}
          <path d="M43.5 3c-6.6 0-11 3-11 7.3 0 4.5 3.8 6.3 9.8 7.4 4.4.8 6.3 2 6.3 4.1 0 2.5-2.3 4.1-6.3 4.1-3.2 0-5.7-1.1-7.4-2.9l-3.2 3.6c2.6 2.4 6.3 3.7 10.8 3.7 7.3 0 11.9-3.6 11.9-8.4 0-4.7-3.8-6.7-9.9-7.8-4.3-.8-6.2-1.8-6.2-3.9 0-2.2 2.1-3.6 5.6-3.6 2.7 0 4.9.9 6.4 2.4l2.9-3.5C50.9 4.3 47.6 3 43.5 3Z" />
        </g>
      </svg>
    </span>
  );
}
