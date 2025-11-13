import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import "@radix-ui/themes/styles.css";
import {Theme, ThemePanel} from '@radix-ui/themes'
import './theme-config.css'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Issue Tracker · Change is inevitable. Issue Tracker keeps you on track.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Theme accentColor="tomato" grayColor="mauve">

        <NavBar/>
        <main className="p-5">
        {children}
        </main>
        <ThemePanel/>
        </Theme>
      </body>
    </html>
  );
}
