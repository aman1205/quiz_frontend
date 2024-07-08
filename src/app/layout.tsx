/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Logo from "./MoE_logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mlcoe",
  description: "Quiz for Recuritment drive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href={Logo.src} />
      </head>
      <body
        className={cn(
          // "min-h-screen w-full bg-white text-black flex ",
          inter.className
        )}
      >

        {children}
      </body>
    </html>
  );
}
