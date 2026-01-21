import React from 'react';
import Link from 'next/link';

const ButtonGray = ({ text, link, className = "" }) => {
  const buttonContent = (
    <button
      className={`
        flex justify-center items-center
        bg-white/[0.1] border border-[#D8D8D666]
        shadow-[inset_0px_-8px_21.6px_#FFFFFF26]
        py-[18.26px] px-[115px]
        rounded-[114.1px]
        text-lg font-medium
        hover:scale-105 hover:opacity-90 transition-all duration-300
        h-[61px]
        ${className}
      `}
    >
      <span className="text-center">{text}</span>
    </button>
  );

  return link ? (
    <Link href={link} className="inline-flex">
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};


export default ButtonGray;
