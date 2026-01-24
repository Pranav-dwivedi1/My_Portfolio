import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Chirag from "../../assets/experts/pranavdev-chirag-matholiya-head-of-r-d-training-collaboration.webp";

const AuthorProfile = () => {
  return (
    <section
      className="mb-8"
      id="genesis-eir"
      aria-labelledby="author-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* ✅ Invisible SEO heading */}
      <h2 id="author-heading" className="sr-only">
        Author profile and expert information
      </h2>

      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row justify-between">
        {/* IMAGE */}
        <div className="flex flex-col w-full group cursor-pointer p-8 sm:p-0">
          <div className="w-full aspect-[4/5] mb-2 relative overflow-hidden">
            {/* Initial gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#BFE2FF] to-[#FFE7E2] transition-opacity duration-700 ease-in-out"></div>

            {/* Hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#EDA497] to-[#B7D3E8] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

            <Image
              loading="lazy"
              src={Chirag}
              alt="Dr. Chirag Matholiya, Head of R&D, Training and Collaboration"
              className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 ease-in-out filter md:grayscale group-hover:grayscale-0"
              itemProp="image"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-8">
          <p className="text-sm font-semibold py-1">About the author:</p>

          <h3 className="text-blue-800 text-lg font-bold py-1" itemProp="name">
            Dr. Chirag Matholiya
          </h3>

          <h4 className="text-base mb-6" itemProp="jobTitle">
            Head of R&amp;D, Training and Collaboration
          </h4>

          <p className="text-sm mb-4" itemProp="description">
            Head of Department, I lead initiatives in research and development,
            government and private funding, and strategic collaborations. I
            specialize in scheme onboarding, sales training, team building, and
            fundraising consulting. I also organize startup bootcamps and
            support process execution to drive growth and innovation.
          </p>

          <div className="flex w-full items-center">
            <p className="text-xs text-gray-500">Follow the expert:</p>
            <Link
              href="/"
              aria-label="LinkedIn profile of Dr. Chirag Matholiya"
              itemProp="sameAs"
            >
              <FaLinkedin className="text-gray-500 ml-2 text-xl hover:text-blue-700 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      {/* 🔍 Invisible SEO reinforcement */}
      <p className="sr-only">
        Dr. Chirag Matholiya is an expert in research and development, training,
        government and private funding, strategic collaborations, and startup
        ecosystem growth. This author profile establishes expertise and
        authority for published content.
      </p>
    </section>
  );
};

export default AuthorProfile;
