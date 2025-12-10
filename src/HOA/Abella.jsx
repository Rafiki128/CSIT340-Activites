import React, { useState } from "react";
import { AbellaCounter } from "../Components/AbellaCounter.jsx"; 
import '../Abella.css';


export function Abella(){
    const [counters, setCounters] = useState([]);
    const [nextCounterId, setNextCounterId] = useState(1); 

    const addCounter = () => {
        const newCounter = {
            id: nextCounterId, 
        };
        setCounters(prevCounters => [...prevCounters, newCounter]);
        setNextCounterId(prevId => prevId + 1); 
    }

    const resetAllCounters = () => {
        setCounters(prevCounters => 
            prevCounters.map((counter, index) => ({
                ...counter,
                key: index,
            }))
        );
    }
    
    const deleteCounter = (idToDelete) => {
        setCounters(prevCounters => prevCounters.filter(c => c.id !== idToDelete));
    }


    return (
        <div className="counter-manager-container">
            <h1>Counter Manager</h1>

            <div className="manager-controls">
                <button className="button-1" onClick={addCounter}>
                    Add New Counter
                </button>
                <button className="button-reset-all" onClick={resetAllCounters}>
                    Reset All Counters
                </button>
            </div>

            <div className="counters-grid">
                {counters.map(counter => (
                    <AbellaCounter 
                        key={counter.key}
                        id={counter.id}
                        onDelete={deleteCounter}
                    />
                ))}
            </div>
        </div>
    )
}

export default Abella;