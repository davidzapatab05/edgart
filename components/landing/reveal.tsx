"use client";

import { motion, useInView, type MotionProps } from "framer-motion";
import { useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  once?: boolean;
} & MotionProps;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  once = true,
  ...motionProps
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
