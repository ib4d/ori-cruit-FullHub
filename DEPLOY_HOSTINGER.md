# Hostinger Deployment (Cloud VPS / Docker)

1. Create a Hostinger VPS (Linux) and connect via SSH.
2. Install Docker and Docker Compose (`sudo apt update && sudo apt install docker.io docker-compose -y`).
3. Clone repo:
   - `git clone <repo-url>` and `cd ori-cruit-fullhub2.0`
4. Add environment values in `.env` file (or directly in compose):
   - `DATABASE_URL=postgresql://postgres:postgres@postgres:5432/hubdb?schema=public`
   - `JWT_SECRET=supersecret`
5. Start stack:
   - `docker compose up -d --build`
6. Initialize DB migrations and seed (optional local run for first time):
   - `docker compose exec hub-api pnpm prisma migrate deploy`
   - `docker compose exec hub-api pnpm prisma db push` (or `pnpm prisma migrate dev --name init`)
   - `docker compose exec hub-api pnpm ts-node prisma/seed.ts`
7. Configure reverse proxy (Nginx) to serve:
   - `http://your-domain` → hub-web at port 3000
   - `http://your-domain/api` → hub-api at 3001 (using proxy pass).

## Notes
- hub-web uses `NEXT_PUBLIC_API_BASE_URL` to connect to hub-api. In Docker compose it is `http://hub-api:3001`.
- You can use an external managed Postgres service if desired by changing `DATABASE_URL`.
- For auto TLS, use `certbot`/Nginx or Hostinger's built-in SSL.
