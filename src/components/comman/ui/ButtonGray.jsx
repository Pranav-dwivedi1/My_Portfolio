import React from 'react';
import Link from 'next/link';

const ButtonGray = ({ text, link, fullWidth = false, className = "" }) => {
  const buttonContent = (
    <button className={`
      bg-[#404040] bg-opacity-40 text-[#CACACA] 
      py-[18.26px] px-[49.06px] rounded-[114.1px] 
      text-lg hover:opacity-90 transition-all duration-300 
      font-medium border-2 border-[#BEBEBE] 
      h-[61.51px]
      w-full md:w-[262.36px]
      ${className}
    `}>
      {text}
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
