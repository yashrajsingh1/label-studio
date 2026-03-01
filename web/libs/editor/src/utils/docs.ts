/**
 * Returns the base URL for documentation depending on deployment type.
 * - Enterprise: https://docs.mercedes-benz.com/
 * - Open Source: https://labelstud.io/
 */
export function getDocsBaseUrl(): string {
  if (typeof window !== "undefined" && window.APP_SETTINGS?.billing?.enterprise) {
    return "https://docs.mercedes-benz.com/";
  }
  return "https://labelstud.io/";
}

/**
 * Returns a full documentation URL for the current deployment type.
 *
 * Usage:
 *   getDocsUrl('guide/labeling') // same path for both domains
 *   getDocsUrl('guide/labeling', 'guide/label-guide') // first param for labelstud.io, second for docs.mercedes-benz.com
 *
 * @param pathOSS - Path for labelstud.io (and default for both if only one param)
 * @param pathEnterprise - Optional path for docs.mercedes-benz.com
 * @returns {string} Full documentation URL
 */
export function getDocsUrl(pathOSS: string, pathEnterprise?: string): string {
  const base = getDocsBaseUrl();
  const isEnterprise = typeof window !== "undefined" && window.APP_SETTINGS?.billing?.enterprise;
  const path = isEnterprise && pathEnterprise ? pathEnterprise : pathOSS;
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
