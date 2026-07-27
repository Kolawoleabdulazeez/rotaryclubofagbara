# Rotary Club of Agbara — Website

Next.js 14 (**Pages Router**) + TypeScript + Tailwind CSS. Glassmorphism design in
a deep navy / gold palette, matching the reference screenshot you shared.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
pages/
  _app.tsx             Loads fonts, wraps every page in Navbar + Footer + ToastProvider
  _document.tsx         Sets <html lang="en">
  index.tsx             Home
  about.tsx              About
  projects/
    index.tsx            Projects listing
    [slug].tsx           Project detail (getStaticPaths / getStaticProps)
  events.tsx             Events
  news/
    index.tsx            News listing
    [slug].tsx           News detail (getStaticPaths / getStaticProps)
  membership.tsx          Membership
  donate.tsx              Donate
  faq.tsx                 FAQ
  contact.tsx             Contact
styles/
  globals.css            Tailwind + glass utility classes
components/
  layout/                Navbar, Footer
  ui/                    ImagePlaceholder, ToastProvider, ToastButton
  home/                  Home-page-only sections (Hero, ImpactStats, etc.)
  about/                 Timeline, LeadershipGrid
  projects/              ProjectCard, ProjectsExplorer (filtering)
  events/                EventRow, EventsExplorer (tabs)
  news/                  NewsCard
  faq/                   FaqAccordion (reused on /membership and /faq)
  forms/                 MembershipForm, ContactForm, DonateAmountPicker
lib/
  data.ts                All content: projects, events, news, leaders, FAQs, etc.
```

Edit `lib/data.ts` to change any text content, add projects/events/news, etc.
— every page reads from that one file.

## Adding your own images

Every image slot on the site uses the `<ImagePlaceholder>` component
(`components/ui/ImagePlaceholder.tsx`). Until a real file exists at the given
path, it shows a labeled placeholder box so you always know what's missing.
As soon as you drop a matching file into `public/images/...`, it renders
automatically — no code changes needed.

Create these folders/files inside `public/images/`:

**Leaders / team** (square, ~400×400px)
- `leaders/adaeze-nwosu.jpg`
- `leaders/tunde-bakare.jpg`
- `leaders/miriam-osei.jpg`
- `leaders/james-okoro.jpg`
- `leaders/farida-musa.jpg`
- `leaders/chuka-eze.jpg`
- `leaders/president-adaeze-nwosu.jpg` (home page president note)

**Projects** (landscape, ~800×450px)
- `projects/water-phase-4.jpg`
- `projects/scholarship-fund.jpg`
- `projects/maternal-clinic.jpg`
- `projects/shoreline.jpg`
- `projects/ryla-camp.jpg`
- `projects/microloan-circle.jpg`

**Events** (landscape, ~600×450px)
- `events/charity-gala.jpg`
- `events/groundbreaking.jpg`
- `events/open-house.jpg`
- `events/cleanup-day.jpg`
- `events/district-conference.jpg`

**News** (landscape, ~800×450px)
- `news/phase-3-boreholes.jpg`
- `news/new-members.jpg`
- `news/top-contributing-club.jpg`

**Testimonials** (square headshots, ~200×200px)
- `testimonials/ifeoma-a.jpg`
- `testimonials/grace-community-trust.jpg`
- `testimonials/daniel-k.jpg`

**Contact**
- `contact/map.jpg` (a static map screenshot or embed capture, ~800×450px)

If you add more projects/events/news entries in `lib/data.ts`, just point
`image:` at a new path under `public/images/...` and follow the same pattern.

## Notes

- All forms (membership inquiry, contact, newsletter, donate) currently show
  a confirmation toast on submit — wire them up to your email/CRM or an API
  route (`app/api/.../route.ts`) when you're ready to go live.
- Colors, fonts and the glass utility classes live in `tailwind.config.ts`
  and `app/globals.css` — change the `navy` / `gold` values there to
  re-theme the whole site at once.
# rotaryclubofagbara
# rotaryclubofagbara
# rotaryclubofagbara
