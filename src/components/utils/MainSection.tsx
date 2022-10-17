import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function MainSection({ children, className }: Props) {
  return (
    <section className={`p-5 sm:p-10 py-14 ${className}`}>{children}</section>
  );
}
