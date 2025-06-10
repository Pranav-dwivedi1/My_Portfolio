"use client";
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 opacity-90 animate-gradient-shift"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-pink-100 uppercase bg-white/20 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Building The Future <span className="text-cyan-300">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              We're a passionate team of innovators, designers, and problem-solvers dedicated to creating digital experiences that make an impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Meet Our Team
                <FiArrowRight className="ml-2" />
              </motion.button>
              <button className="px-6 py-3 border-2 border-white/40 text-white font-medium rounded-lg hover:bg-white/10 transition-all">
                Our Values
              </button>
            </div>
          </motion.div>

          {/* Team illustration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full h-80 md:h-96 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center">
              {/* Placeholder for team illustration */}
              <div className="grid grid-cols-3 gap-4 p-6 w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white/50 text-xs">Team</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-cyan-400/30 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-pink-400/30 blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative bg-white/10 backdrop-blur-sm border-t border-b border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Team Members' },
              { number: '5', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="p-4"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-sm md:text-base text-blue-100 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
