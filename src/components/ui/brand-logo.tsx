"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * NS monogram — inline SVG recreation of the approved brand mark.
 * Sharp geometric N interlocking with flowing S; blue → violet gradient.
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
        "relative inline-flex h-9 w-10 shrink-0 items-center sm:h-10 sm:w-11",
        className,
      )}
    >
      <svg
        viewBox="0 0 72 60"
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full"
        fill="none"
      >
        <title id={titleId}>{title}</title>
        <defs>
          <linearGradient
            id={gradId}
            x1="6"
            y1="2"
            x2="68"
            y2="58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        <g
          stroke={`url(#${gradId})`}
          strokeWidth="8.5"
          strokeLinejoin="miter"
        >
          {/* N left upright → sharp tip */}
          <path d="M16 54V20L26 6" strokeLinecap="butt" />
          {/* N diagonal (passes over S tip for interlock) */}
          <path d="M16 22L42 54" strokeLinecap="butt" />
          {/* Shared upright */}
          <path d="M38 8V40" strokeLinecap="butt" />
          {/* S top bar — sharp terminals */}
          <path d="M38 14H60" strokeLinecap="butt" />
          {/* S lower ribbon → rounded tip under the diagonal */}
          <path
            d="M38 32H58C68 32 70 48 52 52C42 54 30 52 18 49"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
}
