import "@/app/_styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: {
    template: " %s · Home Quest",
    default: "Home Quest",
  },
  description:
    "Find your perfect home with HomeQuest. Explore diverse property listings, manage your real estate portfolio, and connect with buyers, sellers, and agents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <SessionProvider>
          <Header />
          <main className="mx-0 flex w-full flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
