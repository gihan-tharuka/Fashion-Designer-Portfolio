# Frontend Content Audit: LUMENÉ Portfolio

Phase: 0 discovery and data inventory  
Purpose: Prepare the existing Next.js frontend for a future Node.js + Express + PostgreSQL + Prisma backend without losing current portfolio content, images, routes, or costing data.

## 1. Project Summary

The current project is a frontend-only Next.js App Router portfolio for **LUMENÉ**, a six-look contemporary womenswear collection by **Imalka Tharuni**. It presents a luxury/editorial fashion portfolio with a cinematic homepage, collection lookbook, dynamic look detail pages, garment costing/pricing archive, process documentation, contact details, and downloadable portfolio PDF.

Current stack:

| Area | Current implementation |
| --- | --- |
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS via `app/globals.css` |
| Animation | Framer Motion |
| Data source | Hardcoded TypeScript arrays in `lib/data.ts`, `lib/looks.ts`, and `lib/pricing.ts`; some page-local arrays in `app/page.tsx` |
| Images | Local files under `public/images/` |
| Documents | Local PDF under `public/docs/portfolio.pdf` |
| Backend | None |
| Database | None |
| Auth | None |

## 2. Current Project Structure

Important directories:

```text
app/
  layout.tsx
  page.tsx
  globals.css
  portfolio/page.tsx
  portfolio/[slug]/page.tsx
  portfolio/lumene/page.tsx
  pricing/page.tsx
  about/page.tsx
  contact/page.tsx
  process/page.tsx

components/
  Navbar.tsx
  Footer.tsx
  HeroSection.tsx
  BrandStatementCopy.tsx
  LookCard.tsx
  GarmentGallery.tsx
  ImagePlaceholder.tsx
  CTASection.tsx
  ButtonLink.tsx
  Motion.tsx
  SectionHeading.tsx
  ValueCard.tsx
  SkillTag.tsx
  ProjectCard.tsx
  ProcessStep.tsx
  ColorSwatch.tsx

lib/
  data.ts
  looks.ts
  pricing.ts

public/
  docs/portfolio.pdf
  favicon/favicon.png
  images/designer/Imalka-Tharuni.jpeg
  images/website/*
```

`package.json` dependencies:

| Package | Purpose |
| --- | --- |
| `next` | App Router frontend framework |
| `react`, `react-dom` | React UI |
| `framer-motion` | Reveal/stagger/hero animation |
| `tailwindcss`, `@tailwindcss/postcss` | Styling |
| `typescript`, `@types/*` | Type checking |

## 3. Current Routes and Pages

| Route | File | Type | Current behavior |
| --- | --- | --- | --- |
| `/` | `app/page.tsx` | Main homepage | Editorial one-page experience with hero, brand statement, about, featured collection, process, lookbook, design identity, contact |
| `/portfolio` | `app/portfolio/page.tsx` | Portfolio index | Renders six look cards from `lib/looks.ts` |
| `/portfolio/[slug]` | `app/portfolio/[slug]/page.tsx` | Dynamic look detail | Uses `getLook(slug)` from `lib/looks.ts`; static params generated from all looks |
| `/portfolio/look-01` to `/portfolio/look-06` | dynamic route | Look detail routes | Six available dynamic look pages |
| `/portfolio/lumene` | `app/portfolio/lumene/page.tsx` | Redirect | Redirects to `/portfolio` |
| `/pricing` | `app/pricing/page.tsx` | Pricing archive | Renders garment costing from `lib/pricing.ts` |
| `/about` | `app/about/page.tsx` | Redirect | Redirects to `/#about` |
| `/process` | `app/process/page.tsx` | Redirect | Redirects to `/#process` |
| `/contact` | `app/contact/page.tsx` | Redirect | Redirects to `/#contact` |

No route currently exists for `/costing`; the costing content is under `/pricing`.

## 4. Current Data Sources

