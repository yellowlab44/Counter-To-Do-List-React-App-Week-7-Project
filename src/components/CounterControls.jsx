// WHAT IT DOES: It receives props from Counter.jsx: value, step, and handler functions for increment, decrement, reset, delete
// It renders the buttons to control the counter
// It doesn’t own any data itself — it just renders whatever is passed in
// Grandchild of App.jsx (1st comp) via CounterList.jsx (2nd comp) and Counter.jsx (3rd comp)
export default function CounterControls({
  value,
  step,
  onIncrement,
  onDecrement,
  onReset,
  onDelete,
}) {
  const canDecrement = value - step >= 0;
  const canReset = value !== 0;

  const btn = {
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid #ccc",
    background: "#f9fafb",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: 8 }}>
      <button style={btn} onClick={onIncrement}>+{step}</button>
      <button
        style={{ ...btn, opacity: canDecrement ? 1 : 0.5, cursor: canDecrement ? "pointer" : "not-allowed" }}
        onClick={onDecrement}
        disabled={!canDecrement}
        title={!canDecrement ? "Cannot go below 0" : undefined}
      >
        -{step}
      </button>
      <button
        style={{ ...btn, opacity: canReset ? 1 : 0.5, cursor: canReset ? "pointer" : "not-allowed" }}
        onClick={onReset}
        disabled={!canReset}
      >
        Reset
      </button>
      <button
        style={{ ...btn, borderColor: "#fca5a5", background: "#fee2e2" }}
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
}