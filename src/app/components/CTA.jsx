"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] py-20 text-white overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-800 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          Unlock Your Future With Our Courses 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-blue-100"
        >
          Join thousands of learners transforming their careers in Web Development, Graphic Design, Freelancing, SEO, and more. Learn today and start earning tomorrow!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-[#1e3a8a] font-semibold px-8 py-3 rounded-2xl shadow-lg transition-transform hover:scale-105">
            Get Started
          </Button>
          <Button className="bg-white hover:bg-gray-100 text-[#1e3a8a] font-semibold px-8 py-3 rounded-2xl shadow-lg transition-transform hover:scale-105">
            Explore Courses
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
