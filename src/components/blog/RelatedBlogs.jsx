"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelatedBlogs = () => {
  const relatedBlogData = [
    
    {
      title: " Project Funding: Best Schemes & How to Get Funded",
      desc:"Looking for project funding? Discover top project-based funding options, government schemes, and project fund tips for startups, businesses, and creative professionals.",
      date: "April 02, 2025",
      link: "/blogs/project-funding",
    },
    {
      title: "MSME Award Winners Shine at Vejalpur Startup Festival 2.0",
      desc:    "The MSME Award winners were honored at Vejalpur Startup Festival 2.0, celebrating MSME growth, innovation, and India’s dynamic startup ecosystem.",
      date: "April 01, 2025",
      link: "/blogs/msme-award",
    },
    {
      title: "Best Manufacturing Grants for Startups & MSMEs in 2025",
      desc: " Looking for manufacturing grants? Discover top manufacturing funding options, including government grants for manufacturing and manufacturing startup funding to grow your business. Learn how to apply and secure financial support today!",
      date: "March 28, 2025",
      link: "/blogs/manufacturing-grants",
    },
    {
      title:
        "How to Get Funding for Startup from Government: Top Schemes & Step-by-Step Guide",
      desc: "Wondering how to get funding for startup from government? Explore top startup schemes, eligibility, required documents, and a detailed application guide to secure funds in 2025.",

      date: "March 15, 2025",
      link: "blogs/how-to-get-funding-for-startup-from-government",
    },
    {
      title: " MSME Working Capital: Smart Financing for Daily Operations",
      desc: "Discover how a working capital loan helps MSMEs and small businesses manage cash flow, cover daily expenses, and grow smoothly with flexible repayment options.",
      date: "March 10, 2025",
      link: "blogs/msme-working-capital",
    },
    {
      title:
        "Agri Funding Scheme: Best Agriculture Schemes & Grants for Farmers in 2025",
      desc:
        "Looking for Agri Funding Schemes in 2025? Discover top agriculture funding schemes that offer low-interest loans, grants, and subsidies for farmers and agribusinesses. Learn how to apply and grow your farm with the best agriculture funding options today!",

      date: "Feburary 15, 2025",
      link: "/blogs/agri-funding-scheme",
    },
    {
      title: "Siraaj Event 2025 – Gujarat’s Top MSME & Startup Funding Event",
      desc:
        "Join Siraaj Event 2025 on 13-14 Feb in Gandhinagar – a premier funding event offering ₹75 lakh in funding opportunities, MSME networking, and business growth insights.",

      date: "Feburary 14, 2025",
      link: "/blogs/siraaj-event-2025",
    },
    {
      title: "What is the CGTMSE Scheme: Collateral-Free Loans for MSMEs",
      desc:
        " Learn about the CGTMSE Scheme, offering collateral-free loans for MSMEs in India, simplifying credit access, and supporting business growth with government-backed guarantees.",

      date: "Feburary 04, 2025",
      tags: [{ tagTitle: "Scheme" }, { tagTitle: "Fund" }],
      link: "/blogs/what-is-cgtmse-scheme",
    },
    {
      title:
        "Getting an Online Business Loan up to Rs. 75 Lakh Without Collateral",
      desc:
        "Discover how to secure an online business loan up to Rs. 75 Lakh without collateral. Learn about eligibility, application process, and top lenders offering fast approvals.",
      date: "January 18, 2025",
      tags: [{ tagTitle: "Business Loan" }, { tagTitle: "Collateral" }],
      link: "/blogs/online-business-loan-upto-75-lakh-without-collateral",
    },
    {
      title:
        "Union Budget 2025 Expectations: Key Dates, MSME Boosts, and What to Expect",
      desc:
        "Stay updated on the Union Budget 2025 schedule. Learn about key dates, MSME expectations, and how the budget impacts small businesses.",

      date: "January 28, 2025",
      tags: [{ tagTitle: "Budget 2025" }],
      link: "/blogs/union-budget-2025-expectations",
    },
    {
      title: "Best MSME Consulting Companies in India for Business Growth",
      desc:
        " Explore the best MSME consulting companies in India. Get expert guidance on funding, business strategies, and operations to boost your business success.",
      date: "December 06, 2024",
      tags: [{ tagTitle: "Consulting" }, { tagTitle: "MSME" }],
      link: "/blogs/best-msme-consulting-companies-in-india",
    },
    {
      title:
        "Union Budget 2025: Is Corporate Tax Relief for Startups and MSMEs on the Horizon?",
      desc:
        "Explore the Union Budget 2025 schedule and expectations for corporate tax relief. Learn how startups and MSMEs can benefit from potential tax reforms.",
      date: "January 24, 2025",
      tags: [{ tagTitle: "Tax" }, { tagTitle: "MSME" }],
      link: "/blogs/corporate-tax-relief-for-startups-msmes",
    },
    {
      title: "How Government Grants Really Work: Unveiling The Truth",
      desc:
        " Uncover the secrets of government grants! Learn how they work, who qualifies, and how to apply. Unlock funding opportunities for your business or project today!",
      date: "January 16, 2025",
      tags: [{ tagTitle: "Government Grants" }, { tagTitle: "Grants" }],
      link: "/blogs/how-government-grants-really-work",
    },
    {
      title:
        "Top 10 Announcements That Will Impact Indian MSMEs: Union Budget 2025",
      desc:
        "Discover the top 10 announcements from Union Budget 2025 that will impact Indian MSMEs. Learn about tax relief, credit support, and digitalization incentives for small businesses.",

      date: "January 29, 2025",
      tags: [{ tagTitle: "MSME" }],
      link: "/blogs/top-announcements-that-will-impact-indian-msmes",
    },
    {
      title:
        "Key Income Tax Changes to Expect in Budget 2025 – Detailed Insights",
      desc:
        "The Union Budget 2025 is around the corner, and taxpayers across India are keenly awaiting updates on potential income tax changes to expect in Budget 2025.",
      date: "January 20, 2025",
      tags: [{ tagTitle: "Tax" }, { tagTitle: "Budget 2025" }],
      link: "/blogs/income-tax-changes-to-expect-in-budget-2025",
    },
    {
      title:
        "Union Budget 2025 Expectations For Agriculture Sector: Important Reforms and Initiatives",
      desc:
        " Explore key expectations for the agriculture sector in Union Budget 2025. Discover anticipated policies, subsidies, and reforms aimed at boosting farming and agribusiness growth.",
      date: "January 21, 2025",
      tags: [
        { tagTitle: "Tax" },
        { tagTitle: "Budget 2025" },
        { tagTitle: "MSME" },
      ],
      link: "/blogs/union-budget-2025-expectations-for-agriculture-sector",
    },
    {
      title: "MSME Budget 2025: Big Announcements, Bigger Opportunities!",
      desc:
        "  MSME Budget 2025 is here with major announcements and growth opportunities! Explore new policies, funding support, and incentives for small businesses.",
      date: "January 25, 2025",
      tags: [{ tagTitle: "Budget 2025" }],
      link: "/blogs/msme-budget-2025",
    },
    {
      title: "Seek Investment Scheme: Secure Funding From ₹2.15 Cr to ₹8.66 Cr",
      desc:
        " Seek Investment Scheme offers funding from ₹2.15 Cr to ₹8.66 Cr for business growth. Apply before 9th February 2025 to secure your investment and expand your operations.",
      date: "Feburary 04, 2025",
      tags: [{ tagTitle: "Scheme" }],
      link: "/blogs/seek-investment-scheme",
    },
    {
      title:
        "Grants for Businesses in 2025 – Funding Opportunities You Can’t Miss",
      desc:
        " Explore the latest grants for businesses in 2025. Discover funding opportunities, eligibility criteria, and how to apply for financial support to grow your business!",
      date: "Feburary 01, 2025",
      tags: [{ tagTitle: "Grants" }],
      link: "/blogs/grants-for-businesses-in-2025",
    },

    {
      title: "Banks or NBFCs: Which is Better for Small Business Loans?",
      desc:
        "Compare banks and NBFCs to find the best small business loan option for your needs. Explore their pros, cons, interest rates, and loan terms to make an informed decision.",
      date: "December 19, 2024",
      tags: [{ tagTitle: "Banks" }, { tagTitle: "NBFC" }],
      link: "/blogs/banks-or-nbfcs",
    },
    {
      title: "Commercial CIBIL vs. Consumer CIBIL: What's the Difference",
      desc:
        "Understand the difference between Commercial CIBIL and Consumer CIBIL. Learn how each score impacts personal loans and business loans, and how to improve them.",
      date: "December 28, 2024",
      tags: [{ tagTitle: "CIBIL" }],
      link: "/blogs/commercial-cibil-vs-consumer-cibil",
    },
    {
      title:
        "Difference Between Professional Tax and TDS (Tax Deducted at Source)",
      desc:
        " Discover key differences between Professional Tax and TDS—who pays, how they're collected, their rates, and their overall impact on your earnings today.",
      date: "December 08, 2024",
      tags: [{ tagTitle: "Tax" }, { tagTitle: "Tds" }],
      link: "/blogs/difference-between-professional-tax-and-tds",
    },
    {
      title:
        "How to Start a Cold Storage Business: Everything You Need to Know",
      desc:
        "Learn how to start a cold storage business with this comprehensive guide. Discover key steps, investment tips, and strategies to ensure success in the industry.",
      date: "November 28, 2024",
      tags: [{ tagTitle: "Business" }],
      link: "/blogs/how-to-start-cold-storage-business",
    },
    {
      title:
        "How to Start an EV Charging Station Business in India: A Comprehensive Guide",
      desc:
        "Discover how to start an EV charging station business in India successfully. Learn about regulatory approvals, equipment selection, funding options, and strategies to ensure long-term growth in the fast-evolving electric vehicle market",
      date: "November 27, 2024",
      tags: [{ tagTitle: "Business" }],
      link: "/blogs/how-to-start-ev-charging-station-business-in-india",
    },
    {
      title: "How to Get Business Loan upto Rs.10 Lakh",
      desc:
        "Discover how to secure a business loan up to Rs.10 lakh in India. Get detailed steps, top loan options, eligibility criteria, and success stories today.",
      date: "December 2, 2024",
      tags: [{ tagTitle: "Business" }, { tagTitle: "Business Loan" }],
      link: "/blogs/how-to-get-business-loan-upto-10-lakh",
    },
    {
      title: "Startup vs SME – Understanding Key Differences & Growth Paths",
      desc:
        " Learn the fundamental differences between startups and small-to-medium enterprises (SMEs), from funding and scalability to risk and operational structures. Discover which model best aligns with your business goals.",

      date: "December 5, 2024",
      tags: [{ tagTitle: "Startup" }, { tagTitle: "SME" }],
      link: "/blogs/startup-vs-sme",
    },
    {
      title:
        "Genesis EIR: Up to ₹10 Lakh Non-Refundable Grant for Tech Startups",
      desc:
        "The year 2025 presents exciting opportunities for businesses across India, as new funding areas emerge with increased grant budget allocations.",
      date: "January 10, 2025",
      tags: [{ tagTitle: "Scheme" }],
      link: "/blogs/genesis-eir",
    },
    {
      title: "NAIF Scheme – National Agricultural Infrastructure Fund Guide",
      desc:
        "Discover the NAIF Scheme, a government initiative to enhance agricultural infrastructure in India. Learn about eligibility, benefits, and how to apply for funding to boost your farming operations.",

      date: "December 8, 2024",
      tags: [{ tagTitle: " NAIF" }, { tagTitle: "Scheme" }],
      link: "/blogs/naif-scheme",
    },
    {
      title: "How to Start a Car Rental Business: A Comprehensive Guide",
      desc:
        "Discover how to start a car rental business with this comprehensive guide. Learn the setup process, licensing requirements, marketing strategies, and key tips to grow a successful car rental venture.",

      date: "December 10, 2024",
      tags: [{ tagTitle: "Business" }],
      link: "/blogs/how-to-start-car-rental-business",
    },
    {
      title: "How to Get a Dairy Farm Loan – A Complete Financing Guide",
      desc:
        "Discover how to start a car rental business with this comprehensive guide. Learn the setup process, licensing requirements, marketing strategies, and key tips to grow a successful car rental venture.",

      date: "December 12, 2024",
      tags: [{ tagTitle: "Business" }],

      link: "/blogs/how-to-get-dairy-farm-loan",
    },
    {
      title: "Bhabishyat Credit Card: Empowering MSMEs in West Bengal",
      desc:
        "Discover the Bhabishyat Credit Card scheme, a West Bengal government initiative offering collateral-free loans up to ₹5 lakh for small businesses. Learn more!",

      date: "December 16 2024",
      tags: [{ tagTitle: "Credit Card" }],
      link: "/blogs/bhabishyat-credit-card",
    },
    {
      title:
        "Textile Grants in India – Government Schemes, Funding & Opportunities",
      desc:
        "Explore a range of textile grants in India designed to support the growth and modernization of the textile industry. Learn about government schemes, funding options, eligibility criteria, and expert insights to help your textile business thrive.",

      date: "December 20, 2024",
      tags: [{ tagTitle: "Grants" }, { tagTitle: " Business" }],
      link: "/blogs/textile-grant-in-india",
    },
    {
      title: " Agri Business Grants – Funding & Support for Sustainable Growth",
      desc:
        "Explore available agri business grants to help farmers and entrepreneurs improve productivity, expand market reach, and drive sustainable growth. Learn about eligibility criteria, application processes, and government-backed funding options tailored to support the agricultural sector.",
      date: "December 21, 2024",
      tags: [{ tagTitle: "Grants" }, { tagTitle: "Business" }],
      link: "/blogs/agri-business-grants",
    },
    {
      title: "Uber Boat Kashmir: Ride the Uber Shikara with No Fees for Owners",
      desc:
        "The new Uber Shikara service in Kashmir! Enjoy scenic rides with no fees for Shikara owners, direct fare payments, and easy booking options. Book your Uber Boat ride today!",

      date: "December 23, 2024",
      tags: [{ tagTitle: "News" }],
      link: "/blogs/uber-boat-kashmir",
    },
    {
      title:
        "Sensex Zomato: What’s Driving Zomato’s Performance on the BSE Sensex?",
      desc:
        " Explore Zomato’s impact on the BSE Sensex today and learn how Egniol Services Private Limited helps businesses secure MSME loans, government funding, and equity-based investments, and create compelling pitch decks for growth.",

      date: "December 25, 2024",
      tags: [{ tagTitle: "News" }],
      link: "/blogs/zomato-makes-history",
    },
    {
      title:
        "Genesis Fund: Fueling India’s Startup Dreams with ₹490 Crore Power",
      desc:
        "Discover the Genesis Fund, a ₹490 Crore government-backed initiative fueling India’s startup revolution. Supporting 1,600 tech startups over five years, this fund drives inclusivity, innovation, and long-term growth. Explore its transformative potential!",

      date: "December 28, 2024",
      tags: [{ tagTitle: "Funds" }, { tagTitle: "Schemes" }],
      link: "/blogs/genesis-fund",
    },
    {
      title:
        "Agri Seed Funding Scheme 2025: Get ₹25 Lakh for Your Agri Startup!",
      desc:
        " Looking for funding for your agri startup? The Agri Seed Funding Scheme offers up to ₹25 lakh for eligible startups in agriculture & allied sectors. Apply before 6 Feb 2025!",

      date: "February 7, 2025",
      link: "/blogs/agri-seed-funding-scheme",
    },
    {
      title:
        " Nirmala Sitharaman’s Vision for MSMEs: Building a Stronger Economy",
      desc:
        "  Explore Nirmala Sitharaman’s MSME vision for growth & empowerment. Discover policies boosting small businesses. Click to learn more!",

      date: "February 8, 2025",
      link: " /blogs/nirmala-sitharaman-msme-vision",
    },
    {
      title:
        "Union Budget 2025 Viksit Bharat: MSME Credit Guarantee Cover Doubled to ₹10 Crore ",
      desc:
        "The Union Budget 2025 Viksit Bharat has increased the MSME credit guarantee cover from ₹5 crore to ₹10 crore. Find out how this will benefit small businesses and boost economic growth.  ",

      date: "February 8, 2025",
      link: "/blogs/union-budget-2025-viksit-bharat",
    },
    {
      title: " Difference Between Interim Budget and Union Budget Explained",
      desc:
        " Learn the difference between the Interim Budget and the Union Budget, their significance, and their impact on the economy. Get a clear, in-depth explanation. ",

      date: "February 10, 2025",
      link: "/blogs/difference-between-interim-budget-and-union-budget",
    },
    {
      title: "  Startup India Seed Fund Scheme: Start Strong and Scale Faster",
      desc:
        " Explore the Startup India Seed Fund Scheme to secure early-stage investment and scale your business. Get the support you need to start strong and grow faster. ",

      date: "February 10, 2025",
      link: "/blogs/seed-fund ",
    },
    {
      title:
        "  Delhi Govt New Scheme for MSMEs: Leading Small Businesses To Growth in 2025",
      desc:
        "Explore the Delhi Govt new scheme for MSMEs in 2025. Learn about the financial support, infrastructure upgrades, skill development, and initiatives designed to empower Delhi's small businesses and entrepreneurs.",
      date: "February 11, 2025",
      link: "/blogs/delhi-govt-new-scheme  ",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-gray-100 py-16 mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800">
          Related <span className="text-blue-600">Blogs</span>
        </h2>

        {/* Desktop and Tablet View */}

        <div className="hidden md:block ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="py-8 "
          >
            {relatedBlogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
                  <BlogCard blog={blog} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="py-8"
          >
            {relatedBlogData.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="">
                  <BlogCard blog={blog} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col md:w-[90%] mx-auto">
      <div className="p-6 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags &&
            blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag.tagTitle}
              </span>
            ))}
        </div>

        <Link href={blog.link} className="group">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{blog.desc}</p>
        </Link>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="text-sm text-gray-500">{blog.date}</span>
          <Link
            href={blog.link}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogs;
