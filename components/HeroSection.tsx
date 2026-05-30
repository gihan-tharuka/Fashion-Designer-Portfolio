import { AnimatedImageFrame } from "@/components/AnimatedImageFrame";
import { AnimatedText } from "@/components/AnimatedText";
import { ButtonLink } from "@/components/ButtonLink";
import { MotionBlock, MotionStagger } from "@/components/MotionBlock";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-brown/10">
      <div className="editorial-container grid min-h-[calc(100svh-4.5rem)] gap-9 py-10 md:grid-cols-[0.82fr_1.18fr] md:items-center md:py-14 lg:gap-14">
        <MotionStagger className="relative z-10 max-w-2xl">
          <p className="eyebrow">Final-year fashion design portfolio</p>
          <MotionBlock>
            <p className="serif mt-5 text-3xl font-semibold leading-none text-accent sm:text-4xl">
              [Designer Name]
            </p>
          </MotionBlock>
          <MotionBlock>
            <AnimatedText
              text="LUMENÉ"
              className="serif mt-4 text-6xl font-semibold leading-[0.88] text-brown sm:text-7xl lg:text-[7.5rem]"
            />
          </MotionBlock>
          <MotionBlock>
            <p className="mt-5 max-w-xl text-lg leading-8 text-foreground sm:text-xl">
              Emerging womenswear designer exploring emotional transformation,
              draping, textile surface, and soft sculptural femininity.
            </p>
          </MotionBlock>
          <MotionBlock>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              LUMENÉ — Capsule Collection A/W 2027 translates Metamorphosis of
              Mind through butterfly symbolism, chrysalis forms, batik-inspired
              surfaces, translucent layers, and conscious craft.
            </p>
          </MotionBlock>
          <MotionBlock className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portfolio/lumene">View LUMENÉ Case Study</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request Portfolio Viewing
            </ButtonLink>
          </MotionBlock>

          <MotionBlock className="mt-10 grid grid-cols-3 gap-3 border-y border-brown/10 py-5 text-sm text-muted">
            <div>
              <p className="eyebrow">Focus</p>
              <p className="mt-2 font-semibold text-brown">Womenswear</p>
            </div>
            <div>
              <p className="eyebrow">Season</p>
              <p className="mt-2 font-semibold text-brown">A/W 2027</p>
            </div>
            <div>
              <p className="eyebrow">Practice</p>
              <p className="mt-2 font-semibold text-brown">Textile-led</p>
            </div>
          </MotionBlock>
        </MotionStagger>

        <MotionBlock
          className="grid gap-4 sm:grid-cols-[1fr_0.72fr] sm:items-end"
          variant="softScale"
        >
          <AnimatedImageFrame
            src="/images/lumene-hero.jpg"
            alt="Editorial visual for LUMENÉ fashion collection"
            label="LUMENÉ A/W 2027"
            priority
            className="min-h-[28rem] sm:min-h-[34rem] lg:min-h-[44rem]"
            parallax={36}
          />
          <div className="grid gap-4">
            <AnimatedImageFrame
              src="/images/textile-sample.jpg"
              alt="Batik-inspired textile detail for LUMENÉ"
              label="Textile Surface"
              className="aspect-[4/5]"
              parallax={18}
            />
            <div className="rounded-md border border-brown/10 bg-cream/60 p-5">
              <p className="eyebrow">Collection Statement</p>
              <p className="serif mt-3 text-2xl font-semibold leading-tight text-brown">
                From confinement to release, fabric becomes a language of
                emotional movement.
              </p>
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}
