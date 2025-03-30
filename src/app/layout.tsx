/** @format */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Logo from "./MoE_logo.png";
import Provider from "@/Provider";
import ReactQueryProvider from "./ReactQueryProvider";
import { Toaster } from "react-hot-toast";

const inter = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
        <Toaster />
        <ReactQueryProvider>
          <Provider>{children}</Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
