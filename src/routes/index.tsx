import { createFileRoute } from "@tanstack/react-router";
import { experience, skills } from "~/data/portfolio";
import { PortfolioItem } from "~/components/commons/portfolio-item";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {

  return (
    <div className="space-y-0">
      {/* Hero */}
      <header className="mb-16 space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-balance mb-4 animate-fade-in">
          <span className="inline-block">yoga permana</span>
        </h1>
        <p className="text-muted-foreground animate-fade-in">
          software engineer · cimahi, Indonesia
        </p>
        <p className="text-pretty max-w-[52ch] animate-fade-in-up text-foreground/80">
          full-stack engineer with 7+ years building web and mobile products.
          i ship performant, maintainable software — from marketplace platforms
          and internal dashboards to Android apps. backend migrations, CI/CD
          pipelines, frontend standards — i take ownership end-to-end.
        </p>
        <div className="flex gap-4 pt-2 animate-fade-in-up">
          <a
            href="mailto:yopernurr@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            get in touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            resume
          </a>
        </div>
      </header>

      {/* Work */}
      <section id="work" className="mb-12 pt-10 border-t animate-fade-in-up">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-primary mr-2">*</span>work
          </h2>
        </div>
        <div className="space-y-2">
          {experience.map((exp) => (
            <PortfolioItem
              key={exp.company}
              title={exp.company}
              subtitle={`${exp.role} · ${exp.period}`}
              description={exp.description}
              href={exp.href}
              tech={exp.tech}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-12 pt-10 border-t animate-fade-in-up">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center">
            <span className="text-primary mr-2">*</span>skills
          </h2>
        </div>
        <div className="space-y-4">
          {skills.map((category) => (
            <div key={category.label}>
              <p className="text-sm text-muted-foreground mb-2">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm border rounded-full text-foreground/70 border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
