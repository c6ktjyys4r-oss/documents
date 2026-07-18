# Deployment Log

## 2026-07-18 — Alba ERP → Tarout (Session 2)

### What was completed before this session

- Tarout API token obtained and validated
- Tarout API reference documented (`api-docs/TAROUT_API.md`, commit `b0a7e70`)
- Alba ERP Tarout application created (`bu468icMx3mQOn6tRVpc_`) with status `error`
- Neon "Alba" PostgreSQL project created (`long-scene-74280324`, region `aws-us-east-1`)
- Env vars set (5 variables — first import attempt at 18:17 UTC)

### What was completed this session

1. **Verified Tarout API connectivity** — health returned `{"status":"ok"}`, org authenticated
2. **Diagnosed build failure** — install command `npm install -g pnpm@10` collided with pnpm already present in railpack environment
3. **Fixed install command** — changed to `pnpm install --no-frozen-lockfile` via `application.saveBuildConfig`
4. **Configured env vars** — 5 variables imported via `envVariable.import` (dotenv format, merge=true):
   - `NODE_ENV`
   - `DATABASE_URL` (Neon pooled connection)
   - `JWT_SECRET`
   - `SESSION_SECRET`
   - `ENCRYPTION_SECRET`
5. **Triggered deployment** — deployment ID `tb_5pOtX5WQ0RNOWxfs0P`, finished at 18:59 UTC
6. **Verified deployment** — all checks passed

### Verification Results

| Check | Result |
|-------|--------|
| Health endpoint | ✅ `{"ok":true,"databaseConfigured":true,"jwtConfigured":true,"missingEnvVars":[]}` |
| Homepage | ✅ HTTP 200 |
| Login page | ✅ HTTP 200 |
| Database | ✅ Connected (Neon PostgreSQL, migrations applied) |

### Deployment Details

| Field | Value |
|-------|-------|
| URL | `https://alba-erp-ivb0rx.tarout.app` |
| Tarout App ID | `bu468icMx3mQOn6tRVpc_` |
| Deployment ID | `tb_5pOtX5WQ0RNOWxfs0P` |
| Alba GitHub HEAD | `28c9e2e` (fix: audit remediation — all 5 findings) |
| Neon project | `long-scene-74280324` (Alba, aws-us-east-1) |
| Region | `me-central2` |
| Plan | FREE |
| Build type | railpack |

### Known Background Errors (non-blocking)

These exist in runtime logs but do not affect serving or database connectivity:

1. **Email queue** — `ERR_INVALID_ARG_TYPE` when serializing a `Date` to postgres driver. Pre-existing code bug.
2. **Notification queue** — Drizzle SQL syntax error `where IS NULL` in `performance_reviews` query. Pre-existing code bug.
3. **Branch management migration** — data migration step skipped (not schema migration). Non-blocking.

### Render Comparison (not yet done)

Per the handoff instructions, Render vs Tarout comparison should only happen after Alba is confirmed working. Alba is now confirmed working. This comparison is the next step.

### Next Steps

1. Compare Tarout vs Render for Alba
2. Recommend minimal Render cleanup (do not delete until verified)
3. Optionally fix the email queue and notification queue background bugs
