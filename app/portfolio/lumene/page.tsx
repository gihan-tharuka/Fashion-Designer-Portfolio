import { ButtonLink } from "@/components/ButtonLink";
import { ColorSwatch } from "@/components/ColorSwatch";
import { CTASection } from "@/components/CTASection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillTag } from "@/components/SkillTag";
import { swatches } from "@/lib/data";

const tags = [
  "Womenswear",
  "Draping",
  "Batik",
  "Textile Surface",
  "Emotional Design",
];

export default function LumeneProjectPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Project Case Study</p>
            <h1 className="serif mt-4 text-5xl font-semibold leading-tight text-brown sm:text-7xl">
              LUMENÉ Capsule Collection A/W 2027
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              A contemporary womenswear collection inspired by emotional
              transformation, layered fabric movement, batik-inspired surfaces,
              and the journey from darkness to light.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <SkillTag key={tag}>{tag}</SkillTag>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            src="/images/lumene-hero.jpg"
            alt="LUMENÉ capsule collection hero visual"
            label="Capsule Collection"
            priority
            className="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container grid gap-10 lg:grid-cols-2">
          <article>
            <SectionHeading
              eyebrow="Concept"
              title="Metamorphosis of Mind"
              text="The collection explores an emotional journey from confinement to growth and liberation. Chrysalis forms suggest protection and inner stillness, while butterfly wings become symbols of emergence, softness, and self-expression."
            />
          </article>
          <article>
            <SectionHeading
              eyebrow="Inspiration and Mood"
              title="Darkness moving into light"
              text="Visual references include butterfly wings, translucent surfaces, healing rituals, shadowed colour palettes, soft illumination, and fabric movement that appears to breathe with the wearer."
            />
          </article>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Customer Profile"
              title="Reflective, individual, and emotionally aware."
              text="The target wearer is a modern, reflective, fashion-conscious woman who values emotional depth, craftsmanship, individuality, and poetic elegance."
            />
          </div>
          <ImagePlaceholder
            src="/images/moodboard.jpg"
            alt="Customer profile and mood board for LUMENÉ"
            label="Mood and Customer"
            className="aspect-[16/10]"
          />
        </div>
      </section>

      <section id="fabric-colour" className="section-pad bg-cream/35">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Fabric and Colour Story"
            title="Earth, wing, shadow, and glow"
            text="Cotton crepe, silk, silk chiffon, and tulle are paired with batik-inspired patches to create layered surfaces. Earthy tones, deep teal, rust, muted rose, cream, and dark brown support the emotional movement of the collection."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {swatches.map((swatch) => (
              <ColorSwatch key={swatch.name} {...swatch} />
            ))}
          </div>
        </div>
      </section>

      <section id="design-development" className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder
            src="/images/design-development.jpg"
            alt="Draping and silhouette development for LUMENÉ"
            label="Design Development"
            className="aspect-[4/3]"
          />
          <div>
            <SectionHeading
              eyebrow="Design Development"
              title="Draped jackets, layered panels, and soft sculptural form"
              text="The range develops asymmetric jackets, puff sleeves, draped dresses, flowy trousers, and layered translucent panels. Batik patches interrupt clean surfaces with organic marks, giving the collection a tactile and personal identity."
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Final Outcomes"
            title="Resolved looks and portfolio presentation"
            text="The final outcomes present a cohesive contemporary womenswear direction with emotional clarity, fabric-led storytelling, and a refined graduate portfolio standard."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/images/final-look-1.jpg", "Final Look 01"],
              ["/images/final-look-2.jpg", "Final Look 02"],
              ["/images/fabric-board.jpg", "Fabric Board"],
            ].map(([src, label]) => (
              <ImagePlaceholder
                key={label}
                src={src}
                alt={`${label} for LUMENÉ collection`}
                label={label}
                className="aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="eyebrow">Reflection / Outcome</p>
          <div>
            <h2 className="serif text-4xl font-semibold leading-tight text-brown sm:text-5xl">
              A personal design language of transformation.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The project developed a personal design language based on
              transformation, tactile surfaces, and soft sculptural femininity.
              It demonstrates a professional ability to connect research,
              material experimentation, customer awareness, design refinement,
              and final outcomes into one cohesive fashion portfolio story.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Contact for Portfolio Viewing</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in this collection?"
        text="Request a full portfolio viewing, discuss a commission, or connect for collaboration and internship opportunities."
        buttonText="Contact for Portfolio Viewing"
        href="/contact"
      />
    </main>
  );
}
