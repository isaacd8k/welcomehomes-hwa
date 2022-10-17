import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  main?: boolean;
};

export default function Button({ children, className, main = false }: Props) {
  return (
    <button
      className={`px-6 py-2 text-xs rounded transition-colors
      ${
        main
          ? "bg-sky-600 hover:bg-sky-500 text-slate-50"
          : "border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-slate-50"
      } 
      ${className}`}
    >
      {children}
    </button>
  );
}
