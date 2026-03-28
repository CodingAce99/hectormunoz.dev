"use client";

import { useLanguage } from "@/context/LanguageContext";



export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    // Temporal position — will be moved to Header in Phase 5
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={() => setLocale("es")}
        className={`
          font-heading text-sm tracking-wider uppercase cursor-pointer
          transition-colors duration-200
          ${locale === "es"
            ? "text-[var(--text-primary)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }
        `}
        aria-label="Cambiar idioma a español"
        aria-pressed={locale === "es"}
      >
        ES
      </button>

      <span
        className="text-[var(--border)] font-heading text-sm select-none"
        aria-hidden="true"
      >
        |
      </span>

      <button
        onClick={() => setLocale("en")}
        className={`
          font-heading text-sm tracking-wider uppercase cursor-pointer
          transition-colors duration-200
          ${locale === "en"
            ? "text-[var(--text-primary)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }
        `}
        aria-label="Switch language to English"
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}