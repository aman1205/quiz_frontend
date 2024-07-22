import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type HomePageProps = {
  onStart: () => void;
};

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="max-w-3xl space-y-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Welcome to the Quiz
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-xl">
          Test your knowledge with our engaging quiz!
        </p>
        <div className="mt-8">
          <Button
            onClick={onStart}
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <div className="mt-16 max-w-3xl space-y-8">
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            How Our Quiz Works
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Our quiz is designed to challenge your knowledge and provide an
            interactive learning experience. You'll encounter a variety of
            questions across different categories.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Why Take Our Quiz?
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Taking our quiz helps you assess your knowledge, learn new facts,
            and have fun while doing it. It's a great way to test yourself and
            discover new insights.
          </p>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Get Started Now!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Click the "Start Quiz" button above to begin your journey. Challenge
            yourself, enjoy the quiz, and see how much you know!
          </p>
        </section>
      </div>
    </section>
  );
};

export default HomePage;
