import { ButtonLink } from "@/components/ButtonLink";
import { HeroSection } from "@/components/HeroSection";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { AnimatedHeading, ImageReveal, Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { ValueCard } from "@/components/ValueCard";
import { values } from "@/lib/data";
import { looks } from "@/lib/looks";
import Link from "next/link";

const contactDetails = [
  {
    label: "Email",
    value: "imalkatharuni24@gmail.com",
    href: "mailto:imalkatharuni24@gmail.com",
  },
  {
    label: "Phone",
    value: "078 287 0261",
    href: "tel:+94782870261",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/imalka-tharuni-71b145234",
    href: "https://www.linkedin.com/in/imalka-tharuni-71b145234/",
  },
  {
    label: "Location",
    value: "Colombo / available remotely",
    href: null,
  },
];

const aboutSkills = [
  "Fashion Illustration",
  "Draping",
  "Textile Surface",
  "Batik Development",
  "Concept Research",
  "Mood Boards",
  "Technical Drawing",
  "Portfolio Development",
];

const creativeProcessSteps = [
  {
    number: "01",
    title: "Research and Concept",
    text: "Explored emotional transformation, butterfly metamorphosis, chrysalis protection, and visual metaphors from darkness into light.",
  },
  {
    number: "02",
    title: "Mood Board Development",
    text: "Built a visual direction through symbolic forms, soft textures, layered references, and emotional colour moods.",
  },
  {
    number: "03",
    title: "Customer Profile",
    text: "Defined a contemporary womenswear customer interested in expressive fashion, individuality, and poetic design.",
  },
  {
    number: "04",
    title: "Fabric Board and Colour Story",
    text: "Developed warm browns, burnt orange, muted neutrals, soft blush, and dark-to-light tonal movement.",
  },
  {
    number: "05",
    title: "Textile Experiments",
    text: "Explored batik-inspired marks, surface textures, layered dye effects, and handcrafted textile expression.",
  },
  {
    number: "06",
    title: "Draping and Silhouette Development",
    text: "Tested cocoon-like forms, sculptural sleeves, layered shapes, and soft movement on the body.",
  },
  {
    number: "07",
    title: "Design Refinement",
    text: "Refined garment proportions, technical drawings, range planning, and construction decisions.",
  },
  {
    number: "08",
    title: "Final Outcome",
    text: "Presented a six-look capsule collection connecting emotional storytelling, surface, silhouette, and craft.",
  },
];

const processArchiveImages = [
  {
    src: "/images/website/concept.jpg",
    label: "Concept and Inspiration",
  },
  {
    src: "/images/website/moodboard.jpg",
    label: "Mood Board",
  },
  {
    src: "/images/website/textiledevelopment.jpg",
    label: "Textile Developments",
  },
  {
    src: "/images/website/rangeplan.jpg",
    label: "Range Plan",
  },
];

const lookbookLayouts = [
  "lg:col-span-7",
  "lg:col-span-5 lg:pt-20",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-5 lg:pt-14",
  "lg:col-span-7",
];

const lookbookImageFrames = [
  "h-[min(74svh,44rem)]",
  "h-[min(68svh,38rem)]",
  "h-[min(66svh,36rem)]",
  "h-[min(62svh,34rem)]",
  "h-[min(68svh,38rem)]",
  "h-[min(74svh,44rem)]",
];

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="section-pad magazine-spread">
        <div className="editorial-container">
          <Reveal className="mb-14 grid gap-6 border-b border-gold/24 pb-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-end">
            <p className="eyebrow">Brand Statement</p>
            <AnimatedHeading>
              <h2 className="serif max-w-5xl text-5xl font-semibold leading-[0.96] text-espresso sm:text-6xl lg:text-7xl">
                A personal language of transformation, memory, and quiet
                feminine power.
              </h2>
            </AnimatedHeading>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.35fr_0.85fr] lg:items-start">
            <div>
              <ImageReveal>
                <ImagePlaceholder
                  src="/images/website/brand.jpeg"
                  alt="LUMENÉ concept and creative practice visual"
                  label="Branding Statement"
                  fit="contain"
                  showLabel={false}
                  showSpotlight={false}
                  className="aspect-[754/1019] bg-cream/70"
                />
              </ImageReveal>
              <div className="mt-5 flex items-center justify-between border-t border-gold/24 pt-4 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-muted">
                <span>LUMENÉ</span>
                <span>Metamorphosis</span>
              </div>
            </div>

            <Reveal className="space-y-6 border-y border-gold/20 py-7 text-base leading-8 text-muted lg:border-x lg:border-y-0 lg:px-8 lg:py-0">
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
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="quote-drift rounded-md border border-gold/28 bg-cream/58 p-7 shadow-[0_24px_70px_rgba(58,36,24,0.1)] backdrop-blur-xl">
                <p className="eyebrow">Editorial Note</p>
                <blockquote className="serif mt-6 text-4xl font-semibold leading-[1.02] text-brown">
                  “Fabric becomes a language for inner strength, softness, and
                  release.”
                </blockquote>
                <div className="mt-8 h-px w-20 bg-gold" />
                <p className="mt-6 text-sm leading-7 text-muted">
                  LUMENÉ holds contrast at its centre: protection and
                  liberation, fragility and power, darkness and afterlight.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad scroll-mt-28 bg-ivory/72">
        <div className="editorial-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ImageReveal>
            <div>
              <div className="relative">
                <ImagePlaceholder
                  src="/images/designer/Imalka-Tharuni.jpeg"
                  alt="Portrait of fashion designer Imalka Tharuni"
                  label="Imalka Tharuni"
                  showLabelEyebrow={false}
                  showSpotlight={false}
                  className="aspect-[4/5] min-h-[32rem] bg-[#DCDBDB] shadow-[0_34px_100px_rgba(58,36,24,0.16)] lg:min-h-[42rem]"
                />
              </div>

              <div className="mt-9 border-t border-gold/24 pt-7">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
                  Craft Focus
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {aboutSkills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-gold/24 bg-cream/54 px-3.5 py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-brown transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-muted">
                  <span className="font-bold uppercase tracking-[0.16em] text-brown">
                    Creative interests:
                  </span>{" "}
                  Contemporary womenswear, assistant designer roles, freelance
                  design, styling collaborations, and graduate showcase
                  opportunities.
                </p>
              </div>
            </div>
          </ImageReveal>

          <Reveal className="space-y-8">
            <div className="max-w-4xl">
              <div className="mb-8 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
              <p className="eyebrow">About the Designer</p>
              <AnimatedHeading>
                <h2 className="serif mt-5 text-5xl font-semibold leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
                  Imalka Tharuni creates womenswear shaped by emotion, craft,
                  and transformation.
                </h2>
              </AnimatedHeading>
            </div>

            <div className="grid gap-8 border-y border-gold/24 py-8 lg:grid-cols-[0.66fr_0.34fr]">
              <div className="space-y-5 text-base leading-8 text-muted">
                <p>
                  Imalka Tharuni is a developing fashion designer with a strong
                  interest in emotional storytelling, textile craft, and
                  contemporary womenswear. Her design practice explores personal
                  experiences, transformation, healing, and identity through
                  fabric, silhouette, colour, and surface detail.
                </p>
                <p>
                  Her current collection, LUMENÉ, reflects the journey from
                  chrysalis to butterfly, using draping, batik-inspired textile
                  surfaces, layered forms, and soft sculptural silhouettes to
                  express emotional growth, protection, struggle, and release.
                </p>
              </div>

              <aside className="border-l border-gold/24 pl-6 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-6">
                <blockquote className="serif text-3xl font-semibold leading-tight text-brown sm:text-4xl">
                  “Fashion becomes a personal language of memory, movement, and
                  transformation.”
                </blockquote>
                <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
                  Imalka Tharuni
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Fashion Designer / Contemporary Womenswear / Textile Surface
                  / Draping
                </p>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="collection-reveal overflow-hidden bg-[radial-gradient(circle_at_18%_8%,rgba(179,137,75,0.2),transparent_28rem),linear-gradient(135deg,#1b120d,#2b1b12_48%,#130d09)] py-20 text-cream sm:py-24 lg:py-28">
        <div className="editorial-container">
          <Reveal className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <p className="eyebrow">Featured Collection</p>
              <AnimatedHeading>
                <h2 className="serif mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] text-cream sm:text-7xl lg:text-8xl">
                  LUMENÉ Capsule Collection S/W 2027
                </h2>
              </AnimatedHeading>
              <p className="mt-7 max-w-3xl text-base leading-8 text-cream/72">
                Contemporary womenswear shaped by emotional healing, butterfly
                metamorphosis, translucent fabric layers, draped silhouettes,
                and batik-inspired textile surfaces.
              </p>
            </div>

            <Stagger className="grid gap-4 border-l border-gold/28 pl-6 text-xs font-bold uppercase tracking-[0.18em] text-cream/68 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-6">
              <StaggerItem>6 Looks</StaggerItem>
              <StaggerItem>Draped Silhouettes</StaggerItem>
              <StaggerItem>Batik-Inspired Surfaces</StaggerItem>
              <StaggerItem>Emotional Transformation</StaggerItem>
            </Stagger>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.24fr_0.76fr] lg:items-end">
            <Reveal delay={0.1} className="max-w-sm">
              <p className="serif text-3xl font-semibold leading-tight text-gold">
                An editorial entrance into a six-look metamorphosis.
              </p>
              <div className="mt-8">
                <ButtonLink href="/portfolio">Explore the Looks</ButtonLink>
              </div>
            </Reveal>

            <ImageReveal className="collection-image-frame relative lg:-mb-12">
              <div className="absolute -left-5 -top-5 hidden h-28 w-28 border-l border-t border-gold/40 lg:block" />
              <ImagePlaceholder
                src="/images/website/lineup.jpg"
                alt="LUMENÉ six look collection lineup"
                label="6 Looks / S/W 2027"
                showLabelEyebrow={false}
                showSpotlight={false}
                className="aspect-[3509/2481] border-gold/30 bg-charcoal shadow-[0_34px_100px_rgba(0,0,0,0.32)]"
              />
            </ImageReveal>
          </div>
        </div>
      </section>

      <section id="process" className="section-pad scroll-mt-28 bg-cream/45">
        <div className="editorial-container">
          <Reveal className="grid gap-8 border-b border-gold/24 pb-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <p className="eyebrow">Creative Process</p>
            <div>
              <AnimatedHeading>
                <h2 className="serif text-5xl font-semibold leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
                  From concept research to final collection.
                </h2>
              </AnimatedHeading>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
                The LUMENÉ collection developed through visual research, mood
                exploration, customer study, fabric and colour investigation,
                textile experimentation, draping, refinement, and final line-up
                development.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
            <Stagger className="grid gap-px overflow-hidden border border-gold/22 bg-gold/22 sm:grid-cols-2">
              {creativeProcessSteps.map((step) => (
                <StaggerItem key={step.number}>
                  <article className="group min-h-full bg-ivory/92 p-6 transition duration-700 hover:bg-cream sm:p-7">
                    <div className="flex items-start gap-5">
                      <span className="serif shrink-0 text-5xl font-semibold leading-none text-gold/72 transition duration-700 group-hover:text-accent">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="serif text-2xl font-semibold leading-tight text-brown">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-muted">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.12} className="lg:sticky lg:top-28">
              <div className="border border-gold/24 bg-ivory/76 p-4 shadow-[0_24px_80px_rgba(58,36,24,0.1)]">
                <div className="grid grid-cols-2 gap-3">
                  {processArchiveImages.map((image) => (
                    <div key={image.label} className="group">
                      <ImagePlaceholder
                        src={image.src}
                        alt={`${image.label} process archive image`}
                        label={image.label}
                        fit="contain"
                        showLabel={false}
                        showSpotlight={false}
                        className="aspect-[4/3] bg-[#DCDBDB] shadow-none transition duration-[1200ms] group-hover:scale-[1.015]"
                      />
                      <p className="mt-2 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted">
                        {image.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 border-t border-gold/22 pt-6">
                  <p className="serif text-3xl font-semibold leading-tight text-brown">
                    Archive fragments from research, surface, silhouette, and
                    range planning.
                  </p>
                  <div className="mt-6">
                    <ButtonLink href="/portfolio" variant="secondary">
                      View the Final Looks
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad overflow-hidden">
        <div className="editorial-container">
          <Reveal className="grid gap-8 border-b border-gold/24 pb-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-end">
            <p className="eyebrow">Lookbook</p>
            <div>
              <AnimatedHeading>
                <h2 className="serif text-5xl font-semibold leading-[0.94] text-espresso sm:text-6xl lg:text-7xl">
                  Six final looks, each holding a stage of metamorphosis.
                </h2>
              </AnimatedHeading>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
                An editorial preview of the LUMENÉ collection, moving from
                cocooned protection through fractured light, emergence, memory,
                liberation, and afterlight.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 lg:grid-cols-12 lg:gap-8">
            {looks.map((look, index) => (
              <div
                key={look.slug}
                className={lookbookLayouts[index] ?? "lg:col-span-6"}
              >
                <Link
                  href={`/portfolio/${look.slug}`}
                  className="focus-ring group block"
                >
                  <article className="lookbook-scroll-card relative overflow-hidden rounded-md border border-gold/20 shadow-[0_24px_80px_rgba(58,36,24,0.1)] transition duration-700 hover:-translate-y-1 hover:border-gold/55 hover:shadow-[0_34px_100px_rgba(58,36,24,0.16)]">
                    <div className="overflow-hidden">
                      <ImagePlaceholder
                        src={look.modelImage ?? look.image ?? ""}
                        alt={`Look ${look.number}: ${look.name}`}
                        label={look.name}
                        fit="contain"
                        showLabel={false}
                        showSpotlight={false}
                        className={`${lookbookImageFrames[index] ?? "h-[min(72svh,42rem)]"} lookbook-image-surface max-h-[calc(100svh-5rem)] rounded-none border-0 transition duration-[1200ms] group-hover:scale-[1.025]`}
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(27,18,13,0.9))] p-5 pt-24 text-cream sm:p-7">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="text-[0.64rem] font-bold uppercase tracking-[0.22em] text-gold">
                            Look {look.number}
                          </p>
                          <h3 className="serif mt-2 text-3xl font-semibold leading-tight sm:text-4xl">
                            {look.name}
                          </h3>
                        </div>
                        <span className="hidden h-px flex-1 bg-gold/38 transition duration-700 group-hover:bg-gold sm:block" />
                      </div>

                      <div className="mt-4 translate-y-0 opacity-100 transition duration-700 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                        <p className="max-w-2xl text-sm leading-7 text-cream/76">
                          {look.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {look.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-cream/18 bg-cream/10 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-cream/72 backdrop-blur-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-ivory/62">
        <div className="editorial-container">
          <Reveal className="grid gap-8 border-b border-gold/24 pb-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <p className="eyebrow">Design Identity</p>
            <div>
              <AnimatedHeading>
                <h2 className="serif text-5xl font-semibold leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
                  Soft power, tactile memory, and modern femininity.
                </h2>
              </AnimatedHeading>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
                The portfolio frames fashion as a language of transformation,
                where fabric surfaces hold memory and silhouette becomes
                emotional movement.
              </p>
            </div>
          </Reveal>
          <Stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <ValueCard {...value} index={index + 1} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        id="contact"
        className="section-pad luxury-section scroll-mt-28"
      >
        <div className="editorial-container">
          <Reveal>
            <div className="luxury-cta-panel rounded-md border border-gold/26 bg-cream/[0.055] p-6 shadow-[0_34px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10 lg:p-14">
              <div className="relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <div className="mb-8 h-px w-28 bg-gradient-to-r from-gold to-transparent" />
                  <p className="eyebrow">Creative Opportunities</p>
                  <h2 className="serif mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] text-cream sm:text-6xl lg:text-7xl">
                    Available for collaborations, internships, styling
                    projects, and creative opportunities.
                  </h2>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-cream/72">
                    For portfolio viewing, commissions, creative direction
                    support, graduate showcase opportunities, fashion industry
                    enquiries, or styling collaborations, please get in touch.
                  </p>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <ButtonLink href="mailto:imalkatharuni24@gmail.com">
                      Email Me
                    </ButtonLink>
                    <ButtonLink
                      href="https://www.linkedin.com/in/imalka-tharuni-71b145234/"
                      variant="light"
                    >
                      View LinkedIn
                    </ButtonLink>
                    <ButtonLink
                      href="/docs/portfolio.pdf"
                      variant="light"
                      download="Imalka-Tharuni-Portfolio.pdf"
                    >
                      Download Portfolio PDF
                    </ButtonLink>
                  </div>
                </div>

                <Stagger className="grid gap-4">
                  {contactDetails.map((detail) => (
                    <StaggerItem key={detail.label}>
                      <div className="group border border-gold/18 bg-cream/[0.06] p-5 transition duration-500 hover:-translate-y-1 hover:border-gold/48 hover:bg-cream/[0.09]">
                        <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-gold">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-3 block text-base font-semibold leading-7 text-cream/82 transition duration-500 group-hover:text-gold"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-3 text-base font-semibold leading-7 text-cream/82">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
