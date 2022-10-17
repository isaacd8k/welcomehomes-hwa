import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  topBarClassName?: string;
};

export default function BoldHeadline({
  children,
  className,
  topBarClassName,
}: Props) {
  return (
    <h2 className={`font-bold text-2xl ${className}`}>
      <span
        className={`before:block before:absolute before:bg-slate-200 before:w-6 before:h-1 before:-top-2 relative inline-block ${topBarClassName}`}
      >
        <span className="relative">{children}</span>
      </span>
    </h2>
  );
}
