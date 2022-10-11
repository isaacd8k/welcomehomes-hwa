import React from "react";
import BoldHeadline from "../utils/BoldHeadline";
import MainSection from "../utils/MainSection";
import Step from "./Step";
import StepGroup from "./StepGroup";
import {
  EditSharp,
  LocationOnSharp,
  ReceiptLongSharp,
} from "@mui/icons-material";

export default function StepByStep() {
  return (
    <MainSection className="bg-stone-800 text-slate-200 grid grid-rows-[1fr] gap-6">
      <BoldHeadline className="text-slate-50">How it works</BoldHeadline>

      <StepGroup>
        <Step
          icon={<EditSharp fontSize="small" />}
          title="Select & Customize"
          desc="Our architects & designers have developed beautiful transitional 
        homes in 3, 4 and 5 bedroom options with more on the way! The designs 
        are thoughtful around real world living and we have tons of uparades to
        make life amazing in vour new home."
        />

        <Step
          icon={<LocationOnSharp fontSize="small" />}
          title="Choose the best location"
          desc="We operate in 703 towns with more towns being added every week. 
        Our team reviews every available parcel in the towns we cover and offer 
        a guaranteed all-in-one price for each."
        />

        <Step
          icon={<ReceiptLongSharp fontSize="small" />}
          title="Financing & Closing"
          desc="Financing is simple with Welcome's banking partners, who can help
        you secure a construction loan that will cover your whole project and 
        transitions to a permanent mortgage when your house is ready."
        />
      </StepGroup>
    </MainSection>
  );
}
