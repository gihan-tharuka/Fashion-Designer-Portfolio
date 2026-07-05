"use client";

import Image from "next/image";
import { useState } from "react";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  showLabel?: boolean;
  showLabelEyebrow?: boolean;
  showSpotlight?: boolean;
};

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  priority = false,
  fit = "cover",
  showLabel = true,
  showLabelEyebrow = true,
  showSpotlight = true,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`motion-image relative isolate overflow-hidden rounded-md border border-gold/25 bg-[linear-gradient(135deg,rgba(255,250,240,0.72),rgba(179,137,75,0.16),rgba(27,18,13,0.1))] shadow-[0_22px_70px_rgba(58,36,24,0.14)] ${className}`}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={fit === "contain" ? "object-contain" : "object-cover"}
          onError={() => setFailed(true)}
        />
      ) : null}
      {showSpotlight ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,250,240,0.6),transparent_17rem)]" />
      ) : null}
      {showLabel ? (
        <div className="absolute inset-x-5 bottom-5 rounded-md border border-gold/30 bg-cream/82 px-4 py-3 shadow-[0_18px_42px_rgba(27,18,13,0.16)] backdrop-blur-md">
          {showLabelEyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Placeholder Image
            </p>
          ) : null}
          <p
            className={`serif text-2xl font-semibold text-brown ${
              showLabelEyebrow ? "mt-1" : ""
            }`}
          >
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}
