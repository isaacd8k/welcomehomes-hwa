import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainHeading({ children, className }: Props) {
  return <h2 className={`font-bold text-xl ${className}`}>{children}</h2>;
}
