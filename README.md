# Yoga Permana — Portfolio

Personal portfolio and resume site built with modern tooling. Showcases work experience, projects, and skills.

**Tech stack:** TanStack Start, React 19, TypeScript, Tailwind CSS v4, shadcn/ui

- [yogapermana.dev](https://yogapermana.dev) (or wherever it's deployed)

## Getting Started

```sh
pnpm install
pnpm dev        # Dev server on http://localhost:3000
pnpm build      # Production build + typecheck
pnpm preview    # Preview production build
pnpm start      # Production server
```

## Project Structure

```
src/
  routes/          # File-based routes (TanStack Router)
  components/      # UI primitives (shadcn/ui) + app components
  data/            # Portfolio content — experience, projects, skills
  utils/           # Server functions, SEO helpers
  styles/          # Tailwind + theme variables
```

Content lives in `src/data/portfolio.ts` — experience, projects, and skills are all defined there as typed data.
