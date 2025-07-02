"use client";
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function page() {
  return (
    <section className="relative bg-gradient-to-b from-[#160b07] via-[#1e0801] to-[#2B0C02] text-white font-gilroy overflow-hidden">
      
      {/* Grid pattern overlay */}

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
