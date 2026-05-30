import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title: string;
  text: string;
  buttonText: string;
  href: string;
};

export function CTASection({ title, text, buttonText, href }: CTASectionProps) {
  return (
    <section className="section-pad">
      <div className="editorial-container">
        <div className="soft-card rounded-md p-8 text-center sm:p-12">
          <p className="eyebrow">Creative Opportunities</p>
          <h2 className="serif mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-brown sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">{text}</p>
          <div className="mt-8">
            <ButtonLink href={href}>{buttonText}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
