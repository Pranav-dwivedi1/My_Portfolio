import Link from "next/link";
import React from "react";
import { GrWorkshop } from "react-icons/gr";

const JoinWorkshop = () => {
  return (
    <section
      className="rounded-xl bg-white shadow"
      aria-labelledby="join-workshop-heading"
    >
      {/* ✅ Invisible SEO heading */}
      <h2 id="join-workshop-heading" className="sr-only">
        Join a free online business workshop
      </h2>

      <Link
        href="https://webinar.Yantraonline/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join free online workshop on business and growth strategies"
      >
        <div className="relative group">
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-[24px] blur opacity-25"></div>

          {/* Button container */}
          <div className="relative bg-[#03518F] rounded-b-xl flex justify-center items-center">
            <button
              type="button"
              className="px-6 py-3 rounded-[24px] text-white flex items-center justify-center text-xl relative overflow-hidden"
            >
              {/* Shine effect overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0"></div>

              {/* Icon wrapper */}
              <span className="relative flex items-center justify-center mr-3">
                <GrWorkshop
                  className="transform transition-all duration-300 group-hover:scale-110"
                  size={22}
                  aria-hidden="true"
                />
                <span className="absolute animate-ping h-3/4 w-3/4 rounded-full bg-blue-400 opacity-20"></span>
                <span className="absolute h-full w-full rounded-full border border-blue-400/50 animate-pulse"></span>
              </span>

              {/* Text */}
              <span className="relative">
                <span className="bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white transition-colors duration-300">
                  Join Free Workshop
                </span>
              </span>
            </button>
          </div>
        </div>
      </Link>

      {/* 🔍 Invisible SEO reinforcement */}
      <p className="sr-only">
        This call to action invites users to join a free online workshop focused
        on business growth, strategy, and professional learning opportunities.
      </p>
    </section>
  );
};

export default JoinWorkshop;
