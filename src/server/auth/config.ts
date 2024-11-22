import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { compare } from "bcrypt";
import { type User, type DefaultSession, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { type DefaultJWT } from "next-auth/jwt";

import { db } from "~/server/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "~/server/db/schema";
import { LoginSchema } from "../validator/auth";

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
      role: "USER" | "ADMIN";
    } & DefaultSession["user"];
  }

  interface User {
    role: "USER" | "ADMIN";
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: "USER" | "ADMIN";
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Your email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          if (credentials?.email === undefined) {
            throw new Error("Email not provided");
          }

          const user = await db.query.users.findFirst({
            where: (users, { eq }) => eq(users.email, email),
          });

          if (!user) {
            throw new Error("User not found!");
          }

          if (!user.password) {
            throw new Error("You're not configured password yet");
          }

          if (!credentials) {
            throw new Error("Something went wrong");
          }

          const passwordMatch = await compare(password, user.password);

          if (!passwordMatch) {
            throw new Error(" Email and password doest match");
          }

          const userData: User = {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
          };

          return userData;
        }

        return null;
      },
    }),
  ],
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token.role = user.role;
      if (user) token.id = user.id!;
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.id,
        role: token.role,
      },
    }),
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
} satisfies NextAuthConfig;
