export type Experience = {
  company: string
  role: string
  period: string
  description: string
  href?: string
  tech?: string[]
}

export type Project = {
  name: string
  role: string
  period?: string
  description: string
  href?: string
  tech?: string[]
}

export type SkillCategory = {
  label: string
  items: string[]
}

export const experience: Experience[] = [
  {
    company: "Vivere",
    role: "Software Engineer",
    period: "2023 – Now",
    description:
      "Leading a Laravel-to-Go backend migration for improved performance and maintainability across published web applications. Built CI/CD pipelines from scratch for automated deployment and release management. Instrumented analytics across web apps and servers to drive data-informed product decisions.",
    tech: ["Go", "Laravel", "PostgreSQL", "Docker", "CI/CD"],
  },
  {
    company: "Brandztory",
    role: "Software Engineer",
    period: "2022 – 2023",
    description:
      "Architected a production-grade project boilerplate adopted across the engineering team, reducing spin-up time for new projects. Rebuilt the company website with Next.js and TypeScript, achieving significant performance gains over the legacy stack. Maintained and shipped features across published web and Android applications.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Kotlin"],
  },
  {
    company: "WIT Indonesia",
    role: "Front End Developer",
    period: "2019 – 2022",
    description:
      "Delivered 6+ client projects concurrently — internal tools, marketing sites, and dashboards. Established the frontend department's development standards and a shared component library used across projects. Collaborated directly with business analysts, UI/UX designers, and DevOps to ship on time and to spec.",
    tech: ["Vue.js", "Nuxt.js", "JavaScript", "PHP"],
  },
  {
    company: "Digital Asia Indonesia",
    role: "Mobile Developer",
    period: "2018 – 2019",
    description:
      "Built and shipped web and mobile applications from concept to production. Owned the full deployment lifecycle — development, testing, Play Store submission, and post-launch monitoring. Worked closely with UI/UX and engineering to deliver polished, user-facing products.",
    tech: ["Android", "Kotlin", "Java", "Web"],
  },
  {
    company: "Smartek Sistem Indonesia",
    role: "Intern Fullstack Developer",
    period: "2017 – 2018",
    description:
      "Mentored junior interns in full-stack web development, conducting code reviews and pair programming. Delivered web and mobile applications end-to-end across the stack. Conducted on-site user training and support sessions, turning direct feedback into product improvements.",
    tech: ["PHP", "JavaScript", "MySQL", "Android"],
  },
]

export const projects: Project[] = [
  {
    name: "Dengan Senang Hati",
    role: "Mobile Developer",
    period: "2023 – 2024",
    description:
      "Cross-platform mobile app for a community-driven initiative. Built with Flutter and Firebase — real-time features, user authentication, and serverless cloud functions. End-to-end from requirements through Play Store submission.",
    tech: ["Flutter", "Dart", "Firebase"],
  },
  {
    name: "Zero Code",
    role: "Mobile Developer",
    period: "2022 – 2023",
    description:
      "Mobile application developed for a freelance client. Full-cycle delivery — requirements gathering, development, testing, and deployment.",
    tech: ["Android", "Kotlin"],
  },
  {
    name: "Gits Indonesia",
    role: "Mobile Developer",
    description:
      "Freelance projects for multiple clients: a company profile app for PT Sarivita, the Ayoma platform, and an internal dashboard for Beedoor. Delivered on tight timelines with cross-functional stakeholder coordination.",
    tech: ["Android", "Kotlin", "Web"],
  },
  {
    name: "Treasury",
    role: "Developer",
    description:
      "Android application for treasury and financial transaction management. Handled local data persistence, reporting exports, and a clean offline-first architecture.",
    tech: ["Android", "Java", "SQLite"],
  },
  {
    name: "DigiExpert",
    role: "Developer",
    description:
      "Web application for digital expertise matching and consulting. Built responsive frontend with modern tooling and integrated backend APIs for real-time search and booking.",
    tech: ["React", "JavaScript", "REST APIs"],
  },
  {
    name: "Cari Aja",
    role: "Developer",
    description:
      "Android application for local service discovery and booking. Implemented location-aware search, user reviews, and a streamlined checkout flow.",
    tech: ["Android", "Kotlin"],
  },
  {
    name: "Travoy",
    role: "Developer",
    description:
      "Android transportation app with real-time tracking and route optimization. Integrated mapping APIs and built a responsive UI for commuter workflows.",
    tech: ["Android", "Java", "Google Maps API"],
  },
  {
    name: "Lakkon Marketplace",
    role: "Developer",
    description:
      "Web marketplace platform connecting buyers and sellers. Built product listing, search, cart, and order management features with a responsive UI.",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
]

export const skills: SkillCategory[] = [
  {
    label: "languages",
    items: ["JavaScript", "TypeScript", "Go", "Lua", "PHP", "Kotlin"],
  },
  {
    label: "frameworks & libraries",
    items: [
      "React",
      "Vue.js",
      "Next.js",
      "Nuxt.js",
      "Tailwind CSS",
      "Laravel",
      "TanStack Start",
    ],
  },
  {
    label: "databases & infra",
    items: ["PostgreSQL", "MySQL", "Redis", "Docker"],
  },
  {
    label: "tools & practices",
    items: [
      "Git",
      "CI/CD",
      "Analytics",
      "Agile",
      "Code Review",
    ],
  },
]
