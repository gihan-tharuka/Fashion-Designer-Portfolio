# LUMENÉ Luxury Fashion Portfolio

A premium digital portfolio for a contemporary womenswear collection exploring emotional transformation, draping, textile surface, and quiet feminine power.

## Project Overview

LUMENÉ is a front-end fashion portfolio website built to present a luxury womenswear collection in a polished, employer-ready format. The site combines editorial art direction, responsive UI design, animated storytelling, collection look pages, process documentation, garment costing, and a clear contact flow for internships, collaborations, styling work, and portfolio review.

The project is designed as both a creative portfolio and a professional web experience: visually expressive enough for fashion presentation, but structured and navigable enough for recruiters, design studios, and creative employers.

## Live Demo

Live site: _Add deployment URL here_

## Screenshots

Add screenshots after deployment or final visual QA:

| Homepage Hero | Portfolio Look Page | Pricing Archive |
| --- | --- | --- |
| _Add screenshot_ | _Add screenshot_ | _Add screenshot_ |

## Key Features

- Full-screen cinematic homepage hero using LUMENÉ artwork as a responsive background.
- Sticky-scroll brand statement and about sections for editorial storytelling.
- Six-look portfolio grid with dedicated dynamic detail pages.
- Individual look pages with concept, design development, problems, improvements, outcomes, materials, and garment imagery.
- Creative process section covering research, mood boards, customer profile, fabric/color direction, textile experiments, draping, refinement, and final outcome.
- Garment pricing and costing archive with production cost, profit margin, final selling price, and collection totals.
- Responsive mobile navigation with full-screen menu overlay.
- Contact and collaboration section with email, phone, LinkedIn, portfolio PDF download, and location availability.
- Reusable component system for buttons, reveal animations, image frames, value cards, look cards, and CTA sections.

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Images:** Next.js Image component with local assets in `public/`
- **Build Tooling:** Next.js production build

## UI/UX Highlights

- **Luxury editorial direction:** warm ivory paper textures, espresso typography, gold accents, soft cream overlays, and cinematic imagery.
- **Responsive full-bleed backgrounds:** decorative backgrounds span the full viewport while content remains constrained inside `.editorial-container`.
- **Sticky storytelling sections:** key brand and designer narratives use pinned visual columns with scrolling content panels.
- **Mobile-first refinements:** mobile menu uses an opaque full-screen overlay, visible close control, and full-width tap targets.
- **Accessible navigation:** semantic links, clear CTA labels, alt text for meaningful imagery, and keyboard focus ring styling.
- **Performance-aware animation:** Framer Motion reveal/stagger effects are subtle and respect reduced-motion preferences where implemented.

## Pages And Sections

### Homepage `/`

- Cinematic LUMENÉ hero
- Brand Statement
- About the Designer
- Featured Collection
- Creative Process
- Lookbook preview
- Design Identity
- Contact / Creative Opportunities

### Portfolio `/portfolio`

Collection overview for the six LUMENÉ looks, rendered from `lib/looks.ts`.

### Dynamic Look Pages `/portfolio/[slug]`

Each look page includes:

- Look title and subtitle
- Concept explanation
- Design development notes
- Problems and improvements
- Outcome and reflection
- Materials table
- Garment gallery imagery

### Pricing `/pricing`

Garment costing archive generated from `lib/pricing.ts`, including:

- Collection production cost
- Collection selling price direction
- Look-by-look garment tables
- Fabric usage and cost categories
- Profit margin and final selling price values

### Redirect Routes

The project also includes lightweight redirect routes:

- `/about` redirects to `/#about`
- `/process` redirects to `/#process`
- `/contact` redirects to `/#contact`
- `/portfolio/lumene` redirects to `/portfolio`

## Responsive Design Notes

- The homepage uses full-width section wrappers with centered content containers.
- `.editorial-container` controls content width only and is not used as a background layer.
- The hero uses `100svh` so it occupies exactly the visible screen height.
- Mobile backgrounds, overlays, and menus avoid fixed desktop widths and horizontal overflow.
- Portfolio grids adapt across mobile, tablet, and desktop breakpoints.
- Wide tables in the pricing page use horizontal scrolling to preserve readability on smaller screens.

## Project Structure

```text
Fashion-Designer-Portfolio/
├── app/
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout and metadata
│   ├── globals.css               # Global styles, theme, backgrounds, animations
│   ├── portfolio/
│   │   ├── page.tsx              # Portfolio index
│   │   └── [slug]/page.tsx       # Dynamic look detail pages
│   ├── pricing/page.tsx          # Garment costing archive
│   ├── about/page.tsx            # Redirect to homepage about section
│   ├── contact/page.tsx          # Redirect to homepage contact section
│   └── process/page.tsx          # Redirect to homepage process section
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── BrandStatementCopy.tsx
│   ├── Motion.tsx
│   ├── ImagePlaceholder.tsx
│   ├── LookCard.tsx
│   ├── GarmentGallery.tsx
│   ├── CTASection.tsx
│   └── ...
├── lib/
│   ├── data.ts                   # Navigation, projects, process, values
│   ├── looks.ts                  # Six-look portfolio content
│   └── pricing.ts                # Garment costing data and helpers
├── public/
│   ├── docs/portfolio.pdf
│   ├── favicon/favicon.png
│   └── images/
│       ├── designer/
│       └── website/
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

## Environment Variables

No environment variables are required for the current version of this project. It is a front-end portfolio website using local data and local assets.

## What I Learned

- How to structure a fashion portfolio as a professional web experience rather than a static image gallery.
- How to translate a collection concept into interactive sections, visual hierarchy, and responsive storytelling.
- How to use reusable React components for portfolio cards, image frames, CTA blocks, animation wrappers, and data-driven pages.
- How to build dynamic routes for individual collection looks using structured TypeScript data.
- How to present garment costing and pricing as part of a fashion design development archive.
- How to refine mobile navigation, full-bleed backgrounds, sticky sections, and cinematic hero imagery for a polished responsive result.

## Future Improvements

- Add final deployment URL and production screenshots.
- Add richer image captions and behind-the-scenes process notes.
- Add downloadable look sheets for each garment or look.
- Add optional CMS support for easier portfolio updates.
- Add more detailed accessibility testing and keyboard navigation QA.
- Add automated visual regression checks for key responsive breakpoints.

## Author

**Imalka Tharuni**  
Emerging fashion designer focused on contemporary womenswear, emotional storytelling, textile craft, draping, and surface development.

- Email: `imalkatharuni24@gmail.com`
- Phone: `078 287 0261`
- LinkedIn: [linkedin.com/in/imalka-tharuni-71b145234](https://www.linkedin.com/in/imalka-tharuni-71b145234/)
- Location: Colombo / available remotely

## License / Portfolio Use

This project is a private creative portfolio website. Design content, garment imagery, portfolio writing, and brand presentation are intended for portfolio review, recruitment, internship, collaboration, and educational showcase use.

Please do not reuse the LUMENÉ branding, collection imagery, garment concepts, or portfolio materials without permission from the author.
