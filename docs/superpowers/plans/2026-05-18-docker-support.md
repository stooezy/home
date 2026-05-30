# Docker Support for Production Deployment — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Dockerfile, docker-compose, and supporting config to containerize the TanStack Start app for production deployment.

**Architecture:** Multi-stage Docker build — Stage 1 builds the app in a full Node/pnpm image, Stage 2 copies only the built `dist/` output and production deps into a slim Node image. Docker Compose orchestrates the container with port mapping, health checks, and env vars. Nginx is unnecessary here — the app's built-in `srvx` server handles SSR and static assets.

**Tech Stack:** Docker, Docker Compose, Node.js 24, pnpm 10, TanStack Start (srvx server)

---

### Task 1: Create `.dockerignore`

**Files:**
- Create: `.dockerignore`

- [ ] **Step 1: Write `.dockerignore`**

```
node_modules
dist
.cache
.env
.vercel
.output
.git
.gitignore
*.md
.vscode
.devcontainer
.DS_Store
```

- [ ] **Step 2: Verify it excludes the right files**

Run: `tar -czf - --exclude-from=.dockerignore . 2>/dev/null | tar -tzf - | sort`
Expected: no `node_modules/`, `dist/`, `.git/` entries

- [ ] **Step 3: Commit**

```bash
git add .dockerignore
git commit -m "feat: add .dockerignore for Docker builds"
```

---

### Task 2: Create Multi-Stage Dockerfile

**Files:**
- Create: `Dockerfile`

- [ ] **Step 1: Write the Dockerfile**

```dockerfile
# Stage 1: Build
FROM node:24-alpine AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc* ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod false

COPY . .

RUN pnpm build

# Stage 2: Production
FROM node:24-alpine AS runner

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./
COPY --from=builder /app/dist ./dist

# Install only production deps (for srvx to run)
RUN corepack enable && corepack prepare pnpm@latest --activate && \
    pnpm install --frozen-lockfile --prod

EXPOSE 3000

# Health check uses existing API route
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/users || exit 1

CMD ["pnpm", "start"]
```

- [ ] **Step 2: Build the image to verify it compiles**

Run: `docker build -t dymple-home:latest .`
Expected: image builds successfully through both stages

- [ ] **Step 3: Run the container and smoke-test**

Run: `docker run --rm -d --name dymple-test -p 3000:3000 dymple-home:latest && sleep 5 && curl -s http://localhost:3000 | head -20 && curl -s http://localhost:3000/api/users | head -50 && docker stop dymple-test`
Expected: HTML from `/`, JSON array from `/api/users`

- [ ] **Step 4: Commit**

```bash
git add Dockerfile
git commit -m "feat: add multi-stage Dockerfile for production builds"
```

---

### Task 3: Create Docker Compose File

**Files:**
- Create: `docker-compose.yml`

- [ ] **Step 1: Write `docker-compose.yml`**

```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: dymple-home
    ports:
      - "${PORT:-3000}:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000/api/users"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
    deploy:
      resources:
        limits:
          memory: 256M
        reservations:
          memory: 128M
```

- [ ] **Step 2: Test docker-compose up**

Run: `docker compose up -d && sleep 5 && docker compose ps && curl -sf http://localhost:3000/api/users && docker compose down`
Expected: container shown as healthy in `ps`, JSON users array from curl

- [ ] **Step 3: Commit**

```bash
git add docker-compose.yml
git commit -m "feat: add docker-compose for production orchestration"
```

---

### Task 4: Add `.env.example` for Portability

**Files:**
- Create: `.env.example`

- [ ] **Step 1: Write `.env.example`**

```
# Server port (used by docker-compose and the app)
PORT=3000
```

- [ ] **Step 2: Commit**

```bash
git add .env.example
git commit -m "chore: add .env.example with default port"
```

---

### Task 5: Verify `.env` is in `.gitignore`

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Check current `.gitignore`**

Run: `cat .gitignore`
Expected: `.env` already present (it is — verified during codebase analysis)

- [ ] **Step 2: No changes needed**

If `.env` is already in `.gitignore` (confirmed: line contains `.env`), skip commit.

---

### Task 6: End-to-End Verification

- [ ] **Step 1: Full clean build from scratch**

```bash
docker compose down --rmi all 2>/dev/null; docker compose up -d --build
```

Expected: builds Stage 1, builds Stage 2, container starts healthy

- [ ] **Step 2: Test key routes**

```bash
curl -sf http://localhost:3000/           # HTML home page
curl -sf http://localhost:3000/api/users  # JSON API response
```

Expected: both return 200 with correct content

- [ ] **Step 3: Verify health check is working**

```bash
docker inspect dymple-home --format='{{json .State.Health}}' | jq .
```

Expected: `"Status": "healthy"`

- [ ] **Step 4: Tear down**

```bash
docker compose down
```

- [ ] **Step 5: Commit any final tweaks**

```bash
git status
# Only commit if .gitignore or other files changed during verification
```
