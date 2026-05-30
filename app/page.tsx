import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { ValueCard } from "@/components/ValueCard";
import { processSteps, values } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="section-pad bg-cream/32">
        <div className="editorial-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Featured Collection"
              title="LUMENÉ Capsule Collection A/W 2027"
              text="The central project presents contemporary womenswear inspired by emotional healing, butterfly metamorphosis, translucent fabric layers, and batik-inspired textile surfaces."
            />
            <div className="mt-8">
              <ButtonLink href="/portfolio/lumene">Explore Collection</ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            src="/images/final-look-1.jpg"
            alt="LUMENÉ final collection preview"
            label="Final Collection Preview"
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

      <section className="section-pad bg-cream/35">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Process Preview"
            title="From research to final outcomes"
            text="A professional design process connects concept, customer, material experimentation, silhouette refinement, and resolved portfolio presentation."
          />
          <div className="mt-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.title} {...step} index={index + 1} />
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
