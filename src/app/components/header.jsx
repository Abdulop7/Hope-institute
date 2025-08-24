"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Mail, Phone, Clock } from "lucide-react";
import logo from "../../../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!menuOpen) {
        setScrolled(window.scrollY > 20);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleMouseEnter = (menuName) => {
    clearTimeout(closeTimer);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setActiveDropdown(null), 200);
    setCloseTimer(timer);
  };

  const toggleMobileDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        initial={false}
        animate={{
          opacity: scrolled ? 0 : 1,
          height: scrolled ? 0 : "auto",
          y: scrolled ? -10 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden hidden lg:block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-3 text-sm font-light tracking-wide">
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300">
                <Clock size={16} className="text-blue-300" />
                <span className="font-medium">Mon - Fri: 9AM to 9PM</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300">
                <Phone size={16} className="text-blue-300" />
                <span className="font-medium">+92 300 4254433</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300">
              <Mail size={16} className="text-blue-300" />
              <span className="font-medium">demo.hopeinstitue@gmail.com</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed w-full z-50 transition-all duration-700 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Link href="/" className="block">
                <div className="relative w-16 h-16">
                  <Image
                    className={`transition-all duration-500 ${
                      scrolled || menuOpen ? "brightness-100" : "brightness-0 invert drop-shadow-lg"
                    }`}
                    src={logo}
                    fill
                    alt="Hope Institute Logo"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <ul className={`hidden lg:flex items-center space-x-2 font-medium tracking-wide ${
              scrolled || menuOpen ? "text-gray-800" : "text-white"
            }`}>
              <li>
                <Link
                  href="/"
                  className="relative px-4 py-3 rounded-lg transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Home</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>

              {/* Courses Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => handleMouseEnter("courses")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center px-4 py-3 rounded-lg transition-all duration-300 group overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Courses</span>
                  <FiChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "courses" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 min-w-[280px] z-50"
                    >
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/20 border border-gray-100 overflow-hidden">
                        <div className="p-2">
                          {[
                            { href: "#webdev", label: "Web Development", desc: "Full-stack development" },
                            { href: "#video", label: "Video Editing", desc: "Professional editing" },
                            { href: "#amazon", label: "Amazon & eBay", desc: "E-commerce mastery" },
                            { href: "#freelancing", label: "Freelancing", desc: "Remote work skills" },
                            { href: "#seo", label: "SEO", desc: "Search optimization" },
                            { href: "#graphics", label: "Graphics Designing", desc: "Creative design" }
                          ].map((item, index) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="block px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 group rounded-lg"
                            >
                              <div className="text-gray-800 font-medium group-hover:text-blue-700 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">
                                {item.desc}
                              </div>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <a
                  href="#about"
                  className="relative px-4 py-3 rounded-lg transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">About Us</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </li>
              
              <li>
                <Link
                  href="/faqs"
                  className="relative px-4 py-3 rounded-lg transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">FAQs</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </li>
              
              <li>
                <a
                  href="#contact"
                  className="relative px-4 py-3 rounded-lg transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact Us</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  scrolled || menuOpen
                    ? "bg-gray-100 hover:bg-gray-200 text-gray-800" 
                    : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                }`}
              >
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Outside Navbar */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[99999] top-0 left-0 w-full h-full">
          <div className="h-full flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="relative w-12 h-12">
                <Image src={logo} fill alt="Logo" style={{ objectFit: 'contain' }} />
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FiX size={24} className="text-gray-800" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                <Link 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-4 rounded-xl hover:bg-blue-50 transition-colors text-gray-800 font-medium"
                >
                  Home
                </Link>

                {/* Mobile Courses Dropdown */}
                <div>
                  <button
                    className="flex items-center justify-between w-full px-4 py-4 rounded-xl hover:bg-blue-50 transition-colors text-gray-800 font-medium"
                    onClick={() => toggleMobileDropdown("courses")}
                  >
                    <span>Courses</span>
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        activeDropdown === "courses" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "courses" && (
                    <div className="ml-4 mt-2 space-y-2">
                      {[
                        { href: "#webdev", label: "Web Development" },
                        { href: "#video", label: "Video Editing" },
                        { href: "#amazon", label: "Amazon & eBay" },
                        { href: "#freelancing", label: "Freelancing" },
                        { href: "#seo", label: "SEO" },
                        { href: "#graphics", label: "Graphics Designing" }
                      ].map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors text-gray-600 hover:text-blue-700"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="block px-4 py-4 rounded-xl hover:bg-blue-50 transition-colors text-gray-800 font-medium"
                >
                  About Us
                </a>

                <Link
                  href="/faqs"
                  onClick={closeMobileMenu}
                  className="block px-4 py-4 rounded-xl hover:bg-blue-50 transition-colors text-gray-800 font-medium"
                >
                  FAQs
                </Link>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-4 rounded-xl hover:bg-blue-50 transition-colors text-gray-800 font-medium"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <button 
                  onClick={closeMobileMenu}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-medium shadow-lg transition-all duration-300"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
