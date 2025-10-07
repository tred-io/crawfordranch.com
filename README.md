# Crawford Ranch Website

A modern, full-stack web application for Crawford Ranch - a multi-generational cattle ranch in Central Texas offering wedding venues, corporate retreats, Christian retreats, hunting trips, and outdoor activities.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: Tailwind CSS + shadcn/ui (Radix UI)
- **Routing**: Wouter
- **State Management**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database (recommended: [Neon](https://neon.tech) or [Supabase](https://supabase.com))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tred-io/crawfordranch.com.git
cd crawfordranch.com
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your `DATABASE_URL`.

4. Push database schema:
```bash
npm run db:push
```

5. Start development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - Type-check TypeScript files
- `npm run db:push` - Push database schema changes

## Project Structure

```
client/          # React frontend
  src/
    pages/       # Route components
    components/  # Reusable components
    lib/         # Utilities
server/          # Express backend
  index.ts       # Server entry point
  routes.ts      # API routes
  storage.ts     # Storage layer
shared/          # Shared code (schemas, types)
attached_assets/ # Static images and documents
```

## Deployment

### Vercel (Recommended)

See [README-VERCEL.md](./README-VERCEL.md) for detailed Vercel deployment instructions.

### Replit

The project includes `.replit` configuration for easy deployment on Replit.

## Features

- Multi-page ranch showcase website
- Contact form with inquiry management
- Photo gallery with lightbox
- Responsive design with Texas ranch theme
- SEO-optimized with structured data
- PostgreSQL database integration

## Development Notes

- The project uses path aliases: `@/` for client code, `@shared/` for shared code, `@assets/` for static assets
- Development uses in-memory storage by default (when `DATABASE_URL` is not set)
- The server runs on port 5000 and serves both the API and the Vite dev server

## License

MIT
