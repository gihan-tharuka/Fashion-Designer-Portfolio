"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.48em", rotateX: -36 },
  visible: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AnimatedText({ text, className, as = "h1" }: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = motion[as];

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((character, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block origin-bottom"
          key={`${character}-${index}`}
          variants={letter}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </Tag>
  );
}
