"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonOrange from "@/components/comman/ui/ButtonOrange";
import ButtonGray from "@/components/comman/ui/ButtonGray";
import Head from 'next/head';
import Script from 'next/script';
import { FiArrowRight, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const serviceCardsRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    // Animate elements in sequence
    tl.fromTo(
      textRef.current?.querySelector('.badge'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
    .fromTo(
      textRef.current?.querySelector('h1'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.2'
    )
    .fromTo(
      textRef.current?.querySelector('p'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.4'
    )
    .fromTo(
      buttonRef.current?.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
      '-=0.3'
    )
    .fromTo(
      serviceCardsRef.current?.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      '-=0.2'
    );

    // Background animation
    gsap.to(heroRef.current, {
      backgroundPosition: '50% 20%',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Floating elements animation
    gsap.to('.floating-element', {
      y: 30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2
    });

    // Clean up
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // SEO Data
  const pageTitle = "Professional Web Development & AI Services | Elevate Your Digital Presence";
  const pageDescription = "Transform your business with expert web development, AI solutions, and digital transformation services. Custom solutions built with React, Next.js, Python, and modern technologies.";
  const pageUrl = "https://www.pranavdev.online/services";
  const keywords = "Web Development Services, AI Solutions, Digital Transformation, Custom Software Development, React Development, Next.js Development, Business Automation, E-commerce Solutions";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="PranavDev" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pranavdev.online/images/services-hero.jpg" />
        <meta property="og:site_name" content="PranavDev Services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.pranavdev.online/images/services-hero-twitter.jpg" />
        
        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Head>

      {/* Structured Data */}
      <Script id="services-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Development & AI Solutions",
          "description": pageDescription,
          "provider": {
            "@type": "Person",
            "name": "Pranav Dwivedi",
            "jobTitle": "Full Stack Developer & AI Engineer",
            "url": "https://www.pranavdev.online",
            "sameAs": [
              "https://linkedin.com/in/pranavdev",
              "https://github.com/pranavdev",
              "https://twitter.com/pranavdev"
            ]
          },
          "serviceType": [
            "Web Development",
            "Artificial Intelligence",
            "Digital Transformation",
            "Business Automation",
            "E-commerce Development",
            "API Development"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "Worldwide"
          },
          "offers": {
            "@type": "AggregateOffer",
            "offerCount": "6",
            "lowPrice": "499",
            "highPrice": "9999",
            "priceCurrency": "USD"
          }
        })}
      </Script>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <h1>Professional Technology Services by PranavDev</h1>
        <h2>Expert Web Development & AI Solutions for Business Growth</h2>
        <p>Comprehensive digital services including custom web applications, AI implementation, e-commerce solutions, business automation, and API development to accelerate your business growth.</p>
        
        <h3>Our Service Categories</h3>
        <ul>
          <li>Custom Web Application Development</li>
          <li>AI & Machine Learning Solutions</li>
          <li>E-commerce Platform Development</li>
          <li>Business Process Automation</li>
          <li>API Development & Integration</li>
          <li>Digital Transformation Consulting</li>
        </ul>

        <h3>Why Choose Us</h3>
        <ul>
          <li>5+ Years Development Experience</li>
          <li>50+ Successful Projects</li>
          <li>Modern Technology Stack</li>
          <li>100% Client Satisfaction</li>
          <li>Ongoing Support & Maintenance</li>
        </ul>
      </div>

      <section
        ref={heroRef}
        className="relative min-h-screen text-white font-gilroy overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full floating-element"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, rgba(${56 + i * 20}, 189, 248, ${0.05 + i * 0.02}) 0%, transparent 70%)`,
                filter: 'blur(60px)',
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(to right, #4F46E5 1px, transparent 1px), linear-gradient(to bottom, #4F46E5 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            {/* Header Section */}
            <div ref={textRef} className="mb-12">
              <div className="badge inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
                <FiTrendingUp className="w-4 h-4" />
                <span>Premium Development Services</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                  Transform Your Digital Vision
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mt-2">
                  Into Reality
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl leading-relaxed">
                Expert-led technology solutions designed to elevate your business, 
                enhance user experiences, and drive measurable growth through innovative 
                web development and AI implementation.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap gap-4 mb-10">
                {[
                  "Custom Solutions",
                  "Fast Delivery",
                  "24/7 Support",
                  "Scalable Architecture"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg">
                    <FiCheckCircle className="text-green-400" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16">
              <ButtonOrange
                text="View Our Services"
                link="#services"
                className="w-full sm:w-auto px-8 py-4 text-lg group hover:shadow-xl hover:shadow-orange-500/20 transition-all"
                icon={<FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
              />
              <ButtonGray
                text="Schedule Consultation"
                link="/contact"
                className="w-full sm:w-auto px-8 py-4 text-lg hover:shadow-xl hover:shadow-white/10 transition-all"
              />
            </div>

            {/* Service Preview Cards */}
            <div ref={serviceCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Web Development",
                  description: "Custom applications built with React, Next.js & modern frameworks",
                  icon: "💻",
                  gradient: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  title: "AI Solutions",
                  description: "Intelligent automation & machine learning implementations",
                  icon: "🤖",
                  gradient: "from-purple-500/20 to-pink-500/20"
                },
                {
                  title: "Digital Transformation",
                  description: "Comprehensive business modernization strategies",
                  icon: "🚀",
                  gradient: "from-orange-500/20 to-amber-500/20"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient & Scroll Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#services" className="flex flex-col items-center group">
            <span className="text-sm text-gray-400 mb-2 group-hover:text-blue-400 transition-colors">
              Explore Services
            </span>
            <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex justify-center group-hover:border-blue-400 transition-colors">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </div>

        {/* Custom CSS */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .floating-element {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}