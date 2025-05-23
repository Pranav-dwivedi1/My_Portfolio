"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";


import Image from "next/image";
// import ContactModel from "../ContactModel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarouselSlider = ({sliderData,fromPage}) => {
  const [open, setOpen] = useState(false);
  const handleFormOpen = (e) => {
    e.stopPropagation(); // prevents bubbling to arrows
    setOpen(true);
  };

  const CustomArrow = ({ direction, onClick }) => (
    <button
      onClick={(e) => {
        e.stopPropagation(); // important to prevent triggering modal
        onClick();
      }}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-[#03518f] text-white rounded-full p-2 shadow-md transition-all ${
        direction === "prev" ? "left-0 -ml-4" : "right-0 -mr-4"
      }`}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-3 h-3 text-white " />
      ) : (
        <ChevronRight className="w-3 h-3 text-white" />
      )}
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      {open && (
        <ContactModel
          open={open}
          setOpen={setOpen}
          fromSource={fromPage}
          button={"Home phone view why us"}
        />
      )}
      <div className="h-full w-full rounded-2xl pt-4 ">
        <Slider {...settings} className="rounded-2xl">
          {sliderData.map((item, index) => (
            <div className="rounded-2xl" key={index}>
              <div
                className="rounded-2xl cursor-pointer"
                onClick={(e) => handleFormOpen(e)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageCarouselSlider;