| File | Content type | Backend relevance |
| --- | --- | --- |
| `lib/looks.ts` | Primary six-look collection data: number, slug, name, copy, tags, materials, images | High |
| `lib/pricing.ts` | Pricing/costing data by look and garment | High |
| `lib/data.ts` | Navigation, project placeholders, design identity values, process steps, swatches, skills | Medium |
| `app/page.tsx` | Homepage-only content arrays: contact details, skills, creative interests, process steps, process images, lookbook layout metadata | Medium/High |
| `components/BrandStatementCopy.tsx` | Brand statement paragraphs | Medium |
| `components/Footer.tsx` | Footer copy/contact/collection summary | Low/Medium |
| `components/HeroSection.tsx` | Hero copy, season text, hero image | Medium |
| `app/pricing/page.tsx` | Pricing explanation copy and `costRows` field labels | Medium |

## 5. Hardcoded Content Inventory

### Global Metadata

| Content | Location | Notes |
| --- | --- | --- |
| Title: `LUMENÉ Portfolio | Emerging Fashion Designer` | `app/layout.tsx` | Future `SiteSetting` candidate |
| Description: `Digital fashion portfolio showcasing contemporary womenswear...` | `app/layout.tsx` | Future `SiteSetting` candidate |
| Favicon: `/favicon/favicon.png` | `app/layout.tsx`, `components/Navbar.tsx` | Static asset |

### Navigation

Source: `lib/data.ts`

| Label | Href |
| --- | --- |
| Home | `/` |
| Portfolio | `/portfolio` |
| Pricing | `/pricing` |
| Process | `/#process` |
| About | `/#about` |
| Contact | `/#contact` |

Navbar also contains a desktop CTA: `Collaborate` → `/#contact`.  
Mobile menu repeats email and phone.

### Hero

Source: `components/HeroSection.tsx`

| Field | Current value |
| --- | --- |
| Eyebrow | `LUMENÉ CAPSULE COLLECTION S/W 2027` |
| Main title | `LUMENÉ` |
| Lead copy | `A poetic womenswear portfolio tracing emotional metamorphosis through draped form, tactile surface, and quiet feminine power.` |
| Supporting copy | `From cocooned protection to afterlight, LUMENÉ translates inner transformation...` |
| Primary CTA | `View Portfolio` → `/portfolio` |
| Secondary CTA | `Contact for Collaboration` → `/#contact` |
| Hero image | `/images/website/hero3.png` |

Note: other files use `S/S 2027`; hero says `S/W 2027`. This should be clarified before backend seeding.

### Brand Statement

Sources: `app/page.tsx`, `components/BrandStatementCopy.tsx`

Key content:

- Brand statement heading: `A personal language of transformation, memory, and quiet feminine power.`
- Editorial quote: `Fabric becomes a language for inner strength, softness, and release.`
- Brand paragraphs explain fashion as emotional transformation, darkness-to-light journey, draped silhouettes, batik-inspired textile surfaces, translucent layers, crepe, silk chiffon, tulle, modern femininity, memory, identity, contrast, conscious craftsmanship, and quiet feminine power.

### About Designer

Source: `app/page.tsx`

| Field | Current value |
| --- | --- |
| Designer name | `Imalka Tharuni` |
| About heading | `Imalka Tharuni creates womenswear shaped by emotion, craft, and transformation.` |
| Bio summary | Developing fashion designer interested in emotional storytelling, textile craft, contemporary womenswear, personal experiences, healing, identity, fabric, silhouette, colour, and surface detail |
| Collection bio | LUMENÉ reflects chrysalis-to-butterfly journey using draping, batik-inspired textile surfaces, layered forms, soft sculptural silhouettes |
| Quote | `Fashion becomes a personal language of memory, movement, and transformation.` |
| Portrait image | `/images/designer/Imalka-Tharuni.jpeg` |

About skills in homepage:

- Fashion Illustration
- Draping
- Textile Surface
- Batik Development
- Concept Research
- Mood Boards
- Technical Drawing
- Portfolio Development

Creative interests:

- Contemporary Womenswear
- Assistant Designer Roles
- Freelance Design
- Styling Collaborations
- Graduate Showcase Opportunities

### Featured Collection

Source: `app/page.tsx`

