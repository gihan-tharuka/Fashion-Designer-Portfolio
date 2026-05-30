"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type AnimatedImageFrameProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  parallax?: number;
};

export function AnimatedImageFrame({
  src,
  alt,
  label,
  className = "",
  priority = false,
  parallax = 28,
}: AnimatedImageFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-md"
      initial={shouldReduceMotion ? false : { opacity: 0, clipPath: "inset(12% 0 12% 0)" }}
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, clipPath: "inset(0% 0 0% 0)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={shouldReduceMotion ? undefined : { y }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <ImagePlaceholder
          src={src}
          alt={alt}
          label={label}
          priority={priority}
          className={className}
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown/20 via-transparent to-cream/10 opacity-0 transition duration-500 group-hover:opacity-100"
      />
    </motion.div>
  );
}
