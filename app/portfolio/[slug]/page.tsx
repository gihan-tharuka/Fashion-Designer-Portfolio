import { GarmentGallery } from "@/components/GarmentGallery";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  AnimatedHeading,
  ImageReveal,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/Motion";
import { getAdjacentLooks, getLook, looks } from "@/lib/looks";
import Link from "next/link";
import { notFound } from "next/navigation";

type LookPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
  const lookMaterials = look.materials ?? [];

  return (
    <main className="bg-[radial-gradient(circle_at_12%_8%,rgba(179,137,75,0.14),transparent_28rem),linear-gradient(180deg,#f8f0e3,#f2e4ce_42%,#f8f0e3)]">
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute right-[8%] top-[10%] h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="editorial-container grid min-h-[78svh] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <div>
              <div className="flex items-center gap-5">
                <p className="eyebrow">Look {look.number}</p>
                <span className="h-px w-24 bg-gold/55" />
              </div>
              <AnimatedHeading>
                <h1 className="serif mt-6 text-6xl font-semibold leading-[0.84] text-espresso sm:text-8xl lg:text-9xl">
                  {look.name}
                </h1>
              </AnimatedHeading>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-foreground">
                {look.subtitle ?? look.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {look.tags.map((tag) => (
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
              src={
                look.modelImage ??
                `/images/website/look${Number(look.number)}model.png`
              }
              alt={`Look ${look.number} ${look.name} final garment on model`}
              label={look.name}
              priority
              fit="contain"
              showLabel={false}
              showSpotlight={false}
              className="h-[min(80svh,48rem)] bg-[#DCDBDB]"
            />
            <p className="mt-4 text-right text-[0.62rem] font-bold uppercase tracking-[0.22em] text-muted lg:absolute lg:-right-8 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:rotate-90">
              LUMENÉ S/W 2027 — Stage {look.number} of Metamorphosis
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
              {look.concept ?? look.description}
            </p>
            {look.subtitle ? (
              <blockquote className="mt-10 border-l border-gold pl-6 text-xl leading-8 text-muted">
                {look.subtitle}
              </blockquote>
            ) : null}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ImageReveal>
            <ImagePlaceholder
              src={look.image ?? `/images/website/look${Number(look.number)}.jpg`}
              alt={`Look ${look.number} sketches, toile development, construction, and garment refinement`}
              label="Design Development"
              fit="contain"
              showLabel={false}
              showSpotlight={false}
              className="aspect-[3509/2481] bg-[#DCDBDB]"
            />
            <p className="mt-4 border-t border-gold/24 pt-4 text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Sketches, toile development, construction, and garment
              refinement.
            </p>
          </ImageReveal>
          <Reveal>
            <p className="eyebrow">Design Development</p>
            <h2 className="serif mt-4 text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl">
              From sketch to constructed form
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              {look.designDevelopment}
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
            {lookMaterials.map(([label, value], index) => (
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
                The final views show how silhouette, proportion, surface
                placement, and construction details work together as one
                resolved look.
              </p>
            </div>
          </Reveal>
          <ImageReveal>
            <GarmentGallery
              src={
                look.finalImage ??
                `/images/website/look${Number(look.number)}dummy.jpg`
              }
              alt={`Look ${look.number} final front, side, and back garment views`}
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
                {look.problemsAndImprovements}
              </p>
            </article>
          </Reveal>
          <div className="hidden w-px bg-gold/24 lg:block" />
          <Reveal delay={0.12}>
            <article>
              <p className="eyebrow">Outcome and Reflection</p>
              <h2 className="serif mt-4 text-5xl font-semibold leading-tight text-espresso">
                Final outcome
              </h2>
              <p className="mt-6 text-base leading-8 text-muted">
                {look.outcomeAndReflection}
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
