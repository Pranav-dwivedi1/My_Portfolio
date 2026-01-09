import React from "react";
import Image from "next/image";

import { ArrowRight, Menu } from "lucide-react"; // Added Menu for hamburger icon
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import Tech from "../../assets/home/hero/tech.png";
import Check from "../../assets/home/hero/check.png";
import RightArrow from "../../assets/home/hero/right.svg";

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-[#160b07] via-[#1e0801] to-[#2B0C02] text-white py-12 md:py-20 font-gilroy">
      {/* Header (Logo and Hamburger Menu for Mobile) */}

      {/* New Feature Banner */}
      <div className="relative w-full h-[42.58px] mb-8 flex justify-center items-center">
        <div className="w-[381px] h-[42.58px] bg-white/10 rounded-[109.169px] flex justify-between items-center relative px-2">
          {/* Orange Label */}
          <div className="w-[121.75px] h-[32.65px] bg-[#D65A31] rounded-[68.2307px] flex items-center justify-center gap-[6.82px] px-[16.3754px] py-[6.82307px]">
            <span className="text-white text-[15.28px] leading-[19px] font-medium">
              New Feature
            </span>
          </div>

          {/* Center Text */}
          <span className="text-[15.28px] text-center text-[#D2D2D2] font-medium">
            Check out Team Dashboard
          </span>

          {/* Arrow Icon */}
          <div className="w-[24px] h-[24px] bg-[#D2D2D2] flex justify-center items-center rounded-full">
            <ArrowRight className="w-4 h-4 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Fueling <span className="text-[#D65A31]">Brands.</span> Powering{" "}
          <span className="text-[#AD5031]">Growth.</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-[#9F9F9F] text-base sm:text-lg md:text-[20px] mb-8 font-medium leading-relaxed">
          From high-converting websites to result-driven campaigns – Yantra
          Digital builds what success looks like.
        </p>

        {/* Statistics */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6 text-white">
          {/* ITEM 1 */}
          <div className="flex items-center gap-3">
            <Image
              src={Check}
              width={20}
              height={20}
              alt="check"
              className="mt-1"
            />
            <div>
              <span className="text-white font-bold text-lg sm:text-xl">
                30 Lakh+
              </span>
              <span className="text-sm sm:text-base text-[#D2D2D2] ml-2">
                client revenue
              </span>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-3">
            <Image
              src={Check}
              width={20}
              height={20}
              alt="check"
              className="mt-1"
            />
            <div>
              <span className="text-white font-bold text-lg sm:text-xl">
                30+
              </span>
              <span className="text-sm sm:text-base text-[#D2D2D2] ml-2">
                projects delivered
              </span>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-3">
            <Image
              src={Check}
              width={20}
              height={20}
              alt="check"
              className="mt-1"
            />
            <div>
              <span className="text-white font-bold text-lg sm:text-xl">
                100%
              </span>
              <span className="text-sm sm:text-base text-[#D2D2D2] ml-2">
                Accuracy
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4 justify-center w-full max-w-screen-sm mx-auto">
          <ButtonOrange
            text="Start Your Project"
            link="/our-work"
            className="w-full  md:w-[262.13px]"
          />
          <ButtonGray text="See Our Work" link="/our-work" className="" />
        </div>

        {/* Bottom decoration (Hidden on Mobile) */}
        <div className="mt-16 md:flex flex-col justify-center items-center text-center">
          {/* Animated Dots and Text Section */}
          <div className="inline-flex items-center space-x-2 text-[#9F9F9F] justify-center mb-2">
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#D65A31] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
            <span className="font-gilroy text-[16px] sm:text-lg ml-2">
              Trusted by 1000+ businesses
            </span>
          </div>

          {/* Image */}
          <div className="mt-2">
            <Image
              src={Tech}
              alt="Description of the image"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
