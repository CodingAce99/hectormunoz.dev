// ApproachVaryingWidths.tsx — Seven sections with alternating widths for visual rhythm

export function ApproachVaryingWidths() {
  const sections = [
    {
      label: "Hero",
      title: "Breaking Boundaries",
      description: "Full-width impact that commands attention and sets the stage for what follows.",
      width: "full",
      layout: "center",
    },
    {
      label: "Story",
      title: "Focused Narrative",
      description: "Narrow column for intimate storytelling, drawing readers into a more personal space. The constrained width improves readability and creates visual contrast.",
      width: "narrow",
      layout: "left",
    },
    {
      label: "Showcase",
      title: "Expanding Horizons",
      description: "Medium width offers balance—enough breathing room to feature content prominently without overwhelming the viewer.",
      width: "medium",
      layout: "center",
    },
    {
      label: "Details",
      title: "Precision Focus",
      description: "Pulling content tight creates emphasis and concentration. Every word carries more weight in a condensed space.",
      width: "narrow",
      layout: "right",
    },
    {
      label: "Impact",
      title: "Commanding Presence",
      description: "Returning to full width creates a sense of importance and gravitas. This section demands to be noticed.",
      width: "full",
      layout: "center",
    },
    {
      label: "Insight",
      title: "Thoughtful Reflection",
      description: "A medium-width section for considered content that needs room to breathe but maintains intimacy.",
      width: "medium",
      layout: "left",
    },
    {
      label: "Finale",
      title: "Closing Statement",
      description: "Ending with a narrow section creates a sense of conclusion, like the final paragraph of a well-crafted essay.",
      width: "narrow",
      layout: "center",
    },
  ];

  const getWidthClass = (width: string) => {
    switch (width) {
      case "full":
        return "max-w-6xl";
      case "medium":
        return "max-w-3xl";
      case "narrow":
        return "max-w-xl";
      default:
        return "max-w-4xl";
    }
  };

  const getLayoutClass = (layout: string) => {
    switch (layout) {
      case "left":
        return "mr-auto text-left";
      case "right":
        return "ml-auto text-right";
      default:
        return "mx-auto text-center";
    }
  };

  return (
    <div className="bg-[#000000]">
      {sections.map((section, index) => (
        <div key={index} className="px-6">
          {/* Visual width indicator */}
          <div className={`${getWidthClass(section.width)} ${getLayoutClass(section.layout)} py-16 md:py-20`}>
            {/* Width indicator bar */}
            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#6366F1]/40 to-transparent" />
              <span className="text-xs font-medium uppercase tracking-widest text-[#6366F1]/50">
                {section.width}
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#6366F1]/40 to-transparent" />
            </div>

            <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-[#6366F1]">
              {section.label}
            </span>
            <h3 className="mb-4 font-heading text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              {section.title}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed md:text-lg">
              {section.description}
            </p>

            {/* Accent element */}
            {section.width === "full" && (
              <div className="mt-8 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 w-8 rounded-full"
                    style={{
                      backgroundColor: i === 2 ? "#6366F1" : "rgba(99, 102, 241, 0.2)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
