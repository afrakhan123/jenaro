import React, { useState } from "react";
import Button from "../Button";

const SizeSelector = ({ selectedSize }) => {
  const [selectedSizeComponent, setSelectedSize] = useState("");
  const hasSelection = selectedSizeComponent !== ""
  return (
    <div className="flex gap-3 mt-3 flex-wrap flex-col items-center sm:flex-row px-2">
      <Button
        onClick={() => {
          selectedSize("s");
          setSelectedSize("s");
        }}
        className={`w-32 transition-all ${selectedSizeComponent === "s" ? "scale-110 focus:ring-0" : hasSelection ? "bg-gray-400": ""}`}
      >
        Small
      </Button>
      <Button
        onClick={() => {
          selectedSize("m");
          setSelectedSize("m");
        }}
        className={`w-32 transition-all ${selectedSizeComponent === "m" ? "scale-110 focus:ring-0" : hasSelection ? "bg-gray-400": ""}`}
      >
        Medium
      </Button>
      <Button
        onClick={() => {
          selectedSize("l");
          setSelectedSize("l");
        }}
        className={`w-32 transition-all ${selectedSizeComponent === "l" ? "scale-110 focus:ring-0" : hasSelection ? "bg-gray-400": ""}`}
      >
        Large
      </Button>
    </div>
  );
};

export default SizeSelector;
