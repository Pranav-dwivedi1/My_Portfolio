'use client';

import { useRef } from "react";
import Link from "next/link";
import BlogHeader from "../../components/blogsPage/BlogHeader";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import BlogCard from "../../components/blogsPage/BlogCard";
import MouseLight from "@/components/shared/MouseLight";

// Note: Metadata cannot be exported from Client Components
// You'll need to move metadata to layout.js or use generateMetadata in a Server Component

export default function Blogs() {
  const latestBlogsRef = useRef(null);

  const blogData = [
    {
      title:
        "Sensex Zomato: What's Driving Zomato's Performance on the BSE Sensex?",
      desc: "Explore Zomato's impact on the BSE Sensex today and learn how Yantra Services Private Limited helps businesses secure MSME loans, government funding, and equity-based investments, and create compelling pitch decks for growth.",
      date: "December 25, 2024",
      tags: [{ tagTitle: "News" }, { tagTitle: "Finance" }],
      link: "/blogs/zomato-makes-history",
    },
    {
      title: "How ChatGPT is Transforming Business in 2025",
      desc: "Explore how ChatGPT and AI tools are revolutionizing MSMEs and startup operations in 2025 — from content creation to customer support and strategic planning.",
      date: "May 25, 2025",
      tags: [{ tagTitle: "AI" }, { tagTitle: "Business Growth" }],
      link: "/blogs/chatgpt-business-2025",
    },
    // Add more blog posts as needed
  ];

  return (
    <section className="text-white font-gilroy">
      <div className="min-h-screen">
        {/* Hero Header */}
        <div className="relative w-full h-[50vh] min-h-[400px] bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
          <BlogHeader latestBlogsRef={latestBlogsRef} />
          <MouseLight />
        </div>

        {/* Main Content */}
        <div className="w-full pt-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
            {/* Social Media & Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12   gap-6">
              <div className="flex items-center space-x-6">
                <p className="text-sm font-medium text-gray-100">Share:</p>
                <div className="flex space-x-4">
                  <SocialIcon
                    href="https://www.linkedin.com/company/Yantra-group/"
                    icon={
                      <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" />
                    }
                  />
                  <SocialIcon
                    href="https://www.facebook.com/Yantra/"
                    icon={
                      <ImFacebook2 className="text-2xl text-blue-700 hover:text-blue-900 transition-colors" />
                    }
                  />
                  <SocialIcon
                    href="https://www.instagram.com/Yantragroup/"
                    icon={
                      <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800 transition-colors" />
                    }
                  />
                  <SocialIcon
                    href="https://www.youtube.com/channel/UCJRUMTW8E13okgbFDAJ3E9Q"
                    icon={
                      <FaYoutube className="text-2xl text-red-600 hover:text-red-800 transition-colors" />
                    }
                  />
                  <SocialIcon
                    href="https://bit.ly/msmesamvaad"
                    icon={
                      <RiWhatsappFill className="text-2xl text-green-500 hover:text-green-700 transition-colors" />
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-full sm:w-64">
                  <select className="block w-full px-4 py-2 text-gray-100 bg-gray-800/50 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Browse by Topic</option>
                    <option>Finance</option>
                    <option>Marketing</option>
                    <option>News</option>
                    <option>Strategy</option>
                    <option>AI</option>
                    <option>Business Growth</option>
                  </select>
                </div>
                <div className="relative w-full sm:w-64">
                  <select className="block w-full px-4 py-2 text-gray-100 bg-gray-800/50 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Browse by Date</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Latest Blogs Section with ref */}
            <div ref={latestBlogsRef} id="latest-blogs" className="scroll-mt-16">
              <h2 className="text-3xl font-bold text-gray-100 mb-8 pb-4 border-b border-gray-700">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog, index) => (
                  <BlogCard key={index} blog={blog} />
                ))}
              </div>
              
              {/* Add more blog sections if needed */}
              {blogData.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-700">
                  <h3 className="text-2xl text-center font-bold text-gray-100 mb-6">
                    More Insights
                  </h3>
                  <p className="text-gray-300 text-center mb-6">
                    Stay tuned for more business insights, growth strategies, and industry news.
                  </p>
                  <div className="flex justify-center">
                    <button 
                      onClick={() => latestBlogsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2"
                    >
                      Back to Top
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

// Social Icon Component for better reusability
function SocialIcon({ href, icon }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      {icon}
    </Link>
  );
}