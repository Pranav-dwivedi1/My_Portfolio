"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Digital Marketing Director",
    text: "Strategic visionary crafting data-driven campaigns that amplify brand presence across digital platforms.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson",
    email: "sarah@company.com"
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "SEO Specialist",
    text: "Search optimization expert driving organic growth through technical excellence and content strategy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/michaelchen",
    github: "https://github.com/michaelchen",
    email: "michael@company.com"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    designation: "Content Marketing Manager",
    text: "Creative storyteller developing compelling narratives that engage audiences and build lasting connections.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/emmarodriguez",
    github: "https://github.com/emmarodriguez",
    email: "emma@company.com"
  },
  {
    id: 4,
    name: "David Kim",
    designation: "Social Media Strategist",
    text: "Community builder fostering authentic brand relationships through innovative social media campaigns.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/davidkim",
    github: "https://github.com/davidkim",
    email: "david@company.com"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    designation: "PPC Campaign Manager",
    text: "Performance marketing specialist maximizing ROI through precision-targeted advertising and optimization.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/lisathompson",
    github: "https://github.com/lisathompson",
    email: "lisa@company.com"
  },
  {
    id: 6,
    name: "Alex Martinez",
    designation: "Analytics Specialist",
    text: "Data detective uncovering actionable insights to drive marketing performance and strategic decisions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/alexmartinez",
    github: "https://github.com/alexmartinez",
    email: "alex@company.com"
  },
  {
    id: 7,
    name: "Rachel Green",
    designation: "Email Marketing Specialist",
    text: "Automation expert creating personalized email journeys that nurture leads into loyal customers.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/rachelgreen",
    github: "https://github.com/rachelgreen",
    email: "rachel@company.com"
  },
  {
    id: 8,
    name: "James Wilson",
    designation: "Creative Designer",
    text: "Visual innovator transforming brand concepts into stunning designs that capture attention instantly.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/jameswilson",
    github: "https://github.com/jameswilson",
    email: "james@company.com"
  },
  {
    id: 9,
    name: "Sophie Davis",
    designation: "Conversion Rate Optimizer",
    text: "User experience specialist turning website visitors into customers through strategic optimization techniques.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sophiedavis",
    github: "https://github.com/sophiedavis",
    email: "sophie@company.com"
  },
  {
    id: 10,
    name: "Ryan Cooper",
    designation: "Brand Marketing Manager",
    text: "Brand guardian developing cohesive marketing strategies that strengthen identity and market position.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/ryancooper",
    github: "https://github.com/ryancooper",
    email: "ryan@company.com"
  }
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
    <section className="bg-gradient-to-br from-[#4f1707] to-[#2B0C02] px-4 overflow-hidden flex flex-col justify-center min-h-[700px] md:min-h-[800px] lg:min-h-[850px] py-8 md:py-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Team</span>
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto leading-relaxed">
          Passionate digital marketing experts driving innovation and delivering exceptional results for our clients.
        </p>
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
                    ? 'z-30 scale-100 opacity-100' 
                    : position === -1 || position === 1
                    ? 'z-20 scale-90 opacity-50'
                    : 'z-10 scale-75 opacity-30'
                }`}
                style={{
                  transform: `
                    translateX(${position * 240}px) 
                    translateZ(${-Math.abs(position) * 100}px)
                    rotateY(${position * -30}deg)
                    scale(${isActive ? 1 : 0.9 - Math.abs(position) * 0.1})
                  `
                }}
                onClick={() => !isActive && goToSlide(index)}
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-orange-900/40 to-red-900/30 backdrop-blur-sm rounded-2xl p-10 border border-orange-500/30 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 h-full flex flex-col justify-center">
                  {/* Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-orange-400/50 shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-orange-300 font-medium text-sm">{member.designation}</p>
                    </div>
                    
                    <p className="text-orange-100 text-sm leading-relaxed px-2">
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