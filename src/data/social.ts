/**
 * Social & contact links — single source of truth.
 * Null values are hidden from the public UI.
 */
export const social = {
  email: "smilenov@icloud.com" as string | null,
  github: null as string | null,
  linkedin: null as string | null,
} as const;

export type SocialKey = keyof typeof social;
