// Prints the shape of the database and sign-in settings at build time, never the values:
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

// Sign-in settings: the secret's length only, and the site address (not secret).
const secret = process.env.BETTER_AUTH_SECRET;
console.log(
  `[auth-env] BETTER_AUTH_SECRET: ${secret === undefined ? "not set" : `length ${secret.length}, whitespace ${/\s/.test(secret)}`}`,
);
const url = process.env.BETTER_AUTH_URL;
console.log(`[auth-env] BETTER_AUTH_URL: ${url === undefined ? "not set" : /^https?:\/\/[^\s"']+$/.test(url) ? url : `malformed (length ${url.length})`}`);
const resend = process.env.RESEND_API_KEY;
console.log(
  `[auth-env] RESEND_API_KEY: ${resend === undefined ? "not set" : `starts with re_ ${resend.startsWith("re_")}, length ${resend.length}, whitespace ${/\s/.test(resend)}`}, EMAIL_FROM: ${process.env.EMAIL_FROM ?? "not set"}`,
);
