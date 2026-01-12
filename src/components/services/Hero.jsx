"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // Animate elements in sequence
    tl.fromTo(
      textRef.current?.querySelector('h1'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        textRef.current?.querySelector('p'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        buttonRef.current?.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        '-=0.3'
      );

    // Background animation
    gsap.to(heroRef.current, {
      backgroundPosition: '50% 20%',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Parallax effect for text
    gsap.to(textRef.current, {
      y: 50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Clean up
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[90vh]  text-white py-12 md:py-6 font-gilroy overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block">Elevate Your Business </span>
            <span className="text-orange-400 inline-block">With Our Services</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Discover tailored solutions designed to propel your business forward in today's competitive landscape.
          </p>
        </div>

        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          
           <ButtonOrange
            text="Explore Services"
            link="/our-work"
            className="w-full md:w-[262.13px]"
          />
          <ButtonGray
            text="Contact Us"
            link="/contact"
            className="w-full md:w-[262.13px]"
          />
        </div>
         
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-orange-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          50% { transform: translateY(-100px) translateX(20px); opacity: 0.8; }
          100% { transform: translateY(-200px) translateX(0); opacity: 0; }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </section>
  );
}