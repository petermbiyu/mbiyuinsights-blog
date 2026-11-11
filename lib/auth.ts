import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  session: {
    // Expire after 30 minutes of inactivity (adjust as needed)
    expiresIn: 60 * 30,
    // Refresh the session every 5 minutes while active
    updateAge: 60 * 5,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5,
    },
  },
  advanced: {
    cookies: {
      session_token: {
        attributes: {
          // Removes persistent Max-Age so the cookie clears when the browser closes
          maxAge: undefined,
          expires: undefined,
        },
      },
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_SECRET as string,
      clientSecret: process.env.GOOGLE_CLIENT_ID as string,
    },
  },
  plugins: [nextCookies()],
});
