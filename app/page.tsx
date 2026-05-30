import { AnimatedImageFrame } from "@/components/AnimatedImageFrame";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { MotionBlock, MotionItem, MotionStagger } from "@/components/MotionBlock";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillTag } from "@/components/SkillTag";

const selectedWorks = [
  {
    title: "Look 01 — Draped chrysalis jacket",
    category: "Final Garment Direction",
    image: "/images/final-look-1.jpg",
    text: "An asymmetric outerwear silhouette using soft volume, protective wrapping, and layered batik-inspired textile patches.",
  },
  {
    title: "Look 02 — Flowing trouser silhouette",
    category: "Range Development",
    image: "/images/final-look-2.jpg",
    text: "A fluid womenswear look balancing movement, translucency, and grounded earthy colour for a modern reflective wearer.",
  },
  {
    title: "Textile surface study",
    category: "Material Experiment",
    image: "/images/textile-sample.jpg",
    text: "Organic marks and colour diffusion inspired by butterfly wings, memory, and the emotional texture of transformation.",
  },
];

const techniques = [
  "Fashion Illustration",
  "Draping",
  "Batik-inspired Surface",
  "Silhouette Development",
  "Fabric Board",
  "Mood Direction",
  "Range Planning",
  "Portfolio Styling",
];

const galleryPreview = [
  ["/images/moodboard.jpg", "Mood Board"],
  ["/images/fabric-board.jpg", "Fabric and Colour"],
  ["/images/design-development.jpg", "Draping Development"],
  ["/images/final-look-1.jpg", "Final Look 01"],
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="section-pad bg-cream/35">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <MotionBlock className="lg:pb-10">
            <SectionHeading
              eyebrow="Featured Collection"
              title="LUMENÉ Capsule Collection A/W 2027"
              text="The flagship collection presents contemporary womenswear inspired by emotional healing, butterfly metamorphosis, translucent fabric layers, and tactile batik-inspired textile surfaces."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href="/portfolio/lumene">Explore Collection</ButtonLink>
              <ButtonLink href="/process" variant="ghost">
                View Design Process
              </ButtonLink>
            </div>
          </MotionBlock>

          <MotionBlock
            className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-end"
            variant="softScale"
          >
            <AnimatedImageFrame
              src="/images/final-look-1.jpg"
              alt="LUMENÉ final collection preview"
              label="Final Look 01"
              className="aspect-[3/4]"
              parallax={30}
            />
            <div className="grid gap-4">
              <AnimatedImageFrame
                src="/images/fabric-board.jpg"
                alt="LUMENÉ fabric and colour board preview"
                label="Fabric Board"
                className="aspect-[4/3]"
                parallax={18}
              />
              <div className="grid gap-3 rounded-md border border-brown/10 bg-background/70 p-5 sm:grid-cols-3">
                {["Draping", "Batik", "Chiffon"].map((item) => (
                  <div key={item}>
                    <p className="eyebrow">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      Collection language shaped through fabric, surface, and
                      emotional movement.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </MotionBlock>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container">
          <MotionBlock>
            <SectionHeading
              eyebrow="Selected Works"
              title="Garments, surfaces, and studies from the collection"
              text="A concise preview of final looks and development work, curated to show concept, material sensitivity, silhouette, and portfolio-ready outcomes."
            />
          </MotionBlock>
          <MotionStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {selectedWorks.map((work) => (
              <MotionItem key={work.title}>
                <article className="group border-t border-brown/15 pt-5 transition duration-300 hover:-translate-y-1">
                  <AnimatedImageFrame
                    src={work.image}
                    alt={`${work.title} portfolio preview`}
                    label={work.category}
                    className="aspect-[4/5]"
                    parallax={18}
                  />
                  <p className="eyebrow mt-5">{work.category}</p>
                  <h3 className="serif mt-3 text-3xl font-semibold leading-tight text-brown">
                    {work.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{work.text}</p>
                </article>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="section-pad bg-brown text-cream">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <MotionBlock variant="softScale">
            <AnimatedImageFrame
              src="/images/design-development.jpg"
              alt="Studio design development preview"
              label="Studio Practice"
              className="aspect-[5/4] border-cream/15"
              parallax={24}
            />
          </MotionBlock>
          <MotionBlock>
            <p className="eyebrow text-rose">About Preview</p>
            <h2 className="serif mt-4 text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              A textile-led womenswear practice shaped by memory, movement, and
              transformation.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-cream/74">
              [Designer Name] is an emerging fashion designer specialising in
              contemporary womenswear, draping, textile surface development, and
              emotional storytelling. Her work uses fabric as a visual language
              for protection, healing, emergence, and poetic self-expression.
            </p>
            <div className="mt-8">
              <ButtonLink href="/about" variant="light">
                Read About the Designer
              </ButtonLink>
            </div>
          </MotionBlock>
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <MotionBlock>
            <SectionHeading
              eyebrow="Skills and Techniques"
              title="Professional fashion portfolio capabilities"
              text="The homepage foregrounds the skills most relevant to lecturers, interview panels, brands, collaborators, and creative directors."
            />
          </MotionBlock>
          <MotionStagger className="flex flex-wrap content-start gap-3 lg:pt-12">
            {techniques.map((technique) => (
              <MotionItem key={technique}>
                <SkillTag>{technique}</SkillTag>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container">
          <MotionBlock className="grid gap-8 md:grid-cols-[0.7fr_0.3fr] md:items-end">
            <SectionHeading
              eyebrow="Gallery Preview"
              title="Mood, material, development, and final look"
              text="A lookbook-style preview of the portfolio evidence: visual research, fabric story, draping development, and resolved outcome."
            />
            <div className="md:text-right">
              <ButtonLink href="/portfolio" variant="secondary">
                View Full Portfolio
              </ButtonLink>
            </div>
          </MotionBlock>
          <MotionStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPreview.map(([src, label], index) => (
              <MotionItem
                key={label}
                className={index === 1 ? "lg:mt-12" : index === 2 ? "lg:mt-6" : ""}
              >
                <AnimatedImageFrame
                  src={src}
                  alt={`${label} preview for LUMENÉ portfolio`}
                  label={label}
                  className="aspect-[3/4]"
                  parallax={index % 2 === 0 ? 18 : 30}
                />
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      <CTASection
        title="Available for collaborations, internships, styling projects, and creative opportunities."
        text="For portfolio viewing, commissions, creative direction support, photoshoots, exhibitions, graduate showcase opportunities, or fashion industry enquiries, please get in touch."
        buttonText="Contact for Collaboration"
        href="/contact"
      />
    </main>
  );
}
