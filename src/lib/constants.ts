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
    headline: "Backend Developer.\nConstruido desde la base.",
    subtitle:
      "Java · Spring Boot · Arquitectura Hexagonal. Formado en sistemas, construido para producción.",
    cta: {
      primary: { label: "Ver proyectos", href: "#projects" },
      secondary: { label: "Contactar", href: "#contact" },
    },
  },
  en: {
    badge: "Open to work",
    headline: "Backend Developer.\nBuilt from the ground up.",
    subtitle:
      "Java · Spring Boot · Hexagonal Architecture. Trained in systems, built for production.",
    cta: {
      primary: { label: "See my work", href: "#projects" },
      secondary: { label: "Get in touch", href: "#contact" },
    },
  },
} as const;

export const ABOUT = {
  es: {
    sectionLabel: "Mi historia",
    sectionTitle: "No empecé programando. Empecé entendiendo.",
    paragraphs: [
      "La mayoría de developers llegan a su primer equipo sabiendo escribir código. Pero no han tratado con un usuario real. No han diagnosticado un problema bajo presión. No entienden qué pasa entre el código y el servidor. Mi camino fue al revés.",
      "Mi primer trabajo fue en soporte técnico — 5 a 15 incidencias al día, diagnóstico remoto, resolución en primera línea sin escalado. No era glamuroso. Pero cada llamada me enseñaba algo que ningún tutorial puede: a entender lo que el usuario realmente necesita, no lo que te describe. Esa habilidad es la misma que hoy aplico para entender requisitos antes de escribir una línea.",
      "En paralelo me formé en sistemas y redes — certificaciones Cisco CCNA y Linux. Entendía cómo funcionaban las máquinas por dentro. Pero la curiosidad me empujó más lejos: quería entender cómo funcionan las cosas a un nivel más profundo. Y descubrí algo que cambió mi dirección — no entiendes de verdad cómo funciona un ordenador hasta que programas.",
      "Ese fue el salto. Me matriculé en Desarrollo de Aplicaciones Multiplataforma. Y desde el primer proyecto decidí que no quería escribir código que simplemente funcionara — quería construir software pensado para producción, no para aprobar.",
      "El resultado fue Infratrack — un sistema enterprise-grade diseñado y construido de cero, sin equipo ni guía. Arquitectura hexagonal, 91 tests, cifrado AES-256-GCM, CI/CD en verde. No porque me lo pidieran. Porque creo que así se construye software.",
      "Todo lo que tu equipo necesitaría enseñar a un junior — entender usuarios, pensar en sistemas, trabajar con autonomía — yo lo aprendí antes de escribir mi primera clase.",
    ],
  },
  en: {
    sectionLabel: "My story",
    sectionTitle: "I didn't start by coding. I started by understanding.",
    paragraphs: [
      "Most developers arrive at their first team knowing how to write code. But they've never dealt with a real user. Never diagnosed a problem under pressure. Don't understand what happens between code and server. My path was the opposite.",
      "My first job was in tech support — 5 to 15 incidents per day, remote diagnosis, first-line resolution with no escalation. It wasn't glamorous. But every call taught me something no tutorial can: how to understand what the user actually needs, not what they describe. That's the same skill I apply today to understand requirements before writing a single line.",
      "In parallel, I trained in systems and networking — Cisco CCNA and Linux certifications. I understood how machines worked from the inside. But curiosity pushed me further: I wanted to understand how things work at a deeper level. And I discovered something that changed my direction — you don't truly understand how a computer works until you program.",
      "That was the turning point. I enrolled in Application Development. And from my very first project I decided I didn't want to write code that merely worked — I wanted to build software designed for production, not for passing.",
      "The result was Infratrack — an enterprise-grade system designed and built from scratch, with no team and no guidance. Hexagonal architecture, 91 tests, AES-256-GCM encryption, CI/CD green. Not because it was required. Because I believe that's how software should be built.",
      "Everything your team would need to teach a junior — understanding users, thinking in systems, working autonomously — I learned before writing my first class.",
    ],
  },
} as const;

export const APPROACH = {
  es: {
    sectionLabel: "Cómo trabajo",
    sectionTitle: "Lo que tu equipo recibe",
    principles: [
      {
        title: "Arquitectura con intención",
        description:
          "Pienso en la estructura antes de escribir la primera línea. La arquitectura se adapta al problema — no al revés. El dominio manda, el framework sirve.",
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
        title: "Ownership de principio a fin",
        description:
          "No entrego código y me desentiendo. Entiendo el camino completo: Docker, CI/CD, Linux, despliegue. Lo que construyo, lo pongo en producción.",
      },
      {
        title: "Código que se explica solo",
        description:
          "Escribo para el siguiente developer que lo lea. Nombres claros, responsabilidades separadas, estructura predecible.",
      },
      {
        title: "IA con criterio de ingeniero",
        description:
          "Dirijo herramientas de IA con arquitectura definida, restricciones claras y revisión de cada línea. Multiplico la velocidad sin delegar las decisiones. Esta web la construí así.",
      },
    ],
  },
  en: {
    sectionLabel: "How I work",
    sectionTitle: "What your team gets",
    principles: [
      {
        title: "Architecture with intention",
        description:
          "I think about structure before writing the first line. Architecture adapts to the problem — not the other way around. The domain leads, the framework serves.",
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
        title: "End-to-end ownership",
        description:
          "I don't hand off code and walk away. I understand the full path: Docker, CI/CD, Linux, deployment. What I build, I ship to production.",
      },
      {
        title: "Self-documenting code",
        description:
          "I write for the next developer who reads it. Clear naming, separated concerns, predictable structure.",
      },
      {
        title: "AI with engineering judgment",
        description:
          "I direct AI tools with defined architecture, clear constraints, and line-by-line review. I multiply speed without delegating decisions. I built this site that way.",
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
    sectionTitle: "No lo digo — lo demuestro",
    items: [
      {
        slug: "infratrack",
        title: "Infratrack",
        description:
          "Sistema de inventario y monitorización de infraestructura IT. Fuente única de verdad para activos, credenciales y métricas en tiempo real.",
        connection:
          "Todo lo que dije arriba, aplicado en un solo proyecto. Sin equipo, sin guía de empresa, sin excusas.",
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
    sectionTitle: "I don't just say it — I prove it",
    items: [
      {
        slug: "infratrack",
        title: "Infratrack",
        description:
          "IT infrastructure inventory and monitoring system. Single source of truth for assets, credentials, and real-time metrics.",
        connection:
          "Everything I said above, applied in one project. No team, no company guidance, no excuses.",
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
    sectionLabel: "Siguiente paso",
    sectionTitle: "Estoy disponible ahora.",
    description:
      "Un developer con doble formación, experiencia real con usuarios, y un proyecto enterprise-grade construido de cero. Si eso encaja con lo que buscas, el siguiente paso es tuyo.",
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
    sectionLabel: "Next step",
    sectionTitle: "I'm available now.",
    description:
      "A developer with dual training, real experience with users, and an enterprise-grade project built from scratch. If that fits what you're looking for, the next step is yours.",
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
      { label: "Mi historia", href: "#about" },
      { label: "Cómo trabajo", href: "#approach" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  en: {
    links: [
      { label: "My story", href: "#about" },
      { label: "How I work", href: "#approach" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
} as const;