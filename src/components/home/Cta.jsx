'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import background from '../../assets/home/ctabg.webp';
import ctaimg1 from '../../assets/home/ctaimg1.webp';
import ctaimg2 from '../../assets/home/ctaimg2.webp';
import ctaimg3 from '../../assets/home/ctaimg3.webp';
import ctaimg4 from '../../assets/home/ctaimg3.webp'; // use correct image here

export default function Cta() {
  const images = [
    { src: ctaimg1, fallback: '/placeholder1.jpg', alt: 'CTA Image 1' },
    { src: ctaimg2, fallback: '/placeholder2.jpg', alt: 'CTA Image 2' },
    { src: ctaimg3, fallback: '/placeholder3.jpg', alt: 'CTA Image 3' },
    { src: ctaimg4, fallback: '/placeholder4.jpg', alt: 'CTA Image 4' }
  ];

  return (
    <section className=" relative py-16 flex items-center justify-center overflow-hidden ">
      {/* Background */}
      

      
      {/* Floating elements */}
      <div className="absolute top-1/7 left-[8%] w-20 h-20 bg-white/10 rounded-full animate-bounce z-10" style={{ animationDelay: '0s' }} />
      <div className="absolute top-[68%] right-[12%] w-10 h-10  bg-white/10 rounded-full animate-bounce z-10" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/9 left-[20%] w-15 h-15 bg-white/10 rounded-full animate-bounce z-10" style={{ animationDelay: '4s' }} />

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 perspective-[1000px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative group transform-gpu transition duration-700 ease-out hover:scale-105 ${
                  index === 0 ? 'hover:-rotate-y-12 hover:-rotate-x-6' :
                  index === 1 ? 'hover:rotate-y-12 hover:-rotate-x-6' :
                  index === 2 ? 'hover:-rotate-y-12 hover:rotate-x-6' :
                  'hover:rotate-y-12 hover:rotate-x-6'
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                  <Image
                    src={img.src || img.fallback}
                    alt={img.alt}
                    width={300}
                    height={200}
                    className="w-full h-32 sm:h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="text-white space-y-6 lg:pl-8">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Design 
                <br />
                <span> and Code Your</span>
                <br />
<motion.span
  animate={{
    textShadow: [
      '0px 0px 0px rgba(255,255,255,0.2)',
      '0px 0px 20px rgba(0,255,255,1)',
      '0px 0px 0px rgba(255,255,255,0.5)'
    ],
    color: ['#ffffff', '#00e5ff', '#ffffff']
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
  className="inline-block"
>
  website
</motion.span>         </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-lg">
              Create something amazing. No code needed <br /> just vision and action.
            </p>
            <div className="pt-4">
           <button className="
  group relative inline-flex items-center justify-center
  px-12 py-4 text-lg font-semibold text-white
  bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a]
  rounded-full transition-all duration-300 ease-out
  hover:scale-105 hover:-translate-y-1
  hover:shadow-xl hover:shadow-orange-100/25
  active:scale-95 active:translate-y-0
">
  <span className="relative z-10">Contact Us</span>
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
</button>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
