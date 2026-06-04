"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/18 bg-ivory/82 shadow-[0_10px_40px_rgba(58,36,24,0.06)] backdrop-blur-xl">
      <nav className="editorial-container flex min-h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="focus-ring serif text-3xl font-semibold tracking-normal text-espresso transition hover:text-gold"
          onClick={() => setIsOpen(false)}
        >
          LUMENÉ
        </Link>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-brown md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-current transition ${isOpen ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-current transition ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-current transition ${isOpen ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition duration-500 ${
                  active
                    ? "bg-espresso text-cream shadow-[0_12px_32px_rgba(27,18,13,0.16)]"
                    : "text-muted hover:bg-cream/70 hover:text-espresso"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-gold/18 bg-ivory/96 md:hidden">
          <div className="editorial-container grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full px-4 py-3 text-sm font-semibold text-brown transition hover:bg-cream"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
