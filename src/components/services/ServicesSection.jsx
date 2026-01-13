"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonOrange from '../comman/ui/ButtonOrange';
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Development",
    description: "Custom websites built for performance, scalability, and user experience.",
    icon: "💻"
  },
  {
    title: "Mobile App Development",
    description: "iOS and Android apps that deliver seamless user experiences.",
    icon: "📱"
  },
  {
    title: "Application Testing",
    description: "Comprehensive QA testing to ensure bug-free performance.",
    icon: "🧪"
  },
  {
    title: "Website SEO",
    description: "Optimize your site to rank higher and attract more visitors.",
    icon: "🔍"
  },
  {
    title: "Logo Design",
    description: "Unique brand identities that make lasting impressions.",
    icon: "🎨"
  },
  {
    title: "Graphics Design",
    description: "Stunning visuals for your brand across all platforms.",
    icon: "🖌️"
  },
  {
    title: "Video Editing",
    description: "Professional editing for your marketing and content videos.",
    icon: "🎬"
  },
  {
    title: "Website Domain",
    description: "Find and register the perfect domain for your business.",
    icon: "🌐"
  },
  {
    title: "Hosting Solutions",
    description: "Reliable, secure, and scalable hosting services.",
    icon: "🖥️"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces that delight your users.",
    icon: "✨"
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store setup and optimization.",
    icon: "🛒"
  },
  {
    title: "Content Writing",
    description: "Engaging copy that converts visitors to customers.",
    icon: "✍️"
  },
  {
    title: "Social Media Management",
    description: "Grow your audience with strategic social campaigns.",
    icon: "📢"
  },
  {
    title: "Brand Strategy",
    description: "Develop a cohesive brand identity and messaging.",
    icon: "🧠"
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions for your business needs.",
    icon: "☁️"
  },
  {
    title: "Cyber Security",
    description: "Protect your digital assets with robust security.",
    icon: "🛡️"
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Animate each service card on scroll
    gsap.utils.toArray(".service-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    // Background animation
    gsap.to(sectionRef.current, {
      backgroundPosition: '50% 30%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20  text-white font-gilroy overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-400">Comprehensive</span> Services
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            We offer end-to-end digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-[#09183fe3] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 border border-[#0f5282] hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 overflow-hidden"
            >

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Service content */}
              <div className="relative z-10">

                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
       <div className="mt-20 text-center">
  <p className="text-lg mb-6">Ready to transform your digital presence?</p>

  <div className="flex justify-center">
    <ButtonOrange
      text="Start Your Project"
      link="/our-work"
      className="w-full md:w-[262.13px]"
    />
  </div>
</div>

        </div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 1; }
          50% { transform: translateY(-80px) translateX(15px); opacity: 0.8; }
          100% { transform: translateY(-160px) translateX(0); opacity: 0; }
        }
      `}</style>
    </section>
  );
}