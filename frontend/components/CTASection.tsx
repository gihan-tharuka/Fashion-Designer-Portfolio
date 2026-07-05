import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Motion";
import Link from "next/link";

type CTASectionProps = {
  title: string;
  text: string;
  buttonText: string;
  href: string;
  secondaryHref?: string;
  secondaryText?: string;
};

export function CTASection({
  title,
  text,
  buttonText,
  href,
  secondaryHref,
  secondaryText,
}: CTASectionProps) {
  return (
    <section className="full-bleed-section section-pad luxury-section">
      <div className="editorial-container">
        <Reveal>
        <div className="luxury-cta-panel rounded-md border border-gold/26 bg-cream/[0.055] px-6 py-16 text-center shadow-[0_34px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-12 sm:py-20 lg:px-20">
          <div className="relative z-10">
            <div className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="eyebrow">Creative Opportunities</p>
            <h2 className="serif mx-auto mt-5 max-w-5xl text-5xl font-semibold leading-[0.92] text-cream sm:text-6xl lg:text-7xl">
              {title}
            </h2>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-cream/72">
              {text}
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-5 sm:flex-row sm:items-center">
              <ButtonLink href={href}>{buttonText}</ButtonLink>
              {secondaryHref && secondaryText ? (
                <Link
                  href={secondaryHref}
                  className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-cream/18 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-cream/72 transition duration-500 hover:-translate-y-0.5 hover:border-gold/55 hover:text-gold"
                >
                  {secondaryText}
                </Link>
              ) : null}
            </div>
            <div className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-cream/24 to-transparent" />
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
