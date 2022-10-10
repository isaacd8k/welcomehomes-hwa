import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainSection({ children, className }: Props) {
  return <section className={`p-8 ${className}`}>{children}</section>;
}
