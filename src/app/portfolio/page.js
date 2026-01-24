"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { sections } from "@/data/portfolioData";
import Sidebar from "@/components/layout/Sidebar";
import MouseLight from "@/components/shared/MouseLight";
import BackToTop from "@/components/shared/BackToTop";
import Introduction from "@/components/portfolio/Introduction";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Script from "next/script";

export default function Portfolio() {
  const [active, setActive] = useState("intro");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      section.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      setActive(sectionId);
    }
  };

  // SEO Metadata
  const pageTitle = "PranavDev Portfolio | Full Stack Developer & AI Engineer";
  const pageDescription = "Expert Full Stack Developer, AI Engineer, and Prompt Engineering Specialist with 5+ years experience in web development, machine learning, and business automation.";
  const pageUrl = "https://www.pranavdev.online/portfolio";
  const keywords = "Full Stack Developer, AI Engineer, Prompt Engineering, Web Development, Machine Learning, React, Next.js, Python, Business Automation";
  const author = "PranavDev";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.pranavdev.online/images/portfolio-og-image.jpg" />
        <meta property="og:site_name" content="PranavDev Portfolio" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.pranavdev.online/images/portfolio-twitter-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "PranavDev",
            "url": pageUrl,
            "image": "https://www.pranavdev.online/images/profile-image.jpg",
            "jobTitle": "Full Stack Developer & AI Engineer",
            "description": pageDescription,
            "knowsAbout": [
              "Full Stack Development",
              "Artificial Intelligence",
              "Prompt Engineering",
              "Web Development",
              "Machine Learning",
              "React.js",
              "Next.js",
              "Python Programming"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Software Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Remote"
              }
            },
            "sameAs": [
              "https://www.linkedin.com/in/pranavdev",
              "https://github.com/pranavdev",
              "https://twitter.com/pranavdev"
            ]
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.pranavdev.online"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Portfolio",
                "item": pageUrl
              }
            ]
          })}
        </script>
      </Head>

      {/* Structured Data using Script component */}
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "PranavDev",
          "url": pageUrl,
          "image": "https://www.pranavdev.online/images/profile-image.jpg",
          "jobTitle": "Full Stack Developer & AI Engineer",
          "description": pageDescription,
          "knowsAbout": [
            "Full Stack Development",
            "Artificial Intelligence",
            "Prompt Engineering",
            "Web Development",
            "Machine Learning",
            "React.js",
            "Next.js",
            "Python Programming"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Software Developer"
          }
        })}
      </Script>

      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-gray-300">
        <MouseLight />
        
        {/* SEO Hidden Content */}
        <div className="sr-only" aria-hidden="true">
          <h1>PranavDev - Full Stack Developer & AI Engineer Portfolio</h1>
          <p>Specializing in React, Next.js, Python, AI Development, Machine Learning, and Business Automation solutions.</p>
          <ul>
            <li>Full Stack Web Development</li>
            <li>Artificial Intelligence & Machine Learning</li>
            <li>Prompt Engineering & AI Tools</li>
            <li>Business Process Automation</li>
            <li>Web Application Development</li>
            <li>API Development & Integration</li>
          </ul>
        </div>
        
        {/* Sidebar for Desktop - FIXED POSITION */}
        <div className="hidden lg:block">
          <Sidebar 
            active={active} 
            scrollToSection={scrollToSection}
          />
        </div>

        {/* Main Content */}
        <main className="lg:ml-[320px]">
          {/* Introduction Section - NO GAP */}
          <section
            id="intro"
            ref={(el) => (sectionRefs.current["intro"] = el)}
            className="w-full min-h-screen flex items-center"
            itemScope
            itemType="https://schema.org/Person"
          >
            <div className="w-full">
              <Introduction />
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={(el) => (sectionRefs.current["skills"] = el)}
            className="min-h-screen flex items-center py-12"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            <meta itemProp="name" content="Technical Skills" />
            <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
              <Skills />
            </div>
          </section>

          {/* Education Section */}
          <section
            id="study"
            ref={(el) => (sectionRefs.current["study"] = el)}
            className="min-h-screen flex items-center py-12"
            itemScope
            itemType="https://schema.org/EducationalOccupationalCredential"
          >
            <meta itemProp="name" content="Education & Certifications" />
            <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
              <Education />
            </div>
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={(el) => (sectionRefs.current["experience"] = el)}
            className="min-h-screen flex items-center py-12"
            itemScope
            itemType="https://schema.org/Employment"
          >
            <meta itemProp="name" content="Professional Experience" />
            <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
              <Experience />
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={(el) => (sectionRefs.current["projects"] = el)}
            className="min-h-screen flex items-center py-12"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <meta itemProp="name" content="Portfolio Projects" />
            <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
              <Projects />
            </div>
          </section>

          {/* SEO Content Section - Visible but subtle */}
          <section className="py-12 px-4 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-transparent to-gray-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-200 mb-6">Full Stack Development & AI Engineering Services</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Technical Expertise</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Full Stack Web Development with React & Next.js
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Artificial Intelligence & Machine Learning Solutions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Prompt Engineering & AI Model Optimization
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Business Process Automation & Integration
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Development Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Custom Web Application Development
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        AI-Powered Business Solutions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        API Development & Integration
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Performance Optimization & Scalability
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-800/30 rounded-xl border border-gray-700/30">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Choose PranavDev?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-800/20 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-300 mb-2">5+ Years</div>
                      <div className="text-gray-400 text-sm">Experience in Development</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/20 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-300 mb-2">50+ Projects</div>
                      <div className="text-gray-400 text-sm">Successfully Delivered</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/20 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-300 mb-2">AI-First</div>
                      <div className="text-gray-400 text-sm">Modern Development Approach</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA for SEO */}
          <div className="py-12 px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Build Your Next Project?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                As an experienced Full Stack Developer and AI Engineer, I specialize in creating 
                cutting-edge web applications and AI-powered solutions that drive business growth 
                and digital transformation.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                aria-label="Contact PranavDev for development services"
              >
                Start a Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </main>

        <BackToTop />
      </div>
    </>
  );
}