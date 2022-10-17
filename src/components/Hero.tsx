import React from "react";
import Button from "./utils/Button";
import ButtonGroup from "./utils/ButtonGroup";
import Carousel, { CarouselItem } from "./utils/Carousel";
import MainHeading from "./utils/MainHeading";
import MainSection from "./utils/MainSection";

import carouselImg1 from "./../mock_data/img/carousel-1.jpeg";
import carouselImg2 from "./../mock_data/img/carousel-2.jpeg";
import carouselImg3 from "./../mock_data/img/carousel-3.jpeg";
import carouselImg4 from "./../mock_data/img/carousel-4.jpeg";

export default function Hero() {
  return (
    <MainSection className="">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        <div className="col-span-4 md:col-span-3 flex flex-col justify-center md:pr-5">
          <MainHeading>We make building a new home possible</MainHeading>
          <p className="text-sm py-4">
            A new home is so much better than a used one. Welcome makes the
            process of building a home super-simple. We handle everything at a
            guaranteed, all-in-one price.
          </p>

          <ButtonGroup className="flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
            <Button main>Our models</Button>
            <Button>Explore towns</Button>
          </ButtonGroup>
        </div>

        <div className="col-span-5 flex flex-col justify-center">
          <div className="aspect-[3/2] rounded-2xl overflow-hidden">
            <Carousel>
              <CarouselItem
                className="bg-cover"
                style={{ backgroundImage: `url(${carouselImg1})` }}
              />
              <CarouselItem
                className="bg-cover"
                style={{ backgroundImage: `url(${carouselImg2})` }}
              />
              <CarouselItem
                className="bg-cover"
                style={{ backgroundImage: `url(${carouselImg3})` }}
              />
              <CarouselItem
                className="bg-cover"
                style={{ backgroundImage: `url(${carouselImg4})` }}
              />
            </Carousel>
          </div>
        </div>
      </div>
    </MainSection>
  );
}
