'use client';
import { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaDribbble, FaCircle } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and scrolled more than 100px, hide header
        setShowHeader(false);
      } else {
        // Scrolling up, show header
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`bg-[#1a1a1a] text-white px-6 py-2 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Left: Navigation */}
        <nav className="hidden md:flex space-x-8 justify-start">
          {['Home', 'About', 'Projects', 'Articles', 'Contact'].map((item, i) => (
            <a
              key={i}
              href="#"
              className="relative hover:text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <div className="text-xl font-bold border border-white rounded-full w-20 h-20 flex items-center justify-center">
            PD
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-4 justify-end text-xl">
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaGithub className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
          <FaPinterest className="hover:text-red-500 cursor-pointer" />
          <FaDribbble className="hover:text-pink-400 cursor-pointer" />
          <FaCircle className="hover:text-white cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end col-span-3 mt-4">
          <button className="flex flex-col gap-[3px]" onClick={() => setIsOpen(!isOpen)}>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          {['Home', 'About', 'Projects', 'Articles'].map((item, i) => (
            <a key={i} href="#" className="block hover:text-gray-300">
              {item}
            </a>
          ))}
          <div className="flex justify-center space-x-4 text-xl pt-2">
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <FaPinterest />
            <FaDribbble />
            <FaCircle />
          </div>
        </div>
      )}
    </header>
  );
}