| Field | Current value |
| --- | --- |
| Collection name | `LUMENÉ Capsule Collection S/S 2027` |
| Description | Contemporary womenswear shaped by emotional healing, butterfly metamorphosis, translucent fabric layers, draped silhouettes, and batik-inspired textile surfaces |
| Collection facts | `6 Looks`, `Draped Silhouettes`, `Batik-Inspired Surfaces`, `Emotional Transformation` |
| CTA | `Explore the Looks` → `/portfolio` |
| Lineup image | `/images/website/lineup.jpg` |

### Creative Process

Source: `app/page.tsx`

| Number | Title | Summary |
| --- | --- | --- |
| 01 | Research and Concept | Emotional transformation, butterfly metamorphosis, chrysalis protection, darkness-to-light metaphors |
| 02 | Mood Board Development | Symbolic forms, textures, layered references, emotional colour moods |
| 03 | Customer Profile | Contemporary womenswear customer interested in expressive fashion and individuality |
| 04 | Fabric Board and Colour Story | Warm browns, burnt orange, muted neutrals, soft blush, dark-to-light tonal movement |
| 05 | Textile Experiments | Batik-inspired marks, surface textures, layered dye effects, handcrafted textile expression |
| 06 | Draping and Silhouette Development | Cocoon-like forms, sculptural sleeves, layered shapes, soft body movement |
| 07 | Design Refinement | Garment proportions, technical drawings, range planning, construction decisions |
| 08 | Final Outcome | Six-look capsule collection connecting storytelling, surface, silhouette, and craft |

Process archive images:

| Label | Path |
| --- | --- |
| Concept and Inspiration | `/images/website/concept.jpg` |
| Mood Board | `/images/website/moodboard.jpg` |
| Textile Developments | `/images/website/textiledevelopment.jpg` |
| Range Plan | `/images/website/rangeplan.jpg` |

### Design Identity

Source: `lib/data.ts`, rendered on homepage via `ValueCard`

| Title | Text |
| --- | --- |
| Emotional storytelling | Garments as visual narratives of memory, growth, protection, and release |
| Draped silhouettes | Soft sculptural shapes create movement around the body |
| Batik-inspired surfaces | Organic textile marks and layered patches bring tactility and personal symbolism |
| Conscious craftsmanship | Fabric choices, hand processes, and range decisions considered through care and longevity |

### Contact CTA

Source: `app/page.tsx`, `components/Footer.tsx`, `components/Navbar.tsx`

| Field | Current value |
| --- | --- |
| CTA heading | `Available for collaborations, internships, styling projects, and creative opportunities.` |
| CTA copy | Portfolio viewing, commissions, creative direction support, graduate showcase opportunities, fashion industry enquiries, styling collaborations |
| Email | `imalkatharuni24@gmail.com` |
| Phone | `078 287 0261` |
| LinkedIn | `https://www.linkedin.com/in/imalka-tharuni-71b145234/` |
| Location | `Colombo / available remotely` |
| PDF | `/docs/portfolio.pdf` |

### Footer

Source: `components/Footer.tsx`

Footer content includes:

- `Fashion Portfolio`
- `LUMENÉ`
- Contemporary womenswear summary
- Availability for collaborations, internships, styling projects, creative opportunities
- Navigation links from `navItems`
- Contact: email, phone, LinkedIn, Colombo / Remote
- Collection summary: `LUMENÉ S/S 2027`, `6 Looks`, `Draped silhouettes`, `Batik-inspired surfaces`
- Copyright: `© 2027 LUMENÉ. All rights reserved.`
- Note: `Designed as a fashion portfolio presentation.`

## 6. Collection and Look Data Inventory

Primary source: `lib/looks.ts`  
Pricing source: `lib/pricing.ts`  
Display order: array order in `looks`.

All looks appear on:

- Homepage lookbook preview
- `/portfolio`
- `/portfolio/[slug]`
- `/pricing`

### Look Summary Table

