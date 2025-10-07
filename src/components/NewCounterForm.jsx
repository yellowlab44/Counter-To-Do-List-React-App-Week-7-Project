import { useState } from "react";
// This brings in React’s built-in Hook for managing component state.
// useState ( a react hook) creates “state variables” that React tracks and re-renders when they change
// useState creates a "state variable" called count 
  // count has an initial value of 0
  //gives you setcount function that updates count
  // state hook: always has array [value, setValue] format 
export default function NewCounterForm({ onAdd }) {
  // Defines your componet ^
  // The { onAdd } in parentheses means this component expects a prop from its parent (we’ll hook that up later in App.jsx).
  // State hooks to track input values, give component memory:
  const [name, setName] = useState(""); // name stores the counter name
  const [step, setStep] = useState(1);  // step stores the increment # amount
        //useState takes an initial value ("" or 1) and returns:
	        //The current value (name, step).
	        //A setter function (setName, setStep) to update it.

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // prevent browser reload
    // preventDefault() stops the browser from doing a full page reload when you submit the form

    const trimmed = name.trim();
    const numericStep = Number(step)
    if (!trimmed) return; // skip empty names
    if (!Number.isFinite(numericStep) || numericStep < 1) return; // skip invalid steps
    
    // Send form data to the App
    onAdd({ name: trimmed, step: numericStep });

    // Reset form inputs
    setName("");
    setStep(1);

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label htmlFor="counterName">Counter name:</label>
        <input
          id="counterName"
          className="input"
          type="text"
          placeholder="Example: Steps walked"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form__row">
        <label htmlFor="step">Increment step:</label>
        <input
          id="step"
          className="input"
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </div>

      <button className="btn" type="submit">Add Counter</button>
    </form>

);
}

// Alternative inline version without CSS file (goes inside return, replace above^):
// <form onSubmit={handleSubmit}> When the form is submitted, it calls handleSubmit
// Which outputs what is rendered in the browser 
    //<div>
    //  <label>Counter name:</label>
      //<input
        //type="text"
        //value={name}
        //onChange={(e) => setName(e.target.value)} // update name as user types
      // />
// </div>
// <div>
// <label>Increment step:</label>
//  <input
//      type="number"
//       min="1"
//       value={step}
//       onChange={(e) => setStep(e.target.value)} // update step
// />
//    </div>
//      <button type="submit">Add Counter</button>
//    </form>