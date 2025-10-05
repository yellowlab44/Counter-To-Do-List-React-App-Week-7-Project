import CounterLabel from "./CounterLabel.jsx";
import CounterControls from "./CounterControls.jsx";
// these will not work until you create those components

// WHAT IT DOES: It receives props from CounterList.jsx for one counter:
// id, name, value, step, and handler functions for increment, decrement, reset, delete, rename
// It renders the counter UI: CounterLabel + CounterControls
// It doesn’t own any data itself — it just renders whatever is passed in
// What data is sent from this file to be used in CounterList.jsx?  

export default function Counter({
  id,
  name,
  value,
  step,
  onIncrement,
  onDecrement,
  onReset,
  onDelete,
  onRename,
}) {
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        background: "#fff",
      }}
      aria-live="polite">
      <CounterLabel name={name} value={value} onRename={onRename} />
      <p style={{ marginTop: 8, marginBottom: 12, opacity: 0.8 }}>Step: {step}</p>
      <CounterControls
        value={value}
        step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
        onDelete={onDelete}
      />
    </article>
  );
}