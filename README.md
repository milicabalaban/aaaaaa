# Milica Balaban — Media Kit Website

A modern, premium personal media kit website built with Next.js, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## How to Edit Content

**All website content lives in one file:** `src/data/content.ts`

Open that file and update any text, stats, links, or descriptions. The website updates automatically.

### Replace Your Photo

1. Add your profile photo to `public/images/profile.jpg`
2. In `src/components/Hero.tsx`, replace the placeholder `<div>` (the one with the person icon SVG) with:
   ```jsx
   <img src="/images/profile.jpg" alt="Milica Balaban" className="w-full h-full object-cover" />
   ```

### Add Brand Logos

1. Add logo files (SVG or PNG) to `public/images/brands/`
2. Update the `collaborations.brands` array in `src/data/content.ts` with the correct file names

### Add Testimonial Avatars

1. Add avatar images to `public/images/testimonials/`
2. Update the `testimonials.items` array in `src/data/content.ts`

### Update Pricing

Edit the `rateCard.packages` array in `src/data/content.ts`. Replace `$XXX` with your actual prices.

### Add a Downloadable Media Kit PDF

1. Place your PDF at `public/media-kit.pdf`
2. The "Download Media Kit" button in the hero already links to it

### Add an OG Image (Social Preview)

1. Create a 1200x630 image
2. Save it as `public/images/og-image.png`

## Deploy to Vercel

The easiest way to deploy:

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Click "Deploy" — no configuration needed

Your site will be live in ~60 seconds.

## Tech Stack

- **Next.js 14** — React framework with App Router
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth scroll animations
- **TypeScript** — Type safety

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      ← SEO metadata, fonts
│   ├── page.tsx        ← Main page (section order)
│   └── globals.css     ← Colors, scrollbar styles
├── components/         ← Each section is its own component
├── data/
│   └── content.ts      ← ALL editable content
└── hooks/
    └── useCountUp.ts   ← Animated counter
```
