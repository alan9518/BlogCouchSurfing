import { Navbar } from '@/components/Navbar/Navbar';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import type { Metadata } from 'next';

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
    <html lang="en">
      <body className="h-dvh overflow-hidden">
        <Navbar />

        <div className="flex h-full">
          <Sidebar />
          <div className="w-full bg-white ">{children}</div>
        </div>
      </body>
    </html>
  );
}
