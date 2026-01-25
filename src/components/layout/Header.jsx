"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// import Logo from "../../assets/whatapplogo/logowhatapp.png";
import Hameburger from "../../assets/home/hameburger.png";
import cross from "../../assets/header/cross.svg";
import ButtonOrange from "@/components/comman/ui/ButtonOrange";

function Dropdown({ label, labelHref, links, closeMenu }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <Link
          href={labelHref}
          onClick={closeMenu}
          className="text-lg font-medium text-gray-700 hover:text-blue-600"
          aria-expanded={open}
          title={`Navigate to ${label} page`}
        >
          {label}
        </Link>
        {links?.length > 0 && (
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700"
            aria-label={`Toggle ${label} submenu`}
            aria-controls={`${label.toLowerCase()}-submenu`}
            aria-expanded={open}
          >
            <svg
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {open && links?.length > 0 && (
        <div 
          id={`${label.toLowerCase()}-submenu`}
          className="ml-4 space-y-1"
          role="menu"
          aria-label={`${label} submenu`}
        >
          {links.map(({ label, href }, idx) => (
            <Link
              key={idx}
              href={href}
              onClick={closeMenu}
              className="block text-lg text-gray-600 hover:text-blue-500"
              role="menuitem"
              title={`Navigate to ${label}`}
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

  // Navigation structure for better SEO
  const navigation = [
    { label: "Home", href: "/", links: [] },
    { label: "About", href: "/about", links: [] },
    { label: "Blogs", href: "/blogs", links: [] },
    { label: "Portfolio", href: "/portfolio", links: [] },
    { 
      label: "Services", 
      href: "/services", 
      links: [
        // { label: "Website Development", href: "/website-development" }
      ]
    },
    { label: "Contact", href: "/contact", links: [] },
  ];

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

      if (window.innerWidth >= 768) {
        // Only on desktop
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add structured data for navigation
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pranav Dwivedi",
    "url": "https://yourdomain.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <header
        ref={headerRef}
        className={`sticky top-0 left-0 mx-auto px-4 py-4 md:px-0 md:py-6 w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform ${
          showHeader
            ? "translate-y-0 opacity-100 shadow-md"
            : "-translate-y-full opacity-0"
        }  backdrop-blur-md`}
        role="banner"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <div className="max-w-7xl mx-auto px-3 md:py-0 flex justify-between items-center rounded-full md:border-none">
          {/* Logo with Schema.org markup */}
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              passHref
              itemProp="url"
              aria-label="Pranav Dwivedi - Home"
              title="Navigate to Homepage"
            >
              {/* <Image
                src={Logo}
                alt="Pranav Dwivedi - Professional Portfolio Logo"
                width={0}
                height={0}
                sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 170px"
                className="w-[120px] sm:w-[150px] md:w-[140px] h-auto cursor-pointer"
                priority
                itemProp="logo"
              /> */}
              <h1 
                className="font-rowdies text-3xl text-amber-50 font-semibold"
                itemProp="name"
              >
                Pranav Dwivedi
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation with ARIA labels */}
          <nav 
            className="hidden md:flex items-center text-[#CACACA] px-6 lg:px-12 py-3 lg:py-4 space-x-6 lg:space-x-8"
            role="navigation"
            aria-label="Main Navigation"
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
          >
            {navigation.map((menu, index) => (
              <div key={index} className="relative group">
                <Link
                  href={menu.href}
                  className="flex items-center text-sm lg:text-base font-medium hover:text-[white] transition-colors duration-200"
                  itemProp="url"
                  aria-label={`Navigate to ${menu.label}`}
                  title={`${menu.label} - Pranav Dwivedi`}
                >
                  <span itemProp="name">{menu.label}</span>
                  {menu.links?.length > 0 && (
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {menu.links?.length > 0 && (
                  <div 
                    className="absolute left-0 mt-2 w-48 z-50 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
                    role="menu"
                    aria-label={`${menu.label} submenu`}
                  >
                    {menu.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                        itemProp="url"
                        title={link.label}
                      >
                        <span itemProp="name">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-row justify-center items-center px-12 py-3 gap-2 w-[194px] h-[52px] bg-white/[0.1] border border-[#D8D8D666] shadow-[inset_0px_-8px_21.6px_#FFFFFF26] rounded-full text-[#CACACA] text-[18px] leading-[22px] font-medium hover:bg-white/[0.2] transition-all duration-300"
              aria-label="Open Contact Form"
              title="Contact Pranav Dwivedi"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburger / Cross Button */}
          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <Image
                src={cross}
                alt="Close Navigation Menu"
                width={35}
                height={35}
                className="w-10 h-10"
                priority
              />
            ) : (
              <Image
                src={Hameburger}
                alt="Open Navigation Menu"
                width={35}
                height={35}
                className="w-9 h-9"
                priority
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden text-lg absolute top-full left-0 w-full bg-white z-50 shadow-lg rounded-b-xl border-t border-gray-300 px-4 pb-4 pt-4 space-y-2"
            role="menu"
            aria-label="Mobile Navigation"
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors"
              role="menuitem"
              title="Navigate to Home"
            >
              Home
            </Link>

            <Dropdown
              label="About"
              labelHref="/about"
              closeMenu={() => setMenuOpen(false)}
              links={[]}
            />

            <Dropdown
              label="Blogs"
              labelHref="/blogs"
              closeMenu={() => setMenuOpen(false)}
              links={[]}
            />
            
            <Dropdown
              label="Portfolio"
              labelHref="/portfolio"
              closeMenu={() => setMenuOpen(false)}
              links={[]}
            />

            <Dropdown
              label="Services"
              labelHref="/services"
              closeMenu={() => setMenuOpen(false)}
              links={[{ label: "Website Development", href: "/website-development" }]}
            />
            
            <Dropdown
              label="Contact"
              labelHref="/contact"
              closeMenu={() => setMenuOpen(false)}
              links={[]}
            />

            {/* Mobile Contact Button */}
            <ButtonOrange
              text="Contact Us"
              onClick={() => {
                setIsModalOpen(true);
                setMenuOpen(false);
              }}
              aria-label="Open Contact Form from Mobile Menu"
              title="Contact Pranav Dwivedi"
            />
          </div>
        )}

        {/* <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      </header>
    </>
  );
}