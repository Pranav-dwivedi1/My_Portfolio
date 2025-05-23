import Link from "next/link";
import BlogHeader from "../../components/blogsPage/BlogHeader";

import { FaLinkedin } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import BlogCard from "../../components/blogsPage/BlogCard";

import { RiWhatsappFill } from "react-icons/ri";
export const metadata = {
  title: "Business Blog Spot | Insights, News & Business Growth Tips",
  description:
    "Get expert insights, news, and guidance to grow your MSME into a successful brand. Stay updated with strategies, funding tips, and industry trends.",
  openGraph: {
    title: "Business Blog Spot | Insights, News & Business Growth Tips",
    description:
      "Get expert insights, news, and guidance to grow your MSME into a successful brand. Stay updated with strategies, funding tips, and industry trends.",
    url: "https://www.egniol.co.in/blogs",
    type: "website",
  },
  alternates: {
    canonical: "https://www.egniol.co.in/blogs",
  },
};

export default function Blogs() {
  const blogData = [
   
    {
      title:
        "Sensex Zomato: What’s Driving Zomato’s Performance on the BSE Sensex?",
      desc: " Explore Zomato’s impact on the BSE Sensex today and learn how Egniol Services Private Limited helps businesses secure MSME loans, government funding, and equity-based investments, and create compelling pitch decks for growth.",

      date: "December 25, 2024",
      tags: [{ tagTitle: "News" }],
      link: "/blogs/zomato-makes-history",
    },
    
  ];

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-4 md:pt-44 pt-28 gradient-header w-full">
        <BlogHeader />
      </div>
      <div className="w-full flex justify-center bg-[#F7D89B]">
        <div className="w-4/5  py-12">
          <div className="flex gap-x-4 items-center order-2 md:order-3 mb-7 mt-5 lg:mt-0 lg:mb-0">
            <Link
              href="https://www.linkedin.com/company/egniol-group/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link
              href="https://www.facebook.com/Egniol/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook2 className="text-2xl" />
            </Link>
            <Link
              href="https://www.instagram.com/egniolgroup/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCJRUMTW8E13okgbFDAJ3E9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-3xl" />
            </Link>
            <Link
              href="https://bit.ly/msmesamvaad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill className="text-3xl" />
            </Link>
          </div>
          <div className="flex justify-between border-b border-b-black  my-9 py-4">
            <div>
              <p className="font-semibold text-sm md:text-base">
                BROWSE ALL POSTS
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm md:text-base">
                Browse by:{" "}
                <span className="font-semibold text-black">Topic | Date</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            {blogData.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
