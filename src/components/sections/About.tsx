// About.tsx — About section with bilingual content and staggered paragraph animations

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ABOUT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  const reduced = useReducedMotion();
  const { locale } = useLanguage();
  const content = ABOUT[locale];

  // Container variant — orchestrates children timing via staggerChildren.
  // When reduced motion is active, stagger is 0 so all items appear instantly.
  const container: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.15,
      },
    },
  };

  // Item variant — each paragraph fades and slides up individually.
  // When reduced motion is active, elements start fully visible with no offset.
  const item: import("framer-motion").Variants = {
    hidden: {
      opacity: reduced ? 1 : 0,
      y: reduced ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">

        {/* SectionHeading is a Server Component — safe to use inside a client component */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Heading animates as the first child in the stagger sequence */}
          <motion.div variants={item}>
            <SectionHeading
              label={content.sectionLabel}
              title={content.sectionTitle}
            />
          </motion.div>

          {/* Paragraphs container — decorative left border visible on desktop only */}
          <div className="md:border-l-2 md:border-[var(--accent)] md:border-opacity-40 md:pl-6">
            <div className="space-y-6">
              {content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={item}
                  className="text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}