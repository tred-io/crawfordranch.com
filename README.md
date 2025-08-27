# Crawford Ranch Website

A modern, full-stack web application for Crawford Ranch - a multi-generational cattle ranch in Central Texas offering wedding venues, corporate retreats, Christian retreats, hunting trips, and outdoor activities.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI
- **Deployment**: Vercel

## Environment Variables

Create a `.env` file with:

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

## Deployment to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set the environment variables in Vercel dashboard
4. Deploy automatically on each push

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build process will:
1. Build the React frontend to `dist/public`
2. Bundle the Express server to `dist/index.js`