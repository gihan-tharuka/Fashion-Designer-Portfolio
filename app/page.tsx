import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueCard } from "@/components/ValueCard";
import { values } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="section-pad magazine-spread">
        <div className="editorial-container">
          <div className="motion-reveal mb-14 grid gap-6 border-b border-gold/24 pb-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
            <p className="eyebrow">Brand Statement</p>
            <h2 className="serif max-w-5xl text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl lg:text-7xl">
              A personal language of transformation, memory, and quiet feminine
              power.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.35fr_0.85fr] lg:items-start">
            <div className="motion-reveal-delayed">
              <ImagePlaceholder
                src="/images/website/brand.jpeg"
                alt="LUMENÉ concept and creative practice visual"
                label="Branding Statement"
                fit="contain"
                showLabel={false}
                showSpotlight={false}
                className="aspect-[4/5] bg-cream/70"
              />
              <div className="mt-5 flex items-center justify-between border-t border-gold/24 pt-4 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted">
                <span>LUMENÉ</span>
                <span>Metamorphosis</span>
              </div>
            </div>

            <div className="motion-reveal space-y-6 border-y border-gold/20 py-7 text-base leading-8 text-muted lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
              <p>
                My creative practice explores fashion as a form of emotional
                transformation. Through my collection LUMENÉ, I translate the
                journey from darkness to light into contemporary womenswear that
                is poetic, tactile, and deeply personal. My work is inspired by
                the idea of metamorphosis, especially the transition from
                confinement to growth and liberation. This is expressed through
                draped silhouettes, soft sculptural forms, batik-inspired
                textile surfaces, translucent layers, and flowing fabrics such
                as crepe, silk chiffon, and tulle.
              </p>
              <p>
                My design style combines modern femininity with emotional
                storytelling. I am interested in the way fabric can hold
                feeling, movement, memory, and identity. Rather than creating
                garments only for decoration, I aim to design pieces that
                communicate inner strength, vulnerability, and self-awareness.
                My work often uses contrast: softness and structure, darkness
                and light, fragility and power, stillness and movement.
              </p>
              <p>
                What makes my practice distinct is the combination of concept,
                craft, and surface. I use batik-inspired textures, butterfly
                symbolism, and layered fabric manipulation to create garments
                that feel expressive and refined. As an emerging designer, my
                goal is to build a contemporary womenswear identity that
                celebrates emotional authenticity, conscious craftsmanship, and
                quiet feminine power.
              </p>
            </div>

            <aside className="quote-drift rounded-md border border-gold/28 bg-cream/58 p-7 shadow-[0_24px_70px_rgba(58,36,24,0.1)] backdrop-blur-xl">
              <p className="eyebrow">Editorial Note</p>
              <blockquote className="serif mt-6 text-4xl font-semibold leading-[1.02] text-brown">
                “Fabric becomes a language for inner strength, softness, and
                release.”
              </blockquote>
              <div className="mt-8 h-px w-20 bg-gold" />
              <p className="mt-6 text-sm leading-7 text-muted">
                LUMENÉ holds contrast at its centre: protection and liberation,
                fragility and power, darkness and afterlight.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/32">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Featured Collection"
              title="LUMENÉ Capsule Collection S/W 2027"
              text="The central project presents contemporary womenswear inspired by emotional healing, butterfly metamorphosis, translucent fabric layers, and batik-inspired textile surfaces."
            />
            <div className="mt-8">
              <ButtonLink href="/portfolio">Explore Collection</ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            src="/images/website/lineup.jpg"
            alt="LUMENÉ final collection preview"
            label="Final Collection Preview"
            showLabel={false}
            showSpotlight={false}
            className="aspect-[5/4]"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Design Identity"
            title="Soft power, tactile memory, and modern femininity."
            text="The portfolio frames fashion as a language of transformation, where fabric surfaces hold memory and silhouette becomes emotional movement."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Available for collaborations, internships, styling projects, and creative opportunities."
        text="For portfolio viewing, commissions, creative direction support, graduate showcase opportunities, or fashion industry enquiries, please get in touch."
        buttonText="Get in Touch"
        href="/contact"
      />
    </main>
  );
}
