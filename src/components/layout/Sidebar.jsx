"use client";

import { motion } from "framer-motion";
import { sections } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import profilePic from "../../assets/portfolio/profile.png";

const Sidebar = ({ active, scrollToSection }) => {
  return (
    <div className="flex flex-col fixed left-0 top-0 h-screen w-[320px] border-r border-[#1e293b]/50 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617] backdrop-blur-lg z-40">
      {/* ===== Profile Section ===== */}
      <div className="p-8 pt-12">
        <div className="flex flex-col items-center text-center">
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="relative w-40 h-40 rounded-full "
  >
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <Image
        src={profilePic}
        alt="Pranav Dwivedi"
        fill
        className="object-cover rounded-full"
        priority
      />
    </div>
  </motion.div>

  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
    Pranav Dwivedi
  </h1>

  <p className="text-cyan-400 text-lg mt-2">Full Stack Developer</p>

  <p className="text-sm text-gray-300 mt-4 leading-relaxed text-center">
    Building the future of web applications with modern technologies and
    clean architecture.
  </p>
</div>

      </div>

      {/* ===== Navigation ===== */}
      <div className="flex-1 px-6">
        <div className="space-y-2">
          {sections.map((s) => (
            <motion.button
              key={s.id}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection(s.id)}
              className={`w-full text-left uppercase tracking-widest text-sm flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300
                ${
                  active === s.id
                    ? "text-white bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border-l-4 border-cyan-400"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                }`}
            >
              <span className="text-xl">{s.icon}</span>
              <span className="font-medium">{s.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ===== Sidebar Footer ===== */}
      <div className="p-6 border-t border-[#1e293b]/50">
        <div className="flex justify-center gap-4 mb-4">
          <motion.a
            href="https://github.com/Pranav-dwivedi1"
            target="_blank"
            whileHover={{ y: -4, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            whileHover={{ y: -4, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:pranav@example.com"
            whileHover={{ y: -4, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <Mail size={20} />
          </motion.a>

          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{ y: -4, scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <Twitter size={20} />
          </motion.a>
        </div>

        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Pranav Dwivedi
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
