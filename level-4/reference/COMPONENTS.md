# Component Registry — [Project Name]

> Every named thing in the system. Check here before creating anything new.
> Source: Design sprints register components here on close.

---

## Components

| Component | Type | Location | Implements | Description |
|-----------|------|----------|-----------|-------------|
| [e.g., AuthService] | Backend service | `src/api/auth/` | D-001-F01, F02 | Signup, login, token refresh |
| [e.g., UserProfile] | Frontend component | `src/components/` | D-002-F01 | Display and edit user info |
| [e.g., users] | Database table | `src/db/schema.sql` | D-001 | User accounts |

---

## Naming Conventions

| Context | Convention | Example |
|---------|-----------|---------|
| Files (components) | PascalCase | `UserProfile.tsx` |
| Files (utilities) | camelCase / snake_case | `formatDate.ts` |
| Database tables | snake_case, plural | `user_sessions` |
| API routes | kebab-case | `/api/user-profile` |
| Environment variables | SCREAMING_SNAKE | `DATABASE_URL` |
| Git branches | `type/short-description` | `feat/user-auth` |

---

## Development Standards

### Code Style

- [e.g., TypeScript strict mode enabled]
- [e.g., ESLint + Prettier with project config]
- [e.g., No `any` types]

### Error Handling

- All async operations in try/catch
- User-facing errors return standard error shape
- Internal errors logged, never exposed

### Testing

- Unit tests for utility functions
- Integration tests for API endpoints
- Test files colocated: `feature.ts` → `feature.test.ts`

### Git Workflow

- `main` — production, always deployable
- Feature branches: `feat/description`, `fix/description`
- PR required for merges to main
