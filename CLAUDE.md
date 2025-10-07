# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Crawford Ranch website - a full-stack Express + React + Vite application for a ranch event venue. The app showcases the ranch property, allows visitors to browse galleries and events, and provides a contact form for event inquiries.

## Tech Stack

- **Frontend**: React 18 with Wouter (routing), TanStack Query, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL via Drizzle ORM (configured for Neon serverless)
- **Build**: Vite (client), esbuild (server), tsx (development)
- **Deployment**: Vercel (configured for production)

## Essential Commands

### Development
```bash
npm run dev          # Start development server (port 5000) - runs both client and API
npm run check        # Type-check TypeScript files
```

### Build & Deploy
```bash
npm run build        # Build both client (Vite) and server (esbuild)
npm start            # Run production server
```

### Database
```bash
npm run db:push      # Push database schema changes via Drizzle Kit
```

## Architecture

### Project Structure

```
client/               # React frontend (Vite root)
  src/
    pages/           # Route components (home, about, events, gallery, etc.)
    components/      # Reusable components
      ui/            # shadcn/ui components
      icons/         # Custom icon components
    lib/             # Utilities (queryClient, utils)
    hooks/           # Custom React hooks
    main.tsx         # React entry point
    App.tsx          # Router configuration
    index.css        # Global styles
  public/            # Static assets (sitemap, robots.txt, manifest)
  index.html         # HTML template

server/              # Express backend
  index.ts           # Server entry point, middleware setup
  routes.ts          # API route registration (/api/contact endpoints)
  storage.ts         # Storage interface and MemStorage implementation
  vite.ts            # Vite dev server integration

shared/              # Code shared between client and server
  schema.ts          # Drizzle schema definitions and Zod validators

attached_assets/     # Ranch images and documents (accessible via @assets alias)
```

### Key Architecture Patterns

**Full-Stack Integration**: Single Express server serves both API routes and the Vite dev server (development) or static files (production). Always runs on port 5000.

**Storage Layer**: Abstract `IStorage` interface in `server/storage.ts` allows swapping between in-memory storage (`MemStorage` - currently used) and future database implementations without changing API logic.

**Shared Schema**: Database schemas and validation logic in `shared/schema.ts` are used by both client and server via path aliases (`@shared/*`). Drizzle ORM generates TypeScript types and Zod schemas.

**Path Aliases**:
- `@/*` → `client/src/*` (client-side imports)
- `@shared/*` → `shared/*` (shared between client/server)
- `@assets/*` → `attached_assets/*` (static assets)

**Client Routing**: Wouter handles SPA routing with routes defined in `client/src/App.tsx`.

**API Endpoints**: All API routes prefixed with `/api/` (see `server/routes.ts`):
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact` - Retrieve all inquiries (admin)

**Environment-Specific Behavior**: Development mode enables Vite dev server and hot module replacement. Production serves pre-built static files from `dist/public`.

### Important Implementation Details

- **Database**: Drizzle config points to PostgreSQL (`drizzle.config.ts`). Schema includes `users` and `contactInquiries` tables. Currently using in-memory storage, but Drizzle is configured for future database integration.

- **Contact Form**: Client submits to `/api/contact`, validated against `insertContactInquirySchema` with Zod, stored via storage layer.

- **Component Library**: Heavy use of shadcn/ui (Radix UI primitives + Tailwind). Components in `client/src/components/ui/`.

- **Styling**: Tailwind CSS with custom configuration, shadcn/ui theming, and tw-animate-css for animations.

- **Request Logging**: Express middleware logs API requests with duration and response payload (truncated to 80 chars).

- **Vite Configuration**: Client root is `client/`, build output to `dist/public/`. Replit-specific plugins active in development.

## Deployment Considerations

### Vercel Deployment

The project has dual deployment configuration:

1. **Standard Deployment** (`npm run build` + `npm start`): Builds both client and server into `dist/`. Server runs as Express app on port 5000.

2. **Vercel Serverless** (`vercel.json` + `api/index.js`): The `api/index.js` file is a standalone serverless function that duplicates the schema from `shared/schema.ts` (schema is inlined because Vercel serverless functions need self-contained code). This file handles API routes when deployed to Vercel.

**Important**: When modifying `shared/schema.ts`, be aware that changes need to be reflected in both places if deploying to Vercel. The `build.js` script attempts to copy the schema, but manual synchronization may be needed.

### Cross-Platform Development

The project now uses `cross-env` for setting environment variables in npm scripts, ensuring Windows compatibility. All npm scripts that set `NODE_ENV` use `cross-env`.