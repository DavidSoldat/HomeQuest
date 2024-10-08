import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Sendgrid from 'next-auth/providers/sendgrid';
import prisma from './app/_lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  theme: {
    logo: '/logo.png',
  },
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
  providers: [
    Google,
    GitHub,
    Sendgrid({
      from: 'homequestrealestates@gmail.com',
    }),
  ],
  pages: {
    signIn: '/signin',
  },
});
