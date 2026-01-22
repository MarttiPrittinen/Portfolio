/**
 * Database abstraction layer for Next.js on Cloudflare
 *
 * Uses Cloudflare D1 via @cloudflare/next-on-pages
 *
 * Note: Configure D1 in wrangler.toml:
 * [[d1_databases]]
 * binding = "DB"
 * database_name = "your-db-name"
 * database_id = "your-database-id"
 */

export interface CloudflareEnv {
  DB?: any;
}

export function getDb() {
  return null;
}

/**
 * Get D1 database from Cloudflare context
 */
function getD1(): D1Database | null {
  try {
    const ctx = getRequestContext()
    return (ctx.env as CloudflareEnv)?.DB ?? null
  } catch {
    // Not in Cloudflare context (local dev without wrangler)
    return null
  }
}

/**
 * Query the database (SELECT)
 */
export async function query<T = Record<string, unknown>>(
  sql: string,
  params: unknown[] = []
): Promise<T[]> {
  const db = getD1()
  if (!db) {
    console.warn('D1 database not configured. Run with wrangler or configure D1 in wrangler.toml')
    return []
  }
  const stmt = db.prepare(sql)
  const result = await stmt.bind(...params).all()
  return result.results as T[]
}

/**
 * Query single row
 */
export async function queryOne<T = Record<string, unknown>>(
  sql: string,
  params: unknown[] = []
): Promise<T | null> {
  const db = getD1()
  if (!db) {
    console.warn('D1 database not configured. Run with wrangler or configure D1 in wrangler.toml')
    return null
  }
  const stmt = db.prepare(sql)
  const result = await stmt.bind(...params).first()
  return result as T | null
}

/**
 * Execute statement (INSERT/UPDATE/DELETE)
 */
export async function execute(
  sql: string,
  params: unknown[] = []
): Promise<{ lastRowId: number; changes: number }> {
  const db = getD1()
  if (!db) {
    console.warn('D1 database not configured. Run with wrangler or configure D1 in wrangler.toml')
    return { lastRowId: 0, changes: 0 }
  }
  const stmt = db.prepare(sql)
  const result = await stmt.bind(...params).run()
  return {
    lastRowId: result.meta.last_row_id || 0,
    changes: result.meta.changes || 0
  }
}
