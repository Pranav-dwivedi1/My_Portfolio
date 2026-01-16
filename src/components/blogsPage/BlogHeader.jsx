'use client';

import React from "react";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import { FiArrowRight } from 'react-icons/fi';

export default function BlogHeader({ latestBlogsRef = null }) {
  const handleScrollToLatestBlogs = () => {
    if (latestBlogsRef?.current) {
      latestBlogsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      const section = document.getElementById('latest-blogs');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="relative w-full min-h-[65vh] py-16 overflow-hidden font-gilroy flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left">

            {/* Section Title */}
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase text-cyan-300 bg-white/10 rounded-full border border-white/10">
              Our Blog
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Insights, Ideas &  
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Digital Knowledge
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Explore our latest blogs covering website development, digital marketing,
              technology trends, and practical insights to help your business grow.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">

              <ButtonOrange
                onClick={handleScrollToLatestBlogs}
                className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 text-lg"
              >
                Latest Blogs
                <FiArrowRight />
              </ButtonOrange>

              <ButtonGray
                text="Contact Us"
                link="/contact"
                className="w-full sm:w-auto px-8 py-4 flex items-center justify-center gap-2 text-lg"
              />
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hidden md:block relative">
            <div className="relative h-[360px] rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl shadow-xl flex items-center justify-center">
              <span className="text-white/50 text-lg">
                Blog & Knowledge Hub
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
}
