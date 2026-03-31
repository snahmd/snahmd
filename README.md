# ahmedsan.com

Personal portfolio website for Ahmed San - E-Commerce Entrepreneur & Web/App Developer.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** tsparticles, Swiper
- **Font:** Poppins (via next/font)

## Features

- Particle background with glitch text effect
- Typewriter animation with multi-language support (EN/TR/DE)
- SVG scroll-based skill path animation
- Project showcase with Swiper slider
- Responsive design (mobile & desktop)
- SEO optimized (Open Graph, Twitter Cards, metadata)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Project Structure

```
src/
  app/          - Layout, page, global styles, favicon
  components/   - HeroSection, Typewriter, SkillsSection, ProjectsSection, Footer
  context/      - LanguageContext (EN/TR/DE)
  hooks/        - useScrollAnimation
  data/         - translations, projects, skills
public/
  ahmed.jpg     - Hero background
  logo.png      - Site logo
  app-logo/     - Skill icons
  projects/     - Project screenshots
```

## Deployment

Deployed via GitHub Pages. Domain: [snahmd.com](https://snahmd.com) / [ahmedsan.com](https://ahmedsan.com)
