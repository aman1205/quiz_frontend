function Home() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 min-h-screen flex items-center overflow-hidden"
    >
      {/* <!-- Particle Animation Container --> */}
      <div id="particles-js" className="absolute inset-0 opacity-30"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
              Empowering the Future with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-blue-400">
                Machine Learning
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 font-['Inter']">
              Join our community of innovators and explore the frontiers of
              artificial intelligence. Together, we&apos;ll shape the
              technologies of tomorrow.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#64FFDA] text-neutral-900 px-8 py-3 rounded-lg font-bold hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__pulse animate__infinite animate__slower font-['Inter']">
                Join Now
              </button>
              <button className="border-2 border-[#64FFDA] text-[#64FFDA] px-8 py-3 rounded-lg font-bold hover:bg-[#64FFDA] hover:text-neutral-900 transition-all duration-300 font-['Inter']">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden md:block animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="w-full h-[400px] rounded-xl bg-gradient-to-r from-[#64FFDA]/20 to-blue-500/20 backdrop-blur-xl border border-white/10 p-6 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="neural-network-animation"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
