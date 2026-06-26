"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  /** Starting scale value — 0.85 = subtle zoom, 0.6 = dramatic zoom */
  startScale?: number;
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  startScale = 0.85,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: startScale, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}