"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpNormalProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeUpNormal({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeUpNormalProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
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
