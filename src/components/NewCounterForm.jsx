import { useState } from "react";
// useState ( a react hook) creates “state variables” that React tracks and re-renders when they change
// useState creates a "state variable" called count 
  // count has an initial value of 0
  //gives you setcount function that updates count
  // state hook: always has array [value, setValue] format 
export default function NewCounterForm({ onAdd }) {
  // State hooks to track input values
  const [name, setName] = useState(""); // for the counter name
  const [step, setStep] = useState(1);  // for the increment amount

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // prevent browser reload
    console.log("Form submitted! Name:", name, "Step:", step);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Counter name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} // update name as user types
        />
      </div>

      <div>
        <label>Increment step:</label>
        <input
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(e.target.value)} // update step
        />
      </div>

      <button type="submit">Add Counter</button>
    </form>
  );
}
