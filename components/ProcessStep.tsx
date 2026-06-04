import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type ProcessStepProps = {
  title: string;
  text: string;
  image: string;
  index: number;
};

export function ProcessStep({ title, text, image, index }: ProcessStepProps) {
  return (
    <article className="motion-reveal grid gap-8 border-t border-gold/20 py-10 md:grid-cols-[0.34fr_0.66fr] md:items-center">
      <div>
        <p className="eyebrow">Step {String(index).padStart(2, "0")}</p>
        <h3 className="serif mt-3 text-4xl font-semibold leading-tight text-brown">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
      </div>
      <ImagePlaceholder
        src={image}
        alt={`${title} process visual`}
        label={title}
        fit="contain"
        showLabel={false}
        showSpotlight={false}
        className="aspect-[3509/2481] bg-cream/70"
      />
    </article>
  );
}
