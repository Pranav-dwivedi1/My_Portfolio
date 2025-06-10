import React from "react";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      {/* Optional image placeholder - uncomment if you want to use images */}
      {/* <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div> */}
      
      <div className="p-6">
        {/* Date */}
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300 group-hover:text-blue-500">
          {blog.date}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {blog.title}
        </h3>
        
        {/* Tags */}
        {blog.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 transition-all duration-300 hover:scale-105"
              >
                {tag.tagTitle}
              </span>
            ))}
          </div>
        )}
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
          {blog.desc}
        </p>
        
        {/* Read More Link */}
        {blog.link && (
          <div className="mt-auto">
            <Link 
              href={blog.link}
              className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300"
            >
              Read More
              <svg 
                className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
      
      {/* Hover effect elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default BlogCard;