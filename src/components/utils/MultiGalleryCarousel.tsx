import { ArrowBackIosSharp, ArrowForwardIosSharp } from "@mui/icons-material";
import React, { CSSProperties } from "react";
import { useInfiniteCarousel } from "../../utils/useInfiniteCarousel";

type GalleryItemProps = {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const GalleryItem = ({
  children,
  className,
  style,
}: GalleryItemProps) => {
  return (
    <div className={`w-96 flex-none p-4 ${className}`} style={style}>
      {children && children}
    </div>
  );
};

export default function MultiGalleryCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const numItems = React.Children.count(children);
  const [slideIndex, goToNextSlide, goToPrevSlide] =
    useInfiniteCarousel(numItems);

  return (
    <>
      <div className="overflow-hidden">
        {/* Slides */}
        <div
          className={`whitespace-nowrap transition-transform duration-300 flex`}
          style={{ transform: `translateX(-${slideIndex * 24}em)` }}
        >
          {children}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row flex-nowrap justify-between text-lg px-2">
        <div>
          {slideIndex > 0 && (
            <button
              className={`px-3 py-2 border rounded-full 
          transition-colors hover:bg-slate-100/100`}
              onClick={() => goToPrevSlide()}
            >
              <ArrowBackIosSharp fontSize="inherit" />
            </button>
          )}
        </div>

        <div>
          {slideIndex < numItems - 1 && (
            <button
              className={`px-3 py-2 border rounded-full 
        transition-colors hover:bg-slate-100/100`}
              onClick={() => goToNextSlide()}
            >
              <ArrowForwardIosSharp fontSize="inherit" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
