// ProjectDetailContent.tsx — Client component for project detail page (i18n + animations)
"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { PROJECTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

export function ProjectDetailContent({ slug }: { slug: string }) {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const project = PROJECTS[locale].items.find((p) => p.slug === slug)!;
  const detail = project.detail;

  const fadeUp: import("framer-motion").Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const staggerContainer: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.1 },
    },
  };

  const archItem: import("framer-motion").Variants = {
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
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Back link */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <Link
          href="/"
          className="mb-8 inline-block font-heading text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
        >
          {detail.backLabel}
        </Link>
      </motion.div>

      {/* Project header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="mb-4 font-heading text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-5xl"
          variants={fadeUp}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="mb-4 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
          variants={fadeUp}
        >
          {project.description}
        </motion.p>

        <motion.p
          className="mb-6 text-sm italic text-[var(--accent)] md:text-base"
          variants={fadeUp}
        >
          {project.connection}
        </motion.p>

        <motion.div className="mb-8 flex flex-wrap gap-2" variants={fadeUp}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 font-heading text-xs font-medium text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* About the project */}
      <motion.section
        className="mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            label={locale === "es" ? "Sobre el proyecto" : "About the project"}
            title={locale === "es" ? "El porqué" : "The why"}
          />
        </motion.div>
        <div className="space-y-6">
          {detail.about.map((paragraph, i) => (
            <motion.p
              key={i}
              className="text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
              variants={fadeUp}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.section>

      {/* Architecture */}
      <motion.section
        className="mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            label={locale === "es" ? "Arquitectura" : "Architecture"}
            title={detail.architecture.title}
          />
        </motion.div>

        <motion.p
          className="mb-8 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg"
          variants={fadeUp}
        >
          {detail.architecture.description}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
        >
          {detail.architecture.layers.map((layer) => (
            <motion.div
              key={layer.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
              variants={archItem}
            >
              <h3 className="mb-2 font-heading text-sm font-semibold text-[var(--accent)]">
                {layer.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Technical highlights */}
      <motion.section
        className="mt-16 md:mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            label={locale === "es" ? "Destacados" : "Highlights"}
            title={locale === "es" ? "Aspectos técnicos" : "Technical aspects"}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          variants={staggerContainer}
        >
          {project.highlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-300 hover:border-[var(--accent)]/30"
              variants={highlightItem}
            >
              <h4 className="mb-1 font-heading text-sm font-semibold text-[var(--text-primary)]">
                {highlight.title}
              </h4>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)] md:text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* GitHub CTA */}
      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <a
          href={detail.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3 font-heading font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          {detail.cta.label}
        </a>
      </motion.div>
    </main>
  );
}
