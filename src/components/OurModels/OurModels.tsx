import React from "react";
import BoldHeadline from "../utils/BoldHeadline";
import MainSection from "../utils/MainSection";
import SecSubheading from "../utils/SecSubheading";
import TabbedModelViewer from "./components/TabbedModelViewer";
import HomeModels from "../../mock_data/housemodels";

export default function OurModels() {
  return (
    <MainSection>
      <BoldHeadline className="text-center">Our Models</BoldHeadline>
      <SecSubheading className="text-center">
        Compare our models to find the perfect home for you, customized to your
        liking.
      </SecSubheading>
      <TabbedModelViewer models={HomeModels} />
    </MainSection>
  );
}
