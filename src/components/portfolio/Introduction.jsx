"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Download, Mail } from "lucide-react";
import { dummyData } from "@/data/portfolioData";
import Link from "next/link";
import Image from "next/image";
import profilePhoto from "../../assets/portfolio/profilePhoto.png";
const Introduction = () => {
  const data = dummyData.intro;

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "YourName_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-6 pb-0 sm:pb-6 md:pb-12 lg:pb-24">   
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-7xl"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 xl:gap-16 px-4 md:px-6 lg:px-12">
          
          {/* Left Content - Takes 60% width */}
          <div className="lg:w-[60%] w-full">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
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
              className="text-base md:text-lg lg:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 max-w-3xl"
            >
              {data.description}
            </motion.p>
            
            {/* Stats Cards - Horizontal layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <div className="flex-1 flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-900/40 rounded-xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-lg bg-blue-500/10 flex-shrink-0">
                  <MapPin className="text-blue-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs md:text-sm text-gray-400">Based In</p>
                  <p className="text-white font-medium text-base md:text-lg">{data.location}</p>
                </div>
              </div>
              
              <div className="flex-1 flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-900/40 rounded-xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="p-2 md:p-3 rounded-lg bg-cyan-500/10 flex-shrink-0">
                  <Briefcase className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-grow">
                  <p className="text-xs md:text-sm text-gray-400">Experience</p>
                  <p className="text-white font-medium text-base md:text-lg">{data.experience}</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons - Responsive layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
            >
              {/* Resume Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="group flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex-shrink-0"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Download Resume</span>
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 ml-1"
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
                </svg>
              </motion.button>

              {/* Contact Button */}
              <Link href="/contact" className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gray-900/50 text-white border border-gray-700 rounded-xl font-medium hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 w-full sm:w-auto"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-sm md:text-base">Contact Me</span>
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          {/* Right Side - Profile Image/Icon - Takes 40% width */}
          <div className="lg:w-[40%] w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-full blur-2xl md:blur-3xl" />
              
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
                  className="absolute -top-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
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
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-full h-full rounded-full overflow-hidden"
              >
                  <Image
                  src={profilePhoto}
                  alt="Pranav Dwivedi"
                  fill
                  className="object-cover"
                  priority
                 />
</motion.div>

                
                {/* Floating Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm rounded-full"
                >
                  <span className="text-white text-xs md:text-sm font-medium">Available for Work</span>
                </motion.div>
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-3 -right-3 p-2 md:p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50"
              >
                <span className="text-xl md:text-2xl">⚛️</span>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.75 }}
                className="absolute -bottom-3 -left-3 p-2 md:p-3 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50"
              >
                <span className="text-xl md:text-2xl">🚀</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Introduction;