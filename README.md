# LUMENÉ Full-Stack Monorepo

LUMENÉ is a fashion portfolio platform for a final-year contemporary womenswear collection. The repo is now organized as a clean two-app setup: a Next.js frontend and an Express + Prisma backend, with Docker PostgreSQL for local development.

## Monorepo Layout

```text
Fashion-Designer-Portfolio/
├── frontend/              # Next.js App Router portfolio
├── backend/               # Express + TypeScript + Prisma API
├── docs/                  # Audit and supporting documentation
├── docker-compose.yml     # Local PostgreSQL
└── package.json           # Convenience scripts
```

## Tech Stack

- Frontend: Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, TypeScript, Prisma
- Database: PostgreSQL 16
- Local infrastructure: Docker Compose

## Local Setup

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Start PostgreSQL:

```bash
docker-compose up -d
```

4. Create environment files from the examples:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local
```

Frontend API base URL:

```bash
NEXT_PUBLIC_API_URL="http://localhost:5001/api"
```

5. Run Prisma migration and seed:

```bash
cd backend
npm run prisma:migrate
npm run prisma:seed
```

## Run The Apps

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend
npm run dev
```

Convenience commands from the repo root:

```bash
npm run dev:frontend
npm run dev:backend
npm run db:up
npm run db:down
npm run db:logs
npm run backend:migrate
npm run backend:seed
npm run backend:studio
```

## Phase 2 Frontend Integration

The frontend now consumes backend API data for:

- Homepage featured collection, lookbook, process items, and contact/PDF links
- `/portfolio`
- `/portfolio/[slug]`
- `/pricing`

Fallback behavior is intentionally preserved:

- If the backend is unavailable, the frontend falls back to the existing local portfolio data in `frontend/lib/looks.ts`, `frontend/lib/pricing.ts`, and static editorial copy.
- This keeps the portfolio buildable and viewable even when the Express server is down.

## Backend Verification Commands

With Docker Postgres running and `backend/.env` configured:

```bash
cd backend
npm run prisma:generate
npm run prisma:validate
npm run prisma:migrate
npm run prisma:seed
npm run build
npm run dev
```

API smoke tests:

```bash
curl -s http://localhost:5001/api/health
curl -s http://localhost:5001/api/collection/lumene
curl -s http://localhost:5001/api/looks
curl -s http://localhost:5001/api/looks/look-01
curl -s http://localhost:5001/api/pricing
curl -s http://localhost:5001/api/process
curl -s http://localhost:5001/api/site-settings
curl -s -X POST http://localhost:5001/api/enquiries \
  -H "Content-Type: application/json" \
  -d '{"name":"Sample User","email":"sample@example.com","message":"I would like to request a portfolio viewing.","interestType":"PORTFOLIO_VIEWING"}'
```

## Troubleshooting

- If Prisma cannot connect, confirm Docker is running and `lumene-postgres` is healthy.
- If port `5432` is already in use, stop the existing PostgreSQL service or change the host port in `docker-compose.yml` and `DATABASE_URL`.
- If port `5001` is already in use, update `backend/.env`.
- If frontend assets appear missing after the move, make sure you are running Next.js from `frontend/`.

## Existing Documentation

- Frontend content audit: [docs/frontend-content-audit.md](docs/frontend-content-audit.md)
- Frontend app notes: [frontend/README.md](frontend/README.md)
- Backend setup details: [backend/README.md](backend/README.md)
