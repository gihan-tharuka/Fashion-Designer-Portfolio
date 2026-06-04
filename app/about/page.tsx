import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillTag } from "@/components/SkillTag";
import { skills } from "@/lib/data";

const interests = [
  "Contemporary womenswear",
  "Assistant designer roles",
  "Freelance design" ,
];

export default function AboutPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePlaceholder
            src="/images/designer/Imalka-Tharuni.jpeg"
            alt="Portrait of fashion designer Imalka Tharuni"
            label="Imalka Tharuni"
            priority
            showLabelEyebrow={false}
            showSpotlight={false}
            className="min-h-[26rem] lg:min-h-[38rem]"
          />
          <div className="soft-card rounded-md p-7 sm:p-9">
            <h2 className="serif text-3xl font-semibold text-brown">Designer Bio</h2>
            <div className="mt-5 space-y-5 text-base leading-8 text-muted">
              <p>
                Imalka Tharuni is a developing fashion designer with a strong
                interest in emotional storytelling, textile craft, and
                contemporary womenswear. Her design practice explores personal
                experiences, transformation, healing, and identity through
                fabric, silhouette, colour, and surface detail.
              </p>
              <p>
                Her current collection, Metamorphosis, is inspired by the
                journey from chrysalis to butterfly and reflects emotional
                growth, protection, struggle, and release. Through batik,
                draping, layered forms, and feminine eveningwear silhouettes,
                she aims to create garments that feel meaningful, delicate, and
                powerful.
              </p>
              <p>
                Imalka&apos;s work is influenced by Sri Lankan craft,
                handcrafted textiles, and the emotional connection between
                clothing and the wearer. Her design direction focuses on
                authenticity, conscious craftsmanship, and creating fashion that
                tells a personal story.
              </p>
            </div>
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
