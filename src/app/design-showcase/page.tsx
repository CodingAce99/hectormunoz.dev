// Design Showcase — Compare 4 visual styles for developer portfolio landing page

import { StyleCard } from "./StyleCard";

export const metadata = {
  title: "Design Showcase — Style Comparison",
  description: "Compare 4 different visual styles for a developer portfolio landing page.",
};

export default function DesignShowcasePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Design Style Comparison
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            4 different visual approaches for your developer portfolio
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-2">
          <StyleCard
            styleNumber={1}
            styleName="Dark + Sky Blue"
            styleDescription="Minimal, editorial. Think Linear/Vercel."
          >
            <Style1DarkSkyBlue />
          </StyleCard>

          <StyleCard
            styleNumber={2}
            styleName="Dark + Warm Gold"
            styleDescription="Sophisticated, editorial magazine feel."
          >
            <Style2DarkWarmGold />
          </StyleCard>

          <StyleCard
            styleNumber={3}
            styleName="Light Mode Clean"
            styleDescription="Think Apple/Stripe. Maximum readability."
          >
            <Style3LightClean />
          </StyleCard>

          <StyleCard
            styleNumber={4}
            styleName="Dark + Gradient"
            styleDescription="Modern, dynamic. Think GitHub/Raycast."
          >
            <Style4DarkGradient />
          </StyleCard>
        </div>
      </div>
    </main>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STYLE 1: Dark subtle + sky blue accent
   Background #111113, text #F4F4F5/#A1A1AA, accent #38BDF8
   ───────────────────────────────────────────────────────────────────────────── */
