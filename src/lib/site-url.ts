// Public address of the site, for structured data and share links that must
// be absolute URLs.
export const SITE_URL = "https://www.herbssearch.com";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
