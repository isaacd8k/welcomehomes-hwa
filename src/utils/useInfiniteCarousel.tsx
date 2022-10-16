import { useState } from "react";
import React from "react-dom";

function useInfiniteCarousel(
  arrLength: number,
  startIndex = 0
): [number, () => void, () => void] {
  const [index, setIndex] = useState(startIndex);

  const setNextIndex = () => {
    setIndex((curIndex) => {
      if (curIndex + 1 >= arrLength) {
        return 0;
      }

      return curIndex + 1;
    });
  };

  const setPrevIndex = () => {
    setIndex((curIndex) => {
      if (curIndex - 1 < 0) {
        return arrLength - 1;
      }

      return curIndex - 1;
    });
  };

  return [index, setNextIndex, setPrevIndex];
}

export { useInfiniteCarousel };
