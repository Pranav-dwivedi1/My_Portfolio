import React from "react";
import Image from "next/image";

export default function BlogHeader() {
  return (
    <header className="relative w-full h-[50vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      {/* Content container */}
      <div className="relative h-full w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Our <span className="text-blue-300">Business</span> Blog
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 opacity-90 max-w-2xl mx-auto md:mx-0">
            Resourceful insight, news and guidance that will help you make your business a successful brand!
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Explore Articles
            </button>
            <button className="px-6 py-3 border-2 border-blue-400 text-blue-100 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-900/30">
              Subscribe
            </button>
          </div>
        </div>

        {/* Image placeholder - right side */}
        <div className="hidden md:block w-full md:w-1/2 relative h-full animate-fadeIn">
          <div className="absolute right-0 bottom-0 w-full h-3/4">
            {/* Uncomment when you have the image */}
            {/* <Image
              src={blog}
              alt="Business blog illustration"
              layout="fill"
              objectFit="contain"
              priority
              className="drop-shadow-2xl"
            /> */}
            <div className="absolute inset-0 bg-blue-800/20 rounded-tl-2xl border-t-2 border-l-2 border-blue-500/30 flex items-center justify-center">
              <span className="text-white/50 text-lg">Blog Illustration</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse"></div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
}