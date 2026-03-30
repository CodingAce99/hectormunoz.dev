// Approach.tsx — Approach section displaying engineering principles as editorial list

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { APPROACH } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Approach() {
  const reduced = useReducedMotion();
  const { locale } = useLanguage();
  const content = APPROACH[locale];

  const container: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.1,
      },
    },
  };

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
  <section id="approach" className="py-16 md:py-20 lg:py-24">
    <div className="mx-auto max-w-6xl px-6">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={item}>
          <SectionHeading
            label={content.sectionLabel}
            title={content.sectionTitle}
          />
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {content.principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={item}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6 gap-y-2"
            >
              {/* Number */}
              <p className="text-[var(--accent)] font-heading text-lg md:text-xl font-semibold md:text-right md:w-12">
                {String(index + 1).padStart(2, "0")}
              </p>

              {/* Content */}
              <div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-[var(--text-primary)] mb-2">
                  {principle.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-2xl">
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
