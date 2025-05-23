import React from "react";
import Link from "next/link";
// import bg from "../../assets/blog/blogBackgroundPng.png";
const BlogCard = ({ blog }) => {
  return (
    <Link href={blog.link}>
     <div
      className="relative rounded-xl p-2 text-black shadow-[0_6px_3px_-2px_rgba(0,0,0,0.2)]"
      style={{
        // backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "450px",
      }}
    >
      {/* Date */}
      <div className="text-sm mb-4 text-center mt-8">{blog.date}</div>

      {/* Title */}
      <h2 className="text-xl md:text-lg font-bold mb-4">{blog.title}</h2>

      {/* Tags */}
      {blog.tags && (
        <div className="flex gap-2 mb-4 flex-wrap">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#794138] text-[#D7B58F] px-3 py-1 rounded-lg text-sm"
            >
              {tag.tagTitle}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="text-base md:text-sm mb-12">{blog.desc}</p>

      {/* Read More Link */}
      {blog.link && (
        <div className="absolute bottom-2 left-6">
          <p
            href={blog.link}
            className="text-sm font-medium flex items-center hover:text-[#794138] transition-colors duration-300"
          >
            Read More <span className="ml-2">→</span>
          </p>
        </div>
      )}
    </div>
    </Link>
   
  );
};

export default BlogCard;
