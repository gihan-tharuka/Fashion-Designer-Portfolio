import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-[radial-gradient(circle_at_18%_0%,rgba(179,137,75,0.2),transparent_26rem),linear-gradient(135deg,#1b120d,#26170f_52%,#120c08)] text-cream">
      <div className="editorial-container py-16 sm:py-20">
        <Stagger className="grid gap-12 border-b border-gold/18 pb-14 lg:grid-cols-[1.25fr_0.7fr_0.9fr_0.8fr]">
          <StaggerItem>
            <p className="eyebrow">Fashion Portfolio</p>
            <p className="serif mt-4 text-5xl font-semibold leading-none text-cream sm:text-6xl">
              LUMENÉ
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-cream/72">
              Contemporary womenswear shaped by emotional transformation,
              tactile textile surfaces, and soft sculptural silhouettes.
            </p>
            <p className="mt-8 max-w-sm border-l border-gold/38 pl-5 text-sm leading-7 text-gold">
              Available for collaborations, internships, styling projects, and
              creative opportunities.
            </p>
          </StaggerItem>

          <StaggerItem className="border-t border-gold/16 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Navigate
            </p>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit text-sm text-cream/72 transition duration-300 hover:text-gold"
                >
                  {item.label}
                  <span className="ml-0 h-px w-0 self-end bg-gold transition-all duration-500 group-hover:ml-3 group-hover:w-8" />
                </Link>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="border-t border-gold/16 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Contact
            </p>
            <div className="mt-5 grid gap-3 text-sm text-cream/75">
              <a
                href="mailto:imalkatharuni24@gmail.com"
                className="transition duration-300 hover:text-gold"
              >
                imalkatharuni24@gmail.com
              </a>
              <a
                href="tel:+94782870261"
                className="transition duration-300 hover:text-gold"
              >
                078 287 0261
              </a>
              <a
                href="https://www.linkedin.com/in/imalka-tharuni-71b145234/"
                className="transition duration-300 hover:text-gold"
              >
                LinkedIn
              </a>
              <span className="text-cream/58">Colombo / Remote</span>
            </div>
          </StaggerItem>

          <StaggerItem className="border-t border-gold/16 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Collection
            </p>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-cream/72">
              <span>LUMENÉ S/S 2027</span>
              <span>6 Looks</span>
              <span>Draped silhouettes</span>
              <span>Batik-inspired surfaces</span>
            </div>
          </StaggerItem>
        </Stagger>

        <Reveal className="flex flex-col gap-3 pt-7 text-xs uppercase tracking-[0.16em] text-cream/48 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2027 LUMENÉ. All rights reserved.</p>
          <p>Designed as a fashion portfolio presentation.</p>
        </Reveal>
      </div>
    </footer>
  );
}
