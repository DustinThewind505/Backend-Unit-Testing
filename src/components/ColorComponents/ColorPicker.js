import React, { useState } from "react";
import ColorButton from "./ColorButton";

// import data, it's a named import so use { }
import { buttonValues } from "../../data";

export default function ColorPicker() {
  // set state initially to the data
  console.log(buttonValues.value);
  const [colorButtonValues, setColorButtonValues] = useState(buttonValues);
  // set selectedColor to the first data property color.
  const [selectedColor, setSelectedColor] = useState(buttonValues[0].color);

  return (
    <div>
      <p>
        {"Color : "}
        <span className="picker-choice">{selectedColor}</span>
      </p>
      <div className="button_container">
        {colorButtonValues.map((Value, index) => {
          return (
            <ColorButton
              key={index}
              emoji={Value.value}
              colorName={Value.color}
              setColor={setSelectedColor}
            />
          );
        })}
      </div>
    </div>
  );
}
