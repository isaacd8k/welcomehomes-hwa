import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function BoldHeadline({ children, className }: Props) {
  return <h2 className={`font-bold text-2xl ${className}`}>{children}</h2>;
}
