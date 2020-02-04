import React from "react";

const ColorButton = props => {
  console.log(props);
  // on click, fire setColor function from ColorPicker.js
  // this function will update selectedColor state in ColorPicker.js causing
  // a rerender of ColorPicker at Color: {selectedColor}
  const setColor = () => {
    props.setColor(props.colorName);
  };
  return (
    <button className="color_button" onClick={setColor}>
      <span>{props.emoji}</span>
    </button>
  );
};

export default ColorButton;
