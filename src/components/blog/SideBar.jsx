"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
import { useState } from "react";
import WebsiteDevelopmentSocialMedia from "./WebsiteDevelopmentSocialMedia";

export default function SideBar({ propsData }) {
  const digitalSetup = [
    { title: "Business Website Setup", url: "/services/business-website" },
    { title: "Professional Email & Hosting", url: "/services/email-hosting" },
    { title: "Brand Identity & Logo Design", url: "/services/branding" },
    {
      title: "Social Media Account Setup",
      url: "/services/social-media-setup",
    },
    {
      title: "Google Business Profile Setup",
      url: "/services/google-business-setup",
    },
    { title: "Website Launch & Go-Live Support", url: "/contact" },
  ];

  const digitalGrowth = [
    { title: "Website Development", url: "/services/website-development" },
    {
      title: "Web Application Development",
      url: "/services/web-app-development",
    },
    { title: "UI/UX Design", url: "/services/ui-ux-design" },
    {
      title: "Social Media Marketing",
      url: "/services/social-media-marketing",
    },
    {
      title: "SEO & Performance Optimization",
      url: "/services/seo-optimization",
    },
    { title: "Free Consultation", url: "/contact" },
  ];

  const businessExpansion = [
    { title: "Website Development", url: "https://Yantradigital.com/services" },
    { title: "Digital Marketing", url: "https://Yantradigital.com/services" },
    {
      title: "Search Engine Optimization",
      url: "https://Yantradigital.com/services/",
    },
    {
      title: "Social Media Marketing",
      url: "https://Yantradigital.com/services/",
    },
    {
      title: "Performance Marketing",
      url: "https://Yantradigital.com/services/",
    },
    { title: "Whatsapp Marketing", url: "https://Yantradigital.com/services/" },
  ];

  const businessProtection = [
    {
      title: "Legal & Compliances",
      url: "https://www.Yantraonline/legal-and-compliances",
    },
  ];

  const renderSection = (title, items, bgColor, iconClass, sectionId) => (
    <section className="mb-8" aria-labelledby={sectionId}>
      {/* Section Header */}
      <div className={`${bgColor} p-4 rounded-t-xl`}>
        <h2
          id={sectionId}
          className="text-lg font-bold text-white flex items-center"
        >
          <span className={`${iconClass} mr-2`} aria-hidden="true"></span>
          {title}
        </h2>
      </div>

      {/* Navigation List */}
      <nav
        className="bg-white rounded-b-xl shadow-md"
        aria-label={`${title} links`}
      >
        <ul className="divide-y divide-gray-100">
          {items.map((item, index) => {
            const isExternal = item.url.startsWith("http");
            return (
              <li key={index} className="group">
                <Link
                  href={item.url}
                  className="flex items-center p-3 hover:bg-gray-50 transition-all duration-200"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.title}
                >
                  <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:w-2 group-hover:h-2 group-hover:bg-blue-500 transition-all duration-200 mr-3"></span>
                  <span className="text-gray-600 group-hover:text-gray-900 text-sm lg:text-base">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* SEO-only context */}
      <p className="sr-only">
        {title} section contains service links related to business setup,
        digital growth, and online expansion solutions.
      </p>
    </section>
  );

  return (
    <aside
      className="p-6 bg-gray-50 h-full"
      aria-labelledby="sidebar-services-heading"
    >
      {/* Invisible SEO Heading */}
      <h2 id="sidebar-services-heading" className="sr-only">
        Sidebar navigation for digital services and business solutions
      </h2>

      {/* Social / Promo Block */}
      <div className="mb-8 top-20">
        <WebsiteDevelopmentSocialMedia />
      </div>

      {renderSection(
        "Digital Setup",
        digitalSetup,
        "bg-gradient-to-r from-orange-500 to-pink-500",
        "text-xl",
        "digital-setup",
      )}

      {renderSection(
        "Digital Growth",
        digitalGrowth,
        "bg-gradient-to-r from-blue-500 to-cyan-500",
        "text-xl",
        "digital-growth",
      )}

      {renderSection(
        "Business Expansion",
        businessExpansion,
        "bg-gradient-to-r from-green-500 to-teal-500",
        "text-xl",
        "business-expansion",
      )}

      {/* Reserved for future CTA / form */}
      <div className="mb-8 sticky top-20" aria-hidden="true">
        {/* <BlogContactForm /> */}
      </div>
    </aside>
  );
}
