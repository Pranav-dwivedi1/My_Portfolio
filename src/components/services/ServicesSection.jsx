"use client"
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ButtonOrange from '../comman/ui/ButtonOrange';
import Head from 'next/head';
import Script from 'next/script';
import { FiCheck, FiExternalLink, FiStar } from 'react-icons/fi';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Development",
    description: "Custom websites built for performance, scalability, and user experience.",
    icon: "💻",
    keywords: ["React", "Next.js", "Node.js", "TypeScript"],
    benefits: ["SEO Optimized", "Mobile Responsive", "Fast Loading", "Secure"]
  },
  {
    title: "Mobile App Development",
    description: "iOS and Android apps that deliver seamless user experiences.",
    icon: "📱",
    keywords: ["React Native", "Flutter", "iOS", "Android"],
    benefits: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"]
  },
  {
    title: "Application Testing",
    description: "Comprehensive QA testing to ensure bug-free performance.",
    icon: "🧪",
    keywords: ["Unit Testing", "E2E Testing", "Performance Testing", "Security Testing"],
    benefits: ["Bug Detection", "Performance Optimization", "Security Audits", "Quality Assurance"]
  },
  {
    title: "Website SEO",
    description: "Optimize your site to rank higher and attract more visitors.",
    icon: "🔍",
    keywords: ["Technical SEO", "On-Page SEO", "Content Strategy", "Backlink Building"],
    benefits: ["Higher Rankings", "More Traffic", "Better CTR", "Increased Revenue"]
  },
  {
    title: "Logo Design",
    description: "Unique brand identities that make lasting impressions.",
    icon: "🎨",
    keywords: ["Brand Identity", "Logo Creation", "Brand Guidelines", "Visual Identity"],
    benefits: ["Memorable Design", "Brand Recognition", "Professional Image", "Versatile Files"]
  },
  {
    title: "Graphics Design",
    description: "Stunning visuals for your brand across all platforms.",
    icon: "🖌️",
    keywords: ["UI Design", "Marketing Materials", "Social Media Graphics", "Print Design"],
    benefits: ["Consistent Branding", "Engaging Visuals", "Professional Quality", "Multiple Formats"]
  },
  {
    title: "Video Editing",
    description: "Professional editing for your marketing and content videos.",
    icon: "🎬",
    keywords: ["Video Production", "Motion Graphics", "Color Grading", "Sound Design"],
    benefits: ["High-Quality Output", "Engaging Content", "Platform Optimization", "Fast Turnaround"]
  },
  {
    title: "Website Domain",
    description: "Find and register the perfect domain for your business.",
    icon: "🌐",
    keywords: ["Domain Registration", "Domain Transfer", "DNS Management", "SSL Certificates"],
    benefits: ["Brand Matching", "Easy Management", "Secure Registration", "Transfer Support"]
  },
  {
    title: "Hosting Solutions",
    description: "Reliable, secure, and scalable hosting services.",
    icon: "🖥️",
    keywords: ["Cloud Hosting", "VPS", "Dedicated Servers", "CDN"],
    benefits: ["99.9% Uptime", "24/7 Support", "Scalable Resources", "Daily Backups"]
  },
  {
    title: "UI/UX Design",
    description: "Intuitive interfaces that delight your users.",
    icon: "✨",
    keywords: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    benefits: ["Improved Conversions", "Better Engagement", "Reduced Bounce Rate", "Happy Users"]
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store setup and optimization.",
    icon: "🛒",
    keywords: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"],
    benefits: ["Secure Payments", "Mobile Shopping", "Inventory Sync", "Sales Analytics"]
  },
  {
    title: "Content Writing",
    description: "Engaging copy that converts visitors to customers.",
    icon: "✍️",
    keywords: ["SEO Content", "Blog Writing", "Product Descriptions", "Social Media Copy"],
    benefits: ["SEO Optimized", "Engaging Tone", "Conversion Focused", "Regular Updates"]
  },
  {
    title: "Social Media Management",
    description: "Grow your audience with strategic social campaigns.",
    icon: "📢",
    keywords: ["Content Strategy", "Community Management", "Analytics", "Ad Campaigns"],
    benefits: ["Increased Followers", "Higher Engagement", "Brand Awareness", "Lead Generation"]
  },
  {
    title: "Brand Strategy",
    description: "Develop a cohesive brand identity and messaging.",
    icon: "🧠",
    keywords: ["Brand Positioning", "Market Research", "Competitor Analysis", "Brand Voice"],
    benefits: ["Clear Messaging", "Target Audience", "Competitive Edge", "Brand Loyalty"]
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud solutions for your business needs.",
    icon: "☁️",
    keywords: ["AWS", "Google Cloud", "Azure", "Cloud Migration"],
    benefits: ["Cost Effective", "Scalable Infrastructure", "High Availability", "Disaster Recovery"]
  },
  {
    title: "Cyber Security",
    description: "Protect your digital assets with robust security.",
    icon: "🛡️",
    keywords: ["Security Audits", "Penetration Testing", "Vulnerability Assessment", "Data Protection"],
    benefits: ["Data Security", "Compliance", "Threat Detection", "Risk Management"]
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

  // SEO Data
  const seoTitle = "Comprehensive Digital Services | Web Development, Design & Marketing Solutions";
  const seoDescription = "Explore our full range of professional digital services including web development, mobile apps, SEO, graphic design, and cybersecurity. End-to-end solutions for your business growth.";
  const pageUrl = "https://www.pranavdev.online/services#all-services";

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content="Web Development Services, Mobile App Development, SEO Services, Graphic Design, Video Editing, UI/UX Design, E-commerce Solutions, Cybersecurity Services" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Head>

      {/* Structured Data for Services */}
      <Script id="service-offerings-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          "name": "Digital Services Catalog",
          "description": "Comprehensive digital services for web development, design, and marketing",
          "url": pageUrl,
          "numberOfItems": services.length,
          "itemListElement": services.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "keywords": service.keywords?.join(", "),
              "provider": {
                "@type": "Person",
                "name": "Pranav Dwivedi",
                "jobTitle": "Full Stack Developer & Digital Solutions Expert"
              }
            }
          }))
        })}
      </Script>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <h1>Comprehensive Digital Services Portfolio</h1>
        <h2>End-to-End Solutions for Your Business Growth</h2>
        <p>Professional digital services covering web development, mobile applications, design, marketing, and security solutions. Expert implementation with modern technologies and best practices.</p>
        
        <h3>Service Categories</h3>
        <ul>
          <li>Web Development & Programming</li>
          <li>Mobile Application Development</li>
          <li>Digital Design & Branding</li>
          <li>Search Engine Optimization</li>
          <li>Content Creation & Marketing</li>
          <li>Cloud & Security Solutions</li>
        </ul>

        <h3>Technology Expertise</h3>
        <ul>
          <li>Frontend: React.js, Next.js, Vue.js</li>
          <li>Backend: Node.js, Python, PHP</li>
          <li>Mobile: React Native, Flutter</li>
          <li>Design: Figma, Adobe Creative Suite</li>
          <li>Cloud: AWS, Google Cloud, Azure</li>
          <li>SEO: Technical SEO, Content Strategy</li>
        </ul>
      </div>

      <section
        ref={sectionRef}
        className="relative py-20 text-white font-gilroy overflow-hidden bg-gradient-to-b from-gray-900 to-black"
        id="services"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
              style={{
                width: `${Math.random() * 8 + 3}px`,
                height: `${Math.random() * 8 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header with SEO */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
              <FiStar className="w-4 h-4" />
              <span>Professional Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Complete <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Digital Solutions</span> Suite
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Comprehensive services designed to cover every aspect of your digital presence and business growth
            </p>
            
            {/* Service Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { value: "16+", label: "Service Categories" },
                { value: "50+", label: "Technologies" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div
            ref={servicesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Service content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <span className="text-xs px-2 py-1 bg-gray-700/50 rounded text-gray-400">
                      Service #{index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300" itemProp="name">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-4" itemProp="description">
                    {service.description}
                  </p>

                  {/* Keywords/Benefits */}
                  <div className="mt-4 pt-4 border-t border-gray-700/30">
                    <div className="flex flex-wrap gap-2">
                      {service.benefits?.slice(0, 2).map((benefit, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gray-700/30 text-gray-300 text-xs rounded"
                        >
                          <FiCheck className="w-3 h-3 text-green-400" />
                          {benefit}
                        </span>
                      ))}
                      {service.benefits?.length > 2 && (
                        <span className="text-xs text-gray-500">
                          +{service.benefits.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         {/* Service Categories Summary */}
{/* Service Categories Summary */}
<div className="mt-16 p-8 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-2xl border border-gray-700/30">
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:place-items-center">
    
    {/* Column 1 */}
    <div className="w-full max-w-sm">
      <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
        Development Services
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Custom Web Applications</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Mobile App Development</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>E-commerce Solutions</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>API Development</span>
        </li>
      </ul>
    </div>

    {/* Column 2 */}
    <div className="w-full max-w-sm">
      <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        Design & Marketing
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>UI/UX Design</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Brand Strategy</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>SEO Optimization</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Content Creation</span>
        </li>
      </ul>
    </div>

    {/* Column 3 */}
    <div className="w-full max-w-sm">
      <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        Infrastructure & Security
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Cloud Services</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Hosting Solutions</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Cybersecurity</span>
        </li>
        <li className="flex items-center gap-2">
          <FiCheck className="text-green-400" />
          <span>Technical Support</span>
        </li>
      </ul>
    </div>

  </div>
</div>


         
        </div>

        {/* Custom styles for animations */}
        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 1; }
            50% { transform: translateY(-80px) translateX(15px) rotate(180deg); opacity: 0.8; }
            100% { transform: translateY(-160px) translateX(0) rotate(360deg); opacity: 0; }
          }
        `}</style>
      </section>
    </>
  );
}