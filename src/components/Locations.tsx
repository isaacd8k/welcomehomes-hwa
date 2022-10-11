import React from "react";
import BoldHeadline from "./utils/BoldHeadline";
import MainSection from "./utils/MainSection";
import SecSubheading from "./utils/SecSubheading";

export default function Locations() {
  return (
    <>
      <MainSection className="py-7">
        <BoldHeadline className="text-center">
          Live where you want to live
        </BoldHeadline>
        <SecSubheading className="text-center mb-0">
          We currently service the Greater Metro areas of New York City,
          Washington D.C. & Philadelphia. <br />
          Check back as we add more regions throughout the country
        </SecSubheading>
      </MainSection>

      <div className="bg-red-100">Carousel #2</div>
    </>
  );
}
