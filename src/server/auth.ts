import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { TokenSet } from "next-auth";

import { env } from "@/env";
import { db } from "@/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"],
    error: string;
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async({ session, user }) => {
      const [google] = await db.account.findMany({
        where: { userId: user.id, provider: "google" },
      })
      if(!google) return session
      if ((google?.expires_at??0) * 1000 < Date.now()) {
        try {
          // https://accounts.google.com/.well-known/openid-configuration
          // We need the `token_endpoint`.
          const response = await fetch("https://oauth2.googleapis.com/token", {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              client_id: process.env.GOOGLE_ID ?? "",
              client_secret: process.env.GOOGLE_SECRET ?? "",
              grant_type: "refresh_token",
              refresh_token: google?.refresh_token ?? "",
            }).toString(),
            method: "POST",
          })

          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const tokens: TokenSet = await response.json();

          await db.account.update({
            data: {
              access_token: tokens.access_token,
              expires_at: Math.floor(Date.now() / 1000 + (tokens.expires_at ?? 0)),
              refresh_token: tokens.refresh_token ?? google?.refresh_token,
            },
            where: {
              provider_providerAccountId: {
                provider: "google",
                providerAccountId: google.providerAccountId,
              },
            },
          })
        } catch (error) {
          console.error("Error refreshing access token", error)
          // The error property will be used client-side to handle the refresh token error
          session.error = "RefreshAccessTokenError"
        }
      }
      return {
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }
    
  },
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
