import React from "react";

// import blog from "../../assets/blog/blogHeader.webp";
import Image from "next/image";

export default function BlogHeader() {
  return (
    <>
   <div className="w-[90%] md:w-[80%] flex flex-col md:flex-row justify-around common-header-desktop md:my-12">
  <div className="w-full md:w-1/2">
    <h1 className="font-CustomSemiBold text-white text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-4">
      Our Business Blog Spot
    </h1>
    <p className="text-sm md:text-base text-[#F1F3F6] mb-8 md:mb-4 ">
      Resourceful insight, news and guidance that will help you make your business a successful brand!
    </p>
  </div>

  <div className=" hidden md:block">
    {/* <Image
      src={}
      alt="blogs"
      className="md:h-60 h-64 w-64 object-contain"
      width={256}
      height={256}
      priority
    /> */}
  </div>
</div>
    </>
  );
}
