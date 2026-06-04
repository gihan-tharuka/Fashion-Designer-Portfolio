import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SkillTag } from "@/components/SkillTag";
import type { Look } from "@/lib/looks";

type LookCardProps = {
  look: Look;
};

export function LookCard({ look }: LookCardProps) {
  return (
    <article className="soft-card group overflow-hidden rounded-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(74,36,18,0.13)]">
      {look.modelImage ? (
        <ImagePlaceholder
          src={look.modelImage}
          alt={`Look ${look.number}: ${look.name}`}
          label={look.name}
          showLabel={false}
          showSpotlight={false}
          className="aspect-[4/5] rounded-none border-0"
        />
      ) : (
        <div className="flex aspect-[4/5] items-center justify-center border-b border-brown/10 bg-[linear-gradient(135deg,rgba(255,250,240,0.88),rgba(200,145,166,0.18),rgba(156,90,56,0.14))] px-8 text-center">
          <div>
            <p className="eyebrow">Image Coming Soon</p>
            <p className="serif mt-3 text-3xl font-semibold text-brown">
              Look {look.number}
            </p>
          </div>
        </div>
      )}
      <div className="p-6">
        <p className="eyebrow">Look {look.number}</p>
        <h3 className="serif mt-3 text-3xl font-semibold leading-tight text-brown">
          {look.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">{look.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {look.tags.map((tag) => (
            <SkillTag key={tag}>{tag}</SkillTag>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href={`/portfolio/${look.slug}`} variant="secondary">
            View Look
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
