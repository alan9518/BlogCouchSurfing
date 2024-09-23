'use client';

import { SessionProvider } from 'next-auth/react';

type SessionWrapperProps = {
  children: React.ReactNode;
};

export const SessionWrapper = ({ children }: SessionWrapperProps) => (
  <SessionProvider>{children}</SessionProvider>
);
