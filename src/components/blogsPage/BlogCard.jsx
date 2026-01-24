import React from "react";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <article
      itemScope
      itemType="https://schema.org/BlogPosting"
      className="relative rounded-[25px] p-[2px] transition-all duration-300 hover:scale-[1.01] bg-gradient-to-br from-[#1c3261] via-[#051e25] to-[#143e65]"
    >
      <div className="relative group overflow-hidden rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-[450px] flex flex-col">
        
        {/* Image / Banner */}
        <div
          className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          
          {/* Date */}
          <time
            itemProp="datePublished"
            dateTime={blog.date}
            className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300 group-hover:text-blue-500"
          >
            {blog.date}
          </time>

          {/* Title */}
          <h3
            itemProp="headline"
            className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2 transition-colors duration-300 dark:group-hover:text-blue-400"
          >
            {blog.title}
          </h3>

          {/* Tags (articleSection) */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  itemProp="articleSection"
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 transition-all duration-300"
                >
                  {tag.tagTitle}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p
            itemProp="description"
            className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3"
          >
            {blog.desc}
          </p>

          {/* Read More */}
          <div className="mt-auto">
            {blog.link && (
              <Link
                href={blog.link}
                itemProp="url"
                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300"
                aria-label={`Read full article: ${blog.title}`}
              >
                Read More
                <svg
                  className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Hover Line */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-[width] duration-500 ease-out bg-blue-500"
        />
      </div>
    </article>
  );
};

export default BlogCard;
