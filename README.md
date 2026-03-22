# ori_cruit FullHub 2.0

Full stack monorepo for ori_cruit recruiting suite.

## Structure
- `essentials/` - UI static copies from original dark/light theme prototypes.
- `apps/hub-api` - NestJS backend with Prisma and auth.
- `apps/hub-web` - Next.js frontend.

## Quick start
1. Install dependencies: `pnpm install` (or `npm install`).
2. Start local Postgres and app stack:
   - `docker compose up -d postgres` (or `docker compose up -d` for full stack)
3. Initialize backend and seed default admin user:
   - `cd apps/hub-api`
   - `pnpm prisma generate`
   - `pnpm prisma migrate dev --name init --skip-seed`
   - `pnpm exec ts-node prisma/seed.ts`
   - (backend now also auto-upserts default admin on startup: `admin@oricruit.local / Admin@123`)
4. Run in dev mode: `pnpm dev`
5. Open frontend: http://localhost:3000 (API at http://localhost:3001)

## Docker (recommended)
`docker compose up --build`

## Seeding
`pnpm --filter hub-api prisma db seed` (after migrations).

## Notes
- API endpoints: `GET /candidates`, `POST /candidates`, `PATCH /candidates/:id`, `POST /auth/login`
- Frontend includes candidate listing/create and login screen.
