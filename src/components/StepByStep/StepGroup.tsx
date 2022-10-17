import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function StepGroup({ children }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-5 px-3 sm:px-0">{children}</div>
  );
}
