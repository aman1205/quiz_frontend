import React from 'react'

function Features() {
  return (
    <section
    className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    id="features"
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Features of Mloce
        </h2>
        <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
          Mloce offers a comprehensive education in machine learning,
          focusing on both theoretical and practical aspects.
        </p>
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">
            <BeakerIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold">
            Cutting-Edge Curriculum
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Our curriculum is constantly updated to keep pace with the
            rapidly evolving field of machine learning.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
            <LaptopIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold">Hands-On Learning</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Our students engage in practical projects and workshops to
            reinforce their understanding of machine learning concepts.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
            <GraduationCapIcon className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-xl font-bold">
            Industry Partnerships
          </h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            We collaborate with leading companies in the machine learning
            industry to provide internships and job opportunities for our
            students.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features


function BeakerIcon(props: any) {
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
        <path d="M4.5 3h15" />
        <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
        <path d="M6 14h12" />
      </svg>
    );
  }

  function GraduationCapIcon(props: any) {
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
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    );
  }
  
  function LaptopIcon(props: any) {
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
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
      </svg>
    );
  }
  