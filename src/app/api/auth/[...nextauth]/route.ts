import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from "../../../../../lib/prisma";
import { comparePassword } from "@/lib/utils";


export const authOpt : AuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      credentials: {
      email: {
        type: "email",
        label: "email",
      },
      password: {
        type: "password",
        label: "password",
      }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          }
        })
        if (!user) return null;
        const isMatch = await comparePassword(credentials?.password!!, user.password);
        if (isMatch) return user;
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/signup',
  },
  callbacks: {
    async jwt({account, token, user }) {
      if (account) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.id = token.id
      }
      return session;
    }
  }
}

const handler = NextAuth(authOpt);
export {handler as POST, handler as GET}

