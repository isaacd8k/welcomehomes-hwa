import React from "react";
import { KeyboardArrowRightSharp as ArrowFwd } from "@mui/icons-material";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function RoundedBtnLink({ children, className }: Props) {
  return (
    <button
      className={`rounded-full text-left py-3 px-5 border border-gray-300
      flex justify-between items-stretch group hover:border-blue-600 transition-all
       ${className}`}
    >
      <span className="flex flex-col justify-center group-hover:text-blue-600 transition-colors">
        {children}
      </span>
      <span className="ml-2 text-lg sm:text-base sm:border border-blue-600 rounded-full h-6 w-6 overflow-hidden sm:pl-1">
        <ArrowFwd fontSize="inherit" htmlColor="rgb(37 99 235)" />
      </span>
    </button>
  );
}
