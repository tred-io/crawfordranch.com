# Deploy Crawford Ranch Website to Vercel

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Database**: Set up a PostgreSQL database (recommend Neon, Supabase, or Vercel Postgres)
3. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket

## Deployment Steps

### 1. Database Setup
- Create a PostgreSQL database on [Neon](https://neon.tech) or [Supabase](https://supabase.com)
- Run the database migration:
  ```bash
  npm run db:push
  ```
- Copy your `DATABASE_URL` connection string

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Vercel will automatically detect the configuration from `vercel.json`
4. Add environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string

### 3. Environment Variables
Set these in Vercel Dashboard → Settings → Environment Variables:
- `DATABASE_URL`: Your database connection string
- `NODE_ENV`: `production`

### 4. Custom Domain (Optional)
- In Vercel Dashboard → Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

## Architecture
- **Frontend**: Static React app served by Vercel's CDN
- **Backend**: Serverless functions in `/api` directory
- **Database**: External PostgreSQL (Neon/Supabase)

## Local Development
```bash
# Development (uses local Express server)
npm run dev

# Test production build
npm run build
npm start
```

## Troubleshooting
- Check Vercel function logs in Dashboard → Functions
- Ensure `DATABASE_URL` is set correctly
- Verify database tables exist with `npm run db:push`