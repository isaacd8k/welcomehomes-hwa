import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export default function Step({ icon, title, desc }: Props) {
  return (
    <div className="">
      {/* ICON */}
      <header className="my-2">{title}</header>
      <p>{desc}</p>
    </div>
  );
}
