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
  return (
    <footer className="relative text-white px-4 sm:px-6 py-12 md:px-8 lg:px-20 overflow-hidden z-50">
      {/* Background Image */}

      {/* Left Side Image - Inside Container */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-30 hidden md:block  p-2">
        <Image
          src={left}
          alt="Left decoration"
          width={420}
          height={1200}
          className="object-contain filter brightness-150"
        />
      </div>

      {/* Right Side Image - Inside Container */}
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-30 hidden md:block p-2">
        <Image
          src={right}
          alt="Right decoration"
          width={420}
          height={1200}
          className="object-contain filter brightness-150"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          {/* Left: Heading & Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Subscribe for Tech Insights
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
              No spam, just useful content on web dev, freelancing & tools I
              love.
            </p>
          </div>

          {/* Right: Input */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-full px-5 py-3 text-white border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />
              <button className="bg-[#D65A31] hover:bg-[#D65A31]/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer Grid - Modified for right-aligned navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:justify-between"
        >
          {/* Branding - Always on left */}
          <div className="lg:w-1/5">
            <div className="mb-3 text-xl font-bold">👨‍💻 TechFreelance.dev</div>
            <p className="text-sm text-gray-100">
              Building clean, fast & scalable web solutions for startups,
              agencies, and solo founders.
            </p>
          </div>

          {/* Navigation Links - Right-aligned container */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:gap-28 lg:justify-center">
            <div>
              <h4 className="font-semibold mb-3 text-base sm:text-sm">
                Services
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Technical SEO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    API Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-base sm:text-sm">
                Projects
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    GitHub Repos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    CodePen Experiments
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-base sm:text-sm">
                Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Hire Me
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-base sm:text-sm">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaUser className="text-gray-400" />
                  <span>Pranav Dwivedi</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-400" />
                  <a
                    href="mailto:pranav01dev@gmail.com"
                    className="hover:text-white transition"
                  >
                    pranav01dev@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-gray-400" />
                  <a
                    href="tel:+918770676950"
                    className="hover:text-white transition"
                  >
                    +91 8770676950
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-200 text-sm order-2 md:order-1">
            &copy; {new Date().getFullYear()} TechFreelance.dev. Built with ☕ &
            ❤️
          </p>
          <div className="flex space-x-4 text-lg text-gray-300 order-1 md:order-2">
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Dribbble"
            >
              <FaDribbble />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="CodePen"
            >
              <FaCodepen />
            </a>
            <a
              href="#"
              className="hover:text-white transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
