import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  responsive?: boolean;
};

export default function ButtonGroup({
  children,
  className,
  responsive,
}: Props) {
  return (
    <div
      className={`flex ${className} ${
        responsive &&
        "flex-col justify-center sm:justify-start space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2"
      }`}
    >
      {children}
    </div>
  );
}
