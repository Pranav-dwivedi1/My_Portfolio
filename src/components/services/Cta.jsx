"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import { FiCheck, FiExternalLink, FiStar } from 'react-icons/fi';


gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const ctaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.from(contentRef.current?.querySelector("h2"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        contentRef.current?.querySelector("p"),
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        contentRef.current?.querySelector(".cta-buttons"),
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

    gsap.to(".cta-graphic", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={ctaRef}
      role="region"
      aria-labelledby="cta-heading"
      className="relative py-16 text-white font-gilroy overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0f172a] to-[#020617]"
    >
      {/* Floating Background Dots */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-orange-500"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Decorative Graphic */}
      <div
        className="absolute hidden lg:block right-10 top-1/2 -translate-y-1/2 cta-graphic"
        aria-hidden="true"
      >
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-xl" />
          <div className="absolute inset-4 rounded-full border-2 border-orange-400/30" />
          <div className="absolute inset-8 rounded-full border border-orange-300/20" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* SEO-Correct Heading */}
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to{" "}
            <span className="text-orange-400">Grow Your Business Online</span>?
          </h2>

          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Get expert help with{" "}
            <strong>web development</strong>,{" "}
            <strong>AI automation</strong>,{" "}
            <strong>UI/UX design</strong>, and{" "}
            <strong>digital growth strategies</strong> tailored for startups
            and growing businesses.
          </p>

          {/* CTAs */}
          <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <ButtonOrange
              text="Start Your Project"
              link="/contact"
              aria-label="Start a web development or AI project"
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            />
            <ButtonGray
              text="Call Now"
              link="tel:+918770676950"
              aria-label="Call PranavDev for consultation"
              className="transform hover:scale-105 transition-all duration-300"
            />
          </div>

           

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-orange-900/40">
          
            <p className="text-sm md:text-base text-gray-400 mb-4">
              Trusted by startups, founders, and growing businesses
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-80">
              <span className="text-lg font-medium">Tech Startups</span>
              <span className="text-lg font-medium">SaaS Companies</span>
              <span className="text-lg font-medium">MSMEs</span>
              <span className="text-lg font-medium">Founders</span>
            </div>
            <div className="py-2 inline-flex items-center gap-2 px-4 mt-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 rounded-full text-sm border border-green-500/20">
                        <FiCheck className="w-4 h-4" />
                        <span>100% Satisfaction Guarantee</span>
                
                      </div>
          </div>

          {/* 🔍 Hidden SEO Reinforcement */}
          <p className="sr-only">
            Contact PranavDev for professional web development services, AI
            automation, full stack development, business websites, startup
            solutions, and scalable digital products in India.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-160px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
