import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Geometric NS monogram for Nikolay Smilenov.
 *
 * Construction: N (left upright + diagonal + shared upright) with an S
 * whose bowls are anchored to that shared upright — one intentional mark,
 * not lettering inside a tile.
 */
export function BrandLogo({
  className,
  title = "Nikolay Smilenov",
}: BrandLogoProps) {
  const titleId = "ns-brand-logo-title";

  return (
    <span
      className={cn(
        "relative inline-flex h-9 w-9 shrink-0 items-center justify-center text-foreground sm:h-10 sm:w-10",
        className,
      )}
    >
      <svg
        viewBox="0 0 40 40"
        role="img"
        aria-labelledby={titleId}
        className="h-full w-full"
        fill="none"
      >
        <title id={titleId}>{title}</title>

        <g
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* N */}
          <path d="M8 8.5v23" />
          <path d="M8 8.5l11 23" />
          <path d="M19 8.5v23" />
        </g>

        {/* S — restrained accent, same weight as N */}
        <path
          d="M19 13c4.65 0 7.5 2 7.5 4.85 0 2.15-1.4 3.45-4.45 4.25 3.45.7 5.55 2.3 5.55 4.95C27.6 30.15 24.6 32.3 19 32.3"
          stroke="var(--accent)"
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
