import Link from 'next/link'
import React from 'react'

function Quiz() {
  return (
    <section
          className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
          id="quiz"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Test Your Knowledge
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
                Take our quiz and see how much you know about machine learning.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 animate-bounce"
                href="/"
              >
                Start Quiz
              </Link>
            </div>
          </div>
        </section>
  )
}

export default Quiz
