import { SectionHeading } from "@/components/SectionHeading";
import { SkillTag } from "@/components/SkillTag";
import { skills } from "@/lib/data";

const interests = [
  "Contemporary womenswear",
  "Assistant designer roles",
  "Freelance design",
  "Textile development",
  "Styling collaborations",
  "Graduate showcases",
];

export default function AboutPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">About the Designer</p>
            <h1 className="serif mt-4 text-5xl font-semibold leading-tight text-brown sm:text-7xl">
              Creative identity rooted in fabric, body, memory, and change.
            </h1>
          </div>
          <div className="soft-card rounded-md p-7 sm:p-9">
            <h2 className="serif text-3xl font-semibold text-brown">Designer Bio</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              [Designer Name] is an emerging fashion designer specialising in
              contemporary womenswear, draping, textile surface development, and
              emotional storytelling. Her practice explores the connection
              between fabric, body, memory, and transformation. Through her
              collection LUMENÉ, she uses batik-inspired textures, flowing
              silhouettes, layered fabrics, and soft sculptural forms to express
              the journey from inner darkness to light. Her work celebrates
              emotional authenticity, conscious craftsmanship, modern femininity,
              and poetic self-expression.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream/35">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Design Philosophy"
            title="Fashion as emotional transformation"
            text="The practice treats garments as visual storytelling and fabric as memory, movement, and identity. Each collection begins with feeling and becomes form through research, surface, drape, and considered construction."
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="editorial-container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Skills" title="Portfolio capabilities" />
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Career Interests" title="Creative pathways" />
            <div className="mt-8 grid gap-3">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="rounded-md border border-brown/12 bg-cream/50 px-5 py-4 text-sm font-semibold text-brown"
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
