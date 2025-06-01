import '@/app/_styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';
import Header from '../_components/Header';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const revalidate = 86400;

export const metadata = {
  title: {
    template: ' %s · Home Quest',
    default: 'Home Quest',
  },
  description:
    'Find your perfect home with HomeQuest. Explore diverse property listings, manage your real estate portfolio, and connect with buyers, sellers, and agents.',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://unpkg.com" />
        <link
          rel="preconnect"
          href="https://tile.openstreetmap.org"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          as="style"
        />
        <link
          rel="preload"
          href="https://unpkg.com/leaflet-defaulticon-compatibility@latest/dist/leaflet-defaulticon-compatibility.css"
          as="style"
        />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet-defaulticon-compatibility@latest/dist/leaflet-defaulticon-compatibility.css"
        />
      </head>
      <body
        className={`${inter.className} flex h-full min-h-screen flex-col antialiased`}
      >
        <SessionProvider>
          <Header />
          <main className="mx-0 flex min-h-0 w-full flex-1 overflow-hidden">
            {modal}
            {children}
          </main>
          <Toaster />
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
