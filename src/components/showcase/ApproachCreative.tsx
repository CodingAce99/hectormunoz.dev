// ApproachCreative.tsx — Seven sections with creative separation methods

"use client";

import { motion } from "framer-motion";

export function ApproachCreative() {
  return (
    <div className="bg-[#000000]">
      {/* Section 1: Dot Pattern Separator */}
      <div className="relative">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
            Pattern
          </span>
          <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Dot Grid Transition
          </h3>
          <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
            A subtle dot pattern creates visual texture and marks the boundary between spaces.
          </p>
        </div>
        {/* Dot pattern separator */}
        <div className="flex justify-center gap-3 py-8">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[#6366F1]"
              style={{ opacity: 0.2 + i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Section 2: Asymmetric Border */}
      <div className="relative">
        {/* Left accent border */}
        <div className="absolute bottom-8 left-0 top-8 w-1 bg-gradient-to-b from-transparent via-[#6366F1]/30 to-transparent md:left-8" />
        
        <div className="mx-auto max-w-4xl px-6 py-16 pl-10 md:py-20 md:pl-16">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
            Asymmetry
          </span>
          <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Edge Accent
          </h3>
          <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
            A vertical accent line along the edge creates asymmetric visual interest and guides the eye.
          </p>
        </div>
      </div>

      {/* Section 3: Card Elevation */}
      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
            Elevation
          </span>
          <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Elevated Surface
          </h3>
          <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
            Lifting content onto a subtle card creates depth and natural section boundaries through elevation.
          </p>
          {/* Inner accent */}
          <div className="mt-8 flex gap-4">
            <div className="h-12 w-12 rounded-lg border border-[#6366F1]/20 bg-[#6366F1]/5" />
            <div className="h-12 w-24 rounded-lg border border-white/[0.06] bg-white/[0.02]" />
            <div className="h-12 w-16 rounded-lg border border-white/[0.06] bg-white/[0.02]" />
          </div>
        </div>
      </div>

      {/* Section 4: Staggered Layout */}
      <div className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-12">
          <div className="md:col-span-4 md:col-start-1">
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
              Stagger
            </span>
            <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
              Offset Grid
            </h3>
          </div>
          <div className="md:col-span-6 md:col-start-6">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Breaking the alignment creates visual tension and clearly distinguishes this section from others. The offset naturally draws the eye across the layout.
            </p>
            <div className="mt-6 flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 w-2 rounded-full"
                  style={{
                    backgroundColor: "#6366F1",
                    opacity: 0.15 + i * 0.15,
                    transform: `translateY(${i * 4}px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Animated Pulse Ring */}
      <div className="relative overflow-hidden px-6 py-20 md:py-28">
        {/* Animated ring */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <motion.div
            className="h-96 w-96 rounded-full border border-[#6366F1]/20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
            Motion
          </span>
          <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Subtle Animation
          </h3>
          <p className="mx-auto max-w-xl text-[var(--text-secondary)] leading-relaxed">
            Gentle pulsing animations create a sense of life and energy, marking this section as dynamic and engaging.
          </p>
        </div>
      </div>

      {/* Section 6: Number Marker */}
      <div className="relative px-6 py-16 md:py-20">
        {/* Large number marker */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 select-none font-heading text-[12rem] font-bold leading-none text-[#6366F1]/[0.03] md:right-16 md:text-[16rem]">
          06
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
            Index
          </span>
          <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
            Numbered Sections
          </h3>
          <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
            Large, subtle numbers in the background create clear section identity while maintaining the minimal aesthetic.
          </p>
        </div>
      </div>

      {/* Section 7: Corner Accents */}
      <div className="px-6 py-16 md:py-20">
        <div className="relative mx-auto max-w-4xl px-8 py-12">
          {/* Corner accents */}
          <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-[#6366F1]/30" />
          <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#6366F1]/30" />
          <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#6366F1]/30" />
          <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-[#6366F1]/30" />

          <div className="text-center">
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
              Frame
            </span>
            <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
              Corner Brackets
            </h3>
            <p className="mx-auto max-w-xl text-[var(--text-secondary)] leading-relaxed">
              Elegant corner accents frame the content, creating a sense of intentionality and premium craftsmanship.
            </p>
            
            {/* CTA placeholder */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-6 py-3 text-sm font-medium text-[#6366F1]">
              Explore More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
