"use client";

import Image from "next/image";
import { useState } from "react";

type ImagePlaceholderProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
};

export function ImagePlaceholder({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative isolate overflow-hidden rounded-md border border-brown/10 bg-[linear-gradient(135deg,rgba(156,90,56,0.16),rgba(15,92,104,0.14),rgba(200,145,166,0.16))] ${className}`}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,250,240,0.6),transparent_17rem)]" />
      <div className="absolute inset-x-5 bottom-5 rounded-md border border-cream/50 bg-cream/78 px-4 py-3 backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          Placeholder Image
        </p>
        <p className="serif mt-1 text-2xl font-semibold text-brown">{label}</p>
      </div>
    </div>
  );
}
