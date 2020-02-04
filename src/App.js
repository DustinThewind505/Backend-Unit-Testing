import React from "react";
// Find file for ColorPicker, export default means you can use
// any name of the component. Convention is the name of the component
import ColorPicker from "./components/ColorComponents/ColorPicker";

import "./styles.css";
// use JavaScript modules to export and import components
function App() {
  return (
    <div className="counter">
      <ColorPicker />
    </div>
  );
}

export default App;
