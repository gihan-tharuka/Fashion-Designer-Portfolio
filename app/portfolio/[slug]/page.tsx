import { GarmentGallery } from "@/components/GarmentGallery";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  AnimatedHeading,
  ImageReveal,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Motion";
import { SkillTag } from "@/components/SkillTag";
import { getAdjacentLooks, getLook, looks } from "@/lib/looks";
import Link from "next/link";
import { notFound } from "next/navigation";

type LookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const lookOneTags = [
  "Draped Jacket",
  "Batik-Inspired Surface",
  "Cocoon Sleeve",
  "Wide-Leg Trouser",
  "Emotional Design",
];

const materials = [
  ["Main garment", "Draped jacket and trouser"],
  ["Fabric direction", "Brown-toned fabric with batik-inspired texture"],
  ["Surface technique", "Texture lines inspired by chrysalis and batik"],
  ["Key technique", "Draping, layering, sleeve shaping, surface placement"],
  ["Colour story", "Brown, burnt orange, dark-to-light tonal movement"],
  ["Symbolism", "Cocoon, protection, emotional confinement, transformation"],
];

export function generateStaticParams() {
  return looks.map((look) => ({
    slug: look.slug,
  }));
}

export async function generateMetadata({ params }: LookPageProps) {
  const { slug } = await params;
  const look = getLook(slug);

  return {
    title: look ? `Look ${look.number} — ${look.name}` : "Look",
  };
}

