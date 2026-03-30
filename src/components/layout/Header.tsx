// Header.tsx — Sticky header with nav links, language toggle, and mobile menu
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { PERSONAL, NAV } from "@/lib/constants";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { AnimatePresence, motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export function Header() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = NAV[locale].links;

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on anchor click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md transition-opacity duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Name / scroll to top */}
        <a
          href={isHome ? "#" : "/"}
          className="text-base font-heading font-bold text-[var(--accent)] tracking-wider"
        >
          HM
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="font-heading text-sm text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: social icons + language toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="GitHub"
            >
              <SiGithub size={16} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-[var(--text-primary)] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              // Close icon
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

          <LanguageToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={handleNavClick}
                  className="font-heading text-lg text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-center gap-6 mt-4">
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="GitHub">
                  <SiGithub size={20} />
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
