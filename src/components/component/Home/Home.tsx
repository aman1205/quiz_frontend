import { motion, useInView , useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useRef , useEffect} from "react";

function Home() {
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
    <section ref={ref} className="flex h-[100vh] w-full items-center justify-center bg-gray-900 text-white">
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.6 },
          visible: { opacity: 1, scale: 0.9 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.25  ,delay: 0.29}}
        className="container mx-auto px-4 text-center md:px-6 lg:px-8 animate-fadeIn"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-9xl">
          Welcome to Mloce
        </h1>
        <p className="mt-4 text-lg text-gray-400 md:text-xl lg:text-2xl">
          Explore the world of machine learning with our college website.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-center sm:justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 animate-bounce"
            href="#"
          >
            Explore Now
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-white px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 animate-pulse"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
      <motion.div variants={{
        hidden: { left: 0},
        visible: { left: "100%"},
      
      }}
      initial="hidden"
      animate={slideControls}
      transition={{ duration: 0.5 , ease:"easeIn"}}
      style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background:"var(--color-primary)",
          zIndex: 20,
      }}
      >

      </motion.div>
    </section>
  );
}

export default Home;
