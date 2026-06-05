import { CTASection } from "@/components/CTASection";
import { LookCard } from "@/components/LookCard";
import { SectionHeading } from "@/components/SectionHeading";
import { looks } from "@/lib/looks";

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Portfolio"
            title="LUMENÉ Collection — 6 Looks"
            text="LUMENÉ Capsule Collection S/S 2027 is a contemporary womenswear collection exploring emotional transformation through draping, batik-inspired textile surfaces, soft sculptural forms, and poetic femininity. Each look represents a stage of metamorphosis, moving from confinement and inner darkness towards growth, softness, confidence, and liberation."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {looks.map((look) => (
              <LookCard key={look.slug} look={look} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in viewing the full portfolio?"
        text="Request the complete design portfolio for internships, commissions, collaborations, or graduate showcase review."
        buttonText="Contact for Portfolio Viewing"
        href="/#contact"
      />
    </main>
  );
}
