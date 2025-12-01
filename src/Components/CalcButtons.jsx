// src/Components/ButtonGrid.js
import React from "react";

const ButtonGrid = ({ buttons, handleClick }) => {
  return (
    <div className="action">
      <table>
        <tbody>
          {buttons.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((btn) => (
                <td key={btn}>
                  <button
                    type="button"
                    onClick={() => handleClick(btn)}
                    className={
                      btn === "="
                        ? "resB"
                        : btn === "C" || btn === "DEL"
                        ? "clear"
                        : ""
                    }
                  >
                    {btn}
                  </button>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              <button
                className="clear"
                type="button"
                onClick={() => handleClick("C")}
              >
                C
              </button>
            </td>
            <td colSpan="2">
              <button
                className="resB"
                type="button"
                onClick={() => handleClick("=")}
              >
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonGrid;
