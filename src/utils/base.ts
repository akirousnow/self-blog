const base = import.meta.env.BASE_URL.replace(/\/$/, '')

/**
 * Prefix a root-relative path with the configured Astro `base`.
 * Absolute URLs, protocol-relative URLs and fragments are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^[a-z][a-z\d+.-]*:/i.test(path) || path.startsWith('//') || path.startsWith('#')) {
    return path
  }

  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
