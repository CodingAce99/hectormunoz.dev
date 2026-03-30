// Timeline.tsx — Background timeline section with education/work entries and certifications
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TIMELINE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

export function Timeline() {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const content = TIMELINE[locale];

  const container: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.15 },
    },
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="background" className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          label={content.sectionLabel}
          title={content.sectionTitle}
        />

        <motion.div
          className="border-l-2 border-[var(--border)] pl-8 md:pl-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {content.entries.map((entry) => (
            <motion.div
              key={`${entry.date}-${entry.title}`}
              className="relative pb-10 last:pb-0"
              variants={item}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[-25px] top-1 h-3 w-3 rounded-full md:left-[-29px] ${
                  entry.type === "education"
                    ? "bg-[var(--accent)]"
                    : "border-2 border-[var(--accent)] bg-[var(--background)]"
                }`}
              />

              <p className="mb-1 font-heading text-sm font-medium text-[var(--accent)]">
                {entry.date}
              </p>
              <h3 className="mb-1 font-heading text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                {entry.title}
              </h3>
              <p className="mb-1 text-base text-[var(--text-secondary)]">
                {entry.subtitle}
              </p>
              {entry.institution && (
                <p className="text-sm text-[var(--text-secondary)] opacity-70">
                  {entry.institution}
                </p>
              )}
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                {entry.description}
              </p>
            </motion.div>
          ))}

          {/* Certifications block */}
          <motion.div className="mt-10 md:mt-12" variants={item}>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <h3 className="mb-4 font-heading text-lg font-semibold text-[var(--text-primary)]">
                {content.certifications.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {content.certifications.items.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex rounded-full bg-[var(--accent-glow)] px-3 py-1.5 font-heading text-sm font-medium text-[var(--accent)]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
