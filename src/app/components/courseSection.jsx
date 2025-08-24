"use client"

import { Code, Video, ShoppingCart, Briefcase, Search, Palette } from "lucide-react"

const courses = [
  {
    title: "Web Development & Designing",
    icon: <Code className="w-10 h-10 text-white" />,
    description: "Master front-end & back-end development with modern frameworks and responsive design.",
  },
  {
    title: "Video Editing",
    icon: <Video className="w-10 h-10 text-white" />,
    description: "Learn professional video editing skills with industry-leading software and techniques.",
  },
  {
    title: "Amazon & eBay",
    icon: <ShoppingCart className="w-10 h-10 text-white" />,
    description: "Discover how to sell successfully on Amazon & eBay with proven strategies.",
  },
  {
    title: "Freelancing",
    icon: <Briefcase className="w-10 h-10 text-white" />,
    description: "Build a strong freelancing career, find clients, and grow your income online.",
  },
  {
    title: "SEO",
    icon: <Search className="w-10 h-10 text-white" />,
    description: "Learn search engine optimization strategies to rank websites higher on Google.",
  },
  {
    title: "Graphic Designing",
    icon: <Palette className="w-10 h-10 text-white" />,
    description: "Design stunning graphics and brand identities with Photoshop, Illustrator & more.",
  },
]

export default function CoursesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0F172A] via-[#1E3A8A] to-[#1E40AF] text-white overflow-hidden">
      {/* Futuristic Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            Explore Our Courses
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Gain the most in-demand digital skills and transform your career with hands-on learning.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 
              shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(96,165,250,0.6)] 
              transition-all duration-500 hover:scale-105"
            >
              {/* Animated Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 opacity-0 group-hover:opacity-100 blur-xl transition duration-700"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6 shadow-lg shadow-blue-500/30 group-hover:animate-pulse">
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-300 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-blue-200 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-lg shadow-blue-500/40 hover:scale-110 transition-transform duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  )
}
