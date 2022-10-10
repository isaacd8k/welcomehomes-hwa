import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function StepGroup({ children }: Props) {
  return <div className="flex">{children}</div>;
}
