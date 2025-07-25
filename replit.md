# Portfolio Website

## Overview

This is a professional portfolio website for Reiber Lozano, a cybersecurity analyst and software engineer. The application is built as a full-stack web application featuring a React frontend with a modern dark cybersecurity theme and an Express.js backend for handling contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with three main directories:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common schemas and types used by both frontend and backend

### Technology Stack

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling and development server
- Tailwind CSS for styling with a custom cybersecurity theme
- shadcn/ui component library built on Radix UI
- TanStack Query for API state management
- Wouter for client-side routing

**Backend:**
- Express.js with TypeScript
- Drizzle ORM for database operations
- PostgreSQL database (configured via Neon serverless)
- Zod for data validation

**Development:**
- ESBuild for server bundling
- Hot module replacement in development
- TypeScript for type safety across the stack

## Key Components

### Frontend Architecture

The client application is structured as a single-page application with:
- **Component-based architecture** using React functional components
- **Global state management** through React Context (LanguageContext for i18n)
- **UI component library** from shadcn/ui for consistent design
- **Responsive design** with mobile-first approach
- **Dark theme** with custom CSS variables for cybersecurity aesthetic

### Backend Architecture

The server follows a RESTful API design with:
- **Route handlers** in `/server/routes.ts` for API endpoints
- **Storage abstraction layer** with in-memory implementation (ready for database integration)
- **Middleware** for request logging and error handling
- **Development integration** with Vite for seamless full-stack development

### Database Schema

The application defines two main entities:
- **Users** - Basic user authentication structure
- **ContactMessages** - Form submissions from the portfolio contact form

The schema is defined using Drizzle ORM with PostgreSQL dialect and includes proper validation using Zod schemas.

## Data Flow

1. **Frontend requests** are made using TanStack Query for caching and state management
2. **API calls** go through a centralized `apiRequest` function with error handling
3. **Backend validation** occurs using Zod schemas before data persistence
4. **Database operations** are abstracted through the storage interface
5. **Responses** are properly typed and include error handling

## External Dependencies

### UI and Styling
- **Radix UI** - Headless UI components for accessibility
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library for consistent iconography

### Development Tools
- **Vite** - Fast development server and build tool
- **ESBuild** - Fast JavaScript bundler for production
- **TypeScript** - Type safety and developer experience

### Database and Validation
- **Drizzle ORM** - Type-safe database toolkit
- **Neon Database** - Serverless PostgreSQL provider
- **Zod** - Runtime type validation

## Deployment Strategy

The application is configured for deployment with:

**Development:**
- Vite dev server for frontend with HMR
- tsx for running TypeScript server code directly
- Concurrent development of frontend and backend

**Production:**
- Frontend builds to static files via Vite
- Backend bundles to single JavaScript file via ESBuild
- Database migrations handled through Drizzle Kit
- Environment variables for database connection and configuration

**Build Process:**
1. Frontend assets are built and output to `dist/public`
2. Backend is bundled to `dist/index.js`
3. Server serves static frontend files and API routes
4. Database schema is pushed using `npm run db:push`

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional VPS hosting with PostgreSQL database support.