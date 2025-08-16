import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Header } from "@/components/header";
import { MainNav } from "@/components/main-nav";
import { Gradient } from "@/components/gradient";
import { PageTransition } from "@/components/page-transition";
import { RectangleTransition } from "@/components/rectangle-transition";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jake Joe's Portfolio",
    template: "%s | Jake Joe's Portfolio",
  },
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
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RectangleTransition />
        <PageTransition>
          <div className="flex">
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto">
              <Header />
              <div>{children}</div>
            </div>
          </div>
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
