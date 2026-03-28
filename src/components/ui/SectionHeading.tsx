// SectionHeading.tsx — Reusable section title component used across all landing page sections

interface SectionHeadingProps {
  label: string;
  title: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-10 md:mb-12 ${alignClass}`}>
      <p className="mb-2 font-heading text-sm font-medium uppercase tracking-wider text-[var(--accent)]">
        {label}
      </p>
      <h2 className="font-heading text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}