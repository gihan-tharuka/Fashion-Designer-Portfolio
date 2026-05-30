import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    title: "Research and Concept",
    text: "The process begins by studying emotional transformation, butterfly metamorphosis, chrysalis protection, and visual metaphors for moving from darkness into light.",
    image: "/images/moodboard.jpg",
  },
  {
    title: "Mood Board Development",
    text: "Images, textures, colour references, fabric movement, and symbolic forms are edited into a focused mood direction for LUMENÉ.",
    image: "/images/moodboard.jpg",
  },
  {
    title: "Customer Profile",
    text: "The target customer is defined through lifestyle, values, wardrobe needs, emotional connection, and expectations of contemporary womenswear.",
    image: "/images/lumene-hero.jpg",
  },
  {
    title: "Fabric Board and Colour Story",
    text: "Cotton crepe, silk, silk chiffon, tulle, batik-inspired patches, earthy neutrals, rose, rust, and teal are composed into a cohesive material language.",
    image: "/images/fabric-board.jpg",
  },
  {
    title: "Textile Experiments",
    text: "Surface studies explore organic marks, colour blending, layered patches, and tactile fabric storytelling inspired by wings and emotional memory.",
    image: "/images/textile-sample.jpg",
  },
  {
    title: "Draping and Silhouette Development",
    text: "Garments evolve through asymmetry, draped jackets, puff sleeves, flowy trousers, translucent layering, and soft sculptural volume.",
    image: "/images/design-development.jpg",
  },
  {
    title: "Design Refinement",
    text: "Range planning clarifies outfit balance, fabric placement, detail hierarchy, styling, and how each look contributes to the collection narrative.",
    image: "/images/final-look-1.jpg",
  },
  {
    title: "Final Outcome",
    text: "The final portfolio presentation communicates concept, customer, process, technical awareness, textile identity, and resolved contemporary womenswear outcomes.",
    image: "/images/final-look-2.jpg",
  },
];

export default function ProcessPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Professional Process"
            title="A complete fashion design journey"
            text="This page documents the design process expected in a professional fashion portfolio: research, mood, customer, fabric, textile experimentation, development, refinement, and outcome."
          />
          <div className="mt-10">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} {...step} index={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
