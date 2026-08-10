import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Geometric NS monogram — inline SVG, no external asset.
 */
export function BrandLogo({
  className,
  title = "Nikolay Smilenov",
}: BrandLogoProps) {
  const titleId = "ns-brand-logo-title";

  return (
    <span
      className={cn(
        "relative inline-flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12",
        className,
      )}
    >
      <svg
        viewBox="0 0 48 48"
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full drop-shadow-[0_0_10px_color-mix(in_oklab,var(--accent)_22%,transparent)]"
      >
        <title id={titleId}>{title}</title>
        <defs>
          <linearGradient
            id="ns-logo-fill"
            x1="10"
            y1="8"
            x2="38"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--accent)" />
            <stop
              offset="1"
              stopColor="color-mix(in oklab, var(--accent) 70%, #8b5cf6)"
            />
          </linearGradient>
          <linearGradient
            id="ns-logo-plate"
            x1="4"
            y1="2"
            x2="44"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--surface-elevated)" />
            <stop
              offset="1"
              stopColor="color-mix(in oklab, var(--surface-elevated) 88%, var(--accent))"
            />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="14"
          fill="url(#ns-logo-plate)"
          stroke="color-mix(in oklab, var(--accent) 32%, var(--border))"
          strokeWidth="1.25"
        />

        {/* N */}
        <path
          fill="url(#ns-logo-fill)"
          d="M11.5 34.25V13.75c0-.97.78-1.75 1.75-1.75h2.35c.64 0 1.23.35 1.53.91L24 27.4V13.75c0-.97.78-1.75 1.75-1.75H28c.97 0 1.75.78 1.75 1.75v20.5c0 .97-.78 1.75-1.75 1.75h-2.35a1.75 1.75 0 0 1-1.53-.91L17 20.6v13.65c0 .97-.78 1.75-1.75 1.75H13.25c-.97 0-1.75-.78-1.75-1.75Z"
        />

        {/* S */}
        <path
          fill="url(#ns-logo-fill)"
          d="M36.25 18.1c0-3.55-2.75-5.85-6.85-5.85-2.5 0-4.55.8-6.05 2.2a1.1 1.1 0 0 0-.15 1.5l1.2 1.7a1.15 1.15 0 0 0 1.55.3c.95-.65 2-.95 3.2-.95 1.55 0 2.4.7 2.4 1.7 0 .95-.55 1.45-2.45 1.95l-2.15.6c-3.45.95-5.45 2.75-5.45 5.9 0 3.55 2.8 5.9 6.85 5.9 2.6 0 4.75-.85 6.3-2.35a1.1 1.1 0 0 0 .1-1.5l-1.2-1.7a1.15 1.15 0 0 0-1.55-.25c-1.1.75-2.3 1.15-3.55 1.15-1.7 0-2.65-.75-2.65-1.85 0-.95.55-1.45 2.55-2l2.15-.6c3.55-1 5.55-2.85 5.55-6.05Z"
        />
      </svg>
    </span>
  );
}