| Order | Slug | Name | Subtitle | Image fields |
| --- | --- | --- | --- | --- |
| 01 | `look-01` | The Cocooned Self | Draped contemporary womenswear look exploring confinement, protection, and beginning emotional transformation | `look1.jpg`, `look1model.png`, `look1dummy.jpg` |
| 02 | `look-02` | Wrapped in Shadow | Protective layered look exploring wrapping, hiding, and preparation for transformation | `look2.jpg`, `look2model.png`, `look2dummy.jpg` |
| 03 | `look-03` | Soft Emergence | Soft sculptural look capturing breaking through protection and moving toward emotional lightness | `look3.jpg`, `look3model.png`, `look3dummy.jpg` |
| 04 | `look-04` | Winged Resolve | Bold transitional look where protective structure opens into butterfly-like movement | `look4.jpg`, `look4model.png`, `look4dummy.jpg` |
| 05 | `look-05` | Unfolded Path | Transitional look combining soft printed layers and sculptural trousers | `look5.jpg`, `look5model.png`, `look5dummy.jpg` |
| 06 | `look-06` | Final Release | Fluid closing look symbolising release, lightness, and emotional freedom | `look6.jpg`, `look6model.png`, `look6dummy.jpg` |

### Look Detail Fields

Each look currently has:

| Field | Type | Backend model candidate |
| --- | --- | --- |
| `number` | string | `Look.number` |
| `slug` | string | `Look.slug` unique |
| `name` | string | `Look.name` |
| `description` | string | `Look.description` |
| `subtitle` | optional string | `Look.subtitle` |
| `tags` | string array | `LookTag` or `String[]` depending DB strategy |
| `concept` | optional text | `Look.concept` |
| `designDevelopment` | optional text | `Look.designDevelopment` |
| `problemsAndImprovements` | optional text | `Look.problemsAndImprovements` |
| `outcomeAndReflection` | optional text | `Look.outcomeAndReflection` |
| `materials` | optional tuple array `[label, value]` | `LookMaterial` model |
| `image` | optional string | `LookImage` type `DEVELOPMENT` or `Look.developmentImageUrl` |
| `modelImage` | optional string | `LookImage` type `MODEL` or `Look.modelImageUrl` |
| `finalImage` | optional string | `LookImage` type `FINAL_VIEWS` or `Look.finalImageUrl` |

### Garment Pieces from Pricing Data

Source: `lib/pricing.ts`

| Look | Garment pieces |
| --- | --- |
| 01 The Cocooned Self | Draped cocoon jacket; Wide-leg trouser |
| 02 Wrapped in Shadow | Draped hooded jacket; Wrapped orange skirt; Detachable leg cuffs |
| 03 Soft Emergence | Structured cropped jacket; Printed high-neck inner top; Blush chrysalis skirt and tulle collar |
| 04 Winged Resolve | Hooded structured upper garment; Printed flared lower garment; Butterfly-inspired back panel |
| 05 Unfolded Path | Printed tie-front dress layer; Orange barrel trousers |
| 06 Final Release | One-shoulder draped dress |

Each garment pricing record has:

- `garmentName`
- `fabric`
- `fabricUsage`
- `fabricPricePerYard`
- `fabricCost`
- `batikOrDyeCost`
- `sewingCost`
- `trimsCost`
- `finishingCost`
- `totalProductionCost`
- `profitMargin`
- `finalSellingPrice`

Pricing values currently allow numbers, `To be finalised`, and `Price on request`. In the backend, this should be represented explicitly rather than mixing strings and numbers in numeric columns.

## 7. Image and Media Asset Inventory

### Core Brand and Site Assets

| Path | Used in | Purpose | Recommended DB/static field |
| --- | --- | --- | --- |
| `/favicon/favicon.png` | `layout.tsx`, `Navbar.tsx` | Logo/favicon | Static or `SiteSetting.logoUrl` |
| `/docs/portfolio.pdf` | Homepage contact CTA | Downloadable portfolio PDF | `SiteSetting.portfolioPdfUrl` |
| `/images/designer/Imalka-Tharuni.jpeg` | Homepage about section | Designer portrait | `DesignerProfile.portraitUrl` |
| `/images/website/hero3.png` | `HeroSection.tsx` | Hero background artwork | `Collection.heroImageUrl` or static |
| `/images/website/brand.jpeg` | Homepage brand statement | Brand statement visual | `SiteSection.imageUrl` |
| `/images/website/lineup.jpg` | Homepage featured collection | Six-look collection lineup | `Collection.lineupImageUrl` |

