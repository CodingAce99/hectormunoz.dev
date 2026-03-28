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
      primary: { label: "Ver mi trabajo", href: "#projects" },
      secondary: { label: "Contactar", href: "#contact" },
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

// ============================================
// PROJECTS
// ============================================

export const PROJECTS = {
  es: {
    sectionLabel: "Proyectos",
    sectionTitle: "Lo que he construido",
    items: [
      {
        slug: "infratrack",
        title: "Infratrack",
        description:
          "Sistema de inventario y monitorización de infraestructura IT. Fuente única de verdad para activos, credenciales y métricas en tiempo real.",
        connection:
          "La combinación de mis dos formaciones en un solo proyecto. Administración de sistemas + desarrollo, trabajando juntos.",
        github: "https://github.com/CodingAce99/infratrack",
        stack: [
          "Java 21",
          "Spring Boot 3.5",
          "PostgreSQL 17",
          "Docker",
          "GitHub Actions",
          "Next.js 15",
          "TypeScript",
          "Tailwind CSS v4",
        ],
        highlights: [
          {
            title: "Arquitectura hexagonal",
            description:
              "Dominio Java puro sin imports de framework. Adaptadores intercambiables para REST, JPA, SSH e in-memory.",
          },
          {
            title: "Monitorización SSH real",
            description:
              "SSHJ a contenedores Alpine. CPU, memoria y disco cada 60s, paralelizado con Virtual Threads.",
          },
          {
            title: "Seguridad por construcción",
            description:
              "AES-256-GCM en reposo. AssetResponse sin campo password — no oculto, ausente.",
          },
          {
            title: "Domain Events asíncronos",
            description:
              "Bus desacoplado con Spring ApplicationEventPublisher. Listeners extensibles sin tocar código existente.",
          },
          {
            title: "CI/CD completo",
            description:
              "GitHub Actions en verde. Build multi-stage. docker-compose up levanta 4 servicios.",
          },
          {
            title: "Dashboard en tiempo real",
            description:
              "Next.js 15 + TypeScript + Tailwind. Polling cada 60s con SWR, sparklines Recharts.",
          },
          {
            title: "91 tests automatizados",
            description:
              "JUnit 5 + Mockito: dominio, servicios, controladores REST y tests de seguridad dedicados.",
          },
          {
            title: "Tres perfiles",
            description:
              "dev (H2), demo (PostgreSQL + SSH real a Alpine), prod.",
          },
        ],
        detail: {
          about: [
            "Infratrack nace de una necesidad real: en entornos IT, el inventario de activos vive en hojas de cálculo desactualizadas mientras el estado real de los servidores solo se conoce conectándose manualmente por SSH. Infratrack cierra esa brecha.",
            "Es un sistema full-stack que combina una API REST con arquitectura hexagonal, un dashboard en tiempo real, y monitorización SSH automatizada — todo orquestado con Docker y CI/CD.",
            "Diseñado como proyecto de portfolio, pero construido con estándares de producción: cifrado de credenciales, tests automatizados, perfiles de entorno, y despliegue con un solo comando.",
          ],
          architecture: {
            title: "Arquitectura hexagonal",
            description:
              "El dominio de Infratrack no sabe que Spring existe. Los puertos definen contratos, los adaptadores implementan la infraestructura. Cambiar de REST a gRPC o de PostgreSQL a MongoDB no toca una línea del dominio.",
            layers: [
              {
                name: "Dominio",
                description:
                  "Entidades, Value Objects, Aggregates y Domain Events. Java puro, zero imports de framework.",
              },
              {
                name: "Puertos",
                description:
                  "Interfaces que definen los contratos: AssetRepository, SshPort, EventPublisher.",
              },
              {
                name: "Adaptadores",
                description:
                  "Implementaciones intercambiables: JPA, REST Controllers, SSHJ, In-Memory para tests.",
              },
              {
                name: "Aplicación",
                description:
                  "Servicios que orquestan el dominio. AssetService, MonitoringService. Sin lógica de negocio, solo coordinación.",
              },
            ],
          },
          cta: {
            label: "Ver en GitHub",
            href: "https://github.com/CodingAce99/infratrack",
          },
          backLabel: "← Volver al portfolio",
        },
      },
    ],
  },
  en: {
    sectionLabel: "Projects",
    sectionTitle: "What I've built",
    items: [
      {
        slug: "infratrack",
        title: "Infratrack",
        description:
          "IT infrastructure inventory and monitoring system. Single source of truth for assets, credentials, and real-time metrics.",
        connection:
          "Both my backgrounds combined in one project. Systems administration + development, working together.",
        github: "https://github.com/CodingAce99/infratrack",
        stack: [
          "Java 21",
          "Spring Boot 3.5",
          "PostgreSQL 17",
          "Docker",
          "GitHub Actions",
          "Next.js 15",
          "TypeScript",
          "Tailwind CSS v4",
        ],
        highlights: [
          {
            title: "Hexagonal architecture",
            description:
              "Pure Java domain with no framework imports. Interchangeable adapters for REST, JPA, SSH, and in-memory.",
          },
          {
            title: "Real SSH monitoring",
            description:
              "SSHJ to Alpine containers. CPU, memory, and disk every 60s, parallelized with Virtual Threads.",
          },
          {
            title: "Security by construction",
            description:
              "AES-256-GCM at rest. AssetResponse has no password field — not hidden, absent.",
          },
          {
            title: "Async Domain Events",
            description:
              "Decoupled bus with Spring ApplicationEventPublisher. Extensible listeners without touching existing code.",
          },
          {
            title: "Full CI/CD",
            description:
              "GitHub Actions green. Multi-stage build. docker-compose up spins up 4 services.",
          },
          {
            title: "Real-time dashboard",
            description:
              "Next.js 15 + TypeScript + Tailwind. 60s polling with SWR, Recharts sparklines.",
          },
          {
            title: "91 automated tests",
            description:
              "JUnit 5 + Mockito: domain, services, REST controllers, and dedicated security tests.",
          },
          {
            title: "Three profiles",
            description:
              "dev (H2), demo (PostgreSQL + real SSH to Alpine), prod.",
          },
        ],
        detail: {
          about: [
            "Infratrack was born from a real need: in IT environments, asset inventories live in outdated spreadsheets while the actual state of servers is only known by manually connecting via SSH. Infratrack bridges that gap.",
            "It's a full-stack system combining a REST API with hexagonal architecture, a real-time dashboard, and automated SSH monitoring — all orchestrated with Docker and CI/CD.",
            "Designed as a portfolio project, but built with production standards: credential encryption, automated tests, environment profiles, and single-command deployment.",
          ],
          architecture: {
            title: "Hexagonal architecture",
            description:
              "Infratrack's domain doesn't know Spring exists. Ports define contracts, adapters implement infrastructure. Switching from REST to gRPC or PostgreSQL to MongoDB doesn't touch a single line of domain code.",
            layers: [
              {
                name: "Domain",
                description:
                  "Entities, Value Objects, Aggregates, and Domain Events. Pure Java, zero framework imports.",
              },
              {
                name: "Ports",
                description:
                  "Interfaces defining contracts: AssetRepository, SshPort, EventPublisher.",
              },
              {
                name: "Adapters",
                description:
                  "Interchangeable implementations: JPA, REST Controllers, SSHJ, In-Memory for tests.",
              },
              {
                name: "Application",
                description:
                  "Services orchestrating the domain. AssetService, MonitoringService. No business logic, only coordination.",
              },
            ],
          },
          cta: {
            label: "View on GitHub",
            href: "https://github.com/CodingAce99/infratrack",
          },
          backLabel: "← Back to portfolio",
        },
      },
    ],
  },
} as const;

