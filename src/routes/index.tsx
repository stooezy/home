import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const experience = [
  {
    company: "Vivere",
    role: "Software Engineer",
    period: "2023 – Now",
    description:
      "Maintenance of published web applications. Migrating backend from Laravel to Golang. Implementing Continuous Delivery and analytics for web apps and servers.",
    href: "#",
  },
  {
    company: "Brandztory",
    role: "Software Engineer",
    period: "2022 – 2023",
    description:
      "Built boilerplate for web projects. Rebuilt company website with enhanced performance using modern tooling. Maintained published web and Android apps.",
    href: "#",
  },
  {
    company: "WIT Indonesia",
    role: "Front End Developer",
    period: "2019 – 2022",
    description:
      "Delivered multiple projects simultaneously. Created boilerplates and development standards for the Frontend Department. Collaborated with BA, UI/UX, and DevOps teams.",
    href: "#",
  },
  {
    company: "Digital Asia Indonesia",
    role: "Mobile Developer",
    period: "2018 – 2019",
    description:
      "Collaborated with UI/UX and engineering teams to deliver web and mobile applications. Managed end-to-end app deployment from development to production.",
    href: "#",
  },
  {
    company: "Smartek Sistem Indonesia",
    role: "Intern Fullstack Developer",
    period: "2017 – 2018",
    description:
      "Mentored junior interns. Collaborated cross-functionally to deliver web and mobile apps. Engaged directly with users for application training and support.",
    href: "#",
  },
];

const projects = [
  {
    name: "Dengan Senang Hati",
    role: "Mobile Developer",
    period: "2023 – 2024",
    description: "Freelance mobile application development.",
    href: "#",
  },
  {
    name: "Zero Code",
    role: "Mobile Developer",
    period: "2022 – 2023",
    description: "Freelance mobile application development.",
    href: "#",
  },
  {
    name: "Gits Indonesia",
    role: "Mobile Developer",
    description:
      "Freelance projects including Company Profile PT Sarivita, Ayoma, Dashboard Beedoor.",
    href: "#",
  },
  {
    name: "Treasury",
    role: "Developer",
    description: "Android application for treasury management.",
    href: "#",
  },
  {
    name: "DigiExpert",
    role: "Developer",
    description: "Web application development.",
    href: "#",
  },
  {
    name: "Cari Aja",
    role: "Developer",
    description: "Android application development.",
    href: "#",
  },
  {
    name: "Travoy",
    role: "Developer",
    description: "Android transportation application.",
    href: "#",
  },
  {
    name: "Lakkon Marketplace",
    role: "Developer",
    description: "Web marketplace platform development.",
    href: "#",
  },
];

const skills = {
  languages: ["JavaScript", "TypeScript", "Go", "Lua", "PHP"],
  frameworks: [
    "ReactJS",
    "VueJS",
    "NextJS",
    "NuxtJS",
    "Tailwind CSS",
    "Laravel",
  ],
  tools: ["Git", "Continuous Delivery", "Analytics"],
};

function Home() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <header className="mb-16 space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-balance mb-4 animate-fade-in">
          <span className="inline-block">yoga permana</span>
        </h1>
        <p className="text-muted-foreground animate-fade-in">
          software engineer · cimahi, indonesia
        </p>
        <p className="text-pretty max-w-[52ch] animate-fade-in-up text-foreground/80">
          passionate full-stack engineer with deep experience across frontend
          and backend development. i love building things — from mobile apps to
          internal dashboards. quick to adapt, always learning, and focused on
          delivery.
        </p>
      </header>

      {/* Work */}
      <section className="mb-12 pt-10 border-t animate-fade-in-up">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-primary mr-2">*</span>work
          </h2>
        </div>
        <div className="space-y-2">
          {experience.map((exp) => (
            <a
              key={exp.company}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg p-4 -mx-4 hover:bg-accent/10 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.role}
                    <span className="text-muted-foreground/60">
                      {" "}· {exp.period}
                    </span>
                  </p>
                  <p className="text-foreground/70 mt-2 text-pretty">
                    {exp.description}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12 pt-10 border-t animate-fade-in-up">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-primary mr-2">*</span>projects
          </h2>
        </div>
        <div className="space-y-2">
          {projects.slice(0, 5).map((proj) => (
            <a
              key={proj.name}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg p-4 -mx-4 hover:bg-accent/10 transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                    {proj.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {proj.role}
                    {proj.period && (
                      <span className="text-muted-foreground/60">
                        {" "}· {proj.period}
                      </span>
                    )}
                  </p>
                  <p className="text-foreground/70 mt-2 text-pretty">
                    {proj.description}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1.5 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12 pt-10 border-t animate-fade-in-up">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-primary mr-2">*</span>skills
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">languages</p>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-sm border rounded-full text-foreground/70 border-border"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              frameworks & tools
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="px-3 py-1 text-sm border rounded-full text-foreground/70 border-border"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Elsewhere */}
      <section className="mt-4 pt-10 pb-16 border-t animate-fade-in-up">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="text-primary mr-2">*</span>elsewhere
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href="mailto:yopernurr@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            email
          </a>
          <a
            href="https://github.com/dymple"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/yopernurr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            linkedin
          </a>
        </div>
      </section>
    </div>
  );
}
