"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ali Raza",
    role: "CEO - Raza Builders",
    text: "Working with ANU Architects was an absolute pleasure. They delivered exactly what we envisioned, blending creativity with futuristic functionality.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Ahmed",
    role: "Homeowner",
    text: "The team is professional, dedicated, and extremely talented. Our house design came out beyond our expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Imran Khan",
    role: "Real Estate Investor",
    text: "They turned our project into a masterpiece. Their design sense and execution are unmatched. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  // Framer variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#1d4ed8] overflow-hidden">
      {/* Futuristic Glow Orbs */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonial Slides */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={1} mode="wait">
            <motion.div
              key={current}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 md:p-14 max-w-3xl mx-auto shadow-xl relative"
            >
              <Quote className="absolute top-6 left-6 text-blue-400 w-10 h-10 opacity-40" />

              <motion.p
                className="text-lg md:text-xl text-blue-100 italic mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                "{testimonials[current].text}"
              </motion.p>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md mb-4"
                />
                <h4 className="text-lg font-semibold text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-blue-200">{testimonials[current].role}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition cursor-pointer"
          >
            <ChevronLeft size={22} />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded-full shadow-lg hover:shadow-blue-500/50 transition cursor-pointer"
          >
            <ChevronRight size={22} />
          </motion.button>

          {/* Futuristic Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                whileHover={{ scale: 1.2 }}
                animate={{
                  backgroundColor: current === index ? "#3b82f6" : "#94a3b8",
                  scale: current === index ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-3.5 h-3.5 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
