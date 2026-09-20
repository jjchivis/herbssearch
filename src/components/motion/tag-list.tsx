"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.04 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export function TagList({ tags }: { tags: string[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.ul
      className="flex flex-wrap gap-2"
      variants={shouldReduceMotion ? undefined : container}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.5 }}
    >
      {tags.map((tag) => (
        <motion.li
          key={tag}
          variants={shouldReduceMotion ? undefined : item}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm text-[var(--foreground)]"
        >
          {tag}
        </motion.li>
      ))}
    </motion.ul>
  );
}
