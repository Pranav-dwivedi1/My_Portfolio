"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';


const teamMembers = [
  {
    id: 1,
    name: "Amber Gautam",
    designation: "Java Developer & Microservices",
    text: "Java developer with 2 years of experience in building high-performance backend services.",
    image: "/teams/amber.jpeg",
    linkedin: "linkedin.com/in/amber-gautam-7b0898234",
    github: "https://github.com/ambergautam",
    email: "gautamamber3@gmail.com",
  },
  {
    id: 2,
    name: "Adarsh Gour",
    designation: "QA Engineer (Manual & Automation)",
    text: "QA Engineer with 4 years of experience in manual and automation testing.",
    image: "/teams/adarsh.webp",
    linkedin: "https://www.linkedin.com/in/adarshgourqa",
    github: "https://github.com/adarshgour",
    email: "adarshgour.qa@gmail.com",
  },
  {
    id: 3,
    name: "Ashutosh Vishwakarma",
    designation: "Mobile App Developer (Flutter)",
    text: "Flutter developer with 2 years of experience building cross-platform mobile apps",
    image: "/teams/ashutosh.jpeg",
    linkedin: "https://www.linkedin.com/in/ashutosh-vishwakarma-412333231?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEwruMKiSQ1GNM%2B1P79jNlg%3D%3D",
    github: "https://github.com/ashutosh",
    email: "vishwakarmaashutosh1@gmail.com",
  },
  {
    id: 4,
    name: "Prabhanshu Dwivedi",
    designation: "Java Developer",
    text: "Experienced Java developer delivering reliable backend solutions",
    image: "/teams/prabhanshu.jpeg",
    linkedin: "linkedin.com/in/prabhanshu-dwivedi-704781p",
    github: "https://github.com/prabhanshudwivedi",
    email: "dwivediprabhanshu704781@gmail.com",
  },
  {
    id: 5,
    name: "Pranav Dwivedi",
    designation: "Team Lead & Full Stack Developer",
    text: "Leading development and creating powerful web solutions using the MERN stack.",
    image: "/teams/pranav.jpeg",
    linkedin: "https://linkedin.com/in/pranavdwivedi",
    github: "https://github.com/Pranav-dwivedi1",
    email: "pranav@company.com",
  },
  {
    id: 6,
    name: "Ayush Tiwari",
    designation: "Social Media Manager",
    text: "Social media manager with 2+y experience growing brands and online engagement.",
    image: "/teams/ayush.jpeg",
    linkedin: "https://linkedin.com/in/tiwariayush23",
    github: "https://github.com/tiwariayush23",
    email: "tayush377@gmail.com",
  },
];




export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const totalCards = teamMembers.length;
    
    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (diff > totalCards / 2) {
      normalizedDiff = diff - totalCards;
    } else if (diff < -totalCards / 2) {
      normalizedDiff = diff + totalCards;
    }

    return normalizedDiff;
  };

  // Touch and mouse events for swipe
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className=" px-4 overflow-hidden flex flex-col justify-center min-h-[700px] md:min-h-[800px] lg:min-h-[850px] py-8 md:py-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Team</span>
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto leading-relaxed">
A team of experts delivering powerful website development and digital marketing solutions that drive real business growth.        </p>
      </div>

      {/* 3D Carousel Container with swipe events */}
      <div 
        className="relative flex items-center justify-center perspective-1000 flex-1"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="relative w-full max-w-sm">
          {teamMembers.map((member, index) => {
            const position = getCardPosition(index);
            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 3;

            if (!isVisible) return null;

            return (
              <div
                key={member.id}
                className={`absolute inset-0 transition-all duration-700 ease-out cursor-pointer transform-gpu ${
                  isActive 
                    ? 'z-30 scale-110 opacity-100' 
                    : position === -1 || position === 1
                    ? 'z-20 scale-100 opacity-50'
                    : 'z-10 scale-80 opacity-30'
                }`}
                style={{
                  transform: `
                    translateX(${position * 250}px) 
                    translateZ(${-Math.abs(position) * 100}px)
                    rotateY(${position * -25}deg)
                    scale(${isActive ? 1 : 0.9 - Math.abs(position) * 0.1})
                  `
                }}
                onClick={() => !isActive && goToSlide(index)}
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-2xl p-10 border border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 h-full flex flex-col justify-center">
                  {/* Image */}
                  <div className="relative mb-8">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-orange-400/50 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover scale-110 hover:scale-120 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-20">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-orange-300 font-medium text-sm">{member.designation}</p>
                    </div>
                    
                    <p className="text-orange-100 text-sm leading-relaxed px-2 mt-8">
                      {member.text}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 pt-4">
                      <a 
                        href={member.linkedin}
                        className="p-2 bg-orange-500/20 hover:bg-orange-500/40 rounded-full transition-colors duration-200 group"
                      >
                        <Linkedin className="w-4 h-4 text-orange-300 group-hover:text-white" />
                      </a>
                      <a 
                        href={member.github}
                        className="p-2 bg-orange-500/20 hover:bg-orange-500/40 rounded-full transition-colors duration-200 group"
                      >
                        <Github className="w-4 h-4 text-orange-300 group-hover:text-white" />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 bg-orange-500/20 hover:bg-orange-500/40 rounded-full transition-colors duration-200 group"
                      >
                        <Mail className="w-4 h-4 text-orange-300 group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}