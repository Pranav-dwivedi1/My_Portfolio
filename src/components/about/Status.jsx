"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

export default function Status() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detect once when in view

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 12, suffix: '+', label: 'Team Members' },
    { number: 5, suffix: '+', label: 'Years Experience' }
  ];

  return (
    <section
      ref={ref}
      className="relative bg-[#030d23de] border-t border-b border-white/20 py-8"
      aria-labelledby="status-heading"
    >
      {/* ✅ Invisible semantic heading for SEO */}
      <h2 id="status-heading" className="sr-only">
        Company performance statistics and experience highlights
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="p-4"
            >
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                {isInView && (
                  <CountUp
                    end={stat.number}
                    duration={3.2}
                    suffix={stat.suffix}
                  />
                )}
              </p>
              <p className="text-sm md:text-base text-blue-100 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔍 SEO reinforcement (no UI impact) */}
      <p className="sr-only">
        These statistics highlight project experience, client satisfaction,
        team size, and years of professional work. This section reinforces
        credibility, expertise, and trust for visitors and search engines.
      </p>
    </section>
  );
}
