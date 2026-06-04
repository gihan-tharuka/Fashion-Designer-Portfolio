import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SkillTag } from "@/components/SkillTag";
import { getAdjacentLooks, getLook, looks } from "@/lib/looks";
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
    <main>
      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Look 01</p>
            <h1 className="serif mt-4 text-5xl font-semibold leading-tight text-brown sm:text-7xl">
              LOOK 01 — The Cocooned Self
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              A draped contemporary womenswear look exploring confinement,
              protection, and the beginning of emotional transformation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {lookOneTags.map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            src={look.modelImage ?? "/images/website/look1model.png"}
            alt="Look 01 final garment"
            label="The Cocooned Self"
            priority
            showLabel={false}
            showSpotlight={false}
            className="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <p className="eyebrow">Look Concept</p>
          <p className="text-base leading-8 text-muted">
            Look 01, titled The Cocooned Self, represents the first stage of
            emotional transformation. The look explores the feeling of being
            protected, hidden, and contained before growth begins. The layered
            draped sleeve symbolises the cocoon shape, while the warm brown and
            burnt-orange surface suggests the transition from darkness towards
            light. The garment combines softness and structure, showing both
            vulnerability and strength.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImagePlaceholder
            src={look.image ?? "/images/website/look1.jpg"}
            alt="Look 01 design development collage"
            label="Design Development"
            showLabel={false}
            showSpotlight={false}
            className="aspect-[4/3]"
          />
          <div>
            <p className="eyebrow">Design Development</p>
            <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown sm:text-5xl">
              From sketch to constructed form
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The design started from an illustrated concept sketch and
              developed through toile experimentation, draping, fitting, and
              final garment construction. During the development process, the
              draped jacket was one of the most challenging parts because the
              sleeve structure needed to create a cocoon-like shape while still
              sitting naturally on the body. The original trouser shape did not
              fully achieve the planned outcome, so it was refined during the
              development stage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container">
          <p className="eyebrow">Materials and Techniques</p>
          <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown sm:text-5xl">
            Surface, silhouette, and symbolism
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {materials.map(([label, value]) => (
              <div
                key={label}
                className="rounded-md border border-brown/12 bg-cream/55 p-5"
              >
                <p className="eyebrow">{label}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Final Garment Views</p>
            <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown sm:text-5xl">
              Front, side, and back view
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The final views show how the draped sleeve, trouser proportion,
              surface placement, and silhouette work together as one resolved
              look.
            </p>
          </div>
          <ImagePlaceholder
            src={look.finalImage ?? "/images/website/look1dummy.jpg"}
            alt="Look 01 final front, side, and back garment views"
            label="Final Garment Views"
            showLabel={false}
            showSpotlight={false}
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container grid gap-10 lg:grid-cols-2">
          <article>
            <p className="eyebrow">Problems and Improvements</p>
            <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown">
              Construction as learning
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              During the construction process, several issues were identified.
              The neck of the under-top appeared longer than expected, which
              affected the final proportion of the look. The trouser shape also
              changed from the original plan because the first version did not
              achieve the intended structure. These issues became part of the
              learning process and helped me understand the importance of toile
              testing, fitting, proportion checking, and construction
              refinement before final garment completion.
            </p>
          </article>
          <article>
            <p className="eyebrow">Outcome and Reflection</p>
            <h2 className="serif mt-3 text-4xl font-semibold leading-tight text-brown">
              A clear first stage of metamorphosis
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The final outcome successfully communicates the idea of a
              cocooned body beginning to transform. The draped sleeve creates a
              protective layered shape, while the brown and burnt-orange surface
              supports the dark-to-light concept of the collection. This look
              helped me improve my understanding of draping, garment
              proportion, surface placement, and the relationship between
              concept and construction. It also became one of the strongest
              looks in the collection because it clearly connects the visual
              form with the emotional meaning of LUMENÉ.
            </p>
          </article>
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
      <div className="editorial-container flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <ButtonLink href="/portfolio" variant="secondary">
          Back to Portfolio
        </ButtonLink>
        <div className="flex flex-col gap-3 sm:flex-row">
          {previous ? (
            <ButtonLink href={`/portfolio/${previous.slug}`} variant="ghost">
              Previous Look
            </ButtonLink>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-brown/10 px-5 py-2.5 text-sm font-semibold text-muted/55">
              Previous Look
            </span>
          )}
          {next ? (
            <ButtonLink href={`/portfolio/${next.slug}`} variant="ghost">
              Next Look
            </ButtonLink>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-full border border-brown/10 px-5 py-2.5 text-sm font-semibold text-muted/55">
              Next Look
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
