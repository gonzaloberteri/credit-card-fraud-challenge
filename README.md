## Project Overview

This is a financial audit system with three main components:

1. **Backend** - NestJS API with GraphQL integration to Hasura
2. **Dashboard** - React/TypeScript frontend using Vite and Apollo Client
3. **Hasura** - GraphQL engine providing real-time API over PostgreSQL

The system manages credit card transactions, audit flags, and provides role-based access control for users and auditors.

## Architecture

### Database Schema
- **users**: Extends Clerk authentication with role management (user/auditor)
- **credit_cards**: User's credit card information
- **transactions**: Financial transactions linked to credit cards
- **audit_flags**: Auditor-created flags for suspicious transactions
- **audit_trail**: Immutable audit log for compliance

### Authentication & Authorization
- Uses Clerk for authentication
- Hasura JWT integration for role-based permissions
- Two roles: `user` (can view own data) and `auditor` (can view all data and create flags)

### Data Flow
- Backend serves as middleware between frontend and Hasura
- Real-time subscriptions via GraphQL WebSocket
- GraphQL code generation for type safety

## Development Commands

### Full Stack Development
```bash
# Start all services
docker-compose up

# Backend development (in backend/)
npm run start:dev        # Development mode with hot reload
npm run build           # Production build
npm run test            # Unit tests
npm run test:e2e        # End-to-end tests
npm run lint            # ESLint
npm run tsc             # TypeScript check

# Frontend development (in dashboard/)
npm run dev             # Development server
npm run build           # Production build
npm run lint            # ESLint
npm run codegen         # Generate GraphQL types
npm run codegen:watch   # Watch mode for GraphQL types

# Hasura (in hasura/)
hasura migrate apply    # Apply migrations
hasura metadata apply   # Apply metadata
hasura console          # Open Hasura console
```

### Code Generation
Both backend and dashboard use GraphQL Code Generator:
- Backend: Generates types from Hasura schema
- Dashboard: Generates React Apollo hooks and types
- Run `npm run codegen` after schema changes

## Key Technologies

### Backend
- **NestJS**: Node.js framework with dependency injection
- **GraphQL Request**: Client for Hasura communication
- **Clerk**: Authentication service integration
- **Jest**: Testing framework

### Dashboard
- **React 19**: UI framework
- **Apollo Client**: GraphQL client with caching
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety

### Infrastructure
- **Hasura**: GraphQL API with real-time subscriptions
- **PostgreSQL**: Primary database
- **Docker**: Containerization and local development

## Important Patterns

### GraphQL Operations
- Place queries/mutations in `.graphql` files
- Run codegen after adding new operations
- Use generated hooks in React components

### Database Changes
1. Create migration in `hasura/migrations/`
2. Update metadata in `hasura/metadata/`
3. Run `npm run codegen` in both backend and dashboard

### Authentication Flow
- Frontend uses Clerk React SDK
- Backend validates Clerk JWT tokens
- Hasura receives JWT with user ID and role claims

## File Structure Notes

- `backend/src/clients/`: External API integrations (Hint, Elation)
- `backend/src/mutations/`: GraphQL mutations for Hasura
- `backend/src/queries/`: GraphQL queries for Hasura
- `dashboard/src/queries/`: Frontend GraphQL operations
- `hasura/metadata/`: Hasura configuration and permissions
- `hasura/migrations/`: Database schema changes

## Environment Setup

Required environment files:
- `postgres/.env`: Database credentials
- `hasura/.env`: Hasura configuration with JWT settings
- `dashboard/.env`: Clerk authentication keys

### Dashboard Environment Variables
Create `dashboard/.env` with:
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
VITE_HASURA_GRAPHQL_URL=http://localhost:8080/v1/graphql
```

### Clerk JWT Template
The dashboard uses a Clerk JWT template named 'auditor' that should include:
- User ID in the `sub` claim
- Role information for Hasura permissions
- Custom claims as needed for the auditor role

### Authentication Flow
1. Users sign in via Clerk authentication
2. Clerk generates JWT using the 'auditor' template
3. JWT is sent to Hasura with each GraphQL request
4. Hasura validates JWT and applies role-based permissions