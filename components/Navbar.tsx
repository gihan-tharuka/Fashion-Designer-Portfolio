"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition duration-500 ${
        hasScrolled || isOpen
          ? "border-b border-gold/18 bg-ivory/86 shadow-[0_10px_40px_rgba(58,36,24,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-ivory/42 backdrop-blur-sm"
      }`}
    >
      <nav className="editorial-container relative z-[70] flex min-h-16 items-center justify-between py-3">
        <Link
          href="/"
          className="focus-ring serif text-3xl font-semibold tracking-normal text-espresso transition duration-500 hover:text-gold"
          onClick={() => setIsOpen(false)}
        >
          LUMENÉ
        </Link>

        <button
          type="button"
          className="focus-ring relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-brown transition duration-500 hover:border-gold hover:bg-cream/60 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition duration-500 ${isOpen ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition duration-500 ${isOpen ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring group relative py-2 text-xs font-bold uppercase tracking-[0.16em] transition duration-500 ${
                  active
                    ? "text-espresso"
                    : "text-muted hover:text-espresso"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-gold transition-all duration-500 ${
                    active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                  }`}
                />
                <span
                  className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold transition duration-500 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="focus-ring hidden min-h-10 items-center justify-center rounded-full border border-gold/38 px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-espresso transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-cream/68 md:inline-flex"
        >
          Collaborate
        </Link>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="mobile-menu-panel fixed inset-0 z-60 border-t border-gold/18 bg-[radial-gradient(circle_at_20%_10%,rgba(179,137,75,0.2),transparent_20rem),linear-gradient(135deg,#f8f0e3,#f1dfc5)] pt-20 md:hidden"
        >
          <div className="editorial-container flex min-h-[calc(100svh-5rem)] flex-col justify-between py-8">
            <div className="grid gap-3">
              {navItems.map((item, index) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mobile-menu-link focus-ring serif border-b border-gold/18 py-4 text-5xl font-semibold leading-none transition duration-500 ${
                      active ? "text-espresso" : "text-brown/78 hover:text-espresso"
                    }`}
                    style={{ animationDelay: `${index * 70}ms` }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="grid gap-5 border-t border-gold/24 pt-7">
              <div className="grid gap-2 text-sm leading-7 text-muted">
                <a
                  href="mailto:imalkatharuni24@gmail.com"
                  className="transition hover:text-espresso"
                >
                  imalkatharuni24@gmail.com
                </a>
                <a href="tel:+94782870261" className="transition hover:text-espresso">
                  078 287 0261
                </a>
              </div>
              <Link
                href="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-espresso bg-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-cream transition duration-500 hover:bg-brown"
                onClick={() => setIsOpen(false)}
              >
                Collaborate
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
