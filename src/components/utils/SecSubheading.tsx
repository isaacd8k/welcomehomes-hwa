import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SecSubheading({ children, className }: Props) {
  return <p className={`text-sm my-5 font-light ${className}`}>{children}</p>;
}
