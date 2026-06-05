"use client";

import { motion, useReducedMotion } from "framer-motion";

const paragraphs = [
  "My creative practice explores fashion as a form of emotional transformation. Through my collection LUMENÉ, I translate the journey from darkness to light into contemporary womenswear that is poetic, tactile, and deeply personal. My work is inspired by the idea of metamorphosis, especially the transition from confinement to growth and liberation. This is expressed through draped silhouettes, soft sculptural forms, batik-inspired textile surfaces, translucent layers, and flowing fabrics such as crepe, silk chiffon, and tulle.",
  "My design style combines modern femininity with emotional storytelling. I am interested in the way fabric can hold feeling, movement, memory, and identity. Rather than creating garments only for decoration, I aim to design pieces that communicate inner strength, vulnerability, and self-awareness. My work often uses contrast: softness and structure, darkness and light, fragility and power, stillness and movement.",
  "What makes my practice distinct is the combination of concept, craft, and surface. I use batik-inspired textures, butterfly symbolism, and layered fabric manipulation to create garments that feel expressive and refined. As an emerging designer, my goal is to build a contemporary womenswear identity that celebrates emotional authenticity, conscious craftsmanship, and quiet feminine power.",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function BrandStatementCopy() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-y border-gold/20 text-base leading-8 text-muted lg:border-x lg:border-y-0">
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={paragraph}
          className={`flex min-h-[56svh] scroll-mt-32 items-center py-8 lg:min-h-[72svh] lg:px-8 ${
            index > 0 ? "border-t border-gold/16" : ""
          }`}
          initial={index === 0 || reduceMotion ? false : { opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -30% 0px" }}
          transition={{ duration: 0.95, ease, delay: index * 0.08 }}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
}