// ============================================
// CONTACT
// ============================================

export const CONTACT = {
  es: {
    sectionLabel: "Contacto",
    sectionTitle: "¿Hablamos?",
    description:
      "Estoy buscando mi primera posición como desarrollador. Si crees que puedo aportar valor a tu equipo, me encantaría hablar.",
    links: {
      github: { label: "GitHub", href: "https://github.com/CodingAce99" },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hector-munoz-palacios/",
      },
      email: { label: "hectormp2001@gmail.com", href: "mailto:hectormp2001@gmail.com" },
    },
  },
  en: {
    sectionLabel: "Contact",
    sectionTitle: "Let's talk.",
    description:
      "I'm looking for my first developer position. If you think I can bring value to your team, I'd love to talk.",
    links: {
      github: { label: "GitHub", href: "https://github.com/CodingAce99" },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/hector-munoz-palacios/",
      },
      email: { label: "hectormp2001@gmail.com", href: "mailto:hectormp2001@gmail.com" },
    },
  },
} as const;

// ============================================
// NAV
// ============================================

export const NAV = {
  es: {
    links: [
      { label: "Sobre mí", href: "#about" },
      { label: "Filosofía", href: "#approach" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  en: {
    links: [
      { label: "About", href: "#about" },
      { label: "Philosophy", href: "#approach" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;