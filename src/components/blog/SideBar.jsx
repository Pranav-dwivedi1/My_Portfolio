"use client";
import Link from "next/link";
import { Phone } from "lucide-react";
// import ContactForm from "../ContactForm";
import { useState } from "react";
// import BlogContactForm from "./BlogContactForm";
import JoinWorkshop from "./JoinWorkshop";
import FundingOpportunityMsme from "./FundingOpportunityMsme";

export default function SideBar({ propsData }) {
  const businessSetup = [
    {
      title: "Private Limited Company Registration",
      url: "https://www.Yantra.co.in/private-limited-company-registration",
    },
    {
      title: "Limited Liability Partnership Registration",
      url: "https://www.Yantra.co.in/limited-liability-partnership-registration",
    },
    {
      title: "Govt e-Marketplace (GeM) Registration",
      url: "https://www.Yantra.co.in/gem-registration",
    },
    {
      title: "MSME Certification",
      url: "https://www.Yantra.co.in/msme-certification",
    },
    {
      title: "Start up India Certification",
      url: "https://www.Yantra.co.in/msme-certification",
    },
    {
      title: "Tax Exemption Certification",
      url: "https://www.Yantra.co.in/msme-certification",
    },
  ];

  const businessGrowth = [
    {
      title: "Government Grants",
      url: "https://www.Yantra.co.in/government-grants",
    },
    {
      title: "Government Loans",
      url: "https://www.Yantra.co.in/government-business-loans",
    },
    {
      title: "NBFC Loans",
      url: "https://www.Yantra.co.in/nbfc-loan",
    },
    {
      title: "Equity Based Funding",
      url: "https://www.Yantra.co.in/equity-based-funding",
    },
    {
      title: "1:1 Mentorship",
      url: "https://www.Yantra.co.in/contact-us",
    },
    {
      title: "Pitch Deck",
      url: "https://www.Yantra.co.in/pitch-deck-consultation",
    },
  ];

  const businessExpansion = [
    {
      title: "Website Development",
      url: "https://Yantradigital.com/services",
    },
    {
      title: "Digital Marketing",
      url: "https://Yantradigital.com/services",
    },
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
    {
      title: "Whatsapp Marketing",
      url: "https://Yantradigital.com/services/",
    },
  ];

  const businessProtection = [
    {
      title: "Legal & Compliances",
      url: "https://www.Yantra.co.in/legal-and-compliances",
    },
  ];

  const renderSection = (title, items, bgColor, iconClass) => (
    <div className="mb-8">
      <div className={`${bgColor} p-4 rounded-t-xl`}>
        <h2 className="text-lg font-bold text-white flex items-center">
          <span className={`${iconClass} mr-2`}></span>
          {title}
        </h2>
      </div>
      <div className="bg-white rounded-b-xl shadow-md">
        <ul className="divide-y divide-gray-100">
          {items.map((item, index) => (
            <li key={index} className="group">
              <Link
                href={item.url}
                className="flex items-center p-3 hover:bg-gray-50 transition-all duration-200"
              >
                <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:w-2 group-hover:h-2 group-hover:bg-blue-500 transition-all duration-200 mr-3"></span>
                <span className="text-gray-600 group-hover:text-gray-900 text-sm lg:text-base">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 h-full">
      <div className="mb-8 top-20">
        <FundingOpportunityMsme />
        <JoinWorkshop />
      </div>
      {renderSection(
        "Business Setup",
        businessSetup,
        "bg-gradient-to-r from-orange-500 to-pink-500",
        "text-xl"
      )}
      {renderSection(
        "Business Growth",
        businessGrowth,
        "bg-gradient-to-r from-blue-500 to-cyan-500",
        "text-xl"
      )}
      {renderSection(
        "Business Expansion",
        businessExpansion,
        "bg-gradient-to-r from-green-500 to-teal-500",
        "text-xl"
      )}
      {renderSection(
        "Business Protection",
        businessProtection,
        "bg-gradient-to-r from-purple-500 to-indigo-500",
        "text-xl"
      )}
      <div className="mb-8 sticky top-20">{/* <BlogContactForm/> */}</div>
    </div>
  );
}
