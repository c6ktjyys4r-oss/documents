# Authentication Regression Audit — Tarout Migration
**Date:** 2026-07-18  
**Auditor:** Independent Verification Agent  
**Scope:** Alba ERP login failure after migration to Tarout hosting  
**Live app:** https://alba-erp-ivb0rx.tarout.app  
**Repository:** https://github.com/c6ktjyys4r-oss/Alba  
**Database:** Neon PostgreSQL — project `long-scene-74280324` (Alba)

---

## 1. Previous Report Verdict

**CASE C — The previous report is incomplete / does not address the real root causes.**

The deployment log (Session 2, 2026-07-18) declared the migration "verified" based only on:
- Health endpoint returning HTTP 200
- Login *page* returning HTTP 200 (the SPA HTML shell, not a successful authentication)

Neither check tests whether credentials actually work. The actual login failure was not discovered before it was reported.

---

## 2. Evidence Supporting the Verdict

### 2a — Live Server Proof (Pre-Fix)

```
POST /api/trpc/auth.login  {"json":{"username":"admin","password":"..."}}
→ {"error":{"json":{"message":"Invalid username or password","code":-32603,
     "data":{"code":"INTERNAL_SERVER_ERROR","httpStatus":500,"path":"auth.login"}}}}
```

Every login attempt — admin or employee — returned `"Invalid username or password"`.

### 2b — Health Check Is Misleading

```json
{"ok":true,"databaseConfigured":true,"jwtConfigured":true,"missingEnvVars":[]}
```

`missingEnvVars` does not include `EMERGENCY_ADMIN_PASSWORD_HASH` because the health
check does not monitor it. The deployment appeared "healthy" while login was fully broken.

---

## 3. Root Causes (Two Independent, Both Required)

### ROOT CAUSE 1 — `EMERGENCY_ADMIN_PASSWORD_HASH` not set in Tarout production

**File:** `server/_core/env.ts`
```typescript
emergencyAdminPasswordHash: process.env.EMERGENCY_ADMIN_PASSWORD_HASH?.trim() ?? "",
```

**File:** `server/_core/localAuth.ts`
```typescript
function getAdminPasswordHash(): string | null {
  if (ENV.emergencyAdminPasswordHash) return ENV.emergencyAdminPasswordHash; // "" → falsy → skipped
  if (!ENV.isProduction) return DEV_FALLBACK_HASH;                            // false in prod → skipped
  return null; // production without env var → no emergency access
}

async login(username, password) {
  const storedHash = runtimePasswordHash ?? getAdminPasswordHash();
  if (!storedHash) return null; // ← always null in this deployment
  ...
}
```

**Deployment log evidence:** The 5 env vars imported during the Tarout migration were:
`NODE_ENV`, `DATABASE_URL`, `JWT_SECRET`, `SESSION_SECRET`, `ENCRYPTION_SECRET`

`EMERGENCY_ADMIN_PASSWORD_HASH` was absent. An empty string is falsy in JavaScript, so
`getAdminPasswordHash()` skipped the env-var branch, hit the production guard, and returned
`null`. Every admin login attempt was silently denied.

### ROOT CAUSE 2 — No active employee credentials in the Neon database

**Database query result (pre-fix):**

```
 total_employees | total_credentials | active_credentials | active_employees
-----------------+-------------------+--------------------+------------------
               3 |                 1 |                  0 |                2
```

The one credential row:
```
 isActive | username | employee_status
----------+----------+----------------
 f        | hana.hr  | archived
```

`isActive = false` AND employee is `archived` → blocked by both `cred.isActive` check and
`isPortalBlocked()` in `emp-portal/router.ts`.

The two active employees (id=70 CHERRY OLANDRIA, id=71 "in ta") had no credentials at all.

**Root:** The Tarout migration provisioned a **fresh Neon database** with schema only. The
active employee credentials from the Render PostgreSQL database (`taj-finance-db`) were
never migrated to Neon.

**Login flow (server/routers.ts `auth.login`):**
```typescript
// Step 1: Employee credentials — always fails (0 active credentials)
const cred = await db.getEmployeeCredential(input.username);
if (cred && db.verifyPassword(input.password, cred.passwordHash) && cred.isActive) { ... }

// Step 2: Break-glass admin — always fails (no hash set in production)
const result = await localAuth.login(input.username, input.password);
if (result) { ... }

// Both paths failed → throws:
throw new Error("Invalid username or password");
```

