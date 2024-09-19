import type { Metadata } from 'next';
import localFont from 'next/font/local';
import QueryProvider from './_trpc/Provider';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Couch surfig hub',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh`}
      >
        <QueryProvider>
          <div className="flex h-full">
            <div className="w-full bg-white ">{children}</div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
