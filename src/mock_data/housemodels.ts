import Oasis4 from "./img/Welcome-Oasis-4.jpeg";
import Oasis3Flex from "./img/Welcome-Oasis-3-Flex.jpeg";
import Oasis4Grand from "./img/Welcome-Oasis-4-Grand.jpeg";

const DATA: HomeModel[] = [
  {
    name: "Oasis 4",
    imgSrc: Oasis4,
    description:
      "Designed with versatility in mind, the Oasis 4 is a gorgeous, functional home that emphasizes open living, natural light, and connected spaces.",
    areaSqFt: 2970,
    rooms: [
      { roomCountShortDescription: "4 bedrooms" },
      { roomCountShortDescription: "3 bathrooms" },
    ],
    priceDescription: "Starting at $690,000",
  },
  {
    name: "Oasis 3 Flex",
    imgSrc: Oasis3Flex,
    description:
      "Designed for you, the Oasis 3 Flex is meant to be lived in. A beautiful transitional home that blends contemporary and traditional aesthetics into a classic, timeless design, it’s a true escape from city living. Our open floorplan is thoughtful and airy, seamlessly blending the outdoors and indoors to provide a peaceful, welcome retreat that maximizes liveable space.",
    areaSqFt: 3340,
    rooms: [
      { roomCountShortDescription: "3 bedrooms" },
      { roomCountShortDescription: "2 bathrooms" },
      { roomCountShortDescription: "1 powder room" },
    ],
    priceDescription: "Starting at $685,000",
  },
  {
    name: "Oasis 4 Grand",
    imgSrc: Oasis4Grand,
    description:
      "The Oasis 4 Grand is designed for those who want a beautiful, functional home with more space and room to grow. With a thoughtful, airy floor plan and seamless blending of the indoors and outdoors, this peaceful, welcome retreat maximizes livable space. Blending contemporary and traditional aesthetics, the Oasis 4 Grand features classic, timeless designs you will love.",
    areaSqFt: 4543,
    rooms: [
      { roomCountShortDescription: "4 bedrooms" },
      { roomCountShortDescription: "3 bathrooms" },
      { roomCountShortDescription: "1 powder room" },
    ],
    priceDescription: "Starting at $910,000",
  },
];

export type HomeModel = {
  name: string;
  imgSrc: string;
  description: string;
  areaSqFt: number;
  rooms?: {
    roomCountShortDescription: string;
  }[];
  priceDescription: string;
};

export default DATA;
