"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

// Use hex values to avoid SSR/client oklch hydration mismatch
const BG_HEX = "#0b0a0d";
const CRIMSON = "rgba(180, 30, 50, 0.10)";
const WARM = "rgba(140, 80, 30, 0.07)";

export function BackgroundLayer() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const spotHalo = useMotionTemplate`radial-gradient(620px circle at ${mouseX}% ${mouseY}%, ${CRIMSON}, transparent 100%)`;
  const spotCore = useMotionTemplate`radial-gradient(260px circle at ${mouseX}% ${mouseY}%, rgba(255,248,240,0.055), transparent 100%)`;

  return (
    <>
      {/* Base dark */}
      <div
        className="pointer-events-none fixed inset-0 -z-30"
        style={{ background: BG_HEX }}
      />

      {/* Crimson ambient — top right */}
      <div
        className="pointer-events-none fixed -right-48 -top-48 -z-20 h-[640px] w-[640px] rounded-full blur-[160px]"
        style={{ background: CRIMSON }}
      />

      {/* Warm amber — bottom left */}
      <div
        className="pointer-events-none fixed -bottom-48 -left-48 -z-20 h-[500px] w-[500px] rounded-full blur-[140px]"
        style={{ background: WARM }}
      />

      {/* Fine grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.022] [background-image:linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Mouse spotlight — crimson halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ backgroundImage: spotHalo }}
      />

      {/* Mouse spotlight — warm white core */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ backgroundImage: spotCore }}
      />
    </>
  );
}
