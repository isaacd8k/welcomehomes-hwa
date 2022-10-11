import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainHeading({ children, className }: Props) {
  return <h1 className={`font-bold text-3xl ${className}`}>{children}</h1>;
}
