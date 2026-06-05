"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const ribbonEase = [0.45, 0, 0.2, 1] as const;

export function MetamorphosisRibbon() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerX, pointerY, reduceMotion]);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 52,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 52,
    damping: 24,
  });
  const pointerShiftX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 48,
    damping: 26,
  });
  const scrollLift = useTransform(scrollYProgress, [0, 0.2], [0, -28]);

  return (
    <motion.div
      aria-hidden="true"
      className="metamorphosis-ribbon absolute pointer-events-none"
      style={
        reduceMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              x: pointerShiftX,
              y: scrollLift,
              transformPerspective: 1400,
            }
      }
    >
      <motion.div
        className="metamorphosis-ribbon__float"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -14, 7, 0],
                rotateZ: [-4, -1.5, -5.5, -4],
                scale: [1, 1.025, 0.992, 1],
              }
        }
        transition={{
          duration: 18,
          ease: ribbonEase,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <motion.svg
          className="metamorphosis-ribbon__layer metamorphosis-ribbon__layer--back"
          viewBox="0 0 760 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [2, 5, 1.5, 2],
                  x: [0, -8, 5, 0],
                }
          }
          transition={{
            duration: 20,
            ease: ribbonEase,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <defs>
            <linearGradient id="ribbonBack" x1="125" y1="131" x2="646" y2="469">
              <stop stopColor="#FFFaf0" stopOpacity="0.78" />
              <stop offset="0.32" stopColor="#D7AD9B" stopOpacity="0.36" />
              <stop offset="0.72" stopColor="#B3894B" stopOpacity="0.28" />
              <stop offset="1" stopColor="#6F4B33" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="ribbonBackGlow" cx="0" cy="0" r="1" gradientTransform="matrix(250 190 -180 237 389 283)">
              <stop stopColor="#FFFaf0" stopOpacity="0.66" />
              <stop offset="1" stopColor="#B98E83" stopOpacity="0" />
            </radialGradient>
            <filter id="ribbonSoftBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
          <path
            d="M97 430C166 255 277 122 421 108C551 95 652 174 690 272C607 255 520 283 450 361C356 467 247 502 97 430Z"
            fill="url(#ribbonBack)"
            opacity="0.58"
          />
          <path
            d="M115 427C244 360 319 250 407 202C496 153 589 180 687 271C563 258 509 347 414 421C320 494 223 489 115 427Z"
            fill="url(#ribbonBackGlow)"
            filter="url(#ribbonSoftBlur)"
          />
        </motion.svg>

        <motion.svg
          className="metamorphosis-ribbon__layer metamorphosis-ribbon__layer--front"
          viewBox="0 0 760 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [-2, -5, -1, -2],
                  x: [0, 9, -4, 0],
                  y: [0, 5, -6, 0],
                }
          }
          transition={{
            duration: 16,
            ease: ribbonEase,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <defs>
            <linearGradient id="ribbonFront" x1="79" y1="339" x2="660" y2="252">
              <stop stopColor="#F8F0E3" stopOpacity="0.16" />
              <stop offset="0.22" stopColor="#FFFaf0" stopOpacity="0.72" />
              <stop offset="0.54" stopColor="#B98E83" stopOpacity="0.34" />
              <stop offset="0.82" stopColor="#B3894B" stopOpacity="0.26" />
              <stop offset="1" stopColor="#3A2418" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="ribbonVeil" x1="176" y1="198" x2="565" y2="406">
              <stop stopColor="#FFFaf0" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FFFaf0" stopOpacity="0.48" />
              <stop offset="1" stopColor="#B3894B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M82 384C160 264 265 206 359 225C451 244 517 338 664 284C573 392 455 477 332 452C223 430 167 362 82 384Z"
            fill="url(#ribbonFront)"
          />
          <path
            d="M130 374C226 307 316 301 391 326C456 347 513 363 617 306"
            stroke="url(#ribbonVeil)"
            strokeLinecap="round"
            strokeWidth="30"
          />
          <path
            d="M154 359C262 392 360 397 481 342"
            stroke="#FFFaf0"
            strokeLinecap="round"
            strokeOpacity="0.18"
            strokeWidth="2"
          />
        </motion.svg>

        <motion.div
          className="metamorphosis-ribbon__sheen"
          animate={reduceMotion ? undefined : { x: ["-18%", "20%", "-18%"] }}
          transition={{
            duration: 14,
            ease: ribbonEase,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
