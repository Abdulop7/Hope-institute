"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ from, to, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString() + suffix);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, to, duration, count]);

  return (
    <motion.span
      ref={ref}
      className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]"
    >
      {rounded}
    </motion.span>
  );
}

export default function About() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-blue-900 py-32 overflow-hidden">
      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Layered Glow Orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-ping"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        {/* Left Floating Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full max-w-lg mx-auto"
          >
            <img
              src="/about-institute.jpg"
              alt="About Our Institute"
              className="w-full rounded-3xl shadow-2xl border border-blue-200 relative z-10"
            />
            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-400/30 to-blue-500/20 rounded-3xl blur-3xl animate-pulse"></div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient-x">
            About Our Institute
          </h2>
          <p className="text-lg text-blue-800 leading-relaxed mb-8">
            We are a leading <span className="text-blue-600 font-semibold">Computer Skills Institute</span>, 
            dedicated to equipping students with <span className="text-cyan-600 font-semibold">industry-ready expertise</span>. 
            From <strong>Web Development</strong> and <strong>Design</strong> to 
            <strong> Freelancing</strong>, <strong>Video Editing</strong>, and 
            <strong> SEO</strong> — our programs prepare you for the digital future.
          </p>

          {/* Futuristic Glassmorphism Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-10">
            {[
              { label: "Years of Experience", value: 10, suffix: "+" },
              { label: "Students Trained", value: 5000, suffix: "+" },
              { label: "Courses Offered", value: 15, suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 * i }}
                viewport={{ once: true }}
                className="relative backdrop-blur-xl bg-white/30 border border-cyan-200/50 rounded-2xl p-6 shadow-xl overflow-hidden group"
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/60 transition-all duration-500"></div>
                
                <h3 className="text-3xl font-extrabold tracking-tight">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-sm mt-2 text-blue-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
