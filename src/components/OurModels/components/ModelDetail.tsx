import React from "react";
import { HomeModel } from "../../../mock_data/housemodels";
import Button from "../../utils/Button";
import ButtonGroup from "../../utils/ButtonGroup";

type Props = {
  model: HomeModel;
  className?: string;
};

export default function ModelDetail({ model, className }: Props) {
  return (
    <div className={`grid grid-cols-10 gap-x-7 ${className}`} key={model.name}>
      {/* Image */}
      <div className="col-span-6 flex flex-col justify-center py-4">
        <img className="rounded-xl" alt={model.name} src={model.imgSrc} />
      </div>

      <div className="col-span-4 p-3 flex flex-col justify-center">
        {/* Header */}
        <header className="flex justify-between mb-3">
          <div className="text-2xl">{model.name}</div>{" "}
          <div>
            <button className="text-xs font-medium rounded-full p-1 px-4 border border-blue-400 text-blue-500">
              Compare
            </button>
          </div>
        </header>

        {/* Description */}
        <div className="text-sm font-thin mb-3">{model.description}</div>

        {/* Meta data */}
        <div className="text-sm text-stone-800">
          <div className="pr-20 mb-3">{model.areaSqFt} square feet</div>
          <div className="flex flex-wrap mb-3">
            {model.rooms?.map((room) => (
              <span className="pr-3">{room.roomCountShortDescription}</span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-3">{model.priceDescription}</div>

        {/* Buttons */}
        <ButtonGroup>
          <Button main>Design your own</Button>
          <Button>Learn more</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
