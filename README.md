# Nikolay Smilenov — Portfolio

Personal developer portfolio for [nikolaysmilenov.dev](https://nikolaysmilenov.dev).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Updating content

Edit data files under `src/data/`:

| File | Purpose |
|------|---------|
| `site.ts` | Name, SEO, CV path |
| `social.ts` | Email, GitHub, LinkedIn |
| `projects.ts` | Projects |
| `certificates.ts` | Certificates |
| `skills.ts` | Skills / currently learning |
| `education.ts` | Education |
| `journey.ts` | Timeline |
| `navigation.ts` | Nav / footer links |

## Assets to add

1. **Social links** — `src/data/social.ts`
2. **Certificate images** — `public/certificates/`
3. **CV PDF** — `public/cv/Nikolay-Smilenov-CV.pdf` + set `cvAvailable: true` in `site.ts`
4. **Contact form backend** — wire up Resend/Formspree in `src/components/sections/contact.tsx`
