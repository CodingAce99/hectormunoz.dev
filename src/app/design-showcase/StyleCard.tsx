// StyleCard.tsx — Wrapper component for showcasing design styles

interface StyleCardProps {
  styleNumber: number;
  styleName: string;
  styleDescription: string;
  children: React.ReactNode;
}

export function StyleCard({ styleNumber, styleName, styleDescription, children }: StyleCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] transition-all hover:border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 font-mono text-sm font-bold text-white">
              {styleNumber}
            </span>
            <h3 className="font-heading text-lg font-semibold text-white">{styleName}</h3>
          </div>
          <p className="mt-1 text-sm text-zinc-500">{styleDescription}</p>
        </div>
      </div>

      {/* Preview */}
      <div className="overflow-hidden">
        {children}
      </div>
    </div>
  );
}
