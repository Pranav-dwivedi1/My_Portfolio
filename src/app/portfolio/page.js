"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@/data/portfolioData";
import Sidebar from "@/components/layout/Sidebar";
import MouseLight from "@/components/shared/MouseLight";
import BackToTop from "@/components/shared/BackToTop";
import Introduction from "@/components/portfolio/Introduction";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";

export default function Portfolio() {
  const [active, setActive] = useState("intro");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      { threshold: 0.3, rootMargin: "-100px 0px -100px 0px" }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const offset = 80;
      const sectionTop = section.offsetTop - offset;
      
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
      
      setActive(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-gray-300 relative">
      <MouseLight />
      
      {/* Sidebar for Desktop */}
      <div className="hidden lg:block">
        <Sidebar 
          active={active} 
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Mobile Header */}
      

      {/* Main Content */}
      <main className="lg:ml-[320px] min-h-screen pt-16 lg:pt-0">
        <div className="px-4 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-12 space-y-16 md:space-y-20 lg:space-y-24">
          {/* Introduction Section */}
          <section
            id="intro"
            ref={(el) => (sectionRefs.current["intro"] = el)}
            className="min-h-[60vh] lg:min-h-[70vh] scroll-mt-20 lg:scroll-mt-0"
          >
            <Introduction />
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            ref={(el) => (sectionRefs.current["skills"] = el)}
            className="min-h-[60vh] lg:min-h-[70vh] scroll-mt-20 lg:scroll-mt-0"
          >
            <Skills />
          </section>

          {/* Education Section */}
          <section
            id="study"
            ref={(el) => (sectionRefs.current["study"] = el)}
            className="min-h-[60vh] lg:min-h-[70vh] scroll-mt-20 lg:scroll-mt-0"
          >
            <Education />
          </section>

          {/* Experience Section */}
          <section
            id="experience"
            ref={(el) => (sectionRefs.current["experience"] = el)}
            className="min-h-[60vh] lg:min-h-[70vh] scroll-mt-20 lg:scroll-mt-0"
          >
            <Experience />
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={(el) => (sectionRefs.current["projects"] = el)}
            className="min-h-[60vh] lg:min-h-[70vh] scroll-mt-20 lg:scroll-mt-0"
          >
            <Projects />
          </section>

         
        </div>

        {/* Mobile Footer */}
       
      </main>

      <BackToTop />
    </div>
  );
}