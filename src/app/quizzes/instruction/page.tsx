"use client";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function page() {
  const router = useRouter();

  const [agree, setAgree] = useState<boolean>(false);
  const handleNext = () => {
    if (agree) {
      router.push("/quizzes/quiz", { scroll: false });
    }
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 w-screen h-screen">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Quiz Instructions
        </h1>
        <div className="space-y-4 text-left">
          <h2 className="text-lg font-medium">Terms and Conditions</h2>
          <p className="text-gray-500 dark:text-gray-400">
            By participating in this quiz, you agree to our terms and
            conditions. Please read them carefully before proceeding.
          </p>
          <h2 className="text-lg font-medium">Rules of the Quiz</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-500 dark:text-gray-400">
            <li>You have a limited time to answer each question.</li>
            <li>
              Each correct answer will earn you points. The more points you
              score, the better your result.
            </li>
            <li>
              You cannot go back to previous questions once you have answered
              them.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <label className="flex items-center space-x-2">
            <Checkbox
              id="agree"
              checked={agree}
              onCheckedChange={(checked) => setAgree(checked as boolean)}
            />
            <span>I agree to the terms and conditions</span>
          </label>
        </div>
        <Button
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          onClick={handleNext}
          disabled={!agree}
        >
          Start Quiz
        </Button>
      </div>
    </section>
  );
}
