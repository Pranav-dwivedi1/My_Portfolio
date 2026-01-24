"use client";

import { motion } from "framer-motion";
import { dummyData } from "@/data/portfolioData";

const Education = () => {
  const data = dummyData.study;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
      className="w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* SEO Heading */}
        <h2
          id="education-heading"
          itemProp="name"
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          {data.title}
        </h2>

        <div className="space-y-6">
          {data.items.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/EducationalOccupationalCredential"
              className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                
                {/* Degree & Institution */}
                <div className="md:w-3/4">
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    itemProp="credentialCategory"
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="text-cyan-400 mt-2"
                    itemProp="educationalInstitution"
                  >
                    {item.institution}
                  </p>

                  <p
                    className="text-gray-400 mt-3"
                    itemProp="description"
                  >
                    {item.details}
                  </p>
                </div>

                {/* Year */}
                <time
                  className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm md:text-base"
                  itemProp="dateAwarded"
                  dateTime={item.year}
                >
                  {item.year}
                </time>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Invisible SEO reinforcement */}
        <p className="sr-only">
          Education details of Pranav Dwivedi including academic background,
          certifications, institutions, and years of completion.
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