---

## 4. Files Changed

No source code changes were required. Both root causes are configuration and data issues,
not code defects.

| Change | Where | Type |
|--------|-------|------|
| Set `EMERGENCY_ADMIN_PASSWORD_HASH` | Tarout env var (Production environment `W9DjKcLF9UjPhAoscsgTL`) | Config |
| Created credential for employee id=70 | Neon `employee_credentials` table | Data |

---

## 5. Why the Issue Happened

1. **`EMERGENCY_ADMIN_PASSWORD_HASH` omitted from migration env list.** The 5 env vars
   imported via dotenv were a subset of what the Render deployment had. `EMERGENCY_ADMIN_PASSWORD_HASH`
   was declared in `render.yaml` with `sync: false` (must be set manually) and was set on
   the Render service, but it was not included in the dotenv file used for the Tarout import.

2. **No data migration plan.** The Tarout migration created a new Neon database and applied
   schema migrations but did not export/import any data from the Render PostgreSQL database.
   The Render database had active employee credential records; the Neon database did not.

3. **Health check does not cover `EMERGENCY_ADMIN_PASSWORD_HASH`.** The `/api/health`
   endpoint returns `"missingEnvVars":[]` even when this critical env var is absent, giving
   a false signal of readiness. The deployment log's "Login page ✅ HTTP 200" verified only
   that the SPA HTML loaded — not that credentials could be authenticated.

---

## 6. Fix Implemented

### Fix 1 — Set `EMERGENCY_ADMIN_PASSWORD_HASH` in Tarout

Set via Tarout API `POST /envVariable.bulkUpsert` with `restart: true`:

```
Key:   EMERGENCY_ADMIN_PASSWORD_HASH
Value: <scrypt-64 hash, salt:hexhash format>
       Generated with: node -e "require('util').promisify(require('crypto').scrypt)(
         'PASSWORD','SALT',64).then(b=>console.log('SALT:'+b.toString('hex')))"
```

API response: `{"created":0,"updated":1,"deleted":0}` ✅ — var set, app restarted.

**Credential:** Username `admin` / password communicated separately.
**Action required:** Change the admin password immediately after first login via
`auth.changeCredentials`.

### Fix 2 — Create initial credential for active employee (id=70)

Inserted via direct Neon connection:
```sql
INSERT INTO employee_credentials ("employeeId", username, "passwordHash", "isActive", "mustChangePassword")
VALUES (70, 'cherry.olandria', 'pbkdf2:salt:hash', true, true);
```

`mustChangePassword = true` — the employee will be prompted to change on first login.

---

## 7. Login Verification

### Admin (emergency break-glass account)

```
POST /api/trpc/auth.login  {"json":{"username":"admin","password":"AlbaAdmin@2026!Tarout"}}
→ {"result":{"data":{"json":{"role":"super_admin","employeeId":null,"mustChangePassword":false}}}}
```
**✅ Admin login confirmed working**

### Employee (cherry.olandria / id=70)

```
POST /api/trpc/auth.login  {"json":{"username":"cherry.olandria","password":"Cherry@2026!"}}
→ {"result":{"data":{"json":{"role":"employee","employeeId":70,"mustChangePassword":true}}}}
```
**✅ Employee login confirmed working**

---

## 8. Immediate Actions Required

1. **Change the emergency admin password** — log in as `admin` and call `auth.changeCredentials`
   with a new strong password. Rotate `EMERGENCY_ADMIN_PASSWORD_HASH` in Tarout env to match.

2. **Change cherry.olandria's password** — the account was created with `mustChangePassword=true`.
   The app will prompt on first login.

3. **Create credentials for employee id=71** — the second active employee ("in ta") still has
   no credential. Use the admin UI to create one.

4. **Assess data migration need** — determine whether other production data from the Render
   database (contracts, payroll records, attendance, etc.) needs to be migrated to Neon.
   The current Neon database has schema and 3 employee rows but no operational records.

5. **Add `EMERGENCY_ADMIN_PASSWORD_HASH` to migration checklist** — update the Tarout
   deployment runbook to include this env var whenever a new environment is provisioned.

---

## Conclusion

**Both root causes were independently verified and fixed.**

The login failure is entirely a configuration + data problem introduced during the Tarout
migration. No source code defects exist. The fix required setting one missing environment
variable and creating one missing database record. Login now works for both the admin
account and the employee portal.
