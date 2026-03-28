// Approach.tsx — Approach section displaying 5 engineering principles as animated cards

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { APPROACH } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Approach() {
  const reduced = useReducedMotion();
  const { locale } = useLanguage();
  const content = APPROACH[locale];

  // Container variant — orchestrates children timing via staggerChildren.
  const container: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.1,
      },
    },
  };

  // Item variant — each paragraph fades and slides up individually.
  const item: import("framer-motion").Variants = {
    hidden: {
      opacity: reduced ? 1 : 0,
      y: reduced ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

return (
  <section id="approach" className="py-20 md:py-28 lg:py-32">
    <div className="mx-auto max-w-5xl px-6">

      {/* Container — everything inside receives the stagger timing */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* SectionHeading animates as the first child in the stagger sequence */}
        <motion.div variants={item}>
          <SectionHeading
            label={content.sectionLabel}
            title={content.sectionTitle}
          />
        </motion.div>

        {/* Cards wrapper — flexbox centers the incomplete last row naturally */}
        <div className="flex flex-wrap justify-center gap-6">
          {content.principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              {/* Card */}
              <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)] md:p-8">

                {/* Zero-padded number: 01, 02, 03... */}
                <p className="mb-4 font-heading text-sm font-medium text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Principle title */}
                <p className="mb-3 font-heading text-xl font-semibold text-[var(--text-primary)]">
                  {principle.title}
                </p>

                {/* Principle description */}
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                  {principle.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>

    </div>
  </section>
);
}