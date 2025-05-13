'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

const projects = [
  {
    id: 1,
    image: '/projects/project1.webp',
    name: 'Portfolio Website',
    date: 'March 2024',
    subheading: 'Personal branding site',
    description: 'A sleek portfolio built using Next.js, TailwindCSS, and Framer Motion. Fully responsive and optimized for SEO.',
    liveLink: 'https://your-portfolio.com',
    github: 'https://github.com/your-repo',
    linkedin: 'https://linkedin.com/in/yourprofile'
  },
  // Add more as needed
];

export default function MobileView() {
  return (
    <section className="px-4 py-10 bg-[#0d0d0d] text-white">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.date}</p>
              <p className="italic text-md">{project.subheading}</p>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-4 flex gap-2 justify-center flex-wrap">
                <a href={project.liveLink} className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700" target="_blank">Live</a>
                <a href={project.github} className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-800" target="_blank">GitHub</a>
                <a href={project.linkedin} className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600" target="_blank">LinkedIn</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
