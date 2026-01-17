"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

// import ContactModel from "../ContactModel";

const WebAndSocialMarketing = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      {open && (
        <ContactModel
          open={open}
          setOpen={setIsOpen}
          fromSource={"website-services"}
          button={"Get Free Consultation"}
        />
      )}

      <div className="bg-white rounded-2xl p-7 border-l-8 border-cyan-600 shadow-xl lg:max-w-md mx-auto space-y-5 mb-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-cyan-700">
          Website Development & Social Media Marketing
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Grow your business online with high-performance websites and result-driven
          social media marketing strategies designed to attract, engage, and convert customers.
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-800 space-y-2">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            Modern, responsive website development
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            SEO-friendly and fast-loading websites
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            Social media strategy & content creation
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" />
            Lead generation & brand growth
          </li>
        </ul>

        {/* CTA Button */}
       <Link href="/contact">
  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
    Get Free Consultation
  </button>
</Link>

      </div>
    </>
  );
};

export default WebAndSocialMarketing;
