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
      flex justify-between items-stretch
       ${className}`}
    >
      <span className="flex flex-col justify-center">{children}</span>
      <span className="ml-2 border border-blue-600 rounded-full px-1">
        <ArrowFwd fontSize="inherit" htmlColor="rgb(37 99 235)" />
      </span>
    </button>
  );
}
