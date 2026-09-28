# OhServe Solutions — Next.js rebuild

A restructured version of ohserve.com: separate pages per category/service
(instead of one long homepage), a real booking flow, and a design system
of its own rather than the old HTML template.

## Structure

- `/` — hero, trust points, service categories, property care teaser
- `/services` — all categories
- `/services/[category]` — services within a category, with price + duration
- `/services/[category]/[service]` — service detail + booking form
- `/membership` — Essentials / Premium / Elite property care plans
- `/about` — company story
- `/contact` — contact details + booking form
- `/api/booking` — receives booking form submissions and emails them via SMTP

All service, pricing, and membership content lives in one place:
`lib/data.ts`. Edit prices, add services, or add a new category there —
every page pulls from it, so nothing needs updating in two places.

## Setup

```bash
npm install
cp .env.example .env.local
# fill in SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / BOOKING_TO_EMAIL
npm run dev
```

Open http://localhost:3000

### SMTP notes

- **Gmail**: turn on 2-Step Verification, then create an "App Password" at
  https://myaccount.google.com/apppasswords — use that as `SMTP_PASS`, port `587`.
- **Zoho Mail**: `smtp.zoho.com`, port `587`, use your mailbox password
  or an app-specific password if 2FA is on.
- Any other provider: use whatever host/port/credentials they give you for
  SMTP sending (not their API).

The booking form does not take payment — it emails the request, and you
call/WhatsApp the customer to confirm, as requested.

## Deploying

This is a standard Next.js app — deploys as-is to Vercel, Netlify, or any
Node host. Set the same environment variables (`SMTP_HOST`, `SMTP_PORT`,
`SMTP_USER`, `SMTP_PASS`, `BOOKING_TO_EMAIL`) in your hosting provider's
dashboard.

```bash
npm run build
npm run start
```

## What changed from the old site

- Content that was repeated three different ways on one page (service
  icons, "latest services" cards, "expertise" list) is now one canonical
  list per category in `lib/data.ts`.
- Removed template branding, stock testimonial photos, and autoplaying
  background videos.
- Every service now has its own bookable page instead of dead `<>` links.
- Booking goes through a real form + SMTP email instead of "call us" only.
