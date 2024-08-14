import '@/app/_styles/globals.css';
import { Inter } from 'next/font/google';
import Footer from './_components/Footer';
import Header from './_components/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: {
    template: ' %s · Home Quest',
    default: 'Home Quest',
  },
  description:
    'Find your perfect home with HomeQuest. Explore diverse property listings, manage your real estate portfolio, and connect with buyers, sellers, and agents.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className='flex-1 flex w-full mx-0'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
