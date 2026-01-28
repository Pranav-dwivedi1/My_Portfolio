"use client";

import { motion } from "framer-motion";
import { sections } from "@/data/portfolioData";
import { Github, Linkedin, Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import profilePic from "../../assets/portfolio/profile.png";

const Sidebar = ({ active, scrollToSection }) => {
  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-[320px] flex-col border-r border-[#1e293b]/50 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617] backdrop-blur-lg">
      {/* ===== Profile Section ===== */}
      <div className="p-8 pt-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-40 h-40 rounded-full"
          >
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <Image
                src={profilePic}
                alt="Pranav Dwivedi"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <h1 className="mt-4 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>

          <p className="mt-2 text-sm leading-relaxed text-gray-300">
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
              className={`flex w-full items-center gap-4 rounded-lg px-4 py-2 text-left text-sm uppercase tracking-widest transition-all duration-300
                ${
                  active === s.id
                    ? "bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border-l-4 border-cyan-400 text-white"
                    : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                }`}
            >
              <span className="text-xl">{s.icon}</span>
              <span className="font-medium">{s.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ===== Sidebar Footer (Social Media) ===== */}
      <div className="border-t border-[#1e293b]/50 p-6">
        <div className="mb-4 flex justify-center gap-4">
          {/* GitHub */}
          <motion.a
            href="https://github.com/Pranav-dwivedi1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
          >
            <Github size={20} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pranavdwivedi07/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-300 transition-colors hover:bg-blue-500/10 hover:text-blue-400"
          >
            <Linkedin size={20} />
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/pranav.dwivedi.777"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-300 transition-colors hover:bg-blue-600/10 hover:text-blue-500"
          >
            <Facebook size={20} />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/pranavdwivedi.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-300 transition-colors hover:bg-pink-600/10 hover:text-pink-500"
          >
            <Instagram size={20} />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:pranav01dev@gmail.com"
            aria-label="Send Email"
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-gray-300 transition-colors hover:bg-cyan-600/10 hover:text-cyan-400"
          >
            <Mail size={20} />
          </motion.a>
        </div>

        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Pranav Dwivedi
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
