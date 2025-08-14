# DropCard — Landing Page

Production-ready marketing site for DropCard (Next.js 14, App Router, TypeScript, Tailwind, Framer Motion).

## Tech
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- next/font (Inter)
- lucide-react icons
- framer-motion animations
- next/image for assets

## Getting Started




## Environment
No secrets required for local dev. A Make.com webhook is called server-side from /api/subscribe and /api/pageview.

To change the webhook URL, set an env var and read it in app/api/subscribe/route.ts and app/api/pageview/route.ts (recommended for production):



Then set MAKE_WEBHOOK_URL in Vercel Project → Settings → Environment Variables.

## Deploying to Vercel
1. Push to GitHub
2. Vercel → New Project → Import the repo
3. Accept defaults (Next.js detected) and Deploy
4. Add custom domain dropcard.app in Project → Settings → Domains and follow DNS instructions

## Accessibility & UX
- Semantic landmarks, good contrast
- Smooth scroll navigation
- Respectful motion (short, subtle, on-enter)

## Primary CTA
Both hero and final sections use components/CTAForm.tsx to POST to /api/subscribe. The API forwards { email, utm, meta } to Make.com. Pageviews are sent via /api/pageview on load.

## Project Structure
app/
  api/
    pageview/route.ts  # pageview → Make.com
    subscribe/route.ts # email signup → Make.com
  layout.tsx
  page.tsx
components/
  CTAForm.tsx
  DeviceFrame.tsx
  HeroVisual.tsx
  PageviewPing.tsx
  Section.tsx
public/
  screens/*, card/* assets

## License
Copyright © 2025 DropCard. All rights reserved.
