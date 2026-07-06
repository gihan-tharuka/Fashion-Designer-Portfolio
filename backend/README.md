# LUMENÉ Backend

Phase 1 backend foundation for the LUMENÉ portfolio. This backend preserves the existing frontend content and exposes it through a small public API built with Express, TypeScript, Prisma, and PostgreSQL.

## Stack

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- dotenv
- cors
- helmet
- morgan
- zod

## Project Structure

```text
backend/
  prisma/
    schema.prisma
    seed.ts
  prisma.config.ts
  src/
    config/
    controllers/
    lib/
    middleware/
    routes/
    services/
    app.ts
    server.ts
  .env.example
  package.json
  tsconfig.json
```

## Environment Variables

Copy `.env.example` to `.env` and set:

```bash
DATABASE_URL=
PORT=
NODE_ENV=
FRONTEND_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_SECRET=
JWT_EXPIRES_IN=
```

Required:

- `DATABASE_URL`: PostgreSQL connection string for Prisma
- `PORT`: backend port, for example `4001`
- `NODE_ENV`: `development`, `test`, or `production`
- `FRONTEND_URL`: allowed CORS origin for the existing Next.js frontend
- `ADMIN_EMAIL`: seeded admin login email
- `ADMIN_PASSWORD`: seeded admin login password
- `JWT_SECRET`: signing secret for admin JWTs
- `JWT_EXPIRES_IN`: token lifetime, for example `7d`

## Install

```bash
cd backend
npm install
```

## Prisma Commands

```bash
npm run prisma:generate
npm run prisma:validate
npm run prisma:migrate
npm run prisma:seed
npm run prisma:studio
```

## Development

```bash
npm run dev
```

## Build And Start

```bash
npm run build
npm run start
```

## Seed Data

The seed script preserves current frontend content from the existing project:

- `frontend/lib/looks.ts`
- `frontend/lib/pricing.ts`
- homepage/contact/process content mirrored into `src/config/seed-data.ts`

Seeded records include:

- 1 collection: `lumene`
- 6 looks using existing slugs `look-01` to `look-06`
- look images
- look materials
- look tags
- garments and garment costing
- process items
- designer profile
- skills and creative interests
- site settings and contact details
- 1 admin user using `ADMIN_EMAIL` and `ADMIN_PASSWORD`

## Admin Auth

Phase 3 adds a lightweight admin authentication foundation for the future CMS phase.

- Passwords are hashed with `bcryptjs`
- Admin sessions use JWT bearer tokens
- Only the `ADMIN` role exists in this phase
- `passwordHash` is never returned in API responses

Test admin credentials come from your local `.env`:

```bash
ADMIN_EMAIL="admin@lumene.local"
ADMIN_PASSWORD="ChangeMe123!"
```

## API Routes

All routes are under `/api`.

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Health check |
| `GET` | `/api/collection/lumene` | Collection metadata and related look summaries |
| `GET` | `/api/looks` | All looks in display order |
| `GET` | `/api/looks/:slug` | Single look detail with images, tags, materials, garments, and previous/next navigation |
| `GET` | `/api/pricing` | Pricing archive across all looks and garments |
| `GET` | `/api/process` | Process timeline and supporting content items |
| `GET` | `/api/site-settings` | Global site settings and designer profile |
| `POST` | `/api/enquiries` | Create a new enquiry |
| `POST` | `/api/auth/login` | Admin login and JWT issuance |
| `GET` | `/api/auth/me` | Current authenticated admin |
| `GET` | `/api/admin/dashboard` | Protected admin dashboard stats |
| `GET` | `/api/admin/enquiries` | Protected read-only enquiry list |

## Response Format

Success:

```json
{
  "success": true,
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "..."
}
```

## Validation And Error Handling

- `zod` validates route params and enquiry payloads
- `zod` validates admin login payloads
- not-found middleware returns `404`
- centralized error middleware returns consistent error responses
- missing looks and collections return `404`
- protected admin routes return `401` for missing or invalid tokens

## Admin Endpoint Smoke Test

```bash
curl -s -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@lumene.local","password":"ChangeMe123!"}'
```

Then pass the returned token:

```bash
curl -s http://localhost:5001/api/auth/me \
  -H "Authorization: Bearer <token>"

curl -s http://localhost:5001/api/admin/dashboard \
  -H "Authorization: Bearer <token>"

curl -s http://localhost:5001/api/admin/enquiries \
  -H "Authorization: Bearer <token>"
```

## Modeling Notes

- One `Collection` has many `Look` records
- One `Look` has many `LookImage`, `LookMaterial`, `LookTag`, and `Garment` records
- One `Garment` has one `GarmentCosting`
- money fields are stored as nullable `Decimal`
- values like `To be finalised` and `Price on request` are represented with `PriceStatus` enums
- local image URLs such as `/images/website/look1.jpg` are preserved for Phase 1

## Future Phase Notes

Current backend intentionally does not include:

- full admin CRUD
- checkout or ecommerce
- media uploads
- frontend refactors
- role management beyond `ADMIN`

Good next steps for Phase 4:

- add admin CRUD for looks, pricing, process items, and site settings
- move admin auth to httpOnly cookie sessions if desired
- add enquiry status updates and notes
- add media uploads and asset management
