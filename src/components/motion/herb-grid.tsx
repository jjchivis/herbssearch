"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function HerbGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
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
    <motion.div
      variants={shouldReduceMotion ? undefined : item}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.1 }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
      >
        {children}
      </Link>
    </motion.div>
  );
}
