import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
import "./globals.css";

import { MainNav } from "@/components/main-nav";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake Joe's portfolio",
  description:
    "Jake Joe's portfolio website built with Next.js, Tailwind CSS, TypeScript, Shadcn UI, motion library, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sometypeMono.variable} antialiased`}>
        <div className="flex">
          <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
            <MainNav />
          </div>
          <div className="w-full max-w-[1130px] px-[15px] mx-auto bg-pink-50/10">
            <header>header</header>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
