// ApproachGlowMesh.tsx — Seven sections with gradient mesh/glow effects at boundaries

export function ApproachGlowMesh() {
  const sections = [
    {
      label: "Vision",
      title: "Illuminate the Path",
      description: "Where darkness meets light, we create moments of clarity and purpose.",
      glowPosition: "top",
    },
    {
      label: "Design",
      title: "Ethereal Aesthetics",
      description: "Soft glows and gentle gradients guide the eye through complex information.",
      glowPosition: "center",
    },
    {
      label: "Motion",
      title: "Fluid Transitions",
      description: "Seamless movement that feels natural, never jarring or disruptive.",
      glowPosition: "bottom",
    },
    {
      label: "Depth",
      title: "Layered Dimensions",
      description: "Creating visual hierarchy through subtle lighting and shadow play.",
      glowPosition: "top",
    },
    {
      label: "Ambiance",
      title: "Atmospheric Presence",
      description: "Setting the mood through carefully crafted color and luminosity.",
      glowPosition: "center",
    },
    {
      label: "Focus",
      title: "Guiding Attention",
      description: "Drawing the eye to what matters most through strategic illumination.",
      glowPosition: "bottom",
    },
    {
      label: "Harmony",
      title: "Balanced Composition",
      description: "Every element finds its place in the greater visual symphony.",
      glowPosition: "center",
    },
  ];

  return (
    <div className="bg-[#000000]">
      {sections.map((section, index) => (
        <div key={index} className="relative overflow-hidden">
          {/* Glow Effect at top boundary */}
          {index > 0 && (
            <div
              className="pointer-events-none absolute left-0 right-0 top-0 h-32"
              style={{
                background: `radial-gradient(ellipse 60% 100% at 50% 0%, rgba(99, 102, 241, 0.08), transparent)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Alternating side glows for mesh effect */}
          {index % 2 === 0 ? (
            <div
              className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2"
              style={{
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.06), transparent 70%)`,
              }}
              aria-hidden="true"
            />
          ) : (
            <div
              className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2"
              style={{
                background: `radial-gradient(circle, rgba(99, 102, 241, 0.06), transparent 70%)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Glow Effect at bottom boundary */}
          {index < sections.length - 1 && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
              style={{
                background: `radial-gradient(ellipse 60% 100% at 50% 100%, rgba(99, 102, 241, 0.05), transparent)`,
              }}
              aria-hidden="true"
            />
          )}

          {/* Section Content */}
          <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-24">
            <div className={`text-${index % 2 === 0 ? "left" : "right"}`}>
              <span className="mb-3 inline-block rounded-full border border-[#6366F1]/20 bg-[#6366F1]/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-[#6366F1]">
                {section.label}
              </span>
              <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl">
                {section.title}
              </h3>
              <p className="max-w-xl text-[var(--text-secondary)] leading-relaxed">
                {section.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
