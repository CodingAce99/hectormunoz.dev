// Design Showcase — Four approaches to section separation on pure black background

import { ApproachDividers } from "@/components/showcase/ApproachDividers";
import { ApproachGlowMesh } from "@/components/showcase/ApproachGlowMesh";
import { ApproachVaryingWidths } from "@/components/showcase/ApproachVaryingWidths";
import { ApproachCreative } from "@/components/showcase/ApproachCreative";

export const metadata = {
  title: "Design Showcase — Section Separation Approaches",
  description: "Four distinct approaches to differentiating sections while maintaining a premium, Vercel-inspired aesthetic.",
};

export default function DesignShowcase() {
  return (
    <main className="bg-[#000000]">
      {/* Approach 1: Subtle Horizontal Divider Lines */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 pb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-[#6366F1]">
            Approach 1
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Subtle Horizontal Divider Lines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Clean, minimal divider lines between sections that blend seamlessly with the dark background.
          </p>
        </div>
        <ApproachDividers />
      </section>

      {/* Master Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />
      </div>

      {/* Approach 2: Gradient Mesh / Glow Effects */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 pb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-[#6366F1]">
            Approach 2
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Gradient Mesh / Glow Effects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Soft, luminous glow effects at section boundaries create ethereal separation.
          </p>
        </div>
        <ApproachGlowMesh />
      </section>

      {/* Master Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />
      </div>

      {/* Approach 3: Varying Section Widths */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 pb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-[#6366F1]">
            Approach 3
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Varying Section Widths
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Alternating full-width and narrow sections create natural visual rhythm and hierarchy.
          </p>
        </div>
        <ApproachVaryingWidths />
      </section>

      {/* Master Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent" />
      </div>

      {/* Approach 4: Creative Methods */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 pb-12 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-[#6366F1]">
            Approach 4
          </span>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Creative Methods
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--text-secondary)]">
            Combining dot patterns, asymmetric borders, staggered cards, and animated elements.
          </p>
        </div>
        <ApproachCreative />
      </section>
    </main>
  );
}
