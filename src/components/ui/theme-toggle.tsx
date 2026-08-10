"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { usePathLocale } from "@/components/i18n/use-path-locale";
import { cn } from "@/lib/utils";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { dictionary } = usePathLocale();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const modes = [
    {
      value: "dark" as const,
      aria: dictionary.theme.darkTheme,
      icon: Moon,
    },
    {
      value: "light" as const,
      aria: dictionary.theme.lightTheme,
      icon: Sun,
    },
  ];

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-9 w-[68px] rounded-xl border border-border bg-surface-elevated/60",
          className,
        )}
        aria-hidden
      />
    );
  }

  const activeMode =
    theme === "light" || theme === "dark" ? theme : resolvedTheme;

  return (
    <div
      role="group"
      aria-label={dictionary.theme.label}
      className={cn(
        "inline-flex items-center rounded-xl border border-border bg-surface-elevated/70 p-1 backdrop-blur-md",
        className,
      )}
    >
      {modes.map(({ value, aria, icon: Icon }) => {
        const active = activeMode === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={aria}
            aria-pressed={active}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-lg transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              active
                ? "bg-accent/15 text-accent"
                : "text-muted hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
