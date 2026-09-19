# HerbSearch

A Next.js + React app for searching and browsing a database of herbs, their traditional uses, and properties.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Prisma](https://www.prisma.io) ORM with SQLite for local development (swap the `DATABASE_URL` in `.env` and the datasource provider in `prisma/schema.prisma` to point at Postgres/Supabase for production)

## Getting started

Install dependencies:

```bash
npm install
```

Apply migrations and seed the database with sample herb data:

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
