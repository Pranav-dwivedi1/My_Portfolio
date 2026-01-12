'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa";

import { SiNextdotjs, SiWordpress } from "react-icons/si";


const skills = [
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
    desc: 'Core language I use for everything frontend and backend.'
  },
  {
    name: 'React JS',
    icon: <FaReact className="text-blue-400 text-5xl" />,
    desc: 'My go-to library for building UIs, SPAs & interactive apps.'
  },
  {
  name: 'Next js',
  icon: <SiNextdotjs className="text-black text-5xl" />,
  desc: 'A powerful React framework for building fast, SEO-friendly and full-stack web applications.'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
    desc: 'Backend power using Express, APIs, auth & real-time apps.'
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-500 text-5xl" />,
    desc: 'Clean, semantic structure for every web project.'
  },
  {
    name: 'CSS3 / Tailwind',
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    desc: 'Styling with Tailwind and animation using utility classes.'
  },
  {
    name: 'Git & GitHub',
    icon: <FaGitAlt className="text-red-500 text-5xl" />,
    desc: 'Version control, branching, PRs, and team collab workflows.'
  },
  {
    name: 'MongoDB / SQL',
    icon: <FaDatabase className="text-purple-500 text-5xl" />,
    desc: 'Document or relational, I work with both data models.'
  },
  {
  name: "WordPress",
  icon: <SiWordpress className="text-blue-500 text-5xl" />,
  desc: "A popular CMS for building blogs, business websites, and fully customizable content-driven platforms."
  }

  
];

export default function MySkills() {
  return (
    <section className="relative py-16 text-white px-4 md:px-20 lg:px-28 ">

      <div className="absolute w-[608px] h-[502px] bottom-[-100px] left-[-150px] blur-[300px] mix-blend-screen rounded-full pointer-events-none z-0 overflow-hidden"  />
        <div className="absolute w-[408px] h-[402px] top-[0px] right-[-200px]  blur-[300px] mix-blend-screen rounded-full pointer-events-none z-0 overflow-hidden" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack I Love 💻.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">From frontend UI polish to backend APIs and deployment—I craft solutions with these tools daily</p>
        </motion.div>

        {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 duration-300 p-6 rounded-2xl shadow-lg hover:shadow-purple-600/20 transition-shadow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