### Process Assets

| Path | Used in | Purpose | Recommended DB/static field |
| --- | --- | --- | --- |
| `/images/website/concept.jpg` | Homepage process archive | Concept/inspiration board | `ProcessItem.imageUrl` |
| `/images/website/moodboard.jpg` | Homepage process archive | Mood board | `ProcessItem.imageUrl` |
| `/images/website/textiledevelopment.jpg` | Homepage process archive | Textile development | `ProcessItem.imageUrl` |
| `/images/website/rangeplan.jpg` | Homepage process archive | Range plan | `ProcessItem.imageUrl` |
| `/images/website/customerprofile.jpg` | Public asset, not currently referenced in code search | Customer profile board | Future `ProcessItem.imageUrl` |
| `/images/website/colorstory.jpg` | Public asset, not currently referenced in code search | Colour story board | Future `ProcessItem.imageUrl` |
| `/images/website/hero.png` | Public asset, not currently referenced in code search | Alternate hero/artwork | Static media library |
| `/images/website/homehero.jpg` | Public asset, not currently referenced in code search | Alternate homepage hero | Static media library |

### Look Assets

| Look | Development image | Model image | Final views image | Recommended database fields |
| --- | --- | --- | --- | --- |
| 01 | `/images/website/look1.jpg` | `/images/website/look1model.png` | `/images/website/look1dummy.jpg` | `LookImage.type = DEVELOPMENT/MODEL/FINAL_VIEWS` |
| 02 | `/images/website/look2.jpg` | `/images/website/look2model.png` | `/images/website/look2dummy.jpg` | `LookImage.type = DEVELOPMENT/MODEL/FINAL_VIEWS` |
| 03 | `/images/website/look3.jpg` | `/images/website/look3model.png` | `/images/website/look3dummy.jpg` | `LookImage.type = DEVELOPMENT/MODEL/FINAL_VIEWS` |
| 04 | `/images/website/look4.jpg` | `/images/website/look4model.png` | `/images/website/look4dummy.jpg` | `LookImage.type = DEVELOPMENT/MODEL/FINAL_VIEWS` |
| 05 | `/images/website/look5.jpg` | `/images/website/look5model.png` | `/images/website/look5dummy.jpg` | `LookImage.type = DEVELOPMENT/MODEL/FINAL_VIEWS` |
| 06 | `/images/website/look6.jpg` | `/images/website/look6model.png` | `/images/website/look6dummy.jpg` | `LookImage.type = DEVELOPMENT/MODEL/FINAL_VIEWS` |

### Legacy or Unused Placeholder Paths

`lib/data.ts` still references older placeholder paths that are not present under `public/images/`:

- `/images/lumene-hero.jpg`
- `/images/textile-sample.jpg`
- `/images/design-development.jpg`
- `/images/moodboard.jpg`
- `/images/fabric-board.jpg`
- `/images/final-look-1.jpg`

These appear to be legacy data for older project card/process components. If those components are reused later, update these paths or move them behind database-driven media.

## 8. Reusable Frontend Components

| Component | Purpose | Data dependency | Future API relevance |
| --- | --- | --- | --- |
| `Navbar` | Sticky desktop/mobile navigation, logo, mobile overlay | `navItems`, contact email/phone hardcoded | Navigation can stay static initially; contact could use `SiteSetting` |
| `Footer` | Footer navigation, contact, collection summary | `navItems`, hardcoded contact/collection copy | Mostly static; contact fields can use `SiteSetting` |
| `HeroSection` | Full-screen hero with hero image, title, CTA | Hardcoded copy and image | Could use `Collection` + `SiteSetting` |
| `BrandStatementCopy` | Animated brand statement paragraphs | Local array | Could become `SiteSection` records |
| `LookCard` | Portfolio card for each look | `Look` from `lib/looks.ts` | Should consume `Look` API |
| `GarmentGallery` | Final front/side/back image modal | `Look.finalImage` | Should consume `LookImage` |
| `ImagePlaceholder` | Next Image wrapper and fallback visual | Image paths | Remain frontend component |
| `CTASection` | Reusable CTA panel | Props from page | Static or `SiteSetting` |
| `ButtonLink` | Reusable CTA link | Props only | Static component |
| `Motion` components | Reveal/stagger animation primitives | None | Static component |
| `SectionHeading` | Reusable headings | Props only | Static component |
| `ValueCard` | Design identity value card | `values` | Could consume `DesignValue` or static |
| `SkillTag` | Tag/chip UI | Props only | Static component |
| `ProjectCard` | Older project card | `projects` from `lib/data.ts` | Likely legacy; replace with `LookCard`/API later |
| `ProcessStep` | Older process row/card | `processSteps` from `lib/data.ts` | Likely legacy; replace or map to `ProcessItem` |
| `ColorSwatch` | Colour swatch UI | `swatches` from `lib/data.ts` | Could support future `CollectionColor` |

