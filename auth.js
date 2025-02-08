import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import SendgridProvider from 'next-auth/providers/sendgrid';
import prisma from './app/_lib/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  theme: {
    logo: '/logo.png',
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  callbacks: {
    session({ session, user }) {
      if (user && user.role) {
        session.user.role = user.role;
      }
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: { code_challenge_method: 'S256' },
      },
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    SendgridProvider({
      from: 'homequestrealestates@gmail.com',
    }),
  ],
  pages: {
    signIn: '/signin',
  },
});
