# Nikolay Smilenov — Portfolio

Personal developer portfolio for [nikolaysmilenov.dev](https://nikolaysmilenov.dev).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- Resend (contact form email delivery)

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

## Contact form (Resend)

The contact form posts to `/api/contact` and sends email via Resend to `smilenov@icloud.com`.

Configure these in **Vercel → Project → Settings → Environment Variables** (and locally in `.env.local`):

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes | Server-only Resend API key (never expose to the browser) |
| `CONTACT_FROM_EMAIL` | Recommended | Verified sender, e.g. `Nikolay Smilenov <noreply@nikolaysmilenov.dev>` |

If `CONTACT_FROM_EMAIL` is not set, the API falls back to Resend’s onboarding sender for development. For production, verify your domain in Resend and set `CONTACT_FROM_EMAIL`.

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
| `services.ts` | Service packages + contact inquiry options |

## Assets to add

1. **Social links** — `src/data/social.ts`
2. **Certificate images** — `public/certificates/`
3. **CV PDF** — `public/cv/Nikolay-Smilenov-CV.pdf` + set `cvAvailable: true` in `site.ts`
