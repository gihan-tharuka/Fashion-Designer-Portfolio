import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="editorial-container grid min-h-[calc(100svh-4.5rem)] gap-12 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:py-20">
        <div className="motion-reveal relative z-10">
          <p className="eyebrow">Capsule Collection S/W 2027</p>
          <h1 className="serif mt-5 text-7xl font-semibold leading-[0.82] text-espresso sm:text-8xl lg:text-9xl">
            LUMENÉ
          </h1>
          <p className="mt-7 max-w-xl text-2xl leading-9 text-foreground">
            Contemporary womenswear shaped by emotional transformation, draping,
            and textile surface.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            A poetic design portfolio exploring Metamorphosis of Mind through
            butterfly symbolism, chrysalis forms, layered translucent fabrics,
            and conscious craftsmanship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portfolio">View Portfolio</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact for Collaboration
            </ButtonLink>
          </div>
        </div>

        <ImagePlaceholder
          src="/images/website/hero.png"
          alt="Editorial visual for LUMENÉ fashion collection"
          label="LUMENÉ S/W 2027"
          priority
          fit="contain"
          showLabelEyebrow={false}
          showSpotlight={false}
          className="motion-reveal-delayed aspect-[1055/1491] bg-cream/70"
        />
      </div>
    </section>
  );
}
