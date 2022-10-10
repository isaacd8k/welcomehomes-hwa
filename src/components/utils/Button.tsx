import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  main?: boolean;
};

export default function Button({ children, className, main = false }: Props) {
  return (
    <button
      className={`border px-6 rounded ${main && "bg-sky-600"} ${className}`}
    >
      {children}
    </button>
  );
}
