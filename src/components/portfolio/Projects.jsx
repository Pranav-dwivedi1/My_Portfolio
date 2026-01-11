"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { dummyData } from "@/data/portfolioData";

const Projects = () => {
  const data = dummyData.projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        {data.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan-500/50 transition-all"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.name}</h3>
            <p className="text-gray-400 mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-800/50 text-cyan-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <motion.a
              href={project.link}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
            >
              View Project
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;