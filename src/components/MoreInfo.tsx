import React from "react";
import BoldHeadline from "./utils/BoldHeadline";
import MainSection from "./utils/MainSection";
import RoundedBtnLink from "./utils/RoundedBtnLink";

export default function MoreInfo() {
  return (
    <MainSection className="grid grid-cols-10 gap-3">
      <div className="col-span-4">
        <img src="more-info.png" alt="Young adult reading book in bed" />
      </div>
      <div className="col-span-6 px-3 flex flex-col">
        <BoldHeadline className="mb-10">Browse more information</BoldHeadline>

        <div className="flex flex-col space-y-5">
          <RoundedBtnLink>Frequently asked questions</RoundedBtnLink>
          <RoundedBtnLink>How it works</RoundedBtnLink>
          <RoundedBtnLink>Learn more about our models</RoundedBtnLink>
          <RoundedBtnLink>Check out our land inventory</RoundedBtnLink>
          <RoundedBtnLink>Check out our blog</RoundedBtnLink>
        </div>
      </div>
    </MainSection>
  );
}
