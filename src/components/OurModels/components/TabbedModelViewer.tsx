import React, { useState } from "react";
import { HomeModel } from "../../../mock_data/housemodels";
import ModelDetail from "./ModelDetail";

type Props = {
  models: HomeModel[];
};

export default function TabbedModelViewer({ models }: Props) {
  const [selectedModel, setSelectedModel] = useState(models.length ? 0 : null);

  return (
    <div>
      <div className="py-4">
        {models.map((model, idx) => (
          <button
            className={`text-sm px-3 pr-10 font-medium
            ${selectedModel === idx ? "text-blue-500" : "text-slate-700"}
            `}
            onClick={() => setSelectedModel(idx)}
            key={model.name}
          >
            {model.name}
          </button>
        ))}
      </div>

      {/* Model detail */}
      {selectedModel !== null && <ModelDetail model={models[selectedModel]} />}
    </div>
  );
}
