import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header id="header" className="bg-neutral-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#64FFDA] font-['Space_Grotesk']">
            ML Society
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden">
            <button id="menu-btn" className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  className="hidden"
                  id="menu-close"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                <path
                  className="block"
                  id="menu-open"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* <!-- Desktop Menu --> */}
          <div className="hidden md:flex space-x-8 items-center font-['Inter']">
            <Link
              href="/"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/domains"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Domains
            </Link>
            <Link
              href="/team"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Team
            </Link>
            <Link
              href="/quiz"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Quiz
            </Link>
            <Link
              href="/events"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="hidden md:hidden mt-4 animate__animated animate__fadeIn"
        >
          <div className="flex flex-col space-y-4 font-['Inter']">
            <Link
              href="/"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/domains"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Domains
            </Link>
            <Link
              href="/team"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Team
            </Link>
            <Link
              href="/quiz"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Quiz
            </Link>
            <Link
              href="/events"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#64FFDA] transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 min-h-[70vh] flex items-center">
        <div className="max-w-3xl animate__animated animate__fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Space_Grotesk']">
            Empowering the Future with{" "}
            <span className="text-[#64FFDA]">Machine Learning</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300 font-['Inter']">
            Join us in exploring the frontiers of artificial intelligence and
            shape the future of technology.
          </p>
          <button className="bg-[#64FFDA] text-[#0A192F] px-8 py-3 rounded-md font-bold hover:bg-opacity-80 transition-all duration-300 font-['Inter']">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
