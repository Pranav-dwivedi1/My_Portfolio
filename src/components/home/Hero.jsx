import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import Tech from "../../assets/home/hero/tech.png";
import Check from "../../assets/home/hero/check.png";

export default function Hero() {
  return (
    <section className="h-screen text-white py-6 md:py-12 font-gilroy">
      
      {/* ✅ PRIMARY SEO H1 (invisible but REAL for Google) */}
      <h1 className="sr-only">
        Pranav Dwivedi – Full Stack Developer | pranavdev.online
      </h1>

      {/* Feature Banner */}
      <div className="relative w-full h-[42.58px] mb-8 flex justify-center items-center">
        <div className="w-[361px] h-[42.58px] bg-white/10 rounded-[109.169px] flex justify-between items-center relative px-2">

          {/* Hire Me Button */}
          <Link
            href="/portfolio"
            className="w-[121.75px] h-[32.65px] bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] rounded-[68.2307px] flex items-center justify-center gap-[6.82px] px-[16.3754px] py-[6.82307px] hover:opacity-90 transition"
            aria-label="Hire Pranav Dwivedi for your project"
          >
            <span className="text-white text-[15.28px] leading-[19px] font-medium">
              Hire Me
            </span>
          </Link>

          {/* Center Text */}
          <span className="text-[15.28px] text-center text-[#D2D2D2] font-medium">
            View • Work • Portfolio
          </span>

          {/* Arrow Icon Button */}
          <Link
            href="/portfolio"
            className="w-[24px] h-[24px] bg-[#D2D2D2] flex justify-center items-center rounded-full hover:bg-white transition"
            aria-label="View portfolio"
          >
            <ArrowRight className="w-4 h-4 text-gray-700" />
          </Link>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 text-center">

        {/* ✅ MARKETING HEADING (H2 for SEO correctness) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Fueling{" "}
          <span className="bg-gradient-to-br from-[#2a2ac1] via-[#4e77d5] to-[#152e9d] bg-clip-text text-transparent">
            Brands.
          </span>{" "}
          Powering{" "}
          <span className="bg-gradient-to-br from-[#2a2ac1] via-[#4e77d5] to-[#152e9d] bg-clip-text text-transparent">
            Growth.
          </span>
        </h2>

        {/* ✅ SEO BRAND PARAGRAPH */}
        <p className="max-w-4xl mx-auto text-[#d7d7d7] text-base sm:text-lg md:text-[18px] mb-8 font-medium leading-relaxed">
          Hi, I'm <strong>Pranav Dwivedi</strong>, a <strong>Full Stack Developer</strong>.
          Welcome to <strong>pranavdev.online</strong>, my personal portfolio where I design,
          build, and scale high-performance websites, modern web applications, AI-driven platforms,
          and growth-focused digital solutions using React, Next.js, Node.js, and MongoDB.
        </p>

        {/* ✅ Statistics with proper alt text */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6 text-white">
          <div className="flex flex-col md:flex-row gap-4 text-left">

            {/* Statistic 1 */}
            <div className="flex items-center gap-3">
              <Image 
                src={Check} 
                width={20} 
                height={20} 
                alt="Checkmark icon indicating successful project launches" 
                className="mt-1"
              />
              <div>
                <span className="text-white font-bold text-lg sm:text-xl">50+</span>
                <span className="text-sm sm:text-base text-[#D2D2D2] ml-2">
                  successful launches
                </span>
              </div>
            </div>

            {/* Statistic 2 */}
            <div className="flex items-center gap-3">
              <Image 
                src={Check} 
                width={20} 
                height={20} 
                alt="Checkmark icon indicating satisfied long-term clients" 
                className="mt-1"
              />
              <div>
                <span className="text-white font-bold text-lg sm:text-xl">25+</span>
                <span className="text-sm sm:text-base text-[#D2D2D2] ml-2">
                  long-term clients
                </span>
              </div>
            </div>

            {/* Statistic 3 */}
            <div className="flex items-center gap-3">
              <Image 
                src={Check} 
                width={20} 
                height={20} 
                alt="Checkmark icon indicating 100% delivery commitment" 
                className="mt-1"
              />
              <div>
                <span className="text-white font-bold text-lg sm:text-xl">100%</span>
                <span className="text-sm sm:text-base text-[#D2D2D2] ml-2">
                  delivery commitment
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ✅ CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <ButtonOrange 
            text="About Me" 
            link="/about" 
            className="px-10" 
            aria-label="Learn more about Pranav Dwivedi"
          />
          <ButtonGray 
            text="Contact Me" 
            link="/contact" 
            className="px-10" 
            aria-label="Contact Pranav Dwivedi"
          />
        </div>

        {/* ✅ Bottom Section with Trust Indicators */}
        <div className="mt-16 md:flex flex-col justify-center items-center text-center">
          
          {/* Animated Dots and Trust Text */}
          <div className="inline-flex items-center space-x-2 text-[#9F9F9F] justify-center mb-2">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  aria-hidden="true"
                ></div>
              ))}
            </div>
            <span className="font-gilroy text-[16px] sm:text-lg ml-2">
              Trusted by 100+ clients
            </span>
          </div>

          {/* ✅ Technology Stack Image with SEO-friendly alt text */}
          <div className="mb-2">
            <Image
              src={Tech}
              alt="Technology stack used by Pranav Dwivedi including React, Next.js, Node.js, MongoDB, TypeScript, and other web development tools"
              width={500}
              height={300}
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}