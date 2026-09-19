# HerbSearch

A Next.js + React app for searching and browsing a database of herbs, their traditional uses, and properties.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Prisma](https://www.prisma.io) ORM with PostgreSQL

## Getting started

Install dependencies (this also runs `prisma generate` via `postinstall`):

```bash
npm install
```

Point `DATABASE_URL` in `.env` at a local Postgres instance, then apply
migrations and seed the database with sample herb data:

```bash
npx prisma migrate dev
npx prisma db seed
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to search and browse herbs.

## Data model

Herbs are defined in `prisma/schema.prisma` (name, scientific name, category, summary, uses, properties, cautions). Sample data lives in `prisma/seed.ts`.

## Deploying

`npm run build` runs `prisma migrate deploy` before `next build`, so pointing
`DATABASE_URL` at a production Postgres database (e.g. Vercel Postgres, Neon,
or Supabase) and deploying on a platform that runs that script — such as
Vercel — will provision the schema automatically on first deploy.
