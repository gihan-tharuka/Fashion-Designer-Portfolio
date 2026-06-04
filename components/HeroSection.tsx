import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="editorial-container grid min-h-[calc(100svh-4.5rem)] gap-10 py-12 md:grid-cols-[0.92fr_1.08fr] md:items-center">
        <div className="relative z-10">
          <p className="eyebrow">Capsule Collection S/S 2027</p>
          <h1 className="serif mt-5 text-6xl font-semibold leading-[0.92] text-brown sm:text-7xl lg:text-8xl">
            LUMENÉ
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-8 text-foreground">
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
          src="/images/lumene-hero.jpg"
          alt="Editorial visual for LUMENÉ fashion collection"
          label="LUMENÉ S/S 2027"
          priority
          className="min-h-[28rem] md:min-h-[42rem]"
        />
      </div>
    </section>
  );
}
