import React from "react";
import Link from "next/link";

const ButtonOrange = ({ text, link, fullWidth = false, className = "" }) => {
  const buttonContent = (
    <button
      className={`bg-gradient-to-r from-[#D65A31] to-[#AD5031]
        text-white py-[18.26px] px-[49.06px]
        rounded-[114.1px] text-lg font-medium
        hover:opacity-90 transition-all duration-300
        shadow-[inset_0px_-8px_12.6px_0px_#EF754D]
        flex items-center justify-center text-center leading-tight
        h-[61.51px]
        ${fullWidth ? "!w-full max-w-full" : "w-[262.13px]"}
        ${className}`}
    >
      <span className="block leading-tight text-[16px] font-gilroy text-center w-full">
        {text}
      </span>
    </button>
  );

  return link ? (
    <Link href={link} passHref className={`block ${fullWidth ? "!w-full max-w-full" : "w-auto"}`}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default ButtonOrange;
