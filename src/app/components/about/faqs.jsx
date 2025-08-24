"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiBookOpen, FiUsers, FiDollarSign, FiClock, FiShield, FiZap, FiTarget, FiCpu, FiDatabase } from "react-icons/fi";

export default function Faqs() {
  const [activeCategory, setActiveCategory] = useState("general");

  const faqData = {
    general: [
      {
        question: "What courses do you offer at Hope Institute?",
        answer: "We offer comprehensive IT courses including Web Development, Video Editing, Amazon & eBay, Freelancing, SEO, and Graphics Designing. Each course is designed to provide practical, industry-relevant skills."
      },
      {
        question: "How long are your courses?",
        answer: "Course duration varies from 3-6 months depending on the program. We focus on quality learning rather than rushing through content, ensuring you master each skill thoroughly."
      },
      {
        question: "Do you provide certificates upon completion?",
        answer: "Yes, we provide professional certificates upon successful completion of each course. Our certificates are recognized by the industry and can help boost your career prospects."
      },
      {
        question: "What is your teaching methodology?",
        answer: "We use a project-based learning approach with hands-on practical sessions. Our methodology combines theoretical knowledge with real-world applications to ensure you're job-ready."
      }
    ],
    enrollment: [
      {
        question: "How can I enroll in a course?",
        answer: "You can enroll by visiting our institute, calling us at +92 300 4254433, or emailing us at demo.hopeinstitue@gmail.com. We'll guide you through the enrollment process."
      },
      {
        question: "What are the admission requirements?",
        answer: "Most courses require basic computer knowledge. For advanced courses, we may assess your current skill level to ensure you're placed in the right program."
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, we offer flexible payment plans to make our courses accessible. You can discuss payment options during enrollment."
      },
      {
        question: "Can I switch courses after enrollment?",
        answer: "Yes, you can switch courses within the first week of classes. We want to ensure you're in the right program for your career goals."
      }
    ],
    technical: [
      {
        question: "What software and tools will I learn?",
        answer: "You'll learn industry-standard tools including Adobe Creative Suite, Visual Studio Code, WordPress, SEO tools, and various programming languages depending on your course."
      },
      {
        question: "Do I need to bring my own laptop?",
        answer: "While we have computer labs, we recommend bringing your own laptop for practice at home. This helps you develop your skills consistently."
      },
      {
        question: "Will I get access to course materials?",
        answer: "Yes, you'll have access to comprehensive course materials, video tutorials, and practice projects throughout your learning journey."
      },
      {
        question: "What if I miss a class?",
        answer: "We provide recorded sessions and additional support to help you catch up. You can also schedule one-on-one sessions with instructors."
      }
    ],
    career: [
      {
        question: "What career opportunities are available after completion?",
        answer: "Our courses prepare you for roles like Web Developer, Video Editor, Digital Marketer, Freelancer, SEO Specialist, and Graphic Designer."
      },
      {
        question: "Do you help with job placement?",
        answer: "We provide career guidance and connect you with our industry network. Many of our graduates have successfully secured positions in top companies."
      },
      {
        question: "Can I start freelancing after completing the course?",
        answer: "Absolutely! Our freelancing course specifically prepares you for remote work opportunities on platforms like Upwork, Fiverr, and Freelancer."
      },
      {
        question: "What is the average salary after completing your courses?",
        answer: "Salaries vary by role and experience, but our graduates typically earn between PKR 50,000 to 200,000+ depending on their specialization and skills."
      }
    ]
  };

  const allFAQs = [
    ...faqData.general,
    ...faqData.enrollment,
    ...faqData.technical,
    ...faqData.career
  ];

  return (
    <section id="faqs" className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Floating Tech Orbs */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
      ></motion.div>

      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
      ></motion.div>

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Advanced Technology Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8 mb-16"
        >
          {/* Tech Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-full text-blue-600 text-sm font-medium backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <FiCpu className="w-4 h-4" />
              <FiDatabase className="w-4 h-4" />
              <FiZap className="w-4 h-4" />
            </div>
            <span>Advanced IT Solutions</span>
          </motion.div>

          {/* Main Technology Headline */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-slate-900">Frequently Asked</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800">
                Questions
              </span>
            </motion.h2>

            {/* Technology Underline Effect */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 rounded-full mt-4 mx-auto max-w-md"
            ></motion.div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -left-4 w-8 h-8 text-blue-500/30"
            >
              <FiCpu className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -right-4 w-8 h-8 text-cyan-500/30"
            >
              <FiDatabase className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 text-blue-600/40"
            >
              <FiZap className="w-full h-full" />
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about our cutting-edge IT courses, enrollment process, 
            and career opportunities. Get instant answers to make informed decisions about your future.
          </motion.p>
        </motion.div>

        {/* FAQ Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {allFAQs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Still have questions?</h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our team is here to help you find the perfect course for your career goals. 
                Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+923004254433"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  <FiClock className="w-4 h-4" />
                  Call Us Now
                </a>
                <a
                  href="mailto:demo.hopeinstitue@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-400 text-slate-300 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <FiUsers className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
