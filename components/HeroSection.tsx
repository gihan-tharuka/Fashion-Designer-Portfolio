"use client";

import { ButtonLink } from "@/components/ButtonLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

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
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3.5, -3.5]), {
    stiffness: 80,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 80,
    damping: 24,
  });
  const floatY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 60,
    damping: 28,
  });

  return (
    <section className="relative isolate min-h-[90vh] overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(248,240,227,0.92),transparent)]" />
      <div className="silk-atmosphere pointer-events-none absolute right-[8%] top-[12%] h-72 w-72 opacity-70" />
      <div className="editorial-container grid min-h-[90vh] gap-12 py-14 md:grid-cols-[0.82fr_1.18fr] md:items-center lg:gap-16 lg:py-18">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={heroContainer}
          className="relative z-10 md:pb-16"
        >
          <motion.p variants={heroItem} className="eyebrow">
            LUMENÉ Capsule Collection S/W 2027
          </motion.p>
          <motion.h1
            variants={titleReveal}
            className="serif mt-6 text-[clamp(5.4rem,15vw,13.5rem)] font-semibold leading-[0.78] text-espresso"
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
            <ButtonLink href="/portfolio">View Portfolio</ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Contact for Collaboration
            </ButtonLink>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="mt-12 hidden h-px w-40 bg-gradient-to-r from-gold via-cocoa/40 to-transparent md:block"
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.28, ease: heroEase }}
          style={
            reduceMotion
              ? undefined
              : {
                  rotateX,
                  rotateY,
                  y: floatY,
                  transformPerspective: 1200,
                }
          }
          onMouseMove={(event) => {
            if (reduceMotion) return;
            const rect = event.currentTarget.getBoundingClientRect();
            pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
            pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => {
            pointerX.set(0);
            pointerY.set(0);
          }}
          className="relative md:pl-8 lg:pl-14"
        >
          <div className="absolute -left-6 top-10 hidden h-44 w-px bg-gold/35 md:block" />
          <ImagePlaceholder
            src="/images/website/hero.png"
            alt="Editorial visual for LUMENÉ fashion collection"
            label="Metamorphosis of Mind"
            priority
            fit="contain"
            showLabelEyebrow={false}
            showSpotlight={false}
            className="hero-image-reveal aspect-[1055/1491] bg-cream/70"
          />
          <div className="pointer-events-none absolute right-5 top-5 rounded-full border border-gold/35 bg-cream/72 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-brown shadow-[0_18px_42px_rgba(27,18,13,0.12)] backdrop-blur-md">
            Editorial Portfolio
          </div>
        </motion.div>
      </div>
    </section>
  );
}
