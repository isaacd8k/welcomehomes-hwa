import React from "react";
import Button from "./utils/Button";
import ButtonGroup from "./utils/ButtonGroup";
import MainHeading from "./utils/MainHeading";
import MainSection from "./utils/MainSection";
import SingleImageCarousel from "./utils/SingleImageCarousel";

export default function Hero() {
  return (
    <MainSection>
      <MainHeading>We make building a new home possible</MainHeading>
      <p className="p-4 bg-amber-100">
        A new home is so much better than a used one. Welcome makes the process
        of building a home super-simple. We handle everything at & guaranteed,
        all-in-one price.
      </p>

      <ButtonGroup>
        <Button main>Our models</Button>
        <Button>Explore towns</Button>
      </ButtonGroup>
      <SingleImageCarousel />
    </MainSection>
  );
}
