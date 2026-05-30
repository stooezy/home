# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Dev server on port 3000
pnpm build        # Vite build + tsc --noEmit typecheck
pnpm preview      # Preview production build
pnpm start        # Production: srvx server from dist/server/server.js
```

No test runner or linter is configured yet.

## Architecture

**TanStack Start** (SSR framework) with **TanStack Router** (file-based) and **TanStack Query** for data fetching.

- Entry point: `src/router.tsx` — creates QueryClient + Router with route tree and SSR query integration
- Route tree: `src/routeTree.gen.ts` — auto-generated, never edit manually
- Root route: `src/routes/__root.tsx` — HTML shell, meta/SEO tags, theme provider, error boundaries, devtools
- Path alias: `~/` → `src/`

### Routing

File-based routes under `src/routes/`. Conventions:
- `__root.tsx` — root layout with providers
- `_pathlessLayout.tsx` — layout group (no URL segment), renders `<Outlet />`
- `posts.route.tsx` / `users.route.tsx` — layout routes (prefix segment, wraps children)
- `posts.index.tsx` — `/posts` (index under layout)
- `posts.$postId.tsx` — `/posts/:postId` (dynamic param)
- `posts_.$postId.deep.tsx` — `/posts/:postId/deep` (flat layout escape)

API routes in `src/routes/api/` — `.ts` files (not `.tsx`), return raw data:
- `api/users.ts` — `GET /api/users`
- `api/users.$id.ts` — `GET /api/users/:id`

### Data fetching

Server functions defined via `createServerFn` from `@tanstack/react-start` (e.g., `src/utils/posts.tsx`). Wrapped in TanStack Query `queryOptions` for client-side caching. Uses `redaxios` for HTTP.

### UI

**shadcn/ui** (Base theme) + **Tailwind CSS v4** + **CSS variables** for theming. All UI primitives in `src/components/ui/`. `cn()` helper in `src/lib/utils.ts` (clsx + tailwind-merge).

**Theme**: `src/components/theme-provider.tsx` — dark/light/system via localStorage + CSS class. FOUC prevention script inlined via `<ScriptOnce>`. Mode toggle in navbar.

**Styling**: Monospace font (JetBrains Mono) globally. Green primary palette (oklch). Zinc neutral. `src/styles/app.css` — Tailwind imports + shadcn CSS + theme variables.

### Component convention

`src/components/commons/` — app-level shared components (NavBar, Main layout wrapper). `src/components/ui/` — shadcn primitives (button, dialog, table, etc.).
