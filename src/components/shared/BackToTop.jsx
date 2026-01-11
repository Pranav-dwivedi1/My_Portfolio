"use client";

import { motion } from "framer-motion";

const BackToTop = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 border border-cyan-500/30 hover:border-cyan-500 hover:bg-gray-800 transition-all z-50"
    >
      ↑
    </motion.button>
  );
};

export default BackToTop;