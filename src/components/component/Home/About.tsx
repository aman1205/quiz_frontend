import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4 font-['Space_Grotesk'] animate__animated animate__fadeInUp">
            About Our Society
          </h2>
          <div className="w-20 h-1 bg-[#64FFDA] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="backdrop-blur-lg bg-gradient-to-r from-blue-50 to-transparent p-8 rounded-2xl border border-blue-100 shadow-lg animate__animated animate__fadeInLeft">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6 font-['Space_Grotesk']">
              Our Mission
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed font-['Inter']">
              We are a community of passionate students dedicated to exploring
              and advancing the field of Machine Learning. Our society serves as
              a platform for learning, collaboration, and innovation in AI
              technologies.
            </p>
            <p className="text-neutral-600 leading-relaxed font-['Inter']">
              Through workshops, projects, and events, we aim to bridge the gap
              between theoretical knowledge and practical applications in
              Machine Learning.
            </p>
          </div>

          <div className="space-y-6 animate__animated animate__fadeInRight">
            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-bold text-neutral-800 mb-3 font-['Space_Grotesk']">
                Innovation Hub
              </h4>
              <p className="text-neutral-600 font-['Inter']">
                Access to cutting-edge ML resources and collaborative projects
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-bold text-neutral-800 mb-3 font-['Space_Grotesk']">
                Learning Environment
              </h4>
              <p className="text-neutral-600 font-['Inter']">
                Regular workshops, seminars, and hands-on training sessions
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-bold text-neutral-800 mb-3 font-['Space_Grotesk']">
                Industry Connect
              </h4>
              <p className="text-neutral-600 font-['Inter']">
                Network with industry experts and gain real-world exposure
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex gap-4 items-center bg-neutral-900 px-8 py-4 rounded-full animate__animated animate__pulse animate__infinite animate__slower">
            <span className="text-white font-['Inter']">
              Join our growing community of
            </span>
            <span className="text-[#64FFDA] font-bold font-['Space_Grotesk']">
              500+ Members
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
