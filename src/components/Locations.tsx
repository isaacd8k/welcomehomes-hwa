import React from "react";
import BoldHeadline from "./utils/BoldHeadline";
import FeaturedLocationTile from "./utils/FeaturedLocationTile";
import MainSection from "./utils/MainSection";
import MultiGalleryCarousel, {
  GalleryItem,
} from "./utils/MultiGalleryCarousel";
import SecSubheading from "./utils/SecSubheading";
import CTImage from "./../mock_data/img/CT.jpeg";
import MDImage from "./../mock_data/img/MD.jpeg";
import NJImage from "./../mock_data/img/NJ.jpeg";
import NYImage from "./../mock_data/img/NY.jpeg";
import PAImage from "./../mock_data/img/PA.jpeg";

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

      <MultiGalleryCarousel>
        <GalleryItem>
          <FeaturedLocationTile
            name="New York"
            imgUrl={NYImage}
            numTownsStr="215 towns available"
          />
        </GalleryItem>
        <GalleryItem>
          <FeaturedLocationTile
            name="Connecticut"
            imgUrl={CTImage}
            numTownsStr="93 towns available"
          />
        </GalleryItem>
        <GalleryItem>
          <FeaturedLocationTile
            name="New Jersey"
            imgUrl={NJImage}
            numTownsStr="128 towns available"
          />
        </GalleryItem>
        <GalleryItem>
          <FeaturedLocationTile
            name="Pennsylvania"
            imgUrl={PAImage}
            numTownsStr="196 towns available"
          />
        </GalleryItem>
        <GalleryItem>
          <FeaturedLocationTile
            name="Maryland"
            imgUrl={MDImage}
            numTownsStr="33 towns available"
          />
        </GalleryItem>
      </MultiGalleryCarousel>
    </>
  );
}
