"use client";

import { motion } from "framer-motion";
import { dummyData } from "@/data/portfolioData";
import { useState } from "react";
import { FiCalendar, FiChevronDown, FiChevronUp, FiMapPin, FiBriefcase } from "react-icons/fi";

const Experience = () => {
  const data = dummyData.experience;
  const [activeCard, setActiveCard] = useState(0); // First card expanded by default

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-full"
    >
      {/* Enhanced Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6"
        >
          <FiBriefcase className="w-4 h-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-300">Career Timeline</span>
        </motion.div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white mb-4">
          {data.title}
        </h2>
        <p className="text-gray-400 text-lg lg:text-xl max-w-3xl">
          A journey through professional growth and achievements
        </p>
      </div>

      {/* Main Timeline Container - Full width on large screens */}
      <div className="max-w-full mx-auto relative">
        {/* Enhanced Timeline line with glow effect */}
        <div className="hidden lg:block absolute left-10 top-0 bottom-0 w-[2px]">
          <div className="w-full h-full bg-gradient-to-b from-cyan-500/10 via-cyan-500/30 to-cyan-500/10 relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-sm" />
          </div>
        </div>
        
        {/* Experience Items */}
        {data.items.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="relative mb-10 lg:mb-14 lg:flex lg:gap-8 lg:items-start group"
          >
            {/* Timeline node with animation */}
            <div className="hidden lg:flex flex-col items-center w-20 relative">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`w-6 h-6 rounded-full border-4 border-gray-900 z-10 relative
                  ${activeCard === index 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30' 
                    : 'bg-gray-800 group-hover:bg-cyan-500/50'
                  }`}
              >
                {/* Inner glow effect */}
                <div className={`absolute inset-0 rounded-full 
                  ${activeCard === index ? 'bg-cyan-400 animate-pulse' : ''}`} />
              </motion.div>
              {index !== data.items.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-gray-800 via-cyan-500/20 to-gray-800 mt-3" />
              )}
            </div>

            {/* Experience Card with Year Inside */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className={`flex-1 rounded-2xl border-2 cursor-pointer transition-all duration-500 overflow-hidden
                ${activeCard === index 
                  ? 'bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-gray-900/80 border-cyan-500/40 shadow-2xl shadow-cyan-500/10' 
                  : 'bg-gradient-to-br from-gray-900/30 to-gray-900/10 border-gray-800/50 hover:border-gray-700/70'
                }`}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                {/* Card Header with Year Inside the Card */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl transition-all duration-300
                        ${activeCard === index 
                          ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' 
                          : 'bg-gray-800/50'
                        }`}
                      >
                        <span className="text-2xl">
                          {exp.company === "Google" ? "🔍" :
                           exp.company === "Microsoft" ? "💻" :
                           exp.company === "Amazon" ? "📦" :
                           exp.company === "Apple" ? "🍎" : "🏢"}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            {exp.role}
                          </h3>
                          {/* Year Box Inside Card - Top Right Corner */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/20 text-cyan-300 
                              rounded-xl border border-cyan-500/30 w-fit"
                          >
                            <FiCalendar className="text-cyan-400" />
                            <span className="text-sm font-medium">{exp.duration}</span>
                          </motion.div>
                        </div>
                        <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 
                          bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    {/* Location (if available) */}
                    {exp.location && (
                      <div className="flex items-center gap-2 text-gray-400 mt-4">
                        <FiMapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Details with smooth animation */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeCard === index ? 'auto' : 0,
                    opacity: activeCard === index ? 1 : 0.5
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-8 border-t border-gray-800/50">
                    <ul className="space-y-4">
                      {exp.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: activeCard === index ? 1 : 0, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-4 group/detail"
                        >
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 
                              group-hover/detail:scale-125 transition-transform" />
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed flex-1">
                            {detail}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                    
                  {/* Full tech stack when expanded - DYNAMIC */}
{activeCard === index && exp.technologies && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="mt-10 pt-8 border-t border-gray-800/30"
  >
    <h4 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      Technologies & Stack Used
    </h4>
    <div className="flex flex-wrap gap-2">
      {/* 🔥 Yahan dynamic technologies render hongi */}
      {exp.technologies.map((tech, techIndex) => (
        <motion.span
          key={techIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: techIndex * 0.03 }}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-lg 
            hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 
            hover:text-white transition-all duration-200 border border-gray-700/30"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
)}
                  </div>
                </motion.div>

                {/* Enhanced Expand/Collapse Button */}
                <div className="mt-8 pt-8 border-t border-gray-800/30 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(activeCard === index ? null : index);
                    }}
                    className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 
                      transition-colors group/btn"
                  >
                    <motion.div
                      animate={{ rotate: activeCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-lg transition-all
                        ${activeCard === index 
                          ? 'bg-cyan-500/20' 
                          : 'bg-gray-800/50 group-hover/btn:bg-cyan-500/10'
                        }`}
                    >
                      {activeCard === index ? (
                        <FiChevronUp className="w-5 h-5" />
                      ) : (
                        <FiChevronDown className="w-5 h-5" />
                      )}
                    </motion.div>
                    <span className="font-medium">
                      {activeCard === index ? 'Show Less Details' : 'View Full Details'}
                    </span>
                  </button>
                  
                  {/* Experience indicator */}
                  <div className="text-xs text-gray-500 px-3 py-1.5 bg-gray-800/30 rounded-full">
                    Experience #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

   {/* Option 2: Simple Cards */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  viewport={{ once: true }}
  className="max-w-5xl mx-auto mt-16"
>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { label: "Positions Held", value: data.items.length, icon: "👤" },
      { label: "Years Experience", value: "4+", icon: "📅" },
      { label: "Projects Delivered", value: "40+", icon: "📁" },
      { label: "Technologies Used", value: "22+", icon: "🛠️" }
    ].map((stat, index) => (
      <div
        key={index}
        className="p-6 bg-gray-900/10 rounded-xl border border-gray-800/10 hover:border-gray-700/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="text-2xl text-gray-500">{stat.icon}</div>
          <div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>
    </motion.div>
  );
};

export default Experience;