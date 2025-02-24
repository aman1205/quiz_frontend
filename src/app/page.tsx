"use client";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/components/component/Home/Contact";
import Home from "@/components/component/Home/Home";
import About from "@/components/component/Home/About";
import Features from "@/components/component/Home/Features";
import Team from "@/components/component/Home/Team";
import Footer from "@/components/component/Home/Footer";
import Quiz from "@/components/component/Home/Quiz";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import axios from "axios";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsMenuOpen(!isMenuOpen);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // 300ms delay to prevent rapid toggling
    }
  };
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.withCredentials = true;

  const handleUploadSuccess = (uploadedFiles: any[]) => {
    console.log('Files uploaded:', uploadedFiles);
    // Handle file URLs or perform further actions
  };

  return (
    <div className="flex flex-col min-h-[100vh] xl:w-full">
      <header className="fixed top-0 left-0 z-10 w-full bg-gray-900 px-4 py-3 text-white shadow-md dark:bg-gray-800 md:px-6 lg:px-8 ">
        <div className="container mx-auto flex items-center justify-between ">
          <Link className="flex items-center gap-2" href="#">
            <BrainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Mloce</span>
          </Link>
          <nav
            className={`${
              isMenuOpen
                ? "flex flex-col text-center gap-1  duration-150"
                : "hidden"
            } absolute top-full left-0 w-full bg-white text-black p-4 md:relative md:top-0 md:left-auto md:flex md:w-auto md:flex-row md:bg-transparent md:text-white md:p-0 md:space-x-4`}
          >
            <Link
              className=" hover:opacity-[70%] hover:duration-200 hover:underline"
              href="#about"
            >
              About
            </Link>
            <Link
              className=" hover:opacity-[70%] hover:duration-200 hover:underline"
              href="#team"
            >
              Team
            </Link>
            <Link
              className=" hover:opacity-[70%] hover:duration-200 hover:underline"
              href="#features"
            >
              Features
            </Link>
            <Link
              className=" hover:opacity-[70%] hover:duration-200 hover:underline"
              href="#quiz"
            >
              Quiz
            </Link>
            <Link
              className=" hover:opacity-[70%] hover:duration-200 hover:underline"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              className="md:hidden max-sm:bg-white max-sm:text-black"
              variant="outline"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6 text-black " />
              ) : (
                <MenuIcon className="h-6 w-6 sm:text-black" />
              )}
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Home />
        <About />
        <Features />
        <Team />
        <Quiz />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
