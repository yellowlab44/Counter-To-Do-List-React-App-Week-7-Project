// WHAT IT DOES: It receives the array of counters from App.jsx through props.
	// It loops through each counter (c) and creates one <Counter> component for each.
    // It doesn’t own any data itself — it just renders whatever is passed in

import Counter from "./Counter.jsx"; // will not work until Counter.jsx is created

export default function CounterList({ 
    counters, 
    onIncrement, 
    onDecrement, 
    onReset, 
    onDelete, 
    onRename }) {
  // export default means this is the main thing exported from this file to be used in other files
    // Receives props from parent (App.jsx): counters array + handler functions
    if (!counters.length) {
        // ! means "not" - if counters.length is 0 (no counters exist), return this message:
    return <p>No counters yet. Create one above!</p>;
  }
  // else, if there ARE counters, render a Counter component for each counter object:
  return (
    <section style={{ display: "grid", gap: 12 }}>
      {counters.map((c) => (
        // counters is an array of counter objects from App.jsx state 
        // .map() loops through the array, returns a Counter component for each item
        // c is the parameter name representing one counter object during each loop
        <Counter
          key={c.id}
          id={c.id}
          name={c.name}
          value={c.value}
          step={c.step}
          onIncrement={() => onIncrement(c.id)}
          onDecrement={() => onDecrement(c.id)}
          onReset={() => onReset(c.id)}
          onDelete={() => onDelete(c.id)}
          onRename={(newName) => onRename(c.id, newName)}
        />
      ))}
    </section>
  );
}