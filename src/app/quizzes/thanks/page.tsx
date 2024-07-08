import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950 w-screen h-screen">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You for Participating!</h1>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            We appreciate you taking the time to complete our quiz. Your participation helps us improve our content and
            provide a better experience for all our users.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/"
          >
            Go to Home
          </Link>
        </div>
      </section>
  )
}
