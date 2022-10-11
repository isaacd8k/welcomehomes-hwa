import React from "react";
import Button from "./utils/Button";
import ButtonGroup from "./utils/ButtonGroup";
import MainHeading from "./utils/MainHeading";
import MainSection from "./utils/MainSection";
import SingleImageCarousel from "./utils/SingleImageCarousel";

export default function Hero() {
  return (
    <MainSection>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-3 flex flex-col justify-evenly">
          <MainHeading>We make building a new home possible</MainHeading>
          <p className="text-sm">
            A new home is so much better than a used one. Welcome makes the
            process of building a home super-simple. We handle everything at a
            guaranteed, all-in-one price.
          </p>

          <ButtonGroup>
            <Button main>Our models</Button>
            <Button>Explore towns</Button>
          </ButtonGroup>
        </div>

        <div className="col-span-5">
          <SingleImageCarousel />
        </div>
      </div>
    </MainSection>
  );
}
