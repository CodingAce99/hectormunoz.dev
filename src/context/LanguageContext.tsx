"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ----------------------------------------------------
// Types
// ----------------------------------------------------
type Locale = "es" | "en";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

// ----------------------------------------------------
// Default value - only used if Context is consumed outside a Provider
// ----------------------------------------------------
const LanguageContext = createContext<LanguageContextValue>({
  locale: "es",
  setLocale: () => {},
});

// ----------------------------------------------------
// Provider - singleton wrapper for the entire app
// ----------------------------------------------------
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  // Only useEffect allowed in this phase.
  // Syncs the <html> lang attribute with the active locale.
  // Required for accessibility (screen readers) and SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ----------------------------------------------------
// Public hook - typed interface for the Context
// Equivalent to @autowired in Spring: typed access
// without the component knowing about the Context directly
// ----------------------------------------------------
export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}