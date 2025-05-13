'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Hero_image from '../../assets/home/hero.webp';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between px-6 lg:px-20 bg-[#1a1a1a] text-white min-h-screen">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 text-center lg:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Turning Vision Into <br />
          <span className="px-2 text-white">Reality With Code</span> <br />
          <span className="px-2 text-white">And Design.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-300"
        >
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects and articles, showcasing my expertise in React.js and web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <a
            href="/resume.pdf"
            className="bg-white text-black font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
          <Link href="#contact" className="text-white underline underline-offset-4 hover:text-blue-400 transition duration-300">
            Contact
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center"
      >
        <Image
          src={Hero_image}
          alt="Creative full-stack developer illustration"
          className="w-96 sm:w-96 lg:w-[350px] h-auto object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
