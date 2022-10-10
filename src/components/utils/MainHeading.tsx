import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MainHeading({ children }: Props) {
  return <h2 className="font-bold text-xl">{children}</h2>;
}
