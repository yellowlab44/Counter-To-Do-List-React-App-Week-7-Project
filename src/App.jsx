// test:  
//export default function App() {
 // return <h1 style={{ padding: 20 }}>Hello from React ✅</h1>;
//}

//import components:
// Add these after creating NewCounterForm.jsx(1st comp):
import {useState, useMemo} from "react";
  // import hooks from React library ^
import NewCounterForm from "./components/NewCounterForm.jsx";

/// Add this line after creating CounterList.jsx(2nd comp):
import CounterList from "./components/CounterList.jsx";

// Add this line after creating useLocalStorage.js (custom hook):
//import useLocalStorage from "./hooks/useLocalStorage.js";

// Add new counter (called by NewCounterForm via onAdd)
export default function App() {
  // 1) App-level state: array of counter objects
  const [counters, setCounters] = useState([]);
  // 2️) Derived total value (this is the line we’re talking about)
  const totalCount = counters.reduce((sum, c) => sum + c.value, 0);
  // 3) Handler the form will call
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
    // spread operator (...) creates a new array with existing counters + new one
    // new counter starts with value of 0
    // you can later add buttons to increment/decrement the value
    // React re-renders the component when state changes
  // each counter object: { id, name, step, count }
  }

/// ADD more functions to update state and pass them to CounterList:
  /// Increment/decrement helper
  function updateValue(id, delta) {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, value: c.value + delta } : c))
    );
  }

  /// Reset one counter
  function resetValue(id) {
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, value: 0 } : c))
    );
  }

  /// Delete one counter
  function deleteCounter(id) {
    setCounters((prev) => prev.filter((c) => c.id !== id));
  }

  /// Rename one counter
  function renameCounter(id, nextName) {
    const trimmed = String(nextName || "").trim();
    if (!trimmed) return;
    setCounters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name: trimmed } : c))
    );
  }

// 4) Render the app UI:
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Multi-Counter</h1>
        <div className="summary">
          <span className="badge">Counters: {counters.length}</span>
          <span className="badge">Total: {totalCount}</span>
        </div>
      </header>
    {/* Inline styles (no CSS file needed): can be changed to className attributes to sync with CSS file ^
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h1 style={{ margin: 0 }}>Multi-Counter</h1>
        <span style={{ opacity: 0.7 }}>Counters: {counters.length}</span>
        <span style={{ opacity: 0.7 }}>Total: {totalCount}</span>
      </header>*/}

      {/* Form to add a new counter */}
      <div style={{ marginTop: 16 }}>
        <NewCounterForm onAdd={handleAddCounter} />
      </div>

      {/* List of counters with all handlers wired up */}
      {/* Add this after creating CounterList.jsx (2nd comp) and the additional functions above:*/}
      <div style={{ marginTop: 16 }}>
        <CounterList
          counters={counters}
          onIncrement={(id) => {
            const c = counters.find((x) => x.id === id);
            if (c) updateValue(id, c.step);
          }}
          onDecrement={(id) => {
            const c = counters.find((x) => x.id === id);
            if (c) updateValue(id, -c.step);
          }}
          onReset={resetValue}
          onDelete={deleteCounter}
          onRename={renameCounter}
        />
      </div>
    </div>
  );
}