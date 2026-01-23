"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiArrowRight, FiChevronLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";

/* Project showcase data (unchanged) */
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

  /* Auto-scroll logic (unchanged) */
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const interval = setInterval(() => {
      if (
        scroller.scrollLeft + scroller.clientWidth >=
        scroller.scrollWidth - 1
      ) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        setActiveIndex(0);
      } else {
        const nextScroll = scroller.scrollLeft + scroller.clientWidth;
        scroller.scrollTo({ left: nextScroll, behavior: "smooth" });
        setActiveIndex((prev) => (prev + 1) % projectImages.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const itemWidth = scroller.clientWidth;
    setActiveIndex(Math.round(scroller.scrollLeft / itemWidth));
  };

  const scrollToIndex = (index) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({
      left: index * scroller.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    scrollToIndex(
      activeIndex === 0 ? projectImages.length - 1 : activeIndex - 1
    );
  };

  const scrollNext = () => {
    scrollToIndex((activeIndex + 1) % projectImages.length);
  };

  return (
    <section
      className="relative text-white font-gilroy py-6 md:px-12 overflow-hidden min-h-[calc(90vh-80px)]"
      aria-labelledby="about-hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 space-y-4 md:space-y-6"
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider text-cyan-300 uppercase bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-white/10">
              Who We Are
            </span>

            {/* ✅ PRIMARY H1 (kept, SEO-correct) */}
            <h1
              id="about-hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Building Powerful Websites{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                Digital Experiences
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
              We are a full-service digital team specializing in website
              development, mobile apps, and digital marketing. Our goal is to
              help businesses grow online through modern design, clean code,
              and smart digital strategies.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg">Website Development</h3>
                <p className="text-white/60 text-sm max-w-64">
                  Fast, secure, and scalable websites for modern businesses.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Digital Marketing</h3>
                <p className="text-white/60 text-sm max-w-64">
                  SEO, social media, and performance-driven growth strategies.
                </p>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <ButtonOrange
                text="Meet Our Team"
                onClick={() =>
                  document.getElementById("team")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              />
              <ButtonGray text="Contact Us" link="/contact" />
            </div>
          </motion.div>

          {/* RIGHT CAROUSEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-1/2 relative"
          >
            <div
              ref={scrollerRef}
              onScroll={handleScroll}
              className="overflow-x-hidden w-full aspect-[4/3] rounded-2xl shadow-2xl border border-white/10"
            >
              <div className="flex h-full">
                {projectImages.map((image, index) => (
                  <article
                    key={image.id}
                    className="flex-shrink-0 w-full h-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                      <span className="text-xs text-cyan-300">
                        {image.category}
                      </span>
                      <h3 className="text-2xl font-bold">{image.title}</h3>
                      <p className="text-white/70 text-sm">
                        Innovative solutions for modern challenges
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* NAV BUTTONS */}
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full"
            >
              <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 🔍 INVISIBLE SEO REINFORCEMENT */}
      <p className="sr-only">
        This section introduces a full-service digital team focused on website
        development, web applications, digital marketing, and scalable online
        solutions using modern technologies and best practices.
      </p>

      <style jsx>{`
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
