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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] text-gray-300">
      <MouseLight />
      
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
        >
          <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
            <Skills />
          </div>
        </section>

        {/* Education Section */}
        <section
          id="study"
          ref={(el) => (sectionRefs.current["study"] = el)}
          className="min-h-screen flex items-center py-12"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
            <Education />
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={(el) => (sectionRefs.current["experience"] = el)}
          className="min-h-screen flex items-center py-12"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
            <Experience />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={(el) => (sectionRefs.current["projects"] = el)}
          className="min-h-screen flex items-center py-12"
        >
          <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16">
            <Projects />
          </div>
        </section>
      </main>

      <BackToTop />
    </div>
  );
}