import React, { useState } from "react";
import AbellaCounter from "./Components/AbellaCounter"
import './Abella.css';


export default function Abella(){

	const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "beige",
    minHeight: "100vh",
    padding: "20px",
  };

  const [counter, setCounter] = useState(0);
  const [count,setCount] = useState(0);

  const listOfCounter = [counter];

  const addCounter = () => {
   setCounter(counter+1);

  }

  const resetValue = () => {
  		setCounter(0);
  }

  const addCount = () =>{
  	setCount(count+1);
  }

  const decCount = () =>{
  	setCount(count-1);
  	if(count==0){
  		setCount(0);
  	}
  }

  const resetCount = () =>{
  	setCount(0);
  }



	return (
		<div style = {containerStyle}>
		<h1>Counter Manager</h1>
		<button className= "button-1" onClick = {addCounter}>Add Counter </button>
		<button className= "button-1" onClick = {resetValue}>Reset All </button>
		<p>Count: {count}</p>
      <button className= "button-1" onClick={addCount}>[+]</button>
      <button className= "button-1" onClick={decCount}>[-]</button>
      <button className= "button-1" onClick={resetCount}>reset</button>
		</div>
		)
}