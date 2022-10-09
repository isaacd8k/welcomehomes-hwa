import React from "react";
import Hero from "./components/Hero";
import StepByStep from "./components/StepByStep";
import Locations from "./components/Locations";
import OurModels from "./components/OurModels";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <div className="App">
      <Hero />
      <StepByStep />
      <Locations />
      <OurModels />
      <MoreInfo />
    </div>
  );
}

export default App;
