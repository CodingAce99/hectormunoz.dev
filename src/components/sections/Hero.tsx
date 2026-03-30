// Hero.tsx — Full-viewport hero section with animated entry, centered layout

"use client";

import { useReducedMotion, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { HERO, PERSONAL } from "@/lib/constants";

export function Hero() {
  const reduced = useReducedMotion();
  const { locale } = useLanguage();
  const content = HERO[locale];

// Animation variants — skipped entirely when prefers-reduced-motion is active
const container: import("framer-motion").Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: reduced ? 0 : 0.1, delayChildren: 0 },
  },
};

const item: import("framer-motion").Variants = {
  hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

  const headlineLines = content.headline.split("\n");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle radial glow behind content */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, var(--accent-glow), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-24 text-center">

        <motion.div
          className="flex flex-col items-center gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.p
            variants={item}
            className="font-heading text-xl md:text-2xl font-semibold text-[var(--text-primary)] uppercase tracking-wide"
          >
            {PERSONAL.name}
          </motion.p>

          {/* Headline — second line gets gradient */}
          <motion.h1
            variants={item}
            className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            {headlineLines.map((line, idx) =>
              idx === 1 ? (
                <span key={idx} className="text-gradient block">
                  {line}
                </span>
              ) : (
                <span key={idx} className="block text-[var(--text-primary)]">
                  {line}
                </span>
              )
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mx-auto max-w-2xl text-base text-[var(--text-secondary)] md:text-lg leading-relaxed"
          >
            {content.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" href={content.cta.primary.href}>
              {content.cta.primary.label} →
            </Button>
            <Button variant="secondary" href={content.cta.secondary.href}>
              {content.cta.secondary.label}
            </Button>
          </motion.div>

          {/* Badge */}
          <motion.div variants={item} className="mt-6">
            <span className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              {content.badge}
            </span>
          </motion.div>
        </motion.div>

      </div>

      {/* ── Scroll indicator (desktop only) ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[var(--text-secondary)]"
          >
            <path
              d="M8 3v10M3 9l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
