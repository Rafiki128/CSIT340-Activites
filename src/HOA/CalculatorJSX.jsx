// src/Calculator.js
import React, { useState } from "react";
import "../Components/CalculatorCSS.css";
import Display from "../Components/CalcDisplay";
import ButtonGrid from "../Components/CalcButtons";



export function CalculatorJSX() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (currentInput.trim() === "") return;
      try {
        const evalResult = Function('"use strict";return (' + currentInput + ")")();
        setResult(evalResult);
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setCurrentInput("");
      setResult("");
    } else if (value === "DEL") {
  setCurrentInput((prev) => prev.slice(0, -1)); 
    }   else {
      setCurrentInput((prev) => prev + value);
      setResult("");
    }
  };

  const buttons = [
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "*"],
  ["0", ".", "DEL", "/"],   
];


  return (
    <div className="wrapper">
      <form name="assignment" onSubmit={(e) => e.preventDefault()}>
        <h1>Calculator</h1>
        <div className="card">
          <Display currentInput={currentInput} result={result} />
          <ButtonGrid buttons={buttons} handleClick={handleClick} />
        </div>
      </form>
    </div>
  );
};

