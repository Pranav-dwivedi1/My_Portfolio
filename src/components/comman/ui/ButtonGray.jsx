import React from 'react';
import Link from 'next/link';

const ButtonGray = ({ text, link, fullWidth = false, className = "" }) => {
  const buttonContent = (
    <button className={`
      flex flex-row justify-center bg-white/[0.1] border border-[#D8D8D666] shadow-[inset_0px_-8px_21.6px_#FFFFFF26]
      py-[18.26px] px-[49.06px] rounded-[114.1px] 
      text-lg hover:scale-105 hover:opacity-90 transition-all duration-300 
      font-medium items-center
      w-full h-[61px] md:w-[262.36px]
      ${className}
    `}>
      <span className="text-center">{text}</span>
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

export default ButtonGray;
