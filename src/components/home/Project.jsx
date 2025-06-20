'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import project1 from '../../assets/home/project_img1.webp';
import project2 from '../../assets/home/project_img2.webp';
import project3 from '../../assets/home/project_img3.webp';

const projects = [
  {
    id: 1,
    image: project1,
    name: 'Portfolio Website',
    date: 'March 2024',
    subheading: 'Personal branding site',
    description: 'A sleek portfolio built using Next.js, TailwindCSS, and Framer Motion.',
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
    image: project2,
    name: 'Task Manager',
    date: 'December 2023',
    subheading: 'Productivity tool',
    description: 'Kanban-style board for task management with drag-and-drop using React Beautiful DnD.',
    liveLink: 'https://tasktool.com',
    github: 'https://github.com/task-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  {
    id: 5,
    image: project3,
    name: 'Task Manager',
    date: 'December 2023',
    subheading: 'Productivity tool',
    description: 'Kanban-style board for task management with drag-and-drop using React Beautiful DnD.',
    liveLink: 'https://tasktool.com',
    github: 'https://github.com/task-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  {
    id: 6,
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

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-bl from-[#67331a] via-[#301f17] to-[#67331a] rounded-xl bg-[#3c3938] md:bg-[#160A05] bg-dark-vignette  shadow-md p-5 h-full flex flex-col justify-between overflow-hidden"
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
  );
};

export default function Project() {
  return (
    <section className="relative py-16 text-white px-4 md:px-20 lg:px-28 bg-[#3c3938] md:bg-[#160A05] bg-dark-vignette">
      <div className="absolute w-[408px] h-[402px] top-[0px] right-[-200px] md:bg-[#993b1ce8] blur-[300px] mix-blend-screen rounded-full pointer-events-none z-0 overflow-hidden" />
      <div className="absolute w-[608px] h-[502px] bottom-[-100px] left-[-150px] md:bg-[#692711ac] blur-[300px] mix-blend-screen rounded-full pointer-events-none z-0 overflow-hidden"  />

      {/* Heading */}
      <div className="flex items-center justify-center gap-4 my-6">
        <div className="w-16 h-[2.2px] bg-[#D65A31]"></div>
        <p className="text-[#D65A31] text-[22px] md:text-[30px] font-semibold">
          My Projects
        </p>
        <div className="w-16 h-[2.2px] bg-[#D65A31]"></div>
      </div>

      {/* Mobile View - Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View - Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}