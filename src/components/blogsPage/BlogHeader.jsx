import React from "react";
import Image from "next/image";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import { FiArrowRight } from 'react-icons/fi';  // Import the icon

export default function BlogHeader() {
  return (
    <header className="relative w-full h-[50vh] pb-10 overflow-hidden bg-gradient-to-b from-[#160b07] via-[#1e0801] to-[#2B0C02] font-gilroy">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00IDQtNC0xLjgtNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Content container */}
      <div className="relative h-full w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our <span className="text-blue-300">Business</span> Blog
          </h1>

          <p className="text-lg md:text-xl text-blue-100 opacity-90 max-w-xl mx-auto md:mx-0 font-gilroy">
            Resourceful insight, news and guidance that will help you make your business a successful brand!
          </p>

          {/* Buttons with icons inside */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-4 justify-start w-full max-w-screen-sm mx-auto">
            <ButtonOrange
              link="/our-work"
              className="w-full md:w-[280px] px-8 py-4 flex items-center justify-center text-lg text-white"
              text={
                <>
                  Start Your Project
                </>
              }
            />

            <ButtonGray
              link="/our-work"
              className="w-full md:w-[280px] px-8 py-4 flex items-center justify-center text-lg text-white"
              text={
                <>
                  See Our Work 
                </>
              }
            />
          </div>
        </div>

        {/* Image placeholder - right side */}
        <div className="hidden md:block w-full md:w-1/2 relative h-full animate-fadeIn">
          <div className="absolute right-0 bottom-0 w-full h-3/4">
            {/* Uncomment when you have the image */}
            {/* <Image
              src={blog}
              alt="Business blog illustration"
              layout="fill"
              objectFit="contain"
              priority
              className="drop-shadow-2xl"
            /> */}
            <div className="absolute inset-0 bg-blue-800/20 rounded-2xl border-2 border-blue-500/30 flex items-center justify-center">
              <span className="text-white/50 text-lg">Blog Illustration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
}
