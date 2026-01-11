"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Download, Mail } from "lucide-react";
import { dummyData } from "@/data/portfolioData";
import Link from "next/link";

const Introduction = () => {
  const data = dummyData.intro;

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Replace with your actual resume URL or file path
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "YourName_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left Content */}
        <div className="lg:w-3/5">
          {/* Title with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              {data.title}
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl"
          >
            {data.description}
          </motion.p>
          
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <div className="flex items-center gap-4 p-5 bg-gray-900/40 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="p-3 rounded-lg bg-blue-500/10">
                <MapPin className="text-blue-400" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Based In</p>
                <p className="text-white font-medium text-lg">{data.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-gray-900/40 rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
              <div className="p-3 rounded-lg bg-cyan-500/10">
                <Briefcase className="text-cyan-400" size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Experience</p>
                <p className="text-white font-medium text-lg">{data.experience}</p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {/* Resume Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
              <motion.svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </motion.svg>
            </motion.button>

            {/* Contact Button */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-6 py-3 bg-gray-900/50 text-white border border-gray-700 rounded-xl font-medium hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300"
              >
                <Mail size={20} />
                Contact Me
                <motion.svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </motion.button>
            </Link>

            {/* Optional: Email Button */}
            <a href={`mailto:${data.email || 'hello@example.com'}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-900/30 text-cyan-400 border border-cyan-500/20 rounded-xl font-medium hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                {data.email || 'hello@example.com'}
              </motion.button>
            </a>
          </motion.div>
        </div>
        
        {/* Right Side - Profile Image/Icon */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          
          {/* Animated Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            />
          </motion.div>
          
          {/* Main Profile Container */}
          <motion.div
            initial={{ scale: 0.9, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm"
          >
            {/* You can replace this with an actual image */}
            <div className="w-full h-full flex items-center justify-center">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-8xl md:text-9xl"
              >
                👨‍💻
              </motion.span>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm rounded-full"
            >
              <span className="text-white text-sm font-medium">Available for Work</span>
            </motion.div>
          </motion.div>
          
          {/* Floating Tech Icons */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -top-4 -right-4 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50"
          >
            <span className="text-2xl">⚛️</span>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.75 }}
            className="absolute -bottom-4 -left-4 p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50"
          >
            <span className="text-2xl">🚀</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Introduction;