import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export default function Step({ icon, title, desc }: Props) {
  return (
    <div className="">
      <div className="py-2">
        <span className="bg-black rounded-full p-2">{icon}</span>
      </div>
      <header className="my-2 font-medium">{title}</header>
      <p className="text-sm font-light">{desc}</p>
    </div>
  );
}
