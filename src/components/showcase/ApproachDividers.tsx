// ApproachDividers.tsx — Seven sections separated by subtle horizontal lines

export function ApproachDividers() {
  const sections = [
    {
      label: "Introduction",
      title: "Welcome to the Future",
      description: "A minimalist approach to digital experiences, where every pixel serves a purpose.",
    },
    {
      label: "Philosophy",
      title: "Less is More",
      description: "We believe in the power of restraint. Removing the unnecessary to reveal what truly matters.",
    },
    {
      label: "Craft",
      title: "Attention to Detail",
      description: "Every interaction, every transition, every element is considered and refined.",
    },
    {
      label: "Technology",
      title: "Built for Scale",
      description: "Modern architecture designed to grow with your ambitions and adapt to change.",
    },
    {
      label: "Experience",
      title: "Seamless Journeys",
      description: "Intuitive interfaces that guide users naturally toward their goals.",
    },
    {
      label: "Innovation",
      title: "Pushing Boundaries",
      description: "Exploring new possibilities at the intersection of design and technology.",
    },
    {
      label: "Impact",
      title: "Measurable Results",
      description: "Data-driven decisions that deliver real value and lasting impact.",
    },
  ];

  return (
    <div className="bg-[#000000]">
      {sections.map((section, index) => (
        <div key={index}>
          {/* Divider Line - appears before each section except the first */}
          {index > 0 && (
            <div className="mx-auto max-w-4xl px-6">
              <div className="h-px bg-white/[0.06]" />
            </div>
          )}

          {/* Section Content */}
          <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]/70">
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
      ))}
    </div>
  );
}
