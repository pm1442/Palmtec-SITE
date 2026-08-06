# PalmTec

Marketing site for PalmTec, paid ad management run by someone who'll actually
tell you the truth. Built with Next.js (App Router) and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/` — root layout, global styles, and the page composition
- `src/components/sections/` — one component per landing-page section (Hero, TrustGap, PlatformGrid, WhyPalmTec, Qualifiers, Services, AuditForm)
- `src/components/layout/` — Header and Footer
- `src/components/ui/` — shared primitives (Button, Card, SectionHeading, Checkmark, PlaceholderPhoto, FormField, Reveal, Container)
- `src/components/forms/` — the audit-request form (client component)
- `src/lib/constants.ts` — page copy/content as typed data (nav links, platform cards, services, checklist items)
- `src/lib/validation.ts` — audit form field validation

## Known follow-ups

- **Founder photo**: `src/lib/constants.ts` has `FOUNDER_PHOTO_SRC` set to `null`, which renders a labeled placeholder in the hero. Once a real photo of Philip is available, drop it in `public/images/` and point that constant at the path.
- **Audit form backend**: the "Free ad opportunity audit" form validates client-side but doesn't submit anywhere yet. See the `// TODO` in `src/components/forms/AuditFormClient.tsx`.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
