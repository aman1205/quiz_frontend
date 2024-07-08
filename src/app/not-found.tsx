import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
          The page you're looking for doesn't exist. Let's get you back on
          track.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
