import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type ProjectCardProps = {
  title: string;
  category: string;
  focus: string;
  description: string;
  image: string;
  href: string;
};

export function ProjectCard({
  title,
  category,
  focus,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <article className="soft-card group overflow-hidden rounded-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(74,36,18,0.13)]">
      <ImagePlaceholder
        src={image}
        alt={`${title} project visual`}
        label={category}
        className="aspect-[4/3] rounded-none border-0"
      />
      <div className="p-6">
        <p className="eyebrow">{category}</p>
        <h3 className="serif mt-3 text-3xl font-semibold leading-tight text-brown">
          {title}
        </h3>
        <p className="mt-3 text-sm font-semibold text-teal">{focus}</p>
        <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
        <div className="mt-6">
          <ButtonLink href={href} variant="secondary">
            View Project
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
