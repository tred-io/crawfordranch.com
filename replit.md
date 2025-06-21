# Lampasas Legacy Ranch Website

## Overview

This is a modern, full-stack web application for Lampasas Legacy Ranch, a multi-generational cattle ranch in Central Texas. The application serves as a marketing website and contact management system for the ranch, which offers wedding venues, corporate retreats, Christian retreats, hunting trips, and outdoor activities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom ranch-themed color palette
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Design System**: Custom Texas ranch theme with variables for colors

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Validation**: Zod for request/response validation
- **Session Management**: Basic session handling (prepared for future auth)
- **Development**: In-memory storage fallback for development

### Key Components

#### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Inquiries Table**: Comprehensive contact form data storage including:
  - Personal information (name, email, phone)
  - Event details (type, date, guest count)
  - Custom message field
  - Timestamp tracking

#### API Endpoints
- `POST /api/contact` - Submit new contact inquiries
- `GET /api/contact` - Retrieve all contact inquiries (admin functionality)

#### UI Sections
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Full-screen landing with call-to-action buttons
- **About Section**: Ranch history and statistics
- **Events Section**: Wedding, corporate, and Christian retreat offerings
- **Activities Section**: Hunting, fishing, and party house features
- **Future Offerings**: Upcoming outfitter and meat shop
- **Gallery**: Photo showcase of ranch property
- **Contact Section**: Comprehensive inquiry form with validation

## Data Flow

1. **Contact Inquiries**: Users fill out contact form → Client validation with Zod → API submission → Database storage → Confirmation response
2. **Admin Access**: Contact inquiries can be retrieved via API for administrative purposes
3. **Static Content**: All marketing content is statically rendered with optimized images
4. **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for Neon database
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code

## Deployment Strategy

### Build Process
- **Client**: Vite builds React application to `dist/public`
- **Server**: esbuild bundles Node.js server to `dist/index.js`
- **Database**: Drizzle migrations manage schema changes

### Environment Configuration
- **Development**: Uses in-memory storage fallback
- **Production**: Requires `DATABASE_URL` environment variable
- **Deployment**: Configured for Replit autoscale deployment

### Database Migrations
- Schema defined in `shared/schema.ts`
- Migrations generated with `npm run db:push`
- PostgreSQL dialect with Drizzle Kit configuration

## Changelog
- June 21, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.