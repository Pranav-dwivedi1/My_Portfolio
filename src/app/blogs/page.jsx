"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import BlogHeader from "../../components/blogsPage/BlogHeader";
import BlogCard from "../../components/blogsPage/BlogCard";
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";

export default function Blogs() {
  const latestBlogsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // Complete blog data with more attributes for filtering
  const blogData = [
    {
      id: 1,
      title: "Sensex Zomato: What's Driving Zomato's Performance on the BSE Sensex?",
      desc: "Explore Zomato's impact on the BSE Sensex and business growth insights.",
      date: "December 25, 2024",
      tags: [{ tagTitle: "News" }, { tagTitle: "Finance" }],
      category: ["finance", "news"],
      readTime: "5 min read",
      link: "/blogs/zomato-makes-history",
      featured: true,
    },
    {
      id: 2,
      title: "How ChatGPT is Transforming Business in 2025",
      desc: "How AI and ChatGPT are revolutionizing MSMEs and startups.",
      date: "May 25, 2025",
      tags: [{ tagTitle: "AI" }, { tagTitle: "Business Growth" }],
      category: ["ai", "business"],
      readTime: "8 min read",
      link: "/blogs/chatgpt-business-2025",
      featured: true,
    },
    {
      id: 3,
      title: "How to Become a Prompt Engineer in AI (2026 Guide)",
      desc: "Complete roadmap, skills, salary, and career guide for prompt engineers.",
      date: "June 10, 2026",
      tags: [
        { tagTitle: "AI" },
        { tagTitle: "Career" },
        { tagTitle: "Prompt Engineering" },
      ],
      category: ["ai", "career"],
      readTime: "12 min read",
      link: "/blogs/prompt-engineering-guide",
      featured: true,
    },
    {
      id: 4,
      title: "Digital Marketing Strategies for Startups in 2025",
      desc: "Learn cost-effective digital marketing tactics for early-stage startups.",
      date: "April 15, 2025",
      tags: [{ tagTitle: "Marketing" }, { tagTitle: "Startups" }],
      category: ["marketing", "business"],
      readTime: "6 min read",
      link: "/blogs/digital-marketing-startups",
      featured: false,
    },
    {
      id: 5,
      title: "Blockchain Technology: Future of Secure Transactions",
      desc: "Understanding blockchain's impact on finance and data security.",
      date: "March 20, 2025",
      tags: [{ tagTitle: "Technology" }, { tagTitle: "Finance" }],
      category: ["technology", "finance"],
      readTime: "10 min read",
      link: "/blogs/blockchain-future",
      featured: false,
    },
  ];

  // Filter categories
  const categories = [
    { id: "all", name: "All Articles", count: blogData.length },
    { id: "ai", name: "Artificial Intelligence", count: blogData.filter(b => b.category.includes("ai")).length },
    { id: "finance", name: "Finance & Markets", count: blogData.filter(b => b.category.includes("finance")).length },
    { id: "business", name: "Business Growth", count: blogData.filter(b => b.category.includes("business")).length },
    { id: "career", name: "Career Development", count: blogData.filter(b => b.category.includes("career")).length },
    { id: "technology", name: "Technology", count: blogData.filter(b => b.category.includes("technology")).length },
    { id: "marketing", name: "Marketing", count: blogData.filter(b => b.category.includes("marketing")).length },
  ];

  // Filter and sort blogs
  const filteredBlogs = blogData
    .filter(blog => activeFilter === "all" || blog.category.includes(activeFilter))
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOrder === "oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  const pageTitle = "Blog Articles on AI, Business Growth, Finance & Technology | PranavDev";
  const pageDescription = "Explore expert insights on Artificial Intelligence, Prompt Engineering, Business Growth, Finance, and Digital Strategy. Stay updated with latest trends.";
  const pageUrl = "https://www.pranavdev.online/blogs";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="AI, Artificial Intelligence, Business Growth, Finance, Technology, Prompt Engineering, Digital Marketing, Career Development" />
        <meta name="author" content="PranavDev" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PranavDev Blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
      </Head>

      <main className="text-white font-gilroy min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* 🔹 Enhanced Structured Data */}
        <Script id="blogs-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": pageTitle,
            "description": pageDescription,
            "url": pageUrl,
            "publisher": {
              "@type": "Organization",
              "name": "PranavDev",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.pranavdev.online/logo.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": filteredBlogs.map((b, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                  "@type": "BlogPosting",
                  "headline": b.title,
                  "description": b.desc,
                  "datePublished": b.date,
                  "url": `https://www.pranavdev.online${b.link}`,
                  "keywords": b.tags.map(tag => tag.tagTitle).join(", "),
                  "timeRequired": b.readTime
                }
              }))
            }
          })}
        </Script>

        {/* Breadcrumb Schema */}
        <Script id="breadcrumb-schema" type="application/ld+json">
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
                "name": "Blog",
                "item": pageUrl
              }
            ]
          })}
        </Script>

        {/* HERO SECTION - REMOVED DUPLICATE CONTENT */}
        <BlogHeader latestBlogsRef={latestBlogsRef} />

        {/* CONTENT SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Social Sharing & Filters Header */}
          <nav className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
            {/* Social Media Sharing */}
            <div className="w-full md:w-auto">
              <h2 className="text-lg font-semibold mb-3 text-gray-300 flex items-center gap-2">
                <span className="text-blue-400">Share this page:</span>
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <SocialShareButton
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(pageTitle)}`}
                  label="Share on LinkedIn"
                  icon={<FaLinkedin className="text-2xl" />}
                  className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30"
                />
                <SocialShareButton
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`}
                  label="Share on Twitter"
                  icon={<FaTwitter className="text-2xl" />}
                  className="bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/30"
                />
                <SocialShareButton
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                  label="Share on Facebook"
                  icon={<ImFacebook2 className="text-2xl" />}
                  className="bg-blue-700/20 hover:bg-blue-700/30 border border-blue-700/30"
                />
                <SocialShareButton
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`}
                  label="Share on WhatsApp"
                  icon={<RiWhatsappFill className="text-2xl" />}
                  className="bg-green-600/20 hover:bg-green-600/30 border border-green-500/30"
                />
                <div className="hidden md:flex items-center gap-4 pl-4 border-l border-gray-700">
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-red-500 transition-colors"
                     aria-label="Subscribe on YouTube">
                    <FaYoutube className="text-2xl" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-pink-500 transition-colors"
                     aria-label="Follow on Instagram">
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="w-full md:w-auto">
              <h2 className="text-lg font-semibold mb-3 text-gray-300 flex items-center gap-2">
                <FiFilter className="text-blue-400" />
                <span>Filter Articles</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    aria-label="Filter blogs by category"
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg appearance-none pr-10 cursor-pointer hover:border-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name} ({cat.count})
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Sort Filter */}
                <div className="relative">
                  <select
                    aria-label="Sort blogs by date"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg appearance-none pr-10 cursor-pointer hover:border-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Active Filter Display */}
          {activeFilter !== "all" && (
            <div className="mb-8 p-4 bg-blue-900/20 border border-blue-700/30 rounded-lg">
              <p className="text-gray-300">
                Showing <span className="font-semibold text-blue-300">
                  {categories.find(c => c.id === activeFilter)?.name}
                </span> 
                <span className="mx-2">•</span>
                <span className="text-gray-400">
                  {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
                </span>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="ml-4 px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                >
                  Clear Filter
                </button>
              </p>
            </div>
          )}

          {/* BLOG GRID */}
          <section ref={latestBlogsRef} id="latest-blogs" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-700 flex items-center justify-between">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {activeFilter === "all" ? "Latest Articles" : `${categories.find(c => c.id === activeFilter)?.name} Articles`}
              </span>
              <span className="text-sm font-normal text-gray-400">
                {filteredBlogs.length} articles
              </span>
            </h2>

            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <article
                    key={blog.id}
                    itemScope
                    itemType="https://schema.org/BlogPosting"
                    className="group hover:scale-[1.02] transition-transform duration-300"
                  >
                    <meta itemProp="headline" content={blog.title} />
                    <meta itemProp="description" content={blog.desc} />
                    <meta itemProp="datePublished" content={blog.date} />
                    <meta itemProp="timeRequired" content={blog.readTime} />
                    <meta itemProp="author" content="PranavDev" />
                    <link
                      itemProp="url"
                      href={`https://www.pranavdev.online${blog.link}`}
                    />

                    <BlogCard blog={blog} />
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found for this filter.</p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  View All Articles
                </button>
              </div>
            )}
          </section>

          {/* CATEGORY TAGS for SEO */}
          <div className="mb-12 p-6 bg-gray-800/30 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">Browse by Topic</h3>
            <div className="flex flex-wrap gap-3">
              {categories.filter(c => c.id !== "all").map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* SEO CONTENT SECTION */}
          <div className="prose prose-invert max-w-none p-8 bg-gray-800/20 rounded-2xl border border-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Technology & Business Insights</h2>
            <p className="text-gray-300 mb-4">
              Welcome to the PranavDev Blog, your premier destination for expert analysis on 
              <strong> Artificial Intelligence</strong>, <strong>Business Growth Strategies</strong>, 
              <strong> Financial Markets</strong>, and <strong>Digital Transformation</strong>.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Popular Topics</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Artificial Intelligence & Machine Learning</li>
                  <li>• Prompt Engineering & AI Tools</li>
                  <li>• Business Automation & Efficiency</li>
                  <li>• Startup Growth Strategies</li>
                  <li>• Financial Analysis & Market Trends</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Why Read Our Blog?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Expert-written technical content</li>
                  <li>• Practical business insights</li>
                  <li>• Latest technology trends</li>
                  <li>• Career development guides</li>
                  <li>• Industry analysis & forecasts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* Social Share Button Component */
function SocialShareButton({ href, icon, label, className = "" }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all hover:scale-110 ${className}`}
    >
      {icon}
    </Link>
  );
}