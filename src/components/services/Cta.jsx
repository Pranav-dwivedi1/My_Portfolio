"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const ctaRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    tl.from(contentRef.current?.querySelector('h2'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(contentRef.current?.querySelector('p'), {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out"
      }, "-=0.4")
      .from(contentRef.current?.querySelector('.cta-buttons'), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3");

    // Floating animation for the graphic element
    gsap.to(".cta-graphic", {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative py-20 bg-gradient-to-b from-[#2B0C02] via-[#1e0801] to-[#160b07] text-white font-gilroy overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute hidden lg:block right-10 top-1/2 transform -translate-y-1/2 cta-graphic">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full bg-orange-500 opacity-10 blur-xl"></div>
          <div className="absolute inset-4 rounded-full border-2 border-orange-400 opacity-30"></div>
          <div className="absolute inset-8 rounded-full border border-orange-300 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-orange-400">Elevate</span> Your Digital Presence?
          </h2>

          <p className="text-lg md:text-xl mb-10 opacity-90">
            Whether you're looking to launch a new project or enhance your existing platform,
            our team is ready to help you achieve your goals with tailored solutions.
          </p>

          <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <ButtonOrange
              text="Get Started Now"
              link="/contact"
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            />
            <ButtonGray
              text="Schedule a Consultation"
              link="/contact"
              className="transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-[#3a1809]">
            <p className="text-sm md:text-base text-gray-300 mb-4">
              Trusted by innovative companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-80">
              <span className="text-xl font-medium">TechStars</span>
              <span className="text-xl font-medium">Forbes</span>
              <span className="text-xl font-medium">Inc.</span>
              <span className="text-xl font-medium">Entrepreneur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          50% { transform: translateY(-80px) translateX(15px); opacity: 0.8; }
          100% { transform: translateY(-160px) translateX(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}