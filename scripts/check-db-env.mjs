// Prints the shape of the database settings at build time, never the values:
// whether each is set, whether it starts with a valid scheme, stray quotes or
// whitespace, and the first characters of the Neon endpoint. Helps diagnose
// Prisma P1013 ("scheme is not recognized") on Vercel, where values are hidden.

for (const key of ["DATABASE_URL", "DATABASE_URL_UNPOOLED"]) {
  const v = process.env[key];
  if (v === undefined) {
    console.log(`[db-env] ${key}: not set`);
    continue;
  }
  const scheme = /^postgres(ql)?:\/\//.test(v) ? "ok" : `bad (starts with char code ${v.charCodeAt(0)})`;
  const host = (v.match(/@([^/:?]+)/)?.[1] ?? "").split(".")[0];
  console.log(
    `[db-env] ${key}: length ${v.length}, scheme ${scheme}, quotes ${/["'“”]/.test(v)}, whitespace ${/\s/.test(v)}, endpoint ${host.slice(0, 12) || "?"}…`,
  );
}
