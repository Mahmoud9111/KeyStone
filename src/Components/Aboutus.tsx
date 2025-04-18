import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Aboutus() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, amount: 0.5 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.5 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.5 });
  const isInView4 = useInView(ref4, { once: true, amount: 0.5 });
  const isInView5 = useInView(ref5, { once: true, amount: 0.5 });

  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 md:py-24 max-w-5xl mx-auto">
      <div className="text-center space-y-6 mb-12 max-w-3xl">
        <motion.h1 
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 flex flex-wrap justify-center items-center gap-2"
        >
          Where your vision
          <span className="flex items-center whitespace-nowrap">
            finds its
            home.
          </span>
        </motion.h1>

        <motion.p 
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-gray-600 text-lg"
        >
          Haven offers more than just a place to live—it's a space designed to reflect your unique style, crafted with
          timeless precision, and built to inspire for generation
        </motion.p>

        <motion.div 
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
        >
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-6 py-3 rounded-2xl bg-gray-100 text-gray-800 w-full sm:w-64 focus:outline-none "
          />
          <button className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:bg-gray-800 transition-colors">
            Stay Updated
          </button>
        </motion.div>
      </div>

      <motion.div 
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl mt-12 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
        <img
          src="/images/about.avif"
          alt="Modern architectural home"
          className="w-full h-auto object-cover rounded-lg"
          loading="eager"
        />
      </motion.div>
    </main>
  )
}
