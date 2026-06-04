"use client";

import Image from "next/image";
import { useState } from "react";

type GarmentGalleryProps = {
  src: string;
  alt: string;
};

const captions = ["Front View", "Side View", "Back View"];

export function GarmentGallery({ src, alt }: GarmentGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="focus-ring group block w-full overflow-hidden rounded-md border border-gold/24 bg-[#DCDBDB] text-left shadow-[0_26px_80px_rgba(58,36,24,0.12)]"
        onClick={() => setIsOpen(true)}
      >
        <span className="relative block aspect-[3509/2481] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-contain transition duration-[1200ms] group-hover:scale-[1.018]"
          />
        </span>
        <span className="grid border-t border-gold/24 bg-ivory/75 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted sm:grid-cols-3">
          {captions.map((caption) => (
            <span
              key={caption}
              className="border-gold/18 px-4 py-3 text-center sm:border-r last:sm:border-r-0"
            >
              {caption}
            </span>
          ))}
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Final garment views"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="focus-ring absolute right-5 top-5 rounded-full border border-cream/24 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-cream transition hover:border-gold hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
          <div
            className="relative h-[82svh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
