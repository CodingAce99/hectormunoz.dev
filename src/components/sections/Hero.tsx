"use client";

import { useReducedMotion, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { HERO, PERSONAL } from "@/lib/constants";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const itemNoMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const codeSnippet = `// InfratrackService.java
@Service
public class InfratrackService {

  private final AssetRepository assets;
  private final SshMonitor monitor;

  public Metrics poll(AssetId id) {
    return monitor
      .connect(assets.findById(id))
      .collectMetrics();   // CPU · MEM · DISK
  }
}`;

export default function Hero() {
  const reduced = useReducedMotion();
  const i = reduced ? itemNoMotion : item;

  return (
    <section className="relative flex min-h-screen items-center">

      {/* Subtle radial glow behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, var(--accent-glow), transparent)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-24 lg:px-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-24">

          {/* ── Left column ── */}
          <motion.div
            className="flex flex-1 flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={i} className="w-fit">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-secondary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Disponible para trabajar
              </span>
            </motion.div>

            {/* Name label */}
            <motion.p
              variants={i}
              className="text-sm uppercase tracking-widest text-secondary"
            >
              {PERSONAL.name}
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={i}
              className="font-heading text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              {HERO.headline.split("\n").map((line, idx) =>
                idx === 1 ? (
                  <span key={idx} className="text-gradient block">
                    {line}
                  </span>
                ) : (
                  <span key={idx} className="block">
                    {line}
                  </span>
                )
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={i}
              className="text-lg text-secondary"
            >
              {HERO.subheadline}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={i}
              className="max-w-xl text-base text-secondary"
            >
              {HERO.description}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={i} className="flex flex-wrap gap-4">
              <Button variant="primary" href={HERO.cta.primary.href}>
                {HERO.cta.primary.label} →
              </Button>
              <Button variant="secondary" href={HERO.cta.secondary.href}>
                {HERO.cta.secondary.label}
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Right column: decorative code block (desktop only) ── */}
          <motion.div
            className="hidden lg:flex lg:w-[420px] lg:shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduced ? 1 : 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div
              className="w-full rounded-xl border border-border bg-surface p-6 font-mono text-sm leading-relaxed"
              style={{ boxShadow: "0 0 40px var(--accent-glow)" }}
            >
              {/* Fake traffic lights */}
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/50" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <span className="h-3 w-3 rounded-full bg-green-500/50" />
              </div>

              <pre
                className="overflow-x-auto text-secondary/60 whitespace-pre"
                aria-hidden
              >
                {codeSnippet}
              </pre>
            </div>
          </motion.div>

        </div>

        {/* ── Scroll indicator (desktop only) ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-secondary">
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
              className="text-secondary"
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

      </div>
    </section>
  );
}