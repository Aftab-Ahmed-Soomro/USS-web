"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  /** Delay between each child's animation start */
  staggerDelay?: number;
  /** Delay before the first child starts */
  delay?: number;
  className?: string;
}

/**
 * Wrap a list of <StaggerItem> children with this to make them
 * reveal one-by-one as the parent enters the viewport.
 *
 * <Stagger staggerDelay={0.15}>
 *   <StaggerItem>...</StaggerItem>
 *   <StaggerItem>...</StaggerItem>
 * </Stagger>
 */
export default function Stagger({
  children,
  staggerDelay = 0.15,
  delay = 0,
  className = "",
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}