// src/Components/Display.js
import React from "react";

const Display = ({ currentInput, result }) => {
  return (
    <div className="display">
      <input type="text" id="dis" value={currentInput} readOnly />
      <div id="res" className="res">
        {result}
      </div>
    </div>
  );
};

export default Display;
