'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import project1 from '../../assets/home/project_img1.webp';
import project2 from '../../assets/home/project_img2.webp';
import project3 from '../../assets/home/project_img3.webp';

import 'swiper/css';

const projects = [
  {
    id: 1,
    image: project1,
    name: 'Portfolio Website',
    date: 'March 2024',
    subheading: 'Personal branding site',
    description: 'A sleek portfolio built using Next.js, TailwindCSS, and Framer Motion. Fully responsive and optimized for SEO.',
    liveLink: 'https://your-portfolio.com',
    github: 'https://github.com/your-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  {
    id: 2,
    image: project2,
    name: 'E-Commerce App',
    date: 'February 2024',
    subheading: 'Online store solution',
    description: 'Built with React, Redux, and Stripe. Full-featured shop with cart, checkout, and admin dashboard.',
    liveLink: 'https://ecommerce-site.com',
    github: 'https://github.com/ecommerce-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  {
    id: 3,
    image: project3,
    name: 'Blog Platform',
    date: 'January 2024',
    subheading: 'Tech articles CMS',
    description: 'Next.js and MDX-based blog system with categories, author profiles, and comment support.',
    liveLink: 'https://myblog.com',
    github: 'https://github.com/blog-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  {
    id: 4,
    image: project1,
    name: 'Task Manager',
    date: 'December 2023',
    subheading: 'Productivity tool',
    description: 'Kanban-style board for task management with drag-and-drop using React Beautiful DnD.',
    liveLink: 'https://tasktool.com',
    github: 'https://github.com/task-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
];

export default function Project() {
  return (
    <section className="px-6 md:px-12 py-16 bg-[#0d0d0d] text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        My Projects
      </motion.h2>

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1f1f1f] rounded-xl overflow-hidden shadow-md p-5 h-full flex flex-col justify-between"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.date}</p>
              <p className="italic">{project.subheading}</p>
              <p className="mt-3 text-gray-300">{project.description}</p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a
                  href={project.liveLink}
                  className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.linkedin}
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
