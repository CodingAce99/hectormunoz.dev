// Projects.tsx — Projects showcase section with Infratrack as the centerpiece
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

export function Projects() {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const content = PROJECTS[locale];

  const container: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.2 },
    },
  };

  const fadeUp: import("framer-motion").Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const highlightsContainer: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.08 },
    },
  };

  const highlightItem: import("framer-motion").Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 15 },
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
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24"
      style={{
        background: "linear-gradient(to bottom, var(--background), var(--surface) 8%, var(--surface) 95%, var(--background))",
      }}
    >
      <motion.div
        className="mx-auto max-w-6xl px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            label={content.sectionLabel}
            title={content.sectionTitle}
          />
        </motion.div>

        {content.items.map((project) => (
          <motion.article
            key={project.slug}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10 lg:p-12"
            style={{ boxShadow: "0 0 60px var(--accent-glow)" }}
            variants={fadeUp}
          >
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                {project.title}
              </h3>
              <div className="flex items-center gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-heading text-sm font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                >
                  {locale === "es" ? "Ver detalle" : "View details"} &rarr;
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  GitHub &rarr;
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              {project.description}
            </p>

            {/* Connection line */}
            <p className="mb-6 text-sm italic text-[var(--accent)] md:text-base">
              {project.connection}
            </p>

            {/* Stack tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 font-heading text-xs font-medium text-[var(--text-secondary)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
              variants={highlightsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {project.highlights.map((highlight, hIndex) => (
                <motion.div
                  key={hIndex}
                  variants={highlightItem}
                >
                  <h4 className="font-heading text-sm font-semibold text-[var(--text-primary)] mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
