import React from "react";
import Hero from "./components/Hero";
import { StepByStep } from "./components/StepByStep";
import Locations from "./components/Locations";
import OurModels from "./components/OurModels";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Hero />
      <StepByStep />
      <Locations />
      <OurModels />
      <MoreInfo />
    </div>
  );
}

export default App;