export default async function LookPage({ params }: LookPageProps) {
  const { slug } = await params;
  const look = getLook(slug);

  if (!look) {
    notFound();
  }

  const { previous, next } = getAdjacentLooks(look.slug);

  if (look.slug !== "look-01") {
    return (
      <main>
        <section className="section-pad">
          <div className="editorial-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Look {look.number}</p>
              <h1 className="serif mt-4 text-5xl font-semibold leading-tight text-brown sm:text-7xl">
                {look.name}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted">
                {look.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {look.tags.map((tag) => (
                  <SkillTag key={tag}>{tag}</SkillTag>
                ))}
              </div>
            </div>
            <ImagePlaceholder
              src={
                look.modelImage ??
                `/images/website/look${Number(look.number)}model.png`
              }
              alt={`Look ${look.number}: ${look.name}`}
              label={look.name}
              priority
              showLabel={false}
              showSpotlight={false}
              className="aspect-[4/5]"
            />
          </div>
        </section>

        <section className="section-pad bg-cream/35">
          <div className="editorial-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <ImagePlaceholder
              src={look.image ?? `/images/website/look${Number(look.number)}.jpg`}
              alt={`Look ${look.number} design development image`}
              label="Design Development"
              showLabel={false}
              showSpotlight={false}
              className="aspect-[4/3]"
            />
            <div>
              <p className="eyebrow">Design Development</p>
              <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown sm:text-5xl">
                Look {look.number} development image
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                This page uses the matching numbered collection image for the
                design development visual while the full case-study content is
                prepared.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="editorial-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Final Garment Views</p>
              <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown sm:text-5xl">
                Look {look.number} final views
              </h2>
              <p className="mt-5 text-base leading-8 text-muted">
                Front, side, and back views will document the finished garment
                silhouette, proportion, and textile placement.
              </p>
            </div>
            <ImagePlaceholder
              src={
                look.finalImage ??
                `/images/website/look${Number(look.number)}dummy.jpg`
              }
              alt={`Look ${look.number} final garment views`}
              label="Final Garment Views"
              showLabel={false}
              showSpotlight={false}
              className="aspect-[4/3]"
            />
          </div>
        </section>

        <LookNavigation previous={previous} next={next} />
      </main>
    );
  }

  return (
    <main className="bg-[radial-gradient(circle_at_12%_8%,rgba(179,137,75,0.14),transparent_28rem),linear-gradient(180deg,#f8f0e3,#f2e4ce_42%,#f8f0e3)]">
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute right-[8%] top-[10%] h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="editorial-container grid min-h-[78svh] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <div>
              <div className="flex items-center gap-5">
                <p className="eyebrow">Look 01</p>
                <span className="h-px w-24 bg-gold/55" />
              </div>
              <AnimatedHeading>
                <h1 className="serif mt-6 text-6xl font-semibold leading-[0.84] text-espresso sm:text-8xl lg:text-9xl">
                  The Cocooned Self
                </h1>
              </AnimatedHeading>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-foreground">
                A draped contemporary womenswear look exploring confinement,
                protection, and the beginning of emotional transformation.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {lookOneTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gold/32 bg-cream/48 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brown"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <ImageReveal className="relative">
            <div className="absolute -left-5 top-8 hidden h-56 w-px bg-gold/38 lg:block" />
            <ImagePlaceholder
              src={look.modelImage ?? "/images/website/look1model.png"}
              alt="Look 01 The Cocooned Self final garment on model"
              label="The Cocooned Self"
              priority
              fit="contain"
              showLabel={false}
              showSpotlight={false}
              className="h-[min(80svh,48rem)] bg-[#DCDBDB]"
            />
            <p className="mt-4 text-right text-[0.62rem] font-bold uppercase tracking-[0.22em] text-muted lg:absolute lg:-right-8 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:rotate-90">
              LUMENÉ S/W 2027 — Stage 01 of Metamorphosis
            </p>
          </ImageReveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-10 border-y border-gold/22 py-12 lg:grid-cols-[0.3fr_0.7fr]">
          <Reveal>
            <p className="eyebrow">Concept</p>
          </Reveal>
          <Reveal>
            <p className="serif max-w-5xl text-3xl font-semibold leading-[1.12] text-brown sm:text-4xl">
              Look 01, titled The Cocooned Self, represents the first stage of
              emotional transformation. The look explores the feeling of being
              protected, hidden, and contained before growth begins. The layered
              draped sleeve symbolises the cocoon shape, while the warm brown
              and burnt-orange surface suggests the transition from darkness
              towards light. The garment combines softness and structure,
              showing both vulnerability and strength.
            </p>
            <blockquote className="mt-10 border-l border-gold pl-6 text-xl leading-8 text-muted">
              A protected body at the edge of transformation.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ImageReveal>
            <ImagePlaceholder
              src={look.image ?? "/images/website/look1.jpg"}
              alt="Look 01 sketches, toile development, sleeve construction, and garment refinement"
              label="Design Development"
              fit="contain"
              showLabel={false}
              showSpotlight={false}
              className="aspect-[3509/2481] bg-[#DCDBDB]"
            />
            <p className="mt-4 border-t border-gold/24 pt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Sketches, toile development, sleeve construction, and garment
              refinement.
            </p>
          </ImageReveal>
          <Reveal>
            <p className="eyebrow">Design Development</p>
            <h2 className="serif mt-4 text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
              From sketch to constructed form
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              The design started from an illustrated concept sketch and
              developed through toile experimentation, draping, fitting, and
              final garment construction. During the development process, the
              draped jacket was one of the most challenging parts because the
              sleeve structure needed to create a cocoon-like shape while still
              sitting naturally on the body. The original trouser shape did not
              fully achieve the planned outcome, so it was refined during the
              development stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-ivory/68">
        <div className="editorial-container">
          <Reveal className="grid gap-8 border-b border-gold/24 pb-9 lg:grid-cols-[0.32fr_0.68fr] lg:items-end">
            <p className="eyebrow">Materials and Techniques</p>
            <h2 className="serif text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
              Surface, silhouette, and symbolism
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {materials.map(([label, value], index) => (
              <StaggerItem key={label}>
                <div className="group min-h-full border border-gold/18 bg-cream/36 p-6 transition duration-500 hover:-translate-y-1 hover:border-gold/55">
                  <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-gold">
                    {String(index + 1).padStart(2, "0")} {label}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-muted">{value}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container">
          <Reveal className="mb-10 grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <p className="eyebrow">Final Garment Views</p>
            <div>
              <h2 className="serif text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
                Front, side, and back view
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
                The final views show how the draped sleeve, trouser proportion,
                surface placement, and silhouette work together as one resolved
                look.
              </p>
            </div>
          </Reveal>
          <ImageReveal>
            <GarmentGallery
              src={look.finalImage ?? "/images/website/look1dummy.jpg"}
              alt="Look 01 final front, side, and back garment views"
            />
          </ImageReveal>
        </div>
      </section>

      <section className="section-pad bg-ivory/68">
        <div className="editorial-container grid gap-12 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal>
            <article>
              <p className="eyebrow">Problems and Improvements</p>
              <h2 className="serif mt-4 text-5xl font-semibold leading-tight text-espresso">
                Construction as learning
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                During the construction process, several issues were identified.
                The neck of the under-top appeared longer than expected, which
                affected the final proportion of the look. The trouser shape
                also changed from the original plan because the first version
                did not achieve the intended structure. These issues became part
                of the learning process and helped me understand the importance
                of toile testing, fitting, proportion checking, and construction
                refinement before final garment completion.
              </p>
            </article>
          </Reveal>
          <div className="hidden w-px bg-gold/24 lg:block" />
          <Reveal delay={0.12}>
            <article>
              <p className="eyebrow">Outcome and Reflection</p>
              <h2 className="serif mt-4 text-5xl font-semibold leading-tight text-espresso">
                A clear first stage of metamorphosis
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                The final outcome successfully communicates the idea of a
                cocooned body beginning to transform. The draped sleeve creates
                a protective layered shape, while the brown and burnt-orange
                surface supports the dark-to-light concept of the collection.
                This look helped me improve my understanding of draping, garment
                proportion, surface placement, and the relationship between
                concept and construction. It also became one of the strongest
                looks in the collection because it clearly connects the visual
                form with the emotional meaning of LUMENÉ.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <LookNavigation previous={previous} next={next} />
    </main>
  );
}

function LookNavigation({
  previous,
  next,
}: {
  previous: (typeof looks)[number] | null;
  next: (typeof looks)[number] | null;
}) {
  return (
    <section className="section-pad">
      <div className="editorial-container border-t border-gold/24 pt-9">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/portfolio"
            className="focus-ring group inline-flex min-h-11 items-center justify-center rounded-full border border-gold/34 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-espresso"
          >
            <span className="mr-2 transition duration-500 group-hover:-translate-x-1">←</span>
            Back to Portfolio
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row">
          {previous ? (
            <Link
              href={`/portfolio/${previous.slug}`}
              className="focus-ring group inline-flex min-h-11 items-center justify-center rounded-full border border-brown/12 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-muted transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-espresso"
            >
              <span className="mr-2 transition duration-500 group-hover:-translate-x-1">←</span>
              Previous Look
            </Link>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-brown/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-muted/45">
              Previous Look
            </span>
          )}
          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="focus-ring group inline-flex min-h-11 items-center justify-center rounded-full border border-brown/12 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-muted transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-espresso"
            >
              Next Look
              <span className="ml-2 transition duration-500 group-hover:translate-x-1">
                → Look {next.number}
              </span>
            </Link>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-brown/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-muted/45">
              Next Look
            </span>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
