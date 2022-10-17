import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { HomeModel } from "../../../mock_data/housemodels";
import ModelDetail from "./ModelDetail";

type Props = {
  models: HomeModel[];
};

const variants = {
  enter: (direction: React.MutableRefObject<number>) => {
    return {
      x: direction.current > 0 ? 800 : -800,
      opacity: 0,
      transition: { duration: 0.4 },
    };
  },
  center: {
    opacity: 1,
    zIndex: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: (direction: React.MutableRefObject<number>) => {
    return {
      x: direction.current < 0 ? 800 : -800,
      opacity: 0,
      zIndex: 0,
      transition: { duration: 0.4 },
    };
  },
};

export default function TabbedModelViewer({ models }: Props) {
  // store selected model and delta/direction to calculate animation direction when changing model
  const [selectedModel, setSelectedModel] = useState(0);
  // store direction in ref to access latest value outside of render cycle
  const curDirection = useRef(0);

  return (
    <div>
      <div className="py-4 flex whitespace-nowrap overflow-x-scroll">
        {models.map((model, idx) => (
          <button
            className={`text-sm px-3 pr-10 font-medium
            ${selectedModel === idx ? "text-blue-500" : "text-slate-700"}
            `}
            onClick={() =>
              setSelectedModel((prevIdx) => {
                curDirection.current = idx - prevIdx;
                return idx;
              })
            }
            key={model.name}
          >
            {model.name}
          </button>
        ))}
      </div>

      {/* Model detail */}
      {selectedModel !== null && (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedModel}
            variants={variants}
            custom={curDirection}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <ModelDetail model={models[selectedModel]} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
