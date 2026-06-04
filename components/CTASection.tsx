import { ButtonLink } from "@/components/ButtonLink";

type CTASectionProps = {
  title: string;
  text: string;
  buttonText: string;
  href: string;
};

export function CTASection({ title, text, buttonText, href }: CTASectionProps) {
  return (
    <section className="section-pad luxury-section">
      <div className="editorial-container">
        <div className="motion-reveal rounded-md border border-gold/22 bg-cream/[0.06] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-14">
          <p className="eyebrow">Creative Opportunities</p>
          <h2 className="serif mx-auto mt-4 max-w-4xl text-5xl font-semibold leading-[0.98] text-cream sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cream/72">{text}</p>
          <div className="mt-8">
            <ButtonLink href={href}>{buttonText}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
