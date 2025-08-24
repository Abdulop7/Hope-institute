"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Subtle Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/10 rounded-full blur-3xl"></div>
      
      {/* Accent Lines */}
      <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="absolute bottom-20 right-10 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
            >
              <FiCheckCircle className="w-4 h-4" />
              <span>Trusted by 1000+ Students</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Master the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Digital Future
                </span>{" "}
                with Professional IT Training
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
              >
                Transform your career with our comprehensive IT courses. From web development 
                to digital marketing, learn from industry experts and build a future-proof skill set.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Project-Based Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-slate-300 text-sm">Industry Mentorship</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#courses"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-xl shadow-blue-600/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Courses</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="relative w-full h-80 rounded-xl overflow-hidden">
                  <img
                    src="/hero-tech.jpg"
                    alt="Professional IT Training"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs opacity-90">Practical</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-white text-center">
                    <div className="text-lg font-semibold">24/7</div>
                    <div className="text-xs opacity-90">Support</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
