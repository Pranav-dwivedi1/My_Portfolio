"use client";
import React, { useRef, useState, useEffect } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";

// Sample project images - replace with your actual images
const projectImages = [
  { id: 1, title: "E-commerce Platform", category: "Web Development" },
  { id: 2, title: "Mobile Banking App", category: "Mobile App" },
  { id: 3, title: "AI Dashboard", category: "SaaS Product" },
  { id: 4, title: "Brand Identity", category: "Design System" },
  { id: 5, title: "Healthcare Portal", category: "Enterprise Solution" },
  { id: 6, title: "Real-time Analytics", category: "Data Platform" },
];

export default function Page() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const interval = setInterval(() => {
      if (scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1) {
        scroller.scrollTo({ left: 0, behavior: 'smooth' });
        setActiveIndex(0);
      } else {
        const nextScroll = scroller.scrollLeft + scroller.clientWidth;
        scroller.scrollTo({ left: nextScroll, behavior: 'smooth' });
        setActiveIndex((prev) => (prev + 1) % projectImages.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const scrollPosition = scroller.scrollLeft;
    const itemWidth = scroller.clientWidth;
    const currentIndex = Math.round(scrollPosition / itemWidth);
    setActiveIndex(currentIndex);
  };

  const scrollToIndex = (index) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const itemWidth = scroller.clientWidth;
    scroller.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    const newIndex = activeIndex === 0 ? projectImages.length - 1 : activeIndex - 1;
    scrollToIndex(newIndex);
  };

  const scrollNext = () => {
    const newIndex = (activeIndex + 1) % projectImages.length;
    scrollToIndex(newIndex);
  };

  return (
    <section className="relative text-white font-gilroy py-6 overflow-hidden min-h-[calc(90vh-80px)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617]" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10">
        {/* Mobile: stacked → text first, then images */}
        {/* Desktop: side-by-side → text left, images right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
          {/* LEFT / TOP → Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 space-y-4 md:space-y-6 order-1 lg:order-none"
          >
            {/* Badge */}
            <div>
              <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider text-cyan-300 uppercase bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-white/10">
                Who We Are

              </span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Building Powerful Websites <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">Digital Experiences</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
            </div>

            {/* Description + features */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                We are a full-service digital team specializing in website development, mobile apps, and digital marketing. Our goal is to help businesses grow online through modern design, clean code, and smart digital strategies.

              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full" />
                    <h3 className="font-semibold text-lg sm:text-xl">Website Development</h3>
                  </div>
                  <p className="text-white/60 text-sm sm:text-base">
                    We build fast, secure, and scalable websites for modern businesses

                  </p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full" />
                    <h3 className="font-semibold text-lg sm:text-xl">Digital Marketing</h3>
                  </div>
                  <p className="text-white/60 text-sm sm:text-base">
                   We help brands grow with SEO, social media, and online advertising
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <ButtonOrange
                text="Meet Our Team"
                link="/team"
                className="group flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <span>Meet Our Team</span>
                <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonOrange>

              <ButtonGray
                text="Contact Us"
                link="/contact"
                className="px-6 py-3 md:px-8 md:py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* RIGHT / BOTTOM → Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:w-1/2 relative order-2 lg:order-none"
          >
            <div className="relative group">
              <div
                ref={scrollerRef}
                className="overflow-x-hidden w-full aspect-[4/3] sm:aspect-[5/3] lg:aspect-[4/3] max-h-[500px] rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing border border-white/10"
                onScroll={handleScroll}
              >
                <div className="flex h-full">
                  {projectImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="flex-shrink-0 w-full h-full relative"
                    >
                      {/* Gradient overlay - different per slide */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          index % 3 === 0
                            ? 'from-cyan-500/15 via-purple-500/10 to-transparent'
                            : index % 3 === 1
                            ? 'from-purple-500/15 via-cyan-500/10 to-transparent'
                            : 'from-blue-500/15 via-pink-500/10 to-transparent'
                        }`}
                      />

                      {/* Text overlay at bottom */}
                      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <div className="space-y-3 md:space-y-4">
                          <span className="inline-block px-3 py-1.5 text-xs font-medium text-cyan-300 bg-white/10 backdrop-blur-sm rounded-full">
                            {image.category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold">{image.title}</h3>
                          <p className="text-white/70 text-sm md:text-base">
                            Innovative solutions for modern challenges
                          </p>
                          <button className="flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 transition-colors">
                            View Case Study
                            <FiArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nav buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110"
                aria-label="Previous"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:bg-black/80 hover:scale-110"
                aria-label="Next"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 z-10">
                {projectImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-400'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-medium text-white/80 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
                {activeIndex + 1} / {projectImages.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-60 h-60 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-gradient-to-l from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <style jsx>{`
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}