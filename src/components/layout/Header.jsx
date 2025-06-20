"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// import Logo from "../../assets/whatapplogo/logowhatapp.png";
import Hameburger from "../../assets/home/hameburger.png";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";


function Dropdown({ label, labelHref, links, closeMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <Link
          href={labelHref}
          onClick={closeMenu}
          className="text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          {label}
        </Link>
        {links?.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700"
            aria-label={`Toggle ${label} menu`}
          >
            <svg
              className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {open && links?.length > 0 && (
        <div className="ml-4 space-y-1">
          {links.map(({ label, href }, idx) => (
            <Link
              key={idx}
              href={href}
              onClick={closeMenu}
              className="block text-sm text-gray-600 hover:text-blue-500"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  // Detect click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Show/hide header on scroll for desktop
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth >= 768) { // Only on desktop
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          // Scrolling down
          setShowHeader(false);
        } else {
          // Scrolling up
          setShowHeader(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 left-0 mx-auto px-4 py-4 md:px-0 md:py-6 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
        showHeader ? "translate-y-0 opacity-100 shadow-md" : "-translate-y-full opacity-0"
      } bg-[#160b07] backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-3 md:py-0 flex justify-between items-center  rounded-full md:border-none">
        <div className="flex items-center gap-2">
          <Link href="/" passHref>
            {/* <Image
              src={Logo}
              alt="L2C Logo"
              width={0}
              height={0}
              sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 170px"
              className="w-[120px] sm:w-[150px] md:w-[140px] h-auto cursor-pointer"
              priority
            /> */}
  <h2 className="font-rowdies text-3xl text-amber-50 font-semibold">
    Pranav  Dwivedi
  </h2>

          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center text-[#CACACA] px-6 lg:px-12 py-3 lg:py-4 space-x-6 lg:space-x-8">
          <Link href="/" className="text-sm lg:text-base font-medium  hover:text-white">Home</Link>
          <Link href="/services" className="text-sm lg:text-base font-medium  hover:text-white">Services</Link>
          
          {/* Dropdowns */}
          {[
            {
              label: "Services",
              href: "/services",
              links: [
                // { label: "Diploma", href: "/diploma" },
               
              ],
            },
            {
              label: "Who we are",
              href: "/who-we-are",
              links: [],
            },
            {
              label: "Reach Us",
              href: "/reach us",
              links: [],
            },
            
          ].map((menu, index) => (
            <div key={index} className="relative group">
              <Link href={menu.href} className="flex items-center text-sm lg:text-base font-medium  hover:text-[white]">
                {menu.label}
                {menu.links?.length > 0 && (
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {menu.links?.length > 0 && (
                <div className="absolute left-0 mt-2 w-48 z-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  {menu.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
  <button
    onClick={() => setIsModalOpen(true)}
    className="flex flex-row justify-center items-center px-12 py-3 gap-2 w-[194px] h-[52px] bg-white/[0.1] border border-[#D8D8D666] shadow-[inset_0px_-8px_21.6px_#FFFFFF26] rounded-full text-[#CACACA] text-[18px] leading-[22px] font-medium"
  >
    Contact Us
  </button>
</div>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Image src={Hameburger} alt="Menu" width={35} height={35} className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 shadow-lg rounded-b-xl border-t border-gray-300 px-4 pb-4 pt-4 space-y-2">
    <Link href="/" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-blue-600">Home</Link>
    <Link href="/about-us" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-blue-600">About Us</Link>

    <Dropdown
      label="Services"
      labelHref="/services"
      closeMenu={() => setMenuOpen(false)}
      links={[]}
    />

    <Dropdown
      label="Who we are"
      labelHref="/who-we-are"
      closeMenu={() => setMenuOpen(false)}
      links={[]}
    />

    <Dropdown
      label="reach-us"
      labelHref="/reach-us"
      closeMenu={() => setMenuOpen(false)}
      links={[]}
    />

    <Dropdown
      label="Test Prep"
      labelHref="/test-preparation"
      closeMenu={() => setMenuOpen(false)}
      links={[
        { label: "IELTS", href: "/ielts" },
      ]}
    />

    <Link href="/blogs" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-blue-600">Blogs</Link>

    {/* Mobile Contact Us Button with Border and Gradient */}
    <ButtonOrange
      onClick={() => setIsModalOpen(true)}
      // className="inline-block mt-2 bg-gradient-to-b from-[#1254FA] to-[#002B98] text-white px-5 py-2 rounded-xl font-medium text-sm hover:opacity-90 transition border-[1px] border-[#D8D8D866]"
    >
      Contact Us
    </ButtonOrange>
  </div>
)}


      {/* <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </header>
  );
}
