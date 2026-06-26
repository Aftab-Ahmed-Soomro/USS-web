"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  /** Vertical offset (px) the item rises from. Set to 0 for a pure fade. */
  y?: number;
}

/**
 * Must be used as a direct (or nested) child of <Stagger>.
 * It has no viewport trigger of its own — it reads "hidden"/"visible"
 * from the parent's variants, which is what makes the stagger timing work.
 */
export default function StaggerItem({
  children,
  className = "",
  duration = 0.5,
  y = 40,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}