"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeRight({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeRightProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 60, filter: "blur(14px) brightness(0.55)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px) brightness(1)" }}
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
