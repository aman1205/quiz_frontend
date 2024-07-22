import { Inter } from "next/font/google";
import "./styles.css";
import { SideBar } from "@/components/component/SideBar";
import Provider from "@/Provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const isAdmin = false;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Provider>
          <div className="min-h-screen w-full bg-white text-black flex">
             <SideBar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
