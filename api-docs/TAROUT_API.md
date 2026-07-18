# Tarout API Reference

> **Base URL:** `https://tarout.sa/api`  
> **Spec:** `GET https://tarout.sa/api/openapi.json`  
> **Version:** 1.0.0

---

## Authentication

All endpoints require an API key sent as an HTTP header:

```
x-api-key: <your-api-key>
```

**Generating an API key:**

1. Log in to [tarout.sa/dashboard](https://tarout.sa/dashboard)
2. Navigate to **Account → API Keys** (or call `POST /user.generateToken` once authenticated via session)
3. Use the returned key in all subsequent requests

**Error response (401):**
```json
{ "message": "Unauthorized" }
```

**Standard error envelope:**
```json
{
  "message": "string",
  "code": "string",
  "issues": [{ "message": "string" }]
}
```

---

## Health Check

**`GET https://tarout.sa/api/health`** — No auth required.

```json
{ "status": "ok", "timestamp": "2026-07-18T17:59:52.987Z" }
```

---

## Endpoint Reference

_All endpoints below require `x-api-key` auth unless stated otherwise._

### Application

#### `GET /application.allByOrganization`

_No parameters._

#### `GET /application.getCreateOptions`

_No parameters._

#### `POST /application.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `appName` | ✓ | string |
| `description` |  | string |
| `organizationId` | ✓ | string |
| `containerPort` |  | integer |
| `environmentId` |  | string |
| `plan` |  | string — `FREE | SHARED | DEDICATED` |
| `region` |  | string — `me-central1 | me-central2 | europe-central2 | europe-north1 | europe-southwest1 | europe-west1 | europe-west2 | europe-west3 | europe-west4 | europe-west6 | europe-west8 | europe-west9 | europe-west10 | europe-west12 | northamerica-northeast1 | northamerica-northeast2 | us-central1 | us-east1 | us-east4 | us-east5 | us-south1 | us-west1 | us-west2 | us-west3 | us-west4 | southamerica-east1 | southamerica-west1 | asia-east1 | asia-east2 | asia-northeast1 | asia-northeast2 | asia-northeast3 | asia-south1 | asia-south2 | asia-southeast1 | asia-southeast2 | australia-southeast1 | australia-southeast2 | africa-south1` |
| `buildConfig` |  | object |
| `envVars` |  | array |

#### `GET /application.one`

**Query params:**

- `applicationId` _(required)_ string

#### `POST /application.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `POST /application.saveEnvironment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `buildArgs` | ✓ | string |
| `env` |  | string |

#### `POST /application.saveBuildType`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `buildType` | ✓ | string — `dockerfile | heroku_buildpacks | paketo_buildpacks | nixpacks | static | railpack` |
| `dockerfile` | ✓ | string |
| `dockerContextPath` | ✓ | string |
| `railpackVersion` | ✓ | string |
| `publishDirectory` |  | string |
| `isStaticSpa` |  | boolean |

#### `POST /application.saveBuildConfig`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `frameworkPreset` |  | string |
| `rootDirectory` |  | string |
| `installCommand` |  | string |
| `buildCommand` |  | string |
| `outputDirectory` |  | string |
| `startCommand` |  | string |
| `healthCheckPath` |  | string |
| `healthCheckReturnCode` |  | integer |

#### `POST /application.saveRegion`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `region` | ✓ | string — `me-central1 | me-central2 | europe-central2 | europe-north1 | europe-southwest1 | europe-west1 | europe-west2 | europe-west3 | europe-west4 | europe-west6 | europe-west8 | europe-west9 | europe-west10 | europe-west12 | northamerica-northeast1 | northamerica-northeast2 | us-central1 | us-east1 | us-east4 | us-east5 | us-south1 | us-west1 | us-west2 | us-west3 | us-west4 | southamerica-east1 | southamerica-west1 | asia-east1 | asia-east2 | asia-northeast1 | asia-northeast2 | asia-northeast3 | asia-south1 | asia-south2 | asia-southeast1 | asia-southeast2 | australia-southeast1 | australia-southeast2 | africa-south1` |

#### `POST /application.saveGithubProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `repository` | ✓ | string |
| `branch` | ✓ | string |
| `owner` | ✓ | string |
| `buildPath` | ✓ | string |
| `githubId` | ✓ | string |
| `watchPaths` | ✓ | array |
| `enableSubmodules` | ✓ | boolean — `false` |
| `triggerType` |  | string — `push | tag` |

#### `POST /application.saveGitlabProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `gitlabBranch` | ✓ | string |
| `gitlabBuildPath` | ✓ | string |
| `gitlabOwner` | ✓ | string |
| `gitlabRepository` | ✓ | string |
| `gitlabId` | ✓ | string |
| `gitlabProjectId` | ✓ | number |
| `gitlabPathNamespace` | ✓ | string |
| `watchPaths` | ✓ | array |
| `enableSubmodules` | ✓ | boolean — `false` |

#### `POST /application.saveBitbucketProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bitbucketBranch` | ✓ | string |
| `bitbucketBuildPath` | ✓ | string |
| `bitbucketOwner` | ✓ | string |
| `bitbucketRepository` | ✓ | string |
| `bitbucketId` | ✓ | string |
| `applicationId` | ✓ | string |
| `watchPaths` | ✓ | array |
| `enableSubmodules` | ✓ | boolean — `false` |

#### `POST /application.saveGiteaProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `giteaBranch` | ✓ | string |
| `giteaBuildPath` | ✓ | string |
| `giteaOwner` | ✓ | string |
| `giteaRepository` | ✓ | string |
| `giteaId` | ✓ | string |
| `watchPaths` | ✓ | array |
| `enableSubmodules` | ✓ | boolean — `false` |

#### `POST /application.saveGitProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `customGitBranch` | ✓ | string |
| `applicationId` | ✓ | string |
| `customGitBuildPath` | ✓ | string |
| `customGitUrl` | ✓ | string |
| `watchPaths` | ✓ | array |
| `enableSubmodules` | ✓ | boolean — `false` |

#### `POST /application.saveDockerfileUploadProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `dockerfileContent` | ✓ | string |

#### `POST /application.saveDockerHubProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `dockerHubImage` | ✓ | string |
| `dockerHubUsername` |  | string |
| `dockerHubAccessToken` |  | string |
| `dockerHubIsPrivate` |  | boolean |
| `containerPort` |  | integer |

#### `POST /application.getDropUploadUrl`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `fileName` | ✓ | string |
| `fileSize` | ✓ | integer |
| `contentType` |  | string |

#### `POST /application.completeDropUpload`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `objectName` | ✓ | string |
| `fileName` | ✓ | string |
| `fileSize` | ✓ | integer |
| `dropBuildPath` |  | string |

#### `POST /application.disconnectGitProvider`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `POST /application.markRunning`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `POST /application.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `name` |  | string |
| `description` |  | string |
| `enabled` |  | boolean |
| `cleanCache` |  | boolean |
| `autoDeploy` |  | boolean |

#### `POST /application.deployToCloud`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `branch` |  | string |

#### `GET /application.getDeploymentStatus`

**Query params:**

- `applicationId` _(required)_ string

#### `GET /application.getApplicationLogs`

**Query params:**

- `applicationId` _(required)_ string
- `lines` number
- `level` string
- `timeRange` string

#### `POST /application.stop`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `POST /application.restart`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `POST /application.cleanQueues`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `POST /application.cancelDeployment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `GET /application.getAnalytics`

**Query params:**

- `applicationId` _(required)_ string

#### `GET /application.validateSourceProvider`

**Query params:**

- `applicationId` _(required)_ string

#### `POST /application.refreshScreenshot`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |

#### `GET /application.getMetrics`

**Query params:**

- `applicationId` _(required)_ string
- `period` string

#### `GET /application.getObservabilityData`

**Query params:**

- `applicationId` _(required)_ string
- `period` string

#### `GET /application.getVisitorStats`

**Query params:**

- `applicationId` _(required)_ string
- `period` string

#### `GET /application.checkSubdomainAvailability`

**Query params:**

- `subdomain` _(required)_ string
- `applicationId` string

#### `POST /application.updateCustomSubdomain`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `customSubdomain` | ✓ | string |

#### `GET /application.syncApplicationStatus`

**Query params:**

- `applicationId` _(required)_ string

#### `GET /application.checkSubdomainSSL`

**Query params:**

- `applicationId` _(required)_ string

#### `POST /application.changePlan`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `newPlan` | ✓ | string — `FREE | SHARED | DEDICATED` |

#### `GET /application.checkLiveStatus`

**Query params:**

- `applicationId` _(required)_ string

### Deployment

#### `GET /deployment.all`

**Query params:**

- `applicationId` _(required)_ string

#### `GET /deployment.allByType`

**Query params:**

- `id` _(required)_ string
- `type` _(required)_ string

#### `GET /deployment.one`

**Query params:**

- `deploymentId` _(required)_ string

#### `GET /deployment.getDeploymentLogs`

**Query params:**

- `deploymentId` _(required)_ string
- `offset` string
- `limit` string

#### `POST /deployment.rollback`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `targetDeploymentId` | ✓ | string |

### Environment

#### `GET /environment.all`

**Query params:**

- `projectId` string

#### `GET /environment.byProject`

**Query params:**

- `projectId` _(required)_ string

#### `GET /environment.one`

**Query params:**

- `environmentId` _(required)_ string

#### `GET /environment.getActive`

_No parameters._

#### `POST /environment.setActive`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `environmentId` | ✓ | string |

#### `POST /environment.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `projectId` | ✓ | string |
| `displayName` | ✓ | string |
| `slug` |  | string |
| `isProtected` |  | boolean |

#### `POST /environment.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `environmentId` | ✓ | string |
| `displayName` |  | string |
| `isProtected` |  | boolean |

#### `POST /environment.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `environmentId` | ✓ | string |

#### `POST /environment.setDefault`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `environmentId` | ✓ | string |

#### `GET /environment.stats`

**Query params:**

- `environmentId` _(required)_ string

### EnvVariable

#### `POST /envVariable.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `environmentId` |  | string |
| `key` | ✓ | string |
| `value` | ✓ | string |
| `description` |  | string |
| `isSecret` |  | boolean |

#### `POST /envVariable.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `environmentId` |  | string |
| `key` | ✓ | string |
| `value` |  | string |
| `description` |  | string |
| `isSecret` |  | boolean |

#### `POST /envVariable.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `environmentId` |  | string |
| `key` | ✓ | string |
| `restart` |  | boolean — `true` |

#### `POST /envVariable.bulkUpsert`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `environmentId` |  | string |
| `variables` | ✓ | array |
| `replaceAll` |  | boolean |
| `restart` |  | boolean |

#### `POST /envVariable.bulkDelete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `environmentId` |  | string |
| `keys` | ✓ | array |

#### `POST /envVariable.import`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` | ✓ | string |
| `environmentId` |  | string |
| `content` | ✓ | string |
| `format` |  | string — `dotenv | json` |
| `merge` |  | boolean |
| `restart` |  | boolean |

#### `POST /envVariable.copy`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `sourceApplicationId` | ✓ | string |
| `sourceEnvironmentId` |  | string |
| `targetApplicationId` | ✓ | string |
| `targetEnvironmentId` |  | string |
| `keys` |  | array |
| `overwrite` |  | boolean |

#### `GET /envVariable.audit`

**Query params:**

- `applicationId` _(required)_ string
- `key` string
- `limit` number
- `offset` number

### Postgres

#### `GET /postgres.getEntitlements`

_No parameters._

#### `GET /postgres.allByOrganization`

_No parameters._

#### `POST /postgres.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `appName` | ✓ | string |
| `dockerImage` |  | string |
| `organizationId` | ✓ | string |
| `description` |  | string |
| `environmentId` |  | string |
| `databaseName` |  | string |
| `databaseUser` |  | string |
| `databasePassword` |  | string |
| `plan` |  | string — `FREE | STARTER | STANDARD | PRO` |
| `region` |  | string — `me-central1 | me-central2 | europe-central2 | europe-north1 | europe-southwest1 | europe-west1 | europe-west2 | europe-west3 | europe-west4 | europe-west6 | europe-west8 | europe-west9 | europe-west10 | europe-west12 | northamerica-northeast1 | northamerica-northeast2 | us-central1 | us-east1 | us-east4 | us-east5 | us-south1 | us-west1 | us-west2 | us-west3 | us-west4 | southamerica-east1 | southamerica-west1 | asia-east1 | asia-east2 | asia-northeast1 | asia-northeast2 | asia-northeast3 | asia-south1 | asia-south2 | asia-southeast1 | asia-southeast2 | australia-southeast1 | australia-southeast2 | africa-south1` |

#### `GET /postgres.one`

**Query params:**

- `postgresId` _(required)_ string

#### `POST /postgres.changeStatus`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `applicationStatus` | ✓ | string — `idle | running | done | error | stopped` |

#### `POST /postgres.reactivate`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |

#### `POST /postgres.remove`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |

#### `POST /postgres.attachToApplication`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `applicationId` | ✓ | string |

#### `POST /postgres.detachFromApplication`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `applicationId` | ✓ | string |

#### `POST /postgres.updateExternalAccess`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `allowedCidrs` |  | array |
| `enabled` | ✓ | boolean |
| `public` |  | boolean |
| `requireSsl` |  | boolean |
| `postgresId` | ✓ | string |

#### `GET /postgres.getSslCertificate`

**Query params:**

- `postgresId` _(required)_ string

#### `GET /postgres.listTables`

**Query params:**

- `postgresId` _(required)_ string

#### `POST /postgres.previewTable`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `limit` |  | integer |
| `postgresId` | ✓ | string |
| `schema` | ✓ | string |
| `table` | ✓ | string |

#### `POST /postgres.getTableData`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `schema` | ✓ | string |
| `table` | ✓ | string |
| `limit` |  | integer |
| `offset` |  | integer |
| `orderBy` |  | string |
| `orderDir` |  | string — `asc | desc` |

#### `POST /postgres.executeSql`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `sql` | ✓ | string |

#### `POST /postgres.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `name` |  | string |
| `description` |  | string |

#### `GET /postgres.getAnalytics`

**Query params:**

- `postgresId` _(required)_ string

#### `GET /postgres.sharedStats`

**Query params:**

- `postgresId` _(required)_ string

### Mysql

#### `GET /mysql.allByOrganization`

_No parameters._

#### `POST /mysql.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `appName` | ✓ | string |
| `dockerImage` |  | string |
| `organizationId` | ✓ | string |
| `description` |  | string |
| `environmentId` |  | string |
| `databaseName` |  | string |
| `databaseUser` |  | string |
| `databasePassword` |  | string |
| `databaseRootPassword` |  | string |
| `plan` |  | string — `FREE | STARTER | STANDARD | PRO` |
| `region` |  | string — `me-central1 | me-central2 | europe-central2 | europe-north1 | europe-southwest1 | europe-west1 | europe-west2 | europe-west3 | europe-west4 | europe-west6 | europe-west8 | europe-west9 | europe-west10 | europe-west12 | northamerica-northeast1 | northamerica-northeast2 | us-central1 | us-east1 | us-east4 | us-east5 | us-south1 | us-west1 | us-west2 | us-west3 | us-west4 | southamerica-east1 | southamerica-west1 | asia-east1 | asia-east2 | asia-northeast1 | asia-northeast2 | asia-northeast3 | asia-south1 | asia-south2 | asia-southeast1 | asia-southeast2 | australia-southeast1 | australia-southeast2 | africa-south1` |

#### `GET /mysql.one`

**Query params:**

- `mysqlId` _(required)_ string

#### `POST /mysql.changeStatus`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `mysqlId` | ✓ | string |
| `applicationStatus` | ✓ | string — `idle | running | done | error | stopped` |

#### `POST /mysql.reactivate`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `mysqlId` | ✓ | string |

#### `POST /mysql.attachToApplication`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `mysqlId` | ✓ | string |
| `applicationId` | ✓ | string |

#### `POST /mysql.detachFromApplication`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `mysqlId` | ✓ | string |
| `applicationId` | ✓ | string |

#### `POST /mysql.remove`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `mysqlId` | ✓ | string |

#### `POST /mysql.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `mysqlId` | ✓ | string |
| `name` |  | string |
| `description` |  | string |

#### `GET /mysql.sharedStats`

**Query params:**

- `mysqlId` _(required)_ string

### Storage

#### `GET /storage.allByOrganization`

_No parameters._

#### `GET /storage.getEntitlements`

_No parameters._

#### `POST /storage.purchaseStorageSlot`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `tier` | ✓ | string — `STARTER | STANDARD | PRO` |
| `quantity` |  | integer |

#### `POST /storage.releaseStorageSlot`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `tier` | ✓ | string — `STARTER | STANDARD | PRO` |

#### `GET /storage.findById`

**Query params:**

- `bucketId` _(required)_ string

#### `GET /storage.getFiles`

**Query params:**

- `bucketId` _(required)_ string
- `prefix` string
- `maxResults` integer
- `pageToken` string

#### `GET /storage.browse`

**Query params:**

- `bucketId` _(required)_ string
- `prefix` string
- `maxResults` integer
- `pageToken` string

#### `GET /storage.getBucketStats`

**Query params:**

- `bucketId` _(required)_ string

#### `POST /storage.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `description` |  | string |
| `publicAccess` |  | boolean |
| `plan` |  | string — `FREE | STARTER | STANDARD | PRO` |

#### `POST /storage.upgrade`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `targetPlan` | ✓ | string — `STARTER | STANDARD | PRO` |

#### `POST /storage.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |

#### `POST /storage.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `name` |  | string |
| `description` |  | string |
| `publicAccess` |  | boolean |

#### `POST /storage.updateExternalAccess`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `allowedCidrs` |  | array |
| `bucketId` | ✓ | string |
| `enabled` | ✓ | boolean |

#### `POST /storage.getUploadUrl`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `fileName` | ✓ | string |
| `fileSizeBytes` | ✓ | integer |
| `contentType` |  | string |
| `expiresIn` |  | number |

#### `POST /storage.completeUpload`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `reservationToken` |  | string |
| `fileName` |  | string |
| `expectedSizeBytes` |  | integer |
| `existingSizeBytes` |  | integer |

#### `POST /storage.createFolder`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `folderName` | ✓ | string |
| `prefix` |  | string |

#### `POST /storage.getDownloadUrl`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `fileName` | ✓ | string |
| `expiresIn` |  | number |

#### `POST /storage.deleteFile`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `fileName` | ✓ | string |

#### `POST /storage.deleteFolder`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `prefix` | ✓ | string |

#### `POST /storage.move`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `sourcePath` | ✓ | string |
| `destinationPath` | ✓ | string |
| `isFolder` |  | boolean |

#### `GET /storage.getFileVersions`

**Query params:**

- `bucketId` _(required)_ string
- `fileName` _(required)_ string

#### `POST /storage.restoreFileVersion`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `fileName` | ✓ | string |
| `versionId` | ✓ | string |

#### `POST /storage.getVersionDownloadUrl`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bucketId` | ✓ | string |
| `fileName` | ✓ | string |
| `versionId` | ✓ | string |
| `expiresIn` |  | number |

#### `GET /storage.listAccessKeys`

**Query params:**

- `bucketId` _(required)_ string

### Backup

#### `GET /backup.one`

**Query params:**

- `backupId` _(required)_ string

#### `GET /backup.listByDatabase`

**Query params:**

- `postgresId` string
- `mysqlId` string

#### `POST /backup.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `backupId` | ✓ | string |
| `schedule` |  | string |
| `enabled` |  | boolean |
| `prefix` |  | string |
| `destinationId` |  | string |
| `database` |  | string |
| `keepLatestCount` |  | integer |
| `metadata` |  | object |

#### `POST /backup.remove`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `backupId` | ✓ | string |

#### `POST /backup.manualBackupPostgres`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `backupId` | ✓ | string |

#### `POST /backup.manualBackupMySql`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `backupId` | ✓ | string |

#### `POST /backup.manualBackupWebServer`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `backupId` | ✓ | string |

#### `GET /backup.listBackupFiles`

**Query params:**

- `databaseId` _(required)_ string
- `databaseType` _(required)_ string
- `destinationId` _(required)_ string
- `search` _(required)_ string

#### `POST /backup.getBackupDownloadUrl`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `backupFile` | ✓ | string |
| `databaseId` | ✓ | string |
| `databaseType` | ✓ | string — `postgres | mysql` |
| `destinationId` | ✓ | string |

### Domain

#### `GET /domain.all`

**Query params:**

- `includeUnlinked` boolean
- `verifiedOnly` boolean

#### `GET /domain.getAvailable`

_No parameters._

#### `POST /domain.linkToApplication`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `applicationId` | ✓ | string |
| `force` |  | boolean |

#### `POST /domain.unlinkFromApplication`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |

#### `GET /domain.getSetupInstructions`

**Query params:**

- `domainId` _(required)_ string

#### `POST /domain.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `host` | ✓ | string |
| `path` |  | string |
| `port` |  | integer |
| `https` |  | boolean |
| `applicationId` |  | string |
| `certificateType` |  | string — `letsencrypt | none | custom` |
| `customCertResolver` |  | string |
| `serviceName` |  | string |
| `domainType` |  | string — `application | preview` |
| `previewDeploymentId` |  | string |
| `internalPath` |  | string |
| `stripPath` |  | boolean |
| `registeredDomainId` |  | string |
| `subdomain` |  | string |

#### `GET /domain.byApplicationId`

**Query params:**

- `applicationId` _(required)_ string

#### `POST /domain.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `host` |  | string |
| `path` |  | string |
| `port` |  | integer |
| `https` |  | boolean |
| `certificateType` |  | string — `letsencrypt | none | custom` |
| `customCertResolver` |  | string |
| `serviceName` |  | string |
| `domainType` |  | string — `application | preview` |
| `internalPath` |  | string |
| `stripPath` |  | boolean |
| `domainId` | ✓ | string |

#### `GET /domain.one`

**Query params:**

- `domainId` _(required)_ string

#### `POST /domain.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |

#### `POST /domain.validateDomain`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domain` | ✓ | string |
| `serverIp` |  | string |
| `domainId` |  | string |

#### `POST /domain.createWithRegisteredDomain`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `registeredDomainId` | ✓ | string |
| `subdomain` | ✓ | string |
| `applicationId` | ✓ | string |

#### `GET /domain.getAvailableRegisteredDomains`

_No parameters._

#### `GET /domain.getServerIP`

**Query params:**

- `applicationId` _(required)_ string

### Dns

#### `POST /dns.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `registeredDomainId` | ✓ | string |
| `type` | ✓ | string — `A | AAAA | CNAME | MX | TXT | NS | SRV | CAA` |
| `name` | ✓ | string |
| `content` | ✓ | string |
| `ttl` |  | integer |
| `priority` |  | integer |
| `proxied` |  | boolean |

#### `POST /dns.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `recordId` | ✓ | string |
| `type` |  | string — `A | AAAA | CNAME | MX | TXT | NS | SRV | CAA` |
| `name` |  | string |
| `content` |  | string |
| `ttl` |  | integer |
| `priority` |  | integer |
| `proxied` |  | boolean |

#### `POST /dns.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `recordId` | ✓ | string |

#### `GET /dns.getById`

**Query params:**

- `recordId` _(required)_ string

#### `GET /dns.listByDomain`

**Query params:**

- `registeredDomainId` _(required)_ string
- `type` string

#### `POST /dns.sync`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `registeredDomainId` | ✓ | string |

#### `POST /dns.setupCommonRecords`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `registeredDomainId` | ✓ | string |
| `ipAddress` | ✓ | string |

#### `GET /dns.checkPropagation`

**Query params:**

- `recordId` _(required)_ string

### DomainRegistrar

#### `GET /domainRegistrar.registrarReadiness`

_No parameters._

#### `GET /domainRegistrar.searchDomain`

**Query params:**

- `domainName` _(required)_ string

#### `GET /domainRegistrar.searchByKeyword`

**Query params:**

- `keyword` _(required)_ string

#### `POST /domainRegistrar.createSaudiDomainDocumentUpload`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainName` | ✓ | string |
| `fileName` | ✓ | string |
| `contentType` | ✓ | string — `application/pdf | image/jpeg | image/png` |
| `fileSize` | ✓ | integer |

#### `GET /domainRegistrar.getSaudiDomainApplicationOptions`

_No parameters._

#### `POST /domainRegistrar.createRegistrationPayment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainName` | ✓ | string |
| `years` |  | number |
| `privacyEnabled` |  | boolean |
| `autoRenew` |  | boolean |
| `contact` | ✓ | object |
| `saudiApplication` |  | object |
| `saudiDomainDocument` |  | object |

#### `POST /domainRegistrar.createRenewalPayment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `years` |  | number |

#### `POST /domainRegistrar.confirmDomainPayment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `transactionId` |  | string |
| `orderId` |  | string |
| `localTransactionId` |  | string |

#### `POST /domainRegistrar.cancelDomainPayment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `orderId` | ✓ | string |
| `reason` |  | string |

#### `POST /domainRegistrar.addExternalDomain`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainName` | ✓ | string |

#### `POST /domainRegistrar.verifyExternalDomain`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |

#### `GET /domainRegistrar.getAll`

_No parameters._

#### `GET /domainRegistrar.getById`

**Query params:**

- `domainId` _(required)_ string

#### `GET /domainRegistrar.getCertificate`

**Query params:**

- `domainId` _(required)_ string

#### `GET /domainRegistrar.getZoneControls`

**Query params:**

- `domainId` _(required)_ string

#### `POST /domainRegistrar.updateZoneSetting`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `settingId` | ✓ | string — `ssl | always_use_https | automatic_https_rewrites | min_tls_version | tls_1_3 | security_level | browser_check | brotli | hotlink_protection | cache_level | always_online | development_mode | early_hints | email_obfuscation | http2 | http3 | websockets | ip_geolocation | ipv6 | opportunistic_encryption | rocket_loader | browser_cache_ttl | challenge_ttl` |
| `value` | ✓ | object |

#### `POST /domainRegistrar.updateDNSSEC`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `enabled` | ✓ | boolean |

#### `POST /domainRegistrar.createFirewallRule`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `name` | ✓ | string |
| `expression` | ✓ | string |
| `action` | ✓ | string — `block | challenge | managed_challenge | js_challenge | log` |
| `enabled` |  | boolean |

#### `POST /domainRegistrar.updateFirewallRule`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `ruleId` | ✓ | string |
| `name` | ✓ | string |
| `expression` | ✓ | string |
| `action` | ✓ | string — `block | challenge | managed_challenge | js_challenge | log` |
| `enabled` |  | boolean |

#### `POST /domainRegistrar.deleteFirewallRule`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `ruleId` | ✓ | string |

#### `POST /domainRegistrar.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |

#### `POST /domainRegistrar.sync`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |

#### `POST /domainRegistrar.togglePrivacy`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `enabled` | ✓ | boolean |

#### `POST /domainRegistrar.toggleAutoRenew`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `enabled` | ✓ | boolean |

#### `POST /domainRegistrar.requestTransferOut`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `targetRegistrar` | ✓ | string |
| `accountEmail` |  | object |
| `reason` |  | string |

#### `POST /domainRegistrar.requestTransferIn`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainName` | ✓ | string |
| `currentRegistrar` |  | string |
| `note` |  | string |

#### `POST /domainRegistrar.toggleLock`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |
| `locked` | ✓ | boolean |

#### `GET /domainRegistrar.getAuthCode`

**Query params:**

- `domainId` _(required)_ string

#### `GET /domainRegistrar.getSSLStatus`

**Query params:**

- `domainId` _(required)_ string

#### `POST /domainRegistrar.retrySSL`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `domainId` | ✓ | string |

#### `GET /domainRegistrar.transactionHistory`

**Query params:**

- `domainId` _(required)_ string

### Organization

#### `GET /organization.getSubscription`

_No parameters._

#### `GET /organization.all`

_No parameters._

#### `GET /organization.one`

**Query params:**

- `organizationId` _(required)_ string

#### `POST /organization.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `organizationId` |  | string |
| `name` | ✓ | string |
| `logo` |  | string |

#### `GET /organization.allInvitations`

_No parameters._

#### `POST /organization.removeInvitation`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `invitationId` | ✓ | string |

#### `POST /organization.setActive`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `organizationId` | ✓ | string |

### User

#### `GET /user.all`

_No parameters._

#### `GET /user.one`

**Query params:**

- `userId` _(required)_ string

#### `GET /user.get`

_No parameters._

#### `GET /user.haveRootAccess`

_No parameters._

#### `GET /user.getServerMetrics`

_No parameters._

#### `POST /user.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `email` |  | string |
| `password` |  | string |
| `currentPassword` |  | string |
| `name` |  | string |
| `image` |  | string |
| `allowImpersonation` |  | boolean |

#### `GET /user.getUserByToken`

**Query params:**

- `token` _(required)_ string

#### `GET /user.getMetricsToken`

_No parameters._

#### `GET /user.getInvitations`

_No parameters._

#### `GET /user.getContainerMetrics`

**Query params:**

- `appName` _(required)_ string
- `dataPoints` integer

#### `POST /user.generateToken`

_No parameters._

#### `GET /user.listApiKeys`

_No parameters._

#### `GET /user.checkUserOrganizations`

**Query params:**

- `userId` _(required)_ string

#### `POST /user.sendInvitation`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `invitationId` | ✓ | string |
| `notificationId` | ✓ | string |

### Project

#### `GET /project.all`

_No parameters._

#### `GET /project.freeSlotStatus`

_No parameters._

#### `GET /project.one`

**Query params:**

- `projectId` _(required)_ string

#### `GET /project.stats`

**Query params:**

- `projectId` _(required)_ string

#### `GET /project.getActive`

_No parameters._

#### `POST /project.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `slug` |  | string |
| `description` |  | string |

#### `POST /project.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `projectId` | ✓ | string |
| `name` |  | string |
| `description` |  | string |

#### `POST /project.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `projectId` | ✓ | string |

#### `POST /project.setDefault`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `projectId` | ✓ | string |

#### `POST /project.setActive`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `projectId` | ✓ | string |

### Server

#### `GET /server.list`

_No parameters._

#### `GET /server.getById`

**Query params:**

- `serverId` _(required)_ string

#### `GET /server.getHealth`

**Query params:**

- `serverId` _(required)_ string

#### `POST /server.provisionDedicated`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `size` | ✓ | string — `SMALL | MEDIUM | LARGE` |
| `region` |  | string |

#### `POST /server.retryDedicatedProvisioning`

_No parameters._

#### `POST /server.decommission`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |

#### `POST /server.upgradeServer`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |
| `newSize` | ✓ | string — `SMALL | MEDIUM | LARGE` |

#### `POST /server.upgradeBlueGreen`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |
| `newSize` | ✓ | string — `SMALL | MEDIUM | LARGE` |

#### `POST /server.completeCutover`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `blueServerId` | ✓ | string |

#### `POST /server.rollbackCutover`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `blueServerId` | ✓ | string |

#### `POST /server.migrateSharedAppsToDedicated`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `dedicatedServerId` | ✓ | string |
| `applicationIds` |  | array |

#### `POST /server.completeSharedToDedicated`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `dedicatedServerId` | ✓ | string |

#### `POST /server.rollbackSharedToDedicated`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `dedicatedServerId` | ✓ | string |

#### `POST /server.cancelBlueGreenUpgrade`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `blueServerId` | ✓ | string |

#### `GET /server.getBlueGreenStatus`

**Query params:**

- `blueServerId` _(required)_ string

#### `POST /server.requestEnterprise`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `message` |  | string |

#### `GET /server.getAvailableSizes`

_No parameters._

### Billing

#### `GET /billing.getUsageBreakdown`

**Query params:**

- `startDate` string
- `endDate` string

#### `GET /billing.getDetailedResourceUsage`

**Query params:**

- `startDate` string
- `endDate` string

#### `GET /billing.getDailyCostTrend`

**Query params:**

- `startDate` string
- `endDate` string

#### `GET /billing.getResourceEstimate`

**Query params:**

- `resourceType` _(required)_ string
- `estimatedBandwidthGbPerMonth` number
- `storageGb` number
- `backupGb` number
- `vmSize` string
- `vmType` string
- `serverSize` string
- `appPlan` string

#### `GET /billing.getActiveResources`

_No parameters._

### Payment

#### `GET /payment.getCheckoutOrder`

**Query params:**

- `orderId` _(required)_ string

#### `POST /payment.listInvoices`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `take` |  | integer |
| `status` |  | array |

#### `GET /payment.getInvoice`

**Query params:**

- `invoiceId` _(required)_ string

#### `POST /payment.payInvoiceNow`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `invoiceId` | ✓ | string |

### Wallet

#### `GET /wallet.getStatus`

_No parameters._

#### `GET /wallet.getBalance`

_No parameters._

#### `GET /wallet.getLedger`

**Query params:**

- `days` number
- `type` string
- `limit` number

#### `POST /wallet.createTopupCheckout`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `amountHalalas` |  | integer |
| `redirectPath` |  | string |

#### `POST /wallet.acceptAgreement`

_No parameters._

#### `POST /wallet.confirmTopup`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `orderId` | ✓ | string |
| `transactionId` |  | string |

#### `POST /wallet.cancelTopup`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `orderId` | ✓ | string |
| `reason` |  | string |

### Subscription

#### `GET /subscription.getSummary`

_No parameters._

#### `GET /subscription.getStanding`

_No parameters._

#### `GET /subscription.getCurrent`

_No parameters._

#### `GET /subscription.getCatalog`

_No parameters._

#### `POST /subscription.previewPlanChange`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `planKey` | ✓ | string |
| `planQuantity` |  | integer |
| `billingPeriod` |  | string — `monthly | yearly` |
| `addons` |  | array |

#### `POST /subscription.confirmCheckout`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `orderId` | ✓ | string |
| `transactionId` |  | string |
| `paymentId` |  | string |

#### `POST /subscription.cancelCheckout`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `orderId` | ✓ | string |
| `reason` |  | string |

#### `GET /subscription.pollCheckoutStatus`

**Query params:**

- `orderId` _(required)_ string

#### `GET /subscription.getMigratableSharedAppsCount`

_No parameters._

#### `POST /subscription.migrateSharedAppsToDedicated`

_No parameters._

#### `GET /subscription.getActiveMigration`

_No parameters._

#### `POST /subscription.completeSharedToDedicatedCutover`

_No parameters._

#### `POST /subscription.changePlan`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `planKey` | ✓ | string |
| `planQuantity` |  | integer |
| `billingPeriod` |  | string — `monthly | yearly` |
| `addons` |  | array |

#### `POST /subscription.setPlanQuantity`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `planQuantity` | ✓ | integer |

#### `POST /subscription.addAddon`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `addonKey` | ✓ | string |
| `quantity` |  | integer |

#### `POST /subscription.updateAddonQuantity`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `addonKey` | ✓ | string |
| `quantity` | ✓ | integer |

#### `POST /subscription.removeAddon`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `addonKey` | ✓ | string |

#### `POST /subscription.previewAddonsPurchase`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `items` | ✓ | array |
| `planQuantity` |  | integer |

#### `POST /subscription.purchaseAddons`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `items` | ✓ | array |
| `planQuantity` |  | integer |

#### `GET /subscription.previewDatabaseUpgrade`

**Query params:**

- `postgresId` _(required)_ string
- `targetPlan` _(required)_ string

#### `POST /subscription.purchaseDatabaseUpgrade`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `targetPlan` | ✓ | string — `STARTER | STANDARD | PRO` |

#### `GET /subscription.previewDatabaseDowngrade`

**Query params:**

- `postgresId` _(required)_ string
- `targetPlan` _(required)_ string

#### `POST /subscription.purchaseDatabaseDowngrade`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `postgresId` | ✓ | string |
| `targetPlan` | ✓ | string — `STARTER | STANDARD` |

#### `POST /subscription.cancel`

_No parameters._

#### `POST /subscription.resume`

_No parameters._

#### `POST /subscription.cancelPendingPlanChange`

_No parameters._

### GitProvider

#### `GET /gitProvider.getAll`

_No parameters._

#### `GET /gitProvider.allProviders`

_No parameters._

#### `POST /gitProvider.remove`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `gitProviderId` | ✓ | string |

### Github

#### `GET /github.createSetupState`

**Query params:**

- `action` _(required)_ string
- `githubId` string

#### `GET /github.one`

**Query params:**

- `githubId` _(required)_ string

#### `GET /github.getGithubRepositories`

**Query params:**

- `githubId` _(required)_ string

#### `GET /github.getGithubBranches`

**Query params:**

- `repo` _(required)_ string
- `owner` _(required)_ string
- `githubId` string

#### `GET /github.githubProviders`

_No parameters._

#### `POST /github.testConnection`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `githubId` | ✓ | string |

#### `POST /github.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `githubId` | ✓ | string |
| `name` | ✓ | string |
| `gitProviderId` | ✓ | string |
| `githubAppName` | ✓ | string |

### Gitlab

#### `POST /gitlab.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` |  | string |
| `secret` |  | string |
| `groupName` |  | string |
| `gitProviderId` |  | string |
| `redirectUri` |  | string |
| `authId` | ✓ | string |
| `name` | ✓ | string |
| `gitlabUrl` | ✓ | string |

#### `GET /gitlab.one`

**Query params:**

- `gitlabId` _(required)_ string

#### `GET /gitlab.gitlabProviders`

_No parameters._

#### `GET /gitlab.getGitlabRepositories`

**Query params:**

- `gitlabId` _(required)_ string

#### `GET /gitlab.getGitlabBranches`

**Query params:**

- `id` number
- `owner` _(required)_ string
- `repo` _(required)_ string
- `gitlabId` string

#### `POST /gitlab.testConnection`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `gitlabId` | ✓ | string |
| `groupName` |  | string |

#### `POST /gitlab.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `applicationId` |  | string |
| `secret` |  | string |
| `groupName` |  | string |
| `redirectUri` |  | string |
| `name` | ✓ | string |
| `gitlabId` | ✓ | string |
| `gitProviderId` | ✓ | string |
| `gitlabUrl` | ✓ | string |

### Bitbucket

#### `POST /bitbucket.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bitbucketUsername` |  | string |
| `bitbucketEmail` |  | string |
| `appPassword` |  | string |
| `apiToken` |  | string |
| `bitbucketWorkspaceName` |  | string |
| `gitProviderId` |  | string |
| `authId` | ✓ | string |
| `name` | ✓ | string |

#### `GET /bitbucket.one`

**Query params:**

- `bitbucketId` _(required)_ string

#### `GET /bitbucket.bitbucketProviders`

_No parameters._

#### `GET /bitbucket.getBitbucketRepositories`

**Query params:**

- `bitbucketId` _(required)_ string

#### `GET /bitbucket.getBitbucketBranches`

**Query params:**

- `owner` _(required)_ string
- `repo` _(required)_ string
- `bitbucketId` _(required)_ string

#### `POST /bitbucket.testConnection`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bitbucketId` | ✓ | string |
| `bitbucketUsername` |  | string |
| `bitbucketEmail` |  | string |
| `workspaceName` |  | string |
| `apiToken` |  | string |
| `appPassword` |  | string |

#### `POST /bitbucket.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `bitbucketId` | ✓ | string |
| `gitProviderId` | ✓ | string |
| `name` | ✓ | string |
| `bitbucketUsername` |  | string |
| `bitbucketEmail` |  | string |
| `appPassword` |  | string |
| `apiToken` |  | string |
| `bitbucketWorkspaceName` |  | string |
| `organizationId` |  | string |

### Gitea

#### `POST /gitea.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `giteaUrl` | ✓ | string |
| `accessToken` | ✓ | string |

#### `GET /gitea.one`

**Query params:**

- `giteaId` _(required)_ string

#### `GET /gitea.giteaProviders`

_No parameters._

#### `GET /gitea.getGiteaRepositories`

**Query params:**

- `giteaId` _(required)_ string

#### `GET /gitea.getGiteaBranches`

**Query params:**

- `giteaId` _(required)_ string
- `owner` _(required)_ string
- `repo` _(required)_ string

#### `POST /gitea.testConnection`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `giteaId` | ✓ | string |

#### `POST /gitea.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `giteaId` | ✓ | string |
| `name` | ✓ | string |
| `giteaUrl` | ✓ | string |
| `accessToken` |  | string |

### SshKey

#### `GET /sshKey.list`

_No parameters._

#### `POST /sshKey.add`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `publicKey` | ✓ | string |

#### `POST /sshKey.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |

#### `POST /sshKey.setDefault`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |

#### `POST /sshKey.deployToServer`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |
| `serverId` | ✓ | string |

#### `POST /sshKey.removeFromServer`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |
| `serverId` | ✓ | string |

#### `GET /sshKey.listServerKeys`

**Query params:**

- `serverId` _(required)_ string

### FirewallTemplate

#### `GET /firewallTemplate.list`

_No parameters._

#### `GET /firewallTemplate.get`

**Query params:**

- `id` _(required)_ string

#### `POST /firewallTemplate.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `description` |  | string |
| `rules` | ✓ | array |

#### `POST /firewallTemplate.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |
| `name` |  | string |
| `description` |  | string |
| `rules` |  | array |

#### `POST /firewallTemplate.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /firewallTemplate.applyToServer`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `templateId` | ✓ | string |
| `serverId` | ✓ | string |

#### `POST /firewallTemplate.removeFromServer`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `templateId` | ✓ | string |
| `serverId` | ✓ | string |

#### `GET /firewallTemplate.listAssignments`

**Query params:**

- `serverId` _(required)_ string

### VirtualMachine

#### `GET /virtualMachine.getServerTypes`

**Query params:**

- `type` string
- `providerId` string

#### `GET /virtualMachine.getRunPodDockerImages`

_No parameters._

#### `GET /virtualMachine.isRunPodAvailable`

_No parameters._

#### `GET /virtualMachine.getOSImages`

_No parameters._

#### `GET /virtualMachine.checkQuota`

_No parameters._

#### `GET /virtualMachine.list`

**Query params:**

- `status` string
- `serverType` string
- `providerId` string

#### `GET /virtualMachine.get`

**Query params:**

- `id` _(required)_ string

#### `POST /virtualMachine.stop`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /virtualMachine.start`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /virtualMachine.terminate`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /virtualMachine.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /virtualMachine.syncStatus`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /virtualMachine.restart`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /virtualMachine.resize`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |
| `newServerSize` | ✓ | string |

#### `GET /virtualMachine.getConsoleOutput`

**Query params:**

- `id` _(required)_ string

#### `GET /virtualMachine.getMetrics`

**Query params:**

- `id` _(required)_ string
- `timeRange` string

#### `POST /virtualMachine.createSnapshot`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |
| `name` | ✓ | string |
| `description` |  | string |

#### `GET /virtualMachine.listSnapshots`

**Query params:**

- `serverId` _(required)_ string

#### `POST /virtualMachine.deleteSnapshot`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `snapshotId` | ✓ | string |

#### `POST /virtualMachine.createFirewallRule`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |
| `name` | ✓ | string |
| `protocol` | ✓ | string — `tcp | udp | icmp` |
| `portRange` | ✓ | string |
| `sourceRanges` |  | string |
| `direction` |  | string — `ingress | egress` |

#### `GET /virtualMachine.listFirewallRules`

**Query params:**

- `serverId` _(required)_ string

#### `POST /virtualMachine.deleteFirewallRule`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ruleId` | ✓ | string |

#### `GET /virtualMachine.listVolumes`

**Query params:**

- `serverId` _(required)_ string

#### `POST /virtualMachine.createVolume`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |
| `name` | ✓ | string |
| `sizeGb` | ✓ | integer |
| `diskType` |  | string — `balanced | ssd | standard` |

#### `POST /virtualMachine.deleteVolume`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `volumeId` | ✓ | string |

#### `POST /virtualMachine.attachVolume`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `volumeId` | ✓ | string |

#### `POST /virtualMachine.detachVolume`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `volumeId` | ✓ | string |

#### `POST /virtualMachine.resizeVolume`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `volumeId` | ✓ | string |
| `newSizeGb` | ✓ | integer |

#### `GET /virtualMachine.listReservedIps`

_No parameters._

#### `POST /virtualMachine.reserveIp`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `region` | ✓ | string |

#### `POST /virtualMachine.releaseIp`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ipId` | ✓ | string |

#### `POST /virtualMachine.assignIp`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ipId` | ✓ | string |
| `serverId` | ✓ | string |

#### `POST /virtualMachine.unassignIp`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ipId` | ✓ | string |

#### `POST /virtualMachine.rescueMode`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |
| `enable` | ✓ | boolean |

#### `GET /virtualMachine.listAlertConfigs`

**Query params:**

- `serverId` _(required)_ string

#### `POST /virtualMachine.upsertAlertConfig`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `serverId` | ✓ | string |
| `metricType` | ✓ | string — `cpu | memory | disk_read | disk_write | network_in | network_out` |
| `thresholdValue` | ✓ | number |
| `comparisonOp` |  | string — `gt | lt | gte | lte` |
| `durationMinutes` |  | integer |
| `enabled` |  | boolean |

#### `POST /virtualMachine.deleteAlertConfig`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `alertId` | ✓ | string |

#### `POST /virtualMachine.cancelSubscription`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

### UptimeMonitor

#### `GET /uptimeMonitor.list`

**Query params:**

- `applicationId` _(required)_ string

#### `GET /uptimeMonitor.one`

**Query params:**

- `monitorId` _(required)_ string

#### `POST /uptimeMonitor.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `applicationId` | ✓ | string |
| `url` | ✓ | string |
| `method` |  | string — `GET | POST | HEAD | PUT | DELETE` |
| `headers` |  | string |
| `expectedStatus` |  | number |
| `expectedBody` |  | string |
| `checkInterval` |  | string |
| `failureThreshold` |  | number |
| `enabled` |  | boolean |

#### `POST /uptimeMonitor.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `monitorId` | ✓ | string |
| `name` |  | string |
| `url` |  | string |
| `method` |  | string — `GET | POST | HEAD | PUT | DELETE` |
| `headers` |  | string |
| `expectedStatus` |  | number |
| `expectedBody` |  | string |
| `checkInterval` |  | string |
| `failureThreshold` |  | number |
| `enabled` |  | boolean |

#### `POST /uptimeMonitor.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `monitorId` | ✓ | string |

#### `GET /uptimeMonitor.getStats`

**Query params:**

- `monitorId` _(required)_ string

#### `GET /uptimeMonitor.getLogs`

**Query params:**

- `monitorId` _(required)_ string
- `limit` number

#### `POST /uptimeMonitor.performCheck`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `monitorId` | ✓ | string |

### Notification

#### `GET /notification.all`

_No parameters._

#### `GET /notification.getOrCreate`

_No parameters._

#### `GET /notification.one`

**Query params:**

- `notificationId` _(required)_ string

#### `POST /notification.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `appDeploy` |  | boolean |
| `appBuildError` |  | boolean |
| `databaseBackup` |  | boolean |
| `dockerCleanup` |  | boolean |
| `serverThreshold` |  | boolean |
| `uptimeAlert` |  | boolean |
| `additionalEmails` |  | array |

#### `POST /notification.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` |  | string |
| `appDeploy` |  | boolean |
| `appBuildError` |  | boolean |
| `databaseBackup` |  | boolean |
| `dockerCleanup` |  | boolean |
| `serverThreshold` |  | boolean |
| `uptimeAlert` |  | boolean |
| `additionalEmails` |  | array |
| `notificationId` | ✓ | string |
| `organizationId` |  | string |

#### `POST /notification.save`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `appDeploy` |  | boolean |
| `appBuildError` |  | boolean |
| `databaseBackup` |  | boolean |
| `dockerCleanup` |  | boolean |
| `serverThreshold` |  | boolean |
| `uptimeAlert` |  | boolean |
| `additionalEmails` |  | array |

#### `POST /notification.remove`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `notificationId` | ✓ | string |

#### `GET /notification.getEmailProviders`

_No parameters._

#### `POST /notification.sendToAdmin`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `title` | ✓ | string |
| `message` | ✓ | string |
| `type` |  | string — `info | warning | error` |

### AppNotification

#### `GET /appNotification.list`

**Query params:**

- `limit` number
- `cursor` string
- `unreadOnly` string

#### `GET /appNotification.getById`

**Query params:**

- `notificationId` _(required)_ string

#### `GET /appNotification.unreadCount`

_No parameters._

#### `POST /appNotification.markRead`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `notificationId` | ✓ | string |

#### `POST /appNotification.markUnread`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `notificationId` | ✓ | string |

#### `POST /appNotification.markAllRead`

_No parameters._

#### `POST /appNotification.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `notificationId` | ✓ | string |

#### `POST /appNotification.clearAll`

_No parameters._

### MachineAlert

#### `GET /machineAlert.list`

**Query params:**

- `status` string
- `severity` string
- `serverId` string
- `limit` integer

#### `GET /machineAlert.summary`

_No parameters._

#### `POST /machineAlert.acknowledge`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /machineAlert.resolve`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |

#### `POST /machineAlert.mute`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `id` | ✓ | string |
| `minutes` | ✓ | integer |

### Dashboard

#### `GET /dashboard.getActivePlans`

_No parameters._

#### `GET /dashboard.getOverview`

_No parameters._

#### `GET /dashboard.getRecentActivity`

_No parameters._

#### `GET /dashboard.getActiveDeployment`

_No parameters._

#### `GET /dashboard.getActionItems`

_No parameters._

#### `GET /dashboard.getAgentActivity`

**Query params:**

- `scope` string
- `limit` integer
- `cursor` string

### Settings

#### `GET /settings.getTaroutVersion`

_No parameters._

#### `GET /settings.getReleaseTag`

_No parameters._

#### `GET /settings.getOpenApiDocument`

_No parameters._

#### `GET /settings.getSurfaceManifest`

_No parameters._

#### `GET /settings.isCloud`

_No parameters._

#### `GET /settings.isUserSubscribed`

_No parameters._

#### `GET /settings.health`

_No parameters._

### Ai

#### `GET /ai.one`

**Query params:**

- `aiId` _(required)_ string

#### `POST /ai.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `apiUrl` | ✓ | string |
| `apiKey` | ✓ | string |
| `model` | ✓ | string |
| `isEnabled` | ✓ | boolean |

#### `POST /ai.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `aiId` | ✓ | string |
| `name` |  | string |
| `apiUrl` |  | string |
| `apiKey` |  | string |
| `model` |  | string |
| `isEnabled` |  | boolean |
| `createdAt` |  | string |

#### `GET /ai.getAll`

_No parameters._

#### `GET /ai.get`

**Query params:**

- `aiId` _(required)_ string

#### `POST /ai.delete`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `aiId` | ✓ | string |

### AiGateway

#### `GET /aiGateway.getAvailableModels`

_No parameters._

#### `GET /aiGateway.checkProviderAvailability`

_No parameters._

#### `GET /aiGateway.listKeys`

_No parameters._

#### `GET /aiGateway.getKeyDetails`

**Query params:**

- `keyId` _(required)_ string

#### `GET /aiGateway.getKeyUsage`

**Query params:**

- `keyId` _(required)_ string
- `days` number

#### `GET /aiGateway.getOrganizationUsage`

**Query params:**

- `days` number

#### `POST /aiGateway.updateKey`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |
| `keyName` |  | string |
| `isEnabled` |  | boolean |
| `expiresAt` |  | string |

#### `POST /aiGateway.revokeKey`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |

#### `POST /aiGateway.deleteKey`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `keyId` | ✓ | string |

### SupportTicket

#### `GET /supportTicket.list`

**Query params:**

- `status` string
- `limit` number
- `cursor` string

#### `GET /supportTicket.getById`

**Query params:**

- `ticketId` _(required)_ string

#### `POST /supportTicket.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `subject` | ✓ | string |
| `description` | ✓ | string |
| `priority` | ✓ | string — `low | medium | high | critical` |
| `category` | ✓ | string — `billing | technical | account | feature_request | enterprise` |
| `isBlockingProduction` |  | boolean |

#### `POST /supportTicket.addMessage`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ticketId` | ✓ | string |
| `content` | ✓ | string |

#### `POST /supportTicket.close`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ticketId` | ✓ | string |

#### `GET /supportTicket.unreadCount`

_No parameters._

#### `POST /supportTicket.getUploadUrl`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `ticketId` | ✓ | string |
| `fileName` | ✓ | string |
| `contentType` | ✓ | string |
| `fileSize` | ✓ | integer |

#### `POST /supportTicket.createAttachment`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `messageId` | ✓ | string |
| `fileName` | ✓ | string |
| `fileSize` | ✓ | integer |
| `contentType` | ✓ | string |
| `storageKey` | ✓ | string |

#### `GET /supportTicket.getDownloadUrl`

**Query params:**

- `attachmentId` _(required)_ string

### Destination

#### `GET /destination.all`

_No parameters._

#### `GET /destination.byId`

**Query params:**

- `id` _(required)_ string

#### `POST /destination.create`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `name` | ✓ | string |
| `provider` |  | string — `aws | s3 | gcs | tarout-object-storage | minio | wasabi | other` |
| `bucket` | ✓ | string |
| `region` | ✓ | string |
| `endpoint` | ✓ | string |
| `accessKey` | ✓ | string |
| `secretAccessKey` | ✓ | string |

#### `POST /destination.update`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `destinationId` | ✓ | string |
| `name` |  | string |
| `bucket` |  | string |
| `region` |  | string |
| `endpoint` |  | string |
| `accessKey` |  | string |
| `secretAccessKey` |  | string |

#### `POST /destination.remove`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `destinationId` | ✓ | string |

#### `POST /destination.test`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `destinationId` | ✓ | string |

#### `POST /destination.testCredentials`

**Request body:**

| Field | Required | Type |
|-------|----------|------|
| `provider` |  | string |
| `bucket` | ✓ | string |
| `region` | ✓ | string |
| `endpoint` | ✓ | string |
| `accessKey` | ✓ | string |
| `secretAccessKey` | ✓ | string |

---

## Known Issues & Gaps

1. **Response schemas not documented.** The OpenAPI spec returns `{}` for all 200 responses — no field-level response contracts are defined. Response shapes must be inferred from live calls or source code.
2. **`POST /user.generateToken`** — no documented body. Assumed to return an API key; exact response shape unknown.
3. **`application.saveBuildType`** accepts `buildType` with no enum defined in the spec — valid values must be inferred from the UI or source code.
4. **`application.create` `buildConfig`** field is typed as `object` with no sub-schema — structure unknown without source code.
5. **`virtualMachine` endpoints** — `type` and `providerId` query params on `getServerTypes` have no enum; valid values undocumented.
6. **Pagination** — no cursor/offset parameters are documented on list endpoints; unclear if server-side pagination exists.
7. **`application.saveRegion`** — `region` field has no enum of valid regions.

---

## Environment Variables (client-side)

When deploying apps to Tarout, the platform injects the following into the container:

| Variable | Description |
|----------|-------------|
| `PORT` | Port the app must listen on (injected by platform — do not hardcode) |
| `ALLOWED_ORIGIN` | CORS origin; set to your frontend URL in production |

All other env vars are user-defined via `POST /application.saveEnvironment` or the dashboard.
