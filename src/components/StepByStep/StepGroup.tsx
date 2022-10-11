import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function StepGroup({ children }: Props) {
  return <div className="grid grid-cols-3 gap-5">{children}</div>;
}
