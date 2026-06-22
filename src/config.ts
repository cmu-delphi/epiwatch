// Leave empty by default so requests are same-origin relative paths and get
// forwarded by the dev proxy (see vite.config.ts) / host redirects in prod,
// avoiding browser CORS. Set VITE_API_BASE_URL to call a server directly.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
