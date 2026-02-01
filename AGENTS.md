# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Tales by Bibi is a children's storybook website for "Hoofbeats & Tails: The Story of Three Wild Siblings" - an African children's book. It's a full-stack React + Express application with SQLite database for managing orders, newsletter subscribers, and contact messages.

## Development Commands

### Starting the Application

```bash
# Start both frontend and backend (recommended for development)
npm run dev:all

# Start frontend only (Vite dev server on port 8080)
npm run dev

# Start backend only (Express API on port 8081)
npm run dev:server
```

### Building and Testing

```bash
# Build frontend for production
npm run build

# Build backend TypeScript
npm run build:server

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Frontend (React + TypeScript)

The frontend is a single-page application (SPA) built with React 19, TypeScript, and Vite. It uses a simple page-based architecture:

- **Routing**: React Router v6 with 4 main routes (Home, About, Authors, Order) defined in `src/App.tsx`
- **Layout**: Common `Navbar` and `Footer` components wrap all pages via the main App component
- **Styling**: Tailwind CSS 3.4 with custom color palette in `tailwind.config.js` based on African savannah colors (sky, grass, sand, earth, sunset)
- **Icons**: Lucide React for all icons
- **Pages**: Located in `src/pages/` - each page is a self-contained component with its own layout and styling

#### Custom Color System

The project uses a custom Tailwind color palette that should be preserved:
- `sky` (#7DCBE6) - primary brand color
- `grass` (#A8D86E) 
- `sand` (#F4E4C1)
- `earth` (#8B6F47)
- `sunset` (#FFA500) - accent/CTA color

Use these color classes (e.g., `bg-sky`, `text-sunset`, `bg-grass-light`) instead of generic Tailwind colors.

### Backend (Express + SQLite)

The backend is a RESTful API built with Express.js and TypeScript:

- **Database**: SQLite 3 (using better-sqlite3) with database file at `server/talesbybibi.db`
- **Database Layer**: `server/database.ts` exports three service modules:
  - `orderService` - Manages book orders
  - `subscriberService` - Manages newsletter subscriptions
  - `contactService` - Manages contact form messages
- **API Server**: `server/server.ts` defines all REST endpoints
- **Architecture Pattern**: Service layer pattern - all database operations are encapsulated in service functions, not inline in route handlers

#### Database Tables

- `orders` - Customer pre-orders with status tracking
- `subscribers` - Newsletter emails with active/inactive flag
- `contact_messages` - Contact form submissions with read status
- `admin_users` - Admin accounts (table exists but no auth implemented)

### Key Architectural Patterns

1. **Component Structure**: Pages are self-contained with no shared state management (no Redux/Context needed)
2. **Styling Pattern**: Inline Tailwind classes with responsive breakpoints (sm:, md:, lg:)
3. **Service Layer**: All database operations go through service functions in `database.ts`
4. **Type Safety**: TypeScript throughout with strict compilation (tsconfig files for app, server, and node)
5. **File Organization**: Clear separation between frontend (`src/`), backend (`server/`), and static assets (`public/images/`)

## API Endpoints

All endpoints return JSON with `{ success: boolean, ... }` format.

**Orders**: `POST /api/orders`, `GET /api/orders`, `GET /api/orders/:id`, `PATCH /api/orders/:id/status`, `DELETE /api/orders/:id`

**Subscribers**: `POST /api/subscribe`, `GET /api/subscribers`

**Contact**: `POST /api/contact`, `GET /api/messages`, `PATCH /api/messages/:id/read`

## Important Files

- `src/pages/Order.tsx` - Contains Amazon ASIN placeholder that needs updating (line ~98)
- `tailwind.config.js` - Custom color definitions for the brand
- `server/database.ts` - All database schema and service functions
- `.env.example` - Environment variable template (actual `.env` not tracked)

## Development Notes

- Frontend runs on port 8080 (configured in `vite.config.ts`)
- Backend API runs on port 8081 (default, override with PORT env var)
- Database is automatically initialized with tables on server startup
- Mobile menu button in Navbar is not functional (visual only)
- No authentication/authorization implemented for admin endpoints
- Images should be placed in `public/images/` and referenced as `/images/filename.png`
