import React from "react";
import Hero from "./components/Hero";
import { StepByStep } from "./components/StepByStep";
import Locations from "./components/Locations";
import OurModels from "./components/OurModels/OurModels";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className="bg-black">
      <div className="max-w-5xl mx-auto bg-white shadow-lg shadow-blue-500">
        <Hero />
        <StepByStep />
        <Locations />
        <OurModels />
        <MoreInfo />
      </div>
    </div>
  );
}

export default App;
