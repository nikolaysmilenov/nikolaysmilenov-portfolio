"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Kept for API compatibility — CSS animation handles motion. */
  y?: number;
  once?: boolean;
};

/**
 * Lightweight scroll-friendly fade. Uses CSS so content is never left invisible.
 */
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <div
      className={cn("animate-fade-up", className)}
      style={{ animationDelay: `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </div>
  );
}

type FadeInItemProps = {
  children: ReactNode;
  className?: string;
  index?: number;
};

export function FadeInItem({ children, className, index = 0 }: FadeInItemProps) {
  return (
    <FadeIn className={cn(className)} delay={Math.min(index * 0.06, 0.3)}>
      {children}
    </FadeIn>
  );
}
