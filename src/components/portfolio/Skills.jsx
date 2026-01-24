"use client";

import { motion } from "framer-motion";
import { dummyData } from "@/data/portfolioData";
import { useState } from "react";

const Skills = () => {
  const data = dummyData.skills;
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
    "CI/CD": 68,
  };

  const getSkillLevel = (skill) =>
    skillLevels[skill] || Math.floor(Math.random() * 30) + 70;

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      itemScope
      itemType="https://schema.org/ItemList"
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2
            id="skills-heading"
            itemProp="name"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {data.title}
          </h2>

          <p
            className="text-gray-400 mb-12 max-w-2xl"
            itemProp="description"
          >
            Technical skills and proficiency across frontend, backend, and
            DevOps technologies.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.categories.map((category, index) => (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ItemList"
              className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">
                  {category.name === "Frontend"
                    ? "🖥️"
                    : category.name === "Backend"
                    ? "⚙️"
                    : "🛠️"}
                </span>
                <h3
                  className="text-xl font-bold text-white"
                  itemProp="name"
                >
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => {
                  const level = getSkillLevel(skill);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/DefinedTerm"
                      className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                    >
                      <span
                        itemProp="name"
                        className={`font-medium transition-colors ${
                          hoveredSkill === skill
                            ? "text-cyan-300"
                            : "text-gray-300"
                        }`}
                      >
                        {skill}
                      </span>

                      {/* Visual Skill Level */}
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${level}%` }}
                            transition={{
                              duration: 1.2,
                              delay: i * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className={`h-full rounded-full ${
                              level >= 85
                                ? "bg-green-500"
                                : level >= 70
                                ? "bg-cyan-500"
                                : "bg-purple-500"
                            }`}
                          />
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            level >= 85
                              ? "bg-green-500"
                              : level >= 70
                              ? "bg-cyan-500"
                              : "bg-purple-500"
                          }`}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Overall Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50"
        >
          <h4 className="text-lg font-semibold text-white mb-2">
            Overall Technical Proficiency
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Combined expertise across frontend, backend, DevOps, and cloud
            technologies.
          </p>

          <div className="w-full md:w-64 h-3 bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "82%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>

        {/* Invisible SEO reinforcement */}
        <p className="sr-only">
          Technical skills of Pranav Dwivedi include React.js, Next.js,
          TypeScript, Node.js, MongoDB, PostgreSQL, AWS, Docker, CI/CD,
          Tailwind CSS, and full stack web development.
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
