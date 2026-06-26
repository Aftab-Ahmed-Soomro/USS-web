"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeDownProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeDown({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: FadeDownProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -60, filter: "blur(14px) brightness(0.55)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px) brightness(1)" }}
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
