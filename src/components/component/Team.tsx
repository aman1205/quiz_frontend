import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion, useInView , useAnimation } from "framer-motion";
import { useRef , useEffect} from "react";

function Team() {

  const ref  = useRef(null);
  const isInView = useInView(ref , {once: false});
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => { 
    if(isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <section
    ref={ref}
      className="bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
      id="team"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Our team of experts is dedicated to providing the best education in
            machine learning.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          <motion.div
             variants={{
              hidden: { left: 0},
              visible: { left: "100%"},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5 , ease:"easeIn"}}
            className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp group"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <img
                alt="Team Member 1"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                height={300}
                src="https://res.cloudinary.com/dwpq0eyis/image/upload/v1714144460/samples/upscale-face-1.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">JD</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link href="#" target="_blank">
                      <LinkedinIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                    <Link href="#" target="_blank">
                      <GithubIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                  </div>
                  <h3 className="text-white text-xl font-bold">John Doe</h3>
                  <p className="text-gray-300">2021</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp group">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <img
                alt="Team Member 2"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                height={300}
                src="https://res.cloudinary.com/dwpq0eyis/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1716312136/PRofile-Photoroom.png-Photoroom_zjujub.png"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">AS</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link href="#" target="_blank">
                      <LinkedinIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                    <Link href="#" target="_blank">
                      <GithubIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                  </div>
                  <h3 className="text-white text-xl font-bold">Aman Singh</h3>
                  <p className="text-gray-300">4th Year</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp group">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <img
                alt="Team Member 3"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                height={300}
                src="https://res.cloudinary.com/dwpq0eyis/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714144453/samples/smile.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">MJ</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link href="#" target="_blank">
                      <LinkedinIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                    <Link href="#" target="_blank">
                      <GithubIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    Michael Johnson
                  </h3>
                  <p className="text-gray-300">2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950 animate-fadeInUp group">
            <div className="relative h-48 w-full overflow-hidden rounded-lg">
              <img
                alt="Team Member 3"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                height={300}
                src="https://res.cloudinary.com/dwpq0eyis/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1714144431/samples/people/smiling-man.jpg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold">MJ</h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link href="#" target="_blank">
                      <LinkedinIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                    <Link href="#" target="_blank">
                      <GithubIcon className="h-6 w-6 text-white hover:text-gray-300" />
                    </Link>
                  </div>
                  <h3 className="text-white text-xl font-bold">Raj Gautam </h3>
                  <p className="text-gray-300">2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
