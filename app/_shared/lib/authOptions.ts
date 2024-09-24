/* eslint-disable no-param-reassign */
import { serverClient } from '@/app/_trpc/serverClient';
import { TRPCClientError } from '@trpc/client';
import { NextAuthOptions, User } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

export const AuthOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'your-email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(
        credentials: Record<string, string> | undefined
      ): Promise<User | null> {
        if (!credentials) return null;

        try {
          const user = await serverClient.auth.login.mutate({
            email: credentials?.email,
            password: credentials?.password,
          });

          if (user) {
            return {
              id: user.userId.toString(),
              email: user.email,
            };
          }
        } catch (error) {
          if (error instanceof TRPCClientError) {
            return null;
          }

          return null;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token?.id?.toString() || '',
        email: token.email || '',
      };
      return session;
    },
  },
};
