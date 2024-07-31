import React from 'react'

function About() {
  return (
    <section
    className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    id="about"
  >
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Mloce
          </h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Mloce is a college dedicated to the study and advancement of
            machine learning. Our mission is to provide a world-class
            education in this rapidly evolving field, empowering students
            to become leaders in the industry.
          </p>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            At Mloce, we believe in the transformative power of machine
            learning and its ability to solve complex problems. Our
            curriculum is designed to equip students with the theoretical
            knowledge and practical skills needed to thrive in this
            dynamic landscape.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl animate-gradient-x" />
          </div>
          <img
            alt="Mloce"
            className="mx-auto aspect-video rounded-lg object-cover"
            height={400}
            src="https://res.cloudinary.com/dwpq0eyis/image/upload/v1714144680/MoE_logo_qwlgkf.png"
            width={600}
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
