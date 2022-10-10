import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ButtonGroup({ children }: Props) {
  return <div className="flex space-x-2">{children}</div>;
}
