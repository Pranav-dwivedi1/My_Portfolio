"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactInfoSection = () => {
  const sectionRef = useRef([]);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Animate each contact item on scroll
    gsap.utils.toArray(itemsRef.current).forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
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

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      info: "contact@yourcompany.com",
      action: "mailto:contact@yourcompany.com",
      accent: "text-orange-400"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      info: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      accent: "text-orange-400"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      info: "123 Business Ave, Suite 456\nTech City, TC 10001",
      action: "https://maps.google.com",
      accent: "text-orange-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative px-4 sm:px-8 md:px-24 lg:px-28 py-16 bg-gradient-to-b from-[#2B0C02]  via-[#160b07] to-[#4f1707] text-white font-gilroy overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-orange-500"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
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
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            We're here to help and answer any questions you might have
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="group relative bg-[#1a0a03] bg-opacity-60 backdrop-blur-sm rounded-xl p-8 border border-[#3a1809] hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Contact method content */}
              <div className="relative z-10 h-full flex flex-col items-center text-center">
                <div className={`mb-6 p-4 rounded-full bg-[#2e1206] ${method.accent} group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-300 mb-6 whitespace-pre-line">
                  {method.info}
                </p>
                
                <a 
                  href={method.action} 
                  className="mt-auto inline-flex items-center px-6 py-2 border border-orange-400 rounded-full text-orange-400 hover:bg-orange-400 hover:text-white transition-colors duration-300"
                >
                  {method.title.includes("Visit") ? "View on Map" : method.title.includes("Call") ? "Call Now" : "Send Email"}
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-12 border-t border-[#3a1809] text-center">
          <h3 className="text-2xl font-bold mb-6">
            Business <span className="text-orange-400">Hours</span>
          </h3>
          <div className="max-w-md mx-auto bg-[#1a0a03] bg-opacity-60 backdrop-blur-sm rounded-lg p-6 border border-[#3a1809]">
            <ul className="space-y-3">
              {[
                "Monday - Friday: 9:00 AM - 6:00 PM",
                "Saturday: 10:00 AM - 4:00 PM",
                "Sunday: Closed"
              ].map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b border-[#3a1809] last:border-0">
                  <span className="text-gray-300">{item.split(':')[0]}:</span>
                  <span className="font-medium">{item.split(':').slice(1).join(':')}</span>
                </li>
              ))}
            </ul>
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
};

export default ContactInfoSection;