// TechStack.tsx — Tech stack section with icons grouped by category
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TECH_STACK } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiOpenjdk,
  SiSpring,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiJunit5,
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
  SiOpenjdk,
  SiSpring,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiJunit5,
};

export function TechStack() {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const content = TECH_STACK[locale];

  const sectionVariants: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.15 },
    },
  };

  const categoryVariants: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.08 },
    },
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="stack" className="py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          label={content.sectionLabel}
          title={content.sectionTitle}
          align="center"
        />

        <motion.div
          className="space-y-10 md:space-y-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.categories.map((category) => (
            <motion.div key={category.name} variants={categoryVariants}>
              <p className="mb-4 text-center font-heading text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                {category.name}
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {category.technologies.map((tech) => {
                  const Icon = iconMap[tech.icon];
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex w-20 flex-col items-center gap-2 md:w-24"
                      variants={item}
                    >
                      {Icon && (
                        <Icon className="text-4xl text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)] md:text-5xl" />
                      )}
                      <span className="text-center font-heading text-xs text-[var(--text-secondary)]">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
