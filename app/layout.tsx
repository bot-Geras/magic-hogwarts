import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hogwarts",
  description: "Hogwarts Franchise",
};

// Provider wrap aroud our application and give them access to data

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen flex-col items-center  p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex">
              <Link href="/">
                <h2 className="text-2xl  text-bold">Hogwarts Legacy</h2>
              </Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
