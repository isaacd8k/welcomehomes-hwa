import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  main?: boolean;
};

export default function Button({ children, className, main = false }: Props) {
  return (
    <button
      className={`border border-sky-600 px-6 py-2 text-xs rounded ${
        main && "bg-sky-600 text-slate-50"
      } ${className}`}
    >
      {children}
    </button>
  );
}
