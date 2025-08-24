"use client"

import { GraduationCap, Users, MonitorPlay, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const points = [
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "Expert Instructors",
      desc: "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Hands-on Learning",
      desc: "Practical training with real projects to boost your skills and confidence.",
    },
    {
      icon: <MonitorPlay className="w-10 h-10 text-white" />,
      title: "Flexible Learning",
      desc: "Online and on-campus classes with lifetime access to resources.",
    },
    {
      icon: <Award className="w-10 h-10 text-white" />,
      title: "Recognized Certifications",
      desc: "Get globally recognized certificates to kickstart your career.",
    },
  ]

  return (
    <section className="relative py-24 bg-[#0f172a] overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          Why Choose <span className="text-white">Our Institute?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mb-16 max-w-2xl mx-auto text-blue-200"
        >
          We empower students with modern skills, practical knowledge, and a futuristic learning environment to excel in today’s competitive world.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all"
            >
              <div className="h-full w-full bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-blue-300 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
