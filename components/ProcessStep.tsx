import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type ProcessStepProps = {
  title: string;
  text: string;
  image: string;
  index: number;
};

export function ProcessStep({ title, text, image, index }: ProcessStepProps) {
  return (
    <article className="grid gap-6 border-t border-brown/12 py-8 md:grid-cols-[0.35fr_0.65fr] md:items-center">
      <div>
        <p className="eyebrow">Step {String(index).padStart(2, "0")}</p>
        <h3 className="serif mt-3 text-3xl font-semibold text-brown">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
      </div>
      <ImagePlaceholder
        src={image}
        alt={`${title} process visual`}
        label={title}
        showLabel={false}
        showSpotlight={false}
        className="aspect-[16/9]"
      />
    </article>
  );
}
