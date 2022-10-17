import { ArrowBackIosSharp, ArrowForwardIosSharp } from "@mui/icons-material";
import React, { CSSProperties } from "react";
import { useInfiniteCarousel } from "../../utils/useInfiniteCarousel";

type CarouselItemProps = {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const CarouselItem = ({
  children,
  className,
  style,
}: CarouselItemProps) => {
  return (
    <div
      className={`inline-flex items-center justify-center h-full w-full ${className}`}
      style={style}
    >
      {children && children}
    </div>
  );
};

export default function Carousel({ children }: { children: React.ReactNode }) {
  const numItems = React.Children.count(children);
  const [slideIndex, goToNextSlide, goToPrevSlide] =
    useInfiniteCarousel(numItems);

  return (
    <div className="overflow-hidden h-full relative">
      {/* Buttons */}
      <button
        className={`px-2 py-1 bg-slate-100/80 rounded-full 
        absolute left-2 top-[46%] z-10 transition-colors hover:bg-slate-100/100`}
        onClick={() => goToPrevSlide()}
      >
        <ArrowBackIosSharp fontSize="inherit" />
      </button>
      <button
        className={`px-2 py-1 bg-slate-100/80 rounded-full 
        absolute right-2 top-[46%] z-10 transition-colors hover:bg-slate-100/100`}
        onClick={() => goToNextSlide()}
      >
        <ArrowForwardIosSharp fontSize="inherit" />
      </button>

      {/* Slides */}
      <div
        className={`whitespace-nowrap transition-transform duration-300 h-full`}
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {children}
      </div>
    </div>
  );
}
