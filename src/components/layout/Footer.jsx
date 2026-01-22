"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ctabg from "../../assets/home/ctabg.webp";
import left from "../../assets/footer/left.png";
import right from "../../assets/footer/right.png";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCodepen,
  FaDribbble,
  FaPhone,
  FaUser,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white px-4 sm:px-6 py-12 md:px-8 lg:px-20 overflow-hidden z-50">
      {/* ✅ Semantic Footer Element - Already present */}
      
      {/* ✅ Left Side Decorative Image */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 hidden md:block p-2">
        <Image
          src={left}
          alt="Decorative geometric pattern for footer section"
          width={420}
          height={1200}
          className="object-contain filter brightness-150"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ✅ Right Side Decorative Image */}
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 hidden md:block p-2">
        <Image
          src={right}
          alt="Decorative geometric pattern for footer section"
          width={420}
          height={1200}
          className="object-contain filter brightness-150"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* ✅ Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          {/* ✅ Heading for Newsletter */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Subscribe for Tech Insights
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
              Get weekly updates on web development, freelancing tips, and tools 
              used by industry professionals. No spam, just valuable content.
            </p>
          </div>

          {/* ✅ Email Form with Accessibility */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address for newsletter subscription
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="flex-grow rounded-full px-5 py-3 text-white border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                aria-required="true"
                required
              />
              <button 
                type="submit"
                className="
                  bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a]
                  hover:from-[#3e64ba] hover:via-[#5b7fdc] hover:to-[#2222a0]
                  text-white font-semibold px-6 py-3 rounded-full
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-purple-600
                "
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-2">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* ✅ Main Footer Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:justify-between"
        >
          {/* ✅ Branding Section */}
          <div className="lg:w-1/5 mb-8 lg:mb-0">
            <div className="mb-3 text-xl font-bold">👨‍💻 Pranav Dwivedi</div>
            <p className="text-sm text-gray-100">
              Full Stack Developer specializing in React, Next.js, and modern web technologies. 
              Building clean, fast & scalable solutions for startups and businesses.
            </p>
          </div>

          {/* ✅ Navigation Links with Semantic Structure */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-28 lg:justify-center" 
               aria-label="Footer navigation">
            
            {/* Services Section */}
            <div>
              <h3 className="font-semibold mb-3 text-base sm:text-sm">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/services/web-development" className="hover:text-white transition">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/frontend-development" className="hover:text-white transition">
                    Frontend Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/backend-development" className="hover:text-white transition">
                    Backend Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/technical-seo" className="hover:text-white transition">
                    Technical SEO
                  </Link>
                </li>
              </ul>
            </div>

            {/* Projects Section */}
            <div>
              <h3 className="font-semibold mb-3 text-base sm:text-sm">
                Projects
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/portfolio" className="hover:text-white transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    GitHub Repos
                  </Link>
                </li>
                <li>
                  <Link href="https://codepen.io/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    CodePen Experiments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div>
              <h3 className="font-semibold mb-3 text-base sm:text-sm">
                Support
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/hire-me" className="hover:text-white transition">
                    Hire Me
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-semibold mb-3 text-base sm:text-sm">
                Contact Info
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaUser className="text-gray-400" aria-hidden="true" />
                  <span>Pranav Dwivedi</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" aria-hidden="true" />
                  <a
                    href="mailto:pranav01dev@gmail.com"
                    className="hover:text-white transition"
                    aria-label="Send email to Pranav Dwivedi"
                  >
                    pranav01dev@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" aria-hidden="true" />
                  <a
                    href="tel:+918770676950"
                    className="hover:text-white transition"
                    aria-label="Call Pranav Dwivedi"
                  >
                    +91 8770676950
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </motion.div>

        {/* ✅ Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Copyright */}
          <p className="text-gray-200 text-sm order-2 md:order-1">
            &copy; {currentYear} pranavdev.online | Built with Next.js, React & Tailwind CSS
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 text-lg text-gray-300 order-1 md:order-2" 
               aria-label="Social media links">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Follow on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="View GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://dribbble.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="View Dribbble portfolio"
            >
              <FaDribbble />
            </a>
            <a
              href="https://codepen.io/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="View CodePen experiments"
            >
              <FaCodepen />
            </a>
            <a
              href="mailto:pranav01dev@gmail.com"
              className="hover:text-white transition"
              aria-label="Send email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}