import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import QueryProvider from './providers/QueryProvider'; // client component wrapper

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shopcare Billing Software',
  description: 'A modern, comprehensive billing solution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Wrap children with client component */}
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