## 9. Content That Should Become Database-Driven

| Current content | Current location/file | Future model | Priority |
| --- | --- | --- | --- |
| Six look cards and detail content | `lib/looks.ts` | `Look` | High |
| Look image paths | `lib/looks.ts` | `LookImage` | High |
| Look material rows | `lib/looks.ts` | `LookMaterial` | High |
| Look tags | `lib/looks.ts` | `LookTag` or string array | High |
| Garment pieces and costing | `lib/pricing.ts` | `Garment` / `GarmentCosting` | High |
| Pricing status values such as `To be finalised` | `lib/pricing.ts` | enum/status fields | High |
| Collection-level metadata: name, season, hero/lineup images | `HeroSection.tsx`, `app/page.tsx`, `Footer.tsx` | `Collection` | High |
| Process steps | `app/page.tsx` and old `lib/data.ts` | `ProcessItem` | Medium/High |
| Process archive images | `app/page.tsx` | `ProcessItem` or `ProcessImage` | Medium/High |
| Designer profile, portrait, bio, skills, interests | `app/page.tsx` | `DesignerProfile`, `Skill`, `CreativeInterest` | Medium |
| Contact details | `app/page.tsx`, `Navbar`, `Footer` | `SiteSetting` or `ContactProfile` | Medium |
| Portfolio PDF URL | `app/page.tsx` | `SiteSetting.portfolioPdfUrl` | Medium |
| Brand statement paragraphs | `BrandStatementCopy.tsx` | `SiteSection` or `BrandStatement` | Medium |
| Design identity values | `lib/data.ts` | `DesignValue` | Medium/Low |
| Navigation labels/URLs | `lib/data.ts` | Static initially, `NavigationItem` later if CMS needed | Low |

## 10. Content That Can Remain Static for Now

| Content/component | Reason |
| --- | --- |
| Tailwind design system and global CSS | Presentation-only |
| Motion/reveal components | UI behavior, no backend needed |
| Button, image, section heading, chip components | Presentational |
| Navbar route list | Small fixed site, can stay static initially |
| Footer copyright line | Rarely changes |
| Pricing explanation copy | Can stay static during Phase 1 unless admin editing is required |
| Layout metadata | Can stay static initially, or move later to `SiteSetting` |
| Redirect routes `/about`, `/process`, `/contact`, `/portfolio/lumene` | Routing behavior, not content data |

## 11. Recommended Phase 1 Prisma Models

These models are based on actual current frontend content and should be enough for Phase 1 backend migration without overbuilding a CMS.

### `Collection`

Represents LUMENÉ as the main collection.

Recommended fields:

- `id`
- `slug` unique, e.g. `lumene`
- `name`, e.g. `LUMENÉ`
- `season`, e.g. `S/S 2027`
- `subtitle`
- `description`
- `heroImageUrl`
- `lineupImageUrl`
- `brandImageUrl`
- `status` optional enum: `DRAFT`, `PUBLISHED`
- `displayOrder`
- `createdAt`, `updatedAt`

### `Look`

Represents each of the six looks.

Recommended fields:

- `id`
- `collectionId`
- `number`
- `slug` unique
- `name`
- `subtitle`
- `description`
- `concept`
- `designDevelopment`
- `problemsAndImprovements`
- `outcomeAndReflection`
- `displayOrder`
- `isFeatured`
- `createdAt`, `updatedAt`

