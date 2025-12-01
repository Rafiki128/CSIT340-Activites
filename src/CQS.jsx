import React, { useState } from "react";
import "./Components/cqsCSS.css";
 
export default function CashierQueue() {
  const [queue, setQueue] = useState([]);
  const [priority, setPriority] = useState([]);
  const [regular1, setRegular1] = useState([]);
  const [regular2, setRegular2] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
 
  const addCustomer = () => {
    const newCustomer = {
      id: idCounter,
      number: Math.floor(Math.random() * 100) + 1,
    };
    setQueue([...queue, newCustomer]);
    setIdCounter(idCounter + 1);
  };
 
  const assignCustomer = () => {
    if (queue.length === 0) return;
    const [first, ...rest] = queue;
 
    if (priority.length === 0) {
      setPriority([...priority, first]);
    } else if (regular1.length === 0) {
      setRegular1([...regular1, first]);
    } else if (regular2.length === 0) {
      setRegular2([...regular2, first]);
    } else {
      // if all have someone, assign randomly
      const cashiers = [priority, regular1, regular2];
      const setCashiers = [setPriority, setRegular1, setRegular2];
      const randomIndex = Math.floor(Math.random() * 3);
      setCashiers[randomIndex]([...cashiers[randomIndex], first]);
    }
 
    setQueue(rest);
  };
 
  const assignAll = () => {
  queue.forEach((customer) => {
    const randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
      setPriority((prev) => [...prev, customer]);
    } else if (randomIndex === 1) {
      setRegular1((prev) => [...prev, customer]);
    } else {
      setRegular2((prev) => [...prev, customer]);
    }
  });
  setQueue([]);
};
 
  const releaseCustomer = (cashier, setCashier) => {
    if (cashier.length > 0) {
      const [, ...rest] = cashier;
      setCashier(rest);
    }
  };
 
  const cashierBox = (title, customers, setCustomers) => (
    <div className="cashier-card">
      <h3>{title}</h3>
      {customers.length > 0 ? (
        <div className="serving">
          <p>
            Now Serving → ID: {customers[0].id} | #{customers[0].number}
          </p>
          {customers.length > 1 && (
            <p className="queue">
              Queue:{" "}
              {customers
                .slice(1)
                .map((c) => `#${c.number}`)
                .join(", ")}
            </p>
          )}
          <button onClick={() => releaseCustomer(customers, setCustomers)}>
            Finish Current
          </button>
        </div>
      ) : (
        <p>No customers</p>
      )}
    </div>
  );
 
  return (
    <div className="app">
      <div className="queue-panel">
        <h2>Cashier Queue</h2>
        <div className="buttons">
          <button onClick={addCustomer}>Add Customer</button>
          <button onClick={assignCustomer}>Assign Customer</button>
          <button onClick={assignAll}>Assign All Customer</button>
        </div>
 
        <div className="waiting">
          <h3>Waiting Queue</h3>
          {queue.length === 0 ? (
            <p>No customers waiting</p>
          ) : (
            <ul>
              {queue.map((c) => (
                <li key={c.id}>
                  ID: {c.id} | #{c.number}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
 
      <div className="cashiers">
        <h2>Cashiers</h2>
        <div className="cashier-list">
          {cashierBox("Priority Cashier", priority, setPriority)}
          {cashierBox("Regular Cashier 1", regular1, setRegular1)}
          {cashierBox("Regular Cashier 2", regular2, setRegular2)}
        </div>
      </div>
    </div>
  );
}
 