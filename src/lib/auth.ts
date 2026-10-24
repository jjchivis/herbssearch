import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";
import { prisma } from "@/lib/prisma";
import { sendEmail, signInEmail } from "@/lib/email";

// Email sign-in links only (no passwords). Sessions and users live in the same
// Postgres database as the herb content. BETTER_AUTH_SECRET and BETTER_AUTH_URL
// are read from the environment by Better Auth itself.

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  user: {
    additionalFields: {
      // "customer" or "admin". input: false means sign-up and profile updates
      // can never set it; only server code (and the make-admin script) can.
      role: { type: "string", required: false, defaultValue: "customer", input: false },
    },
  },
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await sendEmail({ to: email, ...signInEmail(url) });
      },
    }),
    nextCookies(), // must stay last so server actions can set session cookies
  ],
});

export type SessionUser = typeof auth.$Infer.Session.user;