### `LookTag`

Recommended if tags need querying/filtering.

- `id`
- `lookId`
- `label`
- `displayOrder`

Alternative: use `tags String[]` in Prisma if PostgreSQL array simplicity is preferred.

### `LookMaterial`

Represents current `materials: [label, value][]`.

- `id`
- `lookId`
- `label`
- `value`
- `displayOrder`

### `LookImage`

Represents development/model/final image variants.

- `id`
- `lookId`
- `type` enum: `DEVELOPMENT`, `MODEL`, `FINAL_VIEWS`, `DETAIL`, `PROCESS`
- `url`
- `alt`
- `caption`
- `displayOrder`

### `Garment`

Represents garment pieces within each look.

- `id`
- `lookId`
- `name`
- `fabric`
- `displayOrder`

### `GarmentCosting`

Separate costing fields from garment identity so production data can evolve independently.

- `id`
- `garmentId`
- `currency`, default `LKR`
- `fabricUsage`
- `fabricPricePerYard`
- `fabricCost`
- `batikOrDyeCost`
- `sewingCost`
- `trimsCost`
- `finishingCost`
- `totalProductionCost`
- `profitMarginPercent`
- `finalSellingPrice`
- `fabricPriceStatus`
- `costingStatus`
- `notes`

Important: current data mixes numbers with strings. Recommended backend approach:

- Store numeric money fields as `Decimal?`.
- Store display/status separately with enum values such as `CONFIRMED`, `TO_BE_FINALISED`, `PRICE_ON_REQUEST`.

### `ProcessItem`

Represents homepage process steps and archive images.

- `id`
- `collectionId`
- `number`
- `title`
- `description`
- `imageUrl`
- `imageAlt`
- `category` optional enum/string
- `displayOrder`

### `DesignerProfile`

Represents Imalka Tharuni profile content.

- `id`
- `name`
- `title`
- `bio`
- `portraitUrl`
- `quote`
- `email`
- `phone`
- `linkedinUrl`
- `location`
- `portfolioPdfUrl`

### `Skill`

Could support designer skills and creative interests.

- `id`
- `profileId`
- `label`
- `type` enum: `SKILL`, `CREATIVE_INTEREST`
- `displayOrder`

### `SiteSetting`

Useful for small global fields without a full CMS.

- `id`
- `siteTitle`
- `siteDescription`
- `logoUrl`
- `faviconUrl`
- `contactEmail`
- `contactPhone`
- `linkedinUrl`
- `portfolioPdfUrl`
- `copyrightText`

### `Enquiry`

There is no form currently, but backend upgrade may add enquiries.

- `id`
- `name`
- `email`
- `phone`
- `subject`
- `message`
- `interestType` optional enum: `INTERNSHIP`, `COLLABORATION`, `COMMISSION`, `STYLING`, `PORTFOLIO_VIEWING`, `OTHER`
- `status` enum: `NEW`, `READ`, `ARCHIVED`
- `createdAt`

## 12. Content-to-Database Mapping

| Current frontend content | Current location | Future source | Phase 1 priority |
| --- | --- | --- | --- |
| Collection name/season/description | `HeroSection.tsx`, `app/page.tsx`, `Footer.tsx` | `Collection` | High |
| Six look list | `lib/looks.ts` | `Look` | High |
| Look detail pages | `app/portfolio/[slug]/page.tsx` using `lib/looks.ts` | `Look`, `LookMaterial`, `LookImage`, `LookTag` | High |
| Portfolio index cards | `app/portfolio/page.tsx`, `LookCard.tsx` | `Look` API | High |
| Pricing archive | `app/pricing/page.tsx`, `lib/pricing.ts` | `Garment`, `GarmentCosting` | High |
| Homepage process steps | `app/page.tsx` | `ProcessItem` | Medium/High |
| Process archive images | `app/page.tsx` | `ProcessItem.imageUrl` | Medium |
| Designer profile | `app/page.tsx`, `README.md` | `DesignerProfile` | Medium |
| Skills/interests | `app/page.tsx`, `lib/data.ts` | `Skill` | Medium |
| Contact details | `app/page.tsx`, `Navbar`, `Footer` | `SiteSetting` or `DesignerProfile` | Medium |
| PDF link | `app/page.tsx` | `SiteSetting.portfolioPdfUrl` | Medium |
| Design identity values | `lib/data.ts` | `DesignValue` or static | Low/Medium |
| Navigation | `lib/data.ts` | Static initially | Low |
| Old `projects` array | `lib/data.ts` | Likely deprecated or future `Project` | Low |

