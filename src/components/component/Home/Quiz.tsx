import Link from "next/link";
import React from "react";

function Quiz() {
  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-90">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Ready to Join Our Society?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Take our Machine Learning aptitude test to showcase your knowledge
              and passion for AI. This fun quiz will help us understand your
              interests better!
            </p>

            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <button className="relative px-8 py-4 bg-white border border-blue-500 rounded-lg leading-none flex items-center group-hover:text-white group-hover:bg-blue-500 transition duration-300">
                <span className="mr-3 text-blue-500 group-hover:text-white">
                  Take the Test
                </span>
                <svg
                  className="w-5 h-5 text-blue-500 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-blue-50">
                <div className="text-blue-600 font-semibold text-xl mb-2">
                  15 Minutes
                </div>
                <p className="text-gray-600">
                  Quick assessment of your ML knowledge
                </p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50">
                <div className="text-blue-600 font-semibold text-xl mb-2">
                  20 Questions
                </div>
                <p className="text-gray-600">Covering basic ML concepts</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50">
                <div className="text-blue-600 font-semibold text-xl mb-2">
                  Instant Results
                </div>
                <p className="text-gray-600">Get your score immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
