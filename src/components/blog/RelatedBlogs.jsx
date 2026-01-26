"use client";
import React from "react";
import Link from "next/link";
import Script from "next/script";

const RelatedBlogs = () => {
  const relatedBlogData = [
    {
      title: "Project Funding: Best Schemes & How to Get Funded in 2026",
      description:
        "Discover top government project funding schemes, eligibility criteria, and step-by-step application process for startups and businesses.",
      date: "2026-04-02",
      readingTime: "5 min read",
      category: "Funding",
      link: "/blogs/project-funding",
    },
    {
      title: "MSME Award Winners at Vejalpur Startup Festival 2.0",
      description:
        "Celebrating innovative MSMEs and startups honored at Gujarat's premier startup festival with insights on winning strategies.",
      date: "2026-04-01",
      readingTime: "4 min read",
      category: "Awards",
      link: "/blogs/msme-award",
    },
    {
      title: "Manufacturing Grants for Startups & MSMEs in 2026",
      description:
        "Complete guide to manufacturing grants, subsidies, and funding options for small and medium manufacturing enterprises.",
      date: "2026-03-28",
      readingTime: "6 min read",
      category: "Grants",
      link: "/blogs/manufacturing-grants",
    },
    {
      title: "How to Get Startup Funding from Government in 2026",
      description:
        "Step-by-step guide to securing government funding for startups with detailed scheme information and application process.",
      date: "2026-03-15",
      readingTime: "7 min read",
      category: "Startup",
      link: "/blogs/how-to-get-funding-for-startup-from-government",
    },
    {
      title: "MSME Working Capital: Smart Financing Solutions",
      description:
        "Essential guide to working capital management for MSMEs with tips on loan options and cash flow optimization.",
      date: "2026-03-10",
      readingTime: "5 min read",
      category: "Finance",
      link: "/blogs/msme-working-capital",
    },
    {
      title: "Agriculture Funding Schemes & Grants for 2026",
      description:
        "Comprehensive list of agriculture funding schemes, subsidies, and grants available for farmers and agribusinesses.",
      date: "2026-02-15",
      readingTime: "6 min read",
      category: "Agriculture",
      link: "/blogs/agri-funding-scheme",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      {/* Structured Data for Related Articles */}
      <Script id="related-articles-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: relatedBlogData.map((blog, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Article",
              headline: blog.title,
              description: blog.description,
              datePublished: blog.date,
              inLanguage: "en-IN",
              url: `https://www.pranavdev.online${blog.link}`,
              articleSection: blog.category,
              timeRequired: `PT${blog.readingTime.split(" ")[0]}M`,
              author: {
                "@type": "Person",
                name: "Pranav Dwivedi",
                url: "https://www.pranavdev.online",
              },
            },
          })),
        })}
      </Script>

      <section
        className="w-full py-16"
        itemScope
        itemType="https://schema.org/ItemList"
        aria-labelledby="related-articles-heading"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header with Schema Markup */}
          <div className="text-center mb-12">
            <h2
              id="related-articles-heading"
              className="text-3xl font-bold text-gray-200 mb-4"
              itemProp="name"
            >
              Related Articles
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Continue exploring similar topics to deepen your understanding of
              business funding and growth strategies.
            </p>
          </div>

          {/* Article Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {relatedBlogData.map((blog, index) => (
              <article
                key={index}
                className=" rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
                itemProp="item"
                itemScope
                itemType="https://schema.org/Article"
              >
                {/* Article Content */}
                <div className="p-6 flex-grow">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title with Schema */}
                  <Link
                    href={blog.link}
                    className="group"
                    itemProp="url"
                    aria-label={`Read article: ${blog.title}`}
                  >
                    <h3
                      className="text-lg font-semibold text-gray-300 mb-3 group-hover:text-blue-300 transition-colors line-clamp-2"
                      itemProp="headline"
                    >
                      {blog.title}
                    </h3>

                    {/* Description with Schema */}
                    <p
                      className="text-gray-300 mb-4 line-clamp-3"
                      itemProp="description"
                    >
                      {blog.description}
                    </p>
                  </Link>
                </div>

                {/* Article Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    {/* Date with Schema */}
                    <time dateTime={blog.date} itemProp="datePublished">
                      {formatDate(blog.date)}
                    </time>

                    {/* Reading Time with Schema */}
                    <span itemProp="timeRequired">{blog.readingTime}</span>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-4">
                    <Link
                      href={blog.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                      aria-label={`Read full article: ${blog.title}`}
                      itemProp="url"
                    >
                      Read Article
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Hidden Schema Properties */}
                <meta itemProp="position" content={index + 1} />
                <meta itemProp="inLanguage" content="en-IN" />
                <div
                  itemProp="author"
                  itemScope
                  itemType="https://schema.org/Person"
                  className="hidden"
                >
                  <span itemProp="name">Pranav Dwivedi</span>
                </div>
                <div
                  itemProp="publisher"
                  itemScope
                  itemType="https://schema.org/Organization"
                  className="hidden"
                >
                  <div
                    itemProp="logo"
                    itemScope
                    itemType="https://schema.org/ImageObject"
                  >
                    <meta
                      itemProp="url"
                      content="https://www.pranavdev.online/logo.png"
                    />
                  </div>
                  <span itemProp="name">PranavDev</span>
                </div>
              </article>
            ))}
          </div>

          {/* View All Articles Button */}
          <div className="text-center mt-12">
            <Link
              href="/blogs"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="View all articles in blog"
            >
              View All Articles
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* SEO Metadata */}
          <div className="sr-only" aria-hidden="true">
            <p>
              This section contains related articles on business funding,
              government schemes, and growth strategies for MSMEs and startups
              in India.
            </p>
            <p>
              Topics covered include: project funding, manufacturing grants,
              working capital, agriculture schemes, and startup financing.
            </p>
            <ul>
              {relatedBlogData.map((blog, index) => (
                <li key={index}>
                  <Link href={blog.link}>{blog.title}</Link>: {blog.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
