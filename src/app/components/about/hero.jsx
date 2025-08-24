"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FiHelpCircle, FiArrowRight } from "react-icons/fi";

export default function AboutHero() {
    const faqRef = useRef(null);
    const scrollToFAQs = () => {
        if (faqRef.current) {
        const yOffset = -150; // adjust based on your header height
        const y = faqRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
    
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
      ></motion.div>
      
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
      ></motion.div>

      {/* Additional Floating Elements */}
      <motion.div
        animate={{ 
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full blur-2xl"
      ></motion.div>

      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl"
      ></motion.div>

      {/* Geometric Shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/3 w-16 h-16 border border-cyan-400/20 rounded-lg"
      ></motion.div>

      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-blue-400/20 rounded-full"
      ></motion.div>

      {/* Central Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl"></div>

      {/* Accent Lines */}
      <div className="absolute top-10 left-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      <div className="absolute bottom-10 right-10 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      <div className="absolute top-1/3 right-10 w-24 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
      <div className="absolute bottom-1/3 left-10 w-24 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"></div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 3 + i * 0.5, 
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          ></motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
          >
            <FiHelpCircle className="w-4 h-4" />
            <span>Get Your Questions Answered</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Answers
              </span>{" "}
              to Your Questions
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Everything you need to know about our IT courses, enrollment process, 
              and career opportunities. Quick answers to help you make informed decisions.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="#faqs"
              onClick={scrollToFAQs}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-blue-600/25"
            >
              <span>Explore FAQs</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
