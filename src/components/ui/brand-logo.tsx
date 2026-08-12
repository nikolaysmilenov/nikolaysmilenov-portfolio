"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Geometric NS monogram — interlocking N + S as SVG geometry (not a font).
 * N uses bar construction; S is a constant-weight ribbon weaving the shared spine.
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
        "relative inline-flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10",
        className,
      )}
    >
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full"
      >
        <title id={titleId}>{title}</title>
        <defs>
          <linearGradient
            id={gradId}
            x1="3"
            y1="4"
            x2="45"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        <g fill={`url(#${gradId})`}>
          {/* N — left stem */}
          <rect x="3.2" y="4.5" width="5.5" height="39" rx="0.65" />

          {/* N — diagonal into shared spine */}
          <path d="M8.7 4.5h6.3L27.2 43.5h-6.5L8.7 12.6V4.5Z" />

          {/* Shared spine = N right stem + S weave anchor */}
          <rect x="20.7" y="4.5" width="5.5" height="39" rx="0.65" />
        </g>

        {/* S ribbon — open terminals; mid weaves through the N counter/spine */}
        <path
          d="M40.2 9.6
             C40.2 6.2 36.6 4.8 31.6 4.8
             H25.4
             C20.2 4.8 19.6 9.4 19.6 12
             C19.6 17.2 27.8 18.6 33.4 20
             C40 21.8 43.4 25.8 43.4 32.2
             C43.4 39.4 36.8 43.4 27.4 43.4
             H14.8"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="5.5"
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
