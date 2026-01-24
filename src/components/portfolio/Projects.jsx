"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { dummyData } from "@/data/portfolioData";
import Head from "next/head";
import Script from "next/script";

const Projects = () => {
  const data = dummyData.projects;

  // SEO Data
  const seoTitle = "Portfolio Projects - PranavDev | Full Stack Developer & AI Engineer";
  const seoDescription = "Explore my portfolio of web development and AI projects. See real-world applications built with React, Next.js, Python, and modern technologies.";
  const pageUrl = "https://www.pranavdev.online/portfolio#projects";
  
  // Structured Data for Portfolio Projects
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects Collection",
    "description": "Collection of web development and AI projects by Pranav Dwivedi",
    "url": pageUrl,
    "numberOfItems": data.items.length,
    "itemListElement": data.items.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.name,
        "description": project.description,
        "keywords": project.tech.join(", "),
        "url": project.link,
        "programmingLanguage": project.tech,
        "creator": {
          "@type": "Person",
          "name": "Pranav Dwivedi"
        }
      }
    }))
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content="Portfolio Projects, Web Development Projects, React Projects, Next.js Projects, AI Projects, Full Stack Projects, JavaScript Projects, Python Projects" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* Structured Data */}
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* SEO Content (Hidden from users, visible to search engines) */}
      <div className="sr-only" aria-hidden="true">
        <h1>Portfolio Projects - Pranav Dwivedi</h1>
        <h2>Full Stack Developer & AI Engineer Projects</h2>
        <p>Collection of professional web development projects showcasing expertise in React, Next.js, Python, AI/ML, and modern web technologies. Each project demonstrates real-world problem-solving and technical implementation.</p>
        
        <h3>Technology Stack Expertise</h3>
        <ul>
          <li>Frontend: React.js, Next.js, TypeScript, Tailwind CSS</li>
          <li>Backend: Node.js, Python, Express.js, FastAPI</li>
          <li>Database: MongoDB, PostgreSQL, Firebase</li>
          <li>AI/ML: TensorFlow, PyTorch, OpenAI APIs</li>
          <li>DevOps: Docker, AWS, Vercel, GitHub Actions</li>
        </ul>

        <h3>Project Categories</h3>
        <ul>
          <li>Web Applications</li>
          <li>AI & Machine Learning Solutions</li>
          <li>E-commerce Platforms</li>
          <li>Business Automation Tools</li>
          <li>API Development & Integration</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* Enhanced Header with SEO Optimization */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            A showcase of professional web development projects built with modern technologies and best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-cyan-500/50 transition-all group"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              {/* Project Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">
                  Project #{String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-500">
                  {project.tech.length} technologies
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3" itemProp="name">
                {project.name}
              </h3>
              
              <p className="text-gray-400 mb-6" itemProp="description">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6" itemProp="keywords">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800/50 text-cyan-300 rounded-full text-sm hover:bg-cyan-500/20 transition-colors"
                    itemProp="programmingLanguage"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Link */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 group/link"
                itemProp="url"
              >
                <span>View Live Project</span>
                <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* SEO Content Section (Visible but subtle) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-gray-900/20 to-gray-800/10 rounded-2xl border border-gray-700/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                Development Approach
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Performance optimization & SEO best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Clean, maintainable code architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>User-centered design principles</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                Technical Highlights
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Modern JavaScript frameworks & libraries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>API development & third-party integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Database design & optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Cloud deployment & DevOps practices</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                Project Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">{data.items.length}+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="p-4 bg-gray-800/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="p-4 bg-gray-800/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div>
                <div className="p-4 bg-gray-800/20 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">All</div>
                  <div className="text-sm text-gray-400">Mobile Responsive</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 pt-8 border-t border-gray-700/30 text-center">
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on a project or have a custom development need?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Start a Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;