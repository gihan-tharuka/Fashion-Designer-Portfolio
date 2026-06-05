"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const heroEase = [0.22, 1, 0.36, 1] as const;

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: heroEase },
  },
};

const titleReveal = {
  hidden: { opacity: 0, y: 34, letterSpacing: "0.04em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0em",
    transition: { duration: 1.25, ease: heroEase },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="full-bleed-section relative isolate min-h-[100svh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.03 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.8, ease: heroEase }}
      >
        <Image
          src="/images/website/hero3.png"
          alt="LUMENÉ butterfly-inspired fashion illustration showing metamorphosis and draped womenswear."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] md:object-right"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,240,227,0.96)_0%,rgba(248,240,227,0.86)_36%,rgba(248,240,227,0.38)_62%,rgba(248,240,227,0.06)_100%)] md:bg-[linear-gradient(90deg,rgba(248,240,227,0.9)_0%,rgba(248,240,227,0.76)_32%,rgba(248,240,227,0.24)_56%,rgba(248,240,227,0)_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(248,240,227,0.84),transparent)]"
      />
      <div className="editorial-container flex min-h-[100svh] items-center py-20 sm:py-24 lg:py-28">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={heroContainer}
          className="relative z-10 max-w-[42rem] py-10 md:w-[45%]"
        >
          <motion.p variants={heroItem} className="eyebrow">
            LUMENÉ CAPSULE COLLECTION S/W 2027
          </motion.p>
          <motion.h1
            variants={titleReveal}
            className="serif mt-6 text-[clamp(4.6rem,18vw,12.5rem)] font-semibold leading-[0.78] text-espresso"
          >
            LUMENÉ
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-8 max-w-2xl text-2xl leading-9 text-foreground sm:text-3xl sm:leading-10"
          >
            A poetic womenswear portfolio tracing emotional metamorphosis
            through draped form, tactile surface, and quiet feminine power.
          </motion.p>
          <motion.p
            variants={heroItem}
            className="mt-6 max-w-xl text-base leading-8 text-muted"
          >
            From cocooned protection to afterlight, LUMENÉ translates inner
            transformation into sculptural silhouettes, batik-inspired textures,
            translucent layers, and refined contemporary womenswear.
          </motion.p>
          <motion.div variants={heroItem} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portfolio" variant="cocoa">
              View Portfolio
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Contact for Collaboration
            </ButtonLink>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="mt-12 hidden h-px w-40 bg-gradient-to-r from-gold via-cocoa/40 to-transparent md:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
