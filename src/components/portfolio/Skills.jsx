"use client";

import { motion } from "framer-motion";
import { dummyData } from "@/data/portfolioData";
import { useState } from "react";

const Skills = () => {
  const data = dummyData.skills;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill levels for visual representation only (no percentages shown)
  const skillLevels = {
    "React.js": 90,
    "Next.js": 85,
    "TypeScript": 88,
    "Tailwind CSS": 92,
    "Node.js": 80,
    "Express.js": 75,
    "MongoDB": 78,
    "PostgreSQL": 72,
    "Git": 85,
    "Docker": 70,
    "AWS": 65,
    "CI/CD": 68
  };

  // Get skill level for visual bar
  const getSkillLevel = (skill) => skillLevels[skill] || Math.floor(Math.random() * 30) + 70;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {data.title}
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Technical skills and proficiency levels across different domains
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">
                {category.name === "Frontend" ? "🖥️" :
                 category.name === "Backend" ? "⚙️" : "🛠️"}
              </span>
              <h3 className="text-xl font-bold text-white">
                {category.name}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, i) => {
                const level = getSkillLevel(skill);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors group"
                  >
                    <span className={`font-medium transition-colors duration-300 ${
                      hoveredSkill === skill ? "text-cyan-300" : "text-gray-300"
                    }`}>
                      {skill}
                    </span>
                    
                    {/* Simple bar on the right side */}
                    <div className="flex items-center gap-2">
                      {/* Bar container */}
                      <div className="w-20 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: i * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${
                            level >= 85 ? "bg-green-500" :
                            level >= 70 ? "bg-cyan-500" :
                            "bg-purple-500"
                          }`}
                        />
                      </div>
                      
                      {/* Dot indicator */}
                      <div className={`w-2 h-2 rounded-full ${
                        level >= 85 ? "bg-green-500" :
                        level >= 70 ? "bg-cyan-500" :
                        "bg-purple-500"
                      }`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overall proficiency indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              Overall Technical Proficiency
            </h4>
            <p className="text-gray-400 text-sm">
              Combined expertise across all skill categories
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full md:w-64 h-3 bg-gray-800/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "82%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              82%
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;