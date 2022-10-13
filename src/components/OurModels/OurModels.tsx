import React from "react";
import BoldHeadline from "../utils/BoldHeadline";
import MainSection from "../utils/MainSection";
import SecSubheading from "../utils/SecSubheading";

export default function OurModels() {
  return (
    <MainSection>
      <BoldHeadline className="text-center">Our Models</BoldHeadline>
      <SecSubheading className="text-center">
        Compare our models to find the perfect home for you, customized to your
        liking.
      </SecSubheading>
      <div className="bg-yellow-100">Tabbed model viewer</div>
    </MainSection>
  );
}
