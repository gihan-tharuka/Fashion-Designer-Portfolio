import Link from "next/link";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-brown/10 bg-brown text-cream">
      <div className="editorial-container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="serif text-3xl font-semibold">LUMENÉ</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-cream/72">
            Contemporary womenswear shaped by emotional transformation,
            tactile textile surfaces, and soft sculptural silhouettes.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/70">
            Navigate
          </p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream/75 transition hover:text-cream"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cream/70">
            Contact
          </p>
          <div className="mt-4 grid gap-2 text-sm text-cream/75">
            <a href="mailto:your-email@example.com" className="hover:text-cream">
              your-email@example.com
            </a>
            <a href="https://instagram.com/yourhandle" className="hover:text-cream">
              @yourhandle
            </a>
            <span>London / Colombo / Remote</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