function Style1DarkSkyBlue() {
  return (
    <div className="min-h-[600px] bg-[#111113] text-[#F4F4F5]">
      {/* Hero Section */}
      <section className="relative px-8 pt-16 pb-12">
        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(56, 189, 248, 0.08), transparent)",
          }}
        />

        <div className="relative flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/5 px-4 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[#A1A1AA]">Disponible para trabajar</span>
          </div>

          {/* Name */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#A1A1AA]">
            HÉCTOR MUÑOZ PALACIOS
          </p>

          {/* Role */}
          <p className="mb-6 text-lg font-medium text-[#38BDF8]">Backend Developer</p>

          {/* Headline */}
          <h1 className="mb-6 max-w-md text-3xl font-bold leading-tight tracking-tight">
            Backend Developer.
            <span className="block text-[#38BDF8]">Construido desde la base.</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#A1A1AA]">
            Java · Spring Boot · Arquitectura Hexagonal. Formado en sistemas, construido para producción.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button className="rounded-lg bg-[#38BDF8] px-5 py-2.5 text-sm font-medium text-[#111113] transition-all hover:bg-[#38BDF8]/90">
              Ver proyectos
            </button>
            <button className="rounded-lg border border-[#38BDF8]/30 px-5 py-2.5 text-sm font-medium text-[#38BDF8] transition-all hover:border-[#38BDF8]/50 hover:bg-[#38BDF8]/5">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="border-t border-white/5 px-8 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="mb-6 text-xl font-semibold leading-snug">
            No empecé programando.
            <span className="block text-[#A1A1AA]">Empecé entendiendo.</span>
          </h2>

          <div className="flex gap-4">
            <span className="font-mono text-sm text-[#38BDF8]">01</span>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-[#F4F4F5]">
                Arquitectura con intención
              </h3>
              <p className="text-sm leading-relaxed text-[#A1A1AA]">
                Pienso en la estructura antes de escribir la primera línea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STYLE 2: Dark subtle + warm neutral
   Background #111113, text warm whites, accent #D4A853 (warm gold/amber)
   ───────────────────────────────────────────────────────────────────────────── */
function Style2DarkWarmGold() {
  return (
    <div className="min-h-[600px] bg-[#111113] text-[#FAF9F6]">
      {/* Hero Section */}
      <section className="relative px-8 pt-16 pb-12">
        {/* Warm glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(212, 168, 83, 0.06), transparent)",
          }}
        />

        <div className="relative flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[#A8A29E]">Disponible para trabajar</span>
          </div>

          {/* Name */}
          <p className="mb-4 text-xs font-light uppercase tracking-[0.25em] text-[#A8A29E]">
            HÉCTOR MUÑOZ PALACIOS
          </p>

          {/* Role */}
          <p className="mb-6 text-sm italic text-[#D4A853]">Backend Developer</p>

          {/* Headline */}
          <h1 className="mb-6 max-w-md text-3xl font-light leading-tight tracking-tight">
            Backend Developer.
            <span className="block font-normal text-[#D4A853]">Construido desde la base.</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-sm text-sm font-light leading-relaxed text-[#A8A29E]">
            Java · Spring Boot · Arquitectura Hexagonal. Formado en sistemas, construido para producción.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button className="border border-[#D4A853] bg-transparent px-6 py-2.5 text-sm font-light text-[#D4A853] transition-all hover:bg-[#D4A853] hover:text-[#111113]">
              Ver proyectos
            </button>
            <button className="border border-[#A8A29E]/30 px-6 py-2.5 text-sm font-light text-[#A8A29E] transition-all hover:border-[#A8A29E]/50">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="border-t border-[#D4A853]/10 px-8 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="mb-6 text-xl font-light leading-snug">
            No empecé programando.
            <span className="block italic text-[#D4A853]">Empecé entendiendo.</span>
          </h2>

          <div className="flex gap-4">
            <span className="font-serif text-lg italic text-[#D4A853]">01</span>
            <div>
              <h3 className="mb-2 text-sm font-medium text-[#FAF9F6]">
                Arquitectura con intención
              </h3>
              <p className="text-sm font-light leading-relaxed text-[#A8A29E]">
                Pienso en la estructura antes de escribir la primera línea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STYLE 3: Light mode clean
   White/cream background, dark text, subtle blue/gray accent. Apple/Stripe style.
   ───────────────────────────────────────────────────────────────────────────── */
function Style3LightClean() {
  return (
    <div className="min-h-[600px] bg-[#FAFAFA] text-[#1D1D1F]">
      {/* Hero Section */}
      <section className="px-8 pt-16 pb-12">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-[#6E6E73]">Disponible para trabajar</span>
          </div>

          {/* Name */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#6E6E73]">
            HÉCTOR MUÑOZ PALACIOS
          </p>

          {/* Role */}
          <p className="mb-6 text-lg font-medium text-[#0071E3]">Backend Developer</p>

          {/* Headline */}
          <h1 className="mb-6 max-w-md text-3xl font-semibold leading-tight tracking-tight">
            Backend Developer.
            <span className="block bg-gradient-to-r from-[#0071E3] to-[#00C7BE] bg-clip-text text-transparent">
              Construido desde la base.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-sm text-sm leading-relaxed text-[#6E6E73]">
            Java · Spring Boot · Arquitectura Hexagonal. Formado en sistemas, construido para producción.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-[#0071E3] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#0077ED]">
              Ver proyectos
            </button>
            <button className="rounded-full bg-[#F5F5F7] px-6 py-2.5 text-sm font-medium text-[#0071E3] transition-all hover:bg-[#E8E8ED]">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="border-t border-[#D2D2D7] bg-white px-8 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="mb-6 text-xl font-semibold leading-snug text-[#1D1D1F]">
            No empecé programando.
            <span className="block text-[#6E6E73]">Empecé entendiendo.</span>
          </h2>

          <div className="flex gap-4">
            <span className="rounded-full bg-[#0071E3] px-2.5 py-0.5 text-xs font-bold text-white">01</span>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-[#1D1D1F]">
                Arquitectura con intención
              </h3>
              <p className="text-sm leading-relaxed text-[#6E6E73]">
                Pienso en la estructura antes de escribir la primera línea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STYLE 4: Dark with gradient accents
   Background #0A0A0F, text white, accent gradient (blue to purple/cyan). GitHub/Raycast style.
   ───────────────────────────────────────────────────────────────────────────── */
function Style4DarkGradient() {
  return (
    <div className="min-h-[600px] bg-[#0A0A0F] text-white">
      {/* Hero Section */}
      <section className="relative px-8 pt-16 pb-12">
        {/* Gradient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% -20%, rgba(139, 92, 246, 0.15), transparent)",
          }}
        />

        <div className="relative flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-zinc-400">Disponible para trabajar</span>
          </div>

          {/* Name */}
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            HÉCTOR MUÑOZ PALACIOS
          </p>

          {/* Role */}
          <p className="mb-6 bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#F472B6] bg-clip-text text-lg font-semibold text-transparent">
            Backend Developer
          </p>

          {/* Headline */}
          <h1 className="mb-6 max-w-md text-3xl font-bold leading-tight tracking-tight">
            Backend Developer.
            <span className="block bg-gradient-to-r from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Construido desde la base.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-sm text-sm leading-relaxed text-zinc-400">
            Java · Spring Boot · Arquitectura Hexagonal. Formado en sistemas, construido para producción.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button className="rounded-lg bg-gradient-to-r from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90">
              Ver proyectos
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10">
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="border-t border-white/5 px-8 py-12">
        <div className="mx-auto max-w-md">
          <h2 className="mb-6 text-xl font-semibold leading-snug">
            No empecé programando.
            <span className="block text-zinc-500">Empecé entendiendo.</span>
          </h2>

          <div className="flex gap-4">
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#8B5CF6] bg-clip-text font-mono text-sm font-bold text-transparent">
              01
            </span>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-white">
                Arquitectura con intención
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Pienso en la estructura antes de escribir la primera línea.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
