'use client';
import { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaPinterest, FaDribbble, FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialItems = [
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaPinterest />, url: 'https://pinterest.com/yourusername' },
    { icon: <FaDribbble />, url: 'https://dribbble.com/yourusername' },
    { icon: <FaCircle />, url: 'https://yourwebsite.com' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowHeader(false);
      } else {
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
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.path}
              className="relative hover:text-white after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Center: Animated Logo */}
        <div className="flex justify-center">
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div 
              className="text-xl font-bold border-2 border-white rounded-full w-20 h-20 flex items-center justify-center bg-black z-10 relative"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-white font-bold text-2xl">PD</span>
            </motion.div>
            
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 blur-md -z-10"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-4 justify-end text-xl">
          {socialItems.map((social, i) => (
            <a 
              key={i} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 cursor-pointer"
            >
              {social.icon}
            </a>
          ))}
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
          {navItems.map((item, i) => (
            <a key={i} href={item.path} className="block hover:text-gray-300">
              {item.name}
            </a>
          ))}
          <div className="flex justify-center space-x-4 text-xl pt-2">
            {socialItems.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}