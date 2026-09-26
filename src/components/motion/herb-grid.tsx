"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function HerbGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </div>
  );
}

export function HerbCardMotion({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    // Cards render visible immediately (no scroll-triggered fade-in), so the
    // list never looks empty while it loads; only the hover lift is animated.
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--highlight)]"
      >
        {children}
      </Link>
    </motion.div>
  );
}
