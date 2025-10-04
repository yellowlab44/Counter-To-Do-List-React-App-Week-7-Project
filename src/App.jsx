// test:  
//export default function App() {
 // return <h1 style={{ padding: 20 }}>Hello from React ✅</h1>;
//}

//import { useState, useMemo } from "react";

//import components:
//import CounterList from "./components/CounterList.jsx";
import {useState} from "react";
import NewCounterForm from "./components/NewCounterForm.jsx";
//import useLocalStorage from "./hooks/useLocalStorage.js";

export default function App() {
  // 1) App-level state: array of counter objects
  const [counters, setCounters] = useState([]);
  // 2) Handler the form will call
  function handleAddCounter({ name, step }) {
    const id = String(Date.now()); // creates a simple unique ID based on timestamp
    const trimmed = name.trim();
    const numericStep = Number(step) || 1;

    if (!trimmed) return; // skip empty names
    // ! means "not" - if name is empty, return (do nothing)
    

    setCounters((prev) => [...prev,
      { id, name: trimmed, step: numericStep, value: 0 },
    ]);
    // makes a new array that contains the old items + the new one: setCounters([...counters, newCounter]);
      // creates a fresh copy of the array, which React will always notice as “new,” causing a proper re-render
      // setCounters((prev) => [...prev, newCounter]) React passes the previous state value (prev) into your function, and you return the new value
    //spread operator (...) creates a new array with existing counters + new one
    // new counter starts with value of 0
    // you can later add buttons to increment/decrement the value
    // React re-renders the component when state changes
  // each counter object: { id, name, step, count }
  }
  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>Multi-Counter</h1>

      {/* Pass the onAdd function to the form */}
      <NewCounterForm onAdd={handleAddCounter} />

      {/* Minimal preview so you can SEE it working right now */}
      <h2 style={{ marginTop: 16 }}>Counters:</h2>

      {/* Render a message if no counters, if there are counters, list them */}
      {counters.length === 0 ? (
        <p>No counters yet.</p>
      ) : (
        <ul>
          {counters.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong> — value: {c.value} (step {c.step})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}