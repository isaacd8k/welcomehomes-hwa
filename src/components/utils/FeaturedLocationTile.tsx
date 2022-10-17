import React from "react";

type Props = {
  imgUrl: string;
  name: string;
  numTownsStr: string;
};

export default function FeaturedLocationTile({
  imgUrl,
  name,
  numTownsStr,
}: Props) {
  return (
    <div className="font-light">
      <div
        className="bg-cover w-full aspect-[16/9] rounded-lg"
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <div className="text-lg font-medium">{name}</div>
      <div>{numTownsStr}</div>
    </div>
  );
}
