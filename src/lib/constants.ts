// constants.ts - Bilingual content source of truth fo all site sections (ES/EN)

// ============================================
// PERSONAL DATA (language-independent)
// ============================================
export const PERSONAL = {
  name: "Héctor Muñoz Palacios",
  location: "Valencia / Madrid",
  email: "hectormp2001@gmail.com",
  github: "https://github.com/CodingAce99",
  linkedin: "https://www.linkedin.com/in/hector-munoz-palacios/",
} as const;

// ============================================
// SECTION TEXTS — Bilingual ES/EN
// ============================================

export const HERO = {
  es: {
    badge: "Disponible para trabajar",
    headline: "Backend Developer\ncon mentalidad de sistemas",
    subtitle:
      "De administrar infraestructura a construir el software que la gestiona. Fundamentos sólidos, arquitectura limpia, visión completa.",
    cta: {
      primary: { label: "Ver mi trabajo", href: "#proyectos" },
      secondary: { label: "Contactar", href: "#contacto" },
    },
  },
  en: {
    badge: "Open to work",
    headline: "Backend Developer\nwith a systems mindset",
    subtitle:
      "From managing infrastructure to building the software that runs it. Strong foundations, clean architecture, full-stack vision.",
    cta: {
      primary: { label: "See my work", href: "#projects" },
      secondary: { label: "Get in touch", href: "#contact" },
    },
  },
} as const;

export const ABOUT = {
  es: {
    sectionLabel: "Sobre mí",
    sectionTitle: "De la infraestructura al código",
    paragraphs: [
      "Empecé por donde muchos developers nunca pasan: la infraestructura. Administración de sistemas, redes, soporte técnico resolviendo incidencias reales en producción. Ahí entendí cómo funciona todo por debajo.",
      "La ciberseguridad me abrió los ojos. Para proteger sistemas de verdad, necesitaba entender cómo se construyen desde dentro. Ese fue el salto al desarrollo — y no fue un cambio de rumbo, fue la evolución natural.",
      "Hoy combino ambos mundos. No soy un developer que aprendió a hacer deploy. Soy alguien que entiende el camino completo del código al servidor, y construyo software con esa visión. Uso IA como herramienta de productividad, pero los fundamentos no se delegan.",
    ],
  },
  en: {
    sectionLabel: "About me",
    sectionTitle: "From infrastructure to code",
    paragraphs: [
      "I started where most developers never go: infrastructure. Systems administration, networking, real technical support solving production incidents. That's where I understood how everything works underneath.",
      "Cybersecurity opened my eyes. To truly protect systems, I needed to understand how they're built from the inside. That was my shift into development — not a career change, but a natural evolution.",
      "Today I combine both worlds. I'm not a developer who learned to deploy. I'm someone who understands the full path from code to server, and I build software with that perspective. I use AI as a productivity tool, but the fundamentals are never delegated.",
    ],
  },
} as const;

export const APPROACH = {
  es: {
    sectionLabel: "Filosofía",
    sectionTitle: "Cómo construyo software",
    principles: [
      {
        title: "Arquitectura con intención",
        description:
          "No escribo código y luego organizo. Diseño la estructura primero. El dominio es puro, el framework es un detalle de implementación.",
      },
      {
        title: "Testing como disciplina",
        description:
          "Si no tiene tests, no está terminado. No por métrica — por convicción. Los tests son parte del diseño, no un añadido posterior.",
      },
      {
        title: "Seguridad integral",
        description:
          "La seguridad no es una feature que se añade al final. Es una restricción del diseño desde el primer modelo de datos.",
      },
      {
        title: "Ownership completo",
        description:
          "Entiendo el camino del código al servidor. Docker, CI/CD, Linux. Si no puedo desplegarlo, no está hecho.",
      },
      {
        title: "Código que se explica solo",
        description:
          "Escribo para el siguiente developer que lo lea. Nombres claros, responsabilidades separadas, estructura predecible.",
      },
    ],
  },
  en: {
    sectionLabel: "Philosophy",
    sectionTitle: "How I build software",
    principles: [
      {
        title: "Architecture with intention",
        description:
          "I don't write code and organize later. I design the structure first. The domain stays pure — the framework is an implementation detail.",
      },
      {
        title: "Testing as discipline",
        description:
          "If it's not tested, it's not done. Not for metrics — out of conviction. Tests are part of the design, not an afterthought.",
      },
      {
        title: "Security by design",
        description:
          "Security isn't a feature you bolt on at the end. It's a design constraint from the very first data model.",
      },
      {
        title: "Full ownership",
        description:
          "I understand the path from code to server. Docker, CI/CD, Linux. If I can't deploy it, it's not finished.",
      },
      {
        title: "Self-documenting code",
        description:
          "I write for the next developer who reads it. Clear naming, separated concerns, predictable structure.",
      },
    ],
  },
} as const;

// Helper type for typed access
export type LocaleContent<T> = {
  es: T;
  en: T;
};

// ============================================
// TECH STACK
// ============================================

