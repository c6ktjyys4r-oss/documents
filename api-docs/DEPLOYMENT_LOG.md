# Deployment Log

## 2026-07-18 — Render Cleanup + Documents Deployment (Session 3)

### Actions Taken

1. **Deleted Alba ERP from Render** — `srv-d8gskvurnols73c3pm30` removed
2. **Made `documents` repo public** — required for Render static site deployment (repo contains only documentation and templates; no credentials)
3. **Deployed Documents as Render Static Site** — `https://documents-12j3.onrender.com`, deployed from `main` branch, live in under 15 seconds

### Documents Site Notes

- Pure static HTML — no build command, `publishPath: .`
- SPA rewrite: `/* → /index.html`
- No database (static site has no backend)
- The target architecture listed "Neon — Documents Database" — not applicable; this is a client-side-only static site with no server or database

---

## 2026-07-18 — Alba ERP → Tarout (Session 2)

### What was completed before this session

- Tarout API token obtained and validated
- Tarout API reference documented (`api-docs/TAROUT_API.md`, commit `b0a7e70`)
- Alba ERP Tarout application created (`bu468icMx3mQOn6tRVpc_`) with status `error`
- Neon "Alba" PostgreSQL project created (`long-scene-74280324`, region `aws-us-east-1`)

### What was completed this session

1. **Verified Tarout API connectivity** — health returned `{"status":"ok"}`, org authenticated
2. **Diagnosed build failure** — install command `npm install -g pnpm@10` collided with pnpm already present in railpack environment
3. **Fixed install command** — changed to `pnpm install --no-frozen-lockfile` via `application.saveBuildConfig`
4. **Configured env vars** — 5 variables imported (dotenv format, merge=true): `NODE_ENV`, `DATABASE_URL`, `JWT_SECRET`, `SESSION_SECRET`, `ENCRYPTION_SECRET`
5. **Triggered deployment** — deployment ID `tb_5pOtX5WQ0RNOWxfs0P`, finished at 18:59 UTC
6. **Verified deployment** — all checks passed

### Verification Results (Session 2)

| Check | Result |
|-------|--------|
| Health endpoint | ✅ `{"ok":true,"databaseConfigured":true,"jwtConfigured":true,"missingEnvVars":[]}` |
| Homepage | ✅ HTTP 200 |
| Login page | ✅ HTTP 200 |
| Database | ✅ Connected (Neon PostgreSQL, migrations applied) |

---

## Final Infrastructure State

### Tarout

| Service | Status | URL |
|---------|--------|-----|
| Alba ERP | ✅ done | https://alba-erp-ivb0rx.tarout.app |

### Render

| Service | Type | URL |
|---------|------|-----|
| taj-finance | static_site | https://taj-finance.onrender.com |
| taj-finance-api | web_service | https://taj-finance-api.onrender.com |
| documents | static_site | https://documents-12j3.onrender.com |

### Render Databases

| Name | Status | Plan |
|------|--------|------|
| taj-finance-db | available | basic_256mb |

### Neon Databases

| Name | Project ID | Region |
|------|-----------|--------|
| Alba | long-scene-74280324 | aws-us-east-1 |
| api-server | red-art-58862536 | aws-us-east-2 |
