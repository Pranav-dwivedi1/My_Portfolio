import React from "react";
import Link from "next/link";

const ButtonOrange = ({ text, link, onClick, className = "", children }) => {
  const button = (
    <button
      type="button"
      onClick={onClick}
      className={`
        bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a]
        border border-[#D8D8D666]
        shadow-[inset_0px_-8px_21.6px_#FFFFFF26]
        py-[18.26px] px-[60px]
        rounded-[114.1px]
        text-lg font-medium
        flex items-center justify-center gap-2
        hover:scale-105 transition-all duration-300
        h-[61px] w-[310px]
        ${className}
      `}
    >
      {children || <span className="text-white">{text}</span>}
    </button>
  );

  return link ? (
    <Link href={link} className="inline-flex">
      {button}
    </Link>
  ) : (
    button
  );
};


export default ButtonOrange;
