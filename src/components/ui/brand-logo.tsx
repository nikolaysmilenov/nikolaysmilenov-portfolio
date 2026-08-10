"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Geometric NS monogram — unmistakably “NS”.
 * Custom stroked letterforms (not a font): clear N stems + diagonal, clear open S.
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
        "relative inline-flex h-9 w-[3rem] shrink-0 items-center sm:h-10 sm:w-[3.35rem]",
        className,
      )}
    >
      <svg
        viewBox="0 0 64 46"
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full"
        fill="none"
      >
        <title id={titleId}>{title}</title>
        <defs>
          <linearGradient
            id={gradId}
            x1="2"
            y1="2"
            x2="62"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        <g
          stroke={`url(#${gradId})`}
          strokeWidth="4.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* N — left stem, diagonal, right stem */}
          <path d="M5 5V41" />
          <path d="M5 5L21 41" />
          <path d="M21 5V41" />

          {/* S — upper curve (opens left), middle, lower curve (opens right); waist near N */}
          <path d="M27 13C27 7 33.5 4.5 42 4.5C52.5 4.5 57.5 9.2 57.5 15.2C57.5 20.6 52.2 23.6 42 24.8C31 26.2 24.5 29.6 24.5 34.8C24.5 40.2 32.2 43 44.5 43C52 43 57 40.8 58.5 37.2" />
        </g>
      </svg>
    </span>
  );
}
