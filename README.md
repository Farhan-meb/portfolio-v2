# Mahbub Abedin Talukdar — Portfolio

Personal portfolio built from the `design_handoff_portfolio` brief (Nocturne design
system). Next.js 16, App Router, TypeScript strict, Tailwind CSS v4, Motion.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production build / typecheck:

```bash
npm run build   # runs next build (includes the TypeScript check)
npx tsc --noEmit
npx eslint .
```

## Environment variables

The contact form (`/` → Contact section) sends mail through
[Resend](https://resend.com). Copy `.env.example` to `.env.local` and fill in:

| Variable             | Required                   | Purpose                                                                                                                                                              |
| -------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Yes, to actually send mail | Resend API key. Without it the form still validates input but returns a friendly "not configured yet" error instead of sending.                                      |
| `CONTACT_FROM_EMAIL` | No                         | The verified "from" address/name Resend sends as, e.g. `Portfolio <hello@yourdomain.com>`. Defaults to Resend's shared sandbox sender, which only works for testing. |

The destination address is `site.email` in `content/site.ts` — no separate env var
needed for that.

Before deploying, also set `site.url` in `content/site.ts` to the real production
domain — it feeds canonical URLs, the sitemap, robots.txt and Open Graph tags.

## Adding real project screenshots

Every project visual is currently an `ImagePlaceholder` (`components/ui/ImagePlaceholder.tsx`)
— a labelled placeholder box, not a real image. To wire in a real screenshot:

1. Add the image file under `public/` (e.g. `public/projects/onesuite-hero.png`).
2. Replace the relevant `<ImagePlaceholder ... />` usage with `next/image`:
   ```tsx
   <Image src="/projects/onesuite-hero.png" alt="OneSuite.io dashboard" width={1200} height={750} />
   ```
   Match the placeholder's `ratio` (16:9 or 16:10) with your image's aspect ratio,
   and give `next/image` explicit `width`/`height` so nothing shifts on load.

Screenshot call sites today:

- `components/sections/Work.tsx` — the OneSuite hero card and the two project cards.
- `app/work/[slug]/page.tsx` — the case-study hero image and the two results screenshots
  (driven by `content/caseStudies.ts`).

## Adding a new case study

Case studies live in `content/caseStudies.ts` as a `Record<string, CaseStudy>` keyed
by slug, and are rendered by the single template at `app/work/[slug]/page.tsx`
(`generateStaticParams` reads the same object, so a new key is automatically a new
route). To add one:

1. Add a project entry to `content/projects.ts` with a non-null `slug` matching the
   key you'll use below.
2. Add a matching entry to `caseStudies` in `content/caseStudies.ts` following the
   `CaseStudy` type (overview, problem, solution, architecture diagram, challenges,
   results, etc).
3. Drop in real screenshots per the section above, or leave the `ImagePlaceholder`s.

No component changes are needed — the template is fully data-driven.

## Known gaps (carried over from the design handoff)

- Projects 002 (MU Online Judge) and 003 (JugaJug) have no GitHub or live URLs yet —
  see the "GITHUB — TBD" / "LIVE — TBD" markers in `components/sections/Work.tsx`
  and the `githubUrl`/`liveUrl` fields in `content/projects.ts`.
- All project visuals are placeholders (see above).
- Metric figures (e.g. "3,000+ businesses onboarded") use the newest of several
  conflicting CV drafts — confirm before publishing.

## Stack

Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS v4 · Motion
(`motion/react`) · `lucide-react` · Zod · Resend.
