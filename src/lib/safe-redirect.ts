/** Only same-site paths, so a crafted ?next= link can't send people elsewhere. */
export function safeNextPath(next: string | undefined | null, fallback = "/account") {
  if (!next || !next.startsWith("/") || next.startsWith("//") || next.startsWith("/\\")) return fallback;
  return next;
}
