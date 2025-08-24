"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-blue-100 relative overflow-hidden py-20">
      {/* Futuristic neon shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 blur-3xl rounded-full animate-pulse opacity-20"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[200px] bg-purple-500/10 blur-3xl rounded-full animate-pulse"></div>

      {/* Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-blue-900/20 pb-12">
          
          {/* Logo & About */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <img
              src="/logo.png" // replace with your actual logo path
              alt="Hope Institute Logo"
              className="w-32 md:w-40"
            />
            <p className="text-blue-200 text-sm leading-relaxed text-center md:text-left">
              Empowering students with futuristic skills in Web Development, Graphic Design, Freelancing, SEO, 
              and more. <br /> Learn today, lead tomorrow 🚀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Courses", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(" ", "")}`} className="relative group hover:text-cyan-400 transition-colors duration-300">
                    {link}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 tracking-wide">Our Courses</h3>
            <ul className="space-y-3 text-sm">
              {["Web Development", "Graphics Designing", "Video Editing", "Amazon & eBay", "Freelancing & SEO"].map((course) => (
                <li key={course}>
                  <a href="#" className="relative group hover:text-cyan-400 transition-colors duration-300">
                    {course}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 text-sm text-blue-400">
          <p>© {new Date().getFullYear()} Hope Institute. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="relative group">
                <Icon size={22} className="transition-colors duration-300 group-hover:text-cyan-400" />
                <span className="absolute -inset-1 rounded-full bg-cyan-400/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Neon Grid Overlay */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-x border-y border-blue-900/10"></div>
          ))}
        </div>
      </div>
    </footer>
  )
}
