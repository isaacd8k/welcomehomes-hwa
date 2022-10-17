import React from "react";

type Props = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export default function Step({ icon, title, desc }: Props) {
  return (
    <div className="mb-6 md:mb-0">
      <div className="flex md:block mb-3 md:mb-0">
        <div className="py-2 mr-4 md:mr-0">
          <span className="bg-black rounded-full p-2">{icon}</span>
        </div>
        <header className="my-2 font-medium">{title}</header>
      </div>
      <p className="text-sm font-light">{desc}</p>
    </div>
  );
}
