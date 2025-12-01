import React, { useState } from "react";

const FruitList = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  const [fruitInput, setFruitInput] = useState("");
  const [fruits, setFruits] = useState([]);

  const addFruit = () => {
    if (fruitInput.trim() === "") return;
    setFruits([...fruits, fruitInput]);
    setFruitInput("");
  };

  const deleteFruit = (indexToDelete) => {
    const updatedFruits = fruits.filter((_, index) => index !== indexToDelete);
    setFruits(updatedFruits);
  };

  const fruitItems = fruits.map((fruit, index) => (
    <li key={index} style={{ marginBottom: "8px" }}>
      {fruit}{" "}
      <button onClick={() => deleteFruit(index)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  ));

  return (
    <div style={containerStyle}>
      <h2>Favourite Fruits</h2>

      <input
        type="text"
        placeholder="Enter a fruit"
        value={fruitInput}
        onChange={(e) => setFruitInput(e.target.value)}
      />

      <button style={{ display: "inline-flex", marginTop: "10px" }} onClick={addFruit}>
        Add Fruit
      </button>

      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {fruitItems}
      </ul>
    </div>
  );
};

export default FruitList;
