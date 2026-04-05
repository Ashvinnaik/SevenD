# Interface Contracts — [Project Name]

> How components talk to each other. The rules that don't change between sprints.
> Source: Design sprints define contracts. Development sprints implement them.

---

## API Response Shape

All endpoints return this shape:

```json
{
  "data": {},
  "error": null,
  "meta": { "timestamp": "...", "request_id": "..." }
}
```

## Error Response Shape

```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": []
  }
}
```

---

## Authentication Contract

- Protected routes require `Authorization: Bearer <token>` header
- Token expiry: [duration]
- Refresh mechanism: [describe or "none for v1"]

---

## Endpoint Registry

| Endpoint | Method | Component | Auth Required | Description |
|----------|--------|-----------|---------------|-------------|
| `/api/health` | GET | Core | No | Health check |
| `/api/auth/signup` | POST | AuthService | No | Create account |
| `/api/auth/login` | POST | AuthService | No | Get token |

---

## Event Contracts

<!-- If components communicate via events, document the shapes here. -->

| Event | Producer | Consumer | Payload Shape |
|-------|----------|----------|---------------|
| | | | |

---

## Data Flow

<!-- How data moves through the system for key operations. -->

### [e.g., User Registration Flow]

```
Client → POST /api/auth/signup → AuthService → validate → hash password → insert DB → return token → Client
```
