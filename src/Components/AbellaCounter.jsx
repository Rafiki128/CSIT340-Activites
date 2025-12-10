import React, { useState } from 'react';

export function AbellaCounter({ id, onDelete }) { 
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(prev => Math.max(0, prev - 1));
    const reset = () => setCount(0);

    return (
        <div className="counter-card">
            <h3>Counter #{id}</h3>
            <p className="counter-display">{count}</p>
            
            <div className="counter-controls">
                <button className="button-1" onClick={increment}>+</button>
                <button className="button-1" onClick={decrement}>-</button>
            </div>
            
            <button className="button-2" onClick={reset}>Reset</button>
            <button className="button-delete" onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}