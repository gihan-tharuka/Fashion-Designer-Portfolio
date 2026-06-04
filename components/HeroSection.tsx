import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(248,240,227,0.92),transparent)]" />
      <div className="editorial-container grid min-h-[90vh] gap-12 py-14 md:grid-cols-[0.82fr_1.18fr] md:items-center lg:gap-16 lg:py-18">
        <div className="motion-reveal relative z-10 md:pb-16">
          <p className="eyebrow">LUMENÉ Capsule Collection S/W 2027</p>
          <h1 className="serif mt-6 text-[clamp(5.4rem,15vw,13.5rem)] font-semibold leading-[0.78] text-espresso">
            LUMENÉ
          </h1>
          <p className="mt-8 max-w-2xl text-2xl leading-9 text-foreground sm:text-3xl sm:leading-10">
            A poetic womenswear portfolio tracing emotional metamorphosis
            through draped form, tactile surface, and quiet feminine power.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            From cocooned protection to afterlight, LUMENÉ translates inner
            transformation into sculptural silhouettes, batik-inspired textures,
            translucent layers, and refined contemporary womenswear.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portfolio">View Portfolio</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact for Collaboration
            </ButtonLink>
          </div>
          <div className="mt-12 hidden h-px w-40 bg-gradient-to-r from-gold via-cocoa/40 to-transparent md:block" />
        </div>

        <div className="relative md:pl-8 lg:pl-14">
          <div className="absolute -left-6 top-10 hidden h-44 w-px bg-gold/35 md:block" />
          <ImagePlaceholder
            src="/images/website/hero.png"
            alt="Editorial visual for LUMENÉ fashion collection"
            label="Metamorphosis of Mind"
            priority
            fit="contain"
            showLabelEyebrow={false}
            showSpotlight={false}
            className="hero-image-reveal aspect-[1055/1491] bg-cream/70"
          />
          <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-gold/35 bg-cream/72 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brown shadow-[0_18px_42px_rgba(27,18,13,0.12)] backdrop-blur-md">
            Editorial Portfolio
          </div>
        </div>
      </div>
    </section>
  );
}
