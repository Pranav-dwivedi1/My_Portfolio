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
    description:
      'A sleek portfolio built using Next.js, Tailwind CSS, and Framer Motion.',
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
    description:
      'Built with React, Redux, and Stripe. Full-featured shop with cart, checkout, and admin dashboard.',
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
    description:
      'Next.js and MDX-based blog system with categories, author profiles, and comment support.',
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
    description:
      'Kanban-style board for task management with drag-and-drop using React.',
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
    description:
      'Kanban-style board for task management with drag-and-drop using React.',
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
    description:
      'Kanban-style board for task management with drag-and-drop using React.',
    liveLink: 'https://tasktool.com',
    github: 'https://github.com/task-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className={`relative rounded-[25px] p-[2px] transition-all duration-300 hover:scale-[1.01] ${
        project.id === 1
          ? 'bg-gradient-to-b from-[#235ba5] to-[#6b8293]'
          : 'bg-gradient-to-br from-blue-500/20'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`flex flex-col h-full rounded-[24px] p-6 md:p-8 ${
          index === 0
            ? 'bg-[#0c2445] backdrop-blur-[22px]'
            : 'bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm'
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.name} project by Pranav Dwivedi`}
          width={500}
          height={300}
          className="w-full h-[200px] object-cover rounded-md mb-4"
        />

        {/* SEO-friendly project title */}
        <h3 className="text-xl font-bold">{project.name}</h3>

        <p className="text-sm text-gray-400">{project.date}</p>
        <p className="italic">{project.subheading}</p>
        <p className="mt-3 text-gray-300">{project.description}</p>

        <div className="mt-4 flex gap-3 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] px-4 py-2 rounded"
          >
            Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] px-4 py-2 rounded"
          >
            GitHub
          </a>
          <a
            href={project.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] px-4 py-2 rounded"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </article>
  );
};

export default function Project() {
  return (
    <section
      className="relative min-h-fit pt-0 md:pt-0 text-white px-4 md:px-20 lg:px-28 bg-dark-vignette"
      aria-labelledby="projects-heading"
    >
      {/* Background effects (unchanged) */}
      <div className="absolute w-[408px] h-[402px] top-[0px] right-[-200px] blur-[300px] mix-blend-screen rounded-full pointer-events-none z-0 overflow-hidden" />
      <div className="absolute w-[608px] h-[502px] bottom-[-100px] left-[-150px] blur-[300px] mix-blend-screen rounded-full pointer-events-none z-0 overflow-hidden" />

      {/* Heading */}
     <div className="text-center gap-4">
  <h2
    id="projects-heading"
    className="text-3xl md:text-4xl font-bold mb-4"
  >
    Featured Projects
  </h2>

  <p className="text-gray-400 max-w-2xl pb-6 mx-auto">
    A selection of real-world projects focused on performance, clean design,
    and solving real business problems using modern web technologies such as
    React, Next.js, and Node.js.
  </p>
</div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          spaceBetween={20}
          slidesPerView={1}
          grabCursor
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-2"></div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* 🔍 Hidden SEO reinforcement */}
      <p className="sr-only">
        This portfolio section showcases projects by Pranav Dwivedi, a Full Stack
        Developer experienced in React, Next.js, Node.js, JavaScript, and modern
        web application development.
      </p>
    </section>
  );
}
