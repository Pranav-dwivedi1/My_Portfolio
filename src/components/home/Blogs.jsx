'use client';
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogImg from '../../assets/home/blog.png';
import 'swiper/css';
import 'swiper/css/pagination';

const blogs = [
  {
    id: 1,
    title: 'How I Built My Portfolio With Next.js & Framer Motion',
    date: 'April 28, 2025',
    description:
      'A deep dive into my portfolio stack, animation tricks, routing structure, and performance optimization tips.',
    image: BlogImg,
    link: '/blogs/portfolio-nextjs',
  },
  {
    id: 2,
    title: 'Top 5 Mistakes Beginners Make in React Projects',
    date: 'April 12, 2025',
    description:
      'Avoid these common pitfalls when starting out with React and learn better state and component practices.',
    image: BlogImg,
    link: '/blogs/react-mistakes',
  },
  {
    id: 3,
    title: 'Deploying Full-Stack Apps on Vercel + PlanetScale',
    date: 'March 25, 2025',
    description:
      'Here’s how I set up my backend on PlanetScale, front-end on Vercel, and handled authentication & schema.',
    image: BlogImg,
    link: '/blogs/fullstack-deployment',
  },
  {
    id: 4,
    title: 'How to Become a Prompt Engineer in AI (2025 Guide)',
    date: 'June 10, 2025',
    description:
      'A complete guide to becoming a Prompt Engineer in AI, covering essential skills, tools, learning roadmap, and career opportunities.',
    image: BlogImg,
    link: '/blogs/prompt-engineering-guide',
  },
];

export default function Blogs() {
  return (
    <section className="px-6 md:px-12 py-16 text-white">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">Tech Insights & Articles</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Insights, tutorials, and real-world experiences from my journey as a full stack web developer.
          Sharing practical knowledge, coding tips, and best practices to help developers and businesses build better digital products.
        </p>
      </motion.div>

      {/* Blog Carousel */}
      <Swiper
        spaceBetween={20}
        grabCursor
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={blog.id}>
            <Link href={blog.link} className="block h-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/20 to-transparent p-6 rounded-2xl shadow-lg hover:shadow-purple-600/20 transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[200px] object-cover"
                />

                <div className="py-6 px-2 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-sm text-gray-400">{blog.date}</p>
                    <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
                    <p className="mt-3 text-gray-300 text-sm">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* View More Blogs Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-14 text-center"
      >
        <Link
          href="/blogs"
          className="inline-block bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] text-white px-6 py-3 rounded-full font-semibold transition"
        >
          View All Blogs →
        </Link>
      </motion.div>

    </section>
  );
}
