"use client";
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

// import ContactModel from "../ContactModel";

const WebAndSocialMarketing = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <section
      aria-labelledby="web-social-marketing-heading"
      aria-describedby="web-social-marketing-description"
      className="mb-6"
    >
      {/* Invisible SEO heading */}
      <h2 id="web-social-marketing-heading" className="sr-only">
        Website development and social media marketing services
      </h2>

      {/* Invisible SEO description */}
      <p id="web-social-marketing-description" className="sr-only">
        Professional website development and social media marketing services
        designed to help businesses grow online, improve visibility, and
        generate leads.
      </p>

      {open && (
        <ContactModel
          open={open}
          setOpen={setIsOpen}
          fromSource={"website-services"}
          button={"Get Free Consultation"}
        />
      )}

      <article
        className="bg-white rounded-2xl p-7 border-l-8 border-cyan-600 shadow-xl lg:max-w-md mx-auto space-y-5"
        aria-label="Website Development and Social Media Marketing service card"
      >
        {/* Visible Title */}
        <h3 className="text-2xl font-bold text-cyan-700">
          Website Development & Social Media Marketing
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          Grow your business online with high-performance websites and
          result-driven social media marketing strategies designed to attract,
          engage, and convert customers.
        </p>

        {/* Features */}
        <ul className="text-sm text-gray-800 space-y-2">
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" aria-hidden="true" />
            <span>Modern, responsive website development</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" aria-hidden="true" />
            <span>SEO-friendly and fast-loading websites</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" aria-hidden="true" />
            <span>Social media strategy & content creation</span>
          </li>
          <li className="flex items-center gap-2">
            <FaCheckCircle className="text-green-600" aria-hidden="true" />
            <span>Lead generation & brand growth</span>
          </li>
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          aria-label="Get a free consultation for website development and social media marketing"
        >
          <button
            type="button"
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Free Consultation
          </button>
        </Link>

        {/* SEO reinforcement */}
        <p className="sr-only">
          This service helps businesses build professional websites, improve
          online presence, and grow through strategic social media marketing and
          lead generation.
        </p>
      </article>
    </section>
  );
};

export default WebAndSocialMarketing;