export const TECH_STACK = {
  es: {
    sectionLabel: "Stack técnico",
    sectionTitle: "Con qué construyo",
    categories: [
      {
        name: "Backend",
        technologies: [
          { name: "Java", icon: "SiOpenjdk" },
          { name: "Spring Boot", icon: "SiSpring" },
        ],
      },
      {
        name: "Frontend",
        technologies: [
          { name: "React", icon: "SiReact" },
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "TypeScript", icon: "SiTypescript" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
        ],
      },
      {
        name: "Base de datos",
        technologies: [
          { name: "PostgreSQL", icon: "SiPostgresql" },
        ],
      },
      {
        name: "Infraestructura",
        technologies: [
          { name: "Docker", icon: "SiDocker" },
          { name: "GitHub Actions", icon: "SiGithubactions" },
          { name: "Linux", icon: "SiLinux" },
        ],
      },
      {
        name: "Testing",
        technologies: [
          { name: "JUnit 5", icon: "SiJunit5" },
        ],
      },
    ],
  },
  en: {
    sectionLabel: "Tech stack",
    sectionTitle: "What I build with",
    categories: [
      {
        name: "Backend",
        technologies: [
          { name: "Java", icon: "SiOpenjdk" },
          { name: "Spring Boot", icon: "SiSpring" },
        ],
      },
      {
        name: "Frontend",
        technologies: [
          { name: "React", icon: "SiReact" },
          { name: "Next.js", icon: "SiNextdotjs" },
          { name: "TypeScript", icon: "SiTypescript" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
        ],
      },
      {
        name: "Database",
        technologies: [
          { name: "PostgreSQL", icon: "SiPostgresql" },
        ],
      },
      {
        name: "Infrastructure",
        technologies: [
          { name: "Docker", icon: "SiDocker" },
          { name: "GitHub Actions", icon: "SiGithubactions" },
          { name: "Linux", icon: "SiLinux" },
        ],
      },
      {
        name: "Testing",
        technologies: [
          { name: "JUnit 5", icon: "SiJunit5" },
        ],
      },
    ],
  },
} as const;

// ============================================
// TIMELINE
// ============================================

export const TIMELINE = {
  es: {
    sectionLabel: "Trayectoria",
    sectionTitle: "De dónde vengo",
    entries: [
      {
        type: "education" as const,
        date: "2020 – 2022",
        title: "ASIR",
        subtitle: "Administración de Sistemas Informáticos en Red",
        institution: "Aula Campus, Valencia",
        description: "Nota: 9 · Mejor Proyecto de Fin de Grado",
      },
      {
        type: "work" as const,
        date: "Mar 2021 – May 2022",
        title: "Técnico de soporte IT",
        subtitle: "ISAGRI España — Valencia",
        institution: null,
        description:
          "Resolución autónoma de 5-15 incidencias/día en software de gestión empresarial. Diagnóstico remoto y resolución en primera línea sin escalado.",
      },
      {
        type: "education" as const,
        date: "2023 – 2025",
        title: "DAM",
        subtitle: "Desarrollo de Aplicaciones Multiplataforma",
        institution: "Aula Campus, Valencia",
        description: "Nota: 9",
      },
      {
        type: "work" as const,
        date: "Mar – Jun 2025",
        title: "Desarrollador de aplicaciones",
        subtitle: "Hospital La Pedrera — Dénia",
        institution: null,
        description:
          "Aplicación de rehabilitación clínica con requisitos funcionales definidos por equipo médico en entorno sanitario real.",
      },
    ],
    certifications: {
      title: "Certificaciones",
      items: [
        "Oracle Java SE",
        "Oracle SQL",
        "Cisco CCNA 1-4",
        "NDG Linux Essentials",
      ],
    },
  },
  en: {
    sectionLabel: "Background",
    sectionTitle: "Where I come from",
    entries: [
      {
        type: "education" as const,
        date: "2020 – 2022",
        title: "ASIR",
        subtitle: "Network Systems Administration",
        institution: "Aula Campus, Valencia",
        description: "Grade: 9/10 · Best Final Year Project",
      },
      {
        type: "work" as const,
        date: "Mar 2021 – May 2022",
        title: "IT Support Technician",
        subtitle: "ISAGRI Spain — Valencia",
        institution: null,
        description:
          "Autonomous resolution of 5-15 daily incidents in enterprise management software. Remote diagnosis and first-line resolution without escalation.",
      },
      {
        type: "education" as const,
        date: "2023 – 2025",
        title: "DAM",
        subtitle: "Multi-platform Application Development",
        institution: "Aula Campus, Valencia",
        description: "Grade: 9/10",
      },
      {
        type: "work" as const,
        date: "Mar – Jun 2025",
        title: "Application Developer",
        subtitle: "Hospital La Pedrera — Dénia",
        institution: null,
        description:
          "Clinical rehabilitation app with functional requirements defined by medical staff in a real healthcare environment.",
      },
    ],
    certifications: {
      title: "Certifications",
      items: [
        "Oracle Java SE",
        "Oracle SQL",
        "Cisco CCNA 1-4",
        "NDG Linux Essentials",
      ],
    },
  },
} as const;