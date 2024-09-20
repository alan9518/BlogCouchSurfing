import { Navbar } from '@/components/Navbar/Navbar';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import type { Metadata } from 'next';

import { Suspense } from 'react';
import '../globals.css';

export const metadata: Metadata = {
  title: 'My Feed',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh overflow-hidden">
      <Suspense>
        <Navbar />
      </Suspense>

      <div className="flex h-full">
        <Sidebar />
        <div className="w-full bg-white ">{children}</div>
      </div>
    </div>
  );
}