## 13. Phase 1 Backend Notes

Recommended Phase 1 API scope:

1. `GET /api/collection/lumene`
   - Returns collection metadata, hero/lineup images, summary.

2. `GET /api/looks`
   - Returns six look cards ordered by `displayOrder`.

3. `GET /api/looks/:slug`
   - Returns look detail, tags, materials, images, adjacent look metadata.

4. `GET /api/pricing`
   - Returns collection pricing summary and look-level garment costing.

5. `GET /api/process`
   - Returns process timeline/archive items.

6. `GET /api/site-settings`
   - Returns contact details, PDF URL, logo/favicon URLs, metadata.

7. Optional: `POST /api/enquiries`
   - Only needed if replacing mailto/contact links with a backend form.

Backend migration strategy:

- Seed PostgreSQL from the current `lib/looks.ts` and `lib/pricing.ts`.
- Keep frontend static fallback data during the first API integration pass.
- Replace `lib/looks.ts` consumers first because these drive `/portfolio`, `/portfolio/[slug]`, homepage lookbook, and pricing links.
- Replace pricing next because its data structure is separate but keyed by `lookSlug`.
- Keep the visual components unchanged while switching data sources.

## 14. Risks and Missing Information

| Risk / gap | Impact | Recommendation |
| --- | --- | --- |
| Season inconsistency: `S/W 2027` in hero vs `S/S 2027` elsewhere | Confusing collection metadata | Confirm final season before database seeding |
| Pricing values mix numbers and strings | Difficult database typing | Use nullable Decimal fields plus status enums |
| `lib/data.ts` references old missing placeholder paths | Future broken images if reused | Deprecate old `projects/processSteps` or update paths |
| Some public images are unused (`homehero.jpg`, `hero.png`, `customerprofile.jpg`, `colorstory.jpg`) | Possible lost content | Decide whether to add to `ProcessItem`/media library |
| `/portfolio/lumene` redirects to `/portfolio` | Old route may conflict with future collection detail route | Decide whether `/portfolio/lumene` should become collection landing page |
| Contact data appears in multiple files | Drift risk | Centralize in `SiteSetting` or `DesignerProfile` |
| No admin/auth requirement yet | Backend can be simpler | Do not add auth unless editing/admin features are required |
| No upload/media storage plan | Images are local now | Phase 1 can keep local URLs; later use S3/Cloudinary or Vercel Blob if needed |
| No enquiry form currently | `Enquiry` may be unused | Add only if user wants form submissions |

## 15. Recommended Phase 1 Model Set

Minimum useful Prisma models:

1. `Collection`
2. `Look`
3. `LookImage`
4. `LookMaterial`
5. `LookTag`
6. `Garment`
7. `GarmentCosting`
8. `ProcessItem`
9. `DesignerProfile`
10. `Skill`
11. `SiteSetting`

Optional model:

12. `Enquiry`

Avoid for Phase 1 unless explicitly needed:

- `User`
- `Authentication`
- Full CMS/admin tables
- Orders/checkout/inventory
- Ecommerce cart models

## 16. Final Discovery Conclusion

The current frontend is already strongly data-shaped. The most important backend migration targets are `lib/looks.ts` and `lib/pricing.ts`, because they contain the core portfolio and costing records. The homepage also contains important designer, process, contact, and brand statement content that should be either moved into small database models or intentionally kept static.

For Phase 1, the backend should focus on preserving the existing LUMENÉ content exactly, exposing it through read APIs, and keeping the frontend visual components mostly unchanged while replacing local TypeScript arrays with API data.
