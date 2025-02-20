import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmergeReport - Anonymous Reporting",
  description: "Report incident anonymously",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-auto scrollbar-hide">
          <Navbar />
          <main className="pt-16">
            {/* <Providers>{children}</Providers> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
