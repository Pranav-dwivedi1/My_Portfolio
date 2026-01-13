import React from "react";
import Link from "next/link";

const ButtonOrange = ({ text, link, fullWidth = false, className = "" }) => {
  const buttonContent = (
    <button
      className={`bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a] border border-[#D8D8D666] shadow-[inset_0px_-8px_21.6px_#FFFFFF26]
        py-[18.26px] px-[49.06px] rounded-[114.1px] 
        text-lg hover:bg-[#E56A3D] hover:scale-105 transition-all duration-300 
        font-medium flex items-center justify-center w-full h-[61px] md:w-[262.36px]
        ${className}`}
    >
      <span className="text-center text-white">{text}</span>{" "}
    </button>
  );

  // If a link is provided, wrap the button in a Link component
  if (link) {
    return (
      <Link href={link} passHref className="w-full md:w-auto">
        {buttonContent}
      </Link>
    );
  }

  // Otherwise, return just the button element
  return buttonContent;
};

export default ButtonOrange;
