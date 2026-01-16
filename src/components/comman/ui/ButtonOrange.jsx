import React from "react";
import Link from "next/link";

const ButtonOrange = ({
  text,
  link,
  onClick,
  fullWidth = false,
  className = "",
  children,
}) => {
  const button = (
    <button
  type="button"
  onClick={onClick}
  className={`bg-gradient-to-br from-[#2222a0] via-[#3e64ba] to-[#0d1e6a]
    border border-[#D8D8D666]
    shadow-[inset_0px_-8px_21.6px_#FFFFFF26]
    py-[18.26px] px-[49.06px] rounded-[114.1px]
    text-lg hover:scale-105 transition-all duration-300
    font-medium flex items-center justify-center gap-2
    h-[61px] w-full md:w-[262.36px]
    ${className}`}
>
  {children || <span className="text-white">{text}</span>}
</button>

  );

  // If link is provided → navigation button
  if (link) {
    return (
      <Link href={link} className={fullWidth ? "w-full" : "md:w-auto"}>
        {button}
      </Link>
    );
  }

  // Otherwise → normal button (scroll, modal, etc.)
  return button;
};

export default ButtonOrange;
