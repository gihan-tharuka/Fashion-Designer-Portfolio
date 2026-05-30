import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function PortfolioPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Curated fashion projects"
            text="Selected work showing concept research, textile surface development, draping, silhouette exploration, and final collection outcomes for contemporary womenswear."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in viewing the full portfolio?"
        text="Request the complete design portfolio for internships, commissions, collaborations, or graduate showcase review."
        buttonText="Contact for Portfolio Viewing"
        href="/contact"
      />
    </main>
  );
}
