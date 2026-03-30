// Contact.tsx — Contact section with social links and footer copyright
"use client";

import { useLanguage } from "@/context/LanguageContext";
import { CONTACT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export function Contact() {
  const { locale } = useLanguage();
  const reduced = useReducedMotion();
  const content = CONTACT[locale];

  const container: import("framer-motion").Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : 0.1 },
    },
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  const links = [
    { ...content.links.github, icon: SiGithub, external: true },
    { ...content.links.linkedin, icon: FaLinkedinIn, external: true },
    { ...content.links.email, icon: HiOutlineMail, external: false },
  ];

  return (
    <section id="contact" className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24">
      <motion.div
        className="mx-auto max-w-4xl px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item}>
          <SectionHeading
            label={content.sectionLabel}
            title={content.sectionTitle}
            align="center"
          />
        </motion.div>

        <motion.p
          className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:mb-10 md:text-lg"
          variants={item}
        >
          {content.description}
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          variants={container}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-2 font-heading text-lg font-medium text-[var(--text-primary)] transition-colors duration-300 hover:text-[var(--accent)]"
              variants={item}
            >
              <link.icon className="text-xl" />
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-16 border-t border-[var(--border)] pt-8 md:mt-20">
          <p className="text-xs text-[var(--text-secondary)] opacity-60">
            &copy; 2026 Héctor Muñoz Palacios
          </p>
        </div>
      </motion.div>
    </section>
  );
}
