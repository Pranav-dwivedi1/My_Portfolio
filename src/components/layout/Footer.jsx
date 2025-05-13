'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaCodepen, FaDribbble
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white px-6 py-12 md:px-20">
      <div className="w-full mx-auto">
        {/* Newsletter */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
>
 
  {/* Left: Text */}
  <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-right">
    <h2 className="text-3xl font-bold mb-2">Subscribe for Tech Insights</h2>
    <p className="text-gray-400">No spam, just useful content on web dev, freelancing & tools I love.</p>
  </div>

  {/* Right: Input */}
  <div className="w-full md:w-1/2 order-2 md:order-1">
    <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="rounded-full px-5 py-2 text-white w-full sm:w-auto border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
      />
      <button className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-6 py-2 rounded-full">
        Subscribe
      </button>
    </div>
  </div>
</motion.div>


        {/* Footer Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
        >
          {/* Branding */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-2 text-xl font-bold">👨‍💻 TechFreelance.dev</div>
            <p className="text-sm text-gray-400">Building clean, fast & scalable web solutions for startups, agencies, and solo founders.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="#">Web Development</Link></li>
              <li><Link href="#">UI/UX Design</Link></li>
              <li><Link href="#">Technical SEO</Link></li>
              <li><Link href="#">API Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Projects</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="#">Portfolio</Link></li>
              <li><Link href="#">Case Studies</Link></li>
              <li><Link href="#">GitHub Repos</Link></li>
              <li><Link href="#">CodePen Experiments</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="#">Hire Me</Link></li>
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TechFreelance.dev. Built with ☕ & ❤️
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0 text-lg text-gray-300">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaCodepen /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
